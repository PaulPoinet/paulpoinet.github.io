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
              <b>SpeckleViz</b> is a <a href="https://speckle.systems/" target="_blank">Speckle</a> web app available within the <a href="https://github.com/speckleworks/SpeckleAdmin/" target="_blank">SpeckleAdmin</a> interface. Its main purpose is to help users getting a better understanding of the data flow of a specific Speckle Project across multiple users, streams and documents. You can find more information about it on its <a href="https://speckle.systems/docs/web/speckleviz/" target="_blank">dedicated documentation page</a>.

              
              </p>
              <p>
              This project has received funding from InnovateUK under the competition “Increase Productivity, Performance and Quality in UK Construction” (proj. no. 104799).
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>




              <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://speckle.systems/docs/web/speckleviz/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   SpeckleViz Documentation
                   </v-btn>
                       
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://www.ucl.ac.uk/bartlett/construction/research/management-projects/aec-delta-mobility/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   AEC Delta Mobility
                   </v-btn>
              

              <v-card-title class="mt-10">Project Date</v-card-title>
              <v-card-text>
                2019
              </v-card-text>

            
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
            src: "/../../../static/SpeckleViz-Interface2-Zoom.png",
          },
          {
            src: "/../../../static/SpeckleViz-Interface1.png",
          },          
          {
            src: "/../../../static/SpeckleViz-SimaudWorkflow.png",
          },
          {
            src: "/../../../static/SpeckleViz-CEDIMWorkflow.png",
          } 
        ],
      }
    },
  }
</script>

<style>

</style>