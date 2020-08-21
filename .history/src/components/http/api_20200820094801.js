import service from './index'

export default{
    // 1. 获取定位(get)
    position(){
        return service.get(`/position`)
    },
     // 2. 获取所有省份(get)
     province(){
        return service.get(`/province`)
    },
     // 3. 获取定位(get)
     citys(id){
        return service.get(`/citys`)
    },
}