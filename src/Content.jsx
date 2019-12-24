import React from "react";

export default class Content extends React.PureComponent {
  state = {
    subTitle: "",
    age: 100
  };
  onChange = e => {
    console.info("ooo");
    this.setState(({ age }) => ({ age: ++age }));
  };
  static getDerivedStateFromProps(props, state) {
    console.info("getDerivedStateFromProps:");
    return { subTitle: props.title };
  }
  getSnapshotBeforeUpdate(prevProps) {
    console.info("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.info("componentDidUpdate");
  }
  componentDidMount() {
    console.info("componentDidMount");
  }
  render() {
    console.info("render");
    return (
      <div>
        subTitle: {this.state.subTitle}
        <div>
          <input type="text" onChange={this.onChange} />
        </div>
        <div>age:{this.state.age}</div>
      </div>
    );
  }
}
