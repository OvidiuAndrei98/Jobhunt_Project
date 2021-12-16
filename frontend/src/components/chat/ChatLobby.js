import React from 'react'
import axios from 'axios'
import Navbar from '../navigation/Navbar'
import Footer from '../navigation/Footer'
import AuthHeader from '../../service/AuthHeader'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import ChatCard from './ChatCard'
import Chat from './Chat'


const ChatLobby = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [chatRooms, setChatRooms] = React.useState([])
    const [recipient, setRecipient] = React.useState([])
    const [messages, setMessages] = React.useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:8080/messages/${user.id}`,{headers: AuthHeader()})
            .then(res => {
                setChatRooms(res.data)
            });
    },[])

    return (
        <>
        <Navbar />
            <div className="contact-inf-container" style={{background:"white", width:"60%", minHeight:"70vh", margin:"40px auto", display:"flex", flexDirection:"row"}}>
                <div className='lobby-container'>
                    {chatRooms.map(room => <ChatCard key={room.id} room={room} loadRecipient = {recipient => setRecipient(recipient)} loadMessages = {messages => setMessages(messages)}/>)}
                </div>
                <div className='chat-container'>
                    <Chat recipient = {recipient} messages = {messages} />
                </div>
            </div> 
        <Footer />
        </>
    )
}

export default ChatLobby
