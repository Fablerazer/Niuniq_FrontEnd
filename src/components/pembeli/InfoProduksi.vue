<template>
  <div class="container-fluid" style="padding-left: 0; padding-right: 0">
        <h5
          class="informasiproduk"
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
          "
        >
          Informasi Toko
        </h5>
        <p class="informasiproduk">
          Informasi toko merupakan keterangan dari sebuah toko yang membuat produk tersebut. Berikut merupakan toko online yang kami punya, silahkan kunjungi toko online kami.
        </p>
        <div class="mb-3">
          <a :href="paths + store.linkShopee" target="_blank">
            <button
              type="button"
              class="btn btn-info btn-sm"
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
              "
            >
              Kunjungi Toko di Shopee
            </button>
          </a>
          <a :href="paths + store.linkTokopedia" target="_blank">
            <button
              type="button"
              class="btn btn-info ml-3 btn-sm"
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
              "
            >
              Kunjungi Toko di Tokopedia
            </button>
          </a>
          <a :href="paths + store.linkBlibli" target="_blank">
            <button
              type="button"
              class="btn btn-info ml-3 btn-sm"
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
              "
            >
              Kunjungi Toko di Blibli
            </button>
          </a>
        </div>
        <div class="mb-4">
          <img
            :src="path + '/documents/images/stores/' + store.photo"
            class="img-detail"
            alt="Responsive image"
            style="border-radius: 8px"
          />
          <!-- :src="@/assets/img/infoproduk-pict.png" -->
        </div>
      <hr/>
        <!-- <h5
          class="informasiproduk"
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
          "
        >
          Informasi Detail Produk
        </h5>
        <p class="informasiproduk">
          Informasi detail produk merupakan keterangan dari produk tersebut. berikut merupakan detail informasi produk.
        </p> -->
        <!-- <table class="table table-striped" style="margin-bottom: 0">
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
              </td>
              <td>{{ product.yearProduction }}</td>
              <td>{{ store.address }}</td>
            </tr>
          </tbody>
        </table> -->
    <h5
          class="informasiproduk"
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
          "
        >
          Informasi Detail Produk
        </h5>
        <p class="informasiproduk">
          Informasi detail produk merupakan keterangan dari produk tersebut. berikut merupakan detail informasi produk.
        </p>
        <table class="table table-striped" style="margin-bottom: 0">
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
              <td>{{ product.yearProduction }}</td>
              <td>{{ store.address }}</td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: "CInfoproduksi",
  props: ["store", "product"],
  data() {
    return {
      paths: "https://",
      path: "https://niuniq.herokuapp.com",
    };
  },
  mounted() {
    console.log(this.store);
  },
};
</script>

<style></style>
