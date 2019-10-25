import React from "react";
import "../App.scss";
import ButtonPrimary from "../components/ButtonPrimary";

class Github extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  async componentDidMount() {
    const response = await fetch("https://thecatapi.com/v1/images/search");
    const myJson = await response.json();
    console.log(myJson);
  }
  render() {
    return (
      <>
        <h1>Github test</h1>
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Your Password"
          onChange={this.handleChange}
        />
        <ButtonPrimary buttonText="Submit" />
      </>
    );
  }
}

export default Github;
