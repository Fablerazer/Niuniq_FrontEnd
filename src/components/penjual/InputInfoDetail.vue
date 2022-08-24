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
                  v-model="name"
                ></b-form-textarea>
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
            <label class="btn btn-default">
              <input type="file" multiple @change="selectFile" />
            </label>
            <hr />
            <h5 class="informasiproduk">Video Produk</h5>
            <div class="form-group">
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan link video produk"
                  rows="3"
                  max-rows="6"
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
          @click="onSubmit"
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
  props: ["product", "isEdit"],
  data() {
    return {
      selectedFiles: undefined,
      progressInfos: [],
      message: "",
      fileInfos: [],
      video: this.product?.video || "",
      productStorage: this.product?.productStorage || "",
      rawMaterials: this.product?.rawMaterials || "",
      description: this.product?.description || "",
      name: this.product?.name || "",
      images: [],
      yearProduction: this.product?.yearProduction || "",
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

    onSubmit() {
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
      if (this.isEdit) {
        console.log("this is edit");
        axios
          .put(
            "https://niuniq.herokuapp.com/api/web/niuniq/products/" +
              this.product._id,
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
      } else {
        console.log(this.selectedFiles);
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
      }
    },
  },
};
</script>

<style></style>
