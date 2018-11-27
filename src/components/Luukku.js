import React, { Component } from "react";
import fetchGiph from "./gifSearchUtil";
import luukku from '../img/luukku.png';

const keywords = [
  "lionel messi",
  "ronaldo",
  "neymar",
  "santa claus",
  "christmas"
];

const doorImgUrl = luukku;

class Luukku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      gifUrl: "",
      keyword: ""
    };
  }

  async componentDidMount() {
    const { day } = this.props;
    const keyword = keywords[(day - 1) % keywords.length];
    const gifUrl = await fetchGiph(keyword);
    this.setState({ gifUrl });
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        opened: !prevState.opened
      };
    });
  };

  renderDoor() {
    const { opened, gifUrl } = this.state;

    if (opened)
      return (
        <div className="door-opened" onClick={this.toggleSwitch}>
          <img src={this.state.gifUrl} alt="door open" />
        </div>
      );
    else
      return (
        <div className="door-closed" onClick={this.toggleSwitch}>
          <img src={doorImgUrl} alt="door closed" />
        </div>
      );
  }

  render() {
    return (
      <div className="door">
        <div className="day">{this.props.day}</div>
        {this.renderDoor()}
      </div>
    );
  }
}

export default Luukku;
