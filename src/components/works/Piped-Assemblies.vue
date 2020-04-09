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
              The Piped Assemblies workshop conducted at the <a href="https://cedim.edu.mx/en/" target="_blank">Centro de Estudios Superiores de Diseño de Monterrey (CEDIM)</a> in November-December 2018, took the challenge of introducing state of the art computational design and fabrication workflows to undergraduate students in architecture.
              </p>
              <p>
              The overall free-form structure is built from 502 unique developable polypropylene plastic strips connected with rivets, and occupies a volume of 12.5 cubic meters (2.12h*2.5l*2.35L). Its aesthetics and morphology (local high curvature) is strongly inspired by the existing state of the art of free-form and organic installations designed and built by both the architectural design practice TheVeryMany (Marc Fornes) and Jens Pedersen’s yearly AA Visiting School workshops in Aarhus. The strip discretization of the structure finds also inspiration in prior research and graph-based computational design tools (Nejur, 2016). 
              </p>
              <p>
              The main goal of the workshop was to set up an integrative, file-less collaborative design workflow in which data is constantly streamed - through the open source AEC communication platform <a href="https://speckle.systems/" target="_blank">Speckle</a> - from student(s) to student(s) during all phases of both the conception and construction processes. The overall design-to-fabrication workflow relied on a waterfall methodology in which each design “pipeline” (or local Grasshopper definition) depends on its predecessor. At any stage in the workflow, it was possible to communicate some changes to a colleague situated upstream in the process in order to drive and achieve better output downstream. Such feedback loops can take place at any time during the process until all desired requirements are met. The design-to-fabrication workflow of the Piped Assemblies workshop has been segregated into 7 distinct design pipelines which have been connected through Speckle streams: (1) definition of the overall abstract network, (2) base mesh generation and stitching automation between each node, (3) mesh relaxation and planarization (Kangaroo 2), (4) strips generation algorithm based on a mesh-walk method developed with the python library NetworkX, (5) labelling, unrolling and sorting of the strips, (6) nesting of the strips (OpenNest), (7) export of the fabrication data to dxf for machine-ready deliverables and wireless transfer to laser-cutting (STMRobotics). From the fifth pipeline, the overall workflow grafts into six different parallel branches as the students have to organize themselves into six different teams in order to fabricate separately the six different nodes of the overall structure, thus reducing the complexity of the future assembly process. The six nodes have also been constructed in parallel and progressively assembled one after the other, facilitating the reach of the connections from both inside and outside the nodes during the manual placement of the rivets. The final assembled physical prototype has been hanged with nylon threads in the main entrance of CEDIM, between the first and the ground floor through the mezzanine aperture. The tension of the structure was adjusted empirically by calibrating the tensile force and anchor location of each thread.
              </p>
          
            </v-card-text>           
            
            
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title>Project Credits</v-card-title>

              <v-card-text>
              <b>Host Institution:</b> <a href="https://cedim.edu.mx/en/" target="_blank">Centro de Estudios Superiores de Diseño de Monterrey (CEDIM)</a><br>
              <b>Academic Director:</b> David Durán<br>
              <b>Visiting Professor:</b> Paul Poinet<br>
              <b>Assistants:</b> <a href="https://www.me-st.com/" target="_blank">Djordje Stanojevic</a>, <a href="https://www.me-st.com/" target="_blank">Yessica Mendez</a><br>
              <b>Students:</b> Z. Esther Cepeda, Grecia C. Cortes, Iván A. Durán, A. Karen Garza, Fabrizio Hernández, Denise Llano, Mayalen Martínez, Lina I. Mejía, Carlos A. Muñoz, Ernesto Torralba and Jesus Villalobos<br>
              <b>Sponsors:</b> STM Robotics, Abacril<br>
              </v-card-text>


              <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="http://blog.cedim.edu.mx/arquitectura/piped-assemblies/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   CEDIM BLOG
                   </v-btn>
                       

            <v-card-title class="mt-10">Project Date</v-card-title>
            <v-card-text>
              2018
            </v-card-text>

              
             

              <v-card-title>Project Location</v-card-title>
              <v-container>
              <v-card height="350" width="100%" :elevation="24">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14384.870460748603!2d-100.448878!3d25.66408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5ccddc76d9feff8!2sMonterrey%20Center%20for%20Higher%20Learning%20of%20Design!5e0!3m2!1sen!2suk!4v1574186488897!5m2!1sen!2suk"
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
            src: "/../../../static/Piped-Assemblies-Bottom.jpg",
          },
          {
            src: "/../../../static/Piped-Assemblies-NodeDetail.jpg",
          },          
          {
            src: "/../../../static/Piped-Assemblies-StripDirectionality.jpg",
          },
          {
            src: "/../../../static/Piped-Assemblies-GlobalDesign.png",
          },
          {
            src: "/../../../static/Piped-Assemblies-GlobalDesign-Exploded.png",
          },
          {
            src: "/../../../static/Piped-Assemblies-Workflow.png",
          },
          {
            src: "/../../../static/Piped-Assemblies-Nesting.png",
          }                
        ],
      }
    },
  }
</script>

<style>

</style>