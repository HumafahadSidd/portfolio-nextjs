import React from "react";
 
export default async function ChildPages({ params }: { params: { ChildPages: string } }) {
  const { ChildPages } = params;
  
  return (
    <div className="h-screen bg-blue-800 p-4 text-center text-black">
      This is {ChildPages} page
    </div>
  );
}
