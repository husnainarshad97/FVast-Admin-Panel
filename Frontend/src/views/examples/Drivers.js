import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Header from "components/Headers/Header";
import axios from "axios";

// reactstrap components
import { Button, ButtonGroup, Container, Row, Col } from "reactstrap";

function DataTable() {
  const [apiRes, setapiRes] = useState([{ id: 1, firstName: "empty" }]);
  const [buttonState, setbuttonState] = useState(true);

  // const [flagBan] = useState();
  const getapproveddata = async () => {
    console.log("In function of get data ");
    let x = await axios.get("http://localhost:4000/driver/getInTable");
    // console.log(x.data.data);
    setapiRes(x.data.data);
  };

  const getbanneddata = async () => {
    console.log("In function of get data ");
    let x = await axios.get("http://localhost:4000/driver/getBanInTable");
    // console.log(x.data.data);
    setapiRes(x.data.data);
  };
  useEffect(() => {
    getapproveddata();
  }, []);
  const updateBanflag = async (ID) => {
    // console.log("In update Function and Id is ", ID);
    let x = await axios.put("http://localhost:4000/driver/updateflagBan", {
      ID,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    window.location.reload();
  };

  const updateEnableflag = async (ID) => {
    // console.log("In update Function and Id is ", ID);
    let x = await axios.put("http://localhost:4000/driver/updateflagEnable", {
      ID,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "id", width: 50 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
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
      field: "city",
      headerName: "City",
      width: 120,
      editable: true,
    },
    {
      field: "invitationCode",
      headerName: "Invitation Code",
      width: 150,
      editable: true,
    },
    {
      field: "Image of Driver",
      headerName: "Image of Driver",
      sortable: false,
      width: 100,
      // disableClickEventBubbling: true,
      renderCell: (params) => {
        // const onClick = () => {
        // };
        // console.log("params are", params);

        return (
          <Button
            size="sm"
            color="warning"
            onClick={() => {
              window.open(
                `http://localhost:4000/${params.row.imageOfDriver}`,
                "_blank"
              );
            }}
          >
            <i className="fas fa-image"></i>
          </Button>
        );
      },
    },

    {
      field: "NICofDriver",
      headerName: "NIC",
      sortable: false,
      width: 100,
      // disableClickEventBubbling: true,
      renderCell: (params) => {
        // const onClick = () => {
        // };
        // console.log("params are", params);

        return (
          <ButtonGroup>
            <Button
              size="sm"
              color="dark"
              onClick={() => {
                window.open(
                  `http://localhost:4000/${params.row.NICofDriver}`,
                  "_blank"
                );
              }}
            >
              <i className="fas fa-image"></i>
            </Button>
            <Button
              size="sm"
              color="dark"
              onClick={() => {
                window.open(
                  `http://localhost:4000/${params.row.NICofDriverBack}`,
                  "_blank"
                );
              }}
            >
              <i className="fas fa-image"></i>
            </Button>
          </ButtonGroup>
        );
      },
    },

    {
      field: "licenseOfDriver",
      headerName: "License",
      sortable: false,
      width: 120,
      // disableClickEventBubbling: true,
      renderCell: (params) => {
        // const onClick = () => {
        // };
        return (
          <ButtonGroup>
            <Button
              size="sm"
              color="info"
              onClick={() => {
                window.open(
                  `http://localhost:4000/${params.row.licenseOfDriver}`,
                  "_blank"
                );
              }}
            >
              <i className="fas fa-image"></i>
            </Button>
            <Button
              size="sm"
              color="info"
              onClick={() => {
                window.open(
                  `http://localhost:4000/${params.row.licenseOfDriverBack}`,
                  "_blank"
                );
              }}
            >
              <i className="fas fa-image"></i>
            </Button>
          </ButtonGroup>
        );
      },
    },

    {
      field: "documentOfVehicle",
      headerName: "Vehicle Documents",
      sortable: false,
      width: 130,
      // disableClickEventBubbling: true,
      renderCell: (params) => {
        // const onClick = () => {
        // };
        return (
          <ButtonGroup>
            <Button
              size="sm"
              color="dark"
              onClick={() => {
                window.open(
                  `http://localhost:4000/${params.row.documentOfVehicle}`,
                  "_blank"
                );
              }}
            >
              <i className="fas fa-image"></i>
            </Button>
            <Button
              size="sm"
              color="dark"
              onClick={() => {
                window.open(
                  `http://localhost:4000/${params.row.documentOfVehicleBack}`,
                  "_blank"
                );
              }}
            >
              <i className="fas fa-image"></i>
            </Button>
          </ButtonGroup>
        );
      },
    },

    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      width: 230,
      // disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div>
            {buttonState ? (
              <Button
                color="danger"
                size="sm"
                onClick={() => {
                  updateBanflag(params.row._id);
                  // console.log("params", params);
                }}
              >
                Ban <i className="ni ni-fat-remove" />
              </Button>
            ) : (
              <Button
                color="success"
                size="sm"
                onClick={() => {
                  updateEnableflag(params.row._id);
                  // console.log("params", params);
                }}
              >
                Enable <i className="ni ni-check-bold" />
              </Button>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Header />
      <Container className="mt--0" fluid>
        <Row className="mt-0">
          <Col className="mb-5 mb-xl-0" xl="12">
            <br />
            <br />
            <Button
              color={buttonState ? "" : "primary"}
              onClick={() => {
                setbuttonState(true);
                getapproveddata();
              }}
            >
              Approved Drivers
            </Button>

            <Button
              color={buttonState ? "primary" : ""}
              onClick={() => {
                setbuttonState(false);
                getbanneddata();
              }}
            >
              Banned Drivers
            </Button>

            <h3 className="text-center">
              {buttonState ? "Approved drivers" : "Banned drivers"}
            </h3>

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
      </Container>
    </>
  );
}

export default DataTable;
