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
              This workshop presented the challenge of designing and fabricating an aggregate structure composed of simple, linear elements with simple joints, using multi-axis robotic machining. The design-to-production workflow - from initial diagrammatic network sketch to individual joint connections and assembly sequences - was developed to realise a self-supporting, free-form structure. Member length limitations, joint geometries, and structural stability were all factors which had to be addressed and solved in three days.
              </p>
              <p>
              This project was part of a series of workshops for the <a href="http://innochain.net/" target="_blank">InnoChain Research Network</a>. 
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Design:</b> Paul Poinet, Tom Svilans, Kasper Ax<br>
              <b>Fabrication:</b> Kaspar Ax, Paul Poinet, Tom Svilans, Inigo Dodd, Vicente Soler<br>
              </v-card-text>



              <!-- <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="http://innochain.net/tallinn-architecture-biennale-2017-folly-competition/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Innochain
                   </v-btn>
                        -->

              
             
            <v-card-title>Project Date</v-card-title>
            <v-card-text>
              2016
            </v-card-text>
              <v-card-title class="">Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.274529494627!2d-0.13287!3d51.5257154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe43e9f020ef52798!2sBartlett%20School%20of%20Architecture%2C%20UCL!5e0!3m2!1sen!2suk!4v1574095371815!5m2!1sen!2suk"
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
            src: "/../../../static/Sealion.jpg",
          },
          {
            src: "/../../../static/Sealion3D.jpg",
          },          
          {
            src: "/../../../static/SealionBuilt.jpg",
          }        
          
        ],
      }
    },
  }
</script>

<style>

</style>