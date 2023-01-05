import React from "react";
import axios from "axios";

//class for adding new employees to the database
export class Add extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmployeeLocation = this.onChangeEmployeeLocation.bind(this);
        this.onChangeEmployeePosition = this.onChangeEmployeePosition.bind(this);

        this.state = {
            name: '',
            location: '',
            position: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.name},
        ${this.state.location},
        ${this.state.position}`);

        const employee = {
            name: this.state.name,
            location: this.state.location,
            position: this.state.position
        }

        axios.post('http://localhost:4000/api/employees', employee)
            .then()
            .catch();

        this.setState({
            name: '',
            location: '',
            position: ''
        })
    }

    onChangeEmployeeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmployeeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }
    onChangeEmployeePosition(e) {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Hello from Add Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Employee Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeEmployeeName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Employee Location: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeEmployeeLocation}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Position: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.onChangeEmployeePosition}
                        />
                    </div>

                    <input type="submit" value="Add Employee" />
                </form>
            </div>
        );
    }
}