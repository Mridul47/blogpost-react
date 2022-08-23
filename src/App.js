import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Page1 from './Components/Blog/page1';
import Page2 from './Components/Blog/page2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Blog/>} />
        <Route  path="/post/:id" element={<Page1/>} />
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
