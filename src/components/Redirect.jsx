import React from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../utils/сontext/CurrentUser";

export function Redirect({ to }) {
  const navigation = useNavigate();
  const userContext = React.useContext(CurrentUser);

  React.useEffect(() => {
    console.log(userContext)
    if (userContext !== undefined) navigation(to);
  }, [userContext]);

  return <></>;
}
