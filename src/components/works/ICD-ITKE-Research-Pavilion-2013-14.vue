<template>
  

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
              The Institute for Computational Design (ICD) and the Institute of Building Structures and Structural Design (ITKE) of the University of Stuttgart have constructed another bionic research pavilion. The project is part of a successful series of research pavilions which showcase the potential of novel design, simulation and fabrication processes in architecture. The project was planned and constructed within one and a half years by students and researchers within a multi-disciplinary team of biologists, paleontologists, architects and engineers.
              </p>
              <p>
              The focus of the project is a parallel bottom-up design strategy for the biomimetic investigation of natural fiber composite shells and the development of novel robotic fabrication methods for fiber reinforced polymer structures. The aim was the development of a winding technique for modular, double layered fiber composite structures, which reduces the required formwork to a minimum while maintaining a large degree of geometric freedom.
              </p>
              <p>
              Therefore, functional principles of natural lightweight structures were analyzed and abstracted in cooperation with the Institute of Evolution and Ecology and the department for Paleobiology of the University of Tübingen. Through the development of a custom robotic fabrication method, these principles were transferred into a modular prototype pavilion.
              </p>
            </v-card-text>
            <v-card-title>Biomimetic Investigation</v-card-title>
              <v-card-text>
              <p>
              This investigation of natural lightweight structures was conducted in an interdisciplinary cooperation of architects and engineers from Stuttgart University and biologists from Tubingen University within the Module: Bionics of Animal Constructions led by prof. Oliver Betz (biology) and Prof. James. H. Nebelsick(geosciences). During the investigation the Elytron, a protective shell for beetles’ wings and abdomen, has proved to be a suitable role model for highly material efficient construction. The performance of these lightweight structures relies on the geometric morphology of a double layered system and the mechanical properties of the natural fiber composite. The anisotropic characteristic of this material, which consists of chitin fibers embedded in a protein matrix, allows for locally differentiated material properties.
              </p>
              <p>
              In cooperation with the ANKA Synchrotron Radiation Facility and the Institute for Photon Science and Synchrotron Radiation at the Karlsruhe Institute of Technology (KIT), high resolution 3D models of various beetle elytra were extracted through micro-computed tomography. Together with SEM scans from the University of Tübingen, this enabled an analysis of the intricate internal structures of the beetle shell. The Elytra morphology is based on a double layered structure which is connected by column-like doubly curved support elements, the trabeculae. The fiber layout within a trabecula merges the upper and lower shell segments with continuous fibers. The distribution and geometric articulation of the trabecula is highly differentiated throughout the beetle shell. Through comparative studies of multiple flying beetle species the underlying structural principles could be identified and translated into design rules for structural morphologies.
              </p>
            </v-card-text>
            <v-card-title>Material and Structural Logic</v-card-title>
              <v-card-text>
              <p>
              Based on the differentiated trabeculae morphology and the individual fiber arrangements, a double layered modular system was generated for implementation in an architectural prototype. Through the development of computational design and simulation tools, both the robotic fabrication characteristics and the abstracted biomimetic principles could be simultaneously integrated in the design process.
              </p>
              <p>
              Glass and carbon fiber reinforced polymers were chosen as building material, due to their high performance qualities (high strength to weight ratio) and the potential to generate differentiated material properties through fiber placement variation. Together with their unrestrained moldability, fiber reinforced polymers are suitable to implement the complex geometries and material organizations of the abstracted natural construction principles. Conventional fabrication methods for fiber composite elements require a mold to define form. However, this method proves to be unsuitable to transfer natural construction principles into architectural applications since they usually involve unique elements that would require extensive formwork and prohibitively complex molds.
              </p>
              <p>
              For the fabrication of the geometrically unique, double curved modules a robotic coreless winding method was developed, which uses two collaborating6-axis industrial robots to wind fibers between two custom-made steel frame effectors held by the robots. While the effectors define the edges of each component, the final geometry is emerging through the interaction of the subsequently laid fibers. The fibers are at first linearly tensioned between the two effector frames. The subsequently wound fibers lie on and tension each other which results in a reciprocal deformation. This fiber–fiber interaction generates doubly curved surfaces from initially straight deposited fiber connections. The order in which the resin impregnated fiber bundles (rovings) are wound onto the effectors is decisive for this process and is described through the winding syntax. The specific sequence of fiber winding allows to control the layout of every individual fiber leading to a material driven design process. These reciprocities between material, form, structure and fabrication are defined through the winding syntax which therefore becomes an integral part of the computational design tool.
              </p>
              <p>
              The effectors are adjustable to various component geometries, leading to only one reconfigurable tool setup for all 36 elements. Coreless filament winding does not only save substantial resources through the needlessness of individual molds, but in itself is a very material efficient fabrication process since there is no waste or cut-off pieces.
              </p>
              <p>
              The specific robotic fabrication process includes the winding of 6 individual layers of glass and carbon fibers. A first glass fiber layer defines the elements geometry and serves as formwork for the subsequent carbon fiber layers. These carbon fiber layers act as structural reinforcement and are individually varied through the fibers anisotropic arrangement. The individual layout of the carbon fibers is defined by the forces acting on each component which are derived from FE Analysis of the global structure. The generated winding syntax is transferred to the robots and allows the automatic winding of the 6 fiber layers.
              </p>
            </v-card-text>
            <v-card-title>Biomimetic Prototype</v-card-title>
              <v-card-text>
              <p>
              In total 36 individual elements were fabricated, whose geometries are based on structural principles abstracted from the beetle elytra. Each of them has an individual fiber layout which results in a material efficient load-bearing system. The biggest element has a 2.6 m diameter with a weight of only 24.1 kg. The research pavilion covers a total area of 50 m² and a volume of 122 m³ with a weight of 593 kg.
              </p>
              <p>
              The overall geometry reacts to site-specific conditions of the public space around the university building in close proximity to the park. At the same time it demonstrates the morphologic adaptability of the system, by generating more complex spatial arrangements than a simple shell structure. Altogether the research pavilion shows how the computational synthesis of biological structural principles and the complex reciprocities between material, form and robotic fabrication can lead to the generation of innovative fiber composite construction methods. At the same time the multidisciplinary research approach does not only lead to performative and material efficient lightweight constructions, it also explores novel spatial qualities and expands the tectonic possibilities of architecture.
              </p>
            </v-card-text>
            <v-divider class="mx-4 my-7"></v-divider>
            <v-card-title class="mb-6">Project Credits</v-card-title>

              <v-card-subtitle><b>Research Institutes</b></v-card-subtitle>
              <v-card-text>
              
              
              <a href="http://icd.uni-stuttgart.de/" target="_blank">Institute for Computational Design and Construction (ICD)</a> – Prof. Achim Menges<br>

              <a href="https://www.itke.uni-stuttgart.de/" target="_blank">Institute of Building Structures and Structural Design (ITKE)</a> – Prof. Jan Knippers
              </v-card-text>
              
              <v-card-subtitle><b>Research Development and Project Management</b></v-card-subtitle>
              <v-card-text>
              Moritz Dörstelmann, Vassilios Kirtzakis, Stefana Parascho, Marshall Prado, Tobias Schwinn
              </v-card-text>

              <v-card-subtitle><b>System Development, Fabrication + Construction</b></v-card-subtitle>
              <v-card-text>
              <b>WiSe 2012-13, SoSe 2013:</b> Leyla Yunis, Desislava Angelova, Hans-Christian Bäcker, Maximilian Fichter, Eugen Grass, Michael Herrick, Nam Hoang, Alejandro Jaramillo, Norbert Jundt, Taichi Kuma, Ondrej Kyjánek, Sophia Leistner, Luca Menghini, Claire Milnes, Martin Nautrup, GerganaRusenova, Petar Trassiev , Sascha Vallon, Shiyu Wie <br>
              <b>WiSe 2013-14:</b> Hassan Abbasi, Yassmin Al-Khasawneh, Desislava Angelova, Yuliya Baranovskaya, Marta Besalu, Giulio Brugnaro, Elena Chiridnik, Eva Espuny, Matthias Helmreich, Julian Höll, Shim Karmin, Georgi Kazlachev, Sebastian Kröner, Vangel Kukov, David Leon, Stephen Maher, Amanda Moore, <a href="https://www.paulpoinet.com/" target="_blank">Paul Poinet</a>, Roland Sandoval, Emily Scoones, Djordje Stanojevic, Andrei Stoiculescu, Kenryo Takahashi, Maria Yablonina<br>
              <b>With the support of:</b> Michael Preisack
              </v-card-text>
              <v-card-subtitle><b>Funding</b></v-card-subtitle>
              <v-card-text>
              Competence Network Biomimetics, Kuka Roboter GmbH, SGL Group, Sika, AFBW – Allianz Faserbasierte Werkstoffe Baden-Württemberg
              </v-card-text>

              <v-container>
                <v-card
                  width="640"
                  height="158"  
                >
                  <v-img
                    src="/../../../static/ICD-ITKE_RP13-14_Sponsors.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    width="640"
                    height="158"
                  ></v-img>
                </v-card>
              </v-container>

              <v-card-subtitle><b>Links</b></v-card-subtitle>
                   
                   <v-btn rounded :elevation="4" class="ma-2 ml-3" href="https://www.dezeen.com/2014/06/26/icd-itke-pavilion-beetle-shells-university-of-stuttgart/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   Dezeen
                   </v-btn>
                   <v-btn rounded :elevation="4" class="ma-2" href="https://www.archdaily.com/522408/icd-itke-research-pavilion-2014-icd-itke-university-of-stuttgart/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   ArchDaily
                   </v-btn>
                  <v-btn rounded :elevation="4" class="ma-2" href="https://www.designboom.com/architecture/icd-itke-research-pavilion-2013-14-interview-08-18-2014/" target="_blank">
                   <v-icon left>mdi-arrow-right</v-icon>
                   DesignBoom
                   </v-btn>                                      
              <v-card-title class="mt-10">Project Date</v-card-title>
              <v-card-text>
                2016
              </v-card-text>                   
              <v-card-title>Project Video</v-card-title>
              <v-container>
              <v-card tile raised height="360" width="640" :elevation="24" color="black">
              <iframe         
                align="top"
                height="360"
                width="640"
                frameborder="0"
                style="border:0"
                allowfullscreen src="https://player.vimeo.com/video/98783849" allow="autoplay; fullscreen"></iframe>
             
              </v-card>
              </v-container>


            <!-- <p >
              <iframe         
                align="top"
                height="360"
                width="640"
                frameborder="0"
                style="border:0"
                allowfullscreen src="https://player.vimeo.com/video/98783849" allow="autoplay; fullscreen"></iframe>
            </p> -->
              <v-card-title class="mt-10">Project Location</v-card-title>
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
            src: "/../../../static/ICD-ITKE_RP13-14_Image05.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Image07.jpg",
          },          
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Image20.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Image21.jpg",
          },       
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Image28.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Image30.jpg",
          },          
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process09.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process10.jpg",
          }, 
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process11.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process12.jpg",
          },          
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process13.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process14.jpg",
          },       
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process18.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process21.jpg",
          },          
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process23.jpg",
          },
          {
            src: "/../../../static/ICD-ITKE_RP13-14_Process25.jpg",
          },                
        ],
      }
    },
  }
</script>

<style>


</style>