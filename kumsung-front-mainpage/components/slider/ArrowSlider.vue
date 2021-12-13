<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings">
      <div class="card purunet">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img1.png" />
          <div class="card__description">
            <span class="badge">푸르넷 공부방</span>
            <p>푸르넷 공부방 5일 무료체험 신청 이벤트</p>
          </div>
        </a>
      </div>
      <div class="card engbuddy">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img2.png" />
          <div class="card__description">
            <span class="badge">잉글리시버디</span>
            <p>2021 제 9회 잉글리시버디 말하기 대회</p>
          </div>
        </a>
      </div>
      <div class="card hub">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img1.png" />
          <div class="card__description">
            <span class="badge">티칭허브</span>
            <p>생생한 우리 지역 교과서 &lt;우리 지역 맞춤 자료&gt;신규 오픈</p>
          </div>
          <div class="border"></div>
        </a>
      </div>
      <div class="card engbuddy">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img2.png" />
          <div class="card__description">
            <span class="badge">잉글리시버디</span>
            <p>2021 제 9회 잉글리시버디 말하기 대회</p>
          </div>
          <div class="border"></div>
        </a>
      </div>
      <div class="card hub">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img1.png" />
          <div class="card__description">
            <span class="badge">티칭허브</span>
            <p>생생한 우리 지역 교과서 &lt;우리 지역 맞춤 자료&gt;신규 오픈</p>
          </div>
          <div class="border"></div>
        </a>
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
  name: 'Slider',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        // leftMode: true,
        //       centerPadding: '20px',
        //       infinite: true,
        //       slidesToShow: 2.5,
        //       slidesToScroll: 1,
        //       slide: 'li',
        //       arrows: true,
        //       dots: false,
        //       autoplay: false, // 자동 스크롤 사용 여부
        //       autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      },
    }
  },
}
</script>

<style scoped></style>
