<template>
  <div class="card" style="width: 100%; height: 75%">
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <h2>{{ product.name }}</h2>
        </div>
        <div class="col-mr-6">
          <button
            type="button"
            class="btn btn-warning"
            style="border-radius: 100px"
          >
            Menunggu verifikasi produk
          </button>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <img
            src="@/assets/img/produk-1.png"
            alt="foto-produk"
            class="img-thumbnail"
          />
        </div>
        <div class="col">
          <h5>Deskripsi produk {{ product.productId }}</h5>
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "CNotifWaiting",
  props: ["product"],
  mounted (){
    console.log(this.product);
  }
};
</script>

<style></style>
