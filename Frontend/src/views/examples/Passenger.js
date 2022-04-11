import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Header from "components/Headers/Header";
import axios from "axios";

const columns = [
  { field: "id", headerName: "id", width: 100 },
  {
    field: "firstName",
    headerName: "First name",
    width: 145,
    // editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 145,
    // editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 190,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 190,
    editable: true,
  },
];

function DataTable() {
  const [apiRes, setapiRes] = useState([{ id: 1, firstName: "empty" }]);

  useEffect(() => {
    const getdata = async () => {
      console.log("In function of get data passenger ");
      let x = await axios.get("http://localhost:4000/passenger/getInTable");
      console.log(x.data.data);
      setapiRes(x.data.data);
    };
    getdata();
  }, []);
  return (
    <>
      <Header />
      <br></br>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={apiRes}
          columns={columns}
          pageSize={10}
          // checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default DataTable;
