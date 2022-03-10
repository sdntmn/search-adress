export const selectVisibleClientsFlat = (state, filters = []) => {
  if (filters.length === 0) return state.workingDataClient;

  return state.workingDataClient.filter(() => {
    const workingDataClient = [].concat();

    return filters.every((filter) => workingDataClient.includes(filter));
  });
};
