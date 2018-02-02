const routers = [{
  path: '/',
  name: 'home',
  component: (resolve) => require(['./views/index'], resolve)
}, {
  path: '/self',
  name: 'self',
  component: (resolve) => require(['./views/myself-info'], resolve)
}]

export default routers
