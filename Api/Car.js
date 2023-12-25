import {request} from '../Utils/request.js'

module.exports = {  
    AddCar:(data)=>{  
        return request({  
          url:'/cart/add',  
          method:"POST",  
          data  
        })  
    },  
    GetCarList:()=>{  
        return request({  
          url:'/cart/index',  
          method:'GET'  
        })  
    },  
    DelList:(data)=>{  
        return request({  
          url:'/cart/delete',  
          method:'POST',
		  data
        })  
    }  
}