import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'

export default function App() {

    useEffect(() => {
        console.log("PAGE VIEW CALLED");
        fetch("https://laravel.arifurrahmanrasel.top/api/page-view", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ page: "home" }),
        }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='w-full mx-auto bg-lime-100'>
            <div className='w-[95%] mx-auto'>
                <Navbar />
            </div>
            <div className='w-[95%] mx-auto'>
                <Outlet />
            </div>
            <div className='w-full mx-auto bg-white'>
                <Footer />
            </div>
        </div>
    )
}