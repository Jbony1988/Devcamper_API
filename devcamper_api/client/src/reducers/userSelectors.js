export const getUserSection = state => state.auth;

export const getUser = state => {
  const auth = getUserSection(state);
  // console.log(auth);
  const { user } = auth;

  console.log("this is the users bootcamp", user);
  return user;
};

export const getReviewsSection = state => state.reviews;

export const getReviews = state => {
  const reviews = getReviewsSection(state);
  console.log(reviews);
  return reviews;
};

export const getBootcampSection = state => state.bootcamps;

export const getBootcamps = state => {
  const bootcampState = getBootcampSection(state);
  const { bootcamps } = bootcampState;
  const authState = getUserSection(state);
  console.log(bootcamps);
  const { user } = authState;
  // const userBootcamp = bootcamps.filter(b => b.user === user._id);

  console.log("this is the users bootcamp", bootcamps);
  return bootcamps;
};
