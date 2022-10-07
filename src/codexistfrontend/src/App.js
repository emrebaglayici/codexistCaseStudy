import './App.css';
import Location from "./Location";
import {Container} from "@mui/material";
import MapComp from "./MapComp";
import {useState} from "react";


function App() {
    const [values, setValues] = useState([]);
    const [center, setCenter] = useState({
        lat: 38.49156648842372,
        lng: 26.94799187287517,
    });
    return (
        <div className="App">
            <Container className="main">
                <Location
                    onValues={(_values) => {
                        setValues(_values);
                    }}
                    onCenterChange={(_center) => {
                        setCenter((prevState) => ({...prevState, ..._center}) )
                    }}
                />
                <MapComp center={center} values={values}/>
            </Container>
        </div>
    );
}

export default App;
