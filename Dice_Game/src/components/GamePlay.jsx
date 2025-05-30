import { useState } from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState();

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random()*(min,max)+min);
  }

  function rollDice(){
    if(!selectedNumber){
      setError("You have not selected any number")
      return
    };

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);


    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2);
    }

    selectedNumber(undefined);
  } 

  return (
    <Main>
        <div className="topSection">
            <TotalScore score={score}/>
            <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
    </Main>
  )
}

export default GamePlay;

const Main = styled.div`

    padding-top: 70px;

    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

