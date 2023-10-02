<script>
  import "./tailwind.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="app">
  <div class="min-h-screen">
    <Navbar />

    <main
      class="grid px-4 py-2 mx-auto sm:px-8 md:px-16 lg:px-32 xl:px-64 sm:py-4 md:py-6 lg:py-8 xl:py-10 lg:grid-cols-4 lg:divide-x"
    >
      <div class="col-span-3">
        <slot />
      </div>
      <section class="px-10">
        <ul class="hidden w-56 lg:menu bg-base-100 rounded-box">
          <h2 class="mb-3 text-xl font-bold">Popular Genres</h2>
          <li><a>Fiction</a></li>
          <li><a>Non-Fiction</a></li>
          <li><a>Science Fiction</a></li>
          <li><a>Fantasy</a></li>
          <li><a>Mystery</a></li>
        </ul>
      </section>
    </main>
  </div>

  <Footer />
</div>
