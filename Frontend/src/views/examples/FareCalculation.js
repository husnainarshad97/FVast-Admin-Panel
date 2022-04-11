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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
  const [baseFare, setbaseFare] = useState();
  const [pricePerMin, setpricePerMin] = useState();
  const [pricePerKm, setpricePerKm] = useState();
  const [apiRes, setapiRes] = useState();
  const [ID, setID] = useState();

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
    setbaseFare(apiRes[j].baseFare);
    setpricePerMin(apiRes[j].pricePerMin);
    setpricePerKm(apiRes[j].pricePerKm);
    setvehicleType(apiRes[j].vehicleType);
    setID(apiRes[j]._id);
    // setButState(true);
  };

  const updateFareCalculationFormula = async () => {
    let x = await axios.put("http://localhost:4000/vehicleManagement/update", {
      ID,
      vehicleType,
      baseFare,
      pricePerKm,
      pricePerMin,
    });
    let res = JSON.parse(JSON.stringify(x.data));
    console.log("Res is ", res);
    // window.location.reload();
  };

  const AllFieldsFilled = () => {
    if (
      baseFare !== undefined &&
      pricePerMin !== undefined &&
      pricePerKm !== undefined &&
      vehicleType !== undefined
    ) {
      updateFareCalculationFormula();
      alert("Updated");
    } else {
      alert(
        "Enter Data in all fields and also select vehicle from the red button"
      );
    }
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
                  Click to Update Existing Vehicles Fares
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {
                  apiRes?.map((item, index) => (
                    <StyledMenuItem>
                      <ListItemIcon>
                        <i class="fa fa-car" aria-hidden="true"></i>
                      </ListItemIcon>
                      <ListItemText
                        primary={item.vehicleType}
                        onClick={() => {
                          showInInputFields(index);
                        }}
                      />
                    </StyledMenuItem>
                  ))
                  }
                </StyledMenu>
              </div>
            </Form>

            <Form>
              <h2 className="mt-4">
                Update Vehicle Type Fares of:{" "}
                {vehicleType ? vehicleType : "Please select vehicle"}
              </h2>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <h3> </h3>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Base fare
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={baseFare}
                        required="true"
                        id="input-username"
                        placeholder="Enter base fare"
                        type="number"
                        onChange={(e) => setbaseFare(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Price per minute
                      </label>
                      <Input
                        className="form-control-alternative"
                        required="true"
                        id="input-email"
                        placeholder="Enter price per Minute"
                        defaultValue={pricePerMin}
                        type="Number"
                        onChange={(e) => setpricePerMin(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Price per Kilometer
                      </label>
                      <Input
                        className="form-control-alternative form-control"
                        id="input-email"
                        required="true"
                        placeholder="Enter price per km"
                        defaultValue={pricePerKm}
                        type="Number"
                        onChange={(e) => setpricePerKm(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              <div>
                <Button
                  className="my-4"
                  color="primary"
                  onClick={AllFieldsFilled}
                  type="submit"
                >
                  Update
                </Button>
              </div>
            </Form>
            <hr className="my-4" />
          </CardBody>
        </Row>
        <br />

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
      </Container>
    </>
  );
};
export default VehicleManagement;
