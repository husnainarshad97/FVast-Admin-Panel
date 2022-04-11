import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DataGrid,

} from "@material-ui/data-grid";
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
} from "variables/charts.js";

// import team4 from "../assets/img/theme/";
import Header from "components/Headers/Header.js";

const Index = (props) => {
  // const [flagBan] = useState();
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [apiRes, setapiRes] = useState([{ id: 1, firstName: "empty" }]);

  useEffect(() => {
    const getdata = async () => {
      console.log("In function of get driver check data ");
      let x = await axios.get("http://localhost:4000/driver/getNewandBanUser");
      console.log(x.data.data);
      setapiRes(x.data.data);
    };
    getdata();
  }, []);

  const columns = [
    // const columns: GridColDef[] = [

    { field: "id", headerName: "id", width: 50 },

    {
      field: "firstName",
      headerName: "Name",
      width: 150,
      // editable: true,
    },

    {
      field: "email",
      headerName: "Email",
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
        console.log("params are", params);

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
            <i class="fas fa-image"></i>
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
        console.log("params are", params);

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
            <i class="fas fa-image"></i>
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
             <i class="fas fa-image"></i>
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
            <i class="fas fa-image"></i>
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
            <i class="fas fa-image"></i>
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
            <i class="fas fa-image"></i>
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
          <i class="fas fa-image"></i>
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
        // const onClick = () => {
        // };
        return (
          <Button
            color="success"
            size="sm"
            onClick={() => {
              updateflag(params.row._id);
            }}
          >
            Enable <i className="ni ni-check-bold" />
          </Button>
        );
      },
    },
  ];

  const updateflag = async (ID) => {
    console.log("In update flag Function and Id is ", ID);
    let x = await axios.put("http://localhost:4000/driver/updateflagEnable", {
      ID,
      // flagBan,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    window.location.reload();
  };

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mb-5">
          {/*Earning statistics*/}
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center ">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Earning Statistics</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          to="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          to="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/*driver data*/}
        <h2 className="text-center">Drivers pending for approval</h2>

        <Row className="mt-0">
          <Col className="mb-5 mb-xl-0" xl="12">
            <div style={{ height: 650, width: "100%" }}>
              <DataGrid
                rows={apiRes}
                columns={columns}
                pageSize={10}
                // checkboxSelection
                disableSelectionOnClick
                disableMultipleSelection={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
