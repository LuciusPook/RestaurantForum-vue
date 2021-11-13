<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ initialFavoriteRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <a
        v-for="restaurant in initialFavoriteRestaurants"
        :key="restaurant.id"
        href="/restaurants/"
      >
        <img :src="restaurant.image" width="60" height="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFavoriteRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>