<template>
  <b-card>
    <div class="row mt-4 px-3">
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 16px;

          width: 1121px;
          height: 96px;
          left: 111px;
          top: 1127px;
        "
      >
        <div>
          <img src="@/assets/img/logo-rmhbmb.png" alt="Responsive image" />
        </div>
        <div>
          <h4 class="card-title"><Strong>Produk Rumah Bamboe</Strong></h4>
          <p class="card-text">
            Berikut merupakan beberapa produk terbaru yang dijual oleh Rumah
            Bamboe
          </p>
        </div>
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
