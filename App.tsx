
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import Login from './components/Login';
import { User, Video } from './types';
import { VIDEOS } from './constants';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [internalVideoMessage, setInternalVideoMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('hiếu_tu_be_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleLogin = (username: string) => {
    const newUser = { username, isLoggedIn: true };
    setUser(newUser);
    localStorage.setItem('hiếu_tu_be_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('hiếu_tu_be_user');
  };

  const handleVideoClick = (video: Video) => {
    if (video.type === 'external') {
      window.open(video.actionValue, '_blank');
    } else {
      setInternalVideoMessage(video.actionValue);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <i className="fab fa-youtube text-red-600 text-6xl animate-pulse"></i>
          <p className="text-gray-400 font-medium">Đang tải Hiếu Tu Be...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header username={user.username} onLogout={handleLogout} />
      
      <div className="flex pt-14">
        <Sidebar />
        
        <main className="flex-1 lg:ml-60 p-4 md:p-6">
          {/* Categories bar */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {['Tất cả', 'Âm nhạc', 'Trò chơi', 'Trực tiếp', 'Học tập', 'Phim hoạt hình', 'Tin tức'].map((cat, idx) => (
              <button 
                key={cat}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  idx === 0 ? 'bg-white text-black' : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-10">
            {VIDEOS.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onClick={handleVideoClick} 
              />
            ))}
          </div>

          {/* Content area placeholder for empty states */}
          <div className="mt-12 text-center text-gray-500 py-10">
             <i className="fas fa-video-slash text-5xl mb-4 opacity-20"></i>
             <p>Hết video rồi, xem tạm 2 cái trên đi nhé!</p>
          </div>
        </main>
      </div>

      {/* Internal Video Overlay (The "dở vl" experience) */}
      {internalVideoMessage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setInternalVideoMessage(null)}
          ></div>
          <div className="relative bg-[#1e1e1e] border border-[#3e3e3e] rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl animate-in zoom-in duration-300">
             <button 
                onClick={() => setInternalVideoMessage(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
             >
                <i className="fas fa-times text-2xl"></i>
             </button>
             <div className="mb-6">
                <i className="fas fa-face-grimace text-7xl text-yellow-500"></i>
             </div>
             <h2 className="text-4xl font-black uppercase tracking-widest text-white mb-4">
                {internalVideoMessage}
             </h2>
             <p className="text-gray-400">Bạn vừa trải nghiệm đánh giá trung thực nhất.</p>
             <button 
                onClick={() => setInternalVideoMessage(null)}
                className="mt-8 bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
             >
                Quay lại
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
