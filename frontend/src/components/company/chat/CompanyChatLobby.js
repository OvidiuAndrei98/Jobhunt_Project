import React, {useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../navigation/Navbar'
import Footer from '../../navigation/Footer'
import AuthHeader from '../../../service/AuthHeader'
import AppUserFreelancer from '../../../service/AppUserFreelancer'
import AuthService from '../../../service/AuthService'
import ChatCard from './ChatCard'
import {useParams} from "react-router-dom";
import CompanyChat from './CompanyChat';
import ChatService from '../../../service/ChatService';

const CompanyChatLobby = () => {
    const {id} = useParams()
    const [chatRooms, setChatRooms] = React.useState([])
    const [recipient, setRecipient] = React.useState([])
    const [messages, setMessages] = React.useState([])

    useEffect(() => {
        ChatService.getChatRoomsForUser(id).then(response => {
            setChatRooms(response.data)
        })
    }, []);

    console.log(recipient)

    return (
        <>
        <Navbar />
            <div className="contact-inf-container" style={{background:"white", width:"60%", minHeight:"70vh", margin:"40px auto", display:"flex", flexDirection:"row"}}>
                <div className='lobby-container'>
                    {chatRooms.map(room => <ChatCard key={room.id} room={room} loadRecipient = {recipient => setRecipient(recipient)} loadMessages = {messages => setMessages(messages)}  />)}
                </div>
                <div className='chat-container'>
                    {recipient && <CompanyChat recipient = {recipient} messages = {messages} />}
                </div>
            </div> 
        <Footer />
        </>
    )
}

export default CompanyChatLobby
