import React from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <div style={styles.myDivStyles}>Hello World</div>
      <p style={styles.p}>This is an inline style</p>

      <Div>Hi, i am a styled component</Div>
    </>
  )
}

export default App
