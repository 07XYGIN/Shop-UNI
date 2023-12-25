import {request} from '../Utils/request.js'

module.exports = {
    Get:()=>{
        return request({
          url:'/index/index',
          method:"GET",
        })
    }
}

module.exports = {
	Current:(data)=>{
		return request({
			url:'/catalog/current?',
			method:'GET',
			data
		})
	}
}