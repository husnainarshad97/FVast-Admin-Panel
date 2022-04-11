import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  // CardBody,
  Container,
  Row,
  // Col,
  Table,
  // UncontrolledTooltip,
  Button,
  ButtonGroup,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const Multicurrency = () => {
  // const [copiedText, setCopiedText] = useState();
  const [currency, setcurrency] = useState();
  const [currencydata, setcurrencydata] = useState();
  // const [flagBan] = useState();
  // const [currencyselected, setcurrencyselected] = useState();
  const [currencyselecteddata, setcurrencyselecteddata] = useState();

  useEffect(() => {
    getaddedcurrency();
    getselectedcurrency();
  }, []);

  const addcurrency = async () => {
    // console.log("In Function add currency");
    let x = await axios.post("http://localhost:4000/currency/addcurrency", {
      currency,
    });
    JSON.parse(JSON.stringify(x.data));
    // console.log("Res is ", res);
    window.location.reload();
  };

  const getaddedcurrency = async () => {
    // console.log("In function of getadded currency data ");
    let x = await axios.get("http://localhost:4000/currency/currencyadded");
    setcurrencydata(x.data.data);
    // console.log("def",currencydata[0]._id)
  };

  const getselectedcurrency = async () => {
    // console.log("In function of get selected currency data ");
    let x = await axios.get("http://localhost:4000/currency/currencyselected");
    setcurrencyselecteddata(x.data.data);
    // console.log("abc",currencyselecteddata[0]._id)
  };

  const flagEnable = async (id, selectedId) => {
    // console.log("In update flag enable Function and Id is ", id);

    let x = await axios.put("http://localhost:4000/currency/updateflagEnable", {
      id,
      selectedId,
    });
    JSON.parse(JSON.stringify(x.data));
    // console.log("Res is ", res);
    alert("Selected Sucessfully");

    window.location.reload();
  };

  const flagBan = async (id) => {
    // console.log("In update flag enable Function and Id is ", id);

    let x = await axios.put("http://localhost:4000/currency/updateflagBan", {
      id,
    });
    JSON.parse(JSON.stringify(x.data));
    // console.log("Res is ", res);
    alert("Unselected Sucessfully");

    window.location.reload();
  };

  const dltcurrency = async (id) => {
    // console.log("In function of delete currency data ");
    // let x =
    await axios.delete(
      `http://localhost:4000/currency/currencydelete?id=${id}`
    );
    alert("Deleted Sucessfully");
    window.location.reload();
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
                <h3 className="mb-0">Multi-currency</h3>
              </CardHeader>

              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-money-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="add currency"
                      type="text"
                      onChange={(e) => setcurrency(e.target.value)}
                      autoComplete=""
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                    size="sm"
                    className="my-5"
                    color="primary"
                    onClick={addcurrency}
                    vtype="button"
                  >
                    Add currency
                  </Button>
                </div>
              </Form>
              <h3 className="text-center">Added Currency</h3>
              <Table
                className="align-items-center table-flush text-black"
                responsive
              >
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">currency</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currencydata?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.currency}</td>

                      <td>
                        <ButtonGroup size="sm">
                          <Button
                            color="success"
                            type="button"
                            onClick={() => {
                              flagEnable(item._id, currencyselecteddata);
                            }}
                          >
                            Select
                          </Button>

                          <Button
                            color="danger"
                            type="button"
                            onClick={() => {
                              dltcurrency(item._id);
                            }}
                          >
                            Delete
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <hr />
              <br />
              <h3 className="text-center">Selected Currency</h3>

              <Table
                className="align-items-center table-flush text-black"
                responsive
              >
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">currency</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currencyselecteddata?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.currency}</td>

                      <td>
                        <ButtonGroup size="sm">
                          <Button
                            color="warning"
                            type="button"
                            onClick={() => {
                              flagBan(item._id);
                            }}
                          >
                            Unselect
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Multicurrency;
