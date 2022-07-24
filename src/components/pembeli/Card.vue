<template>
  <div class="row mt-4">
    <div
      style="
        background: #cadfca;
        width: 100vw;
        height: 50%;
        position: absolute;
        left: 0;
      "
    ></div>
    <div class="col-md-6 mt-5">
      <div
        class="card"
        style="border-radius: 20px; width: 32rem; height: 18rem"
      >
        <div
          class="card-body"
          style="
            text-align: start;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
          "
        >
          <img class="img-table mr-3" src="@/assets/img/icon.png" />
          <h5 class="card-title mt-3">Cara Menyimpan Produk</h5>
          <!-- <p v-for="product in products" :key="product._id">
              {{ product.name }}
            </p> -->
          <ul>
            <li v-for="product in products" :key="product._id">
              {{ product.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-5" style="padding-right: 0; padding-left: 42px">
      <div
        class="card"
        style="border-radius: 20px; width: 32rem; height: 18rem"
      >
        <div
          class="card-body"
          style="
            text-align: start;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
          "
        >
          <img class="img-table mr-3" src="@/assets/img/icon.png" />
          <h5 class="card-title mt-3">Bahan Baku Produk</h5>
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
              </ul>
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
  name: "CCard",
  // props: ['product'],
  data() {
    return {
      products: [],
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
  // methods: {
  //   setProducts(data) {
  //     this.products = data;
  //   },
  // },
  // mounted() {
  //   axios
  //     .get("https://niuniq.herokuapp.com/api/web/niuniq/products")
  //     .then((response) => this.setProducts(response.data))
  //     .catch((error) => console.log(error));
  // },
};
</script>

<style></style>
