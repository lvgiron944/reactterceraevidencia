import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompoShowBlogs from './blog/ShowBlogs';
import CompoCreateBlog from './blog/CreateBlog';
import CompoEditBlog from './blog/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompoShowBlogs/>}/>
        <Route path='/create' element={<CompoCreateBlog/>}/>
        <Route path='/edit/:id' element={<CompoEditBlog/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App
