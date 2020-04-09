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
              Through design iterations, we created an innovative structural system which could revise and transform the ground proposition (or the contact) as well as the formwork strategy. Our scale of reference and line of attack for the design of the new assembly was a 9-storey generic column-slab structure with a central circulation core. The main pursue of this design process was to challenge this banal yet efficient building skeleton by prioritizing the emergence of new spatial possibilities and inventive structural performances, both as a working result of the casting procedure of the formwork system. The final prototype is made of continuous material (concrete) and therefore its proper craftsmanship was essential focus of the project. An integrated scheme for internal and external circulation has completed a second act of occupation.
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Assistant Professor:</b> Olivier Ottevaere<br>
              <b>Conceptual Development:</b> Paul Poinet, Anthony Chu<br>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8595119331612!2d114.1362299508779!3d22.283310985260357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ff86873bb933%3A0x3b994a691724d821!2sThe%20University%20of%20Hong%20Kong%20-%20Faculty%20of%20Architecture!5e0!3m2!1sen!2sfr!4v1586451348400!5m2!1sen!2sfr"
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
            src: "/../../../static/FlexibleConcrete0.png",
          },
          {
            src: "/../../../static/FlexibleConcrete0b.png",
          },
          {
            src: "/../../../static/FlexibleConcrete1.png",
          },          
          {
            src: "/../../../static/FlexibleConcrete2.jpg",
          },
          {
            src: "/../../../static/FlexibleConcrete3.png",
          },   
          {
            src: "/../../../static/FlexibleConcrete4.png",
          },        
          {
            src: "/../../../static/FlexibleConcrete5.png",
          },     
          {
            src: "/../../../static/FlexibleConcrete6.png",
          }                                             
        ],
      }
    },
  }
</script>

<style>

</style>