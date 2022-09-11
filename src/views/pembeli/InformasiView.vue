<template>
  <div>
    <CNavbar />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img
            src="@/assets/img/informasi-verifikasi.svg"
            class="d-block mx-auto py-3 img-fluid"
            alt=""
          />
        </div>
        <div class="col-lg-6">
          <h5
            class="informasiproduk"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              padding-bottom: 4px;
            "
          >
            Informasi
          </h5>
          <h2 class="font-weight-bold" style="color: #2a2e33">
            Verifikasi Produk
          </h2>
          <p style="padding-top: 13px">
            Verifikasi produk memiliki fungsi untuk membuktikan kepada pembeli
            bahwa produk yang dibeli merupakan produk asli dengan mendapatkan id
            atau QR Code yang unik. <br />
            <br />Berikut merupakan informasi mengenai verifikasi produk berupa
            penjelasan bagaimana produk tersebut berhasil diverifikasi dan
            mengapa produk tersebut gagal diverifikasi.
          </p>
        </div>
      </div>
    </div>
    <CFnQ />
    <div class="container">
      <CFooter />
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/bar/Navbar.vue";
import CFnQ from "@/components/pembeli/FnQ.vue";
import CFooter from "@/components/pembeli/Footer.vue";

export default {
  name: "InformasiView",
  components: {
    CNavbar,
    CFooter,
    CFnQ,
  },
};
</script>

<style></style>
