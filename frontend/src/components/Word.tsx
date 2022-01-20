import { useParams } from 'react-router-dom';

function Word() {
  const { word } = useParams();
  return (
    <>
      <h1>{word}</h1>
    </>
  );
}

export default Word;
