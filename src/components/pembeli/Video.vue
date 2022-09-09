<template>
  <div class="row" style="margin-top: 60px">
    <div class="col-md-12">
      <h5 class="informasiproduk">Video Pembuatan Produk</h5>
      <p class="mb-video">
        Pada video ini anda bisa melihat proses pembuatan produk.
      </p>
      <div
        class="embed-responsive embed-responsive-21by9"
      >
      <!-- style="margin-bottom: 120px" -->
        <iframe
          class="embed-responsive-item"
          :src="product.video"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVideo",
  props: ["product"],
};
</script>

<style></style>
