import React from 'react'
import Grid from '../../components/Grid'

function Home(){
    const txt = () => {
        return 'Aqui vai todo texto necessário para que preencha a div de info correta.'
    }

    const youtube = () => {
        return (
            <>
        <iframe width="530" height="300"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe> 
    </>
        )
    }

    const soma = (v1,v2) => {
        return v1+v2
    }

    return (
       <Grid youtube={youtube} txt={txt} img={'Aqui vai a url da imagem'} soma={soma} />
    )
}

export default Home;