/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: null,
    name: 'Product',
    icon: 'FileIcon',
    submenu: [
      {
        url: '/product-list',
        name: 'List',
        slug: 'product-list',
      },
      {
        url: '/product-create',
        name: 'Create',
        slug: 'product-create',
      },
    ]
  }
]
