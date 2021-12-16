import React, { useEffect }  from 'react'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import ChatService from '../../service/ChatService'

const ChatCard = (props) => {
    const[sender, setSender] = React.useState([])


    useEffect(() => {
        AppUserFreelancer.getUserCompany(props.room.senderId).then(res => {
            setSender(res.data)
        })
    },[])
    const loadRecipient = () => {
        props.loadRecipient(sender);
    }

    const getMessages = () => {
        ChatService.getMessagesForRoom(props.room.recipientId, sender.id).then(res => {
            loadMessages(res.data);
        });
    }

    const loadMessages = (messages) => {
        props.loadMessages(messages)
    }

    return (
        <div className='chat-notification' onClick={() => {loadRecipient(); getMessages()}}>
            <p style={{fontSize:"18px"}}>{sender.companyName}</p>
            <p style={{color:"green"}}>3 new messages.</p>
        </div>
    )
}

export default ChatCard
