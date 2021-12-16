import React ,{useState, useEffect} from 'react'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import ChatService from '../../service/ChatService';
import {useAtom} from 'jotai';
import { STOMP_CLIENT, USER } from '../../states/STATES';
import AppUserFreelancer from '../../service/AppUserFreelancer';
import AuthService from '../../service/AuthService';

const Chat = ({recipient, messages}) => {
    const [user, setUser] = useState([]);
    const [stompClient] = useAtom(STOMP_CLIENT);
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [messagesList, setMessagesList] = React.useState([...messages ? messages : []])
    const [message, setMessage] = React.useState([])
  
    useEffect(() => {
    AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {setUser(res.data)});
      connectToRoom();
    } , [])

    const connectToRoom = () => {
      console.log("connecting to room");
      stompClient.connect({}, () => {
        stompClient.subscribe(
          "/user/" + user.id +  "/queue/messages",
          function (response) {
            let data = JSON.parse(response.body);
            setMessage(data)
            }
        );
      });
    } 

      const sendMessage = (msg) => {
        if (msg.trim() !== "") {
          const message = {
            senderId: user.id.toString(),
            recipientId: recipient.id,
            senderName: user.firstName + " " + user.lastName,
            recipientName: recipient.companyName,
            content: msg,
            timestamp: new Date(),
          };
            
          stompClient.send("/app/chat",{}, JSON.stringify(message));
          setMessagesList([...messagesList, message])
        }
      };


  useEffect(() => {
    ChatService.getMessagesForRoom(user.id, recipient.id).then(res => {
      console.log("am intrat")
      setMessagesList(res.data)
    });
  } , [message, messages])


    return (
        <div className='chat-window-container'>
          {messagesList.map(message => {
            return (
              parseInt(message.recipientId) === user.id ? (
                <div className='chatBuble-sender'>
                  {message.content}
                </div>
                ) : 
                (<span className='chatBuble-receiver'>
                {message.content}
              </span>)
            )
        })}
            
        {recipient.length > 0 && <form noValidate onSubmit={
                        handleSubmit((data) => {
                            sendMessage(data.message)
                            })
                        }>
            <TextField id="message" label="Message" variant="outlined" size="small" sx={{ minWidth: "100%" }}
            {...register("message", {required: true})}/>
        </form> }
        </div>
    )
}

export default Chat;
