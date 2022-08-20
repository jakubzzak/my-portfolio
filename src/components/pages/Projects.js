import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import dummy from "../../styles/Dummy.module.css";
import Project from "../common/Project";
import acadsysImage from "../../assets/acadsys.png";
import camasysImage from "../../assets/camasys.png";
import graitorImage from "../../assets/graitor.png";
import hpImage from "../../assets/hp_controller.png";
import clockclifyImage from "../../assets/clocklify.png";
import finnImage from "../../assets/finn.png";

const Projects = () => {
  return (
    <Grid
      id={"Projects"}
      columns={1}
      textAlign={"center"}
      style={{ padding: "3em" }}
      className={dummy.template}
    >
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: "2em" }}>Projects</Header>
        </Grid.Column>
      </Grid.Row>
      <Card.Group stackable centered>
        <Project
          title={"Acadsys"}
          tags={["web app", "invoices", "accounting"]}
          image={acadsysImage}
          description={"Document management system"}
          onButtonClick={() => window.open("https://www.acadsys.com/")}
          btnVisibleLabel={"www.acadsys.com"}
          btnHiddenLabel={"visit"}
        />
        <Project
          title={"Camasys"}
          tags={["cars", "fleet management"]}
          image={camasysImage}
          description={"Everything your car rental company needs"}
          onButtonClick={() => window.open("https://www.camasys.com/")}
          btnVisibleLabel={"www.camasys.com"}
          btnHiddenLabel={"visit"}
        />
        <Project
          title={"Hp controller"}
          tags={["physics", "desktop", "school"]}
          image={hpImage}
          description={"Gui for manipulation of a physics's machine"}
          onButtonClick={() =>
            window.open("https://github.com/TIS2020-FMFI/hp")
          }
          btnVisibleLabel={"www.github.com"}
          btnHiddenLabel={"visit"}
        />
        <Project
          title={"Clocklify"}
          tags={["developer", "terminal", "Clockify"]}
          image={clockclifyImage}
          description={"Track your working hours with a simple tool"}
          onButtonClick={() =>
            window.open("https://www.npmjs.com/package/clocklify")
          }
          btnVisibleLabel={"www.npmjs.com"}
          btnHiddenLabel={"visit"}
        />
        <Project
          title={"FINN.auto"}
          tags={["ecommerce", "cars", "operations", "fleet management"]}
          image={finnImage}
          description={
            "Operations and fleet management within a car e-commerce company"
          }
          onButtonClick={() => window.open("https://www.finn.auto")}
          btnVisibleLabel={"www.finn.auto"}
          btnHiddenLabel={"visit"}
        />
        <Project
          title={"Graitor"}
          tags={["recycle", "treats", "mobile app"]}
          image={graitorImage}
          description={'Recycle more and get extra reward, "treats"'}
          onButtonClick={() => window.open("https://www.graitor.dk/")}
          btnVisibleLabel={"www.graitor.dk"}
          btnHiddenLabel={"visit"}
        />
      </Card.Group>
    </Grid>
  );
};

export default Projects;
