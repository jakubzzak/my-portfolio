import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import dummy from '../../styles/Dummy.module.css';
import { Link } from 'react-router-dom';
import { Grid, GridColumn as Column, GridRow as Row, Icon, Image, Popup } from 'semantic-ui-react';
// import banner from '../../assets/scott-graham-unsplash-large.jpg';
import profilePic from '../../assets/profile.jpeg';


// cmd + [ -> navigate back
const Home = () => {

    const tooltip = {
        borderRadius: 6,
        border: 'transparent',
        backgroundColor: '#888888',
    }

    const [screenHeight, setScreenHeight] = useState();

    useEffect(() => {
        setScreenHeight(window.innerHeight + 30);
    }, [])

    return (
        <Grid id={'Home'} verticalAlign={"middle"} className={styles.home} style={{ height: screenHeight }} textAlign={"center"} columns={2}>
            <Row>
                <Column >
                    <Image src={profilePic} alt={"banner"} size={"small"} circular centered />
                    <br/>
                    <h3>Jakub Žák</h3>
                    <Popup
                        trigger={<Icon link size={"big"} name={"github square"} />}
                        size={"mini"}
                        content='jakubzzak'
                        style={tooltip}
                        position='bottom center'
                    />
                    <Popup
                        trigger={<Icon link size={"big"} name={"stack overflow"} />}
                        size={"mini"}
                        content='user:13845729'
                        style={tooltip}
                        position='bottom center'
                    />
                    <Popup
                        trigger={<Icon link size={"big"} name={"slack"} />}
                        size={"mini"}
                        content='jakubzzak'
                        style={tooltip}
                        position='bottom center'
                    />
                    <Popup
                        trigger={<Icon link size={"big"} name={"facebook official"} />}
                        size={"mini"}
                        content='Jakub Zak'
                        style={tooltip}
                        position='bottom center'
                    />
                    <Popup
                        trigger={<Icon link size={"big"} name={"telegram"} />}
                        size={"mini"}
                        content='jakubzzak'
                        style={tooltip}
                        position='bottom center'
                    />
                    {/*onClick={event => window.location.href='www.google.com'} ---> push('path')*/}
                    <Popup
                        trigger={<Icon link size={"big"} name={"mail"} onClick={ () => window.open('www.google.com', '_blank') } />}
                        size={"mini"}
                        content='zak.jakub67@gmail.com'
                        style={tooltip}
                        position='bottom center'
                    />
                </Column>
            </Row>
        </Grid>
    )
}

export default Home;
