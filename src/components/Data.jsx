// import React, { Component } from "react";
// import SudokuApp from "./SudokuApp";
// import axios from "axios";
// import { useState } from "react";

// const FetchData = () => {
//   const [res, setRes] = useState("");

//   const options = {
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
//       //   console.log(response.data.output.raw_data);
//       setRes(response.data.output.raw_data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   return res;
// };
// export default FetchData;
