import Area from "../Area"

export default {
    title: 'TextArea',
    component: Area
}

let rectangle = {
    width: '100%',
    height: '150px',
    padding: '12px 20px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    fontSize: '16px',
    resize: 'none',
    outline: 'none'
}

export const disabledOption = () => <Area disabled={true} label='Post'/>
export const rect = () => <Area  label='Username' style={rectangle} place='Unlimited characters'/>
export const maxRestricted = () => <Area  label='Username' style={rectangle} max={200} place='max 200 characters'/>