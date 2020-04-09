module.exports=function(n,i){"use strict";var o={};function __webpack_require__(i){if(o[i]){return o[i].exports}var a=o[i]={i:i,l:false,exports:{}};n[i].call(a.exports,a,a.exports,__webpack_require__);a.l=true;return a.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(214)}return startup()}({214:function(n,i,o){"use strict";const a=o(747);const t=o(413);const p=o(761);const f=o(416);const c=o(589);const e=n=>Object.assign({level:9},n);n.exports=((n,i)=>{if(!n){return Promise.resolve(0)}return c(p.gzip)(n,e(i)).then(n=>n.length).catch(n=>0)});n.exports.sync=((n,i)=>p.gzipSync(n,e(i)).length);n.exports.stream=(n=>{const i=new t.PassThrough;const o=new t.PassThrough;const a=f(i,o);let c=0;const d=p.createGzip(e(n)).on("data",n=>{c+=n.length}).on("error",()=>{a.gzipSize=0}).on("end",()=>{a.gzipSize=c;a.emit("gzip-size",c);o.end()});i.pipe(d);i.pipe(o,{end:false});return a});n.exports.file=((i,o)=>{return new Promise((t,p)=>{const f=a.createReadStream(i);f.on("error",p);const c=f.pipe(n.exports.stream(o));c.on("error",p);c.on("gzip-size",t)})});n.exports.fileSync=((i,o)=>n.exports.sync(a.readFileSync(i),o))},413:function(n){n.exports=require("stream")},416:function(n,i,o){var a=o(413);var t=["write","end","destroy"];var p=["resume","pause"];var f=["data","close"];var c=Array.prototype.slice;n.exports=duplex;function forEach(n,i){if(n.forEach){return n.forEach(i)}for(var o=0;o<n.length;o++){i(n[o],o)}}function duplex(n,i){var o=new a;var e=false;forEach(t,proxyWriter);forEach(p,proxyReader);forEach(f,proxyStream);i.on("end",handleEnd);n.on("drain",function(){o.emit("drain")});n.on("error",reemit);i.on("error",reemit);o.writable=n.writable;o.readable=i.readable;return o;function proxyWriter(i){o[i]=method;function method(){return n[i].apply(n,arguments)}}function proxyReader(n){o[n]=method;function method(){o.emit(n);var a=i[n];if(a){return a.apply(i,arguments)}i.emit(n)}}function proxyStream(n){i.on(n,reemit);function reemit(){var i=c.call(arguments);i.unshift(n);o.emit.apply(o,i)}}function handleEnd(){if(e){return}e=true;var n=c.call(arguments);n.unshift("end");o.emit.apply(o,n)}function reemit(n){o.emit("error",n)}}},589:function(n){"use strict";const i=(n,i)=>(function(...o){const a=i.promiseModule;return new a((a,t)=>{if(i.multiArgs){o.push((...n)=>{if(i.errorFirst){if(n[0]){t(n)}else{n.shift();a(n)}}else{a(n)}})}else if(i.errorFirst){o.push((n,i)=>{if(n){t(n)}else{a(i)}})}else{o.push(a)}n.apply(this,o)})});n.exports=((n,o)=>{o=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:true,promiseModule:Promise},o);const a=typeof n;if(!(n!==null&&(a==="object"||a==="function"))){throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${n===null?"null":a}\``)}const t=n=>{const i=i=>typeof i==="string"?n===i:i.test(n);return o.include?o.include.some(i):!o.exclude.some(i)};let p;if(a==="function"){p=function(...a){return o.excludeMain?n(...a):i(n,o).apply(this,a)}}else{p=Object.create(Object.getPrototypeOf(n))}for(const a in n){const f=n[a];p[a]=typeof f==="function"&&t(a)?i(f,o):f}return p})},747:function(n){n.exports=require("fs")},761:function(n){n.exports=require("zlib")}});