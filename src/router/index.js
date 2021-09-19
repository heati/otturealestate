import Vue from 'vue'
import VueRouter from 'vue-router'

import RentManagement from "../components/RentManagement.vue";
import TerminateList from "../components/TerminateList.vue";
import TerminateContract from "../components/TerminateContract.vue";
import NewContract from "../components/NewContract.vue";
import RenewContract from "../components/RenewContract.vue";
import RenewContractList from "../components/RenewContractList.vue";
import Configuration from "../components/Configuration.vue";
import NewContractList from "../components/NewContractList.vue";
import ManualPaymentList from "../components/ManualPaymentList.vue";
import EditPriceList from "../components/EditPriceList";
import AdvancePaymentList from "../components/AdvancePaymentList"
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
  },
  {
    path: '/new_contract_list',
    name: 'new_contract_list',
    component:NewContractList
  },
  {
    path: '/manual_payment_list',
    name: 'manual_payment_list',
    component:ManualPaymentList
  },
  {
    path: '/edit_price_list',
    name: 'edit_price_list',
    component:EditPriceList
  },
  {
    path: '/advance_payment_list',
    name: 'advance_payment_list',
    component:AdvancePaymentList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
