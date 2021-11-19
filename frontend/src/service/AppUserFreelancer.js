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
    
    updateFreelancerPassword(freelancer, id) {
        return axios.put(`${this.url}/update-password/${id}`, freelancer, {headers: AuthHeader()});
    }

    addFreelancerLanguage(language, id) {
        return axios.post(`${this.url}/add-language/${id}`, language, {headers: AuthHeader()});
    };

    updateFreelancerLanguage(language, id) {
        return axios.post(`${this.url}/update-language/${id}`, language, {headers: AuthHeader()});
    };

    removeFreelancerLanguage(language, id) {
        return axios.post(`${this.url}/remove-language/${id}`, language, {headers: AuthHeader()});
    };
    

    
    deleteFreelancer(id) {
        return axios.delete(`${this.url}/${id}`, {headers: AuthHeader()});
    }

}

export default new AppUserFreelancer();