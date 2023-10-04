import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode has been enabled", "light");
      document.title ="Texteditor - Darkmode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "dark");
      document.title ="Texteditor - Lightmode"
    }
  }


  return (
    <>

      <Navbar title="TEXTEDITOR" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert}  heading="enter the text to analyze below" mode={mode}/>
        <About />
      </div>

    </>
  );
}

export default App;
