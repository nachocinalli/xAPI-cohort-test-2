!function(e){function t(t){if(void 0===t)throw"Must specify a css attribute name";var r,a,i,o=this.getElementsByTagName("*"),n=[];if(e("body")[0].currentStyle)for(var u=(a=(i=t.replace(/-/g," "),i.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).replace(/ /g,"")).substr(0,1).toLowerCase()+a.substr(1),l=0,c=o.length;l<c;l++){"none"==(r=o[l]).currentStyle[u]||n.push(r)}else if(window.getComputedStyle)for(l=0,c=o.length;l<c;l++){r=o[l],"none"==document.defaultView.getComputedStyle(r,null).getPropertyValue(t)||n.push(r)}return n}e.fn.imageready||(e.fn.imageready=function(r,a){void 0===(a=a||{}).allowTimeout&&(a.allowTimeout=e.fn.imageready.allowTimeout,a.timeoutDuration=e.fn.imageready.timeoutDuration);var i,o=function(r){var a=r.find("img").add(r.filter("img"));if(r.each(function(){e(t.call(this,"background-image")).each(function(){var t=e(new Image),r=e(this).css("background-image"),i=/url\(([^)]*)\)/g.exec(r);if(null!==i){var o=i[1].replace(/[\"\']/g,"");t.attr("src",o),a=a.add(t)}})}),a.loaded=0,0!==a.length)return a}(this);if(!o)return r();function n(){clearTimeout(i);var t=[];return o.each(function(){if(!this._isImageReadyComplete){t.push(this);var r=e(this);console.error("image not loaded in time",r.attr("src"))}}),r(e(t))}function u(e){if(clearTimeout(i),e&&e.target&&(o.loaded++,e.currentTarget._isImageReadyComplete=!0),o.length<=o.loaded)return r();a.allowTimeout&&(i=setTimeout(n,a.timeoutDuration))}if(o.each(function(){var t,r,a,i,n,l,c,m=e(this);if(r=(t=m)[0],a=!t.attr("src"),i=r.complete,n=4===r.readyState,l=t.height()>0,c=void 0===r.naturalHeight||r.naturalHeight>0,a||i||n||l&&c)return o.loaded++;m.one("load",u),m.one("error",u),m.attr("src",m.attr("src"))}),o.length<=o.loaded)return u();a.allowTimeout&&(i=setTimeout(n,a.timeoutDuration))},e.fn.imageready.timeoutDuration=1,e.fn.imageready.allowTimeout=!1)}(jQuery);