import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Word from './components/Word';
import SearchAppBar from './components/SearchAppBar';

function App() {
  return (
    <>
      <SearchAppBar />
      <Router>
        <Routes>
          <Route path="/:word" element={<Word />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
