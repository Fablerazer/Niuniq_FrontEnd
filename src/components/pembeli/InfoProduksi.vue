<template>
  <div class="container-fluid mt-4" style="padding-left: 0; padding-right: 0">
    <div class="card">
      <div class="card-body">
        <h5 class="informasiproduk">Informasi Produksi</h5>
        <p class="informasiproduk">
          Informasi produksi merupakan keterangan dari sebuah produk untuk
          membuktikan bahwa produk tersebut asli.
        </p>
        <div class="mb-3">
          <a :href="paths + store.linkShopee" target="_blank">
            <button type="button" class="btn btn-info btn-sm">
              Kunjungi Shopee
            </button>
          </a>
          <a :href="paths + store.linkTokopedia" target="_blank">
            <button type="button" class="btn btn-info ml-3 btn-sm">
              Kunjungi Tokopedia
            </button>
          </a>
          <a :href="paths + store.linkBlibli" target="_blank">
            <button type="button" class="btn btn-info ml-3 btn-sm">
              Kunjungi Blibli
            </button>
          </a>
        </div>
        <div class="mb-4">
          <img
            :src="path + '/documents/images/stores/' + store.photo"
            class="img-detail"
            alt="Responsive image"
          />
          <!-- :src="@/assets/img/infoproduk-pict.png" -->
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
              <td>
                <img
                  class="img-table-2 mr-2"
                  :src="path + '/documents/images/logos/' + store.logo"
                />{{ store.name }}
                <!-- src="@/assets/img/logo-rmhbmb.png" -->
              </td>
              <td >{{ product.yearProduction }}</td>
              <td >{{ store.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CInfoproduksi",
  props: ["store", "product"],
  data() {
    return {
      paths: "https://",
      path: "https://niuniq.herokuapp.com"
    };
  },
  mounted() {
    console.log(this.store);
  },
};
</script>

<style></style>
