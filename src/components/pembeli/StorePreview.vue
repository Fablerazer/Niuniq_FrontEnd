<template>
<!-- test -->
  <b-card>
    <div class="row mt-4 px-3">
      <div class="col" style="padding-left: 0">
        <img
          src="@/assets/img/logo-rmhbmb.png"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
      <div class="col-md-11" style="align-self: center; padding-left: 0">
        <h4 class="card-title"><Strong>Produk Rumah Bamboe</Strong></h4>
        <p class="card-text">
          Berikut merupakan beberapa produk terlaris yang dijual oleh Rumah
          Bamboe
        </p>
      </div>
      <!-- https://stackoverflow.com/questions/66891174/passing-props-through-a-router-link -->
      <!-- <router-link
  class="..."
  :to="{
     path: '/post/edit',
     params: post, // <-- changed 'props' to 'params'
     query: { post: post.id },
   }"
   >Edit
</router-link>
or -->
<!-- <router-link
  class="..."
  :to="{
     name: 'DetailView',
     params: { id: post.id }
   }"
   >Edit
</router-link> --> 
      <CStorepreviewimage />
    </div>
  </b-card>
</template>

<script>
import CStorepreviewimage from "@/components/pembeli/repeatedcomponent/StorePreviewImage.vue";
// import axios from "axios";

export default {
  name: "CStorepreview",
  props: ["product"],
  components: {
    CStorepreviewimage,
  },
  // data() {
  //   return {
  //     products: [],
  //   };
  // },
  // created() {
  //   this.getProducts();
  // },
  // methods: {
  //   getProducts() {
  //     var config = {
  //       method: "get",
  //       url: "https://niuniq.herokuapp.com/api/web/niuniq/products",
  //       headers: {
  //         Cookie: `token=${localStorage.getItem("token")}`,
  //       },
  //     };
  //     axios(config)
  //       .then((response) => {
  //         this.products = response.data.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script>

<style></style>
