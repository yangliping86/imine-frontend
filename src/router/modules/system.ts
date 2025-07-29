import { $t } from "@/plugins/i18n";

export default {
  path: "/system",
  redirect: "/system/user",
  meta: {
    icon: "ri/information-line",
    // showLink: false,
    title: $t("menus.pureSystemManage"),
    rank: 9
  },
  children: [
    {
      path: "/system/user",
      name: $t("menus.pureSystemUser"),
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        title: $t("menus.pureSystemUser")
      }
    },
    {
      path: "/system/dept",
      name: $t("menus.pureSystemDept"),
      component: () => import("@/views/system/dept/index.vue"),
      meta: {
        title: $t("menus.pureSystemDept")
      }
    }
  ]
} satisfies RouteConfigsTable;
