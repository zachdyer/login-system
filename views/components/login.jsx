import React from 'react';

import Default from "./layouts/default";

export default class Login extends React.Component {
    render() {
       return(
        <Default css="/css/signin.css">
            <form class="form-signin" method="post" action="/login">
                <h2 class="form-signin-heading" id="h1Message">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" name="inputEmail" class="form-control" placeholder="Email address" autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="inputPassword" class="form-control" placeholder="Password" />
                <button class="btn btn-lg btn-primary btn-block" id="buttonSignIn" onclick="signin()">Sign in</button>
                <button class="btn btn-lg btn-secondary btn-block" id="buttonSignUp" onclick="signup()">Sign up</button>
                <button class="btn btn-lg btn-secondary btn-block d-none" id="buttonSignOut" onclick="signout()">Sign Out</button>
            </form>
        </Default>
            
 
        );
     }
}