import React from "react";
import { Employees } from "./employees";
import axios from "axios";

export class List extends React.Component {

    constructor(){
        super(); 
        this.componentDidMount = this.componentDidMount.bind(this); 
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/employees')
            .then((response) => {
                this.setState({ employees: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        employees: []
    }

    render() {
        return (
            <div>
                <h3>Employee List</h3>
                <Employees employees={this.state.employees} Reload={this.componentDidMount}></Employees>
            </div>
        );
    }
}