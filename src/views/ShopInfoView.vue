<template>
  <div
    id="shop-info"
    class="menu-item-list shop-info card p-4 border-0 shadow"
    style="border-radius: 8px"
  >
    <span
      class="text-success fw-bold d-flex align-items-center fs-2"
      style="
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #4e944f;
      "
      >Informasi Toko</span
    >
    <hr />
    <img
      :src="path + '/documents/images/stores/' + store.photo"
      class="card-img-bottom mt-3 mb-3"
    />
    <div class="d-flex w-100 mb-3 align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img
          :src="path + '/documents/images/logos/' + store.logo"
          alt=""
          class="img-table-2 mr-3"
          style="width: 60px; height: 60px"
        />
        <span
          class="fs-1 fw-bold"
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 40px;
          "
          >{{ store.name }}</span
        >
      </div>
      <router-link :to="'/inputtokoview/' + this.$route.params.id">
        <button class="border-0 bg-white">
          <img
            src="@/assets/img/ic-edit.svg"
            alt=""
            class="d-inline-block align-text-top"
          />
        </button>
      </router-link>
    </div>
    <div class="mb-3">
      <span
        class="text-success fw-bold d-flex"
        style="line-height: 24px; font-weight: 600"
        >Alamat Toko</span
      >
      <span class="d-flex">{{ store.address }}</span>
    </div>
    <div class="mb-3">
      <span
        class="text-success fw-bold d-flex"
        style="line-height: 24px; font-weight: 600"
        >Tahun Tercipta</span
      >
      <span class="d-flex">{{ store.yearEstabilished }}</span>
    </div>
    <div class="mb-3">
      <span
        class="text-success fw-bold d-flex"
        style="line-height: 24px; font-weight: 600"
        >Link Shoope</span
      >
      <span class="d-flex">{{ store.linkShopee }}</span>
    </div>
    <div class="mb-3">
      <span
        class="text-success fw-bold d-flex"
        style="line-height: 24px; font-weight: 600"
        >Link Tokopedia</span
      >
      <span class="d-flex">{{ store.linkTokopedia }}</span>
    </div>
    <div class="mb-3">
      <span
        class="text-success fw-bold d-flex"
        style="line-height: 24px; font-weight: 600"
        >Link Tokopedia</span
      >
      <span class="d-flex">{{ store.linkBlibli }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfoView",
  props: ["store"],
  data() {
    return {
      path: "https://niuniq.herokuapp.com",
    };
  },
};
</script>
