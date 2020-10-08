import React from 'react'
import dummy from '../../styles/Dummy.module.css'
import { Card, Grid, Header, Icon } from 'semantic-ui-react'
import Post from '../common/Post'
import img1 from '../../assets/profile.jpeg'


const Blog = () => {

  const openPost = (id) => {
    console.log('opening blog with id', id)
  }

  return (
    <Grid id={'Blog'} columns={1} className={dummy.template} style={{ padding: '3em' }} textAlign={'center'}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em' }}>Blog</Header>
        </Grid.Column>
      </Grid.Row>
      <Card.Group centered>
        <Post title={'My first post'}
              tags={['school', 'books', 'minimalism']}
              description={'Short description..'}
              image={img1}
              onButtonClick={openPost}
              btnVisibleLabel={'Read more'}
              btnHiddenLabel={<Icon name={'book'}/>}/>
        <Post title={'My first post'}
              tags={['tech', 'laptop', 'ios']}
              description={'Short description..'}
              image={img1}
              onButtonClick={openPost}
              btnVisibleLabel={'Read more'}
              btnHiddenLabel={<Icon name={'book'}/>}/>
      </Card.Group>

    </Grid>
  )
}

export default Blog
