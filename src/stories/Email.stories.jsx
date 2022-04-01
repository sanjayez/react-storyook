import Email from "../Email"

export default {
    title: 'Email',
    component: Email
}

let rectangle = {
    marginLeft: '0.2rem',
	borderRadius: '5px',
	border: '1px solid #848484',
	outline: 'none',
	height: '25px',
	width: '275px'
}

let rounded = {
    marginLeft: '0.2rem',
    border: '1px solid #848484',
	borderRadius: '30px',
	outline: 'none',
	height: '25px',
	width: '275px',
	paddingLeft: '10px',
	paddingRight: '10px'
}

export const disabledOption = () => <Email disabled={true} label='Email'/>
export const rect = () => <Email  label='Email' style={rectangle}/>