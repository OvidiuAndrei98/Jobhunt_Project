import React ,{useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form';
import SockJsClient from 'react-stomp';
import AppUserFreelancer from '../../service/AppUserFreelancer';
import AuthHeader from '../../service/AuthHeader';
import AuthService from '../../service/AuthService';
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Chat = () => {
    const [user, setUser] = React.useState([])
    const [message, setMessage] = React.useState([])
    const location = useLocation()
    const recipient = location.state.recipient
    const { register, handleSubmit, formState: {errors} } = useForm();
    const SOCKET_URL = 'http://localhost:8080/ws';
    let stompClient;

    const connect = () => {
        const socket = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(socket);
        stompClient.connect({}, onConnected);
      };

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        });
    }, [])


      const onConnected = () => {
        console.log("connected");
    
        stompClient.subscribe(
          "/user/" + user.id + "/queue/messages",
          function (response) {
            let data = JSON.parse(response.body);
            setMessage(data);
            }
        );
      };

      const sendMessage = (msg) => {
        if (msg.trim() !== "") {
          const message = {
            senderId: user.id.toString(),
            recipientId: recipient.id,
            senderName: user.firstName + " " + user.lastName,
            recipientName: recipient.firstName + " " + recipient.lastName,
            content: msg,
            timestamp: new Date(),
          };
            
          stompClient.send("/app/chat",{}, JSON.stringify(message));
        }
      };

    connect();

    return (
        <div>
       <form noValidate onSubmit={
                        handleSubmit((data) => {
                            sendMessage(data.message)
                            })
                        }>
            <TextField id="message" label="Message" variant="outlined" size="small" sx={{ minWidth: "100%" }}
            {...register("message", {required: true})}/>
        </form>
        <p>{message.content}</p>
        </div>
    )
}

export default Chat;
