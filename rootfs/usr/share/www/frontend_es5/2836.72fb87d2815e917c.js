"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["2836"],{74666:function(e,i,t){var a=t(73577),o=(t(71695),t(47021),t(74763)),s=t(50778);(0,a.Z)([(0,s.Mo)("ha-chip-set")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[]}}),o.l)},18756:function(e,i,t){var a=t(73577),o=t(72621),s=(t(71695),t(47021),t(74514)),l=t(57243),n=t(50778);let d,r=e=>e;(0,a.Z)([(0,n.Mo)("ha-input-chip")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(t,"styles",this),(0,l.iv)(d||(d=r`:host{--md-sys-color-primary:var(--primary-text-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--primary-text-color);--md-sys-color-on-secondary-container:var(--primary-text-color);--md-input-chip-container-shape:16px;--md-input-chip-outline-color:var(--outline-color);--md-input-chip-selected-container-color:rgba(
          var(--rgb-primary-text-color),
          0.15
        );--ha-input-chip-selected-container-opacity:1;--md-input-chip-label-text-font:Roboto,sans-serif}::slotted([slot=icon]){display:flex;--mdc-icon-size:var(--md-input-chip-icon-size, 18px)}.selected::before{opacity:var(--ha-input-chip-selected-container-opacity)}`))]}}]}}),s.W)},91665:function(e,i,t){var a=t(73577),o=(t(71695),t(47021),t(57243)),s=t(50778),l=t(36522);t(78860);let n,d=e=>e;(0,a.Z)([(0,s.Mo)("ha-aliases-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array})],key:"aliases",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"method",key:"render",value:function(){return this.aliases?(0,o.dy)(n||(n=d` <ha-multi-textfield .hass="${0}" .value="${0}" .disabled="${0}" .label="${0}" .removeLabel="${0}" .addLabel="${0}" item-index @value-changed="${0}"> </ha-multi-textfield> `),this.hass,this.aliases,this.disabled,this.hass.localize("ui.dialogs.aliases.label"),this.hass.localize("ui.dialogs.aliases.remove"),this.hass.localize("ui.dialogs.aliases.add"),this._aliasesChanged):o.Ld}},{kind:"method",key:"_aliasesChanged",value:function(e){(0,l.B)(this,"value-changed",{value:e})}}]}}),o.oi)},81282:function(e,i,t){t.a(e,(async function(e,i){try{var a=t(73577),o=(t(19083),t(71695),t(9359),t(68107),t(56475),t(70104),t(52924),t(19423),t(40251),t(61006),t(47021),t(57243)),s=t(50778),l=t(35359),n=t(27486),d=t(36522),r=t(73850),c=t(24360),h=t(82100),u=t(71857),v=t(76131),p=t(61107),m=t(94279),f=(t(23043),t(7285),t(37583),e([m]));m=(f.then?(await f)():f)[0];let _,y,g,k,b=e=>e;const x="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",$=e=>(0,o.dy)(_||(_=b`<ha-list-item graphic="icon" class="${0}"> ${0} ${0} </ha-list-item>`),(0,l.$)({"add-new":e.area_id===w}),e.icon?(0,o.dy)(y||(y=b`<ha-icon slot="graphic" .icon="${0}"></ha-icon>`),e.icon):(0,o.dy)(g||(g=b`<ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon>`),x),e.name),w="___ADD_NEW___",C="___NO_ITEMS___",A="___ADD_NEW_SUGGESTION___";(0,a.Z)([(0,s.Mo)("ha-area-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,s.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,s.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value(){return!1}},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_getAreas",value(){return(0,n.Z)(((e,i,t,a,o,s,l,n,d,c)=>{let h,v,p={};(a||o||s||l||n)&&(p=(0,u.R6)(t),h=i,v=t.filter((e=>e.area_id)),a&&(h=h.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>a.includes((0,r.M)(e.entity_id))))})),v=v.filter((e=>a.includes((0,r.M)(e.entity_id))))),o&&(h=h.filter((e=>{const i=p[e.id];return!i||!i.length||t.every((e=>!o.includes((0,r.M)(e.entity_id))))})),v=v.filter((e=>!o.includes((0,r.M)(e.entity_id))))),s&&(h=h.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&s.includes(i.attributes.device_class))}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&s.includes(i.attributes.device_class)}))),l&&(h=h.filter((e=>l(e)))),n&&(h=h.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))));let m,f=e;return h&&(m=h.filter((e=>e.area_id)).map((e=>e.area_id))),v&&(m=(null!=m?m:[]).concat(v.filter((e=>e.area_id)).map((e=>e.area_id)))),m&&(f=f.filter((e=>m.includes(e.area_id)))),c&&(f=f.filter((e=>!c.includes(e.area_id)))),f.length||(f=[{area_id:C,floor_id:null,name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null,icon:null,aliases:[],labels:[],temperature_entity_id:null,humidity_entity_id:null,created_at:0,modified_at:0}]),d?f:[...f,{area_id:w,floor_id:null,name:this.hass.localize("ui.components.area-picker.add_new"),picture:null,icon:"mdi:plus",aliases:[],labels:[],temperature_entity_id:null,humidity_entity_id:null,created_at:0,modified_at:0}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas).map((e=>Object.assign(Object.assign({},e),{},{strings:[e.area_id,...e.aliases,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return(0,o.dy)(k||(k=b` <ha-combo-box .hass="${0}" .helper="${0}" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="${0}" .disabled="${0}" .required="${0}" .label="${0}" .placeholder="${0}" .renderer="${0}" @filter-changed="${0}" @opened-changed="${0}" @value-changed="${0}"> </ha-combo-box> `),this.hass,this.helper,this._value,this.disabled,this.required,void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label,this.placeholder?null===(e=this.hass.areas[this.placeholder])||void 0===e?void 0:e.name:void 0,$,this._filterChanged,this._openedChanged,this._areaChanged)}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.target,a=e.detail.value;if(!a)return void(this.comboBox.filteredItems=this.comboBox.items);const o=(0,c.q)(a,(null===(i=t.items)||void 0===i?void 0:i.filter((e=>![C,w].includes(e.label_id))))||[]);0===o.length?this.noAdd?(this._suggestion=a,this.comboBox.filteredItems=[{area_id:A,floor_id:null,name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",picture:null,labels:[],aliases:[],temperature_entity_id:null,humidity_entity_id:null,created_at:0,modified_at:0}]):this.comboBox.filteredItems=[{area_id:C,floor_id:null,name:this.hass.localize("ui.components.area-picker.no_match"),icon:null,picture:null,labels:[],aliases:[],temperature_entity_id:null,humidity_entity_id:null,created_at:0,modified_at:0}]:this.comboBox.filteredItems=o}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===C)return i="",void this.comboBox.setInputValue("");[A,w].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),(0,p.E)(this,{suggestedName:i===A?this._suggestion:"",createEntry:async e=>{try{const i=await(0,h.Lo)(this.hass,e),t=[...Object.values(this.hass.areas),i];this.comboBox.filteredItems=this._getAreas(t,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.area_id)}catch(i){(0,v.Ys)(this,{title:this.hass.localize("ui.components.area-picker.failed_create_area"),text:i.message})}}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,d.B)(this,"value-changed",{value:e}),(0,d.B)(this,"change")}),0)}}]}}),o.oi);i()}catch(_){i(_)}}))},73729:function(e,i,t){t.d(i,{i:()=>m});var a=t(73577),o=t(72621),s=(t(22152),t(71695),t(47021),t(74966)),l=t(51408),n=t(57243),d=t(50778),r=t(8338);t(23043);let c,h,u,v=e=>e;const p=["button","ha-list-item"],m=(e,i)=>{var t;return(0,n.dy)(c||(c=v` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(t=null==e?void 0:e.localize("ui.common.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",i)};(0,a.Z)([(0,d.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return(0,n.dy)(h||(h=v`<slot name="heading"> ${0} </slot>`),(0,o.Z)(t,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,o.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,p].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,n.iv)(u||(u=v`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))]}}]}}),s.M)},34363:function(e,i,t){var a=t(73577),o=(t(71695),t(47021),t(57243)),s=t(50778);let l,n,d=e=>e;(0,a.Z)([(0,s.Mo)("ha-input-helper-text")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"render",value:function(){return(0,o.dy)(l||(l=d`<slot></slot>`))}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(n||(n=d`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px}`))}}]}}),o.oi)},78860:function(e,i,t){var a=t(73577),o=(t(71695),t(9359),t(70104),t(40251),t(47021),t(57243)),s=t(50778),l=t(36522),n=t(28008);t(59826),t(23043),t(83166),t(34363);let d,r,c,h,u=e=>e;(0,a.Z)([(0,s.Mo)("ha-multi-textfield")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"inputType",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"inputSuffix",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"inputPrefix",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"addLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"removeLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-index",type:Boolean})],key:"itemIndex",value(){return!1}},{kind:"method",key:"render",value:function(){var e,i,t,a;return(0,o.dy)(d||(d=u` ${0} <div class="layout horizontal"> <ha-button @click="${0}" .disabled="${0}"> ${0} <ha-svg-icon slot="icon" .path="${0}"></ha-svg-icon> </ha-button> </div> ${0} `),this._items.map(((e,i)=>{var t,a,s;const l=""+(this.itemIndex?` ${i+1}`:"");return(0,o.dy)(r||(r=u` <div class="layout horizontal center-center row"> <ha-textfield .suffix="${0}" .prefix="${0}" .type="${0}" .autocomplete="${0}" .disabled="${0}" dialogInitialFocus="${0}" .index="${0}" class="flex-auto" .label="${0}" .value="${0}" ?data-last="${0}" @input="${0}" @keydown="${0}"></ha-textfield> <ha-icon-button .disabled="${0}" .index="${0}" slot="navigationIcon" .label="${0}" @click="${0}" .path="${0}"></ha-icon-button> </div> `),this.inputSuffix,this.inputPrefix,this.inputType,this.autocomplete,this.disabled,i,i,""+(this.label?`${this.label}${l}`:""),e,i===this._items.length-1,this._editItem,this._keyDown,this.disabled,i,null!==(t=null!==(a=this.removeLabel)&&void 0!==a?a:null===(s=this.hass)||void 0===s?void 0:s.localize("ui.common.remove"))&&void 0!==t?t:"Remove",this._removeItem,"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z")})),this._addItem,this.disabled,null!==(e=null!==(i=this.addLabel)&&void 0!==i?i:this.label?null===(t=this.hass)||void 0===t?void 0:t.localize("ui.components.multi-textfield.add_item",{item:this.label}):null===(a=this.hass)||void 0===a?void 0:a.localize("ui.common.add"))&&void 0!==e?e:"Add","M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",this.helper?(0,o.dy)(c||(c=u`<ha-input-helper-text>${0}</ha-input-helper-text>`),this.helper):o.Ld)}},{kind:"get",key:"_items",value:function(){var e;return null!==(e=this.value)&&void 0!==e?e:[]}},{kind:"method",key:"_addItem",value:async function(){var e;const i=[...this._items,""];this._fireChanged(i),await this.updateComplete;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-textfield[data-last]");null==t||t.focus()}},{kind:"method",key:"_editItem",value:async function(e){const i=e.target.index,t=[...this._items];t[i]=e.target.value,this._fireChanged(t)}},{kind:"method",key:"_keyDown",value:async function(e){"Enter"===e.key&&(e.stopPropagation(),this._addItem())}},{kind:"method",key:"_removeItem",value:async function(e){const i=e.target.index,t=[...this._items];t.splice(i,1),this._fireChanged(t)}},{kind:"method",key:"_fireChanged",value:function(e){this.value=e,(0,l.B)(this,"value-changed",{value:e})}},{kind:"get",static:!0,key:"styles",value:function(){return[n.Qx,(0,o.iv)(h||(h=u`.row{margin-bottom:8px}ha-textfield{display:block}ha-icon-button{display:block}ha-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial}`))]}}]}}),o.oi)},30509:function(e,i,t){var a=t(73577),o=(t(71695),t(47021),t(57243)),s=t(50778);let l,n,d=e=>e;(0,a.Z)([(0,s.Mo)("ha-settings-row")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"slim",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"wrap-heading",reflect:!0})],key:"wrapHeading",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,o.dy)(l||(l=d` <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="${0}" ?three-line="${0}"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> `),!this.threeLine,this.threeLine)}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(n||(n=d`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16px;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
        --mdc-typography-body2-font-family,
        var(--mdc-typography-font-family, Roboto, sans-serif)
      );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}:host([slim]),:host([slim]) .content,:host([slim]) ::slotted(ha-switch){padding:0}:host([slim]) .body{min-height:0}`))}}]}}),o.oi)},43604:function(e,i,t){t.a(e,(async function(e,a){try{t.r(i);var o=t(73577),s=(t(71695),t(9359),t(56475),t(70104),t(40251),t(92519),t(42179),t(89256),t(24931),t(88463),t(57449),t(19814),t(81804),t(47021),t(31622),t(2060),t(57243)),l=t(50778),n=t(91583),d=t(27486),r=t(36522),c=(t(74666),t(18756),t(99426),t(91665),t(73729)),h=t(2928),u=(t(30509),t(37583),t(83166),t(81282)),v=t(28008),p=t(61107),m=t(82100),f=e([h,u]);[h,u]=f.then?(await f)():f;let _,y,g,k,b,x,$,w,C,A=e=>e;const L="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z";let B=(0,o.Z)(null,(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_aliases",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_level",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_submitting",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_addedAreas",value(){return new Set}},{kind:"field",decorators:[(0,l.SB)()],key:"_removedAreas",value(){return new Set}},{kind:"method",key:"showDialog",value:function(e){var i,t,a,o;this._params=e,this._error=void 0,this._name=this._params.entry?this._params.entry.name:this._params.suggestedName||"",this._aliases=(null===(i=this._params.entry)||void 0===i?void 0:i.aliases)||[],this._icon=(null===(t=this._params.entry)||void 0===t?void 0:t.icon)||null,this._level=null!==(a=null===(o=this._params.entry)||void 0===o?void 0:o.level)&&void 0!==a?a:null,this._addedAreas.clear(),this._removedAreas.clear()}},{kind:"method",key:"closeDialog",value:function(){this._error="",this._params=void 0,this._addedAreas.clear(),this._removedAreas.clear(),(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"field",key:"_floorAreas",value(){return(0,d.Z)(((e,i,t,a)=>Object.values(i).filter((i=>(i.floor_id===(null==e?void 0:e.floor_id)||t.has(i.area_id))&&!a.has(i.area_id)))))}},{kind:"method",key:"render",value:function(){var e;const i=this._floorAreas(null===(e=this._params)||void 0===e?void 0:e.entry,this.hass.areas,this._addedAreas,this._removedAreas);if(!this._params)return s.Ld;const t=this._params.entry,a=!this._isNameValid();return(0,s.dy)(_||(_=A` <ha-dialog open @closed="${0}" .heading="${0}"> <div> ${0} <div class="form"> ${0} <ha-textfield .value="${0}" @input="${0}" .label="${0}" .validationMessage="${0}" required dialogInitialFocus></ha-textfield> <ha-textfield .value="${0}" @input="${0}" .label="${0}" type="number"></ha-textfield> <ha-icon-picker .hass="${0}" .value="${0}" @value-changed="${0}" .label="${0}"> ${0} </ha-icon-picker> <h3 class="header"> ${0} </h3> <p class="description"> ${0} </p> ${0} <ha-area-picker no-add .hass="${0}" @value-changed="${0}" .excludeAreas="${0}" .label="${0}"></ha-area-picker> <h3 class="header"> ${0} </h3> <p class="description"> ${0} </p> <ha-aliases-editor .hass="${0}" .aliases="${0}" @value-changed="${0}"></ha-aliases-editor> </div> </div> <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button slot="primaryAction" @click="${0}" .disabled="${0}"> ${0} </mwc-button> </ha-dialog> `),this.closeDialog,(0,c.i)(this.hass,t?this.hass.localize("ui.panel.config.floors.editor.update_floor"):this.hass.localize("ui.panel.config.floors.editor.create_floor")),this._error?(0,s.dy)(y||(y=A`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):"",t?(0,s.dy)(g||(g=A` <ha-settings-row> <span slot="heading"> ${0} </span> <span slot="description">${0}</span> </ha-settings-row> `),this.hass.localize("ui.panel.config.floors.editor.floor_id"),t.floor_id):s.Ld,this._name,this._nameChanged,this.hass.localize("ui.panel.config.floors.editor.name"),this.hass.localize("ui.panel.config.floors.editor.name_required"),this._level,this._levelChanged,this.hass.localize("ui.panel.config.floors.editor.level"),this.hass,this._icon,this._iconChanged,this.hass.localize("ui.panel.config.areas.editor.icon"),this._icon?s.Ld:(0,s.dy)(k||(k=A` <ha-floor-icon slot="fallback" .floor="${0}"></ha-floor-icon> `),{level:this._level}),this.hass.localize("ui.panel.config.floors.editor.areas_section"),this.hass.localize("ui.panel.config.floors.editor.areas_description"),i.length?(0,s.dy)(b||(b=A`<ha-chip-set> ${0} </ha-chip-set>`),(0,n.r)(i,(e=>e.area_id),(e=>(0,s.dy)(x||(x=A`<ha-input-chip .area="${0}" @click="${0}" @remove="${0}" .label="${0}"> ${0} </ha-input-chip>`),e,this._openArea,this._removeArea,null==e?void 0:e.name,e.icon?(0,s.dy)($||($=A`<ha-icon slot="icon" .icon="${0}"></ha-icon>`),e.icon):(0,s.dy)(w||(w=A`<ha-svg-icon slot="icon" .path="${0}"></ha-svg-icon>`),L))))):s.Ld,this.hass,this._addArea,i.map((e=>e.area_id)),this.hass.localize("ui.panel.config.floors.editor.add_area"),this.hass.localize("ui.panel.config.floors.editor.aliases_section"),this.hass.localize("ui.panel.config.floors.editor.aliases_description"),this.hass,this._aliases,this._aliasesChanged,this.closeDialog,this.hass.localize("ui.common.cancel"),this._updateEntry,a||this._submitting,t?this.hass.localize("ui.common.save"):this.hass.localize("ui.common.create"))}},{kind:"method",key:"_openArea",value:function(e){const i=e.target.area;(0,p.E)(this,{entry:i,updateEntry:e=>(0,m.IO)(this.hass,i.area_id,e)})}},{kind:"method",key:"_removeArea",value:function(e){const i=e.target.area.area_id;if(this._addedAreas.has(i))return this._addedAreas.delete(i),void(this._addedAreas=new Set(this._addedAreas));this._removedAreas.add(i),this._removedAreas=new Set(this._removedAreas)}},{kind:"method",key:"_addArea",value:function(e){const i=e.detail.value;if(i){if(e.target.value="",this._removedAreas.has(i))return this._removedAreas.delete(i),void(this._removedAreas=new Set(this._removedAreas));this._addedAreas.add(i),this._addedAreas=new Set(this._addedAreas)}}},{kind:"method",key:"_isNameValid",value:function(){return""!==this._name.trim()}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_levelChanged",value:function(e){this._error=void 0,this._level=""===e.target.value?null:Number(e.target.value)}},{kind:"method",key:"_iconChanged",value:function(e){this._error=void 0,this._icon=e.detail.value}},{kind:"method",key:"_updateEntry",value:async function(){this._submitting=!0;const e=!this._params.entry;try{const i={name:this._name.trim(),icon:this._icon||(e?void 0:null),level:this._level,aliases:this._aliases};e?await this._params.createEntry(i,this._addedAreas):await this._params.updateEntry(i,this._addedAreas,this._removedAreas),this.closeDialog()}catch(i){this._error=i.message||this.hass.localize("ui.panel.config.floors.editor.unknown_error")}finally{this._submitting=!1}}},{kind:"method",key:"_aliasesChanged",value:function(e){this._aliases=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,v.yu,(0,s.iv)(C||(C=A`ha-textfield{display:block;margin-bottom:16px}ha-floor-icon{color:var(--secondary-text-color)}ha-chip-set{margin-bottom:8px}`))]}}]}}),s.oi);customElements.define("dialog-floor-registry-detail",B),a()}catch(_){a(_)}}))},61107:function(e,i,t){t.d(i,{E:()=>s});t(71695),t(40251),t(47021);var a=t(36522);const o=()=>Promise.all([t.e("2206"),t.e("7983"),t.e("8006"),t.e("2311"),t.e("8865"),t.e("4959"),t.e("7659"),t.e("2308"),t.e("4958"),t.e("2669"),t.e("4356")]).then(t.bind(t,2711)),s=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-area-registry-detail",dialogImport:o,dialogParams:i})}}}]);
//# sourceMappingURL=2836.72fb87d2815e917c.js.map