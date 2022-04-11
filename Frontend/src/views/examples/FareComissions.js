// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const Header = () => {
  const [apiResD, setapiResD] = useState(0);
  const [apiResP, setapiResP] = useState(0);

  useEffect(() => {
    // const getdataPassenger = async () => {
    //   console.log("In function of get data passenger ");
    //   let x = await axios.get(
    //     "http://localhost:4000/passenger/getDataforHeader"
    //   );
    //   console.log(x.data.data);
    //   setapiResP(x.data.data);
    // };

    // const getdataDriver = async () => {
    //   console.log("In function of get data ");
    //   let x = await axios.get("http://localhost:4000/driver/getDataforHeader");
    //   // console.log(x.data.data);
    //   setapiResD(x.data.data);
    // };

    // const getComissiondata = async () => {
    //     console.log("In function of get data passenger ");
    //     let x = await axios.get(
    //       "http://localhost:4000/tripinvoice/getComissiondata"
    //     );
    //     console.log(x.data.data);
    //     setapiResP(x.data.data);
    //   };
  
    // getdataPassenger();
    // getdataDriver();
    // getComissiondata();
  }, []);
  

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {/* <Row className="text-center"> */}
            <Row style={{ justifyContent: "center" }}>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col text-center">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Receivable
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 ">350</span>
                        <Col className="col-auto">
                        {/* <Button color="dark"> <i className="fa fa-eye" /> View Details </Button> */}
                        </Col>
                      </div>
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col text-center">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Payable
                        </CardTitle>
                        <div className="text-center">
                          <span
                            className="h2 font-weight-bold mb-0 text-center"
                            style={{
                              alignContent: "center",
                              justifyContent: "center",
                            }}
                          >
                            {apiResP}
                          </span>
                          <Col className="col-auto">
                            
                            {/* <Button color="dark">See  */}
                            {/* <Button color="dark"> <i className="fa fa-eye" /> View Details </Button> */}
                            
                          </Col>
                        </div>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
