<script>
  import { fade } from "svelte/transition";
  import up from "/up.svg";
  let open = false;
  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<main>
  <div id="quick-menu">
    {#if open}
      <section transition:fade={{ duration: 100 }}>
        <ul>
          <li class="btn">
            <a href="tel:02-3482-4056">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0765 5.81654L11.7305 4.91377C13.2786 4.06878 15.2071 4.5813 16.2353 6.11099L18.2826 9.15854C19.1749 10.4853 19.1623 12.2513 18.2516 13.5233L15.7209 17.0631C16.2519 18.787 17.1768 20.4062 18.4973 21.9203C19.7577 23.3885 21.2999 24.589 23.0326 25.4506L26.5176 23.4887C27.8377 22.7471 29.4788 22.9925 30.5897 24.0972L33.177 26.6706C34.4703 27.9557 34.6818 30.0298 33.6748 31.5241L32.5951 33.1258C31.5207 34.7197 29.7128 35.5724 27.8459 35.362C23.4408 34.8669 18.8794 31.7558 14.16 26.029C9.43375 20.2933 7.15434 15.0907 7.31975 10.4285C7.38959 8.46643 8.43958 6.71092 10.0798 5.81591L10.0765 5.81654Z"
                  fill="#696969"
                />
              </svg>
            </a>
          </li>
          <li class="btn">
            <a target="_blank" href="http://pf.kakao.com/_BNkWK/chat">
              <img src="/data/assets/images/kakao.png" alt="" /></a
            >
          </li>
          <li class="btn">
            <a href="https://talk.naver.com/ct/w4j535?frm=psf" target="_blank">
              <img class="btn" src="/data/assets/images/naver.jpg" alt="" />
            </a>
          </li>
          <li class="btn">
            <a href="https://pf.kakao.com/_BNkWK/66426658" target="_blank">
              <img src="/data/assets/images/coupon.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    {/if}
    <button
      class="btn"
      class:open
      on:click={() => {
        open = !open;
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="black" />
      </svg>
    </button>
    <button
      class="btn"
      on:click={goTop}
    >
      <img src={up} alt="" />
    </button>
  </div>
</main>

<style>
  main {
    z-index: 9999999;
  }

  .open {
    transform: rotate(45deg);
  }

  #quick-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 40px;
    right: 5%;
    gap: 8px;
  }

  .btn {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
  }

  section > ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li > a > img {
    width: 100%;
  }
</style>
