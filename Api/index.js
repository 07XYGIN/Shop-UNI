import {request} from '../Utils/request.js'

module.exports = {
    GetList:()=>{
        return request({
          url:'/index/index',
          method:"GET",
        })
    }
}