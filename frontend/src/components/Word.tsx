import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WordObj } from '../../@types/wordtype';

function Word() {
  const { word } = useParams();
  const [definition, setDefinition] = useState<WordObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDefinition();
  }, []);

  const getDefinition = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/word/${word}`);
      setDefinition(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? <span className="loader"></span> : ''}
      {definition.map((word) => {
        console.log(word.definitions);
        return (
          <div>
            <h1>
              {word.word}-<i>{word.pos}</i>
            </h1>
            {word.definitions.map((defin, i) => (
              <div>
                <p>
                  {i + 1}.{defin}
                </p>
                <br />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default Word;
