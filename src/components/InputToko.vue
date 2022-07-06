<template>
  <section class="bginputtoko">
    <div>
      <div class="card" style="width: 100%; height: 75%">
        <div class="card-body">
          <h3 class="lognreg">Informasi Toko</h3>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <label for="exampleInputTelepon1">Logo Toko</label>
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
                dragText="Logo Toko"
                dropText="Drop your file here"
                popupText="This image will be displayed as default"
                multiple="true"
                showEdit="true"
                showDelete="true"
                showAdd="true"
              ></vue-upload-multiple-image>
            </div>
            <div class="col-md-9">
              <label for="exampleInputTelepon1">Foto Toko</label>
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
                dragText="Upload Foto Toko"
                dropText="Drop your file here"
                popupText="This image will be displayed as default"
                multiple="true"
                showEdit="true"
                showDelete="true"
                showAdd="true"
              ></vue-upload-multiple-image>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  name: "CInputToko",
  components: {
    VueUploadMultipleImage,
  },
  methods: {
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
