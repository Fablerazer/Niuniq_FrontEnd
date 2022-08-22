<template>
    <div class="rounded-pill text-white fw-bold py-1 px-2 d-inline-block "
        :class="verificationStatus ? 'bg-warning' : (verificationStatus === 1 ? 'bg-success' : 'bg-danger')">
        {{ verificationStatus ? "Menunggu" : (verificationStatus === 1 ? "Berhasil" : "Gagal")}}
    </div>
    <!-- null = success -->
</template>

<script>
export default {
    name: "VerificationStatus",
    props: ["verification-status"],
}
</script>