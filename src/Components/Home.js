import React from 'react';
import axios from 'axios';

import { Container, Input, Form } from 'reactstrap';

import MyNav from "./MynavComp";
import MyFooter from "./MyFooter";
import Card from "./CardComp";
import GlobalCard from "./GlobalCard";
import "../styles/main.scss";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diseases: [],
      globalDiseases: [],
      isLoading: true,
      inputResult: ''
    }
  }

  
    handleChange = (event) => {
      this.setState({inputResult: event.target.value})
    }
  
    componentDidMount = () => {
      axios.get("https://api.covid19api.com/summary")
        .then(response => this.setState({ diseases: response.data.Countries, isLoading: false, globalDiseases: response.data.Global }))
    }

  
  render() {
    return (
      <div className="all">
        <Container className="myContainer">
          {/* NAVBAR */}
          <MyNav />

          {/* FORM */}
          <Form className="myForm">
            <h2 className="myLabel"> Search for a country </h2>
            <div className="inputAndButton">
              <Input className="myInput" value={this.state.inputResult} onChange={this.handleChange} type="text" name="text" id="country" placeholder="Enter your country" />
            </div>
          </Form>

          {this.state.isLoading ? 
          <h2 className="loadingLabel">Loading...</h2> : 
          <div className="cardContainer">
          
            {<GlobalCard source={this.state.globalDiseases} />}
            {this.state.diseases.map((disease)=>{
                if (((((disease.Country).toUpperCase()).includes(((this.state.inputResult).toUpperCase())))  ||
                (disease.CountryCode).includes((this.state.inputResult).toUpperCase())) &&
                (disease.TotalConfirmed !== 0) && 
                (this.state.inputResult !== "")) { 
                  return <div key={disease.Slug}> <Card source={disease} /> </div>
                } return null;
            })}
          </div>}

        </Container>
        <MyFooter path="https://mustafaberat.now.sh/" webname="Mustafa Berat" />
      </div>
    );
  } //end of render
}

export default Home;


