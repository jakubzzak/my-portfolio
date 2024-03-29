import React, { useEffect, useState } from "react";
import {
  Button,
  Dimmer,
  Header,
  Icon,
  Card,
  Image,
  Label,
  Segment,
  Grid,
} from "semantic-ui-react";
import PropTypes from "prop-types";

const Post = ({
  image,
  title,
  tags,
  description,
  onButtonClick,
  btnVisibleLabel,
  btnHiddenLabel,
}) => {
  const dimmerStyle = {
    width: window.innerWidth * 0.9,
  };

  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const [isCloseIconHover, setIsCloseIconHover] = useState(false);

  const onClick = () => {
    dimmerStyle.width = window.innerWidth * 0.9;
    setIsOpened(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setIsLoading(true);
    setDetail({});
    // TODO: download the post
    // detail = api.call.data
    // setIsLoading(false)
  }, []);

  return (
    <Card
      style={{
        border: "1.5px black solid",
        borderRadius: "3px",
        width: "350px",
        boxShadow:
          "0px 0px 15px 15px rgba(255, 255, 255, 0.1), 0px 0px 13px 10px rgba(255, 255, 255, 0.3), 0px 0px 10px 5px rgba(255, 255, 255, 0.5)",
        margin: "2em",
      }}
    >
      <Image src={image} wrapped ui={false} />
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
        <Button onClick={onClick} animated={"vertical"}>
          <Button.Content visible>{btnVisibleLabel}</Button.Content>
          <Button.Content hidden>{btnHiddenLabel}</Button.Content>
        </Button>
      </Card.Content>

      <Dimmer active={isOpened} page>
        {
          isLoading && (
            <Grid centered>
              <Grid.Row>
                <Icon.Group size="big">
                  <Icon loading size="big" name="circle notch" />
                  <Icon name="file" />
                </Icon.Group>
              </Grid.Row>
              <Grid.Row>loading, please wait</Grid.Row>
            </Grid>
          )
          // <Icon name={"circle"} size={"big"} color={"orange"} loading/>
        }
        {!isLoading && (
          <Segment style={{ ...dimmerStyle }}>
            <Icon
              name={"close"}
              color={"black"}
              size={"big"}
              corner={"top right"}
              onClick={() => {
                setIsOpened(false);
                setIsLoading(true);
              }}
              onMouseOver={() => setIsCloseIconHover(true)}
              onMouseLeave={() => setIsCloseIconHover(false)}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                cursor: isCloseIconHover ? "pointer" : "default",
              }}
            />
            <Header>
              {title}
              <Header.Subheader>{detail.date}</Header.Subheader>
            </Header>
            <Grid style={{ color: "black" }}>
              <Grid.Column>Coming in May..</Grid.Column>
            </Grid>
          </Segment>
        )}
      </Dimmer>
    </Card>
  );
};

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  btnVisibleLabel: PropTypes.string.isRequired,
  btnHiddenLabel: PropTypes.object.isRequired,
};

export default Post;
