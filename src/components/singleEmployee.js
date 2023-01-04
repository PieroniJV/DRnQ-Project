import Button from "react-bootstrap/Button";
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";

export class SingleEmployee extends React.Component {
    constructor() {
        super();
        this.DeleteEmployee = this.DeleteBook.bind(this);
    }
    DeleteEmployee(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/employee/' + this.props.employee._id)
        .then((res)=>{
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
                                {this.props.employee.position},{this.props.employee.id}
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

