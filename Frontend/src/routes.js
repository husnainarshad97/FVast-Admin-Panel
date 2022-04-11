import Complains from "views/examples/Complains";
import Drivers from "views/examples/Drivers";
import FareCalculation from "views/examples/FareCalculation";
import FirebasePushNotification from "views/examples/FirebasePushNotification";
import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import MultiCurrency from "views/examples/MultiCurrency.js";
import TripTracking from "views/examples/TripTracking";
import Maps from "views/examples/Maps";
import Notifications from "views/examples/Notifications";

import Stripe from "views/examples/Stripe";
import TripInvoice from "views/examples/TripInvoice.js";
import Profile from "views/examples/Profile.js";
import Passenger from "views/examples/Passenger.js";
import Form from "views/examples/Form";
import Register from "views/examples/Register.js";
import RoleManagement from "views/examples/RoleManagement";
import RevenueManagement from "views/examples/RevenueManagement";
import VehicleManagement from "views/examples/VehicleManagement.js";
import Try from "views/examples/try";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/passenger-profile",
    name: "Admin Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },

  {
    path: "/stripe",
    name: "Payments",
    icon: "ni ni-single-02 text-yellow",
    component: Stripe,
    layout: "/admin",
  },

  {
    path: "/form",
    name: "Node Mailer",
    icon: "ni ni-single-02 text-yellow",
    component: Form,
    layout: "/admin",
  },

  {
    path: "/try",
    name: "Try",
    icon: "ni ni-single-02 text-yellow",
    component: Try,
    layout: "/admin",
  },
  {
    path: "/multicurrency",
    name: "Multi-Currency",
    icon: "ni ni-money-coins text-blue",
    component: MultiCurrency,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ni ni-money-coins text-blue",
    component: Notifications,
    layout: "/admin",
  },
 
  {
    path: "/complains",
    name: "Complaints",
    icon: "ni ni-collection text-black",
    component: Complains,
    layout: "/admin",
  },

  {
    path: "/drivers",
    name: "Drivers Management",
    icon: "ni ni-delivery-fast text-green",
    component: Drivers,
    layout: "/admin",
  },

  {
    path: "/tripinvoice",
    name: "Trip Invoice",
    icon: "ni ni-collection text-black",
    component: TripInvoice,
    layout: "/admin",
  },
  {
    path: "/farecalculation",
    name: "Fare Calculation",
    icon: "ni ni-collection text-black",
    component: FareCalculation,
    layout: "/admin",
  },
  {
    path: "/passenger",
    name: "Passenger Management",
    icon: "ni ni-circle-08 text-green",
    component: Passenger,
    layout: "/admin",
  },
  {
    path: "/vehiclemanagement",
    name: "Vehicle Management",
    icon: "ni ni-bus-front-12 text-orange",
    component: VehicleManagement,
    layout: "/admin",
  },
  {
    path: "/rolemanagement",
    name: "Role Management",
    icon: "ni ni-bus-front-12 text-orange",
    component: RoleManagement,
    layout: "/admin",
  },


  {
    path: "/register",
    name: "Register New Passenger",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },

  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
