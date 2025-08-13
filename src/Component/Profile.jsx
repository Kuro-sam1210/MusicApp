import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Tabs from './Tabs';

export default function Profile() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleGoBack = () => {
    navigate('/');
  };

  const confirmLogout = () => {
    setShowModal(false);
    navigate('/login'); 
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #1c0b30, hwb(223 4% 86%))', minHeight: '100vh', color: 'white' }}>
      <div className="flex items-center justify-between p-4 pt-12">
        <ArrowLeft className="w-6 h-6 text-white cursor-pointer" onClick={handleGoBack} />
      </div>

      <div className="px-4 pb-8">
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-semibold text-xl">Sarwar Jahan</h1>
            <p className="text-gray-400 text-sm">Gold Member</p>
          </div>
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SJ</span>
          </div>
        </div>

        <div className='space-y-1.5 mt-6'>
          <p>Bio</p>
          <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm">Love Music and I am not a Musician</p>
          <p>Email</p>
          <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm">sarwarjahan@gmail.com</p>
          <p>Phone Number</p>
          <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm">+234 901 2345 344</p>
          <p>KYC</p>
          <p className="w-full bg-slate-950 px-4 py-3 text-gray-400 rounded-2xl text-sm flex items-center gap-1">
            Verified <IoIosCheckmarkCircle className='text-green-400' />
          </p>
        </div>
      </div>

      <div className='px-4 pt-6'>
        <button 
          onClick={() => setShowModal(true)}
          className="w-full bg-orange-500 px-4 py-3 text-white rounded-2xl cursor-pointer hover:bg-orange-600 transition"
        >
          Logout
        </button>
      </div>

      <Tabs />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-6 w-80 shadow-lg">
            <p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

