import{d as t,bv as e,n as s,c as a,f as r,u as _,h as E,i as n}from"./vendor.805d0475.js";import{b as O}from"./index.1b2875f3.js";import{_ as o}from"./index.afdd0a4f.js";var u,N;(N=u||(u={}))[N.PAGE_NOT_ACCESS=403]="PAGE_NOT_ACCESS",N[N.PAGE_NOT_FOUND=404]="PAGE_NOT_FOUND",N[N.ERROR=500]="ERROR",N[N.NET_WORK_ERROR=1e4]="NET_WORK_ERROR",N[N.PAGE_NOT_DATA=10100]="PAGE_NOT_DATA";const R=t({components:{CbEmpty:O},props:{status:{type:Number,default:u.PAGE_NOT_FOUND}},setup(t){const{query:a}=e(),r=s((()=>{const{status:e}=a,{status:s}=t;return Number(e)||s})),E=s((()=>{let t="";switch(_(r)){case u.PAGE_NOT_FOUND:t="抱歉，你访问的页面不存在";break;case u.PAGE_NOT_ACCESS:t="抱歉，你无权访问该页面";break;case u.ERROR:t="抱歉，服务器出错啦"}return t}));return{getStatus:r,getTitle:E}}}),A={class:"page-error"};var T=o(R,[["render",function(t,e,s,_,O,o){const u=E("CbEmpty");return n(),a("div",A,[r(u,{name:t.getStatus,title:t.getTitle},null,8,["name","title"])])}],["__scopeId","data-v-13502b3b"]]);export{T as default};