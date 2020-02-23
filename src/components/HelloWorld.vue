<template>
  <v-container>
    
    <v-row class="text-center" style="margin-top: 100px;">
      <v-col cols="12">
        <v-img
          src='../assets/gato.jpg'
          class="my- 3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Gatolandia
        </h1>

        <p class="subheading font-weight-regular">
          If you are a big cat lover 
          <br> join our page!
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <div class="text-center">
          <v-btn rounded color="primary" to="/inicio" dark>Start</v-btn>
        </div>
      </v-col>

 
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
