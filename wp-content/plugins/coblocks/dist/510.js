(self.webpackChunkcoblocks=self.webpackChunkcoblocks||[]).push([[510],{510:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>W});var n=o(7462),l=o(9307),s=o(4184),i=o.n(s),c=o(2175);const a=(0,c.withColors)("backgroundColor",{textColor:"color"});var r=o(7635),m=o(5377),b=o(5697),d=o.n(b),p=o(5161),u=o.n(p),g=o(5736),h=o(5609),_=o(4333),k=o(9818),v=o(4981),y=o(7701);function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,v.getBlockType)("core/buttons"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,v.getBlockType)("coblocks/buttons");return!!e&&!!t}o.n(y)()((function(){const e=(0,v.getBlockType)("core/buttons"),t=(0,v.getBlockType)("coblocks/buttons");f(e,t)&&((0,v.unregisterBlockType)("coblocks/buttons"),(0,v.registerBlockType)("coblocks/buttons",{...t,supports:{...t.supports,inserter:!1}}))}));class E extends l.Component{render(){const{attributes:e,clientId:t,setAttributes:o,tooltip:n=!0,updateBlockAttributes:s,innerBlocks:c}=this.props,{layout:a,fullscreen:r}=e,m=e=>{const t=f(),o=t?"core/buttons":"coblocks/buttons",n=t?"align":"contentAlign";c.forEach((t=>{t.name===o&&s(t.clientId,{[n]:e})}))};let b=[{
/* translators: block layout */
label:(0,g.__)("Top left","coblocks"),value:"top-left"},{
/* translators: block layout */
label:(0,g.__)("Top center","coblocks"),value:"top-center"},{
/* translators: block layout */
label:(0,g.__)("Top right","coblocks"),value:"top-right"},{
/* translators: block layout */
label:(0,g.__)("Center left","coblocks"),value:"center-left"},{
/* translators: block layout */
label:(0,g.__)("Center center","coblocks"),value:"center-center"},{
/* translators: block layout */
label:(0,g.__)("Center right","coblocks"),value:"center-right"},{
/* translators: block layout */
label:(0,g.__)("Bottom left","coblocks"),value:"bottom-left"},{
/* translators: block layout */
label:(0,g.__)("Bottom center","coblocks"),value:"bottom-center"},{
/* translators: block layout */
label:(0,g.__)("Bottom right","coblocks"),value:"bottom-right"}];r||(b=[{
/* translators: block layout */
label:(0,g.__)("Center left","coblocks"),value:"center-left"},{
/* translators: block layout */
label:(0,g.__)("Center center","coblocks"),value:"center-center"},{
/* translators: block layout */
label:(0,g.__)("Center right","coblocks"),value:"center-right"}]);const d={"top-left":{wrapper:{contentAlign:"left"}},"top-center":{wrapper:{contentAlign:"center"}},"top-right":{wrapper:{contentAlign:"right"}},"center-left":{wrapper:{contentAlign:"left"}},"center-center":{wrapper:{contentAlign:"center"}},"center-right":{wrapper:{contentAlign:"right"}},"bottom-left":{wrapper:{contentAlign:"left"}},"bottom-center":{wrapper:{contentAlign:"center"}},"bottom-right":{wrapper:{contentAlign:"right"}}},p=i()("components-base-control","components-coblocks-css-grid-selector",{"is-fullscreen":r});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:p},(0,l.createElement)("p",{className:"components-base-control__label"},(0,g.__)("Layout","coblocks")),(0,l.createElement)(h.ButtonGroup,{"aria-label":(0,g.__)("Select layout","coblocks")},u()(b,((e,i)=>{let{label:c,value:r}=e;return n?(0,l.createElement)(h.Tooltip,{key:`grid-tooltip-${i}`,text:c},(0,l.createElement)("div",{className:r===a?"is-selected":null},(0,l.createElement)(h.Button,{isPrimary:r===a,isSecondary:r!==a,isSmall:!0,onClick:()=>{o({layout:r}),m(r.split("-")[1]),d[r].wrapper&&s(t,d[r].wrapper)}}))):(0,l.createElement)("div",{className:r===a?"is-selected":null},(0,l.createElement)(h.Button,{isPrimary:r===a,isSecondary:r!==a,isSmall:!0,onClick:()=>{o({layout:r}),d[r].wrapper&&(s(t,d[r].wrapper),m(r.split("-")[1]))}}))})))),(0,l.createElement)(h.ToggleControl,{checked:!!r,help:r?(0,g.__)("Fullscreen mode is enabled.","coblocks"):(0,g.__)("Toggle to enable fullscreen mode.","coblocks"),label:(0,g.__)("Fullscreen","coblocks"),onChange:()=>{r&&(["bottom-left","top-left"].includes(a)&&(o({layout:"center-left"}),m("left")),["bottom-center","top-center"].includes(a)&&(o({layout:"center-center"}),m("center")),["bottom-right","top-right"].includes(a)&&(o({layout:"center-right"}),m("right"))),o({fullscreen:!r})}}))}}const T=(0,_.withInstanceId)((0,_.compose)([(0,k.withDispatch)((e=>{const{updateBlockAttributes:t}=e("core/block-editor");return{updateBlockAttributes:t}})),(0,k.withSelect)(((e,t)=>{const{getBlocks:o}=e("core/block-editor");return{innerBlocks:o(t.clientId)}}))])(E));E.propTypes={attributes:d().object,clientId:d().number,innerBlocks:d().array,setAttributes:d().func,tooltip:d().bool.isRequired,updateBlockAttributes:d().func},E.defaultProps={tooltip:!1};var B=o(9630);function C(e){let{icon:t="menu",label:o,menuLabel:s,className:c,props:a}=e;return(0,l.createElement)(h.Dropdown,{className:i()("components-dropdown-menu",c),contentClassName:"components-dropdown-menu__popover",renderContent:()=>(0,l.createElement)(h.NavigableMenu,{"aria-label":s,className:"components-coblocks-grid-dropdown",role:"menu"},(0,l.createElement)(T,(0,n.Z)({},a,{tooltip:!1}))),renderToggle:e=>{let{isOpen:n,onToggle:s}=e;return(0,l.createElement)(h.ToolbarButton,{"aria-expanded":n,"aria-haspopup":"true",icon:t,label:o,onClick:s,onKeyDown:e=>{n||e.keyCode!==B.DOWN||(e.preventDefault(),e.stopPropagation(),s())},showTooltip:!0})}})}const w=C;C.propTypes={className:d().string,icon:d().string.isRequired,label:d().string,menuLabel:d().string,props:d().object},C.defaultProps={icon:"menu"};const S=e=>{const{attributes:t,setAttributes:o}=e,{contentAlign:n}=t;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(h.ToolbarGroup,null,(0,l.createElement)(w,{icon:(0,l.createElement)(h.Icon,{icon:r.ywL}),label:(0,g.__)("Change layout","coblocks"),props:e})),(0,l.createElement)(c.AlignmentToolbar,{onChange:e=>o({contentAlign:e}),value:n}),(0,l.createElement)(m.H,e)))},$=[{name:(0,g.__)("None","coblocks"),size:0,slug:"no"},{name:(0,g.__)("Small","coblocks"),size:14,slug:"small"},{name:(0,g.__)("Medium","coblocks"),size:24,slug:"medium"},{name:(0,g.__)("Large","coblocks"),size:34,slug:"large"},{name:(0,g.__)("Huge","coblocks"),size:60,slug:"huge"}];class N extends l.Component{constructor(){super(...arguments),this.getSelectValuesFromUtilitySizes=this.getSelectValuesFromUtilitySizes.bind(this),this.getCurrentSelectValue=this.getCurrentSelectValue.bind(this),this.setCurrentSelectValue=this.setCurrentSelectValue.bind(this),this.onChangeValue=this.onChangeValue.bind(this),this.getSelectOptions=this.getSelectOptions.bind(this)}getSelectValuesFromUtilitySizes(e,t){let o;if("string"==typeof t)return o=e.find((e=>e.slug===t)),o?o.slug:"custom"}getCurrentSelectValue(e){const{paddingSize:t,marginSize:o}=this.props;switch(e){case"margin":return o;case"padding":return t}}setCurrentSelectValue(e){const{type:t,setAttributes:o}=this.props;switch(t){case"margin":o({marginSize:e});break;case"padding":o({paddingSize:e})}}onChangeValue(e){const t=$.find((t=>t.slug===e));t&&this.setCurrentSelectValue(this.getSelectValuesFromUtilitySizes($,t.slug))}getSelectOptions(e){return[...e.map((e=>({label:e.name,value:e.slug})))]}render(){const{type:e}=this.props;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(h.SelectControl,{className:"components-font-size-picker__select",hideLabelFromVision:!0,label:`Choose ${e} preset`,onChange:this.onChangeValue,options:this.getSelectOptions($),value:this.getCurrentSelectValue(e)}))}}N.propTypes={marginSize:d().number,paddingSize:d().number,setAttributes:d().func,type:d().string};const M=["Top","Right","Bottom","Left"],x={margin:{bottom:(0,g.__)("Margin bottom","coblocks"),left:(0,g.__)("Margin left","coblocks"),right:(0,g.__)("Margin right","coblocks"),top:(0,g.__)("Margin top","coblocks")},padding:{bottom:(0,g.__)("Padding bottom","coblocks"),left:(0,g.__)("Padding left","coblocks"),right:(0,g.__)("Padding right","coblocks"),top:(0,g.__)("Padding top","coblocks")}},R=e=>{const{attributes:t,clientId:o,dimensionSize:n,help:s,instanceId:c,label:a=(0,g.__)("Margin","coblocks"),setAttributes:m,type:b="margin",unit:d}=e,{coblocks:p,marginSize:_,paddingSize:v,saveCoBlocksMeta:y}=t,{updateBlockAttributes:f}=(0,k.useDispatch)("core/block-editor"),E=(e,t)=>void 0!==e?`${e}${t}`:null,T=(e,t)=>{if(void 0!==e)return`${t}: ${e} !important`},B=()=>{const t=wp.data.select("core/editor").getEditedPostAttribute("meta"),l=wp.data.select("core/block-editor").getBlock(o);let s={};if(void 0!==p&&void 0!==p.id){const o=e.name.split("/").join("-")+"-"+p.id,i=l.attributes.paddingUnit,c=l.attributes.marginUnit,a={paddingBottom:E(l.attributes.paddingBottom,i),paddingBottomMobile:E(l.attributes.paddingBottomMobile,i),paddingBottomTablet:E(l.attributes.paddingBottomTablet,i),paddingLeft:E(l.attributes.paddingLeft,i),paddingLeftMobile:E(l.attributes.paddingLeftMobile,i),paddingLeftTablet:E(l.attributes.paddingLeftTablet,i),paddingRight:E(l.attributes.paddingRight,i),paddingRightMobile:E(l.attributes.paddingRightMobile,i),paddingRightTablet:E(l.attributes.paddingRightTablet,i),paddingTop:E(l.attributes.paddingTop,i),paddingTopMobile:E(l.attributes.paddingTopMobile,i),paddingTopTablet:E(l.attributes.paddingTopTablet,i)},r={marginBottom:E(l.attributes.marginBottom,c),marginBottomMobile:E(l.attributes.marginBottomMobile,c),marginBottomTablet:E(l.attributes.marginBottomTablet,c),marginLeft:E(l.attributes.marginLeft,c),marginLeftMobile:E(l.attributes.marginLeftMobile,c),marginLeftTablet:E(l.attributes.marginLeftTablet,c),marginRight:E(l.attributes.marginRight,c),marginRightMobile:E(l.attributes.marginRightMobile,c),marginRightTablet:E(l.attributes.marginRightTablet,c),marginTop:E(l.attributes.marginTop,c),marginTopMobile:E(l.attributes.marginTopMobile,c),marginTopTablet:E(l.attributes.marginTopTablet,c)};s=void 0===t||void 0===t._coblocks_dimensions||void 0!==t._coblocks_dimensions&&""===t._coblocks_dimensions?{}:JSON.parse(t._coblocks_dimensions),void 0===s[o]?(s[o]={},s[o][b]={}):void 0===s[o][b]&&(s[o][b]={}),s[o][b]="advanced"===n?"padding"===b?a:r:{},wp.data.dispatch("core/editor").editPost({meta:{_coblocks_dimensions:JSON.stringify(s)}});const m=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css";const u=`\n\t\t\t\t@media only screen and (max-width: 768px) {\n\t\t\t\t\t.${o} > div {\n\t\t\t\t\t\t${T(a.paddingTopTablet,"padding-top")}\n\t\t\t\t\t\t${T(a.paddingRightTablet,"padding-right")}\n\t\t\t\t\t\t${T(a.paddingBottomTablet,"padding-bottom")}\n\t\t\t\t\t\t${T(a.paddingLeftTablet,"padding-left")}\n\t\t\t\t\t\t${T(r.marginTopTablet,"margin-top")}\n\t\t\t\t\t\t${T(r.marginRightTablet,"margin-right")}\n\t\t\t\t\t\t${T(r.marginBottomTablet,"margin-bottom")}\n\t\t\t\t\t\t${T(r.marginLeftTablet,"margin-left")}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media only screen and (max-width: 514px) {\n\t\t\t\t\t.${o} > div {\n\t\t\t\t\t\t${T(a.paddingTopMobile,"padding-top")}\n\t\t\t\t\t\t${T(a.paddingRightMobile,"padding-right")}\n\t\t\t\t\t\t${T(a.paddingBottomMobile,"padding-bottom")}\n\t\t\t\t\t\t${T(a.paddingLeftMobile,"padding-left")}\n\t\t\t\t\t\t${T(r.marginTopMobile,"margin-top")}\n\t\t\t\t\t\t${T(r.marginRightMobile,"margin-right")}\n\t\t\t\t\t\t${T(r.marginBottomMobile,"margin-bottom")}\n\t\t\t\t\t\t${T(r.marginLeftMobile,"margin-left")}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t`;d.styleSheet?d.styleSheet.cssText=u:d.appendChild(document.createTextNode(u)),m.appendChild(d)}};y&&(B(),f(o,{saveCoBlocksMeta:!1}));const C=(t,o)=>{["coblocks/hero"].includes(e.name)&&"no"===t&&(o<0?(t="huge",o=60):o=-1),"padding"===b&&m({paddingSyncUnits:!0}),m({[`${b}Size`]:t}),o&&m({[`${b}Top`]:o=o<0?"":o,[`${b}Right`]:0,[`${b}Bottom`]:o,[`${b}Left`]:0,[`${b}Unit`]:"px"}),B()},w=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const o=[e["valueTop"+t],e["valueRight"+t],e["valueBottom"+t],e["valueLeft"+t]],n=Math.max.apply(null,o);m({[`${b}SyncUnits${t}`]:!e[`syncUnits${t}`],[`${b}Top${t}`]:n,[`${b}Right${t}`]:n,[`${b}Bottom${t}`]:n,[`${b}Left${t}`]:n}),B()},S=i()("components-base-control","components-coblocks-dimensions-control",{}),$=`inspector-coblocks-dimensions-control-${c}`,R=(t,o)=>{const n=""===t.target.value?void 0:Number(t.target.value);let l="";void 0!==t.target.getAttribute("data-device-type")&&void 0!==t.target.getAttribute("data-device-type")&&(l=t.target.getAttribute("data-device-type")),e["syncUnits"+l]?((e,t)=>{m({[`${b}Top${t}`]:e,[`${b}Right${t}`]:e,[`${b}Bottom${t}`]:e,[`${b}Left${t}`]:e}),B()})(n,l):((e,t,o)=>{m({[`${b}${o}${t}`]:e}),B()})(n,l,o)},A=[{
/* translators: a unit of size (px) for css markup */
name:(0,g.__)("Pixel","coblocks"),unitValue:"px"},{
/* translators: a unit of size (em) for css markup */
name:(0,g.__)("Em","coblocks"),unitValue:"em"},{
/* translators: a unit of size (vw) for css markup */
name:(0,g.__)("Viewport width","coblocks"),unitValue:"vw"},{
/* translators: a unit of size (vh) for css markup */
name:(0,g.__)("Viewport height","coblocks"),unitValue:"vh"},{
/* translators: a unit of size for css markup */
name:(0,g.__)("Percentage","coblocks"),unitValue:"%"}];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:S},"advanced"===n?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__header"},a&&(0,l.createElement)("p",{className:"components-coblocks-dimensions-control__label"},a),(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__actions"},(0,l.createElement)(h.ButtonGroup,{"aria-label":(0,g.__)("Select Units","coblocks"),className:"components-coblocks-dimensions-control__units"},u()(A,(e=>{let{unitValue:t,name:o}=e;return(0,l.createElement)(h.Tooltip,{key:`coblocks-dimensions-control-unit-tooltip-${o}`,text:(0,g.sprintf)(
/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
(0,g.__)("%s units","coblocks"),o)},(0,l.createElement)(h.Button,{"aria-label":(0,g.sprintf)(
/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
(0,g.__)("%s units","coblocks"),o),"aria-pressed":d===t,className:"components-coblocks-dimensions-control__units--"+o,isPrimary:d===t,isSecondary:d!==t,isSmall:!0,key:t,onClick:()=>(m({[`${b}Unit`]:t}),void B())},t))}))),(0,l.createElement)(h.Button,{"aria-label":(0,g.sprintf)(
/* translators: %s: a texual label  */
(0,g.__)("Turn off advanced %s settings","coblocks"),a.toLowerCase()),isSecondary:!0,isSmall:!0,onClick:()=>C("no",-1),type:"button"},(0,g.__)("Reset","coblocks")))),(0,l.createElement)(h.TabPanel,{activeClass:"is-active",className:"components-coblocks-dimensions-control__mobile-controls",initialTabName:"default",onSelect:e=>{let t="desktop";switch(e){case"desktop":t="tablet";break;case"tablet":t="mobile";break;case"mobile":t="desktop"}const o=document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item--${b}`);for(let e=0;e<o.length;e++)o[e].style.display="none";"default"===e?document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item-${b}--tablet`)[0].click():document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item-${b}--${t}`)[0].style.display="block"},tabs:[{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${b} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--default components-coblocks-dimensions-control__mobile-controls-item-${b}--default`,name:"default",title:r.ugZ},{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${b} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--desktop components-coblocks-dimensions-control__mobile-controls-item-${b}--desktop`,name:"desktop",title:r.ugZ},{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${b} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--tablet components-coblocks-dimensions-control__mobile-controls-item-${b}--tablet`,name:"tablet",title:r.v_G},{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${b} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--mobile components-coblocks-dimensions-control__mobile-controls-item-${b}--mobile`,name:"mobile",title:r.pY8}]},(t=>{return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const o=e[`syncUnits${t}`];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__inputs"},M.map((o=>(0,l.createElement)("input",{"aria-describedby":s?$+"__help":void 0,"aria-label":x[b][o.toLowerCase()],className:"components-coblocks-dimensions-control__number","data-device-type":t,key:`coblocks-dimensions-control-number-${t}-${o}`,min:"padding"===b?0:void 0,onChange:e=>R(e,o),type:"number",value:e[`value${o}${t}`]}))),(0,l.createElement)(h.Tooltip,{text:o?(0,g.__)("Unsync","coblocks"):(0,g.__)("Sync","coblocks")},(0,l.createElement)(h.Button,{"aria-label":(0,g.__)("Sync units","coblocks"),"aria-pressed":!!o,className:"components-coblocks-dimensions-control_sync","data-device-type":t,isPrimary:!!o,isSecondary:!o,isSmall:!0,onClick:()=>w(t)},r.bnu))))}(["default","desktop"].includes(t.name)?"":(o=t.name)&&o[0].toUpperCase()+o.slice(1)||"");var o})),(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__input-labels"},(0,l.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Top","coblocks")),(0,l.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Right","coblocks")),(0,l.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Bottom","coblocks")),(0,l.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Left","coblocks")),(0,l.createElement)("span",{className:"components-coblocks-dimensions-control__number-label-blank"}))):(0,l.createElement)(h.BaseControl,{help:s,id:"textarea-1",label:a},(0,l.createElement)("div",{className:"components-font-size-picker__controls"},(0,l.createElement)(N,{marginSize:_,paddingSize:v,setAttributes:m,type:b}),(0,l.createElement)(h.Button,{"aria-label":(0,g.sprintf)(
/* translators: %s: a texual label */
(0,g.__)("Advanced %s settings","coblocks"),a.toLowerCase()),isPrimary:"advanced"===n,isSecondary:!0,isSmall:!0,onClick:()=>C("advanced",""),type:"button"},(0,g.__)("Advanced","coblocks"))))))};R.propTypes={attributes:d().number,clientId:d().number,dimensionSize:d().number,help:d().bool,instanceId:d().number,label:d().string,name:d().string,setAttributes:d().func,type:d().string,unit:d().number};const A=(0,_.withInstanceId)(R);class L extends l.Component{constructor(){super(...arguments),this.saveMeta=this.saveMeta.bind(this)}saveMeta(){const{attributes:e,clientId:t,name:o,type:n}=this.props,l=wp.data.select("core/editor").getEditedPostAttribute("meta"),s=wp.data.select("core/block-editor").getBlock(t);let i={};if(void 0!==e.coblocks&&void 0!==e.coblocks.id){const t=o.split("/").join("-")+"-"+e.coblocks.id,c={height:s.attributes[n],heightMobile:s.attributes[n+"Mobile"],heightTablet:s.attributes[n+"Tablet"]};i=void 0===l._coblocks_responsive_height||void 0!==l._coblocks_responsive_height&&""===l._coblocks_responsive_height?{}:JSON.parse(l._coblocks_responsive_height),void 0===i[t]?(i[t]={},i[t][n]={}):void 0===i[t][n]&&(i[t][n]={}),i[t][n]=c,wp.data.dispatch("core/editor").editPost({meta:{_coblocks_responsive_height:JSON.stringify(i)}})}}render(){const{label:e=(0,g.__)("Height","coblocks"),height:t,heightTablet:o,heightMobile:n,onChange:s,onChangeTablet:c,onChangeMobile:a,min:m=10,max:b=1e3,step:d=1,type:p}=this.props,u=i()("components-base-control","components-coblocks-dimensions-control","components-coblocks-responsive-base-control",{});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:u},(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"components-base-control__label"},e),(0,l.createElement)(h.TabPanel,{activeClass:"is-active",className:"components-coblocks-dimensions-control__mobile-controls",initialTabName:"default",onSelect:e=>{let t="desktop";switch(e){case"desktop":t="tablet";break;case"tablet":t="mobile";break;case"mobile":t="desktop"}const o=document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item--${p}`);for(let e=0;e<o.length;e++)o[e].style.display="none";"default"===e?document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item-${p}--tablet`)[0].click():document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item-${p}--${t}`)[0].style.display="block"},tabs:[{className:`is-secondary components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${p} components-button is-button is-default components-coblocks-dimensions-control__mobile-controls-item--default components-coblocks-dimensions-control__mobile-controls-item-${p}--default`,name:"default",title:r.ugZ},{className:`is-secondary components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${p} components-button is-button is-default components-coblocks-dimensions-control__mobile-controls-item--desktop components-coblocks-dimensions-control__mobile-controls-item-${p}--desktop`,name:"desktop",title:r.ugZ},{className:`is-secondary components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${p} components-button is-button is-default components-coblocks-dimensions-control__mobile-controls-item--tablet components-coblocks-dimensions-control__mobile-controls-item-${p}--tablet`,name:"tablet",title:r.v_G},{className:`is-secondary components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${p} components-button is-button is-default components-coblocks-dimensions-control__mobile-controls-item--mobile components-coblocks-dimensions-control__mobile-controls-item-${p}--mobile`,name:"mobile",title:r.pY8}]},(e=>"mobile"===e.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__inputs component-coblocks-is-mobile"},(0,l.createElement)(h.BaseControl,null,(0,l.createElement)("input",{max:b,min:m,onChange:e=>{a(e),this.saveMeta()},step:d,type:"number",value:n||""})))):"tablet"===e.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__inputs component-coblocks-is-tablet"},(0,l.createElement)(h.BaseControl,null,(0,l.createElement)("input",{max:b,min:m,onChange:e=>{c(e),this.saveMeta()},step:d,type:"number",value:o||""})))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"components-coblocks-dimensions-control__inputs component-coblocks-is-desktop"},(0,l.createElement)(h.BaseControl,null,(0,l.createElement)("input",{max:b,min:m,onChange:e=>{s(e),this.saveMeta()},step:d,type:"number",value:t||""})))))))))}}const z=(0,_.withInstanceId)(L);L.propTypes={height:d().oneOfType([d().number,d().string]),heightMobile:d().oneOfType([d().number,d().string]),heightTablet:d().oneOfType([d().number,d().string]),label:d().string.isRequired,max:d().number.isRequired,min:d().number.isRequired,onChange:d().func,onChangeMobile:d().func,onChangeTablet:d().func,step:d().number.isRequired},L.defaultProps={label:(0,g.__)("Height","coblocks"),max:1e3,min:10,step:1};const{getComputedStyle:I}=window,P=(0,h.withFallbackStyles)(((e,t)=>{const{backgroundColor:o}=t.attributes,n=e.querySelector('[contenteditable="true"]'),l=n?I(n):null;return{fallbackBackgroundColor:o||!l?void 0:l.backgroundColor}})),U=(0,_.compose)([a,P])((e=>{const{attributes:t,backgroundColor:o,setAttributes:s,setBackgroundColor:i,setTextColor:a,textColor:r}=e,{fullscreen:b,maxWidth:d,paddingTop:p,paddingRight:u,paddingBottom:_,paddingLeft:k,paddingTopTablet:v,paddingRightTablet:y,paddingBottomTablet:f,paddingLeftTablet:E,paddingTopMobile:B,paddingRightMobile:C,paddingBottomMobile:w,paddingLeftMobile:S,paddingUnit:$,paddingSyncUnits:N,paddingSyncUnitsTablet:M,paddingSyncUnitsMobile:x,paddingSize:R,saveCoBlocksMeta:L,height:I,heightTablet:P,heightMobile:U,syncHeight:V}=t;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(h.PanelBody,{title:(0,g.__)("Hero settings","coblocks")},(0,l.createElement)(A,(0,n.Z)({},e,{type:"padding",label:(0,g.__)("Padding","coblocks"),help:(0,g.__)("Space inside of the container.","coblocks"),valueTop:p,valueRight:u,valueBottom:_,valueLeft:k,valueTopTablet:v,valueRightTablet:y,valueBottomTablet:f,valueLeftTablet:E,valueTopMobile:B,valueRightMobile:C,valueBottomMobile:w,valueLeftMobile:S,unit:$,syncUnits:N,syncUnitsTablet:M,syncUnitsMobile:x,dimensionSize:R,saveCoBlocksMeta:L})),(0,l.createElement)(T,e),!b&&(0,l.createElement)(z,(0,n.Z)({},e,{label:(0,g.__)("Height in pixels","coblocks"),height:I,heightTablet:P,heightMobile:U,onChange:e=>{s({height:parseInt(e.target.value,10)})},onChangeTablet:e=>{s({heightTablet:parseInt(e.target.value,10)})},onChangeMobile:e=>{s({heightMobile:parseInt(e.target.value,10)})},sync:V,type:"height",min:"500"})),(0,l.createElement)(h.RangeControl,{label:(0,g.__)("Content width in pixels","coblocks"),value:parseInt(d),onChange:e=>s({maxWidth:parseInt(e)}),min:400,max:1e3,step:10,initialPosition:560})),(0,l.createElement)(c.PanelColorSettings,{title:(0,g.__)("Color settings","coblocks"),initialOpen:!1,colorSettings:[{value:o.color,onChange:e=>{i(e),R&&"no"!==R||s({paddingSize:"huge"})},label:(0,g.__)("Background color","coblocks")},{value:r.color,onChange:a,label:(0,g.__)("Text color","coblocks")}]}),(0,l.createElement)(m.OT,(0,n.Z)({},e,{hasOverlay:!0}))))}));var V=o(1313);const F=["core/heading","core/paragraph","core/spacer","core/button","core/buttons","core/list","core/image","coblocks/alert","coblocks/gif","coblocks/social","coblocks/row","coblocks/column","coblocks/buttons"],O=[["core/heading",{level:2,
/* translators: content placeholder */
placeholder:(0,g.__)("Add hero heading…","coblocks")}],["core/paragraph",{
/* translators: content placeholder */
placeholder:(0,g.__)("Add hero content, which is typically an introductory area of a page accompanied by call to action or two.","coblocks")}],["core/buttons",{contentAlign:"left",gutter:"medium",items:2},[["core/button",{
/* translators: content placeholder */
placeholder:(0,g.__)("Primary button…","coblocks")}],["core/button",{className:"is-style-outline",
/* translators: content placeholder */
placeholder:(0,g.__)("Secondary button…","coblocks")}]]]],W=(0,_.compose)([a,(0,k.withDispatch)((e=>{const{updateBlockAttributes:t}=e("core/block-editor"),{editPost:o}=e("core/editor");return{editPost:o,updateBlockAttributes:t}})),(0,k.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),{getBlockAttributes:o}=e("core/block-editor");return{getBlockAttributes:o,getEditedPostAttribute:t}}))])((e=>{const{clientId:t,attributes:o,getEditedPostAttribute:s,editPost:a,name:r,isSelected:b,setAttributes:d,textColor:p,backgroundColor:u,insertBlocksAfter:_,getBlockAttributes:v}=e,{maxWidth:y,className:f,layout:E,fullscreen:T,backgroundImg:B,paddingSize:C,paddingTop:w,paddingRight:$,paddingBottom:N,paddingLeft:M,paddingUnit:x,contentAlign:R,height:A,heightTablet:L,heightMobile:z}=o,[I]=(0,l.useState)(!1),[P,W]=(0,l.useState)(!1),[H,D]=(0,l.useState)(null),{__unstableMarkAutomaticChange:Z}=(0,k.useDispatch)("core/block-editor");(0,l.useEffect)((()=>{const e=document.getElementById("block-"+t);e&&(e.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.width="auto",e.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.maxWidth=o.maxWidth+"px");const n=document.defaultView;return j(),n.addEventListener("resize",j),Z(),()=>{n.removeEventListener("resize",j)}}),[]);const j=()=>{const e=document.defaultView;return D(e.innerWidth),e.innerWidth},q=(0,l.createElement)(m.pG,(0,n.Z)({},e,{label:(0,g.__)("Add background to hero","coblocks")}));let G=i()("wp-block-coblocks-hero",f);o.coblocks&&void 0!==o.coblocks.id&&(G=i()(G,`coblocks-hero-${o.coblocks.id}`));const J=i()("wp-block-coblocks-hero__inner",...(0,m.Ro)(o),E&&{[`hero-${E}-align`]:E},{"has-text-color":p&&p.color},C&&{"has-padding":"no"!==C,[`has-${C}-padding`]:"advanced"!==C},R&&{[`has-${R}-content`]:R},{"is-fullscreen":T,"is-hero-resizing":I}),Q={...(0,m.DS)(o,u),color:p&&p.color,minHeight:T?void 0:A,paddingBottom:"advanced"===C&&N?N+x:void 0,paddingLeft:"advanced"===C&&M?M+x:void 0,paddingRight:"advanced"===C&&$?$+x:void 0,paddingTop:"advanced"===C&&w?w+x:void 0},Y={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!0,right:!0,top:!1,topLeft:!1,topRight:!1};let K={target:"height",value:A};return H<=768&&H>514?K={target:"heightTablet",value:L||A}:H<=514&&(K={target:"heightMobile",value:z||A}),(0,l.createElement)(l.Fragment,null,q,b&&(0,l.createElement)(U,e),b&&(0,l.createElement)(S,e),(0,l.createElement)("div",{className:G},T?(0,l.createElement)("div",{className:J,style:Q},(0,V.isBlobURL)(B)&&(0,l.createElement)(h.Spinner,null),(0,m.QF)(o),void 0!==_&&(0,l.createElement)("div",{className:"wp-block-coblocks-hero__content-wrapper"},(0,l.createElement)(h.ResizableBox,{className:i()("wp-block-coblocks-hero__content","editor-media-container__resizer",{"is-resizing":P}),enable:Y,maxWidth:"1000",minWidth:"400",onResizeStart:()=>{W(!0);const e=document.getElementById("block-"+t);e.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.maxWidth="",e.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.width=y+"px"},onResizeStop:(e,o,n,l)=>{d({maxWidth:parseInt(y+l.width,10)}),W(!1);const s=document.getElementById("block-"+t);s.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.width="auto",s.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.maxWidth=parseInt(y+l.width,10)+"px"},showHandle:b,size:{width:y}},(0,l.createElement)(c.InnerBlocks,{__experimentalCaptureToolbars:!0,allowedBlocks:F,template:O,templateInsertUpdatesSelection:!1,templateLock:!1})))):(0,l.createElement)(h.ResizableBox,{className:J,enable:{bottom:!0,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},minHeight:"500",onResizeStop:(e,n,l,i)=>{switch(K.target){case"heightTablet":d({heightTablet:parseInt(K.value+i.height,10)});break;case"heightMobile":d({heightMobile:parseInt(K.value+i.height,10)});break;default:d({height:parseInt(K.value+i.height,10)})}(e=>{const n=s("meta"),l=v(t);let i={};if(void 0!==o.coblocks&&void 0!==o.coblocks.id){const t=r.split("/").join("-")+"-"+o.coblocks.id,s={height:l[e],heightMobile:l.heightMobile,heightTablet:l.heightTablet};i=void 0===n._coblocks_responsive_height||void 0!==n._coblocks_responsive_height&&""===n._coblocks_responsive_height?{}:JSON.parse(n._coblocks_responsive_height),void 0===i[t]?(i[t]={},i[t][e]={}):void 0===i[t][e]&&(i[t][e]={}),i[t][e]=s,a({meta:{_coblocks_responsive_height:JSON.stringify(i)}})}})("height")},showHandle:b,size:{height:K.value},style:Q},(0,V.isBlobURL)(B)&&(0,l.createElement)(h.Spinner,null),(0,m.QF)(o),void 0!==_&&(0,l.createElement)("div",{className:"wp-block-coblocks-hero__content-wrapper"},(0,l.createElement)(h.ResizableBox,{className:i()("wp-block-coblocks-hero__content","editor-media-container__resizer",{"is-resizing":P}),enable:Y,maxWidth:"1000",minWidth:"400",onResizeStart:()=>{W(!0);const e=document.getElementById("block-"+t);e.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.maxWidth="",e.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.width=y+"px"},onResizeStop:(e,o,n,l)=>{d({maxWidth:parseInt(y+l.width,10)}),W(!1);const s=document.getElementById("block-"+t);s.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.width="auto",s.getElementsByClassName("wp-block-coblocks-hero__content")[0].style.maxWidth=parseInt(y+l.width,10)+"px"},showHandle:b,size:{width:y}},(0,l.createElement)(c.InnerBlocks,{allowedBlocks:F,template:O,templateInsertUpdatesSelection:!1,templateLock:!1}))))))}))},9881:(e,t,o)=>{var n=o(7816),l=o(9291)(n);e.exports=l},8483:(e,t,o)=>{var n=o(5063)();e.exports=n},7816:(e,t,o)=>{var n=o(8483),l=o(3674);e.exports=function(e,t){return e&&n(e,t,l)}},9199:(e,t,o)=>{var n=o(9881),l=o(8612);e.exports=function(e,t){var o=-1,s=l(e)?Array(e.length):[];return n(e,(function(e,n,l){s[++o]=t(e,n,l)})),s}},9291:(e,t,o)=>{var n=o(8612);e.exports=function(e,t){return function(o,l){if(null==o)return o;if(!n(o))return e(o,l);for(var s=o.length,i=t?s:-1,c=Object(o);(t?i--:++i<s)&&!1!==l(c[i],i,c););return o}}},5063:e=>{e.exports=function(e){return function(t,o,n){for(var l=-1,s=Object(t),i=n(t),c=i.length;c--;){var a=i[e?c:++l];if(!1===o(s[a],a,s))break}return t}}},5161:(e,t,o)=>{var n=o(9932),l=o(7206),s=o(9199),i=o(1469);e.exports=function(e,t){return(i(e)?n:s)(e,l(t,3))}}}]);