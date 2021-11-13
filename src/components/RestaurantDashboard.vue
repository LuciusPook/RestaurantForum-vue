<template>
  <div class="container py-5">
    <h4>dashboard</h4>
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Deon O'Keefe",
    tel: "648-906-3801 x675",
    address: "12822 Collin Motorway",
    opening_hours: "08:00",
    description: "Quis qui repellendus quod.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=11.371216765523906",
    viewCounts: 2,
    createdAt: "2021-11-08T04:30:08.000Z",
    updatedAt: "2021-11-10T10:36:37.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-08T04:30:08.000Z",
      updatedAt: "2021-11-08T04:30:08.000Z",
    },
    Comments: [
      {
        id: 51,
        text: "Et occaecati hic distinctio ullam aliquid veniam.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-08T04:30:08.000Z",
        updatedAt: "2021-11-08T04:30:08.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$/ojrTf234WKEJfP7jMhfn.oRyfzkYcpL4A8qDxt2k2lKN3eTQr3n6",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-08T04:30:08.000Z",
          updatedAt: "2021-11-08T04:30:08.000Z",
        },
      },
      {
        id: 101,
        text: "Impedit quasi rerum tenetur.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-08T04:30:08.000Z",
        updatedAt: "2021-11-08T04:30:08.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$/ojrTf234WKEJfP7jMhfn.oRyfzkYcpL4A8qDxt2k2lKN3eTQr3n6",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-08T04:30:08.000Z",
          updatedAt: "2021-11-08T04:30:08.000Z",
        },
      },
      {
        id: 1,
        text: "Tempora non quaerat.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-08T04:30:08.000Z",
        updatedAt: "2021-11-08T04:30:08.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$SLV6xzg.mfuYi2x6aXNVtumugtrL70wY80gp/lysYdcDLoyKrUS0m",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-08T04:30:08.000Z",
          updatedAt: "2021-11-08T04:30:08.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: dummyData.restaurant,
      commentsLength: dummyData.restaurant.Comments.length,
    };
  },
};
</script>