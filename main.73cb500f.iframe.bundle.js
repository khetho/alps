(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{353:function(module,exports,__webpack_require__){__webpack_require__(354),__webpack_require__(515),__webpack_require__(516),__webpack_require__(692),__webpack_require__(665),__webpack_require__(693),__webpack_require__(691),__webpack_require__(688),__webpack_require__(694),__webpack_require__(689),__webpack_require__(690),__webpack_require__(679),__webpack_require__(695),module.exports=__webpack_require__(683)},421:function(module,exports){},516:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(154)},683:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(154).configure)([__webpack_require__(684),__webpack_require__(685)],module,!1)}).call(this,__webpack_require__(119)(module))},684:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=684},685:function(module,exports,__webpack_require__){var map={"./components/button/Button.stories.tsx":686};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=685},686:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(8),__webpack_require__(154)),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(49),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87),_config__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(86),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(56);function getTabData(name){var settings=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({tab:name},_config__WEBPACK_IMPORTED_MODULE_5__.a.defaultProps),_config__WEBPACK_IMPORTED_MODULE_5__.a.data),settings)}function generalTab(){var settings=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_getTabData=getTabData("General",settings),as=_getTabData.as,label=_getTabData.label,url=_getTabData.url,tab=_getTabData.tab;return{label:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text *",label,tab),url:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("URL",url,tab),as:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("As",_config__WEBPACK_IMPORTED_MODULE_5__.a.asOptions,as,tab)}}function settingsTab(){var settings=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_getTabData2=getTabData("Settings",settings),disabled=_getTabData2.disabled,expand=_getTabData2.expand,lighter=_getTabData2.lighter,outline=_getTabData2.outline,simple=_getTabData2.simple,small=_getTabData2.small,toggle=_getTabData2.toggle,tab=_getTabData2.tab;return{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Disabled",disabled,tab),expand:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Expand",expand,tab),lighter:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Lighter",lighter,tab),outline:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Outline",outline,tab),simple:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Simple",simple,tab),small:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Small",small,tab),toggle:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Toggle",toggle,tab)}}function allTabs(){var settings=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},generalProps=generalTab(settings),settingsProps=settingsTab(settings);return Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},generalProps),settingsProps)}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Components/Button",module).add("Default",(function(){var props=allTabs();return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))})).add("Disabled",(function(){var props=allTabs({disabled:!0});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))})).add("Lighter",(function(){var props=allTabs({lighter:!0});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))})).add("Outline",(function(){var props=allTabs({outline:!0});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))})).add("Simple",(function(){var props=allTabs({simple:!0});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))})).add("Small",(function(){var props=allTabs({small:!0});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_evgeny_Documents_BLOG_deepVision_alps_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))}))}.call(this,__webpack_require__(136)(module))},695:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(15),esm=__webpack_require__(0),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},html:{prettier:{tabWidth:2,useTabs:!1,jsxBracketSameLine:!1,htmlWhitespaceSensitivity:"ignore"}},themes:{default:"Ming",list:[{name:"Ming",class:"u-theme--ming",color:"#007f98"},{name:"facebook",class:"theme-fb",color:"#"}]}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},86:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return buttonConfig}));var buttonConfig={asOptions:["a","button","span"],iconPositions:["left","right"],defaultProps:{as:"button",primary:!1,disabled:!1,expand:!1,lighter:!1,outline:!1,simple:!1,small:!1,toggle:!1,className:"",iconFill:"white",iconPosition:"left",iconSize:"xs"},data:{label:"Learn More",url:"https://www.adventist.org"}}},87:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button_Button}));var objectWithoutProperties=__webpack_require__(352),toConsumableArray=(__webpack_require__(8),__webpack_require__(226));function splitAndRemoveEmpty(str){var separator=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return str.split(separator).filter(Boolean)}function useClasses(){for(var base=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",conditionals=arguments.length>1?arguments[1]:void 0,extra=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",classes=splitAndRemoveEmpty(base),_i=0,_Object$keys=Object.keys(conditionals);_i<_Object$keys.length;_i++){var className=_Object$keys[_i];console.log("USE 1: "+className+" ::: "+conditionals[className]);var condition=conditionals[className];console.log("USE 2: "+className),condition&&classes.push.apply(classes,Object(toConsumableArray.a)(splitAndRemoveEmpty(className))),console.log("USE 3: "+classes)}return extra&&classes.push.apply(classes,Object(toConsumableArray.a)(splitAndRemoveEmpty(extra))),classes.join(" ")}try{useClasses.displayName="useClasses",useClasses.__docgenInfo={description:"Returns a string of clases given a base class and some conditionals",displayName:"useClasses",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers/useClasses.tsx#useClasses"]={docgenInfo:useClasses.__docgenInfo,name:"useClasses",path:"src/helpers/useClasses.tsx#useClasses"})}catch(__react_docgen_typescript_loader_error){}var config=__webpack_require__(86),jsx_runtime=__webpack_require__(56),_excluded=["label","disabled","lighter","outline","simple","small","toggle","url"],Button_Button=function Button(_ref){var elementByType,label=_ref.label,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$lighter=_ref.lighter,lighter=void 0!==_ref$lighter&&_ref$lighter,_ref$outline=_ref.outline,outline=void 0!==_ref$outline&&_ref$outline,_ref$simple=_ref.simple,simple=void 0!==_ref$simple&&_ref$simple,_ref$small=_ref.small,small=void 0!==_ref$small&&_ref$small,_ref$toggle=_ref.toggle,toggle=void 0!==_ref$toggle&&_ref$toggle,url=_ref.url,props=Object(objectWithoutProperties.a)(_ref,_excluded),buttonClass=function useButtonClass(base,disabled,flags,extras){var validClasses={disabled:disabled};return Object.keys(flags).map((function(flag){flags[flag]&&(validClasses["".concat(base,"--").concat(flag)]=flags[flag])})),useClasses(base,validClasses,extras)}("o-button",disabled,{lighter:lighter,outline:outline,simple:simple,small:small,toggle:toggle},"");switch(props.as){case config.a.asOptions[0]:elementByType=Object(jsx_runtime.jsx)("a",{className:buttonClass,href:url,children:label});break;case config.a.asOptions[2]:elementByType=Object(jsx_runtime.jsx)("span",{className:buttonClass,children:label});break;default:elementByType=Object(jsx_runtime.jsx)("button",{className:buttonClass,children:label})}return elementByType};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},lighter:{defaultValue:{value:"false"},description:"",name:"lighter",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},simple:{defaultValue:{value:"false"},description:"",name:"simple",required:!1,type:{name:"boolean"}},small:{defaultValue:{value:"false"},description:"",name:"small",required:!1,type:{name:"boolean"}},toggle:{defaultValue:{value:"false"},description:"",name:"toggle",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}},[[353,1,2]]]);