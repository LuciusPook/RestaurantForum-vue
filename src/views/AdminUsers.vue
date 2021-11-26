<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="currentUser !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";

const dummyUser = {
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
    },
  ],
};

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: "",
    };
  },

  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyUser.users;
      this.currentUser = dummyUser.users.id;
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }

        return user;
      });
    },
  },
};
</script>