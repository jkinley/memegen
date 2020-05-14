import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));


export default function NavBar() {

	//const classes = useStyles();

	return (
		<header>
			<AppBar position="static">
					<Toolbar >
							<Typography edge="start" variant="h4" color="inherit">
							Meme Generator
							</Typography>
							
					</Toolbar>
			</AppBar>
		</header>
	)
}
