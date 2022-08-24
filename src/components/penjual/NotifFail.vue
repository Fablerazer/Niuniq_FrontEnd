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
            class="btn btn-danger"
            style="border-radius: 100px"
          >
            Verifikasi produk gagal
          </button>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <img
            :src="path + '/documents/images/products/' + product.photos[0]"
            alt="foto-produk"
            class="img-thumbnail"
          />
        </div>
        <div class="col">
          <h5>Deskripsi produk</h5>
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
      <br />
      <div>
        <h5 style="color: #dc3545">Alasan gagal verifikasi produk</h5>
        <p>
          {{ product.verificationMessage }}
        </p>
      </div>
      <div>
        <p>
          Silahkan mengisi ulang kembali dengan memperbaiki permasalahan yang
          sudah diberikan
        </p>
      </div>
      <a :href="'/inputprodukview/' + product.productId">
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
        >
          Mengisi kembali informasi produk
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CNotifFail",
  props: ["product"],
  data() {
    return {
      path: "https://niuniq.herokuapp.com",
    };
  },
};
</script>

<style></style>
