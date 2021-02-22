import React from 'react'
import dummy from '../../styles/Dummy.module.css'
import { Card, Grid, Header, Icon } from 'semantic-ui-react'
import Post from '../common/Post'


const Blog = () => {

  const openPost = (id) => {
    console.log('opening blog with id', id)
  }

  return (
    <Grid id={'Blog'} columns={1} className={dummy.template} style={{ backgroundColor: 'black', padding: '3em' }}
          textAlign={'center'}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header inverted style={{ marginBottom: '2em' }}>Blog</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign={"left"}>
          <Card.Group centered>
            <Post title={'Linux servers'}
                  tags={['school', 'linux', 'servers']}
                  description={'School research for investigation and professional communication class..'}
                  image={'https://source.unsplash.com/user/vishnumaiea/1600x900'}
                  onButtonClick={openPost}
                  btnVisibleLabel={'Read more'}
                  btnHiddenLabel={<Icon name={'book'}/>}/>
            <Post title={'Another post'}
                  tags={['tech', 'laptop', 'ios']}
                  description={'Short description..'}
                  image={'https://source.unsplash.com/random/1600x900'}
                  onButtonClick={openPost}
                  btnVisibleLabel={'Read more'}
                  btnHiddenLabel={<Icon name={'book'}/>}/>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Blog
