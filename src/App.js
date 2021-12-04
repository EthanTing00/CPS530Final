//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route exact path="/page1" element={<Page1/>}></Route>
            <Route exact path="/page2" element={<Page2/>}></Route>
            <Route exact path="/page3" element={<Page3/>}></Route>
            <Route exact path="/page4" element={<Page4/>}></Route>
            <Route exact path="/page5" element={<Page5/>}></Route>
            <Route exact path="/page6" element={<Page6/>}></Route>
          </Routes>
        
        </header>
      </div>
 
    </Router>
    
  );
}

export default App;
