import axios from '../utils/axios';

class AuthService {
    signin = (email, password) => {
        return new Promise ((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
            .then(response => {
                if (response.data.user) {
                    this.setUser(response.data.user);
                    resolve(response.data.user);
                }
                else {
                    reject(response.data.error);
                }
            })
            .catch(error => {
                reject(error);
            })
        })
    }

    setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser = () => {
        const user = localStorage.getItem("user");
        return user;
    }

    isAuthenticated = () => {
        return !!this.getUser();
    }

}

const authservice = new AuthService();

export default authservice;