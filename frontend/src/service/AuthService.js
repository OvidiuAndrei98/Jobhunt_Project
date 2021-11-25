import userEvent from "@testing-library/user-event";
import axios from "axios";

const API_URL = "http://localhost:8080/auth";

class AuthService {
    login(data) {
        return axios
            .post(`${API_URL}/sign-in/freelancer`, {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    register(freelancer) {
        return axios.post(`${API_URL}/register-freelancer`, freelancer);
    }

    createCompanyAccount(company, id) {
        return axios.post(`${API_URL}/register-company/${id}`, company);
    }

    switchToCompany(id) {
       return axios.post(`${API_URL}/switch-account/company/${id}`);
    }

    switchToFreelancer(id) {
       return axios.post(`${API_URL}/switch-account/freelancer/${id}`)
    }

}

export default new AuthService();