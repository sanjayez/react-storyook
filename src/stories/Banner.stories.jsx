import Banner from "../Banner"

export default {
    title: 'Banner',
    component: Banner
}

let container = {
    backgroundColor: 'steelblue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center'
}

let container1 = {
    backgroundColor: 'orange',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: '"Arial", arial, sans-serif',
    letterSpacing: '0.08rem'
}

let size = {
    sm: 0.5,
    md: 1,
    lg: 1.5
}

export const defaultOption = () => <Banner />
export const styled = () => <Banner container={container}/>
export const custom = () => <Banner container={container1} label='Custom Header'/>
export const small = () => <Banner container={container1} label='Custom Header' size={size.sm}/>
export const medium = () => <Banner container={container1} label='Custom Header' size={size.md}/>
export const large = () => <Banner container={container1} label='Custom Header' size={size.lg}/>