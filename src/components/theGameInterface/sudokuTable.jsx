import React, { useState } from "react";
import "./sudokuTable.css";
import { bored } from "./sudokuNumbers";
import ResetButton from "./resetButton";
import NewGameButton from "./newGameButton";

const SudokuTable = () => {
  const [sudokuBored, setSudokuBored] = useState(getDeepCopy(bored));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function handelChange(e, row, col) {
    let val = parseInt(e.target.value) || -1,
      grid = getDeepCopy(sudokuBored);
    if (val === -1 || (val >= 1 && val <= 9)) {
      grid[row][col] = val;
    }

    setSudokuBored(grid);
  }

  function checkSudokuArr() {
    let sudoku = getDeepCopy(bored);
    solver(sudoku);
    let compare = compareSudoku(sudokuBored, sudoku);

    if (compare.isCompleted) {
      alert("you have solved the game well done");
    } else if (compare.notCompleted) {
      alert("keep going still more numbers to finish");
    } else {
      alert("their are some mistake try to find it");
    }
  }

  function compareSudoku(current, solved) {
    let res = {
      isCompleted: true,
      notCompleted: true,
    };
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (current[i][j] != solved[i][j]) {
          if (current[i][j] != -1) {
            res.notCompleted = false;
          }
          res.isCompleted = false;
        }
      }
    }
    return res;
  }

  function checkRow(grid, row, num) {
    return grid[row].indexOf(num) === -1;
  }
  function checkCol(grid, col, num) {
    return grid.map((row) => row[col]).indexOf(num) === -1;
  }
  function checkBOX(grid, row, col, num) {
    let boxArr = [];
    let rowStart = row - (row % 3);
    let colStart = col - (col % 3);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxArr.push(grid[rowStart + i][colStart + j]);
      }
    }
    return boxArr.indexOf(num) === -1;
  }

  function checkValid(grid, row, col, num) {
    if (
      checkRow(grid, row, num) &&
      checkCol(grid, col, num) &&
      checkBOX(grid, row, col, num)
    )
      return true;
    else return false;
  }

  function getNext(row, col) {
    return col !== 8 ? [row, col + 1] : row !== 8 ? [row + 1, 0] : [0, 0];
  }

  function solver(grid, row = 0, col = 0) {
    if (grid[row][col] !== -1) {
      let isLast = row >= 8 && col >= 8;
      if (!isLast) {
        let [newRow, newCol] = getNext(row, col);
        return solver(grid, newRow, newCol);
      }
    }

    for (let num = 1; num <= 9; num++) {
      if (checkValid(grid, row, col, num)) {
        grid[row][col] = num;

        let [newRow, newCol] = getNext(row, col);

        if (!newRow && !newCol) {
          return true;
        }

        if (solver(grid, newRow, newCol)) {
          return true;
        }
      }
    }
    grid[row][col] = -1;
    return false;
  }

  function solveSudoku() {
    let sudoku = getDeepCopy(bored);
    solver(sudoku);
    setSudokuBored(sudoku);
  }

  function resetSudoku() {
    let sudoku = getDeepCopy(bored);
    setSudokuBored(sudoku);
  }

  const handleErase = (e, row, col) => {};

  function inputId(e, row, col) {
    console.log(e.target);
  }

  return (
    <>
      <h1>s u d o k u</h1>
      <div className="heder">
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className={(row + 1) % 3 === 0 ? "rowBorder" : ""}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                    return (
                      <td
                        key={rowIndex + colIndex}
                        className={(col + 1) % 3 === 0 ? "colBorder" : ""}
                      >
                        <input
                          type="text"
                          onChange={(e) => handelChange(e, row, col)}
                          value={
                            sudokuBored[row][col] === -1
                              ? ""
                              : sudokuBored[row][col]
                          }
                          i
                          className="cellInput"
                          disabled={sudokuBored[row][col] !== -1}
                          onClick={() => inputId}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="buttonsContainer">
          <NewGameButton />

          <button className="resetButton" onClick={resetSudoku}>
            reset
          </button>
          {/* <ResetButton resetSudoku={resetSudoku} /> */}

          <button className="checkButton" onClick={checkSudokuArr}>
            check
          </button>
          <button className="soleButton" onClick={solveSudoku}>
            solve
          </button>
        </div>
        <div className="tools">
          <button className="EraseButton" onClick={handleErase}>
            Erase
          </button>
          <button className="HintButton">Hint</button>

          <select className="difficultySelect">
            <option value="Difficulty">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SudokuTable;
