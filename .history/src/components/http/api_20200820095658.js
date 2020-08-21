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
     crumbs(city){
        return service.get(`/crumbs?city=${city}`)
    },
     // 5. 获取省市关联(get)
     cityss(){
        return service.get(`/cityss`)
    },
     // 6. 获取热门城市(get)
     hotCity(id){
        return service.get(`/hotCity`)
    },
      // 7. 全部分类(get)
      menu(){
        return service.get(`/menu`)
    },
       // 8. 热门搜索(get)
       hotPlace(){
        return service.get(`/hotPlace?`)
    },
    
}