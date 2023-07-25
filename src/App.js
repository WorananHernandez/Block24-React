import { Fragment } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  const myBtn = () => {
    console.log('updated');
  }

  return (
    <div className="App">
    <h1>React App</h1>
    <button onClick={ myBtn }></button>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/017/323/715/small/3d-render-adorable-close-up-of-a-american-eskimo-dog-holding-red-rose-in-mouth-on-white-background-photo.jpg"></img>
    </div>
  );
}

export default App;
