import { SPACE_STATE } from '.'

// Calculate the best space for the AI to fill to get a perfect game.
export const calculateAITurn = (grid: any, moveCount: any) => {
  let aiSpace: any = aiCanWin(grid)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  aiSpace = aiCanBlock(grid)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  aiSpace = aiCanBlockFork(grid, moveCount)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  aiSpace = aiCanCenter(grid)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  aiSpace = aiCanFillOppositeCorner(grid)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  aiSpace = aiCanFillEmptyCorner(grid)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  aiSpace = aiCanFillEmptySide(grid)

  if (Number.isInteger(aiSpace)) {
    return aiSpace
  }

  return null
}

// Convert row, col to grid index.
const convertCordToIndex = (row: number, col: number) => {
  return row * 3 + col
}
/**
 * Check if AI can win
 * @returns Space for AI to win
 */
const aiCanWin = (grid: any) => {
  let count = 0
  let row, col

  // Check Rows
  for (let i = 0; i < 3; ++i) {
    count = 0

    for (let j = 0; j < 3; ++j) {
      if (grid[convertCordToIndex(i, j)] === SPACE_STATE.AI) {
        count++
      } else if (grid[convertCordToIndex(i, j)] === SPACE_STATE.PLAYER) {
        count--
      } else if (grid[convertCordToIndex(i, j)] === SPACE_STATE.EMPTY) {
        row = i
        col = j
      }
    }

    // Has two consecutive spaces, return third to win.
    if (count === 2) {
      return convertCordToIndex(row, col)
    }
  }

  // Check Cols
  for (let i = 0; i < 3; ++i) {
    count = 0

    for (let j = 0; j < 3; ++j) {
      if (grid[convertCordToIndex(j, i)] === SPACE_STATE.AI) {
        count++
      } else if (grid[convertCordToIndex(j, i)] === SPACE_STATE.PLAYER) {
        count--
      } else if (grid[convertCordToIndex(j, i)] === SPACE_STATE.EMPTY) {
        row = j
        col = i
      }
    }

    // Has two consecutive spaces, return third to win.
    if (count === 2) {
      return convertCordToIndex(row, col)
    }
  }

  count = 0

  // Check Diag
  for (let i = 0; i < 3; ++i) {
    if (grid[convertCordToIndex(i, i)] === SPACE_STATE.AI) {
      count++
    } else if (grid[convertCordToIndex(i, i)] === SPACE_STATE.PLAYER) {
      count--
    } else if (grid[convertCordToIndex(i, i)] === SPACE_STATE.EMPTY) {
      row = i
      col = i
    }
  }

  // Has two consecutive spaces, return third to win.
  if (count === 2) {
    return convertCordToIndex(row, col)
  }

  count = 0

  // Check Anti-Diag
  for (let i = 0; i < 3; ++i) {
    if (grid[convertCordToIndex(i, 3 - 1 - i)] === SPACE_STATE.AI) {
      count++
    } else if (grid[convertCordToIndex(i, 3 - 1 - i)] === SPACE_STATE.PLAYER) {
      count--
    } else if (grid[convertCordToIndex(i, 3 - 1 - i)] === SPACE_STATE.EMPTY) {
      row = i
      col = 3 - 1 - i
    }
  }

  // Has two consecutive spaces, return third to win.
  if (count === 2) {
    return convertCordToIndex(row, col)
  }

  return null
}

/**
 * Ai checks if it can block opponents win
 * @returns Can ai block opponent
 */
function aiCanBlock(grid: any) {
  let count = 0
  let row, col

  // Check Rows
  for (let i = 0; i < 3; ++i) {
    count = 0

    for (let j = 0; j < 3; ++j) {
      if (grid[convertCordToIndex(i, j)] === SPACE_STATE.PLAYER) {
        count++
      } else if (grid[convertCordToIndex(i, j)] === SPACE_STATE.AI) {
        count--
      } else if (grid[convertCordToIndex(i, j)] === SPACE_STATE.EMPTY) {
        row = i
        col = j
      }
    }

    // Opponent two consecutive spaces, return third to block.
    if (count === 2) {
      return convertCordToIndex(row, col)
    }
  }

  // Check Cols
  for (let i = 0; i < 3; ++i) {
    count = 0

    for (let j = 0; j < 3; ++j) {
      if (grid[convertCordToIndex(j, i)] === SPACE_STATE.PLAYER) {
        count++
      } else if (grid[convertCordToIndex(j, i)] === SPACE_STATE.AI) {
        count--
      } else if (grid[convertCordToIndex(j, i)] === SPACE_STATE.EMPTY) {
        row = j
        col = i
      }
    }

    // Opponent two consecutive spaces, return third to block.
    if (count === 2) {
      return convertCordToIndex(row, col)
    }
  }

  count = 0

  // Check Diag
  for (let i = 0; i < 3; ++i) {
    if (grid[convertCordToIndex(i, i)] === SPACE_STATE.PLAYER) {
      count++
    } else if (grid[convertCordToIndex(i, i)] === SPACE_STATE.AI) {
      count--
    } else if (grid[convertCordToIndex(i, i)] === SPACE_STATE.EMPTY) {
      row = i
      col = i
    }
  }

  // Opponent two consecutive spaces, return third to block.
  if (count === 2) {
    return convertCordToIndex(row, col)
  }

  count = 0

  // Check Anti-Diag
  for (let i = 0; i < 3; ++i) {
    if (grid[convertCordToIndex(i, 3 - 1 - i)] === SPACE_STATE.PLAYER) {
      count++
    } else if (grid[convertCordToIndex(i, 3 - 1 - i)] === SPACE_STATE.AI) {
      count--
    } else if (grid[convertCordToIndex(i, 3 - 1 - i)] === SPACE_STATE.EMPTY) {
      row = i
      col = 3 - 1 - i
    }
  }

  // Opponent two consecutive spaces, return third to block.
  if (count === 2) {
    return convertCordToIndex(row, col)
  }

  return null
}

/**
 * Ai checks if it can block a fork
 * @returns Can ai block opponent
 */
function aiCanBlockFork(grid: any, moveCount: number) {
  if (moveCount === 3) {
    if (
      grid[convertCordToIndex(0, 0)] === SPACE_STATE.PLAYER &&
      grid[convertCordToIndex(1, 1)] === SPACE_STATE.AI &&
      grid[convertCordToIndex(2, 2)] === SPACE_STATE.PLAYER
    ) {
      aiCanFillEmptySide(grid)
      return true
    }
    if (
      grid[convertCordToIndex(2, 0)] === SPACE_STATE.PLAYER &&
      grid[convertCordToIndex(1, 1)] === SPACE_STATE.AI &&
      grid[convertCordToIndex(0, 2)] === SPACE_STATE.PLAYER
    ) {
      aiCanFillEmptySide(grid)
      return true
    }
    if (
      grid[convertCordToIndex(2, 1)] === SPACE_STATE.PLAYER &&
      grid[convertCordToIndex(1, 2)] === SPACE_STATE.PLAYER
    ) {
      return convertCordToIndex(2, 2)
    }
  }

  return null
}

/**
 * Ai checks if it can fill center square
 * @returns Can ai fill center square
 */
function aiCanCenter(grid: any) {
  if (grid[convertCordToIndex(1, 1)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(1, 1)
  }
  return false
}

/**
 * Ai checks if it can fill opposite corner
 * @returns Can ai fill opposite corner
 */
function aiCanFillOppositeCorner(grid: any) {
  if (
    grid[convertCordToIndex(0, 0)] === SPACE_STATE.PLAYER &&
    grid[convertCordToIndex(2, 2)] === SPACE_STATE.EMPTY
  ) {
    return convertCordToIndex(2, 2)
  }

  if (
    grid[convertCordToIndex(2, 2)] === SPACE_STATE.PLAYER &&
    grid[convertCordToIndex(0, 0)] === SPACE_STATE.EMPTY
  ) {
    return convertCordToIndex(0, 0)
  }

  if (
    grid[convertCordToIndex(0, 2)] === SPACE_STATE.PLAYER &&
    grid[convertCordToIndex(2, 0)] === SPACE_STATE.EMPTY
  ) {
    return convertCordToIndex(2, 0)
  }

  if (
    grid[convertCordToIndex(2, 0)] === SPACE_STATE.PLAYER &&
    grid[convertCordToIndex(0, 2)] === SPACE_STATE.EMPTY
  ) {
    return convertCordToIndex(0, 2)
  }

  return null
}

/**
 * Ai checks if it can fill empty corner
 * @returns Can ai fill empty corner
 */
function aiCanFillEmptyCorner(grid: any) {
  if (grid[convertCordToIndex(0, 0)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(0, 0)
  }

  if (grid[convertCordToIndex(0, 2)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(0, 2)
  }

  if (grid[convertCordToIndex(2, 0)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(2, 0)
  }

  if (grid[convertCordToIndex(2, 2)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(2, 2)
  }

  return null
}

/**
 * Ai checks if it can fill empty side
 * @returns Can ai fill empty side
 */
function aiCanFillEmptySide(grid: any) {
  if (grid[convertCordToIndex(0, 1)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(0, 1)
  }

  if (grid[convertCordToIndex(1, 0)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(1, 0)
  }

  if (grid[convertCordToIndex(1, 2)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(1, 2)
  }

  if (grid[convertCordToIndex(2, 1)] === SPACE_STATE.EMPTY) {
    return convertCordToIndex(2, 1)
  }

  return null
}
