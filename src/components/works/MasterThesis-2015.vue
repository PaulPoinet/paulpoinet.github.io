<template lang='md'>
  

<section class="mt-12">
            <v-container md="7">
        <v-row justify="center">
        <v-col md="8"
            >
          
      <v-card :elevation="24">
        <v-carousel hide-delimiters dark height="500">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>

            

        </v-card>


            <v-card-title class="mt-12">Project Description</v-card-title>
            <v-card-text>
              <p>
              The paper presents the development of a design framework that aims to reduce the complexity of designing and fabricating free-form inflatables structures, which often results in the generation of very complex geometries. In previous research the form-finding potential of actuated and constrained inflatable membranes has already been investigated however without a focus on fabrication. Consequently, in established design-to-fabrication approaches, complex geometry is typically post-rationalized into smaller parts and are finallyfabricated through methods, which need to take into account cutting pattern strategies and material constraints. The design framework developed and presented in this project aims to transform a complex design process (that always requires further post-rationalization) into a more integrated one that simultaneously unfolds in a physical and digital environment. At a full scale, a flexible material (extensible membrane, e.g. latex) is actuated through inflation and modulated through additive stiffening processes, before being completely rigidified with glass fibers and working as a thin-shell under compression. 
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Design & Fabrication:</b> Paul Poinet<br>
              </v-card-text>



              <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://www.researchgate.net/publication/305993819_Adaptive_Pneumatic_Shell_Structures_Feedback-driven_robotic_stiffening_of_inflated_extensible_membranes_and_further_rigidification_for_architectural_applications/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Research Publication
                   </v-btn>
      

              
             
     <v-card-title class="mt-0">Project Video</v-card-title>
              <v-container>
              <v-card tile raised height="360" width="640" :elevation="24" color="black">
              <iframe         
                align="top"
                height="360"
                width="640"
                frameborder="0"
                style="border:0"
                allowfullscreen src="https://player.vimeo.com/video/146791195" allow="autoplay; fullscreen"></iframe>
              </v-card>
              </v-container>

     <v-card-title class="mt-10">Project Presentation</v-card-title>
              <v-container>
              <v-card tile raised height="360" width="640" :elevation="24" color="black">
              <iframe         
                align="top"
                height="360"
                width="640"
                frameborder="0"
                style="border:0"
                allowfullscreen src="https://player.vimeo.com/video/389371102" allow="autoplay; fullscreen"></iframe>
              </v-card>
              </v-container>

              <v-card-title class="mt-10">Project Date</v-card-title>
              <v-card-text>
                2015
              </v-card-text>

              <v-card-title>Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.989255423891!2d9.173063715671683!3d48.782095379280086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db3132ba98b1%3A0x3197c083db1757a!2sKeplerstra%C3%9Fe%2011%2C%2070174%20Stuttgart%2C%20Germany!5e0!3m2!1sen!2suk!4v1573750246687!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                />
              </v-card>
              </v-container>
            
</v-col>



       </v-row>

      </v-container>
    </section>

    
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: "/../../../static/MasterThesisCover.png",
          },
          {
            src: "/../../../static/MasterThesis00.png",
          },          
          {
            src: "/../../../static/MasterThesis0.png",
          },
          {
            src: "/../../../static/MasterThesis1.png",
          },
          {
            src: "/../../../static/MasterThesis2.png",
          },
          {
            src: "/../../../static/MasterThesis3.png",
          },
          {
            src: "/../../../static/MasterThesis3b.png",
          },
          {
            src: "/../../../static/MasterThesis4.jpg",
          },
          {
            src: "/../../../static/MasterThesis8.png",
          },         
          {
            src: "/../../../static/MasterThesis5.png",
          },
          {
            src: "/../../../static/MasterThesis5b.png",
          },
          {
            src: "/../../../static/MasterThesis6.png",
          },
          {
            src: "/../../../static/MasterThesis7.png",
          }                                                   
        ],
      }
    },
  }
</script>

<style>

</style>