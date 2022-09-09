<template>
  <div>
    <div class="row align-items-center">
      <div class="col-lg-6">
        <img
          src="@/assets/img/gambar-filler2.png"
          class="d-block mx-auto py-5 img-fluid"
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
          Tentang Kami
        </h5>
        <h2 class="font-weight-bold" style="color: #2a2e33">
          Keaslian produk dapat <br />dilihat melalui QR Code
        </h2>
        <p>
          Niuniq merupakan platform untuk memudahkan UMKM Handicraft membagikan
          informasi mengenai produk yang dibuat serta menunjukkan keaslian
          produk yang dibuat dengan memberikan label QRCode untuk
          memudahkan...<span
            ><router-link
              to="/tentangview"
              style="color: #4e944f"
              class="text-primary-blue text-decoration-none"
              > Lihat lebih lanjut</router-link
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CHomeFillerTentang",
};
</script>

<style></style>
