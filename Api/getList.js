import {request} from '../Utils/request.js'

module.exports = {
    GetData:(data)=>{
        return request({
          url:'/brand/detail?',
          method:"GET",
		  data
        })
    }
}