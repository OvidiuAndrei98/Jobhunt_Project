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
        console.log(freelancer);
        return axios.post(`${API_URL}/register-freelancer`, freelancer);
    }

}

export default new AuthService();