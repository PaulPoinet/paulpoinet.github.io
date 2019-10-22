<template>
  <v-footer
    color="grey lighten-3 px-6 py-3"
    height="auto"
    min-height="64"
  >
    <v-row :justify="$vuetify.breakpoint.mdAndUp ? 'space-between' : 'center'">
    <a class="mt-2">
    Copyright © 2019 Paul Poinet
    </a>
    <a>
      
        <v-btn href="https://twitter.com/paul_dotnet" target="_blank" class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-twitter</v-icon>
        </v-btn>
        
        <v-btn href="https://www.linkedin.com/in/ppoinet/" target="_blank" class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-linkedin-box</v-icon>
        </v-btn>

        <v-btn href="https://github.com/PaulPoinet" target="_blank" class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-github-circle</v-icon>
        </v-btn>

        <v-btn href="mailto:poinetp@gmail.com" target="_blank" class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-email</v-icon>
        </v-btn>

        <v-btn href="https://www.ucl.ac.uk/bartlett/construction/people/paul-poinet" target="_blank" class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-bank</v-icon>
        </v-btn>

        <v-btn href="https://www.instagram.com/pauldotnet/" target="_blank" class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-instagram</v-icon>
        </v-btn> 
                      
        
        
      </a>

      

    

    

    </v-row>
  </v-footer>
</template>

<style lang="sass" scoped>
  .v-footer a
    text-decoration: none
</style>
