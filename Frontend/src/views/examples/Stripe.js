import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Form,
  Input,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const FirebasePushNotificarions = () => {
  const [productKey, setproductKey] = useState();
  const [authDomain, setauthDomain] = useState();
  
  const [secretKey, setsecretKey] = useState();


  const [buttonState, setbuttonState] = useState(true);

  useEffect(() => {
    getFirebaseConfig();
  }, []);

  const getFirebaseConfig = async () => {
    // console.log("In function of get profile data ");
    let x = await axios.get(
      "http://localhost:4000/FirebasePushNotifications/getdata"
    );
    console.log("get profile data", x.data.data);

    setproductKey("qwertyuikoliuytrertyu");
    setsecretKey("dfghjkjhgfdfghjk");
    setauthDomain("Stripe Key");
  };

  const getFirebaseConfig2 = async () => {
    setproductKey("sxaxa");
    setsecretKey("nbhbfnrv");
    setauthDomain("Paypal Key");
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Payment Integration Keys</h3>
              </CardHeader>

              {/* complains */}
              <CardBody>
                <Button
                  color={buttonState ? "" : "primary"}
                  // color="primary"
                  onClick={() => {
                    setbuttonState(true);
                    getFirebaseConfig();
                  }}
                >
                  {/* {<Iconn />} */}
                  STRIPE KEYS
                  {/* {<Iconn />} */}
                </Button>

                <Button
                  color={buttonState ? "primary" : ""}
                  // color="primary"
                  onClick={() => {
                    setbuttonState(false);
                    getFirebaseConfig2();
                  }}
                >
                  {/* {<Iconn />} */}
                  PAYPAL KEYS
                  {/* {<Iconn />} */}
                </Button>
                <br />
                <br />

                <Form>
                  <h4 className="heading-large text-muted mb-4">
                    {authDomain}
                  </h4>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            SecretKey
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={productKey}
                            id="input-username"
                            placeholder="Enter Secret Key"
                            type="text"
                            onChange={(e) => setproductKey(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            ProductKey
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Enter Product key"
                            Value={secretKey}
                            type="text"
                            onChange={(e) => setsecretKey(e.target.value)}
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
                      // onClick={updateFirebaseConfig}
                      type="submit"
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default FirebasePushNotificarions;
