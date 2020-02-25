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
  <v-simple-table dense >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Information of cat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in gatos" :key="item">
          <td>{{ item.text }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>

<Progress v-if="loading"/>

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
import Progress from '@/components/Progress.vue'


  export default {
  name: 'Inicio',
  components: {
    Nav,
    Carousels,
    Footer,
    Progress
  },
    data () {
      return {
        gatos: null,
        showCat: false,
        loading: false

      }
    },
    mounted() {

    },
  methods:{
    refresh() {
      this.loading=true
        this.$store.dispatch('getCat').then(result => {
           this.gatos = this.$store.getters.getCats
           this.showCat = true
           this.loading = false
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
