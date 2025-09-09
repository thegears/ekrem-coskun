import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("menu", "routes/menu/menu.tsx"),
  route("menu/:category", "routes/menu/menu-category.tsx"),
  route("admin", "routes/admin.tsx"),
  route("security/", "routes/security.tsx"),
] satisfies RouteConfig;
