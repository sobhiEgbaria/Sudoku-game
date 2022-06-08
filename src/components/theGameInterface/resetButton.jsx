import React, { useState } from "react";
import "./sudokuTable.css";
import { bored } from "./sudokuNumbers";
import SudokuTable from "./sudokuTable";

function ResetButton() {
  return (
    <>
      <button className="restButton" onClick={this.SudokuTable.resetSudoku}>
        Reset
      </button>
    </>
  );
}

export default ResetButton;
