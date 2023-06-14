import React from 'react';
import './App.css';
import {Container, createTheme, ThemeProvider} from "@mui/material";
import EventCard from "./EventCard";
import EventsGrid from "./EventsGrid";

export const appTheme = createTheme({
    palette: {
        background: {
            default: "red",
        },
        text: {
            primary: 'black',
            secondary: 'white'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <Container maxWidth={"sm"}>
                <EventsGrid/>
            </Container>
        </ThemeProvider>
    )
}

export default App;
