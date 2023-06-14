import {useQuery} from "@apollo/client";
import {CircularProgress, Grid} from "@mui/material";
import React from "react";
import {gql} from "./__generated__";
import EventCard from "./EventCard";

const GET_ALL_EVENTS = gql(
    `query MyQuery {
  allEvents {
    edges {
      node {
        id
        name
        location {
          name
          address
        }
        gender {
          gender
        }
        startDate
        endDate
        sessions {
          edges {
            node {
              name
              startTime
              endTime
            }
          }
        }
        cost
      }
    }
  }
}`
)

function EventsGrid() {
    const {loading, error, data} = useQuery(GET_ALL_EVENTS)

    if (loading) return <CircularProgress/>
    if (error) return <h1>{error.message}</h1>

    if (data === null || data!.allEvents === null || data!.allEvents!.edges == null) {
        return <h1>Error!</h1>
    }

    return <Grid container spacing={1}>
        {data!.allEvents!.edges.map((event) => (
            <Grid item xs>
                <EventCard cost={event!.node!.cost} location={event!.node!.location} name={event!.node!.name}/>
            </Grid>
        ))
        }
    </Grid>
}

export default EventsGrid;