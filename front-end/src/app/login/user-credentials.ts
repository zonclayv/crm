/**
 * The user credentials.
 */
export class UserCredentials {

  /**
   * The user name.
   */
  username: string;

  /**
   * The user password.
   */
  password: string;

  constructor(username: string, password: string) {
    this.password = password;
    this.username = username;
  }
}
