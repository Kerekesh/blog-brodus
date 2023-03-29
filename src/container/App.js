import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../pages/Header/Header'
import Main from '../pages/Main/Main'
import Footer from '../pages/Footer/Footer'

const App = () => {
    return (
        <>
            <CssBaseline></CssBaseline>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

export default App