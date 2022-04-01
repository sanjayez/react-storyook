import Submit from "../Submit";

export default {
    title: "Submit",
    component: Submit
}

export const green =  ( ) => <Submit bColor='green' label='SUBMIT' padding='1rem' color='white'/>
export const red =  ( ) => <Submit bColor='red' label='DELETE' padding='1rem' color='white'/>
export const blue =  ( ) => <Submit bColor='blue' label='POST' padding='1rem' color='white' radius='8px'/>