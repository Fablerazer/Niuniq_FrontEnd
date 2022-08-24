<template>
  <div>
    <CNavbarPenjual />
    <section class="bginputtoko">
      <div v-if="stores || !isEdit" class="container">
        <CInputToko :store="stores" :isEdit="isEdit" :userId="userId"/>
      </div>
    </section>
  </div>
</template>

<script>
import CInputToko from "@/components/penjual/InputToko.vue";
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import axios from "axios";

export default {
  name: "InputTokoView",
  components: {
    CInputToko,
    CNavbarPenjual,
  },
  data() {
    return {
      stores: null,
      isEdit: true,
      userId: "",
    };
  },
  methods: {
    setUserID(data) {
      this.userId = data;
    },

    setStores(data) {
      console.log(data);
      this.stores = data;
    },
    setIsEdit(data) {
      this.isEdit = data;
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "RegisterView" });
    }

    axios
      .get(
        "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
          this.$route.params.id
      )
      .then((response) => {
        this.setStores(response.data.data);
        this.setIsEdit(response.data.success);
        this.setUserID(response.data.data._id);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        this.setIsEdit(false);
      });
  },
};
</script>

<style></style>
