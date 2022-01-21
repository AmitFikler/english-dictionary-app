import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Word from './components/Word';
import SearchAppBar from './components/SearchAppBar';
import PartOfSpeechComp from './components/PartOfSpeech';

function App() {
  return (
    <>
      <SearchAppBar />
      <Router>
        <Routes>
          <Route path="/word/:word" element={<Word />} />
          <Route
            path="/part-of-speech/:partOfSpeech"
            element={<PartOfSpeechComp />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
