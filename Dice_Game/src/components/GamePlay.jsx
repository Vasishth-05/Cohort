import React from 'react'
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';

const GamePlay = () => {
  return (
    <Main>
        <div className="topSection">
            <TotalScore/>
            <NumberSelector/>
        </div>
        <RollDice/>
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

