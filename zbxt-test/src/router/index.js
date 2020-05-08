import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Environment from '../components/Environment'
import ErrorComponent from '../views/ErrorComponent.vue'
import Species from '../components/Species'
import Classes from '../components/Classes'
import Classroom from '../components/Classroom'
import Topic from '../components/Topic'
import StudentSub from '../components/StudentSub'
import AddEnvironment from '../components/Environment/AddEnvironment'
import EditEnvironment from '../components/Environment/EditEnvironment'
import AddSpecies from '../components/Species/AddSpecies'
import SpeciesRelations from '../components/Species/SpeciesRelations'
import EditSpecies from '../components/Species/EditSpecies'
import AddClasses from '../components/Classes/AddClasses'
import EditClasses from '../components/Classes/EditClasses'
import AddClassroom from '../components/Classroom/AddClassroom'
import EditClassroom from '../components/Classroom/EditClassroom'
import AddTopic from '../components/Topic/AddTopic'
import EditTopic from '../components/Topic/EditTopic'
import HwTopic from '../components/Topic/HwTopic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/environment',
        component: Environment
      }, {
        path: '/home/species',
        component: Species
      },
      {
        path: '/home/classes',
        component: Classes
      },
      {
        path: '/home/classroom',
        component: Classroom
      },
      {
        path: '/home/topic',
        component: Topic
      },
      {
        path: '/home/studentSub',
        component: StudentSub
      },
      {
        path: '/home/environment/addEnvironment',
        component: AddEnvironment
      },
      {
        path: '/home/environment/editEnvironment',
        component: EditEnvironment
      },
      {
        path: '/home/species/addspecies',
        component: AddSpecies
      },
      {
        path: '/home/species/speciesrelations',
        component: SpeciesRelations
      },
      {
        path: '/home/species/editspecies',
        component: EditSpecies
      },
      {
        path: '/home/classes/addclasses',
        component: AddClasses
      },
      {
        path: '/home/classes/editclasses',
        component: EditClasses
      },
      {
        path: '/home/classroom/addclassroom',
        component: AddClassroom
      },
      {
        path: '/home/classroom/editclassroom',
        component: EditClassroom
      },
      {
        path: '/home/topic/addtopic',
        component: AddTopic
      },
      {
        path: '/home/topic/edittopic',
        component: EditTopic
      },
      {
        path: '/home/topic/hwtopic',
        component: HwTopic
      }

    ]
  },
  {
    path: '/',
    redirect: '/home/environment' // 重定向
  },
  {
    path: '*',
    component: ErrorComponent
  }
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
