<template>
  <main class="sticky-container" ref="sticky-container">
    <div class="sticky">
      <div class="slide-container">
        <div class="slide" ref="sl1">
          <div class="slide-big-text">
            <p>안녕하세요.</p>
          </div>
        </div>
        <div class="scdown" ref="scdown">
          <div class="scdown-text">
            아래로 스크롤하세요.
          </div>
        </div>
        <div class="slide" ref="sl2">
          <div class="slide-big-text">
            <p>처음 뵙겠습니다.</p>
          </div>
        </div>
        <div class="slide sl3" ref="sl3">
          <div class="slide-big-text">
            <p>
              동쪽에서 새로운 해가
            </p>
            <p>이윽고 떠올랐습니다.</p>
          </div>
        </div>
        <div class="slide slide-left sl4" ref="sl4">
          <div class="sl4-content">
            <div class="slide-big-text" ref="sl4-big">
              <p ref="sl4-big-1">자세한</p>
              <p ref="sl4-big-2">설명이</p>
              <p ref="sl4-big-3">있을 수도 있어요</p>
            </div>
            <div class="slide-small-text">
              <p>
                그렇습니다.
              </p>
              <p>
                이건
              </p>
              <p>
                글씨가 좀 작습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="wave" ref="wave">
          뭔가 독립적으로 움직이는 배경
        </div>

        <div class="slide slide-left sl5" ref="sl5">
          <div class="slide-big-text">
            <p>엘바노프 스튜디오는</p>
            <p>당신의 풍요로운</p>
            <p>나날을 꿈꿉니다.</p>
          </div>
          <div class="go-surf-wrapper">
            <a href="https://elvanov.com/2195" target="_blank">
              이 코드의 설명을 보려면 여기를 눌르세요.
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Slider',
}
</script>

<style scoped>
.c2 {
  height: 400px;
}

.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
}

.slide-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  display: none;
  z-index: 0;
}

.slide.enabled {
  display: block;
}

.slide-big-text p {
  margin: 0;
  font-size: 45px;
  font-weight: bold;
  line-height: 1.35;
  letter-spacing: -1.5px;
  word-spacing: 1.5px;
  text-align: center;
}

.slide-small-text {
  margin-top: 20px;
  margin-left: 5px;
}

.slide-small-text p {
  font-size: 18px;
  margin: 0;
}

.scdown {
  position: absolute;
  padding: 30px 0;
  width: 100%;
  height: 50px;
  text-align: center;
  bottom: 0px;
}
</style>
