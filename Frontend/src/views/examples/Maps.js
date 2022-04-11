import React , {useState} from "react";
import firebase from "../examples/firebase";
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
// import { setSourceMapRange } from "typescript";

const TripTracking = () => {
  const [cart, setCart] = useState([]);

  var mapRef = React.useRef(null);
  const MapWrapper = () => {
    React.useEffect(() => {
      var map = mapRef.current;
      var google = window.google;
      var lat = "33.550807";
      var lng = "73.1240439";

      const myLatlng = new google.maps.LatLng(lat, lng);
      const mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: true,
        zoomControl: true,
        disableDefaultUI: true,
        navigationControl: true,

        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
            // stylers: [{ color: "#444444" }],
          },

          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
            type: "parking,",
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
            type: "parking,",
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
            type: "parking,",
          },
        ],
      };

      map = new google.maps.Map(map, mapOptions);

      var key = [];
      var lat2 = [];
      var lng2 = [];
      var i = 0;

      firebase.child("availableDrivers").on("value", (snapshot) => {
        snapshot.forEach((data) => {
          if (
            key[i] === data.key &&
            lat2[i] === data.val()?.l[0] &&
            lng2[i] === data.val()?.l[1]
          ) {
            console.log("data is same so no chnage");
            console.log("I is in if ", i);
            // setCart(cart => [...cart, item]);

            i++;
            if (i === 2) {
              i = 0;
            }
          } 
          // else if (
          //   key[i] === data.key &&
          //   (lat2[i] !== data.val()?.l[0] || lng2[i] !== data.val()?.l[1])
          // ) {
          //   // snapshot.ref.removeAt(i);
          //   // window.location.reload();
          //   // marker = null;
          //   // console.log("Marker is ", google);
          //   // mapRef = null;
          //   // google = null;
          //   // console.log("Marker is ", map);

          //   console.log("in else if and I value is", i);
          //   i++;
          //   if (i === 2) {
          //     i = 0;
          //   }
          // }
           else {
            lat2[i] = data.val()?.l[0];
            lng2[i] = data.val()?.l[1];
            key[i] = data.key;
            console.log(
              "In else and KEY is",
              data.key,
              "L0 is",
              lat2[i],
              "L1 is",
              lng2[i],
              "Index is",
              i
            );

            const myLatlng2 = new google.maps.LatLng(lat2[i], lng2[i]);

            // foreach
            var marker = null;
            marker = new google.maps.Marker({
              position: myLatlng2,
              map: map,
              animation: google.maps.Animation.BOUNCE,
              title: "title",
              // icon={require("../../assets/img/theme/team-4-800x800.jpg")}
              // src={
              //   require("../../assets/img/theme/team-4-800x800.jpg")
              //     .default
              // }
            });
            i++;
            if (i === 2) {
              i = 0;
              // window.location.reload();
            }
            // window.location.reload();
          }
        });
      });
      // forceUpdate();
      // map till here
    }, []);
    return (
      <>
        <div
          style={{ height: `600px` }}
          className="map-canvas"
          id="map-canvas"
          ref={mapRef}
        ></div>
      </>
    );
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <MapWrapper />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default TripTracking;
