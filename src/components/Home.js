import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changedName, getData } from "../redux/actions/homeActions";

class Home extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/the-story`
      )
      .then(res => {
        const { items } = res.data;
        this.props.getData(items);
      });
  }

  render() {
    const { data } = this.props.home;
    return (
      <div className="container">
        <div className="content">
          {data &&
            data.map((person, index) => (
              <div
                style={{ display: "flex", padding: "10px" }}
                className="card"
              >
                <div style={{ width: "300px" }}>
                  <Link to={`/detail/${index + 1}`}>
                    <h6
                      onClick={() => this.props.getData(data)}
                      style={{ fontWeight: "bold", color: "grey" }}
                    >
                      {person.title}
                    </h6>
                  </Link>
                  <h6>{person.author}</h6>
                  <p>{person.pubDate}</p>
                </div>

                <div style={{ float: "right", width: "500px" }}>
                  <img
                    style={{
                      width: "25%",
                      float: "right",
                      height: "100px"
                    }}
                    className="image"
                    src={person.thumbnail}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
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
)(Home);
