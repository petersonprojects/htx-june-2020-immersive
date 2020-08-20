import React from 'react';


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
    </>
  )
}

export default App
