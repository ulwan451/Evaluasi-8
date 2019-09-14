import React from "react";
import { connect } from "react-redux";
import { changedName, getData } from "../redux/actions/homeActions";

class Detail extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { data } = this.props.home;
    return (
      <div className="container">
        <div
          style={{}}
          dangerouslySetInnerHTML={{ __html: data[id - 1].description }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.homeReducer
  };
};

export default connect(
  mapStateToProps,
  { changedName, getData }
)(Detail);
