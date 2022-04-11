import React, { Component,  } from "react";
// import firebase from "../examples/firebase";
// import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 7.954465465,
      lng: 33.336516516,
    },
    zoom: 12,
  };


  render() {
    return (
      <>
        <Header />
        {/* // Important! Always set the container height explicitly */}
        <div style={{ height: "90vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBk3o6lw1Y8ZiJzmIEB2ljT0tsdwITN8g0",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={33.55053330488901}
              lng={73.12396156069423}
              text="My Marker"
              animation="bounce"
            />
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default SimpleMap;
