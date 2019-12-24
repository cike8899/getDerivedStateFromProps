import React from "react";
import Content from "./Content";

export default class About extends React.Component {
  state = {
    title: "geek",
    other: ""
  };

  onChange = e => {
    // console.info(e.target.value);
    this.setState({ title: e.target.value });
  };

  onOtherChange = e => {
    this.setState({ other: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          About
          <input type="text" onChange={this.onChange} />
        </div>
        <div>
          不相关的：
          <input
            type="text"
            value={this.state.other}
            onChange={this.onOtherChange}
          />
        </div>
        <Content title={this.state.title} />
      </div>
    );
  }
}
