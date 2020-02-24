<template>
  <div class="about">
    <Nav/>
    <br>

    <div style="margin-left: 50px;">
    <h1>Welcome to Gatolandia</h1>
    </div>
    <br>

    <div style="margin-left:20px; margin-right:20px;">
      <Carousels/>
    </div>
    


<div  v-if="!showCat">
    <v-img
          src='../assets/gato.jpg'
          class="my- 3"
          contain
          height="200"
        />  
</div>


<div  v-if="showCat" class="tabla">  
  <v-simple-table dark >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Information of</th>
          <th class="text-left">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in gatos" :key="item">
          <td>Cat </td>
          <td>{{ item.text }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>

<br>
<div>
   <v-btn  rounded color="primary" @click="refresh()" dark>Show information</v-btn>
</div>
<br>

  <Footer   v-if="showCat"/>



  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Carousels from '@/components/Carousels.vue'


  export default {
  name: 'Inicio',
  components: {
    Nav,
    Carousels,
    Footer
  },
    data () {
      return {
        gatos: null,
        showCat: false

      }
    },
    mounted() {

    },
  methods:{
    refresh() {
        this.$store.dispatch('getCat').then(result => {
           this.gatos = this.$store.getters.getCats
           this.showCat = true
    })
    },


  },
  }
</script>

<style>
.tabla { 
  margin-top:50px;
  margin-left: 150px;
  margin-right: 150px;
 }
</style>
