import Text from "../Text";

export default {
    title: 'Text',
    component: Text
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

export const disabledOption = () => <Text disabled={true} label='Post'/>
export const rect = () => <Text  label='Username' style={rectangle}/>
export const round = () => <Text  label='Username' style={rounded}/>