<script>
  import { slide, fly } from "svelte/transition";
  let mobileMenuView = false;
  let headerView = true;
  let y = 0;
  let lastY = 0;
  let screenSize;

  $: {
    scrollCheck(y);
  }

  const scrollCheck = (y) => {
    let dy = lastY - y;
    if (dy > -0.5) {
      headerView = true;
    } else {
      headerView = false;
    }
    lastY = y;
  };

  let mobileMenuList = [
    { name: "브랜드", URL: "/brand" },
    { name: "제품철학", URL: "/brand" },
    { name: "스토어", URL: "/store" },
    { name: "직업", URL: "/brand" },
    { name: "제품 찾기", URL: "/brand" },
    { name: "허브 백과사전", URL: "/brand" },
  ];

  function toggleMobileMenu() {
    mobileMenuView = !mobileMenuView;
  }
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y}/>

<main>
  <header>
    {#if headerView}
      <section
        class="fixed bg-white w-screen flex flex-row justify-between md:hidden"
        transition:fly={{ y: -100, duration: 300 }}
      >
        <div class="w-20 p-2 m-2">
          <a href="/#">
            <img src="logo.svg" alt="" />
          </a>
        </div>
        <div class="w-20 flex items-center justify-center">
          <button on:click={toggleMobileMenu}>
            <img src="menu.svg" alt="" />
          </button>
        </div>
      </section>
    {/if}
    {#if screenSize > 768}
    <nav
      class="flex items-center justify-center gap-10 p-8 invisible md:visible"
    >
      <ul class="relative flex text-center">
        <a href="/brand"
          ><li class="px-10 border-r border-stone-300">브랜드</li></a
        >
        <a href="/philosophy"
          ><li class="px-10 border-r border-stone-300">제품 철학</li></a
        >
        <a href="/store"><li class="px-10">스토어</li></a>
      </ul>
      <div class="w-32">
        <a href="/#">
          <img src="logo.svg" alt="" />
        </a>
      </div>
      <ul class="relative flex">
        <a href="/jobs"><li class="px-10 border-r border-stone-300">직업</li></a
        >
        <a href="https://www.justkorea.co.kr/"
          ><li class="px-10 border-r border-stone-300">제품 찾기</li></a
        >
        <a href="/herb"><li class="px-10">허브 백과사전</li></a>
      </ul>
    </nav>
    {/if}
  </header>
  {#if mobileMenuView}
    <div
      transition:slide={{ axis: "y", duration: 300 }}
      class="text-white w-full h-screen fixed top-0 bg-navy"
    >
      <div class="flex items-center justify-between mt-10 mx-10">
        <h1 class="text-xl"><span class="text-gold">JUST</span> KOREA</h1>
        <button on:click={toggleMobileMenu}>
          <img src="close.svg" alt="" />
        </button>
      </div>
      <ul class="mt-20 mx-10 flex flex-col gap-2">
        {#each mobileMenuList as li}
          <a class="block py-2" href={li.URL}>
            <li class="flex text-white text-lg font-light">
              <img src="right-arrow.svg" alt="" />
              {li.name}
            </li>
          </a>
        {/each}
      </ul>
    </div>
  {/if}
</main>

<style>
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css");

  main {
    font-family: "Pretendard";
  }
  nav ul a li {
    position: relative;
    transition: all 0.4s;
  }

  nav ul a li:hover::before {
    content: "";
    bottom: -30px;
    left: 5px;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #2553a0;
  }

  nav ul a li::before {
    transition: all 0.2s;
    content: "";
    bottom: -35px;
    left: 5px;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
  }
</style>
