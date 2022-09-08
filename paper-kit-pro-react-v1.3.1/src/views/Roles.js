import React from "react";
import { useHistory } from "react-router-dom";
import { 
    Card, 
    CardBody, 
    CardHeader, 
    CardTitle, 
    Col, 
    Row, 
    Table,
    Button,
    UncontrolledTooltip
} from "reactstrap";

function roles(){
    const history = useHistory();
    const nextPath = () => {
        history.push("/addRole");
      }

    return(
        <>
        <div className="content">
        <h1>Roles en React</h1>
        <button onClick={() => nextPath() }>
        change path 
        </button> 
        <Row>
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Tabla de Roles</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                        <thead className="text-primary">
                            <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th>Job Position</th>
                            <th className="text-center">Since</th>
                            <th className="text-right">Salary</th>
                            <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Mike Monday</td>
                            <td>Marketing</td>
                            <td className="text-center">2013</td>
                            <td className="text-right">€ 49,990</td>
                            <td className="text-right">
                                <Button
                                className="btn-icon btn-neutral"
                                color="info"
                                id="tooltip289345217"
                                size="sm"
                                type="button"
                                >
                                <i className="fa fa-user" />
                                </Button>{" "}
                                <UncontrolledTooltip
                                delay={0}
                                target="tooltip289345217"
                                >
                                Like
                                </UncontrolledTooltip>
                                <Button
                                className="btn-icon btn-neutral"
                                color="success"
                                id="tooltip247076752"
                                size="sm"
                                type="button"
                                >
                                <i className="fa fa-edit" />
                                </Button>{" "}
                                <UncontrolledTooltip
                                delay={0}
                                target="tooltip247076752"
                                >
                                Edit
                                </UncontrolledTooltip>
                                <Button
                                className="btn-icon btn-neutral"
                                color="danger"
                                id="tooltip1643763"
                                size="sm"
                                type="button"
                                >
                                <i className="fa fa-times" />
                                </Button>{" "}
                                <UncontrolledTooltip delay={0} target="tooltip1643763">
                                Delete
                                </UncontrolledTooltip>
                            </td>
                        </tr>
                        </tbody>
                        </Table>

                    </CardBody>
                </Card>    
            </Col>
        </Row>
        </div>    
        </>
    );
}

export default roles;