webpackJsonp([2],{"3cXf":function(e,t,i){e.exports={default:i("VWiu"),__esModule:!0}},AZqi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("/p82"),n={components:{},data:function(){return{navForm:{roleType:1},menuData:JSON.parse(localStorage.getItem("menuData")),menu1:1,menu1Name:"",menu2:1,menu2Name:""}},methods:{changeNavTitle:function(){for(var e=0;e<this.menuData.length;e++){var t=this.menuData[e];if(t.index+""==this.menu1+""){this.menu1Name=t.name;for(var i=0;i<t.subList.length;i++){var s=t.subList[i];if(s.index+""==this.menu2+"")return void(this.menu2Name=s.name)}}}},changeRoleType:function(){localStorage.setItem("roleType",this.navForm.roleType),this.resetSetItem("roleType",this.navForm.roleType),this.setRole()},setRole:function(){s.a.doPost("setRole",{roleType:this.navForm.roleType}).then(function(e){})},openWebase:function(){var e=this;s.a.doGet("checkWebase").then(function(t){t.data.result?window.open("webase-browser/index.html"):e.$alert('<p>您还没有配置安装启动webase服务! &nbsp;<a target="_blank" href="https://weidentity.readthedocs.io/zh_CN/latest/docs/weidentity-installation-by-web.html#fisco-bcos-browser">安装教程</a></p>',"温馨提示",{dangerouslyUseHTMLString:!0}).catch(function(){})})},openLog:function(){var e=window.open("","logWin","width=800,height=500,top=100,left=380");"about:blank"===e.location.href?e=window.open("#/log/","logWin","width=800,height=500,top=100,left=380"):e.focus()}},mounted:function(){var e=this;window.addEventListener("setItem",function(){e.menu1=sessionStorage.getItem("menu1"),e.menu2=sessionStorage.getItem("menu2"),e.changeNavTitle()});var t=localStorage.getItem("roleType");t=null===t?2:t,this.navForm.roleType=parseInt(t),this.changeRoleType()}},M={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"application_header"},[i("div",{staticClass:"header_left_part"},[i("div",{staticClass:"nav_link"},[e._m(0),e._v(" "),""!=e.menu1Name?i("span",{staticClass:"nav_icon"},[e._v("/")]):e._e(),e._v(" "),i("a",[i("span",{staticClass:"nav_title_last"},[e._v(e._s(e.menu1Name))])]),e._v(" "),""!=e.menu2Name?i("span",{staticClass:"nav_icon"},[e._v("/")]):e._e(),e._v(" "),i("a",[i("span",{staticClass:"nav_title_last"},[e._v(e._s(e.menu2Name))])])])]),e._v(" "),i("div",{staticClass:"header_right_part"},[i("div",{staticClass:"nav_link"},[i("a",{on:{click:function(t){return e.openLog()}}},[i("span",[e._v("查看后台日志")])]),e._v(" "),i("a",{on:{click:function(t){return e.openWebase()}}},[i("span",[e._v("区块链浏览器")])])]),e._v(" "),i("div",{staticClass:"role_select"},[i("el-form",{ref:"navForm",attrs:{"label-position":"right",model:e.navForm,"label-width":"220px"}},[i("el-select",{on:{change:e.changeRoleType},model:{value:e.navForm.roleType,callback:function(t){e.$set(e.navForm,"roleType",t)},expression:"navForm.roleType"}},[i("el-option",{attrs:{label:"联盟链委员会管理员",value:1}}),e._v(" "),i("el-option",{attrs:{label:"非联盟链委员会管理员",value:2}})],1)],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",[t("span",{staticClass:"nav_title_last"},[this._v("首页")])])}]},L=i("C7Lr")(n,M,!1,null,null,null).exports,a=i("3cXf"),u=i.n(a),o={data:function(){return{menuData:[{index:1,name:"配置管理",icon:"el-icon-menu-self el-icon-menu-1",subList:[{index:1,name:"配置区块链节点",linkName:"nodeConfig",isShow:!0},{index:2,name:"配置主群组",linkName:"groupConfig",isShow:!0},{index:3,name:"配置数据库",linkName:"dbConfig",isShow:!0},{index:4,name:"配置WeID账户",linkName:"accountConfig",isShow:!0}]},{index:2,name:"智能合约管理",icon:"el-icon-menu-self el-icon-menu-2",subList:[{index:1,name:"部署WeIdentity智能合约",linkName:"deployWeId",isShow:!0},{index:2,name:"部署存证智能合约",linkName:"deployEvidence",isShow:!0}]},{index:3,name:"功能管理",icon:"el-icon-menu-self el-icon-menu-3",subList:[{index:1,name:"数据概览",linkName:"dataPanle",isShow:!0},{index:2,name:"WeID管理",linkName:"weidList",isShow:!0},{index:3,name:"权威凭证发行者",linkName:"issuerList",isShow:!0},{index:4,name:"白名单功能管理",linkName:"whiteList",isShow:!0},{index:5,name:"凭证模板(CPT)管理",linkName:"cptList",isShow:!0},{index:6,name:"披露策略管理",linkName:"policyList",isShow:!0}]},{index:4,name:"异步上链管理",icon:"el-icon-menu-self el-icon-menu-4",subList:[{index:1,name:"存证异步上链管理",linkName:"asynEvidenceList",isShow:!0}]},{index:5,name:"配置检查管理",icon:"el-icon-menu-self el-icon-menu-5",subList:[{index:1,name:"检查数据库配置",linkName:"dbCheck",isShow:!0}]}],openeds:[0],actives:"",roleType:localStorage.getItem("roleType")}},methods:{link:function(e,t,i){this.resetSetItem("menu1",e),this.resetSetItem("menu2",t),this.$router.push({name:i}),localStorage.setItem("linkName",i)},activeMenu:function(){this.openeds[0]=parseInt(sessionStorage.getItem("menu1")),this.actives=this.openeds[0]+"-"+sessionStorage.getItem("menu2"),this.roleType=localStorage.getItem("roleType"),this.menuData[2].subList[3].isShow="1"===this.roleType},checkGuideStatus:function(){var e=this;s.a.doGet("getGuideStatus").then(function(t){""===t.data.result&&e.$router.push({name:"step"})})}},computed:{},watch:{},created:function(){var e=this;this.checkGuideStatus(),localStorage.setItem("menuData",u()(this.menuData)),window.addEventListener("setItem",function(){e.activeMenu()})},mounted:function(){this.resetSetItem("menu1",sessionStorage.getItem("menu1")),this.resetSetItem("menu2",sessionStorage.getItem("menu2")),("null"===sessionStorage.getItem("menu2")||this.$route.path.endsWith("deployWeId"))&&(this.link(2,1,"deployWeId"),this.activeMenu())}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"sideBar"}},[e._m(0),e._v(" "),i("el-menu",{ref:"kzMenu",staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#545c64","text-color":"#fff","default-openeds":e.openeds,"default-active":e.actives,"active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.menuData,function(t){return i("el-submenu",{key:t.name,attrs:{index:t.index}},[i("template",{slot:"title"},[i("i",{class:t.icon}),e._v(" "),i("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.subList,function(s){return!0===s.isShow?i("el-menu-item",{key:s.name,attrs:{index:t.index+"-"+s.index},on:{click:function(i){return e.link(t.index,s.index,s.linkName)}}},[e._v(e._s(s.name))]):e._e()})],2)}),e._v(" "),i("br"),i("br")],2)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("a",{attrs:{id:"a_index"}},[t("img",{staticClass:"logo_image icon_question",attrs:{src:i("X19A"),alt:"AdminLTE Logo"}}),this._v(" "),t("span",{staticClass:"logo_title icon_question"},[this._v("网页管理工具")])])])}]},c={components:{headerBar:L,sideBar:i("C7Lr")(o,l,!1,null,null,null).exports,footBar:i("mzkE").a}},j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"application",class:this.blackTheme},[t("table",{staticClass:"t_table",attrs:{cellpadding:"0",cellspacing:"0"}},[t("tr",[t("td",{staticClass:"t_sidebar",attrs:{rowspan:"3"}},[t("sideBar")],1),this._v(" "),t("td",{staticClass:"t_header"},[t("headerBar")],1)]),this._v(" "),t("tr",[t("td",{staticClass:"t_main t_boder"},[t("router-view")],1)]),this._v(" "),t("tr",[t("td",{staticClass:"t_footer"},[t("footBar")],1)])])])},staticRenderFns:[]},N=i("C7Lr")(c,j,!1,null,null,null);t.default=N.exports},VWiu:function(e,t,i){var s=i("DH3n"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},X19A:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjQ4IDQ2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDggNDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRDdEOEQ5O30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMi4zMiwyMS4zYzAuNzEtMi4yOSwzLjE5LTMuODksNS41NS0zLjk1YzEuOTgtMC4wNSwyLjg0LDAuMzksMy42NywxLjE2YzEuMywxLjE4LDEuNTksMi43OSwxLjU5LDIuNzkKCUgxMjIuMzJ6IE0xMjguNDYsMTEuOTljLTcuNTMsMC4wMy0xMi42Myw0LjM5LTEzLjUyLDEyLjRjLTAuNTIsNy44NCw0LjgzLDExLjk3LDExLjA2LDEyLjM0YzQuMDIsMC4yMyw3LjUyLTAuNzgsMTAuNzktMi44NgoJbDAuNjQtNC41MmMwLDAtNC4xOSwyLjcxLTkuNzksMi4xMWMtNC4wNC0wLjQyLTYuMTEtMi42Ny02LjMyLTUuMTFoMTcuMmMwLDAsMC4zNy0yLjQ3LDAuMzgtMy45MgoJQzEzOC45MiwxNy4zOCwxMzYuMTIsMTIuMDUsMTI4LjQ2LDExLjk5Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTQuODgsMTIuMDNjLTAuMDMsMC0xMS45Ny0wLjAyLTExLjk3LTAuMDJsLTQuMzEsMjQuNzRoNy43bDMuMTYtMTguNTdoNC41MmMxLjM2LDAsMi4wNCwwLjk4LDEuODksMi4xMwoJbC0yLjg2LDE2LjQ0aDcuNzFsMi41OS0xNS4xNUMxNjQuNTEsMTYuNDcsMTYxLjAyLDExLjcsMTU0Ljg4LDEyLjAzIi8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODQuODYsMjkuNTFjLTEuNzcsMC41Mi00LjgxLDEuMTgtNi4yLDEuMThjLTEuMywwLTIuMTYtMC4zNC0xLjc2LTIuNmwxLjc2LTEwLjFoNy45M2wxLjA1LTUuOTdoLTcuOTMKCWwxLjY0LTkuMzZoLTcuN2wtMS42NCw5LjM2aC01LjI1bC0xLjA2LDUuOTdoNS4yNWwtMi4wNiwxMS43NGMtMC45OCw1LjU4LDIuNDIsNy4wMiw2Ljk0LDcuMDJjMS41NiwwLDUuNDctMC41NCw3LjktMC45OQoJTDE4NC44NiwyOS41MXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyMC43MSwyOS41MWMtMS43NywwLjUyLTQuODEsMS4xOC02LjIsMS4xOGMtMS4zLDAtMi4xNi0wLjM0LTEuNzYtMi42bDEuNzctMTAuMWg3LjkzbDEuMDUtNS45N2gtNy45MwoJbDEuNjQtOS4zNmgtNy43bC0xLjY0LDkuMzZoLTUuMjVsLTEuMDYsNS45N2g1LjI1bC0yLjA2LDExLjc0Yy0wLjk4LDUuNTgsMi40Miw3LjAyLDYuOTUsNy4wMmMxLjU2LDAsNS40Ny0wLjU0LDcuOS0wLjk5CglMMjIwLjcxLDI5LjUxeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQwLjgsMTEuOTRsLTMuMDksMTcuNTNjLTEuMjEsMC4yMi0yLjQ1LDAuMzYtMy41MiwwLjM2Yy0zLjY5LDAtNC4yNy0yLjYxLTMuMzgtNy42NGwxLjgtMTAuMjVoLTcuMgoJbC0xLjg2LDEwLjU2Yy0xLjY1LDkuMzYsMi42NywxMi45MSw5LjU1LDEyLjkxYzAuOTUsMCwyLjIyLTAuMDksMy40Ny0wLjI3Yy0wLjczLDQuMTQtMi43Niw1LjE4LTQuODMsNS4xOAoJYy0yLjIyLDAtNC45My0wLjI3LTguMjUtMC44NGwtMS4wMSw1LjcyYzMuODUsMC42Niw1LjkyLDAuNyw4LjIzLDAuN2M3Ljc5LDAsMTItNCwxMy4yMi0xMC45M0wyNDgsMTEuOTRIMjQwLjh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOTAuMTgsMjEuNzZsLTIuNjQsMTVoNy40NGw0LjM2LTI0LjcyaC03LjQ0TDE5MC4xOCwyMS43NnogTTE5OS45NSwzLjY5Yy0wLjUtMC42Ny0xLjM3LTEtMi42LTEKCWMtMS4yLDAtMi4zNCwwLjMtMy4xMiwwLjk2Yy0wLjc4LDAuNjYtMS4xNCwxLjYzLTEuMzksMi44MWMtMC4yNSwxLjEzLTAuMSwyLjAyLDAuNDIsMi42OGMwLjUzLDAuNjQsMS4zNiwwLjk3LDIuNDksMC45NwoJYzEuMTksMCwyLjMtMC4yNSwzLjEtMC44OWMwLjgxLTAuNjQsMS4yMS0xLjU5LDEuNDYtMi43NUMyMDAuNTcsNS4yNywyMDAuNDUsNC4zNSwxOTkuOTUsMy42OSIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTcuNDEsMTAuNDRjLTguMTEsMC4wMy0xMy42MSw0Ljc0LTE0LjU3LDEzLjM2Yy0wLjU2LDguNDUsNS4yLDEyLjkxLDExLjkyLDEzLjMKCWM0LjMzLDAuMjUsOC4xMS0wLjg0LDExLjYyLTMuMDhsMC42OS00Ljg3YzAsMC00LjUxLDIuOTEtMTAuNTUsMi4yN2MtNC4zNS0wLjQ2LTYuNTgtMi44OC02LjgxLTUuNTFoMTguNTRjMCwwLDAuNC0yLjY2LDAuNDEtNC4yMgoJQzY4LjY4LDE2LjI1LDY1LjY2LDEwLjUxLDU3LjQxLDEwLjQ0eiBNNTAuNzgsMjAuNDhjMC43OC0yLjQ4LDMuNDQtNC4xOSw1Ljk4LTQuMjZjMi4xMy0wLjA1LDMuMDYsMC40MiwzLjk2LDEuMjUKCWMxLjQsMS4yNywxLjcyLDMuMDIsMS43MiwzLjAySDUwLjc4eiIvPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjQ1LjA5LDAuMzYgMzYuNzksMC4zNiAzMi44NywyMi44NCAyNy43OSwxMC40IDE5LjUsMTAuNCAxMC44OSwyMi4yMiAxNC43LDAuMzYgNi40MSwwLjM2IDAsMzcuMSAKCTAuMDUsMzcuMSA4LjI5LDM3LjEgOC4zLDM3LjEgOC4zLDM3LjA5IDIyLjU0LDE3Ljg0IDMwLjM4LDM3LjA5IDMwLjM4LDM3LjEgMzAuMzksMzcuMSAzOC42OCwzNy4xIDM4LjY5LDM3LjEgMzguNjgsMzcuMDggIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNzYuNDMsMC4zNiA2OS45NiwzNy4wOSA3OC40NCwzNy4wOSA4NC45MiwwLjM2ICIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAyLjMsMzAuOThjLTAuNiwwLjE3LTEuMTQsMC4yNy0xLjYxLDAuMzJjLTAuNDgsMC4wNS0xLDAuMDctMS41NiwwLjA3Yy0wLjk0LDAtMS43OC0wLjEyLTIuNTQtMC4zNwoJYy0wLjc2LTAuMjQtMS4zOC0wLjY1LTEuODYtMS4yMWMtMC40OC0wLjU2LTAuODEtMS4zMS0wLjk3LTIuMjRjLTAuMTctMC45NC0wLjEzLTIuMDgsMC4xMS0zLjQzYzAuMTktMS4wOCwwLjUtMi4xMywwLjk0LTMuMTMKCWMwLjQzLTEsMC45OC0xLjg3LDEuNjQtMi42MWMwLjY3LTAuNzQsMS40NS0xLjMzLDIuMzUtMS43OGMwLjktMC40NCwxLjktMC42NywzLTAuNjdjMC42MywwLDEuMTUsMC4wMiwxLjU2LDAuMDcKCWMwLjQxLDAuMDUsMC45MywwLjE2LDEuNTcsMC4zMkwxMDIuMywzMC45OHogTTEwNy43NCwwLjQ4bC0xLjg1LDEwLjQ5Yy0wLjU3LTAuMTYtMS4xOC0wLjI3LTEuODItMC4zMgoJYy0wLjY0LTAuMDUtMS4yNi0wLjA4LTEuODYtMC4wOGMtMiwwLTMuODgsMC4zNS01LjY1LDEuMDZjLTEuNzYsMC43MS0zLjMzLDEuNjctNC43LDIuODhjLTEuMzcsMS4yMi0yLjUxLDIuNjYtMy40Miw0LjMxCgljLTAuOTEsMS42Ni0xLjU0LDMuNDMtMS44OCw1LjNjLTAuNDIsMi4zNy0wLjQyLDQuMzcsMCw2LjAxYzAuNDIsMS42NCwxLjE2LDIuOTgsMi4yMSw0LjAyYzEuMDUsMS4wNCwyLjM0LDEuNzksMy44NywyLjI3CgljMS41MywwLjQ4LDMuMTgsMC43MSw0Ljk1LDAuNzFsMTAuNjktMC4wMWw2LjQtMzYuNjVIMTA3Ljc0eiIvPgo8L3N2Zz4K"},mzkE:function(e,t,i){"use strict";var s=i("/p82"),n={data:function(){return{version:"1.0.0"}},methods:{getVersion:function(){var e=this;s.a.doGet("getVersion").then(function(t){0===t.data.errorCode&&(e.version=t.data.result)})}},mounted:function(){this.getVersion()}},M={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footBar",attrs:{id:"footBar"}},[this._m(0),this._v(" "),t("span",{staticClass:"version"},[t("b",[this._v("Version")]),this._v(" "),t("span",[this._v(this._s(this.version))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"copyright"},[t("strong",[this._v("Copyright © 2019-2020 "),t("a",{attrs:{href:"https://github.com/WeBankFinTech",target:"_blank"}},[this._v("WeBankFinTech")]),this._v("..")]),this._v(" All rights reserved.\n  ")])}]},L=i("C7Lr")(n,M,!1,null,null,null);t.a=L.exports}});