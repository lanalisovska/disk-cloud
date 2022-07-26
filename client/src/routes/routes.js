import Login from "../components/authorization/Login"
import Registartion from "../components/authorization/Registartion"
import Disk from "../components/disk/Disk"
import MainPage from "../components/mainPage/MainPage"
import Profile from "../components/profile/Profile"

export const RouteNames = {
  LOGIN: '/login', 
  MAIN: '/main',
  PROFILE: '/profile',
  DISK: '/disk',
  REGISTRATION: '/registration'
}

export const publicRoutes  = [
  {path: RouteNames.LOGIN, exact: true, component: Login}, 
  {path: RouteNames.REGISTRATION, exact: true, component: Registartion}
]


export const privateRoutes  = [
  {path: RouteNames.MAIN, exact: true, component: MainPage},
  {path: RouteNames.PROFILE, exact: true, component: Profile},
  {path: RouteNames.DISK, exact: true, component: Disk}
]