
const menuData = [
  {
    name: '首页',
    code: 'home',
    remark: 'home',
    link: '/',
    list: []
  },
  {
    name: '系统管理',
    code: 'systemMessage',
    remark: 'system',
    link: '',
    list: []
  },
  {
    name: '权限管理',
    code: 'authMessage',
    remark: 'auth',
    link: '',
    list: [
      {
        name: '角色管理',
        remark: 'role',
        link: '',
        list: []

      },
      {
        name: '资源管理',
        remark: 'resource',
        link: '',
      }
    ]
  },
  {
    name: '奇迹哥',
    code: 'miracle',
    remark: 'miracle',
    link: '/miracle',
    list: []
  },
  {
    name: '组件测试',
    code: 'unit',
    remark: 'unit',
    link: '/',
    list: [
      {
        name: 'canvas',
        code: 'canvas',
        link: '/unit/canvas',
        remark: 'canvas',
      },
      {
        name: '富文本',
        code: 'editor',
        remark: 'editor',
        link: '/unit/editor'
      },
      {
        name: '拖拽',
        code: 'dnd',
        remark: 'dnd',
        link: '/unit/dnd'
      }

    ]
  }
]

// 匹配菜单项目remark 对应antd icon 的 type
function getMenuIcon(name) {
  switch(name) {
    case 'system':
      return 'setting'
    case 'auth':
      return 'aliwangwang'
    case 'miracle':
      return 'thunderbolt'
    case 'home':
      return 'home'
    default:
      return 'tags'
  }
}

export {
  menuData,
  getMenuIcon
}