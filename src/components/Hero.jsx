import Image from 'next/image';
import React from 'react'
import welcome from "../../public/images/coming_soon.svg"
import Button from './Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
      <div className="titles">
        <h2>Import Export Trading</h2>
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem qui doloribus perspiciatis nam nulla alias ipsam provident laudantium dolor impedit.</h3>
        <Link href={"#contact"} ><Button color={"#EEE"} /></Link>
      </div>
      <Image src={welcome} alt='Welcoming image' height={400} className='moving'/>
      <Link href={"#contact"} ><div className="icon bounce2"><KeyboardArrowDownIcon /></div></Link>
    </section>
  )
}

export default Hero
