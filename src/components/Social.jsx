import Link from "next/link";
import Box from "./Box";


const Social = () => {
  return (
    <div className='Social'>
      <Link href={"tel:+250781725464"} target="_blank" >
        <Box 
          icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          } 
          content={"+250781725464"}
        />
      </Link>
      <Link href={"mailto: info@invtgate.com"} target="_blank" >
        <Box 
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          } 
          content={"info@invtgate.com"}
        />
      </Link>
      <Link href={"https://www.google.com/maps/place/kigali+rwanda/data=!4m2!3m1!1s0x19dca4258ed8e797:0xf32b36a5411d0bc8?sa=X&ved=2ahUKEwj0o7y8wcKBAxVxUaQEHRqBCtYQ8gF6BAgSEAA&ved=2ahUKEwj0o7y8wcKBAxVxUaQEHRqBCtYQ8gF6BAgVEAE"} target="_blank" >
        <Box 
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          } 
          content={"Kigali, Rwanda"}
        />
      </Link>
    </div>
  )
}

export default Social
