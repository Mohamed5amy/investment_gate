"use client"


import Department from './Department';
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {

  const [data, setData] = useState([])
  const SHEET_ID = "1Y-N-54lmuKUl6BEm7H4yJO1HSs1RyvQ9T55KP2P9xzs";
  const SHEET_TITLE = "Departments";
  const SHEET_RANGE = "B2:B100";

  const FULL_URL = ("https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE);

  useEffect(() => {

  axios.get(FULL_URL)
  .then((response) => {
      const myData = JSON.parse(response.data.substr(47).slice(0 , -2)).table.rows
      setData(myData)
  } )
  .catch((error) => console.log(error))
  
  } , [FULL_URL])
  
  return (
    <div className='Services' id='services'>
      <h3>our services</h3>
      {data?.map((item , i) => {
        return (
          <Department key={i} title={item.c[0].v} />
        )
      })}
    </div>
  )
}

export default Services
