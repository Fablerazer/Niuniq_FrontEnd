<template>
  <div>
    <div class="container" style="width: 80%; height: 80vh">
      <div style="align-self: center">
        <h1
          style="
            text-align: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 56px;
            padding-bottom: 24px;
            margin-bottom: 0px;
          "
        >
          Lihat detail produk dengan memasukkan ID QRCode
        </h1>
        <p
          style="
            text-align: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 30px;
            padding-bottom: 24px;
            margin-bottom: 0px;
          "
        >
          Masukan ID QRCode untuk mendapatkan detail produk
        </p>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-9">
                <div class="form-group" style="margin-bottom: 0">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Masukkan ID produk"
                    v-model="search"
                    style="padding: 16px; height: 100%"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <router-link :to="'/detailview/' + this.search">
                  <button
                    type="submit"
                    class="btn btn-info"
                    style="
                      padding: 12px 16px;
                      gap: 10px;
                      width: 100%;
                      height: 100%;
                    "
                  >
                    Cari
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CQrcodecard",
  data() {
    return {
      slide: 0,
      sliding: null,
      products: [],
      search: "",
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      var config = {
        method: "get",
        url: "https://niuniq.herokuapp.com/api/web/niuniq/products",
        // this.$route.params.id
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          this.products = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
