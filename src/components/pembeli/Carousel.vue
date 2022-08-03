<template>
  <div class="row mt-4">
    <div class="col-md-6">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        label-next=""
        label-prev=""
        background="#ababab"
        img-width="608"
        img-height="525"
        style="text-shadow: 1px 1px 2px #333; border-radius: 9px"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide style="border-radius: 9px">
          <template #img>
            <img
              class="w-100"
              width="608"
              height="525"
              style="border-radius: 9px"
              src="@/assets/img/picture1.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <b-carousel-slide style="border-radius: 9px">
          <template #img>
            <img
              class="w-100"
              width="608"
              height="525"
              style="border-radius: 9px"
              src="@/assets/img/produk-2.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <b-carousel-slide style="border-radius: 9px">
          <template #img>
            <img
              class="w-100"
              width="608"
              height="525"
              style="border-radius: 9px"
              src="@/assets/img/produk-3.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <b-carousel-slide style="border-radius: 9px">
          <template #img>
            <img
              class="w-100"
              width="608"
              height="525"
              style="border-radius: 9px"
              src="@/assets/img/produk-1.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Template -->
        <!-- <b-carousel-slide>
          <template #img>
            <img
              class="h-100 w-100"
              width="1024"
              height="480"
              src="@/assets/img/produk-1.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide> -->
      </b-carousel>
    </div>
    <div class="col-md-6" style="align-self: center">
      <h4
        class="informasiproduk"
        v-for="product in products"
        :key="product._id"
      >
        {{ product.name }}
      </h4>
      <hr />
      <h5 class="informasiproduk">Deskripsi Produk</h5>
      <p class="informasiproduk" v-for="product in products" :key="product._id">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CCarousel",
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
};
</script>

<style></style>
