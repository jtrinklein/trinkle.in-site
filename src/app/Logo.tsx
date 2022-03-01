import React from 'react';
import LogoSvg from './logo-light.svg';
import LogoPath from '../img/logo.png';
const logoStyle: React.CSSProperties = {
    display: 'inline-block',
    width: 64,
    height: 64,
    margin: '0 12px'
}
const Logo = props => (
    
       <img style={logoStyle} src={LogoPath} />
    
)
// const Logo = props => (
//     <span style={logoStyle}>
//        <LogoSvg />
//     </span>
// )

export default Logo;