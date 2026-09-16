var h={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},y={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},sr={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},$o=Object.entries(sr),o=$o.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),Hn={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Qe=$o.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...Hn}),fc=Object.entries(Qe).reduce((t,[e,i])=>{let a=o[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"}),Wo=Object.entries(o).reduce((t,[e,i])=>{let a=Qe[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),J={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},xe={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"};var xi={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},j={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ne={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};var Vo={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function Ko(t){return t?.map(Bn).join(" ")}function Bn(t){if(t){let{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function Go(t){return t?.map($n).join(" ")}function $n(t){if(t){let{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(s=>s!=null).join(":")}}function ct(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}var Pi=t=>new Promise(e=>setTimeout(e,t));var qo={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Yo,Gt={en:qo},ut=((Yo=globalThis.navigator)==null?void 0:Yo.language)||"en",Qo=t=>{ut=t};var Wn=t=>{var e,i,a;let[r]=ut.split("-");return((e=Gt[ut])==null?void 0:e[t])||((i=Gt[r])==null?void 0:i[t])||((a=Gt.en)==null?void 0:a[t])||t},zo=()=>{let[t]=ut.split("-");return Gt[ut]?ut:Gt[t]?t:"en"},m=(t,e={})=>Wn(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);var Zo=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Vn=(t,e)=>{let i=t===1?m(Zo[e].singular):m(Zo[e].plural);return`${t} ${i}`},ze=t=>{if(!ct(t))return"";let e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),s=[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,d)=>l&&Vn(l,d)).filter(l=>l).join(", ");return i?m("{time} remaining",{time:s}):s};function le(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),s=Math.floor(t/3600),l=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(s=r=a="0"),s=s>0||d>0?s+":":"",r=((s||l>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+s+r+a}var Sc=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});var Ni=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Hi=class extends Ni{},Fi=class extends Hi{constructor(){super(...arguments),this.role=null}},nr=class{observe(){}unobserve(){}disconnect(){}},Xo={createElement:function(){return new qt.HTMLElement},createElementNS:function(){return new qt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},qt={ResizeObserver:nr,document:Xo,Node:Hi,Element:Fi,HTMLElement:class extends Fi{constructor(){super(...arguments),this.innerHTML=""}get content(){return new qt.DocumentFragment}},DocumentFragment:class extends Ni{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Jo="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",jo=Object.keys(qt).every(t=>t in globalThis),n=Jo&&!jo?qt:globalThis,W=Jo&&!jo?Xo:globalThis.document;var es=new WeakMap,lr=t=>{let e=es.get(t);return e||es.set(t,e=new Set),e},ts=new n.ResizeObserver(t=>{for(let e of t)for(let i of lr(e.target))i(e)});function Bi(t,e){lr(t).add(e),ts.observe(t)}function $i(t,e){let i=lr(t);i.delete(e),i.size||ts.unobserve(t)}function F(t){let e={};for(let i of t)e[i.name]=i.value;return e}function is(t){var e;return(e=Gn(t))!=null?e:Pe(t,"media-controller")}function Gn(t){var e;let{MEDIA_CONTROLLER:i}=y,a=t.getAttribute(i);if(a)return(e=Yn(t))==null?void 0:e.getElementById(a)}var Wi=(t,e,i=".value")=>{let a=t.querySelector(i);a&&(a.textContent=e)},qn=(t,e)=>{let i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Vi=(t,e)=>qn(t,e)[0],ve=(t,e)=>!t||!e?!1:t?.contains(e)?!0:ve(t,e.getRootNode().host),Pe=(t,e)=>{if(!t)return null;let i=t.closest(e);return i||Pe(t.getRootNode().host,e)};function dr(t=document){var e;let i=t?.activeElement;return i?(e=dr(i.shadowRoot))!=null?e:i:null}function Yn(t){var e;let i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Ki(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){let s=getComputedStyle(r);if(i&&s.opacity==="0"||a&&s.visibility==="hidden"||s.display==="none")return!1;r=r.parentElement,e--}return!0}function as(t,e,i,a){let r=a.x-i.x,s=a.y-i.y,l=r*r+s*s;if(l===0)return 0;let d=((t-i.x)*r+(e-i.y)*s)/l;return Math.max(0,Math.min(1,d))}function x(t,e){let i=Qn(t,a=>a===e);return i||cr(t,e)}function Qn(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let s;try{s=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(let l of s??[])if(e(l.selectorText))return l}}function cr(t,e){var i,a;let r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],s=r?.[r.length-1];if(!s?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let l=s?.sheet.insertRule(`${e}{}`,s.sheet.cssRules.length);return(a=s.sheet.cssRules)==null?void 0:a[l]}function D(t,e,i=Number.NaN){let a=t.getAttribute(e);return a!=null?+a:i}function U(t,e,i){let a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}D(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function _(t,e){return t.hasAttribute(e)}function g(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}_(t,e)!=i&&t.toggleAttribute(e,i)}function w(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function L(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}let a=`${i}`;w(t,e,void 0)!==a&&t.setAttribute(e,a)}var rs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},de=(t,e,i)=>(rs(t,e,"read from private field"),i?i.call(t):e.get(t)),zn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Gi=(t,e,i,a)=>(rs(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Q;function Zn(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var ht=class extends n.HTMLElement{constructor(){if(super(),zn(this,Q,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER,o.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,s,l,d,c;e===y.MEDIA_CONTROLLER&&(i&&((s=(r=de(this,Q))==null?void 0:r.unassociateElement)==null||s.call(r,this),Gi(this,Q,null)),a&&this.isConnected&&(Gi(this,Q,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=de(this,Q))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Gi(this,Q,Xn(this)),this.getAttribute(y.MEDIA_CONTROLLER)&&((i=(e=de(this,Q))==null?void 0:e.associateElement)==null||i.call(e,this)),de(this,Q)&&(de(this,Q).addEventListener("pointerdown",this),de(this,Q).addEventListener("click",this),de(this,Q).hasAttribute("tabindex")||(de(this,Q).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(y.MEDIA_CONTROLLER)&&((i=(e=de(this,Q))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=de(this,Q))==null||a.removeEventListener("pointerdown",this),(r=de(this,Q))==null||r.removeEventListener("click",this),Gi(this,Q,null)}handleEvent(e){var i;let a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:s,clientY:l}=e,{left:d,top:c,width:M,height:S}=this.getBoundingClientRect(),T=s-d,f=l-c;if(T<0||f<0||T>M||f>S||M===0&&S===0)return;let p=this._pointerType||"mouse";if(this._pointerType=void 0,p===xi.TOUCH){this.handleTap(e);return}else if(p===xi.MOUSE||p===xi.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return _(this,o.MEDIA_PAUSED)}set mediaPaused(e){g(this,o.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let i=this.mediaPaused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n.CustomEvent(i,{composed:!0,bubbles:!0}))}};Q=new WeakMap;ht.shadowRootOptions={mode:"open"};ht.getTemplateHTML=Zn;function Xn(t){var e;let i=t.getAttribute(y.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Pe(t,"media-controller")}n.customElements.get("media-gesture-receiver")||n.customElements.define("media-gesture-receiver",ht);var qi=ht;var pr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},B=(t,e,i)=>(pr(t,e,"read from private field"),i?i.call(t):e.get(t)),X=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ce=(t,e,i,a)=>(pr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ue=(t,e,i)=>(pr(t,e,"access private method"),i),Yt,zi,mt,vt,Et,ur,pt,Yi,hr,os,mr,ss,Qt,Zi,Xi,Er,ft,zt,Ne,Qi,b={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function Jn(t){return`
    <style>
      
      :host([${o.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${b.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${b.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${b.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${b.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${b.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${b.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${b.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${b.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${b.USER_INACTIVE}]:not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_AIRPLAYING}]):not([${o.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${b.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${b.USER_INACTIVE}]:not([${b.NO_AUTOHIDE}]):not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${b.USER_INACTIVE}][${b.AUTOHIDE_OVER_CONTROLS}]:not([${b.NO_AUTOHIDE}]):not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${b.AUDIO}])[${o.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${qi.shadowRootOptions.mode}">
          ${qi.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var jn=Object.values(o),el="sm:384 md:576 lg:768 xl:960";function tl(t){ns(t.target,t.contentRect.width)}function ns(t,e){var i;if(!t.isConnected)return;let a=(i=t.getAttribute(b.BREAKPOINTS))!=null?i:el,r=il(a),s=al(r,e),l=!1;if(Object.keys(r).forEach(d=>{if(s.includes(d)){t.hasAttribute(`breakpoint${d}`)||(t.setAttribute(`breakpoint${d}`,""),l=!0);return}t.hasAttribute(`breakpoint${d}`)&&(t.removeAttribute(`breakpoint${d}`),l=!0)}),l){let d=new CustomEvent(Qe.BREAKPOINTS_CHANGE,{detail:s});t.dispatchEvent(d)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(Qe.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function il(t){let e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function al(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}var Ze=class extends n.HTMLElement{constructor(){if(super(),X(this,hr),X(this,mr),X(this,Qt),X(this,Xi),X(this,ft),X(this,Yt,void 0),X(this,zi,0),X(this,mt,null),X(this,vt,null),X(this,Et,void 0),this.breakpointsComputed=!1,X(this,ur,e=>{let i=this.media;for(let a of e){if(a.type!=="childList")continue;let r=a.removedNodes;for(let s of r){if(s.slot!="media"||a.target!=this)continue;let l=a.previousSibling&&a.previousSibling.previousElementSibling;if(!l||!i)this.mediaUnsetCallback(s);else{let d=l.slot!=="media";for(;(l=l.previousSibling)!==null;)l.slot=="media"&&(d=!1);d&&this.mediaUnsetCallback(s)}}if(i)for(let s of a.addedNodes)s===i&&this.handleMediaUpdated(i)}}),X(this,pt,!1),X(this,Yi,e=>{B(this,pt)||(setTimeout(()=>{tl(e),ce(this,pt,!1)},0),ce(this,pt,!0))}),X(this,Ne,void 0),X(this,Qi,()=>{if(!B(this,Ne).assignedElements({flatten:!0}).length){B(this,mt)&&this.mediaUnsetCallback(B(this,mt));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}ce(this,Yt,new MutationObserver(B(this,ur)))}static get observedAttributes(){return[b.AUTOHIDE,b.GESTURES_DISABLED].concat(jn).filter(e=>![o.MEDIA_RENDITION_LIST,o.MEDIA_AUDIO_TRACK_LIST,o.MEDIA_CHAPTERS_CUES,o.MEDIA_WIDTH,o.MEDIA_HEIGHT,o.MEDIA_ERROR,o.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==b.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(ce(this,mt,e),e.localName.includes("-")&&await n.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;B(this,Yt).observe(this,{childList:!0,subtree:!0}),Bi(this,B(this,Yi));let a=this.getAttribute(b.AUDIO)!=null?m("audio player"):m("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(b.USER_INACTIVE,""),ns(this,this.getBoundingClientRect().width);let r=this.querySelector(":scope > slot[slot=media]");r&&(ce(this,Ne,r),B(this,Ne).addEventListener("slotchange",B(this,Qi))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=n.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;$i(this,B(this,Yi)),clearTimeout(B(this,vt)),B(this,Yt).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=n.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),B(this,Ne)&&(B(this,Ne).removeEventListener("slotchange",B(this,Qi)),ce(this,Ne,null)),ce(this,pt,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){ce(this,mt,null)}handleEvent(e){switch(e.type){case"pointerdown":ce(this,zi,e.timeStamp);break;case"pointermove":ue(this,hr,os).call(this,e);break;case"pointerup":ue(this,mr,ss).call(this,e);break;case"mouseleave":ue(this,Qt,Zi).call(this);break;case"mouseup":this.removeAttribute(b.KEYBOARD_CONTROL);break;case"keyup":ue(this,ft,zt).call(this),this.setAttribute(b.KEYBOARD_CONTROL,"");break}}set autohide(e){let i=Number(e);ce(this,Et,isNaN(i)?0:i)}get autohide(){return(B(this,Et)===void 0?2:B(this,Et)).toString()}get breakpoints(){return w(this,b.BREAKPOINTS)}set breakpoints(e){L(this,b.BREAKPOINTS,e)}get audio(){return _(this,b.AUDIO)}set audio(e){g(this,b.AUDIO,e)}get gesturesDisabled(){return _(this,b.GESTURES_DISABLED)}set gesturesDisabled(e){g(this,b.GESTURES_DISABLED,e)}get keyboardControl(){return _(this,b.KEYBOARD_CONTROL)}set keyboardControl(e){g(this,b.KEYBOARD_CONTROL,e)}get noAutohide(){return _(this,b.NO_AUTOHIDE)}set noAutohide(e){g(this,b.NO_AUTOHIDE,e)}get autohideOverControls(){return _(this,b.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){g(this,b.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return _(this,b.USER_INACTIVE)}set userInteractive(e){g(this,b.USER_INACTIVE,e)}};Yt=new WeakMap;zi=new WeakMap;mt=new WeakMap;vt=new WeakMap;Et=new WeakMap;ur=new WeakMap;pt=new WeakMap;Yi=new WeakMap;hr=new WeakSet;os=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-B(this,zi)<250)return;ue(this,Xi,Er).call(this),clearTimeout(B(this,vt));let e=this.hasAttribute(b.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&ue(this,ft,zt).call(this)};mr=new WeakSet;ss=function(t){if(t.pointerType==="touch"){let e=!this.hasAttribute(b.USER_INACTIVE);[this,this.media].includes(t.target)&&e?ue(this,Qt,Zi).call(this):ue(this,ft,zt).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&ue(this,ft,zt).call(this)};Qt=new WeakSet;Zi=function(){if(B(this,Et)<0||this.hasAttribute(b.USER_INACTIVE))return;this.setAttribute(b.USER_INACTIVE,"");let t=new n.CustomEvent(Qe.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Xi=new WeakSet;Er=function(){if(!this.hasAttribute(b.USER_INACTIVE))return;this.removeAttribute(b.USER_INACTIVE);let t=new n.CustomEvent(Qe.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};ft=new WeakSet;zt=function(){ue(this,Xi,Er).call(this),clearTimeout(B(this,vt));let t=parseInt(this.autohide);t<0||ce(this,vt,setTimeout(()=>{ue(this,Qt,Zi).call(this)},t*1e3))};Ne=new WeakMap;Qi=new WeakMap;Ze.shadowRootOptions={mode:"open"};Ze.getTemplateHTML=Jn;n.customElements.get("media-container")||n.customElements.define("media-container",Ze);var ls=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},q=(t,e,i)=>(ls(t,e,"read from private field"),i?i.call(t):e.get(t)),Zt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ji=(t,e,i,a)=>(ls(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),_t,gt,ji,Xe,Ce,He,bt=class{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Zt(this,Ce),Zt(this,_t,void 0),Zt(this,gt,void 0),Zt(this,ji,void 0),Zt(this,Xe,new Set),Ji(this,_t,e),Ji(this,gt,i),Ji(this,ji,new Set(a))}[Symbol.iterator](){return q(this,Ce,He).values()}get length(){return q(this,Ce,He).size}get value(){var e;return(e=[...q(this,Ce,He)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Ji(this,Xe,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...q(this,Ce,He)][e]}values(){return q(this,Ce,He).values()}forEach(e,i){q(this,Ce,He).forEach(e,i)}add(...e){var i,a;e.forEach(r=>q(this,Xe).add(r)),!(this.value===""&&!((i=q(this,_t))!=null&&i.hasAttribute(`${q(this,gt)}`)))&&((a=q(this,_t))==null||a.setAttribute(`${q(this,gt)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>q(this,Xe).delete(a)),(i=q(this,_t))==null||i.setAttribute(`${q(this,gt)}`,`${this.value}`)}contains(e){return q(this,Ce,He).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}};_t=new WeakMap;gt=new WeakMap;ji=new WeakMap;Xe=new WeakMap;Ce=new WeakSet;He=function(){return q(this,Xe).size?q(this,Xe):q(this,ji)};var rl=(t="")=>t.split(/\s+/),ds=(t="")=>{let[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?J.CAPTIONS:J.SUBTITLES,language:i,label:r}},vr=(t="",e={})=>rl(t).map(i=>{let a=ds(i);return{...e,...a}}),fr=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?ds(e):e):typeof t=="string"?vr(t):[t]:[],ol=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Xt=(t=[])=>Array.prototype.map.call(t,ol).join(" "),sl=(t,e)=>i=>i[t]===e,cs=t=>{let e=Object.entries(t).map(([i,a])=>sl(i,a));return i=>e.every(a=>a(i))},Je=(t,e=[],i=[])=>{let a=fr(i).map(cs),r=s=>a.some(l=>l(s));Array.from(e).filter(r).forEach(s=>{s.mode=t})},je=(t,e=()=>!0)=>{if(!t?.textTracks)return[];let i=typeof e=="function"?e:cs(e);return Array.from(t.textTracks).filter(i)},us=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(o.MEDIA_SUBTITLES_SHOWING)};var ms=t=>{var e;let{media:i,fullscreenElement:a}=t;try{let r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let s=(e=a[r])==null?void 0:e.call(a);if(s instanceof Promise)return s.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},hs="exitFullscreen"in W?"exitFullscreen":"webkitExitFullscreen"in W?"webkitExitFullscreen":"webkitCancelFullScreen"in W?"webkitCancelFullScreen":void 0,ps=t=>{var e;let{documentElement:i}=t;if(hs){let a=(e=i?.[hs])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Jt="fullscreenElement"in W?"fullscreenElement":"webkitFullscreenElement"in W?"webkitFullscreenElement":void 0,nl=t=>{let{documentElement:e,media:i}=t,a=e?.[Jt];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Vo.FULLSCREEN?i:a},Es=t=>{var e;let{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;let s=nl(t);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let l=s.shadowRoot;if(!(Jt in l))return ve(s,r);for(;l?.[Jt];){if(l[Jt]===r)return!0;l=(e=l[Jt])==null?void 0:e.shadowRoot}}return!1},ll="fullscreenEnabled"in W?"fullscreenEnabled":"webkitFullscreenEnabled"in W?"webkitFullscreenEnabled":void 0,vs=t=>{let{documentElement:e,media:i}=t;return!!e?.[ll]||i&&"webkitSupportsFullscreen"in i};var ea,_r=()=>{var t,e;return ea||(ea=(e=(t=W)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),ea)},fs=async(t=_r())=>{if(!t)return!1;let e=t.volume;t.volume=e/2+.1;let i=new AbortController,a=await Promise.race([dl(t,i.signal),cl(t,e)]);return i.abort(),a},dl=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),cl=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Pi(10)}return t.volume!==e},ul=/.*Version\/.*Safari\/.*/.test(n.navigator.userAgent),gr=(t=_r())=>n.matchMedia("(display-mode: standalone)").matches&&ul?!1:typeof t?.requestPictureInPicture=="function",br=(t=_r())=>vs({documentElement:W,media:t}),_s=br(),gs=gr(),bs=!!n.WebKitPlaybackTargetAvailabilityEvent,As=!!n.chrome;var At=t=>je(t.media,e=>[J.SUBTITLES,J.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Ar=t=>je(t.media,e=>e.mode===xe.SHOWING&&[J.SUBTITLES,J.CAPTIONS].includes(e.kind)),ta=(t,e)=>{let i=At(t),a=Ar(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Je(xe.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let s=i[0],{options:l}=t;if(!l?.noSubtitlesLangPref){let S=n.localStorage.getItem("media-chrome-pref-subtitles-lang"),T=S?[S,...n.navigator.languages]:n.navigator.languages,f=i.filter(p=>T.some(A=>p.language.toLowerCase().startsWith(A.split("-")[0]))).sort((p,A)=>{let v=T.findIndex(I=>p.language.toLowerCase().startsWith(I.split("-")[0])),k=T.findIndex(I=>A.language.toLowerCase().startsWith(I.split("-")[0]));return v-k});f[0]&&(s=f[0])}let{language:d,label:c,kind:M}=s;Je(xe.DISABLED,i,a),Je(xe.SHOWING,i,[{language:d,label:c,kind:M}])}}},ia=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?hl(t,e):Object.entries(t).every(([i,a])=>i in e&&ia(a,e[i])),hl=(t,e)=>{let i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,s)=>ia(r,e[s])):!0};var ml=Object.values(ne),aa,pl=fs().then(t=>(aa=t,aa)),Ts=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof n.HTMLElement))return;let i=e.localName;if(!i.includes("-"))return;let a=n.customElements.get(i);a&&e instanceof a||(await n.customElements.whenDefined(i),n.customElements.upgrade(e))}))},El=new n.DOMParser,vl=t=>t&&(El.parseFromString(t,"text/html").body.textContent||t),Tt={mediaError:{get(t,e){let{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;let{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;let{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;let{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;let{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;let{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;let{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){let{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;let{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;let{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){let{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;let{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){let{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{let r=n.localStorage.getItem("media-chrome-pref-muted")!==null,s=i.hasAttribute("muted");if(a){r&&n.localStorage.removeItem("media-chrome-pref-muted");return}if(s&&!r)return;n.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{let{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{let r=n.localStorage.getItem("media-chrome-pref-muted")==="true";Tt.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){let{media:e}=t;return e?.loop},set(t,e){let{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;let{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){let{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?n.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&n.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{let{options:{noVolumePref:i}}=e;if(!i)try{let{media:a}=e;if(!a)return;let r=n.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Tt.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){let{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;let{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){let{media:i}=e;!i||!ct(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){let{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){let{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;let{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;let{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,s)=>[Number(a.start(s).toFixed(3)),Number(a.end(s).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){let{media:e,options:{defaultStreamType:i}={}}=t,a=[ne.LIVE,ne.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;let{streamType:r}=e;if(ml.includes(r))return r===ne.UNKNOWN?a:r;let s=e.duration;return s===1/0?ne.LIVE:Number.isFinite(s)?ne.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){let{media:e}=t;if(!e)return Number.NaN;let{targetLiveWindow:i}=e,a=Tt.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ne.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){let{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Tt.mediaStreamType.get(t)===ne.LIVE))return!1;let r=e.seekable;if(!r)return!0;if(!r.length)return!1;let s=r.end(r.length-1)-i;return e.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return At(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Ar(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;let{media:r,options:s}=e;if(!r)return;let l=d=>{var c;!s.defaultSubtitles||d&&![J.CAPTIONS,J.SUBTITLES].includes((c=d?.track)==null?void 0:c.kind)||ta(e,!0)};return r.addEventListener("loadstart",l),(i=r.textTracks)==null||i.addEventListener("addtrack",l),(a=r.textTracks)==null||a.addEventListener("removetrack",l),()=>{var d,c;r.removeEventListener("loadstart",l),(d=r.textTracks)==null||d.removeEventListener("addtrack",l),(c=r.textTracks)==null||c.removeEventListener("removetrack",l)}}]},mediaChaptersCues:{get(t){var e;let{media:i}=t;if(!i)return[];let[a]=je(i,{kind:J.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:s,endTime:l})=>({text:vl(r),startTime:s,endTime:l}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;let{media:a}=e;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),s?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),s?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;let{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?ve(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let s=r.pictureInPictureElement.shadowRoot;for(;s?.pictureInPictureElement;){if(s.pictureInPictureElement===a)return!0;s=(i=s.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){let{media:i}=e;if(i)if(t){if(!W.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){let s=()=>{i.removeEventListener("loadedmetadata",l),i.preload="none"},l=()=>{i.requestPictureInPicture().catch(a),s()};i.addEventListener("loadedmetadata",l),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),s()},1e3)}else throw r}else throw r})}else W.pictureInPictureElement&&W.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;let{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;let{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){let{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=t,r=Array.prototype.findIndex.call(i.videoRenditions,s=>s.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;let{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;let{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){let{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}let a=t;for(let r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Es(t)},set(t,e,i){var a,r;t?(ms(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):ps(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;let{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;let{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){let{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&n.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){let{media:e}=t;if(!_s||!br(e))return j.UNSUPPORTED}},mediaPipUnavailable:{get(t){let{media:e}=t;if(!gs||!gr(e))return j.UNSUPPORTED;if(e?.disablePictureInPicture)return j.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){let{media:e}=t;if(aa===!1||e?.volume==null)return j.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{aa==null&&pl.then(e=>t(e?void 0:j.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;let{media:a}=t;if(!As||!((i=a?.remote)!=null&&i.state))return j.UNSUPPORTED;if(!(e==null||e==="available"))return j.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;let{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a?.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!bs)return j.UNSUPPORTED;if(e?.availability==="not-available")return j.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;let{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a?.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;let{media:i}=t;if(!i?.videoRenditions)return j.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return j.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;let{media:a}=t;if(!a?.audioTracks)return j.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return j.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){let{options:{mediaLang:e}={}}=t;return e??"en"}}};var Is={[h.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,s;let{media:l}=e,d=i??void 0,c,M;if(l&&d!=null){let[p]=je(l,{kind:J.METADATA,label:"thumbnails"}),A=Array.prototype.find.call((a=p?.cues)!=null?a:[],(v,k,I)=>k===0?v.endTime>d:k===I.length-1?v.startTime<=d:v.startTime<=d&&v.endTime>d);if(A){let v=/'^(?:[a-z]+:)?\/\//i.test(A.text)||(r=l?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,k=new URL(A.text,v);M=new URLSearchParams(k.hash).get("#xywh").split(",").map(Z=>+Z),c=k.href}}let S=t.mediaDuration.get(e),f=(s=t.mediaChaptersCues.get(e).find((p,A,v)=>A===v.length-1&&S===p.endTime?p.startTime<=d&&p.endTime>=d:p.startTime<=d&&p.endTime>d))==null?void 0:s.text;return i!=null&&f==null&&(f=""),{mediaPreviewTime:d,mediaPreviewImage:c,mediaPreviewCoords:M,mediaPreviewChapter:f}},[h.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[h.MEDIA_PLAY_REQUEST](t,e){var i,a,r,s;let l="mediaPaused",c=t.mediaStreamType.get(e)===ne.LIVE,M=!((i=e.options)!=null&&i.noAutoSeekToLive),S=t.mediaTargetLiveWindow.get(e)>0;if(c&&M&&!S){let T=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(T){let f=(s=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?s:0,p=T-f;t.mediaCurrentTime.set(p,e)}}t[l].set(!1,e)},[h.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){let a="mediaPlaybackRate",r=i;t[a].set(r,e)},[h.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[h.MEDIA_UNMUTE_REQUEST](t,e){let i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[h.MEDIA_LOOP_REQUEST](t,e,{detail:i}){let a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[h.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){let a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[h.MEDIA_SEEK_REQUEST](t,e,{detail:i}){let a="mediaCurrentTime",r=i;t[a].set(r,e)},[h.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;let s="mediaCurrentTime",l=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(l)))return;let d=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,c=l-d;t[s].set(c,e)},[h.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;let{options:r}=e,s=At(e),l=fr(i),d=(a=l[0])==null?void 0:a.language;d&&!r.noSubtitlesLangPref&&n.localStorage.setItem("media-chrome-pref-subtitles-lang",d),Je(xe.SHOWING,s,l)},[h.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){let a=At(e),r=i??[];Je(xe.DISABLED,a,r)},[h.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){ta(e,i)},[h.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){let a="mediaRenditionSelected",r=i;t[a].set(r,e)},[h.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){let a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[h.MEDIA_ENTER_PIP_REQUEST](t,e){let i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[h.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[h.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){let a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[h.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[h.MEDIA_ENTER_CAST_REQUEST](t,e){let i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[h.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[h.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}};var Ss=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Tt,requestMap:r=Is,options:s={},monitorStateOwnersOnlyWithSubscriptions:l=!0})=>{let d=[],c={options:{...s}},M=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),S=v=>{v!=null&&(ia(v,M)||(M=Object.freeze({...M,...v}),d.forEach(k=>k(M))))},T=()=>{let v=Object.entries(a).reduce((k,[I,{get:Z}])=>(k[I]=Z(c),k),{});S(v)},f={},p,A=async(v,k)=>{var I,Z,$t,Wt,nt,Re,De,Vt,Ye,Eo,vo,fo,_o,go,bo,Ao;let Rn=!!p;if(p={...c,...p??{},...v},Rn)return;await Ts(...Object.values(v));let lt=d.length>0&&k===0&&l,To=c.media!==p.media,Io=((I=c.media)==null?void 0:I.textTracks)!==((Z=p.media)==null?void 0:Z.textTracks),So=(($t=c.media)==null?void 0:$t.videoRenditions)!==((Wt=p.media)==null?void 0:Wt.videoRenditions),Mo=((nt=c.media)==null?void 0:nt.audioTracks)!==((Re=p.media)==null?void 0:Re.audioTracks),yo=((De=c.media)==null?void 0:De.remote)!==((Vt=p.media)==null?void 0:Vt.remote),ko=c.documentElement!==p.documentElement,Lo=!!c.media&&(To||lt),wo=!!((Ye=c.media)!=null&&Ye.textTracks)&&(Io||lt),Ro=!!((Eo=c.media)!=null&&Eo.videoRenditions)&&(So||lt),Do=!!((vo=c.media)!=null&&vo.audioTracks)&&(Mo||lt),Co=!!((fo=c.media)!=null&&fo.remote)&&(yo||lt),Oo=!!c.documentElement&&(ko||lt),or=Lo||wo||Ro||Do||Co||Oo,dt=d.length===0&&k===1&&l,Uo=!!p.media&&(To||dt),xo=!!((_o=p.media)!=null&&_o.textTracks)&&(Io||dt),Po=!!((go=p.media)!=null&&go.videoRenditions)&&(So||dt),No=!!((bo=p.media)!=null&&bo.audioTracks)&&(Mo||dt),Ho=!!((Ao=p.media)!=null&&Ao.remote)&&(yo||dt),Fo=!!p.documentElement&&(ko||dt),Bo=Uo||xo||Po||No||Ho||Fo;if(!(or||Bo)){Object.entries(p).forEach(([O,Kt])=>{c[O]=Kt}),T(),p=void 0;return}Object.entries(a).forEach(([O,{get:Kt,mediaEvents:Dn=[],textTracksEvents:Cn=[],videoRenditionsEvents:On=[],audioTracksEvents:Un=[],remoteEvents:xn=[],rootEvents:Pn=[],stateOwnersUpdateHandlers:Nn=[]}])=>{f[O]||(f[O]={});let te=N=>{let $=Kt(c,N);S({[O]:$})},G;G=f[O].mediaEvents,Dn.forEach(N=>{G&&Lo&&(c.media.removeEventListener(N,G),f[O].mediaEvents=void 0),Uo&&(p.media.addEventListener(N,te),f[O].mediaEvents=te)}),G=f[O].textTracksEvents,Cn.forEach(N=>{var $,se;G&&wo&&(($=c.media.textTracks)==null||$.removeEventListener(N,G),f[O].textTracksEvents=void 0),xo&&((se=p.media.textTracks)==null||se.addEventListener(N,te),f[O].textTracksEvents=te)}),G=f[O].videoRenditionsEvents,On.forEach(N=>{var $,se;G&&Ro&&(($=c.media.videoRenditions)==null||$.removeEventListener(N,G),f[O].videoRenditionsEvents=void 0),Po&&((se=p.media.videoRenditions)==null||se.addEventListener(N,te),f[O].videoRenditionsEvents=te)}),G=f[O].audioTracksEvents,Un.forEach(N=>{var $,se;G&&Do&&(($=c.media.audioTracks)==null||$.removeEventListener(N,G),f[O].audioTracksEvents=void 0),No&&((se=p.media.audioTracks)==null||se.addEventListener(N,te),f[O].audioTracksEvents=te)}),G=f[O].remoteEvents,xn.forEach(N=>{var $,se;G&&Co&&(($=c.media.remote)==null||$.removeEventListener(N,G),f[O].remoteEvents=void 0),Ho&&((se=p.media.remote)==null||se.addEventListener(N,te),f[O].remoteEvents=te)}),G=f[O].rootEvents,Pn.forEach(N=>{G&&Oo&&(c.documentElement.removeEventListener(N,G),f[O].rootEvents=void 0),Fo&&(p.documentElement.addEventListener(N,te),f[O].rootEvents=te)});let Ui=f[O].stateOwnersUpdateHandlers;if(Ui&&or&&(Array.isArray(Ui)?Ui:[Ui]).forEach($=>{typeof $=="function"&&$()}),Bo){let N=Nn.map($=>$(te,p)).filter($=>typeof $=="function");f[O].stateOwnersUpdateHandlers=N.length===1?N[0]:N}else or&&(f[O].stateOwnersUpdateHandlers=void 0)}),Object.entries(p).forEach(([O,Kt])=>{c[O]=Kt}),T(),p=void 0};return A({media:t,fullscreenElement:e,documentElement:i,options:s}),{dispatch(v){let{type:k,detail:I}=v;if(r[k]&&M.mediaErrorCode==null){S(r[k](a,c,v));return}k==="mediaelementchangerequest"?A({media:I}):k==="fullscreenelementchangerequest"?A({fullscreenElement:I}):k==="documentelementchangerequest"?A({documentElement:I}):k==="optionschangerequest"&&(Object.entries(I??{}).forEach(([Z,$t])=>{c.options[Z]=$t}),T())},getState(){return M},subscribe(v){return A({},d.length+1),d.push(v),v(M),()=>{let k=d.indexOf(v);k>=0&&(A({},d.length-1),d.splice(k,1))}}}};var kr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},E=(t,e,i)=>(kr(t,e,"read from private field"),i?i.call(t):e.get(t)),ae=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},he=(t,e,i,a)=>(kr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),jt=(t,e,i)=>(kr(t,e,"access private method"),i),Oe,ei,R,_e,ti,fe,ra,ii,oa,Tr,tt,sa,Ir,Sr,Ds,Cs=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Ms=10,ys=.025,ks=.25,fl=.25,_l=2,u={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},Mr=class extends Ze{constructor(){super(),ae(this,oa),ae(this,sa),ae(this,Sr),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ae(this,Oe,new bt(this,u.HOTKEYS)),ae(this,ei,void 0),ae(this,R,void 0),ae(this,_e,null),ae(this,ti,void 0),ae(this,fe,void 0),ae(this,ra,i=>{var a;(a=E(this,R))==null||a.dispatch(i)}),ae(this,ii,void 0),ae(this,tt,i=>{let{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||Cs.includes(a))){this.removeEventListener("keyup",E(this,tt));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};he(this,ti,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);let s=a.toLowerCase(),l=new n.CustomEvent(Wo[s],{composed:!0,detail:r});this.dispatchEvent(l)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(u.NO_HOTKEYS,u.HOTKEYS,u.DEFAULT_STREAM_TYPE,u.DEFAULT_SUBTITLES,u.DEFAULT_DURATION,u.NO_MUTED_PREF,u.NO_VOLUME_PREF,u.LANG,u.LOOP,u.LIVE_EDGE_OFFSET,u.SEEK_TO_LIVE_OFFSET,u.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return E(this,R)}set mediaStore(e){var i,a;if(E(this,R)&&((i=E(this,fe))==null||i.call(this),he(this,fe,void 0)),he(this,R,e),!E(this,R)&&!this.hasAttribute(u.NO_DEFAULT_STORE)){jt(this,oa,Tr).call(this);return}he(this,fe,(a=E(this,R))==null?void 0:a.subscribe(E(this,ti)))}get fullscreenElement(){var e;return(e=E(this,ei))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(u.FULLSCREEN_ELEMENT)&&this.removeAttribute(u.FULLSCREEN_ELEMENT),he(this,ei,e),(i=E(this,R))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return _(this,u.DEFAULT_SUBTITLES)}set defaultSubtitles(e){g(this,u.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return w(this,u.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){L(this,u.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return D(this,u.DEFAULT_DURATION)}set defaultDuration(e){U(this,u.DEFAULT_DURATION,e)}get noHotkeys(){return _(this,u.NO_HOTKEYS)}set noHotkeys(e){g(this,u.NO_HOTKEYS,e)}get keysUsed(){return w(this,u.KEYS_USED)}set keysUsed(e){L(this,u.KEYS_USED,e)}get liveEdgeOffset(){return D(this,u.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){U(this,u.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return _(this,u.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){g(this,u.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return _(this,u.NO_VOLUME_PREF)}set noVolumePref(e){g(this,u.NO_VOLUME_PREF,e)}get noMutedPref(){return _(this,u.NO_MUTED_PREF)}set noMutedPref(e){g(this,u.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return _(this,u.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){g(this,u.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return _(this,u.NO_DEFAULT_STORE)}set noDefaultStore(e){g(this,u.NO_DEFAULT_STORE,e)}get resolvedLang(){return zo()}attributeChangedCallback(e,i,a){var r,s,l,d,c,M,S,T,f,p,A,v;if(super.attributeChangedCallback(e,i,a),e===u.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(u.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===u.HOTKEYS)E(this,Oe).value=a;else if(e===u.DEFAULT_SUBTITLES&&a!==i)(r=E(this,R))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(u.DEFAULT_SUBTITLES)}});else if(e===u.DEFAULT_STREAM_TYPE)(l=E(this,R))==null||l.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(s=this.getAttribute(u.DEFAULT_STREAM_TYPE))!=null?s:void 0}});else if(e===u.LIVE_EDGE_OFFSET&&a!==i)(d=E(this,R))==null||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(u.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(u.SEEK_TO_LIVE_OFFSET):this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0}});else if(e===u.SEEK_TO_LIVE_OFFSET&&a!==i)(c=E(this,R))==null||c.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(u.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(u.SEEK_TO_LIVE_OFFSET):this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0}});else if(e===u.NO_AUTO_SEEK_TO_LIVE)(M=E(this,R))==null||M.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(u.NO_AUTO_SEEK_TO_LIVE)}});else if(e===u.FULLSCREEN_ELEMENT){let k=a?(S=this.getRootNode())==null?void 0:S.getElementById(a):void 0;he(this,ei,k),(T=E(this,R))==null||T.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===u.LANG&&a!==i?(Qo(a),(f=E(this,R))==null||f.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===u.LOOP&&a!==i?(p=E(this,R))==null||p.dispatch({type:h.MEDIA_LOOP_REQUEST,detail:a!=null}):e===u.NO_VOLUME_PREF&&a!==i?(A=E(this,R))==null||A.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(u.NO_VOLUME_PREF)}}):e===u.NO_MUTED_PREF&&a!==i&&((v=E(this,R))==null||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(u.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!E(this,R)&&!this.hasAttribute(u.NO_DEFAULT_STORE)&&jt(this,oa,Tr).call(this),(e=E(this,R))==null||e.dispatch({type:"documentelementchangerequest",detail:W}),(i=E(this,R))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),E(this,R)&&!E(this,fe)&&he(this,fe,(a=E(this,R))==null?void 0:a.subscribe(E(this,ti))),E(this,ii)!==void 0&&E(this,R)&&this.media&&setTimeout(()=>{var r,s,l;(s=(r=this.media)==null?void 0:r.textTracks)!=null&&s.length&&((l=E(this,R))==null||l.dispatch({type:h.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:E(this,ii)}))},0),this.hasAttribute(u.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,s,l;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),E(this,R)){let d=E(this,R).getState();he(this,ii,!!((i=d.mediaSubtitlesShowing)!=null&&i.length)),(a=E(this,R))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=E(this,R))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(s=E(this,R))==null||s.dispatch({type:h.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}E(this,fe)&&((l=E(this,fe))==null||l.call(this),he(this,fe,void 0)),this.unassociateElement(this),E(this,_e)&&(E(this,_e).remove(),he(this,_e,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=E(this,R))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=E(this,R))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){Rs(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:i}=this;if(i.has(e))return;let a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),s=Sl(e,a,r);Object.values(h).forEach(l=>{e.addEventListener(l,E(this,ra))}),i.set(e,s)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(h).forEach(r=>{e.removeEventListener(r,E(this,ra))})}registerMediaStateReceiver(e){if(!e)return;let i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),E(this,R)&&Object.entries(E(this,R).getState()).forEach(([r,s])=>{Rs([e],r,s)}))}unregisterMediaStateReceiver(e){let i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",jt(this,sa,Ir))}disableHotkeys(){this.removeEventListener("keydown",jt(this,sa,Ir)),this.removeEventListener("keyup",E(this,tt))}get hotkeys(){return E(this,Oe)}set hotkeys(e){L(this,u.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,s,l,d,c,M,S;let T=e.target;if(((r=(a=(i=T.getAttribute(u.KEYS_USED))==null?void 0:i.split(" "))!=null?a:T?.keysUsed)!=null?r:[]).map(I=>I==="Space"?" ":I).filter(Boolean).includes(e.key))return;let p,A,v;if(!(E(this,Oe).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&E(this,Oe).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&E(this,Oe).contains("noshift+/")))switch(e.key){case" ":case"k":p=E(this,R).getState().mediaPaused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new n.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"m":p=this.mediaStore.getState().mediaVolumeLevel==="off"?h.MEDIA_UNMUTE_REQUEST:h.MEDIA_MUTE_REQUEST,this.dispatchEvent(new n.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"f":p=this.mediaStore.getState().mediaIsFullscreen?h.MEDIA_EXIT_FULLSCREEN_REQUEST:h.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new n.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new n.CustomEvent(h.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let I=this.hasAttribute(u.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(u.KEYBOARD_BACKWARD_SEEK_OFFSET):Ms;A=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)-I,0),v=new n.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:A}),this.dispatchEvent(v);break}case"ArrowRight":case"l":{let I=this.hasAttribute(u.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(u.KEYBOARD_FORWARD_SEEK_OFFSET):Ms;A=Math.max(((l=this.mediaStore.getState().mediaCurrentTime)!=null?l:0)+I,0),v=new n.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:A}),this.dispatchEvent(v);break}case"ArrowUp":{let I=this.hasAttribute(u.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(u.KEYBOARD_UP_VOLUME_STEP):ys;A=Math.min(((d=this.mediaStore.getState().mediaVolume)!=null?d:1)+I,1),v=new n.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:A}),this.dispatchEvent(v);break}case"ArrowDown":{let I=this.hasAttribute(u.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(u.KEYBOARD_DOWN_VOLUME_STEP):ys;A=Math.max(((c=this.mediaStore.getState().mediaVolume)!=null?c:1)-I,0),v=new n.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:A}),this.dispatchEvent(v);break}case"<":{let I=(M=this.mediaStore.getState().mediaPlaybackRate)!=null?M:1;A=Math.max(I-ks,fl).toFixed(2),v=new n.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:A}),this.dispatchEvent(v);break}case">":{let I=(S=this.mediaStore.getState().mediaPlaybackRate)!=null?S:1;A=Math.min(I+ks,_l).toFixed(2),v=new n.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:A}),this.dispatchEvent(v);break}case"/":case"?":{e.shiftKey&&jt(this,Sr,Ds).call(this);break}case"p":{p=this.mediaStore.getState().mediaIsPip?h.MEDIA_EXIT_PIP_REQUEST:h.MEDIA_ENTER_PIP_REQUEST,v=new n.CustomEvent(p,{composed:!0,bubbles:!0}),this.dispatchEvent(v);break}default:break}}};Oe=new WeakMap;ei=new WeakMap;R=new WeakMap;_e=new WeakMap;ti=new WeakMap;fe=new WeakMap;ra=new WeakMap;ii=new WeakMap;oa=new WeakSet;Tr=function(){var t;this.mediaStore=Ss({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(u.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(u.DEFAULT_DURATION)?+this.getAttribute(u.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(u.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(u.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(u.SEEK_TO_LIVE_OFFSET):this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(u.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(u.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(u.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(u.NO_SUBTITLES_LANG_PREF)}})};tt=new WeakMap;sa=new WeakSet;Ir=function(t){var e;let{metaKey:i,altKey:a,key:r,shiftKey:s}=t,l=s&&(r==="/"||r==="?");if(l&&((e=E(this,_e))!=null&&e.open)){this.removeEventListener("keyup",E(this,tt));return}if(i||a||!l&&!Cs.includes(r)){this.removeEventListener("keyup",E(this,tt));return}let d=t.target,c=d instanceof HTMLElement&&(d.tagName.toLowerCase()==="media-volume-range"||d.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(E(this,Oe).contains(`no${r.toLowerCase()}`)||r===" "&&E(this,Oe).contains("nospace"))&&!c&&t.preventDefault(),this.addEventListener("keyup",E(this,tt),{once:!0})};Sr=new WeakSet;Ds=function(){E(this,_e)||(he(this,_e,W.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(E(this,_e))),E(this,_e).open=!0};var gl=Object.values(o),bl=Object.values(sr),Os=t=>{var e,i,a,r;let{observedAttributes:s}=t.constructor;!s&&((e=t.nodeName)!=null&&e.includes("-"))&&(n.customElements.upgrade(t),{observedAttributes:s}=t.constructor);let l=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,y.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(s||l)?(s||l).filter(d=>gl.includes(d)):[]},Al=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&n.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof n.customElements.get(t.nodeName.toLowerCase()))&&n.customElements.upgrade(t),bl.some(a=>a in t)},yr=t=>Al(t)||!!Os(t).length,Ls=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},ws={[o.MEDIA_SUBTITLES_LIST]:Xt,[o.MEDIA_SUBTITLES_SHOWING]:Xt,[o.MEDIA_SEEKABLE]:Ls,[o.MEDIA_BUFFERED]:t=>t?.map(Ls).join(" "),[o.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[o.MEDIA_RENDITION_LIST]:Ko,[o.MEDIA_AUDIO_TRACK_LIST]:Go},Tl=async(t,e,i)=>{var a,r;if(t.isConnected||await Pi(0),typeof i=="boolean"||i==null)return g(t,e,i);if(typeof i=="number")return U(t,e,i);if(typeof i=="string")return L(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);let s=(r=(a=ws[e])==null?void 0:a.call(ws,i))!=null?r:i;return t.setAttribute(e,s)},Il=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},et=(t,e)=>{if(Il(t))return;let i=(r,s)=>{var l,d;yr(r)&&s(r);let{children:c=[]}=r??{},M=(d=(l=r?.shadowRoot)==null?void 0:l.children)!=null?d:[];[...c,...M].forEach(T=>et(T,s))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!yr(t)){n.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},Rs=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}let r=Os(a),s=e.toLowerCase();r.includes(s)&&Tl(a,s,i)})},Sl=(t,e,i)=>{et(t,e);let a=S=>{var T;let f=(T=S?.composedPath()[0])!=null?T:S.target;e(f)},r=S=>{var T;let f=(T=S?.composedPath()[0])!=null?T:S.target;i(f)};t.addEventListener(h.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(h.UNREGISTER_MEDIA_STATE_RECEIVER,r);let s=S=>{S.forEach(T=>{let{addedNodes:f=[],removedNodes:p=[],type:A,target:v,attributeName:k}=T;A==="childList"?(Array.prototype.forEach.call(f,I=>et(I,e)),Array.prototype.forEach.call(p,I=>et(I,i))):A==="attributes"&&k===y.MEDIA_CHROME_ATTRIBUTES&&(yr(v)?e(v):i(v))})},l=[],d=S=>{let T=S.target;T.name!=="media"&&(l.forEach(f=>et(f,i)),l=[...T.assignedElements({flatten:!0})],l.forEach(f=>et(f,e)))};t.addEventListener("slotchange",d);let c=new MutationObserver(s);return c.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{et(t,i),t.removeEventListener("slotchange",d),c.disconnect(),t.removeEventListener(h.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(h.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};n.customElements.get("media-controller")||n.customElements.define("media-controller",Mr);var It={PLACEMENT:"placement",BOUNDS:"bounds"};function Ml(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var St=class extends n.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Ki(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}let a=getComputedStyle(this),r=(e=Pe(this,"#"+this.bounds))!=null?e:is(this);if(!r)return;let{x:s,width:l}=r.getBoundingClientRect(),{x:d,width:c}=this.getBoundingClientRect(),M=d+c,S=s+l,T=a.getPropertyValue("--media-tooltip-offset-x"),f=T?parseFloat(T.replace("px","")):0,p=a.getPropertyValue("--media-tooltip-container-margin"),A=p?parseFloat(p.replace("px","")):0,v=d-s+f-A,k=M-S+f+A;if(v<0){this.style.setProperty("--media-tooltip-offset-x",`${v}px`);return}if(k>0){this.style.setProperty("--media-tooltip-offset-x",`${k}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[It.PLACEMENT,It.BOUNDS]}get placement(){return w(this,It.PLACEMENT)}set placement(e){L(this,It.PLACEMENT,e)}get bounds(){return w(this,It.BOUNDS)}set bounds(e){L(this,It.BOUNDS,e)}};St.shadowRootOptions={mode:"open"};St.getTemplateHTML=Ml;n.customElements.get("media-tooltip")||n.customElements.define("media-tooltip",St);var na=St;var wr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(wr(t,e,"read from private field"),i?i.call(t):e.get(t)),Mt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},la=(t,e,i,a)=>(wr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),yl=(t,e,i)=>(wr(t,e,"access private method"),i),ge,kt,Be,yt,da,Lr,Us,Fe={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function kl(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${na.shadowRootOptions.mode}">
          ${na.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Ll(t,e){return`
    <slot></slot>
  `}function wl(){return""}var C=class extends n.HTMLElement{constructor(){if(super(),Mt(this,Lr),Mt(this,ge,void 0),this.preventClick=!1,this.tooltipEl=null,Mt(this,kt,e=>{this.preventClick||this.handleClick(e),setTimeout(V(this,Be),0)}),Mt(this,Be,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),Mt(this,yt,e=>{let{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",V(this,yt));return}this.preventClick||this.handleClick(e)}),Mt(this,da,e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",V(this,yt));return}this.addEventListener("keyup",V(this,yt),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Fe.TOOLTIP_PLACEMENT,y.MEDIA_CONTROLLER,o.MEDIA_LANG]}enable(){this.addEventListener("click",V(this,kt)),this.addEventListener("keydown",V(this,da)),this.tabIndex=0}disable(){this.removeEventListener("click",V(this,kt)),this.removeEventListener("keydown",V(this,da)),this.removeEventListener("keyup",V(this,yt)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,s,l,d,c;e===y.MEDIA_CONTROLLER?(i&&((s=(r=V(this,ge))==null?void 0:r.unassociateElement)==null||s.call(r,this),la(this,ge,null)),a&&this.isConnected&&(la(this,ge,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=V(this,ge))==null?void 0:d.associateElement)==null||c.call(d,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Fe.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===o.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),V(this,Be).call(this)}connectedCallback(){var e,i,a;let{style:r}=x(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let s=this.getAttribute(y.MEDIA_CONTROLLER);s&&(la(this,ge,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=V(this,ge))==null?void 0:i.associateElement)==null||a.call(i,this)),n.customElements.whenDefined("media-tooltip").then(()=>yl(this,Lr,Us).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=V(this,ge))==null?void 0:e.unassociateElement)==null||i.call(e,this),la(this,ge,null),this.removeEventListener("mouseenter",V(this,Be)),this.removeEventListener("focus",V(this,Be)),this.removeEventListener("click",V(this,kt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return w(this,Fe.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){L(this,Fe.TOOLTIP_PLACEMENT,e)}get mediaController(){return w(this,y.MEDIA_CONTROLLER)}set mediaController(e){L(this,y.MEDIA_CONTROLLER,e)}get disabled(){return _(this,Fe.DISABLED)}set disabled(e){g(this,Fe.DISABLED,e)}get noTooltip(){return _(this,Fe.NO_TOOLTIP)}set noTooltip(e){g(this,Fe.NO_TOOLTIP,e)}handleClick(e){}};ge=new WeakMap;kt=new WeakMap;Be=new WeakMap;yt=new WeakMap;da=new WeakMap;Lr=new WeakSet;Us=function(){this.addEventListener("mouseenter",V(this,Be)),this.addEventListener("focus",V(this,Be)),this.addEventListener("click",V(this,kt));let t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};C.shadowRootOptions={mode:"open"};C.getTemplateHTML=kl;C.getSlotTemplateHTML=Ll;C.getTooltipContentHTML=wl;n.customElements.get("media-chrome-button")||n.customElements.define("media-chrome-button",C);var xs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function Rl(t){return`
    <style>
      :host([${o.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${xs}</slot>
      <slot name="exit">${xs}</slot>
    </slot>
  `}function Dl(){return`
    <slot name="tooltip-enter">${m("start airplay")}</slot>
    <slot name="tooltip-exit">${m("stop airplay")}</slot>
  `}var Ps=t=>{let e=t.mediaIsAirplaying?m("stop airplay"):m("start airplay");t.setAttribute("aria-label",e)},ai=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_AIRPLAYING,o.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ps(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_AIRPLAYING&&Ps(this)}get mediaIsAirplaying(){return _(this,o.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){g(this,o.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return w(this,o.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){L(this,o.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new n.CustomEvent(h.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};ai.getSlotTemplateHTML=Rl;ai.getTooltipContentHTML=Dl;n.customElements.get("media-airplay-button")||n.customElements.define("media-airplay-button",ai);var Cl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Ol=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Ul(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Cl}</slot>
      <slot name="off">${Ol}</slot>
    </slot>
  `}function xl(){return`
    <slot name="tooltip-enable">${m("Enable captions")}</slot>
    <slot name="tooltip-disable">${m("Disable captions")}</slot>
  `}var Ns=t=>{t.setAttribute("aria-checked",us(t).toString())},ri=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",m("closed captions")),Ns(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_SUBTITLES_SHOWING&&Ns(this)}get mediaSubtitlesList(){return Hs(this,o.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Fs(this,o.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Hs(this,o.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Fs(this,o.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new n.CustomEvent(h.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};ri.getSlotTemplateHTML=Ul;ri.getTooltipContentHTML=xl;var Hs=(t,e)=>{let i=t.getAttribute(e);return i?vr(i):[]},Fs=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}let a=Xt(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};n.customElements.get("media-captions-button")||n.customElements.define("media-captions-button",ri);var Pl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Nl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function Hl(t){return`
    <style>
      :host([${o.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Pl}</slot>
      <slot name="exit">${Nl}</slot>
    </slot>
  `}function Fl(){return`
    <slot name="tooltip-enter">${m("Start casting")}</slot>
    <slot name="tooltip-exit">${m("Stop casting")}</slot>
  `}var Bs=t=>{let e=t.mediaIsCasting?m("stop casting"):m("start casting");t.setAttribute("aria-label",e)},oi=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_CASTING,o.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Bs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_CASTING&&Bs(this)}get mediaIsCasting(){return _(this,o.MEDIA_IS_CASTING)}set mediaIsCasting(e){g(this,o.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return w(this,o.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){L(this,o.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?h.MEDIA_EXIT_CAST_REQUEST:h.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new n.CustomEvent(e,{composed:!0,bubbles:!0}))}};oi.getSlotTemplateHTML=Hl;oi.getTooltipContentHTML=Fl;n.customElements.get("media-cast-button")||n.customElements.define("media-cast-button",oi);var Pr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},at=(t,e,i)=>(Pr(t,e,"read from private field"),i?i.call(t):e.get(t)),Ue=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Nr=(t,e,i,a)=>(Pr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),it=(t,e,i)=>(Pr(t,e,"access private method"),i),ua,ni,rt,ca,Rr,Dr,$s,Cr,Ws,Or,Vs,Ur,Ks,xr,Gs;function Bl(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function $l(t){return`
    <slot id="content"></slot>
  `}var si={OPEN:"open",ANCHOR:"anchor"},be=class extends n.HTMLElement{constructor(){super(),Ue(this,ca),Ue(this,Dr),Ue(this,Cr),Ue(this,Or),Ue(this,Ur),Ue(this,xr),Ue(this,ua,!1),Ue(this,ni,null),Ue(this,rt,null)}static get observedAttributes(){return[si.OPEN,si.ANCHOR]}get open(){return _(this,si.OPEN)}set open(e){g(this,si.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":it(this,Or,Vs).call(this,e);break;case"focusout":it(this,Ur,Ks).call(this,e);break;case"keydown":it(this,xr,Gs).call(this,e);break}}connectedCallback(){it(this,ca,Rr).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){it(this,ca,Rr).call(this),e===si.OPEN&&a!==i&&(this.open?it(this,Dr,$s).call(this):it(this,Cr,Ws).call(this))}focus(){Nr(this,ni,dr());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}};ua=new WeakMap;ni=new WeakMap;rt=new WeakMap;ca=new WeakSet;Rr=function(){if(!at(this,ua)&&(Nr(this,ua,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let t=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{let{style:e}=x(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Dr=new WeakSet;$s=function(){var t;(t=at(this,rt))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Cr=new WeakSet;Ws=function(){var t;(t=at(this,rt))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Or=new WeakSet;Vs=function(t){Nr(this,rt,t.relatedTarget),ve(this,t.relatedTarget)||(this.open=!this.open)};Ur=new WeakSet;Ks=function(t){var e;ve(this,t.relatedTarget)||((e=at(this,ni))==null||e.focus(),at(this,rt)&&at(this,rt)!==t.relatedTarget&&this.open&&(this.open=!1))};xr=new WeakSet;Gs=function(t){var e,i,a,r,s;let{key:l,ctrlKey:d,altKey:c,metaKey:M}=t;d||c||M||this.keysUsed.includes(l)&&(t.preventDefault(),t.stopPropagation(),l==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):l==="Escape"&&((s=at(this,ni))==null||s.focus(),this.open=!1))};be.shadowRootOptions={mode:"open"};be.getTemplateHTML=Bl;be.getSlotTemplateHTML=$l;n.customElements.get("media-chrome-dialog")||n.customElements.define("media-chrome-dialog",be);var Kr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},H=(t,e,i)=>(Kr(t,e,"read from private field"),i?i.call(t):e.get(t)),z=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$e=(t,e,i,a)=>(Kr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),me=(t,e,i)=>(Kr(t,e,"access private method"),i),Ae,Aa,ha,ma,pe,ga,pa,Ea,va,Gr,qs,fa,Hr,_a,Fr,ba,qr,Br,Ys,$r,Qs,Wr,zs,Vr,Zs;function Wl(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function Vl(t){return""}var Te=class extends n.HTMLElement{constructor(){if(super(),z(this,Gr),z(this,fa),z(this,_a),z(this,ba),z(this,Br),z(this,$r),z(this,Wr),z(this,Vr),z(this,Ae,void 0),z(this,Aa,void 0),z(this,ha,void 0),z(this,ma,void 0),z(this,pe,{}),z(this,ga,[]),z(this,pa,()=>{if(this.range.matches(":focus-visible")){let{style:e}=x(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),z(this,Ea,()=>{let{style:e}=x(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),z(this,va,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),$e(this,ha,this.shadowRoot.querySelector("#startpoint")),$e(this,ma,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",y.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,l,d,c;e===y.MEDIA_CONTROLLER?(i&&((s=(r=H(this,Ae))==null?void 0:r.unassociateElement)==null||s.call(r,this),$e(this,Ae,null)),a&&this.isConnected&&($e(this,Ae,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=H(this,Ae))==null?void 0:d.associateElement)==null||c.call(d,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),me(this,fa,Hr).call(this)):(this.range.setAttribute(e,a),me(this,_a,Fr).call(this)))}connectedCallback(){var e,i,a;let{style:r}=x(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),H(this,pe).pointer=x(this.shadowRoot,"#pointer"),H(this,pe).progress=x(this.shadowRoot,"#progress"),H(this,pe).thumb=x(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),H(this,pe).activeSegment=x(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let s=this.getAttribute(y.MEDIA_CONTROLLER);s&&($e(this,Ae,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=H(this,Ae))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",H(this,pa)),this.shadowRoot.addEventListener("focusout",H(this,Ea)),me(this,fa,Hr).call(this),Bi(this.container,H(this,va))}disconnectedCallback(){var e,i;me(this,_a,Fr).call(this),(i=(e=H(this,Ae))==null?void 0:e.unassociateElement)==null||i.call(e,this),$e(this,Ae,null),this.shadowRoot.removeEventListener("focusin",H(this,pa)),this.shadowRoot.removeEventListener("focusout",H(this,Ea)),$i(this.container,H(this,va))}updatePointerBar(e){var i;(i=H(this,pe).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;let a=this.range.valueAsNumber*100;(e=H(this,pe).progress)==null||e.style.setProperty("width",`${a}%`),(i=H(this,pe).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){let i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;let a=[...new Set([+this.range.min,...e.flatMap(s=>[s.start,s.end]),+this.range.max])];$e(this,ga,[...a]);let r=a.pop();for(let[s,l]of a.entries()){let[d,c]=[s===0,s===a.length-1],M=d?"calc(var(--segments-gap) / -1)":`${l*100}%`,T=`calc(${((c?r:a[s+1])-l)*100}%${d||c?"":" - var(--segments-gap)"})`,f=W.createElementNS("http://www.w3.org/2000/svg","rect"),p=cr(this.shadowRoot,`#segments-clipping rect:nth-child(${s+1})`);p.style.setProperty("x",M),p.style.setProperty("width",T),i.append(f)}}getPointerRatio(e){return as(e.clientX,e.clientY,H(this,ha).getBoundingClientRect(),H(this,ma).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":me(this,Vr,Zs).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":me(this,Br,Ys).call(this,e);break;case"pointerdown":me(this,ba,qr).call(this,e);break;case"pointerup":me(this,$r,Qs).call(this);break;case"pointerleave":me(this,Wr,zs).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};Ae=new WeakMap;Aa=new WeakMap;ha=new WeakMap;ma=new WeakMap;pe=new WeakMap;ga=new WeakMap;pa=new WeakMap;Ea=new WeakMap;va=new WeakMap;Gr=new WeakSet;qs=function(t){let e=H(this,pe).activeSegment;if(!e)return;let i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${H(this,ga).findIndex((s,l,d)=>{let c=d[l+1];return c!=null&&i>=s&&i<=c})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};fa=new WeakSet;Hr=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};_a=new WeakSet;Fr=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=n.window)==null||t.removeEventListener("pointerup",this),(e=n.window)==null||e.removeEventListener("pointermove",this)};ba=new WeakSet;qr=function(t){var e;$e(this,Aa,t.composedPath().includes(this.range)),(e=n.window)==null||e.addEventListener("pointerup",this,{once:!0})};Br=new WeakSet;Ys=function(t){var e;t.pointerType!=="mouse"&&me(this,ba,qr).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=n.window)==null||e.addEventListener("pointermove",this)};$r=new WeakSet;Qs=function(){var t;(t=n.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Wr=new WeakSet;zs=function(){var t,e;this.removeEventListener("pointerleave",this),(t=n.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=H(this,pe).activeSegment)==null||e.style.removeProperty("transform")};Vr=new WeakSet;Zs=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),me(this,Gr,qs).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!H(this,Aa))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Te.shadowRootOptions={mode:"open"};Te.getTemplateHTML=Wl;Te.getContainerTemplateHTML=Vl;n.customElements.get("media-chrome-range")||n.customElements.define("media-chrome-range",Te);var Xs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ta=(t,e,i)=>(Xs(t,e,"read from private field"),i?i.call(t):e.get(t)),Kl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ia=(t,e,i,a)=>(Xs(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ie;function Gl(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var li=class extends n.HTMLElement{constructor(){if(super(),Kl(this,Ie,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,l,d,c;e===y.MEDIA_CONTROLLER&&(i&&((s=(r=Ta(this,Ie))==null?void 0:r.unassociateElement)==null||s.call(r,this),Ia(this,Ie,null)),a&&this.isConnected&&(Ia(this,Ie,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=Ta(this,Ie))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i,a;let r=this.getAttribute(y.MEDIA_CONTROLLER);r&&(Ia(this,Ie,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Ta(this,Ie))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ta(this,Ie))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ia(this,Ie,null)}};Ie=new WeakMap;li.shadowRootOptions={mode:"open"};li.getTemplateHTML=Gl;n.customElements.get("media-control-bar")||n.customElements.define("media-control-bar",li);var Js=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sa=(t,e,i)=>(Js(t,e,"read from private field"),i?i.call(t):e.get(t)),ql=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ma=(t,e,i,a)=>(Js(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Se;function Yl(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function Ql(t,e){return`
    <slot></slot>
  `}var ee=class extends n.HTMLElement{constructor(){if(super(),ql(this,Se,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,l,d,c;e===y.MEDIA_CONTROLLER&&(i&&((s=(r=Sa(this,Se))==null?void 0:r.unassociateElement)==null||s.call(r,this),Ma(this,Se,null)),a&&this.isConnected&&(Ma(this,Se,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=Sa(this,Se))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i,a;let{style:r}=x(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let s=this.getAttribute(y.MEDIA_CONTROLLER);s&&(Ma(this,Se,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=Sa(this,Se))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Sa(this,Se))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ma(this,Se,null)}};Se=new WeakMap;ee.shadowRootOptions={mode:"open"};ee.getTemplateHTML=Yl;ee.getSlotTemplateHTML=Ql;n.customElements.get("media-text-display")||n.customElements.define("media-text-display",ee);var en=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},js=(t,e,i)=>(en(t,e,"read from private field"),i?i.call(t):e.get(t)),zl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Zl=(t,e,i,a)=>(en(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),di;function Xl(t,e){return`
    <slot>${le(e.mediaDuration)}</slot>
  `}var ya=class extends ee{constructor(){var e;super(),zl(this,di,void 0),Zl(this,di,this.shadowRoot.querySelector("slot")),js(this,di).textContent=le((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===o.MEDIA_DURATION&&(js(this,di).textContent=le(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return D(this,o.MEDIA_DURATION)}set mediaDuration(e){U(this,o.MEDIA_DURATION,e)}};di=new WeakMap;ya.getSlotTemplateHTML=Xl;n.customElements.get("media-duration-display")||n.customElements.define("media-duration-display",ya);var Jl={2:m("Network Error"),3:m("Decode Error"),4:m("Source Not Supported"),5:m("Encryption Error")},jl={2:m("A network error caused the media download to fail."),3:m("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:m("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:m("The media is encrypted and there are no keys to decrypt it.")},ka=t=>{var e,i;return t.code===1?null:{title:(e=Jl[t.code])!=null?e:`Error ${t.code}`,message:(i=jl[t.code])!=null?i:t.message}};var an=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ed=(t,e,i)=>(an(t,e,"read from private field"),i?i.call(t):e.get(t)),td=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},id=(t,e,i,a)=>(an(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),La;function ad(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${rn({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function rd(t){return t.code&&ka(t)!==null}function rn(t){var e;let{title:i,message:a}=(e=ka(t))!=null?e:{},r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}var tn=[o.MEDIA_ERROR_CODE,o.MEDIA_ERROR_MESSAGE],ci=class extends be{constructor(){super(...arguments),td(this,La,null)}static get observedAttributes(){return[...super.observedAttributes,...tn]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!tn.includes(e))return;let s=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=rd(s),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(s),!this.hasAttribute("aria-label"))){let{title:l}=ka(s);l&&this.setAttribute("aria-label",l)}}get mediaError(){return ed(this,La)}set mediaError(e){id(this,La,e)}get mediaErrorCode(){return D(this,"mediaerrorcode")}set mediaErrorCode(e){U(this,"mediaerrorcode",e)}get mediaErrorMessage(){return w(this,"mediaerrormessage")}set mediaErrorMessage(e){L(this,"mediaerrormessage",e)}};La=new WeakMap;ci.getSlotTemplateHTML=ad;ci.formatErrorMessage=rn;n.customElements.get("media-error-dialog")||n.customElements.define("media-error-dialog",ci);var od=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},We=(t,e,i)=>(od(t,e,"read from private field"),i?i.call(t):e.get(t)),on=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Lt,wt;function sd(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${nd()}
    </slot>
  `}function nd(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["\u2190","j"],description:"Seek back 10s"},{keys:["\u2192","l"],description:"Seek forward 10s"},{keys:["\u2191"],description:"Turn volume up"},{keys:["\u2193"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((s,l)=>l>0?`<span class="key-separator">or</span><span class="key">${s}</span>`:`<span class="key">${s}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}var wa=class extends be{constructor(){super(...arguments),on(this,Lt,e=>{var i;if(!this.open)return;let a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;let r=e.composedPath(),s=r[0]===this||r.includes(this),l=r.includes(a);s&&!l&&(this.open=!1)}),on(this,wt,e=>{if(!this.open)return;let i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",We(this,Lt)),document.addEventListener("keydown",We(this,wt)))}disconnectedCallback(){this.removeEventListener("click",We(this,Lt)),document.removeEventListener("keydown",We(this,wt))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",We(this,Lt)),document.addEventListener("keydown",We(this,wt))):(this.removeEventListener("click",We(this,Lt)),document.removeEventListener("keydown",We(this,wt))))}};Lt=new WeakMap;wt=new WeakMap;wa.getSlotTemplateHTML=sd;n.customElements.get("media-keyboard-shortcuts-dialog")||n.customElements.define("media-keyboard-shortcuts-dialog",wa);var nn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ld=(t,e,i)=>(nn(t,e,"read from private field"),i?i.call(t):e.get(t)),dd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cd=(t,e,i,a)=>(nn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ra,ud=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,hd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function md(t){return`
    <style>
      :host([${o.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ud}</slot>
      <slot name="exit">${hd}</slot>
    </slot>
  `}function pd(){return`
    <slot name="tooltip-enter">${m("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${m("Exit fullscreen mode")}</slot>
  `}var sn=t=>{let e=t.mediaIsFullscreen?m("exit fullscreen mode"):m("enter fullscreen mode");t.setAttribute("aria-label",e)},ui=class extends C{constructor(){super(...arguments),dd(this,Ra,null)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_FULLSCREEN,o.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sn(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_FULLSCREEN&&sn(this)}get mediaFullscreenUnavailable(){return w(this,o.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){L(this,o.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return _(this,o.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){g(this,o.MEDIA_IS_FULLSCREEN,e)}handleClick(e){cd(this,Ra,e);let i=ld(this,Ra)instanceof PointerEvent,a=this.mediaIsFullscreen?new n.CustomEvent(h.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new n.CustomEvent(h.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}};Ra=new WeakMap;ui.getSlotTemplateHTML=md;ui.getTooltipContentHTML=pd;n.customElements.get("media-fullscreen-button")||n.customElements.define("media-fullscreen-button",ui);var{MEDIA_TIME_IS_LIVE:Da,MEDIA_PAUSED:hi}=o,{MEDIA_SEEK_TO_LIVE_REQUEST:Ed,MEDIA_PLAY_REQUEST:vd}=h,fd='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function _d(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Da}]:not([${hi}])) slot[name=indicator] > *,
      :host([${Da}]:not([${hi}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Da}]:not([${hi}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${fd}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${m("live")}</slot>
  `}var ln=t=>{var e;let i=t.mediaPaused||!t.mediaTimeIsLive,a=i?m("seek to live"):m("playing live");t.setAttribute("aria-label",a);let r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=m("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")},Ca=class extends C{static get observedAttributes(){return[...super.observedAttributes,Da,hi]}connectedCallback(){super.connectedCallback(),ln(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),ln(this)}get mediaPaused(){return _(this,o.MEDIA_PAUSED)}set mediaPaused(e){g(this,o.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return _(this,o.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){g(this,o.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new n.CustomEvent(Ed,{composed:!0,bubbles:!0})),this.hasAttribute(hi)&&this.dispatchEvent(new n.CustomEvent(vd,{composed:!0,bubbles:!0})))}};Ca.getSlotTemplateHTML=_d;n.customElements.get("media-live-button")||n.customElements.define("media-live-button",Ca);var cn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},mi=(t,e,i)=>(cn(t,e,"read from private field"),i?i.call(t):e.get(t)),dn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pi=(t,e,i,a)=>(cn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Me,Ua,Oa={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},un=500,gd=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function bd(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${un}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${gd}</slot>
    <div id="status" role="status" aria-live="polite">${m("media loading")}</div>
  `}var Ei=class extends n.HTMLElement{constructor(){if(super(),dn(this,Me,void 0),dn(this,Ua,un),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER,o.MEDIA_PAUSED,o.MEDIA_LOADING,Oa.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,s,l,d,c;e===Oa.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===y.MEDIA_CONTROLLER&&(i&&((s=(r=mi(this,Me))==null?void 0:r.unassociateElement)==null||s.call(r,this),pi(this,Me,null)),a&&this.isConnected&&(pi(this,Me,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=mi(this,Me))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i,a;let r=this.getAttribute(y.MEDIA_CONTROLLER);r&&(pi(this,Me,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=mi(this,Me))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=mi(this,Me))==null?void 0:e.unassociateElement)==null||i.call(e,this),pi(this,Me,null)}get loadingDelay(){return mi(this,Ua)}set loadingDelay(e){pi(this,Ua,e);let{style:i}=x(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return _(this,o.MEDIA_PAUSED)}set mediaPaused(e){g(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return _(this,o.MEDIA_LOADING)}set mediaLoading(e){g(this,o.MEDIA_LOADING,e)}get mediaController(){return w(this,y.MEDIA_CONTROLLER)}set mediaController(e){L(this,y.MEDIA_CONTROLLER,e)}get noAutohide(){return _(this,Oa.NO_AUTOHIDE)}set noAutohide(e){g(this,Oa.NO_AUTOHIDE,e)}};Me=new WeakMap;Ua=new WeakMap;Ei.shadowRootOptions={mode:"open"};Ei.getTemplateHTML=bd;n.customElements.get("media-loading-indicator")||n.customElements.define("media-loading-indicator",Ei);var Ad=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,hn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Td=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Id(t){return`
    <style>
      :host(:not([${o.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${o.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${o.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Ad}</slot>
      <slot name="low">${hn}</slot>
      <slot name="medium">${hn}</slot>
      <slot name="high">${Td}</slot>
    </slot>
  `}function Sd(){return`
    <slot name="tooltip-mute">${m("Mute")}</slot>
    <slot name="tooltip-unmute">${m("Unmute")}</slot>
  `}var mn=t=>{let i=t.mediaVolumeLevel==="off"?m("unmute"):m("mute");t.setAttribute("aria-label",i)},vi=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),mn(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_VOLUME_LEVEL&&mn(this)}get mediaVolumeLevel(){return w(this,o.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){L(this,o.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e=this.mediaVolumeLevel==="off"?h.MEDIA_UNMUTE_REQUEST:h.MEDIA_MUTE_REQUEST;this.dispatchEvent(new n.CustomEvent(e,{composed:!0,bubbles:!0}))}};vi.getSlotTemplateHTML=Id;vi.getTooltipContentHTML=Sd;n.customElements.get("media-mute-button")||n.customElements.define("media-mute-button",vi);var pn=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Md(t){return`
    <style>
      :host([${o.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${o.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${pn}</slot>
      <slot name="exit">${pn}</slot>
    </slot>
  `}function yd(){return`
    <slot name="tooltip-enter">${m("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${m("Exit picture in picture mode")}</slot>
  `}var En=t=>{let e=t.mediaIsPip?m("exit picture in picture mode"):m("enter picture in picture mode");t.setAttribute("aria-label",e)},fi=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_PIP,o.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),En(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_PIP&&En(this)}get mediaPipUnavailable(){return w(this,o.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){L(this,o.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return _(this,o.MEDIA_IS_PIP)}set mediaIsPip(e){g(this,o.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?h.MEDIA_EXIT_PIP_REQUEST:h.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new n.CustomEvent(e,{composed:!0,bubbles:!0}))}};fi.getSlotTemplateHTML=Md;fi.getTooltipContentHTML=yd;n.customElements.get("media-pip-button")||n.customElements.define("media-pip-button",fi);var kd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Rt=(t,e,i)=>(kd(t,e,"read from private field"),i?i.call(t):e.get(t)),Ld=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ve,Yr={RATES:"rates"},wd=[1,1.2,1.5,1.7,2],_i=1;function Qr(t){return Math.round(t*100)/100}function Rd(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Qr(+t.mediaplaybackrate):_i}x</slot>
  `}function Dd(){return m("Playback rate")}var gi=class extends C{constructor(){var e;super(),Ld(this,Ve,new bt(this,Yr.RATES,{defaultValue:wd})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Qr((e=this.mediaPlaybackRate)!=null?e:_i)}x`}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,Yr.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Yr.RATES&&(Rt(this,Ve).value=a),e===o.MEDIA_PLAYBACK_RATE){let r=a?+a:Number.NaN,s=Qr(Number.isNaN(r)?_i:r);this.container.innerHTML=`${s}x`,this.setAttribute("aria-label",m("Playback rate {playbackRate}",{playbackRate:s}))}}get rates(){return Rt(this,Ve)}set rates(e){e?Array.isArray(e)?Rt(this,Ve).value=e.join(" "):typeof e=="string"&&(Rt(this,Ve).value=e):Rt(this,Ve).value=""}get mediaPlaybackRate(){return D(this,o.MEDIA_PLAYBACK_RATE,_i)}set mediaPlaybackRate(e){U(this,o.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;let a=Array.from(Rt(this,Ve).values(),l=>+l).sort((l,d)=>l-d),r=(i=(e=a.find(l=>l>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:_i,s=new n.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}};Ve=new WeakMap;gi.getSlotTemplateHTML=Rd;gi.getTooltipContentHTML=Dd;n.customElements.get("media-playback-rate-button")||n.customElements.define("media-playback-rate-button",gi);var Cd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Od=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Ud(t){return`
    <style>
      :host([${o.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${o.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${o.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${o.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Cd}</slot>
      <slot name="pause">${Od}</slot>
    </slot>
  `}function xd(){return`
    <slot name="tooltip-play">${m("Play")}</slot>
    <slot name="tooltip-pause">${m("Pause")}</slot>
  `}var vn=t=>{let e=t.mediaPaused?m("play"):m("pause");t.setAttribute("aria-label",e)},bi=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),vn(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===o.MEDIA_PAUSED||e===o.MEDIA_LANG)&&vn(this)}get mediaPaused(){return _(this,o.MEDIA_PAUSED)}set mediaPaused(e){g(this,o.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n.CustomEvent(e,{composed:!0,bubbles:!0}))}};bi.getSlotTemplateHTML=Ud;bi.getTooltipContentHTML=xd;n.customElements.get("media-play-button")||n.customElements.define("media-play-button",bi);var ye={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function Pd(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var Nd=t=>{t.style.removeProperty("background-image")},Hd=(t,e)=>{t.style["background-image"]=`url('${e}')`},Ai=class extends n.HTMLElement{static get observedAttributes(){return[ye.PLACEHOLDER_SRC,ye.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===ye.SRC&&(a==null?this.image.removeAttribute(ye.SRC):this.image.setAttribute(ye.SRC,a)),e===ye.PLACEHOLDER_SRC&&(a==null?Nd(this.image):Hd(this.image,a))}get placeholderSrc(){return w(this,ye.PLACEHOLDER_SRC)}set placeholderSrc(e){L(this,ye.SRC,e)}get src(){return w(this,ye.SRC)}set src(e){L(this,ye.SRC,e)}};Ai.shadowRootOptions={mode:"open"};Ai.getTemplateHTML=Pd;n.customElements.get("media-poster-image")||n.customElements.define("media-poster-image",Ai);var fn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Fd=(t,e,i)=>(fn(t,e,"read from private field"),i?i.call(t):e.get(t)),Bd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$d=(t,e,i,a)=>(fn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),xa,zr=class extends ee{constructor(){super(),Bd(this,xa,void 0),$d(this,xa,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===o.MEDIA_PREVIEW_CHAPTER||e===o.MEDIA_LANG)&&a!==i&&a!=null)if(Fd(this,xa).textContent=a,a!==""){let r=m("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return w(this,o.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){L(this,o.MEDIA_PREVIEW_CHAPTER,e)}};xa=new WeakMap;n.customElements.get("media-preview-chapter-display")||n.customElements.define("media-preview-chapter-display",zr);var _n=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Pa=(t,e,i)=>(_n(t,e,"read from private field"),i?i.call(t):e.get(t)),Wd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Na=(t,e,i,a)=>(_n(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ke;function Vd(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var Dt=class extends n.HTMLElement{constructor(){if(super(),Wd(this,ke,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=F(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;let r=this.getAttribute(y.MEDIA_CONTROLLER);r&&(Na(this,ke,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Pa(this,ke))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Pa(this,ke))==null?void 0:e.unassociateElement)==null||i.call(e,this),Na(this,ke,null)}attributeChangedCallback(e,i,a){var r,s,l,d,c;[o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===y.MEDIA_CONTROLLER&&(i&&((s=(r=Pa(this,ke))==null?void 0:r.unassociateElement)==null||s.call(r,this),Na(this,ke,null)),a&&this.isConnected&&(Na(this,ke,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(c=(d=Pa(this,ke))==null?void 0:d.associateElement)==null||c.call(d,this)))}get mediaPreviewImage(){return w(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){L(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(o.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(o.MEDIA_PREVIEW_COORDS);return}this.setAttribute(o.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;let[a,r,s,l]=e,d=i.split("#")[0],c=getComputedStyle(this),{maxWidth:M,maxHeight:S,minWidth:T,minHeight:f}=c,p=c.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain",A,v;if(p==="fill"){let Re=parseInt(M)/s,De=parseInt(S)/l,Vt=parseInt(T)/s,Ye=parseInt(f)/l;A=Re<1?Re:Math.max(Re,Vt),v=De<1?De:Math.max(De,Ye)}else{let Re=Math.min(parseInt(M)/s,parseInt(S)/l),De=Math.max(parseInt(T)/s,parseInt(f)/l),Ye=Re<1?Re:De>1?De:1;A=Ye,v=Ye}let{style:k}=x(this.shadowRoot,":host"),I=x(this.shadowRoot,"img").style,Z=this.shadowRoot.querySelector("img"),Wt=Math.min(A,v)<1?"min":"max";k.setProperty(`${Wt}-width`,"initial","important"),k.setProperty(`${Wt}-height`,"initial","important"),k.width=`${s*A}px`,k.height=`${l*v}px`;let nt=()=>{I.width=`${this.imgWidth*A}px`,I.height=`${this.imgHeight*v}px`,I.display="block"};Z.src!==d&&(Z.onload=()=>{this.imgWidth=Z.naturalWidth,this.imgHeight=Z.naturalHeight,nt(),Z.onload=null},Z.src=d,nt()),nt(),I.transform=`translate(-${a*A}px, -${r*v}px)`}};ke=new WeakMap;Dt.shadowRootOptions={mode:"open"};Dt.getTemplateHTML=Vd;n.customElements.get("media-preview-thumbnail")||n.customElements.define("media-preview-thumbnail",Dt);var Ha=Dt;var bn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gn=(t,e,i)=>(bn(t,e,"read from private field"),i?i.call(t):e.get(t)),Kd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Gd=(t,e,i,a)=>(bn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ti,Zr=class extends ee{constructor(){super(),Kd(this,Ti,void 0),Gd(this,Ti,this.shadowRoot.querySelector("slot")),gn(this,Ti).textContent=le(0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_PREVIEW_TIME&&a!=null&&(gn(this,Ti).textContent=le(parseFloat(a)))}get mediaPreviewTime(){return D(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){U(this,o.MEDIA_PREVIEW_TIME,e)}};Ti=new WeakMap;n.customElements.get("media-preview-time-display")||n.customElements.define("media-preview-time-display",Zr);var Ct={SEEK_OFFSET:"seekoffset"},Xr=30,qd=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Yd(t,e){return`
    <slot name="icon">${qd(e.seekOffset)}</slot>
  `}var Qd=(t,e)=>{t.setAttribute("aria-label",m("seek back {seekOffset} seconds",{seekOffset:e}))};function zd(){return m("Seek backward")}var Zd=0,Ii=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,Ct.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=D(this,Ct.SEEK_OFFSET,Xr)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Qd(this,this.seekOffset),e===Ct.SEEK_OFFSET&&(this.seekOffset=D(this,Ct.SEEK_OFFSET,Xr))}get seekOffset(){return D(this,Ct.SEEK_OFFSET,Xr)}set seekOffset(e){U(this,Ct.SEEK_OFFSET,e),this.setAttribute("aria-label",m("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Wi(Vi(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return D(this,o.MEDIA_CURRENT_TIME,Zd)}set mediaCurrentTime(e){U(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new n.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};Ii.getSlotTemplateHTML=Yd;Ii.getTooltipContentHTML=zd;n.customElements.get("media-seek-backward-button")||n.customElements.define("media-seek-backward-button",Ii);var Ot={SEEK_OFFSET:"seekoffset"},Jr=30,Xd=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Jd(t,e){return`
    <slot name="icon">${Xd(e.seekOffset)}</slot>
  `}var jd=(t,e)=>{t.setAttribute("aria-label",m("seek forward {seekOffset} seconds",{seekOffset:e}))};function ec(){return m("Seek forward")}var tc=0,Si=class extends C{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,Ot.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=D(this,Ot.SEEK_OFFSET,Jr)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),jd(this,this.seekOffset),e===Ot.SEEK_OFFSET&&(this.seekOffset=D(this,Ot.SEEK_OFFSET,Jr))}get seekOffset(){return D(this,Ot.SEEK_OFFSET,Jr)}set seekOffset(e){U(this,Ot.SEEK_OFFSET,e),this.setAttribute("aria-label",m("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Wi(Vi(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return D(this,o.MEDIA_CURRENT_TIME,tc)}set mediaCurrentTime(e){U(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,i=new n.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};Si.getSlotTemplateHTML=Jd;Si.getTooltipContentHTML=ec;n.customElements.get("media-seek-forward-button")||n.customElements.define("media-seek-forward-button",Si);var to=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ee=(t,e,i)=>(to(t,e,"read from private field"),i?i.call(t):e.get(t)),ot=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},io=(t,e,i,a)=>(to(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ge=(t,e,i)=>(to(t,e,"access private method"),i),Ut,Le,Va,ao,Tn,$a,ro,Mi,Fa,Ba,jr,Ke={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},An=[...Object.values(Ke),o.MEDIA_CURRENT_TIME,o.MEDIA_DURATION,o.MEDIA_SEEKABLE],In=["Enter"," "],ic="&nbsp;/&nbsp;",eo=(t,{timesSep:e=ic}={})=>{var i,a;let r=(i=t.mediaCurrentTime)!=null?i:0,[,s]=(a=t.mediaSeekable)!=null?a:[],l=0;Number.isFinite(t.mediaDuration)?l=t.mediaDuration:Number.isFinite(s)&&(l=s);let d=t.remaining?le(0-(l-r)):le(r);return t.showDuration?`${d}${e}${le(l)}`:d},ac=t=>{var e;let i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[],r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",m("video not loaded, unknown time."));return}let s=t.remaining?ze(0-(r-i)):ze(i);if(!t.showDuration){t.setAttribute("aria-description",s);return}let l=ze(r),d=m("{currentTime} of {totalTime}",{currentTime:s,totalTime:l});t.setAttribute("aria-description",d)};function rc(t,e){return`
    <slot>${eo(e)}</slot>
  `}var oc=t=>{t.setAttribute("aria-label",m("playback time"))},Wa=class extends ee{constructor(){super(),ot(this,ao),ot(this,$a),ot(this,Mi),ot(this,Ba),ot(this,Ut,void 0),ot(this,Le,null),ot(this,Va,e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!In.includes(r)){this.removeEventListener("keyup",Ee(this,Le));return}this.addEventListener("keyup",Ee(this,Le))}),io(this,Ut,this.shadowRoot.querySelector("slot")),Ee(this,Ut).innerHTML=`${eo(this)}`}static get observedAttributes(){return[...super.observedAttributes,...An,"disabled"]}connectedCallback(){let{style:e}=x(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",m("playback time")),Ge(this,Mi,Fa).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ge(this,$a,ro).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){oc(this),An.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Ge(this,Mi,Fa).call(this):Ge(this,Ba,jr).call(this):e===Ke.NO_TOGGLE&&a!==i&&(this.noToggle?Ge(this,Ba,jr).call(this):Ge(this,Mi,Fa).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return _(this,Ke.REMAINING)}set remaining(e){g(this,Ke.REMAINING,e)}get showDuration(){return _(this,Ke.SHOW_DURATION)}set showDuration(e){g(this,Ke.SHOW_DURATION,e)}get noToggle(){return _(this,Ke.NO_TOGGLE)}set noToggle(e){g(this,Ke.NO_TOGGLE,e)}get mediaDuration(){return D(this,o.MEDIA_DURATION)}set mediaDuration(e){U(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return D(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){U(this,o.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}update(){let e=eo(this);ac(this),e!==Ee(this,Ut).innerHTML&&(Ee(this,Ut).innerHTML=e)}};Ut=new WeakMap;Le=new WeakMap;Va=new WeakMap;ao=new WeakSet;Tn=function(){Ee(this,Le)||(io(this,Le,t=>{let{key:e}=t;if(!In.includes(e)){this.removeEventListener("keyup",Ee(this,Le));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Ee(this,Va)),this.addEventListener("click",this.toggleTimeDisplay))};$a=new WeakSet;ro=function(){Ee(this,Le)&&(this.removeEventListener("keyup",Ee(this,Le)),this.removeEventListener("keydown",Ee(this,Va)),this.removeEventListener("click",this.toggleTimeDisplay),io(this,Le,null))};Mi=new WeakSet;Fa=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ge(this,ao,Tn).call(this))};Ba=new WeakSet;jr=function(){this.removeAttribute("role"),this.disable(),Ge(this,$a,ro).call(this)};Wa.getSlotTemplateHTML=rc;n.customElements.get("media-time-display")||n.customElements.define("media-time-display",Wa);var Sn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Y=(t,e,i)=>(Sn(t,e,"read from private field"),i?i.call(t):e.get(t)),we=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ie=(t,e,i,a)=>(Sn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),sc=(t,e,i,a)=>({set _(r){ie(t,e,r,i)},get _(){return Y(t,e,a)}}),xt,Ka,Pt,yi,Ga,qa,Ya,Nt,st,Qa,za=class{constructor(e,i,a){we(this,xt,void 0),we(this,Ka,void 0),we(this,Pt,void 0),we(this,yi,void 0),we(this,Ga,void 0),we(this,qa,void 0),we(this,Ya,void 0),we(this,Nt,void 0),we(this,st,0),we(this,Qa,(r=performance.now())=>{ie(this,st,requestAnimationFrame(Y(this,Qa))),ie(this,yi,performance.now()-Y(this,Pt));let s=1e3/this.fps;if(Y(this,yi)>s){ie(this,Pt,r-Y(this,yi)%s);let l=1e3/((r-Y(this,Ka))/++sc(this,Ga)._),d=(r-Y(this,qa))/1e3/this.duration,c=Y(this,Ya)+d*this.playbackRate;c-Y(this,xt).valueAsNumber>0?ie(this,Nt,this.playbackRate/this.duration/l):(ie(this,Nt,.995*Y(this,Nt)),c=Y(this,xt).valueAsNumber+Y(this,Nt)),this.callback(c)}}),ie(this,xt,e),this.callback=i,this.fps=a}start(){Y(this,st)===0&&(ie(this,Pt,performance.now()),ie(this,Ka,Y(this,Pt)),ie(this,Ga,0),Y(this,Qa).call(this))}stop(){Y(this,st)!==0&&(cancelAnimationFrame(Y(this,st)),ie(this,st,0))}update({start:e,duration:i,playbackRate:a}){let r=e-Y(this,xt).valueAsNumber,s=Math.abs(i-this.duration);(r>0||r<-.03||s>=.5)&&this.callback(e),ie(this,Ya,e),ie(this,qa,performance.now()),this.duration=i,this.playbackRate=a}};xt=new WeakMap;Ka=new WeakMap;Pt=new WeakMap;yi=new WeakMap;Ga=new WeakMap;qa=new WeakMap;Ya=new WeakMap;Nt=new WeakMap;st=new WeakMap;Qa=new WeakMap;var co=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},P=(t,e,i)=>(co(t,e,"read from private field"),i?i.call(t):e.get(t)),K=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},re=(t,e,i,a)=>(co(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),oe=(t,e,i)=>(co(t,e,"access private method"),i),Ht,qe,Ja,Li,ja,Xa,wi,Ri,Ft,Bt,ki,oo,Mn,so,er,uo,tr,ho,ir,mo,no,yn,Di,ar,lo,kn,nc=t=>{let e=t.range,i=ze(+Ln(t)),a=ze(+t.mediaSeekableEnd),r=i&&a?m("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):m("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function lc(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Ha.shadowRootOptions.mode}">
            ${Ha.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Za=(t,e=t.mediaCurrentTime)=>{let i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;let r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Ln=(t,e=t.range.valueAsNumber)=>{let i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i},Ci=class extends Te{constructor(){super(),K(this,oo),K(this,er),K(this,tr),K(this,ir),K(this,no),K(this,Di),K(this,lo),K(this,Ht,null),K(this,qe,void 0),K(this,Ja,void 0),K(this,Li,void 0),K(this,ja,void 0),K(this,Xa,void 0),K(this,wi,void 0),K(this,Ri,void 0),K(this,Ft,void 0),K(this,Bt,void 0),K(this,ki,()=>{oe(this,oo,Mn).call(this)?P(this,qe).start():P(this,qe).stop()}),K(this,so,a=>{this.dragging||(ct(a)&&(this.range.valueAsNumber=a),P(this,Bt)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),re(this,Ja,this.shadowRoot.querySelectorAll('[part~="box"]')),re(this,ja,this.shadowRoot.querySelector('[part~="preview-box"]')),re(this,Xa,this.shadowRoot.querySelector('[part~="current-box"]'));let i=getComputedStyle(this);re(this,wi,parseInt(i.getPropertyValue("--media-box-padding-left"))),re(this,Ri,parseInt(i.getPropertyValue("--media-box-padding-right"))),re(this,qe,new za(this.range,P(this,so),60))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,o.MEDIA_CURRENT_TIME,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_TIME,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_BUFFERED,o.MEDIA_PLAYBACK_RATE,o.MEDIA_LOADING,o.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",m("seek")),P(this,ki).call(this),re(this,Ht,this.getRootNode()),(e=P(this,Ht))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),P(this,qe).stop(),(e=P(this,Ht))==null||e.removeEventListener("transitionstart",this),re(this,Ht,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===o.MEDIA_CURRENT_TIME||e===o.MEDIA_PAUSED||e===o.MEDIA_ENDED||e===o.MEDIA_LOADING||e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE?(P(this,qe).update({start:Za(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),P(this,ki).call(this),nc(this)):e===o.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=P(this,Ft),this.updateBar()))}get mediaChaptersCues(){return P(this,Ft)}set mediaChaptersCues(e){var i;re(this,Ft,e),this.updateSegments((i=P(this,Ft))==null?void 0:i.map(a=>({start:Za(this,a.startTime),end:Za(this,a.endTime)})))}get mediaPaused(){return _(this,o.MEDIA_PAUSED)}set mediaPaused(e){g(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return _(this,o.MEDIA_LOADING)}set mediaLoading(e){g(this,o.MEDIA_LOADING,e)}get mediaDuration(){return D(this,o.MEDIA_DURATION)}set mediaDuration(e){U(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return D(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){U(this,o.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return D(this,o.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){U(this,o.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(o.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(o.MEDIA_BUFFERED);return}let i=e.map(a=>a.join(":")).join(" ");this.setAttribute(o.MEDIA_BUFFERED,i)}get mediaSeekable(){let e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;let[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return w(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){L(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return D(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){U(this,o.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return _(this,o.MEDIA_ENDED)}set mediaEnded(e){g(this,o.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{let s=this.mediaCurrentTime,[,l=this.mediaSeekableStart]=(e=i.find(([d,c])=>d<=s&&s<=c))!=null?e:[];a=Za(this,l)}let{style:r}=x(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let i=x(this.shadowRoot,"#current-rail"),a=x(this.shadowRoot,'[part~="current-box"]'),r=oe(this,er,uo).call(this,P(this,Xa)),s=oe(this,tr,ho).call(this,r,this.range.valueAsNumber),l=oe(this,ir,mo).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${s})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${l}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":oe(this,lo,kn).call(this);break;case"pointermove":oe(this,no,yn).call(this,e);break;case"pointerup":P(this,Bt)&&re(this,Bt,!1);break;case"pointerdown":re(this,Bt,!0);break;case"pointerleave":oe(this,Di,ar).call(this,null);break;case"transitionstart":ve(e.target,this)&&setTimeout(()=>P(this,ki).call(this),0);break}}};Ht=new WeakMap;qe=new WeakMap;Ja=new WeakMap;Li=new WeakMap;ja=new WeakMap;Xa=new WeakMap;wi=new WeakMap;Ri=new WeakMap;Ft=new WeakMap;Bt=new WeakMap;ki=new WeakMap;oo=new WeakSet;Mn=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Ki(this)};so=new WeakMap;er=new WeakSet;uo=function(t){var e;let a=((e=this.getAttribute("bounds")?Pe(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),s=t.offsetWidth,l=-(r.left-a.left-s/2),d=a.right-r.left-s/2;return{box:{width:s,min:l,max:d},bounds:a,range:r}};tr=new WeakSet;ho=function(t,e){let i=`${e*100}%`,{width:a,min:r,max:s}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(s)){let d=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${d})`}return i};ir=new WeakSet;mo=function(t,e){let{width:i,min:a,max:r}=t.box,s=e*t.range.width;if(s<a+P(this,wi)){let l=t.range.left-t.bounds.left-P(this,wi);return`${s-i/2+l}px`}if(s>r-P(this,Ri)){let l=t.bounds.right-t.range.right-P(this,Ri);return`${s+i/2-l-t.range.width}px`}return 0};no=new WeakSet;yn=function(t){let e=[...P(this,Ja)].some(S=>t.composedPath().includes(S));if(!this.dragging&&(e||!t.composedPath().includes(this))){oe(this,Di,ar).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=x(this.shadowRoot,"#preview-rail"),r=x(this.shadowRoot,'[part~="preview-box"]'),s=oe(this,er,uo).call(this,P(this,ja)),l=(t.clientX-s.range.left)/s.range.width;l=Math.max(0,Math.min(1,l));let d=oe(this,tr,ho).call(this,s,l),c=oe(this,ir,mo).call(this,s,l);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${c}`),r.style.setProperty("--_box-width",`${s.box.width}px`);let M=Math.round(P(this,Li))-Math.round(l*i);Math.abs(M)<1&&l>.01&&l<.99||(re(this,Li,l*i),oe(this,Di,ar).call(this,P(this,Li)))};Di=new WeakSet;ar=function(t){this.dispatchEvent(new n.CustomEvent(h.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};lo=new WeakSet;kn=function(){P(this,qe).stop();let t=Ln(this);this.dispatchEvent(new n.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Ci.shadowRootOptions={mode:"open"};Ci.getContainerTemplateHTML=lc;n.customElements.get("media-time-range")||n.customElements.define("media-time-range",Ci);var dc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},wn=(t,e,i)=>(dc(t,e,"read from private field"),i?i.call(t):e.get(t)),cc=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},rr,uc=1,hc=t=>t.mediaMuted?0:t.mediaVolume,mc=t=>`${Math.round(t*100)}%`,po=class extends Te{constructor(){super(...arguments),cc(this,rr,()=>{let e=this.range.value,i=new n.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME,o.MEDIA_MUTED,o.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",m("volume")),this.range.addEventListener("input",wn(this,rr))}disconnectedCallback(){this.range.removeEventListener("input",wn(this,rr)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===o.MEDIA_VOLUME||e===o.MEDIA_MUTED)&&(this.range.valueAsNumber=hc(this),this.range.setAttribute("aria-valuetext",mc(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return D(this,o.MEDIA_VOLUME,uc)}set mediaVolume(e){U(this,o.MEDIA_VOLUME,e)}get mediaMuted(){return _(this,o.MEDIA_MUTED)}set mediaMuted(e){g(this,o.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return w(this,o.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){L(this,o.MEDIA_VOLUME_UNAVAILABLE,e)}};rr=new WeakMap;n.customElements.get("media-volume-range")||n.customElements.define("media-volume-range",po);function pc(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${o.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Ec(){return m("Loop")}var Oi=class extends C{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=m("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return _(this,o.MEDIA_LOOP)}set mediaLoop(e){g(this,o.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,i=new n.CustomEvent(h.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};Oi.getSlotTemplateHTML=pc;Oi.getTooltipContentHTML=Ec;n.customElements.get("media-loop-button")||n.customElements.define("media-loop-button",Oi);for(let t of document.querySelectorAll(".music-player video"))t.controls=!1,t.addEventListener("play",()=>{for(let e of document.querySelectorAll(".music-player video"))e!==t&&e.pause()});
