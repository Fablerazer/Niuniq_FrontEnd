<template>
  <div
    class="card"
    style="
      width: 100%;
      height: 75%;
      padding: 32px;
      box-shadow: 0px 4px 16px rgb(51 58 81 / 8%);
      border-radius: 16px;
    "
  >
    <div class="card-body" style="padding: 0">
      <div class="row">
        <div class="col-md-7">
          <h2
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 32px;
              line-height: 40px;
            "
          >
            {{ product.name }}
          </h2>
        </div>
        <div class="col-md-5" style="text-align: right">
          <button
            type="button"
            class="btn btn-warning"
            style="
              border-radius: 100px;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 28px;
              color: white;
            "
          >
            Menunggu verifikasi produk
          </button>
        </div>
      </div>
      <hr style="margin-top: 2px" />
      <div class="row">
        <div class="col-md-2">
          <img
            :src="path + '/documents/images/products/' + product.photos[0]"
            alt="foto-produk"
            class="img-thumbnail"
            style="gap: 5.19px; width: 150px; height: 150px"
          />
        </div>
        <div class="col-md-10" style="align-self: center">
          <h5
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 30px;
            "
          >
            Deskripsi produk
          </h5>
          <p
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 24px;
            "
          >
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CNotifWaiting",
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
