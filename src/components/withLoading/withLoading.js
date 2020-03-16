import React from "react";

export const withLoading = WrappedComponent => ({
  error,
  loading,
  ...props
}) => {
  const renderComponent = () => {
    if (loading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Ooops... Something went wrong. Try again later.</div>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return renderComponent();
};
