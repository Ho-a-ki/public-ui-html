<script>
  import { fade, fly, slide } from "svelte/transition";
  let logo = "https://justkor.hgodo.com/pdpage/logo.jpg";
  let mobileMenuView = false;
  let headerView = true;
  let duration = 200;
  let y = 0;
  let fixed = false;

  // let prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //     let currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //         headerView = true;
  //     } else {
  //         headerView = false;
  //     }
  //     prevScrollpos = currentScrollPos;
  // };

  function toggleMobileMenu() {
    mobileMenuView = !mobileMenuView;
    headerView = !headerView;
  }
</script>

<svelte:window bind:scrollY={y} />

{#if mobileMenuView}
<div transition:slide={{ axis: 'y', duration: 500 }} class="mobile-menu">
<div class="upper">
      <a href="/#">
        <div><span> JUST </span> KOREA</div>
      </a>
      <div>
        <button on:click={toggleMobileMenu}>
          <img src="close.svg" alt="">
        </button>
      </div>
    </div>

    <ul id="mobile-menu-list">
      <a href="/brand"
        ><li>
          <img
            class="svg-ico"
            src="https://justkor.hgodo.com/corp/img/right-arrow.svg"
            alt=""
          />
          브랜드
        </li></a
      >
      <a href="/philosophy"
        ><li>
          <img
            class="svg-ico"
            src="https://justkor.hgodo.com/corp/img/right-arrow.svg"
            alt=""
          />
          제품 철학
        </li></a
      >
      <a href="/store"
        ><li>
          <img
            class="svg-ico"
            src="https://justkor.hgodo.com/corp/img/right-arrow.svg"
            alt=""
          />
          스토어
        </li></a
      >
      <a href="/jobs"
        ><li>
          <img
            class="svg-ico"
            src="https://justkor.hgodo.com/corp/img/right-arrow.svg"
            alt=""
          />
          직업
        </li></a
      >
      <a href="https://www.justkorea.co.kr/"
        ><li>
          <img
            class="svg-ico"
            src="https://justkor.hgodo.com/corp/img/right-arrow.svg"
            alt=""
          />
          제품 찾기
        </li></a
      >
      <a href="/herb"
        ><li>
          <img
            class="svg-ico"
            src="https://justkor.hgodo.com/corp/img/right-arrow.svg"
            alt=""
          />
          허브 백과사전
        </li></a
      >
    </ul>
  </div>
{/if}

{#if headerView}
  <header class:fixed transition:fly={{ y: -50, duration }}>
    <nav class="header-left">
      <ul>
        <a href="/brand"><li>브랜드</li></a>
        <a href="/philosophy"><li class="divider">제품 철학</li></a>
        <a href="/store"><li class="divider">스토어</li></a>
      </ul>
    </nav>
    <div id="logo">
      <a href="/#">
        <img src={logo} alt="" />
      </a>
    </div>
    <nav class="header-right">
      <ul>
        <a href="/jobs"><li>직업</li></a>
        <a href="https://www.justkorea.co.kr/"
          ><li class="divider">제품 찾기</li></a
        >
        <a href="/herb"><li class="divider">허브 백과사전</li></a>
      </ul>
    </nav>
    <div class="flex items-center justify-center">
      <button on:click={toggleMobileMenu}>
        <img src="menu.svg" alt="" />
      </button>
    </div>
  </header>
{/if}

<style lang="scss">
  $header--size: 100px;
  $color--white: rgb(255, 255, 255);

  .divider {
    color: #ccc;
  }

  .svg-ico {
    width: 10px;
    padding-right: 10px;
  }

  li.divider {
    color: black;
    &::before {
      position: absolute;
      top: 12%;
      bottom: 12%;
      width: 1px;
      left: 1px;
      content: "";
      background-color: #ccc;
    }
  }

  a {
    color: black;
    text-decoration-line: none;
  }

  header {
    top: 0px;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header--size;
    background-color: $color--white;
    div {
      width: $header--size;
      text-align: center;
    }
    nav {
      display: none;
    }
  }

  // 모바일 부분

  .mobile-menu {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    top: 0px;
    width: 100vw;
    background: #2553a0;
    height: 100vh;
    z-index: 1000;
    #mobile-menu-list {
      margin-top: 20%;
      li {
        padding: 20px 50px;
        color: #ffffff;
        display: flex;
        align-items: center;
      }
    }
    .upper {
      letter-spacing: 0.05em;
      color: #ffffff;
      margin: 0 40px;
      padding-top: 50px;
      display: flex;
      justify-content: space-between;
      div {
        color: #ffffff;
        span {
          color: #d2ac53;
        }
      }
    }
  }

  @media screen and (min-width: 700px) {
    header {
      position: absolute;
      top: 0px;
      z-index: 1000000;
      height: 150px;
      justify-content: center;
      .menu-bar {
        display: none;
      }
      #logo {
        width: 200px;
      }
      nav {
        font-family: "Pretendard";
        display: block;
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          li {
            position: relative;
            padding: 0 40px;
            &::after {
              transition: all 0.4s;
              content: "";
              bottom: -30px;
              left: 5px;
              position: absolute;
              width: 100%;
              height: 3px;
              background-color: #ffffff;
            }
            &:hover::after {
              content: "";
              bottom: -25px;
              left: 5px;
              position: absolute;
              width: 100%;
              height: 3px;
              background-color: #2553a0;
            }
          }
        }
      }
    }
    // main {
    //     display: grid;
    //     grid-template-columns: 3fr 1fr;
    //     column-gap: 20px;
    // }
  }
</style>
