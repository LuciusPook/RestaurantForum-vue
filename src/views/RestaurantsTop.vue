<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurants.isLiked"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteLike"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addLike"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Cyrus Hane",
      tel: "1-642-194-0226 x9232",
      address: "4123 Braden Mountains",
      opening_hours: "08:00",
      description: "voluptatem eveniet inventore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.11023762894251",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Erich Gerlach",
      tel: "1-739-192-4469 x4220",
      address: "53204 Phyllis Isle",
      opening_hours: "08:00",
      description: "Nihil voluptatum possimus quis. Consequuntur debit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.02521110481322",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Abdul McClure",
      tel: "(190) 758-7122 x28727",
      address: "99242 Hessel Dale",
      opening_hours: "08:00",
      description: "non",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.993501473105226",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Mrs. Karelle Macejkovic",
      tel: "744.065.7916",
      address: "588 Parisian Ways",
      opening_hours: "08:00",
      description: "Eius quis ex voluptatem beatae eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.440054131435566",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Reyna Douglas",
      tel: "(788) 921-5795 x60624",
      address: "4024 Laron Inlet",
      opening_hours: "08:00",
      description: "Et ea non minima in hic facilis. Iure debitis eum ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.465104154584743",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Nakia Dickens",
      tel: "370.476.9906",
      address: "80809 Geovanny Common",
      opening_hours: "08:00",
      description: "Est sequi et officia non mollitia sed. Hic volupta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.566755576287946",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Rosie Lesch",
      tel: "(864) 226-6569",
      address: "118 Hirthe Forest",
      opening_hours: "08:00",
      description: "Est dolores ipsa et nobis labore odit molestiae il",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.95452183866502",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Tony Zboncak",
      tel: "(050) 943-9399",
      address: "075 Schuster Ridge",
      opening_hours: "08:00",
      description: "Quam officiis dolor. At qui quisquam pariatur omni",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.05940803010850981",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Dr. Joe Baumbach",
      tel: "1-766-582-4636 x667",
      address: "6935 Schinner Loop",
      opening_hours: "08:00",
      description: "Facilis sed accusantium optio ex sunt iste.\nEt qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.70122419656816",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Juliet Tromp Sr.",
      tel: "1-754-655-6643 x25196",
      address: "382 Armando Point",
      opening_hours: "08:00",
      description: "ad",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.39780520432815",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTop();
  },
  methods: {
    fetchTop() {
      this.restaurants = dummyData.restaurants;
    },
    addLike() {
      this.restaurants = {
        ...this.restaurants,
        isLiked: true,
      };
    },
    deleteLike() {
      this.restaurants = {
        ...this.restaurants,
        isLiked: false,
      };
    },
  },
};
</script>