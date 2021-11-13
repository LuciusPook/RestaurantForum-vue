<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";

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
    },
    {
      id: 2,
      name: "Hailie Ullrich",
      tel: "1-423-704-2575 x326",
      address: "2547 Barrows Meadow",
      opening_hours: "08:00",
      description:
        "Consectetur earum fuga rerum reprehenderit maxime vel hic laudantium. Aperiam ipsa et voluptates eum labore ab maiores. Sint sed debitis ad aut autem. Omnis qui quasi rerum. Corrupti unde iure eligendi sunt.\n \rExpedita commodi officia est ullam doloribus eaque et. Sequi dolor consequuntur aut. Laborum reiciendis assumenda.\n \rOfficiis velit ut quia reprehenderit animi. Ut et ut. Iste quis autem numquam aut odio dolorum quae.",
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
    },
    {
      id: 3,
      name: "Gus Gottlieb",
      tel: "(302) 908-8732 x90191",
      address: "0208 Nakia Drives",
      opening_hours: "08:00",
      description:
        "Aut et dolorem ab. Vel expedita non delectus mollitia. Earum numquam optio. Enim sit voluptatem quasi minima iusto alias doloribus architecto non.\n \rSint fugiat accusamus minus consequatur. Itaque quos ea voluptas quo consequatur suscipit. Dignissimos non sed asperiores aut nihil quasi ullam pariatur nihil. Hic nisi maiores quam soluta quam consectetur reiciendis ad aut.\n \rNon omnis delectus aut voluptas quisquam similique qui at est. Quia enim veritatis. Error rerum corrupti sunt in velit est repellendus. Consequatur blanditiis molestias magni accusamus itaque molestiae. Et eos quos. Sint optio minima eum nemo ad.",
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
    },
    {
      id: 4,
      name: "Stacy Murphy",
      tel: "382.683.9291",
      address: "2481 Cary Inlet",
      opening_hours: "08:00",
      description:
        "Fugit reiciendis sed aut enim et provident dolor doloremque. Neque expedita et molestiae. Excepturi qui ut dolore dolorem est quia quis tempora. Dolores exercitationem voluptas odio nisi. Sit ut iste dolor est nam qui non tempora incidunt.\n \rLabore expedita enim porro velit ut asperiores est nulla. Ut dolor repellat ratione aliquam facere maiores. Ducimus quia ea minus.\n \rEnim vero dolorum corporis quod amet ut qui. Itaque vero expedita odit dolor corporis voluptates. In nam a. Itaque in aut. Consequatur quia maxime reiciendis.",
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
    },
    {
      id: 6,
      name: "Gabe Lynch DVM",
      tel: "106.305.0175 x2451",
      address: "7081 Rosenbaum Drives",
      opening_hours: "08:00",
      description: "In necessitatibus officiis facilis omnis magnam possimus.",
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
    },
    {
      id: 7,
      name: "Derek Lueilwitz",
      tel: "099-454-4273 x19947",
      address: "180 Kay Curve",
      opening_hours: "08:00",
      description:
        "Quas distinctio fuga doloremque quos in aut fuga quas. Occaecati nesciunt ea excepturi perferendis eligendi. Quam consequatur sunt ut. Eum aspernatur quasi. Distinctio sunt et rerum cupiditate saepe.",
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
    },
    {
      id: 9,
      name: "Ole Mayer DVM",
      tel: "111.394.5400 x18056",
      address: "60509 Wilderman Prairie",
      opening_hours: "08:00",
      description:
        "Dolorem rerum vel eos laudantium labore cumque id quos. Voluptas temporibus ipsa aperiam ipsa id eos maxime ipsam enim. Eos et soluta qui. Voluptatem sit sunt dolorem nisi aperiam esse. Omnis maiores voluptatem ut eum.",
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
    },
    {
      id: 10,
      name: "Lucas Little",
      tel: "1-439-144-7155 x63676",
      address: "24337 Victoria Estate",
      opening_hours: "08:00",
      description:
        "Porro cupiditate incidunt consequatur et optio nihil quasi voluptas nisi.",
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
    },
  ],
  comments: [
    {
      id: 10,
      text: "Expedita impedit quia quisquam et.",
      UserId: 1,
      RestaurantId: 10,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muFnMirlTFPwiC4WtJUKMuBns1xmfMBczeG29G8zmkDpNDf8cgVvi",
        isAdmin: true,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 10,
        name: "Lucas Little",
        tel: "1-439-144-7155 x63676",
        address: "24337 Victoria Estate",
        opening_hours: "08:00",
        description:
          "Porro cupiditate incidunt consequatur et optio nihil quasi voluptas nisi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=94.10353213078334",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 50,
      text: "Voluptas quibusdam eaque et quos ut et.",
      UserId: 1,
      RestaurantId: 50,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muFnMirlTFPwiC4WtJUKMuBns1xmfMBczeG29G8zmkDpNDf8cgVvi",
        isAdmin: true,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
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
      },
    },
    {
      id: 68,
      text: "Animi et facilis.",
      UserId: 1,
      RestaurantId: 18,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muFnMirlTFPwiC4WtJUKMuBns1xmfMBczeG29G8zmkDpNDf8cgVvi",
        isAdmin: true,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 18,
        name: "Austyn Ziemann",
        tel: "545-457-5050",
        address: "51294 Timmy Point",
        opening_hours: "08:00",
        description:
          "Beatae dolor sed consequatur nisi odit laborum similique officia et. Eos voluptates rem doloribus quasi dolore quod.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=56.29167172217042",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 109,
      text: "Praesentium voluptas similique autem rerum nihil iusto doloremque qui.",
      UserId: 1,
      RestaurantId: 9,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muFnMirlTFPwiC4WtJUKMuBns1xmfMBczeG29G8zmkDpNDf8cgVvi",
        isAdmin: true,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 9,
        name: "Ole Mayer DVM",
        tel: "111.394.5400 x18056",
        address: "60509 Wilderman Prairie",
        opening_hours: "08:00",
        description:
          "Dolorem rerum vel eos laudantium labore cumque id quos. Voluptas temporibus ipsa aperiam ipsa id eos maxime ipsam enim. Eos et soluta qui. Voluptatem sit sunt dolorem nisi aperiam esse. Omnis maiores voluptatem ut eum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=0.7490216142378658",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 135,
      text: "Provident corrupti qui et reprehenderit eos.",
      UserId: 1,
      RestaurantId: 35,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muFnMirlTFPwiC4WtJUKMuBns1xmfMBczeG29G8zmkDpNDf8cgVvi",
        isAdmin: true,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 35,
        name: "Adrian Littel",
        tel: "1-991-394-2508 x187",
        address: "70181 Adolphus Rapids",
        opening_hours: "08:00",
        description:
          "Necessitatibus consequatur assumenda amet maiores. Accusamus eum qui labore rerum. Eligendi corporis ullam et reprehenderit facere est et et. Odio vero sit atque pariatur magni.\n \rOptio quo ducimus ut culpa explicabo numquam. Porro labore tempora et in et dolorum natus quas exercitationem. Nostrum blanditiis nisi dolor et ea aut voluptas. Commodi non quia qui sunt consequatur doloremque.\n \rMagni quae fugit quod ut repellat. Dolor accusamus eligendi. Reiciendis ut aut incidunt. Quasi officiis qui labore tempora et quaerat iure. Nostrum et odio et inventore. Corporis sed debitis voluptas laborum quo velit dolorem voluptatibus animi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=53.32861153926925",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 13,
      text: "Rerum deserunt exercitationem repellendus in qui illum laborum ut quae.",
      UserId: 2,
      RestaurantId: 13,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.q9LoZnUnLqKMj.A47IF6.w9u7ptYdCT8elauCsZyC6QOkGTFmrgm",
        isAdmin: false,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 13,
        name: "Jordane Rodriguez",
        tel: "(485) 538-0670",
        address: "520 Larkin Island",
        opening_hours: "08:00",
        description:
          "Non aut eos ipsam impedit earum saepe. Omnis eligendi dolorem sint architecto.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=14.40054493932199",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 28,
      text: "Quas sint repudiandae.",
      UserId: 2,
      RestaurantId: 28,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.q9LoZnUnLqKMj.A47IF6.w9u7ptYdCT8elauCsZyC6QOkGTFmrgm",
        isAdmin: false,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 28,
        name: "Kayli Homenick",
        tel: "493-385-3142 x80594",
        address: "708 Emma Ranch",
        opening_hours: "08:00",
        description: "corporis",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=78.59462050594979",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 49,
      text: "Dolores molestiae necessitatibus quis dicta esse dolores illum officiis rerum.",
      UserId: 2,
      RestaurantId: 49,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.q9LoZnUnLqKMj.A47IF6.w9u7ptYdCT8elauCsZyC6QOkGTFmrgm",
        isAdmin: false,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 49,
        name: "Erich Gerlach",
        tel: "1-739-192-4469 x4220",
        address: "53204 Phyllis Isle",
        opening_hours: "08:00",
        description:
          "Nihil voluptatum possimus quis. Consequuntur debitis dolorem repellendus qui sequi. Rerum totam pariatur. Numquam ducimus vitae inventore.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=33.02521110481322",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 73,
      text: "Nobis qui at nihil quae modi id ut.",
      UserId: 2,
      RestaurantId: 23,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.q9LoZnUnLqKMj.A47IF6.w9u7ptYdCT8elauCsZyC6QOkGTFmrgm",
        isAdmin: false,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 23,
        name: "Gail Bogisich",
        tel: "(015) 401-8780 x313",
        address: "6640 Chasity Pass",
        opening_hours: "08:00",
        description:
          "Et quo et optio.\nEt eos et.\nOdio officiis maiores provident itaque.\nEst quasi excepturi odio.\nAtque eos explicabo.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=33.303852217143046",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 87,
      text: "Quis mollitia optio blanditiis enim perferendis minima.",
      UserId: 2,
      RestaurantId: 37,
      createdAt: "2021-11-10T02:57:54.000Z",
      updatedAt: "2021-11-10T02:57:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.q9LoZnUnLqKMj.A47IF6.w9u7ptYdCT8elauCsZyC6QOkGTFmrgm",
        isAdmin: false,
        image: null,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
      },
      Restaurant: {
        id: 37,
        name: "Waino Goldner",
        tel: "474-985-9052 x926",
        address: "509 Lonnie Court",
        opening_hours: "08:00",
        description:
          "Nisi dolorum ut delectus harum amet nostrum at. Voluptatem omnis voluptatem libero eum quibusdam est. Quia neque ullam a et nemo. Sunt dolorum autem nisi adipisci recusandae amet quam nisi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=37.514717541891414",
        viewCounts: 0,
        createdAt: "2021-11-10T02:57:54.000Z",
        updatedAt: "2021-11-10T02:57:54.000Z",
        CategoryId: 4,
      },
    },
  ],
};

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments.filter(
        (comment) => comment.Restaurant && comment.text
      );
    },
  },
};
</script>