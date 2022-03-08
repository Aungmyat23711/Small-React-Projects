import React from "react";

class Toolbar extends React.Component {
  render() {
    return <div style={styles.toolbar}>{this.props.children}</div>;
  }
}
const styles = {
  toolbar: {
    background: "cyan",
    padding: 10,
    height: 150,
  },
};
export default Toolbar;
