import axios from "axios";
const myHeaders = new Headers();
myHeaders.append("apikey", "sRhFpfHh6xKL2OsNs1Rnv7Fj0E0OaDBI");
myHeaders.append("Access-Control-Allow-Origin","http://localhost:3000/");
const API_URL = "https://api.promptapi.com/skills"

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

class SkillsApi {
    getTenSkills(search) {
       return axios.get(`${API_URL}?q=${search}`, {headers: {"apikey": "sRhFpfHh6xKL2OsNs1Rnv7Fj0E0OaDBI"}})
    }
  
}
export default new SkillsApi();