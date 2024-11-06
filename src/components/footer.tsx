import React from 'react'
import Link from 'next/link'
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-gray-600'>
      <>
  <p />
  <footer className="text-black body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">Huma Fahad</span>
      </a>
      <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 All Rights Reserved —
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="" className="text-red-600 text-3xl hover:text-red-500">
         <FaYoutube />
        </Link>
        </span>
    </div>
  </footer>
  <p />
</>

    </div>
  )
}

export default Footer
