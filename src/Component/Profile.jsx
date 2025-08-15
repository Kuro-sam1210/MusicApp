import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiSettings, FiInfo, FiHelpCircle, FiLock } from "react-icons/fi";
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
    <div 
      style={{
        background: 'linear-gradient(180deg, #121212 0%, #0a0a0a 100%)', 
        minHeight: '100vh', 
        color: 'white'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <ArrowLeft 
          className="w-6 h-6 text-white cursor-pointer" 
          onClick={handleGoBack} 
        />
      </div>

      {/* Profile Info */}
      <div className="px-4 pb-8">
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-2xl">Sarwar Jahan</h1>
            <p className="text-gray-400 text-sm">Gold Member</p>
          </div>
          <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">SJ</span>
          </div>
        </div>

        {/* User Info */}
        <div className='space-y-2 mt-6'>
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Bio</p>
            <p className="w-full bg-[#181818] px-4 py-3 rounded-2xl text-sm text-gray-300">
              Love Music and I am not a Musician
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
            <p className="w-full bg-[#181818] px-4 py-3 rounded-2xl text-sm text-gray-300">
              sarwarjahan@gmail.com
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Phone Number</p>
            <p className="w-full bg-[#181818] px-4 py-3 rounded-2xl text-sm text-gray-300">
              +234 901 2345 344
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">KYC</p>
            <p className="w-full bg-[#181818] px-4 py-3 rounded-2xl text-sm text-green-400 flex items-center gap-1">
              Verified <IoIosCheckmarkCircle />
            </p>
          </div>
        </div>
      </div>

      {/* App Options */}
      <div className="px-4 space-y-3 mt-4">
        <button className="w-full flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl transition">
          <FiSettings className="text-gray-300" />
          <span className="text-gray-300 text-sm">Settings</span>
        </button>

        <button className="w-full flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl transition">
          <FiInfo className="text-gray-300" />
          <span className="text-gray-300 text-sm">About Us</span>
        </button>

        <button className="w-full flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl transition">
          <FiHelpCircle className="text-gray-300" />
          <span className="text-gray-300 text-sm">Help & Support</span>
        </button>

        <button className="w-full flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl transition">
          <FiLock className="text-gray-300" />
          <span className="text-gray-300 text-sm">Privacy Policy</span>
        </button>
      </div>

      {/* Logout Button */}
      <div className='px-4 pt-6 pb-20'>
        <button 
          onClick={() => setShowModal(true)}
          className="w-full bg-green-900 px-4 py-3 text-white rounded-2xl cursor-pointer hover:bg-green-300 transition font-medium"
        >
          Logout
        </button>
      </div>

      <Tabs />

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#181818] text-white rounded-2xl p-6 w-80 shadow-lg border border-gray-800">
            <p className="text-gray-300 mb-4 text-sm">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
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
