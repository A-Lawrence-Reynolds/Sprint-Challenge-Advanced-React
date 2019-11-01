import React from "react";
import axios from "axios";
import "./App.css";
import Players from "./Components/Players";
import NavBar from "./Components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playersInfo: [],
      darkMode: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log(response.data);
      this.setState({
        playersInfo: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div data-testid="player-data">
          <Players playersInfo={this.state.playersInfo} />
        </div>
      </div>
    );
  }
}

export default App;
