import React from "react";
import { Button, Card, Image, Label } from "semantic-ui-react";
import imgPlaceholder from "../../assets/placeholder-image.png";
import styles from "./project.module.css";

const Project = ({
  image,
  title,
  tags,
  description,
  onButtonClick,
  btnVisibleLabel,
  btnHiddenLabel,
  disabled,
}) => {
  return (
    <Card className={styles.projectCard} style={{ width: "350px" }}>
      <Image src={image ?? imgPlaceholder} fluid style={{ height: "180px" }} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {tags.map((tag, index) => {
            return (
              <Label key={index} color="orange" horizontal>
                {tag}
              </Label>
            );
          })}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content>
        {disabled ? (
          <Button onClick={onButtonClick} disabled>
            Soon
          </Button>
        ) : (
          <Button onClick={onButtonClick} animated={"vertical"}>
            <Button.Content visible>{btnVisibleLabel}</Button.Content>
            <Button.Content hidden>{btnHiddenLabel}</Button.Content>
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default Project;
