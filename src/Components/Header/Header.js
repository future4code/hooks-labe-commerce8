import React from "react"
import Logo from '../../imagens/Logo.png'
import { Base, Centro, Direita, Esquerda } from "./styled"
import { ShoppingCartOutlined } from '@material-ui/icons'


class Header extends React.Component{

    render(){
        return(
            <Base>
                <Esquerda>
                    <h1>Astro, o melhor de dois mundos</h1>
                </Esquerda>
                <Centro>
                    <img src={Logo} alt="logo"/>
                </Centro>
                <Direita>
                    <ShoppingCartOutlined/>
                </Direita>
            </Base>
        )
    }
}

export default Header