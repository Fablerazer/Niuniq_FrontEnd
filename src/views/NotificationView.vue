<template>
  <div>
    <CNavbar />
    <div class="container">
      <h4>Pemberitahuan Status Produk</h4>
      <CNotifSuccess />
      <br />
      <CNotifFail />
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/Navbar.vue";
import CNotifSuccess from "@/components/NotifSuccess.vue";
import CNotifFail from "@/components/NotifFail.vue";

export default {
  name: "NotificationView",
  components: {
    CNavbar,
    CNotifSuccess,
    CNotifFail,
  },
};
</script>

<style></style>
