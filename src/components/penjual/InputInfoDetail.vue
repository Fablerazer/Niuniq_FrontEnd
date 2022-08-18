<template>
  <div>
    <div class="card" style="width: 100%; height: 75%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Informasi Produksi</h2>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputTelepon1">Tahun Produksi</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
              v-model="yearProduction"
            />
            <!-- v-model="product.yearProduction" -->
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="card" style="width: 100%; height: 75%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Detail Produk</h2>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Nama Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan nama produk"
                  rows="3"
                  max-rows="6"
                  :value="product.name"
                  v-model="name"
                ></b-form-textarea>
                <!-- v-model="product.name" -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Deskripsi Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan deskripsi produk"
                  rows="3"
                  max-rows="6"
                  :value="product.description"
                  v-model="description"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Bahan Baku Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan bahan baku produk"
                  rows="3"
                  max-rows="6"
                  :value="product.rawMaterials"
                  v-model="rawMaterials"
                ></b-form-textarea>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Cara Penyimpanan Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan cara penyimpanan produk"
                  rows="3"
                  max-rows="6"
                  :value="product.productStorage"
                  v-model="productStorage"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dokumentasi Produk -->
    <div>
      <br />
      <div class="card" style="width: 100%; height: 75%">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <h2>Dokumentasi Produk</h2>
            </div>
          </div>
          <hr />
          <h5 class="informasiproduk">Foto Produk</h5>
          <div>
            <div v-if="progressInfos">
              <div
                class="mb-2"
                v-for="(progressInfo, index) in progressInfos"
                :key="index"
              >
                <span>{{ progressInfo.fileName }}</span>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-info"
                    role="progressbar"
                    :aria-valuenow="progressInfo.percentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="{ width: progressInfo.percentage + '%' }"
                  >
                    {{ progressInfo.percentage }}%
                  </div>
                </div>
              </div>
              <label class="btn btn-default">
                <input type="file" multiple @change="selectFile" />
              </label>
            </div>
            <hr />
            <h5 class="informasiproduk">Video Produk</h5>
            <div class="form-group">
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan link video produk"
                  rows="3"
                  max-rows="6"
                  :value="product.video"
                  v-model="video"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
          @click="createProduct"
        >
          Simpan
        </button>
        <!-- </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CInputInfoDetail",
  props: ["product"],
  data() {
    return {
      selectedFiles: undefined,
      progressInfos: [],
      message: "",
      fileInfos: [],
      video: "",
      productStorage: "",
      rawMaterials: "",
      description: "",
      name: "",
      images: [],
      yearProduction: "",
    };
  },
  methods: {
    selectFile() {
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
    },

    uploadFiles() {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        console.log(this.selectedFiles[i]);
      }
    },

    createProduct() {
      console.log(this.selectedFiles);
      let formData = new FormData();
      for (var i = 0; i < this.selectedFiles.length; i++) {
        let file = this.selectedFiles[i];
        console.log(typeof file);
        formData.append("images", file);
      }
      formData.append("video", this.video);
      formData.append("productStorage", this.productStorage);
      formData.append("rawMaterials", this.rawMaterials);
      formData.append("description", this.description);
      formData.append("name", this.name);
      formData.append("yearProduction", this.yearProduction);

      axios
        .post(
          "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
            this.$route.params.id +
            "/products",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => console.log(response))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    // simpan() {
    //   this.simpan.products = this.product;
    //   axios
    //   .post("https://niuniq.herokuapp.com/api/web/niuniq/stores/" +this.$route.params.id + "/products", this.simpan)
    //   .then(() => {
    //     console.log("Berhasil");
    //   })
    //   .catch((err) => console.log(err))
    // },
  },
  mounted() {
  },
};
</script>

<style></style>
