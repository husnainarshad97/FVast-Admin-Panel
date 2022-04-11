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

const FirebasePushNotifications = () => {
  const [apiKey, setapiKey] = useState();
  const [authDomain, setauthDomain] = useState();
  const [databaseURL, setdatabaseURL] = useState();
  const [projectId, setprojectId] = useState();
  const [storageBucket, setstorageBucket] = useState();
  const [messagingSenderId, setmessagingSenderId] = useState();
  const [appId, setappId] = useState();
  const [apiRes, setapiRes] = useState();

  useEffect(() => {
    getFirebaseConfig();
  }, []);

  const getFirebaseConfig = async () => {
    // console.log("In function of get profile data ");
    let x = await axios.get(
      "http://localhost:4000/FirebasePushNotifications/getdata"
    );
    console.log("get profile data", x.data.data);

    setapiRes(x.data.data[0]);
    setapiKey(x.data.data[0].apiKey);
    setauthDomain(x.data.data[0].authDomain);
    setdatabaseURL(x.data.data[0].databaseURL);
    setprojectId(x.data.data[0].projectId);
    setstorageBucket(x.data.data[0].storageBucket);
    setmessagingSenderId(x.data.data[0].messagingSenderId);
    setappId(x.data.data[0].appId);
  };

  const updateFirebaseConfig = async () => {
    const id = "61234eb41ad8951f70621edd";

    console.log("In update Firebase config and Id is ", id);
    let x = await axios.put(
      "http://localhost:4000/FirebasePushNotifications/update",
      {
        id,
        apiKey,
        authDomain,
        databaseURL,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
      }
    );
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res, apiRes);
    // window.location.reload();
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
                <h3 className="mb-0">Firebase Push Notifications</h3>
              </CardHeader>

              {/* complains */}
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Firebase Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            apiKey
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={apiKey}
                            id="input-username"
                            placeholder="apiKey"
                            type="text"
                            onChange={(e) => setapiKey(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            authDomain
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={authDomain}
                            id="input-username"
                            placeholder="authDomain"
                            type="text"
                            onChange={(e) => setauthDomain(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            databaseURL
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={databaseURL}
                            id="input-username"
                            placeholder="databaseURL"
                            type="text"
                            onChange={(e) => setdatabaseURL(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            projectId
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={projectId}
                            id="input-username"
                            placeholder="projectId"
                            type="text"
                            onChange={(e) => setprojectId(e.target.value)}
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
                            storageBucket
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="storageBucket"
                            Value={storageBucket}
                            type="text"
                            onChange={(e) => setstorageBucket(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            messagingSenderId
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={messagingSenderId}
                            id="input-username"
                            placeholder="messagingSenderId"
                            type="text"
                            onChange={(e) =>
                              setmessagingSenderId(e.target.value)
                            }
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            appId
                          </label>
                          <Input
                            className="form-control-alternative"
                            Value={appId}
                            id="input-username"
                            placeholder="appId"
                            type="text"
                            onChange={(e) => setappId(e.target.value)}
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
                      onClick={updateFirebaseConfig}
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

export default FirebasePushNotifications;
