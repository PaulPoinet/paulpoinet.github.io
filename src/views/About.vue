<template>
  <div>
    <section class="white">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
          <v-card-text>
            <h2
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']"
              class="mb-4"
            >
              Hi there! My name is Paul.<br>
              I am a trained architect with a strong focus on computational design and custom digital workflows for AEC.
            </h2>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <h2 class="mb-2"><v-icon color="black" class="mr-2">mdi-briefcase</v-icon>Work</h2>
            <p>I am currently a Research Fellow at the <a href="https://www.ucl.ac.uk/bartlett/construction/" target="_blank">Bartlett School of Construction and Project Management (BSCPM)</a> as part of the <a href="https://www.ucl.ac.uk/bartlett/construction/research/management-projects/aec-delta-mobility" target="_blank">AEC Delta Mobility Project</a>, and a Design Tutor at the <a href="https://www.ucl.ac.uk/bartlett/architecture/" target="_blank">Bartlett School of Architecture (BSA)</a>.</p> 
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <h2 class="mb-2"><v-icon color="black" class="mr-2">mdi-school</v-icon>Education</h2>
            <p>Previously, I pursued my PhD at the <a href="https://kadk.dk/en/CITA" target="_blank">Centre for Information Technology and Architecture (CITA)</a> as part of the <a href="http://innochain.net/" target="_blank">InnoChain European Training Network</a>, collaborating with <a href="https://www.designtoproduction.com/" target="_blank">Design-to-Production</a> and <a href="https://www.burohappold.com/" target="_blank">BuroHappold</a>. Before that graduated from the University of Stuttgart where I obtained a <a href="https://icd.uni-stuttgart.de/?p=6111" target="_blank">M.Sc. in Integrative Technologies and Architectural Design Research</a> under the supervision of the <a href="http://icd.uni-stuttgart.de/" target="_blank">Institute for Computational Design and Construction (ICD)</a> and the <a href="https://www.itke.uni-stuttgart.de/" target="_blank">Institute of Building Structures and Structural Design (ITKE)</a>. During my studies, I participated in the <a href="https://vimeo.com/107991993" target="_blank">design development</a> and construction of the <a href="https://vimeo.com/132910518" target="_blank">ICD/ITKE Research Pavilion 2014-15</a>. I also obtained a Bachelor's degree in Architecture (B.Arch.) under the supervision of the Digital Knowledge Department at the <a href="https://paris-malaquais.archi.fr/" target="_blank">École Nationale Supérieure d'Architecture de Paris-Malaquais (ENSAPM)</a>. During my education, I've always been interested in developing a deep understanding of the tools that we are using to design the world surrounding us.
            </p>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <h2 class="mb-3"><v-icon color="black" class="mr-2">mdi-keyboard</v-icon>Coding skills</h2>
            <p>
              <v-chip class="mr-2">
                <v-icon color="black" left>mdi-language-python</v-icon>
                Python
              </v-chip>
              <v-chip class="mr-2">
                <v-icon color="red" left>mdi-language-csharp</v-icon>
                CSharp
              </v-chip >
              <v-chip class="mr-2">
                <v-icon color="orange" left>mdi-language-javascript</v-icon>
                JavaScript
              </v-chip>
              <v-chip class="mr-2">
                <v-icon color="green" left>mdi-vuejs</v-icon>
                Vue.js
              </v-chip class="mr-2">                       
              <v-chip>
                <v-icon color="blue" left>mdi-vuetify</v-icon>
                Vuetify
              </v-chip>               
            </p>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <h2 class="mb-2"><v-icon color="black" class="mr-2">mdi-lightbulb-on</v-icon>Interests</h2>
            <p>Computational Design, Problem Solving, Custom Workflows, Open Standards, etc...</p>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <h2 class="mb-2"><v-icon color="black" class="mr-2">mdi-link</v-icon>Professional Domain Hunter</h2>
            <p>In my spare time, I love chasing and buying interesting domain names. As of today, I am the proud owner of <a href="http://generativedesignaec.com/" target="_blank">generativedesignaec.com</a> and <a href="http://xgenerativedesign.com/" target="_blank">xgenerativedesign.com</a>. Waiving here 👋 to the people of Autodesk and Dassault Systemes: don't hesitate to contact me to discuss 💲💲💲</p>
            </v-card-text>
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
    </section>

    <section class="white">
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
