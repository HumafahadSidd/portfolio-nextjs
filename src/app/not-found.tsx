import Link from "next/link";
export default function NotFound(){
    return(
    <div >
    <div className="bg-indigo-200 text-black justify-center items-center px-5 h-screen text-small ">
    <h1 className="text-center pt-10 ">404</h1>
    <p className="text-center">Page not found</p>
    <p className="text-center"> Oho!you search something irrelevant <br />Try Again   </p>
    <br /><br />
      <button className="bg-indigo-300  text-center px-3 py-3 rounded cursor-pointer text-"><Link href="/">Go back to Home</Link></button>
        
</div>
    </div>
        
    
    );
}