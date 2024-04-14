import LoginPage from "./components/dashboard/login";
import OverviewPage from "./components/dashboard/overview";

export const routes = [
  {
    title: "Overview",
    subRoutes: [],
    icon: "dashboard",
    component: <OverviewPage />,
    route: "/",
  },
  {
    title: "Login",
    subRoutes: [],
    icon: "dashboard",
    component: <LoginPage />,
    route: "/login",
  },
];
