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
          style="border-radius: 20px; width: 32rem; height: 18rem"
        >
          <div
            class="card-body"
            style="
              text-align: start;
              margin-top: 20px;
              margin-left: 20px;
              margin-right: 20px;
              margin-bottom: 20px;
            "
          >
            <img class="img-table mr-3" src="@/assets/img/icon.png" />
            <h5 class="card-title mt-3">Cara Menyimpan Produk</h5>
            <p>
              {{ product.productStorage }}
            </p>
          </div>
        </div>
        <div
          class="card"
          style="border-radius: 20px; width: 32rem; height: 18rem"
        >
          <div
            class="card-body"
            style="
              text-align: start;
              margin-top: 20px;
              margin-left: 20px;
              margin-right: 20px;
              margin-bottom: 20px;
            "
          >
            <img class="img-table mr-3" src="@/assets/img/icon.png" />
            <h5 class="card-title mt-3">Bahan Baku Produk</h5>
            <p>
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
