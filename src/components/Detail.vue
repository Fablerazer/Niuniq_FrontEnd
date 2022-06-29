<template>
  <div class="container-fluid mt-4">
    <div class="card">
      <div class="card-body">
        <h5 class="informasiproduk">Informasi Produksi</h5>
        <p class="informasiproduk">
          Informasi produksi merupakan keterangan dari sebuah produk untuk
          membuktikan bahwa produk tersebut asli.
        </p>
        <div class="mb-3">
          <button type="button" class="btn btn-success btn-sm">Kunjungi Shopee</button>
          <button type="button" class="btn btn-success ml-3 btn-sm">
            Kunjungi Tokopedia
          </button>
        </div>
        <div class="mb-4">
          <img
            src="@/assets/img/picture1.png"
            class="img-detail"
            alt="Responsive image"
          />
        </div>
        <table class="table table-striped">
          <thead style="background: #edf4ed">
            <tr>
              <th scope="col">Diproduksi Oleh</th>
              <th scope="col">Tahun Produksi</th>
              <th scope="col">Lokasi Produksi</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: white">
              <td><img class="img-table mr-3" src="@/assets/img/logo.png">Rumah Bamboe</td>
              <td>2018</td>
              <td>
                Desa, Gontor 1, Gontor, Kec.Mlarak, Kabupaten Ponorogo, Jawa
                Timur 63472
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CDetail",
};
</script>

<style></style>
