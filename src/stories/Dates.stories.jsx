import Date from "../Date";

export default {
    title: 'Date',
    component: Date
}

let style = {
    appearance: 'none',
    color: '#95a5a6',
    fontFamily: '"Helvetica", arial, sans-serif',
    fontSize: '18px',
    border:'1px solid #ecf0f1',
    background: '#ecf0f1',
    padding:'5px',
    display: 'inline-block !important',
    visibility: 'visible !important',
    outline: 'none'
}

export const defaultOption = () => <Date />
export const styled = () => <Date style = {style}/>
export const ranged = () => <Date style = {style} min="2022-04-01" max="2022-04-30"></Date>
export const todaySelected = () => <Date style = {style} value={'2022-04-01'}></Date>