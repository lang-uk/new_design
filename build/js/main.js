(()=>{"use strict";var t={206:(t,e)=>{var n=window,i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.msRequestAnimationFrame||function(t){return setTimeout(t,16)},a=window,o=a.cancelAnimationFrame||a.mozCancelAnimationFrame||function(t){clearTimeout(t)};function r(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function s(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function h(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function p(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var m="classList"in document.createElement("_"),g=m?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},y=m?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},x=m?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function b(t,e){return t.hasAttribute(e)}function w(t,e){return t.getAttribute(e)}function C(t){return void 0!==t.item}function M(t,e){if(t=C(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function T(t,e){t=C(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function S(t,e){"none"!==t.style.display&&(t.style.display="none")}function A(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var o=t[a];if(void 0!==i.style[o])return o}return!1}function N(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var D=!1;try{var H=Object.defineProperty({},"passive",{get:function(){D=!0}});window.addEventListener("test",null,H)}catch(t){}var O=!!D&&{passive:!0};function k(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&O;t.addEventListener(i,e[i],a)}}function I(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&O;t.removeEventListener(n,e[n],i)}}function P(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=r({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},c={},m=t.useLocalStorage;if(m){var C=navigator.userAgent,D=new Date;try{(c=n.localStorage)?(c.setItem(D,D),m=c.getItem(D)==D,c.removeItem(D)):m=!1,m||(c={})}catch(t){m=!1}m&&(c.tnsApp&&c.tnsApp!==C&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){c.removeItem(t)})),localStorage.tnsApp=C)}var H=c.tC?s(c.tC):l(c,"tC",function(){var t=document,e=u(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r="(10px * 10)",s=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],l=0;l<3;l++)if(o=s[l],i.style.width=o,100===i.offsetWidth){a=o.replace(r,"");break}}catch(t){}return e.fake?d(e,n):i.remove(),a}(),m),O=c.tPL?s(c.tPL):l(c,"tPL",function(){var t,e=document,n=u(),i=f(n),a=e.createElement("div"),o=e.createElement("div"),r="";a.className="tns-t-subp2",o.className="tns-t-ct";for(var s=0;s<70;s++)r+="<div></div>";return o.innerHTML=r,a.appendChild(o),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):a.remove(),t}(),m),_=c.tMQ?s(c.tMQ):l(c,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=f(n),a=e.createElement("div"),o=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?d(n,i):a.remove(),"absolute"===t}(),m),q=c.tTf?s(c.tTf):l(c,"tTf",B("transform"),m),W=c.t3D?s(c.t3D):l(c,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=f(i),o=n.createElement("p"),r=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(r),i.fake?d(i,a):o.remove(),void 0!==e&&e.length>0&&"none"!==e}(q),m),z=c.tTDu?s(c.tTDu):l(c,"tTDu",B("transitionDuration"),m),j=c.tTDe?s(c.tTDe):l(c,"tTDe",B("transitionDelay"),m),F=c.tADu?s(c.tADu):l(c,"tADu",B("animationDuration"),m),X=c.tADe?s(c.tADe):l(c,"tADe",B("animationDelay"),m),V=c.tTE?s(c.tTE):l(c,"tTE",N(z,"Transition"),m),$=c.tAE?s(c.tAE):l(c,"tAE",N(F,"Animation"),m),G=n.console&&"function"==typeof n.console.warn,Q=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Y={};if(Q.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(Y[n]=i,!a||!a.nodeName)return void(G&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var K=t.responsive,J=t.nested,U="carousel"===t.mode;if(K){0 in K&&(t=r(t,K[0]),delete K[0]);var Z={};for(var tt in K){var et=K[tt];et="number"==typeof et?{items:et}:et,Z[tt]=et}K=Z,Z=null}if(U||function t(e){for(var n in e)U||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!U){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,ot=t.animateNormal}var rt,st,lt="horizontal"===t.axis,ut=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,ht=ft.outerHTML,pt=ft.children,vt=pt.length,mt=Hn(),gt=!1;K&&Zn(),U&&(ft.className+=" tns-vpfix");var yt,xt,bt,wt,Ct,Mt=t.autoWidth,Tt=Rn("fixedWidth"),Et=Rn("edgePadding"),St=Rn("gutter"),At=In(),Lt=Rn("center"),Bt=Mt?1:Math.floor(Rn("items")),Nt=Rn("slideBy"),Dt=t.viewportMax||t.fixedWidthViewportWidth,Ht=Rn("arrowKeys"),Ot=Rn("speed"),kt=t.rewind,It=!kt&&t.loop,Pt=Rn("autoHeight"),Rt=Rn("controls"),_t=Rn("controlsText"),qt=Rn("nav"),Wt=Rn("touch"),zt=Rn("mouseDrag"),jt=Rn("autoplay"),Ft=Rn("autoplayTimeout"),Xt=Rn("autoplayText"),Vt=Rn("autoplayHoverPause"),$t=Rn("autoplayResetOnVisibility"),Gt=(null,wt=Rn("nonce"),Ct=document.createElement("style"),wt&&Ct.setAttribute("nonce",wt),document.querySelector("head").appendChild(Ct),Ct.sheet?Ct.sheet:Ct.styleSheet),Qt=t.lazyload,Yt=t.lazyloadSelector,Kt=[],Jt=It?(xt=function(){if(Mt||Tt&&!Dt)return vt-1;var e=Tt?"fixedWidth":"items",n=[];if((Tt||t[e]<vt)&&n.push(t[e]),K)for(var i in K){var a=K[i][e];a&&(Tt||a<vt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Tt?Dt/Math.min.apply(null,n):Math.max.apply(null,n))}(),bt=U?Math.ceil((5*xt-vt)/2):4*xt-vt,bt=Math.max(xt,bt),Pn("edgePadding")?bt+1:bt):0,Ut=U?vt+2*Jt:vt+Jt,Zt=!(!Tt&&!Mt||It),te=Tt?Ei():null,ee=!U||!It,ne=lt?"left":"top",ie="",ae="",oe=Tt?function(){return Lt&&!It?vt-1:Math.ceil(-te/(Tt+St))}:Mt?function(){for(var t=0;t<Ut;t++)if(yt[t]>=-te)return t}:function(){return Lt&&U&&!It?vt-1:It||U?Math.max(0,Ut-Math.ceil(Bt)):Ut-1},re=Bn(Rn("startIndex")),se=re;Ln();var le,ue,ce,fe=0,de=Mt?null:oe(),he=t.preventActionWhenRunning,pe=t.swipeAngle,ve=!pe||"?",me=!1,ge=t.onInit,ye=new P,xe=" tns-slider tns-"+t.mode,be=ft.id||(ce=window.tnsId,window.tnsId=ce?ce+1:1,"tns"+window.tnsId),we=Rn("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||Mt)&&Un(),Ee=!1,Se={click:ki,keydown:function(t){t=ji(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Qe.disabled||ki(t,-1):Ye.disabled||ki(t,1))}},Ae={click:function(t){if(me){if(he)return;Hi()}for(var e=Fi(t=ji(t));e!==Ze&&!b(e,"data-nav");)e=e.parentNode;if(b(e,"data-nav")){var n=an=Number(w(e,"data-nav")),i=Tt||Mt?n*vt/en:n*Bt;Oi(Ie?n:Math.min(Math.ceil(i),vt-1),t),on===n&&(fn&&qi(),an=-1)}},keydown:function(t){t=ji(t);var n=e.activeElement;if(b(n,"data-nav")){var i=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),o=Number(w(n,"data-nav"));i>=0&&(0===i?o>0&&zi(Ue[o-1]):1===i?o<en-1&&zi(Ue[o+1]):(an=o,Oi(o,t)))}}},Le={mouseover:function(){fn&&(Pi(),dn=!0)},mouseout:function(){dn&&(Ii(),dn=!1)}},Be={visibilitychange:function(){e.hidden?fn&&(Pi(),pn=!0):pn&&(Ii(),pn=!1)}},Ne={keydown:function(t){t=ji(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&ki(t,0===e?-1:1)}},De={touchstart:Gi,touchmove:Qi,touchend:Ki,touchcancel:Ki},He={mousedown:Gi,mousemove:Qi,mouseup:Ki,mouseleave:Ki},Oe=Pn("controls"),ke=Pn("nav"),Ie=!!Mt||t.navAsThumbnails,Pe=Pn("autoplay"),Re=Pn("touch"),_e=Pn("mouseDrag"),qe="tns-slide-active",We="tns-slide-cloned",ze="tns-complete",je={load:function(t){li(Fi(t))},error:function(t){var e;e=Fi(t),y(e,"failed"),ui(e)}},Fe="force"===t.preventScrollOnTouch;if(Oe)var Xe,Ve,$e=t.controlsContainer,Ge=t.controlsContainer?t.controlsContainer.outerHTML:"",Qe=t.prevButton,Ye=t.nextButton,Ke=t.prevButton?t.prevButton.outerHTML:"",Je=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ue,Ze=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Mt?vt:Ui(),nn=0,an=-1,on=Dn(),rn=on,sn="tns-nav-active",ln="Carousel Page ",un=" (Current Slide)";if(Pe)var cn,fn,dn,hn,pn,vn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",yn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Re||_e)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Mt||An(we||Te),q&&(ne=q,ie="translate",W?(ie+=lt?"3d(":"3d(0px, ",ae=lt?", 0px, 0px)":", 0px)"):(ie+=lt?"X(":"Y(",ae=")")),U&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(Pn("gutter"),ut.className="tns-outer",ct.className="tns-inner",ut.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be),xe+=O||Mt?" tns-subpixel":" tns-no-subpixel",xe+=H?" tns-calc":" tns-no-calc",Mt&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,ft.className+=xe,U?((rt=e.createElement("div")).id=be+"-mw",rt.className="tns-ovh",ut.appendChild(rt),rt.appendChild(ct)):ut.appendChild(ct),Pt&&((rt||ct).className+=" tns-ah"),dt.insertBefore(ut,ft),ct.appendChild(ft),v(pt,(function(t,e){y(t,"tns-item"),t.id||(t.id=be+"-item"+e),!U&&ot&&y(t,ot),M(t,{"aria-hidden":"true",tabindex:"-1"})})),Jt){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=Jt;a--;){var o=a%vt,r=pt[o].cloneNode(!0);if(y(r,We),T(r,"id"),i.insertBefore(r,i.firstChild),U){var s=pt[vt-1-o].cloneNode(!0);y(s,We),T(s,"id"),n.appendChild(s)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!U)for(var e=re,i=re+Math.min(vt,Bt);e<i;e++){var a=pt[e];a.style.left=100*(e-re)/Bt+"%",y(a,nt),x(a,ot)}if(lt&&(O||Mt?(h(Gt,"#"+be+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",p(Gt)),h(Gt,"#"+be,"font-size:0;",p(Gt))):U&&v(pt,(function(t,e){t.style.marginLeft=function(t){return H?H+"("+100*t+"% / "+Ut+")":100*t/Ut+"%"}(e)}))),_){if(z){var o=rt&&t.autoHeight?Fn(t.speed):"";h(Gt,"#"+be+"-mw",o,p(Gt))}o=_n(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),h(Gt,"#"+be+"-iw",o,p(Gt)),U&&(o=lt&&!Mt?"width:"+qn(t.fixedWidth,t.gutter,t.items)+";":"",z&&(o+=Fn(Ot)),h(Gt,"#"+be,o,p(Gt))),o=lt&&!Mt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(o+=zn(t.gutter)),U||(z&&(o+=Fn(Ot)),F&&(o+=Xn(Ot))),o&&h(Gt,"#"+be+" > .tns-item",o,p(Gt))}else U&&Pt&&(rt.style[z]=Ot/1e3+"s"),ct.style.cssText=_n(Et,St,Tt,Pt),U&&lt&&!Mt&&(ft.style.width=qn(Tt,St,Bt)),o=lt&&!Mt?Wn(Tt,St,Bt):"",St&&(o+=zn(St)),o&&h(Gt,"#"+be+" > .tns-item",o,p(Gt));if(K&&_)for(var r in K){r=parseInt(r);var s=K[r],l=(o="",""),u="",c="",f="",d=Mt?null:Rn("items",r),m=Rn("fixedWidth",r),g=Rn("speed",r),b=Rn("edgePadding",r),w=Rn("autoHeight",r),C=Rn("gutter",r);z&&rt&&Rn("autoHeight",r)&&"speed"in s&&(l="#"+be+"-mw{"+Fn(g)+"}"),("edgePadding"in s||"gutter"in s)&&(u="#"+be+"-iw{"+_n(b,C,m,g,w)+"}"),U&&lt&&!Mt&&("fixedWidth"in s||"items"in s||Tt&&"gutter"in s)&&(c="width:"+qn(m,C,d)+";"),z&&"speed"in s&&(c+=Fn(g)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in s||Tt&&"gutter"in s||!U&&"items"in s)&&(f+=Wn(m,C,d)),"gutter"in s&&(f+=zn(C)),!U&&"speed"in s&&(z&&(f+=Fn(g)),F&&(f+=Xn(g))),f&&(f="#"+be+" > .tns-item{"+f+"}"),(o=l+u+c+f)&&Gt.insertRule("@media (min-width: "+r/16+"em) {"+o+"}",Gt.cssRules.length)}}(),Vn();var En=It?U?function(){var t=fe,e=de;t+=Nt,e-=Nt,Et?(t+=1,e-=1):Tt&&(At+St)%(Tt+St)&&(e-=1),Jt&&(re>e?re-=vt:re<t&&(re+=vt))}:function(){if(re>de)for(;re>=fe+vt;)re-=vt;else if(re<fe)for(;re<=de-vt;)re+=vt}:function(){re=Math.max(fe,Math.min(de,re))},Sn=U?function(){var t,e,n,i,a,o,r,s,l,u,c;Mi(ft,""),z||!Ot?(Li(),Ot&&L(ft)||Hi()):(t=ft,e=ne,n=ie,i=ae,a=Si(),o=Ot,r=Hi,s=Math.min(o,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-u)/o*s,setTimeout((function a(){o-=s,u+=c,t.style[e]=n+u+l+i,o>0?setTimeout(a,s):r()}),s)),lt||Ji()}:function(){Kt=[];var t={};t[V]=t[$]=Hi,I(pt[se],t),k(pt[re],t),Bi(se,nt,it,!0),Bi(re,ot,nt),V&&$&&Ot&&L(ft)||Hi()};return{version:"2.9.4",getInfo:ta,events:ye,goTo:Oi,play:function(){jt&&!fn&&(_i(),hn=!1)},pause:function(){fn&&(qi(),hn=!0)},isOn:gt,updateSliderHeight:vi,refresh:Vn,destroy:function(){if(Gt.disabled=!0,Gt.ownerNode&&Gt.ownerNode.remove(),I(n,{resize:Kn}),Ht&&I(e,Ne),$e&&I($e,Se),Ze&&I(Ze,Ae),I(ft,Le),I(ft,Be),mn&&I(mn,{click:Wi}),jt&&clearInterval(cn),U&&V){var i={};i[V]=Hi,I(ft,i)}Wt&&I(ft,De),zt&&I(ft,He);var a=[ht,Ge,Ke,Je,tn,gn];for(var o in Q.forEach((function(e,n){var i="container"===e?ut:t[e];if("object"==typeof i&&i){var o=!!i.previousElementSibling&&i.previousElementSibling,r=i.parentNode;i.outerHTML=a[n],t[e]=o?o.nextElementSibling:r.firstElementChild}})),Q=nt=it=at=ot=lt=ut=ct=ft=dt=ht=pt=vt=st=mt=Mt=Tt=Et=St=At=Bt=Nt=Dt=Ht=Ot=kt=It=Pt=Gt=Qt=yt=Kt=Jt=Ut=Zt=te=ee=ne=ie=ae=oe=re=se=fe=de=pe=ve=me=ge=ye=xe=be=we=Ce=Me=Te=Ee=Se=Ae=Le=Be=Ne=De=He=Oe=ke=Ie=Pe=Re=_e=qe=ze=je=le=Rt=_t=$e=Ge=Qe=Ye=Xe=Ve=qt=Ze=tn=Ue=en=nn=an=on=rn=sn=ln=un=jt=Ft=vn=Xt=Vt=mn=gn=$t=yn=cn=fn=dn=hn=pn=wn=Cn=xn=Mn=bn=Tn=Wt=zt=null,this)"rebuild"!==o&&(this[o]=null);gt=!1},rebuild:function(){return R(r(t,Y))}}}function An(t){t&&(Rt=qt=Wt=zt=Ht=jt=Vt=$t=!1)}function Ln(){for(var t=U?re-Jt:re;t<0;)t+=vt;return t%vt+1}function Bn(t){return t=t?Math.max(0,Math.min(It?vt-1:vt-Bt,t)):0,U?t+Jt:t}function Nn(t){for(null==t&&(t=re),U&&(t-=Jt);t<0;)t+=vt;return Math.floor(t%vt)}function Dn(){var t,e=Nn();return t=Ie?e:Tt||Mt?Math.ceil((e+1)*en/vt-1):Math.floor(e/Bt),!It&&U&&re===de&&(t=en-1),t}function Hn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function On(t){return"top"===t?"afterbegin":"beforeend"}function kn(t){if(null!=t){var n,i,a=e.createElement("div");return t.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||kn(t.parentNode)}}function In(){var t=Et?2*Et-St:0;return kn(dt)-t}function Pn(e){if(t[e])return!0;if(K)for(var n in K)if(K[n][e])return!0;return!1}function Rn(e,n){if(null==n&&(n=mt),"items"===e&&Tt)return Math.floor((At+St)/(Tt+St))||1;var i=t[e];if(K)for(var a in K)n>=parseInt(a)&&e in K[a]&&(i=K[a][e]);return"slideBy"===e&&"page"===i&&(i=Rn("items")),U||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function _n(t,e,n,i,a){var o="";if(void 0!==t){var r=t;e&&(r-=e),o=lt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var s="-"+e+"px";o="margin: 0 "+(lt?s+" 0 0":"0 "+s+" 0")+";"}return!U&&a&&z&&i&&(o+=Fn(i)),o}function qn(t,e,n){return t?(t+e)*Ut+"px":H?H+"("+100*Ut+"% / "+n+")":100*Ut/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{U||(n=Math.floor(n));var a=U?Ut:n;i=H?H+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==J?i+";":i+" !important;"}function zn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function jn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Fn(t){return jn(z,18)+"transition-duration:"+t/1e3+"s;"}function Xn(t){return jn(F,17)+"animation-duration:"+t/1e3+"s;"}function Vn(){if(Pn("autoHeight")||Mt||!lt){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;Qt||(e&&e.indexOf("data:image")<0?(t.src="",k(t,je),y(t,"loading"),t.src=e):li(t))})),i((function(){di(E(t),(function(){le=!0}))})),Pn("autoHeight")&&(t=ci(re,Math.min(re+Bt-1,Ut-1))),Qt?$n():i((function(){di(E(t),$n)}))}else U&&Ai(),Qn(),Yn()}function $n(){if(Mt&&vt>1){var t=It?re:vt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Gn():setTimeout((function(){e()}),16)}()}else Gn()}function Gn(){lt&&!Mt||(mi(),Mt?(te=Ei(),Me&&(Te=Un()),de=oe(),An(we||Te)):Ji()),U&&Ai(),Qn(),Yn()}function Qn(){if(gi(),ut.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+oi()+"</span>  of "+vt+"</div>"),ue=ut.querySelector(".tns-liveregion .current"),Pe){var e=jt?"stop":"start";mn?M(mn,{"data-action":e}):t.autoplayButtonOutput&&(ut.insertAdjacentHTML(On(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+yn[0]+e+yn[1]+Xt[0]+"</button>"),mn=ut.querySelector("[data-action]")),mn&&k(mn,{click:Wi}),jt&&(_i(),Vt&&k(ft,Le),$t&&k(ft,Be))}if(ke){if(Ze)M(Ze,{"aria-label":"Carousel Pagination"}),v(Ue=Ze.children,(function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Ie?"":'style="display:none"',a=0;a<vt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ut.insertAdjacentHTML(On(t.navPosition),n),Ze=ut.querySelector(".tns-nav"),Ue=Ze.children}if(Zi(),z){var o=z.substring(0,z.length-18).toLowerCase(),r="transition: all "+Ot/1e3+"s";o&&(r="-"+o+"-"+r),h(Gt,"[aria-controls^="+be+"-item]",r,p(Gt))}M(Ue[on],{"aria-label":ln+(on+1)+un}),T(Ue[on],"tabindex"),y(Ue[on],sn),k(Ze,Ae)}Oe&&($e||Qe&&Ye||(ut.insertAdjacentHTML(On(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+_t[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+_t[1]+"</button></div>"),$e=ut.querySelector(".tns-controls")),Qe&&Ye||(Qe=$e.children[0],Ye=$e.children[1]),t.controlsContainer&&M($e,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&M([Qe,Ye],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(M(Qe,{"data-controls":"prev"}),M(Ye,{"data-controls":"next"})),Xe=xi(Qe),Ve=xi(Ye),Ci(),$e?k($e,Se):(k(Qe,Se),k(Ye,Se))),ti()}function Yn(){if(U&&V){var i={};i[V]=Hi,k(ft,i)}Wt&&k(ft,De,t.preventScrollOnTouch),zt&&k(ft,He),Ht&&k(e,Ne),"inner"===J?ye.on("outerResized",(function(){Jn(),ye.emit("innerLoaded",ta())})):(K||Tt||Mt||Pt||!lt)&&k(n,{resize:Kn}),Pt&&("outer"===J?ye.on("innerLoaded",fi):we||fi()),si(),we?ii():Te&&ni(),ye.on("indexChanged",hi),"inner"===J&&ye.emit("innerLoaded",ta()),"function"==typeof ge&&ge(ta()),gt=!0}function Kn(t){i((function(){Jn(ji(t))}))}function Jn(n){if(gt){"outer"===J&&ye.emit("outerResized",ta(n)),mt=Hn();var i,a=st,o=!1;K&&(Zn(),(i=a!==st)&&ye.emit("newBreakpointStart",ta(n)));var r,s,l=Bt,u=we,c=Te,f=Ht,d=Rt,m=qt,g=Wt,b=zt,w=jt,C=Vt,M=$t,T=re;if(i){var E=Tt,L=Pt,B=_t,N=Lt,D=Xt;if(!_)var H=St,O=Et}if(Ht=Rn("arrowKeys"),Rt=Rn("controls"),qt=Rn("nav"),Wt=Rn("touch"),Lt=Rn("center"),zt=Rn("mouseDrag"),jt=Rn("autoplay"),Vt=Rn("autoplayHoverPause"),$t=Rn("autoplayResetOnVisibility"),i&&(we=Rn("disable"),Tt=Rn("fixedWidth"),Ot=Rn("speed"),Pt=Rn("autoHeight"),_t=Rn("controlsText"),Xt=Rn("autoplayText"),Ft=Rn("autoplayTimeout"),_||(Et=Rn("edgePadding"),St=Rn("gutter"))),An(we),At=In(),lt&&!Mt||we||(mi(),lt||(Ji(),o=!0)),(Tt||Mt)&&(te=Ei(),de=oe()),(i||Tt)&&(Bt=Rn("items"),Nt=Rn("slideBy"),(s=Bt!==l)&&(Tt||Mt||(de=oe()),En())),i&&we!==u&&(we?ii():function(){if(Ce){if(Gt.disabled=!1,ft.className+=xe,Ai(),It)for(var t=Jt;t--;)U&&A(pt[t]),A(pt[Ut-t-1]);if(!U)for(var e=re,n=re+vt;e<n;e++){var i=pt[e],a=e<re+Bt?nt:ot;i.style.left=100*(e-re)/Bt+"%",y(i,a)}ei(),Ce=!1}}()),Me&&(i||Tt||Mt)&&(Te=Un())!==c&&(Te?(Li(Si(Bn(0))),ni()):(function(){if(Ee){if(Et&&_&&(ct.style.margin=""),Jt)for(var t="tns-transparent",e=Jt;e--;)U&&x(pt[e],t),x(pt[Ut-e-1],t);ei(),Ee=!1}}(),o=!0)),An(we||Te),jt||(Vt=$t=!1),Ht!==f&&(Ht?k(e,Ne):I(e,Ne)),Rt!==d&&(Rt?$e?A($e):(Qe&&A(Qe),Ye&&A(Ye)):$e?S($e):(Qe&&S(Qe),Ye&&S(Ye))),qt!==m&&(qt?(A(Ze),Zi()):S(Ze)),Wt!==g&&(Wt?k(ft,De,t.preventScrollOnTouch):I(ft,De)),zt!==b&&(zt?k(ft,He):I(ft,He)),jt!==w&&(jt?(mn&&A(mn),fn||hn||_i()):(mn&&S(mn),fn&&qi())),Vt!==C&&(Vt?k(ft,Le):I(ft,Le)),$t!==M&&($t?k(e,Be):I(e,Be)),i){if(Tt===E&&Lt===N||(o=!0),Pt!==L&&(Pt||(ct.style.height="")),Rt&&_t!==B&&(Qe.innerHTML=_t[0],Ye.innerHTML=_t[1]),mn&&Xt!==D){var P=jt?1:0,R=mn.innerHTML,q=R.length-D[P].length;R.substring(q)===D[P]&&(mn.innerHTML=R.substring(0,q)+Xt[P])}}else Lt&&(Tt||Mt)&&(o=!0);if((s||Tt&&!Mt)&&(en=Ui(),Zi()),(r=re!==T)?(ye.emit("indexChanged",ta()),o=!0):s?r||hi():(Tt||Mt)&&(si(),gi(),ai()),s&&!U&&function(){for(var t=re+Math.min(vt,Bt),e=Ut;e--;){var n=pt[e];e>=re&&e<t?(y(n,"tns-moving"),n.style.left=100*(e-re)/Bt+"%",y(n,nt),x(n,ot)):n.style.left&&(n.style.left="",y(n,ot),x(n,nt)),x(n,it)}setTimeout((function(){v(pt,(function(t){x(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!_&&(Et===O&&St===H||(ct.style.cssText=_n(Et,St,Tt,Ot,Pt)),lt)){U&&(ft.style.width=qn(Tt,St,Bt));var W=Wn(Tt,St,Bt)+zn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Gt,p(Gt)-1),h(Gt,"#"+be+" > .tns-item",W,p(Gt))}Pt&&fi(),o&&(Ai(),se=re)}i&&ye.emit("newBreakpointEnd",ta(n))}}function Un(){if(!Tt&&!Mt)return vt<=(Lt?Bt-(Bt-1)/2:Bt);var t=Tt?(Tt+St)*vt:yt[vt],e=Et?At+2*Et:At+St;return Lt&&(e-=Tt?(At-Tt)/2:(At-(yt[re+1]-yt[re]-St))/2),t<=e}function Zn(){for(var t in st=0,K)t=parseInt(t),mt>=t&&(st=t)}function ti(){!jt&&mn&&S(mn),!qt&&Ze&&S(Ze),Rt||($e?S($e):(Qe&&S(Qe),Ye&&S(Ye)))}function ei(){jt&&mn&&A(mn),qt&&Ze&&A(Ze),Rt&&($e?A($e):(Qe&&A(Qe),Ye&&A(Ye)))}function ni(){if(!Ee){if(Et&&(ct.style.margin="0px"),Jt)for(var t="tns-transparent",e=Jt;e--;)U&&y(pt[e],t),y(pt[Ut-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Gt.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),T(ft,["style"]),It)for(var t=Jt;t--;)U&&S(pt[t]),S(pt[Ut-t-1]);if(lt&&U||T(ct,["style"]),!U)for(var e=re,n=re+vt;e<n;e++){var i=pt[e];T(i,["style"]),x(i,nt),x(i,ot)}ti(),Ce=!0}}function ai(){var t=oi();ue.innerHTML!==t&&(ue.innerHTML=t)}function oi(){var t=ri(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ri(t){null==t&&(t=Si());var e,n,i,a=re;if(Lt||Et?(Mt||Tt)&&(n=-(parseFloat(t)+Et),i=n+At+2*Et):Mt&&(n=yt[re],i=n+At),Mt)yt.forEach((function(t,o){o<Ut&&((Lt||Et)&&t<=n+.5&&(a=o),i-t>=.5&&(e=o))}));else{if(Tt){var o=Tt+St;Lt||Et?(a=Math.floor(n/o),e=Math.ceil(i/o-1)):e=a+Math.ceil(At/o)-1}else if(Lt||Et){var r=Bt-1;if(Lt?(a-=r/2,e=re+r/2):e=re+r,Et){var s=Et*Bt/At;a-=s,e+=s}a=Math.floor(a),e=Math.ceil(e)}else e=a+Bt-1;a=Math.max(a,0),e=Math.min(e,Ut-1)}return[a,e]}function si(){if(Qt&&!we){var t=ri();t.push(Yt),ci.apply(null,t).forEach((function(t){if(!g(t,ze)){var e={};e[V]=function(t){t.stopPropagation()},k(t,e),k(t,je),t.src=w(t,"data-src");var n=w(t,"data-srcset");n&&(t.srcset=n),y(t,"loading")}}))}}function li(t){y(t,"loaded"),ui(t)}function ui(t){y(t,ze),x(t,"loading"),I(t,je)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,ri());i((function(){di(t,vi)}))}function di(t,e){return le?e():(t.forEach((function(e,n){!Qt&&e.complete&&ui(e),g(e,ze)&&t.splice(n,1)})),t.length?void i((function(){di(t,e)})):e())}function hi(){si(),gi(),ai(),Ci(),function(){if(qt&&(on=an>=0?an:Dn(),an=-1,on!==rn)){var t=Ue[rn],e=Ue[on];M(t,{tabindex:"-1","aria-label":ln+(rn+1)}),x(t,sn),M(e,{"aria-label":ln+(on+1)+un}),T(e,"tabindex"),y(e,sn),rn=on}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,Ut);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function vi(){var t=Pt?pi(re,Bt):pi(Jt,vt),e=rt||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){yt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,a){a&&yt.push(i.getBoundingClientRect()[t]-n),a===Ut-1&&yt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=ri(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?b(t,"aria-hidden")&&(T(t,["aria-hidden","tabindex"]),y(t,qe)):b(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),x(t,qe))}))}function yi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===yi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(Rt&&!kt&&!It){var t=Xe?Qe.disabled:bi(Qe),e=Ve?Ye.disabled:bi(Ye),n=re<=fe,i=!kt&&re>=de;n&&!t&&wi(Xe,Qe,!0),!n&&t&&wi(Xe,Qe,!1),i&&!e&&wi(Ve,Ye,!0),!i&&e&&wi(Ve,Ye,!1)}}function Mi(t,e){z&&(t.style[z]=e)}function Ti(t){return null==t&&(t=re),Mt?(At-(Et?St:0)-(yt[t+1]-yt[t]-St))/2:Tt?(At-Tt)/2:(Bt-1)/2}function Ei(){var t=At+(Et?St:0)-(Tt?(Tt+St)*Ut:yt[Ut]);return Lt&&!It&&(t=Tt?-(Tt+St)*(Ut-1)-Ti():Ti(Ut-1)-yt[Ut-1]),t>0&&(t=0),t}function Si(t){var e;if(null==t&&(t=re),lt&&!Mt)if(Tt)e=-(Tt+St)*t,Lt&&(e+=Ti());else{var n=q?Ut:Bt;Lt&&(t-=Ti()),e=100*-t/n}else e=-yt[t],Lt&&Mt&&(e+=Ti());return Zt&&(e=Math.max(e,te)),e+(!lt||Mt||Tt?"px":"%")}function Ai(t){Mi(ft,"0s"),Li(t)}function Li(t){null==t&&(t=Si()),ft.style[ne]=ie+t+ae}function Bi(t,e,n,i){var a=t+Bt;It||(a=Math.min(a,Ut));for(var o=t;o<a;o++){var r=pt[o];i||(r.style.left=100*(o-re)/Bt+"%"),at&&j&&(r.style[j]=r.style[X]=at*(o-t)/1e3+"s"),x(r,e),y(r,n),i&&Kt.push(r)}}function Ni(t,e){ee&&En(),(re!==se||e)&&(ye.emit("indexChanged",ta()),ye.emit("transitionStart",ta()),Pt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&qi(),me=!0,Sn())}function Di(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(U||me){if(ye.emit("transitionEnd",ta(t)),!U&&Kt.length>0)for(var e=0;e<Kt.length;e++){var n=Kt[e];n.style.left="",X&&j&&(n.style[X]="",n.style[j]=""),x(n,it),y(n,ot)}if(!t||!U&&t.target.parentNode===ft||t.target===ft&&Di(t.propertyName)===Di(ne)){if(!ee){var i=re;En(),re!==i&&(ye.emit("indexChanged",ta()),Ai())}"inner"===J&&ye.emit("innerLoaded",ta()),me=!1,se=re}}}function Oi(t,e){if(!Te)if("prev"===t)ki(e,-1);else if("next"===t)ki(e,1);else{if(me){if(he)return;Hi()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=U?vt-Bt-n:vt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(vt-1,t))),i=t-n)),!U&&i&&Math.abs(i)<Bt){var a=i>0?1:-1;i+=re+i-vt>=fe?vt*a:2*vt*a*-1}re+=i,U&&It&&(re<fe&&(re+=vt),re>de&&(re-=vt)),Nn(re)!==Nn(se)&&Ni(e)}}function ki(t,e){if(me){if(he)return;Hi()}var n;if(!e){for(var i=Fi(t=ji(t));i!==$e&&[Qe,Ye].indexOf(i)<0;)i=i.parentNode;var a=[Qe,Ye].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(kt){if(re===fe&&-1===e)return void Oi("last",t);if(re===de&&1===e)return void Oi("first",t)}e&&(re+=Nt*e,Mt&&(re=Math.floor(re)),Ni(n||t&&"keydown"===t.type?t:null))}function Ii(){cn=setInterval((function(){ki(null,vn)}),Ft),fn=!0}function Pi(){clearInterval(cn),fn=!1}function Ri(t,e){M(mn,{"data-action":t}),mn.innerHTML=yn[0]+t+yn[1]+e}function _i(){Ii(),mn&&Ri("stop",Xt[1])}function qi(){Pi(),mn&&Ri("start",Xt[0])}function Wi(){fn?(qi(),hn=!0):(_i(),hn=!1)}function zi(t){t.focus()}function ji(t){return Xi(t=t||n.event)?t.changedTouches[0]:t}function Fi(t){return t.target||n.event.srcElement}function Xi(t){return t.type.indexOf("touch")>=0}function Vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function $i(){return o=Cn.y-wn.y,r=Cn.x-wn.x,e=Math.atan2(o,r)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,o,r}function Gi(t){if(me){if(he)return;Hi()}jt&&fn&&Pi(),Mn=!0,bn&&(o(bn),bn=null);var e=ji(t);ye.emit(Xi(t)?"touchStart":"dragStart",ta(t)),!Xi(t)&&["img","a"].indexOf(yi(Fi(t)))>=0&&Vi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,U&&(xn=parseFloat(ft.style[ne].replace(ie,"")),Mi(ft,"0s"))}function Qi(t){if(Mn){var e=ji(t);Cn.x=e.clientX,Cn.y=e.clientY,U?bn||(bn=i((function(){Yi(t)}))):("?"===ve&&(ve=$i()),ve&&(Fe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Fe&&t.preventDefault()}}function Yi(t){if(ve){if(o(bn),Mn&&(bn=i((function(){Yi(t)}))),"?"===ve&&(ve=$i()),ve){!Fe&&Xi(t)&&(Fe=!0);try{t.type&&ye.emit(Xi(t)?"touchMove":"dragMove",ta(t))}catch(t){}var e=xn,n=Tn(Cn,wn);!lt||Tt||Mt?(e+=n,e+="px"):(e+=q?n*Bt*100/((At+St)*Ut):100*n/(At+St),e+="%"),ft.style[ne]=ie+e+ae}}else Mn=!1}function Ki(e){if(Mn){bn&&(o(bn),bn=null),U&&Mi(ft,""),Mn=!1;var n=ji(e);Cn.x=n.clientX,Cn.y=n.clientY;var a=Tn(Cn,wn);if(Math.abs(a)){if(!Xi(e)){var r=Fi(e);k(r,{click:function t(e){Vi(e),I(r,{click:t})}})}U?bn=i((function(){if(lt&&!Mt){var t=-a*Bt/(At+St);t=a>0?Math.floor(t):Math.ceil(t),re+=t}else{var n=-(xn+a);if(n<=0)re=fe;else if(n>=yt[Ut-1])re=de;else for(var i=0;i<Ut&&n>=yt[i];)re=i,n>yt[i]&&a<0&&(re+=1),i++}Ni(e,a),ye.emit(Xi(e)?"touchEnd":"dragEnd",ta(e))})):ve&&ki(e,a>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Fe=!1),pe&&(ve="?"),jt&&!fn&&Ii()}function Ji(){(rt||ct).style.height=yt[re+Bt]-yt[re]+"px"}function Ui(){var t=Tt?(Tt+St)*vt/At:vt/Bt;return Math.min(Math.ceil(t),vt)}function Zi(){if(qt&&!Ie&&en!==nn){var t=nn,e=en,n=A;for(nn>en&&(t=en,e=nn,n=S);t<e;)n(Ue[t]),t++;nn=en}}function ta(t){return{container:ft,slideItems:pt,navContainer:Ze,navItems:Ue,controlsContainer:$e,hasControls:Oe,prevButton:Qe,nextButton:Ye,items:Bt,slideBy:Nt,cloneCount:Jt,slideCount:vt,slideCountNew:Ut,index:re,indexCached:se,displayIndex:Ln(),navCurrentIndex:on,navCurrentIndexCached:rn,pages:en,pagesCached:nn,sheet:Gt,isOn:gt,event:t||{}}}G&&console.warn("No slides found in",t.container)};e.W=R},806:()=>{(()=>{const t=document.querySelector(".header-input"),e=document.querySelector(".header-input__input"),n=()=>e.classList.toggle("active");t.addEventListener("mouseover",(()=>n())),t.addEventListener("mouseout",(()=>n())),document.querySelector(".header");const i=document.querySelector(".header__navigation");document.querySelector(".header__burger").onclick=function(){this.classList.toggle("is__active"),this.classList.contains("is__active")?i.classList.add("active"):i.classList.remove("active")}})()},954:()=>{(()=>{const t=document.querySelectorAll(".button-wave");t.forEach((t=>t.addEventListener("mouseenter",(function(){const t=document.createElement("span");t.classList.add("button-wave__wave"),this.prepend(t),setTimeout((()=>{t.classList.add("button-wave__restore")}),1)})))),t.forEach((t=>t.addEventListener("mousemove",(function(t){let{left:e,top:n,width:i,height:a}=this.getBoundingClientRect(),o=t.x-e,r=t.y-n,s=this.getElementsByClassName("button-wave__restore");Array.from(s).forEach((t=>{t.style.left=`${o}px`,t.style.top=`${r}px`}))})))),t.forEach((t=>t.addEventListener("mouseleave",(function(){const t=document.getElementsByClassName("button-wave__wave");t&&Array.from(t).forEach((t=>t.remove()))}))))})()},769:(t,e,n)=>{var i=n(102);class a{constructor(t="[data-collapse]",e={}){this.config={transitionDuration:200,saveState:!1,...e},this.selector=t,this.isActive=!1}init(){if("object"==typeof this.selector&&void 0!==this.selector.nodeType?this.collapse=this.selector:"string"==typeof this.selector&&(this.collapse=document.querySelector(this.selector)),!this.collapse.dataset.collapseTarget)throw Error("data-collapse-target is not defined. Please specify data-collapse-target attribute");this.collapseTargetSelector=this.collapse.dataset.collapseTarget,this.collapseTarget=document.querySelectorAll(this.collapseTargetSelector),this.collapse.dataset.collapseSaveState&&(this.config.saveState=this.collapse.dataset.collapseSaveState),this.collapse.dataset.collapseTransitionDuration&&(this.config.transitionDuration=parseInt(this.collapse.dataset.collapseTransitionDuration,10)),this.collapseTarget.forEach((t=>{this.open?this.show():(t.style.maxHeight=0,t.style.overflow="hidden"),t.style.transitionProperty="max-height",t.style.transitionDuration=`${this.config.transitionDuration}ms`})),this.collapse.addEventListener("click",(t=>{this.open?this.hide():this.show()}))}get elementId(){const t=window.location.pathname+this.collapseTargetSelector;return`collapse-${(0,i.x)(t)}`}get open(){const t="true"===this.collapse.dataset.collapseOpen;let e=!1;return this.config.saveState&&(e="true"===localStorage.getItem(this.elementId)),t||e}set open(t){this.collapse.dataset.collapseOpen=t,this.collapseTarget.forEach((e=>{e.dataset.collapseOpen=t})),this.config.saveState&&localStorage.setItem(this.elementId,t)}show(){this.isActive||(this.isActive=!0,this.open=!0,this.collapseTarget.forEach((t=>{t.style.maxHeight=`${t.scrollHeight}px`})),(0,i._)(this.config.transitionDuration).then((()=>{this.collapseTarget.forEach((t=>{t.style.maxHeight="",t.style.overflow=""})),this.isActive=!1})))}hide(){this.isActive||(this.isActive=!0,this.open=!1,this.collapseTarget.forEach((t=>{t.style.overflow="hidden",t.style.maxHeight=`${t.scrollHeight}px`})),(0,i._)(100).then((()=>{this.collapseTarget.forEach((t=>{t.style.maxHeight="0px"}))})),(0,i._)(this.config.transitionDuration+100).then((()=>{this.isActive=!1})))}}document.querySelectorAll('[data-collapse=""]').forEach((t=>{new a(t).init()}))},54:()=>{(()=>{const t=document.getElementsByClassName("copy");Array.from(t).forEach((t=>{const e=t.getElementsByClassName("copy__button")[0],n=t.getElementsByClassName("copy__text")[0];e&&e.addEventListener("click",(()=>{window.navigator.clipboard.writeText(n.textContent)}))}))})()},276:()=>{},417:(t,e,n)=>{var i=n(206),a=n(628);document.querySelectorAll(".slider").forEach((t=>{(0,i.W)({container:t,items:1,slideBy:1,nav:!0,navPosition:"bottom",autoplayButtonOutput:!1,mouseDrag:!0,autoplay:!0,controls:!1,speed:500,responsive:{[a.j.XS]:{items:1},[a.j.SM]:{items:2},[a.j.MD]:{items:3}}})}))},628:(t,e,n)=>{n.d(e,{j:()=>i});const i={XS:576,SM:768,MD:992,LG:1280,XL:1500}},102:(t,e,n)=>{function i(t){return new Promise((e=>setTimeout(e,t)))}function a(t,e=0){let n=3735928559^e,i=1103547991^e;for(let e,a=0;a<t.length;a++)e=t.charCodeAt(a),n=Math.imul(n^e,2654435761),i=Math.imul(i^e,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&i)+(n>>>0)}n.d(e,{_:()=>i,x:()=>a})}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(806),n(628),n(102),n(954),n(769),n(54),n(276),n(417)})();