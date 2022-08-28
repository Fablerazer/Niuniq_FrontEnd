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
            class="btn btn-danger"
            style="
              border-radius: 100px;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 28px;
            "
          >
            Verifikasi produk gagal
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
      <br />
      <div>
        <h5
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: #dc3545;
          "
        >
          Alasan gagal verifikasi produk
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
          {{ product.verificationMessage }}
        </p>
      </div>
      <!-- <div>
        <p
          style="
            padding-top: 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
          "
        >
          Silahkan mengisi ulang kembali dengan memperbaiki permasalahan yang
          sudah diberikan
        </p>
      </div> -->
      <a :href="'/inputprodukview/' + product.productId">
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="
            background-color: #4e944f;
            border-radius: 8px;
            font-size: 16px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
          "
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
