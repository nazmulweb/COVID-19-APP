import React, { Component } from 'react'
import { Cards, Country, Header, Footer } from "./components"
import { fetchData } from "./api"
import { Container } from "reactstrap"

export default class App extends Component {

  state = {
    data : {},
    headerTitle: {
      title: "COVID-19",
      subTitle: "Stay at home"
    }
  }

  async componentDidMount ( ){
    const data = await fetchData()
    this.setState({
      data
    })
  }

  render() {
    const { data, headerTitle } = this.state
    return (
      <Container>
        <Header headerTitle={headerTitle} />
        <div className="main-wrapper">
          <div style={{width: "100%"}}>
            <Country />
            <Cards data = {data} />
          </div>
        </div>
        <Footer />
      </Container>
    )
  }
}
