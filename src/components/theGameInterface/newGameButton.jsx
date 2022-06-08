import React, { useEffect, useState } from "react";
import "./sudokuTable.css";
// import { bored } from "./sudokuNumbers";
import SudokuApp from "../SudokuApp";
import FetchData from "../Data";
import axios from "axios";

function NewGameButton() {
  // const [data, setData] = useState([]);

  // function FetchData() {
  //    const options = {
  //     method: "GET",
  //     url: "https://sudoku-all-purpose-pro.p.rapidapi.com/sudoku",
  //     params: { create: "32", output: "raw" },
  //     headers: {
  //       "X-RapidAPI-Host": "sudoku-all-purpose-pro.p.rapidapi.com",
  //       "X-RapidAPI-Key": "4b4c51d946msh6a0409856f3f3d9p13c2abjsn279379cc61c2",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then((response) => {
  //       let data = response.data.output.raw_data;
  //       const dataArray = data.split("");
  //       setData(dataArray);
  //       console.log(dataArray);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  // }

  return (
    <>
      <button onClick={FetchData} className="createButton">
        New Game
      </button>
    </>
  );
}

export default NewGameButton;
