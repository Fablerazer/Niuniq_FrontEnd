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
              :value="product.yearProduction"
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
          <vue-upload-multiple-image
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
          ></vue-upload-multiple-image>
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
              v-model="simpan.video"
            ></b-form-textarea>
          </div>
        </div>
      </div>
    </div>
    <br />
    <a href="/notificationview">
      <button
        type="button"
        class="btn btn-success btn-lg btn-block"
        style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
        @click="simpan"
      >
        Simpan
      </button>
    </a>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  name: "CInputInfoDetail",
  props: ["product"],
  components: {
    VueUploadMultipleImage,
  },
  methods: {
    simpan() {
      this.simpan.products = this.product;
      axios
      .post("https://niuniq.herokuapp.com/api/web/niuniq/stores/" +this.$route.params.id + "/products", this.simpan)
      .then(() => {
        console.log("Berhasil");
      })
      .catch((err) => console.log(err))
    },
    uploadImageSuccess(formData, index, fileList) {
      console.log("upload success data ", formData, index, fileList);
    },
    beforeRemove(index, removeCallBack) {
      console.log("index", index);
      var r = confirm("Do you really want to remove the image?");
      if (r == true) {
        removeCallBack();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    markIsPrimary(index, fileList) {
      console.log("markIsPrimary data", index, fileList);
    },
    limitExceeded(amount) {
      console.log("limitExceeded data", amount);
    },
  },
};
</script>

<style></style>
