import React from 'react'
import Loader from './Loader'

function MemeComponent(props) {
	return (
			
		<div className="container">
			<div className="wrapper">
				<div className="meme">
					<img src={props.data.imgUrl} alt=""/>
					<h2 className="top">{props.data.topText}</h2>
					<h2 className="bottom">{props.data.bottomText}</h2>
				</div>
			</div>

			<form className="meme-form" onSubmit={props.generateLink} >
				<input 
					type="text" 
					name="topText"
					placeholder="Top Text"						
					value={props.data.topText}
					onChange={props.handleChange}
				/>

				<input 
					type="text" 
					name="bottomText"
					placeholder="Bottom Text"
					value={props.data.bottomText}
					onChange={props.handleChange}
				/>

				<div className="btn-bar">
					<button className="btn" onClick={props.getRandomImg}>Choose Image</button>
					<button type="submit" className="btn">Generate!</button>
					{props.data.isLoading 
						? <Loader color="gray" type="bars" />
						: props.data.linkUrl&&<a className="btn" download="meme.png" href={props.data.linkUrl}>Download</a>
					}
				</div>
			</form>
		</div>
	)
}

export default MemeComponent