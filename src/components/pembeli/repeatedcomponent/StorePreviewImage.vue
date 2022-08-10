<template>
  <div class="row mt-4">
        <div v-for="product in filteredProducts" :key="product._id" class="col-md-4">
          <router-link :to="{ name:'DetailView', params: { id: product.productId }}">
            <!-- <h3>{{ product.photos[0] }}</h3> -->
            <img :src="product.photos[0]" class="rounded img-fluid" :alt="'picture'" />
          </router-link>
        </div>
      </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CStorepreviewimage",
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
  computed: {
    filteredProducts: function () {
      return this.products.slice(0, 3)
    }
  }
}
</script>

<style>

</style>