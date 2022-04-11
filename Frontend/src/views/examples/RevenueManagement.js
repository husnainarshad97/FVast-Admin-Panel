import * as React from "react";

import { useState, useEffect } from "react";
// import Header from "views/examples/FareComissions";
import Header from "components/Headers/Header";
import { DataGrid } from "@material-ui/data-grid";

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

const RevenueManagement = () => {
  const [comissionOnRide, setcomission] = useState();
  const [apiRes, setapiRes] = useState([{ id: 1, firstName: "no complains" }]);

  useEffect(() => {
    const getdata = async () => {
      console.log("In function of get data of set comission ");
      let x = await axios.get("http://localhost:4000/setcomission/getInTable");
      console.log(x.data.data[0].comissionOnRide);
      setcomission(x.data?.data[0].comissionOnRide);
    };

    getdata();
  }, []);

  const handle = async () => {
    if (comissionOnRide === null || comissionOnRide === undefined) {
      //call post api
      console.log("in if");
      addcomission();
      alert("Added comission");
    } else {
      //call update api
      console.log("in else");
      alert("Updated comission");
      updatecomission();
    }
  };

  const addcomission = async () => {
    console.log("In Function add comission");
    let x = await axios.post(
      "http://localhost:4000/setcomission/setComission",
      {
        comissionOnRide,
      }
    );
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    window.location.reload();
  };

  //
  const updatecomission = async () => {
    let x = await axios.put("http://localhost:4000/setcomission/update", {
      comissionOnRide,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    // console.log("Ress is ", res.data.data);

    window.location.reload();
  };

  const getComissiondata = async () => {
    console.log("In function of get comission 123 of set comission ");
    let x = await axios.get(
      "http://localhost:4000/tripinvoice/getComissiondata"
    );
    setapiRes(x.data?.data);
    console.log("data is", x.data.data);
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 120,
    },
    {
      field: "comissionPayable",
      headerName: "comissionPayable",
      width: 150,
      // editable: true,
    },
    {
      field: "comissionPayableByAdmin",
      headerName: "comissionPayableByAdmin",
      width: 190,
      // editable: true,
    },

    {
      field: "driverID",
      headerName: "driverID",
      width: 150,
      // editable: true,
    },

    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      width: 230,
      // disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Button
            color="danger"
            size="sm"
            onClick={() => {
              // if(buttonState===false){
              // dltcomplain(params.row._id);
              // console.log("params", params);
              // }else{
              // dltcomplain2(params.row._id);
              console.log("params", params);
              // }
            }}
          >
            Delete <i className="ni ni-fat-remove" />
          </Button>
          // </ButtonGroup>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <Container className="mt--8" fluid>
        <Row className="mt-7">
          <CardBody>
            <br />
            <Button
              color="dark"
              onClick={() => {
                getComissiondata();
              }}
            >
              <i className="fa fa-eye" /> View Details of Payable amount
            </Button>
            <Button color="dark" onClick="">
              <i className="fa fa-eye" /> View Details of Receivable amount
            </Button>
            <Form>
              <h2 className="mt-4">
                Currently comission on Ride is:
                {comissionOnRide ? comissionOnRide : "Please set a comission"}
              </h2>
              <hr />
              <h2 className="mt-4">update comission</h2>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Comission on ride
                      </label>
                      <Input
                        className="form-control-alternative"
                        // defaultValue={VehicleType}
                        // value={comissionOnRide}
                        id="input-username"
                        placeholder="Enter comission"
                        required="true"
                        type="Number"
                        onChange={(e) => setcomission(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              <div>
                <Button
                  className="my-4"
                  color="primary"
                  onClick={handle}
                  type="button"
                >
                  Update
                </Button>
              </div>
            </Form>
            <hr className="my-4" />
          </CardBody>
        </Row>

        {/* <h3>{buttonState ? "Passengers Complains" : "Driver Complains"}</h3> */}
        <div style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={apiRes}
            columns={columns}
            pageSize={10}
            // checkboxSelection
          />
        </div>
      </Container>
    </>
  );
};
export default RevenueManagement;
