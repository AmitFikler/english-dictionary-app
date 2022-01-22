import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { WordObj } from '../../@types/wordtype';
import { PART_OF_SPEECH_DICT } from '../helpers/partOfSpeech';

function PartOfSpeechComp() {
  const { partOfSpeech } = useParams();
  const navigate = useNavigate();
  const [definition, setDefinition] = useState<WordObj>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (partOfSpeech) {
      getRandomDefinition(partOfSpeech);
    }
  }, []);

  const getRandomDefinition = async (part: string) => {
    try {
      const response = await axios.get(`/part-of-speech/${part}`);
      setDefinition(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkDefinition = () => {
    if (definition) {
      return (
        <div>
          <h1>
            {definition.word}-<i>{definition.pos}</i>
          </h1>
          {definition.definitions.map((defin, i) => (
            <div className="word-def ">
              <p>
                {i + 1}.{' '}
                {defin.split(' ').map((word) => {
                  return (
                    <span
                      onClick={() => {
                        navigating(word);
                      }}
                    >
                      {word}
                      {'  '}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h2>The word does not exist in our dictionary</h2>
          <h4>Try another word.</h4>
        </div>
      );
    }
  };

  const navigating = (word: string) => {
    if (word) {
      const cleanWord = word.replace(/[^a-zA-Z ]/g, '');
      setIsLoading(true);
      navigate('/word/' + cleanWord + '/All');
    }
  };

  return (
    <>{isLoading ? <span className="loader"></span> : checkDefinition()}</>
  );
}

export default PartOfSpeechComp;
