import './App.css';
import "./global/font.css";
import Join from './pages/join/Join';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './pages/home/home';
// import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Header type="t4" />
      <Home />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
