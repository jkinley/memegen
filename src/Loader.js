import React from 'react'
import ReactLoading from 'react-loading'


const Loader = ({type, color}) => (
	
		<ReactLoading type={type} color={color} height={"60px"} width={"60px"} className={"loader"} />

)

export default Loader