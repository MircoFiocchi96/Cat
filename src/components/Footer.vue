<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title >
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>


            <v-icon style="margin: 10px" @click="facebook()" class="fab fa-facebook"></v-icon>
            <v-icon style="margin: 10px"  @click="instagram()" class="fab fa-instagram"></v-icon>
            <v-icon style="margin: 10px"  @click="linkedin()" class="fab fa-linkedin"></v-icon>


      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Mirco Fiocchi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({

    }),
    methods: {
      facebook(){
         window.open ("https://www.facebook.com/mircofiocchi/")
      },
      instagram(){
        window.open ("https://www.instagram.com/mirco.fiocchi/?hl=es-la")
      },
      linkedin(){
         window.open ("https://www.linkedin.com/in/mirco-matias-fiocchi-76866a173/")
      }

    }
  }
</script>