export const NEW_ROUTE = 'NEW_ROUTE'
export const newRoute = (routeName) => {
  return {
    type: NEW_ROUTE,
    route: {
      name: routeName
    }
  }
}
