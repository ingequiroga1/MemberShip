import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import {
    Button
} from "reactstrap";


let dataTable = [
    {
        "idRol": 45,
        "name": "ACA_AdmAgentesAnalista",     
    },
    {
        "idRol": 20,
        "name": "ACA_AdmAgentesAnalistaBasico",
    },
    {
        "idRol": 30,
        "name": "ACA_AdmAgentesAnalistaBonos",
    },
    {
        "idRol": 41,
        "name": "ACA_AdmAgentesAnalistaPrestamos",
    }
]

export const BasicTable = () => {
    const [dataState, setDataState] = React.useState(
        dataTable.map((prop, key) => {
            //console.log(prop.name)
            console.log(key)
            return {
                id: key,
                idRol: prop.idRol,
                editar: (
                    <Button
                        onClick={() => {
                            let obj = dataState.find((o) => o.id === key);
                            alert(
                                "You've clicked LIKE button on \n{ \nName: " +
                                obj.name +
                                ", \nIdRol: " +
                                obj.idRol +
                                "\n}."
                            );
                        }}
                    >
                       Editar
                    </Button>
                ),
                name: prop.name,
                usuarios: <Button>Usuario</Button>,
                permisos: <Button>Permisos</Button>,
                eliminar: <Button>Eliminar</Button>
            }
        })
    )

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => dataState, [])

    const tableInstance = useTable({
        columns,
        data
    })



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    //console.log(rows)
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                               
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}> {
                                        column.render('Header')
                                    }
                            </th>
                            ))}
                       
                    </tr>
                    )) }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr{...row.getRowProps()}>
                                {
                                     
                                    row.cells.map(cell => {
                                        
                                        return <td {...cell.getCellProps()}> {cell.render('Cell') }</td>
                                    })
                                }
                           
                            </tr>
                         
                            )
                    })
                }
               
            </tbody>
        </table>
        )
}
export default BasicTable;