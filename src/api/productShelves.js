import {axios, Qs} from './index'


let setProduct_productShelves = (data) => {
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=setProduct',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};

let setStrLoc_productShelves = (data) => {
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=setStrLoc',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};

export {
    setProduct_productShelves,
    setStrLoc_productShelves
}
