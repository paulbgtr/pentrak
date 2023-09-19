<script lang="ts">
  import { book } from "../../store/book";

  let fileInput: HTMLInputElement;

  const updateImageUrl = (imageUrl: string) => {
    book.update((b) => {
      b.imageUrl = imageUrl;
      return b;
    });
  };

  const onFileSelected = (e: any) => {
    let image = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      e.target && updateImageUrl(e.target.result as string);
    };
  };
</script>

<section class="mt-3">
  <div class="mb-3">
    <h2 class="text-xl font-bold">Image</h2>
    <p>Add an image to your book.</p>
  </div>

  <div class="flex flex-col gap-2">
    <input
      type="file"
      class="w-full max-w-xs file-input file-input-bordered"
      on:change={(e) => onFileSelected(e)}
      bind:this={fileInput}
    />
  </div>
</section>
