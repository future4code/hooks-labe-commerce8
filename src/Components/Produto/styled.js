import styled from 'styled-components'

export const GradeCamisa = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 450px);
    grid-template-rows: repeat(3, 450px);
    text-align: center;

`

export const CardProduto = styled.div`
    border: 1px solid black;
    margin: 2px;
    padding: 10px;

    img {

        height: 200px;
        width: 200px;
    }
`
export const Nome = styled.h1`
    
`

export const Preco = styled.p `
    font-size: 30px;
`

export const AddCarrinho = styled.button`
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;

`