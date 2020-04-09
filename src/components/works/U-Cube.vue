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
              The U-Cube system is an experimental device consisting of cubic hollowed Styrofoam. The cavities are responding to specific connectivity rules where a self-compacting concrete liquid Ductal® has been poured. The resulting design presents a support structure with no outside contact, offering many advantages including excellent thermal and acoustic insulation. The different cavities have been cut by a 6-axis ABB industrial robot piloted by HAL® (a plug-in for Grasshopper® developed by Thibault Schwartz) and are reproducing a three-dimensional mesh as continuous as possible, while the cubes obey to the discrete geometry. The project aims to integrate the formal choice of the designer/user into the computer that we understand here as a “discrete state machine.”
              </p>

              <p>
              Issues related to the project are fourfold:
              <ol>
              <li>Establishing a correspondence between the construction methods and the geometry present in a computer.</li>
              <li>Anticipating the massive deployment of robotics (whose logic is discrete) not by adapting the robots to the models, but adapting upstream geometric models used by the architecture to robots.</li>
              <li>Explore the potential of an economical use of the Ultra High Performance Fibre-Reinforced Concrete (UHPFRC).</li>
              <li>Develop a different architectural notation, which would not be based anymore on plans or continuous dimensions (metric), but on a series of numbers describing the relative positions and directions of cubes in the discrete space.</li>
              </ol>
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Conceptual Development:</b> Philippe Morel / EZCT Architecture & Design Research<br>
              <b>Project Team:</b> Tristan Gobin, Elodie Le Roy, Thibault Schwartz, Paul Poinet, Charles Bouyssou, Vida Chang<br>
              <b>Manufacturing Robotics:</b> Tristan Gobin, Charles Bouyssou and Thibault Schwartz (HAL plugin), ABB Robotics<br>
              <b>Concrete:</b> Lafarge<br>
              <b>Calculation:</b> RFR<br>
              <b>Materials:</b> Ductal®, styrofoam, wood and stainless steel<br>
              <b>Exhibition:</b> Centre Pompidou, MNAM / CCI, inv. AM-1-PI18 EC2012<br>
              </v-card-text>

              <v-card-title class="mt-0">Project Date</v-card-title>
              <v-card-text>
                2012
              </v-card-text>

              <v-card-title>Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.489923127721!2d2.352245!3d48.860642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7ac6c7e59dc3345!2sThe%20Centre%20Pompidou!5e0!3m2!1sen!2sfr!4v1586449737244!5m2!1sen!2sfr"
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
            src: "/../../../static/U-Cube00.jpg",
          },
          {
            src: "/../../../static/U-Cube0.jpg",
          },
          {
            src: "/../../../static/U-Cube1.jpg",
          },          
          {
            src: "/../../../static/U-Cube2.jpg",
          },
          {
            src: "/../../../static/U-Cube3.jpg",
          },   
          {
            src: "/../../../static/U-Cube4.png",
          },        
          {
            src: "/../../../static/U-Cube5.png",
          },     
          {
            src: "/../../../static/U-Cube6.jpg",
          },   
          {
            src: "/../../../static/U-Cube7.jpg",
          },  
          {
            src: "/../../../static/U-Cube8.jpg",
          },  
          {
            src: "/../../../static/U-Cube9.jpg",
          },  
          {
            src: "/../../../static/U-Cube10.jpg",
          },                                                          
        ],
      }
    },
  }
</script>

<style>

</style>