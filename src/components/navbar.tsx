
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoCloudDownloadOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div><header className="text-gray-300 hover:text-red-500 body-font">
    <div className="container mx-auto flex flex-wrap p-3 bg-black flex-col md:flex-row items-center sticky top-0">
      <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <Image src={"/asset/logo.jpeg"} width={50} height={50} alt='logo'/>
        <span className="ml-3 text-xl text-gray-300">Huma Fahad</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         <Link href={"/"} className="mr-5 hover:text-gray-900">Home </Link>
        <Link href={"/About"} className="mr-5 hover:text-gray-900">About</Link>
        <Link href={"/projects"} className="mr-5 hover:text-gray-900">Projects</Link>
        <Link href={"/Skills"} className="mr-5 hover:text-gray-900">Skills</Link>
        <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
      </nav>
      <Link href=""> <button className="inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" > Download CV    <IoCloudDownloadOutline />  
      </button>
       </Link>  
    </div>
  </header></div>
  )
}

export default Navbar