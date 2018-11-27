import {axios} from './index'


let login = (data) => {
    return axios({
        method: 'get',
        url: '/sys/login',
        params: data,
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
    });
};


export {
    login,
}
