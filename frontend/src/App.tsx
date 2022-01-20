import './App.css';
import SearchInput from './components/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Word from './components/Word';

function App() {
  return (
    <>
      <h1 className="title">Dictionary</h1>
      <SearchInput />
      <Router>
        <Routes>
          <Route path={`/:word`} element={<Word />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
