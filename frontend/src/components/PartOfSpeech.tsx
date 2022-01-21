import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PART_OF_SPEECH_DICT } from '../helpers/partOfSpeech';

function PartOfSpeechComp() {
  const { partOfSpeech } = useParams();
  const navigate = useNavigate();
  //   const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (partOfSpeech) {
      if (!PART_OF_SPEECH_DICT.includes(partOfSpeech)) {
        navigate('/');
      }
    }
  }, []);

  // const getDefinition = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/word/${/part-of-speech}`);
  //     setDefinition(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {/* {isLoading ? <span className="loader"></span> : ''} */}
      <h2>{partOfSpeech}:</h2>
    </>
  );
}

export default PartOfSpeechComp;
