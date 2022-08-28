<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="400000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/img/home-1.png"
            alt="image slot"
          />
        </template>
        <CQrcodecard />
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/img/home-2.png"
            alt="image slot"
          />
        </template>
        <CQrcodecard />
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/img/home-3.png"
            alt="image slot"
          />
        </template>
        <CQrcodecard />
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/img/home-4.png"
            alt="image slot"
          />
        </template>
        <CQrcodecard />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import CQrcodecard from "@/components/pembeli/repeatedcomponent/Qrcodecard.vue";

import axios from "axios";
export default {
  name: "CQrcodeid",
  components: {
    CQrcodecard,
  },
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
