import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-400 relative ">
         <img className="absolute my-5 mx-5 flex justify-start cursor-pointer w-56 h-10 stcicky top-0" src="https://codegaragetech.com/_next/image?url=%2Flogo%2Fcgt-new-logo-alt.webp&w=640&q=75"></img>
        <ul className="flex justify-end mr-24">
            <li className="p-7 cursor-pointer hover:underline decoration-blue-700 decoration-2"> <Link to="/home">Home</Link></li>
            <li className="p-7 cursor-pointer hover:underline decoration-blue-700 decoration-2"> <Link to="/About">About Us</Link></li>
            <li className="p-7 cursor-pointer hover:underline decoration-blue-700 decoration-2"> <Link to="#">Services</Link></li>
            <li className="p-7 cursor-pointer hover:underline decoration-blue-700 decoration-2"> <Link to="#">Case Study</Link></li>
            <li className="p-7 cursor-pointer hover:underline decoration-blue-700 decoration-2"> <Link to="#">Faq</Link></li>
            <li className="p-7 cursor-pointer hover:underline decoration-blue-700 decoration-2"> <Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}
