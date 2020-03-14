import * as actions from "./paginationActions";

export const paginateCompanies = (
  page,
  companies,
  postsPerPage = 10
) => async dispatch => {
  try {
    dispatch(actions.setPage(page));

    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = await companies.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    dispatch(actions.paginateSuccess(currentPosts));
  } catch (error) {
    dispatch(actions.paginateFailure(error.message));
  }
};
