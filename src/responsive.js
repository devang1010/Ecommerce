import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (mix-width: 380px){
            ${props}
        }
    `
}