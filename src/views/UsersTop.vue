<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <RestaurantUsersTop
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantUsersTop from "./../components/RestaurantUsersTop";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$muFnMirlTFPwiC4WtJUKMuBns1xmfMBczeG29G8zmkDpNDf8cgVvi",
      isAdmin: true,
      image: null,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$.q9LoZnUnLqKMj.A47IF6.w9u7ptYdCT8elauCsZyC6QOkGTFmrgm",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$xVjcTNVXvhS0HMiqK7yPmO3aPZSTsc2UHfWZfWcsmABQoBAjPVurW",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    RestaurantUsersTop,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsersTop();
  },
  methods: {
    fetchUsersTop() {
      this.users = dummyData.users;
    },
  },
};
</script>