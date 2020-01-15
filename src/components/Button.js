// Button takes "primary" as buttonType parameter, otherwise renders "secondary"
// ButtonLink component checks if the url is external. In such case returns <a> and opens new tab
// For internal link returns <Link> and opens it in the same page

import React from "react";
import "../App.scss";
import ButtonLink from "./ButtonLink";

function Button( props ) {
  return (
    <div id="button-secondary">
      <ButtonLink
        {...props}
      />
    </div>
  );
}

export default Button;
