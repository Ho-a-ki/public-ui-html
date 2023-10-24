
<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Preview from "./lib/Preview.svelte";
  import Header from "./lib/Header.svelte";
</script>

<main>
  <Header></Header>
  <Preview />
</main>

<style>
  main {
    scroll-behavior: smooth;
    height: 5000px;
  }
</style>

