import React, { FC, useEffect } from "react";
import { AuthService } from "../lib/services/AuthService";
import { useRouter } from "next/router";
import Axios from "axios";

export interface Props {
  isCallback: boolean;
}

const LoginManager: FC<Props> = (props) => {
  const router = useRouter();
  const [authService, setAuthService] = React.useState<AuthService>();
  const [isComponentMounted, setIsComponentMounted] = React.useState<boolean>(
    false
  );

  useEffect(() => {
    setIsComponentMounted(true);

    if (!authService) {
      setAuthService(new AuthService());
    }
  }, []);

  if (!isComponentMounted) {
    return null;
  }

  if (!props.isCallback) {
    authService.login();
  } else {
    authService.signinRedirectCallback().then(() => {
      authService.getUser().then((user) => {
        Axios.post(
          "https://localhost:5001/api/session",
          { token: btoa(JSON.stringify(user)) },
          { withCredentials: true }
        ).then(() => {
          window.location.href = "http://localhost:3000";
        });
      });
    });
  }

  return <div />;
};

export default LoginManager;
