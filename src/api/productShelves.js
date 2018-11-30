import {axios, Qs} from './index'


let setProduct_productShelves = (data) => {
    // console.log('扫描产品SKU', JSON.stringify(data));
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
    //console.log('扫描库位', JSON.stringify(data));
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=setStrLoc',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};
let doSave_productShelves = (data) => {
    //console.log('保存产品', JSON.stringify(data));
    return axios({
        method: 'post',
        url: '/toProduct/doSave',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};
let isCheck_productShelves = (data) => {
    // console.log('查重', JSON.stringify(data));
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=isCheck',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};

export {
    setProduct_productShelves,
    setStrLoc_productShelves,
    doSave_productShelves,
    isCheck_productShelves
}
