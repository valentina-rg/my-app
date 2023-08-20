import {useEffect} from "react";
import Aos from "aos";


import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";

function App() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={'bg-gradient-to-br from-neutral-50 to-indigo-200 min-h-screen'}>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Products/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
