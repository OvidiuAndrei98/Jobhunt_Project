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

    addFreelancerEducation(education, id) {
        return axios.post(`${this.url}/add-education/${id}`, education, {headers: AuthHeader()});
    };

    addFreelancerSkills(skills, id) { 
        return axios.post(`${this.url}/add-skills/${id}`, {skills: skills}, {headers: AuthHeader()});
}

    addFreelancerCertification(certification, id) {
        return axios.post(`${this.url}/add-certification/${id}`, certification, {headers: AuthHeader()});
    };

    updateFreelancerLanguage(language, id) {
        return axios.post(`${this.url}/update-language/${id}`, language, {headers: AuthHeader()});
    };

    updateFreelancerEducation(education, id) {
        return axios.post(`${this.url}/update-education/${id}`, education, {headers: AuthHeader()});
    };

    removeFreelancerLanguage(language, id) {
        return axios.post(`${this.url}/remove-language/${id}`, language, {headers: AuthHeader()});
    };

    removeFreelancerEducation(education, id) {
        return axios.post(`${this.url}/remove-education/${id}`, education, {headers: AuthHeader()});
    };

    updateFreelancerDescription(description, id) {
        return axios.post(`${this.url}/update-description/${id}`, description, {headers: AuthHeader()});
    };

    editProfilePhoto(photo, id) {
        return axios.post(
            `${this.url}/${id}/update-picture/`,
                photo,
                {headers : {
                    'Content-Type': 'multipart/form-data',
                    ...AuthHeader()
                },
            }
        );
    };

    getProfilePhoto(id) {   
        return axios.get(`${this.url}/10/get-picture`, {headers: AuthHeader()});
    };
    

    
    deleteFreelancer(id) {
        return axios.delete(`${this.url}/${id}`, {headers: AuthHeader()});
    }

}

export default new AppUserFreelancer();