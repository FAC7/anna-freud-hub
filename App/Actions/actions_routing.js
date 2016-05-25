export const NEW_ROUTE = 'NEW_ROUTE'
export const newRoute = (routeName) => {
  return {
    type: NEW_ROUTE,
    route: {
      name: routeName
    }
  }
}

export const GO_BACK = 'GO_BACK'
export const goBack = () => {
  return {
    type: GO_BACK
  }
}
