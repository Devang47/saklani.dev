import React, { useState, useEffect } from 'react'
import { calculateAITurn } from './Ai'
import confetti from 'canvas-confetti'
import posthog from 'posthog-js'

const GAME_STATE = {
  PLAYER_TURN: 'player_turn',
  AI_TURN: 'ai_turn',
  PLAYER_WON: 'player_won',
  AI_WON: 'player_o_won',
  DRAW: 'game_draw',
  ERROR: 'game_error'
}

export const SPACE_STATE = {
  PLAYER: 'player_filled',
  AI: 'ai_filled',
  EMPTY: 'empty_space'
}

const GRID_LENGTH = 9
const MAX_MOVES = 10

const getSquareSymbol = (spaceStatus: keyof typeof SPACE_STATE) => {
  switch (spaceStatus) {
    case SPACE_STATE.PLAYER: {
      return 'X'
    }
    case SPACE_STATE.AI: {
      return 'O'
    }
    case SPACE_STATE.EMPTY: {
      return ''
    }
    default: {
      return ''
    }
  }
}

const createEmptyGrid = () => {
  return Array(GRID_LENGTH).fill(SPACE_STATE.EMPTY)
}

const getSpaceStateClass = (
  spaceState: string,
  gameState: string,
  winSpaces: any[],
  spaceIndex: any[]
) => {
  let space = ''

  if (spaceState === SPACE_STATE.AI) {
    space += 'o-player'

    if (gameState === GAME_STATE.AI_WON && winSpaces.includes(spaceIndex)) {
      space += ' o-winner'
    }
  }

  if (spaceState === SPACE_STATE.PLAYER) {
    space += 'x-player'

    if (gameState === GAME_STATE.PLAYER_WON && winSpaces.includes(spaceIndex)) {
      space += ' x-winner'
    }
  }

  return space
}

const isDraw = (moveCount: number) => {
  return moveCount === MAX_MOVES
}

const checkWinner = (grid: any, moveCount: number) => {
  const winnerSpaces = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  if (isDraw(moveCount)) {
    return {
      winner: GAME_STATE.DRAW,
      winSpaces: []
    }
  }

  for (let i = 0; i < winnerSpaces.length; i++) {
    const [a, b, c] = winnerSpaces[i]

    if (
      grid[a] === SPACE_STATE.EMPTY &&
      grid[b] === SPACE_STATE.EMPTY &&
      grid[c] === SPACE_STATE.EMPTY
    ) {
      continue
    }

    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      let winner = null

      if (grid[a] === SPACE_STATE.PLAYER) {
        winner = GAME_STATE.PLAYER_WON
      } else {
        winner = GAME_STATE.AI_WON
      }

      return {
        winner: winner,
        winSpaces: [a, b, c]
      }
    }
  }

  return null
}

export default function Game() {
  // Grid State
  const [grid, setGrid] = useState(createEmptyGrid())
  // Count of all moves made
  const [moveCount, setMoveCount] = useState(0)
  // Spaces used to get a win
  const [winSpaces, setWinSpaces] = useState([])
  // Current game state
  const [gameState, setGameState] = useState(GAME_STATE.PLAYER_TURN)

  // Whenever the game state changes
  // from player interaction,
  // we handle logic flow in
  // here.
  useEffect(() => {
    // Player took turn,
    // check if game still running.
    let winner = checkWinner(grid, moveCount)

    // If the player won, update state to reflect.
    if (winner) {
      setGameState(winner.winner)
      setWinSpaces(winner.winSpaces)

      if (winner.winner === GAME_STATE.PLAYER_WON) {
        posthog.capture(`$$Player_Won`)

        let end = Date.now() + 3 * 1000

        let colors = ['#bb0000', '#ffffff', '#2AB7CA', '#EEB902']
        ;(function frame() {
          confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          })
          confetti({
            particleCount: 4,
            angle: -90,
            spread: 55,
            origin: { y: -0.8 },
            colors: colors
          })
          confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
          })
          if (Date.now() < end) {
            requestAnimationFrame(frame)
          }
        })()
      } else {
        posthog.capture(`$$AI_Won`)
      }

      return
    }

    // Run AI turn
    setTimeout(() => {
      if (gameState === GAME_STATE.AI_TURN && moveCount < 10) {
        const aiSpace = calculateAITurn(grid, moveCount)
        setMoveCount((oldMoves) => {
          return oldMoves + 1
        })
        fillGridSpace(aiSpace, SPACE_STATE.AI)
        winner = checkWinner(grid, moveCount)
      }

      // If AI won, update state to reflect, else
      // go back to player turn.
      if (winner) {
        setGameState(winner.winner)
        setWinSpaces(winner.winSpaces)
      } else {
        setGameState(GAME_STATE.PLAYER_TURN)
      }
    }, 100)
  }, [gameState, grid])

  // Reset state to default values
  const reset = () => {
    setGrid(createEmptyGrid())
    setGameState(GAME_STATE.PLAYER_TURN)
    setMoveCount(0)
    setWinSpaces([])
  }

  // Fill in a grid box with status
  const fillGridSpace = (gridIndex: number, spaceStatus: any) => {
    setGrid((oldGrid) => {
      oldGrid[gridIndex] = spaceStatus
      return [...oldGrid]
    })
  }

  // Fill in the grid array with the player space state.
  const handlePlayerClick = (gridIndex: number) => {
    if (gameState !== GAME_STATE.PLAYER_TURN) {
      return
    }

    if (grid[gridIndex] === SPACE_STATE.EMPTY) {
      fillGridSpace(gridIndex, SPACE_STATE.PLAYER)
      setGameState(GAME_STATE.AI_TURN)
      setMoveCount((oldMoves) => {
        return oldMoves + 1
      })
    }
  }

  const Square = (props: any) => {
    return (
      <div
        className={
          'shadow-md h-12 w-12 rounded-lg font-mono bg-neutral-800 text-2xl text-center cursor-default font-light flex items-center justify-center ' +
          getSpaceStateClass(
            grid[props.squareIndex],
            gameState,
            winSpaces,
            props.squareIndex
          )
        }
        onClick={() => {
          handlePlayerClick(props.squareIndex)
        }}
      >
        {getSquareSymbol(grid[props.squareIndex]) === 'X' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
            ></path>
          </svg>
        ) : getSquareSymbol(grid[props.squareIndex]) == 'O' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
            ></path>
          </svg>
        ) : (
          ''
        )}
      </div>
    )
  }

  return (
    <>
      <section className="game-board pt-6 pb-10">
        <div className="max-w-md mx-auto">
          <div className="max-w-lg flex flex-col gap-5 mx-auto">
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={0} />
              <Square squareIndex={1} />
              <Square squareIndex={2} />
            </div>
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={3} />
              <Square squareIndex={4} />
              <Square squareIndex={5} />
            </div>
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={6} />
              <Square squareIndex={7} />
              <Square squareIndex={8} />
            </div>
          </div>

          <div className="text-center">
            <button
              className="bg-neutral-800 border text-neutral-200 tracking-wide border-neutral-700 px-4 py-1 text-[13px] font-medium mt-10 rounded shadow-lg"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
