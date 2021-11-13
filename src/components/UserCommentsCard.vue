<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ initialComments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a
        v-for="comment in initialComments"
        :key="comment.id"
        href="/restaurants/"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialComments: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.initialComments);
  },
};
</script>