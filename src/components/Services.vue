<template>
  
    <v-row>
      <v-col cols="12">
        <v-tabs
          background-color="transparent"
          centered
          
          show-arrows
          
        >
          <v-tab
            v-for="(category, i) in categories"
            :key="i"
            @click="select(category)"
          >
            <span v-text="category.text" />
          </v-tab>
        </v-tabs>

        <v-responsive min-height="700">
          <v-container>
            <transition-group
              tag="v-row"
              name="fade-transition"
            >
              <v-col
                v-for="project in computedProjects"
                :key="project.img"
                cols="12"
                class="gallery-card"
                md="4"
              >
                <v-hover elevation="24">
                  <template v-slot="{ hover }">
                    <v-card
                    
                      :img="`/static/${project.img}`"
                      class="white--text overflow-hidden"
                      :elevation="hover ? 24 : 10"
                      height="300"
                      
                      @click=""
                    >

                      <v-fade-transition mode="out-in">
                        <v-footer
                          dark
                          v-if="hover"
                          color="rgba(0, 0, 0, 0.5)"
                          
                          absolute
                          class="justify-center"
                          height="300"
                        >
                          <div class="heading">
                            {{ project.name }}
                          </div>
                        </v-footer>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </transition-group>
          </v-container>
        </v-responsive>

        <v-fade-transition mode="out-in">
          <v-overlay
            v-if="overlay"
            fixed
            opacity=".9"
          >
            <v-btn
              color="transparent"
              depressed
              fab
              fixed
              large
              right
              top
              @click="overlay = false"
            >
              <v-icon large>
                mdi-close
              </v-icon>
            </v-btn>

            <v-img
              :src="`/static/${overlay}`"
              width="800"
              max-width="90vw"
            />
          </v-overlay>
        </v-fade-transition>
      </v-col>
    </v-row>
  
</template>

<script>
  export default {
    data: () => ({
      category: null,
      categories: [
        {
          'text': 'All',
          'filter': null
        },
        {
          'text': 'Computational Design',
          'filter': 1
        },
        {
          'text': 'Web Development',
          'filter': 2
        },
        {
          'text': 'Academia',
          'filter': 3
        },
        {
          'text': 'Teaching',
          'filter': 4
        },
        {
          'text': 'Talks',
          'filter': 5
        }
      ],
      overlay: false,
      projects: [
        {
          'name': 'Project 1',
          'img': 'project1.png',
          'categories': [1, 3]
        },
        {
          'name': 'Project 2',
          'img': 'project2.png',
          'categories': [2, 3]
        },
        {
          'name': 'Project 3',
          'img': 'project3.png',
          'categories': [4, 3]
        },
        {
          'name': 'Project 4',
          'img': 'project4.png',
          'categories': [1, 2]
        },
        {
          'name': 'Project 5',
          'img': 'project5.png',
          'categories': [2, 4]
        },
        {
          'name': 'Project 6',
          'img': 'project6.png',
          'categories': [1, 4]
        }
      ]
    }),

    computed: {
      computedProjects () {
        return !this.category
          ? this.projects
          : this.projects.filter(p => p.categories.includes(this.category))
      }
    },

    methods: {
      select (category) {
        this.category = category.filter
      }
    }
  }
</script>

<style scoped>
  .gallery-card {
    transform-origin: center center 0;
    transition: .3s cubic-bezier(.25,.8,.50,1);
  }

  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to {
    display: none;
  }
</style>
