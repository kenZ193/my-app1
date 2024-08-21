import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.istockphoto.com/id/165801610/vector/farm-background.jpg?s=612x612&w=0&k=20&c=ddtdh3bA6kyIyhjZjdGbGFlYXPsCIcJkqMsNGI4471c=" className="App-background" alt="background" />
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="input-container">
              <label>Username:</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
