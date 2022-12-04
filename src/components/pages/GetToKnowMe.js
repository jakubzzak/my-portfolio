import React from "react";
import { Grid, Header } from "semantic-ui-react";
import dummy from "../../styles/Dummy.module.css";
import GoodReadsWidget from "../external-widgets/goodreads";

const About = () => {
  return (
    <Grid
      id={"GetToKnowMe"}
      className={dummy.template}
      textAlign={"center"}
      verticalAlign={"middle"}
      style={{ padding: "3em" }}
    >
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: "2em" }}>Get to know me</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className={dummy.section}>
          <p className={dummy.paragraph}>
            I do not like to get bored so I try to fill my free time with
            learning new things like languages. These days I am mostly focusing
            on improving my English, however, I also enjoy exploring other
            languages like Danish, Russian, and currently German. Languages is
            just one of my curiosities. I would like to a learn a little about
            everything.
          </p>
          <p className={dummy.paragraph}>
            <Grid stackable>
              <Grid.Column width={8}>
                As a software engineer, there are times when I really have to
                look away from a screen. In these cases, I will more than likely
                reach for a book. My literary collection includes works such
                as:&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People?ac=1&from_search=true&qid=ZOxzEBKoo4&rank=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>
                    How to Win Friends and Influence People
                  </span>
                </a>{" "}
                by Dale Carnegie,&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/book/show/26156469-never-split-the-difference?ac=1&from_search=true&qid=5EXdraZgQu&rank=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>Never Split the Difference</span>
                </a>{" "}
                by Chris Voss,&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/book/show/3735293-clean-code?from_search=true&from_srp=true&qid=OmOUbnHiOY&rank=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>Clean Code</span>
                </a>{" "}
                by Robert C. Martin,&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/book/show/76865.Good_to_Great?ac=1&from_search=true&qid=h043yQ6So6&rank=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>Good to Great</span>
                </a>{" "}
                by James C. Collins,&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow?ac=1&from_search=true&qid=b5tlFFti6s&rank=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>Thinking fast and slow</span>
                </a>{" "}
                by Daniel Kahneman or&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/book/show/12609433-the-power-of-habit?ac=1&from_search=true&qid=BIGKyJUktD&rank=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>The Power of Habit</span>
                </a>{" "}
                by Charles Duhigg and many more. You can check out my whole
                library on&nbsp;
                <a
                  className="ref"
                  href="https://www.goodreads.com/user/show/41121845-jakub-zak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={dummy.link}>goodreads.com</span>
                </a>
                .
              </Grid.Column>
              <Grid.Column style={{ float: "center" }}>
                <GoodReadsWidget />
              </Grid.Column>
            </Grid>
          </p>
          <p className={dummy.paragraph}>
            Traveling is another one of my passions. Although I have not been
            traveling for long, I have discovered an appreciation for different
            cultures around the world. I have had the privilege of meeting new
            and exciting people who have introduced new ideas and foods to me. I
            hope to travel to many more countries in the future to broaden my
            horizons even further.
          </p>
          <p className={dummy.paragraph}>
            And last but not least, I spend a lot of time hanging out with
            friends and doing all kinds of sports like running, biking,
            swimming, working out, snowboarding, cross-country skiing, beach
            volleyball, tennis .. pretty much anything :).
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default About;
