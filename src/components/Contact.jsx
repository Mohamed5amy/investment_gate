import Image from "next/image";
import contact from "../../public/images/contact.svg"
import Button from "./Button";



const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="image"><Image src={contact} alt='Welcoming image' height={400} className='moving'/></div>
      <form action="">
        <div className="form-container">
          <h2 className="title" >Contact us</h2>
          <h3>Have any question? We&apos;d love to hear from you.</h3>
          <div>
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone" />
          </div>
          <textarea cols="30" rows="10" placeholder="Message" ></textarea>
          <Button color={"#EEE"} text={"send"} />
        </div>
      </form>
    </div>
  )
}

export default Contact
