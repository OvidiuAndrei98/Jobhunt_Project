import React ,{useState, useEffect, useCallback} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import {useAtom} from 'jotai';
import { STOMP_CLIENT, USER } from '../../../states/STATES';
import ChatService from '../../../service/ChatService';
import AppUserFreelancer from '../../../service/AppUserFreelancer';
import AuthService from '../../../service/AuthService';

const CompanyChat = ({recipient, messages}) => {
  const [user,setUser] = useState([]);
  const [message, setMessage] = React.useState([])
  const [messagesList, setMessagesList] = React.useState([...messages ? messages : []])
  const location = useLocation();
  const indirectRecipient = location.state?.recipient;
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [stompClient] = useAtom(STOMP_CLIENT);

  useEffect(() => {
    AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {setUser(res.data)});
    connectToRoom();
  } , [])
   
    useEffect(() => {
      if (messages) {
      ChatService.getMessagesForRoom(user.company?.id, recipient.id).then(res => {
        setMessagesList(res.data)
      });
    }
    } , [message, messages])

    const connectToRoom = () => {
      console.log("connecting to room");
      stompClient.connect({}, () => {
        stompClient.subscribe(
          "/user/" + user.company.id +  "/queue/messages",
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
            senderId: user.company.id.toString(),
            recipientId: recipient == undefined ? indirectRecipient.id : recipient.id,
            senderName: user.company.companyName,
            recipientName: recipient == undefined ? indirectRecipient.firstName : recipient.firstName + " " + recipient == undefined ? indirectRecipient.lastName : recipient.lastName,
            content: msg,
            timestamp: new Date(),
          };
            
          stompClient.send("/app/chat",{}, JSON.stringify(message));
          setMessagesList([...messagesList, message])

        }
      };
    // connect();

    return (
      <div className='chat-window-container'>
        <div className='chat-window'>
        {messagesList?.map(message => {
          return (
            parseInt(message.recipientId) === user.company.id ? (
              <div className='chatBuble-sender'>
                {message.content}
              </div>
              ) : 
              (<span className='chatBuble-receiver'>
              {message.content}
            </span>)
          )
      })}
      </div>
       <form noValidate onSubmit={
                        handleSubmit((data) => {
                          document.getElementById("message").value = "";
                            sendMessage(data.message)
                          document.getElementsByClassName("chat-window")[0].scrollTop = document.getElementsByClassName("chat-window")[0].scrollHeight;
                            })
                        }>
            <TextField id="message" label="Message" variant="outlined" size="small" sx={{ minWidth: "100%", position: "sticky", bottom: "10px" }}
            {...register("message", {required: true})}/>
        </form>
        {/* <Button onClick={connectToRoom}> connect </Button> */}
        </div>
    )
}

export default CompanyChat;
