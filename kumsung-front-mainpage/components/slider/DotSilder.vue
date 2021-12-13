<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="main_slide">
        <div class="slider">
            <div>
                <img src="~assets/images/main/main_slide.png">
            </div>
            <div>
                <img src="~assets/images/main/main_slide.png">
            </div>
        </div>
    </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                arrows: false,
                dots: true,
                slidesToShow : 1,
            },
        }
    }
  }
</script> 
