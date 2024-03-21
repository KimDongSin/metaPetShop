import './App.css';
import "./global/font.css";
import Join from './components/join/Join';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
// import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Header type="t4" />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
