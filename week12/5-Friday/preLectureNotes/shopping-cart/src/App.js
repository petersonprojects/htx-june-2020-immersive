import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const App = () => {

  const [data, setData] = useState([]);
  const [singleItem, setItem] = useState([]);
  let item;
  // component did mount make a call to fake store API
  useEffect(()=>{

    async function fetchData(){

      let response = await fetch('https://fakestoreapi.com/products');
      let fakeData = await response.json();

      setData(fakeData);

    }

    fetchData();

  }, [])

  let handleClick = (e) => {

    // let product = {
    //   id: e.target.key,
    //   title: e.target.id,
    //   image: e.target.src
    // }

    // console.log(product)

    // showProduct(product)

    let filteredList = data.filter(item => {
      return item.id == e.target.id
    })

    console.log(filteredList)

    // sets the data to only the item selected from the list and gives
    // more details
    setItem(filteredList)

    item = <Col key={filteredList[0]} lg={4} className="mt-5" onClick={handleClick}>
                <h4>{filteredList[1]}</h4>
            </Col>;

  } //end handleClick

    let dataJSX = data.map(item => {
    return <Col key={item.id} id={item.title} lg={4} className="mt-5" onClick={handleClick}>
            <img id={item.id} style={{height:'300px',width:'300px'}} src={item.image}></img>
            <h4>{item.title}</h4>
          </Col>
    })

  return (
    <>

      <Container>
        <h1 className="text-center">Browse our finest random api items</h1>

      <Row>
        {dataJSX}
        {item}
      </Row>


      </Container>

    </>
  
  )
}

export default App
