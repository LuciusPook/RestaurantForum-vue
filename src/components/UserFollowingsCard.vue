<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ initialFollowings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <a
        v-for="following in initialFollowings"
        :key="following.id"
        href="/restaurants/"
      >
        <img :src="following.image" height="60" width="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFollowings: {
      type: Array,
      required: true,
    },
  },
};
</script>