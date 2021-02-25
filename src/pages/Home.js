import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../styles.css'

const Home = () => {
    const history = useHistory()

    useEffect(()=> {
        const timeout = setTimeout(() => {
            history.push('/info')
        }, 2000)

        return () => clearTimeout(timeout)
    }, [history])

    return(
        <>
            <div className="hero"></div>
            <h1>HOME PAGES</h1>
        </>
    )
}

export default Home;