import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyledButton} from './components/Styles';

const Div = styled.div`
  margin: 40px;
  border: 5px solid pink;
  background-color: green;
  font-size:30px;
`;

const styles = {
  myDivStyles: {
    backgroundColor: 'pink',
    fontSize: '50px'
  },
  p: {
    backgroundColor: 'blue',
    color: 'white'
  }
}

const App = () => {

  // const [state, setstate] = useState(initialState);

  return (
    <>
      <div style={styles.myDivStyles}>Hello World</div>
      <p style={styles.p}>This is an inline style</p>

      <Div>Hi, i am a styled component</Div>

      <StyledButton border="none">My Button</StyledButton>
      <StyledButton>My Button</StyledButton>
    </>
  )

}

export default App
