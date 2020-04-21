import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import CheckOut from './views/CheckOut.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import CategoriezLeftSidebar from './views/Categories/CategoriezLeftSidebar.vue'
import CategoriesRightSidebar from './views/Categories/CategoriesRightSidebar.vue'
import CategoriesFullWidth from './views/Categories/CategoriesFullWidth.vue'
import ShopSingleLeftSlider from './views/Single/ShopSingleLeftSlider.vue'
import ShopSingleRightSlider from './views/Single/ShopSingleRightSlider.vue'
import ShopSingleFullWidth from './views/Single/ShopSingleFullWidth.vue'
import Contact from './views/Contact.vue'
import FAQs from './views/FAQs.vue'
import Eror404 from './views/Eror404.vue'
import BlogLeftSlider from './views/BlogLeftSlider.vue'
import BlogRightSlider from './views/BlogRightSlider.vue'
import BlogNews from './views/BlogNews.vue'
import SingleLeftSidebar from './views/SingleBlog/SingleLeftSidebar.vue'
import SingleRightSidebar from './views/SingleBlog/SingleRightSidebar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: Home,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'صفحه اصلی';
            }
        },
        {
            path: '/cart',
            component: Cart,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'سبد خرید';
            }
        },
        {
            path: '/checkout',
            component: CheckOut,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'فاکتور';
            }
        },
        {
            path: '/about',
            component: About,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'درباره ما';
            }
        },
        {
            path: '/service',
            component: Service,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'سرویس‌ها';
            }
        },
        {
            path: '/categoriezleftsidebar',
            component: CategoriezLeftSidebar,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'نوار کناری سمت چپ';
            }
        },
        {
            path: '/categoriesrightsidebar',
            component: CategoriesRightSidebar,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'نوار کناری سمت راست';
            }
        },
        {
            path: '/categoriesfullwidth',
            component: CategoriesFullWidth,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'تمام عرض';
            }
        },
        {
            path: '/shopsingleleftslider',
            component: ShopSingleLeftSlider,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'کشوی سمت چپ فروشگاه';
            }
        },
        {
            path: '/shopsinglerightslider',
            component: ShopSingleRightSlider,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'کشوی سمت راست فروشگاه';
            }
        },
        {
            path: '/shopsinglefullwidth',
            component: ShopSingleFullWidth,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'فروشگاه تک عرض کامل';
            }
        },
        {
            path: '/contact',
            component: Contact,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'مخاطب';
            }
        },
        {
            path: '/faqs',
            component: FAQs,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'فقط ها';
            }
        },
        {
            path: '/eror404',
            component: Eror404,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || '404';
            }
        },
        {
            path: '/blogleftslider',
            component: BlogLeftSlider,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'لغزنده سمت چپ وبلاگ';
            }
        },
        {
            path: '/blogrightslider',
            component: BlogRightSlider,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'لغزنده سمت راست وبلاگ';
            }
        },
        {
            path: '/blognews',
            component: BlogNews,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'اخبار وبلاگ';
            }
        },
        {
            path: '/singleleftsidebar',
            component: SingleLeftSidebar,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'نوار کناری چپ';
            }
        },
        {
            path: '/singlerightsidebar',
            component: SingleRightSidebar,
            beforeEnter: (to, from, next) => {
                next();
                document.title = to.meta.title || 'نوار کناری راست';
            }
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})