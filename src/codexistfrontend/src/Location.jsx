import './App.css';
import TextField from "@mui/material/TextField";
import React from "react";
import {Button} from '@mui/material';
import {Formik, Form, useFormik} from "formik";
import axios from "axios";

export default function Location() {
    const onSubmit = () => {
        axios.get('http://localhost:8070/api/v1/locations/', {
            params: {
                lat: formik.values.latitude,
                lng: formik.values.longitude,
                radius: formik.values.radius
            },
        }).then(r => console.log(r))
            .catch(function (error) {
                console.log(error)
            })
    };

    const formik = useFormik({
        initialValues: {
            latitude: "",
            longitude: "",
            radius: "",
        },
        validateOnBlur: true,
        onSubmit,
    });

    return (
        <Formik initialValues={formik.initialValues}>
            <Form className="ui form" onSubmit={formik.handleSubmit}>
                <h2>Search Nearby</h2>
                <TextField
                    name="latitude" label={"Latitude"} value={formik.values.latitude} onChange={formik.handleChange}
                />

                <TextField
                    name="longitude" label={"Longitude"} value={formik.values.longitude} onChange={formik.handleChange}
                />
                <TextField
                    name="radius" label={"Radius"} value={formik.values.radius} onChange={formik.handleChange}
                />
                <br/>
                <Button className="btn-class" type="submit">
                    Search
                </Button>
                <br/>
            </Form>
        </Formik>

    );
}