import axios from 'axios';
import Qs from 'qs'
import {doDync_productShelves} from './productShelves'


//配置默认的请求路径
axios.defaults.baseURL = 'http://dev.aplun.cn:5606/pgs';

export {
    axios,
    Qs,
    doDync_productShelves
}
