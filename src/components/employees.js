import React from "react";
import { SingleEmployee } from "./singleEmployee";

//mapping of a single employee in the database
export class Employees extends React.Component {
    render() {
        return this.props.employee.map(
            (employee) => {
                return <SingleEmployee employee={employee} key={employee._id} Reload={this.props.Reload}></SingleEmployee>
            }
        );
    }
}