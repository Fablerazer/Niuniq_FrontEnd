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
            class="btn btn-success"
            style="border-radius: 100px"
          >
            Verifikasi produk berhasil
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
      <hr />
      <div>
        <b-button
          id="show-btn"
          variant="link"
          :href="path + '/documents/images/QRcodes/' + product.qrCode"
          target="_blank"
          style="color: #28a745"
          @click="$bvModal.show('bv-modal-example')"
          >Silahkan download hasil QRCode</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CNotifSuccess",
  props: ["product"],
  data() {
    return {
      path: "https://niuniq.herokuapp.com",
    };
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style></style>
