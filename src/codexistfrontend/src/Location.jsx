import React from "react";
import TextField from "@mui/material/TextField";
import {Button} from '@mui/material';
import {Formik, Form, useFormik} from "formik";
import axios from "axios";
import * as Yup from 'yup';
import './App.css';

export default function Location({onValues, onCenterChange}) {
    const validate = Yup.object().shape({
        latitude: Yup.number()
            .required('Required'),
        longitude: Yup.number()
            .required('Required'),
        radius: Yup.number().required()
    });

    const onSubmit = () => {
        axios.get('http://localhost:8070/api/v1/locations/', {
            params: {
                lat: formik.values.latitude,
                lng: formik.values.longitude,
                radius: formik.values.radius
            },
        }).then(r => {
            const latLng = r["data"]["results"].map(v => v["geometry"]["location"]);
            console.log("values: ", latLng);
            onValues(latLng);

            onCenterChange({
                lng: Number(formik.values.longitude),
                lat: Number(formik.values.latitude)
            })
        })
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
        validationSchema:validate,
        validateOnBlur: true,
        onSubmit,
    });



    const validateInput = (str) => str.match(/^[+-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$/);

    return (
        <>
            <Formik validate={validate} initialValues={formik.initialValues}>
                {({ errors, touched }) => (
                    <Form className="ui form" onSubmit={formik.handleSubmit}>
                        <h2>Search Nearby</h2>
                        <TextField
                            name="latitude" label={"Latitude"} value={formik.values.latitude} onChange={formik.handleChange}
                        />
                        {!validateInput(formik.values.latitude) && "Error latitude"}
                        <TextField
                            name="longitude" label={"Longitude"} value={formik.values.longitude} onChange={formik.handleChange}
                        />

                        {!validateInput(formik.values.longitude) && "Error longitude"}

                        <TextField
                            name="radius" label={"Radius"} value={formik.values.radius} onChange={formik.handleChange}
                        />
                        {!validateInput(formik.values.radius) && "Error radius"}

                        <br/>
                        <Button className="btn-class" type="submit">
                            Search
                        </Button>
                        <br/>

                    </Form>
                )}
            </Formik>

        </>

    );
}