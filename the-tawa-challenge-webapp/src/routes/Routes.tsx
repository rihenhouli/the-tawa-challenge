import { DashboardPR, HomePagePR, ProfilePagePR } from "./PrivateRoute";
import profile_img from "../assets/profile_img.png"
import article_img from "../assets/un-journal.png"
import blog_img from "../assets/blogger.png"

export const RoutesList  = [
  {
    path: "",
    element: (
        <DashboardPR />
    ),
    name:'Dashboard',
    text:'DASHBOARD',
    parent:'main',
    absolutePath:'/dashboard',
    src: profile_img,
    access: ["administrator", "teacher","student"],
    alt:'my-dashboard'
  },
  {
    path: "profile",
    element: (
        <ProfilePagePR />
    ),
    name:'profile info',
    text:'My Profile',
    parent:'dashboard',
    absolutePath:'/dashboard/profile',
    src: profile_img,
    access: ["administrator", "teacher","student"],
    alt:'my-profile'
  },
  {
    path: "blog",
    element: (
        <ProfilePagePR />
    ),
    name:'Blog',
    text:'Blog',
    parent:'dashboard',
    absolutePath:'/dashboard/blog',
    src: blog_img,
    access: ["administrator", "teacher","student"],
    alt:'blog'
  },
  {
    path: "articles",
    element: (
        <ProfilePagePR />
    ),
    name:'my articles',
    text:'My Articles',
    parent:'dashboard',
    absolutePath:'/dashboard/articles',
    src: article_img,
    access: ["administrator", "teacher","student"],
    alt:'article-list'
  },
];

