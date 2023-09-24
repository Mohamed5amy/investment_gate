import logo from "../../public/images/logo.svg"
import Image from 'next/image'; 
import "./styles.scss"
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>

      <Image src={logo} alt='logo' />
      <Link href={"#contact"} ><Button color={"white"} /></Link>
      
    </nav>
  )
}

export default Navbar
