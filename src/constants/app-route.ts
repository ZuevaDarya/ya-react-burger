export enum AppRoute {
  Home = "/",
  Login = "/login",
  Registration = "/register",
  ForgotPassword = "/forgot-password",
  ResetPassword = "/reset-password",
  Profile = "/profile",
  Ingredient = "/ingredients/:id",
  Error = "*",
  Orders = "/profile/orders",
  Order = "/profile/orders/:id",
  OrdersFeed = "/feed",
  OrderFeed = "/feed/:id",
}
