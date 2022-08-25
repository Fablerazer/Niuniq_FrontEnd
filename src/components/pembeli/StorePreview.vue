<template>
  <b-card>
    <div class="row mt-4 px-3">
      <div class="col" style="padding-left: 0">
        <img
          src="@/assets/img/logo-rmhbmb.png"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
      <div class="col-md-11" style="align-self: center; padding-left: 0">
        <h4 class="card-title"><Strong>Produk Rumah Bamboe</Strong></h4>
        <p class="card-text">
          Berikut merupakan beberapa produk terbaru yang dijual oleh Rumah
          Bamboe
        </p>
      </div>
      <CStorepreviewimage />
    </div>
  </b-card>
</template>

<script>
import CStorepreviewimage from "@/components/pembeli/repeatedcomponent/StorePreviewImage.vue";

export default {
  name: "CStorepreview",
  props: ["product"],
  components: {
    CStorepreviewimage,
  },
};
</script>

<style></style>
