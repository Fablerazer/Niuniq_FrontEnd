<template>
  <div class="container-fluid mt-4" style="padding-left: 0; padding-right: 0">
    <div class="card">
      <div class="card-body">
        <h5 class="informasiproduk">Informasi Produksi {{ $route.params.id}}</h5>
        <p class="informasiproduk">
          Informasi produksi merupakan keterangan dari sebuah produk untuk
          membuktikan bahwa produk tersebut asli.
        </p>
        <div class="mb-3">
          <button type="button" class="btn btn-info btn-sm">
            Kunjungi Shopee
          </button>
          <button type="button" class="btn btn-info ml-3 btn-sm">
            Kunjungi Tokopedia
          </button>
        </div>
        <div class="mb-4">
          <img
            src="@/assets/img/infoproduk-pict.png"
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
            <tr
              style="background: white"
              v-for="store in stores"
              :key="store._id"
            >
              <td>
                <img
                  class="img-table mr-2"
                  src="@/assets/img/logo-rmhbmb.png"
                />{{ store.name }}
              </td>
              <td>{{ store.yearProduction }}</td>
              <td>{{ store.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CInfoproduksi",
  data() {
    return {
      stores: [],
    };
  },
  created() {
    this.getStores();
  },
  methods: {
    getStores() {
      var config = {
        method: "get",
        url: "https://niuniq.herokuapp.com/api/web/niuniq/stores",
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          this.stores = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
