import { Component } from "react";
import Mountain1 from "../assets/armenia/26.avif";
import Architecture from "../assets/wietnam/9.avif";
import Bay from "../assets/kambodza/6.avif";
import Aloes from "../assets/afryka/32.avif";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h3>{this.props.heading}</h3>
          <span>{this.props.text}</span> <br />
          <br />
          <span>{this.props.text1}</span>
          <br />
          <br />
          <span>{this.props.text2}</span>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="fotka" />
          <img src={this.props.img2} alt="Kambodża" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
