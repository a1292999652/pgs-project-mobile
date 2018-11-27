import axios from 'axios';
import Qs from 'qs'
import {setProduct_productShelves,setStrLoc_productShelves} from './productShelves'
import {login} from './login'


//配置默认的请求路径
axios.defaults.baseURL = 'http://dev.aplun.cn:5606/pgs';

export {
    axios,
    Qs,
    setProduct_productShelves,
    setStrLoc_productShelves,
    login
}
