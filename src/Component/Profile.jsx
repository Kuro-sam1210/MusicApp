import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Tabs from './Tabs';

export default function Profile() {
    const navigate = useNavigate();

    const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #1c0b30, hwb(223 4% 86%))', minHeight: '100vh', color: 'white' }}>
        <div className="flex items-center justify-between p-4 pt-12">
            <ArrowLeft className="w-6 h-6 text-white cursor-pointer" onClick={handleGoBack} />
        </div>
        <div className="px-4 pb-8">
            <div className="p-4 flex items-center space-x-31">
                <div>
                    <h1 className="text-white font-semibold text-xl">Sarwar Jahan</h1>
                    <p className="text-gray-400 text-sm">Gold Member</p>
                </div>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SJ</span>
                </div>
            </div>
            <br />
            <div className='space-y-1.5'>
                <p>Bio</p>
                <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm mt-1">Love Music and I am not a Musician</p>
                <p>Email</p>
                <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm">sarwarjahan@gmail.com</p>
                <p>Phone Number</p>
                <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm">+234 901 2345 344</p>
                <p>KYC</p>
                <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm flex">Verified <IoIosCheckmarkCircle className='text-green-400'/></p>
            </div>
        </div>
        <div className='items-center justify-between p-25 pt-12 '>
        <button className="w-41 bg-orange-500 px-4 py-3 text-white rounded-2xl cursor-pointer">Logout</button>
        </div>
      <Tabs />
    </div>
  )
}
