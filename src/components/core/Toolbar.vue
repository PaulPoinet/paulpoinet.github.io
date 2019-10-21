<template>
  <v-app-bar
    v-scroll="onScroll"
    app
    elevate-on-scroll
    :color="!isScrolling ? 'transparent' : 'grey lighten-3'"
  >
    <!-- <v-img
      class="shrink"
      max-width="60%"
      src="/static/alpha-creative-logo.png"
    /> -->
    
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

    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="text-capitalize subtitle-1 mx-1"
        text
      >
        <span v-text="item.text" />
      </v-btn>
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card
        color="primary"
        dark
      >
        <v-list color="transparent">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false,
      items: [
        {
          to: '/',
          text: 'Home'
        },
        {
          to: '/about-me',
          text: 'CV'
        },
        {
          to: '/my-work',
          text: 'Works'
        },
        {
          to: '/contact-me',
          text: 'Contact'
        }
      ]
    }),

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 20
      }
    }
  }
</script>
