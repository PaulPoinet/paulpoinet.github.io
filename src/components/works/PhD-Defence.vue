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
              <b>Grove</b> is a competition proposal for the <a href="https://2017.tab.ee/" target="_blank">2017 Tallinn Architecture Biennale</a> folly competition. It is a pocket of natural space - a safe haven - in the middle of the city of Tallinn. Constructed out of freeform glue-laminated timber elements, the folly twists, winds, and branches into an enveloping canopy that seemingly grows from the site. Merging highly abstract and systemic methods of algorithmic modelling with state-of-the-art timber fabrication technologies, this proposal points towards a new architecture that is rooted in the deep embedding of material behaviours and performance into architectural and urban thinking.
              </p>
              <p>
              Taking inspiration from the branching and dense interleaving of trees in the forest, this entry is based on an integrated modelling method which combines an overall branching and growth logic with embedded material limits and fabrication constraints. The structure is organized as a self-supprting ‘grove’ of laminated timber elements which bifurcate and interconnect to create a three-dimensional spaceframe-like structural scheme.
              </p>
              <p>
              Two main contextual considerations guide the clustering and opening of the pavilion: the entrance of the Museum of Estonian Architecture, and the view towards the Old City to the southwest. These are articulated by two ‘pockets’ of space within the vaulting structure, providing semi-enclosed sitting areas from which to relax, take a breath, and look towards the city skyline. This proposal unfolds in three parts: the experiential and atmospheric qualities of the folly; the fabrication-aware methods of modeling and existing prototypes that demonstrate the feasibility of construction; and a high-level graph-based model which links the overal scheme with issues of logistics and project organization across multiple scales.
              </p>
              <p>
              The project was awarded 2nd place.
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Design:</b> Paul Poinet, Tom Svilans, Martin Tamke, Mette Ramsgaard Thomsen<br>
              <b>Modelling:</b> Paul Poinet, Tom Svilans<br>
              <b>Imagery:</b> Tom Svilans, Leonardo Castaman<br>
              </v-card-text>



              <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://kadk.dk/kalender/online-phd-forsvar-enhancing-collaborative-practices-architecture-engineering-and/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   KADK - Ph.d.-forsvar
                   </v-btn>

                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://kadk.zoom.us/j/182688666/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Online Defence (Zoom)
                   </v-btn>           

                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://adk.elsevierpure.com/ws/portalfiles/portal/63656018/PhDThesis_PaulPoinet_102219_FINAL_1_.pdf/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Read the thesis (Pre-defence version)
                   </v-btn> 
              
              <v-card-title class="mt-10">PhD Defence Agenda</v-card-title>
              <v-card-title class="mt-10">Project Date</v-card-title>
              <v-card-text>
                2015 - 2019
              </v-card-text>
              <v-card-title class="">Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8997.709930142883!2d12.6036984!3d55.6815553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbfdff2deaebbbb86!2sThe%20Royal%20Danish%20Academy%20of%20Fine%20Arts%20Schools%20of%20Architecture%2C%20Design%20and%20Conservation!5e0!3m2!1sen!2sfr!4v1585666214358!5m2!1sen!2sfr"
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
            src: "/../../../static/Grove-Main-Render.jpg",
          },
          {
            src: "/../../../static/Grove-Day-Render.jpg",
          },          
          {
            src: "/../../../static/Grove-Night-Render.jpg",
          },
          {
            src: "/../../../static/Grove-Modelling.png",
          },
          {
            src: "/../../../static/Grove-Details.png",
          }       
          
        ],
      }
    },
  }
</script>

<style>

</style>