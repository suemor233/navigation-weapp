export default defineAppConfig({
  pages: ['pages/about/index', 'pages/project/index', 'pages/stack/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#1296db',
    list: [
      {
        pagePath: 'pages/about/index',
        selectedIconPath: 'images/home_select.png',
        iconPath: 'images/home.png',
        text: '关于',
      },
      {
        pagePath: 'pages/project/index',
        selectedIconPath: 'images/project_select.png',
        iconPath: 'images/project.png',
        text: '项目',
      },
      {
        pagePath: 'pages/stack/index',
        selectedIconPath: 'images/stack_select.png',
        iconPath: 'images/stack.png',
        text: '技术栈',
      },
    ],
  },
})
