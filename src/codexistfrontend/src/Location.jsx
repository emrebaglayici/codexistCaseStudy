import React from "react";
import TextField from "@mui/material/TextField";
import {Button} from '@mui/material';
import {Formik, Form, useFormik} from "formik";
import axios from "axios";
import * as Yup from 'yup';
import 'react-notifications/lib/notifications.css';
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

        axios.get('https://case-near-by.herokuapp.com/api/v1/locations/', {
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
        validationSchema: validate,
        validateOnBlur: true,
        onSubmit,
    });
    return (
        <>
            <Formik validate={validate} initialValues={formik.initialValues}>

                {({errors, touched}) => (
                    <Form className="ui form" onSubmit={formik.handleSubmit}>
                        <h2>Search Nearby</h2>
                        <h4>Input values must be number. </h4>
                        <p>Example : latitude => 38.49156648842372,
                            longitude => 26.94799187287517, radius => 1500</p>
                        <TextField
                            name="latitude" label={"Latitude"} value={formik.values.latitude}
                            onChange={formik.handleChange}
                        />

                        <TextField
                            name="longitude" label={"Longitude"} value={formik.values.longitude}
                            onChange={formik.handleChange}
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
                )}
            </Formik>
        </>
    );
}

