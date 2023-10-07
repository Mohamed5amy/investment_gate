"use client"

import Link from "next/link";
import Box from "./Box";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from "react";
import axios from "axios";


const Social = () => {


    const [data, setData] = useState([])
    const SHEET_ID = "1Y-N-54lmuKUl6BEm7H4yJO1HSs1RyvQ9T55KP2P9xzs";
    const SHEET_TITLE = "Data";
    const SHEET_RANGE = "B3:B5";

    const FULL_URL = ("https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE);

    useEffect(() => {

    axios.get(FULL_URL)
    .then((response) => {
        setData(JSON.parse(response.data.substr(47).slice(0 , -2)).table.rows)
        // console.log(JSON.parse(response.data.substr(47).slice(0 , -2)).table.rows)
    } )
    .catch((error) => console.log(error))
    
    } , [FULL_URL])
  
  
  return (
    <div className='Social' id="contact">
      <h3>Contact</h3>
      <div className="social-icons">
        <h4> Follow us : </h4>
        <div className="icons">
          <Link href={"https://www.facebook.com/artiermedicalcentre"} target="_blank" > <FacebookIcon /> </Link>
          <Link href={"https://www.instagram.com/artier_medical/"} target="_blank" > <InstagramIcon /> </Link>
        </div>
      </div>
      <div className="container">
        <Link href={"tel:+" + data[0]?.c[0]?.v} target="_blank" >
          <Box 
            icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            } 
            content={data[0]?.c[0]?.v}
          />
        </Link>
        <Link href={"mailto:" + data[1]?.c[0]?.v} target="_blank" >
          <Box 
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            } 
            content={data[1]?.c[0]?.v}
          />
        </Link>
        <Link href={"https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D8%B1%D8%AA%D9%8A%D8%B1+%D9%84%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86+(%D9%85%D8%B1%D9%83%D8%B2+%D8%A3%D8%B1%D8%AA+%D9%84%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86)%E2%80%AD/@26.138189,50.5858093,17z/data=!4m14!1m7!3m6!1s0x3e49ac1354089695:0x324ffc586eaa4830!2z2YXYsdmD2LIg2KfYsdiq2YrYsSDZhNmE2KPYs9mG2KfZhiAo2YXYsdmD2LIg2KPYsdiqINmE2YTYp9iz2YbYp9mGKQ!8m2!3d26.138189!4d50.5832344!16s%2Fg%2F11dxl0r2s0!3m5!1s0x3e49ac1354089695:0x324ffc586eaa4830!8m2!3d26.138189!4d50.5832344!16s%2Fg%2F11dxl0r2s0?entry=ttu"} target="_blank" >
          <Box 
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            } 
            content={data[2]?.c[0]?.v}
          />
        </Link>
      </div>
    </div>
  )
}

export default Social
