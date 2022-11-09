(function(){"use strict";var e={5945:function(e,t,s){var r=s(9242),o=s(3396),a=s(7139);const n={class:"h-screen"},i={class:"max-w-[90rem] my-0 mx-auto px-24 py-24"},l=(0,o._)("h1",{class:"font-semibold text-3xl text-white-600"}," Lista de pessoas ",-1),c={class:"flex justify-between items-center mt-14"},u={class:"flex flex-col w-[48%]"},p=(0,o._)("label",{class:"font-semibold text-base text-grey-300"}," Pesquisar ",-1),d={class:"flex flex-col w-[48%]"},h=(0,o._)("label",{class:"font-semibold text-base text-grey-300"}," Estado ",-1),f=(0,o._)("option",{value:""},"Todas",-1),m={class:"overflow-x-auto relative shadow-md sm:rounded-lg mt-8"},g={class:"w-full text-base text-left text-grey-300 bg-dark-400"},x=(0,o._)("thead",{class:"text-lg"},[(0,o._)("tr",null,[(0,o._)("th",{scope:"col",class:"py-3 px-6"},"Nome"),(0,o._)("th",{scope:"col",class:"py-3 px-6"},"Sexo"),(0,o._)("th",{scope:"col",class:"py-3 px-6"},"Estado"),(0,o._)("th",{scope:"col",class:"py-3 px-6"},"Ação")])],-1),w={scope:"row",class:"py-3 px-6 font-medium text-white-600 whitespace-nowrap"},b={scope:"row",class:"py-3 px-6 font-medium text-white-600 whitespace-nowrap"},v={scope:"row",class:"py-3 px-6 font-medium text-white-600 whitespace-nowrap"},y=(0,o._)("th",{scope:"row",class:"py-3 px-6 font-medium text-white-600 whitespace-nowrap"},[(0,o._)("button",{class:"bg-dark-500 rounded-lg py-0.5 px-1.5 cursor-pointer hover:brightness-75 transition-all"}," Visualizar ")],-1);function _(e,t,s,_,k,U){const S=(0,o.up)("HeaderComponent");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(S),(0,o._)("div",i,[l,(0,o._)("div",c,[(0,o._)("div",u,[p,(0,o.wy)((0,o._)("input",{type:"text",name:"",id:"",placeholder:"Nome do aluno",class:"bg-dark-500 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base",onChange:t[0]||(t[0]=(...e)=>U.onSearch&&U.onSearch(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>k.search=e)},null,544),[[r.nr,k.search]])]),(0,o._)("div",d,[h,(0,o.wy)((0,o._)("select",{type:"text",name:"",id:"",placeholder:"Nome do aluno",class:"bg-dark-500 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base cursor-pointer",onChange:t[2]||(t[2]=(...e)=>U.onSearch&&U.onSearch(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>k.searchState=e)},[f,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.state.dataUser,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.location.state},(0,a.zw)(e.location.state),1)))),128))],544),[[r.bM,k.searchState]])])]),(0,o._)("div",m,[(0,o._)("table",g,[x,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(U.onSearch(),(e=>((0,o.wg)(),(0,o.iD)("tr",{class:"border-t border-grey-300",key:e.id.value},[(0,o._)("th",w,(0,a.zw)(`${e.name.first} ${e.name.last}`),1),(0,o._)("th",b,(0,a.zw)(e.gender),1),(0,o._)("th",v,(0,a.zw)(e.location.state),1),y])))),128))])])])])])}var k=s.p+"img/logo.2c1e3b9b.svg";const U={class:"w-full bg-glass backdrop-blur-sm fixed z-10"},S=(0,o._)("div",{class:"flex items-center justify-between py-4 px-32"},[(0,o._)("img",{src:k,alt:"Logo",class:"py-1 px-2 rounded-lg bg-dark-500"}),(0,o._)("button",{class:"rounded-full w-12 h-12 bg-dark-500 flex items-center justify-center hover:brightness-75"},[(0,o._)("img",{src:"https://github.com/gafariias.png",alt:"Profile picture",class:"w-11 h-11 rounded-full"})])],-1),C=[S];function O(e,t){return(0,o.wg)(),(0,o.iD)("header",U,C)}var j=s(89);const $={},z=(0,j.Z)($,[["render",O]]);var D=z,P={name:"App",components:{HeaderComponent:D},data(){return{loading:!1,search:"",searchState:""}},created(){this.loading=!0,this.$store.dispatch("getUsers").finally((()=>{this.loading=!1}))},methods:{onSearch(){return this.search.length>0?this.$store.state.dataUser.filter((e=>(e.name.first.toUpperCase()||e.name.last.toUpperCase()).includes(this.search.toUpperCase()))):this.searchState.length>0?this.$store.state.dataUser.filter((e=>e.location.state.toUpperCase().includes(this.searchState.toUpperCase()))):this.$store.state.dataUser}}};const H=(0,j.Z)(P,[["render",_]]);var T=H,E=s(70),M=s(65),N=(0,M.MT)({state:{dataUser:[]},mutations:{storeUsers(e,t){e.dataUser=t}},actions:{getUsers({commit:e}){return E.ZP.get("https://randomuser.me/api/?results=10&nat=br").then((t=>{e("storeUsers",t.data.results)})).catch((e=>{console.log(e)}))}}});(0,r.ri)(T).use(N).mount("#app")}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,r,o,a){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<n&&(n=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/stackx_list_vue/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var u=l(s)}for(t&&t(r);c<n.length;c++)a=n[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},r=self["webpackChunkstackx_list_vue"]=self["webpackChunkstackx_list_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(5945)}));r=s.O(r)})();
//# sourceMappingURL=app.57d9c8e4.js.map