!function(){var t={33726:function(t){!function(e){const o={};let a,i=!1;function n(t,e){const o=e?t.parents(".safari-ios-decoration-fix"):t.parents(".safari-ios-decoration-fix-none");t.toggleClass("tcb-no-perspective",e),o.toggleClass("safari-ios-decoration-fix",!e).toggleClass("safari-ios-decoration-fix-none",e)}function s(t,e){const o=t.parents(".tve_ea_thrive_animation");o.length&&o.toggleClass("tcb-no-transform",e)}o.init=function(){a=o.videoScrolled.bind(this),document.addEventListener("scroll",a),e(".tcb-float-close-button").each(((t,e)=>{e.addEventListener("click",o.closeFloatVideo.bind(this,e),!1)}))},o.destroyFloating=function(){document.removeEventListener("scroll",a),e(".tcb-float-close-button").each(((t,e)=>{e.removeEventListener("click",o.closeFloatVideo.bind(this,e))}))},o.closeFloatVideo=function(t){e(t).parent(".tcb-video-float-container").addClass("tcb-float-closed"),o.videoScrolled()},o.videoScrolled=function(){e('.thrv_responsive_video[data-float="true"] .tcb-video-float-container iframe, .thrv_responsive_video[data-float="true"] .tcb-video-float-container video, .thrv_responsive_video[data-float="true"] .tcb-video-float-container .tve_responsive_video-no_video').each(((t,o)=>{const a=e(o),r=a.parents(".tcb-video-float-container"),d=a.parents(".thrv_responsive_video"),c=d.attr("data-float-position"),l=d.find(".video_overlay_image").attr("style")||"";let p=TCB_Front.getDisplayType()[0],u=parseInt(e("#wpadminbar").height());if(r.hasClass("tcb-float-closed")||!function(t){if(t.parents(".tcb-post-list").length)return!1;const e="true"===t.attr("data-float"),o=t.attr("data-float-visibility");if(e&&!o)return!0;const a=TCB_Front.getDisplayType();return-1===o.indexOf(a)}(d)||TCB_Front.isInViewport(a.parents(".thrv_responsive_video"),parseInt(a.width))){if(r.removeClass(c).css({width:"",height:"","margin-top":""}).parents(".tcb-col,.thrv-content-box,.thrv-page-section,#content,.theme-section").css("z-index",""),d.find(".video_overlay_image").removeClass(c).css({cssText:l,height:"",width:""}),!i){const t=d.position().left,e={left:t,right:t+d.width()};c.includes("top")||c.includes("keep")?(e.top=-parseInt(d.attr(`data-float-width-${p}`)),r.css(e)):c.includes("bottom")&&(e.bottom=parseInt(TCB_Front.Utils.windowWidth()),r.css(e)),d.find(".video_overlay_image").css({top:"",left:"",bottom:"",right:"","margin-top":""}),i=!0}n(d,!1),s(d,!1)}else{void 0===d.attr(`data-float-width-${p}`)&&("m"===p&&(d.attr("data-float-width-m",TCB_Front.$window.width()+"px;"),d.attr("data-float-padding1-m",0),d.attr("data-float-padding2-m",0),u=0),"t"===p&&(p="d"));const t="height: "+function(t){const e=parseFloat(t.height()/t.width()).toFixed(2),o=TCB_Front.getDisplayType()[0],a=t.attr(`data-float-width-${o}`)||t.attr("data-float-width-d"),i=parseInt(a)*e;return a.includes("px")?i+"px":i*TCB_Front.$body.width()/100+"px"}(d)+" !important;",e="width: "+d.attr(`data-float-width-${p}`)+" !important;";let o="";if(c.includes("keep-original")){const t=d.attr(`data-float-padding1-${p}`);TCB_Front.Utils.hasAdminBar()&&u&&(o+=`margin-top: ${u}px;`),o+=`top: ${t} !important; `}else c.split("-").forEach(((t,e)=>{const a=d.attr(`data-float-padding${e+1}-${p}`);TCB_Front.Utils.hasAdminBar()&&t.includes("top")&&u&&(o+=`margin-top: ${u}px;`),o+=`${t}: ${a} !important; `}));c&&(r.addClass(c).css({cssText:e+t+o}).parents(".tcb-col,.thrv-content-box,.thrv-page-section,#content,.theme-section").css("z-index",(TCB_Front.highestZIndex||0)+10),a.css("height",""),d.find("video").length&&function(t){t.find("video").css({"object-fit":"cover",height:"100%"})}(d),d.find(".video_overlay_image").addClass(c).css({cssText:l+e+t+"z-index:100000 !important; top:inherit; left:inherit; bottom:inherit; right: inherit; margin-top: inherit;"}),n(d,!0),s(r,!0),i=!1)}}))},o.restoreFloatingVideos=function(){e(".thrv_responsive_video").each(((t,o)=>{const a=e(o),i=a.find(".tcb-video-float-container"),n=a.attr("data-float-position"),s=a.find(".video_overlay_image").attr("style")||"";i.removeClass(n).css({width:"",height:""}),a.find(".video_overlay_image").removeClass(n).css({cssText:s,height:"",width:"",top:"",left:"",bottom:"",right:"","margin-top":""})}))},t.exports=o}(ThriveGlobal.$j)},98071:function(t,e,o){t.exports=(t,e)=>{const a='.tcb-video-cover:not([data-preload="1"]) .tcb-video-cover-image',i=o(58647)(t,e),n=o(48042),s=[];class r{static initVideoLazyLoad(e){const o=e.find(".thrv_responsive_video.tcb-lazy-load");0!==o.length&&(TCB_Front.add_scroll_callback((e=>{e>0&&o.each(((e,o)=>{const i=t(o);if(r.hasVideoCover(i)){const t=i.find(a);t.length>0&&r.lazyLoadThumbnail(t)}else r.lazyLoadVideo(i,"external"===o.dataset.type)}))})),o.each(((e,o)=>{const a=t(o);a.off("click").on("pointerover",(()=>r.preconnectAssets(a))).on("click",(()=>r.lazyLoadVideo(a,"external"===o.dataset.type,!0)))})))}static preventIframeLoad(e,o,a){const i=t(o).closest(".thrv_responsive_video");return a&&!TCB_Front.Utils.isEditorPage()&&r.shouldLazyLoad(i)&&(e=!0),e}static shouldLazyLoad(t){return t.hasClass("tcb-lazy-load")&&(r.hasVideoCover(t)||!TCB_Front.isInViewport(t,-150)||r.isInsideScreenFiller(t))}static isInsideScreenFiller(t){return"hidden"===t.closest(".tve-leads-screen-filler").css("visibility")}static hasVideoCover(t){return t.find(".video_overlay_image, .tcb-video-cover").length>0}static lazyLoadVideo(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=e.find(o?"source":"iframe"),n=i.attr("src");if(i.hasClass("tcb-video-lazy-loaded")||n&&n.length>0||!e.is(":visible")||r.isInsideScreenFiller(i)||!TCB_Front.isInViewport(e,-150)&&!a)return;i.hasClass("vooplayer")&&!TCB_Front.vooplayerScriptsLoaded&&(t.getScript("https://s3.spotlightr.com/assets/vooplayer.js"),TCB_Front.vooplayerScriptsLoaded=1);let s=i.attr("data-src");s&&"null"!==s&&(s=TCB_Front.Hooks.applyFilters("tcb.video.lazy_load.src",s,e),i.attr("src",s),o&&i.closest("video")[0].load()),i.removeAttr("data-src").addClass("tcb-dr-done tcb-video-lazy-loaded"),a&&TCB_Front.onVideoClick(e)}static lazyLoadThumbnails(e){e.find(a).each(((e,o)=>{const a=t(o);a.closest(".tcb-lazy-load").length>0&&r.lazyLoadThumbnail(a)}))}static lazyLoadThumbnail(t){if(!TCB_Front.Utils.isEditorPage()&&(t.hasClass("tcb-src-loaded")||!t.is(":visible")||!TCB_Front.isInViewport(t.closest(".thrv_responsive_video"),-250)))return;const e=t.attr("data-src");e&&"null"!==e&&t.attr("src",e),t.removeAttr("data-src"),TCB_Front.Utils.isEditorPage()||t.addClass("tcb-src-loaded")}static preconnectAssets(t){const e=t.attr("data-type");if(s.includes(e))return;let o=[];switch(e){case"youtube":o=i.getAssetsToPreconnect();break;case"vimeo":o=r.getVimeoAssetsToPreconnect();break;case"wistia":o=r.getWistiaAssetsToPreconnect();break;case"external":const e=t.find("source").attr("data-src");void 0!==e&&(o=[new URL(e).origin]);break;case"vooplayer":o=n.getAssetsToPreconnect()}o.forEach((t=>r.addPreconnectLink(t))),s.push(e)}static addPreconnectLink(t){const e=document.createElement("link");e.rel="preconnect",e.href=t,document.head.append(e)}static getVimeoAssetsToPreconnect(){return["https://f.vimeocdn.com","https://player.vimeo.com","https://i.vimeocdn.com"]}static getWistiaAssetsToPreconnect(){return["https://fast.wistia.net"]}}return r}},82215:function(t,e,o){t.exports=(t,e)=>{const a=o(60232),i=o(58647)(t,e),n=o(48042),s=o(98071)(t,e);class r{static get identifier(){return".thrv_responsive_video"}static init(){r.initHooks()}static initHooks(){t(e).on("tcb_after_dom_ready",(()=>r.onDomReady())).on("tcb_after_lightbox_open",((e,o)=>{t(o).find(`${r.identifier}:not([data-type="dynamic"])`).each(((e,o)=>r.autoplayVideo(t(o))))})).on("tcb_before_lightbox_close",((e,o)=>r.pauseVideos(t(o)))).on("tcb_on_content_hide",((e,o)=>r.pauseVideos(t(o)))).on("tve-content-revealed",((e,o)=>r.maybeAutoplayVideo(t(o)))).on("tcb_toggle_open",((e,o)=>r.maybeAutoplayVideo(t(o)))).on("tcb_toggle_close",((e,o)=>r.pauseVideos(t(o)))).on("tcb_on_content_show",((e,o)=>r.maybeAutoplayVideo(t(o)))).on("tve_after_content_toggle",((t,e,o)=>{o&&s.lazyLoadThumbnails(e)})),TCB_Front.Hooks.addFilter("tcb.is_iframe_load_prevented",s.preventIframeLoad)}static onDomReady(){const e=t("body");r.pauseVideos(t(".tve_p_lb_content")),r.pauseVideos(t(`${r.identifier}:hidden`)),i.onDomReady(),TCB_Front.Utils.isEditorPage()||(r.maybeAutoplayVideo(e),r.initOnClickEvent(),s.initVideoLazyLoad(e)),n.onDOMReady(),t(".tcb-video-background-el").each(((t,e)=>e.parentNode.classList.add("tcb-video-background-parent")))}static initOnClickEvent(){t(r.identifier).off("click.thumbnail").on("click.thumbnail",(e=>r.onClick(t(e.currentTarget),e)))}static onClick(t,e){const o=t.find(".video_overlay_image, .tcb-video-cover"),n=t.find(".tcb-video-float-container.tcb-float-closed").length>0;let s=t.find(".tcb-responsive-video").attr("data-provider");if(s||(s=t.attr("data-type")),TCB_Front.Hooks.doAction("tcb.video.before_autoplay",t,s),a.isCustomProvider(s)){if(!n)switch(s){case"youtube":i.play(t);break;case"vimeo":a.playIframeVideo(t,o,r.vimeoAutoplayString);break;case"wistia":a.playIframeVideo(t,o,r.wistiaAutoplayString)}}else a.isSelfHosted(s)&&r.toggleHtmlVideoPlay(t,e);o.length>0&&o.fadeOut()}static toggleHtmlVideoPlay(e,o){if((e.find(".tcb-video-cover:visible").length>0||!TCB_Front.browser.safari)&&(void 0===o||0===t(o.target).closest(".tcb-float-close-button").length)){const t=e.find("video").get(0);function o(e){setTimeout((function(){t[e]()}))}o(t.paused?"play":"pause")}}static maybeAutoplayVideo(e){let o;o=void 0===e?t(`${r.identifier}:not([data-type="dynamic"])`):e.find(`${r.identifier}:not([data-type="dynamic"])`),o.each(((e,o)=>{const a=t(o);0===a.parents(".tve_p_lb_content").length&&r.autoplayVideo(a)}))}static autoplayVideo(t){if(1!==parseInt(t.attr("data-autoplay")))return;const e=t.attr("data-type");let o="";switch(e){case"youtube":o=`&${i.autoplayString}&${i.mutedString}`;break;case"vimeo":o=`&${r.vimeoAutoplayString}&${r.vimeoMutedString}`;break;case"wistia":o=`&${r.wistiaAutoplayString}&${r.wistiaMutedString}`}if(a.isCustomProvider(e)){const e=t.find("iframe");let a=e.attr("src")||e.attr("data-src");a&&0!==a.length&&-1===a.indexOf(o)&&(a.includes("?")?"?"===a.slice(-1)&&(o=o.substring(1)):o=`?${o.substring(1)}`,a+=o,e.attr({src:a,"data-src":a}))}else if(a.isSelfHosted(e)){const e=t.find("video").get(0);e&&(e.muted=!0,e.paused&&e.play())}}static pauseVideos(t){t.find("video").each(((t,e)=>e.pause()))}static get vimeoAutoplayString(){return"autoplay=1"}static get vimeoMutedString(){return"muted=1"}static get wistiaAutoplayString(){return"autoPlay=true"}static get wistiaMutedString(){return"muted=true"}}return window.TCB_Front.playBackgroundYoutube=i.playBackgroundVideos,window.TCB_Front.refreshBackgroundYoutube=i.refreshBackgroundVideos,window.TCB_Front.onVideoClick=r.onClick,window.TCB_Front.changeAutoplayVideo=r.maybeAutoplayVideo,window.TCB_Front.makeAutoplayVideo=r.autoplayVideo,window.TCB_Front.Video=r,window.TCB_Front.floating=o(33726),r}},60232:function(t){const e=["youtube","vimeo","wistia"],o=["self","external","custom"];t.exports=class{static isCustomProvider(t){return e.includes(t)}static isSelfHosted(t){return o.includes(t)}static playIframeVideo(t,e,o){const a=t.find("iframe"),i=document.createElement("iframe"),n=TCB_Front.Utils.getAttr(a);a.remove(),n.allow="autoplay",n.src=`${n.src}${n.src.includes("?")?"&":"?"}${o}`;for(const t in n)try{i.setAttribute(t,n[t])}catch(e){console.warn(`${t} is an invalid attribute name`)}e.replaceWith(i),i.focus()}}},48042:function(t){(e=>{class o{static onDOMReady(){document.addEventListener("vooPlayerReady",o.playBackgroundVoo,!1),document.addEventListener("vooPlayerReady",o.changeVooOnPlay,!1),TCB_Front.Utils.isEditorPage()?e(".tcb-video-background-el iframe.tcb-voo-bg").each((function(){const t=TVE.inner_$(this),e=t.attr("src");t.attr("src",e)})):(e('.thrv_responsive_video[data-type="vooplayer"]').each(((t,o)=>{const a=e(o),i=a.outerHeight(),n=a.find(".tcb-video-cover,.video_overlay_image"),s=a.find("iframe");n.length>0&&s.length>0&&(a.find(".video-skin-player").css("z-index","-1"),s.before(n.css({height:s.height(),"max-height":i})),s.css("max-height",i))})),TCB_Front.floating.init()),TCB_Front.Hooks.addAction("tcb.video.before_autoplay",((t,e)=>{"vooplayer"===e&&t.find(".video-skin-player").css("z-index","")}))}static playBackgroundVoo(){e("iframe.tcb-voo-bg").each(((t,e)=>{const o=()=>{vooAPI(e.dataset.playerid,"onEnded",null,o),vooAPI(e.dataset.playerid,"play"),vooAPI(e.dataset.playerid,"volume",[0])};o()}))}static changeVooOnPlay(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:TCB_Front.$body;t&&t.jquery||(t=TCB_Front.$body),t.find("iframe.video-player-container").each(((t,o)=>{const a=()=>{e(o).css("pointer-events",""),e(o).parent().find("#theImg").remove()};o.src?a():vooAPI(o.dataset.playerid,"onPlay",null,(()=>{a()}))}))}static getAssetsToPreconnect(){return["https://s3.spotlightr.com"]}}t.exports=o,window.TCB_Front.changeVooOnPlay=o.changeVooOnPlay})(ThriveGlobal.$j)},26380:function(t){t.exports=(t,e)=>{class o{static initialize(t){e.onYouTubeIframeAPIReady=()=>{TCB_Front.youtubeApiFetched=1,t()},o.fetchIframeApi()}static isApiInitialized(){return 1===TCB_Front.youtubeApiFetched||void 0!==e.YT&&void 0!==e.YT.Player}static fetchIframeApi(){t.ajax({url:"https://www.youtube.com/iframe_api",type:"get",crossDomain:!0,cache:!0,dataType:"script"})}static getDefaultPlayerParameters(t){const e={autoplay:1,cc_load_policy:0,controls:0,disablekb:1,fs:0,iv_load_policy:0,modestbranding:1,playsinline:1,rel:0,showinfo:0,playlist:t};return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e.loop=1,e.listType="playlist"),e}static isPlaylist(t){return t&&34===t.length}static getAssetsToPreconnect(){return["https://www.youtube.com","https://www.google.com","https://googleads.g.doubleclick.net","https://static.doubleclick.net","https://www.gstatic.com"]}}return o}},47101:function(t,e,o){t.exports=(t,e)=>{const a=o(26380)(t,e),i=".tcb-yt-bg";class n{static resetVideo(t){const e=t.find(i);if(e.length>0){const t=e.closest(".tcb-video-background-el"),o=TVE.Components.background.controls.video.video_settings.get_embed_code("background");t.html(o),n.play(t.find(i))}}static play(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t("div.tcb-yt-bg:visible");e.length&&(a.isApiInitialized()?e.each(((e,o)=>{const i=o.getAttribute("data-yt-id");let n;n=a.isPlaylist(i)?new YT.Player(o.id,{playerVars:a.getDefaultPlayerParameters(i,!0),events:{onReady:t=>t.target.mute(),onStateChange:t=>t.target.mute()}}):new YT.Player(o.id,{videoId:i,playerVars:a.getDefaultPlayerParameters(i),events:{onReady:t=>{t.target.mute(),t.target.playVideo()},onStateChange:t=>{t.target&&t.target.mute&&t.target.mute(),t.data===(YT.PlayerState.ENDED||0)&&t.target.playVideo()}}}),TCB_Front.latestYoutubeBackgroundPlayerInstance=n,t(n.getIframe()).data("tcb-yt-player",n)})):a.initialize((()=>n.play(e))))}static refreshVideos(){e.YT&&e.YT.Player&&t("iframe.tcb-yt-bg").each(((e,o)=>{const a=t(o);a.data("tcb-yt-player")||n.play(a)}))}}return n}},58647:function(t,e,o){t.exports=(t,e)=>{const a=o(47101)(t,e),i=o(26380)(t,e);class n{static onDomReady(){n.initHooks(),n.playBackgroundVideos()}static initHooks(){TCB_Front.Utils.isEditorPage()?(TVE.add_action("tcb.element.duplicate",((t,e)=>a.resetVideo(e))),["sync","activate","create_display"].forEach((t=>TVE.add_action(`tve.conditional_display.${t}`,(t=>a.resetVideo(t)))))):(TCB_Front.Hooks.addFilter("tcb.video.lazy_load.src",((t,e)=>(t.includes("&enablejsapi=1")||"youtube"!==e.attr("data-type")||(t+="&enablejsapi=1"),t))),TCB_Front.Hooks.addAction("tcb.video.before_autoplay",((e,o)=>{if("youtube"!==o)return;const a=e.find("iframe")[0];t.each(a.attributes,((t,e)=>{let o=!1;e&&e.name.includes("data-gtm-yt-inspected")&&(a.removeAttribute(e.name),o=!0),o&&a.removeAttribute("id")}))})))}static play(e){if(!i.isApiInitialized())return void i.initialize((()=>n.play(e)));const o=e.find("iframe"),a=t("<div>"),s=TCB_Front.Utils.getAttr(o),r=new URL(TCB_Front.Utils.addHttp(o.attr("src"))),d=o.attr("data-code")?o.attr("data-code"):r.pathname.replace("/embed/",""),c=Object.fromEntries(r.searchParams.entries());c.autoplay=1,o.remove(),e.find(".video_overlay_image, .tcb-video-cover").replaceWith(a),TCB_Front.latestYoutubePlayerInstance=n.initYoutubePlayer(a,d,c),delete s.src;const l=e.find("iframe")[0];for(const t in s)try{l.setAttribute(t,s[t])}catch(e){console.warn(`${t} is an invalid attribute name`)}}static initYoutubePlayer(t,e,o){return new YT.Player(t[0],{videoId:e,playerVars:o,width:"100%",events:{onReady:t=>t.target.playVideo(),onError:t=>console.warn(t)}})}static playBackgroundVideos(t){a.play(t)}static refreshBackgroundVideos(){a.refreshVideos()}static getAssetsToPreconnect(){return i.getAssetsToPreconnect()}static get autoplayString(){return"autoplay=1"}static get mutedString(){return"mute=1"}}return window.TCB_Front.Youtube=n,n}}},e={};function o(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,o),n.exports}void 0===TCB_Front.js_modules.video&&TCB_Front.setModuleLoadedStatus("video",!1),(t=>{if(TCB_Front.isModuleLoaded("video"))return;const e=o(82215)(t,window);e.init(),window.TCB_Front.video=e,TCB_Front.setModuleLoadedStatus("video",!0)})(ThriveGlobal.$j)}();