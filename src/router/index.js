import Vue from "vue";
import VueRouter from "vue-router";
import { PermissionModule as RouterPermissionModule } from "mscomponents/store/Layout/Permission.class";

Vue.use(VueRouter);

const Layout = () =>
  import(/* webpackChunkName: "dashboard" */ "mscomponents/UI/BaseLayout");

const LayoutProps = {
  servicePhone: "0769-xxxxxxxx",
  userInfo: {
    nickname: "卢智华库大库路马拉可林不拉夫斯基",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCnbayQIq0SLjq7bdjeYI4R14mT7RiGbuhw&usqp=CAU",
    realName: "爱新觉罗胤禛",
    mobile: "15698745698",
    company: "重庆欧菲斯工品供应链科技有限公司",
  },
  exported: {
    moreUrl: "",
    redPoint: true,
    list: [
      {
        id: 1,
        title: "Oms订单处理20210701120109Oms订单处理20210701120109",
        process: 3,
        createTime: "2021-08-21",
      },
      {
        id: 2,
        title: "全量业务报表2021062819020",
        process: 1,
        createTime: "2021-08-22",
      },
      {
        id: 3,
        title: "订单详情PDF20210710116339",
        process: 2,
        createTime: "2021-08-24",
      },
    ],
  },
  ticket: {
    moreUrl: "",
    redPoint: false,
    list: [
      {
        id: 1,
        title: "第一期工单内容标题",
        createTime: "2021-07-03",
        status: "success",
        statusText: "已完结",
      },
      {
        id: 2,
        title: "第二期工单内容标题",
        createTime: "2021-07-13",
        status: "warning",
        statusText: "待接单",
      },
      {
        id: 3,
        title: "第三期工单内容标题",
        createTime: "2021-07-23",
        status: "danger",
        statusText: "已超时",
      },
    ],
  },
  news: {
    moreUrl: "",
    redPoint: false,
    list: [
      {
        id: 1,
        title: "广州10区发布高温黄色预警！午后可能“下开水”",
        createTime: "2021-06-21",
        isRead: false,
      },
      {
        id: 2,
        title:
          "OfficeMate欧菲斯商城提供一站式办公服务解决方案，产品覆盖办公设备、文具、电脑数码、员工福利等多个品类，品质可靠，全国联保，真正做到：您专心工作，琐事我来做！",
        createTime: "2021-09-21",
        isRead: true,
      },
      {
        id: 3,
        title:
          "2014年全面整合成立集团(欧菲斯办公伙伴控股有限公司)由贸易型企业向办公垂直分布式电商全面转型",
        createTime: "2022-01-21",
        isRead: false,
      },
    ],
  },
};

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    props: LayoutProps,
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"
          ),
        name: "Dashboard",
        meta: {
          title: "工作台",
          icon: "ofs-i-meter-reading",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/product",
    component: Layout,
    props: LayoutProps,
    name: "Product",
    meta: {
      title: "我的商品",
      icon: "ofs-i-solicitation",
    },
    children: [
      {
        path: "brandApply",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "BrandApply",
        meta: {
          title: "品牌申请",
        },
      },
      {
        path: "supplierList",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "SupplierList",
        meta: {
          title: "供货列表",
        },
      },
      {
        path: "goodReturnDetail",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "GoodReturnDetail",
        meta: {
          title: "采购退单详情",
          hidden: true,
        },
      },
      {
        path: "releaseApply",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "ReleaseApply",
        meta: {
          title: "商品发布详情",
          hidden: true,
        },
      },
      {
        path: "brandList",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "brandList",
        meta: {
          title: "品牌库查询",
        },
      },
      {
        path: "productApplyList",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "ProductApplyList",
        meta: {
          title: "商品申请列表",
        },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    props: LayoutProps,
    name: "Order",
    meta: {
      title: "销售订单",
      icon: "ofs-i-detailed",
    },
    children: [
      {
        path: "omsManage",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "OmsManage",
        meta: {
          title: "销售列表",
        },
      },
      {
        path: "afterSale",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "AfterSale",
        meta: {
          title: "售后申请",
        },
      },
      {
        path: "returnDeal",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "ReturnDeal",
        meta: {
          title: "我的退单",
        },
      },
      {
        path: "returnAudit",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "ReturnAudit",
        meta: {
          title: "退单审核",
        },
      },
      {
        path: "myOmsManageList",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "MyOmsManageList",
        meta: {
          title: "我的订单",
        },
      },
      {
        path: "goodAbnormal",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "GoodAbnormal",
        meta: {
          title: "异常处理",
        },
      },
      {
        path: "projectPreparedList",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "ProjectPreparedList",
        meta: {
          title: "报备列表",
        },
      },
      {
        path: "projectPreparedDetail",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        name: "ProjectPreparedDetail",
        meta: {
          title: "报备详情",
        },
      },
    ],
  },
];

const asyncRoutes = [];

const createRouter = () =>
  new VueRouter({
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    routes: constantRoutes,
  });

const router = createRouter();

router.beforeEach(async (to, from, next) => {
  if (RouterPermissionModule.routes.length === 0) {
    await RouterPermissionModule.GenerateRoutes({
      constantRoutes,
      asyncRoutes,
      roles: ["admin"],
    });
  }

  next();
});

export default router;
