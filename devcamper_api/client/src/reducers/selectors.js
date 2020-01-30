export const getBootcampSection = state => state.bootcamps;
export const getUserSection = state => state.auth;
export const getCoursesSection = state => state.courses;
export const getReviewsSection = state => state.reviews;

export const getBootcampsSelectors = state => {
  const bootcamps = getBootcampSection(state);
  console.log("these are bootcamps", bootcamps);
  return bootcamps;
};

export const getUserBootcampSelectors = state => {
  const bootcampState = getBootcampSection(state);
  const authState = getUserSection(state);
  const { bootcamps } = bootcampState;
  const { user } = authState;

  const userBootcamp = bootcamps.filter(b => b.user === user._id);
  console.log("this is the users bootcamp", userBootcamp);
  return userBootcamp;
};

export const getBootcampCourses = state => {
  const bootcampCourses = getCoursesSection(state);

  console.log("this is the bootcamp courses", bootcampCourses);
  return bootcampCourses;
};

export const getBootcampReviewsSelector = state => {
  const bootcampReviews = getReviewsSection(state);
  const { reviews } = bootcampReviews;
  const auth = getUserSection(state);
  const { user } = auth;
  const userBootcampReviews = reviews.filter(r => r.user === user._id);
  console.log("This is the bootcamps reviews", userBootcampReviews);
  return userBootcampReviews;
};

export const getSessionSection = state => state.session;
