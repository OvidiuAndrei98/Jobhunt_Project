import React from 'react'
import axios from 'axios'

const ChatLobby = () => {
    const [messages, setMessages] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8080/user/app/messages/{senderId}/{recipientId}/')
            .then(res => {
                setMessages(res.data)
            })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default ChatLobby
