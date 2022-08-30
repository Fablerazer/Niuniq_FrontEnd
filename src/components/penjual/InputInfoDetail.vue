<template>
  <div>
    <div
      class="card"
      style="
        width: 100%;
        height: 75%;
        box-shadow: 0px 4px 16px rgba(51, 58, 81, 0.08);
        border-radius: 8px;
      "
    >
      <div class="card-body" style="padding: 32px">
        <div class="row">
          <div class="col-md-6">
            <h2
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
                margin-bottom: 0;
              "
            >
              Informasi Produksi
            </h2>
          </div>
        </div>
        <hr />
        <div class="form-group" style="margin-bottom: 0">
          <label
            for="exampleInputTelepon1"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 16px;
              display: flex;
              align-items: center;
              color: #777b80;
              padding-top: 6px;
            "
            >Tahun Produksi</label
          >
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
              v-model="yearProduction"
              style="margin-bottom: 0"
            />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div
      class="card"
      style="
        width: 100%;
        height: 75%;
        box-shadow: 0px 4px 16px rgba(51, 58, 81, 0.08);
        border-radius: 8px;
      "
    >
      <div class="card-body" style="padding: 32px">
        <div class="row">
          <div class="col-md-6">
            <h2
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
                margin-bottom: 0;
              "
            >
              Detail Produk
            </h2>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label
                for="exampleInputTelepon1"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 16px;
                  display: flex;
                  align-items: center;
                  color: #777b80;
                  padding-top: 6px;
                "
                >Nama Produk</label
              >
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
              <label
                for="exampleInputTelepon1"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 16px;
                  display: flex;
                  align-items: center;
                  color: #777b80;
                  padding-top: 6px;
                "
                >Deskripsi Produk</label
              >
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
            <div class="form-group" style="margin-bottom: 0">
              <label
                for="exampleInputTelepon1"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 16px;
                  display: flex;
                  align-items: center;
                  color: #777b80;
                  padding-top: 6px;
                "
                >Bahan Baku Produk</label
              >
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan bahan baku produk"
                  rows="3"
                  max-rows="6"
                  v-model="rawMaterials"
                  style="margin-bottom: 0"
                ></b-form-textarea>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group" style="margin-bottom: 0">
              <label
                for="exampleInputTelepon1"
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 16px;
                  display: flex;
                  align-items: center;
                  color: #777b80;
                  padding-top: 6px;
                "
                >Cara Penyimpanan Produk</label
              >
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan cara penyimpanan produk"
                  rows="3"
                  max-rows="6"
                  v-model="productStorage"
                  style="margin-bottom: 0"
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
      <div
        class="card"
        style="
          width: 100%;
          height: 75%;
          box-shadow: 0px 4px 16px rgba(51, 58, 81, 0.08);
          border-radius: 8px;
        "
      >
        <div class="card-body" style="padding: 32px">
          <div class="row">
            <div class="col-md-6">
              <h2
                style="
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 32px;
                  margin-bottom: 0;
                "
              >
                Dokumentasi Produk
              </h2>
            </div>
          </div>
          <hr />
          <h5 class="informasiproduk" style="margin: 0">Foto Produk</h5>
          <div>
            <p style="margin: 0"><small>*Wajib 5 foto</small></p>
            <label class="btn btn-default" style="padding: 9px 0 13px 0">
              <input type="file" multiple @change="selectFile" />
            </label>
            <h5 class="informasiproduk">Video Produk</h5>
            <div class="form-group" style="margin-bottom: 0">
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  placeholder="Masukkan link video produk, contoh: "
                  rows="3"
                  max-rows="6"
                  v-model="video"
                  style="margin-bottom: 0"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-success btn-lg btn-block"
      style="
        background-color: #4e944f;
        border-radius: 8px;
        font-size: 16px;
        margin-top: 24px;
        margin-bottom: 41px;
      "
      @click="onSubmit"
    >
      Simpan
    </button>
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
          .then((response) => {
            console.log(response)
              // alert("edit success, please close the tab");
              this.$router.push({
                path: "/profileview/" + response.data.data.store,
              });
          })
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
          .then((response) => {
            console.log(response),
              this.$router.push({
                path: "/profileview/" + this.$route.params.id,
              });
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }
    },
  },
};
</script>

<style></style>
