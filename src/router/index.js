import Vue from 'vue'
import VueRouter from 'vue-router'

import RentManagement from "../components/RentManagement.vue";
import TerminateList from "../components/TerminateList.vue";
import TerminateContract from "../components/TerminateContract.vue";
import NewContract from "../components/NewContract.vue";
import RenewContract from "../components/RenewContract.vue";
import RenewContractList from "../components/RenewContractList.vue";
import Configuration from "../components/Configuration.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'configuration',
    component: Configuration
  },
  {
    path: '/rent_management',
    name: 'rent_management',
    component: RentManagement
  },
  {
    path: '/terminate_contract',
    name: 'terminate_contract',
    component:TerminateContract
  },
  {
    path: '/terminate_list',
    name: 'terminate_list',
    component:TerminateList
  },
  {
    path: '/new_contract',
    name: 'new_contract',
    component:NewContract
  },
  {
    path: '/renew_contract',
    name: 'renew_contract',
    component:RenewContract
  },
  {
    path: '/renew_contract_list',
    name: 'renew_contract_list',
    component:RenewContractList
  },
  {
    path: '/rent_management',
    name: 'rent_management',
    component:RentManagement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
