<template>
  <swiper class="swiper slider" :options="swiperOption">
    <swiper-slide>
      <div class="card purunet">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img1.png" />
          <div class="card__description">
            <span class="badge">푸르넷 공부방</span>
            <p>
              푸르넷 공부방 5일 무료체험<br />
              신청 이벤트
            </p>
          </div>
        </a>
        <div class="border"></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card engbuddy">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img2.png" />
          <div class="card__description">
            <span class="badge">잉글리시버디</span>
            <p>잉글리시버디 말하기 대회</p>
          </div>
        </a>
        <div class="border"></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card hub">
        <a href="#none">
          <img class="card__img" src="~assets/images/main/news_img3.png" />
          <div class="card__description">
            <span class="badge">티칭허브</span>
            <p>
              금성 초등 검정 교과서<br />
              수학, 사회, 과학 새 교과서 안내
            </p>
          </div>
        </a>
        <div class="border"></div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-loop",
  title: "Loop mode / Infinite loop",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        spaceBetween: 0,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
</style>
