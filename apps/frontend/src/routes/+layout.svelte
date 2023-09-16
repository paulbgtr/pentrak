<script>
  import "./tailwind.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="app">
  <div class="min-h-screen">
    <Navbar />

    <main
      class="px-4 py-2 mx-auto sm:px-8 md:px-16 lg:px-32 xl:px-64 sm:py-4 md:py-6 lg:py-8 xl:py-10"
    >
      <slot />
    </main>
  </div>

  <Footer />
</div>
