<template>
  <div>
    <section class="white">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h2
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']"
              class="mb-4"
            >
              👋 Hi there! My name is Paul.<br>
              I am a trained architect with a strong focus on computational design and custom workflows for AEC.
            </h2>

            <v-icon>mdi-briefcase</v-icon>
            <p>I am currently a Research Fellow at the <a href="https://www.ucl.ac.uk/bartlett/construction/" target="_blank">Bartlett School of Construction and Project Management (BSCPM)</a> as part of the <a href="https://www.ucl.ac.uk/bartlett/construction/research/management-projects/aec-delta-mobility" target="_blank">AEC Delta Mobility Project</a>, and a Design Tutor at the <a href="https://www.ucl.ac.uk/bartlett/architecture/" target="_blank">Bartlett School of Architecture (BSA)</a>.</p> 
            
            <v-icon>mdi-school</v-icon>
            <p>Previously, I pursued my PhD at the <a href="https://kadk.dk/en/CITA" target="_blank">Centre for Information Technology and Architecture (CITA)</a> as part of the <a href="http://innochain.net/" target="_blank">InnoChain European Training Network</a>, collaborating with <a href="https://www.designtoproduction.com/" target="_blank">Design-to-Production</a> and <a href="https://www.burohappold.com/" target="_blank">BuroHappold</a>. I graduated from the University of Stuttgart where I obtained a <a href="https://icd.uni-stuttgart.de/?p=6111" target="_blank">M.Sc. in Integrative Technologies and Architectural Design Research</a> under the supervision of the <a href="http://icd.uni-stuttgart.de/" target="_blank">Institute for Computational Design and Construction (ICD)</a> and the <a href="https://www.itke.uni-stuttgart.de/" target="_blank">Institute of Building Structures and Structural Design (ITKE)</a>. During my studies, I participated in the <a href="https://vimeo.com/107991993" target="_blank">design development</a> and construction of the <a href="https://vimeo.com/132910518" target="_blank">ICD/ITKE Research Pavilion 2014-15</a>. I also obtained a Bachelor's degree in Architecture (B.Arch.) under the supervision of the Digital Knowledge Department at the <a href="https://paris-malaquais.archi.fr/" target="_blank">École Nationale Supérieure d'Architecture de Paris-Malaquais (ENSAPM)</a>.<br>
            During my education, I've always been interested in developing a deep understanding of the tools that we are using to design the world surrounding us.
            </p>

            <v-icon>mdi-thumb-up</v-icon>
            <p>Computational Design, Problem Solving, Custom Workflows and Open Standards.</p>

          </v-col>
          <v-col
            cols="12"
            md="5"
            offset-md="1"
          >
            <v-card :max-width="400" :elevation="24">
              <v-img  

            src="/static/about.png" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- <section class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            v-for="(highlight, i) in highlights"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="mx-n3"
              color="transparent"
              flat
            >
              <v-card-title v-text="highlight" />
              <v-card-text>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Proin faucibus arcu quis ante. Nulla consequat massa quis enim. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Fusce a quam.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section> -->

    <!-- <section class="white">
      <v-container>
        <v-row>
          <v-col
            v-for="([icon, number, name], i) in experiences"
            :key="i"
            cols="6"
            md="3"
          >
            <div class="text-center">
              <v-icon
                size="64"
                class="mb-3"
                v-text="icon"
              />
              <div
                class="display-2 font-weight-bold mb-2"
                v-text="number"
              />
              <div
                class="text-uppercase"
                v-text="name"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section> -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      highlights: [
        'Custom workflows',
        'Web development',
        'Consulting'
      ],
      experiences: [
        ['mdi-vuejs', '75', 'Vue'],
        ['mdi-vuetify', '100', 'Vuetify'],
        ['mdi-aws', '67', 'AWS'],
        ['mdi-server-security', '95', 'Security']
        
      ]
    })
  }
</script>
