import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices1.png" alt="dices" />
        </div>
        <div className='SG_content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
    max-width: 1280px;
    display: flex;
    margin: 0 auto ;
    height: 100vh;
    align-items: center;

    .SG_content{
        h1{
            font-size: 96px;
            white-space: nowrap;

        }
    }
` 
const Button = styled.button`
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