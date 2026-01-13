
import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: 'fas fa-home', label: 'Trang chủ', active: true },
    { icon: 'fab fa-youtube-square', label: 'Shorts' },
    { icon: 'fas fa-folder-open', label: 'Kênh đăng ký' },
  ];

  const secondaryItems = [
    { icon: 'fas fa-history', label: 'Video đã xem' },
    { icon: 'fas fa-clock', label: 'Xem sau' },
    { icon: 'fas fa-thumbs-up', label: 'Video đã thích' },
  ];

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-60 hidden lg:block px-3 py-3 overflow-y-auto">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-5 px-3 py-2.5 rounded-xl transition-colors ${
              item.active ? 'bg-[#272727]' : 'hover:bg-[#272727]'
            }`}
          >
            <i className={`${item.icon} text-xl ${item.active ? 'text-white' : 'text-gray-300'}`}></i>
            <span className={`text-sm ${item.active ? 'font-medium' : ''}`}>{item.label}</span>
          </button>
        ))}
      </div>
      <hr className="my-3 border-[#303030]" />
      <div className="space-y-1">
        <h3 className="px-3 py-2 text-base font-bold">Bạn</h3>
        {secondaryItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-[#272727] transition-colors"
          >
            <i className={`${item.icon} text-xl text-gray-300`}></i>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
