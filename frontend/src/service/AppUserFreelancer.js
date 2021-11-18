import axios from "axios";
import AuthHeader from "./AuthHeader";

class AppUserFreelancer {
    constructor() {
        this.url = "http://localhost:8080/user";
    }
    
    getAllFreelancers() {
        return axios.get(this.url);
    }
    
    getFreelancerById(id) {
        return axios.get(`${this.url}/${id}`, {headers: AuthHeader()});
    }
    
    addFreelancer(freelancer) {
        return axios.post(this.url, freelancer, {headers: AuthHeader()});
    }
    
    updateFreelancer(freelancer, id) {
        return axios.put(`${this.url}/update-password/${id}`, freelancer, {headers: AuthHeader()});
    }
    
    deleteFreelancer(id) {
        return axios.delete(`${this.url}/${id}`, {headers: AuthHeader()});
    }

}

export default new AppUserFreelancer();