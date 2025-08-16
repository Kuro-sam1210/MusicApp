import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Instagram, Facebook, Youtube } from 'lucide-react';
import Toast from './Toast.jsx';

export default function Settings() {
  const navigate = useNavigate();

  const [userSettings, setUserSettings] = useState({
    username: 'Sarwar Jahan',
    bio: 'Love Music and I am not a Musician',
    profilePicture: null, // This will store a URL after upload
    instagram: '',
    facebook: '',
    youtube: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoBack = () => {
    navigate('/profile');
  };

  const handleInputChange = (field, value) => {
    setUserSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const tempUrl = URL.createObjectURL(file); // Preview only
      setUserSettings(prev => ({
        ...prev,
        profilePicture: tempUrl
      }));
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      let uploadedImageUrl = userSettings.profilePicture;

      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const uploadResponse = await fetch('https://your-backend.com/api/upload', {
          method: 'POST',
          body: formData
        });

        if (!uploadResponse.ok) {
          throw new Error('Image upload failed');
        }

        const uploadData = await uploadResponse.json();
        uploadedImageUrl = uploadData.url; // Backend should return the URL
      }

      const profileData = {
        username: userSettings.username,
        bio: userSettings.bio,
        profilePicture: uploadedImageUrl,
        instagram: userSettings.instagram,
        facebook: userSettings.facebook,
        youtube: userSettings.youtube
      };

      const updateResponse = await fetch('https://your-backend.com/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });

      if (!updateResponse.ok) {
        throw new Error('Profile update failed');
      }

      setShowToast(true);

      setTimeout(() => {
        navigate('/profile');
      }, 1000);
    } catch (error) {
      console.error(error);
      alert('Something went wrong while saving your settings.');
    } finally {
      setLoading(false);
    }
  };

  const getUserInitials = () => {
    return userSettings.username
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div 
      style={{
        background: 'linear-gradient(180deg, #121212 0%, #0a0a0a 100%)', 
        minHeight: '100vh', 
        color: 'white'
      }}
    >
      <div className="flex items-center justify-between p-4 pt-12">
        <div className="flex items-center gap-4">
          <ArrowLeft 
            className="w-6 h-6 text-white cursor-pointer" 
            onClick={handleGoBack} 
          />
          <h1 className="text-white font-bold text-xl">Settings</h1>
        </div>
      </div>

      <div className="px-4 pb-20 space-y-6">
        <div className="space-y-3">
          <p className="text-gray-400 text-sm font-medium">Profile Picture</p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              {userSettings.profilePicture ? (
                <img 
                  src={userSettings.profilePicture} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {getUserInitials()}
                </span>
              )}
            </div>
            <label className="bg-[#181818] hover:bg-[#282828] px-4 py-2 rounded-lg cursor-pointer transition flex items-center gap-2">
              <Upload className="w-4 h-4" />
              <span className="text-sm">Upload Photo</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-gray-400 text-sm font-medium">Username</p>
          <input
            type="text"
            value={userSettings.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            className="w-full bg-[#181818] px-4 py-3 rounded-2xl text-sm text-white border-none outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your username"
          />
        </div>

        <div className="space-y-3">
          <p className="text-gray-400 text-sm font-medium">Bio</p>
          <textarea
            value={userSettings.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            className="w-full bg-[#181818] px-4 py-3 rounded-2xl text-sm text-white border-none outline-none focus:ring-2 focus:ring-green-500 resize-none"
            placeholder="Tell us about yourself"
            rows="3"
          />
        </div>

        <div className="space-y-4">
  <p className="text-gray-400 text-sm font-medium">Follow us on Social Media</p>

  <a 
    href="https://www.instagram.com/jesse_onuzurike?igsh=eGYzeW5sNGdyNmxx&utm_source=qr" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl cursor-pointer transition"
  >
    <Instagram className="w-5 h-5 text-pink-500" />
    <span className="text-sm text-white">Instagram</span>
  </a>

  <a 
    href="https://www.facebook.com/your-facebook-page" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl cursor-pointer transition"
  >
    <Facebook className="w-5 h-5 text-blue-500" />
    <span className="text-sm text-white">Facebook</span>
  </a>

  <a 
    href="https://www.youtube.com/your-channel" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-[#181818] hover:bg-[#282828] px-4 py-3 rounded-2xl cursor-pointer transition"
  >
    <Youtube className="w-5 h-5 text-red-500" />
    <span className="text-sm text-white">YouTube</span>
  </a>
</div>

        <div className="pt-6">
          <button 
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-green-900 hover:bg-green-800 px-4 py-3 text-white rounded-2xl cursor-pointer transition font-medium disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <Toast 
        message="Settings saved successfully!" 
        show={showToast} 
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
