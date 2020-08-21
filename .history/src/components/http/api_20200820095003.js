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
     // 3. 获取省份所有城市(get)
     citys(id){
        return service.get(`/citys?id=${id}`)
    },
     // 4. 获取城市具体信息(get)
     position(){
        return service.get(`/position`)
    },
     // 5. 获取所有省份(get)
     province(){
        return service.get(`/province`)
    },
     // 6. 获取定位(get)
     citys(id){
        return service.get(`/citys?id=${id}`)
    },
}