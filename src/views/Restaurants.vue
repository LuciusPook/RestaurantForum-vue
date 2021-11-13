<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Mariela Reichert",
      tel: "199.487.2921",
      address: "16010 Providenci Cape",
      opening_hours: "08:00",
      description: "temporibus libero assumenda",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.39133861893191",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Hailie Ullrich",
      tel: "1-423-704-2575 x326",
      address: "2547 Barrows Meadow",
      opening_hours: "08:00",
      description: "Consectetur earum fuga rerum reprehenderit maxime ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.194619519026254",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Gus Gottlieb",
      tel: "(302) 908-8732 x90191",
      address: "0208 Nakia Drives",
      opening_hours: "08:00",
      description: "Aut et dolorem ab. Vel expedita non delectus molli",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.6872207358687",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Stacy Murphy",
      tel: "382.683.9291",
      address: "2481 Cary Inlet",
      opening_hours: "08:00",
      description: "Fugit reiciendis sed aut enim et provident dolor d",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.827666505237737",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Doyle Corwin",
      tel: "(756) 963-3580 x0001",
      address: "5104 Mervin Hill",
      opening_hours: "08:00",
      description: "Natus dolor esse impedit et nulla voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.218356886913444",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Gabe Lynch DVM",
      tel: "106.305.0175 x2451",
      address: "7081 Rosenbaum Drives",
      opening_hours: "08:00",
      description: "In necessitatibus officiis facilis omnis magnam po",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.34877212051052",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Derek Lueilwitz",
      tel: "099-454-4273 x19947",
      address: "180 Kay Curve",
      opening_hours: "08:00",
      description: "Quas distinctio fuga doloremque quos in aut fuga q",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.287674567220352",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Oleta Rosenbaum",
      tel: "625-521-0437 x469",
      address: "52471 Xander Grove",
      opening_hours: "08:00",
      description: "Aperiam ipsa voluptas minus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.347659214103686",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Ole Mayer DVM",
      tel: "111.394.5400 x18056",
      address: "60509 Wilderman Prairie",
      opening_hours: "08:00",
      description: "Dolorem rerum vel eos laudantium labore cumque id ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.7490216142378658",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Lucas Little",
      tel: "1-439-144-7155 x63676",
      address: "24337 Victoria Estate",
      opening_hours: "08:00",
      description: "Porro cupiditate incidunt consequatur et optio nih",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.10353213078334",
      viewCounts: 0,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>