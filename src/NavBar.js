import React from 'react'

import {AppBar, Toolbar, Typography, Container} from '@material-ui/core'


export default function NavBar() {

	return (
		<header>
			<AppBar position="static">
				<Container>
					<Toolbar >
							<Typography edge="start" variant="h4" color="inherit">
							Meme Generator
							</Typography>
					</Toolbar>
					</Container>
			</AppBar>
		</header>
	)
}
