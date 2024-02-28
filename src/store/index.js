import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modernKitchen: [
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__1.jpg'
      },
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__2.jpg'
      },
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__3.jpg'
      },
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__4.jpg'
      }
    ],
    articlesBlog: [
      {
        header: 'Let’s Get Solution For Building Construction Work',
        date: '26 December,2022',
        image: 'article_1.jpg'
      },
      {
        header: 'Low Cost Latest Invented Interior Designing ',
        date: '22 December,2022',
        image: 'article_2.jpg'
      },
      {
        header: 'Best For Any Office & Business Interior',
        date: '25 December,2022',
        image: 'article_3.jpg'
      },
      {
        header: 'Let’s Get Solution For Building Construction Work',
        date: '26 December,2022',
        image: 'article_4.jpg'
      },
      {
        header: 'Low Cost Latest Invented Interior Designing ',
        date: '22 December,2022',
        image: 'article_5.jpg'
      },
      {
        header: 'Best For Any Office & Business Interior',
        date: '25 December,2022',
        image: 'article_6.jpg'
      }
    ],
    slider: [
      {
        id: 1,
        image: 'projectDetails_slider1.jpg'
      },
      {
        id: 2,
        image: 'projectDetails_slider2.jpg'
      },
      {
        id: 3,
        image: 'projectDetails_slider3.jpg'
      }
    ],
    projectBedroom: [
      {
        header: 'Minimal Bedroom',
        text: 'Decor / Artchitecture',
        image: 'project_grid1.jpg'
      },
      {
        header: 'Minimal Bedroom',
        text: 'Decor / Artchitecture',
        image: 'project_grid2.jpg'
      },
      {
        header: 'Classic Minimal Bedroom',
        text: 'Decor / Artchitecture',
        image: 'project_grid3.jpg'
      },
      {
        header: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
        image: 'project_grid4.jpg'
      },
      {
        header: 'Minimal Bedroom table',
        text: 'Decor / Artchitecture',
        image: 'project_grid5.jpg'
      },
      {
        header: 'System Table',
        text: 'Decor / Artchitecture',
        image: 'project_grid6.jpg'
      },
      {
        header: 'Modern Medroom',
        text: 'Decor / Artchitecture',
        image: 'project_grid7.jpg'
      },
      {
        header: 'Modern Medroom',
        text: 'Decor / Artchitecture',
        image: 'project_grid8.jpg'
      }
    ],
    projectKitchen: [
      {
        header: 'Minimal Kitchen',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid1.jpg'
      },
      {
        header: 'Minimal Kitchen',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid2.jpg'
      },
      {
        header: 'Classic Minimal Kitchen',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid3.jpg'
      },
      {
        header: 'Modern Kitchen',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid4.jpg'
      },
      {
        header: 'Minimal Kitchen table',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid5.jpg'
      },
      {
        header: 'System Table',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid6.jpg'
      },
      {
        header: 'Modern Kitchen',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid7.jpg'
      },
      {
        header: 'Modern Kitchen',
        text: 'Kitchen / Artchitecture',
        image: 'project_grid8.jpg'
      }
    ],
    projectBathroom: [
      {
        header: 'Minimal Bathroom',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid1.jpg'
      },
      {
        header: 'Minimal Bathroom',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid2.jpg'
      },
      {
        header: 'Classic Minimal Bathroom',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid3.jpg'
      },
      {
        header: 'Modern Bathroom',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid4.jpg'
      },
      {
        header: 'Minimal Bathroom table',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid5.jpg'
      },
      {
        header: 'System Table',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid6.jpg'
      },
      {
        header: 'Modern Bathroom',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid7.jpg'
      },
      {
        header: 'Modern Bathroom',
        text: 'Bathroom / Artchitecture',
        image: 'project_grid8.jpg'
      }
    ],
    projectLivingArea: [
      {
        header: 'Minimal Living Area',
        text: 'Living Area / Artchitecture',
        image: 'project_grid1.jpg'
      },
      {
        header: 'Minimal Living Area',
        text: 'Living Area / Artchitecture',
        image: 'project_grid2.jpg'
      },
      {
        header: 'Classic Minimal Living Area',
        text: 'Living Area / Artchitecture',
        image: 'project_grid3.jpg'
      },
      {
        header: 'Modern Living Area',
        text: 'Living Area / Artchitecture',
        image: 'project_grid4.jpg'
      },
      {
        header: 'Minimal Living Area table',
        text: 'Living Area / Artchitecture',
        image: 'project_grid5.jpg'
      },
      {
        header: 'System Table',
        text: 'Living Area / Artchitecture',
        image: 'project_grid6.jpg'
      },
      {
        header: 'Modern Living Area',
        text: 'Living Area / Artchitecture',
        image: 'project_grid7.jpg'
      },
      {
        header: 'Modern Living Area',
        text: 'Living Area / Artchitecture',
        image: 'project_grid8.jpg'
      }
    ]
  },
  getters: {
    getModernKitchen: state => state.modernKitchen,
    getArticlesBlog: state => state.articlesBlog,
    getSlider: state => state.slider,
    getProjectBedroom: state => state.projectBedroom,
    getProjectKitchen: state => state.projectKitchen,
    getProjectBathroom: state => state.projectBathroom,
    getProjectLivingArea: state => state.projectLivingArea
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

