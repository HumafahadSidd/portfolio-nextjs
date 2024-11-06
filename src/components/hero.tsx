
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <>
  
  <div className="awesome" style={{ border: "3px solid red" }}>
    <label htmlFor="name">Front-End Developer/AI-Enthusiast/Industrial Technologist </label>
    <input type="text" id="name" />
  </div>
  <p />
  <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-gray-300">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-10">
        <Image 
          className="object-cover object-center rounded mx-auto w-[15rem] " 
          alt="hero"
          src={"/asset/bg.jpeg"} width={1000} height={800}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font 5m:text-4xl text-3xl mb-4 font-medium text-gray-800">
            <div className='w-[100px] h-2[2px]bg-blue-700'></div>
          This is may Portfolio website
          <br className="hidden lg:inline-block" />
  

        </h1>
        <div className='w-[100px] h-[2px] bg-blue-500'></div>

        <p className="mb-8 leading-relaxed">
          
        Hello! I am a dedicated Frontend Developer with a passion for creating responsive, visually appealing, and user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I enjoy crafting seamless experiences for users across devices. My journey in tech is fueled by an eagerness to learn and a commitment to staying updated with the latest industry trends and best practices.

In addition to my web development skills, I have a background as an Applied Chemist, which gives me a unique perspective on problem-solving. My experience in industrial work and processes has equipped me with an analytical mindset, attention to detail, and a structured approach to projects. This blend of technical knowledge in chemistry and frontend development allows me to tackle challenges creatively and with precision.

Whether its designing intuitive user interfaces or understanding complex workflows, I bring a versatile skill set to every project. I am constantly expanding my expertise and am excited to work on innovative solutions that bridge technology and functionality. Let’s connect and explore how I can contribute to your next project!
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href="/contact"> Contact
          </Link></button>
          <button className="ml-4 inline-flex bg-indigo-500 text-white border-0 py-2 px-14 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href="/About">
            Show Credentials</Link>
          </button>
        </div>
      </div>
    </div>
  </section>
  <p />
</>

    </div>
  )
}

export default Hero
