<template>
<v-sheet v-if="namespace === 'Home'" :elevation="24">
  <v-img
    
    :height="400"
    
    gradient="to top, rgba(255, 255, 255, .9), rgba(255, 255, 255, .1)"
    src="/static/gr29.jpg"
  >
    <v-container
      
      fluid
      :px-12="$vuetify.breakpoint.mdAndUp"
    >
      <v-row align-center>
        <v-slide-x-transition appear>
          <v-col md="6">

        <div class="mt-12">
         <v-btn href="https://twitter.com/paul_dotnet" target="_blank" class="mb-1 mr-1 mt-1" fab small>
            <v-icon dark>mdi-twitter</v-icon>
          </v-btn>
          
          <v-btn href="https://www.linkedin.com/in/ppoinet/" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-linkedin</v-icon>
          </v-btn>

          <v-btn href="https://github.com/PaulPoinet" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-github</v-icon>
          </v-btn>

          <v-btn href="mailto:poinetp@gmail.com" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-email</v-icon>
          </v-btn>

          <v-btn href="https://www.ucl.ac.uk/bartlett/construction/people/paul-poinet" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-bank</v-icon>
          </v-btn>

          <v-btn href="https://www.researchgate.net/profile/Paul_Poinet" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-school</v-icon>
          </v-btn>

          <v-btn href="https://www.instagram.com/pauldotnet/" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-instagram</v-icon>
          </v-btn>
          
          <v-btn href="https://vimeo.com/user15749707" target="_blank" class="ma-1" fab small>
            <v-icon dark>mdi-vimeo</v-icon>
          </v-btn>
          </div>
            <h1
              class="mt-2 font-weight-medium"
              
            >
              Hi, I am Paul Poinet a.k.a. pauldotnet ✌️
            </h1>

            <!-- <div
              class="mb-4"
              :class="[$vuetify.breakpoint.xsOnly ? 'headline' : 'display-2 font-weight-light']"
            > -->
            <div
              class="mb-4"
            >
                I'm a trained architect with a strong focus on computational design and custom digital workflows for AEC.<br>

                
            </div>
 

          </v-col>
        </v-slide-x-transition>
      </v-row>
    </v-container>
  </v-img>
  </v-sheet>

  <v-sheet
    
    v-else
    :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '200px'"
    color="grey lighten-3"
    :elevation="24"
    height="20vh"
    
  >
    <v-container fill-height>
      <v-row
        align-content="center"
        justify="center"
        class="fill-height"
      >
        <v-col cols="12">
          <h1
            class="display-1 text-center"
            v-text="title"
          />
        </v-col>

        <v-breadcrumbs
          :items="breadcrumbs"
          class="grey--text pb-0 px-3"
        />
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  export default {
    computed: {
      breadcrumbs () {
        const home = { text: 'Home', to: '/' }
        const works = { text: 'Works', to: '/works' }
        switch (this.namespace) {
          case 'About': return [home, { text: 'About Me' }]
          case 'Contact': return [home, { text: 'Contact Me' }]
          case 'Work': return [home, { text: 'My Work' }]
          case 'Home': return [{ text: 'I am a trained architect with a strong focus on computational design and custom workflows for AEC.' }]
          default: return [works, { text: this.namespace }]
        }
      },
      namespace () {
        return this.$route.name
      },
      title () {
        switch (this.namespace) {
          case 'About': return 'CV'
          case 'Contact': return 'Contact'
          case 'Work': return 'Works'
          default: return this.namespace
        }
      }
    }
  }
</script>
