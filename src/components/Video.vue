<template>
  <div class="row" style="margin-top: 6rem">
    <div class="col-md-12">
      <h5 class="informasiproduk">Video Pembuatan Produk</h5>
      <p class="mb-video">
        Pada video ini anda bisa melihat proses pembuatan produk.
      </p>
      <!-- <div class="embed-responsive embed-responsive-21by9 mb-20">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></iframe>
      </div> -->
      <Artplayer @get-instance="getInstance" :option="option" :style="style" />
    </div>
  </div>
</template>

<script>
import Artplayer from "artplayer/examples/vue/Artplayer";

export default {
  name: "CVideo",
  data() {
    return {
      option: {
        url: "https://artplayer.org/assets/sample/video.mp4",
      },
      style: {
        width: "100%",
        height: "600px",
        margin: "60px auto 0",
      },
    };
  },
  components: {
    Artplayer,
  },
  methods: {
    getInstance(art) {
      console.log(art);
    },
  },
};
</script>

<style></style>
