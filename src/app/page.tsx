'use client'
import Link from "next/link"
export default function Home() {
  return (
    <div className="bg-cyan-900 min-h-screen flex justify-center items-center">
    <Link href={'/coin.market'} className="shadow-xl"><h1 className="text-5xl text-center font-[poppins] text-white">Hello,<br /> Plzz visit coin.market page
    </h1></Link>  
    
    </div>
  )}