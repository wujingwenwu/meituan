import service from './index'

export default {
    // 1. 获取定位(get)
    position() {
        return service.get(`/position`)
    },
    // 2. 获取所有省份(get)
    province() {
        return service.get(`/province`)
    },
    // 3. 获取省份所有城市(get)
    citys(id) {
        return service.get(`/citys/${id}`)
    },
    // 4. 获取城市具体信息(get)
    crumbs(city) {
        return service.get(`/crumbs?city=${city}`)
    },
    // 5. 获取省市关联(get)
    city() {
        return service.get(`/city`)
    },
    // 6. 获取热门城市(get)
    hotCity(id) {
        return service.get(`/hotCity`)
    },
    // 7. 全部分类(get)
    menu() {
        return service.get(`/menu`)
    },
    // 8. 热门搜索(get)
    hotPlace(city) {
        return service.get(`/hotPlace?city=${city}`)
    },
    // 9. 搜索建议(get)
    searchTop({ city, input }) {
        return service.get(`/searchTop?city=${city}&input=${input}`)
    },
    // 10. 根据关键词搜索(get)
    results({ city, keyword }) {
        return service.get(`/results?city=${city}&keyword=${keyword}`)
    },
    // 11. 商铺详情(get)
    products({ city, keyword }) {
        return service.get(`/products?city=${city}&keyword=${keyword}`)
    },
     // 12. 登录(get)
     login({ username, password }) {
        return service.post(`/users/login`,{ username, password })
    },
     // 13. 登录(get)
     register({ username, password,email }) {
        return service.post(`/users/register`,{ username, password,email})
    },

}