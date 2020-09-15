const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === '/rickandmorty_SPA/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes;