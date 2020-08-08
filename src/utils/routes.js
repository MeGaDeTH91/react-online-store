const getNavigationRoutes = (user) => {
  const adminLinks = [
    {
      title: "Products",
      link: "/",
    },
    {
      title: "Shop by Category",
      link: "/categories/all",
    },
    {
      title: "Users",
      link: "/users",
    },
    {
      title: "Add Product",
      link: "/products/create",
    },
    {
      title: "Add Category",
      link: "/categories/create",
    },
    {
      title: "Profile",
      link: `/profile/${user && user.id}`,
    },
    {
      title: "ShoppingCart",
      link: `/cart/${user && user.id}`,
    },
    {
      title: "Logout",
      link: `/logout`,
    },
  ];

  const authLinks = [
    {
      title: "Products",
      link: "/",
    },
    {
      title: "Shop by Category",
      link: "/categories/all",
    },
    {
      title: "Profile",
      link: `/profile/${user && user.id}`,
    },
    {
      title: "ShoppingCart",
      link: `/cart/${user && user.id}`,
    },
    {
      title: "Logout",
      link: `/logout`,
    },
  ];

  const guestLinks = [
    {
      title: "Products",
      link: "/",
    },
    {
      title: "Shop by Category",
      link: "/categories/all",
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];

  if (!user || (user && !user.loggedIn)) {
    return guestLinks;
  }

  const isAdmin = user && user.isAdministrator;

  return isAdmin ? adminLinks : authLinks;
};

export default getNavigationRoutes;
