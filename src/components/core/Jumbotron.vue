<template>
  <v-img
    v-if="namespace === 'Home'"
    :height="800"
    gradient="to top, rgba(255, 255, 255, .1), rgba(255, 255, 255, .99)"
    src="/static/gr28.jpg"
  >
    <v-container
      fill-height
      fluid
      :px-12="$vuetify.breakpoint.mdAndUp"
    >
      <v-row align-center>
        <v-slide-x-transition appear>
          <v-col>
            <h1
              class="mb-4"
              :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-3']"
            >
              Hi, my name is Paul Poinet a.k.a. pauldotnet 😎
            </h1>

            <div
              class="mb-4"
              :class="[$vuetify.breakpoint.xsOnly ? 'headline' : 'display-2 font-weight-light']"
            >
                I am a trained architect with a strong focus on <br>computational design and custom workflows for AEC.<br>
                
            </div>


          </v-col>
        </v-slide-x-transition>
      </v-row>
    </v-container>
  </v-img>

  <v-sheet
    v-else
    :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '300px'"
    color="grey lighten-3"
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
            class="display-2 text-center"
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

        switch (this.namespace) {
          case 'About': return [home, { text: 'About Me' }]
          case 'Contact': return [home, { text: 'Contact Me' }]
          case 'Work': return [home, { text: 'My Work' }]
          case 'Home': return [{ text: 'I am a trained architect with a strong focus on computational design and custom workflows for AEC.' }]
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
          default: return "Hi there! My name is Paul Poinet a.k.a. pauldotnet 😎"
        }
      }
    }
  }
</script>
