import React from 'react';
import './App.css';
import {useQuery} from "@apollo/client";
import {gql} from "./__generated__";

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

function AllEventsList() {
    const {loading, error, data} = useQuery(GET_ALL_EVENTS)

    if (loading) return 'Loading...'
    if (error) return error.message

    return (
        <div>
            {data?.allEvents?.edges.map((event) => (
                <div>
                    <h1>
                        {event?.node?.name + "\n"}
                    </h1>
                    <p>
                        {event?.node?.location?.name} - {event?.node?.location?.address}
                    </p>
                    <p>
                        {"$" + event?.node?.cost}
                    </p>
                </div>
            ))}
        </div>
    )
}

function App() {
    return AllEventsList()
}

export default App;
