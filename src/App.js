import './App.css';
import QRCode from "react-qr-code";

function App() {
  return (
    <div className='App'>
      <h1>Qr Code Generator</h1>
      <QRCode value="tutorend.com" />
    </div>
  );
}

export default App;
