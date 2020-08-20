import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {StyledButton} from './components/Styles.js';
const Div = styled.div`

  margin: 40px;
  border: 5px solid pink;
  background-color: green;
  font-size: 30px;
`;

const App = () => {

  

  return (
    <>
      <div style={{backgroundColor: 'yellow', fontSize: '30px'}}>Hello World</div>

      <p style={style.myDivStyle}>This is an inline style</p>
      <p style={style.aNewStyle}>This is an inline style</p>

      <Div>Hello I am a styled component </Div>

      <StyledButton border="none">My Button</StyledButton>
      <StyledButton >My Button</StyledButton>
    </>
  )
}

const style = {
  myDivStyle : {

    backgroundColor: 'pink',
    fontSize: '50px'

  },
  aNewStyle: {

    backgroundColor: 'orange',
    fontSize: '70px'
  }
}

export default App
