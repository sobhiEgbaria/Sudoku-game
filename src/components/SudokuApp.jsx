import React, { Component } from "react";
import { PropTypes } from "react";
import SudokuTable from "./theGameInterface/sudokuTable";
import NewGameButton from "./theGameInterface/newGameButton";
import CheckButton from "./theGameInterface/checkButton";
import ResetButton from "./theGameInterface/resetButton";
import SolveButton from "./theGameInterface/solveButton";

const SudokuApp = () => {
  return (
    <>
      <SudokuTable />
      {/* <div className="buttonsContainer">
          <CreateButton />
          <CheckButton />
          <ResetButton />
          <SolveButton />
        </div> */}
    </>
  );
};

export default SudokuApp;
