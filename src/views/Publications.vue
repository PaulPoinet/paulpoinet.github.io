<template>
  <div>
    <section >
      <v-container >
        <v-row  justify="center">

          <v-col
           
            md="8"
            
            
          >



<h2 class="mb-2">List of Academic Publications</h2>
            

    <v-list  three-line>
      <template v-for="(item, index) in items">

        <v-btn justify="center" mb="10" v-if="item.header" rounded :elevation="4" :key="item.header" class="ma-2"  href="https://www.researchgate.net/profile/Paul_Poinet" target="_blank">
        <v-icon left>mdi-arrow-right</v-icon>
        <font >{{item.header}}</font>
        <v-icon right>mdi-school</v-icon>
        </v-btn>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          
          :href="`${item.url}`"
          target="_blank"
        >

 
          <v-list-item-avatar tile="false" rounded="true">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            
            <v-list-item-title class="text-wrap" v-html="item.authors +` (` + item.year+`).`+` `+item.title+`. `+item.where" ></v-list-item-title>
            
            
            

          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
          </v-col>

        </v-row>
              
      </v-container>
    </section>


  </div>
</template>

<script>
  
  export default {
    data: () => ({
      

      items: [
          { header: 'Research Gate' },
          {
            url: "https://www.researchgate.net/publication/343365431_Web-Based_Distributed_Design_to_Fabrication_Workflows",
            avatar: 'static/publications/caadria2020.jpg',
            title: '<b>Web-Based Distributed Design to Fabrication Workflows</b>',
            authors: "Poinet P., Stefanescu D., Papadonikolaki, E.",
            year: 2020,
            where: "In <i>CAADRIA 2020: Anthropocene, Proceedings of the 25th International Conference of the Association for Computer-Aided Architectural Design Research in Asia (CAADRIA).</i> Association for Computer-Aided Architectural Design Research in Asia, Hong Kong.",
            type: "Conference Proceedings"
          },
          { divider: true, inset: true },
          {
            url: "https://link.springer.com/chapter/10.1007/978-3-030-51295-8_18",
            avatar: 'static/publications/icccbe2020.jpg',
            title: '<b>Collaborative Workflows and Version Control through Open-Source and Distributed Common Data Environment</b>',
            authors: "Poinet P., Stefanescu D., Papadonikolaki, E.",
            year: 2020,
            where: "In <i>ICCCBE 2020: 18th International Conference on Computing in Civil and Building Engineering (ICCCBE).</i> Springer, Cham.",
            type: "Conference Proceedings"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/341592629_SpeckleViz_A_Web-based_Interactive_Activity_Network_Diagram_for_AEC",
            avatar: 'static/publications/simaud2020.jpg',
            title: '<b>SpeckleViz: A Web-based Interactive  Activity Network Diagram for AEC</b>',
            authors: "Poinet P., Stefanescu D., Papadonikolaki, E.",
            year: 2020,
            where: "In <i>SimAUD 2020: Proceedings of the 11th annual Symposium on Simulation for Architecture and Urban Design (SimAUD).</i> (pp. 419-426). The Society for Modeling and Simulation International (SCS). Vienna.",
            type: "Conference Proceedings"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/340362551_Enhancing_Collaborative_Practices_in_Architecture_Engineering_and_Construction_through_Multi-Scalar_Modelling_Methodologies",
            avatar: 'static/publications/phdthesis.jpg',
            title: '<b>Enhancing Collaborative Practices in Architecture, Engineering and Construction through Multi-Scalar Modelling Methodologies</b>',
            authors: "Poinet P.",
            year: 2020,
            where: "PhD Thesis, The Royal Danish Academy of Fine Arts Schools of Architecture, Design and Conservation (KADK).",
            type: "Thesis"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/338698530_Computational_Extensibility_and_Mass_Participation_in_Design",
            avatar: "/static/publications/design_transactions2020.jpg",
            title: '<b>Computational Extensibility and Mass Participation in Design</b>',
            authors: "Poinet P., Fisher A.",
            year: 2020,
            where: "In <i>Design Transactions: Rethinking Information Modelling for a New Material Age.</i> (pp. 56-61). UCL Press, London.",
            type: "Chapter"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/327445945_Schema-Based_Workflows_and_Inter-Scalar_Search_Interfaces_for_Building_Design",
            avatar: 'static/publications/ecppm2018.jpg',
            title: '<b>Schema-Based Workflows and Inter-Scalar Search Interfaces for Building Design</b>',
            authors: "Poinet P., Tamke M., Ramsgaard Thomsen M., Scheurer F., Fisher A.",
            year: 2018,
            where: "In <i>eWork and eBusiness in Architecture, Engineering and Construction: Proceedings of the 12th European Conference on Product and Process Modelling.</i> (pp. 329-335). CRC Press. London.",
            type: "Conference Proceedings"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/319859058_A_Multi-scalar_Approach_for_the_Modelling_and_Fabrication_of_Free-Form_Glue-Laminated_Timber_Structures",
            avatar: 'static/publications/dms2017.jpg',
            title: '<b>A Multi-scalar Approach for the Modelling and Fabrication of Free-Form Glue-Laminated Timber Structures</b>',
            authors: "Svilans, T., Poinet P., Tamke M., Ramsgaard Thomsen M.",
            year: 2017,
            where: "In <i>Humanizing Digital Reality: Proceedings of the Design Modelling Symposium 2017.</i> (pp. 247-257). Springer, Singapore.",
            type: "Chapter"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/308695849_Multi-Scalar_Modelling_for_Free-form_Timber_Structures",
            avatar: 'static/publications/iass2016.jpg',
            title: '<b>Multi-Scalar Modelling for Free-form Timber Structures</b>',
            authors: "Poinet P., Nicholas P., Tamke M., Ramsgaard Thomsen M.",
            year: 2016,
            where: "In <i>Spatial Structures in the 21st Century: Proceedings of the IASS Annual Symposium 2016.</i> The University of Tokyo, Tokyo.",
            type: "Conference Proceedings"
          },
          { divider: true, inset: true },
          {
            url: "https://www.researchgate.net/publication/305993819_Adaptive_Pneumatic_Shell_Structures_Feedback-driven_robotic_stiffening_of_inflated_extensible_membranes_and_further_rigidification_for_architectural_applications",
            avatar: 'static/publications/ecaade2016.jpg',
            title: '<b>Adaptive Pneumatic Shell Structures: Feedback-driven robotic stiffening of inflated extensible membranes and further rigidification for architectural applications</b>',
            authors: "Poinet P., Baharlou E., Schwinn T., Menges A.",
            year: 2016,
            where: "In <i>Complexity & Simplicity: Proceedings of the 34th eCAADe Conference.</i> (pp. 549-558). Oulu School of Architecture, Oulu.",
            type: "Conference Proceedings"
          }
        ]
    })
  }
</script>
