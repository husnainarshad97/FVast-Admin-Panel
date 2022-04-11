import React, { useState } from "react";
import Header from "components/Headers/Header.js";
import axios from "axios";
import {
  Col,
  CardBody,
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
} from "reactstrap";

const Notifications = () => {
  const [body, setbody] = useState("ALI");
  const [title, settitle] = useState("Fahad");

  const [buttonState, setbuttonState] = useState(true);

  //   const [click_action, setclick_action] = useState();

  const sendNotifications = async () => {
    // console.log("In Notifications Function");

    let beta = {
      click_action: "FLUTTER_NOTIFICATION_CLICK",
      id: "1",
      status: "done",
      ride_request_id: "-MiLlPLa3sCcOd0FS9MB",
    };

    console.log("Datax is ", beta);

    let psy = {
      body: body,
      title: title,
    };

    console.log("Notification is ", psy);
    let x = await axios.post(
      "https://fcm.googleapis.com/fcm/send",
      {
        notifications: psy,
        to: "eO0HzAIgRrCMWtn7sdAssd:APA91bG2mg49WgXn45ripJStB80PH2XiC1dcT0l7O92H6MJaYGTHQrR7hK-49JoSZIJUT-m8r2hEiebwxxgw6Sfai6FpW1IiB-lDudEXoUk8CqzPDv8n_Fp2SX7__1ygFr1MHWwOgvMp",
        priority: "high",
        data: beta,
      },
      {
        headers: {
          Authorization:
            "key=AAAAMCiMEAE:APA91bH7wLiUi6AbnqSOh8hy62KKkUWPaqNWNdaOFZdmePl6ApS_lCzYgxPY_sCaCfBagbGPwii_pu1NygcHKI3Pn7UUdEimPSHplgdMZBJpMZwxmMVUpg--fH5_-JFOdxIqROaY_NrI",
        },
      }
    );
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    // window.location.reload();
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <br />
        <br />

        <Row>
          {/* <Card className="card-profile shadow"> */}
          <CardBody>
            <hr className="my-4" />
            <Button
              // variant={buttonState ? "" : "contained"}
              // variant="contained"
              color={buttonState ? "" : "primary"}
              // color="primary"
              onClick={() => {
                setbuttonState(true);
              }}
            >
              {/* {<Iconn />} */}
              Open Passenger Notifications Page {/* {<Iconn />} */}
            </Button>

            <Button
              // variant={buttonState ? "contained" : ""}
              // variant=""
              // color="primary"
              color={buttonState ? "primary" : ""}
              onClick={() => {
                setbuttonState(false);
              }}
            >
              {/* {<Iconn />} */}
              Open Driver Notification Page
              {/* {<Iconn />} */}
            </Button>
            <br />
            <br />

            <Form>
              <h2>
                {buttonState
                  ? "Send Passengers Notification "
                  : "Send Drivers Notification"}
              </h2>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Title
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-username"
                        placeholder="Enter Notification title"
                        type="String"
                        onChange={(e) => settitle(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Body
                      </label>{" "}
                      <Input
                        className="form-control-alternative"
                        id="input-address"
                        placeholder="A notification body"
                        type="textarea"
                        onChange={(e) => setbody(e.target.value)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              <div>
                <Button
                  className="my-4"
                  color="primary"
                  onClick={sendNotifications}
                  type="button"
                >
                  Send Notification
                </Button>
              </div>
            </Form>
            <hr className="my-4" />
          </CardBody>
          {/* </Card> */}
        </Row>
      </Container>
    </>
  );
};
export default Notifications;
