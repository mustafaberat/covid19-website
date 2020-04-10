import React from 'react';
import axios from 'axios';

import { Container, Button, Input, Form } from 'reactstrap';

import MyNav from "./MynavComp";
import MyFooter from "./MyFooter";
import Card from "./CardComp";
import "../styles/main.scss";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      diseases: []
    }
  }
  render() {
    return (
      <div className="all">
        <Container className="myContainer">
          {/* NAVBAR */}
          <MyNav />

          {/* FORM */}
          <Form className="myForm">
            <h1 className="myLabel">Search for a country</h1>
            <div className="inputAndButton">
              <Input className="myInput" type="text" name="text" id="country" placeholder="Enter your country" />
              <Button className="myButton">Submit</Button>
            </div>
          </Form>

          {/* TABLE */}
          <div className="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
        <MyFooter path="https://mustafaberat.now.sh/" webname="Mustafa Berat" />
      </div>
    );
  }

  componentDidMount = () => {
    axios.get("https://api.covid19api.com/summary")
      .then(response => this.setState({ diseases: response.data.Countries }))
  }
}

export default Home;



//DATA WRITING
//  <ul>
// {this.state.diseases.map(disease => (
// <li key={disease.Slug}>{disease.Country}</li>))}
// </ul> 