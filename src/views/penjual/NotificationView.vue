<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9; padding-bottom: 55px">
      <div class="container">
        <h4 style="padding-bottom: 22px">Pemberitahuan Status Produk</h4>
        <div v-for="product in products" :key="product._id">
          <div v-if="product.isVerification == 1">
            <CNotifSuccess :product="product" />
            <br />
          </div>
          <div v-if="product.isVerification == 0">
            <CNotifFail :product="product" />
            <br />
          </div>
          <div v-if="product.isVerification == 2">
            <CNotifWaiting :product="product" />
            <br />
          </div>
        </div>
        <b-modal id="bv-modal-example" hide-footer>
          <div class="d-block text-center mt-2 mb-4">
            <img src="@/assets/img/popup-save.png" alt="foto-produk" />
            <h6></h6>
            <br />
            <h4>QRCode berhasil di download</h4>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CNotifSuccess from "@/components/penjual/NotifSuccess.vue";
import CNotifFail from "@/components/penjual/NotifFail.vue";
import CNotifWaiting from "@/components/penjual/NotifWaiting.vue";
import axios from "axios";

export default {
  name: "NotificationView",
  components: {
    CNavbarPenjual,
    CNotifSuccess,
    CNotifFail,
    CNotifWaiting,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LoginView" });
    }

    let userStore = localStorage.getItem("hasCreatedStore");
    if (userStore == "false") {
      this.$router.push({ name: "InputTokoView" });
    }

    axios
      .get(
        "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
          this.$route.params.id +
          "/products"
      )
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
