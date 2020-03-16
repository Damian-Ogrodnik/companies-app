import React from "react";

import { Error } from "../Error";
import { Loader } from "../Loader";

export const withLoading = WrappedComponent => ({
  error,
  loading,
  ...props
}) => {
  const renderComponent = () => {
    if (loading) {
      return <Loader />;
    } else if (error) {
      return <Error />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return renderComponent();
};
