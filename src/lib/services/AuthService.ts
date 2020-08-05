import { Log, UserManager } from "oidc-client";
import Axios from "axios";

export class AuthService {
  private userManager: UserManager;

  constructor() {
    const settings = {
      authority: "https://localhost:5001/",
      client_id: "rawpotion.client",
      redirect_uri: "http://localhost:3001/identity/login/callback",
      response_type: "code",
      scope: "openid profile",
    };

    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  public login() {
    return this.userManager.signinRedirect();
  }

  async signinRedirectCallback() {
    await this.userManager.signinRedirectCallback().then(
      (user) => {
        console.log("User is logged in");
      },
      (error) => {
        console.error(error);
      }
    );
  }

  async getUser() {
    return this.userManager.getUser();
  }
}
