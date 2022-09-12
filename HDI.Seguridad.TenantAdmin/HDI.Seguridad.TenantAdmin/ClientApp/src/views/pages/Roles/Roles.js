import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import ReactTable from "components/ReactTable/ReactTable";
import BasicTable from "components/RolTable/BasicTable"

function Roles() {
  const [lstRoles, setLstRoles] = useState([]);
  const [dataSetRoles, setDataSetRoles] = useState([]);

  //useEffect => obtenerRoles
  return (
    <>
          <BasicTable />
    </>
  );
}

export default Roles;
