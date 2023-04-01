<template>
  <div id="header">
    <img src="https://static.wixstatic.com/media/0630cd_5285f98aae514e6e88e1ff83ca851dde~mv2.png/v1/fill/w_288,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wellian-Logo.png">
  </div>    
  <Authenticator>
    <template v-slot="{ user, signOut}">
      <figure class="text-center">        
        <blockquote class="display-3">
          <p>Welcome {{ user.username }}!</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          This is Wellian Assistant chatbot,<br>I can check your condition and make an appointment with the appropriate doctor.
        </figcaption>
      </figure>      
      <div id="app">   
        <amplify-chatbot
          ref="chatbotRef"
          bot-name="OrderFlowers_dev"
          bot-title="Wellian Assistant"
          auth-mode="AMAZON_COGNITO_USER_POOLS"
          :welcome-message="welcomeMessage"          
        />        
      </div>  
      <button class="btn btn-danger btn-lg" @click="signOut">Sign Out</button>      
    </template>
  </Authenticator>
</template>
  
<script>
import {ref, onMounted} from 'vue';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import awsconfig from '../aws-exports'; 

Amplify.configure(awsconfig)

export default {
  name: 'App',
  data() {
    return {
      botConfig: {}
    };
  },
  beforeUnmount() {
    document.getElementById("lex-web-ui-iframe").remove();
  },
  async mounted() {    
    const session = await Auth.currentSession();    
    const awsCredentials = {
                  "userAgent": navigator.userAgent,
                  "accesstokenjwt": session.accessToken.jwtToken,
                  "idtokenjwt": session.idToken.jwtToken,
                  "refreshtoken": session.refreshToken.token
      }
    var loaderOpts = {
        baseUrl: 'https://d3y84s96rnn97.cloudfront.net/',
        shouldLoadMinDeps: true
      };
      var loader = new window.ChatBotUiLoader.IframeLoader(loaderOpts);
      var chatbotUiConfig = {              
        lex: {
          sessionAttributes: awsCredentials
        }              
      };
      loader.load(chatbotUiConfig)
        .catch(function (error) { console.error(error); });
  },
  
  components: { Authenticator },
  setup() {
    const chatbotRef = ref(null);
    const welcomeMessage = ref('');

    onMounted(async () => {
      const currentUser = await Auth.currentSession();
      const username = currentUser.accessToken.payload.username;
      console.log("Current user name: "+ username);
      welcomeMessage.value = `Hello, ${username}! How can I assist you today?`;
      chatbotRef.value = welcomeMessage.value;
      console.log("Chatbot greeting msg: " + chatbotRef.value);
    });

    return { chatbotRef, welcomeMessage };
  }  
}

</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

amplify-chatbot {
  --header-color: DarkSlateBlue;
  --bot-background-color: LightYellow;
  --width: 35rem;
  --height: 35rem;
  --bot-background-color: DarkSlateBlue;
  --bot-text-color: white;
  --user-background-color: Tomato;
}

#header {
  margin-bottom: 30px;
}
</style>
  