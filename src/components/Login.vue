<template>
  <div>
      <h3>Please Login with your google account to continue</h3>
      <button @click="login">Login With Google</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
    methods:{
        login(){
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    var credential = result.credential;
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    console.log(token);
                    // The signed-in user info.
                    var user = result.user;
                    console.log(user);
                    this.$router.push('/')
                }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    console.log(errorCode);
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    // The email of the user's account used.
                    var email = error.email;
                    console.log(email);
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    console.log(credential);
                    // ...
                });
        }
    }
}
</script>

<style>

</style>