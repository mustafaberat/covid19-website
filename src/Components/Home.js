import React from 'react';
import axios from 'axios';

import { Container, Button, Input, Form, Table } from 'reactstrap';

import MyNav from "./MynavComp";
// // import Card from "./CardComp";
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

        <div className="myTableDiv">
          <h4 className="tableTitle">Country Name</h4>
          <Table className="myTable" striped bordered hover size="sm">
            <tr>
              <th>NewConfirmed</th>
              <td>11212123</td>
            </tr>
            <tr>
              <th>TotalConfirmed</th>
              <td>123123123</td>
            </tr>
            <tr>
              <th>NewDeaths</th>
              <td>123123213</td>
            </tr>
            <tr>
              <th>Total Deaths</th>
              <td>123213123</td>
            </tr>

          </Table>
        </div>

      </Container>
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