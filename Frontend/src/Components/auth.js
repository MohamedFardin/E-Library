class Auth {
    constructor() {
      this.authenticated = false;
      this.present_user = "";
    }
  
    login() {
      this.authenticated = true;
    }
  
    logout() {
      this.authenticated = false;
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    set_User(user) {
        this.present_user = user;
        console.log(this.present_user);
        console.log(user);
    }

    tell_User() {
        return this.present_user;
    }
  }
  
  export default new Auth();
  