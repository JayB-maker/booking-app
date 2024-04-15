import About from "./components/dashboard/About";
import Contact from "./components/dashboard/Contact";
import LoginPage from "./components/dashboard/login";
import OverviewPage from "./components/dashboard/overview";
import SignupPage from "./components/dashboard/signup";

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
  {
    title: "Signup",
    subRoutes: [],
    icon: "dashboard",
    component: <SignupPage />,
    route: "/signup",
  }, {
    title: "About",
    subRoutes: [],
    icon: "dashboard",
    component: <About />,
    route: "/about",
  }, {
    title: "Contact",
    subRoutes: [],
    icon: "dashboard",
    component: <Contact />,
    route: "/contact",
  },
];
