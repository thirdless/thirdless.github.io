var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(C){return C.raw=C};$jscomp.createTemplateTagFirstArgWithRaw=function(C,v){C.raw=v;return C};
(function(){function C(a){"number"===typeof a?D.push(a):D=[];2!=D.length?requestAnimationFrame(C):(D=D[1]-D[0],console.log("Initial time between frames:",D))}function v(a,c){null==c&&(c=D);return setTimeout(a,c)}function G(a,c){return Math.random()*(c-a)+a}function ka(a,c,b,d){function g(k){var l;var m=k;for(l=0;8>l;l++){var E=((w*m+n)*m+h)*m-k;if(1.25E-5>f(E))return m;var x=(3*w*m+2*n)*m+h;if(1E-6>f(x))break;m-=E/x}x=0;l=1;m=k;if(m<x)return x;if(m>l)return l;for(;x<l;){E=((w*m+n)*m+h)*m;if(1.25E-5>
f(E-k))break;k>E?x=m:l=m;m=.5*(l-x)+x}return m}var f=Math.abs,h=3*a,n=3*(b-a)-h,w=1-h-n,p=3*c,y=3*(d-c)-p,r=1-p-y;return function(k){k=g(k);return((r*k+y)*k+p)*k}}function e(a,c,b){a=document.createElement(void 0===a?"div":a);c instanceof Node&&c.appendChild(a);null!=b&&(a.className=b);return a}function la(a,c){var b=e();b.innerHTML=a;b=b.querySelector("div>*:first-of-type");c instanceof Node&&c.appendChild(b);return b}function B(a,c){var b=e("svg");a in Y&&(b.setAttribute("viewBox",Y[a].view),b.innerHTML=
Y[a].path);return c?b:b.outerHTML}function ma(a,c,b){function d(){var n=(performance.now()-g)/c,w=Ka.custom(n);1>Math.abs(H.scrollTop-a)||1.2<n?(K=!1,v(function(){"function"===typeof b&&b()})):(H.scrollTop=f+h*w,requestAnimationFrame(d))}c=void 0===c?1E3:c;if(!K){"number"!==typeof a&&(a=0);K=!0;var g=performance.now(),f=H.scrollTop,h=a-f;d()}}function La(a,c){var b=a.getBoundingClientRect();ma(H.scrollTop+b.top-(window.innerHeight-b.height)/2,void 0,c)}function na(a){K&&a.preventDefault()}function Z(a,
c,b){var d=e("a");d.setAttribute("data-href",c);d.className="generic-social";d.innerHTML=B(a);d.target="_blank";null!=b&&(d.className+=" "+b);return d.outerHTML}function L(a,c,b,d,g){var f=e("a");f.setAttribute("data-href",c);f.className="generic-link";f.innerHTML=g?"<span>"+a+"</span>":a;d&&(f.target="_blank");null!=b&&(f.className+=" "+b);return f.outerHTML}function oa(a,c){var b=e("div",c,"header");var d="home"==a?L(B("projects")+" Projects","/projects"):L(B("info")+"About","/");d='\n        <div class="logo">'+
B("logo-big")+'</div>\n        <div class="menu">\n            '+d+"\n        </div>\n    ";b.innerHTML=d;return b}function pa(){return"\n        "+Z("github","https://github.com/thirdless")+"\n        "+Z("spotify","http://open.spotify.com/user/smuwn")+"\n        "+Z("steam","http://steamcommunity.com/id/smuwn")+"\n    "}function qa(a){a=e("div",a,"footer");var c='\n            <div class="content">\n                <div class="left">\n                    <div class="logo">'+B("logo-big")+'</div>\n                    <div class="info">\n                        <p>Ioan Macovei</p>\n                        <p>Made with \u2661 in Romania</p>\n                    </div>\n                </div>\n                <div class="right">\n                    <p>Follow me</p>\n                    '+
pa()+'\n                    <h3 class="generic-link">'+B("arrow-up")+" Back to top</h3>\n                </div>\n                <span>This site stores no cookies except the Github Pages ones or the PHP Session mandatory ones which I cannot control.</span>\n            </div>\n    ";a.innerHTML=c;ra=a.querySelector("h3");ra.addEventListener("click",ma);return a}function sa(a){M.push(a.code.toLowerCase().replace("key",""));for(a=0;a<M.length;a++){if("music".charAt(a)!=M[a]){M=[];break}if(5==M.length){document.removeEventListener("keydown",
sa);localStorage.setItem("_idk_","something");ta();break}}}function Ma(){I++;I==P.length&&(I=0);z.src=P[I].url;z.load();Q?z.play():z.pause()}function Na(a){if(null===z){for(var c,b,d=ua,g=ua.length-1;0<g;g--)c=Math.floor(Math.random()*(g+1)),b=d[g],d[g]=d[c],d[c]=b;P=d;I=0;z=new Audio;z.volume=.3;z.src=P[I].url;z.load();z.addEventListener("ended",Ma)}Q&&a.classList.remove("off")}function Oa(a){a=a.currentTarget;a.classList.contains("off")?(z.play(),a.classList.remove("off")):(z.pause(),a.classList.add("off"));
Q=!Q}function ta(a){var c=e("div",t,"music-element off");c.innerHTML='\n        <div class="button">\n            '+B("music")+"\n        </div>\n    ";Na(c);c.addEventListener("click",Oa);v(function(){c.classList.add("show")})}function va(a){a instanceof Node&&(a=[a]);wa||(aa=new IntersectionObserver(function(b){b.forEach(function(d){.05<=d.intersectionRatio?d.target.classList.add("viewportActive"):d.target.classList.remove("viewportActive")})},{threshold:.05}),wa=!0);for(var c=0;c<a.length;c++)aa.observe(a[c]),
R.push(a[c])}function xa(){for(var a=0;a<R.length;a++)aa.unobserve(R[a]);R=[]}function ya(){for(var a,c=window.innerHeight,b,d=0;d<A.length;d++)b=A[d],a=ba-b.top+(c-b.height)/2,a*=-.2,b.element.style.transform="translate(0px, "+a+"px)"}function S(){u&&(u.parentNode.removeChild(u),u=null);u=e("div",null,"loadingCover show");document.body.appendChild(u);v(function(){if(u){for(var a=e("div",u),c=0;4>c;c++)e("div",a);v(function(){a.classList.add("show")})}},1E3)}function ca(){u&&u.classList.remove("show");
v(function(){u&&(u.parentNode.removeChild(u),u=null)},300)}function za(){var a=H.scrollTop;v(function(){ba=a;ya()},50)}function da(){F.width=window.innerWidth;F.height=window.innerHeight;"number"===typeof vHomeResizeTimeout&&clearTimeout(vHomeResizeTimeout);vHomeResizeTimeout=v(function(){for(var a=0;a<A.length;a++){var c=A[a].element.style.transform;A[a].element.style.transform="";var b=A[a].element.getBoundingClientRect();A[a].top=b.top;A[a].height=b.height;A[a].element.style.transform=c}a=document.querySelector(".text");
c=document.querySelector(".about");b=document.querySelector(".desc");var d=document.querySelector(".skills>div");T(a,.075);Aa(b,.075);T(c,.075);Ba(d,.075,.25)},300)}function Ca(){var a=Da;a.clearRect(0,0,F.width,F.height);for(var c in N){var b=N[c];var d=b.position.y-ba;b.last.x+=(b.position.x-b.last.x)/10;b.last.y+=(d-b.last.y)/10;a.beginPath();a.arc(b.last.x,b.last.y,b.size,0,2*Math.PI);a.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+b.transparency+")";a.fill()}ea&&requestAnimationFrame(Ca)}
function T(a,c,b){b=void 0===b?0:b;var d=a.innerText.split(" "),g=[];var f=window.getComputedStyle(a).getPropertyValue("column-count");if("auto"!=f){f=parseInt(f);var h=window.getComputedStyle(a).getPropertyValue("column-gap");h="normal"!=h?parseInt(h)/f:0;a.style.paddingRight=h+"px";a.style.width=100/f+"%";a.style.columnCount="initial";a.style.columnGap="initial";a.style.boxSizing="border-box"}a.style.visibility="hidden";a.innerHTML=d[0];f=a.getBoundingClientRect().height;h=0;for(var n=1;n<d.length;n++)a.innerHTML+=
" "+d[n],f<a.getBoundingClientRect().height&&(g.push(d.slice(h,n).join(" ")),f=a.getBoundingClientRect().height,h=n);g.push(d.slice(h,d.length).join(" "));a.innerHTML="";for(d=0;d<g.length;d++)f=e("span",a,"line"),f.innerText=g[d]+" ",c&&f.style.setProperty("--transition-time",d*c+b+"s");a.removeAttribute("style")}function Aa(a,c,b){b=void 0===b?0:b;a=a.children;var d=a[0].querySelector(".line:last-of-type");d=parseFloat(d.style.getPropertyValue("--transition-time"));for(var g=1;g<a.length;g++)a[g].style.setProperty("--transition-time",
d+g*c+b+"s")}function Ba(a,c,b){b=void 0===b?0:b;a=a.children;for(var d=0;d<a.length/3;d++)for(var g=0;3>g;g++){var f=a[3*d+g];f&&f.style.setProperty("--transition-time",c*d+b+"s")}}function Pa(){ea=!0;S();var a=e("div",null,"home"),c=e("canvas",a);oa("home",a);var b=e("div",a,"main"),d=e("div",a,"about"),g=e("div",a,"skills");qa(a);var f=(new Date).getFullYear()-2E3;d.innerText="        Hi there, I'm Ioan, a "+f+' year old "Automatic Control and        Computer Engineering" student from Romania. Mostly        focusing on front-end developing, but also on back-end,        software, servers, networking and occasionally working on        some small open-source libraries and other "for-fun"        projects. Sometimes I like to be competitive and that pretty much        summaries my taste of activities. Tending to listen to music        everytime I do something, I don\'t have a preffered genre, but        most of my favorites are rock and electronic - EDM, House,        whatever. Worth mentioning I\'ve also played tennis in the        past, and now trying to learn to play the guitar and speak        russian, even though these are not so relevant.    ';
f=e("div",b,"title");var h=e("div",b,"desc"),n=e("div",b,"photo"),w=e("div",h,"text");w.innerText="        ... a student living in Romania. Mostly doing programming,        listening to music, sport and whatnot; messing with        different aspects of programming and design, working with        efficiency and minimalism in mind.    ";la(L(B("envelope")+" me@smuwn.com","mailto:me@smuwn.com","line",null,!0),h);e("div",h,"line").innerHTML=B("location")+" Ia\u0219i, Rom\u00e2nia";la(L(B("clip")+" R\u00e9sum\u00e9",
"/cv.pdf","line",!0,!0),h);b=e("div",h,"socials");e("div",b).innerHTML="Socials";b.innerHTML+=pa();n.innerHTML='<img src="/assets/main.jpg">';f.innerText="Hi, I'm Ioan";e("h1",g).innerText="Some of the stuff I've been working with";var p=e("div",g),y;for(y in Ea)e("span",p,Ea[y]).innerText=y;e("div",p,"spectrum");e("p",p).innerText='^ The "the farthest, the more-suckness" spectrum.';Fa=a;t.appendChild(a);v(function(){F=c;Da=c.getContext("2d");da();window.addEventListener("resize",da);fa=F.width/1080*
250;N=[];ha=[];for(var r=0;25>r;r++){for(var k,l={},m=F.width/25,E=t.offsetHeight/25,x=N.length;;)if(k=G(0,25),!~ha.indexOf(k)){ha.push(k);break}l.color=Ga[Math.floor(G(0,Ga.length))];l.size=G(fa/2,fa);l.transparency=G(.1,.3);l.last={x:0,y:0};l.position={};l.position.x=G(m*x,m*(x+1));l.position.y=G(E*k,E*(k+1));N.push(l)}Ca();T(w,.075);Aa(h,.075);T(d,.075);Ba(p,.075,.25);A=[];r=[n];r instanceof Node&&(r=[r]);for(k=0;k<r.length;k++)l=r[k].getBoundingClientRect(),A.push({element:r[k],top:l.top,height:l.height}),
r[k].style.willChange="transform";ya();va([h,d,g]);window.addEventListener("scroll",za,{passive:!0});ca()})}function U(a){a&&null==O||(window.removeEventListener("scroll",U),V.classList.remove("show"),O.classList.remove("selected"),W.classList.remove("selected"),O=null)}function Ha(a){var c=a.target;a=a.currentTarget;if("A"!=c.tagName)if(null!=O)U(null);else{for(;;){if(c==a)return;if("DIV"==c.tagName&&c.classList.contains("project")&&c.parentNode==Ia)break;c=c.parentNode}K||(a=ia[X.indexOf(c)],V.style.backgroundImage=
a.style.backgroundImage?a.style.backgroundImage:"",c.classList.add("selected"),W.classList.add("selected"),O=c,v(function(){V.classList.add("show");window.removeEventListener("scroll",U);La(c,function(){window.addEventListener("scroll",U)})}))}}function Qa(){S();var a=e("div",null,"projects"),c=e("div",a,"project-background");oa("projects",a);var b=e("div",a,"container");qa(a);e("div",b,"title").innerText="Projects";ia=[];X=[];for(var d=0;d<q.length;d++){var g=e("div",b,"project");g.innerText=q[d].name;
e("span",g).innerText=q[d].name;var f=e("span",g);f.innerText=q[d].name;q[d].background&&(f.style.backgroundImage=q[d].background);q[d].url&&(g.innerHTML+=L("See the project page "+B("arrow-right"),q[d].url,"link",!0));q[d].description&&(e("div",g,"description").innerText=q[d].description);f=e();q[d].background&&(f.style.backgroundImage=q[d].background);X.push(g);ia.push(f)}V=c;W=a;Ia=b;t.addEventListener("click",Ha);t.appendChild(a);v(function(){va(X);for(var h=0,n=0,w=e("div",document.body),p={},
y=0;y<q.length;p={$jscomp$loop$prop$img$3:p.$jscomp$loop$prop$img$3},y++)if(q[y].background&&!q[y].background.indexOf("url")){h++;p.$jscomp$loop$prop$img$3=new Image;var r=q[y].background;p.$jscomp$loop$prop$img$3.onerror=function(){n++;n==h&&(ca(),w.parentNode.removeChild(w),w=null)};p.$jscomp$loop$prop$img$3.onload=function(k){return function(){var l=e("img");l.style="position:absolute;top:0;opacity:0.001;z-index:999;";l.src=k.$jscomp$loop$prop$img$3.src;w.appendChild(l);var m=setInterval(function(){0<
l.offsetHeight&&(k.$jscomp$loop$prop$img$3.onerror(),clearInterval(m))},200)}}(p);p.$jscomp$loop$prop$img$3.src=r.replace(/^[^\(]*\(/g,"").replace(")","")}})}function Ra(){S();for(var a=e("div",null,"error"),c=e("div",a,"error-background"),b=e("div",a,"content"),d=0;8>d;d++)e("span",c).innerText=404;e("h1",b,"heading").innerText="Oops!";e("p",b,"info").innerText="You've been sent to the abyss --\n this page contains an infinite amount of absolutely nothing. \ud83d\ude15";c=e("a",b,"button");c.href=
"/";c.innerText="Back to homepage";Ja=a;t.appendChild(a);v(function(){ca()})}function Sa(a){var c=a.target,b=e("a");for(a.preventDefault();;){if(c==a.currentTarget)return;if("A"==c.tagName){c.getAttribute("data-href")?b.href=c.getAttribute("data-href"):c.href&&(b=c);if(b.host!==location.host||b.protocol!==location.protocol||c.target){c.target?window.open(b.href):location.href=b.href;return}break}c=c.parentNode}ja(b.href)}function ja(a){var c=e("a"),b=!1;"string"===typeof a?(c.href=a,b=!0):c.href=
location.href;"home"==J?(ea=!1,window.removeEventListener("resize",da),A=[],xa(),window.removeEventListener("scroll",za,{passive:!0}),t.removeChild(Fa)):"projects"==J?(xa(),t.removeEventListener("click",Ha),t.removeChild(W)):"error"==J&&t.removeChild(Ja);for(a=c.pathname;"/"==a.charAt(0);)a=a.substring(1);for(;"/"==a.charAt(a.length-1);)a=a.substring(0,a.length-1);""===a||"about"==a?(J="home",Pa()):"projects"==a?(J="projects",Qa()):(J="error",Ra());b&&history.pushState(null,null,c.pathname)}var q=
[{name:"Mazzard",url:"http://github.com/thirdless/game",description:"Mini game made in Java as an university project, with 2 levels, in which a prince needs to regain his throne since the monsters have won the whole kingdom. (idk im not the best storywriter)",background:"url(/bg/bgmenu.png)"},{name:"YouTube Music Desktop App",url:"http://github.com/thirdless/YoutubeMusic",description:"Youtube Music webwrapper with search through playlist functionality, discord integration and more. Since google doesn't want any native desktop app ever.",
background:"linear-gradient(to right, #ED213A, #93291E)"},{name:"Timify",url:"http://github.com/thirdless/timify",description:"Easy to use time management javascipt library. From countdowns, time-passed watches and stopwatches, everything is one line away.",background:"url(/bg/timify.jpg)"},{name:"Dusk",url:"http://host.smuwn.com",description:"Mini forum/blog project for university, includes profiles, formattable posts, comments and admin solutions.",background:"linear-gradient(to right, #8360c3, #2ebf91)"},
{name:"smuwnware",url:"http://github.com/smuwn/smuwnware",description:"Small, fun OS, written in javascript for the browser.",background:"linear-gradient(to right, #ee0979, #ff6a00)"},{name:"Hoggins",description:"Customizable first-page, where you can include widgets from reddit and google news posts, to weather widgets and daily themed wallpapers."}],Ea={HTML:"g",CSS:"g","JS/ES6":"g",PHP:"g",MySQL:"g","Node.JS":"g",Java:"g","C/C++":"m",OracleDB:"m",Electron:"m",Python:"m","ASM x86/x64":"m",Matlab:"b",
Joomla:"b",Wordpress:"b"},ua=[{name:"lil jeep",url:"/music/lil jeep.mp3"},{name:"i mean it",url:"/music/i mean it.mp3"},{name:"gym class",url:"/music/gym class.mp3"}],Y={"logo-big":{view:"0 0 104 32",path:'<path d="M6.85 31.905c-1.536-0.263-2.771-0.825-3.963-1.802-1.498-1.229-2.507-3.064-2.816-5.122-0.096-0.641-0.096-17.317 0-17.958 0.555-3.694 3.256-6.396 6.951-6.951 0.641-0.096 17.317-0.096 17.958 0 3.694 0.555 6.396 3.256 6.951 6.951 0.096 0.641 0.096 17.317 0 17.958-0.555 3.694-3.256 6.396-6.951 6.951-0.712 0.107-17.494 0.083-18.13-0.026zM9.756 26.299l0.171-0.134-0.018-3.689c-0.018-3.679-0.018-3.69-0.161-3.957-0.383-0.716-1.188-1.464-2.001-1.86-0.452-0.22-0.517-0.234-1.12-0.237-0.62-0.003-0.656 0.005-1.152 0.25-0.409 0.203-0.636 0.378-1.131 0.873-0.595 0.596-0.625 0.639-0.784 1.141l-0.165 0.522v6.893l0.394 0.331h2.898c2.846 0 2.901-0.002 3.069-0.134zM28.544 26.305c0.127-0.127 0.128-0.213 0.128-10.271s-0.001-10.144-0.128-10.271c-0.125-0.125-0.213-0.128-3.319-0.128-3.131 0-3.194 0.002-3.36 0.133l-0.169 0.133v20.202l0.394 0.331h3.163c3.077 0 3.166-0.004 3.291-0.128zM16.136 25.519c0.225-0.151 0.541-0.648 1.959-3.086 0.389-0.669 0.956-1.643 1.259-2.164s0.637-1.13 0.741-1.353c0.207-0.443 0.473-1.552 0.576-2.401 0.090-0.744 0.087-6.704-0.003-6.963-0.078-0.225-0.306-0.398-0.521-0.397-0.080 0.001-0.259 0.065-0.396 0.144-0.201 0.115-0.355 0.318-0.787 1.039-0.295 0.493-0.574 0.968-0.62 1.056-0.322 0.62-1.427 2.434-1.576 2.586-0.219 0.224-0.498 0.246-0.753 0.060-0.154-0.112-0.769-0.948-0.778-1.056-0.002-0.023-0.219-0.393-0.483-0.822s-0.48-0.79-0.48-0.803c0-0.013-0.223-0.383-0.496-0.824s-0.712-1.163-0.976-1.604c-1.671-2.794-1.69-2.821-2.228-3.086l-0.363-0.178-2.688-0.019c-2.94-0.021-3.12-0.004-3.393 0.321-0.328 0.39-0.258 0.547 1.637 3.666 0.235 0.387 0.439 0.733 0.452 0.77s0.214 0.382 0.447 0.768 0.892 1.494 1.466 2.462c2.087 3.521 3.292 5.55 3.704 6.239 0.231 0.387 0.466 0.79 0.522 0.896s0.277 0.48 0.491 0.832c0.214 0.352 0.765 1.273 1.223 2.048 1.148 1.941 1.494 2.253 2.066 1.87zM67.903 20.955c-0.839-0.225-1.424-0.785-1.799-1.721l-0.154-0.384-0.037-7.967h2.623l0.019 3.76c0.018 3.56 0.026 3.772 0.142 3.997 0.204 0.395 0.609 0.513 1.253 0.365 0.388-0.090 0.662-0.028 0.935 0.212 0.217 0.19 0.765 0.934 0.719 0.975-0.079 0.071-0.738 0.366-1.131 0.507-0.548 0.197-1.423 0.361-1.891 0.355-0.18-0.002-0.485-0.047-0.678-0.098zM41.951 20.952c-0.92-0.099-2.29-0.443-2.798-0.703l-0.174-0.089 0.296-0.847c0.163-0.466 0.302-0.856 0.31-0.866s0.342 0.080 0.743 0.201c1.285 0.388 2.537 0.467 3.010 0.191 0.304-0.177 0.501-0.499 0.501-0.815-0.001-0.575-0.422-0.894-2.241-1.7-1.204-0.533-1.967-1.183-2.24-1.907-0.182-0.482-0.154-1.333 0.061-1.89 0.281-0.727 1.092-1.388 2.052-1.674 0.814-0.242 2.284-0.187 3.51 0.132 0.333 0.086 0.628 0.172 0.657 0.189 0.038 0.023-0.47 1.624-0.552 1.741-0.007 0.010-0.254-0.041-0.55-0.112-0.693-0.167-1.727-0.233-2.092-0.134-0.151 0.041-0.367 0.158-0.48 0.259-0.18 0.16-0.205 0.224-0.205 0.504 0 0.561 0.38 0.889 1.76 1.519 1.123 0.513 1.634 0.826 2.097 1.284 0.682 0.675 0.905 1.438 0.69 2.357-0.242 1.034-0.986 1.798-2.127 2.184-0.407 0.138-0.639 0.173-1.237 0.186-0.405 0.009-0.851 0.005-0.992-0.011zM48.238 16.562c-0.023-3.605-0.044-4.331-0.135-4.848-0.059-0.334-0.123-0.658-0.142-0.72-0.032-0.104 0.049-0.112 1.091-0.112h1.126l0.206 0.293c0.113 0.161 0.264 0.427 0.335 0.592 0.124 0.288 0.129 0.459 0.146 4.667l0.018 4.368h-2.617zM54.334 17.059c0-3.304-0.012-3.773-0.104-4.002-0.16-0.399-0.339-0.462-1.169-0.41l-0.691 0.044-0.276-0.248c-0.368-0.331-0.8-0.993-0.688-1.055 0.045-0.025 0.426-0.165 0.848-0.31 1.846-0.637 2.992-0.577 3.842 0.201 0.409 0.374 0.749 1.014 0.858 1.616 0.044 0.243 0.069 1.736 0.069 4.144v3.764h-2.688zM60.463 17.041c-0.016-3.492-0.026-3.776-0.134-3.995-0.072-0.145-0.204-0.277-0.345-0.343-0.229-0.109-0.293-0.108-1.212 0.008-0.274 0.035-0.374 0.017-0.59-0.104-0.281-0.158-0.537-0.446-0.782-0.878-0.191-0.337-0.233-0.304 0.904-0.683 1.889-0.629 3.027-0.531 3.922 0.336 0.371 0.36 0.588 0.713 0.767 1.246 0.128 0.382 0.134 0.549 0.157 4.285l0.024 3.888h-2.694zM72.674 20.59c-0.281-0.369-0.476-0.887-0.546-1.451-0.040-0.325-0.067-2.085-0.067-4.4v-3.857h2.678l0.028 4.272c0.028 4.328 0.030 4.366 0.268 5.45l0.043 0.197h-2.243zM79.676 20.714c-0.691-0.188-1.407-0.755-1.713-1.356-0.362-0.711-0.357-0.644-0.384-4.845l-0.025-3.888h2.694l0.017 3.76c0.016 3.492 0.026 3.776 0.134 3.995 0.072 0.145 0.204 0.277 0.345 0.343 0.229 0.109 0.293 0.108 1.212-0.008 0.527-0.067 0.942 0.229 1.37 0.977 0.084 0.147 0.134 0.287 0.111 0.31s-0.407 0.17-0.854 0.325c-1.255 0.437-2.241 0.568-2.91 0.386zM85.629 20.699c-0.95-0.255-1.649-1.074-1.851-2.166-0.046-0.246-0.070-1.694-0.070-4.142v-3.764h2.688v3.742c0 3.304 0.012 3.773 0.104 4.002 0.16 0.399 0.339 0.462 1.169 0.41l0.691-0.044 0.276 0.248c0.368 0.331 0.8 0.993 0.688 1.055-0.251 0.141-1.688 0.586-2.15 0.667-0.666 0.116-1.090 0.114-1.545-0.008zM95.271 16.465c-0.027-4.354-0.047-4.755-0.271-5.463-0.037-0.115 0.013-0.121 1.080-0.121h1.119l0.199 0.251c0.27 0.341 0.431 0.726 0.512 1.221 0.042 0.259 0.068 1.926 0.068 4.431l0.001 4.016h-2.68l-0.027-4.336zM101.484 17.009c-0.017-3.483-0.028-3.809-0.131-3.999-0.178-0.325-0.439-0.427-0.939-0.366-0.756 0.092-0.924 0.075-1.18-0.121-0.129-0.099-0.365-0.371-0.523-0.607l-0.288-0.427 0.434-0.204c1.095-0.514 2.241-0.744 3.033-0.608 1.075 0.184 1.845 0.92 2.137 2.040 0.079 0.305 0.095 1.011 0.095 4.225v3.858h-2.619zM90.346 20.252c-0.113-0.161-0.264-0.427-0.335-0.592-0.124-0.288-0.129-0.459-0.146-4.667l-0.018-4.368h2.617l0.028 4.24c0.023 3.605 0.044 4.331 0.135 4.848 0.059 0.334 0.123 0.658 0.142 0.72 0.032 0.104-0.049 0.112-1.091 0.112h-1.126z"></path>'},
music:{view:"0 0 24 24",path:'<path d="M8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM22 16v-13c0-0.050-0.004-0.107-0.014-0.164-0.091-0.545-0.606-0.913-1.151-0.822l-12 2c-0.476 0.081-0.835 0.492-0.835 0.986v9.535c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-12.153l10-1.667v8.355c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM20 16c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path>'},
envelope:{view:"0 0 28 28",path:'<path d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z"></path>'},
location:{view:"0 0 24 24",path:'<path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0s-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zM12 13.499c-0.668 0-1.295-0.26-1.768-0.732-0.975-0.975-0.975-2.561 0-3.536 0.472-0.472 1.1-0.732 1.768-0.732s1.296 0.26 1.768 0.732c0.975 0.975 0.975 2.562 0 3.536-0.472 0.472-1.1 0.732-1.768 0.732z"></path>'},clip:{view:"0 0 32 32",path:'<path d="M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z"></path>'},
github:{view:"0 0 32 32",path:'<path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>'},
spotify:{view:"0 0 32 32",path:'<path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>'},
steam:{view:"0 0 32 32",path:'<path d="M15.972 0c-8.401 0-15.291 6.48-15.943 14.716l8.576 3.544c0.727-0.495 1.604-0.787 2.549-0.787 0.084 0 0.167 0.005 0.251 0.008l3.815-5.523v-0.079c0-3.327 2.704-6.032 6.032-6.032 3.325 0 6.032 2.708 6.032 6.036s-2.707 6.033-6.032 6.033h-0.14l-5.435 3.881c0 0.069 0.005 0.14 0.005 0.212 0 2.5-2.020 4.528-4.52 4.528-2.18 0-4.021-1.564-4.441-3.636l-6.14-2.543c1.901 6.716 8.067 11.64 15.391 11.64 8.836 0 15.999-7.164 15.999-16s-7.164-16-15.999-16zM10.053 24.28l-1.964-0.813c0.349 0.724 0.952 1.332 1.752 1.667 1.729 0.719 3.724-0.101 4.443-1.833 0.351-0.84 0.352-1.759 0.007-2.599s-1-1.495-1.836-1.844c-0.832-0.347-1.72-0.332-2.504-0.040l2.031 0.84c1.275 0.533 1.879 2 1.345 3.273-0.529 1.276-1.996 1.88-3.272 1.349zM25.273 11.876c0-2.216-1.804-4.020-4.020-4.020-2.22 0-4.020 1.804-4.020 4.020 0 2.22 1.8 4.020 4.020 4.020 2.217 0 4.020-1.8 4.020-4.020zM18.243 11.869c0-1.669 1.351-3.021 3.020-3.021 1.665 0 3.021 1.352 3.021 3.021 0 1.668-1.356 3.020-3.021 3.020-1.671 0-3.020-1.352-3.020-3.020z"></path>'},
"arrow-up":{view:"0 0 24 24",path:'<path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-5.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.096-0.096-0.206-0.168-0.324-0.217-0.122-0.051-0.253-0.076-0.383-0.076-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293v5.586c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>'},
"arrow-right":{view:"0 0 32 32",path:'<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>'},info:{view:"0 0 24 24",path:'<path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1zM12 9c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path>'},
projects:{view:"0 0 24 24",path:'<path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path>'}},
D,Ka={ease:ka(.25,.1,.25,1),custom:ka(.4,.3,.2,1)},K=!1,ra,z=null,P=null,I=-1,Q=!1,M=[],t,H,ea=!1,aa,wa=!1,R=[],A=[],u=null,Ga=[{r:229,g:57,b:53},{r:48,g:63,b:159},{r:0,g:121,b:107},{r:85,g:139,b:47},{r:69,g:39,b:160}],F,Da,N,ba=0,fa,ha,Fa;vHomeResizeTimeout=null;var W,Ia,O=null,ia,V,X,Ja,J;window.addEventListener("load",function(){"scrollRestoration"in history&&(history.scrollRestoration="manual");document.fonts.load('1rem "PT Serif"').then(function(){ja(!1)})});document.addEventListener("DOMContentLoaded",
function(){S();t=document.querySelector(".root");H=document.scrollingElement||document.documentElement;t.addEventListener("wheel",na);t.addEventListener("touchmove",na);C();t.addEventListener("click",Sa);localStorage.getItem("_idk_")?ta():document.addEventListener("keydown",sa)});window.addEventListener("popstate",ja)})();
