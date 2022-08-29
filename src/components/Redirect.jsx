import React from "react";
import { useNavigate } from "react-router-dom";

export function Redirect({ to }) {
  const navigation = useNavigate();

  React.useEffect(() => {
    navigation(to);
  });

  return <></>;
}
