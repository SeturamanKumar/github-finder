import React from "react";
import './App.css';

function App(){

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
            />
            <button className="search-button">Search</button>
        </div>
        <div className="results-container">
          {/*User profile card will go in here in a future step*/}
        </div>
      </main>
    </div>
  )

}

export default App;