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
            
              <v-row>
              <v-col>
              <v-card-text>
              <b>Heartbeat</b><br>
              Robot path: Teached points on KRC2<br>
              Camera: NIKON D7100<br>
              Focal length: 17<br>
              F number: 10<br>
              Exposure time: 20 s<br>
              </p>
              </v-card-text>
              </v-col>
              <v-col>
              <v-card-text>
              <p>
              <b>Thom Yorke</b><br>
              Robot path: Hypermill, Surface finishing<br>
              Camera: CANON EOS 450D<br>
              Focal length: 21<br>
              F number: 22<br>
              Exposure time: 9 min 52 s<br>
              </p>
              </v-card-text>
              </v-col>
              <v-col>
              <v-card-text>
              <b>NURBS construction</b><br>
              Robot path: Grasshopper definition with KRL output<br>
              Camera: CANON EOS 450D<br>
              Focal length: 18<br>
              F number: 22<br>
              Exposure time: 3 min 13 s<br>
              </v-card-text>
              </v-col>
              </v-row>             
            
            
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Design, Programming & Photography:</b> Paul Poinet, <a href="https://cargocollective.com/jkd/Light-Sculptures/" target="_blank">Julian Hoell</a>, Georgi Kazlachev, <a href="https://www.me-st.com/" target="_blank">Djordje Stanojevic</a>, <br>
              </v-card-text>



            <v-card-title>Project Date</v-card-title>
            <v-card-text>
              2013
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
            src: "/../../../static/LightSculptures_1280.jpg",
          },
          {
            src: "/../../../static/LightSculptures2_1280.jpg",
          },          
          {
            src: "/../../../static/LightSculptures3_1280.jpg",
          }        
          
        ],
      }
    },
  }
</script>

<style>

</style>