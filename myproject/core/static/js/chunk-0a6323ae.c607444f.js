(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a6323ae"],{bd76:function(e,s,r){"use strict";var t=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-success"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}];s["a"]=t},dc02:function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("CRow",[r("CCol",{attrs:{col:"12",xl:"8"}},[r("transition",{attrs:{name:"slide"}},[r("CCard",[r("CCardHeader",[e._v(" Users ")]),r("CCardBody",[r("CDataTable",{attrs:{hover:"",striped:"",items:e.items,fields:e.fields,"items-per-page":e.perPage,pagination:e.$options.paginationProps,"index-column":"","clickable-rows":""},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"username",fn:function(s){return[r("td",[r("strong",[e._v(e._s(s.item.username))])])]}},{key:"status",fn:function(s){return[r("td",[r("CBadge",{attrs:{color:e.getBadge(s.item.status)}},[e._v(" "+e._s(s.item.status)+" ")])],1)]}}])})],1)],1)],1)],1)],1)},a=[],n=r("bd76"),i={name:"Users",data:function(){return{items:n["a"],fields:[{key:"username",label:"Name"},{key:"registered"},{key:"role"},{key:"status"}],perPage:5}},paginationProps:{align:"center",doubleArrows:!1,previousButtonHtml:"prev",nextButtonHtml:"next"},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e,s){var r=this.userLink(s+1);this.$router.push({path:r})}}},u=i,o=r("2877"),d=Object(o["a"])(u,t,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-0a6323ae.c607444f.js.map