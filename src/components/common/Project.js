import React from 'react'
import { Button, Card, Image, Label } from 'semantic-ui-react'
import imgPlaceholder from '../../assets/placeholder-image.png'


const Project = ({ image, title, tags, description, onButtonClick, btnVisibleLabel, btnHiddenLabel, disabled }) => {

  return (
    <Card style={{
      border: '1.5px black solid',
      borderRadius: '3px',
      width: '350px',
      boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.1), 0px 0px 13px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
      margin: '2em',
    }}>
      {image ? (
        <Image src={image} fluid style={{ height: '180px' }}/>
      ) : (
        <Image src={imgPlaceholder} fluid style={{ height: '180px' }}/>
        )
      }
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{tags.map((tag, index) => {
          return <Label key={index} color='orange' horizontal>{tag}</Label>
        })}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        {disabled ? (
          <Button onClick={onButtonClick} disabled>Soon</Button>
        ) : (
          <Button onClick={onButtonClick} animated={'vertical'}>
            <Button.Content visible>{btnVisibleLabel}</Button.Content>
            <Button.Content hidden>{btnHiddenLabel}</Button.Content>
          </Button>
        )}
      </Card.Content>
    </Card>
  )
}

export default Project
