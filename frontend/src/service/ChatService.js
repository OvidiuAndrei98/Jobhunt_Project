import axios from "axios";
import AuthHeader from "./AuthHeader";
// import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class ChatService {
  getChatRoomsForUser(id) {
    return axios.get(`http://localhost:8080/messages/${id}`,{headers: AuthHeader()});
  };

  getMessagesForRoom(senderId, receiverId) {
    return axios.get(`http://localhost:8080/messages/${senderId}/${receiverId}`,{headers: AuthHeader()});
  };

}

export default new ChatService();