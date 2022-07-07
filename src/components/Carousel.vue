<template>
  <div class="row mt-4">
    <div class="col-md-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="@/assets/img/picture1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/img/picture2.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/img/picture3.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-md-6">
      <h4 class="informasiproduk">Nama Produk</h4>
      <hr />
      <h5 class="informasiproduk">Deskripsi Produk</h5>
      <p class="informasiproduk">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCarousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {},
};
</script>

<style></style>
