define(["core/js/adapt","libraries/mediaelement-and-player"],function(e){var n=$.extend({},mejs.MediaElementPlayer.prototype);$.extend(mejs.MediaElementPlayer.prototype,{detectFullscreenMode:function(){var t=this.getVendorPrefix(),r="on"+t+"fullscreenchange";return null===document[r]&&(document[r]=function(){null!==document["moz"===t?"mozFullScreenElement":t+"FullscreenElement"]?($.inview.lock("mediaelement"),e.trigger("media:fullscreen:enter")):($.inview.unlock("mediaelement"),e.trigger("media:fullscreen:exit"))}),n.detectFullscreenMode.apply(this,arguments)},getVendorPrefix:function(){var n=e.device.browser.toLowerCase();return"internet explorer"===n?"ms":"firefox"===n?"moz":"webkit"}})});