import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  const [adminName, setadminName] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [aboutme, setaboutme] = useState();
  const [apiRes, setapiRes] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    // console.log("In function of get profile data ");
    let x = await axios.get("http://localhost:4000/editProfile/getdata");
    console.log("get profile data", x.data.data);
    setapiRes(x.data.data[0]);
    setadminName(x.data.data[0].adminName);
    setemail(x.data.data[0].email);
    setaboutme(x.data.data[0].aboutme);
    setaddress(x.data.data[0].address);
  };

  const updateProfile = async () => {
    const id = "611a1166474feb34a076ed79";

    console.log("In update Function and Id is ", id);
    let x = await axios.put("http://localhost:4000/editProfile/update", {
      id,
      adminName,
      address,
      aboutme,
      email,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    // window.location.reload();
  };

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>

              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <br></br>
                    <br></br> <br></br>
                    <br></br> <br></br>
                    <br></br>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {apiRes?.adminName}
                    <span className="font-weight-light"> , Admin</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {apiRes?.address}{" "}
                  </div>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {apiRes?.email}{" "}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Admin - Fvast
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Fvast{" "}
                  </div>
                  <hr className="my-4" />
                  <p>
                    {apiRes?.adminName} — {apiRes?.aboutme}
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  {/* <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={adminName}
                            id="input-username"
                            placeholder="Username"
                            type="text"
                            onChange={(e) => setadminName(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Husnain@example.com"
                            Value={email}
                            type="email"
                            onChange={(e) => setemail(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={address}
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            onChange={(e) => setaddress(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            About Me
                          </label>
                          <Input
                            Value={aboutme}
                            placeholder="A few words about you ..."
                            type="text"
                            onChange={(e) => setaboutme(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div>
                    <Button
                      className="my-4"
                      color="primary"
                      onClick={updateProfile}
                      type="submit"
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
