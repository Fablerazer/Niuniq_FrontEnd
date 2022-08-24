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
        <div class="container" style="width: 80%; height: 70vh">
          <div style="align-self: center">
            <h1 style="text-align: center">
              Lihat detail produk dengan memasukkan ID QRCode
            </h1>
            <p style="text-align: center">
              Masukan ID QRCode untuk mendapatkan detail produk
            </p>
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan ID produk"
                        v-model="search"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <router-link :to="'/detailview/' + this.search">
                      <button type="submit" class="btn btn-info">Cari</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div class="container" style="width: 80%; height: 70vh">
          <div style="align-self: center">
            <h1 style="text-align: center">
              Lihat detail produk dengan memasukkan ID QRCode
            </h1>
            <p style="text-align: center">
              Masukan ID QRCode untuk mendapatkan detail produk
            </p>
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan ID produk"
                        v-model="search"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <router-link :to="'/detailview/' + this.search">
                      <button type="submit" class="btn btn-info">Cari</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div class="container" style="width: 80%; height: 70vh">
          <div style="align-self: center">
            <h1 style="text-align: center">
              Lihat detail produk dengan memasukkan ID QRCode
            </h1>
            <p style="text-align: center">
              Masukan ID QRCode untuk mendapatkan detail produk
            </p>
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan ID produk"
                        v-model="search"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <router-link :to="'/detailview/' + this.search">
                      <button type="submit" class="btn btn-info">Cari</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div class="container" style="width: 80%; height: 70vh">
          <div style="align-self: center">
            <h1 style="text-align: center">
              Lihat detail produk dengan memasukkan ID QRCode
            </h1>
            <p style="text-align: center">
              Masukan ID QRCode untuk mendapatkan detail produk
            </p>
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan ID produk"
                        v-model="search"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <router-link :to="'/detailview/' + this.search">
                      <button type="submit" class="btn btn-info">Cari</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CQrcodeid",
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
