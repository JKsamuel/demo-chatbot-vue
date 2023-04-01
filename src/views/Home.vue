<template>
    <div id="header">
      <img src="https://static.wixstatic.com/media/0630cd_5285f98aae514e6e88e1ff83ca851dde~mv2.png/v1/fill/w_288,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wellian-Logo.png">
    </div>  
    <div class="card" id="header">
        <div class="card-body">
            <p>Wellian™ reinforces the relationship that already exists between you and your doctors.<br>
                The net result for you is 24/7 access to your doctor’s instructions,<br>
                issue-specific education and information, more personalized care, increased confidence and satisfaction;<br>
                all while reducing demands on both staff and healthcare providers. You can ask questions and learn from the comfort of your couch.</p>
        </div>
    </div>
    <figure class="text-center">
          <blockquote class="display-6">
            <p>Choose your preferred language</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            The chatbot will assist you
          </figcaption>
    </figure>      
    <div id="app" class="container-sm">
        <div class="row">
            <div class="col">
                <router-link type="button" class="btn btn-primary btn-lg" to="/Chatbot">ENGLISH</router-link>
            </div>            
            <div class="col">
                <router-link type="button" class="btn btn-danger btn-lg" to="/Chatbot">SPANISH</router-link>    
            </div>
        </div>
    </div>
    <router-view/>
  </template>
  
  <script>
  export default {
    name: 'SelectLanguage',
    components: {
      
    },       
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  #header {
    margin-bottom: 30px;
  }
  </style>
  