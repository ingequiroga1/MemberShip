import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

function UsuarioEdit({ entity, type }) {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [openedCollapses, setOpenedCollapses] = useState([
    "collapseOne",
    "collapse1",
  ]);
  const [multipleSelect, setMultipleSelect] = useState(null);
  const [valorOficina, setValorOficina] = useState(null);

  const collapsesToggle = (evt, collapse) => {
    evt.preventDefault();
    if (openedCollapses.includes(collapse))
      setOpenedCollapses(openedCollapses.filter((item) => item !== collapse));
    else {
      openedCollapses.push(collapse);
      setOpenedCollapses([...openedCollapses, collapse]);
    }
  };

  function limpiarDatos(evt) {
    evt.preventDefault();
    alert("datos limpiados");
  }

  function onClickGuardarUsuario(evt){
    evt.preventDefault();
  }

  //ToDO pasar estas funciones a la clase Usuarios
  function onSubmitEvent(evt) {}
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">DATOS DEL USUARIO</CardTitle>
            </CardHeader>
            <CardBody>
              <Form
                onSubmit={(evt) => onSubmitEvent(evt)}
                className="form-horizontal"
                method="get"
              >
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Nombre Completo:</Label>
                      <Input id="txtNombre" placeholder="Nombre" type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>SSO:</Label>
                      <Input id="txtSSO" placeholder="SSO" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Correo:</Label>
                      <Input id="txtCorreo" placeholder="Correo" type="email" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Login:</Label>
                          <Input
                            id="txtLogin"
                            placeholder="Login"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Password:</Label>
                          <Input
                            id="txtPassword"
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Teléfono 1:</Label>
                      <Input
                        id="txtTelefono1"
                        placeholder="Teléfono 1"
                        type="tel"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Teléfono 2:</Label>
                      <Input
                        id="txtTelefono2"
                        placeholder="Teléfono 2"
                        type="tel"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Pregunta de seguridad:</Label>
                      <Input
                        id="txtPreguntaSeguridad"
                        placeholder="Pregunta de seguridad"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Respuesta:</Label>
                      <Input
                        id="txtRespuesta"
                        placeholder="Respuesta"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Oficina:</Label>
                      <Select
                        id="slcOficina"
                        className="react-select primary"
                        classNamePrefix="react-select"
                        name="singleSelect"
                        value={singleSelect}
                        onChange={(value) => setSingleSelect(value)}
                        options={[
                          {
                            value: "",
                            label: "Oficina",
                            isDisabled: true,
                          },
                          { value: "2", label: "Guadalajara" },
                          { value: "3", label: "Leon" },
                        ]}
                        placeholder="Oficina"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Tipo de usuario:</Label>
                      <Select
                        id="slcTipoUsuario"
                        className="react-select primary"
                        classNamePrefix="react-select"
                        name="slcTipoUsuario"
                        value={tipoUsuario}
                        onChange={(value) => setTipoUsuario(value)}
                        options={[
                          {
                            value: "",
                            label: "Tipo de Usuario",
                            isDisabled: true,
                          },
                          { value: "1", label: "Admin" },
                          { value: "2", label: "Agente" },
                          { value: "3", label: "Emisor" },
                        ]}
                        placeholder="Tipo de Usuario"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col sm="10">
                    <FormGroup check inline>
                      <Label check>
                        <Input id="chkAprobado" type="checkbox" />
                        <span className="form-check-sign" />
                        Aprobado
                      </Label>
                    </FormGroup>{" "}
                    <FormGroup check inline>
                      <Label check>
                        <Input id="chkActivo" type="checkbox" />
                        <span className="form-check-sign" />
                        Activo
                      </Label>
                    </FormGroup>{" "}
                    <FormGroup check inline>
                      <Label check>
                        <Input id="chkDisponible" type="checkbox" />
                        <span className="form-check-sign" />
                        Disponible
                      </Label>
                    </FormGroup>{" "}
                    <FormGroup check inline>
                      <Label check>
                        <Input id="chkBloqueado" type="checkbox" />
                        <span className="form-check-sign" />
                        Bloqueado
                      </Label>
                    </FormGroup>{" "}
                    <FormGroup check inline>
                      <Label check>
                        <Input id="chkBaja" type="checkbox" />
                        <span className="form-check-sign" />
                        Baja
                      </Label>
                    </FormGroup>{" "}
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <Card className="card-plain">
                      <CardBody className="text-center">
                        <Button
                          id="btnLimpiar"
                          className="btn-link"
                          color="primary"
                          onClick={(evt) => limpiarDatos(evt)}
                        >
                          Limpiar
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="12">
                    <Card>
                      <CardBody>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                        >
                          <Card className="card-plain">
                            <CardHeader role="tab">
                              <a
                                aria-expanded={openedCollapses.includes(
                                  "collapseOne"
                                )}
                                href="#user"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(evt) =>
                                  collapsesToggle(evt, "collapseOne")
                                }
                              >
                                Asignar Rol
                                <i className="nc-icon nc-minimal-down" />
                              </a>
                            </CardHeader>
                            <Collapse
                              role="tabpanel"
                              isOpen={openedCollapses.includes("collapseOne")}
                            >
                              <CardBody>
                                <Row>
                                  <Col md="12">
                                    <Select
                                      className="react-select info"
                                      classNamePrefix="react-select"
                                      placeholder="Seleccionar Rol"
                                      name="multipleSelect"
                                      closeMenuOnSelect={false}
                                      isMulti
                                      value={multipleSelect}
                                      onChange={(value) =>
                                        setMultipleSelect(value)
                                      }
                                      options={[
                                        {
                                          value: "",
                                          label: "Roles",
                                          isDisabled: true,
                                        },
                                        { value: "2", label: "Agente " },
                                        { value: "3", label: "Admin" },
                                        { value: "4", label: "Emisor" },
                                      ]}
                                    />
                                  </Col>
                                </Row>
                              </CardBody>
                            </Collapse>
                          </Card>
                          <Card className="card-plain">
                            <CardHeader role="tab">
                              <a
                                aria-expanded={openedCollapses.includes(
                                  "collapseOficina"
                                )}
                                className="success"
                                href="#oficina"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(evt) =>
                                  collapsesToggle(evt, "collapseOficina")
                                }
                              >
                                Asignar oficina{" "}
                                <i className="nc-icon nc-minimal-down" />
                              </a>
                            </CardHeader>
                            <Collapse
                              role="tabpanel"
                              isOpen={openedCollapses.includes(
                                "collapseOficina"
                              )}
                            >
                              <CardBody>
                              <Row>
                                  <Col md="12">
                                    <Select
                                      className="react-select info"
                                      classNamePrefix="react-select"
                                      placeholder="Seleccione la(s) oficina(s)"
                                      name="mslOficina"
                                      closeMenuOnSelect={false}
                                      isMulti
                                      value={valorOficina}
                                      onChange={(value) =>
                                        setValorOficina(value)
                                      }
                                      options={[
                                        {
                                          value: "",
                                          label: "Oficina(s)",
                                          isDisabled: true,
                                        },
                                        { value: "2", label: "Leon" },
                                        { value: "3", label: "Guadalajara" },
                                        { value: "4", label: "Aguascalientes" },
                                      ]}
                                    />
                                  </Col>
                                </Row>
                              </CardBody>
                            </Collapse>
                          </Card>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                {/* ----------------------------------------- */}
                <Row>
                  <Col md="6">
                    <Button 
                    id="btnGuardarUsuario"
                    className="btn btn-success"
                    onClick={(evt) => onClickGuardarUsuario(evt)}
                    >
                      Guardar
                    </Button>
                  </Col>
                  <Col md="6"></Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UsuarioEdit;
