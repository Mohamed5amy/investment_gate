"use client"

import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import welcome from "../../public/images/coming_soon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import leaf from "../../public/images/leaf.png";
import leafR from "../../public/images/leaf-right.png";
import axios from "axios";


const Hero = () => {

    const [data, setData] = useState([])
    const SHEET_ID = "1Y-N-54lmuKUl6BEm7H4yJO1HSs1RyvQ9T55KP2P9xzs";
    const SHEET_TITLE = "Data";
    const SHEET_RANGE = "B1:B2";

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
        <section>
            <div className="leaf">
                <Image src={leaf} alt="leaf" />
            </div>
            <div className="leafR">
                <Image src={leafR} alt="leaf right" />
            </div>
            <div className="titles">
                <h2>{data[0]?.c[0]?.v}</h2>
                <h3>
                {data[1]?.c[0]?.v}
                </h3>
                <Link href={"#contact"}>
                    <button>Call us now</button>
                </Link>
            </div>
            <Image
                src={welcome}
                alt="Welcoming image"
                className="moving"
                width={"auto"}
            />
            <Link href={"#services"}>
                <div className="icon bounce2">
                    <KeyboardArrowDownIcon />
                </div>
            </Link>
        </section>
    );
};

export default Hero;
