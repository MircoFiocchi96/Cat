<template>

  <v-carousel
    cycle
    interval="2000"
    height="200"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    >

    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://estaticos.elperiodico.com/resources/jpg/1/6/gato-1502194230861.jpg',
          },
          {
            src: 'https://dam.ngenespanol.com/wp-content/uploads/2020/02/dia-de-los-gatos.jpg',
          },
          {
            src: 'https://cdnmundo3.img.sputniknews.com/images/108832/20/1088322068.jpg',
          },
          {
            src: 'https://images.clarin.com/2017/04/11/rkygDtcag_1256x620.jpg',
          },
        ],
      }
    },
  }
</script>