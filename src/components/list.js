import React from "react";
import { Employees } from "./employees";
import axios from "axios";

export class List extends React.Component {

    constructor(){
        super();
        //this.Reload = this.Reload.bind(this);  
        this.componentDidMount = this.componentDidMount.bind(this); 
    }

    //change this in the server
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
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
                <h3>Book List</h3>
                <Employees employees={this.state.employees} Reload={this.componentDidMount}></Employees>
            </div>
        );
    }
}