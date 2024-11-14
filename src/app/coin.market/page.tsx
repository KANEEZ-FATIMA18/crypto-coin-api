"use client";
import { useState, useEffect } from "react";

export default function Coinmarket() {
  const API_KEY = "ba51e570f3911d11895d2bdeae2df1fd";

  // use state
  const [data, setData] = useState<any>(null);

  // use effect
  useEffect(() => {
    fetch(`http://api.coinlayer.com/api/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data :", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div  className="flex flex-col justify-center items-center table-auto h-screen bg-cyan-900">
        <h1 className="text-4xl font-[poppins] mb-[30px] text-white shadow-xl ">CRYPTO COINS RATES</h1>
    <table className="shadow-2xl font-[poppins] border-2 border-cyan-200 w-6/12 overflow-hidden">
      <thead className="text-white text-xl">
        <tr className="">
          <th className="py-3 bg-cyan-800 ">Sno</th>
          <th className="py-3 bg-cyan-800 ">Coin Name </th>
          <th className="py-3 bg-cyan-800">Current Rates</th>
        </tr>
      </thead>

      <tbody className="text-cyan-900 text-center">
        {/* 1st  */}
        <tr className="bg-cyan-100 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
        <td className="py-3 px-6">01</td>
          <td className="py-3 px-6">Bit Coin (BTC)</td>
          <td className="py-3 px-6"> {data?.rates?.BTC}</td>
        </tr>
        {/* 2nd  */}
        <tr className="bg-cyan-200 hover:bg-cyan-100 hover:scale-105  cursor-pointer duration-300">
        <td className="py-3 px-6">02</td>
          <td className="py-3 px-6">EHEREUM(ETH)</td>
          <td className="py-3 px-6">{data?.rates?.ETH}</td>
        </tr>
        {/* 3rd */}
        <tr className="bg-cyan-300 hover:bg-cyan-100 hover:scale-105  cursor-pointer duration-300">
        <td className="py-3 px-6">03</td>
          <td className="py-3 px-6">Litecoin(LTC)</td>
          <td className="py-3 px-6"> {data?.rates?.LTC} </td>
        </tr>
        {/* 4th */}
        <tr className="bg-cyan-400 hover:bg-cyan-100 hover:scale-105  cursor-pointer duration-300">
        <td className="py-3 px-6">04</td>
          <td className="py-3 px-6">Bitcoin Cash(BCH)</td>
          <td className="py-3 px-6">{data?.rates?.BCH} </td>
        </tr>
        {/* 5th */}
        <tr className="bg-cyan-500 hover:bg-cyan-100 hover:scale-105  cursor-pointer duration-300" >
        <td className="py-3 px-6">05</td>
          <td className="py-3 px-6">Monero(XMR)</td>
          <td className="py-3 px-6"> {data?.rates?.XMR} </td>
        </tr>
        {/* 6th */}
        <tr className="bg-cyan-600 hover:bg-cyan-100 hover:scale-105  cursor-pointer duration-300" >
        <td className="py-3 px-6">06</td>
          <td className="py-3 px-6">Enterprice Operating System(EOS)</td>
          <td className="py-3 px-6"> {data?.rates?.EOS} </td>
        </tr>
        {/* 7th */}
        <tr className="bg-cyan-700 hover:bg-cyan-100 hover:scale-105  cursor-pointer duration-300" >
        <td className="py-3 px-6">07</td>
          <td className="py-3 px-6">Ripple(XRP)</td>
          <td className="py-3 px-6"> {data?.rates?.XRP} </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
