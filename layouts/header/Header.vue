<template>
  <header id="header" data-link="header">
    <div class="header section__container">
      <!-- 로고 -->
      <div class="header__logo">
        <a class="logo__img" href="#"></a>
      </div>
      <nav>
        <ul class="menu navbar__menu gnb">
          <li class="navbar__menu__item">
            <!-- First Tier Drop Down -->
            <a href="#">회사소개</a>
            <ul class="sub__menu">
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">회사소개</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">회사 개요</a></li>
                  <li><a href="#">CEO 인사말</a></li>
                  <li><a href="#">미션 및 비전</a></li>
                  <li><a href="#">사업 소개</a></li>
                </ul>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">히스토리</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">연혁</a></li>
                  <li><a href="#">수상이력</a></li>
                </ul>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">홍보센터</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">보도자료</a></li>
                  <li><a href="#">광고갤러리</a></li>
                </ul>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">공지사항</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">금성소식</a></li>
                  <li><a href="#">푸르넷 행사</a></li>
                </ul>
              </li>
              <li class="sub__menu__item">
                <a href="#">오시는 길</a>
              </li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <!-- First Tier Drop Down -->
            <a href="#">사업영역</a>
            <ul class="sub__menu">
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">푸르넷</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">푸르넷 공부방</a></li>
                  <li><a href="#">푸르넷 학습지</a></li>
                  <li><a href="#">온라인 학습</a></li>
                </ul>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">교과서</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">교과서</a></li>
                  <li><a href="#">티칭허브</a></li>
                </ul>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">도서·출판</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">제품찾기</a></li>
                  <li><a href="#">학습지</a></li>
                  <li><a href="#">단행본/시리즈</a></li>
                  <li><a href="#">전집</a></li>
                  <li><a href="#">사전</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <!-- First Tier Drop Down -->
            <a href="#">인재영입</a>
            <ul class="sub__menu">
              <li class="sub__menu__item">
                <a href="#">복리후생</a>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">직원채용</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">채용공고</a></li>
                  <li><a href="#">지원현황</a></li>
                </ul>
              </li>
              <li class="sub__menu__item">
                <a href="#">교사채용</a>
              </li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <!-- First Tier Drop Down -->
            <a href="#">고객센터</a>
            <ul class="sub__menu">
              <li class="sub__menu__item">
                <a href="#">FAQ</a>
              </li>
              <li class="sub__menu__item link">
                <!-- Second Tier Drop Down -->
                <a href="#">문의하기</a>
                <ul class="sub__sub__menu">
                  <li><a href="#">구매상담</a></li>
                  <li><a href="#">기타문의</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="navbar__menu__item"><a href="#">금성문화재단</a></li>
        </ul>
      </nav>
      <button class="all__menu" type="button"></button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
