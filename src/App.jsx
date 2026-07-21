import React, { useState } from 'react';
import Header from './Header';
import Moviepage from './Moviepage';

const App = () => {

  const [input, setInput] = useState("");
  const [Genre, setGenre] = useState("")

  return (
    <>
      <Header input={input} setInput={setInput} Genre={Genre} setGenre={setGenre}/>
      <Moviepage input={input} setInput={setInput} Genre={Genre} setGenre={setGenre}/>
    </>
  );
};

export default App;