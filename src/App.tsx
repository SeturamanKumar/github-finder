import React, { useState } from "react";
import './App.css';
import UserCard from "./UserCard";

interface UserProfile{
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

function App(){

  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearch = async () => {

    if(!username) { return; }

    setLoading(true)
    setUserData(null);
    setError(null);

    try {

      const response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok){
        throw new Error(`User Not Found`);
      }
      const data: UserProfile = await response.json();
      setUserData(data);      

    } catch (err) {

      if(err instanceof Error) {
        setError(err.message);
      } else {
        setError('AN Unknown Error Occured');
      }

    } finally {
      setLoading(false);
    }

  };

  return(
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub User Finder</h1>
      </header>
      <main>
        <div className="search-container">
          <input 
            type="text"
            className="search-input"
            placeholder="Enter a GitHub username..."
            value={username}
            onChange={handleInputChange}
          />
          <button className="search-button" onClick={handleSearch} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        <div className="results-container">
          {error && <p className="error-message">{error}</p>}
          {userData && <UserCard user={userData} />}
        </div>
      </main>
    </div>
  );

}

export default App;