import React from "react";
import axios from "axios";

export class Add extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
        this.onChangeEmployeePosition = this.onChangeEmployeePosition.bind(this);

        this.state = {
            name: '',
            id: '',
            position: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.name},
        ${this.state.id},
        ${this.state.position}`);

        const employee = {
            name: this.state.name,
            id: this.state.id,
            position: this.state.position
        }

        axios.post('http://localhost:4000/api/books', employee)
            .then()
            .catch();

        this.setState({
            name: '',
            id: '',
            position: ''
        })
    }

    onChangeEmployeeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmployeeId(e) {
        this.setState({
            id: e.target.value
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
                        <label>Add Employee Id: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.id}
                            onChange={this.onChangeEmployeeId}
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