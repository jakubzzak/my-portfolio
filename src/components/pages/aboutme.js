import React, { Component } from 'react';
import Timeline from 'react-timeline-semantic-ui';

// -- timeline --
// color: (optional) default is 'grey'. Enums: 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'.
// icon: https://react.semantic-ui.com/elements/icon/

class About extends Component {
	render() {
		return(
			<div style={{margin: '10px', marginTop: '100px',}}>
				<h1>About Page</h1>
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
			</div>
		)
	}
}

export default About;
