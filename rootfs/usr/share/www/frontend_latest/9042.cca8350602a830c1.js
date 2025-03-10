export const __webpack_ids__=["9042"];export const __webpack_modules__={59826:function(e,i,t){var a=t(44249),n=t(31622),o=t(57243),s=t(50778),d=t(22344);(0,a.Z)([(0,s.Mo)("ha-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[d.W,o.iv`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}:host([destructive]){--mdc-theme-primary:var(--error-color)}`]}]}}),n.z)},34326:function(e,i,t){var a=t(44249),n=t(57243),o=t(50778);t(23043),t(83166);(0,a.Z)([(0,o.Mo)("ha-password-field")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"iconTrailing",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"value",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"placeholder",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"label",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"minLength",value:()=>-1},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"maxLength",value:()=>-1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"helper",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"validateOnInitialRender",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"validationMessage",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"autoValidate",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"pattern",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"size",value:()=>null},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"helperPersistent",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"charCounter",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"endAligned",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"prefix",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"suffix",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"name",value:()=>""},{kind:"field",decorators:[(0,o.Cb)({type:String,attribute:"input-mode"})],key:"inputMode",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1,type:String})],key:"autocapitalize",value:()=>""},{kind:"field",decorators:[(0,o.SB)()],key:"_unmaskedPassword",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("ha-textfield")],key:"_textField",value:void 0},{kind:"method",key:"render",value:function(){return n.dy`<ha-textfield .invalid="${this.invalid}" .errorMessage="${this.errorMessage}" .icon="${this.icon}" .iconTrailing="${this.iconTrailing}" .autocomplete="${this.autocomplete}" .autocorrect="${this.autocorrect}" .inputSpellcheck="${this.inputSpellcheck}" .value="${this.value}" .placeholder="${this.placeholder}" .label="${this.label}" .disabled="${this.disabled}" .required="${this.required}" .minLength="${this.minLength}" .maxLength="${this.maxLength}" .outlined="${this.outlined}" .helper="${this.helper}" .validateOnInitialRender="${this.validateOnInitialRender}" .validationMessage="${this.validationMessage}" .autoValidate="${this.autoValidate}" .pattern="${this.pattern}" .size="${this.size}" .helperPersistent="${this.helperPersistent}" .charCounter="${this.charCounter}" .endAligned="${this.endAligned}" .prefix="${this.prefix}" .name="${this.name}" .inputMode="${this.inputMode}" .readOnly="${this.readOnly}" .autocapitalize="${this.autocapitalize}" .type="${this._unmaskedPassword?"text":"password"}" .suffix="${n.dy`<div style="width:24px"></div>`}" @input="${this._handleInputEvent}" @change="${this._handleChangeEvent}"></ha-textfield> <ha-icon-button .label="${this.hass?.localize(this._unmaskedPassword?"ui.components.selectors.text.hide_password":"ui.components.selectors.text.show_password")||(this._unmaskedPassword?"Hide password":"Show password")}" @click="${this._toggleUnmaskedPassword}" .path="${this._unmaskedPassword?"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z":"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}"></ha-icon-button>`}},{kind:"method",key:"focus",value:function(){this._textField.focus()}},{kind:"method",key:"checkValidity",value:function(){return this._textField.checkValidity()}},{kind:"method",key:"reportValidity",value:function(){return this._textField.reportValidity()}},{kind:"method",key:"setCustomValidity",value:function(e){return this._textField.setCustomValidity(e)}},{kind:"method",key:"layout",value:function(){return this._textField.layout()}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",decorators:[(0,o.hO)({passive:!0})],key:"_handleInputEvent",value:function(e){this.value=e.target.value}},{kind:"method",decorators:[(0,o.hO)({passive:!0})],key:"_handleChangeEvent",value:function(e){this.value=e.target.value,this._reDispatchEvent(e)}},{kind:"method",key:"_reDispatchEvent",value:function(e){const i=new Event(e.type,e);this.dispatchEvent(i)}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`:host{display:block;position:relative}ha-textfield{width:100%}ha-icon-button{position:absolute;top:8px;right:8px;inset-inline-start:initial;inset-inline-end:8px;--mdc-icon-button-size:40px;--mdc-icon-size:20px;color:var(--secondary-text-color);direction:var(--direction)}`}]}}),n.oi)},55563:function(e,i,t){t.r(i),t.d(i,{DialogAddApplicationCredential:()=>p});var a=t(44249),n=(t(9359),t(70104),t(87319),t(57243)),o=t(50778),s=t(36522),d=(t(99426),t(59826),t(82104),t(94279),t(73729));t(31078),t(34326),t(83166);var l=t(57816),r=t(28008),c=t(73192);const h="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",u=e=>n.dy`<mwc-list-item> <span>${e.name}</span> </mwc-list-item>`;let p=(0,a.Z)([(0,o.Mo)("dialog-add-application-credential")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_loading",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_domain",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_manifest",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_description",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_clientId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_clientSecret",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_domains",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._domain=e.selectedDomain,this._manifest=e.manifest,this._name="",this._description="",this._clientId="",this._clientSecret="",this._error=void 0,this._loading=!1,this._fetchConfig()}},{kind:"method",key:"_fetchConfig",value:async function(){this._config=await(async e=>e.callWS({type:"application_credentials/config"}))(this.hass),this._domains=Object.keys(this._config.integrations).map((e=>({id:e,name:(0,l.Lh)(this.hass.localize,e)}))),await this.hass.loadBackendTranslation("application_credentials"),this._updateDescription()}},{kind:"method",key:"render",value:function(){if(!this._params||!this._domains)return n.Ld;const e=this._params.selectedDomain?(0,l.Lh)(this.hass.localize,this._domain):"";return n.dy` <ha-dialog open @closed="${this._abortDialog}" scrimClickAction escapeKeyAction .heading="${(0,d.i)(this.hass,this.hass.localize("ui.panel.config.application_credentials.editor.caption"))}"> <div> ${this._error?n.dy`<ha-alert alert-type="error">${this._error}</ha-alert> `:""} ${this._params.selectedDomain&&!this._description?n.dy`<p> ${this.hass.localize("ui.panel.config.application_credentials.editor.missing_credentials",{integration:e})} ${this._manifest?.is_built_in||this._manifest?.documentation?n.dy`<a href="${this._manifest.is_built_in?(0,c.R)(this.hass,`/integrations/${this._domain}`):this._manifest.documentation}" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.application_credentials.editor.missing_credentials_domain_link",{integration:e})} <ha-svg-icon .path="${h}"></ha-svg-icon> </a>`:""} </p>`:""} ${this._params.selectedDomain&&this._description?"":n.dy`<p> ${this.hass.localize("ui.panel.config.application_credentials.editor.description")} <a href="${(0,c.R)(this.hass,"/integrations/application_credentials")}" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.application_credentials.editor.view_documentation")} <ha-svg-icon .path="${h}"></ha-svg-icon> </a> </p>`} ${this._params.selectedDomain?"":n.dy`<ha-combo-box name="domain" .hass="${this.hass}" .label="${this.hass.localize("ui.panel.config.application_credentials.editor.domain")}" .value="${this._domain}" .renderer="${u}" .items="${this._domains}" item-id-path="id" item-value-path="id" item-label-path="name" required @value-changed="${this._handleDomainPicked}"></ha-combo-box>`} ${this._description?n.dy`<ha-markdown breaks .content="${this._description}"></ha-markdown>`:""} <ha-textfield class="name" name="name" .label="${this.hass.localize("ui.panel.config.application_credentials.editor.name")}" .value="${this._name}" required @input="${this._handleValueChanged}" .validationMessage="${this.hass.localize("ui.common.error_required")}" dialogInitialFocus></ha-textfield> <ha-textfield class="clientId" name="clientId" .label="${this.hass.localize("ui.panel.config.application_credentials.editor.client_id")}" .value="${this._clientId}" required @input="${this._handleValueChanged}" .validationMessage="${this.hass.localize("ui.common.error_required")}" dialogInitialFocus .helper="${this.hass.localize("ui.panel.config.application_credentials.editor.client_id_helper")}" helperPersistent></ha-textfield> <ha-password-field .label="${this.hass.localize("ui.panel.config.application_credentials.editor.client_secret")}" name="clientSecret" .value="${this._clientSecret}" required @input="${this._handleValueChanged}" .validationMessage="${this.hass.localize("ui.common.error_required")}" .helper="${this.hass.localize("ui.panel.config.application_credentials.editor.client_secret_helper")}" helperPersistent></ha-password-field> </div> ${this._loading?n.dy` <div slot="primaryAction" class="submit-spinner"> <ha-circular-progress indeterminate></ha-circular-progress> </div> `:n.dy` <ha-button slot="secondaryAction" @click="${this._abortDialog}"> ${this.hass.localize("ui.common.cancel")} </ha-button> <ha-button slot="primaryAction" .disabled="${!this._domain||!this._clientId||!this._clientSecret}" @click="${this._addApplicationCredential}"> ${this.hass.localize("ui.panel.config.application_credentials.editor.add")} </ha-button> `} </ha-dialog> `}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._domains=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"_handleDomainPicked",value:function(e){e.stopPropagation(),this._domain=e.detail.value,this._updateDescription()}},{kind:"method",key:"_updateDescription",value:async function(){if(!this._domain)return;await this.hass.loadBackendTranslation("application_credentials",this._domain);const e=this._config.integrations[this._domain];this._description=this.hass.localize(`component.${this._domain}.application_credentials.description`,e.description_placeholders)}},{kind:"method",key:"_handleValueChanged",value:function(e){this._error=void 0;const i=e.target.name,t=e.target.value;this[`_${i}`]=t}},{kind:"method",key:"_abortDialog",value:function(){this._params&&this._params.dialogAbortedCallback&&this._params.dialogAbortedCallback(),this.closeDialog()}},{kind:"method",key:"_addApplicationCredential",value:async function(e){if(e.preventDefault(),!this._domain||!this._clientId||!this._clientSecret)return;let i;this._loading=!0,this._error="";try{i=await(async(e,i,t,a,n)=>e.callWS({type:"application_credentials/create",domain:i,client_id:t,client_secret:a,name:n}))(this.hass,this._domain,this._clientId,this._clientSecret,this._name)}catch(e){return this._loading=!1,void(this._error=e.message)}this._params.applicationCredentialAddedCallback(i),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[r.yu,n.iv`ha-dialog{--mdc-dialog-max-width:500px;--dialog-z-index:10}.row{display:flex;padding:8px 0}ha-combo-box{display:block;margin-bottom:24px}ha-textfield{display:block;margin-bottom:24px}a{text-decoration:none}a ha-svg-icon{--mdc-icon-size:16px}ha-markdown{margin-bottom:16px}`]}}]}}),n.oi)}};
//# sourceMappingURL=9042.cca8350602a830c1.js.map