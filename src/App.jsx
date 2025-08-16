import { Routes, Route } from "react-router-dom";
import MusicPlayer from "./Component/Player2.jsx";
import Home from "./Component/Home.jsx";
import Favorites from "./Component/Favorites.jsx";
import Profile from "./Component/Profile.jsx";
import LoginPage from "./Component/LoginPage.jsx";
import CreateAccount from "./Component/CreateAccount.jsx";
import About from "./Component/About.jsx"; 
import HelpSupport from "./Component/HelpSupport.jsx"; 
import PrivacyPolicy from "./Component/PrivacyPolicy.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<MusicPlayer />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/help" element={<HelpSupport />} /> 
         <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
      </Routes>
    </div>
  );
}

export default App;
