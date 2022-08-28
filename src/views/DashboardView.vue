<template>
  <div
    id="dashboard"
    class="menu-item-list dashboard card p-4 border-0 shadow d-flex"
    style="border-radius: 8px"
  >
    <span
      class="text-success fw-bold d-flex fs-2"
      style="
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
      "
      >Dashboard</span
    >
    <hr class="w-100 mb-4" />
    <div class="dashboard-items row">
      <div class="col pe-2">
        <div
          class="total-products card p-4 border-0 shadow"
          style="border-radius: 8px"
        >
          <div class="d-flex w-100 align-items-start" style="gap: 25px">
            <img src="@/assets/img/icon-grid.svg" class="me-2" />
            <div class="row text-white fw-bold d-flex">
              <span
                class="fs-4 text-left d-flex"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 32px;
                "
                >{{ this.productList.length }}</span
              >
              <span
                class="text-left d-flex"
                style="
                  font-size: 14px;
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 24px;
                  align-items: center;
                  padding-left: 8px;
                "
                >Total Produk</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col pe-2">
        <div class="card p-4 border-0 shadow" style="border-radius: 8px">
          <div class="d-flex w-100 align-items-start" style="gap: 25px">
            <img src="@/assets/img/icon-verification.svg" class="me-2" />
            <div class="row fw-bold d-flex">
              <span
                class="fs-4 text-left d-flex"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 32px;
                "
                >{{
                  this.productList.filter((x) => x.isVerification == 2).length
                }}</span
              >
              <span
                class="text-left d-flex"
                style="
                  font-size: 14px;
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 24px;
                  align-items: center;
                  padding-left: 8px;
                  color: #777B80;
                "
                >Menunggu Verifikasi</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col pe-2">
        <div class="card p-4 border-0 shadow" style="border-radius: 8px">
          <div class="d-flex w-100 align-items-start" style="gap: 25px">
            <img src="@/assets/img/icon-verification-failed.svg" class="me-2" />
            <div class="row fw-bold d-flex">
              <span
                class="fs-4 text-left d-flex"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 32px;
                "
                >{{
                  this.productList.filter((x) => x.isVerification == 0).length
                }}</span
              >
              <span
                class="text-left d-flex"
                style="
                  font-size: 14px;
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 24px;
                  align-items: center;
                  padding-left: 8px;
                  color: #777B80;
                "
                >Gagal Verifikasi</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col pe-2">
        <div class="card p-4 border-0 shadow" style="border-radius: 8px">
          <div class="d-flex w-100 align-items-start" style="gap: 25px">
            <img
              src="@/assets/img/icon-verification-success.svg"
              class="me-2"
            />
            <div class="row fw-bold d-flex">
              <span
                class="fs-4 text-left d-flex"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 32px;
                "
                >{{
                  this.productList.filter((x) => x.isVerification == 1).length
                }}</span
              >
              <span
                class="text-left d-flex"
                style="
                  font-size: 14px;
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 24px;
                  align-items: center;
                  padding-left: 8px;
                  color: #777B80;
                "
                >Berhasil Verifikasi</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardView",
  data() {
    return {
      productList: [],
      data: {},
    };
  },
  created() {
    this.getProducts();
    this.getData();
  },
  methods: {
    getProducts() {
      var config = {
        method: "get",
        // jangan dihapus
        // url: "https://niuniq.herokuapp.com/api/web/niuniq/products"
        url:
          "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
          this.$route.params.id +
          "/products",
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
        params: {
          limit: 1000000,
        },
      };
      axios(config)
        .then((response) => {
          this.productList = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      var config = {
        method: "get",
        url:
          "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
          this.$route.params.id +
          "/products",
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          console.log(`Next >> ${response.data.pagination.next.page}`);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsByPage(page) {
      var config = {
        method: "get",
        url: `https://niuniq.herokuapp.com/api/web/niuniq/stores/${this.route.params.id}/products/?page=${page}`,
        // jangan dihapus
        // url: `https://niuniq.herokuapp.com/api/web/niuniq/products/?page=${page}`,
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          console.log(`Next >> ${response.data.pagination.next.page}`);
          this.data = response.data;
          this.productList = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.total-products {
  background-image: linear-gradient(to right, #4e944f, #6adf8b);
}

.dashboard-items:nth-last-child {
  margin-right: 0;
}
</style>
