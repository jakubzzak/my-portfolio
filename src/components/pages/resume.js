import React, { useState } from 'react';
import {Button, Grid, GridColumn as Column, GridRow as Row} from 'semantic-ui-react';
import Education from '../common/education';
import Experience from '../common/experience';
import Skills from '../common/skills';
import Timeline from "react-timeline-semantic-ui";

// -- timeline --
// color: (optional) default is 'grey'. Enums: 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'.

const Resume = () => {

    const [isTimeline, setIsTimeline] = useState(true);

    return (
        <Grid id={'Resume'} textAlign={"center"} style={{ backgroundColor: 'black', padding: '3em'}}>
            <Row>
                <Column>
                    <Button size={"tiny"} content={ isTimeline ? 'Show doc form':'Show timeline'} inverted onClick={() => setIsTimeline(!isTimeline)} />
                </Column>
            </Row>
            { !isTimeline &&
                <Row>
                    <Column width={14}>
                        <h3>Education</h3>
                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName={"My University"}
                            schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                        />

                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="My 2nd University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h3>Experience</h3>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h3>Skills</h3>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />


                    </Column>
                </Row>
            }
            { isTimeline &&
                <Row>
                    <Column style={{margin: '10px', marginTop: '100px'}}>
                        <h3>About Page</h3>
                        <Timeline
                            direction="left"
                            icon="user"
                            title="Skola"
                            time="2020-01-01"
                            description="Zacal som chodit do skoly"
                            color="blue"
                            tags={[]}
                            lineHeight={2}
                        />
                        <Timeline
                            direction="right"
                            icon="car"
                            title="Title"
                            time="2019-08-08"
                            description="Auticko jazdim."
                            color="green"
                            tags={['tag1', 'tag2', 'carr']}
                            lineHeight={2}
                        />
                    </Column>
                </Row>
            }
        </Grid>
    )
}

export default Resume;
