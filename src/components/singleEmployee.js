import Button from "react-bootstrap/Button";
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";

//blueprint for reading and rendering a single employee from the database
export class SingleEmployee extends React.Component {
    constructor() {
        super();
        this.DeleteEmployee = this.DeleteBook.bind(this);
    }
    //function to delete an employee from the database using the id value
    DeleteEmployee(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/employee/' + this.props.employee._id)
            .then((res) => {
                this.props.Reload();
            })
            .catch();
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.employee.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer >
                                {this.props.employee.position},{this.props.employee.location}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link className="btn btn-primary" to={'/edit/' + this.props.employee._id}>
                        Edit
                    </Link>
                    <Button variant="danger" onClick={this.DeleteEmployee}>Delete</Button>
                </Card>
            </div>
        );
    }
}

