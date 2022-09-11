<template>
  <div class="row mt-4">
    <div
      style="
        background: #cadfca;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        padding-bottom: 52px;
      "
    >
      <div
        class="container"
        style="display: flex; justify-content: space-between"
      >
        <div
          class="card"
          style="border-radius: 20px; width: 30rem; height: 17rem"
        >
          <div
            class="card-body"
            style="
              overflow: auto;
              text-align: start;
              margin-top: 20px;
              margin-left: 20px;
              margin-right: 20px;
              margin-bottom: 20px;
            "
          >
            <img class="img-table mr-3" src="@/assets/img/icon1.svg" />
            <h5 class="card-title mt-3">Cara Menyimpan Produk</h5>
            <p style="font-weight: 500; color: #3c4249">
              {{ product.productStorage }}
            </p>
          </div>
        </div>
        <div
          class="card"
          style="border-radius: 20px; width: 30rem; height: 17rem"
        >
          <div
            class="card-body"
            style="
              overflow: auto;
              text-align: start;
              margin-top: 20px;
              margin-left: 20px;
              margin-right: 20px;
              margin-bottom: 20px;
            "
          >
            <img class="img-table mr-3" src="@/assets/img/icon2.svg" />
            <h5 class="card-title mt-3">Bahan Baku Produk</h5>
            <p style="font-weight: 500; color: #3c4249">
              {{ product.rawMaterials }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCard",
  props: ["product"],
};
</script>

<style></style>
