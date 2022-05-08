export default {
    siteTitle: "Digital Garden",
    siteDescription: "Custom digital garden",
    favicon: "/favicon.ico",
    siteImagePath: "/images/sarissa.png",
    footer: "© 2022 Jesus Guerrero Blog",
    dateFormat: "dd MMMM, yyyy HH:mm",
    seedUrl: "/garden/seeds",
    seedPath: "../pages/garden/seeds",
    socialMedia: {
      facebook: "jesusantguerrero",
      twitter: "jesusntguerrero",
      linkedin: "jesusantguerrero",
      github: "jesusantguerrero",
    },
    pageSize: 5,
    categories: [
      {
        name: "theme",
        color: "btn-warning",
        image: "/images/theme.jpg",
        order: 1,
      },
    ],
    categorySettings: {
      order: "name", // name | count
      layout: "card", //button | card
      image: "",
      color: "btn-primary",
      countVisibility: true,
    },
  };