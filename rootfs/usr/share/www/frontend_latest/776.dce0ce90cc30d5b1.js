export const __webpack_id__="776";export const __webpack_ids__=["776"];export const __webpack_modules__={3444:function(t,e,a){var i=a(2826),o=a(6196),r=a(2267);class s extends o.WF{render(){return o.qy` <footer> <slot name="secondaryAction"></slot> <slot name="primaryAction"></slot> </footer> `}static get styles(){return[o.AH`footer{display:flex;gap:var(--ha-space-3);justify-content:flex-end;align-items:center;width:100%}`]}}s=(0,i.__decorate)([(0,r.EM)("ha-dialog-footer")],s)},6538:function(t,e,a){var i=a(2826),o=a(6196),r=a(2267);class s extends o.WF{render(){const t=o.qy`<div class="header-title"> <slot name="title"></slot> </div>`,e=o.qy`<div class="header-subtitle"> <slot name="subtitle"></slot> </div>`;return o.qy` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-content"> ${"above"===this.subtitlePosition?o.qy`${e}${t}`:o.qy`${t}${e}`} </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `}static get styles(){return[o.AH`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:center;padding:0 var(--ha-space-1);box-sizing:border-box}.header-content{flex:1;padding:10px var(--ha-space-1);display:flex;flex-direction:column;justify-content:center;min-height:var(--ha-space-12);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{height:var(--ha-dialog-header-title-height,calc(var(--ha-font-size-xl) + var(--ha-space-1)));font-size:var(--ha-font-size-xl);line-height:var(--ha-line-height-condensed);font-weight:var(--ha-font-weight-medium);color:var(--ha-dialog-header-title-color,var(--primary-text-color))}.header-subtitle{font-size:var(--ha-font-size-m);line-height:var(--ha-line-height-normal);color:var(--ha-dialog-header-subtitle-color,var(--secondary-text-color))}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:0 var(--ha-space-2)}}.header-navigation-icon{flex:none;min-width:var(--ha-space-2);height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:var(--ha-space-2);height:100%;display:flex;flex-direction:row}`]}constructor(...t){super(...t),this.subtitlePosition="below",this.showBorder=!1}}(0,i.__decorate)([(0,r.MZ)({type:String,attribute:"subtitle-position"})],s.prototype,"subtitlePosition",void 0),(0,i.__decorate)([(0,r.MZ)({type:Boolean,reflect:!0,attribute:"show-border"})],s.prototype,"showBorder",void 0),s=(0,i.__decorate)([(0,r.EM)("ha-dialog-header")],s)},5709:function(t,e,a){var i=a(2826),o=a(6526),r=a(2347),s=a(6196),l=a(2267),d=a(9422);class n extends o.J{updated(t){super.updated(t),(t.has("invalid")||t.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||this.validationMessage||"Invalid":""),(this.invalid||this.validateOnInitialRender||t.has("invalid")&&void 0!==t.get("invalid"))&&this.reportValidity()),t.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),t.has("autocorrect")&&(!1===this.autocorrect?this.formElement.setAttribute("autocorrect","off"):this.formElement.removeAttribute("autocorrect")),t.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}renderIcon(t,e=!1){const a=e?"trailing":"leading";return s.qy` <span class="mdc-text-field__icon mdc-text-field__icon--${a}" tabindex="${e?1:-1}"> <slot name="${a}Icon"></slot> </span> `}constructor(...t){super(...t),this.icon=!1,this.iconTrailing=!1,this.autocorrect=!0}}n.styles=[r.R,s.AH`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:ltr}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){max-width:calc(100% - 16px)}.mdc-floating-label--float-above{max-width:calc((100% - 16px)/ .75);transition:none}input{text-align:var(--text-field-text-align,start)}input[type=color]{height:20px}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=color]::-webkit-color-swatch-wrapper{padding:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{padding-inline-end:16px;padding-inline-start:initial;inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start);box-sizing:border-box;text-overflow:ellipsis}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px);padding-inline-end:var(--text-field-prefix-padding-right,2px);padding-inline-start:initial}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}#helper-text ha-markdown{display:inline-block}`,"rtl"===d.G.document.dir?s.AH`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl;--direction:rtl}`:s.AH``],(0,i.__decorate)([(0,l.MZ)({type:Boolean})],n.prototype,"invalid",void 0),(0,i.__decorate)([(0,l.MZ)({attribute:"error-message"})],n.prototype,"errorMessage",void 0),(0,i.__decorate)([(0,l.MZ)({type:Boolean})],n.prototype,"icon",void 0),(0,i.__decorate)([(0,l.MZ)({type:Boolean})],n.prototype,"iconTrailing",void 0),(0,i.__decorate)([(0,l.MZ)()],n.prototype,"autocomplete",void 0),(0,i.__decorate)([(0,l.MZ)({type:Boolean})],n.prototype,"autocorrect",void 0),(0,i.__decorate)([(0,l.MZ)({attribute:"input-spellcheck"})],n.prototype,"inputSpellcheck",void 0),(0,i.__decorate)([(0,l.P)("input")],n.prototype,"formElement",void 0),n=(0,i.__decorate)([(0,l.EM)("ha-textfield")],n)},5331:function(t,e,a){a.a(t,async function(t,e){try{var i=a(2826),o=a(3900),r=a(6196),s=a(2267),l=a(2288),d=a(1087),n=a(4503),h=(a(6538),a(888),t([o]));o=(h.then?(await h)():h)[0];const c="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";class p extends r.WF{updated(t){super.updated(t),t.has("open")&&(this._open=this.open)}render(){return r.qy` <wa-dialog .open="${this._open}" .lightDismiss="${!this.preventScrimClose}" without-header aria-labelledby="${(0,l.J)(this.ariaLabelledBy||(void 0!==this.headerTitle?"ha-wa-dialog-title":void 0))}" aria-describedby="${(0,l.J)(this.ariaDescribedBy)}" @wa-show="${this._handleShow}" @wa-after-show="${this._handleAfterShow}" @wa-after-hide="${this._handleAfterHide}"> <slot name="header"> <ha-dialog-header .subtitlePosition="${this.headerSubtitlePosition}" .showBorder="${this._bodyScrolled}"> <slot name="headerNavigationIcon" slot="navigationIcon"> <ha-icon-button data-dialog="close" .label="${this.hass?.localize("ui.common.close")??"Close"}" .path="${c}"></ha-icon-button> </slot> ${void 0!==this.headerTitle?r.qy`<span slot="title" class="title" id="ha-wa-dialog-title"> ${this.headerTitle} </span>`:r.qy`<slot name="headerTitle" slot="title"></slot>`} ${void 0!==this.headerSubtitle?r.qy`<span slot="subtitle">${this.headerSubtitle}</span>`:r.qy`<slot name="headerSubtitle" slot="subtitle"></slot>`} <slot name="headerActionItems" slot="actionItems"></slot> </ha-dialog-header> </slot> <div class="body ha-scrollbar" @scroll="${this._handleBodyScroll}"> <slot></slot> </div> <slot name="footer" slot="footer"></slot> </wa-dialog> `}disconnectedCallback(){super.disconnectedCallback(),this._open=!1}_handleBodyScroll(t){this._bodyScrolled=t.target.scrollTop>0}constructor(...t){super(...t),this.open=!1,this.type="standard",this.width="medium",this.preventScrimClose=!1,this.headerSubtitlePosition="below",this.flexContent=!1,this._open=!1,this._bodyScrolled=!1,this._handleShow=async()=>{this._open=!0,(0,d.r)(this,"opened"),await this.updateComplete,requestAnimationFrame(()=>{this.querySelector("[autofocus]")?.focus()})},this._handleAfterShow=()=>{(0,d.r)(this,"after-show")},this._handleAfterHide=()=>{this._open=!1,(0,d.r)(this,"closed")}}}p.styles=[n.dp,r.AH`
      wa-dialog {
        --full-width: var(--ha-dialog-width-full, min(95vw, var(--safe-width)));
        --width: min(var(--ha-dialog-width-md, 580px), var(--full-width));
        --spacing: var(--dialog-content-padding, var(--ha-space-6));
        --show-duration: var(--ha-dialog-show-duration, 200ms);
        --hide-duration: var(--ha-dialog-hide-duration, 200ms);
        --ha-dialog-surface-background: var(
          --card-background-color,
          var(--ha-color-surface-default)
        );
        --wa-color-surface-raised: var(
          --ha-dialog-surface-background,
          var(--card-background-color, var(--ha-color-surface-default))
        );
        --wa-panel-border-radius: var(
          --ha-dialog-border-radius,
          var(--ha-border-radius-3xl)
        );
        max-width: var(--ha-dialog-max-width, var(--safe-width));
      }

      :host([width="small"]) wa-dialog {
        --width: min(var(--ha-dialog-width-sm, 320px), var(--full-width));
      }

      :host([width="large"]) wa-dialog {
        --width: min(var(--ha-dialog-width-lg, 1024px), var(--full-width));
      }

      :host([width="full"]) wa-dialog {
        --width: var(--full-width);
      }

      wa-dialog::part(dialog) {
        min-width: var(--width, var(--full-width));
        max-width: var(--width, var(--full-width));
        max-height: var(
          --ha-dialog-max-height,
          calc(var(--safe-height) - var(--ha-space-20))
        );
        min-height: var(--ha-dialog-min-height);
        margin-top: var(--dialog-surface-margin-top, auto);
        /* Used to offset the dialog from the safe areas when space is limited */
        transform: translate(
          calc(
            var(--safe-area-offset-left, var(--ha-space-0)) - var(
                --safe-area-offset-right,
                var(--ha-space-0)
              )
          ),
          calc(
            var(--safe-area-offset-top, var(--ha-space-0)) - var(
                --safe-area-offset-bottom,
                var(--ha-space-0)
              )
          )
        );
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      @media all and (max-width: 450px), all and (max-height: 500px) {
        :host([type="standard"]) {
          --ha-dialog-border-radius: var(--ha-space-0);

          wa-dialog {
            /* Make the container fill the whole screen width and not the safe width */
            --full-width: var(--ha-dialog-width-full, 100vw);
            --width: var(--full-width);
          }

          wa-dialog::part(dialog) {
            /* Make the dialog fill the whole screen height and not the safe height */
            min-height: var(--ha-dialog-min-height, 100vh);
            min-height: var(--ha-dialog-min-height, 100dvh);
            max-height: var(--ha-dialog-max-height, 100vh);
            max-height: var(--ha-dialog-max-height, 100dvh);
            margin-top: 0;
            margin-bottom: 0;
            /* Use safe area as padding instead of the container size */
            padding-top: var(--safe-area-inset-top);
            padding-bottom: var(--safe-area-inset-bottom);
            padding-left: var(--safe-area-inset-left);
            padding-right: var(--safe-area-inset-right);
            /* Reset the transform to center the dialog */
            transform: none;
          }
        }
      }

      .header-title-container {
        display: flex;
        align-items: center;
      }

      .header-title {
        margin: 0;
        margin-bottom: 0;
        color: var(--ha-dialog-header-title-color, var(--primary-text-color));
        font-size: var(
          --ha-dialog-header-title-font-size,
          var(--ha-font-size-2xl)
        );
        line-height: var(
          --ha-dialog-header-title-line-height,
          var(--ha-line-height-condensed)
        );
        font-weight: var(
          --ha-dialog-header-title-font-weight,
          var(--ha-font-weight-normal)
        );
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: var(--ha-space-3);
      }

      wa-dialog::part(body) {
        padding: 0;
        display: flex;
        flex-direction: column;
        max-width: 100%;
        overflow: hidden;
      }

      .body {
        position: var(--dialog-content-position, relative);
        padding: 0 var(--dialog-content-padding, var(--ha-space-6))
          var(--dialog-content-padding, var(--ha-space-6))
          var(--dialog-content-padding, var(--ha-space-6));
        overflow: auto;
        flex-grow: 1;
      }
      :host([flexcontent]) .body {
        max-width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      wa-dialog::part(footer) {
        padding: var(--ha-space-0);
      }

      ::slotted([slot="footer"]) {
        display: flex;
        padding: var(--ha-space-3) var(--ha-space-4) var(--ha-space-4)
          var(--ha-space-4);
        gap: var(--ha-space-3);
        justify-content: flex-end;
        align-items: center;
        width: 100%;
      }
    `],(0,i.__decorate)([(0,s.MZ)({attribute:!1})],p.prototype,"hass",void 0),(0,i.__decorate)([(0,s.MZ)({attribute:"aria-labelledby"})],p.prototype,"ariaLabelledBy",void 0),(0,i.__decorate)([(0,s.MZ)({attribute:"aria-describedby"})],p.prototype,"ariaDescribedBy",void 0),(0,i.__decorate)([(0,s.MZ)({type:Boolean,reflect:!0})],p.prototype,"open",void 0),(0,i.__decorate)([(0,s.MZ)({reflect:!0})],p.prototype,"type",void 0),(0,i.__decorate)([(0,s.MZ)({type:String,reflect:!0,attribute:"width"})],p.prototype,"width",void 0),(0,i.__decorate)([(0,s.MZ)({type:Boolean,reflect:!0,attribute:"prevent-scrim-close"})],p.prototype,"preventScrimClose",void 0),(0,i.__decorate)([(0,s.MZ)({attribute:"header-title"})],p.prototype,"headerTitle",void 0),(0,i.__decorate)([(0,s.MZ)({attribute:"header-subtitle"})],p.prototype,"headerSubtitle",void 0),(0,i.__decorate)([(0,s.MZ)({type:String,attribute:"header-subtitle-position"})],p.prototype,"headerSubtitlePosition",void 0),(0,i.__decorate)([(0,s.MZ)({type:Boolean,reflect:!0,attribute:"flexcontent"})],p.prototype,"flexContent",void 0),(0,i.__decorate)([(0,s.wk)()],p.prototype,"_open",void 0),(0,i.__decorate)([(0,s.P)(".body")],p.prototype,"bodyContainer",void 0),(0,i.__decorate)([(0,s.wk)()],p.prototype,"_bodyScrolled",void 0),(0,i.__decorate)([(0,s.Ls)({passive:!0})],p.prototype,"_handleBodyScroll",null),p=(0,i.__decorate)([(0,s.EM)("ha-wa-dialog")],p),e()}catch(t){e(t)}})},6683:function(t,e,a){a.a(t,async function(t,i){try{a.r(e);var o=a(2826),r=a(6196),s=a(2267),l=a(4333),d=a(2288),n=a(1087),h=a(8350),c=(a(3444),a(6538),a(7094),a(5709),a(5331)),p=t([h,c]);[h,c]=p.then?(await p)():p;const f="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",g="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";class m extends r.WF{async showDialog(t){this._closePromise&&await this._closePromise,this._params=t,this._open=!0}closeDialog(){return!this._params?.confirmation&&!this._params?.prompt&&(!this._params||(this._dismiss(),!0))}render(){if(!this._params)return r.s6;const t=this._params.confirmation||!!this._params.prompt,e=this._params.title||this._params.confirmation&&this.hass.localize("ui.dialogs.generic.default_confirmation_title");return r.qy` <ha-wa-dialog .hass="${this.hass}" .open="${this._open}" type="${t?"alert":"standard"}" ?prevent-scrim-close="${t}" @closed="${this._dialogClosed}" aria-labelledby="dialog-box-title" aria-describedby="dialog-box-description"> <ha-dialog-header slot="header"> ${t?r.s6:r.qy`<slot name="headerNavigationIcon" slot="navigationIcon"> <ha-icon-button data-dialog="close" .label="${this.hass?.localize("ui.common.close")??"Close"}" .path="${g}"></ha-icon-button></slot>`} <span class="${(0,l.H)({title:!0,alert:t})}" slot="title" id="dialog-box-title"> ${this._params.warning?r.qy`<ha-svg-icon .path="${f}" style="color:var(--warning-color)"></ha-svg-icon> `:r.s6} ${e} </span> </ha-dialog-header> <div id="dialog-box-description"> ${this._params.text?r.qy` <p>${this._params.text}</p> `:""} ${this._params.prompt?r.qy` <ha-textfield autofocus value="${(0,d.J)(this._params.defaultValue)}" .placeholder="${this._params.placeholder}" .label="${this._params.inputLabel?this._params.inputLabel:""}" .type="${this._params.inputType?this._params.inputType:"text"}" .min="${this._params.inputMin}" .max="${this._params.inputMax}"></ha-textfield> `:""} </div> <ha-dialog-footer slot="footer"> ${t?r.qy` <ha-button slot="secondaryAction" @click="${this._dismiss}" ?autofocus="${!this._params.prompt&&this._params.destructive}" appearance="plain"> ${this._params.dismissText?this._params.dismissText:this.hass.localize("ui.common.cancel")} </ha-button> `:r.s6} <ha-button slot="primaryAction" @click="${this._confirm}" ?autofocus="${!this._params.prompt&&!this._params.destructive}" variant="${this._params.destructive?"danger":"brand"}"> ${this._params.confirmText?this._params.confirmText:this.hass.localize("ui.common.ok")} </ha-button> </ha-dialog-footer> </ha-wa-dialog> `}_cancel(){this._params?.cancel&&this._params.cancel()}_dismiss(){this._closeState="canceled",this._cancel(),this._closeDialog()}_confirm(){this._closeState="confirmed",this._params.confirm&&this._params.confirm(this._textField?.value),this._closeDialog()}_closeDialog(){this._open=!1,this._closePromise=new Promise(t=>{this._closeResolve=t})}_dialogClosed(){(0,n.r)(this,"dialog-closed",{dialog:this.localName}),this._closeState||this._cancel(),this._closeState=void 0,this._params=void 0,this._open=!1,this._closeResolve?.(),this._closeResolve=void 0}constructor(...t){super(...t),this._open=!1}}m.styles=r.AH`:host([inert]){pointer-events:initial!important;cursor:initial!important}a{color:var(--primary-color)}p{margin:0;color:var(--primary-text-color)}.no-bottom-padding{padding-bottom:0}.secondary{color:var(--secondary-text-color)}ha-textfield{width:100%}.title.alert{padding:0 var(--ha-space-2)}@media all and (min-width:450px) and (min-height:500px){.title.alert{padding:0 var(--ha-space-1)}}`,(0,o.__decorate)([(0,s.MZ)({attribute:!1})],m.prototype,"hass",void 0),(0,o.__decorate)([(0,s.wk)()],m.prototype,"_params",void 0),(0,o.__decorate)([(0,s.wk)()],m.prototype,"_open",void 0),(0,o.__decorate)([(0,s.wk)()],m.prototype,"_closeState",void 0),(0,o.__decorate)([(0,s.P)("ha-textfield")],m.prototype,"_textField",void 0),m=(0,o.__decorate)([(0,s.EM)("dialog-box")],m),i()}catch(t){i(t)}})},9793:function(t,e,a){a.d(e,{A:()=>i});const i=a(6196).AH`:host{--width:31rem;--spacing:var(--wa-space-l);--show-duration:200ms;--hide-duration:200ms;display:none}:host([open]){display:block}.dialog{display:flex;flex-direction:column;top:0;right:0;bottom:0;left:0;width:var(--width);max-width:calc(100% - var(--wa-space-2xl));max-height:calc(100% - var(--wa-space-2xl));background-color:var(--wa-color-surface-raised);border-radius:var(--wa-panel-border-radius);border:none;box-shadow:var(--wa-shadow-l);padding:0;margin:auto}.dialog.show{animation:show-dialog var(--show-duration) ease}.dialog.show::backdrop{animation:show-backdrop var(--show-duration,200ms) ease}.dialog.hide{animation:show-dialog var(--hide-duration) ease reverse}.dialog.hide::backdrop{animation:show-backdrop var(--hide-duration,200ms) ease reverse}.dialog.pulse{animation:pulse 250ms ease}.dialog:focus{outline:0}@media screen and (max-width:420px){.dialog{max-height:80vh}}.open{display:flex;opacity:1}.header{flex:0 0 auto;display:flex;flex-wrap:nowrap;padding-inline-start:var(--spacing);padding-block-end:0;padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block))}.title{align-self:center;flex:1 1 auto;font-family:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0}.header-actions{align-self:start;display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:end;gap:var(--wa-space-2xs);padding-inline-start:var(--spacing)}.header-actions ::slotted(wa-button),.header-actions wa-button{flex:0 0 auto;display:flex;align-items:center}.body{flex:1 1 auto;display:block;padding:var(--spacing);overflow:auto;-webkit-overflow-scrolling:touch}.body:focus{outline:0}.body:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.footer{flex:0 0 auto;display:flex;flex-wrap:wrap;gap:var(--wa-space-xs);justify-content:end;padding:var(--spacing);padding-block-start:0}.footer ::slotted(wa-button:not(:first-of-type)){margin-inline-start:var(--wa-spacing-xs)}.dialog::backdrop{background-color:var(--wa-color-overlay-modal,rgb(0 0 0 / .25))}@keyframes pulse{0%{scale:1}50%{scale:1.02}100%{scale:1}}@keyframes show-dialog{from{opacity:0;scale:0.8}to{opacity:1;scale:1}}@keyframes show-backdrop{from{opacity:0}to{opacity:1}}@media (forced-colors:active){.dialog{border:solid 1px #fff}}`},3900:function(t,e,a){a.a(t,async function(t,e){try{var i=a(6196),o=a(2267),r=a(4333),s=a(2288),l=a(7051),d=a(2462),n=a(8438),h=a(8779),c=a(7259),p=a(1247),f=a(7039),g=a(2070),m=a(9395),u=a(2510),v=a(7060),x=a(8496),w=a(9793),b=t([x,v]);[x,v]=b.then?(await b)():b;var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,k=(t,e,a,i)=>{for(var o,r=i>1?void 0:i?_(e,a):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,a,r):o(r))||r);return i&&r&&y(e,a,r),r};let $=class extends u.A{firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),(0,f.JG)(this))}disconnectedCallback(){super.disconnectedCallback(),(0,f.I7)(this),this.removeOpenListeners()}async requestClose(t){const e=new n.L({source:t});if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!0,void(0,c.Ud)(this.dialog,"pulse");this.removeOpenListeners(),await(0,c.Ud)(this.dialog,"hide"),this.open=!1,this.dialog.close(),(0,f.I7)(this);const a=this.originalTrigger;"function"==typeof a?.focus&&setTimeout(()=>a.focus()),this.dispatchEvent(new l.Z)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),this.dialog.classList.contains("hide")||t.target!==this.dialog||this.requestClose(this.dialog)}handleDialogClick(t){const e=t.target.closest('[data-dialog="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await(0,c.Ud)(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new h.k;this.dispatchEvent(t),t.defaultPrevented?this.open=!1:(this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),(0,f.JG)(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.dialog.focus()}),await(0,c.Ud)(this.dialog,"show"),this.dispatchEvent(new d.q))}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return i.qy` <dialog aria-labelledby="${this.ariaLabelledby??"title"}" aria-describedby="${(0,s.J)(this.ariaDescribedby)}" part="dialog" class="${(0,r.H)({dialog:!0,open:this.open})}" @cancel="${this.handleDialogCancel}" @click="${this.handleDialogClick}" @pointerdown="${this.handleDialogPointerDown}"> ${t?i.qy` <header part="header" class="header"> <h2 part="title" class="title" id="title"> <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(8203)} </slot> </h2> <div part="header-actions" class="header-actions"> <slot name="header-actions"></slot> <wa-button part="close-button" exportparts="base:close-button__base" class="close" appearance="plain" @click="${t=>this.requestClose(t.target)}"> <wa-icon name="xmark" label="${this.localize.term("close")}" library="system" variant="solid"></wa-icon> </wa-button> </div> </header> `:""} <div part="body" class="body"><slot></slot></div> ${e?i.qy` <footer part="footer" class="footer"> <slot name="footer"></slot> </footer> `:""} </dialog> `}constructor(){super(...arguments),this.localize=new v.c(this),this.hasSlotController=new g.X(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}};$.css=w.A,k([(0,o.P)(".dialog")],$.prototype,"dialog",2),k([(0,o.MZ)({type:Boolean,reflect:!0})],$.prototype,"open",2),k([(0,o.MZ)({reflect:!0})],$.prototype,"label",2),k([(0,o.MZ)({attribute:"without-header",type:Boolean,reflect:!0})],$.prototype,"withoutHeader",2),k([(0,o.MZ)({attribute:"light-dismiss",type:Boolean})],$.prototype,"lightDismiss",2),k([(0,o.MZ)({attribute:"aria-labelledby"})],$.prototype,"ariaLabelledby",2),k([(0,o.MZ)({attribute:"aria-describedby"})],$.prototype,"ariaDescribedby",2),k([(0,m.w)("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1),$=k([(0,o.EM)("wa-dialog")],$),document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[t,a]=(0,p.v)(e.getAttribute("data-dialog")||"");if("open"===t&&a?.length){const t=e.getRootNode().getElementById(a);"wa-dialog"===t?.localName?t.open=!0:console.warn(`A dialog with an ID of "${a}" could not be found in this document.`)}}}),i.S$||document.addEventListener("pointerdown",()=>{}),e()}catch(t){e(t)}})}};
//# sourceMappingURL=776.dce0ce90cc30d5b1.js.map