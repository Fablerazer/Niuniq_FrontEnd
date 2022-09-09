<template>
  <div class="row" style="margin-top: 60px; margin-bottom: 80px">
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
              :src="path + '/documents/images/products/' + product.photos[0]"
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
              :src="path + '/documents/images/products/' + product.photos[1]"
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
              :src="path + '/documents/images/products/' + product.photos[2]"
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
              :src="path + '/documents/images/products/' + product.photos[3]"
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
              :src="path + '/documents/images/products/' + product.photos[4]"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="col-md-6" style="align-self: auto">
      <h2 class="informasiproduk" style="color: #2a2e33">
        {{ product.name }}
      </h2>
      <p
        style="
          font-weight: 600;
          line-height: 32px;
          color: #2a2e33;
          margin-bottom: 8px;
          font-size: 20px;
        "
      >
        ID Produk: {{ this.$route.params.id }}
      </p>
      <hr style="margin-top: 0; border-top: 2px solid rgba(0, 0, 0, 0.13)" />
      <h5 class="informasiproduk" style="font-weight: 600">Deskripsi Produk</h5>
      <div style="overflow: auto; height: 410px">
        <p style="text-align: justify">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCarousel",
  props: ["product"],
  data() {
    return {
      path: "https://niuniq.herokuapp.com",
    };
  },
};
</script>

<style></style>
