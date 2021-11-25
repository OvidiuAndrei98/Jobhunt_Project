import React from 'react'
import Navbar from '../components/navigation/Navbar'

const UserError = () => {
    return (
        <>
        <Navbar />
        <div style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
            You do not have access to this page
            If you have another account, switch to it and try again.
            Or you can visit our home page.
        </div>
        </>
    )
}

export default UserError
