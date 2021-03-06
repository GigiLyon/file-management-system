import axios from "axios";

export default{
    state: {},
    getters: {},
    mutations: {},
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise((resolve, reject) => {
                axios.post(`user/create`, payload)
                    .then(({data, status}) => {
                        if(status === 200){
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }
    }
}