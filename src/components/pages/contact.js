import React from 'react';
import {Grid, GridRow as Row, GridColumn as Column, List, ListItem, Icon, Header} from "semantic-ui-react";
import Template from "../template";
import dummy from '../../styles/Dummy.module.css'



const Contact = () => {
    return (
        <Grid id={'Contact'} centered className={dummy.contact} inverted style={{ padding: '3em' }}>
            <Header inverted style={{ marginBottom: '2em' }}>Contact me</Header>
          <Row centered>
                <Column textAlign={"center"} style={{ color: "#ffffff" }}>
                    <Icon size={"big"} link inverted name={"facebook official"} onClick={ () => window.open('https://www.facebook.com/jakub.zak.75098/')} />
                    <Icon size={"big"} link inverted name={"mail"} onClick={ () => window.open('mailto:jakubzak@uteg.sk')} />
                    <Icon size={"big"} link inverted name={"linkedin"} onClick={ () => window.open('https://www.linkedin.com/in/jakub-%C5%BE%C3%A1k-6b02701a0/')} />
                </Column>
            </Row>
            <Row centered>
                <Column textAlign={"center"} style={{ color: "#ffffff" }}>
                    <Icon size={"small"} inverted name={"copyright outline"} />
                    2019 - 2020
                    Jakub Žák
                </Column>
            </Row>
        </Grid>
    )
}

export default Contact;
