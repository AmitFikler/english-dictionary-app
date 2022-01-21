import axios from 'axios';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { WordObj } from '../../@types/wordtype';

function Word() {
  const { word } = useParams();
  const [definition, setDefinition] = useState<WordObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (word) {
      getDefinition(word);
    }
  }, []);

  const getDefinition = async (word: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/word/${word}`);
      setDefinition(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const navigating = (word: string) => {
    if (word) {
      const cleanWord = word.replace(/[^a-zA-Z ]/g, '');
      setIsLoading(true);
      navigate('/word/' + cleanWord);
      getDefinition(cleanWord);
    }
  };

  const checkDefinition = () => {
    if (definition.length) {
      return definition.map((word) => {
        return (
          <div>
            <h1>
              {word.word}-<i>{word.pos}</i>
            </h1>
            {word.definitions.map((defin, i) => (
              <div>
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
                <br />
              </div>
            ))}
          </div>
        );
      });
    } else {
      return (
        <div>
          <h2>The word does not exist in our dictionary</h2>
          <h4>Try another word.</h4>
        </div>
      );
    }
  };

  return (
    <>{isLoading ? <span className="loader"></span> : checkDefinition()}</>
  );
}

export default Word;
