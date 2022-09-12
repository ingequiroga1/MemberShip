import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardSubtitle,
} from "reactstrap";
import ReactTable from "components/ReactTable/ReactTable.js";
import { Redirect } from "react-router-dom";

function Usuarios() {
  const [lstUsuarios, setLstUsuarios] = useState([]);
  const [dataState, setDataState] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setLstUsuarios(json));
  }, []);

  useEffect(() => {
    setDataState(
      lstUsuarios.map((user) => {
        return {
          id: user.id,
          edit: (
            <div className="actions-right">
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = lstUsuarios.find((o) => o.id === user.id);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nCorreo: " +
                      obj.email +
                      ", \nUsuario: " +
                      obj.username +
                      ", \nTelefono: " +
                      obj.phone +
                      "\n}."
                  );
                }}
                color="success"
                size="sm"
                className="btn-icon btn-link edit"
              >
                <i className="fa fa-edit" />
              </Button>{" "}
            </div>
          ),
          name: user.name,
          email: user.email,
          username: user.username,
          phone: user.phone,
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = lstUsuarios.find((o) => o.id === user.id);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nCorreo: " +
                      obj.email +
                      ", \nUsuario: " +
                      obj.username +
                      ", \nTelefono: " +
                      obj.phone +
                      "\n}."
                  );
                }}
                color="success"
                size="sm"
                className="btn-icon btn-link edit"
              >
                <i className="fa fa-edit" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  //let obj = lstUsuarios.find((o) => o.id === user.id);
                  let filterItems = lstUsuarios.filter(
                    (item) => item.id !== user.id
                  );
                  setLstUsuarios(filterItems);
                }}
                color="danger"
                size="sm"
                className="btn-icon btn-link remove"
              >
                <i className="fa fa-times" />
              </Button>{" "}
            </div>
          ),
        };
      })
    );
  }, [lstUsuarios]);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Usuarios</CardTitle>
            </CardHeader>
            <CardBody>
              <CardSubtitle>
                <Button
                  className="btn-round mb-3"
                  color="primary"
                  href="/admin/user-edit"
                  onClick={() => <Redirect to="/admin/user-edit" />}
                  size="sm"
                >
                  Agregar
                </Button>
              </CardSubtitle>
              <ReactTable
                data={dataState}
                columns={[
                  {
                    Header: "",
                    accessor: "edit",
                    sortable: false,
                    filterable: false,
                  },
                  {
                    Header: "Nombre",
                    accessor: "name",
                  },
                  {
                    Header: "Correo",
                    accessor: "email",
                  },
                  {
                    Header: "Usuario",
                    accessor: "username",
                  },
                  {
                    Header: "Teléfono",
                    accessor: "phone",
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false,
                  },
                ]}
                className="-striped -highlight success-pagination"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Usuarios;
