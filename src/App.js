import React, { useState } from 'react';
import './App.css';

// Hàm xử lý đăng nhập
const handleLogin = (username, password, setError, setLoggedIn) => {
  // Tài khoản mặc định
  const defaultUsername = 'admin';
  const defaultPassword = 'password123';

  if (username === defaultUsername && password === defaultPassword) {
    setLoggedIn(true); // Cập nhật trạng thái đăng nhập
    setError('');
  } else {
    setError('Tên người dùng hoặc mật khẩu không chính xác.');
  }
};

function App() {
  // Trạng thái để lưu trữ tên người dùng, mật khẩu, thông báo lỗi và trạng thái đăng nhập
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault(); // Ngăn không cho form gửi dữ liệu
    handleLogin(username, password, setError, setLoggedIn);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div className="dark-background">
          <div className="camera-selection">
            <div className="camera-option">Camera 1</div>
            <div className="camera-option">Camera 2</div>
            <div className="camera-option">Camera 3</div>
          </div>
        </div>
      ) : (
        <header className="App-header">
          <div className="App-background"></div>
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
              <div className="input-container">
                <label>Username:</label>
                <input 
                  type="text" 
                  placeholder="Enter your username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div className="input-container">
                <label>Password:</label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
