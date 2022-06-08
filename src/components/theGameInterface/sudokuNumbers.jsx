import React, { Component, useState } from "react";
import SudokuTable from "./sudokuTable";
import SudokuApp from "../SudokuApp";
import Data from "../Data";
import NewGameButton from "./newGameButton";
const matrixData = [
  -1, 6, -1, -1, -1, 9, 7, -1, -1, -1, 4, 8, -1, -1, -1, 1, 6, -1, -1, 2, 9, -1,
  -1, 1, -1, -1, -1, 9, 7, -1, 3, 6, 2, 8, -1, -1, -1, -1, 4, -1, -1, -1, 9, 7,
  6, -1, -1, 6, -1, -1, 4, -1, -1, 2, -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1,
  -1, -1, -1, 6, -1, 3, -1, -1, -1, 3, 4, 1, -1, 2, 9, 7,
];

function listToMatrix(list, elementsPerSubArray) {
  let matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}
export let bored = listToMatrix(matrixData, 9);
