import { atom } from 'jotai'
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import AuthService from '../service/AuthService';
import AppUserFreelancer from '../service/AppUserFreelancer';

const socket = new SockJS('http://localhost:8080/ws');
const client = Stomp.over(socket);

export const STOMP_CLIENT = atom(client);
export const USER = atom(null);