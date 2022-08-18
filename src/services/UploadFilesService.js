import axios from "axios";
class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    // return axios.post("https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
    //         this.$route.params.id +
    //         "/products", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   onUploadProgress
    // });
  }
  getFiles() {
    return axios.get("/files");
  }
}
export default new UploadFilesService();