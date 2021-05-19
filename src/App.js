import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import pageData from './pageData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      pageData: {}
    };
  }

  getResumeData() {
    this.setState({ pageData });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.pageData.main} />
        <About data={this.state.pageData.main} />
        <Resume data={this.state.pageData.resume} />
        <Portfolio data={this.state.pageData.portfolio} />
        <Contact data={this.state.pageData.main} />
        <Footer data={this.state.pageData.main} />
      </div>
    );
  }
}

export default App;
