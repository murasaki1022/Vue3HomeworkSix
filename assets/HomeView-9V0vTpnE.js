import{d as $,m as H,a as b,_ as i,o as u,c as d,b as r,t as k,e as n,w as c,f as s,r as a}from"./index-4uZEpH3S.js";const l=$("counter",{state:()=>({count:0}),actions:{increment(){this.count+=1}}}),S={name:"HelloWorld",data(){return{}},methods:{...H(l,["increment"])},computed:{...b(l,["count"])}};function V(t,o,m,p,_,f){return u(),d("div",null,[r("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...e)=>t.increment&&t.increment(...e))},"count is "+k(t.count),1)])}const W=i(S,[["render",V]]),v={components:{HelloWorld:W}},w={class:"home"},x=r("h1",null,"Hello, This is Home Page.",-1),y=r("hr",null,null,-1);function B(t,o,m,p,_,f){const e=a("RouterLink"),h=a("HelloWorld");return u(),d("div",w,[x,n(e,{to:"/"},{default:c(()=>[s("Home")]),_:1}),s(" | "),n(e,{to:"/about"},{default:c(()=>[s("About")]),_:1}),y,n(h)])}const N=i(v,[["render",B]]);export{N as default};
