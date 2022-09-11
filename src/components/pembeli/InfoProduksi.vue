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
      Informasi "{{ store.name }}"
    </h5>
    <p class="informasiproduk">
      Menjelaskan tentang informasi atau keterangan dari toko yang membuat
      produk tersebut. Untuk melihat beberapa produk toko yang bisa anda beli
      secara online silahkan kunjungi toko online dari "{{ store.name }}".
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
    <hr />
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
      Informasi detail produk merupakan keterangan dari produk yang telah anda
      cari atau yang telah anda beli. berikut merupakan detail informasi dari
      produk "{{ product.name }}" yang bisa anda lihat di bawah ini.
    </p>
    <table class="table table-striped" style="margin-bottom: 0">
      <thead style="background: #edf4ed">
        <tr>
          <th
            scope="col"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 30px;
            "
          >
            Diproduksi Oleh
          </th>
          <th
            scope="col"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 30px;
            "
          >
            Tahun Produksi
          </th>
          <th
            scope="col"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 30px;
            "
          >
            Lokasi Produksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: white">
          <td style="font-size: 15px; font-weight: 500; color: #3c4249">
            <img
              class="img-table-2 mr-2"
              :src="path + '/documents/images/logos/' + store.logo"
            />{{ store.name }}
            <!-- src="@/assets/img/logo-rmhbmb.png" -->
          </td>
          <td
            style="
              padding-top: 22px;
              font-size: 15px;
              font-weight: 500;
              color: #3c4249;
            "
          >
            {{ product.yearProduction }}
          </td>
          <td
            style="
              padding-top: 22px;
              font-size: 15px;
              font-weight: 500;
              color: #3c4249;
            "
          >
            {{ store.address }}
          </td>
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
