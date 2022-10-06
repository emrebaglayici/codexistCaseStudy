import './App.css';
import Location from "./Location";
import {Container} from "@mui/material";
import MapComp from "./MapComp";


function App() {
    return (
        <div className="App">
            <Container className="main">
                <Location/>
                <MapComp/>
            </Container>
        </div>
    );
}

export default App;
