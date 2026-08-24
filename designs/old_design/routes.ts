import { index, type RouteConfig, route,prefix } from "@react-router/dev/routes";

export default [
    ...prefix(":lang?",[
        index("routes/home.tsx"),
    ]),
    route("404","routes/404.tsx"),
    route("500","routes/500.tsx"),
] satisfies RouteConfig;


