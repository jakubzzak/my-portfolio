import React from 'react';
import {Grid, GridRow as Row, GridColumn as Column, List, ListItem, Icon} from "semantic-ui-react";
import Template from "../template";
import dummy from '../../styles/Dummy.module.css'



const Contact = () => {
    return (
        <Grid centered className={dummy.contact} inverted>
            <Row centered>
                <Column textAlign={"center"} style={{ color: "#ffffff" }}>
                    <h3>Contact me</h3>
                    <Icon size={"big"} inverted name={"facebook official"} />
                    <Icon size={"big"} inverted name={"mail"} />
                    <Icon size={"big"} inverted name={"linkedin"} />
                </Column>
            </Row>
            <Row >
                <Column textAlign={"center"} style={{ color: "#ffffff" }}>
                    <Icon size={"small"} inverted name={"copyright outline"} />
                    2020 Jakub Zak
                </Column>
            </Row>
        </Grid>
    )
}

export default Contact;
