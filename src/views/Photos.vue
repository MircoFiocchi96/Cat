<template>
  <div id="app">
    <Nav/>
    <v-app>
      <v-content>
        <v-container>
          <Progress v-if="loading"/>
            <div align-center justify-center>
                <v-btn fab small color="black " dark large @click="loadNextImage" > <i class="fas fa-sync-alt"></i></v-btn> 
            </div><br>

                <div class="foto" >
                <v-card flat tile class="d-flex">
                    <v-img :src="image.url" contain>
                    </v-img>
                </v-card>
                </div>

        </v-container>
      </v-content>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import Progress from '@/components/Progress.vue'


  export default {
  name: 'Inicio',
  components: {
    Nav,
    Footer
  },
    data () {
      return {
        readonly: false,
        image: { url: ""},
        loading: false
      }
    },
    created(){
      this.loadNextImage();
    },
    
    methods:{
            async loadNextImage()
            
            {
              
                try{
                  this.loading = true
                    axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" 

                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
                    this.image = response.data[0] 
                    this.loading = false

                }catch(err){
                  this.loading = false
                }
            }
        }
  }
</script>

<style>
.foto { 
  margin-top:50px;
  margin-left: 300px;
  margin-right: 300px;
  margin-bottom: 150px;
 }
</style>