import './global/reset.css';
import "./global/font.css";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MainRouter from './common/routers';
// import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header type="t4" />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
