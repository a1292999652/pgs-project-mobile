import {axios, Qs} from './index'


let historyScan_productList = (data) => {
    // console.log('首次获取数据', JSON.stringify(data));
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=historyScan',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};
let scanQty_productList = (data) => {
    // console.log('添加产品', JSON.stringify(data));
    return axios({
        method: 'post',
        url: '/toProduct/doDync?dyncname=scanQty',
        data: Qs.stringify(data),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
};

export {
    historyScan_productList, scanQty_productList
}

//10>10
