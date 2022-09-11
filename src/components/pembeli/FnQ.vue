<template>
  <div
    style="
      background: #edf4ed;
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      padding-bottom: 90px;
    "
  >
    <div class="container">
      <h5
        class="informasiproduk"
        style="
          padding-top: 14px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          padding-bottom: 4px;
          text-align: left;
        "
      >
        FAQ
      </h5>
      <h2
        class="font-weight-bold"
        style="padding-top: 12px; color: #2a2e33; text-align: left"
      >
        Frequently Asked Question
      </h2>
      <p
        style="
          font-weight: 500;
          color: #3c4249;
          padding-top: 8px;
          text-align: left;
          padding-bottom: 5px;
        "
      >
        Merupakan daftar kumpulan pertanyaan beserta jawaban yang sering
        ditanyakan oleh pengguna seputar produk yang ditawarkan. <br />
        Tujuan FAQ untuk membantu pengguna mendapatkan jawaban dalam proses yang
        singkat.
      </p>
      <div class="accordion" role="tablist" style="padding-top: 8px">
        <b-card no-body class="mb-1" style="border-radius: 10px">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            style="background-color: white"
          >
            <b-button
              block
              v-b-toggle.accordion-1
              variant="info"
              style="background-color: white; border-color: white"
              ><div class="row">
                <div
                  class="col-md-11"
                  style="
                    text-align: left;
                    color: black;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    line-height: 30px;
                    align-self: center;
                  "
                >
                  Bagaimana langkah-langkah dalam melakukan verifikasi produk?
                </div>
                <div
                  class="col-md-1"
                  style="text-align: right; color: #777b80; align-self: center"
                >
                  <b-icon-chevron-down />
                </div></div
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="float: left; font-weight: 500; color: #3c4249"
                >Langkah dalam melakukan verifikasi produk yaitu harus membuat
                akun Niuniq, kemudian melakukan input informasi toko. Setelah
                mengisi informasi toko maka pengguna dapa melakukan tambah
                produk yang ingin diverifikasi. Jika sudah menambah produk maka
                status verifikasi menjadi menunggu, jika berhasil verifikasi
                maka status akan berubah menjadi berhasil dan jika gagal
                verifikasi maka akan berganti menjadi gagal dan dapat notifikasi
                mengapa produk tersebut gagal untuk diverifikasi.</b-card-text
              >
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- Card No 2 -->
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1" style="border-radius: 10px">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            style="background-color: white"
          >
            <b-button
              block
              v-b-toggle.accordion-2
              variant="info"
              style="background-color: white; border-color: white"
              ><div class="row">
                <div
                  class="col-md-11"
                  style="
                    text-align: left;
                    color: black;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    line-height: 30px;
                    align-self: center;
                  "
                >
                  Apa arti dari status menunggu saat melakukan verifikasi
                  produk?
                </div>
                <div
                  class="col-md-1"
                  style="text-align: right; color: #777b80; align-self: center"
                >
                  <b-icon-chevron-down />
                </div></div
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-2"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="float: left; font-weight: 500; color: #3c4249"
                >Status menunggu saat verifikasi produk memiliki arti bahwa
                status tersebut masih dalam pemeriksaan admin.</b-card-text
              >
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- Card No 3 -->
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1" style="border-radius: 10px">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            style="background-color: white"
          >
            <b-button
              block
              v-b-toggle.accordion-3
              variant="info"
              style="background-color: white; border-color: white"
              ><div class="row">
                <div
                  class="col-md-11"
                  style="
                    text-align: left;
                    color: black;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    line-height: 30px;
                    align-self: center;
                  "
                >
                  Kapan dapat mengunduh QR Code produk?
                </div>
                <div
                  class="col-md-1"
                  style="text-align: right; color: #777b80; align-self: center"
                >
                  <b-icon-chevron-down />
                </div></div
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-3"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="float: left; font-weight: 500; color: #3c4249"
                >Kamu dapat mengunduh QR Code untuk produk saat produk tersebut
                sudah berhasil diverifikasi.
              </b-card-text>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- Card No 4 -->
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1" style="border-radius: 10px">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            style="background-color: white"
          >
            <b-button
              block
              v-b-toggle.accordion-4
              variant="info"
              style="background-color: white; border-color: white"
              ><div class="row">
                <div
                  class="col-md-11"
                  style="
                    text-align: left;
                    color: black;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    line-height: 30px;
                    align-self: center;
                  "
                >
                  Kapan dapat mengedit informasi produk?
                </div>
                <div
                  class="col-md-1"
                  style="text-align: right; color: #777b80; align-self: center"
                >
                  <b-icon-chevron-down />
                </div></div
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-4"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="float: left; font-weight: 500; color: #3c4249"
                >Kamu dapat mengedit informasi produk saat produk tersebut sudah
                berhasil diverifikasi</b-card-text
              >
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CFnQ",
};
</script>

<style></style>
