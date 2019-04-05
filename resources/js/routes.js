import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './pages/Index'
import staff from './pages/staffs/staff'
import group from './pages/staffs/group'
import equipment from "./pages/equipments/equipment";
import equbarcode from "./pages/equipments/equbarcode";
import raise from "./pages/equipments/raise";
import telegram_message from './pages/telegram_bot/index'
import telegram_channel from './pages/telegram_bot/channel'
import student_verify from "./pages/verify/student_verify";

Vue.use(VueRouter)

const router = new VueRouter({
    base: '/',
    routes: [
        {
            path: '/',
            component: Index,
        }, {
            path: '/staffs',
            component: staff,
        }, {
            path: '/groups',
            component: group,
        }, {
            path: '/equipments',
            component: equipment,
        }, {
            path: '/equipments/barcode',
            component: equbarcode,
        }, {
            path: '/equipments/raise',
            component: raise,
        },
        // {
        //     path: '/loan',
        //     component: require('../components/pages/loan/loan.vue'),
        // }, {
        //     path: '/loan/action',
        //     component: require('../components/pages/loan/action.vue'),
        // }, {
        //     path: '/user',
        //     component: require('../components/pages/setting/user.vue'),
        // }, {
        //     path: '/tool/print',
        //     component: require('../components/pages/setting/tool.print.vue'),
        // }, {
        //     path: '/tool/imexport',
        //     component: require('../components/pages/setting/import_export.vue'),
        // },
        {
            path: '/student-verify',
            component: student_verify,
        }, {
            path: '/telegram-message',
            component: telegram_message,
        }, {
            path: '/telegram-channel',
            component: telegram_channel,
        },
        {
            path: '/*',
            redirect: '/'
        }
    ]
})

export default router