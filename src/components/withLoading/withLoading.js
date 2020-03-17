import React from "react";

import { Error } from "../Error";
import { Loader } from "../Loader";

export const withLoading = WrappedComponent => ({
  error,
  loading,
  ...props
}) => {
  return loading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <WrappedComponent {...props} />
  );
};
