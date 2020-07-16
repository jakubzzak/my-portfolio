import React from 'react';
import { Grid, GridColumn as Column, GridRow as Row } from "semantic-ui-react";
import dummy from "../../styles/Dummy.module.css";

// icon: https://react.semantic-ui.com/elements/icon/

const About = () => {
    return (
        <Grid className={dummy.template}>
            <Row>
                <Column textAlign={"center"} >
                    <Row>
                        <h3>Hi, I am</h3>
                    </Row>
                    <Row>
                        <h4>Jakub Zak</h4>
                    </Row>
                    <Row>
                        <h5>I am a software enthusiast!</h5>
                    </Row>
                </Column>
            </Row>
        </Grid>
    )
}

export default About;
