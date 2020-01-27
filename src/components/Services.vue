<template >
  <v-row >
    <v-col cols="12">
      <v-tabs background-color="transparent" centered show-arrows>
        <v-tab v-for="(category, i) in categories" :key="i" @click="select(category)">
          <span v-text="category.text" />
        </v-tab>
      </v-tabs>

      <v-responsive min-height="700" >
        <v-container class="mt-5 mb-6">
          <transition-group tag="v-row" name="fade-transition">
            <v-col
              v-for="project in computedProjects"
              :key="project.img"
              cols="12"
              class="gallery-card"
              md="6"
            >
              <v-hover elevation="24">
                <template v-slot="{ hover }">
                  <v-container>
                  <v-card
                    
                    tile
                    :img="`/static/${project.img}`"
                    class="white--text overflow-hidden"
                    :elevation="hover ? 20 : 8"
                    dark
                    height="300"
                    hover
                    :to="project.path"
                  >
                  
                    <!-- <v-card-title v-if="hover"
                    color="cyan lighten-4"
                    v-text="project.name"></v-card-title> -->


                    <!-- <v-fade-transition>
                      <v-overlay
                          v-if="hover"
                          absolute
                          light
                        >
                          <v-icon >
                            mdi-magnify
                          </v-icon>
                      </v-overlay>
                    </v-fade-transition> -->
                    <v-slide-y-reverse-transition>
                      <v-footer
                        
                        absolute
                        class="font-weight-medium black--text"
                        height="50"
                        opacity=".1"
                        color="rgba(255, 255, 255, 0.7)"
                        
                      >
                        <div class="heading">{{ project.name }}</div>
                          <v-icon  small class="ma-3 black--text">
                            mdi-open-in-new
                          </v-icon>
                      </v-footer>
                    </v-slide-y-reverse-transition>
                  </v-card>
                  </v-container>
                </template>
              </v-hover>
            </v-col>
          </transition-group>
        </v-container>
      </v-responsive>

      <!-- <v-fade-transition mode="out-in">
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
      </v-fade-transition>-->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    category: null,
    categories: [
      {
        text: "All",
        filter: null
      },
      {
        text: "Computational Design",
        filter: 1
      },
      {
        text: "Robotic Fabrication",
        filter: 2
      },
      {
        text: "Web Development",
        filter: 3
      },
      {
        text: "Academia",
        filter: 4
      },
      {
        text: "Teaching",
        filter: 5
      }
    ],
    overlay: false,
    projects: [
      {
        name: "ICD/ITKE Research Pavilion 2013-14",
        path: "ICD-ITKE-Research-Pavilion-2013-14",
        img: "ICD-ITKE_RP13-14_Process18.jpg",
        categories: [1,2,4]
      },
      {
        name: "ICD/ITKE Research Pavilion 2014-15",
        path: "ICD-ITKE-Research-Pavilion-2014-15",
        img: "ICD-ITKE_RP14-15_Process10.jpg",
        categories: [1,2,4]
      },
      {
        name: "TAB 2017 - Installation Competition",
        path: "TAB-2017",
        img: "Grove-Main-Render.jpg",
        categories: [1,4]
      },
      {
        name: "Sealion",
        path: "Sealion",
        img: "Sealion.jpg",
        categories: [1,2,4]
      },
      {
        name: "Light Sculptures",
        path: "Light-Sculptures",
        img: "LightSculptures_1280.jpg",
        categories: [1,2,4]
      },
      {
        name: "Piped Assemblies",
        path: "Piped-Assemblies",
        img: "Piped-Assemblies-Bottom.jpg",
        categories: [1,4,5]
      },
      {
        name: "SpeckleViz",
        path: "SpeckleViz",
        img: "SpeckleViz-Interface2-Zoom.png",
        categories: [1,3]
      }
    ]
  }),

  computed: {
    computedProjects() {
      return !this.category
        ? this.projects
        : this.projects.filter(p => p.categories.includes(this.category));
    }
  },

  methods: {
    select(category) {
      this.category = category.filter;
    }
  }
};
</script>

<style scoped>
.gallery-card {
  transform-origin: center center 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.fade-transition-leave,
.fade-transition-leave-active,
.fade-transition-leave-to {
  display: none;
}
</style>
