import Alpha from "../components/Alpha"
import Beta from "../components/Beta"
import Home from "../components/Home"

export default [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/G1',
    name: 'Alpha',
    component: Alpha
  },
  {
    path: '/G2',
    name: 'Beta',
    component: Beta
  }
]
