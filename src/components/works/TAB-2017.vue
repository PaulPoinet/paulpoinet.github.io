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
              <b>Design:</b> Paul Poinet, Tom Svilans, Martin Tamke, Mette R. Thomsen<br>
              <b>Modelling:</b> Paul Poinet, Tom Svilans<br>
              <b>Imagery:</b> Tom Svilans, Leonardo Castaman<br>
              </v-card-text>



              <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="http://innochain.net/tallinn-architecture-biennale-2017-folly-competition/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Innochain
                   </v-btn>
                       

              
              <v-card-title class="mt-10">Presentation of the project given at the TAB 2017 Symposium</v-card-title>
              <v-container>
              <v-card tile raised height="360" width="640" :elevation="24" color="black">
              <iframe width="640" height="360" src="https://www.youtube.com/embed/POh4oTwN9g4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
              </v-card>
              </v-container>
              <v-card-title class="mt-10">Project Date</v-card-title>
              <v-card-text>
                2017
              </v-card-text>
              <v-card-title class="">Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.9271251118508!2d24.755299906008155!3d59.44032291954794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbee29104d4a4816a!2sMuseum%20of%20Estonian%20Architecture!5e0!3m2!1sen!2suk!4v1574092424242!5m2!1sen!2suk"
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