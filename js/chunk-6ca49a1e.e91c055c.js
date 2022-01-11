(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca49a1e"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),t._l(t.restaurants,(function(e){return a("div",{key:e.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"card-img",attrs:{src:e.image}})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(e.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),a("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"#"}},[t._v("Show")]),e.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(e.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(e.id)}}},[t._v(" 加到最愛 ")])])])])])}))],2)},n=[],s=a("5530"),c=a("1da1"),i=(a("d81d"),a("96cf"),a("8bb1")),o=a("c4c3"),u=a("4cce"),d=a("2fa3"),l={components:{NavTabs:i["a"]},data:function(){return{restaurants:[]}},created:function(){this.fetchTopRestaurants()},methods:{fetchTopRestaurants:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].getTopRestaurants();case 3:a=e.sent,r=a.data,t.restaurants=r.restaurants,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"無法取得人氣餐廳資料，請稍後再試"}),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},addFavorite:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].addFavorite({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{FavoriteCount:e.FavoriteCount+1,isFavorited:!0})})),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),d["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"}),console.log("error",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},deleteFavorite:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].deleteFavorite({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{FavoriteCount:e.FavoriteCount-1,isFavorited:!1})})),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),d["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"}),console.log("error",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},v=l,p=a("2877"),f=Object(p["a"])(v,r,n,!1,null,null,null);e["default"]=f.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),c=s("map");r({target:"Array",proto:!0,forced:!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ca49a1e.e91c055c.js.map