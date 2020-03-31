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
              
              This page is dedicated to the online defence of my Ph.D. thesis entitled <i><b>"Enhancing Collaborative Practices in Architecture, Engineering and Construction through Multi-Scalar Modelling Methodologies"</b></i>. The defence takes place on <a href="https://kadk.zoom.us/j/182688666/" target="_blank">Zoom</a> (due to the COVID-19 situation) on the <b>3rd of April 2020 at 9pm (CET)</b>. Please find below all information related to the project's credits, <a href="https://kadk.dk/kalender/online-phd-forsvar-enhancing-collaborative-practices-architecture-engineering-and/" target="_blank">defence agenda</a>, presentation content (<a href="/static/PhDThesis_PaulPoinet_102219_PreDefenceVersion.pdf" target="_blank">presentation slides</a> and videos) and reading material (<a href="/static/PhDThesis_Abstract.pdf" target="_blank">abstract</a> and <a href="/static/PhDThesis_PaulPoinet_102219_PreDefenceVersion.pdf" target="_blank">pre-defence version</a>).
              
            </v-card-text>


                   <v-card-title class="mt-10">Links</v-card-title>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://kadk.dk/kalender/online-phd-forsvar-enhancing-collaborative-practices-architecture-engineering-and/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   KADK - Info & Agenda
                   <v-icon right>mdi-information-outline</v-icon>
                   </v-btn>

                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://kadk.zoom.us/j/182688666/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Join the Online Defence on Zoom
                   <v-icon right>mdi-webcam</v-icon>
                   </v-btn>        

                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="/static/PhDThesis_PaulPoinet_102219_PreDefenceVersion.pdf" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Presentation Slides
                   <v-icon right>mdi-presentation-play</v-icon>
                   </v-btn>    

                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="/static/PhDThesis_Abstract.pdf" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Read the abstract
                   <v-icon right>mdi-file-pdf-outline</v-icon>
                   </v-btn> 

                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="/static/PhDThesis_PaulPoinet_102219_PreDefenceVersion.pdf" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Read the thesis (Pre-defence version)
                   <v-icon right>mdi-file-pdf-outline</v-icon>
                   </v-btn> 

                   <v-card-title class="mt-10">Videos</v-card-title>
            <v-card-text>
              
               The videos below are listed in their order of appearance during the PhD Defence presentation.<br>
               Their title correspond to the experiment's title they refer to.
              
              
            </v-card-text>
                    <v-container>
                    <v-card tile raised height="360" width="640" :elevation="24" color="black">
                    <iframe         
                      align="top"
                      height="360"
                      width="640"
                      frameborder="0"
                      style="border:0"
                      allowfullscreen src="https://player.vimeo.com/video/345195863" allow="autoplay; fullscreen"></iframe>
                    </v-card>
                    </v-container>
                    <v-container>
                    <v-card tile raised height="360" width="640" :elevation="24" color="black">
                    <iframe         
                      align="top"
                      height="360"
                      width="640"
                      frameborder="0"
                      style="border:0"
                      allowfullscreen src="https://player.vimeo.com/video/402625880" allow="autoplay; fullscreen"></iframe>
                    </v-card>
                    </v-container>
                    <v-container>
                    <v-card tile raised height="360" width="640" :elevation="24" color="black">
                    <iframe         
                      align="top"
                      height="360"
                      width="640"
                      frameborder="0"
                      style="border:0"
                      allowfullscreen src="https://player.vimeo.com/video/402625923" allow="autoplay; fullscreen"></iframe>
                    </v-card>
                    </v-container>                    
                    <v-container>
                    <v-card tile raised height="360" width="640" :elevation="24" color="black">
                    <iframe         
                      align="top"
                      height="360"
                      width="640"
                      frameborder="0"
                      style="border:0"
                      allowfullscreen src="https://player.vimeo.com/video/402625834" allow="autoplay; fullscreen"></iframe>
                    </v-card>
                    </v-container>
                    <v-container>
                    <v-card tile raised height="360" width="640" :elevation="24" color="black">
                    <iframe         
                      align="top"
                      height="360"
                      width="640"
                      frameborder="0"
                      style="border:0"
                      allowfullscreen src="https://player.vimeo.com/video/402625798" allow="autoplay; fullscreen"></iframe>
                    </v-card>
                    </v-container>
                    
                <v-card-title class="mt-10">PhD Defence Agenda</v-card-title>
                <v-card-text>
                <ul>
                  <li><b>21:00</b> - Welcome and presentation of chairperson, assessment committee, supervisors and author</li>
                  <li><b>21:05</b> - Paul Poinet presents his dissertation "Enhancing Collaborative Practices in Architecture, Engineering and Construction through Multi-Scalar Modelling Methodologies"</li>
                  <li><b>21:50</b> - Short break</li>
                </ul>  
                <br>
                According to the "Ministerial Order on the PhD Course of Study and the PhD Degree" the chairperson may invite the audience to contribute with short statements. Such intentions should be addressed to the chairperson during the break.<br>
                <br>
                <ul>
                  <li><b>22:00</b> - Jane Burry - Professor, Dean of the School of Design in the <a href="https://www.swinburne.edu.au/health-arts-design/" target="_blank">Faculty of Health Arts and Design at Swinburne University of Technology</a>, Victoria, Australia</li>
                  <li><b>22:30</b> - Robert Otani - Principal & Chief Technology Officer, <a href="https://www.thorntontomasetti.com/" target="_blank">Thornton Tomasetti</a>, New York, USA</li>
                  <li><b>23:00</b> - Daniel Lee - Associate Professor, Institute of Architecture and Technology, <a href="https://kadk.dk/en/" target="_blank">KADK</a>, Copenhagen, Denmark (Chair of the assessment committee)</li>
                  <li><b>23:00</b> - Comments from the auditorium</li>
                  <li>The assessment committee evaluates and makes the concluding remarks</li>
                  <li>Closure of session</li>
                </ul>
                </v-card-text>

            <v-card-title class="mt-10">Credits</v-card-title>
              <v-card-text>
              <b>Author/Presenter:</b> Paul Poinet<br>
              </v-card-text>
              <v-card-subtitle><b>Assessment Committee</b></v-card-subtitle>
              <v-card-text>
              Jane Burry - Professor, Dean of the School of Design in the <a href="https://www.swinburne.edu.au/health-arts-design/" target="_blank">Faculty of Health Arts and Design at Swinburne University of Technology</a>, Victoria, Australia<br>
              Robert Otani - Principal & Chief Technology Officer, <a href="https://www.thorntontomasetti.com/" target="_blank">Thornton Tomasetti</a>, New York, USA<br>
              Daniel Lee - Associate Professor, Institute of Architecture and Technology, <a href="https://kadk.dk/en/" target="_blank">KADK</a>, Copenhagen, Denmark (Chair of the assessment committee)<br>
              </v-card-text>
              <v-card-subtitle><b>Supervisors</b></v-card-subtitle>
              <v-card-text>
              <b>Primary Supervisor:</b> Mette Ramsgaard Thomsen - Professor, Head of <a href="https://kadk.dk/en/CITA" target="_blank">CITA, KADK</a> (Chairperson of the defence)<br>
              <b>Secondary Supervisor:</b> Martin Tamke - Associate Professor at <a href="https://kadk.dk/en/CITA" target="_blank">CITA, KADK</a><br>
              <b>Industrial Supervisors:</b> Dr. Al Fisher (<a href="https://www.burohappold.com/" target="_blank">BuroHappold Engineering</a>), Fabian Scheurer (<a href="https://www.designtoproduction.com/" target="_blank">Design-to-Production</a>)<br>
              </v-card-text>
              <v-card-subtitle><b>Funding</b></v-card-subtitle>
              <v-card-text>
              The thesis is the result of a PhD study that has been carried within the InnoChain ETN network, which has received funding from the European Union’s Horizon 2020 research and innovation program under the Marie-Sokolowski-Curie grant agreement No 642877.<br>
              <br>
              It has been accomplished at the Institute of Architecture and Technology, <a href="https://kadk.dk/en/CITA" target="_blank">CITA, KADK</a>.
              </v-card-text>

              

              <v-card-title class="mt-10">Project Date</v-card-title>
              <v-card-text>
                2015 - 2019
              </v-card-text>
              <v-card-title class="mt-10">Project Location</v-card-title>
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
            src: "/../../../static/PhD-Defence-KADK2.png",
          },
          {
            src: "/../../../static/Grove-Main-Render.jpg",
          }
        ],
      }
    },
  }
</script>

<style>

</style>