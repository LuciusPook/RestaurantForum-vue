<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ initialFollowers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <a
        v-for="follower in initialFollowers"
        :key="follower.id"
        href="/restaurants/"
      >
        <img :src="follower.image" height="60" width="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFollowers: {
      type: Array,
      required: true,
    },
  },
};
</script>