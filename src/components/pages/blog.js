import React from 'react';
import dummy from '../../styles/Dummy.module.css'
import {Container, Grid, GridColumn as Column, GridRow as Row} from "semantic-ui-react";


const Blog = () => {
    return (
        <Grid columns={1} className={dummy.template}>
            <Row textAlign={"center"}>
                <Column >
                    <Container className={dummy.template}>
                        <h3>Blog</h3>
                    </Container>
                </Column>
            </Row>
        </Grid>
    )
}

export default Blog;
