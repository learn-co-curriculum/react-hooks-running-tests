import React from "react";
import About from './About'; // Import the About component
import Article from './Article';
import Header from './Header';

function App() {
  return (
    <div className="App">
      learn react!
      <Header />
      <Article />
      <About /> {/* Include the About component here */}
    </div>
  );
}

export default App;
