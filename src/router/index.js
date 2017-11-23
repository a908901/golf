import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/test',
                    component: resolve => require(['../components/page/list/test.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/list/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/list/VueTable.vue'], resolve)     
                },
                {
                    path: '/shopMent',
                    component: resolve => require(['../components/page/shop/shopMent.vue'], resolve)     
                },{
                    path: '/uesrMent',
                    component: resolve => require(['../components/page/user/userMent.vue'], resolve)
                },
                {
                    path: '/addressStadium',
                    component: resolve => require(['../components/page/address/addressStadium.vue'], resolve)
                },
                {
                    path: '/infoBanner',
                    component: resolve => require(['../components/page/information/infoBanner.vue'], resolve)
                },
                {
                    path: '/clubMent',
                    component: resolve => require(['../components/page/club/clubMent.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
