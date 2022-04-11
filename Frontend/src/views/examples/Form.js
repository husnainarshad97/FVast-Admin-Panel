import React, { useState } from "react";
import "./Form.css";
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
  //   Form,
  Input,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const Form = () => {
  // const [currency, setcurrency] = useState();

  // const [copiedText, setCopiedText] = useState();
  const [name, setname] = useState();
  const [lastname, setlastname] = useState();

  const [email, setemail] = useState();

  const [message, setmessage] = useState();

  const [sent, setsent] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    let tripdata = axios.get("http://localhost:4000/tripInvoice/getInTable");
    console.log("trip data", tripdata);

    let data = {
      name: name,
      lastname: lastname,
      email: email,
      message: message,
    };
    axios
      .post("http://localhost:4000/form", data)
      .then((res) => {
        setsent(true);
        console.log("messege sent");

        resetForm();
      })
      .catch(() => {
        console.log("messege not sent");
      });
  };
  const resetForm = () => {
    setname();
    setlastname();
    setemail();
    setmessage();
  };

  setTimeout(() => {
    setsent(false);
  }, 3000);

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
                <h3 className="mb-0">STMP NODE MAILER</h3>
              </CardHeader>

              {/* complains */}
              <CardBody>
                <form onSubmit={formSubmit}>
                  <h4 className="heading-large text-muted mb-4">
                    {/* {authDomain} */}
                  </h4>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={name}
                            placeholder="Enter Name "
                            type="text"
                            onChange={(e) => setname(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter Email "
                            value={email}
                            type="text"
                            onChange={(e) => setemail(e.target.value)}
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Last Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter last name "
                            value={lastname}
                            type="text"
                            onChange={(e) => setlastname(e.target.value)}
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Message
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter Message "
                            value={message}
                            type="textarea"
                            // onChange={(e) => setmessage(e.target.value)}
                            required
                          />
                        </FormGroup>

                        <div className={sent ? "" : "msg"}>
                          {" "}
                          Message has been Sent
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div>
                    <Button
                      className="my-4"
                      color="primary"
                      // onClick={formSubmit}
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Form;
