(this.webpackJsonpstockalert=this.webpackJsonpstockalert||[]).push([[0],{122:function(t,e,n){"use strict";n.r(e);var r=n(4),c=n.n(r),s=n(56),i=n.n(s),o=(n(61),n(10)),a=n.n(o),u=n(12),l=n(13),p=n(14),h=n(16),f=n(15),d=(n(63),{fetchStockDetail:function(t){var e=this;return Object(u.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e.getStockDetailUrl(t.join(",")),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}});case 2:return r=n.sent,n.next=5,r.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},getProxyServer:function(){return"https://thingproxy.freeboard.io/fetch/"},getFetchViaProxy:function(t){return this.getProxyServer()+t},getStockDetailUrl:function(t){return this.getFetchViaProxy("https://bgapidatafeed.vps.com.vn/getliststockdata/"+t)}}),j=(n(55),n(3)),b=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(p.a)(n,[{key:"render",value:function(){var t="decrease";return this.props.stock.lastPrice>this.props.stock.r&&(t="increase"),Object(j.jsx)(r.Fragment,{children:Object(j.jsxs)("li",{className:t,children:[this.props.stock.sym," - ",this.props.stock.lastPrice]},this.props.stock.id)})}}]),n}(r.Component),m=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).getStockPrice=Object(u.a)(a.a.mark((function t(){var e,n,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.fetchStockDetail(["TCB","VIB","ACB","KDH"]);case 2:e=t.sent,r.setState({price:e}),n={TCB:51.3,VIB:51.1,ACB:38.7},c={TCB:50.1,VIB:50.5,ACB:34.7},s="",r.state.price.map((function(t,e){var r=parseFloat(t.lastPrice);n[t.sym]&&c[t.sym]&&(r>n[t.sym]||r<c[t.sym])&&(console.log(r),console.log(n[t.sym]),s=s+t.sym+" "+t.lastPrice+"\n")})),s&&new Notification(s);case 9:case"end":return t.stop()}}),t)}))),r.state={price:[]},"Notification"in window?"denied"!==Notification.permission&&Notification.requestPermission():alert("This browser does not support desktop notification"),r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getStockPrice(),setInterval(this.getStockPrice,8e3)}},{key:"render",value:function(){return Object(j.jsx)(r.Fragment,{children:Object(j.jsx)("div",{className:"price",children:Object(j.jsx)("ul",{children:this.state.price.map((function(t,e){return Object(j.jsx)(b,{stock:t},Math.random())}))})})})}}]),n}(r.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),s(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),k()},55:function(t,e,n){},61:function(t,e,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.c630f6dd.chunk.js.map