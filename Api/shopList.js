import {request} from '../Utils/request.js'

module.exports = {
    GetShop:(data)=>{
        return request({
          url:'/goods/detail?',
          method:"GET",
		  data
        })
    }
}