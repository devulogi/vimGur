<template>
  <div class="image-container">
    <div v-if="isLoggedIn">
      <img
        class="ui medium rounded image"
        v-for="image in allImages"
        :key="image.id"
        :src="image.link"
      />
    </div>
    <h2 v-else>Please log in to get started</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: {
    ...mapGetters(["allImages", "isLoggedIn"]),
  },
  methods: {
    ...mapActions(["fetchImages"]),
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
