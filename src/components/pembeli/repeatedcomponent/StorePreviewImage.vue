<template>
  <div class="row mt-4">
        <div v-for="product in filteredProducts" :key="product._id" class="col-md-4">
          <router-link :to="{ name:'DetailView', params: { id: product.productId }}">
            <!-- <h3>{{ product.photos[0] }}</h3> -->
            <!-- <h3>{{data.splittedList}}</h3> -->
            <!-- https://stackoverflow.com/questions/51182984/vue-and-api-displaying-image -->
            <!-- https://laracasts.com/discuss/channels/vue/display-image-in-vuejs -->
            <img :src=" path + '/documents/images/products/' + product.photos[0]" class="rounded img-fluid" :alt="'picture'" />
          </router-link>
        </div>
      </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CStorepreviewimage",
  data() {
  return {
      products: [],
      path: 'https://niuniq.herokuapp.com',
      // splitedList,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // https://www.itsolutionstuff.com/post/vue-js-convert-string-to-array-vue-js-split-string-exampleexample.html#:~:text=The%20split()%20method%20is,split(separator)%3B
    // https://stackoverflow.com/questions/49895936/vue-js-how-to-split-string-to-array-and-use-in-v-for-list-renderer
    // splitedList(photos){               
    //           return (photos !== null)?photos.split('/'):'';
    //     },
    
    // const url = "http://niuniq.herokuapp.com/documents/images/products/photo_62f32e4628f0e9439c3adb31_1.jpg";

    // const splitUrl = url.split('/');
    // console.log(splitUrl);
    // console.log(splitUrl[splitUrl.length - 1]);

    getProducts() {
      var config = {
        method: "get",
        url: "https://niuniq.herokuapp.com/api/web/niuniq/products",
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          this.products = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filteredProducts: function () {
      return this.products.slice(0, 3)
    }
  }
}
</script>

<style>

</style>