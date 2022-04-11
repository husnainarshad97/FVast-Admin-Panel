import React, { useState, useEffect } from "react";
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
  Table,
} from "reactstrap";
// By me
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
// By me till here

const VehicleManagement = () => {
  const [vehicleType, setvehicleType] = useState();
  // const [baseFare, setbaseFare] = useState();
  // const [pricePerMin, setpricePerMin] = useState();
  // const [pricePerKm, setpricePerKm] = useState();
  const [apiRes, setapiRes] = useState();
  const [ID, setID] = useState();
  // const [Butstate, setButState] = useState(false);

  // By Me
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // By Me Till here

  useEffect(() => {
    const getData = async () => {
      console.log("In function of get data ");
      let x = await axios.get(
        "http://localhost:4000/vehicleManagement/getData"
      );
      console.log(x.data.data);
      setapiRes(x.data.data);
    };
    getData();
  }, []);

  const showInInputFields = (j) => {
    console.log("In show input fields Function and  Index is ", j);
    // setbaseFare(apiRes[j].baseFare);
    // setpricePerMin(apiRes[j].pricePerMin);
    // setpricePerKm(apiRes[j].pricePerKm);
    setvehicleType(apiRes[j].vehicleType);
    setID(apiRes[j]._id);
    // setButState(true);
  };

  const updateFareCalculationFormula = async () => {
    console.log("In update Function and Id is ", ID);
    let x = await axios.put("http://localhost:4000/vehicleManagement/update", {
      ID,
      vehicleType,
      // baseFare,
      // pricePerKm,
      // pricePerMin,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    window.location.reload();
  };

  const addOrUpdate = () => {
    if (ID) {
      console.log("Update it");
      updateFareCalculationFormula();
    } else {
      console.log("Add it");
      addNewVehicleFareData();
    }
  };

  const deleteVehicle = async (id) => {
    console.log("In function of delete data id id", id);

    await axios.delete(
      `http://localhost:4000/vehicleManagement/deleteVehicle?id=${id}`
    );
    window.location.reload();
  };

  const addNewVehicleFareData = async () => {
    console.log("In Function");
    let x = await axios.post(
      "http://localhost:4000/vehicleManagement/saveVehicleType",
      {
        // baseFare,
        // pricePerMin,
        // pricePerKm,
        vehicleType,
      }
    );
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    window.location.reload();
  };
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <CardBody>
            <hr className="my-4" />

            <Form>
              <br />
              <div>
                <Button
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="danger"
                  onClick={handleClick}
                >
                  Click to Update Existing Vehicles Types
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {apiRes?.map((item, index) => (
                    <StyledMenuItem>
                    
                      <ListItemText
                        primary={item.vehicleType}
                        onClick={() => {
                          showInInputFields(index);
                        }}
                      />
                    </StyledMenuItem>
                  ))}
                </StyledMenu>
              </div>
            </Form>
            <br/>
            <br/>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Vehicle Type</th>
                  <th>Vehicle Base Fare</th>
                  <th>Vehicle Price Per Min</th>
                  <th>Vehicle Price Per KM</th>
                </tr>
              </thead>
              <tbody>

                {apiRes?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.vehicleType}</td>
                    <td>{item.baseFare}</td>
                    <td>{item.pricePerMin}</td>
                    <td>{item.pricePerKm}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Form>
              <h2 className="mt-4">Add new Vehicle Type</h2>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Vehicle Type
                      </label>
                      <Input
                        className="form-control-alternative"
                        value={vehicleType}
                        id="input-username"
                        placeholder="Enter Vehicle Type"
                        type="String"
                        onChange={(e) => setvehicleType(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Link>
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => {
                      deleteVehicle(ID);
                    }}
                  >
                    Delete
                  </i>
                </Link>
              </div>

              <div>
                <Button
                  className="my-4"
                  color="primary"
                  onClick={addOrUpdate}
                  type="button"
                >
                  Add/Update
                </Button>
              </div>
            </Form>
            <hr className="my-4" />
          </CardBody>
        </Row>
      </Container>
    </>
  );
};
export default VehicleManagement;
