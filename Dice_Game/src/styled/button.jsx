import styled from "styled-components"

 export const Button = styled.button`
    color: white;
    background: black;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 220px;
    font-size: 16px;
    transition: 0.4s background ease-in-out;

    &:hover{
        color: black;
        background: white;
        cursor: pointer;
        transition: 0.3s background ease-in-out;
        
    }
`

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        color: white;
        background: black;
        cursor: pointer;
    }
`;