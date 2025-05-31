import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>click on dice image</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, blanditiis tempora. Minima rem eius doloremque.</p>
            <p>if you get wrong guess then 1 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;

    h2{
        font-size: 24px;
        font-weight: bold;
    }
    .text{
        margin-top: 24px;
    }

`