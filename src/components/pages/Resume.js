import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineItem from "../common/TimelineItem";

const Resume = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 13 1.7">
        <path
          d="M 0 2 C 0 -1 8 0 19 2 C 12.6667 2 6.3333 2 0 2"
          fill="#000000"
        />
      </svg>
      <Grid
        id={"Resume"}
        textAlign={"center"}
        style={{ backgroundColor: "black", padding: "3em" }}
      >
        <Grid.Row>
          <Grid.Column width={16}>
            <Header inverted style={{ marginBottom: "2em" }}>
              Resume
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <VerticalTimeline>
              <TimelineItem
                title={"High School Graduation"}
                subtitle={
                  "Secondary grammar school of Jozef Herda in Trnava, Slovakia"
                }
                description={
                  "Successfully graduated from high school, took final exam in Mathematics, English and Informatics"
                }
                date={"May 2018"}
                icon={
                  <Icon
                    name={"graduation"}
                    color={"black"}
                    size={"big"}
                    fitted
                  />
                }
              />
              <TimelineItem
                title={"Fulltime Student"}
                subtitle={
                  "Faculty of mathematics, physics and informatics of Comenius University, Bratislava"
                }
                description={
                  "Attending daily study program: Applied informatics"
                }
                date={"Sep 2018 - Feb 2021"}
                icon={
                  <Icon
                    name={"graduation"}
                    color={"black"}
                    size={"big"}
                    fitted
                  />
                }
              />
              <TimelineItem
                title={"Work and Travel Program"}
                subtitle={"New Jersey, USA"}
                description={
                  "Daily interaction with customers followed by traveling the east coast"
                }
                date={"Jun - Sep 2019"}
                icon={
                  <Icon name={"compass"} color={"black"} size={"big"} fitted />
                }
              />
              <TimelineItem
                title={"Full Stack Developer"}
                subtitle={"At United Technologies, Bratislava"}
                description={
                  "Working on web apps using React, Spring Boot and PostgreSQL"
                }
                date={"Oct 2019 - Nov 2021"}
                icon={
                  <Icon name={"code"} color={"black"} size={"big"} fitted />
                }
              />
              <TimelineItem
                title={"Fulltime Student"}
                subtitle={"UCN Aalborg, Denmark"}
                description={
                  "Pursuing bachelor degree in Software Development Top up programme"
                }
                date={"Feb 2021 - Jun 2022"}
                icon={
                  <Icon
                    name={"graduation"}
                    color={"black"}
                    size={"big"}
                    fitted
                  />
                }
              />
              {/* <TimelineItem
                title={"Personal project"}
                subtitle={"Cybik"}
                description={
                  "Working on a custom eshop using Next, Spring and Postgres"
                }
                date={"Apr 2021 - present"}
                icon={
                  <Icon name={"code"} color={"black"} size={"big"} fitted />
                }
              /> */}
              <TimelineItem
                title={"Full Stack App Developer"}
                subtitle={"At Graitor, Aalborg"}
                description={
                  "Working on internal web apps and a mobile app using Vue, Laravel, Mysql and Flutter"
                }
                date={"Aug 2021 - Jan 2022"}
                icon={
                  <Icon name={"code"} color={"black"} size={"big"} fitted />
                }
              />
              <TimelineItem
                title={"Backend Software Engineer Intern"}
                subtitle={"At FINN, Operations department"}
                description={
                  "Working on internal microservices using Typescript, Python, Make (Integromat) and Retool with AWS, Serverless approach"
                }
                date={"Feb - Jul 2022"}
                icon={
                  <Icon name={"code"} color={"black"} size={"big"} fitted />
                }
              />
              <TimelineItem
                title={"Uni Graduation"}
                subtitle={"UCN Aalborg, Denmark"}
                description={"Bachelor degree in Software Development"}
                date={"Jun 2022"}
                icon={
                  <Icon
                    name={"graduation"}
                    color={"black"}
                    size={"big"}
                    fitted
                  />
                }
              />
              <TimelineItem
                title={"Backend Software Engineer (L1)"}
                subtitle={"At FINN, Fleet department"}
                description={
                  "Working on internal microservices using Typescript, Python and Make (Integromat) and Retool with AWS, Serverless approach"
                }
                date={"Aug 2022 - present"}
                icon={
                  <Icon name={"code"} color={"black"} size={"big"} fitted />
                }
              />
            </VerticalTimeline>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 0 15 2.5">
        <path d="M 0 0 C 6.6667 1.3333 20 4 20 0" fill="#000000" />
      </svg>
    </div>
  );
};

export default Resume;
