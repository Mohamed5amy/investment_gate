import logo from "../../public/images/logo.svg"
import Image from 'next/image'; 
import "./styles.scss"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>

      <Link href={"/"} > <Image src={logo} alt='logo' width={"auto"} height={"auto"} /> </Link>
      <Link href={"#contact"} ><button> Contact Us </button></Link>
      
    </nav>
  )
}

export default Navbar
