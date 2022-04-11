import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  const [adminName, setadminName] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    // console.log("In function of get profile data ");
    let x = await axios.get("http://localhost:4000/editProfile/getdata");
    console.log("get profile data", x.data.data);
    setadminName(x.data.data[0].adminName);
  };
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          // backgroundImage:
          //   "url(" +
          //   require("../../assets/img/theme/profile-cover.jpg").default +
          //   ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Hello <br/> {adminName}</h1>

              {/* <p className="text-white mt-0 mb-5">
                Hasnain Arshad
              </p> */}
              {/* <Button
                color="info"
                to="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
