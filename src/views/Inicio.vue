<template>
  <div class="about">
    <Nav/>
    <br>

    <div style="margin-left: 50px;">
    <h1>Welcome to Gatolandia</h1>
    </div>

<div class="tabla">  
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
   <v-btn rounded color="primary" @click="refresh()" dark>+ information</v-btn>
</div>
<br>



  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import axios from "axios";

  export default {
  name: 'Inicio',
  components: {
    Nav
  },
    data () {
      return {
        gatos: null,

      }
    },
    mounted() {
      this.getCat()
    },
  methods:{
    refresh() {
      this.getCat()

    },

     async getCat() {
      let datos = await axios.get(' https://cat-fact.herokuapp.com/facts/random?amount=15')
      this.gatos = datos.data
      console.log(this.gatos)
    }
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
