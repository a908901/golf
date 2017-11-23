<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'jin-icon jin-icon-home',
                        index: 'readme',
                        title: '主页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '内容管理',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            },
                             {
                                index: 'test',
                                title: '测试页面'
                            }
                        ]
                    },
                    {
                        icon: 'jin-icon jin-icon-shop',
                        index: '3',
                        title: '商城管理',
                        subs: [
                            {
                                index: 'shopMent',
                                title: '商城用户管理'
                            }
                            
                        ]
                    },
                    {
                        icon: 'jin-icon jin-icon-user',
                        index: '4',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'uesrMent',
                                title: '会员管理'
                            }
                            
                        ]
                    },
                    {
                        icon: 'jin-icon jin-icon-address font24',
                        index: '5',
                        title: '地理位置',
                        subs: [
                            {
                                index: 'addressStadium',
                                title: '球场管理'
                            }
                            
                        ]
                    },
                    {
                        icon: 'jin-icon jin-icon-information',
                        index: '6',
                        title: '信息管理',
                        subs: [
                            {
                                index: 'infoBanner',
                                title: '广告管理'
                            }
                            
                        ]
                    },
                    {
                        icon: 'jin-icon jin-icon-club',
                        index: '7',
                        title: '俱乐部管理',
                        subs: [
                            {
                                index: 'clubMent',
                                title: '俱乐部管理'
                            }
                            
                        ]
                    }
                   
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    
</style>
