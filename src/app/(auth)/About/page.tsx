import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='h-screen bg-blue-400'>
      {/* <Image src="/assests/bg3" width="1000" height="600" alt="pic" /> */}
      <h1 className='text-center text-3xl text-black font-extrabold '>Qualification</h1>
      <ol>
      <li> MSc.</li>
      <li>  1<sup>st</sup>Division</li>
      <li>Inter From Govt.Degree College SRE Majeed</li>
       <li>A-Grade-Achieve Second Position </li>
        <li>Matric From Gulistan Shah Abdul Latif Girls Secondary School </li>
        <li> A-Grade From Computer Science</li>
        <li>Learning Web Development from YouTube</li>
        <li>Learning Front End Development from YouTube</li>
        <li>Learning Back End Development from YouTube</li>
        </ol>
  

    </div>
  )
}

export default About
