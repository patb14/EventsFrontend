import {CardContent, CardHeader, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import EventLocation, {EventLocationProps} from "./EventLocation";

export interface GenderProps {
    gender: string
}

export interface SessionProps {
    name: string
    startTime: Date
    endTime: Date
}

export interface EventCardProps {
    cost: number
    //endDate: Date
    //gender: GenderProps
    location: EventLocationProps
    name: string
    //sessions: SessionTypeConnection
    //startDate: Date
}

function EventCard(props: EventCardProps) {
    return (
        <Card sx={{bgcolor: 'background.default'}}>
            <CardHeader title={props.name} sx={{bgcolor: 'blue', color: 'white'}}/>
            <CardContent>
                <EventLocation name={props.location.name} address={props.location.address}/>
                <Typography variant={"h4"}>
                    ${props.cost}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EventCard;
