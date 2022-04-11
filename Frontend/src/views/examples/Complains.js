import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Header from "components/Headers/Header";
import axios from "axios";
import { Container, Button, Row, Col } from "reactstrap";

function Complains() {
  const [apiRes, setapiRes] = useState([{ id: 1, firstName: "no complains" }]);
  // const [buttonState, setbuttonState] = useState(false);
  const [buttonState, setbuttonState] = useState(true);

  const getPassengerComplain = async () => {
    console.log("In function of get passenger data ");
    let x = await axios.get(
      "http://localhost:4000/complainpassenger/getInTable"
    );
    console.log(x.data.data);
    setapiRes(x.data.data);
  };

  useEffect(() => {
    getPassengerComplain();
  }, []);

  const getDriverComplain = async () => {
    console.log("In function of get driver data ");
    let x = await axios.get("http://localhost:4000/complaindriver/getInTable");
    console.log(x.data.data);
    setapiRes(x.data.data);
  };

  const dltcomplain = async (id) => {
    console.log("In function of delete driver currency data ");
    // let x =
    await axios.delete(
      `http://localhost:4000/complaindriver/complainDelete?id=${id}`
    );
    alert("Deleted Sucessfully");
    window.location.reload();
  };

  const dltcomplain2 = async (id) => {
    console.log("In function of delete complain passenger data ");
    // let x =
    await axios.delete(
      `http://localhost:4000/complainpassenger/complainDelete?id=${id}`
    );
    alert("Deleted Sucessfully");
    window.location.reload();
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 120,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "complain",
      headerName: "Complain",
      width: 190,
      editable: true,
    },

    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 190,
      editable: true,
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
              if (buttonState === false) {
                dltcomplain(params.row._id);
                // console.log("params", params);
              } else {
                dltcomplain2(params.row._id);
                // console.log("params", params);
              }
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
      <br></br>
      {/* <Button outline color="primary">primary</Button>{' '} */}
        <Button
          color={buttonState ? "" : "primary"}
          // color="primary"
          onClick={() => {
            setbuttonState(true);
            getPassengerComplain();
          }}
        >
          Passengers Complains
        </Button>

        <Button
          color={buttonState ? "primary" : ""}
          // color="primary"
          onClick={() => {
            setbuttonState(false);
            getDriverComplain();
          }}
        >
          Drivers Complains
        </Button>
        <br/>
        <br/>
        
        <Container className="mt--0" fluid>

        <h3>{buttonState ? "Passengers Complains" : "Driver Complains"}</h3>

        <Row className="mt-0">
          <Col className="mb-5 mb-xl-0" xl="12">
            <div style={{ height: 650, width: "100%" }}>
              <DataGrid
                rows={apiRes}
                columns={columns}
                pageSize={10}
                // checkboxSelection
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Complains;
