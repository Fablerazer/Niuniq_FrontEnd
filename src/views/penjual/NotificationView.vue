<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9">
      <div class="container">
        <h4>Pemberitahuan Status Produk</h4>
        <div v-for="product in products" :key="product._id">
          <CNotifSuccess :product="product" />
          <br />
          <CNotifFail :product="product" />
        </div>
        <b-modal id="bv-modal-example" hide-footer>
          <div class="d-block text-center mt-2 mb-4">
            <img
              src="@/assets/img/popup-save.png"
              alt="foto-produk"
            />
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
import axios from "axios";

export default {
  name: "NotificationView",
  components: {
    CNavbarPenjual,
    CNotifSuccess,
    CNotifFail,
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
    axios
      .get("https://niuniq.herokuapp.com/api/web/niuniq/products")
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
