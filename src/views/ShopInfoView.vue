<template>
  <div
    id="shop-info"
    class="menu-item-list shop-info card p-4 border-0 shadow"
    style="border-radius: 8px"
  >
    <span class="text-success fw-bold d-flex align-items-center fs-2"
      >Informasi Toko</span
    >
    <hr />
    <img src="@/assets/img/shop-info.png" class="card-img-bottom mt-3 mb-3" />
    <div class="d-flex w-100 mb-3 align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img
          src="@/assets/img/dummy-logo.svg"
          alt=""
          class="d-inline-block align-text-top w-25 me-3"
        />
        <span class="fs-1 fw-bold">{{ store.name }}</span> 
      </div>
      <a href="/inputtokoview">
      <button class="border-0 bg-white">
        <img
          src="@/assets/img/ic-edit.svg"
          alt=""
          class="d-inline-block align-text-top"
        />
      </button>
      </a>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Alamat Toko</span>
      <span class="d-flex">{{ store.address }}</span>

    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Tahun Tercipta</span>
      <span class="d-flex">{{ store.yearEstabilished }}</span>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Link Shoope</span>
      <span class="d-flex">{{ store.linkShopee }}</span>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Link Tokopedia</span>
      <span class="d-flex">{{ store.linkTokopedia }}</span>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Link Tokopedia</span>
      <span class="d-flex">{{ store.linkBlibli }}</span>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "ShopInfoView",
  props: ["store"],
  // data() {
  //   return {
  //     stores: {},
  //   };
  // },
  // methods: {
  //   setStores(data) {
  //     this.stores = data;
  //   },
  // },
  // mounted() {
  //   axios
  //     .get("https://niuniq.herokuapp.com/api/web/niuniq/stores/"+this.$route.params.id)
  //     .then((response) => {
  //       this.setStores(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  // data() {
  //   return {
  //     stores: [],
  //   };
  // },
  // created() {
  //   this.getStores();
  // },
  // methods: {
  //   getStores() {
  //     var config = {
  //       method: "get",
  //       url: "https://niuniq.herokuapp.com/api/web/niuniq/stores/"+this.$route.params.id,
  //       headers: {
  //         Cookie: `token=${localStorage.getItem("token")}`,
  //       },
  //     };
  //     axios(config)
  //       .then((response) => {
  //         this.stores = response.data.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script>