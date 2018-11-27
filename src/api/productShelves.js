import {axios, Qs} from './index'


let doDync_productShelves = (data) => {
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=setProduct',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};

export {
    doDync_productShelves
}
