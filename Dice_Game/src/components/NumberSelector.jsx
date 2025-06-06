// import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({error, setError,selectedNumber,setSelectedNumber}) => {

    const arrayNum = [1,2,3,4,5,6];
    
    console.log(selectedNumber);
    
    function numberSelectorHandler(value){
        setSelectedNumber(value);
        setError("");
    }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {arrayNum.map((value,i) => (
                <Box 
                    key={i} 
                    onClick={() => numberSelectorHandler(value)}
                >
                    {value}
                </Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
    
    .error{
        color: red;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items : center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        color: white;
        background:black;
    }
`
