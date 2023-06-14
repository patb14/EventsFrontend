import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

export interface EventLocationProps {
    name: string
    address: string
}

function EventLocation(props: EventLocationProps) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{bgcolor: "red"}}
                >
                    <Typography>
                        Location: {props.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: "red"}}>
                    <Typography>
                        {props.address}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default EventLocation;