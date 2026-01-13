
import React, { useState } from 'react';
import { LOGIN_CREDENTIALS } from '../constants';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for UX
    setTimeout(() => {
      if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
        onLogin(username);
      } else {
        setError('Sai tên đăng nhập hoặc mật khẩu!');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1e1e1e] border border-[#3e3e3e] rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <i className="fab fa-youtube text-red-600 text-5xl"></i>
            <span className="font-bold text-3xl tracking-tighter">Hiếu Tu Be</span>
          </div>
          <h2 className="text-2xl font-bold mt-4">Đăng nhập</h2>
          <p className="text-gray-400 mt-1">Tiếp tục tới Hiếu Tu Be</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              className="w-full bg-[#0f0f0f] border border-[#3e3e3e] rounded-lg px-4 py-3.5 focus:border-blue-500 focus:outline-none transition-all placeholder-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full bg-[#0f0f0f] border border-[#3e3e3e] rounded-lg px-4 py-3.5 focus:border-blue-500 focus:outline-none transition-all placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm animate-pulse">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          <div className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">
            Quên mật khẩu?
          </div>

          <div className="pt-4 flex flex-col gap-3">
             <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : 'Tiếp theo'}
              </button>
              <button
                type="button"
                className="w-full bg-transparent border border-[#3e3e3e] hover:bg-[#272727] text-blue-500 font-bold py-3.5 rounded-full transition-all"
              >
                Tạo tài khoản
              </button>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-500 text-center">
            Bạn cần đăng nhập để truy cập vào kênh riêng của Hiếu.
        </div>
      </div>
    </div>
  );
};

export default Login;
