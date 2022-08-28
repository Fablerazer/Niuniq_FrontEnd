<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <CWelcomeimg />
      </div>
      <div class="col-md-6" style="align-self: center; padding-left: 7%">
        <CRegister />
      </div>
    </div>
  </div>
</template>

<script>
import CWelcomeimg from "@/components/penjual/Welcomeimg.vue";
import CRegister from "@/components/penjual/Register.vue";

export default {
  name: "RegisterView",
  components: {
    CWelcomeimg,
    CRegister,
  },
};
</script>

<style></style>
