import{r as a,u as g,a as y,R as t}from"./Main-3aff6f9a.js";import{u as k,N}from"./index-013b343f.js";import{n as b}from"./data-d0f0558f.js";const L=()=>{const s=k(),n=a.useRef("");return a.useEffect(()=>{s.hash&&(n.current=s.hash.slice(1)),n.current&&document.getElementById(n.current)&&setTimeout(()=>{const r=document.getElementById(n.current);r&&(r.scrollIntoView({behavior:"smooth",block:"start"}),n.current="")},100)},[s]),null},C=()=>{const{theme:s}=g(),[n,r]=a.useState(!1),{activeSection:l,setActiveSection:u,setTimeOfLastClick:d}=y(),[c,f]=a.useState(!1);a.useEffect(()=>{const e=()=>{const o=window.scrollY,i=window.outerHeight*.1;r(o>=i)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),a.useEffect(()=>{const e=()=>{window.innerWidth<=1024?(f(!0),r(!1)):(f(!1),r(!0))};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]);const h=({link:e,children:o,linkEn:i})=>{const[v,w]=a.useState(!1),m=v||i===l,E=m?"transition-all duration-200 relative":"opacity-20 transition-all duration-700",p=m&&t.createElement("span",{className:"text-[--#55c9e6] absolute -left-5 top-0 max-lg:hidden",style:{color:"#55c9e6"}},"<"),x=m&&t.createElement("span",{className:"text-[--orange] absolute top-0 -right-10 max-lg:hidden",style:{color:"#55c9e6"}},"/>");return t.createElement(N,{to:e,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),className:`relative ${E}`,"aria-aria-current":e},t.createElement("span",null,p,o,x))};return t.createElement(t.Fragment,null,t.createElement(L,null),!c&&t.createElement("nav",{className:`max-lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-0 ${n&&!c?`sticky top-10 z-50 ml-auto mr-auto  w-max  px-16 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-40  bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${s==="dark"?"bg-darkblue":"bg-white"}`:""} style={{color: '#55c9e6'}}
   `},b.map((e,o)=>t.createElement(h,{key:o,link:e.hash,linkEn:e.en},e.en===l?t.createElement("div",null,t.createElement("span",{className:"text-[--orange] absolute -left-5 top-0",style:{color:"#55c9e6"}},"<"),e.en):t.createElement("div",{onClick:()=>{u(e.en),d(Date.now())}},e.en)))),c&&t.createElement("nav",{className:` max-lg:flex w-[100vw] flex-row justify-between fixed bottom-0 left-0 z-50 bg-darkblue p-10  text-center items-center transition-all ease-in-out duration-100 rounded-t-3xl bg-opacity-100 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${s==="dark"?"bg-darkblue":"bg-white"}`},b.map((e,o)=>t.createElement(h,{key:o,link:e.hash,linkEn:e.en},e.en===l?t.createElement("div",{className:"text-[3.2rem] flex flex-col items-center"}):t.createElement("div",{className:"text-[2rem] flex flex-col items-center ",onClick:()=>{u(e.en),d(Date.now()),e.en==="Home"&&document.body.scrollIntoView({behavior:"smooth",block:"start"})}})))))};export{C as default};
