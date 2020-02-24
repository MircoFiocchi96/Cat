<template>
  <div>
    <v-toolbar
      dark
      prominent
       height="50px"
    >
    <v-toolbar-title style=""><i class="fas fa-cat"></i> Gatolandia</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div @click="home()" style="margin: 10px">
          | Home  
        </div>
        <div @click="breed()" style="margin: 10px">
          | Photos  
        </div>
        <div style="margin: 10px">
          | Photos 
        </div>
         <div style="margin: 10px">
          | Videos 
        </div>


        </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
    data: () => ({

  }),
  methods:{
    home(){
      this.$router.push('inicio')
    },
    breed(){
      this.$router.push('photos')
    },
  }
}

</script>

