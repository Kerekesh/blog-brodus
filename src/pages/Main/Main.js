import React from 'react'
import PostsSlider from '../../components/PostsSlider/PostsSlider'
import About from './About/About'
import Blog from './Blog/Blog'
import { Route, Switch } from 'react-router-dom'
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactPage/ContactPage'

const Main = () => {
    return (
        <>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return (
                            <>
                                <PostsSlider></PostsSlider>
                                <About></About>
                                <Blog></Blog>
                            </>
                        )
                    }}
                />
                <Route
                    path="/about"
                    component={AboutPage}
                />
                <Route
                    path="/contact"
                    component={ContactPage}
                />
            </Switch>

        </>
    )
}

export default Main