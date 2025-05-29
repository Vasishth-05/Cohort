// import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = () => {

  // const [currentDice,setCurrentDice] = useState();
  // const generateRandomNumber = (min,max) => {
  //   return Math.random()*(min,max)+min;
  // }

  return (
    <DiceContainer>
      <div className='dice'>
        <img src="/images/dice/dice_1.png" alt="dice1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;

  }
`