import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: "http://127.0.0.1:8000/users/"
});