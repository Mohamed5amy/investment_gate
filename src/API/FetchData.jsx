"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {

  const [data, setData] = useState([])
  
  const SHEET_ID = "1Y-N-54lmuKUl6BEm7H4yJO1HSs1RyvQ9T55KP2P9xzs";
  const SHEET_TITLE = "Data";
  const SHEET_RANGE = "B1:B5";

  const FULL_URL =
      "https://docs.google.com/spreadsheets/d/" +
      SHEET_ID +
      "/gviz/tq?sheet=" +
      SHEET_TITLE +
      "&range=" +
      SHEET_RANGE;

  useEffect(() => {
      axios
          .get(FULL_URL)
          .then((response) => {
              const data = JSON.parse(response.data.substr(47).slice(0, -2))
                  .table.rows;
                  setData(JSON.parse(response.data.substr(47).slice(0, -2))
                  .table.rows)
          })
          .catch((error) => console.log(error));
  }, [FULL_URL]);

  return data;
};

export default FetchData;
