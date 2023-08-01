import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => (
  <ContentLoader viewBox="0 0 380 70">
    <rect x="0" y="0" rx="4" ry="4" width="300" height="13" />
    <rect x="0" y="20" rx="3" ry="3" width="220" height="10" />
    <rect x="0" y="40" rx="3" ry="3" width="200" height="10" />
  </ContentLoader>
);

export default ContentLoading;
