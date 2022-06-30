import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateArticle from './pages/CreateArticle';
import ArticleDetail from './pages/ArticleDetail';
import EditArticle from './pages/EditArticle';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LandingPage/>} />
        <Route path={'/create'} element={<CreateArticle/>} />
        <Route path={'/detail/:data'} element={<ArticleDetail/>} />
        <Route path={'/edit/:data'} element={<EditArticle/>} />
      </Routes>
    </div>
  );
}

export default App;
