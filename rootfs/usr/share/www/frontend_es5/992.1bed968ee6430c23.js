(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["992"],{73729:function(e,i,t){"use strict";t.d(i,{i:function(){return m}});var o=t(44249),a=t(72621),n=(t(22152),t(71695),t(47021),t(74966)),l=t(51408),d=t(57243),r=t(18869),s=t(8338);t(23043);let c,p,g,h=e=>e;const u=["button","ha-list-item"],m=(e,i)=>{var t;return(0,d.dy)(c||(c=h` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",i)};(0,o.Z)([(0,r.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:s.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return(0,d.dy)(p||(p=h`<slot name="heading"> ${0} </slot>`),(0,a.Z)(t,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,a.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,u].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,d.iv)(g||(g=h`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))]}}]}}),n.M)},1564:function(e,i,t){"use strict";t.r(i);var o=t(44249),a=(t(71695),t(40251),t(47021),t(57243)),n=t(18869),l=t(36522),d=t(73729);let r,s,c=e=>e;(0,o.Z)([(0,n.Mo)("app-dialog")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"localize",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this.localize=e.localize}},{kind:"method",key:"closeDialog",value:async function(){this.localize=void 0,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this.localize?(0,a.dy)(r||(r=c`<ha-dialog open hideActions @closed="${0}" .heading="${0}"> <div> <div class="app-qr"> <a target="_blank" rel="noreferrer noopener" href="https://apps.apple.com/app/home-assistant/id1099568401?mt=8"> <img loading="lazy" src="/static/images/appstore.svg" alt="${0}" class="icon"> <img loading="lazy" src="/static/images/qr-appstore.svg" alt="${0}"> </a> <a target="_blank" rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android"> <img loading="lazy" src="/static/images/playstore.svg" alt="${0}" class="icon"> <img loading="lazy" src="/static/images/qr-playstore.svg" alt="${0}"> </a> </div> </div> </ha-dialog>`),this.closeDialog,(0,d.i)(void 0,this.localize("ui.panel.page-onboarding.welcome.download_app")||"Click here to download the app"),this.localize("ui.panel.page-onboarding.welcome.appstore"),this.localize("ui.panel.page-onboarding.welcome.appstore"),this.localize("ui.panel.page-onboarding.welcome.playstore"),this.localize("ui.panel.page-onboarding.welcome.playstore")):a.Ld}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(s||(s=c`ha-dialog{--mdc-dialog-min-width:min(500px, 90vw)}.app-qr{display:flex;justify-content:space-between;box-sizing:border-box;gap:32px;width:100%}.app-qr a,.app-qr img{flex:1;max-width:180px}`))}}]}}),a.oi)},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,i){return void 0!==i&&(i=!!i),this.hasAttribute(e)?!!i||(this.removeAttribute(e),!1):!1!==i&&(this.setAttribute(e,""),!0)})}}]);
//# sourceMappingURL=992.1bed968ee6430c23.js.map