<template>
  <div class="row" style="margin-top: 60px">
    <div class="col-md-12" style="margin-bottom: 20px">
      <h5 class="informasiproduk">Video Pembuatan Produk</h5>
      <p class="mb-video" style="font-weight: 500; color: #3c4249">
        Pihak "{{ store.name }}" telah membuat dokumentasi berbentuk video pada
        produk yang telah anda beli. Anda bisa melihat proses pembuatan produk,
        kelebihan dari produk, dan cerita dibalik produk yang telah
        anda beli. Berikut video yang bisa anda putar di bawah ini.
      </p>
      <div class="embed-responsive embed-responsive-21by9">
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
  props: ["store", "product"],
};
</script>

<style></style>
