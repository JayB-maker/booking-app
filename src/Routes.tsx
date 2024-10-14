import About from "./components/dashboard/About";
import Contact from "./components/dashboard/Contact";
import Store from "./components/dashboard/Store";
import ViewPets from "./components/dashboard/ViewPets";
import CreatePets from "./components/dashboard/createPets";
import Home from "./components/dashboard/dashboardHome";
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
  {
    title: "Home",
    subRoutes: [],
    icon: "dashboard",
    component: <Home />,
    route: "/dashboard",
  },
  {
    title: "View Pets",
    subRoutes: [],
    icon: "dashboard",
    component: <ViewPets />,
    route: "/dashboard/view-pets",
  },
  {
    title: "Create Pets",
    subRoutes: [],
    icon: "dashboard",
    component: <CreatePets />,
    route: "/dashboard/create-pets",
  },
  {
    title: "Our Store",
    subRoutes: [],
    icon: "dashboard",
    component: <Store />,
    route: "/our-store",
  }
];
