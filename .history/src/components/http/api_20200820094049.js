import service from './index'

export default{
    // 1. 获取首页数据(get)
    position(){
        return service.get(`/position`)
    },
}