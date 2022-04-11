import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Header from "components/Headers/Header";
import axios from "axios";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

function DataTable() {
  const [apiRes, setapiRes] = useState([{ id: 1, firstName: "empty" }]);
  // const [flagBan] = useState();

  useEffect(() => {
    const getdata = async () => {
      console.log("In function of get data of invoices trip ");
      let x = await axios.get("http://localhost:4000/tripInvoice/getInTable");
      console.log(x.data.data);
      setapiRes(x.data.data);
    };
    getdata();
  }, []);
  // const updateflag = async (ID) => {
  //   // console.log("In update Function and Id is ", ID);
  //   let x = await axios.put("http://localhost:4000/driver/updateflagBan", {
  //     ID,
  //   });
  //   let res = JSON.parse(JSON.stringify(x.data));
  //   console.log("Res is ", res);
  //   window.location.reload();
  // };

  const columns = [
    { field: "id", headerName: "id", width: 50 },
    {
      field: "passengerName",
      headerName: " Passenger",
      width: 150,
      editable: false,
    },
    {
      field: "driverName",
      headerName: " Driver",
      width: 150,
      // editable: true,
    },
    {
      field: "travelFrom",
      headerName: "From",
      width: 150,
      // editable: true,
    },
    {
      field: "travelTo",
      headerName: "To",
      width: 190,
      // editable: true,
    },

    {
      field: "timeTraveled",
      headerName: "Time",
      width: 120,
      // editable: true,
    },
    {
      field: "distanceTraveled",
      headerName: " Distance",
      width: 150,
      // editable: true,
    },
    {
      field: "currentTime",
      headerName: " currentTime",
      width: 150,
      // editable: true,
    },
    {
      field: "tripType",
      headerName: " tripType",
      width: 150,
      // editable: true,
    },
    {
      field: "finalFare",
      headerName: "Fare",
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
              // updateflag(params.row._id);
              console.log("params", params);
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
      <h3 className="text-center">Trip Invoices</h3>
      <Row className="mt-0">
        <Col className="mb-5 mb-xl-0" xl="12">
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={apiRes}
              columns={columns}
              pageSize={10}
              // checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DataTable;
