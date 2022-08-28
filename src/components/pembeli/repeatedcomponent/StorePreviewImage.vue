<template>
  <div class="row mt-2">
    <div
      v-for="product in filteredProducts"
      :key="product._id"
      class="col-md-4"
    >
      <router-link
        :to="{ name: 'DetailView', params: { id: product.productId } }"
      >
        <img
          :src="path + '/documents/images/products/' + product.photos[0]"
          class="img-fluid"
          :alt="'picture'"
          style="width: 100%; max-height: 418px; max-width: 418px; border-radius: 8px;"
        />
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
      path: "https://niuniq.herokuapp.com",
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
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filteredProducts: function () {
      return this.products.slice(0, 3);
    },
  },
};
</script>

<style></style>
