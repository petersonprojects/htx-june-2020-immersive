import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super();
    this.state = {
      greeting: "Hello World",
      articles: [],
      searchResults: ""
    }

  }

  componentDidMount = async () => {

    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"
    let response = await fetch(url);

    let results = await response.json();

    this.setState({
      articles: results.articles
    }, () => {

      console.log(this.state.articles);
    })

  }

  handleChange = (e) => {
    this.setState({
      searchResults: e.target.value
    })
  }

  render() {
    let { greeting, articles, searchResults } = { ...this.state }

    let filteredList = articles.filter(article => {
      return article.title.toLowerCase().includes(searchResults.toLowerCase())
    })

    let articlesArr = filteredList.map((article, index) => {
      return <li key={index}>
        <h4>{article.title}</h4>
        <img src={article.urlToImage} height="150px" />
        <p>{article.description}</p >
      </li >

    })

    console.log(articlesArr);

    return (
      <>
        <input type="text" onChange={this.handleChange} /> <br />
        {searchResults}
        {articlesArr}
      </>
    )
  }
}

export default App
