import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [position, setPosition] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/employee/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setName(response.data.name);
                setLocation(response.data.location);
                setPosition(response.data.position);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const editEmployee = {
            id: id,
            name: name,
            location: location,
            position: position
        };
        axios.put('http://localhost:4000/api/employee/' + id, editEmployee)
            .then((res) => {
                console.log(res.data);
                navigate('/list');
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Employee Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Branch Location: </label>
                    <input type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Employee Position: </label>
                    <input type="text"
                        className="form-control"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Employee" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}