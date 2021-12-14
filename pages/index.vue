<template>
  <div>
    <Header />

    <!-- main banner -->
    <main class="main">
      <video src="~assets/images/main/main.mp4" loop muted autoplay></video>
      <h1>
        교육으로
        <br />
        세상을 바꿉니다
      </h1>
    </main>

    <!-- <main>
      <ArrowSlider />
    </main> -->

    <!-- 사업 영역 -->
    <section class="main__con2">
      <div class="section__container2">
        <h1 class="main__title">사업영역</h1>
        <p class="main__description">
          국내 대표 교육 브랜드 금성출판사의
          <br class="mb" />
          다양한 교육 상품을 만나보세요.
        </p>

        <div class="business">
          <div class="card card1">
            <img
              class="card__img pc"
              src="~assets/images/main/business_img1.png"
              alt="푸르넷 이미지"
            />
            <img
              class="card__img mb"
              src="~assets/images/main/business_img1_mb.png"
              alt="푸르넷 이미지"
            />
            <div class="card__info">
              <div>
                <strong>푸르넷</strong>
                <span>purunet</span>
              </div>
              <p>
                푸르넷은 160만 누적 회원이 인정한
                <br />
                온·오프라인 초밀착 학습 시스템입니다.
              </p>
              <a href="#none" class="more-btn">View more</a>
            </div>
          </div>
          <div class="card card2">
            <img
              class="card__img pc"
              src="~assets/images/main/business_img2.png"
              alt="푸르넷 이미지"
            />
            <img
              class="card__img mb"
              src="~assets/images/main/business_img2_mb.png"
              alt="푸르넷 이미지"
            />
            <div class="card__info">
              <div>
                <strong>푸르넷</strong>
                <span>purunet</span>
                <p>
                  푸르넷은 160만 누적 회원이 인정한
                  <br />
                  온·오프라인 초밀착 학습 시스템입니다.
                </p>
              </div>
              <a href="#none" class="more-btn">View more</a>
            </div>
          </div>
          <div class="card card3">
            <img
              class="card__img pc"
              src="~assets/images/main/business_img3.png"
              alt="푸르넷 이미지"
            />
            <img
              class="card__img mb"
              src="~assets/images/main/business_img3_mb.png"
              alt="푸르넷 이미지"
            />
            <div class="card__info">
              <div>
                <strong>푸르넷</strong>
                <span>purunet</span>
              </div>
              <p>
                푸르넷은 160만 누적 회원이 인정한
                <br />
                온·오프라인 초밀착 학습 시스템입니다.
              </p>
              <a href="#none" class="more-btn">View more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 금성 소식 -->
    <section class="main__con3">
      <div class="section__container2">
        <div class="con3__left">
          <h3 class="main__title">금성 소식</h3>
          <p class="main__description">
            금성출판사에서 전하는
            <br />
            다양한 소식들을 확인해보세요.
          </p>
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
      <div class="con3__right">
        <swiperSlider />
      </div>
    </section>

    <!-- 보도 자료 -->
    <section class="main__con4">
      <div class="section__container2">
        <div class="con4__title">
          <div>
            <h1 class="main__title">보도 자료</h1>
            <p class="main__description">
              금성출판사 관련 보도자료 및
              <br class="mb" />
              동영상 뉴스를 보실 수 있습니다.
            </p>
          </div>
          <a href="#none" class="view-link">
            <img src="~assets/images/main/next_arrow.png" alt="" />
          </a>
        </div>

        <ul class="news">
          <li class="news__list">
            <a class="card" href="#">
              <span class="badge">NEW</span>
              <div class="card__body">
                <p>
                  금성출판사 '잉글리시버디 말하기 대회'
                  <br class="mb" />
                  108명 수상
                </p>
                <span class="date">2021.06</span>
              </div>
            </a>
          </li>
          <li class="news__list">
            <a class="card" href="#">
              <span class="badge">NEW</span>
              <div class="card__body">
                <p>
                  금성출판사, MBC창작동화대상 수상
                  <br class="mb" />
                  단편 동화집 &lt;누구로 변해드릴까요?&gt; 출간
                </p>
                <span class="date">2021.06</span>
              </div>
            </a>
          </li>
          <li class="news__list">
            <a class="card" href="#">
              <span class="badge">NEW</span>
              <div class="card__body">
                <p>
                  금성출판사, 푸르넷 무료체험 페이지
                  <br class="mb" />
                  리뉴얼... 고객 접점 확대
                </p>
                <span class="date">2021.06</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 인재 영입 -->
    <section class="main__con5">
      <div class="section__container2 recruit">
        <h1 class="main__title">인재 영입</h1>
        <p class="main__description">
          금성출판사의 미래를 함께 열어갈 인재를 모십니다.
          <br />
          역량있는 인재인들의 용기있는 도전을 기다립니다.
        </p>

        <div class="btns">
          <div class="btn">
            <button class="recruit-btn">직원채용중</button>
            <span class="badge">채용중</span>
          </div>
          <div class="btn">
            <button class="recruit-btn">교사채용</button>
            <span class="badge">상시모집</span>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import ArrowSlider from '../components/slider/ArrowSlider.vue'
import swiperSlider from '../components/slider/swiperSlider.vue'
import Footer from '../layouts/footer/Footer.vue'
import Header from '../layouts/header/Header.vue'

export default {
  components: { Footer, Header, ArrowSlider, swiperSlider },
}
</script>
