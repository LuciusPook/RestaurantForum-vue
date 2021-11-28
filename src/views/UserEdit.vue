<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="profile.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="profile.image"
          :src="profile.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      profile: {
        id: -1,
        image: "",
      },
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  methods: {
    setUser(userId) {
      console.log("setUser id:", userId);
      const { profile } = this.currentUser;
      this.profile = {
        ...this.profile,
        id: profile.id,
        image: profile.image,
      };
    },
    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名",
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);

        const { data } = await usersAPI.update({
          userId: this.id,
          formData,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
    handleFileChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.profile.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.profile.image = imageURL;
      }
    },
  },
};
</script>