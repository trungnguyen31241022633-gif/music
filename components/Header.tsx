
import React, { useState } from 'react';

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#272727] rounded-full text-white">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <i className="fab fa-youtube text-red-600 text-3xl"></i>
          <span className="font-bold text-xl tracking-tighter">Hiếu Tu Be</span>
        </div>
      </div>

      <div className="flex-1 max-w-[720px] mx-4 hidden md:flex items-center">
        <div className="flex w-full">
          <div className="flex-1 flex items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-1.5 focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-[#222222] border border-l-0 border-[#303030] rounded-r-full px-5 hover:bg-[#272727]">
            <i className="fas fa-search text-gray-300"></i>
          </button>
        </div>
        <button className="ml-4 p-2.5 bg-[#181818] hover:bg-[#272727] rounded-full transition-colors">
          <i className="fas fa-microphone text-white"></i>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-[#272727] rounded-full hidden sm:block">
          <i className="fas fa-video text-xl"></i>
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full hidden sm:block">
          <i className="fas fa-bell text-xl"></i>
        </button>
        <div className="relative group">
          <button className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm uppercase">
            {username.charAt(0)}
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-[#282828] rounded-xl shadow-lg border border-[#3e3e3e] py-2 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 origin-top-right">
             <div className="px-4 py-2 border-b border-[#3e3e3e] mb-1">
                <p className="font-medium truncate">{username}</p>
             </div>
             <button 
                onClick={onLogout}
                className="w-full text-left px-4 py-2 hover:bg-[#3e3e3e] transition-colors flex items-center gap-3"
             >
                <i className="fas fa-sign-out-alt"></i> Đăng xuất
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
