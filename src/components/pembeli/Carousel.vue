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
              :src=" path + '/documents/images/products/' + product.photos[0]"
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
              :src=" path + '/documents/images/products/' + product.photos[1]"
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
              :src=" path + '/documents/images/products/' + product.photos[2]"
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
              :src=" path + '/documents/images/products/' + product.photos[3]"
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
              :src=" path + '/documents/images/products/' + product.photos[4]"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="col-md-6" style="align-self: center">
      <h4
      class="informasiproduk"
      >
        {{ product.name }}
      </h4>
      <hr />
      <h5 class="informasiproduk">Deskripsi Produk {{ $route.params.id }}</h5>
      <p>
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "CCarousel",
  props: ["product"],
  data() {
  return {
      path: 'https://niuniq.herokuapp.com',
    };
  },
};
</script>

<style></style>
