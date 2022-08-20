import React from "react";
import { Grid, Icon, Header } from "semantic-ui-react";
import dummy from "../../styles/Dummy.module.css";

const Contact = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 0 15 2">
        <path d="M 0 2 C 2 2 10 2 19 2 C 17 -1 16 0 0 2" fill="#000000" />
      </svg>
      <Grid
        id={"Contact"}
        textAlign={"center"}
        className={dummy.contact}
        inverted
        style={{ padding: "3em" }}
      >
        <Grid.Row>
          <Grid.Column width={16}>
            <Header inverted style={{ marginBottom: "2em" }}>
              Contact me
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign={"center"} style={{ color: "#ffffff" }}>
            <Icon
              size={"big"}
              link
              inverted
              name={"mail"}
              onClick={() => window.open("mailto:zak.jakub67@gmail.com")}
            />
            <Icon
              size={"big"}
              link
              inverted
              name={"linkedin"}
              onClick={() =>
                window.open("https://www.linkedin.com/in/jakubzzak/")
              }
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ color: "#ffffff" }}>
            <Icon size={"small"} inverted name={"copyright outline"} />
            {new Date().getFullYear()} Jakub Žák
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Contact;
