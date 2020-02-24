  <template>
        <div>
            <Nav/>
            <div style="margin:50px">
                <div class="v-markdown"><h1> <i class="fas fa-grin-squint-tears"></i> Curiosities</h1></div><br>
                <iframe width="750" height="500" src="https://www.youtube.com/embed/BuOADNq99Ms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div style="margin:50px">
                <div class="v-markdown"><h1> <i class="fas fa-smile-wink"></i> 7 Mistakes cat owners make</h1></div><br>
                <iframe width="750" height="500" src="https://www.youtube.com/embed/yxsP0KyOlgs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


        <Footer/>
      </div>

    </template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    
  name: "Video",
    components: {
    Nav,
    Footer
  },
  data(){
      return {
          video: "https://www.youtube.com/watch?v=BuOADNq99Ms"
      }
  },
   computed: {
  }
}
</script>