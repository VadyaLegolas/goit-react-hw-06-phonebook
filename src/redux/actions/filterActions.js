export const filterActions = (value) => {
  return {
    type: 'FILTER_CONTACTS',
    payload: {value}
  }
}
