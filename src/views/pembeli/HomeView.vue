<template>
  <div>
    <CNavbar />
    <Qrcodeid />
    <div class="container" style="width: 100%; max-width: 1080px">
      <!-- <CStorepreview :product="products" /> -->
      <h2 class="font-weight-bold text-primary text-center pt-5">
        Kenapa harus <span class="text-primary-blue">HelpMeong</span> ?
      </h2>
      <div class="row align-items-center py-5">
        <div class="col-lg-6">
          <img
            src="https://helpmeong.com/img/shapes/why.svg"
            class="d-block mx-auto py-5 img-fluid"
            alt=""
          />
        </div>
        <div class="col-lg-6">
          <h2 class="font-weight-bold text-primary">
            Adopsi kucing sekarang, dan selamatkan mereka!
          </h2>
          <p>
            Anda dapat menolong kucing dengan mengadopsi setidaknya satu kucing
            jalanan pada salah satu Shelter.
          </p>
          <a
            href="/kucing"
            type="button"
            class="btn btn-primary-blue rounded-pill shadow font-weight-bold text-white px-5 py-3"
            >Adopsi Sekarang</a
          >
        </div>
      </div>
      <footer id="footer" class="bg-gray-secondary">
        <div class="container">
            <div class="footer-widget py-5 d-flex flex-wrap align-items-center justify-content-between">
                <div class="col-lg-5">
                    <a href="http://www.niuniq.id" class="brand-image brand-link bg-transparent border-bottom">
                        <img class="d-flex mr-auto" style="padding-bottom: 5px" src="@/assets/img/logo-niuniq2.png">
                    </a>
                    <p>HelpMeong adalah sebuah platform untuk menampung kucing jalanan yang akan membantu kucing-kucing
                        jalanan untuk mendapatkan adopter yang akan terus merawatnya, tak hanya itu saja... <span><router-link to="/tentangview" style="color: #4e944f" class="text-primary-blue text-decoration-none">Read More</router-link></span></p>
                </div>
                <div class="col-lg-3 py-3">
                    <div class="d-flex gap-3">
                        <div class="d-flex align-items-center">
                            <img src="https://helpmeong.com/img/icons/phone-calling.svg" width="60" class="" alt="">
                        </div>
                        <div class="text-primary">
                            <p class="mb-0" style="color: #4e944f" href="#">Punya Pertanyaan?</p>
                            <a href="#" style="color: #4e944f" class="fs-4 font-weight-semibold">087722162211</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 py-3">
                    <div class="d-flex gap-3">
                        <div class="d-flex align-items-center">
                            <img src="https://helpmeong.com/img/icons/mail.svg" width="60" class="" alt="">
                        </div>
                        <div class="text-primary">
                            <p class="mb-0" style="color: #4e944f" href="#">Ingin bergabung?</p>
                            <a href="#" style="color: #4e944f" class="fs-4 font-weight-semibold">Join Sebagai
                                Penjual</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bar py-3 d-flex align-items-center justify-content-between flex-wrap">
                <div class="col-md-8">
                    <div class="navbar navbar-expand-md flex-wrap px-0">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link pl-0" href="#">Tentang</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Kontak Kami</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Kebijakan Privasi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Syarat &amp; Ketentuan</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="text-md-right m-0">© 2022, Niuniq</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/bar/Navbar.vue";
import Qrcodeid from "@/components/pembeli/Qrcodeid.vue";
// import CStorepreview from "@/components/pembeli/StorePreview.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    Qrcodeid,
    // CStorepreview,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const response = await axios.get(
      "https://niuniq.herokuapp.com/api/web/niuniq/auth/me"
    );

    console.log(response);
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://niuniq.herokuapp.com/api/web/niuniq/products")
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(response);
        if (response.status == 404) {
          alert("Produk tidak ditemukan");
        }
      })
      .catch((error) => console.log(error));

    // let user = localStorage.getItem("user-info");
    // if (user) {
    //   this.$router.push({
    //     // name: "ProfileView",
    //     path: "/profileview/" + response.data.data.store[0]._id,
    //   });
    // }
  },
};
</script>
