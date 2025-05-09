import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "./routes/landing-page.tsx"),
    route("/map", "./routes/map.tsx"),
    route("/login", "./routes/login.tsx"),
    route("/register", "./routes/register.tsx"),
    route("/logout", "./routes/logout.tsx"),
    route("/more_info", "./routes/more-info.tsx"),
  ] satisfies RouteConfig;
