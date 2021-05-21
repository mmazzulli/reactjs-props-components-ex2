import React from 'react'

export default function Grid(props){
    const num1 = 45
    const num2 = 23
    return(
        <>
<div class="container">
        <div class="youtube">{props.youtube()}</div>
        <div class="bloco1">{props.txt()}</div>
        <div class="bloco2">{props.img}</div>
    </div>
    <div class="bloco3"><h3>{'A soma entre ' + num1 + ' com ' + num2 + ' é igual à: ' + props.soma(num1,num2) }</h3></div>
        </>
    )
}