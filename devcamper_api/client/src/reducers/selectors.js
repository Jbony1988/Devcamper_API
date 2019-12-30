export const getBootcampSection = state => state.bootcamps;

export const getBootcampsSelectors = state => {
  const bootcamps = getBootcampSection(state);

  return bootcamps;
};

export const getSessionSection = state => state.session;
