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
            <!-- <vue-upload-multiple-image
              @upload-success="uploadImageSuccess"
              @before-remove="beforeRemove"
              @mark-is-primary="markIsPrimary"
              @limit-exceeded="limitExceeded"
              @edit-image="editImage"
              :data-images="images"
              idUpload="myIdUpload"
              idEdit="myIdEdit"
              maxImage="5"
              editUpload="myIdEdit"
              primaryText="Default"
              browseText="Browse picture(s)"
              markIsPrimaryText="Set image as default"
              dragText="Drag multiple pictures"
              dropText="Drop your file here"
              popupText="This image will be displayed as default"
              multiple="true"
              showEdit="true"
              showDelete="true"
              showAdd="true"
              v-model="images"
            ></vue-upload-multiple-image> -->
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
              <button
                class="btn btn-success"
                :disabled="!selectedFiles"
                @click="uploadFiles"
              >
                Upload
              </button>
              <div v-if="message" class="alert alert-light" role="alert">
                <ul>
                  <li v-for="(ms, i) in message.split('\n')" :key="i">
                    {{ ms }}
                  </li>
                </ul>
              </div>
              <div class="card">
                <div class="card-header">List of Files</div>
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    v-for="(file, index) in fileInfos"
                    :key="index"
                  >
                    <a :href="file.url">{{ file.name }}</a>
                  </li>
                </ul>
              </div>
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
        <!-- <a href="/notificationview"> -->
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
          @click="createProduct"
        >
          <!-- v:on:click="createProduct" -->
          Simpan
        </button>
        <!-- </a> -->
      </div>
    </div>
  </div>
</template>

<script>
// import UploadService from "@/services/UploadFilesService";
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

      // contoh
      video: "",
      productStorage: "",
      rawMaterials: "",
      description: "",
      name: "",
      images: [],
      yearProduction: "",
      // formData: new FormData(),
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
      // let image = JSON.stringify(Object.fromEntries(this.images));
      let formData = new FormData();
      // console.log(image);
      for (var i = 0; i < this.selectedFiles.length; i++) {
        let file = this.selectedFiles[i];
        // var blob = new Blob([JSON.stringify(file, null, 2)], {
        //   type: "application/json;charset=utf-8",
        // }).slice(2, -1);
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
    // uploadImageSuccess(formData, index, fileList) {
    //   // this.images.push(formData);
    //   // this.images = fileList;
    //   this.formData = formData;
    //   console.log("upload success data ", formData, index, fileList);
    // },
    // beforeRemove(index, removeCallBack) {
    //   console.log("index", index);
    //   var r = confirm("Do you really want to remove the image?");
    //   if (r == true) {
    //     removeCallBack();
    //   }
    // },
    // editImage(formData, index, fileList) {
    //   console.log("edit data", formData, index, fileList);
    // },
    // markIsPrimary(index, fileList) {
    //   console.log("markIsPrimary data", index, fileList);
    // },
    // limitExceeded(amount) {
    //   console.log("limitExceeded data", amount);
    // },
  },
  // mounted() {
  //   this.images = [],
  // },
  mounted() {
    // UploadService.getFiles().then((response) => {
    //   this.fileInfos = response.data;
    // });
  },
};
</script>

<style></style>
