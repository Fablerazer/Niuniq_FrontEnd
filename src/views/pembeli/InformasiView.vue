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
          <p style="padding-top: 13px; font-weight: 600; color: #3c4249">
            Verifikasi produk memiliki fungsi untuk membuktikan kepada pembeli
            bahwa produk yang dibeli merupakan produk asli dengan mendapatkan id
            atau QR Code yang unik. <br />
            <br />Berikut merupakan informasi mengenai verifikasi produk berupa
            penjelasan bagaimana produk tersebut berhasil diverifikasi dan
            mengapa produk tersebut gagal diverifikasi.
          </p>
        </div>
      </div>
      <div class="row" style="padding-bottom: 40px">
        <div class="col">
          <h2
            class="font-weight-bold"
            style="
              padding-bottom: 14px;
              padding-top: 12px;
              color: #2a2e33;
              text-align: left;
            "
          >
            Produk Berhasil Verifikasi
          </h2>
          <h4
            style="
              text-align: left;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 30px;
              align-self: center;
              padding-bottom: 14px;
              color: #3c4249;
            "
          >
            Berikut merupakan syarat agar produk anda berhasil diverifikasi:
          </h4>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/check_circle.svg" />
            </div>
            <div class="col-md-11" style="font-weight: 500; color: #3c4249">
              Mengisi informasi produk dengan lengkap dan jelas.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/check_circle.svg" />
            </div>
            <div class="col-md-11" style="font-weight: 500; color: #3c4249">
              Tidak mengunggah foto yang sama.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/check_circle.svg" />
            </div>
            <div class="col-md-11" style="font-weight: 500; color: #3c4249">
              Menggunakan foto yang jelas dan tidak buram.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/check_circle.svg" />
            </div>
            <div
              class="col-md-11 mb-2"
              style="font-weight: 500; color: #3c4249"
            >
              Mengunggah 5 foto yang terdiri dari foto produk bagian depan,
              bagian samping kiri, bagian samping kanan, bagian belakang dan
              foto full produk.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/check_circle.svg" />
            </div>
            <div
              class="col-md-11 mb-2"
              style="font-weight: 500; color: #3c4249"
            >
              Mengunggah foto dengan lebar 608 dan tinggi 525 agar foto tidak
              pipih saat ditampilkan dihalaman informasi.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/check_circle.svg" />
            </div>
            <div
              class="col-md-11 mb-2"
              style="font-weight: 500; color: #3c4249"
            >
              Video harus jelas berisi tahapan dan rekaman video tidak buram.
            </div>
          </div>
        </div>
        <div class="col" style="padding-left: 80px">
          <h2
            class="font-weight-bold"
            style="
              padding-bottom: 14px;
              padding-top: 12px;
              color: #2a2e33;
              text-align: left;
            "
          >
            Produk Gagal Verifikasi
          </h2>
          <h4
            style="
              text-align: left;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 30px;
              align-self: center;
              padding-bottom: 14px;
              color: #3c4249;
            "
          >
            Berikut merupakan alasan mengapa produk tersebut gagal verifikasi:
          </h4>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/close.svg" />
            </div>
            <div class="col-md-11" style="font-weight: 500; color: #3c4249">
              Informasi produk tidak jelas atau tidak lengkap.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/close.svg" />
            </div>
            <div class="col-md-11" style="font-weight: 500; color: #3c4249">
              Terdapat foto produk yang sama dan buram.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/close.svg" />
            </div>
            <div class="col-md-11" style="font-weight: 500; color: #3c4249">
              Tidak mengunggah foto dari berbagai sisi.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/close.svg" />
            </div>
            <div
              class="col-md-11 mb-2"
              style="font-weight: 500; color: #3c4249"
            >
              Tidak mengunggah foto dengan panjang dan lebar yang sudah
              ditentukan.
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 mb-3">
              <img class="img-table" src="@/assets/img/close.svg" />
            </div>
            <div
              class="col-md-11 mb-2"
              style="font-weight: 500; color: #3c4249"
            >
              Video yang diunggah tidak berisi tahapan pembuatan dan rekaman
              video buram.
            </div>
          </div>
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
