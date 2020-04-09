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
              This workshop, organized in the context of the <a href="https://www.easanetwork.org/" target="_blank">European Architecture Students Assembly (EASA)</a>, focused on the design and fabrication of a large scale inflatable structure who served as a temporary art installation in Valletta’s St George’s Square, at the very center of Malta’s capital. During two weeks, the students learned the required computational tools and fabrication processes, developed the global design and fabricated the inflatable structure.
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>
              <v-card-text>
              <b>Design Tutors:</b> Paul Poinet, Fabrice Wack, <a href="https://cargocollective.com/jkd/" target="_blank">Julian Hoell</a><br>
              <b>Students:</b> Jano Vyšný, Antreas Biros, Laoura Tziourrou, Mark Distanov, Krista Skujiņa, Fabrice Kcaw, Elis Haçkaj, Aleksandra Wróbel, Denis Tantsyura, Özlem Yazgan, Marcos Anton Kowalski, Rachel Graham, Nikita Abanin
              </v-card-text>

              <v-card-title class="mt-0">Project Date</v-card-title>
              <v-card-text>
                2015
              </v-card-text>

              <v-card-title>Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3231.9472371977736!2d14.512863202448576!3d35.89930789758379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe88421a3cacaa5d!2sSt%20George%E2%80%99s%20Square!5e0!3m2!1sen!2sfr!4v1586447941073!5m2!1sen!2sfr"
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
            src: "/../../../static/EASAMaltaLinks0.jpg",
          },
          {
            src: "/../../../static/EASAMaltaLinks1.jpg",
          },          
          {
            src: "/../../../static/EASAMaltaLinks2.jpg",
          },
          {
            src: "/../../../static/EASAMaltaLinks3.png",
          },   
          {
            src: "/../../../static/EASAMaltaLinks5.png",
          },                                            
        ],
      }
    },
  }
</script>

<style>

</style>