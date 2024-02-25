import logo from './logo.svg';
import './App.css';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>        
      </header> */}
      {/* estos son los componentes que importo*/}
      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
