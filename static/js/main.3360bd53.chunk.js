(this.webpackJsonpnctstats=this.webpackJsonpnctstats||[]).push([[0],{32:function(e,t,n){e.exports=n(43)},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"BLOCK",(function(){return w})),n.d(a,"BOUNTY",(function(){return C})),n.d(a,"ASSERTION",(function(){return M})),n.d(a,"REVEAL",(function(){return S})),n.d(a,"VOTE",(function(){return j})),n.d(a,"QUORUM",(function(){return T})),n.d(a,"SETTLED",(function(){return I})),n.d(a,"INITIALIZED_CHANNEL",(function(){return D}));var r,c=n(0),l=n.n(c),o=n(18),u=n.n(o),i=(n(37),n(3)),m=n(15),s=n(10),d=n(30),E=n(11),h=n(20),f=n(8),v=n(13),b=n(12),y=n(9),O=function e(t){Object(y.a)(this,e),this.timestamp=Date.now(),this.message=t,this.block_number=t.data.number},_=function e(t){Object(y.a)(this,e),this.timestamp=Date.now(),this.message=t,this.block_number=t.block_number,this.txhash=t.txhash},p=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).guid=e.data.guid,a.author=e.data.author,a.amount=e.data.amount/Math.pow(10,18),a}return n}(_),g=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).bounty_guid=e.data.bounty_guid,a.author=e.data.author,a.bid=e.data.bid/Math.pow(10,18),a}return n}(_),N=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).bounty_guid=e.data.bounty_guid,a.author=e.data.author,a.verdict=e.data.verdicts[0],a}return n}(_),w="block",C="bounty",M="assertion",S="Reveal",j="Vote",T="Quorum",I="settled_bounty",D="Initialized Channel",k=function(e,t){t.count+=1,t.last=e,t.messages=[e].concat(Object(f.a)(t.messages.slice(0,20)))},x=Object(s.c)((r={},Object(E.a)(r,"active",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVATE":return t.community_url;default:return e}})),Object(E.a)(r,"community",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(h.a)(e,(function(e){switch(t.type){case"COMMUNITY_CONNECT":return void(e[t.community_url]={community_url:t.community_url,is_connected:!1,connection:{initiated:Date.now(),succeded:null,closed:null,errors:[]},messages:{last:null,last_error:null}});case"COMMUNITY_CONNECT__SUCCEEDED":return e[t.community_url].is_connected=!0,void(e[t.community_url].connection.succeded=Date.now());case"COMMUNITY_CONNECTION__CLOSED":return e[t.community_url].is_connected=!1,void(e[t.community_url].connection.closed=Date.now());case"COMMUNITY_CONNECTION__ERROR":return void e[t.community_url].connection.errors.push({timestamp:Date.now(),event:t.event});case"COMMUNITY_CONNECTION_MESSAGE":return void(e[t.community_url].messages.last={timestamp:Date.now(),event:t.event});case"COMMUNITY_CONNECTION_MESSAGE__SUCCEEDED":return;case"COMMUNITY_CONNECTION_MESSAGE__FAILED":return void(e[t.community_url].messages.last_error={timestamp:Date.now(),err:t.err});default:return}}))})),Object(E.a)(r,"messages",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(h.a)(e,(function(e){switch(t.type){case"COMMUNITY_CONNECT":return void(e[t.community_url]=Object.keys(a).reduce((function(e,t){return e[a[t]]={count:0,last:null,messages:[]},e}),{}));case"COMMUNITY_CONNECTION_MESSAGE__SUCCEEDED":var n,r;switch(t.data.event){case w:return n=new O(t.data),r=e[t.community_url][w],void k(n,r);case C:return n=new p(t.data),r=e[t.community_url][C],k(n,r),void(r.total_amount=(r.total_amount||0)+n.amount);case M:return n=new g(t.data),r=e[t.community_url][M],k(n,r),void(r.total_bid=(r.total_bid||0)+n.bid);case S:return n=new N(t.data),r=e[t.community_url][S],void k(n,r);case I:return n=new n.MessageSettled(t.data),r=e[t.community_url][I],k(n,r),void(r.total_payout=(r.total_payout||0)+n.payout);default:return}default:return}}))})),r)),U=function(e,t){return x(e,t)},A=function(){var e=Object(s.a)(d.a),t=Object(s.d)(e,window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e});return Object(s.e)(U,void 0,t)}(),W=n(31),L=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).state={hasError:!1,error:null},a}return Object(W.a)(n,[{key:"render",value:function(){return this.state.hasError?l.a.createElement("h1",null,"Something went wrong. Please reload the page"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),n}(l.a.Component),Y=n(2),R=function(e){return l.a.createElement("svg",{id:"polyswarm-logo",viewBox:"0 0 34 32"},l.a.createElement("path",{fill:e.fill,d:"M3.624 8.457h16.707c2.5 0 4.534 2.018 4.534 4.497s-2.034 4.497-4.534 4.497h-9.040c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h9.039c3.924 0 7.116-3.166 7.116-7.058s-3.192-7.058-7.116-7.058h-16.706c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28z"}),l.a.createElement("path",{fill:e.fill,d:"M20.331 0h-6.479c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h6.479c5.778 0 10.479 4.662 10.479 10.394s-4.701 10.393-10.479 10.393h-16.46c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h16.459c7.202 0 13.060-5.811 13.060-12.954s-5.858-12.954-13.060-12.954z"}),l.a.createElement("path",{fill:e.fill,d:"M12.846 12.954c0-0.706-0.579-1.28-1.291-1.28h-3.146c-0.712 0-1.291 0.574-1.291 1.28 0 0.709 0.571 1.28 1.043 1.28h3.146c0.906 0 1.539-0.527 1.539-1.28z"}),l.a.createElement("path",{fill:e.fill,d:"M8.76 29.243h-7.469c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h7.469c0.712 0 1.291-0.574 1.291-1.28s-0.579-1.28-1.291-1.28z"}))},H=function(e){return l.a.createElement("svg",{viewBox:"0 0 ".concat(e.W," ").concat(e.H),preserveAspectRatio:"none",style:{width:"100%",height:"100%"}},e.children)},P=function(e){var t=e.W-e.w-(e.w+e.gapW)*(e.noOfDataPoints-e.currentDataPointIndex-1);return l.a.createElement("path",{d:"M ".concat(t," ").concat(e.H," v -").concat(e.h," h ").concat(e.w," v ").concat(e.h," Z"),fill:e.fill})},F=function(e){var t=e.maxNoOfDataPoints*(e.w+e.gapW)-e.gapW;return l.a.createElement(H,{W:t,H:e.H},e.data.map((function(n,a){return l.a.createElement(P,{key:a,fill:e.barFill,currentDataPointIndex:a,noOfDataPoints:e.data.length,gapW:e.gapW,W:t,H:e.H,w:e.w,h:n.h})})),l.a.createElement("path",{d:"M 0 ".concat(e.H," m 0 -").concat(e.avg," l ").concat(t," 0"),stroke:e.avgLineStrokeColor,strokeWidth:e.avgLineStrokeWidth}))};F.defaultProps={avgLineStrokeColor:"#7bfa7f",barFill:"#6d3aec",gapW:1,w:10};var G=n(22),V=function(e){var t=e.amount.toFixed(8).split("."),n=Object(G.a)(t,2),a=n[0],r=n[1];return l.a.createElement("span",null,l.a.createElement("span",null,a),l.a.createElement("span",{style:{opacity:.64}},l.a.createElement("span",null,"."),l.a.createElement("span",null,r)),l.a.createElement("span",null,"NCT"))},B=function(e,t){return e.reduce((function(e,n){return e+n[t]}),0)/e.length||0};function z(e,t,n,a,r){var l=Object(i.c)((function(n){return n.messages[e][t].last})),o=Object(c.useState)([]),u=Object(G.a)(o,2),m=u[0],s=u[1];return Object(c.useEffect)((function(){l&&s((function(e){var t,c=e.findIndex((function(e){return e[a]===l[a]}));return-1===c?(e.length===n&&e.shift(),[].concat(Object(f.a)(e),[(t={},Object(E.a)(t,a,l[a]),Object(E.a)(t,"h",l[r]),t)])):(e[c].h+=l[r],Object(f.a)(e))}))}),[l,e,t,n,a,r]),m}var X=function(e){var t=z(e.community,M,20,"block_number","bid"),n=t.length?Math.max.apply(Math,Object(f.a)(t.map((function(e){return e.h})))):0,a=B(t,"h");return l.a.createElement("div",null,l.a.createElement("div",{style:{height:"10em"}},l.a.createElement(F,{data:t,maxNoOfDataPoints:20,H:n,avg:a,avgLineStrokeWidth:2*n/120})),l.a.createElement("div",null,"average per block ",l.a.createElement(V,{amount:a})))},J=function(e){var t=z(e.community,M,250,"bounty_guid","bid"),n=t.length?Math.max.apply(Math,Object(f.a)(t.map((function(e){return e.h})))):0,a=B(t,"h");return l.a.createElement("div",null,l.a.createElement("div",{style:{height:"10em"}},l.a.createElement(F,{data:t,maxNoOfDataPoints:250,H:n,avg:a,avgLineStrokeWidth:2*n/120})),l.a.createElement("div",null,"average per bounty ",l.a.createElement(V,{amount:a})))},Q=function(e){var t=Object(i.c)((function(t){return t.messages[e.community][M].total_bid}));return l.a.createElement("div",null,l.a.createElement("div",null,"total bid"),l.a.createElement("div",null,l.a.createElement(V,{amount:t||0})))},Z=function(e){var t=Object(i.c)((function(t){return t.messages[e.community][M].count}));return l.a.createElement("div",null,l.a.createElement("div",null,"count"),l.a.createElement("div",null,t))},K=function(e){var t=Object(i.c)((function(t){return t.messages[e.community][M].messages}));return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{textAlign:"left"}},"block"),l.a.createElement("th",{style:{textAlign:"left"}},"bounty guid"),l.a.createElement("th",{style:{textAlign:"right"}},"bid"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:"".concat(Date.now(),"-").concat(e.author,"-").concat(e.bounty_guid)},l.a.createElement("td",{style:{whiteSpace:"nowrap"}},e.block_number),l.a.createElement("td",{style:{whiteSpace:"nowrap"}},e.bounty_guid),l.a.createElement("td",{style:{whiteSpace:"nowrap"}},l.a.createElement(V,{amount:e.bid})))}))))},$=function(e){var t=z(e.community,C,20,"block_number","amount"),n=t.length?Math.max.apply(Math,Object(f.a)(t.map((function(e){return e.h})))):0,a=B(t,"h");return l.a.createElement("div",null,l.a.createElement("div",{style:{height:"10em"}},l.a.createElement(F,{data:t,maxNoOfDataPoints:20,H:n,avg:a,avgLineStrokeWidth:2*n/120})),l.a.createElement("div",null,"average per block ",l.a.createElement(V,{amount:a})))},q=function(e){var t=Object(i.c)((function(t){return t.messages[e.community][C].total_amount}));return l.a.createElement("div",null,l.a.createElement("div",null,"total amount"),l.a.createElement("div",null,l.a.createElement(V,{amount:t||0})))},ee=function(e){var t=Object(i.c)((function(t){return t.messages[e.community][C].count}));return l.a.createElement("div",null,l.a.createElement("div",null,"count"),l.a.createElement("div",null,t))},te=function(e){var t=Object(i.c)((function(t){return t.messages[e.community][C].messages}));return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{textAlign:"left"}},"block"),l.a.createElement("th",{style:{textAlign:"left"}},"guid"),l.a.createElement("th",{style:{textAlign:"right"}},"bid"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:"".concat(Date.now(),"-").concat(e.guid)},l.a.createElement("td",{style:{whiteSpace:"nowrap"}},e.block_number),l.a.createElement("td",{style:{whiteSpace:"nowrap"}},e.guid),l.a.createElement("td",{style:{whiteSpace:"nowrap"}},l.a.createElement(V,{amount:e.amount})))}))))},ne=function(e){return l.a.createElement("div",{style:{minWidth:"1.618em"}})},ae=function(e){return l.a.createElement("div",{style:{height:"1em"}})},re=function(e){var t=Object(i.c)((function(e){return e.active})),n=Object(i.c)((function(e){return e.community[t].is_connected}));return l.a.createElement("section",null,l.a.createElement("header",{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"0.618em 1.618em"}},l.a.createElement("div",{style:{background:"#6d3aec",display:"inline-block",padding:"1em",borderRadius:"50%"}},l.a.createElement("div",{style:{height:25.6,width:34*.8}},l.a.createElement(R,{fill:"#ffffff"}))),l.a.createElement(ne,null),l.a.createElement("div",{style:{backgroundColor:"#6d3aec",color:"#ffffff",fontWeight:500,border:"1px solid ".concat("#6d3aec"),borderRadius:"2em",display:"flex",flexDirection:"row",alignItems:"center",padding:"0.382em 1.618em"}},l.a.createElement("span",{style:{backgroundColor:n?"#7bfa7f":"#f00",borderRadius:"50%",display:"inline-block",width:"1em",height:"1em",animation:n&&"beacon 1.2s infinite ease-in-out"}}),l.a.createElement("div",{style:{minWidth:"0.618em"}}),l.a.createElement("span",{style:{whiteSpace:"nowrap"}},t))),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"}},l.a.createElement(ne,null),l.a.createElement("div",null,l.a.createElement("h3",null,"bounties"),l.a.createElement($,{community:t}),l.a.createElement(ae,null),l.a.createElement(ee,{community:t}),l.a.createElement(ae,null),l.a.createElement(q,{community:t}),l.a.createElement(ae,null),l.a.createElement(te,{community:t})),l.a.createElement(ne,null),l.a.createElement("div",null,l.a.createElement("h3",null,"assertions"),l.a.createElement(X,{community:t}),l.a.createElement(ae,null),l.a.createElement(J,{community:t}),l.a.createElement(ae,null),l.a.createElement(Z,{community:t}),l.a.createElement(ae,null),l.a.createElement(Q,{community:t}),l.a.createElement(ae,null),l.a.createElement(K,{community:t})),l.a.createElement(ne,null)))},ce=function(e){return function(t){!function(e){return function(t){t({type:"COMMUNITY_CONNECT",community_url:e});var n=new WebSocket(e);n.onopen=function(n){t({type:"COMMUNITY_CONNECT__SUCCEEDED",community_url:e,event:n})},n.onclose=function(n){t({type:"COMMUNITY_CONNECTION__CLOSED",community_url:e,event:n})},n.onerror=function(n){t({type:"COMMUNITY_CONNECTION__ERROR",community_url:e,event:n})},n.onmessage=function(n){t({type:"COMMUNITY_CONNECTION_MESSAGE",community_url:e,event:n}),new Promise((function(e,t){try{var a;"function"===typeof(null===(a=n.data)||void 0===a?void 0:a.text)?n.data.text().then((function(t){return e(t)})).catch((function(e){return t(e)})):e(JSON.parse(n.data))}catch(r){t(r)}})).then((function(n){t({type:"COMMUNITY_CONNECTION_MESSAGE__SUCCEEDED",community_url:e,data:n})})).catch((function(n){t({type:"COMMUNITY_CONNECTION_MESSAGE__FAILED",community_url:e,err:n})}))}}}(e)(t)}},le="wss://rho.k.polyswarm.network/v1/events/?chain=side",oe=function(e){var t=Object(i.b)();return t({type:"ACTIVATE",community_url:le}),t(ce(le)),l.a.createElement(re,null)},ue=function(e){return l.a.createElement("section",null,l.a.createElement("h2",null,"404 Not Found"),l.a.createElement("div",null,l.a.createElement(m.b,{to:"/",tabIndex:"-1"},l.a.createElement("span",null,"/"))))},ie=function(e){return l.a.createElement("main",null,l.a.createElement(Y.d,null,l.a.createElement(Y.b,{exact:!0,path:"/404",component:ue}),l.a.createElement(Y.b,{exact:!0,path:"/",component:oe}),l.a.createElement(Y.b,{path:"/dashboard",component:re}),l.a.createElement(Y.a,{to:"/404"})))},me=function(e){return l.a.createElement(i.a,{store:A},l.a.createElement(m.a,{basename:"/nctstats"},l.a.createElement(L,null,l.a.createElement(ie,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.3360bd53.chunk.js.map