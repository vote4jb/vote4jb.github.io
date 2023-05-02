window.moduloBuild = window.moduloBuild || { modules: {}, nameToHash: {} };

window.moduloBuild.modules["xxtkefli"] = function configuration (modulo) {

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    if (window.location.host.startsWith('localhost')) {
        return;
    }
    if (window.location.host.startsWith('127')) {
        return;
    }
    if (window.location.host.startsWith('192')) {
        return;
    }
    if (window.location.host.startsWith('dev--')) {
        return;
    }
    gtag('js', new Date());
    gtag('config', 'G-6ZT8F1MF6V'); // TODO: Swap with correct

};
window.moduloBuild.nameToHash.configuration = "xxtkefli";

window.moduloBuild.modules["x1ance80"] = function configuration1 (modulo) {

// Copyright 2012 Google Inc. All rights reserved.
 
(function(){

var data = {
"resource": {
  "version":"1",
  
  "macros":[{"function":"__e"},{"vtp_signal":0,"function":"__c","vtp_value":0},{"function":"__c","vtp_value":""},{"function":"__c","vtp_value":0},{"vtp_signal":0,"function":"__c","vtp_value":0},{"function":"__c","vtp_value":""},{"function":"__c","vtp_value":0}],
  "tags":[{"function":"__ogt_1p_data_v2","priority":14,"vtp_isAutoEnabled":true,"vtp_autoCollectExclusionSelectors":["list",["map","exclusionSelector",""]],"vtp_isEnabled":true,"vtp_autoEmailEnabled":true,"vtp_autoPhoneEnabled":false,"vtp_autoAddressEnabled":false,"vtp_isAutoCollectPiiEnabledFlag":false,"tag_id":10},{"function":"__ccd_ga_first","priority":13,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":25},{"function":"__set_product_settings","priority":12,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","vtp_foreignTldMacroResult":["macro",5],"vtp_isChinaVipRegionMacroResult":["macro",6],"tag_id":24},{"function":"__ogt_google_signals","priority":11,"vtp_googleSignals":"DISABLED","vtp_instanceDestinationId":"G-6ZT8F1MF6V","vtp_serverMacroResult":["macro",4],"tag_id":23},{"function":"__ccd_ga_regscope","priority":10,"vtp_settingsTable":["list",["map","redactFieldGroup","DEVICE_AND_GEO","disallowAllRegions",false,"disallowedRegions",""],["map","redactFieldGroup","GOOGLE_SIGNALS","disallowAllRegions",true,"disallowedRegions",""]],"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":22},{"function":"__ccd_em_download","priority":9,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":21},{"function":"__ccd_em_form","priority":8,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":20},{"function":"__ccd_em_outbound_click","priority":7,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":19},{"function":"__ccd_em_page_view","priority":6,"vtp_historyEvents":true,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":18},{"function":"__ccd_em_scroll","priority":5,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":17},{"function":"__ccd_em_site_search","priority":4,"vtp_searchQueryParams":"q,s,search,query,keyword","vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":16},{"function":"__ccd_em_video","priority":3,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":15},{"function":"__ccd_conversion_marking","priority":2,"vtp_conversionRules":["list",["map","matchingRules","{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":14},{"function":"__ccd_auto_redact","priority":1,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":13},{"function":"__gct","vtp_trackingId":"G-6ZT8F1MF6V","vtp_sessionDuration":0,"vtp_googleSignals":["macro",1],"vtp_foreignTld":["macro",2],"vtp_restrictDomain":["macro",3],"vtp_eventSettings":["map"],"tag_id":7},{"function":"__ccd_ga_last","priority":0,"vtp_instanceDestinationId":"G-6ZT8F1MF6V","tag_id":12}],
  "predicates":[{"function":"_eq","arg0":["macro",0],"arg1":"gtm.js"},{"function":"_eq","arg0":["macro",0],"arg1":"gtm.init"}],
  "rules":[[["if",0],["add",14]],[["if",1],["add",0,15,13,12,11,10,9,8,7,6,5,4,3,2,1]]]
},
"runtime":[ [50,"__ccd_auto_redact",[46,"a"],[50,"t",[46,"be","bf","bg"],[52,"bh",["v",[15,"be"],[15,"bg"]]],[22,[28,[15,"bh"]],[46,[36,[15,"be"]]]],[22,[28,[17,[15,"bh"],"search"]],[46,[36,[15,"be"]]]],[41,"bi"],[3,"bi",[17,[15,"bh"],"search"]],[65,"bj",[15,"bf"],[46,[53,[52,"bk",[7,[15,"bj"],["c",[15,"bj"]]]],[65,"bl",[15,"bk"],[46,[53,[52,"bm",[2,[15,"bl"],"replace",[7,[15,"s"],"\\$1"]]],[52,"bn",[30,[16,[15,"r"],[15,"bm"]],[43,[15,"r"],[15,"bm"],["b",[0,[0,"([?&]",[15,"bm"]],"=)([^&]*)((?=[&]|$))"],"gi"]]]],[3,"bi",[2,[15,"bi"],"replace",[7,[15,"bn"],[0,[0,"$1",[15,"p"]],"$3"]]]]]]]]]],[22,[20,[15,"bi"],[17,[15,"bh"],"search"]],[46,[36,[15,"be"]]]],[22,[20,[16,[15,"bi"],0],"&"],[46,[3,"bi",[2,[15,"bi"],"substring",[7,1]]]]],[22,[21,[16,[15,"bi"],0],"?"],[46,[3,"bi",[0,"?",[15,"bi"]]]]],[22,[20,[15,"bi"],"?"],[46,[3,"bi",""]]],[43,[15,"bh"],"search",[15,"bi"]],[36,["w",[15,"bh"],[15,"bg"]]]],[50,"v",[46,"be","bf"],[22,[20,[15,"bf"],[17,[15,"q"],"PATH"]],[46,[3,"be",[0,[15,"u"],[15,"be"]]]]],[36,["f",[15,"be"]]]],[50,"w",[46,"be","bf"],[41,"bg"],[3,"bg",""],[22,[20,[15,"bf"],[17,[15,"q"],"URL"]],[46,[53,[41,"bh"],[3,"bh",""],[22,[30,[17,[15,"be"],"username"],[17,[15,"be"],"password"]],[46,[3,"bh",[0,[15,"bh"],[0,[0,[0,[17,[15,"be"],"username"],[39,[17,[15,"be"],"password"],":",""]],[17,[15,"be"],"password"]],"@"]]]]],[3,"bg",[0,[0,[0,[17,[15,"be"],"protocol"],"//"],[15,"bh"]],[17,[15,"be"],"host"]]]]]],[36,[0,[0,[0,[15,"bg"],[17,[15,"be"],"pathname"]],[17,[15,"be"],"search"]],[17,[15,"be"],"hash"]]]],[50,"x",[46,"be","bf"],[41,"bg"],[3,"bg",[2,[15,"be"],"replace",[7,[15,"l"],[15,"p"]]]],[22,[30,[20,[15,"bf"],[17,[15,"q"],"URL"]],[20,[15,"bf"],[17,[15,"q"],"PATH"]]],[46,[53,[52,"bh",["v",[15,"bg"],[15,"bf"]]],[22,[20,[15,"bh"],[44]],[46,[36,[15,"bg"]]]],[52,"bi",[17,[15,"bh"],"search"]],[52,"bj",[2,[15,"bi"],"replace",[7,[15,"m"],[15,"p"]]]],[22,[20,[15,"bi"],[15,"bj"]],[46,[36,[15,"bg"]]]],[43,[15,"bh"],"search",[15,"bj"]],[3,"bg",["w",[15,"bh"],[15,"bf"]]]]]],[36,[15,"bg"]]],[50,"y",[46,"be"],[22,[20,[15,"be"],[15,"o"]],[46,[36,[17,[15,"q"],"PATH"]]],[46,[22,[21,[2,[15,"n"],"indexOf",[7,[15,"be"]]],[27,1]],[46,[36,[17,[15,"q"],"URL"]]],[46,[36,[17,[15,"q"],"TEXT"]]]]]]],[50,"z",[46,"be","bf"],[41,"bg"],[3,"bg",false],[52,"bh",["e",[15,"be"]]],[38,[15,"bh"],[46,"string","array","object"],[46,[5,[46,[52,"bi",["x",[15,"be"],[15,"bf"]]],[22,[21,[15,"be"],[15,"bi"]],[46,[36,[15,"bi"]]]],[4]]],[5,[46,[53,[41,"bj"],[3,"bj",0],[63,[7,"bj"],[23,[15,"bj"],[17,[15,"be"],"length"]],[33,[15,"bj"],[3,"bj",[0,[15,"bj"],1]]],[46,[53,[52,"bk",["z",[16,[15,"be"],[15,"bj"]],[17,[15,"q"],"TEXT"]]],[22,[21,[15,"bk"],[44]],[46,[43,[15,"be"],[15,"bj"],[15,"bk"]],[3,"bg",true]]]]]]],[4]]],[5,[46,[54,"bj",[15,"be"],[46,[53,[52,"bk",["z",[16,[15,"be"],[15,"bj"]],[17,[15,"q"],"TEXT"]]],[22,[21,[15,"bk"],[44]],[46,[43,[15,"be"],[15,"bj"],[15,"bk"]],[3,"bg",true]]]]]],[4]]]]],[36,[39,[15,"bg"],[15,"be"],[44]]]],[50,"bd",[46,"be","bf"],[52,"bg",[30,[2,[15,"be"],"getMetadata",[7,[15,"bc"]]],[7]]],[22,[20,[2,[15,"bg"],"indexOf",[7,[15,"bf"]]],[27,1]],[46,[2,[15,"bg"],"push",[7,[15,"bf"]]]]],[2,[15,"be"],"setMetadata",[7,[15,"bc"],[15,"bg"]]]],[52,"b",["require","internal.createRegExp"]],[52,"c",["require","encodeUriComponent"]],[52,"d",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"e",["require","getType"]],[52,"f",["require","parseUrl"]],[52,"g",["require","internal.registerCcdCallback"]],[52,"h",[17,[15,"a"],"instanceDestinationId"]],[52,"i",[17,[15,"a"],"redactEmail"]],[52,"j",[17,[15,"a"],"redactQueryParams"]],[52,"k",[39,[15,"j"],[2,[15,"j"],"split",[7,","]],[7]]],[22,[30,[28,[16,[15,"d"],"enableCcdAutoRedaction"]],[1,[28,[17,[15,"k"],"length"]],[28,[15,"i"]]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"l",["b","[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}","gi"]],[52,"m",["b",[0,"([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]","+\\.[A-Z]{2,}"],"gi"]],[52,"n",[7,"page_location","page_referrer","page_path","link_url","video_url","form_destination"]],[52,"o","page_path"],[52,"p","(redacted)"],[52,"q",[8,"TEXT",0,"URL",1,"PATH",2]],[52,"r",[8]],[52,"s",["b","([\\\\^$.|?*+(){}]|\\[|\\[)","g"]],[52,"u","http://."],[52,"ba",15],[52,"bb",16],[52,"bc","event_usage"],["g",[15,"h"],[51,"",[7,"be"],[22,[15,"i"],[46,[53,[52,"bf",[2,[15,"be"],"getHitKeys",[7]]],[65,"bg",[15,"bf"],[46,[53,[22,[20,[15,"bg"],"_sst_parameters"],[46,[6]]],[52,"bh",[2,[15,"be"],"getHitData",[7,[15,"bg"]]]],[22,[28,[15,"bh"]],[46,[6]]],[52,"bi",["y",[15,"bg"]]],[52,"bj",["z",[15,"bh"],[15,"bi"]]],[22,[21,[15,"bj"],[44]],[46,[2,[15,"be"],"setHitData",[7,[15,"bg"],[15,"bj"]]],["bd",[15,"be"],[15,"ba"]]]]]]]]]],[22,[17,[15,"k"],"length"],[46,[65,"bf",[15,"n"],[46,[53,[52,"bg",[2,[15,"be"],"getHitData",[7,[15,"bf"]]]],[22,[28,[15,"bg"]],[46,[6]]],[52,"bh",[39,[20,[15,"bf"],[15,"o"]],[17,[15,"q"],"PATH"],[17,[15,"q"],"URL"]]],[52,"bi",["t",[15,"bg"],[15,"k"],[15,"bh"]]],[22,[21,[15,"bi"],[15,"bg"]],[46,[2,[15,"be"],"setHitData",[7,[15,"bf"],[15,"bi"]]],["bd",[15,"be"],[15,"bb"]]]]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_conversion_marking",[46,"a"],[22,[30,[28,[17,[15,"a"],"conversionRules"]],[20,[17,[17,[15,"a"],"conversionRules"],"length"],0]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"b",["require","internal.copyPreHit"]],[52,"c",["require","internal.evaluateBooleanExpression"]],[52,"d",["require","internal.registerCcdCallback"]],[52,"e","is_conversion"],[52,"f","is_first_visit"],[52,"g","is_first_visit_conversion"],[52,"h","is_session_start"],[52,"i","is_session_start_conversion"],[52,"j","first_visit"],[52,"k","session_start"],[41,"l"],[41,"m"],["d",[17,[15,"a"],"instanceDestinationId"],[51,"",[7,"n"],[52,"o",[8,"preHit",[15,"n"]]],[65,"p",[17,[15,"a"],"conversionRules"],[46,[22,["c",[17,[15,"p"],"matchingRules"],[15,"o"]],[46,[2,[15,"n"],"setMetadata",[7,[15,"e"],true]],[4]]]]],[22,[2,[15,"n"],"getMetadata",[7,[15,"f"]]],[46,[22,[28,[15,"l"]],[46,[53,[52,"p",["b",[15,"n"],[8,"omitHitData",true,"omitMetadata",true]]],[2,[15,"p"],"setEventName",[7,[15,"j"]]],[3,"l",[8,"preHit",[15,"p"]]]]]],[65,"p",[17,[15,"a"],"conversionRules"],[46,[22,["c",[17,[15,"p"],"matchingRules"],[15,"l"]],[46,[2,[15,"n"],"setMetadata",[7,[15,"g"],true]],[4]]]]]]],[22,[2,[15,"n"],"getMetadata",[7,[15,"h"]]],[46,[22,[28,[15,"m"]],[46,[53,[52,"p",["b",[15,"n"],[8,"omitHitData",true,"omitMetadata",true]]],[2,[15,"p"],"setEventName",[7,[15,"k"]]],[3,"m",[8,"preHit",[15,"p"]]]]]],[65,"p",[17,[15,"a"],"conversionRules"],[46,[22,["c",[17,[15,"p"],"matchingRules"],[15,"m"]],[46,[2,[15,"n"],"setMetadata",[7,[15,"i"],true]],[4]]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]],[36]]
 ,[50,"__ccd_em_download",[46,"a"],[50,"q",[46,"w"],[36,[1,[15,"w"],[21,[2,[2,[15,"w"],"toLowerCase",[7]],"match",[7,[15,"p"]]],[45]]]]],[50,"r",[46,"w"],[52,"x",[2,[17,[15,"w"],"pathname"],"split",[7,"."]]],[52,"y",[39,[18,[17,[15,"x"],"length"],1],[16,[15,"x"],[37,[17,[15,"x"],"length"],1]],""]],[36,[16,[2,[15,"y"],"split",[7,"/"]],0]]],[50,"s",[46,"w"],[36,[39,[12,[2,[17,[15,"w"],"pathname"],"substring",[7,0,1]],"/"],[17,[15,"w"],"pathname"],[0,"/",[17,[15,"w"],"pathname"]]]]],[50,"t",[46,"w"],[41,"x"],[3,"x",""],[22,[1,[15,"w"],[17,[15,"w"],"href"]],[46,[53,[41,"y"],[3,"y",[2,[17,[15,"w"],"href"],"indexOf",[7,"#"]]],[3,"x",[39,[23,[15,"y"],0],[17,[15,"w"],"href"],[2,[17,[15,"w"],"href"],"substring",[7,0,[15,"y"]]]]]]]],[36,[15,"x"]]],[50,"v",[46,"w"],[52,"x",[8]],[43,[15,"x"],[15,"i"],true],[43,[15,"x"],[15,"e"],true],[43,[15,"w"],"eventMetadata",[15,"x"]]],[52,"b",["require","internal.getProductSettingsParameter"]],[52,"c",["require","internal.registerCcdCallback"]],[52,"d",["require","templateStorage"]],[52,"e","speculative"],[52,"f","ae_block_downloads"],[52,"g","file_download"],[52,"h","isRegistered"],[52,"i","em_event"],[52,"j",[17,[15,"a"],"instanceDestinationId"]],[22,["b",[15,"j"],[15,"f"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[15,"j"],[51,"",[7,"w"],[22,[30,[21,[2,[15,"w"],"getEventName",[7]],[15,"g"]],[28,[2,[15,"w"],"getMetadata",[7,[15,"i"]]]]],[46,[36]]],[22,["b",[15,"j"],[15,"f"]],[46,[2,[15,"w"],"abort",[7]],[36]]],[2,[15,"w"],"setMetadata",[7,[15,"e"],false]],[22,[28,[17,[15,"a"],"includeParams"]],[46,[2,[15,"w"],"setHitData",[7,"link_id",[44]]],[2,[15,"w"],"setHitData",[7,"link_url",[44]]],[2,[15,"w"],"setHitData",[7,"link_text",[44]]],[2,[15,"w"],"setHitData",[7,"file_name",[44]]],[2,[15,"w"],"setHitData",[7,"file_extension",[44]]]]]]],[22,[2,[15,"d"],"getItem",[7,[15,"h"]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"k",["require","internal.addDataLayerEventListener"]],[52,"l",["require","internal.enableAutoEventOnLinkClick"]],[52,"m",["require","internal.getDestinationIds"]],[52,"n",["require","parseUrl"]],[52,"o",["require","internal.sendGtagEvent"]],[52,"p",[0,"^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|","mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$"]],[52,"u",["l",[8,"checkValidation",true]]],[22,[28,[15,"u"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[2,[15,"d"],"setItem",[7,[15,"h"],true]],["k","gtm.linkClick",[51,"",[7,"w","x"],["x"],[52,"y",[8,"eventId",[16,[15,"w"],"gtm.uniqueEventId"]]],[52,"z",[16,[15,"w"],"gtm.elementUrl"]],[52,"ba",["n",[15,"z"]]],[22,[28,[15,"ba"]],[46,[36]]],[52,"bb",["r",[15,"ba"]]],[22,[28,["q",[15,"bb"]]],[46,[36]]],[52,"bc",[8,"link_id",[16,[15,"w"],"gtm.elementId"],"link_url",["t",[15,"ba"]],"link_text",[16,[15,"w"],"gtm.elementText"],"file_name",["s",[15,"ba"]],"file_extension",[15,"bb"]]],["v",[15,"y"]],["o",["m"],[15,"g"],[15,"bc"],[15,"y"]]],[15,"u"]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_em_form",[46,"a"],[50,"s",[46,"y"],[52,"z",[30,[16,[15,"y"],[15,"l"]],[8]]],[43,[15,"z"],"event_usage",[7,8]],[43,[15,"y"],[15,"l"],[15,"z"]]],[50,"t",[46,"y"],[52,"z",[30,[16,[15,"y"],[15,"l"]],[8]]],[43,[15,"z"],[15,"k"],true],[43,[15,"z"],[15,"f"],true],[43,[15,"y"],[15,"l"],[15,"z"]]],[52,"b",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"c",["require","internal.getProductSettingsParameter"]],[52,"d",["require","internal.registerCcdCallback"]],[52,"e",["require","templateStorage"]],[52,"f","speculative"],[52,"g","ae_block_form"],[52,"h","form_submit"],[52,"i","form_start"],[52,"j","isRegistered"],[52,"k","em_event"],[52,"l","eventMetadata"],[52,"m",[17,[15,"a"],"instanceDestinationId"]],[22,["c",[15,"m"],[15,"g"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"n",[28,[28,[16,[15,"b"],"enableCcdEmForm"]]]],[22,[15,"n"],[46,["d",[15,"m"],[51,"",[7,"y"],[52,"z",[2,[15,"y"],"getEventName",[7]]],[52,"ba",[30,[20,[15,"z"],[15,"i"]],[20,[15,"z"],[15,"h"]]]],[22,[30,[28,[15,"ba"]],[28,[2,[15,"y"],"getMetadata",[7,[15,"k"]]]]],[46,[36]]],[22,["c",[15,"m"],[15,"g"]],[46,[2,[15,"y"],"abort",[7]],[36]]],[2,[15,"y"],"setMetadata",[7,[15,"f"],false]],[22,[28,[17,[15,"a"],"includeParams"]],[46,[2,[15,"y"],"setHitData",[7,"form_id",[44]]],[2,[15,"y"],"setHitData",[7,"form_name",[44]]],[2,[15,"y"],"setHitData",[7,"form_destination",[44]]],[2,[15,"y"],"setHitData",[7,"form_length",[44]]],[22,[20,[15,"z"],[15,"h"]],[46,[2,[15,"y"],"setHitData",[7,"form_submit_text",[44]]]],[46,[22,[20,[15,"z"],[15,"i"]],[46,[2,[15,"y"],"setHitData",[7,"first_field_id",[44]]],[2,[15,"y"],"setHitData",[7,"first_field_name",[44]]],[2,[15,"y"],"setHitData",[7,"first_field_type",[44]]],[2,[15,"y"],"setHitData",[7,"first_field_position",[44]]]]]]]]]]]]],[22,[1,[15,"n"],[2,[15,"e"],"getItem",[7,[15,"j"]]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[2,[15,"e"],"setItem",[7,[15,"j"],true]],[52,"o",["require","internal.addFormInteractionListener"]],[52,"p",["require","internal.addFormSubmitListener"]],[52,"q",["require","internal.getDestinationIds"]],[52,"r",["require","internal.sendGtagEvent"]],[52,"u",[8]],[52,"v",[51,"",[7,"y","z"],[22,[15,"z"],[46,["z"]]],[52,"ba",[16,[15,"y"],"gtm.elementId"]],[22,[16,[15,"u"],[15,"ba"]],[46,[36]]],[43,[15,"u"],[15,"ba"],true],[52,"bb",[39,[30,[28,[28,[17,[15,"a"],"includeParams"]]],[15,"n"]],[8,"form_id",[15,"ba"],"form_name",[16,[15,"y"],"gtm.interactedFormName"],"form_destination",[16,[15,"y"],"gtm.elementUrl"],"form_length",[16,[15,"y"],"gtm.interactedFormLength"],"first_field_id",[16,[15,"y"],"gtm.interactedFormFieldId"],"first_field_name",[16,[15,"y"],"gtm.interactedFormFieldName"],"first_field_type",[16,[15,"y"],"gtm.interactedFormFieldType"],"first_field_position",[16,[15,"y"],"gtm.interactedFormFieldPosition"]],[8]]],[52,"bc",[8,"eventId",[17,[15,"a"],"gtmEventId"]]],["s",[15,"bc"]],[22,[15,"n"],[46,["t",[15,"bc"]],["r",["q"],[15,"i"],[15,"bb"],[15,"bc"]]],[46,["r",[15,"m"],[15,"i"],[15,"bb"],[15,"bc"]]]]]],[52,"w",[16,[15,"b"],"useEnableAutoEventOnFormApis"]],[52,"x",[51,"",[7,"y","z"],[22,[16,[15,"b"],"enableAlwaysSendFormStart"],[46,["v",[15,"y"],[44]]]],[52,"ba",[39,[30,[28,[28,[17,[15,"a"],"includeParams"]]],[15,"n"]],[8,"form_id",[16,[15,"y"],"gtm.elementId"],"form_name",[16,[15,"y"],"gtm.interactedFormName"],"form_destination",[16,[15,"y"],"gtm.elementUrl"],"form_length",[16,[15,"y"],"gtm.interactedFormLength"],"form_submit_text",[39,[15,"w"],[16,[15,"y"],"gtm.formSubmitElementText"],[16,[15,"y"],"gtm.formSubmitButtonText"]]],[8]]],[43,[15,"ba"],"event_callback",[15,"z"]],[52,"bb",[8,"eventId",[17,[15,"a"],"gtmEventId"]]],["s",[15,"bb"]],[22,[15,"n"],[46,["t",[15,"bb"]],["r",["q"],[15,"h"],[15,"ba"],[15,"bb"]]],[46,[53,[52,"bc",[30,[16,[15,"bb"],[15,"l"]],[8]]],[43,[15,"bc"],[15,"k"],true],[43,[15,"bb"],[15,"l"],[15,"bc"]],["r",[15,"m"],[15,"h"],[15,"ba"],[15,"bb"]]]]]]],[22,[15,"w"],[46,[53,[52,"y",["require","internal.addDataLayerEventListener"]],[52,"z",["require","internal.enableAutoEventOnFormSubmit"]],[52,"ba",["require","internal.enableAutoEventOnFormInteraction"]],[52,"bb",["ba"]],[22,[28,[15,"bb"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],["y","gtm.formInteract",[15,"v"],[15,"bb"]],[52,"bc",["z",[8,"checkValidation",true,"waitForTags",false]]],[22,[28,[15,"bc"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],["y","gtm.formSubmit",[15,"x"],[15,"bc"]]]],[46,["o",[15,"v"]],["p",[15,"x"],[8,"waitForCallbacks",false,"checkValidation",true]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_em_outbound_click",[46,"a"],[50,"r",[46,"x"],[22,[28,[15,"x"]],[46,[36,[44]]]],[41,"y"],[3,"y",""],[22,[1,[15,"x"],[17,[15,"x"],"href"]],[46,[53,[41,"z"],[3,"z",[2,[17,[15,"x"],"href"],"indexOf",[7,"#"]]],[3,"y",[39,[23,[15,"z"],0],[17,[15,"x"],"href"],[2,[17,[15,"x"],"href"],"substring",[7,0,[15,"z"]]]]]]]],[36,[15,"y"]]],[50,"s",[46,"x"],[22,[28,[15,"x"]],[46,[36,[44]]]],[41,"y"],[3,"y",[17,[15,"x"],"hostname"]],[52,"z",[2,[15,"y"],"match",[7,"^www\\d*\\."]]],[22,[1,[15,"z"],[16,[15,"z"],0]],[46,[3,"y",[2,[15,"y"],"substring",[7,[17,[16,[15,"z"],0],"length"]]]]]],[36,[15,"y"]]],[50,"t",[46,"x"],[22,[28,[15,"x"]],[46,[36,false]]],[52,"y",[2,[17,[15,"x"],"hostname"],"toLowerCase",[7]]],[41,"z"],[3,"z",[2,["s",["p",["o"]]],"toLowerCase",[7]]],[41,"ba"],[3,"ba",[37,[17,[15,"y"],"length"],[17,[15,"z"],"length"]]],[22,[1,[18,[15,"ba"],0],[29,[2,[15,"z"],"charAt",[7,0]],"."]],[46,[32,[15,"ba"],[3,"ba",[37,[15,"ba"],1]]],[3,"z",[0,".",[15,"z"]]]]],[22,[1,[19,[15,"ba"],0],[12,[2,[15,"y"],"indexOf",[7,[15,"z"],[15,"ba"]]],[15,"ba"]]],[46,[36,false]]],[36,true]],[50,"w",[46,"x"],[52,"y",[8]],[43,[15,"y"],[15,"i"],true],[43,[15,"y"],[15,"e"],true],[43,[15,"x"],"eventMetadata",[15,"y"]]],[52,"b",["require","internal.getProductSettingsParameter"]],[52,"c",["require","internal.registerCcdCallback"]],[52,"d",["require","templateStorage"]],[52,"e","speculative"],[52,"f","ae_block_outbound_click"],[52,"g","click"],[52,"h","isRegistered"],[52,"i","em_event"],[52,"j",[17,[15,"a"],"instanceDestinationId"]],[22,["b",[15,"j"],[15,"f"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[15,"j"],[51,"",[7,"x"],[22,[30,[21,[2,[15,"x"],"getEventName",[7]],[15,"g"]],[28,[2,[15,"x"],"getMetadata",[7,[15,"i"]]]]],[46,[36]]],[22,["b",[15,"j"],[15,"f"]],[46,[2,[15,"x"],"abort",[7]],[36]]],[2,[15,"x"],"setMetadata",[7,[15,"e"],false]],[22,[28,[17,[15,"a"],"includeParams"]],[46,[2,[15,"x"],"setHitData",[7,"link_id",[44]]],[2,[15,"x"],"setHitData",[7,"link_classes",[44]]],[2,[15,"x"],"setHitData",[7,"link_url",[44]]],[2,[15,"x"],"setHitData",[7,"link_domain",[44]]],[2,[15,"x"],"setHitData",[7,"outbound",[44]]]]]]],[22,[2,[15,"d"],"getItem",[7,[15,"h"]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"k",["require","internal.addDataLayerEventListener"]],[52,"l",["require","internal.enableAutoEventOnLinkClick"]],[52,"m",["require","internal.getDestinationIds"]],[52,"n",["require","internal.getRemoteConfigParameter"]],[52,"o",["require","getUrl"]],[52,"p",["require","parseUrl"]],[52,"q",["require","internal.sendGtagEvent"]],[52,"u",["n",[15,"j"],"cross_domain_conditions"]],[52,"v",["l",[8,"affiliateDomains",[15,"u"],"checkValidation",true,"waitForTags",false]]],[22,[28,[15,"v"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[2,[15,"d"],"setItem",[7,[15,"h"],true]],["k","gtm.linkClick",[51,"",[7,"x","y"],[52,"z",["p",[16,[15,"x"],"gtm.elementUrl"]]],[22,[28,["t",[15,"z"]]],[46,["y"],[36]]],[52,"ba",[8,"link_id",[16,[15,"x"],"gtm.elementId"],"link_classes",[16,[15,"x"],"gtm.elementClasses"],"link_url",["r",[15,"z"]],"link_domain",["s",[15,"z"]],"outbound",true]],[43,[15,"ba"],"event_callback",[15,"y"]],[52,"bb",[8,"eventId",[16,[15,"x"],"gtm.uniqueEventId"]]],["w",[15,"bb"]],["q",["m"],[15,"g"],[15,"ba"],[15,"bb"]]],[15,"v"]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_em_page_view",[46,"a"],[50,"q",[46,"r"],[52,"s",[8]],[43,[15,"s"],[15,"j"],true],[43,[15,"s"],[15,"f"],true],[43,[15,"r"],"eventMetadata",[15,"s"]]],[22,[28,[17,[15,"a"],"historyEvents"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"b",["require","internal.getProductSettingsParameter"]],[52,"c",["require","internal.registerCcdCallback"]],[52,"d",["require","internal.setRemoteConfigParameter"]],[52,"e",["require","templateStorage"]],[52,"f","speculative"],[52,"g","ae_block_history"],[52,"h","page_view"],[52,"i","isRegistered"],[52,"j","em_event"],[52,"k",[17,[15,"a"],"instanceDestinationId"]],[22,["b",[15,"k"],[15,"g"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[15,"k"],[51,"",[7,"r"],[22,[30,[21,[2,[15,"r"],"getEventName",[7]],[15,"h"]],[28,[2,[15,"r"],"getMetadata",[7,[15,"j"]]]]],[46,[36]]],[22,["b",[15,"k"],[15,"g"]],[46,[2,[15,"r"],"abort",[7]],[36]]],[2,[15,"r"],"setMetadata",[7,[15,"f"],false]],["d",[15,"k"],"page_referrer",[2,[15,"r"],"getHitData",[7,"page_referrer"]]],[22,[28,[17,[15,"a"],"includeParams"]],[46,[2,[15,"r"],"setHitData",[7,"page_location",[44]]],[2,[15,"r"],"setHitData",[7,"page_referrer",[44]]]]]]],[22,[2,[15,"e"],"getItem",[7,[15,"i"]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"l",["require","internal.addDataLayerEventListener"]],[52,"m",["require","internal.enableAutoEventOnHistoryChange"]],[52,"n",["require","internal.getDestinationIds"]],[52,"o",["require","internal.sendGtagEvent"]],[52,"p",["m",[8,"interval",1000]]],[22,[28,[15,"p"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[2,[15,"e"],"setItem",[7,[15,"i"],true]],["l","gtm.historyChange-v2",[51,"",[7,"r","s"],["s"],[52,"t",[16,[15,"r"],"gtm.oldUrl"]],[22,[20,[16,[15,"r"],"gtm.newUrl"],[15,"t"]],[46,[36]]],[52,"u",[16,[15,"r"],"gtm.historyChangeSource"]],[22,[1,[1,[21,[15,"u"],"pushState"],[21,[15,"u"],"popstate"]],[21,[15,"u"],"replaceState"]],[46,[36]]],[52,"v",[8,"page_location",[16,[15,"r"],"gtm.newUrl"],"page_referrer",[15,"t"]]],[52,"w",[8,"eventId",[16,[15,"r"],"gtm.uniqueEventId"]]],["q",[15,"w"]],["o",["n"],[15,"h"],[15,"v"],[15,"w"]]],[15,"p"]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_em_scroll",[46,"a"],[50,"p",[46,"q"],[52,"r",[8]],[43,[15,"r"],[15,"i"],true],[43,[15,"r"],[15,"e"],true],[43,[15,"q"],"eventMetadata",[15,"r"]]],[52,"b",["require","internal.getProductSettingsParameter"]],[52,"c",["require","internal.registerCcdCallback"]],[52,"d",["require","templateStorage"]],[52,"e","speculative"],[52,"f","ae_block_scroll"],[52,"g","scroll"],[52,"h","isRegistered"],[52,"i","em_event"],[52,"j",[17,[15,"a"],"instanceDestinationId"]],[22,["b",[15,"j"],[15,"f"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[15,"j"],[51,"",[7,"q"],[22,[30,[21,[2,[15,"q"],"getEventName",[7]],[15,"g"]],[28,[2,[15,"q"],"getMetadata",[7,[15,"i"]]]]],[46,[36]]],[22,["b",[15,"j"],[15,"f"]],[46,[2,[15,"q"],"abort",[7]],[36]]],[2,[15,"q"],"setMetadata",[7,[15,"e"],false]],[22,[28,[17,[15,"a"],"includeParams"]],[46,[2,[15,"q"],"setHitData",[7,"percent_scrolled",[44]]]]]]],[22,[2,[15,"d"],"getItem",[7,[15,"h"]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"k",["require","internal.addDataLayerEventListener"]],[52,"l",["require","internal.enableAutoEventOnScroll"]],[52,"m",["require","internal.getDestinationIds"]],[52,"n",["require","internal.sendGtagEvent"]],[52,"o",["l",[8,"verticalThresholdUnits","PERCENT","verticalThresholds",90]]],[22,[28,[15,"o"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[2,[15,"d"],"setItem",[7,[15,"h"],true]],["k","gtm.scrollDepth",[51,"",[7,"q","r"],["r"],[52,"s",[8,"eventId",[16,[15,"q"],"gtm.uniqueEventId"]]],[52,"t",[8,"percent_scrolled",[16,[15,"q"],"gtm.scrollThreshold"]]],["p",[15,"s"]],["n",["m"],[15,"g"],[15,"t"],[15,"s"]]],[15,"o"]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_em_site_search",[46,"a"],[50,"e",[46,"j"],[52,"k",[2,[30,[15,"j"],""],"split",[7,","]]],[53,[41,"l"],[3,"l",0],[63,[7,"l"],[23,[15,"l"],[17,[15,"k"],"length"]],[33,[15,"l"],[3,"l",[0,[15,"l"],1]]],[46,[53,[52,"m",["b",[2,[16,[15,"k"],[15,"l"]],"trim",[7]]]],[22,[21,[15,"m"],[44]],[46,[36,[15,"m"]]]]]]]]],[50,"f",[46,"j","k"],[52,"l",[8,"search_term",[15,"j"]]],[52,"m",[2,[30,[15,"k"],""],"split",[7,","]]],[53,[41,"n"],[3,"n",0],[63,[7,"n"],[23,[15,"n"],[17,[15,"m"],"length"]],[33,[15,"n"],[3,"n",[0,[15,"n"],1]]],[46,[53,[52,"o",[2,[16,[15,"m"],[15,"n"]],"trim",[7]]],[52,"p",["b",[15,"o"]]],[22,[21,[15,"p"],[44]],[46,[43,[15,"l"],[0,"q_",[15,"o"]],[15,"p"]]]]]]]],[36,[15,"l"]]],[52,"b",["require","getQueryParameters"]],[52,"c",["require","internal.sendGtagEvent"]],[52,"d",["require","getContainerVersion"]],[52,"g",["e",[17,[15,"a"],"searchQueryParams"]]],[52,"h",[30,[17,[15,"a"],"instanceDestinationId"],[17,["d"],"containerId"]]],[52,"i",[8,"deferrable",true,"eventId",[17,[15,"a"],"gtmEventId"]]],[22,[15,"g"],[46,[53,[52,"j",[39,[28,[28,[17,[15,"a"],"includeParams"]]],["f",[15,"g"],[17,[15,"a"],"additionalQueryParams"]],[8]]],["c",[15,"h"],"view_search_results",[15,"j"],[15,"i"]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_em_video",[46,"a"],[50,"r",[46,"s"],[52,"t",[8]],[43,[15,"t"],[15,"k"],true],[43,[15,"t"],[15,"e"],true],[43,[15,"s"],"eventMetadata",[15,"t"]]],[52,"b",["require","internal.getProductSettingsParameter"]],[52,"c",["require","internal.registerCcdCallback"]],[52,"d",["require","templateStorage"]],[52,"e","speculative"],[52,"f","ae_block_video"],[52,"g","video_start"],[52,"h","video_progress"],[52,"i","video_complete"],[52,"j","isRegistered"],[52,"k","em_event"],[52,"l",[17,[15,"a"],"instanceDestinationId"]],[22,["b",[15,"l"],[15,"f"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[15,"l"],[51,"",[7,"s"],[52,"t",[2,[15,"s"],"getEventName",[7]]],[52,"u",[30,[30,[20,[15,"t"],[15,"g"]],[20,[15,"t"],[15,"h"]]],[20,[15,"t"],[15,"i"]]]],[22,[30,[28,[15,"u"]],[28,[2,[15,"s"],"getMetadata",[7,[15,"k"]]]]],[46,[36]]],[22,["b",[15,"l"],[15,"f"]],[46,[2,[15,"s"],"abort",[7]],[36]]],[2,[15,"s"],"setMetadata",[7,[15,"e"],false]],[22,[28,[17,[15,"a"],"includeParams"]],[46,[2,[15,"s"],"setHitData",[7,"video_current_time",[44]]],[2,[15,"s"],"setHitData",[7,"video_duration",[44]]],[2,[15,"s"],"setHitData",[7,"video_percent",[44]]],[2,[15,"s"],"setHitData",[7,"video_provider",[44]]],[2,[15,"s"],"setHitData",[7,"video_title",[44]]],[2,[15,"s"],"setHitData",[7,"video_url",[44]]],[2,[15,"s"],"setHitData",[7,"visible",[44]]]]]]],[22,[2,[15,"d"],"getItem",[7,[15,"j"]]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"m",["require","internal.addDataLayerEventListener"]],[52,"n",["require","internal.enableAutoEventOnYouTubeActivity"]],[52,"o",["require","internal.getDestinationIds"]],[52,"p",["require","internal.sendGtagEvent"]],[52,"q",["n",[8,"captureComplete",true,"captureStart",true,"progressThresholdsPercent",[7,10,25,50,75]]]],[22,[28,[15,"q"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[2,[15,"d"],"setItem",[7,[15,"j"],true]],["m","gtm.video",[51,"",[7,"s","t"],["t"],[52,"u",[16,[15,"s"],"gtm.videoStatus"]],[41,"v"],[22,[20,[15,"u"],"start"],[46,[3,"v",[15,"g"]]],[46,[22,[20,[15,"u"],"progress"],[46,[3,"v",[15,"h"]]],[46,[22,[20,[15,"u"],"complete"],[46,[3,"v",[15,"i"]]],[46,[36]]]]]]],[52,"w",[8,"video_current_time",[16,[15,"s"],"gtm.videoCurrentTime"],"video_duration",[16,[15,"s"],"gtm.videoDuration"],"video_percent",[16,[15,"s"],"gtm.videoPercent"],"video_provider",[16,[15,"s"],"gtm.videoProvider"],"video_title",[16,[15,"s"],"gtm.videoTitle"],"video_url",[16,[15,"s"],"gtm.videoUrl"],"visible",[16,[15,"s"],"gtm.videoVisible"]]],[52,"x",[8,"eventId",[16,[15,"s"],"gtm.uniqueEventId"]]],["r",[15,"x"]],["p",["o"],[15,"v"],[15,"w"],[15,"x"]]],[15,"q"]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_ga_first",[46,"a"],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_ga_last",[46,"a"],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_ga_regscope",[46,"a"],[50,"k",[46,"m"],[22,[30,[28,[15,"i"]],[21,[17,[15,"i"],"length"],2]],[46,[36,false]]],[52,"n",["l",[15,"m"]]],[53,[41,"o"],[3,"o",0],[63,[7,"o"],[23,[15,"o"],[17,[15,"n"],"length"]],[33,[15,"o"],[3,"o",[0,[15,"o"],1]]],[46,[53,[52,"p",[16,[15,"n"],[15,"o"]]],[52,"q",[17,[15,"p"],"countryCode"]],[52,"r",[17,[15,"p"],"regionCode"]],[52,"s",[20,[15,"q"],[15,"i"]]],[52,"t",[30,[28,[15,"r"]],[20,[15,"r"],[15,"j"]]]],[22,[1,[15,"s"],[15,"t"]],[46,[36,true]]]]]]],[36,false]],[50,"l",[46,"m"],[52,"n",[7]],[22,[28,[15,"m"]],[46,[36,[15,"n"]]]],[52,"o",[2,[15,"m"],"split",[7,","]]],[53,[41,"p"],[3,"p",0],[63,[7,"p"],[23,[15,"p"],[17,[15,"o"],"length"]],[33,[15,"p"],[3,"p",[0,[15,"p"],1]]],[46,[53,[52,"q",[2,[16,[15,"o"],[15,"p"]],"trim",[7]]],[22,[28,[15,"q"]],[46,[6]]],[52,"r",[2,[15,"q"],"split",[7,"-"]]],[52,"s",[16,[15,"r"],0]],[52,"t",[39,[20,[17,[15,"r"],"length"],2],[15,"q"],[44]]],[22,[30,[28,[15,"s"]],[21,[17,[15,"s"],"length"],2]],[46,[6]]],[22,[1,[21,[15,"t"],[44]],[30,[23,[17,[15,"t"],"length"],4],[18,[17,[15,"t"],"length"],6]]],[46,[6]]],[2,[15,"n"],"push",[7,[8,"countryCode",[15,"s"],"regionCode",[15,"t"]]]]]]]],[36,[15,"n"]]],[52,"b",["require","getContainerVersion"]],[52,"c",["require","internal.setRemoteConfigParameter"]],[52,"d",["require","internal.getCountryCode"]],[52,"e",["require","internal.getRegionCode"]],[22,[28,[17,[15,"a"],"settingsTable"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[41,"f"],[52,"g",[8,"GOOGLE_SIGNALS",[7,[8,"name","allow_google_signals","value",false]],"DEVICE_AND_GEO",[7,[8,"name","geo_granularity","value",true],[8,"name","redact_device_info","value",true]]]],[52,"h",[30,[17,[15,"a"],"instanceDestinationId"],[17,["b"],"containerId"]]],[52,"i",["d"]],[52,"j",["e"]],[53,[41,"m"],[3,"m",0],[63,[7,"m"],[23,[15,"m"],[17,[17,[15,"a"],"settingsTable"],"length"]],[33,[15,"m"],[3,"m",[0,[15,"m"],1]]],[46,[53,[52,"n",[16,[17,[15,"a"],"settingsTable"],[15,"m"]]],[22,[30,[17,[15,"n"],"disallowAllRegions"],["k",[17,[15,"n"],"disallowedRegions"]]],[46,[53,[52,"o",[16,[15,"g"],[17,[15,"n"],"redactFieldGroup"]]],[22,[28,[15,"o"]],[46,[6]]],[53,[41,"p"],[3,"p",0],[63,[7,"p"],[23,[15,"p"],[17,[15,"o"],"length"]],[33,[15,"p"],[3,"p",[0,[15,"p"],1]]],[46,[53,[52,"q",[16,[15,"o"],[15,"p"]]],["c",[15,"h"],[17,[15,"q"],"name"],[17,[15,"q"],"value"]]]]]]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ogt_1p_data_v2",[46,"a"],[50,"j",[46,"l","m"],[52,"n",[16,[15,"a"],[15,"l"]]],[41,"o"],[22,[20,[15,"n"],"CSS_SELECTOR"],[46,[3,"o","css_selector"]],[46,[22,[20,[15,"n"],"JS_VAR"],[46,[3,"o","js_variable"]]]]],[36,[8,"selector_type",[15,"o"],"value",[16,[15,"a"],[15,"m"]]]]],[50,"k",[46,"l","m","n","o"],[22,[28,[16,[15,"a"],[15,"o"]]],[46,[36]]],[43,[15,"l"],[15,"m"],["j",[15,"n"],[15,"o"]]]],[22,[28,[17,[15,"a"],"isEnabled"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"b",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"c",["require","internal.getDestinationIds"]],[52,"d",["require","internal.getProductSettingsParameter"]],[52,"e",["require","internal.locateUserData"]],[52,"f",["require","internal.setRemoteConfigParameter"]],[52,"g",["require","internal.registerCcdCallback"]],[52,"h",[30,["c"],[7]]],[52,"i",[8,"enable_code",true]],[22,[17,[15,"a"],"isAutoEnabled"],[46,[53,[52,"l",[7]],[22,[1,[17,[15,"a"],"autoCollectExclusionSelectors"],[17,[17,[15,"a"],"autoCollectExclusionSelectors"],"length"]],[46,[53,[41,"n"],[3,"n",0],[63,[7,"n"],[23,[15,"n"],[17,[17,[15,"a"],"autoCollectExclusionSelectors"],"length"]],[33,[15,"n"],[3,"n",[0,[15,"n"],1]]],[46,[53,[52,"o",[17,[16,[17,[15,"a"],"autoCollectExclusionSelectors"],[15,"n"]],"exclusionSelector"]],[22,[15,"o"],[46,[2,[15,"l"],"push",[7,[15,"o"]]]]]]]]]]],[52,"m",[39,[17,[15,"a"],"isAutoCollectPiiEnabled"],[17,[15,"a"],"autoEmailEnabled"],true]],[43,[15,"i"],"auto_detect",[8,"email",[15,"m"],"phone",[17,[15,"a"],"autoPhoneEnabled"],"address",[17,[15,"a"],"autoAddressEnabled"],"exclude_element_selectors",[15,"l"]]]]]],[22,[17,[15,"a"],"isManualEnabled"],[46,[53,[52,"l",[8]],[22,[17,[15,"a"],"manualEmailEnabled"],[46,["k",[15,"l"],"email","emailType","emailValue"]]],[22,[17,[15,"a"],"manualPhoneEnabled"],[46,["k",[15,"l"],"phone","phoneType","phoneValue"]]],[22,[17,[15,"a"],"manualAddressEnabled"],[46,[53,[52,"m",[8]],["k",[15,"m"],"first_name","firstNameType","firstNameValue"],["k",[15,"m"],"last_name","lastNameType","lastNameValue"],["k",[15,"m"],"street","streetType","streetValue"],["k",[15,"m"],"city","cityType","cityValue"],["k",[15,"m"],"region","regionType","regionValue"],["k",[15,"m"],"country","countryType","countryValue"],["k",[15,"m"],"postal_code","postalCodeType","postalCodeValue"],[43,[15,"l"],"name_and_address",[7,[15,"m"]]]]]],[43,[15,"i"],"selectors",[15,"l"]]]]],[65,"l",[15,"h"],[46,[53,[22,[1,[1,[28,[16,[15,"b"],"enableCcdUserData"]],[28,["d",[15,"l"],"ads_customer_data_terms"]]],[28,["d",[15,"l"],"ga_customer_data_terms"]]],[46,[6]]],[41,"m"],[3,"m",[15,"i"]],[22,[1,[20,[2,[15,"l"],"indexOf",[7,"G-"]],0],[28,[16,[15,"b"],"enableEuidAutoMode"]]],[46,[53,[52,"p",[8,"enable_code",true,"selectors",[16,[15,"i"],"selectors"]]],[3,"m",[15,"p"]]]]],["f",[15,"l"],"user_data_settings",[15,"m"]],[22,[28,[16,[15,"b"],"enableCcdUserData"]],[46,[6]]],[52,"n",[16,[15,"m"],"auto_detect"]],[22,[28,[15,"n"]],[46,[6]]],[52,"o",[51,"",[7,"p"],[52,"q",[2,[15,"p"],"getMetadata",[7,"user_data_from_automatic"]]],[22,[15,"q"],[46,[36,[15,"q"]]]],[52,"r",["e",[8,"excludeElementSelectors",[16,[15,"n"],"exclude_element_selectors"],"fieldFilters",[8,"email",[16,[15,"n"],"email"],"phone",[16,[15,"n"],"phone"],"address",[16,[15,"n"],"address"]]]]],[52,"s",[1,[15,"r"],[16,[15,"r"],"elements"]]],[52,"t",[8]],[22,[1,[15,"s"],[18,[17,[15,"s"],"length"],0]],[46,[53,[41,"u"],[3,"u",0],[63,[7,"u"],[23,[15,"u"],[17,[15,"s"],"length"]],[33,[15,"u"],[3,"u",[0,[15,"u"],1]]],[46,[53,[52,"v",[16,[15,"s"],[15,"u"]]],[22,[20,[16,[15,"v"],"type"],"email"],[46,[43,[15,"t"],"email",[16,[15,"v"],"userData"]],[4]]]]]]]]],[2,[15,"p"],"setMetadata",[7,"user_data_from_automatic",[15,"t"]]],[36,[15,"t"]]]],["g",[15,"l"],[51,"",[7,"p"],[2,[15,"p"],"setMetadata",[7,"user_data_from_automatic_getter",[15,"o"]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ogt_google_signals",[46,"a"],[52,"b",["require","internal.setProductSettingsParameter"]],[52,"c",["require","getContainerVersion"]],[52,"d",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"e",[30,[17,[15,"a"],"instanceDestinationId"],[17,["c"],"containerId"]]],["b",[15,"e"],"google_signals",[20,[17,[15,"a"],"serverMacroResult"],1]],[22,[17,[15,"d"],"enableGa4OnoRemarketing"],[46,["b",[15,"e"],"google_ono",[20,[17,[15,"a"],"serverMacroResult"],2]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__set_product_settings",[46,"a"],[52,"b",["require","internal.setProductSettingsParameter"]],[52,"c",["require","getContainerVersion"]],[52,"d",[30,[17,[15,"a"],"instanceDestinationId"],[17,["c"],"containerId"]]],["b",[15,"d"],"google_tld",[17,[15,"a"],"foreignTldMacroResult"]],["b",[15,"d"],"ga_restrict_domain",[20,[17,[15,"a"],"isChinaVipRegionMacroResult"],1]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 
]
,"entities":{
"__ccd_auto_redact":{"2":true}
,
"__ccd_conversion_marking":{"2":true}
,
"__ccd_em_download":{"2":true}
,
"__ccd_em_form":{"2":true}
,
"__ccd_em_outbound_click":{"2":true}
,
"__ccd_em_page_view":{"2":true}
,
"__ccd_em_scroll":{"2":true}
,
"__ccd_em_site_search":{"2":true}
,
"__ccd_em_video":{"2":true}
,
"__ccd_ga_first":{"2":true}
,
"__ccd_ga_last":{"2":true}
,
"__ccd_ga_regscope":{"2":true}
,
"__ogt_1p_data_v2":{"2":true}
,
"__ogt_google_signals":{"2":true}
,
"__set_product_settings":{"2":true}


}
,"permissions":{
"__ccd_auto_redact":{}
,
"__ccd_conversion_marking":{}
,
"__ccd_em_download":{"listen_data_layer":{"accessType":"specific","allowedEvents":["gtm.linkClick"]},"process_dom_events":{"targets":[{"targetType":"document","eventName":"click"},{"targetType":"document","eventName":"auxclick"}]},"access_template_storage":{}}
,
"__ccd_em_form":{"access_template_storage":{},"listen_data_layer":{"accessType":"specific","allowedEvents":["gtm.formInteract","gtm.formSubmit"]},"process_dom_events":{"targets":[{"targetType":"document","eventName":"click"},{"targetType":"document","eventName":"submit"},{"targetType":"document","eventName":"change"},{"targetType":"window","eventName":"pagehide"}]}}
,
"__ccd_em_outbound_click":{"get_url":{"urlParts":"any","queriesAllowed":"any"},"listen_data_layer":{"accessType":"specific","allowedEvents":["gtm.linkClick"]},"process_dom_events":{"targets":[{"targetType":"document","eventName":"click"},{"targetType":"document","eventName":"auxclick"}]},"access_template_storage":{}}
,
"__ccd_em_page_view":{"listen_data_layer":{"accessType":"specific","allowedEvents":["gtm.historyChange-v2"]},"process_dom_events":{"targets":[{"targetType":"window","eventName":"pushstate"},{"targetType":"window","eventName":"popstate"}]},"access_template_storage":{}}
,
"__ccd_em_scroll":{"listen_data_layer":{"accessType":"specific","allowedEvents":["gtm.scrollDepth"]},"process_dom_events":{"targets":[{"targetType":"window","eventName":"resize"},{"targetType":"window","eventName":"scroll"}]},"access_template_storage":{}}
,
"__ccd_em_site_search":{"get_url":{"urlParts":"any","queriesAllowed":"any"},"read_container_data":{}}
,
"__ccd_em_video":{"listen_data_layer":{"accessType":"specific","allowedEvents":["gtm.video"]},"process_dom_events":{"targets":[{"targetType":"element","eventName":"onStateChange"},{"targetType":"element","eventName":"onPlaybackRateChange"}]},"access_template_storage":{}}
,
"__ccd_ga_first":{}
,
"__ccd_ga_last":{}
,
"__ccd_ga_regscope":{"read_container_data":{}}
,
"__ogt_1p_data_v2":{"read_dom_elements":{"selectors":[{"type":"css","value":"*"}]},"access_dom_element_property":{"properties":[{"property":"textContent","read":true,"write":false},{"property":"value","read":true,"write":false},{"property":"tagName","read":true,"write":false},{"property":"children","read":true,"write":false},{"property":"childElementCount","read":true,"write":false}]}}
,
"__ogt_google_signals":{"read_container_data":{}}
,
"__set_product_settings":{"read_container_data":{}}


}



,"security_groups":{
"google":[
"__ccd_auto_redact"
,
"__ccd_conversion_marking"
,
"__ccd_em_download"
,
"__ccd_em_form"
,
"__ccd_em_outbound_click"
,
"__ccd_em_page_view"
,
"__ccd_em_scroll"
,
"__ccd_em_site_search"
,
"__ccd_em_video"
,
"__ccd_ga_first"
,
"__ccd_ga_last"
,
"__ccd_ga_regscope"
,
"__ogt_1p_data_v2"
,
"__ogt_google_signals"
,
"__set_product_settings"

]


}

,"infra":[
"__ccd_auto_redact"
,
"__ccd_conversion_marking"
,
"__ccd_em_download"
,
"__ccd_em_form"
,
"__ccd_em_outbound_click"
,
"__ccd_em_page_view"
,
"__ccd_em_scroll"
,
"__ccd_em_site_search"
,
"__ccd_em_video"
,
"__ccd_ga_first"
,
"__ccd_ga_last"
,
"__ccd_ga_regscope"
,
"__ogt_1p_data_v2"
,
"__ogt_google_signals"
,
"__set_product_settings"


]


};


/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){return a.raw=a},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ka={a:!0},la={};try{la.__proto__=ka;ha=la.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=fa,oa=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Cm=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.h=a;this.m=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.B={};this.C=!1;this.N={}},ua=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.B["dust."+a]};ta.prototype.set=function(a,b){this.C||(a="dust."+a,this.N.hasOwnProperty(a)||(this.B[a]=b))};
ta.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var va=function(a,b){b="dust."+b;a.C||a.N.hasOwnProperty(b)||delete a.B[b]};ta.prototype.nc=function(){this.C=!0};ta.prototype.If=function(){return this.C};var wa=function(a){this.m=new ta;this.h=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.h[Number(b)]=a[Number(b)]:this.m.set(b,a[b]))};aa=wa.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.h.length;c++){var d=this.h[c];null===d||void 0===d?b.push(""):d instanceof wa?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.h.length=Number(b)}else sa(a)?this.h[Number(a)]=b:this.m.set(a,b)};aa.get=function(a){return"length"===a?this.length():sa(a)?this.h[Number(a)]:this.m.get(a)};aa.length=function(){return this.h.length};aa.Rb=function(){for(var a=ua(this.m,1),b=0;b<this.h.length;b++)a.push(b+"");return new wa(a)};var xa=function(a,b){sa(b)?delete a.h[Number(b)]:va(a.m,b)};aa=wa.prototype;
aa.pop=function(){return this.h.pop()};aa.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.h.shift()};aa.splice=function(a,b,c){return new wa(this.h.splice.apply(this.h,arguments))};aa.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};aa.has=function(a){return sa(a)&&this.h.hasOwnProperty(a)||this.m.has(a)};aa.nc=function(){this.B=!0;Object.freeze(this.h);this.m.nc()};aa.If=function(){return this.B};var ya=function(){this.quota={}};ya.prototype.reset=function(){this.quota={}};var za=function(a,b){this.T=a;this.N=function(c,d,e){return c.apply(d,e)};this.B=b;this.m=new ta;this.h=this.C=void 0};za.prototype.add=function(a,b){Aa(this,a,b,!1)};var Aa=function(a,b,c,d){if(!a.m.If())if(d){var e=a.m;e.set(b,c);e.N["dust."+b]=!0}else a.m.set(b,c)};za.prototype.set=function(a,b){this.m.If()||(!this.m.has(a)&&this.B&&this.B.has(a)?this.B.set(a,b):this.m.set(a,b))};za.prototype.get=function(a){return this.m.has(a)?this.m.get(a):this.B?this.B.get(a):void 0};
za.prototype.has=function(a){return!!this.m.has(a)||!(!this.B||!this.B.has(a))};var Ba=function(a){var b=new za(a.T,a);a.C&&(b.C=a.C);b.N=a.N;b.h=a.h;return b};var Da=function(){},Fa=function(a){return"function"===typeof a},k=function(a){return"string"===typeof a},Ga=function(a){return"number"===typeof a&&!isNaN(a)},Ha=Array.isArray,Ia=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ja=function(a,b){if(!Ga(a)||!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},l=function(a,
b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"===Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Oa=function(a){return Math.round(Number(a))||0},Pa=function(a){return"false"===String(a).toLowerCase()?!1:!!a},Qa=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ra=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Sa=function(){return new Date(Date.now())},
Ta=function(){return Sa().getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},$a=function(a,b){var c=z;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
b.indexOf(d))return}return d},bb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},cb=/^\w{1,9}$/,db=function(a,b){a=a||{};b=b||",";var c=[];l(a,function(d,e){cb.test(d)&&e&&c.push(d)});return c.join(b)},eb=function(a,b){function c(){++d===b&&(e(),e=null,c.done=!0)}var d=0,e=a;c.done=!1;return c};var fb=function(a,b){ta.call(this);this.T=a;this.pb=b};oa(fb,ta);fb.prototype.toString=function(){return this.T};fb.prototype.Rb=function(){return new wa(ua(this,1))};fb.prototype.h=function(a,b){return this.pb.apply(new gb(this,a),Array.prototype.slice.call(arguments,1))};fb.prototype.m=function(a,b){try{return this.h.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var ib=function(a,b){for(var c,d=0;d<b.length&&!(c=hb(a,b[d]),c instanceof ra);d++);return c},hb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof fb))throw Error("Attempting to execute non-function "+b[0]+".");return c.h.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.C;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},gb=function(a,b){this.m=a;this.h=b},C=function(a,b){return Ha(b)?hb(a.h,b):b},F=function(a){return a.m.T};var jb=function(){ta.call(this)};oa(jb,ta);jb.prototype.Rb=function(){return new wa(ua(this,1))};var kb={map:function(a){for(var b=new jb,c=0;c<arguments.length-1;c+=2){var d=C(this,arguments[c])+"",e=C(this,arguments[c+1]);b.set(d,e)}return b},list:function(a){for(var b=new wa,c=0;c<arguments.length;c++){var d=C(this,arguments[c]);b.push(d)}return b},fn:function(a,b,c){var d=this.h,e=C(this,b);if(!(e instanceof wa))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);return new fb(a,function(){return function(g){var h=Ba(d);void 0===
h.h&&(h.h=this.h.h);for(var m=Array.prototype.slice.call(arguments,0),n=0;n<m.length;n++)if(m[n]=C(this,m[n]),m[n]instanceof ra)return m[n];for(var p=e.get("length"),q=0;q<p;q++)q<m.length?h.add(e.get(q),m[q]):h.add(e.get(q),void 0);h.add("arguments",new wa(m));var r=ib(h,f);if(r instanceof ra)return"return"===r.h?r.m:r}}())},control:function(a,b){return new ra(a,C(this,b))},undefined:function(){}};var lb=function(){this.B=new ya;this.h=new za(this.B)},mb=function(a,b,c){var d=new fb(b,c);d.nc();a.h.set(b,d)},nb=function(a,b,c){kb.hasOwnProperty(b)&&mb(a,c||b,kb[b])};lb.prototype.execute=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.m(c)};lb.prototype.m=function(a){for(var b,c=0;c<arguments.length;c++)b=hb(this.h,arguments[c]);return b};lb.prototype.C=function(a,b){var c=Ba(this.h);c.h=a;for(var d,e=1;e<arguments.length;e++)d=hb(c,arguments[e]);return d};function ob(){for(var a=pb,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qb(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var pb,rb;function sb(a){pb=pb||qb();rb=rb||ob();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,m=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(pb[m],pb[n],pb[p],pb[q])}return b.join("")}
function tb(a){function b(m){for(;d<a.length;){var n=a.charAt(d++),p=rb[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return m}pb=pb||qb();rb=rb||ob();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var ub={},vb=function(a,b){ub[a]=ub[a]||[];ub[a][b]=!0},wb=function(){delete ub.GA4_EVENT},xb=function(a){var b=ub[a];if(!b||0===b.length)return"";for(var c=[],d=0,e=0;e<b.length;e++)0===e%8&&0<e&&(c.push(String.fromCharCode(d)),d=0),b[e]&&(d|=1<<e%8);0<d&&c.push(String.fromCharCode(d));return sb(c.join("")).replace(/\.+$/,"")};var yb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var zb,Ab=function(){if(void 0===zb){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}zb=a}else zb=a}return zb};var Bb=function(a){this.h=a};Bb.prototype.toString=function(){return this.h+""};var Cb=function(a){return a instanceof Bb&&a.constructor===Bb?a.h:"type_error:TrustedResourceUrl"},Db={},Eb=function(a){var b=a,c=Ab(),d=c?c.createScriptURL(b):b;return new Bb(d,Db)};var Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Gb,Hb;a:{for(var Ib=["CLOSURE_FLAGS"],Jb=pa,Kb=0;Kb<Ib.length;Kb++)if(Jb=Jb[Ib[Kb]],null==Jb){Hb=null;break a}Hb=Jb}var Lb=Hb&&Hb[610401301];Gb=null!=Lb?Lb:!1;function Mb(){var a=pa.navigator;if(a){var b=a.userAgent;if(b)return b}return""}var Nb,Ob=pa.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Gb?Nb?Nb.brands.some(function(b){var c=b.brand;return c&&-1!=c.indexOf(a)}):!1:!1}function Qb(a){return-1!=Mb().indexOf(a)};function Rb(){return Gb?!!Nb&&0<Nb.brands.length:!1}function Sb(){return Rb()?!1:Qb("Opera")}function Tb(){return Qb("Firefox")||Qb("FxiOS")}function Ub(){return Rb()?Pb("Chromium"):(Qb("Chrome")||Qb("CriOS"))&&!(Rb()?0:Qb("Edge"))||Qb("Silk")};var Vb={},Wb=function(a){this.h=a};Wb.prototype.toString=function(){return this.h.toString()};var Xb=function(a){return a instanceof Wb&&a.constructor===Wb?a.h:"type_error:SafeHtml"};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Yb={};var Zb=function(){},$b=function(a){this.h=a};oa($b,Zb);$b.prototype.toString=function(){return this.h};function ac(a,b){var c=[new $b(bc[0].toLowerCase(),Yb)];if(0===c.length)throw Error("");var d=c.map(function(f){var g;if(f instanceof $b)g=f.h;else throw Error("");return g}),e=b.toLowerCase();if(d.every(function(f){return 0!==e.indexOf(f)}))throw Error('Attribute "'+b+'" does not match any of the allowed prefixes.');a.setAttribute(b,"true")}function cc(a){var b=a.tagName;if("SCRIPT"===b||"STYLE"===b)throw Error("");};(function(){return""}).toString().indexOf("`");function dc(a){var b=a=ec(a),c=Ab(),d=c?c.createHTML(b):b;return new Wb(d,Vb)}function ec(a){return null===a?"null":void 0===a?"undefined":a};var z=window,H=document,fc=navigator,gc=H.currentScript&&H.currentScript.src,hc=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},kc={onload:1,src:1,width:1,height:1,style:1};function lc(a,b,c){b&&l(b,function(d,e){d=d.toLowerCase();c.hasOwnProperty(d)||a.setAttribute(d,e)})}
var pc=function(a,b,c,d,e){var f=H.createElement("script");lc(f,d,jc);f.type="text/javascript";f.async=!0;var g;g=Eb(ec(a));f.src=Cb(g);var h,m,n,p=null==(n=(m=(f.ownerDocument&&f.ownerDocument.defaultView||window).document).querySelector)?void 0:n.call(m,"script[nonce]");(h=p?p.nonce||p.getAttribute("nonce")||"":"")&&f.setAttribute("nonce",h);ic(f,b);c&&(f.onerror=c);if(e)e.appendChild(f);else{var q=H.getElementsByTagName("script")[0]||H.body||H.head;q.parentNode.insertBefore(f,q)}return f},qc=function(){if(gc){var a=
gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},rc=function(a,b,c,d,e){var f;f=void 0===f?!0:f;var g=e,h=!1;g||(g=H.createElement("iframe"),h=!0);lc(g,c,kc);d&&l(d,function(n,p){g.dataset[n]=p});f&&(g.height="0",g.width="0",g.style.display="none",g.style.visibility="hidden");if(h){var m=H.body&&H.body.lastChild||H.body||H.head;m.parentNode.insertBefore(g,m)}ic(g,b);void 0!==a&&(g.src=a);return g},sc=function(a,b,c,d){var e=new Image(1,1);lc(e,
d,{});e.onload=function(){e.onload=null;b&&b()};e.onerror=function(){e.onerror=null;c&&c()};e.src=a},tc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},uc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){z.setTimeout(a,0)},vc=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},wc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=
b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},xc=function(a){var b=H.createElement("div"),c=b,d=dc("A<div>"+a+"</div>");1===c.nodeType&&cc(c);c.innerHTML=Xb(d);b=b.lastChild;for(var e=[];b.firstChild;)e.push(b.removeChild(b.firstChild));return e},yc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},zc=function(a){var b;
try{b=fc.sendBeacon&&fc.sendBeacon(a)}catch(c){vb("TAGGING",15)}b||sc(a)},Ac=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c},Bc=function(a,b){try{z.fetch(a,b)}catch(c){}},Cc=function(){var a=z.performance;if(a&&Fa(a.now))return a.now()},Dc=function(){return z.performance||void 0};var Ec=function(a,b){return C(this,a)&&C(this,b)},Fc=function(a,b){return C(this,a)===C(this,b)},Gc=function(a,b){return C(this,a)||C(this,b)},Hc=function(a,b){a=C(this,a);b=C(this,b);return-1<String(a).indexOf(String(b))},Ic=function(a,b){a=String(C(this,a));b=String(C(this,b));return a.substring(0,b.length)===b},Jc=function(a,b){a=C(this,a);b=C(this,b);switch(a){case "pageLocation":var c=z.location.href;b instanceof jb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var Lc=function(){this.h=new lb;Kc(this)};Lc.prototype.execute=function(a){return this.h.m(a)};var Kc=function(a){nb(a.h,"map");var b=function(c,d){mb(a.h,c,d)};b("and",Ec);b("contains",Hc);b("equals",Fc);b("or",Gc);b("startsWith",Ic);b("variable",Jc)};var Mc=function(){this.map=new Map};Mc.prototype.set=function(a,b){this.map.set(a,b)};Mc.prototype.get=function(a){return this.map.get(a)};var Nc=function(){this.keys=[];this.values=[]};Nc.prototype.set=function(a,b){this.keys.push(a);this.values.push(b)};Nc.prototype.get=function(a){var b=this.keys.indexOf(a);if(-1<b)return this.values[b]};var Oc=function(a){if(a instanceof Oc)return a;this.Ua=a};Oc.prototype.toString=function(){return String(this.Ua)};var Qc=function(a){ta.call(this);this.h=a;this.set("then",Pc(this));this.set("catch",Pc(this,!0));this.set("finally",Pc(this,!1,!0))};oa(Qc,jb);var Pc=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;return new fb("",function(d,e){b&&(e=d,d=void 0);c&&(e=d);d instanceof fb||(d=void 0);e instanceof fb||(e=void 0);var f=Ba(this.h),g=function(m){return function(n){return c?(m.h(f),a.h):m.h(f,n)}},h=a.h.then(d&&g(d),e&&g(e));return new Qc(h)})};/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Rc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Sc=function(a){if(null==a)return String(a);var b=Rc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Tc=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Uc=function(a){if(!a||"object"!=Sc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Tc(a,"constructor")&&!Tc(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Tc(a,b)},Vc=function(a,b){var c=b||("array"==Sc(a)?[]:{}),d;for(d in a)if(Tc(a,d)){var e=a[d];"array"==Sc(e)?("array"!=Sc(c[d])&&(c[d]=[]),c[d]=Vc(e,c[d])):Uc(e)?(Uc(c[d])||(c[d]={}),c[d]=Vc(e,c[d])):c[d]=e}return c};var Xc=function(a,b,c){var d=Map?new Mc:new Nc,e=function(g,h){for(var m=ua(g,1),n=0;n<m.length;n++)h[m[n]]=f(g.get(m[n]))},f=function(g){var h=d.get(g);if(h)return h;if(g instanceof wa){var m=[];d.set(g,m);for(var n=g.Rb(),p=0;p<n.length();p++)m[n.get(p)]=f(g.get(n.get(p)));return m}if(g instanceof Qc)return g.h;if(g instanceof jb){var q={};d.set(g,q);e(g,q);return q}if(g instanceof fb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Wc(u[v],b,c);var w=
new za(b?b.T:new ya);b&&(w.h=b.h);return f(g.h.apply(g,[w].concat(u)))};d.set(g,r);e(g,r);return r}var t=!1;switch(c){case 1:t=!0;break;case 2:t=!1;break;case 3:t=!1;break;default:}if(g instanceof Oc&&t)return g.Ua;switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},Wc=function(a,b,c){var d=Map?
new Mc:new Nc,e=function(g,h){for(var m in g)g.hasOwnProperty(m)&&h.set(m,f(g[m]))},f=function(g){var h=d.get(g);if(h)return h;if(Ha(g)||Na(g)){var m=new wa([]);d.set(g,m);for(var n in g)g.hasOwnProperty(n)&&m.set(n,f(g[n]));return m}if(Uc(g)){var p=new jb;d.set(g,p);e(g,p);return p}if("function"===typeof g){var q=new fb("",function(x){for(var y=Array.prototype.slice.call(arguments,0),A=0;A<y.length;A++)y[A]=Xc(C(this,y[A]),b,c);return f((0,this.h.N)(g,g,y))});d.set(g,q);e(g,q);return q}var v=typeof g;if(null===g||"string"===v||"number"===v||"boolean"===v)return g;var w=!1;switch(c){case 1:w=!0;break;case 2:w=!1;break;default:}if(void 0!==g&&w)return new Oc(g)};return f(a)};var Yc=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Zc=function(a){if(void 0===a||Ha(a)||Uc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var $c={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof wa)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new wa(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.h(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.h(a,this.get(e),e,this)&&d.push(this.get(e));return new wa(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.h(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.h(a,this.get(e),e,this));return new wa(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.h(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.h(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Yc(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new wa(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.h(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Yc(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.h(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d);return this},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ad={charAt:1,concat:1,indexOf:1,lastIndexOf:1,match:1,replace:1,search:1,slice:1,split:1,substring:1,toLowerCase:1,toLocaleLowerCase:1,toString:1,toUpperCase:1,toLocaleUpperCase:1,trim:1},bd=new ra("break"),cd=new ra("continue"),dd=function(a,b){return C(this,a)+C(this,b)},ed=function(a,b){return C(this,a)&&C(this,b)},fd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);if(!(c instanceof wa))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");var d="number"===typeof a;if("boolean"===typeof a||d){if("toString"===b){if(d&&c.length()){var e=Xc(c.get(0));try{return a.toString(e)}catch(r){}}return a.toString()}throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(ad.hasOwnProperty(b)){var f=2;f=1;var g=Xc(c,void 0,f);return Wc(a[b].apply(a,g),this.h)}throw Error("TypeError: "+
b+" is not a function");}if(a instanceof wa){if(a.has(b)){var h=a.get(b);if(h instanceof fb){var m=Yc(c);m.unshift(this.h);return h.h.apply(h,m)}throw Error("TypeError: "+b+" is not a function");}if(0<=$c.supportedMethods.indexOf(b)){var n=Yc(c);n.unshift(this.h);return $c[b].apply(a,n)}}if(a instanceof fb||a instanceof jb){if(a.has(b)){var p=a.get(b);if(p instanceof fb){var q=Yc(c);q.unshift(this.h);return p.h.apply(p,q)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof
fb?a.T:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Yc(c))}if(a instanceof Oc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},gd=function(a,b){a=C(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.h;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=C(this,b);c.set(a,d);return d},hd=function(a){var b=Ba(this.h),c=ib(b,Array.prototype.slice.apply(arguments));if(c instanceof
ra)return c},id=function(){return bd},jd=function(a){for(var b=C(this,a),c=0;c<b.length;c++){var d=C(this,b[c]);if(d instanceof ra)return d}},kd=function(a){for(var b=this.h,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=C(this,arguments[c+1]);Aa(b,d,e,!0)}}},ld=function(){return cd},md=function(a,b,c){var d=new wa;b=C(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h.add(a,C(this,
f))},nd=function(a,b){return C(this,a)/C(this,b)},od=function(a,b){a=C(this,a);b=C(this,b);var c=a instanceof Oc,d=b instanceof Oc;return c||d?c&&d?a.Ua==b.Ua:!1:a==b},pd=function(a){for(var b,c=0;c<arguments.length;c++)b=C(this,arguments[c]);return b};function qd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ib(f,d);if(g instanceof ra){if("break"===g.h)break;if("return"===g.h)return g}}}
function rd(a,b,c){if("string"===typeof b)return qd(a,function(){return b.length},function(f){return f},c);if(b instanceof jb||b instanceof wa||b instanceof fb){var d=b.Rb(),e=d.length();return qd(a,function(){return e},function(f){return d.get(f)},c)}}
var sd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return rd(function(e){d.set(a,e);return d},b,c)},td=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return rd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},ud=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return rd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},wd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return vd(function(e){d.set(a,e);return d},b,c)},xd=
function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return vd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},yd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return vd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)};
function vd(a,b,c){if("string"===typeof b)return qd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof wa)return qd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var zd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=C(this,a);if(!(f instanceof wa))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.h;d=C(this,d);var h=Ba(g);for(e(g,h);hb(h,b);){var m=ib(h,d);if(m instanceof ra){if("break"===m.h)break;if("return"===m.h)return m}var n=Ba(g);e(h,n);hb(n,c);h=n}},Ad=function(a){a=C(this,a);var b=this.h,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},Bd=function(a,b){var c;a=C(this,a);b=C(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof jb||a instanceof wa||a instanceof fb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof Oc)return;return c},Cd=function(a,b){return C(this,a)>C(this,
b)},Dd=function(a,b){return C(this,a)>=C(this,b)},Ed=function(a,b){a=C(this,a);b=C(this,b);a instanceof Oc&&(a=a.Ua);b instanceof Oc&&(b=b.Ua);return a===b},Fd=function(a,b){return!Ed.call(this,a,b)},Gd=function(a,b,c){var d=[];C(this,a)?d=C(this,b):c&&(d=C(this,c));var e=ib(this.h,d);if(e instanceof ra)return e},Hd=function(a,b){return C(this,a)<C(this,b)},Id=function(a,b){return C(this,a)<=C(this,b)},Jd=function(a,b){return C(this,a)%C(this,b)},Kd=function(a,b){return C(this,a)*C(this,b)},Ld=function(a){return-C(this,
a)},Md=function(a){return!C(this,a)},Nd=function(a,b){return!od.call(this,a,b)},Od=function(){return null},Pd=function(a,b){return C(this,a)||C(this,b)},Qd=function(a,b){var c=C(this,a);C(this,b);return c},Rd=function(a){return C(this,a)},Sd=function(a){return Array.prototype.slice.apply(arguments)},Td=function(a){return new ra("return",C(this,a))},Ud=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
fb||a instanceof wa||a instanceof jb)&&a.set(b,c);return c},Vd=function(a,b){return C(this,a)-C(this,b)},Wd=function(a,b,c){a=C(this,a);var d=C(this,b),e=C(this,c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===C(this,d[h]))if(f=C(this,e[h]),f instanceof ra){var m=f.h;if("break"===m)return;if("return"===m||"continue"===m)return f}else g=!0;if(e.length===d.length+1&&(f=C(this,e[e.length-1]),f instanceof ra&&("return"===f.h||"continue"===
f.h)))return f},Xd=function(a,b,c){return C(this,a)?C(this,b):C(this,c)},Yd=function(a){a=C(this,a);return a instanceof fb?"function":typeof a},Zd=function(a){for(var b=this.h,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},be=function(a,b,c,d){var e=C(this,d);if(C(this,c)){var f=ib(this.h,e);if(f instanceof ra){if("break"===f.h)return;if("return"===f.h)return f}}for(;C(this,a);){var g=ib(this.h,e);if(g instanceof ra){if("break"===g.h)break;if("return"===g.h)return g}C(this,
b)}},ce=function(a){return~Number(C(this,a))},de=function(a,b){return Number(C(this,a))<<Number(C(this,b))},ee=function(a,b){return Number(C(this,a))>>Number(C(this,b))},fe=function(a,b){return Number(C(this,a))>>>Number(C(this,b))},ge=function(a,b){return Number(C(this,a))&Number(C(this,b))},he=function(a,b){return Number(C(this,a))^Number(C(this,b))},ie=function(a,b){return Number(C(this,a))|Number(C(this,b))};var ke=function(){this.h=new lb;je(this)};ke.prototype.execute=function(a){return le(this.h.m(a))};
var me=function(a,b,c){return le(a.h.C(b,c))},je=function(a){var b=function(d,e){nb(a.h,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){mb(a.h,String(d),e)};c(0,dd);c(1,ed);c(2,fd);c(3,gd);c(53,hd);c(4,id);c(5,jd);c(52,kd);c(6,ld);c(9,jd);c(50,md);c(10,nd);c(12,od);c(13,pd);c(47,sd);c(54,td);c(55,ud);c(63,zd);c(64,wd);c(65,xd);c(66,yd);c(15,Ad);c(16,Bd);c(17,Bd);c(18,Cd);c(19,Dd);c(20,Ed);c(21,Fd);c(22,Gd);c(23,Hd);c(24,Id);c(25,Jd);c(26,Kd);c(27,
Ld);c(28,Md);c(29,Nd);c(45,Od);c(30,Pd);c(32,Qd);c(33,Qd);c(34,Rd);c(35,Rd);c(46,Sd);c(36,Td);c(43,Ud);c(37,Vd);c(38,Wd);c(39,Xd);c(40,Yd);c(41,Zd);c(42,be);c(58,ce);c(57,de);c(60,ee);c(61,fe);c(56,ge);c(62,he);c(59,ie)};function le(a){if(a instanceof ra||a instanceof fb||a instanceof wa||a instanceof jb||a instanceof Oc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var ne=function(){var a=function(b){return{toString:function(){return b}}};return{Dj:a("consent"),Oh:a("convert_case_to"),Ph:a("convert_false_to"),Qh:a("convert_null_to"),Rh:a("convert_true_to"),Sh:a("convert_undefined_to"),nm:a("debug_mode_metadata"),Qb:a("function"),Jg:a("instance_name"),kk:a("live_only"),lk:a("malware_disabled"),mk:a("metadata"),qk:a("original_activity_id"),rm:a("original_vendor_template_id"),qm:a("once_on_load"),pk:a("once_per_event"),Ki:a("once_per_load"),vm:a("priority_override"),
wm:a("respected_consent_types"),Oi:a("setup_tags"),ee:a("tag_id"),Ti:a("teardown_tags")}}();var Je;
var Ke=[],Le=[],Me=[],Ne=[],Oe=[],Pe={},Qe,Re,Te=function(){var a=Se;Re=Re||a},Ue,Ve=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},We=function(a,b){var c=a["function"],d=b&&b.event;if(!c)throw Error("Error: No function name given for function call.");var e=Pe[c],f={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e&&d&&d.Yi&&d.Yi(a[g]),f[void 0!==e?g:g.substr(4)]=a[g]);e&&d&&d.Xi&&(f.vtp_gtmCachedValues=d.Xi);if(b){if(null==
b.name){var h;a:{var m=b.index;if(null==m)h="";else{var n;switch(b.type){case 2:n=Ke[m];break;case 1:n=Ne[m];break;default:h="";break a}var p=n&&n[ne.Jg];h=p?String(p):""}}b.name=h}e&&(f.vtp_gtmEntityIndex=b.index,f.vtp_gtmEntityName=b.name)}return void 0!==e?e(f):Je(c,f,b)},Ze=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Xe(a[e],b,c));return d},Xe=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xe(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Ke[f];if(!g||b.gh(g))return;c[f]=!0;var h=String(g[ne.Jg]);try{var m=Ze(g,b,c);m.vtp_gtmEventId=b.id;b.priorityId&&(m.vtp_gtmPriorityId=b.priorityId);d=We(m,{event:b,index:f,type:2,name:h});Ue&&(d=Ue.Bk(d,m))}catch(y){b.jj&&b.jj(y,Number(f),h),d=!1}c[f]=!1;return d;case "map":d={};for(var n=1;n<a.length;n+=2)d[Xe(a[n],b,c)]=Xe(a[n+1],b,c);return d;case "template":d=[];for(var p=!1,q=1;q<a.length;q++){var r=Xe(a[q],b,c);Re&&(p=p||r===Re.nf);
d.push(r)}return Re&&p?Re.Dk(d):d.join("");case "escape":d=Xe(a[1],b,c);if(Re&&Ha(a[1])&&"macro"===a[1][0]&&Re.ml(a))return Re.Jl(d);d=String(d);for(var t=2;t<a.length;t++)oe[a[t]]&&(d=oe[a[t]](d));return d;case "tag":var u=a[1];if(!Ne[u])throw Error("Unable to resolve tag reference "+u+".");return d={dj:a[2],index:u};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var w=$e(v,b,c),x=!!a[4];return x||2!==w?x!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+
a[0]+".");}}return a},$e=function(a,b,c){try{return Qe(Ze(a,b,c))}catch(d){JSON.stringify(a)}return 2};var af=function(a,b,c){var d;d=Error.call(this,c);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.h=a};oa(af,Error);function bf(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)bf(a[c],b[c])}};var cf=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.Fl=a;this.m=b;this.h=[]};oa(cf,Error);var ef=function(){return function(a,b){a instanceof cf||(a=new cf(a,df));b&&a.h.push(b);throw a;}};function df(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var hf=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=ff(a),f=0;f<Le.length;f++){var g=Le[f],h=gf(g,e);if(h){for(var m=g.add||[],n=0;n<m.length;n++)c[m[n]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Ne.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},gf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},ff=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=$e(Me[c],a));return b[c]}};var jf={Bk:function(a,b){b[ne.Oh]&&"string"===typeof a&&(a=1==b[ne.Oh]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ne.Qh)&&null===a&&(a=b[ne.Qh]);b.hasOwnProperty(ne.Sh)&&void 0===a&&(a=b[ne.Sh]);b.hasOwnProperty(ne.Rh)&&!0===a&&(a=b[ne.Rh]);b.hasOwnProperty(ne.Ph)&&!1===a&&(a=b[ne.Ph]);return a}};var kf=function(){this.h={}};function lf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new af(c,d,g);}}function mf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.h[d],f=a.h.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));lf(e,b,d,g);lf(f,b,d,g)}}}};var pf=function(){var a=data.permissions||{},b=K.D,c=this;this.m=new kf;this.h={};var d={},e=mf(this.m,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});l(a,function(f,g){var h={};l(g,function(m,n){var p=nf(m,n);h[m]=p.assert;d[m]||(d[m]=p.X)});c.h[f]=function(m,n){var p=h[m];if(!p)throw of(m,{},"The requested permission "+m+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},rf=function(a){return qf.h[a]||
function(){}};function nf(a,b){var c=Ve(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=of;try{return We(c)}catch(d){return{assert:function(e){throw new af(e,{},"Permission "+e+" is unknown.");},X:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function of(a,b,c){return new af(a,b,c)};var sf=!1;var tf={};tf.mm=Pa('');tf.Fk=Pa('');var uf=sf,vf=tf.Fk,wf=tf.mm;var xf=function(a,b){var c=String(a);return c};
var Cf=function(a){var b={},c=0;l(a,function(e,f){if(null!=f)if(f=xf(f,100),yf.hasOwnProperty(e))b[yf[e]]=zf(f);else if(Af.hasOwnProperty(e)){var g=Af[e],h=zf(f);b.hasOwnProperty(g)||(b[g]=h)}else if("category"===e)for(var m=zf(f).split("/",5),n=0;n<m.length;n++){var p=Bf[n],q=m[n];b.hasOwnProperty(p)||(b[p]=q)}else if(27>c){var r=String.fromCharCode(10>c?48+c:65+c-10);b["k"+r]=zf(xf(e,40));b["v"+r]=zf(f);c++}});var d=[];l(b,function(e,f){d.push(""+e+f)});return d.join("~")},zf=function(a){return(""+
a).replace(/~/g,function(){return"~~"})},yf={item_id:"id",item_name:"nm",item_brand:"br",item_category:"ca",item_category2:"c2",item_category3:"c3",item_category4:"c4",item_category5:"c5",item_variant:"va",price:"pr",quantity:"qt",coupon:"cp",item_list_name:"ln",index:"lp",item_list_id:"li",discount:"ds",affiliation:"af",promotion_id:"pi",promotion_name:"pn",creative_name:"cn",creative_slot:"cs",location_id:"lo"},Af={id:"id",name:"nm",brand:"br",variant:"va",list_name:"ln",list_position:"lp",list:"ln",
position:"lp",creative:"cn"},Bf=["ca","c2","c3","c4","c5"];var Df=function(a){var b=[];l(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(String(d)))});return b.join("&")},Ef=function(a,b,c,d){this.Sa=a.Sa;this.vc=a.vc;this.Yg=a.Yg;this.m=b;this.C=c;this.B=Df(a.Sa);this.h=Df(a.Yg);this.N=this.h.length;if(d&&16384<this.N)throw Error("EVENT_TOO_LARGE");};var Ff=function(){this.events=[];this.h=this.Sa="";this.B=0;this.m=!1};Ff.prototype.add=function(a){return this.C(a)?(this.events.push(a),this.Sa=a.B,this.h=a.m,this.B+=a.N,this.m=a.C,!0):!1};Ff.prototype.C=function(a){var b=20>this.events.length&&16384>a.N+this.B,c=this.Sa===a.B&&this.h===a.m&&this.m===a.C;return 0==this.events.length||b&&c};
var Gf=function(a,b){l(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))})},Hf=function(a,b){var c=[];a.B&&c.push(a.B);b&&c.push("_s="+b);Gf(a.vc,c);var d=!1;a.h&&(c.push(a.h),d=!0);var e=c.join("&"),f="",g=e.length+a.m.length+1;d&&2048<g&&(f=c.pop(),e=c.join("&"));return{uh:e,body:f}},If=function(a,b){var c=a.events;if(1==c.length)return Hf(c[0],b);var d=[];a.Sa&&d.push(a.Sa);for(var e={},f=0;f<c.length;f++)l(c[f].vc,function(t,u){null!=u&&(e[t]=e[t]||{},e[t][String(u)]=
e[t][String(u)]+1||1)});var g={};l(e,function(t,u){var v,w=-1,x=0;l(u,function(y,A){x+=A;var B=(y.length+t.length+2)*(A-1);B>w&&(v=y,w=B)});x==c.length&&(g[t]=v)});Gf(g,d);b&&d.push("_s="+b);for(var h=d.join("&"),m=[],n={},p=0;p<c.length;n={Le:n.Le},p++){var q=[];n.Le={};l(c[p].vc,function(t){return function(u,v){g[u]!=""+v&&(t.Le[u]=v)}}(n));c[p].h&&q.push(c[p].h);Gf(n.Le,q);m.push(q.join("&"))}var r=m.join("\r\n");return{uh:h,body:r}};var Mf=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];function Nf(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c}var Of=new La;function Pf(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Of.get(e);f||(f=new RegExp(b,d),Of.set(e,f));return f.test(a)}catch(g){return!1}}function Qf(a,b){return 0<=String(a).indexOf(String(b))}function Rf(a,b){return String(a)===String(b)}
function Sf(a,b){return Number(a)>=Number(b)}function Tf(a,b){return Number(a)<=Number(b)}function Uf(a,b){return Number(a)>Number(b)}function Vf(a,b){return Number(a)<Number(b)}function Wf(a,b){return 0===String(a).indexOf(String(b))};var cg=/^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;function dg(a,b){return"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a<<2|b]};var eg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,fg={Fn:"function",DustMap:"Object",List:"Array"},L=function(a,b,c){for(var d=0;d<b.length;d++){var e=eg.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],m=c[d];if(null==m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof m;m instanceof fb?n="Fn":m instanceof wa?n="List":m instanceof jb?n="DustMap":m instanceof Oc&&(n="OpaqueValue");
if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+(fg[n]||n)+", which does not match required type "+(fg[h]||h)+".");}}};function gg(a){return""+a}
function jg(a,b){var c=[];return c};var kg=function(a,b){var c=new fb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=C(this,d[e]);return b.apply(this,d)});c.nc();return c},lg=function(a,b){var c=new jb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,kg(a+"_"+d,e)):Uc(e)?c.set(d,lg(a+"_"+d,e)):(Ga(e)||k(e)||"boolean"===typeof e)&&c.set(d,e)}c.nc();
return c};var mg=function(a,b){L(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new jb;return d=lg("AssertApiSubject",c)};var ng=function(a,b){L(F(this),["actual:?*","message:?string"],arguments);if(a instanceof Qc)throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");var c={},d=new jb;return d=lg("AssertThatSubject",c)};function og(a){return function(){for(var b=[],c=this.h,d=0;d<arguments.length;++d)b.push(Xc(arguments[d],c));return Wc(a.apply(null,b))}}var qg=function(){for(var a=Math,b=pg,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=og(a[e].bind(a)))}return c};function rg(a,b){var c=null;L(F(this),["pattern:!string","flags:?string"],arguments);try{var d=(b||"").split("").filter(function(e){return"ig".includes(e)}).join("");c=new Oc(new RegExp(a,d))}catch(e){}return c}rg.M="internal.createRegExp";var sg=function(a){var b;return b};var tg=function(a){var b;return b};var ug=function(a){return encodeURI(a)};var vg=function(a){return encodeURIComponent(a)};function wg(a,b){var c=!1;L(F(this),["booleanExpression:!string","context:?DustMap"],arguments);var d=JSON.parse(a);if(!d)throw Error("Invalid boolean expression string was given.");var e=b?Xc(b):{};c=xg(d,e);return c}
var yg=function(a,b){for(var c=0;c<b.length;c++){if(void 0===a)return;a=a[b[c]]}return a},zg=function(a,b){var c=b.preHit;if(c){var d=a[0];switch(d){case "hitData":return 2>a.length?void 0:yg(c.getHitData(a[1]),a.slice(2));case "metadata":return 2>a.length?void 0:yg(c.getMetadata(a[1]),a.slice(2));case "eventName":return c.getEventName();case "destinationId":return c.getDestinationId();default:throw Error(d+" is not a valid field that can be accessed\n                      from PreHit data.");}}},
Ag=function(a,b){if(a){if(void 0!==a.contextValue){var c;a:{var d=a.contextValue,e=d.keyParts;if(e&&0!==e.length){var f=d.namespaceType;switch(f){case 1:c=zg(e,b);break a;case 2:var g=b.macro;c=g?g[e[0]]:void 0;break a;default:throw Error("Unknown Namespace Type used: "+f);}}c=void 0}return c}if(void 0!==a.booleanExpressionValue)return xg(a.booleanExpressionValue,b);if(void 0!==a.booleanValue)return!!a.booleanValue;if(void 0!==a.stringValue)return String(a.stringValue);if(void 0!==a.integerValue)return Number(a.integerValue);
if(void 0!==a.doubleValue)return Number(a.doubleValue);throw Error("Unknown field used for variable of type ExpressionValue:"+a);}},xg=function(a,b){var c=a.args;if(!Ha(c)||0===c.length)throw Error('Invalid boolean expression format. Expected "args":'+c+" property to\n         be non-empty array.");var d=function(g){return Ag(g,b)};switch(a.type){case 1:for(var e=0;e<c.length;e++)if(d(c[e]))return!0;return!1;case 2:for(var f=0;f<c.length;f++)if(!d(c[f]))return!1;return 0<c.length;case 3:return!d(c[0]);
case 4:return Pf(d(c[0]),d(c[1]),!1);case 5:return Rf(d(c[0]),d(c[1]));case 6:return Wf(d(c[0]),d(c[1]));case 7:return Nf(d(c[0]),d(c[1]));case 8:return Qf(d(c[0]),d(c[1]));case 9:return Vf(d(c[0]),d(c[1]));case 10:return Tf(d(c[0]),d(c[1]));case 11:return Uf(d(c[0]),d(c[1]));case 12:return Sf(d(c[0]),d(c[1]));default:throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');}};
wg.M="internal.evaluateBooleanExpression";var Bg=function(a){L(F(this),["message:?string"],arguments);};var Cg=function(a,b){L(F(this),["min:!number","max:!number"],arguments);return Ja(a,b)};var M=function(a,b,c){var d=a.h.h;if(!d)throw Error("Missing program state.");d.zk.apply(null,Array.prototype.slice.call(arguments,1))};var Dg=function(){M(this,"read_container_data");var a=new jb;a.set("containerId",'G-6ZT8F1MF6V');a.set("version",'1');a.set("environmentName",'');a.set("debugMode",uf);a.set("previewMode",wf);a.set("environmentMode",vf);a.nc();return a};var Eg=function(){return(new Date).getTime()};var Fg=function(a){if(null===a)return"null";if(a instanceof wa)return"array";if(a instanceof fb)return"function";if(a instanceof Oc){a=a.Ua;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Gg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(uf||wf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Wc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Xc(c))})}};var Hg=function(a){return Oa(Xc(a,this.h))};var Ig=function(a){return Number(Xc(a,this.h))};var Jg=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Kg=function(a,b,c){var d=null,e=!1;return e?d:null};var pg="floor ceil round max min abs pow sqrt".split(" ");var Lg=function(){var a={};return{Qk:function(b){return a.hasOwnProperty(b)?a[b]:void 0},bm:function(b,c){a[b]=c},reset:function(){a={}}}},Mg=function(a,b){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(b);return fb.prototype.h.apply(a,c)}},Ng=function(a,b){L(F(this),["apiName:!string","mock:?*"],arguments);};var Og={};
Og.keys=function(a){return new wa};
Og.values=function(a){return new wa};
Og.entries=function(a){return new wa};
Og.freeze=function(a){return a};Og.delete=function(a,b){return!1};var Qg=function(){this.h={};this.m={};};Qg.prototype.get=function(a,b){var c=this.h.hasOwnProperty(a)?this.h[a]:void 0;return c};
Qg.prototype.add=function(a,b,c){if(this.h.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.m.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.h[a]=c?void 0:Fa(b)?kg(a,b):lg(a,b)};
var Sg=function(a,b,c){if(a.m.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.h.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.m[b]=Fa(c)?kg(b,c):lg(b,c)};function Rg(a,b){var c=void 0;return c};function Tg(){var a={};return a};function Ug(a,b){var c=!1;return c}Ug.M="internal.testRegExp";var Wg=function(a){return Vg?H.querySelectorAll(a):null},Xg=function(a,b){if(!Vg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Yg=!1;if(H.querySelectorAll)try{var Zg=H.querySelectorAll(":root");Zg&&1==Zg.length&&Zg[0]==H.documentElement&&(Yg=!0)}catch(a){}var Vg=Yg;var O=function(a){vb("GTM",a)};
var $g=function(a){return null==a?"":k(a)?Ra(String(a)):"e0"},bh=function(a){return a.replace(ah,"")},dh=function(a){return ch(a.replace(/\s/g,""))},ch=function(a){return Ra(a.replace(eh,"").toLowerCase())},gh=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return fh.test(a)?a:"e0"},ih=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=c.replace(/\./g,""));c=c+"@"+b[1];if(hh.test(c))return c}return"e0"},lh=function(a,
b){window.Promise||b([]);Promise.all(a.map(function(c){return c.value&&-1!==jh.indexOf(c.name)?kh(c.value).then(function(d){c.value=d}):Promise.resolve()})).then(function(){b(a)}).catch(function(){b([])})},kh=function(a){if(""===a||"e0"===a)return Promise.resolve(a);if(z.crypto&&z.crypto.subtle){if(mh.test(a))return Promise.resolve(a);try{var b=nh(a);return z.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");
return z.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}}else return Promise.resolve("e1")},nh=function(a){var b;if(z.TextEncoder)b=(new TextEncoder("utf-8")).encode(a);else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|
e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},eh=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,hh=/^\S+@\S+\.\S+$/,fh=/^\+\d{10,15}$/,ah=/[.~]/g,oh=/^[0-9A-Za-z_-]{43}$/,mh=/^[0-9A-Fa-f]{64}$/,ph={},qh=(ph.email="em",ph.phone_number="pn",ph.first_name="fn",ph.last_name="ln",ph.street="sa",ph.city="ct",ph.region="rg",ph.country="co",ph.postal_code="pc",ph.error_code="ec",ph),rh={},sh=(rh.email="sha256_email_address",rh.phone_number="sha256_phone_number",rh.first_name="sha256_first_name",rh.last_name=
"sha256_last_name",rh.street="sha256_street",rh),th=function(a,b){function c(t,u,v,w){var x=$g(t);""!==x&&(mh.test(x)?m.push({name:u,value:x,index:w}):m.push({name:u,value:v(x),index:w}))}function d(t,u){var v=t;if(k(v)||Ha(v)){v=Ha(t)?t:[t];for(var w=0;w<v.length;++w){var x=$g(v[w]),y=mh.test(x);u&&!y&&O(89);!u&&y&&O(88)}}}function e(t,u){var v=t[u];d(v,!1);var w=sh[u];t.hasOwnProperty(w)&&(t.hasOwnProperty(u)&&O(90),v=t[w],d(v,!0));return v}function f(t,u,v){var w=e(t,u);w=Ha(w)?w:[w];for(var x=
0;x<w.length;++x)c(w[x],u,v)}function g(t,u,v,w){var x=e(t,u);c(x,u,v,w)}function h(t){return function(u){O(64);return t(u)}}var m=[];if("https:"===z.location.protocol){f(a,"email",ih);f(a,"phone_number",gh);f(a,"first_name",h(dh));f(a,"last_name",h(dh));var n=a.home_address||{};f(n,"street",h(ch));f(n,"city",h(ch));f(n,"postal_code",h(bh));f(n,"region",h(ch));f(n,"country",h(bh));var p=a.address||{};p=Ha(p)?p:[p];for(var q=0;q<p.length;q++){var r=p[q];g(r,"first_name",dh,q);g(r,"last_name",dh,q);
g(r,"street",ch,q);g(r,"city",ch,q);g(r,"postal_code",bh,q);g(r,"region",ch,q);g(r,"country",bh,q)}lh(m,b)}else m.push({name:"error_code",value:"e3",index:void 0}),b(m)},uh=function(a,b){th(a,function(c){for(var d=["tv.1"],e=0,f=0;f<c.length;++f){var g=c[f].name,h=c[f].value,m=c[f].index,n=qh[g];n&&h&&(-1===jh.indexOf(g)||/^e\d+$/.test(h)||oh.test(h)||mh.test(h))&&(void 0!==m&&(n+=m),d.push(n+"."+h),e++)}1===c.length&&"error_code"===c[0].name&&(e=0);b(encodeURIComponent(d.join("~")),e)})},vh=function(a){if(z.Promise)try{return new Promise(function(b){uh(a,
function(c,d){b({Jf:c,Il:d})})})}catch(b){}},jh=Object.freeze(["email","phone_number","first_name","last_name","street"]);var P={g:{Jh:"ad_data_sharing",I:"ad_storage",Kh:"ad_user_data",U:"analytics_storage",Ka:"region",md:"consent_updated",Oe:"wait_for_update",Hj:"ads",Uf:"all",Ij:"play",Jj:"search",Kj:"youtube",Th:"app_remove",Uh:"app_store_refund",Vh:"app_store_subscription_cancel",Wh:"app_store_subscription_convert",Xh:"app_store_subscription_renew",Wf:"add_payment_info",Xf:"add_shipping_info",Ac:"add_to_cart",Bc:"remove_from_cart",Yf:"view_cart",Vb:"begin_checkout",Cc:"select_item",Hb:"view_item_list",Wb:"select_promotion",
Ib:"view_promotion",La:"purchase",Dc:"refund",Ma:"view_item",Zf:"add_to_wishlist",Lj:"exception",Yh:"first_open",Zh:"first_visit",ra:"gtag.config",Ga:"gtag.get",ai:"in_app_purchase",Xb:"page_view",Mj:"screen_view",bi:"session_start",Nj:"timing_complete",Oj:"track_social",od:"user_engagement",qb:"gclid",la:"ads_data_redaction",aa:"allow_ad_personalization_signals",pd:"allow_custom_scripts",ag:"allow_display_features",rd:"allow_enhanced_conversions",rb:"allow_google_signals",Ca:"allow_interest_groups",
Pj:"app_id",Qj:"app_installer_id",Rj:"app_name",Sj:"app_version",Yb:"auid",di:"auto_detection_enabled",Jb:"aw_remarketing",Qe:"aw_remarketing_only",sd:"discount",ud:"aw_feed_country",vd:"aw_feed_language",ca:"items",wd:"aw_merchant_id",cg:"aw_basket_type",Ec:"campaign_content",Fc:"campaign_id",Gc:"campaign_medium",Hc:"campaign_name",Ic:"campaign",Jc:"campaign_source",Kc:"campaign_term",Ya:"client_id",ei:"content_group",fi:"content_type",Ha:"conversion_cookie_prefix",Lc:"conversion_id",wa:"conversion_linker",
Kb:"conversion_api",Na:"cookie_domain",Da:"cookie_expires",Oa:"cookie_flags",Zb:"cookie_name",Mc:"cookie_path",Ia:"cookie_prefix",ab:"cookie_update",sb:"country",sa:"currency",xd:"customer_lifetime_value",ac:"custom_map",gi:"gcldc",hi:"debug_mode",ba:"developer_id",ii:"disable_merchant_reported_purchases",bc:"dc_custom_params",dg:"dc_natural_search",Re:"dynamic_event_settings",eg:"affiliation",Se:"checkout_option",Te:"checkout_step",fg:"coupon",yd:"item_list_name",Ue:"list_name",ji:"promotions",Nc:"shipping",
Ve:"tax",zd:"engagement_time_msec",Oc:"enhanced_client_id",Pc:"enhanced_conversions",gg:"enhanced_conversions_automatic_settings",Ad:"estimated_delivery_date",We:"euid_logged_in_state",fc:"event_callback",Tj:"event_category",tb:"event_developer_id_string",Uj:"event_label",hg:"event",Bd:"event_settings",Cd:"event_timeout",Vj:"description",Wj:"fatal",ki:"experiments",Xe:"firebase_id",Dd:"first_party_collection",Ed:"_x_20",Lb:"_x_19",ig:"fledge",jg:"flight_error_code",kg:"flight_error_message",li:"fl_activity_category",
mi:"fl_activity_group",lg:"fl_advertiser_id",ni:"fl_ar_dedupe",oi:"fl_random_number",ri:"tran",si:"u",Fd:"gac_gclid",hc:"gac_wbraid",mg:"gac_wbraid_multiple_conversions",Ye:"ga_restrict_domain",Ze:"ga_temp_client_id",Gd:"gdpr_applies",ng:"geo_granularity",cb:"value_callback",Pa:"value_key",Xj:"google_ono",eb:"google_signals",Hd:"google_tld",Id:"groups",og:"gsa_experiment_id",pg:"iframe_state",Jd:"ignore_referrer",af:"internal_traffic_results",ic:"is_legacy_converted",fb:"is_legacy_loaded",Kd:"is_passthrough",
xa:"language",bf:"legacy_developer_id_string",ya:"linker",jc:"accept_incoming",vb:"decorate_forms",V:"domains",Mb:"url_position",qg:"method",Yj:"name",Qc:"new_customer",rg:"non_interaction",ui:"optimize_id",Zj:"page_encoding",cf:"page_hostname",Nb:"page_path",Ea:"page_referrer",wb:"page_title",sg:"passengers",ug:"phone_conversion_callback",vi:"phone_conversion_country_code",vg:"phone_conversion_css_class",wi:"phone_conversion_ids",wg:"phone_conversion_number",xg:"phone_conversion_options",kc:"quantity",
Rc:"redact_device_info",df:"redact_enhanced_user_id",xi:"redact_ga_client_id",yi:"redact_user_id",Ld:"referral_exclusion_definition",Ob:"restricted_data_processing",zi:"retoken",bk:"sample_rate",ef:"screen_name",xb:"screen_resolution",Ai:"search_term",Qa:"send_page_view",Pb:"send_to",Sc:"session_duration",Md:"session_engaged",ff:"session_engaged_time",hb:"session_id",Nd:"session_number",Tc:"delivery_postal_code",yg:"temporary_client_id",hf:"topmost_url",Bi:"tracking_id",jf:"traffic_type",ma:"transaction_id",
za:"transport_url",zg:"trip_type",Uc:"update",ib:"url_passthrough",Pd:"_user_agent_architecture",Qd:"_user_agent_bitness",Rd:"_user_agent_full_version_list",Sd:"_user_agent_mobile",Td:"_user_agent_model",Ud:"_user_agent_platform",Vd:"_user_agent_platform_version",Wd:"_user_agent_wow64",na:"user_data",Ag:"user_data_auto_latency",Bg:"user_data_auto_meta",Cg:"user_data_auto_multi",Dg:"user_data_auto_selectors",Eg:"user_data_auto_status",kf:"user_data_mode",lf:"user_data_settings",Aa:"user_id",Ra:"user_properties",
Fg:"us_privacy_string",fa:"value",mc:"wbraid",Gg:"wbraid_multiple_conversions",Hi:"_host_name",Ii:"_in_page_command",Ji:"_is_passthrough_cid",qf:"non_personalized_ads",ce:"_sst_parameters",Za:"conversion_label",ja:"page_location",ub:"global_developer_id_string",Od:"tc_privacy_string"}},wh={},xh=Object.freeze((wh[P.g.aa]=1,wh[P.g.rd]=1,wh[P.g.rb]=1,wh[P.g.ca]=1,wh[P.g.Na]=1,wh[P.g.Da]=1,wh[P.g.Oa]=1,wh[P.g.Zb]=1,wh[P.g.Mc]=1,wh[P.g.Ia]=1,wh[P.g.ab]=1,wh[P.g.ac]=1,wh[P.g.ba]=1,wh[P.g.Re]=1,wh[P.g.fc]=
1,wh[P.g.Bd]=1,wh[P.g.Cd]=1,wh[P.g.Dd]=1,wh[P.g.Ye]=1,wh[P.g.eb]=1,wh[P.g.Hd]=1,wh[P.g.Id]=1,wh[P.g.af]=1,wh[P.g.ic]=1,wh[P.g.fb]=1,wh[P.g.ya]=1,wh[P.g.df]=1,wh[P.g.Ld]=1,wh[P.g.Ob]=1,wh[P.g.Qa]=1,wh[P.g.Pb]=1,wh[P.g.Sc]=1,wh[P.g.ff]=1,wh[P.g.Tc]=1,wh[P.g.za]=1,wh[P.g.Uc]=1,wh[P.g.lf]=1,wh[P.g.Ra]=1,wh[P.g.ce]=1,wh));Object.freeze([P.g.ja,P.g.Ea,P.g.wb,P.g.xa,P.g.ef,P.g.Aa,P.g.Xe,P.g.ei]);
var yh={},zh=Object.freeze((yh[P.g.Th]=1,yh[P.g.Uh]=1,yh[P.g.Vh]=1,yh[P.g.Wh]=1,yh[P.g.Xh]=1,yh[P.g.Yh]=1,yh[P.g.Zh]=1,yh[P.g.ai]=1,yh[P.g.bi]=1,yh[P.g.od]=1,yh)),Ah={},Bh=Object.freeze((Ah[P.g.Wf]=1,Ah[P.g.Xf]=1,Ah[P.g.Ac]=1,Ah[P.g.Bc]=1,Ah[P.g.Yf]=1,Ah[P.g.Vb]=1,Ah[P.g.Cc]=1,Ah[P.g.Hb]=1,Ah[P.g.Wb]=1,Ah[P.g.Ib]=1,Ah[P.g.La]=1,Ah[P.g.Dc]=1,Ah[P.g.Ma]=1,Ah[P.g.Zf]=1,Ah)),Ch=Object.freeze([P.g.aa,P.g.rb,P.g.ab]),Dh=Object.freeze([].concat(Ch)),Eh=Object.freeze([P.g.Da,P.g.Cd,P.g.Sc,P.g.ff,P.g.zd]),
Fh=Object.freeze([].concat(Eh)),Gh={},Hh=(Gh[P.g.I]="1",Gh[P.g.U]="2",Gh),Ih={},Jh=Object.freeze((Ih[P.g.aa]=1,Ih[P.g.rd]=1,Ih[P.g.Ca]=1,Ih[P.g.Jb]=1,Ih[P.g.Qe]=1,Ih[P.g.sd]=1,Ih[P.g.ud]=1,Ih[P.g.vd]=1,Ih[P.g.ca]=1,Ih[P.g.wd]=1,Ih[P.g.Ha]=1,Ih[P.g.wa]=1,Ih[P.g.Na]=1,Ih[P.g.Da]=1,Ih[P.g.Oa]=1,Ih[P.g.Ia]=1,Ih[P.g.sa]=1,Ih[P.g.xd]=1,Ih[P.g.ba]=1,Ih[P.g.ii]=1,Ih[P.g.Pc]=1,Ih[P.g.Ad]=1,Ih[P.g.Xe]=1,Ih[P.g.Dd]=1,Ih[P.g.fb]=1,Ih[P.g.xa]=1,Ih[P.g.Qc]=1,Ih[P.g.ja]=1,Ih[P.g.Ea]=1,Ih[P.g.ug]=1,Ih[P.g.vg]=1,
Ih[P.g.wg]=1,Ih[P.g.xg]=1,Ih[P.g.Ob]=1,Ih[P.g.Qa]=1,Ih[P.g.Pb]=1,Ih[P.g.Tc]=1,Ih[P.g.ma]=1,Ih[P.g.za]=1,Ih[P.g.Uc]=1,Ih[P.g.ib]=1,Ih[P.g.na]=1,Ih[P.g.Aa]=1,Ih[P.g.fa]=1,Ih));Object.freeze(P.g);var Kh={},Lh=z.google_tag_manager=z.google_tag_manager||{},Mh=Math.random();Kh.Lg="3510";Kh.be=Number("2")||0;Kh.ka="dataLayer";Kh.Fj="ChEI8Ma9ogYQzK6rvLfy+oqrARIlAAkZojyUrAxCN8WVqLGyzh9WSEQyq9GLDJK8izYbUtZc1P9jXhoCMvg\x3d";var Nh={__cl:1,__ecl:1,__ehl:1,__evl:1,__fal:1,__fil:1,__fsl:1,__hl:1,__jel:1,__lcl:1,__sdl:1,__tl:1,__ytl:1},Oh={__paused:1,__tg:1},Ph;for(Ph in Nh)Nh.hasOwnProperty(Ph)&&(Oh[Ph]=1);var Qh=Pa("true"),Rh,Sh=!1;Sh=!0;
Rh=Sh;var Th,Uh=!1;Th=Uh;var Vh,Wh=!1;Vh=Wh;var Xh,Yh=!1;Xh=Yh;Kh.Pe="www.googletagmanager.com";
var Zh=""+Kh.Pe+(Rh?"/gtag/js":"/gtm.js"),$h=null,ai=null,bi={},ci={},li={},mi=function(){var a=Lh.sequence||1;Lh.sequence=a+1;return a};Kh.Ej="true";var ni="";Kh.vf=ni;var oi=new La,pi={},qi={},ti={name:Kh.ka,set:function(a,b){Vc(bb(a,b),pi);ri()},get:function(a){return si(a,2)},reset:function(){oi=new La;pi={};ri()}},si=function(a,b){return 2!=b?oi.get(a):ui(a)},ui=function(a,b){var c=a.split(".");b=b||[];for(var d=pi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==b.indexOf(d))return}return d},vi=function(a,b){qi.hasOwnProperty(a)||(oi.set(a,b),Vc(bb(a,b),pi),ri())},wi=function(){for(var a=["gtm.allowlist","gtm.blocklist","gtm.whitelist",
"gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=si(c,1);if(Ha(d)||Uc(d))d=Vc(d);qi[c]=d}},ri=function(a){l(qi,function(b,c){oi.set(b,c);Vc(bb(b),pi);Vc(bb(b,c),pi);a&&delete qi[b]})},xi=function(a,b){var c,d=1!==(void 0===b?2:b)?ui(a):oi.get(a);"array"===Sc(d)||"object"===Sc(d)?c=Vc(d):c=d;return c};var yi=[],zi=function(a){return void 0==yi[a]?!1:yi[a]};var Ai=[];Ai[7]=!0;Ai[9]=!0;Ai[27]=!0;
Ai[11]=!0;Ai[13]=!0;Ai[15]=!0;
Ai[16]=!0;Ai[25]=!0;
Ai[34]=!0;Ai[36]=!0;
Ai[38]=!0;Ai[82]=!0;Ai[43]=!0;
Ai[52]=!0;Ai[57]=!0;Ai[59]=!0;
Ai[61]=!0;Ai[67]=!0;Ai[68]=!0;
Ai[69]=!0;Ai[72]=!0;Ai[75]=!0;yi[2]=!0;
Ai[76]=!0;Ai[77]=!0;Ai[79]=!0;
Ai[80]=!0;Ai[83]=!0;
Ai[87]=!0;Ai[88]=!0;Ai[89]=!0;
Ai[92]=!0;Ai[93]=!0;Ai[94]=!0;Ai[96]=!0;
Ai[97]=!0;

var T=function(a){return!!Ai[a]};var Ci=Bi();function Bi(){if(!T(87))return{};try{return JSON.parse(tb("eyIwIjoiVVMiLCIxIjoiVVMtQ0EiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))}catch(a){return O(123),vb("HEALTH",2),{}}}
var Di={Ck:"US",Nl:"US-CA",il:"true",Lk:""},Ei=function(){return T(87)?Ci["0"]||"":Di.Ck},Fi=function(){return T(87)?Ci["1"]||"":Di.Nl},Gi=function(){var a="";a=T(87)?Ci["4"]||"":Di.Lk;return a},Hi=function(){var a=!1;a=T(87)?!!Ci["5"]:"true"===Di.il;return a};var Ii,Ji=!1;function Ki(){Ji=!0;Ii=Ii||{}}var Li=function(a){Ji||Ki();return Ii[a]};var Mi=function(){var a=z.screen;return{width:a?a.width:0,height:a?a.height:0}},Ni=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!z.getComputedStyle)return!0;var c=z.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Oi=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Pi=function(a){var b=Oi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Qi=[],Ri=!(!z.IntersectionObserver||!z.IntersectionObserverEntry),Si=function(a,b,c){for(var d=new z.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Qi.length;f++)if(!Qi[f])return Qi[f]=d,f;return Qi.push(d)-1},Ti=function(a,b,c){function d(h,m){var n={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:m,intersectionRect:n,isIntersecting:0<m,rootBounds:n,target:h,time:Ta()};I(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,m){return h-m});return function(){for(var h=0;h<b.length;h++){var m=Pi(b[h]);if(m>e[h])for(;f[h]<c.length-1&&m>=c[f[h]+1];)d(b[h],m),f[h]++;else if(m<e[h])for(;0<=f[h]&&m<=c[f[h]];)d(b[h],m),f[h]--;e[h]=m}}},Ui=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ri){var e=!1;I(function(){e||
Ti(a,b,c)()});return Si(function(f){e=!0;for(var g={fd:0};g.fd<f.length;g={fd:g.fd},g.fd++)I(function(h){return function(){return a(f[h.fd])}}(g))},b,c)}return z.setInterval(Ti(a,b,c),1E3)},Vi=function(a){Ri?0<=a&&a<Qi.length&&Qi[a]&&(Qi[a].disconnect(),Qi[a]=void 0):z.clearInterval(a)};var Wi=/:[0-9]+$/,Xi=/^\d+\.fls\.doubleclick\.net$/,Yi=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var m=h.slice(1).join("=");if(!c)return d?m:decodeURIComponent(m).replace(/\+/g," ");e.push(d?m:decodeURIComponent(m).replace(/\+/g," "))}}return c?e:void 0},aj=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Zi(a.protocol)||Zi(z.location.protocol);"port"===b?a.port=
String(Number(a.hostname?a.port:z.location.port)||("http"===a.protocol?80:"https"===a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||z.location.hostname).replace(Wi,"").toLowerCase());return $i(a,b,c,d,e)},$i=function(a,b,c,d,e){var f,g=Zi(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=bj(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Wi,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=
String(Number(a.port)||("http"===g?80:"https"===g?443:""));break;case "path":a.pathname||a.hostname||vb("TAGGING",1);f="/"===a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=(d||[]).indexOf(m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Yi(f,e,!1));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},
Zi=function(a){return a?a.replace(":","").toLowerCase():""},bj=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},cj=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||vb("TAGGING",1),c="/"+c);var d=b.hostname.replace(Wi,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},dj=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:
p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!==p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=cj(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var m=""+f+g+h;"/"===m[m.length-1]&&(m=m.substring(0,m.length-1));return m},ej=function(a){var b=cj(z.location.href),c=aj(b,"host",!1);if(c&&c.match(Xi)){var d=aj(b,
"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}};
var gj=function(a,b,c){if(a){var d=a.element,e={ob:a.ob,tagName:d.tagName,type:1};b&&(e.querySelector=fj(d));c&&(e.isVisible=!Ni(d));return e}},jj=function(a){if(0!=a.length){var b;b=hj(a,function(c){return!ij.test(c.ob)});b=hj(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=hj(b,function(c){return!Ni(c.element)});return b[0]}},hj=function(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c},fj=function(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;
else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=fj(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b},kj=!0,lj=!1;
var mj=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,nj=/@(gmail|googlemail)\./i,ij=/support|noreply/i,oj="SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),pj=["BR"],qj={},rj=function(a){a=a||{ad:!0,bd:!0};a.yb=a.yb||{email:!0,phone:!0,address:!0};var b,c=a,d=!!c.ad+"."+!!c.bd;c&&c.ke&&c.ke.length&&(d+="."+c.ke.join("."));c&&c.yb&&(d+="."+c.yb.email+"."+c.yb.phone+"."+c.yb.address);b=d;var e=qj[b];if(e&&200>Ta()-e.timestamp)return e.result;var f;var g=[],h=H.body;if(h){for(var m=h.querySelectorAll("*"),
n=0;n<m.length&&1E4>n;n++){var p=m[n];if(!(0<=oj.indexOf(p.tagName.toUpperCase()))&&p.children instanceof HTMLCollection){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=pj.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<m.length?"2":"1"}}else f={elements:g,status:"4"};var t=f,u=t.status,v=[],w;if(a.yb&&a.yb.email){for(var x=t.elements,y=[],A=0;A<x.length;A++){var B=x[A],D=B.textContent;"INPUT"===B.tagName.toUpperCase()&&B.value&&(D=B.value);
if(D){var E=D.match(mj);if(E){var J=E[0],G;if(z.location){var N=$i(z.location,"host",!0);G=0<=J.toLowerCase().indexOf(N)}else G=!1;G||y.push({element:B,ob:J})}}}var Q=a&&a.ke;if(Q&&0!==Q.length){for(var da=[],na=0;na<y.length;na++){for(var X=!0,R=0;R<Q.length;R++){var ia=Q[R];if(ia&&Xg(y[na].element,ia)){X=!1;break}}X&&da.push(y[na])}v=da}else v=y;w=jj(v);10<y.length&&(u="3")}var ja=[];!a.sj&&w&&(v=[w]);for(var S=0;S<v.length;S++)ja.push(gj(v[S],a.ad,a.bd));var Ea={elements:ja.slice(0,10),wh:gj(w,
a.ad,a.bd),status:u};qj[b]={timestamp:Ta(),result:Ea};return Ea},sj=function(a){return a.tagName+":"+a.isVisible+":"+a.ob.length+":"+nj.test(a.ob)};
var tj=function(a,b,c){if(!c)return!1;var d=c.selector_type,e=String(c.value),f;if("js_variable"===d){e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,"");for(var g=e.split(","),h=0;h<g.length;h++){var m=g[h].trim();if(m){if(0===m.indexOf("dataLayer."))f=si(m.substring(10));else{var n=m.split(".");f=z[n.shift()];for(var p=0;p<n.length;p++)f=f&&f[n[p]]}if(void 0!==f)break}}}else if("css_selector"===d&&Vg){var q=Wg(e);if(q&&0<q.length){f=[];for(var r=0;r<q.length&&r<("email"===b||"phone_number"===b?5:1);r++)f.push(wc(q[r])||
Ra(q[r].value));f=1===f.length?f[0]:f}}return f?(a[b]=f,!0):!1},uj=function(a){if(a){var b={},c=!1;c=tj(b,"email",a.email)||c;c=tj(b,"phone_number",a.phone)||c;b.address=[];for(var d=a.name_and_address||[],e=0;e<d.length;e++){var f={};c=tj(f,"first_name",d[e].first_name)||c;c=tj(f,"last_name",d[e].last_name)||c;c=tj(f,"street",d[e].street)||c;c=tj(f,"city",d[e].city)||c;c=tj(f,"region",d[e].region)||c;c=tj(f,"country",d[e].country)||c;c=tj(f,"postal_code",d[e].postal_code)||c;b.address.push(f)}return c?
b:void 0}},vj=function(a){return a.B[P.g.lf]},wj=function(a){var b=U(a,P.g.Pc)||{},c=!1;l(b,function(d,e){var f=e.enhanced_conversions_mode;if("automatic"===f||"manual"===f)c=!0});return c},xj=function(a){if(!Uc(a))return!1;var b=a.mode;return"auto_detect"===b||"selectors"===b||"code"===b||!!a.enable_code},yj=function(a){if(a){if("selectors"===a.mode||Uc(a.selectors))return uj(a.selectors);if("auto_detect"===a.mode||Uc(a.auto_detect)){var b;var c=a.auto_detect;if(c){var d=rj({ad:!1,bd:!1,ke:c.exclude_element_selectors,
yb:{email:!!c.email,phone:!!c.phone,address:!!c.address}}).elements,e={};if(0<d.length)for(var f=0;f<d.length;f++){var g=d[f];if(1===g.type){e.email=g.ob;break}}b=e}else b=void 0;return b}}};var Cj=new function(a,b){this.h=a;this.defaultValue=void 0===b?!1:b}(1933);var Dj=function(a){Dj[" "](a);return a};Dj[" "]=function(){};var Fj=function(){var a=Ej,b="eh";if(a.eh&&a.hasOwnProperty(b))return a.eh;var c=new a;return a.eh=c};var Ej=function(){var a={};this.h=function(){var b=Cj.h,c=Cj.defaultValue;return null!=a[b]?a[b]:c};this.m=function(){a[Cj.h]=!0}};var Gj=!1,Hj=!1,Ij=[],Jj={},Kj={},Lj={ad_storage:!1,ad_user_data:!1,ad_data_sharing:!1};function Mj(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},cps:{},set:Nj,default:Nj,update:Oj,declare:Pj,implicit:Qj,addListener:Rj,notifyListeners:Sj,setCps:Tj,active:!1,usedDeclare:!1,usedDefault:!1,usedUpdate:!1,usedImplicit:!1,usedSetCps:!1,accessedDefault:!1,accessedAny:!1,wasSetLate:!1});return a.ics}function Uj(a,b,c,d){return""===c||a===d?!0:a===c?b!==d:!a&&!b}
function Pj(a,b,c,d,e){var f=Mj();f.active=!0;f.usedDeclare=!0;var g=f.entries,h=g[a]||{},m=h.declare_region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(Uj(n,m,d,e)){var p={region:h.region,declare_region:n,declare:"granted"===b,implicit:h.implicit,initial:h.initial,default:h.default,update:h.update,quiet:h.quiet};if(""!==d||!1!==h.declare)g[a]=p}}
function Qj(a,b){var c=Mj();c.active=!0;c.usedImplicit=!0;var d=c.entries,e=d[a]=d[a]||{};!1!==e.implicit&&(e.implicit="granted"===b)}
function Nj(a,b,c,d,e,f){var g=Mj();g.usedDefault||!g.accessedDefault&&!g.accessedAny||(g.wasSetLate=!0);g.active=!0;g.usedDefault=!0;vb("TAGGING",19);if(void 0==b)vb("TAGGING",18);else{var h=g.entries,m=h[a]||{},n=m.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();var q="granted"===b;if(Uj(p,n,d,e)){var r=!!(f&&0<f&&void 0===m.update),t={region:p,declare_region:m.declare_region,implicit:m.implicit,initial:q,default:q,declare:m.declare,update:m.update,quiet:r};if(""!==d||
!1!==m.initial)h[a]=t;r&&z.setTimeout(function(){if(h[a]===t&&t.quiet){t.quiet=!1;var u=[a];if(zi(4))for(var v in Jj)Jj.hasOwnProperty(v)&&Jj[v]===a&&u.push(v);for(var w=0;w<u.length;w++)Vj(u[w]);Sj();vb("TAGGING",2)}},f)}}}
function Oj(a,b){var c=Mj();c.usedDefault||c.usedUpdate||!c.accessedAny||(c.wasSetLate=!0);c.active=!0;c.usedUpdate=!0;if(void 0!=b){var d=Wj(c,a,!0),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Wj(c,a,!0),h=[a];if(zi(4))for(var m in Jj)Jj.hasOwnProperty(m)&&Jj[m]===a&&h.push(m);if(f.quiet){f.quiet=!1;for(var n=0;n<h.length;n++)Vj(h[n])}else if(g!==d)for(var p=0;p<h.length;p++)Vj(h[p])}}
function Xj(a,b,c,d,e,f){var g=a[b]||{},h=g.region,m=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(Uj(m,h,e,f)){var n={enabled:"granted"===c,region:m};if(""!==e||!1!==g.enabled)return a[b]=n,!0}return!1}function Tj(a,b,c,d,e){var f=Mj();Xj(f.cps,a,b,c,d,e)&&(f.usedSetCps=!0)}function Rj(a,b){Ij.push({consentTypes:a,Kk:b})}function Vj(a){for(var b=0;b<Ij.length;++b){var c=Ij[b];Ha(c.consentTypes)&&-1!==c.consentTypes.indexOf(a)&&(c.mj=!0)}}
function Sj(a,b){for(var c=0;c<Ij.length;++c){var d=Ij[c];if(d.mj){d.mj=!1;try{d.Kk({consentEventId:a,consentPriorityId:b})}catch(e){}}}}function Wj(a,b,c){var d=a.entries[b]||{},e=d.update;if(void 0!==e)return e;e=d.initial;if(void 0!==e)return e;if(zi(4)&&c&&Jj.hasOwnProperty(b))return Wj(a,Jj[b],!1);e=d.declare;if(void 0!==e)return e;e=d.implicit;if(void 0!==e)return e;if(zi(3)&&Lj.hasOwnProperty(b))return Lj[b]}
var Yj=function(a){var b=Mj();b.accessedAny=!0;return Wj(b,a,!0)},Zj=function(a){var b=Mj();b.accessedDefault=!0;return(b.entries[a]||{}).initial},ak=function(a){var b=Mj();b.accessedAny=!0;return!(b.entries[a]||{}).quiet},bk=function(){if(!Fj().h())return!1;var a=Mj();a.accessedAny=!0;return a.active},ck=function(){var a=Mj();a.accessedDefault=!0;return a.usedDefault},dk=function(a,b){Mj().addListener(a,b)},ek=function(a,b){Mj().notifyListeners(a,b)},fk=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!ak(b[e]))return!0;
return!1}if(c()){var d=!1;dk(b,function(e){d||c()||(d=!0,a(e))})}else a({})},gk=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Yj(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=k(b)?[b]:b,e={};c().length!==d.length&&dk(d,function(f){var g=c();0<g.length&&(f.consentTypes=g,a(f))})};function hk(){}function ik(){};function jk(a,b){if(!T(104)||b){for(var c=[],d=0;d<kk.length;d++){var e=a(kk[d]);c[d]=!0===e?"1":!1===e?"0":"-"}return c.join("")}for(var f=[],g=0;g<lk.length;g++){var h=a(lk[g]);f[g]=!0===h?"1":!1===h?"0":"-"}return f.join("")}
var kk=[P.g.I,P.g.U],lk=[P.g.I,P.g.U,P.g.Kh,P.g.Jh],mk={},nk=(mk[P.g.Hj]="a",mk[P.g.Jj]="s",mk[P.g.Kj]="y",mk[P.g.Ij]="p",mk),ok=function(a){for(var b=a[P.g.Ka],c=Array.isArray(b)?b:[b],d={gd:0};d.gd<c.length;d={gd:d.gd},++d.gd)l(a,function(e){return function(f,g){if(f!==P.g.Ka){var h=c[e.gd],m=Ei(),n=Fi();Hj=!0;Gj&&vb("TAGGING",20);Mj().declare(f,g,h,m,n)}}}(d))},pk=function(a){var b=a[P.g.Ka];b&&O(40);var c=a[P.g.Oe];c&&O(41);for(var d=Ha(b)?b:[b],e={hd:0};e.hd<d.length;e={hd:e.hd},++e.hd)l(a,function(f){return function(g,
h){if(g!==P.g.Ka&&g!==P.g.Oe){var m=d[f.hd],n=Number(c),p=Ei(),q=Fi();Gj=!0;Hj&&vb("TAGGING",20);Mj().set(g,h,m,p,q,n)}}}(e))},qk=function(a,b){l(a,function(c,d){Gj=!0;Hj&&vb("TAGGING",20);Mj().update(c,d)});ek(b.eventId,b.priorityId)},rk=function(a){for(var b=a[P.g.Ka],c=Array.isArray(b)?b:[b],d={jd:0};d.jd<c.length;d={jd:d.jd},++d.jd)l(a,function(e){return function(f,g){if(f!==P.g.Ka){var h=c[e.jd],m=Ei(),n=Fi();Mj().setCps(f,g,h,m,n)}}}(d))},sk=function(a){for(var b=a[P.g.Ka],c=Array.isArray(b)?
b:[b],d={wc:0};d.wc<c.length;d={wc:d.wc},++d.wc)a.hasOwnProperty(P.g.Uf)&&l(nk,function(e){return function(f){Xj(Kj,f,a[P.g.Uf],c[e.wc],Ei(),Fi())}}(d)),l(a,function(e){return function(f,g){f!==P.g.Ka&&f!==P.g.Uf&&Xj(Kj,f,g,c[e.wc],Ei(),Fi())}}(d))},tk=function(a){var b=Yj(a);return void 0!=b?b:!0},uk=function(){return"G"+(T(104)?"2":"1")+jk(Yj)},vk={},wk=(vk[P.g.I]=0,vk[P.g.U]=1,vk[P.g.Kh]=2,vk[P.g.Jh]=3,vk);
function xk(a){switch(a){case void 0:return 1;case !0:return 3;case !1:return 2;default:return 0}}
var yk=function(){if(!T(106))return"G1"+jk(Zj,!0);for(var a="1",b=0;b<lk.length;b++){var c=a,d,e=lk[b],f=Jj[e];d=void 0===f?0:wk.hasOwnProperty(f)?12|wk[f]:8;var g=Mj();g.accessedAny=!0;var h=g.entries[e]||{};d=d<<2|xk(h.implicit);a=c+(""+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[d]+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[xk(h.declare)<<4|xk(h.initial)<<2|xk(h.update)])}return a},zk=function(a,b){dk(a,b)},Ak=function(a,b){gk(a,b)},Bk=function(a,
b){fk(a,b)};var Ck=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!==c?b^c>>21:b;return b};var Dk=function(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var m=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");m&&c&&(m=decodeURIComponent(m));d.push(m)}}return d};var Ek=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Fk=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};function Gk(a){return"null"!==a.origin};var Jk=function(a,b,c,d){return Hk(d)?Dk(a,String(b||Ik()),c):[]},Mk=function(a,b,c,d,e){if(Hk(e)){var f=Kk(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Lk(f,function(g){return g.Bf},b);if(1===f.length)return f[0].id;f=Lk(f,function(g){return g.ze},c);return f[0]?f[0].id:void 0}}};function Nk(a,b,c,d){var e=Ik(),f=window;Gk(f)&&(f.document.cookie=a);var g=Ik();return e!=g||void 0!=c&&0<=Jk(b,g,!1,d).indexOf(c)}
var Rk=function(a,b,c,d){function e(w,x,y){if(null==y)return delete h[x],w;h[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete h[x],w;h[x]=!0;return w+"; "+x}if(!Hk(c.Cb))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ok(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var m;c.expires instanceof Date?m=c.expires.toUTCString():null!=c.expires&&(m=""+c.expires);g=e(g,"expires",m);g=e(g,"max-age",c.Bl);g=e(g,"samesite",
c.Vl);c.Xl&&(g=f(g,"secure"));var n=c.domain;if(n&&"auto"===n.toLowerCase()){for(var p=Pk(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Qk(u,c.path)&&Nk(v,a,b,c.Cb))return 0}if(q&&!r)throw q;return 1}n&&"none"!==n.toLowerCase()&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Qk(n,c.path)?1:Nk(g,a,b,c.Cb)?0:1},Sk=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Rk(a,
b,c)};function Lk(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],m=b(h);m===c?d.push(h):void 0===f||m<f?(e=[h],f=m):m===f&&e.push(h)}return 0<d.length?d:e}function Kk(a,b,c){for(var d=[],e=Jk(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var m=g.shift();m&&(m=m.split("-"),d.push({id:g.join("."),Bf:1*m[0]||1,ze:1*m[1]||1}))}}return d}
var Ok=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Tk=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Uk=/(^|\.)doubleclick\.net$/i,Qk=function(a,b){return Uk.test(window.document.location.hostname)||"/"===b&&Tk.test(a)},Ik=function(){return Gk(window)?window.document.cookie:""},Pk=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Uk.test(e)||Tk.test(e)||a.push("none");return a},Hk=function(a){if(!Fj().h()||!a||!bk())return!0;if(!ak(a))return!1;var b=Yj(a);return null==b?!0:!!b};var Vk=function(a){var b=Math.round(2147483647*Math.random());return a?String(b^Ck(a)&2147483647):String(b)},Wk=function(a){return[Vk(a),Math.round(Ta()/1E3)].join(".")},Zk=function(a,b,c,d,e){var f=Xk(b);return Mk(a,f,Yk(c),d,e)},$k=function(a,b,c,d){var e=""+Xk(c),f=Yk(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Xk=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Yk=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-
1};var al=function(){Lh.dedupe_gclid||(Lh.dedupe_gclid=""+Wk());return Lh.dedupe_gclid};var bl=function(){var a=!1;return a};var cl=function(){this.container={};this.destination={};this.canonical={}},dl=function(){var a=hc("google_tag_data",{}),b=a.tidr;b||(b=new cl,a.tidr=b);return b};var K={D:"G-6ZT8F1MF6V",Gb:"115890836"},el={kj:"G-6ZT8F1MF6V|GT-NBPP3SC",lj:"G-6ZT8F1MF6V"};K.pf=Pa("");
var fl=function(){return el.kj?el.kj.split("|"):[K.D]},gl=function(){return el.lj?el.lj.split("|"):[]},hl=function(a){var b=dl();return a.isDestination?b.destination[a.ctid]:b.container[a.ctid]},il=function(){for(var a=dl(),b=fl(),c=0;c<b.length;c++){var d=a.container[b[c]];d?(d.state=2,d.containers=fl(),d.destinations=gl()):a.container[b[c]]={state:2,containers:fl(),destinations:gl()}}for(var e=gl(),f=0;f<e.length;f++){var g=a.destination[e[f]];g&&0===g.state&&O(93);g?(g.state=2,g.containers=fl(),
g.destinations=gl()):a.destination[e[f]]={state:2,containers:fl(),destinations:gl()}}a.canonical[K.Gb]=2},jl=function(a){return!!dl().container[a]},kl=function(){return{ctid:K.D,isDestination:K.pf}},ll=function(){var a=dl().container,b;for(b in a)if(a.hasOwnProperty(b)&&1===a[b].state)return!0;return!1},ml=function(){var a={};l(dl().destination,function(b,c){0===c.state&&(a[b]=c)});return a};var nl={UA:1,AW:2,DC:3,G:4,GF:5,GT:12,GTM:14,HA:6,MC:7},ol=function(a){var b=K.D.split("-")[0].toUpperCase(),c={};c.ctid=K.D;c.Sl=Kh.be;c.Ul=Kh.Lg;c.yl=K.pf?2:1;Rh?(c.Nf=nl[b],c.Nf||(c.Nf=0)):c.Nf=Xh?13:10;Vh?c.oh=1:bl()?c.oh=2:c.oh=3;var d;var e=c.Nf,f=c.oh;void 0===e?d="":(f||(f=0),d=""+dg(1,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e<<2|f]);var g=c.xm,h=4+d+(g?""+dg(2,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g]:""),m,n=c.Ul;m=n&&cg.test(n)?
""+dg(3,2)+n:"";var p,q=c.Sl;p=q?""+dg(4,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]:"";var r;var t=c.ctid;if(t&&a){var u=t.split("-"),v=u[0].toUpperCase();if("GTM"!==v&&"OPT"!==v)r="";else{var w=u[1];r=""+dg(5,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1+w.length]+(c.yl||0)+w}}else r="";return h+m+p+r};function pl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var ql=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function rl(){return Gb?!!Nb&&!!Nb.platform:!1}function sl(){return Qb("iPhone")&&!Qb("iPod")&&!Qb("iPad")}function tl(){sl()||Qb("iPad")||Qb("iPod")};Sb();Rb()||Qb("Trident")||Qb("MSIE");Qb("Edge");!Qb("Gecko")||-1!=Mb().toLowerCase().indexOf("webkit")&&!Qb("Edge")||Qb("Trident")||Qb("MSIE")||Qb("Edge");-1!=Mb().toLowerCase().indexOf("webkit")&&!Qb("Edge")&&Qb("Mobile");rl()||Qb("Macintosh");rl()||Qb("Windows");(rl()?"Linux"===Nb.platform:Qb("Linux"))||rl()||Qb("CrOS");var ul=pa.navigator||null;ul&&(ul.appVersion||"").indexOf("X11");rl()||Qb("Android");sl();Qb("iPad");Qb("iPod");tl();Mb().toLowerCase().indexOf("kaios");var vl=function(a,b,c,d){for(var e=b,f=c.length;0<=(e=a.indexOf(c,e))&&e<d;){var g=a.charCodeAt(e-1);if(38==g||63==g){var h=a.charCodeAt(e+f);if(!h||61==h||38==h||35==h)return e}e+=f+1}return-1},wl=/#|$/,xl=function(a,b){var c=a.search(wl),d=vl(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))},yl=/[?&]($|#)/,zl=function(a,b,c){for(var d,e=a.search(wl),f=0,g,h=[];0<=(g=vl(a,f,b,e));)h.push(a.substring(f,
g)),f=Math.min(a.indexOf("&",g)+1||e,e);h.push(a.slice(f));d=h.join("").replace(yl,"$1");var m,n=null!=c?"="+encodeURIComponent(String(c)):"";var p=b+n;if(p){var q,r=d.indexOf("#");0>r&&(r=d.length);var t=d.indexOf("?"),u;0>t||t>r?(t=r,u=""):u=d.substring(t+1,r);q=[d.slice(0,t),u,d.slice(r)];var v=q[1];q[1]=p?v?v+"&"+p:p:v;m=q[0]+(q[1]?"?"+q[1]:"")+q[2]}else m=d;return m};var Al=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Dj(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Bl=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function Cl(){if(!H.head)return null;var a=Dl("META");H.head.appendChild(a);a.httpEquiv="origin-trial";a.content='A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';return a}
var El=function(){if(z.top==z)return 0;var a=z.location.ancestorOrigins;return a?a[a.length-1]==z.location.origin?1:2:Al(z.top)?1:2},Dl=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function Fl(a,b,c,d){d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=Dl("IMG",a.document);if(c){var f=function(){if(c){var g=a.google_image_requests,h=yb(g,e);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,!1);e.removeEventListener&&e.removeEventListener("error",f,!1)};ql(e,"load",f);ql(e,"error",f)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
var Hl=function(a){var b;b=void 0===b?!1:b;var c="https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";Bl(a,function(d,e){if(d||0===d)c+="&"+e+"="+encodeURIComponent(""+d)});Gl(c,b)},Gl=function(a,b){var c=window,d;b=void 0===b?!1:b;d=void 0===d?!1:d;if(c.fetch){var e={keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"};d&&(e.mode="cors",e.headers={"Attribution-Reporting-Eligible":"event-source"});c.fetch(a,e)}else Fl(c,a,void 0===b?!1:b,void 0===d?!1:d)};var Il=function(){};var Jl=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Kl=function(a,b){b=void 0===b?{}:b;this.m=a;this.h=null;this.N={};this.pb=0;var c;this.T=null!=(c=b.hm)?c:500;var d;this.C=null!=(d=b.ym)?d:!1;this.B=null};oa(Kl,Il);
Kl.prototype.addEventListener=function(a){var b=this,c={internalBlockOnErrors:this.C},d=Fk(function(){return a(c)}),e=0;-1!==this.T&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},this.T));var f=function(g,h){clearTimeout(e);g?(c=g,c.internalErrorState=Jl(c),c.internalBlockOnErrors=b.C,h&&0===c.internalErrorState||(c.tcString="tcunavailable",h||(c.internalErrorState=3))):(c.tcString="tcunavailable",c.internalErrorState=3);a(c)};try{Ll(this,"addEventListener",f)}catch(g){c.tcString=
"tcunavailable",c.internalErrorState=3,e&&(clearTimeout(e),e=0),d()}};Kl.prototype.removeEventListener=function(a){a&&a.listenerId&&Ll(this,"removeEventListener",null,a.listenerId)};
var dm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var m;if(0===h)if(a.purpose&&a.vendor){var n=cm(a.vendor.consents,void 0===d?"755":d);m=n&&"1"===b&&a.purposeOneTreatment&&"CH"===a.publisherCC?!0:n&&cm(a.purpose.consents,b)}else m=!0;else m=1===h?a.purpose&&a.vendor?cm(a.purpose.legitimateInterests,
b)&&cm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return m},cm=function(a,b){return!(!a||!a[b])},Ll=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.m.__tcfapi){var e=a.m.__tcfapi;e(b,2,c,d)}else if(em(a)){fm(a);var f=++a.pb;a.N[f]=c;if(a.h){var g={};a.h.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},em=function(a){if(a.h)return a.h;var b;a:{for(var c=a.m,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(h){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(h){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},fm=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.N[c.callId](c.returnValue,c.success)}catch(d){}},ql(a.m,"message",a.B))},gm=function(a){if(!1===a.gdprApplies)return!0;void 0===a.internalErrorState&&(a.internalErrorState=Jl(a));return"error"===a.cmpStatus||0!==a.internalErrorState?a.internalBlockOnErrors?
(Hl({e:String(a.internalErrorState)}),!1):!0:"loaded"!==a.cmpStatus||"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus?!1:!0};var hm={1:0,3:0,4:0,7:3,9:3,10:3},im=pl('',500);function jm(){var a=Lh.tcf||{};return Lh.tcf=a}
var pm=function(){var a=jm(),b=new Kl(z,{hm:-1});km(b)&&lm()&&O(124);if(!lm()&&!a.active&&km(b)){a.active=!0;a.Kf={};mm();a.tcString="tcunavailable";try{b.addEventListener(function(c){if(0!==c.internalErrorState)nm(a),om(a);else{var d;a.gdprApplies=c.gdprApplies;if(!1===c.gdprApplies){var e={},f;for(f in hm)hm.hasOwnProperty(f)&&(e[f]=!0);d=e;b.removeEventListener(c)}else if("tcloaded"===c.eventStatus||"useractioncomplete"===c.eventStatus||"cmpuishown"===c.eventStatus){var g={},h;for(h in hm)if(hm.hasOwnProperty(h))if("1"===
h){var m,n=c,p=!0;p=void 0===p?!1:p;m=gm(n)?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p||"string"!==typeof n.tcString||!n.tcString.length?!0:dm(n,"1",0):!1;g["1"]=m}else g[h]=dm(c,h,hm[h]);d=g}d&&(a.tcString=c.tcString||"tcempty",a.Kf=d,om(a))}})}catch(c){nm(a),om(a)}}};function nm(a){a.type="e";a.tcString="tcunavailable"}function mm(){var a={},b=(a.ad_storage="denied",a.wait_for_update=im,a);pk(b)}
function km(a){return"function"===typeof z.__tcfapi||"function"===typeof a.m.__tcfapi||null!=em(a)?!0:!1}var lm=function(){return!0!==z.gtag_enable_tcf_support};function om(a){var b={},c=(b.ad_storage=a.Kf["1"]?"granted":"denied",b);qk(c,{eventId:0},{gdprApplies:a?a.gdprApplies:void 0,tcString:qm()})}
var qm=function(){var a=jm();return a.active?a.tcString||"":""},rm=function(){var a=jm();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},sm=function(a){if(!hm.hasOwnProperty(String(a)))return!0;var b=jm();return b.active&&b.Kf?!!b.Kf[String(a)]:!0};var tm=function(a){var b=String(a[ne.Qb]||"").replace(/_/g,"");0===b.indexOf("cvt")&&(b="cvt");return b},um=0<=z.location.search.indexOf("?gtm_latency=")||0<=z.location.search.indexOf("&gtm_latency=");var vm={sampleRate:"0.005000",Aj:"",zj:Number("5"),Dm:Number("")},wm;if(!(wm=um)){var xm=Math.random(),ym=vm.sampleRate;wm=xm<ym}var zm=wm,Am="https://www.googletagmanager.com/a?id="+K.D+"&cv=1";
function Bm(){return[Am,"&v=3&t=t","&pid="+Ja(),"&rv="+Kh.Lg].join("")}var Cm=Bm();function Dm(){Cm=Bm()}var Em={},Fm="",Gm="",Hm="",Im="",Jm=[],Km="",Lm="",Mm=void 0,Nm={},Om={},Pm=void 0,Qm=5;0<vm.zj&&(Qm=vm.zj);var Rm=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);return{nl:function(){return c<a?!1:Ta()-d[c%a]<b},Ol:function(){var f=c++%a;d[f]=Ta()}}}(Qm,1E3),Sm=1E3;
function Tm(a){var b=Mm;if(void 0===b)return"";var c=xb("GTM"),d=xb("TAGGING"),e=xb("HEALTH"),f=Cm,g=Em[b]?"":"&es=1",h=Nm[b],m=Um(),n=Fm,p=Gm,q=Lm,r=Hm,t=Im,u;return[f,g,h,c?"&u="+c:"",d?"&ut="+d:"",e?"&h="+e:"",m,n,p,q,r,t,u,Km?"&dl="+encodeURIComponent(Km):"",0<Jm.length?"&tdp="+Jm.join("."):"",Kh.be?"&x="+Kh.be:"",
"&z=0"].join("")}function Wm(){Pm&&(z.clearTimeout(Pm),Pm=void 0);if(void 0!==Mm&&(!Em[Mm]||Fm||Gm))if(Om[Mm]||Rm.nl()||0>=Sm--)O(1),Om[Mm]=!0;else{Rm.Ol();var a=Tm(!0);sc(a);if(Im||Km&&0<Jm.length){var b=a.replace("/a?","/td?");sc(b)}Em[Mm]=!0;Km=Im=Hm=Lm=Gm=Fm="";Jm=[]}}function Xm(){Pm||(Pm=z.setTimeout(Wm,500))}function Ym(){2022<=Tm().length&&Wm()}function Um(){return"&tc="+Ne.filter(function(a){return a}).length}
var Zm=function(a,b){if(zm&&!Om[a]&&Mm!==a){Wm();Mm=a;Hm=Fm="";var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";Nm[a]="&e="+c+"&eid="+a;Xm()}},$m=function(a,b,c){if(zm&&b){var d=tm(b),e=c+d;if(!Om[a]){a!==Mm&&(Wm(),Mm=a);Fm=Fm?Fm+"."+e:"&tr="+e;var f=b["function"];if(!f)throw Error("Error: No function name given for function call.");var g=(Pe[f]?"1":"2")+d;Hm=Hm?Hm+"."+g:"&ti="+g;Xm();Ym()}}},an=function(a,b,c){if(zm&&void 0!==a&&!Om[a]){a!==Mm&&(Wm(),Mm=a);var d=c+b;Gm=Gm?Gm+"."+d:"&epr="+
d;Xm();Ym()}},bn=function(a,b,c){},Vm=void 0;var cn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};Tb();sl()||Qb("iPod");Qb("iPad");!Qb("Android")||Ub()||Tb()||Sb()||Qb("Silk");Ub();!Qb("Safari")||Ub()||(Rb()?0:Qb("Coast"))||Sb()||(Rb()?0:Qb("Edge"))||(Rb()?Pb("Microsoft Edge"):Qb("Edg/"))||(Rb()?Pb("Opera"):Qb("OPR"))||Tb()||Qb("Silk")||Qb("Android")||tl();var dn={},en=null,fn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!en){en={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=g.concat(h[m].split(""));dn[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===en[q]&&(en[q]=p)}}}for(var r=dn[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],A=b[v+2],B=r[x>>2],D=r[(x&3)<<4|y>>4],E=r[(y&15)<<2|A>>6],J=r[A&63];t[w++]=""+B+D+E+J}var G=0,N=u;switch(b.length-v){case 2:G=b[v+1],N=r[(G&15)<<2]||u;case 1:var Q=b[v];t[w]=""+r[Q>>2]+r[(Q&3)<<4|G>>4]+N+u}return t.join("")};var gn="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function hn(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function jn(){var a=z.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function kn(){var a,b;return null!=(b=null==(a=z.google_tag_data)?void 0:a.uach_promise)?b:null}
function ln(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}function mn(){var a=z;if(!ln(a))return null;var b=hn(a);if(b.uach_promise)return b.uach_promise;var c=a.navigator.userAgentData.getHighEntropyValues(gn).then(function(d){null!=b.uach||(b.uach=d);return d});return b.uach_promise=c};
var nn,on=function(){if(ln(z)&&(nn=Ta(),!kn())){var a=mn();a&&(a.then(function(){O(95);}),a.catch(function(){O(96)}))}},qn=function(a){var b=pn.lm,c=function(g,h){try{a(g,h)}catch(m){}},d=jn();if(d)c(d);else{var e=kn();if(e){b=
Math.min(Math.max(isFinite(b)?b:0,0),1E3);var f=z.setTimeout(function(){c.we||(c.we=!0,O(106),c(null,Error("Timeout")))},b);e.then(function(g){c.we||(c.we=!0,O(104),z.clearTimeout(f),c(g))}).catch(function(g){c.we||(c.we=!0,O(105),z.clearTimeout(f),c(null,g))})}else c(null)}},rn=function(a,b){a&&(b.m[P.g.Pd]=a.architecture,b.m[P.g.Qd]=a.bitness,a.fullVersionList&&(b.m[P.g.Rd]=a.fullVersionList.map(function(c){return encodeURIComponent(c.brand||"")+";"+encodeURIComponent(c.version||"")}).join("|")),
b.m[P.g.Sd]=a.mobile?"1":"0",b.m[P.g.Td]=a.model,b.m[P.g.Ud]=a.platform,b.m[P.g.Vd]=a.platformVersion,b.m[P.g.Wd]=a.wow64?"1":"0")};function sn(a,b,c,d){var e,f=Number(null!=a.Ab?a.Ab:void 0);0!==f&&(e=new Date((b||Ta())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,Cb:d}};var tn;var xn=function(){var a=un,b=vn,c=wn(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){tc(H,"mousedown",d);tc(H,"keyup",d);tc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},yn=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};wn().decorators.push(f)},zn=function(a,b,c){for(var d=wn().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var m=g.domains,n=a,p=!!g.sameHost;if(m&&(p||n!==H.location.hostname))for(var q=0;q<m.length;q++)if(m[q]instanceof RegExp){if(m[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(m[q])||p&&0<=m[q].indexOf(n)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Xa(e,g.callback())}}return e};function wn(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var An=/(.*?)\*(.*?)\*(.*)/,Bn=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Cn=/^(?:www\.|m\.|amp\.)+/,Dn=/([^?#]+)(\?[^#]*)?(#.*)?/;function En(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}var Gn=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sb(String(d))))}var e=b.join("*");return["1",Fn(e),e].join("*")};
function Fn(a,b){var c=[fc.userAgent,(new Date).getTimezoneOffset(),fc.userLanguage||fc.language,Math.floor(Ta()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=tn)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}tn=d;for(var m=4294967295,n=0;n<c.length;n++)m=m>>>8^tn[(m^c.charCodeAt(n))&255];return((m^-1)>>>0).toString(36)}
function Hn(){return function(a){var b=cj(z.location.href),c=b.search.replace("?",""),d=Yi(c,"_gl",!1,!0)||"";a.query=In(d)||{};var e=aj(b,"fragment").match(En("_gl"));a.fragment=In(e&&e[3]||"")||{}}}function Jn(a,b){var c=En(a).exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}return d}
var Kn=function(a,b){b||(b="_gl");var c=Dn.exec(a);if(!c)return"";var d=c[1],e=Jn(b,(c[2]||"").slice(1)),f=Jn(b,(c[3]||"").slice(1));e.length&&(e="?"+e);f.length&&(f="#"+f);return""+d+e+f},Ln=function(a){var b=Hn(),c=wn();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},In=function(a){try{var b=Mn(a,3);if(void 0!==b){for(var c={},d=b?b.split("*"):[],e=0;e+1<d.length;e+=2){var f=d[e],g=tb(d[e+1]);c[f]=g}vb("TAGGING",6);return c}}catch(h){vb("TAGGING",
8)}};function Mn(a,b){if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=An.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],m;a:{for(var n=g[2],p=0;p<b;++p)if(n===Fn(h,p)){m=!0;break a}m=!1}if(m)return h;vb("TAGGING",7)}}}
function Nn(a,b,c,d){function e(p){p=Jn(a,p);var q=p.charAt(p.length-1);p&&"&"!==q&&(p+="&");return p+n}d=void 0===d?!1:d;var f=Dn.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",m=f[3]||"",n=a+"="+b;d?m="#"+e(m.substring(1)):h="?"+e(h.substring(1));return""+g+h+m}
function On(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=zn(b,1,c),e=zn(b,2,c),f=zn(b,3,c);if(Ya(d)){var g=Gn(d);c?Pn("_gl",g,a):Qn("_gl",g,a,!1)}if(!c&&Ya(e)){var h=Gn(e);Qn("_gl",h,a,!0)}for(var m in f)if(f.hasOwnProperty(m))a:{var n=m,p=f[m],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Qn(n,p,q);break a}if("form"===q.tagName.toLowerCase()){Pn(n,p,q);break a}}"string"==typeof q&&Nn(n,p,q)}}
function Qn(a,b,c,d){if(c.href){var e=Nn(a,b,c.href,void 0===d?!1:d);Fb.test(e)&&(c.href=e)}}
function Pn(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var m=H.createElement("input");m.setAttribute("type","hidden");m.setAttribute("name",a);m.setAttribute("value",b);c.appendChild(m)}}else if("post"===d){var n=Nn(a,b,c.action);Fb.test(n)&&(c.action=n)}}}
function un(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||On(e,e.hostname)}}catch(g){}}function vn(a){try{if(a.action){var b=aj(cj(a.action),"host");On(a,b)}}catch(c){}}
var Rn=function(a,b,c,d){xn();yn(a,b,"fragment"===c?2:1,!!d,!1)},Sn=function(a,b){xn();yn(a,[$i(z.location,"host",!0)],b,!0,!0)},Tn=function(){var a=H.location.hostname,b=Bn.exec(H.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Cn,""),m=e.replace(Cn,""),n;if(!(n=h===m)){var p="."+m;n=h.substring(h.length-p.length,
h.length)===p}return n},Un=function(a,b){return!1===a?!1:a||b||Tn()};var Vn=["1"],Wn={},Xn={},Zn=function(a){return Wn[Yn(a)]},co=function(a,b){b=void 0===b?!0:b;var c=Yn(a.prefix);if(!Wn[c])if($n(c,a.path,a.domain)){if(zi(1)){var d=Xn[Yn(a.prefix)];ao(a,d?d.id:void 0,d?d.lh:void 0)}}else{if(zi(2)){var e=ej("auiddc");if(e){vb("TAGGING",17);Wn[c]=e;return}}if(b){var f=Yn(a.prefix),g=Wk();if(0===bo(f,g,a)){var h=hc("google_tag_data",{});h._gcl_au||(h._gcl_au=g)}$n(c,a.path,a.domain)}}};
function ao(a,b,c){var d=Yn(a.prefix),e=Wn[d];if(e){var f=e.split(".");if(2===f.length){var g=Number(f[1])||0;if(g){var h=e;b&&(h=e+"."+b+"."+(c?c:Math.floor(Ta()/1E3)));bo(d,h,a,1E3*g)}}}}function bo(a,b,c,d){var e=$k(b,"1",c.domain,c.path),f=sn(c,d);f.Cb="ad_storage";return Sk(a,e,f)}function $n(a,b,c){var d=Zk(a,b,c,Vn,"ad_storage");if(!d)return!1;eo(a,d);return!0}
function eo(a,b){var c=b.split(".");5===c.length?(Wn[a]=c.slice(0,2).join("."),Xn[a]={id:c.slice(2,4).join("."),lh:Number(c[4])||0}):3===c.length?Xn[a]={id:c.slice(0,2).join("."),lh:Number(c[2])||0}:Wn[a]=b}function Yn(a){return(a||"_gcl")+"_au"}function fo(a){bk()||a();fk(function(){Yj("ad_storage")&&a();gk(a,"ad_storage")},["ad_storage"])}
function go(a){var b=Ln(!0),c=Yn(a.prefix);fo(function(){var d=b[c];if(d){eo(c,d);var e=1E3*Number(Wn[c].split(".")[1]);if(e){vb("TAGGING",16);var f=sn(a,e);f.Cb="ad_storage";var g=$k(d,"1",a.domain,a.path);Sk(c,g,f)}}})}function ho(a,b,c,d,e){e=e||{};var f=function(){var g={},h=Zk(a,e.path,e.domain,Vn,"ad_storage");h&&(g[a]=h);return g};fo(function(){Rn(f,b,c,d)})};var io=function(a){for(var b=[],c=H.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Eh:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function jo(a,b){var c=io(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Eh]||(d[c[e].Eh]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),ia:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Eh].push(g)}}return d};var ko=/^\w+$/,lo=/^[\w-]+$/,mo={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},no=function(){if(!Fj().h()||!bk())return!0;var a=Yj("ad_storage");return null==a?!0:!!a},oo=function(a,b){ak("ad_storage")?no()?a():gk(a,"ad_storage"):b?vb("TAGGING",3):fk(function(){oo(a,!0)},["ad_storage"])},qo=function(a){return po(a).map(function(b){return b.ia})},po=function(a){var b=[];if(!Gk(z)||!H.cookie)return b;var c=Jk(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Je:d.Je},e++){var f=ro(c[e]);if(null!=f){var g=f,h=g.version;d.Je=g.ia;var m=g.timestamp,n=g.labels,p=Ia(b,function(q){return function(r){return r.ia===q.Je}}(d));p?(p.timestamp=Math.max(p.timestamp,m),p.labels=so(p.labels,n||[])):b.push({version:h,ia:d.Je,timestamp:m,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return to(b)};function so(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function uo(a){return a&&"string"==typeof a&&a.match(ko)?a:"_gcl"}
var wo=function(){var a=cj(z.location.href),b=aj(a,"query",!1,void 0,"gclid"),c=aj(a,"query",!1,void 0,"gclsrc"),d=aj(a,"query",!1,void 0,"wbraid"),e=aj(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Yi(f,"gclid",!1);c=c||Yi(f,"gclsrc",!1);d=d||Yi(f,"wbraid",!1)}return vo(b,c,e,d)},vo=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&lo.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(lo))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},yo=function(a){var b=wo();oo(function(){xo(b,!1,a)})};
function xo(a,b,c,d,e){function f(w,x){var y=zo(w,g);y&&(Sk(y,x,h),m=!0)}c=c||{};e=e||[];var g=uo(c.prefix);d=d||Ta();var h=sn(c,d,!0);h.Cb="ad_storage";var m=!1,n=Math.round(d/1E3),p=function(w){var x=["GCL",n,w];0<e.length&&x.push(e.join("."));return x.join(".")};a.aw&&f("aw",p(a.aw[0]));a.dc&&f("dc",p(a.dc[0]));a.gf&&f("gf",p(a.gf[0]));a.ha&&f("ha",p(a.ha[0]));a.gp&&f("gp",p(a.gp[0]));if(!m&&a.gb){var q=a.gb[0],r=zo("gb",g),t=!1;if(!b)for(var u=po(r),v=0;v<u.length;v++)u[v].ia===q&&u[v].labels&&
0<u[v].labels.length&&(t=!0);t||f("gb",p(q))}}
var Bo=function(a,b){var c=Ln(!0);oo(function(){for(var d=uo(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==mo[f]){var g=zo(f,d),h=c[g];if(h){var m=Math.min(Ao(h),Ta()),n;b:{var p=m;if(Gk(z))for(var q=Jk(g,H.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(Ao(q[r])>p){n=!0;break b}n=!1}if(!n){var t=sn(b,m,!0);t.Cb="ad_storage";Sk(g,h,t)}}}}xo(vo(c.gclid,c.gclsrc),!1,b)})},zo=function(a,b){var c=mo[a];if(void 0!==c)return b+c},Ao=function(a){return 0!==Co(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function ro(a){var b=Co(a.split("."));return 0===b.length?null:{version:b[0],ia:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Co(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!lo.test(a[2])?[]:a}
var Do=function(a,b,c,d,e){if(Ha(b)&&Gk(z)){var f=uo(e),g=function(){for(var h={},m=0;m<a.length;++m){var n=zo(a[m],f);if(n){var p=Jk(n,H.cookie,void 0,"ad_storage");p.length&&(h[n]=p.sort()[p.length-1])}}return h};oo(function(){Rn(g,b,c,d)})}},to=function(a){return a.filter(function(b){return lo.test(b.ia)})},Eo=function(a,b){if(Gk(z)){for(var c=uo(b.prefix),d={},e=0;e<a.length;e++)mo[a[e]]&&(d[a[e]]=mo[a[e]]);oo(function(){l(d,function(f,g){var h=Jk(c+g,H.cookie,void 0,"ad_storage");h.sort(function(t,
u){return Ao(u)-Ao(t)});if(h.length){var m=h[0],n=Ao(m),p=0!==Co(m.split(".")).length?m.split(".").slice(3):[],q={},r;r=0!==Co(m.split(".")).length?m.split(".")[2]:void 0;q[f]=[r];xo(q,!0,b,n,p)}})})}};function Fo(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Go=function(a){function b(e,f,g){g&&(e[f]=g)}if(bk()){var c=wo();if(Fo(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Sn(function(){return d},3);Sn(function(){var e={};return e._up="1",e},1)}}},Ho=function(a,b,c,d){var e=[];c=c||{};if(!no())return e;var f=po(a);if(!f.length)return e;for(var g=0;g<f.length;g++)-1===(f[g].labels||[]).indexOf(b)?e.push(0):e.push(1);if(d)return e;if(1!==e[0]){var h=f[0],m=f[0].timestamp,n=[h.version,Math.round(m/
1E3),h.ia].concat(h.labels||[],[b]).join("."),p=sn(c,m,!0);p.Cb="ad_storage";Sk(a,n,p)}return e};function Io(a,b){var c=uo(b),d=zo(a,c);if(!d)return 0;for(var e=po(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}function Jo(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b}var Ko=function(a){var b=Math.max(Io("aw",a),Jo(no()?jo():{}));return Math.max(Io("gb",a),Jo(no()?jo("_gac_gb",!0):{}))>b};var Po=/[A-Z]+/,Qo=/\s/,Ro=function(a){if(k(a)){a=Ra(a);var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Po.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e]||Qo.test(d[e])&&("AW"!==c||1!==e))return;return{id:a,prefix:c,Z:c+"-"+d[0],K:d}}}}},To=function(a){for(var b={},c=0;c<a.length;++c){var d=Ro(a[c]);d&&(b[d.id]=d)}So(b);var e=[];l(b,function(f,g){e.push(g)});return e};
function So(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.K[1]&&b.push(d.Z)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uo=function(a,b,c,d){var e=qc(),f;if(1===e)a:{var g=Zh;g=g.toLowerCase();for(var h="https://"+g,m="http://"+g,n=1,p=H.getElementsByTagName("script"),q=0;q<p.length&&100>q;q++){var r=p[q].src;if(r){r=r.toLowerCase();if(0===r.indexOf(m)){f=3;break a}1===n&&0===r.indexOf(h)&&(n=2)}}f=n}else f=e;return(2===f||d||"http:"!=z.location.protocol?a:b)+c};var fp=function(a,b,c){this.target=a;this.eventName=b;this.h=c;this.m={};this.metadata=Vc(c.eventMetadata||{});this.H=!1};fp.prototype.copyToHitData=function(a,b){var c=U(this.h,a);void 0!==c?this.m[a]=c:void 0!==b&&(this.m[a]=b)};var gp=function(a,b,c){var d=Li(a.target.Z);return d&&d.hasOwnProperty(b)?d[b]:c};function hp(a){return{getDestinationId:function(){return a.target.Z},getEventName:function(){return a.eventName},setEventName:function(b){a.eventName=b},getHitData:function(b){return a.m[b]},setHitData:function(b,c){a.m[b]=c},setHitDataIfNotDefined:function(b,c){void 0===a.m[b]&&(a.m[b]=c)},copyToHitData:function(b,c){a.copyToHitData(b,c)},getMetadata:function(b){return a.metadata[b]},setMetadata:function(b,c){a.metadata[b]=c},abort:function(){a.H=!0},getFromEventContext:function(b){return U(a.h,
b)},Ff:function(){return a},getHitKeys:function(){return Object.keys(a.m)}}};var jp=function(a){var b=ip[a.target.Z];if(!a.H&&b)for(var c=hp(a),d=0;d<b.length;++d){try{b[d](c)}catch(e){a.H=!0}if(a.H)break}},kp=function(a,b){var c=ip[a];c||(c=ip[a]=[]);c.push(b)},ip={};var Cp=function(a,b,c,d,e,f,g,h,m,n,p,q){this.eventId=a;this.priorityId=b;this.h=c;this.N=d;this.m=e;this.C=f;this.T=g;this.B=h;this.eventMetadata=m;this.R=n;this.W=p;this.F=q},U=function(a,b,c){if(void 0!==a.h[b])return a.h[b];if(void 0!==a.N[b])return a.N[b];if(void 0!==a.m[b])return a.m[b];zm&&Dp(a,a.C[b],a.T[b])&&(O(71),O(79));return void 0!==a.C[b]?a.C[b]:void 0!==a.B[b]?a.B[b]:c},Ep=function(a){function b(g){for(var h=Object.keys(g),m=0;m<h.length;++m)c[h[m]]=1}var c={};b(a.h);b(a.N);b(a.m);
b(a.C);if(zm)for(var d=Object.keys(a.T),e=0;e<d.length;e++){var f=d[e];if("event"!==f&&"gtm"!==f&&"tagTypeBlacklist"!==f&&!c.hasOwnProperty(f)){O(71);O(80);break}}return Object.keys(c)},Fp=function(a,b,c){function d(m){Uc(m)&&l(m,function(n,p){f=!0;e[n]=p})}var e={},f=!1;c&&1!==c||(d(a.B[b]),d(a.C[b]),d(a.m[b]),d(a.N[b]));c&&2!==c||d(a.h[b]);if(zm){var g=f,h=e;e={};f=!1;c&&1!==c||(d(a.B[b]),d(a.T[b]),d(a.m[b]),d(a.N[b]));c&&2!==c||d(a.h[b]);if(f!==g||Dp(a,e,h))O(71),O(81);f=g;e=h}return f?e:void 0},
Gp=function(a){var b=[P.g.Ic,P.g.Ec,P.g.Fc,P.g.Gc,P.g.Hc,P.g.Jc,P.g.Kc],c={},d=!1,e=function(h){for(var m=0;m<b.length;m++)void 0!==h[b[m]]&&(c[b[m]]=h[b[m]],d=!0);return d};if(e(a.h)||e(a.N)||e(a.m))return c;e(a.C);if(zm){var f=c,g=d;c={};d=!1;e(a.T);Dp(a,c,f)&&(O(71),O(82));c=f;d=g}if(d)return c;e(a.B);return c},Dp=function(a,b,c){if(!zm)return!1;try{if(b===c)return!1;var d=Sc(b);if(d!==Sc(c)||!(Uc(b)&&Uc(c)||"array"===d))return!0;if("array"===d){if(b.length!==c.length)return!0;for(var e=0;e<b.length;e++)if(Dp(a,
b[e],c[e]))return!0}else{for(var f in c)if(!b.hasOwnProperty(f))return!0;for(var g in b)if(!c.hasOwnProperty(g)||Dp(a,b[g],c[g]))return!0}}catch(h){O(72)}return!1},Hp=function(a,b){this.fk=a;this.gk=b;this.C={};this.Fi={};this.h={};this.N={};this.m={};this.Yd={};this.B={};this.nd=function(){};this.pb=function(){};this.T=!1},Ip=function(a,b){a.C=b;return a},Jp=function(a,b){a.Fi=b;return a},Kp=function(a,b){a.h=b;return a},Lp=function(a,b){a.N=b;return a},Mp=function(a,b){a.m=b;return a},Np=function(a,
b){a.Yd=b;return a},Op=function(a,b){a.B=b||{};return a},Pp=function(a,b){a.nd=b;return a},Qp=function(a,b){a.pb=b;return a},Rp=function(a){a.T=!0;return a},Sp=function(a){return new Cp(a.fk,a.gk,a.C,a.Fi,a.h,a.N,a.m,a.Yd,a.B,a.nd,a.pb,a.T)};function Xp(){return"attribution-reporting"}function Yp(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var Zp=!1;function $p(){if(Yp("join-ad-interest-group")&&Fa(fc.joinAdInterestGroup))return!0;Zp||(Cl(),Zp=!0);return Yp("join-ad-interest-group")&&Fa(fc.joinAdInterestGroup)}
function aq(a,b){var c=void 0;try{c=H.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>Ta()-d){vb("TAGGING",9);return}}else try{if(50<=H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){vb("TAGGING",10);return}}catch(e){}rc(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:Ta()},c)}function bq(){return"https://td.doubleclick.net"};var cq=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),dq=/^~?[\w-]+(?:\.~?[\w-]+)*$/,eq=/^\d+\.fls\.doubleclick\.net$/,fq=/;gac=([^;?]+)/,gq=/;gacgb=([^;?]+)/,hq=/;gclaw=([^;?]+)/,iq=/;gclgb=([^;?]+)/;
function jq(a,b){if(eq.test(H.location.host)){var c=H.location.href.match(b);return c&&2==c.length&&c[1].match(cq)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],g=a[e],h=0;h<g.length;h++)f.push(g[h].ia);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var kq=function(a,b,c){var d=no()?jo("_gac_gb",!0):{},e=[],f=!1,g;for(g in d){var h=Ho("_gac_gb_"+g,a,b,c);f=f||0!==h.length&&h.some(function(m){return 1===m});e.push(g+":"+h.join(","))}return{Ok:f?e.join(";"):"",Nk:jq(d,gq)}};function lq(a,b,c){if(eq.test(H.location.host)){var d=H.location.href.match(c);if(d&&2==d.length&&d[1].match(dq))return[{ia:d[1]}]}else return po((a||"_gcl")+b);return[]}
var mq=function(a){return lq(a,"_aw",hq).map(function(b){return b.ia}).join(".")},nq=function(a){return lq(a,"_gb",iq).map(function(b){return b.ia}).join(".")},oq=function(a,b){var c=Ho((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var pq=function(){if(Fa(z.__uspapi)){var a="";try{z.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};var $q={J:{Ih:"ads_conversion_hit",Rf:"container_execute_start",Mh:"container_setup_end",Sf:"container_setup_start",Lh:"container_execute_end",Nh:"container_yield_end",Tf:"container_yield_start",Ci:"event_execute_end",Di:"event_setup_end",Xd:"event_setup_start",Ei:"ga4_conversion_hit",Zd:"page_load",sm:"pageview",Sb:"snippet_load",Pi:"tag_callback_error",Qi:"tag_callback_failure",Ri:"tag_callback_success",Si:"tag_execute_end",Wc:"tag_execute_start"}};var ar=!1,br="L S Y E TC HTC".split(" "),cr=["S","E"],dr=["TS","TE"];
var Er=function(a){},Fr=function(a){},er=function(a,b,c,d,e,f){var g;g=void 0===g?!1:g;var h={};return h},fr=function(a){var b=!1;return b},gr=function(a,b){},Gr=function(){var a={};return a},xr=function(a){a=void 0===a?!0:a;var b={};return b},Hr=function(){},Ir=function(a,b,c){},Jr=function(){var a=er("PAGEVIEW",
K.D);if(pr(a.entryName,"mark")[0]){var b=Dc();b.clearMarks(a.entryName);b.clearMeasures("GTM-"+K.D+":"+$q.J.Zd+":to:PAGEVIEW")}var c=er($q.J.Zd,K.D);fr(a)&&gr(a,c)};var Kr=function(a,b){var c=z,d,e=c.GooglebQhCsO;e||(e={},c.GooglebQhCsO=e);d=e;if(d[a])return!1;d[a]=[];d[a][0]=b;return!0};var Lr=function(a,b,c){var d=xl(a,"fmt");if(b){var e=xl(a,"random"),f=xl(a,"label")||"";if(!e)return!1;var g=fn(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!Kr(g,b))return!1}d&&4!=d&&(a=zl(a,"rfmt",d));var h=zl(a,"fmt",4);pc(h,function(){z.google_noFurtherRedirects&&b&&b.call&&(z.google_noFurtherRedirects=null,b())},void 0,c,H.getElementsByTagName("script")[0].parentElement||void 0);return!0};var as=function(){this.h={}},bs=function(a,b,c){null!=c&&(a.h[b]=c)},cs=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},es=function(a,b,c,d){};function gs(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return cj(""+c+b).href}}function hs(){return!!Kh.vf&&"SGTM_TOKEN"!==Kh.vf.split("@@").join("")};var js=function(a,b,c,d){if(!is()&&!jl(a)){var e=c?"/gtag/js":"/gtm.js",f="?id="+encodeURIComponent(a)+"&l="+Kh.ka,g=0===a.indexOf("GTM-");g||(f+="&cx=c");var h=hs();h&&(f+="&sign="+Kh.vf);var m=Th||Vh?gs(b,e+f):void 0;if(!m){var n=Kh.Pe+e;h&&gc&&g&&(n=gc.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0]);m=Uo("https://","http://",n+f)}var p=kl();dl().container[a]={state:1,context:d,parent:p};pc(m)}},ks=function(a,b,c){var d;if(d=!is()){var e=dl().destination[a];d=!(e&&e.state)}if(d)if(ll())dl().destination[a]=
{state:0,transportUrl:b,context:c,parent:kl()},O(91);else{var f="/gtag/destination?id="+encodeURIComponent(a)+"&l="+Kh.ka+"&cx=c";hs()&&(f+="&sign="+Kh.vf);var g=Th||Vh?gs(b,f):void 0;g||(g=Uo("https://","http://",Kh.Pe+f));dl().destination[a]={state:1,context:c,parent:kl()};pc(g)}};function is(){if(bl()){return!0}return!1};var ls=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ms={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ns={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},os="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),rs=function(a){var b=si("gtm.allowlist")||si("gtm.whitelist");b&&O(9);Rh&&(b=["google","gtagfl","lcl","zone"]);ps()&&(Rh?
O(116):O(117),qs&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728.")));var c=b&&Za(Qa(b),ms),d=si("gtm.blocklist")||si("gtm.blacklist");d||(d=si("tagTypeBlacklist"))&&O(3);d?O(8):d=[];ps()&&(d=Qa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Qa(d).indexOf("google")&&O(2);var e=d&&Za(Qa(d),ns),f={};return function(g){var h=g&&g[ne.Qb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var m=ci[h]||
[],n=a(h,m);if(b){var p;if(p=n)a:{if(0>c.indexOf(h))if(m&&0<m.length)for(var q=0;q<m.length;q++){if(0>c.indexOf(m[q])){O(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var r=!1;if(d){var t=0<=e.indexOf(h);if(t)r=t;else{var u=Ma(e,m||[]);u&&O(10);r=u}}var v=!n||r;v||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(v=Ma(e,os));return f[h]=v}},qs=!1;
var ps=function(){return ls.test(z.location&&z.location.hostname)};var ss={initialized:11,complete:12,interactive:13},ts={},us=Object.freeze((ts[P.g.Qa]=!0,ts)),vs=0<=H.location.search.indexOf("?gtm_diagnostics=")||0<=H.location.search.indexOf("&gtm_diagnostics="),xs=function(a,b,c){if(zm&&"config"===a&&!(1<Ro(b).K.length)){var d,e=hc("google_tag_data",{});e.td||(e.td={});d=e.td;var f=Vc(c.C);Vc(c.h,f);var g=[],h;for(h in d){var m=ws(d[h],f);m.length&&(vs&&console.log(m),g.push(h))}if(g.length){if(g.length){var n=b+"*"+g.join(".");Im=Im?Im+"!"+n:"&tdc="+n}vb("TAGGING",
ss[H.readyState]||14)}d[b]=f}};function ys(a,b){var c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=!0);for(var e in a)a.hasOwnProperty(e)&&(c[e]=!0);return c}function ws(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?"":d;if(a===b)return[];var e=function(q,r){var t=r[q];return void 0===t?us[q]:t},f;for(f in ys(a,b)){var g=(d?d+".":"")+f,h=e(f,a),m=e(f,b),n="object"===Sc(h)||"array"===Sc(h),p="object"===Sc(m)||"array"===Sc(m);if(n&&p)ws(h,m,c,g);else if(n||p||h!==m)c[g]=!0}return Object.keys(c)};var zs=!1,As=0,Bs=[];function Cs(a){if(!zs){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){zs=!0;for(var e=0;e<Bs.length;e++)I(Bs[e])}Bs.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Ds(){if(!zs&&140>As){As++;try{H.documentElement.doScroll("left"),Cs()}catch(a){z.setTimeout(Ds,50)}}}var Es=function(a){zs?a():Bs.push(a)};var Fs=function(){this.C=0;this.h={}};Fs.prototype.addListener=function(a,b,c){var d=++this.C;this.h[a]=this.h[a]||{};this.h[a][String(d)]={listener:b,lb:c};return d};Fs.prototype.m=function(a,b){var c=this.h[a],d=String(b);if(!c||!c[d])return!1;delete c[d];return!0};Fs.prototype.B=function(a,b){var c=[];l(this.h[a],function(d,e){0>c.indexOf(e.listener)&&(void 0===e.lb||0<=b.indexOf(e.lb))&&c.push(e.listener)});return c};var Gs=function(a,b,c){return{entityType:a,indexInOriginContainer:b,nameInOriginContainer:c,originContainerId:K.D}};function Hs(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var Js=function(a,b){this.h=!1;this.C=[];this.N={tags:[]};this.T=!1;this.m=this.B=0;Is(this,a,b)},Ks=function(a,b,c,d){if(Oh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Uc(d)&&(e=Vc(d,e));e.id=c;e.status="timeout";return a.N.tags.push(e)-1},Ls=function(a,b,c,d){var e=a.N.tags[b];e&&(e.status=c,e.executionTime=d)},Ms=function(a){if(!a.h){for(var b=a.C,c=0;c<b.length;c++)b[c]();a.h=!0;a.C.length=0}},Is=function(a,b,c){void 0!==b&&a.xf(b);c&&z.setTimeout(function(){return Ms(a)},Number(c))};
Js.prototype.xf=function(a){var b=this,c=Va(function(){return I(function(){a(K.D,b.N)})});this.h?c():this.C.push(c)};var Ns=function(a){a.B++;return Va(function(){a.m++;a.T&&a.m>=a.B&&Ms(a)})},Os=function(a){a.T=!0;a.m>=a.B&&Ms(a)};var Ps={},Qs=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]},Rs=!1;
function Us(){return z.GoogleAnalyticsObject||"ga"}
var Vs=function(a){},Ws=function(a,b){return function(){var c=Qs(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),m=0>g.indexOf("&tid="+b);m&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};function at(a,b,c,d){var e=Ne[a],f=bt(a,b,c,d);if(!f)return null;var g=Xe(e[ne.Oi],c,[]);if(g&&g.length){var h=g[0];f=at(h.index,{R:f,W:1===h.dj?b.terminate:f,terminate:b.terminate},c,d)}return f}
function bt(a,b,c,d){function e(){if(f[ne.lk])h();else{var w=Ze(f,c,[]),x=w[ne.Dj];if(null!=x)for(var y=0;y<x.length;y++)if(!tk(x[y])){h();return}var A=Ks(c.Tb,String(f[ne.Qb]),Number(f[ne.ee]),w[ne.mk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var G=Ta()-J;$m(c.id,Ne[a],"5");Ls(c.Tb,A,"success",G);T(70)&&Ir(c,f,$q.J.Ri);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var G=Ta()-J;$m(c.id,Ne[a],"6");Ls(c.Tb,A,"failure",G);T(70)&&Ir(c,f,$q.J.Qi);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);$m(c.id,f,"1");var D=function(){var G=Ta()-J;$m(c.id,f,"7");Ls(c.Tb,A,"exception",G);T(70)&&Ir(c,f,$q.J.Pi);B||(B=!0,h())};if(T(70)){var E=er($q.J.Wc,K.D,c.id,Number(f[ne.ee]),c.name,tm(f));fr(E)}var J=Ta();try{We(w,{event:c,index:a,type:1})}catch(G){D(G)}T(70)&&Ir(c,f,$q.J.Si)}}var f=Ne[a],g=b.R,h=b.W,m=b.terminate;if(c.gh(f))return null;var n=Xe(f[ne.Ti],c,[]);if(n&&n.length){var p=n[0],q=at(p.index,{R:g,W:h,terminate:m},c,d);if(!q)return null;
g=q;h=2===p.dj?m:q}if(f[ne.Ki]||f[ne.pk]){var r=f[ne.Ki]?Oe:c.dm,t=g,u=h;if(!r[a]){e=Va(e);var v=ct(a,r,e);g=v.R;h=v.W}return function(){r[a](t,u)}}return e}function ct(a,b,c){var d=[],e=[];b[a]=dt(d,e,c);return{R:function(){b[a]=et;for(var f=0;f<d.length;f++)d[f]()},W:function(){b[a]=ft;for(var f=0;f<e.length;f++)e[f]()}}}function dt(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function et(a){a()}function ft(a,b){b()};var ht=function(a,b){return 1===arguments.length?gt("set",a):gt("set",a,b)},it=function(a,b){return 1===arguments.length?gt("config",a):gt("config",a,b)},jt=function(a,b,c){c=c||{};c[P.g.Pb]=a;return gt("event",b,c)};function gt(a){return arguments}var kt=function(){this.h=[];this.m=[]};kt.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.m.length;f++)try{this.m[f](e)}catch(g){}};kt.prototype.listen=function(a){this.m.push(a)};
kt.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};kt.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var mt=function(a,b,c){lt().enqueue(a,b,c)},ot=function(){var a=nt;lt().listen(a)};function lt(){var a=Lh.mb;a||(a=new kt,Lh.mb=a);return a}var au=function(a){var b=Lh.zones;return b?b.getIsAllowedFn(fl(),a):function(){return!0}},bu=function(a){var b=Lh.zones;return b?b.isActive(fl(),a):!0};var eu=function(a,b){for(var c=[],d=0;d<Ne.length;d++)if(a[d]){var e=Ne[d];var f=Ns(b.Tb);try{var g=at(d,{R:f,W:f,terminate:f},b,d);if(g){var h=e["function"];if(!h)throw"Error: No function name given for function call.";var m=Pe[h];c.push({vj:d,nj:(m?m.priorityOverride||0:0)||Hs(e[ne.Qb],1)||0,execute:g})}else cu(d,b),f()}catch(p){f()}}c.sort(du);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
var gu=function(a,b){if(!fu)return!1;var c=a["gtm.triggers"]&&String(a["gtm.triggers"]),d=fu.B(a.event,c?String(c).split(","):[]);if(!d.length)return!1;for(var e=0;e<d.length;++e){var f=Ns(b);try{d[e](a,f)}catch(g){f()}}return!0};function du(a,b){var c,d=b.nj,e=a.nj;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.vj,h=b.vj;f=g>h?1:g<h?-1:0}return f}
function cu(a,b){if(zm){var c=function(d){var e=b.gh(Ne[d])?"3":"4",f=Xe(Ne[d][ne.Oi],b,[]);f&&f.length&&c(f[0].index);$m(b.id,Ne[d],e);var g=Xe(Ne[d][ne.Ti],b,[]);g&&g.length&&c(g[0].index)};c(a)}}var hu=!1,fu;var iu=function(){fu||(fu=new Fs);return fu};
var nu=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(T(70)){var e=er($q.J.Xd,K.D,b,void 0,d);fr(e)}if("gtm.js"===d){if(hu)return!1;hu=!0}var f,g=!1;if(bu(b))f=au(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==d)return!1;g=!0;f=au(Number.MAX_SAFE_INTEGER)}Zm(b,d);var h=a.eventCallback,m=a.eventTimeout,n={id:b,priorityId:c,name:d,gh:rs(f),dm:[],jj:function(){O(6);vb("HEALTH",0)},Xi:ju(),Yi:ku(b),Tb:new Js(function(){if(T(70)){var v=er($q.J.Ci,K.D,b,void 0,
d);if(fr(v)){var w=er($q.J.Xd,K.D,b,void 0,d);gr(v,w)}if("gtm.load"===d){var x=er($q.J.Lh,K.D);if(fr(x)){var y=er($q.J.Rf,K.D);gr(x,y)}Hr();}}h&&h.apply(h,[].slice.call(arguments,0))},m)},p=hf(n);g&&(p=lu(p));if(T(70)){var q=er($q.J.Di,K.D,b,void 0,d);if(fr(q)){var r=
er($q.J.Xd,K.D,b,void 0,d);gr(q,r)}}var t=eu(p,n),u=!1;u=gu(a,n.Tb);Os(n.Tb);"gtm.js"!==d&&"gtm.sync"!==d||Vs(K.D);return mu(p,t)||u};function ku(a){return function(b){zm&&(Zc(b)||bn(a,"input",b))}}function ju(){var a={};a.event=xi("event",1);a.ecommerce=xi("ecommerce",1);a.gtm=xi("gtm");a.eventModel=xi("eventModel");return a}
function lu(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(Ne[c][ne.Qb]);if(Nh[d]||void 0!==Ne[c][ne.qk]||li[d]||Hs(d,2))b[c]=!0}return b}function mu(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Ne[c]&&!Oh[String(Ne[c][ne.Qb])])return!0;return!1}var pu=function(a,b,c,d){ou.push("event",[b,a],c,d)},qu=function(a,b,c,d){ou.push("get",[a,b],c,d)},ru=function(){this.status=1;this.N={};this.h={};this.m={};this.T=null;this.C={};this.B=!1},su=function(a,b,c,d){var e=Ta();this.type=a;this.m=e;this.da=b||"";this.h=c;this.messageContext=d},tu=function(){this.m={};this.B={};this.h=[]},uu=function(a,b){var c=Ro(b);return a.m[c.Z]=a.m[c.Z]||new ru},vu=function(a,b,c,d){if(d.da){var e=uu(a,d.da),f=e.T;if(f){var g=Vc(c),h=Vc(e.N[d.da]),m=Vc(e.C),n=Vc(e.h),
p=Vc(a.B),q={};if(zm)try{q=Vc(pi)}catch(v){O(72)}var r=Ro(d.da).prefix,t=function(v){an(d.messageContext.eventId,r,v);var w=g[P.g.fc];w&&I(w)},u=Sp(Qp(Pp(Op(Mp(Lp(Np(Kp(Jp(Ip(new Hp(d.messageContext.eventId,d.messageContext.priorityId),g),h),m),n),p),q),d.messageContext.eventMetadata),function(){if(t){var v=t;t=void 0;v("2")}}),function(){if(t){var v=t;t=void 0;v("3")}}));try{an(d.messageContext.eventId,r,"1"),xs(d.type,d.da,u),f(d.da,b,d.m,u)}catch(v){an(d.messageContext.eventId,r,"4")}}}};
tu.prototype.register=function(a,b,c){var d=uu(this,a);3!==d.status&&(d.T=b,d.status=3,c&&(Vc(d.h,c),d.h=c),this.flush())};tu.prototype.push=function(a,b,c,d){if(void 0!==c){if(!Ro(c))return;if(c){var e=Ro(c);e&&1===uu(this,c).status&&(uu(this,c).status=2,this.push("require",[{}],e.Z,{}))}uu(this,c).B&&(d.deferrable=!1)}this.h.push(new su(a,c,b,d));d.deferrable||this.flush()};
tu.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.h.length;){var f=this.h[0];if(f.messageContext.deferrable)!f.da||uu(this,f.da).B?(f.messageContext.deferrable=!1,this.h.push(f)):c.push(f),this.h.shift();else{var g=void 0;switch(f.type){case "require":g=uu(this,f.da);if(3!==g.status&&!a){this.h.push.apply(this.h,c);return}break;case "set":l(f.h[0],function(r,t){Vc(bb(r,t),b.B)});break;case "config":g=uu(this,f.da);e.Db={};l(f.h[0],function(r){return function(t,u){Vc(bb(t,u),r.Db)}}(e));
var h=!!e.Db[P.g.Uc];delete e.Db[P.g.Uc];var m=Ro(f.da),n=m.Z===m.id;h||(n?g.C={}:g.N[f.da]={});g.B&&h||vu(this,P.g.ra,e.Db,f);g.B=!0;n?Vc(e.Db,g.C):(Vc(e.Db,g.N[f.da]),O(70));d=!0;break;case "event":g=uu(this,f.da);e.Ie={};l(f.h[0],function(r){return function(t,u){Vc(bb(t,u),r.Ie)}}(e));vu(this,f.h[1],e.Ie,f);break;case "get":g=uu(this,f.da);var p={},q=(p[P.g.Pa]=f.h[0],p[P.g.cb]=f.h[1],p);vu(this,P.g.Ga,q,f)}this.h.shift();wu(this,f)}e={Db:e.Db,Ie:e.Ie}}this.h.push.apply(this.h,c);d&&this.flush()};
var wu=function(a,b){if("require"!==b.type)if(b.da)for(var c=uu(a,b.da).m[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.m)if(a.m.hasOwnProperty(e)){var f=a.m[e];if(f&&f.m)for(var g=f.m[b.type]||[],h=0;h<g.length;h++)g[h]()}},xu=function(a,b){var c=ou,d=Vc(b);Vc(uu(c,a).h,d);uu(c,a).h=d},ou=new tu;var qf;var yu={},zu={},Au=function(a){for(var b=[],c=[],d={},e=0;e<a.length;d={Ne:d.Ne,Ke:d.Ke},e++){var f=a[e];if(0<=f.indexOf("-"))d.Ne=Ro(f),d.Ne&&(Ia(gl(),function(p){return function(q){return p.Ne.Z===q}}(d))?b.push(f):c.push(f));else{var g=yu[f]||[];d.Ke={};g.forEach(function(p){return function(q){return p.Ke[q]=!0}}(d));for(var h=fl(),m=0;m<h.length;m++)if(d.Ke[h[m]]){b=b.concat(gl());break}var n=zu[f]||[];n.length&&(b=b.concat(n))}}return{Al:b,Dl:c}},Bu=function(a){l(yu,function(b,c){var d=c.indexOf(a);
0<=d&&c.splice(d,1)})},Cu=function(a){l(zu,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var Du="HA GF G UA AW DC MC".split(" "),Eu=!1,Fu=!1;function Gu(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:mi()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}function Hu(a){return!!(a&&a.parent&&a.context&&1===a.context.source&&0!==a.parent.ctid.indexOf("GTM-"))}
var Iu=void 0,Ju=void 0,Ku=!1,Lu={config:function(a,b){var c=Gu(a,b);if(!(2>a.length)&&k(a[1])){var d={};if(2<a.length){if(void 0!=a[2]&&!Uc(a[2])||3<a.length)return;d=a[2]}var e=Ro(a[1]);if(e){if(!Ku){var f;a:{if(!K.pf){var g=hl(kl()),h;if(Hu(g))for(var m=g.parent;m;){h=m.isDestination;var n=hl(m);if(!Hu(n)){f={Rl:n,zl:h};break a}m=n.parent}}f=void 0}var p=f;p&&(Iu=p.Rl,Ju=p.zl);Ku=!0}Zm(c.eventId,"gtag.config");var q=e.Z,r=e.id!==q;if(r?-1===gl().indexOf(q):-1===fl().indexOf(q)){if(!T(61)||!d[P.g.fb]){var t=
d[P.g.za]||ou.B[P.g.za];r?ks(q,t,{source:2,fromContainerExecution:b.fromContainerExecution}):(void 0!==Iu&&-1!==Iu.containers.indexOf(q)&&O(129),js(q,t,!0,{source:2,fromContainerExecution:b.fromContainerExecution}))}}else{if(Qh&&!r&&!d[P.g.Uc]){var u=Fu;Fu=!0;if(u)return}Eu||O(43);if(!b.noTargetGroup)if(r){Cu(e.id);var v=e.id,w=d[P.g.Id]||"default";w=String(w).split(",");for(var x=0;x<w.length;x++){var y=zu[w[x]]||[];zu[w[x]]=y;0>y.indexOf(v)&&y.push(v)}}else{Bu(e.id);var A=e.id,B=d[P.g.Id]||"default";
B=B.toString().split(",");for(var D=0;D<B.length;D++){var E=yu[B[D]]||[];yu[B[D]]=E;0>E.indexOf(A)&&E.push(A)}}delete d[P.g.Id];var J=b.eventMetadata||{};J.hasOwnProperty("is_external_event")||(J.is_external_event=!b.fromContainerExecution);b.eventMetadata=J;delete d[P.g.fc];var G=r?[e.id]:gl();Iu&&(O(128),Ju&&O(130));for(var N=0;N<G.length;N++){var Q=Vc(b);ou.push("config",[d],G[N],Q)}}}}},consent:function(a,b){if(3===a.length){O(39);var c=Gu(a,b),d=a[1];"default"===d?pk(a[2]):"update"===d?qk(a[2],
c):"declare"===d?b.fromContainerExecution&&ok(a[2]):"core_platform_services"===d&&rk(a[2])}},event:function(a,b){var c=a[1];if(!(2>a.length)&&k(c)){var d;if(2<a.length){if(!Uc(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},g=(f.event=c,f);e&&(g.eventModel=Vc(e),e[P.g.fc]&&(g.eventCallback=e[P.g.fc]),e[P.g.Cd]&&(g.eventTimeout=e[P.g.Cd]));var h=Gu(a,b),m=h.eventId,n=h.priorityId;g["gtm.uniqueEventId"]=m;n&&(g["gtm.priorityId"]=n);if("optimize.callback"===c)return g.eventModel=g.eventModel||
{},g;var p;var q=d,r=q&&q[P.g.Pb];void 0===r&&(r=si(P.g.Pb,2),void 0===r&&(r="default"));if(k(r)||Ha(r)){var t=r.toString().replace(/\s+/g,"").split(","),u=Au(t),v=u.Al,w=u.Dl;if(w.length)for(var x=q&&q[P.g.za]||ou.B[P.g.za],y=0;y<w.length;y++){var A=Ro(w[y]);A&&ks(A.Z,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=To(v)}else p=void 0;var B=p;if(B){Zm(m,c);for(var D=[],E=0;E<B.length;E++){var J=B[E],G=Vc(b);if(-1!==Du.indexOf(J.prefix)){var N=Vc(d),Q=G.eventMetadata||{};Q.hasOwnProperty("is_external_event")||
(Q.is_external_event=!G.fromContainerExecution);G.eventMetadata=Q;delete N[P.g.fc];pu(c,N,J.id,G)}D.push(J.id)}g.eventModel=g.eventModel||{};0<B.length?g.eventModel[P.g.Pb]=D.join():delete g.eventModel[P.g.Pb];Eu||O(43);T(101)&&void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:g}}},get:function(a,b){O(53);if(4===a.length&&k(a[1])&&k(a[2])&&Fa(a[3])){var c=Ro(a[1]),d=String(a[2]),e=a[3];if(c){Eu||O(43);var f=ou.B[P.g.za];if(!Ia(gl(),function(h){return c.Z===
h}))ks(c.Z,f,{source:4,fromContainerExecution:b.fromContainerExecution});else if(-1!==Du.indexOf(c.prefix)){Gu(a,b);var g={};hk(Vc((g[P.g.Pa]=d,g[P.g.cb]=e,g)));qu(d,function(h){I(function(){return e(h)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){Eu=!0;var c=Gu(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(a){if(3===a.length&&k(a[1])&&Fa(a[2])){var b=a[1],c=a[2],d=qf.m;
d.h[b]?d.h[b].push(c):d.h[b]=[c];if(O(74),"all"===a[1]){O(75);var e=!1;try{e=a[2](K.D,"unknown",{})}catch(f){}e||O(76)}}else{O(73);}},set:function(a,b){var c;2==a.length&&Uc(a[1])?c=Vc(a[1]):3==a.length&&k(a[1])&&(c={},Uc(a[2])||Ha(a[2])?c[a[1]]=Vc(a[2]):c[a[1]]=
a[2]);if(c){var d=Gu(a,b),e=d.eventId,f=d.priorityId;Vc(c);var g=Vc(c);ou.push("set",[g],void 0,b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);T(30)&&delete c.event;b.overwriteModelFields=!0;return c}}},Mu={policy:!0};var Nu=function(a){var b=z[Kh.ka].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},Ou=function(a){var b=z[Kh.ka],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Pu=!1,Qu=[];function Ru(){if(!Pu){Pu=!0;for(var a=0;a<Qu.length;a++)I(Qu[a])}}var Su=function(a){Pu?I(a):Qu.push(a)};var iv=function(a){if(hv(a))return a;this.h=a};iv.prototype.getUntrustedMessageValue=function(){return this.h};var hv=function(a){return!a||"object"!==Sc(a)||Uc(a)?!1:"getUntrustedMessageValue"in a};iv.prototype.getUntrustedMessageValue=iv.prototype.getUntrustedMessageValue;var jv=0,kv={},lv=[],mv=[],nv=!1,ov=!1;function pv(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}var qv=function(a){return z[Kh.ka].push(a)},rv=function(a,b,c){a.eventCallback=b;c&&(a.eventTimeout=c);return qv(a)},sv=function(a,b){var c=Lh[Kh.ka],d=c?c.subscribers:1,e=0,f=!1,g=void 0;b&&(g=z.setTimeout(function(){f||(f=!0,a());g=void 0},b));return function(){++e===d&&(g&&(z.clearTimeout(g),g=void 0),f||(a(),f=!0))}};
function tv(a,b){var c=a._clear||b.overwriteModelFields;l(a,function(e,f){"_clear"!==e&&(c&&vi(e),vi(e,f))});$h||($h=a["gtm.start"]);var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=mi(),a["gtm.uniqueEventId"]=d,vi("gtm.uniqueEventId",d));return nu(a)}
function uv(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Na(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function vv(){var a;if(mv.length)a=mv.shift();else if(lv.length)a=lv.shift();else return;var b;var c=a;if(nv||!uv(c.message))b=c;else{nv=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=mi());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},g={},h={message:(g.event="gtm.init",g["gtm.uniqueEventId"]=d-1,g),messageContext:{eventId:d-1}};lv.unshift(h,c);if(zm&&K.D){var m,n=hl(kl());m=n&&n.context;
var p,q=cj(z.location.href);p=q.hostname+q.pathname;var r=m&&m.fromContainerExecution,t=m&&m.source,u=K.D,v=K.Gb,w=K.pf;Km||(Km=p);Jm.push(u+";"+v+";"+(r?1:0)+";"+(t||0)+";"+(w?1:0))}b=f}return b}
function wv(){for(var a=!1,b;!ov&&(b=vv());){ov=!0;delete pi.eventModel;ri();var c=b,d=c.message,e=c.messageContext;if(null==d)ov=!1;else{e.fromContainerExecution&&wi();try{if(Fa(d))try{d.call(ti)}catch(x){}else if(Ha(d)){var f=d;if(k(f[0])){var g=f[0].split("."),h=g.pop(),m=f.slice(1),n=si(g.join("."),2);if(null!=n)try{n[h].apply(n,m)}catch(x){}}}else{var p=void 0,q=!1;if(Na(d)){a:{if(d.length&&k(d[0])){var r=Lu[d[0]];if(r&&(!e.fromContainerExecution||!Mu[d[0]])){p=r(d,e);break a}}p=void 0}(q=p&&
"set"===d[0]&&!!p.event)&&O(101)}else p=d;if(p){var t=tv(p,e);a=t||a;q&&t&&O(113)}}}finally{e.fromContainerExecution&&ri(!0);var u=d["gtm.uniqueEventId"];if("number"===typeof u){for(var v=kv[String(u)]||[],w=0;w<v.length;w++)mv.push(xv(v[w]));v.length&&mv.sort(pv);delete kv[String(u)];u>jv&&(jv=u)}ov=!1}}}return!a}function yv(){if(T(70)){var a=er($q.J.Rf,K.D);fr(a);if(zv()){var b=er($q.J.Nh,K.D);if(fr(b)){var c=er($q.J.Tf,K.D);gr(b,c)}}}var d=wv();try{Nu(K.D)}catch(e){}return d}
function nt(a){if(jv<a.notBeforeEventId){var b=String(a.notBeforeEventId);kv[b]=kv[b]||[];kv[b].push(a)}else mv.push(xv(a)),mv.sort(pv),I(function(){ov||wv()})}function xv(a){return{message:a.message,messageContext:a.messageContext}}
var Av=function(){function a(g){var h={};if(hv(g)){var m=g;g=hv(m)?m.getUntrustedMessageValue():void 0;h.fromContainerExecution=!0}return{message:g,messageContext:h}}var b=hc(Kh.ka,[]),c=Lh[Kh.ka]=Lh[Kh.ka]||{};!0===c.pruned&&O(83);kv=lt().get();ot();Es(function(){if(!c.gtmDom){c.gtmDom=!0;var g={};b.push((g.event="gtm.dom",g))}});Su(function(){if(!c.gtmLoad){c.gtmLoad=!0;var g={};b.push((g.event="gtm.load",g))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var g;if(0<Lh.SANDBOXED_JS_SEMAPHORE){g=
[];for(var h=0;h<arguments.length;h++)g[h]=new iv(arguments[h])}else g=[].slice.call(arguments,0);var m=g.map(function(r){return a(r)});lv.push.apply(lv,m);var n=d.apply(b,g),p=Math.max(100,Number("1000")||300);if(this.length>p)for(O(4),c.pruned=!0;this.length>p;)this.shift();var q="boolean"!==typeof n||n;return wv()&&q};var e=b.slice(0).map(function(g){return a(g)});lv.push.apply(lv,e);if(zv()){if(T(70)){var f=er($q.J.Tf,K.D);fr(f)}I(yv)}},zv=function(){var a=!0;return a};function Bv(a){if(null==a||0===a.length)return!1;var b=Number(a),c=Ta();return b<c+3E5&&b>c-9E5}function Cv(a){return a&&0===a.indexOf("pending:")?Bv(a.substr(8)):!1};var Se={};Se.nf=new String("undefined");
var Ov=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":Ac(a,"className"),"gtm.elementId":a["for"]||vc(a,"id")||"","gtm.elementTarget":a.formTarget||Ac(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||Ac(a,"href")||a.src||a.code||a.codebase||"";return d},Pv=function(a){Lh.hasOwnProperty("autoEventsSettings")||(Lh.autoEventsSettings={});var b=Lh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Qv=function(a,b,c){Pv(a)[b]=c},Rv=function(a,b,c,d){var e=Pv(a),f=Ua(e,b,d);e[b]=c(f)},Sv=function(a,b,c){var d=Pv(a);return Ua(d,b,c)},Tv=function(a){return"string"===typeof a?a:String(mi())};
var Uv=["input","select","textarea"],Vv=["button","hidden","image","reset","submit"],Wv=function(a){var b=a.tagName.toLowerCase();return 0>Uv.indexOf(b)||"input"===b&&0<=Vv.indexOf(a.type.toLowerCase())?!1:!0},Xv=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):yc(a,["form"],100)},Yv=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Wv(g)){if(g.dataset[c]===d)return f;f++}}return 0};var Zv=!!z.MutationObserver,$v=void 0,aw=function(a){if(!$v){var b=function(){var c=H.body;if(c)if(Zv)(new MutationObserver(function(){for(var e=0;e<$v.length;e++)I($v[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;tc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<$v.length;e++)I($v[e])}))})}};$v=[];H.body?b():I(b)}$v.push(a)};
var lw=function(a,b,c){function d(){var g=a();f+=e?(Ta()-e)*g.playbackRate/1E3:0;e=Ta()}var e=0,f=0;return{createEvent:function(g,h,m){var n=a(),p=n.Xg,q=void 0!==m?Math.round(m):void 0!==h?Math.round(n.Xg*h):Math.round(n.bj),r=void 0!==h?Math.round(100*h):0>=p?0:Math.round(q/p*100),t=H.hidden?!1:.5<=Pi(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=Ov(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=n.url;v["gtm.videoTitle"]=n.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(q);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=t;return v},rj:function(){e=Ta()},Xc:function(){d()}}};var mw=z.clearTimeout,nw=z.setTimeout,V=function(a,b,c,d){if(bl()){b&&I(b)}else return pc(a,b,c,d)},ow=function(){return new Date},pw=function(){return z.location.href},qw=function(a){return aj(cj(a),"fragment")},rw=function(a){return bj(cj(a))},sw=function(a,b){return si(a,b||2)},tw=function(a,b,c){return b?rv(a,b,c):qv(a)},uw=function(a,b){z[a]=b},W=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},
vw=function(a,b,c){return Jk(a,b,void 0===c?!0:!!c)},ww=function(a,b,c){return 0===Sk(a,b,c)},xw=function(a,b){if(bl()){b&&I(b)}else rc(a,b)},yw=function(a){return!!Sv(a,"init",!1)},zw=function(a){Qv(a,"init",!0)},Aw=function(a,b,c){zm&&(Zc(a)||bn(c,b,a))};function Yw(a,b){function c(g){var h=cj(g),m=aj(h,"protocol"),n=aj(h,"host",!0),p=aj(h,"port"),q=aj(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Zw(a){return $w(a)?1:0}
function $w(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=Vc(a,{});Vc({arg1:c[d],any_of:void 0},e);if(Zw(e))return!0}return!1}switch(a["function"]){case "_cn":return Qf(b,c);case "_css":var f;a:{if(b)try{for(var g=0;g<Mf.length;g++){var h=Mf[g];if(b[h]){f=b[h](c);break a}}}catch(m){}f=!1}return f;case "_ew":return Nf(b,c);case "_eq":return Rf(b,c);case "_ge":return Sf(b,c);case "_gt":return Uf(b,c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));
case "_le":return Tf(b,c);case "_lt":return Vf(b,c);case "_re":return Pf(b,c,a.ignore_case);case "_sw":return Wf(b,c);case "_um":return Yw(b,c)}return!1};function ax(a,b){var c=this;}ax.O="addConsentListener";var bx;var cx=function(a){for(var b=0;b<a.length;++b)if(bx)try{a[b]()}catch(c){O(77)}else a[b]()};function dx(a,b,c){var d=this,e;L(F(this),["eventName:!string","callback:!Fn","triggerId:?string"],arguments),cx([function(){return M(d,"listen_data_layer",a)}]),e=iu().addListener(a,Xc(b),c);return e}dx.M="internal.addDataLayerEventListener";function ex(a,b,c){}ex.O="addDocumentEventListener";function fx(a,b,c,d){}fx.O="addElementEventListener";function gx(a){}gx.O="addEventCallback";
function kx(a){}kx.M="internal.addFormAbandonmentListener";var lx={},mx=[],nx={},ox=0,px=0;
var rx=function(){tc(H,"change",function(a){for(var b=0;b<mx.length;b++)mx[b](a)});tc(z,"pagehide",function(){qx()})},qx=function(){l(nx,function(a,b){var c=lx[a];c&&l(b,function(d,e){sx(e,c)})})},vx=function(a,b){var c=""+a;if(lx[c])lx[c].push(b);else{var d=[b];lx[c]=d;var e=nx[c];e||(e={},nx[c]=e);mx.push(function(f){var g=f.target;if(g){var h=Xv(g);if(h){var m=tx(h,"gtmFormInteractId",function(){return ox++}),n=tx(g,"gtmFormInteractFieldId",function(){return px++}),p=e[m];p?(p.Fa&&(z.clearTimeout(p.Fa),
p.qa.dataset.gtmFormInteractFieldId!==n&&sx(p,d)),p.qa=g,ux(p,d,a)):(e[m]={form:h,qa:g,Ub:0,Fa:null},ux(e[m],d,a))}}})}},sx=function(a,b){var c=a.form,d=a.qa,e=Ov(c,"gtm.formInteract"),f=c.action;f&&f.tagName&&(f=c.cloneNode(!1).action);e["gtm.elementUrl"]=f;e["gtm.interactedFormName"]=c.getAttribute("name");e["gtm.interactedFormLength"]=c.length;e["gtm.interactedFormField"]=d;e["gtm.interactedFormFieldPosition"]=Yv(c,d,"gtmFormInteractFieldId");e["gtm.interactSequenceNumber"]=a.Ub;e["gtm.interactedFormFieldId"]=
d.id;e["gtm.interactedFormFieldName"]=d.getAttribute("name");e["gtm.interactedFormFieldType"]=d.getAttribute("type");for(var g=0;g<b.length;g++)b[g](e);a.Ub++;a.Fa=null},ux=function(a,b,c){c?a.Fa=z.setTimeout(function(){sx(a,b)},c):sx(a,b)},tx=function(a,b,c){var d=a.dataset[b];if(d)return d;d=String(c());return a.dataset[b]=d};
function wx(a,b){L(F(this),["callback:!Fn","options:?*"],arguments);var c=Xc(b)||{},d=Number(c.interval);if(!d||0>d)d=0;var e=Xc(a),f;Sv("pix.fil","init")?f=Sv("pix.fil","reg"):(rx(),f=vx,Qv("pix.fil","reg",vx),Qv("pix.fil","init",!0));f(d,e);}wx.M="internal.addFormInteractionListener";
var yx=function(a,b,c){var d=Ov(a,"gtm.formSubmit");d["gtm.interactedFormName"]=a.getAttribute("name");d["gtm.interactedFormLength"]=a.length;d["gtm.willOpenInCurrentWindow"]=!b&&xx(a);c&&c.value&&(d["gtm.formSubmitButtonText"]=c.value);var e=a.action;e&&e.tagName&&(e=a.cloneNode(!1).action);d["gtm.elementUrl"]=e;return d},zx=function(a,b){var c=Sv("pix.fsl",a?"nv.mwt":"mwt",0);z.setTimeout(b,c)},Ax=function(a,b,c,d,e){var f=Sv("pix.fsl",c?"nv.mwt":"mwt",0),g=Sv("pix.fsl",c?"runIfCanceled":"runIfUncanceled",
[]);if(!g.length)return!0;var h=yx(a,c,e);O(121);"https://www.facebook.com/tr/"===h["gtm.elementUrl"]&&O(122);if(T(79)&&"https://www.facebook.com/tr/"===h["gtm.elementUrl"])return!0;if(d&&f){for(var m=eb(b,g.length),n=0;n<g.length;++n)g[n](h,m);return m.done}for(var p=0;p<g.length;++p)g[p](h,function(){});return!0},Bx=function(){var a=[],b=function(c){return Ia(a,function(d){return d.form===c})};return{store:function(c,d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(c){var d=b(c);
return d?d.button:null}}},xx=function(a){var b=Ac(a,"target");return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0},Cx=function(){var a=Bx(),b=HTMLFormElement.prototype.submit;tc(H,"click",function(c){var d=c.target;if(d&&(d=yc(d,["button","input"],100))&&("submit"==d.type||"image"==d.type)&&d.name&&vc(d,"value")){var e=Xv(d);e&&a.store(e,d)}},!1);tc(H,"submit",function(c){var d=c.target;if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=xx(d)&&!e,g=a.get(d),h=!0,m=function(){if(h){var n;
g&&(n=H.createElement("input"),n.type="hidden",n.name=g.name,n.value=g.value,d.appendChild(n));b.call(d);n&&d.removeChild(n)}};if(Ax(d,m,e,f,g))return h=!1,c.returnValue;zx(e,m);e||(c.preventDefault&&c.preventDefault(),c.returnValue=!1);return!1},!1);HTMLFormElement.prototype.submit=function(){var c=this,d=!0,e=function(){d&&b.call(c)};Ax(c,e,!1,xx(c))?(b.call(c),d=!1):zx(!1,e)}};
function Dx(a,b){L(F(this),["callback:!Fn","options:?DustMap"],arguments);var c=Xc(b)||{},d=c.waitForCallbacks,e=c.waitForCallbacksTimeout,f=c.checkValidation;e=e&&0<e?e:2E3;var g=Xc(a);if(d){var h=function(n){return Math.max(e,n)};Rv("pix.fsl","mwt",h,0);f||Rv("pix.fsl","nv.mwt",h,0)}var m=function(n){n.push(g);return n};Rv("pix.fsl","runIfUncanceled",m,[]);f||Rv("pix.fsl","runIfCanceled",m,[]);Sv("pix.fsl","init")||(Cx(),Qv("pix.fsl",
"init",!0));}Dx.M="internal.addFormSubmitListener";
function Ix(a){}Ix.M="internal.addGaSendListener";var Jx={},Kx=[];
var Rx=function(a,b){};
Rx.M="internal.addHistoryChangeListener";function Sx(a,b,c){}Sx.O="addWindowEventListener";function Tx(a,b){return!0}Tx.O="aliasInWindow";function Ux(a,b,c){}Ux.M="internal.appendRemoteConfigParameter";function Vx(){var a=2;return a};function Wx(a,b){var c;return c}Wx.O="callInWindow";function Xx(a){}Xx.O="callLater";function Yx(a){}Yx.M="callOnDomReady";function Zx(a){}Zx.M="callOnWindowLoad";function $x(a){var b;return b}$x.M="internal.computeGtmParameter";function ay(a,b){var c;var d=Wc(c,this.h,Vx());void 0===d&&void 0!==c&&O(45);return d}ay.O="copyFromDataLayer";function by(a){var b;return b}by.O="copyFromWindow";function cy(a,b){var c;L(F(this),["preHit:!DustMap","dustOptions:?DustMap"],arguments);var d=Xc(b)||{},e=Xc(a,this.h,1).Ff(),f=new fp(e.target,e.eventName,e.h);d.omitHitData||Vc(e.m,f.m);d.omitMetadata?f.metadata={}:Vc(e.metadata,f.metadata);f.H=e.H;c=Wc(hp(f),this.h,1);return c}cy.M="internal.copyPreHit";function dy(a,b){var c=null,d=Vx();return Wc(c,this.h,d)}dy.O="createArgumentsQueue";function ey(a){var b;return Wc(b,this.h,
Vx())}ey.O="createQueue";function fy(a){if(!a)return{};var b=a.Jk;return Gs(b.type,b.index,b.name)}function gy(a){return a?{originatingEntity:fy(a)}:{}};function hy(a){}hy.M="internal.declareConsentState";var iy={},jy=[],ky={},ly=0,my=0;
var oy=function(){l(ky,function(a,b){var c=iy[a];c&&l(b,function(d,e){ny(e,c)})})},ry=function(a,b){var c=""+b;if(iy[c])iy[c].push(a);else{var d=[a];iy[c]=d;var e=ky[c];e||(e={},ky[c]=e);jy.push(function(f){var g=f.target;if(g){var h=Xv(g);if(h){var m=py(h,"gtmFormInteractId",function(){return ly++}),n=py(g,"gtmFormInteractFieldId",function(){return my++});if(null!==m&&null!==n){var p=e[m];p?(p.Fa&&(z.clearTimeout(p.Fa),p.qa.getAttribute("data-gtm-form-interact-field-id")!==n&&ny(p,d)),p.qa=g,qy(p,
d,b)):(e[m]={form:h,qa:g,Ub:0,Fa:null},qy(e[m],d,b))}}}})}},ny=function(a,b){var c=a.form,d=a.qa,e=Ov(c,"gtm.formInteract",b),f=c.action;f&&f.tagName&&(f=c.cloneNode(!1).action);e["gtm.elementUrl"]=f;e["gtm.interactedFormName"]=null!=c.getAttribute("name")?c.getAttribute("name"):void 0;e["gtm.interactedFormLength"]=c.length;e["gtm.interactedFormField"]=d;e["gtm.interactedFormFieldId"]=d.id;e["gtm.interactedFormFieldName"]=null!=d.getAttribute("name")?d.getAttribute("name"):void 0;e["gtm.interactedFormFieldPosition"]=
Yv(c,d,"gtmFormInteractFieldId");e["gtm.interactedFormFieldType"]=null!=d.getAttribute("type")?d.getAttribute("type"):void 0;e["gtm.interactSequenceNumber"]=a.Ub;qv(e);a.Ub++;a.Fa=null},qy=function(a,b,c){c?a.Fa=z.setTimeout(function(){ny(a,b)},c):ny(a,b)},py=function(a,b,c){var d;try{if(d=a.dataset[b])return d;d=String(c());a.dataset[b]=d}catch(e){d=null}return d};
function sy(a,b){var c=this;L(F(this),["options:?DustMap","triggerId:?*"],arguments);cx([function(){return M(c,"process_dom_events","document","change")},function(){return M(c,"process_dom_events","window","pagehide")}]);b=Tv(b);var d=a&&Number(a.get("interval"));0<d&&isFinite(d)||(d=0);if(Sv("fil","init",!1)){var e=Sv("fil","reg");if(e)e(b,d);else throw Error("Failed to register trigger: "+b);}else tc(H,"change",function(f){for(var g=
0;g<jy.length;g++)jy[g](f)}),tc(z,"pagehide",function(){oy()}),ry(b,d),Qv("fil","reg",ry),Qv("fil","init",!0);return b}sy.M="internal.enableAutoEventOnFormInteraction";
var ty=function(a,b,c,d,e){var f=Sv("fsl",c?"nv.mwt":"mwt",0),g;g=c?Sv("fsl","nv.ids",[]):Sv("fsl","ids",[]);if(!g.length)return!0;var h=Ov(a,"gtm.formSubmit",g),m=a.action;m&&m.tagName&&(m=a.cloneNode(!1).action);O(121);"https://www.facebook.com/tr/"===m&&O(122);if(T(79)&&"https://www.facebook.com/tr/"===m)return!0;h["gtm.elementUrl"]=m;null!=a.getAttribute("name")&&(h["gtm.interactedFormName"]=a.getAttribute("name"));e&&(h["gtm.formSubmitElement"]=e,h["gtm.formSubmitElementText"]=e.value);if(d&&
f){if(!rv(h,sv(b,f),f))return!1}else rv(h,function(){},f||2E3);return!0},uy=function(){var a=[],b=function(c){return Ia(a,function(d){return d.form===c})};return{store:function(c,d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(c){var d=b(c);return d?d.button:null}}},vy=function(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0},wy=function(){var a=uy(),b=HTMLFormElement.prototype.submit;tc(H,"click",function(c){var d=c.target;if(d&&(d=yc(d,["button","input"],
100))&&("submit"==d.type||"image"==d.type)&&d.name&&vc(d,"value")){var e=Xv(d);e&&a.store(e,d)}},!1);tc(H,"submit",function(c){var d=c.target;if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=vy(d)&&!e,g=a.get(d),h=!0;if(ty(d,function(){if(h){var m;g&&(m=H.createElement("input"),m.type="hidden",m.name=g.name,m.value=g.value,d.appendChild(m));b.call(d);m&&d.removeChild(m)}},e,f,g))h=!1;else return e||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},
!1);HTMLFormElement.prototype.submit=function(){var c=this,d=!0;ty(c,function(){d&&b.call(c)},!1,vy(c))&&(b.call(c),d=!1)}};
function xy(a,b){var c=this;L(F(this),["options:?DustMap","triggerId:?*"],arguments);cx([function(){return M(c,"process_dom_events","document","click")},function(){return M(c,"process_dom_events","document","submit")}]);var d=a&&a.get("waitForTags"),e=a&&a.get("checkValidation");b=Tv(b);if(d){var f=Number(a.get("waitForTagsTimeout"));0<f&&isFinite(f)||(f=2E3);var g=function(m){return Math.max(f,m)};Rv("fsl","mwt",g,0);e||
Rv("fsl","nv.mwt",g,0)}var h=function(m){m.push(b);return m};Rv("fsl","ids",h,[]);e||Rv("fsl","nv.ids",h,[]);Sv("fsl","init",!1)||(wy(),Qv("fsl","init",!0));return b}xy.M="internal.enableAutoEventOnFormSubmit";
function Cy(){var a=this;}Cy.M="internal.enableAutoEventOnGaSend";var Dy={},Ey=[];
var Gy=function(a,b){var c=""+b;if(Dy[c])Dy[c].push(a);else{var d=[a];Dy[c]=d;var e=Fy(),f=-1;Ey.push(function(g){0<=f&&z.clearTimeout(f);b?f=z.setTimeout(function(){e(g,d);f=-1},b):e(g,d)})}},Fy=function(){var a=z.location.href,b={source:null,state:z.history.state||null,url:bj(cj(a)),P:aj(cj(a),"fragment")};return function(c,d){var e=b,f={};f[e.source]=!0;f[c.source]=!0;if(!f.popstate||!f.hashchange||e.P!=c.P){var g={},h=(g.event="gtm.historyChange-v2",g["gtm.historyChangeSource"]=c.source,g["gtm.oldUrlFragment"]=
b.P,g["gtm.newUrlFragment"]=c.P,g["gtm.oldHistoryState"]=b.state,g["gtm.newHistoryState"]=c.state,g["gtm.oldUrl"]=b.url,g["gtm.newUrl"]=c.url,g["gtm.triggers"]=d.join(","),g);b=c;qv(h)}}},Hy=function(a,b){var c=z.history,d=c[a];if(Fa(d))try{c[a]=function(e,f,g){d.apply(c,[].slice.call(arguments,0));var h=z.location.href;b({source:a,state:e,url:bj(cj(h)),P:aj(cj(h),"fragment")})}}catch(e){}},Jy=function(a){z.addEventListener("popstate",function(b){var c=Iy(b);a({source:"popstate",state:b.state,url:bj(cj(c)),
P:aj(cj(c),"fragment")})})},Ky=function(a){z.addEventListener("hashchange",function(b){var c=Iy(b);a({source:"hashchange",state:null,url:bj(cj(c)),P:aj(cj(c),"fragment")})})},Iy=function(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:z.location.href};
function Ly(a,b){var c=this;L(F(this),["options:?DustMap","triggerId:?*"],arguments);cx([function(){return M(c,"process_dom_events","window","popstate")},function(){return M(c,"process_dom_events","window","pushstate")}]);b=Tv(b);var d=Number(a&&a.get("interval"));0<d&&isFinite(d)||(d=0);if(Sv("ehl","init",!1)){var e=Sv("ehl","reg");e&&e(b,d)}else{var f=function(g){for(var h=0;h<Ey.length;h++)Ey[h](g)};Ky(f);Jy(f);Hy("pushState",
f);Hy("replaceState",f);Gy(b,d);Qv("ehl","reg",Gy);Qv("ehl","init",!0)}return b}Ly.M="internal.enableAutoEventOnHistoryChange";
var My=function(a,b){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=Ac(b,"href"),d=c.indexOf("#"),e=Ac(b,"target");if(e&&"_self"!==e&&"_parent"!==e&&"_top"!==e||0===d)return!1;if(0<d){var f=bj(cj(c)),g=bj(cj(z.location.href));return f!==g}return!0},Ny=function(a,b){for(var c=aj(cj((b.attributes&&b.attributes.formaction?b.formAction:"")||b.action||Ac(b,"href")||b.src||b.code||b.codebase||""),"host"),d=0;d<a.length;d++)try{if((new RegExp(a[d])).test(c))return!1}catch(e){}return!0},
Oy=function(){var a=0,b=function(c){var d=c.target;if(d&&3!==c.which&&!(c.hh||c.timeStamp&&c.timeStamp===a)){a=c.timeStamp;d=yc(d,["a","area"],100);if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=Sv("aelc",e?"nv.mwt":"mwt",0),g;g=e?Sv("aelc","nv.ids",[]):Sv("aelc","ids",[]);for(var h=[],m=0;m<g.length;m++){var n=g[m],p=Sv("aelc","aff.map",{})[n];p&&!Ny(p,d)||h.push(n)}if(h.length){var q=My(c,d),r=Ov(d,"gtm.linkClick",h);r["gtm.elementText"]=wc(d);r["gtm.willOpenInNewWindow"]=
!q;if(q&&!e&&f&&d.href){var t=!!Ia(String(Ac(d,"rel")||"").split(" "),function(x){return"noreferrer"===x.toLowerCase()}),u=z[(Ac(d,"target")||"_self").substring(1)],v=!0,w=sv(function(){var x;if(x=v&&u){var y;a:if(t){var A;try{A=new MouseEvent(c.type,{bubbles:!0})}catch(B){if(!H.createEvent){y=!1;break a}A=H.createEvent("MouseEvents");A.initEvent(c.type,!0,!0)}A.hh=!0;c.target.dispatchEvent(A);y=!0}else y=!1;x=!y}x&&(u.location.href=Ac(d,"href"))},f);if(rv(r,w,f))v=!1;else return c.preventDefault&&
c.preventDefault(),c.returnValue=!1}else rv(r,function(){},f||2E3);return!0}}};tc(H,"click",b,!1);tc(H,"auxclick",b,!1)};
function Py(a,b){var c=this;L(F(this),["dustOptions:?DustMap","triggerId:?*"],arguments);cx([function(){return M(c,"process_dom_events","document","click")},function(){return M(c,"process_dom_events","document","auxclick")}]);var d=Xc(a),e=d&&!!d.waitForTags,f=d&&!!d.checkValidation,g=d?d.affiliateDomains:void 0;b=Tv(b);if(e){var h=Number(d.waitForTagsTimeout);0<h&&isFinite(h)||(h=2E3);var m=function(p){return Math.max(h,p)};
Rv("aelc","mwt",m,0);f||Rv("aelc","nv.mwt",m,0)}var n=function(p){p.push(b);return p};Rv("aelc","ids",n,[]);f||Rv("aelc","nv.ids",n,[]);g&&Rv("aelc","aff.map",function(p){p[b]=g;return p},{});Sv("aelc","init",!1)||(Oy(),Qv("aelc","init",!0));return b}Py.M="internal.enableAutoEventOnLinkClick";var Qy,Ry;
var Sy=function(a){return Sv("sdl",a,{})},Ty=function(a,b,c){b&&(Array.isArray(a)||(a=[a]),Rv("sdl",c,function(d){for(var e=0;e<a.length;e++){var f=String(a[e]);d.hasOwnProperty(f)||(d[f]=[]);d[f].push(b)}return d},{}))},Wy=function(){var a=250,b=!1;H.scrollingElement&&H.documentElement&&z.addEventListener&&(a=50,b=!0);var c=0,d=!1,e=function(){d?c=z.setTimeout(e,a):(c=0,Uy(),Sv("sdl","init",!1)&&!Vy()&&(uc(z,"scroll",f),uc(z,"resize",f),Qv("sdl","init",!1)));d=!1},f=function(){b&&Qy();c?d=!0:(c=
z.setTimeout(e,a),Qv("sdl","pending",!0))};return f},Uy=function(){var a=Qy(),b=a.Vg,c=a.Wg,d=b/Ry.scrollWidth*100,e=c/Ry.scrollHeight*100;Xy(b,"horiz.pix","PIXELS","horizontal");Xy(d,"horiz.pct","PERCENT","horizontal");Xy(c,"vert.pix","PIXELS","vertical");Xy(e,"vert.pct","PERCENT","vertical");Qv("sdl","pending",!1)},Xy=function(a,b,c,d){var e=Sy(b),f={},g;for(g in e){f.yc=g;if(e.hasOwnProperty(f.yc)){var h=Number(f.yc);if(!(a<h)){var m={};qv((m.event="gtm.scrollDepth",m["gtm.scrollThreshold"]=h,
m["gtm.scrollUnits"]=c.toLowerCase(),m["gtm.scrollDirection"]=d,m["gtm.triggers"]=e[f.yc].join(","),m));Rv("sdl",b,function(n){return function(p){delete p[n.yc];return p}}(f),{})}}f={yc:f.yc}}},Zy=function(){Rv("sdl","scr",function(a){a||(a=H.scrollingElement||H.body&&H.body.parentNode);return Ry=a},!1);Rv("sdl","depth",function(a){a||(a=Yy());return Qy=a},!1)},Yy=function(){var a=0,b=0;return function(){var c=Oi(),d=c.height;a=Math.max(Ry.scrollLeft+c.width,a);b=Math.max(Ry.scrollTop+d,b);return{Vg:a,
Wg:b}}},Vy=function(){return!!(Object.keys(Sy("horiz.pix")).length||Object.keys(Sy("horiz.pct")).length||Object.keys(Sy("vert.pix")).length||Object.keys(Sy("vert.pct")).length)};
function $y(a,b){var c=this;L(F(this),["options:!DustMap","triggerId:?*"],arguments);cx([function(){return M(c,"process_dom_events","window","resize")},function(){return M(c,"process_dom_events","window","scroll")}]);Zy();if(!Ry)return;b=Tv(b);var d=Xc(a);switch(d.horizontalThresholdUnits){case "PIXELS":Ty(d.horizontalThresholds,b,"horiz.pix");break;case "PERCENT":Ty(d.horizontalThresholds,b,"horiz.pct")}switch(d.verticalThresholdUnits){case "PIXELS":Ty(d.verticalThresholds,
b,"vert.pix");break;case "PERCENT":Ty(d.verticalThresholds,b,"vert.pct")}Sv("sdl","init",!1)?Sv("sdl","pending",!1)||I(function(){return Uy()}):(Qv("sdl","init",!0),Qv("sdl","pending",!0),I(function(){Uy();if(Vy()){var e=Wy();tc(z,"scroll",e);tc(z,"resize",e)}else Qv("sdl","init",!1)}));return b}$y.M="internal.enableAutoEventOnScroll";var bc=ca(["data-gtm-yt-inspected-"]),az=["www.youtube.com","www.youtube-nocookie.com"],bz,cz=!1;
var dz=function(a,b,c){var d=a.map(function(g){return{Ba:g,De:g,Ae:void 0}});if(!b.length)return d;var e=b.map(function(g){return{Ba:g*c,De:void 0,Ae:g}});if(!d.length)return e;var f=d.concat(e);f.sort(function(g,h){return g.Ba-h.Ba});return f},ez=function(a){a=void 0===a?[]:a;for(var b=[],c=0;c<a.length;c++)0>a[c]||b.push(a[c]);b.sort(function(d,e){return d-e});return b},fz=function(a){a=void 0===a?[]:a;for(var b=[],c=0;c<a.length;c++)100<a[c]||0>a[c]||(b[c]=a[c]/100);b.sort(function(d,e){return d-
e});return b},gz=function(a,b){var c,d;function e(){t=lw(function(){return{url:w,title:x,Xg:v,bj:a.getCurrentTime(),playbackRate:y}},b.lb,a.getIframe());v=0;x=w="";y=1;return f}function f(E){switch(E){case 1:v=Math.round(a.getDuration());w=a.getVideoUrl();if(a.getVideoData){var J=a.getVideoData();x=J?J.title:""}y=a.getPlaybackRate();b.Sg?qv(t.createEvent("start")):t.Xc();u=dz(b.yh,b.xh,a.getDuration());return g(E);default:return f}}function g(){A=a.getCurrentTime();B=Sa().getTime();t.rj();r();return h}
function h(E){var J;switch(E){case 0:return n(E);case 2:J="pause";case 3:var G=a.getCurrentTime()-A;J=1<Math.abs((Sa().getTime()-B)/1E3*y-G)?"seek":J||"buffering";a.getCurrentTime()&&(b.Rg?qv(t.createEvent(J)):t.Xc());q();return m;case -1:return e(E);default:return h}}function m(E){switch(E){case 0:return n(E);case 1:return g(E);case -1:return e(E);default:return m}}function n(){for(;d;){var E=c;z.clearTimeout(d);E()}b.Qg&&qv(t.createEvent("complete",1));return e(-1)}function p(){}function q(){d&&
(z.clearTimeout(d),d=0,c=p)}function r(){if(u.length&&0!==y){var E=-1,J;do{J=u[0];if(J.Ba>a.getDuration())return;E=(J.Ba-a.getCurrentTime())/y;if(0>E&&(u.shift(),0===u.length))return}while(0>E);c=function(){d=0;c=p;0<u.length&&u[0].Ba===J.Ba&&(u.shift(),qv(t.createEvent("progress",J.Ae,J.De)));r()};d=z.setTimeout(c,1E3*E)}}var t,u=[],v,w,x,y,A,B,D=e(-1);d=0;c=p;return{onStateChange:function(E){D=D(E)},onPlaybackRateChange:function(E){A=a.getCurrentTime();B=Sa().getTime();t.Xc();y=E;q();r()}}},iz=
function(a){I(function(){function b(){for(var d=c.getElementsByTagName("iframe"),e=d.length,f=0;f<e;f++)hz(d[f],a)}var c=H;b();aw(b)})},hz=function(a,b){if(!a.getAttribute("data-gtm-yt-inspected-"+b.lb)&&(ac(a,"data-gtm-yt-inspected-"+b.lb),jz(a,b.oe))){a.id||(a.id=kz());var c=z.YT,d=c.get(a.id);d||(d=new c.Player(a.id));var e=gz(d,b),f={},g;for(g in e)f.kd=g,e.hasOwnProperty(f.kd)&&d.addEventListener(f.kd,function(h){return function(m){return e[h.kd](m.data)}}(f)),f={kd:f.kd}}},jz=function(a,b){var c=
a.getAttribute("src");if(lz(c,"embed/")){if(0<c.indexOf("enablejsapi=1"))return!0;if(b){var d;var e=-1!==c.indexOf("?")?"&":"?";-1<c.indexOf("origin=")?d=c+e+"enablejsapi=1":(bz||(bz=H.location.protocol+"//"+H.location.hostname,H.location.port&&(bz+=":"+H.location.port)),d=c+e+"enablejsapi=1&origin="+encodeURIComponent(bz));var f;f=Eb(d);a.src=Cb(f).toString();return!0}}return!1},lz=function(a,b){if(!a)return!1;for(var c=0;c<az.length;c++)if(0<=a.indexOf("//"+az[c]+"/"+b))return!0;return!1},kz=function(){var a=
Math.round(1E9*Math.random())+"";return H.getElementById(a)?kz():a};
function mz(a,b){var c=this;L(F(this),["dustOptions:!DustMap","triggerId:?*"],arguments);cx([function(){return M(c,"process_dom_events","element","onStateChange")},function(){return M(c,"process_dom_events","element","onPlaybackRateChange")}]);b=Tv(b);var d=!!a.get("captureStart"),e=!!a.get("captureComplete"),f=!!a.get("capturePause"),g=fz(Xc(a.get("progressThresholdsPercent"))),h=ez(Xc(a.get("progressThresholdsTimeInSeconds"))),
m=!!a.get("fixMissingApi");if(!(d||e||f||g.length||h.length))return;var n={Sg:d,Qg:e,Rg:f,xh:g,yh:h,oe:m,lb:b},p=z.YT,q=function(){iz(n)};if(p)return p.ready&&p.ready(q),b;var r=z.onYouTubeIframeAPIReady;z.onYouTubeIframeAPIReady=function(){r&&r();q()};I(function(){for(var t=H.getElementsByTagName("script"),u=t.length,v=0;v<u;v++){var w=t[v].getAttribute("src");if(lz(w,"iframe_api")||lz(w,"player_api"))return b}for(var x=H.getElementsByTagName("iframe"),y=x.length,A=0;A<y;A++)if(!cz&&jz(x[A],n.oe))return pc("https://www.youtube.com/iframe_api"),
cz=!0,b});return b}mz.M="internal.enableAutoEventOnYouTubeActivity";var nz;function oz(a){var b=!1;return b}oz.M="internal.evaluateMatchingRules";
var pz=function(a){var b=a[P.g.cf];if(b)return b;var c=a[P.g.ja];if(k(c)){if(Fa(URL))try{return(new URL(c)).hostname}catch(e){return}var d=cj(c);if(d.hostname)return aj(d,"host")}},rz=function(a,b,c){if(c)switch(c.type){case "event_name":return a;case "const":return c.const_value;case "event_param":var d=c.event_param.param_name;if(d===P.g.Nb)return qz(b);return d===P.g.cf?pz(b):b[d]}},vz=function(a,
b,c,d){sz=!1;if(c&&!tz(a,b,c))return!1;if(!d||0===d.length)return!0;for(var e=0;e<d.length;e++)if(uz(a,b,d[e].predicates||[]))return!0;return!1},uz=function(a,b,c){for(var d=0;d<c.length;d++)if(!tz(a,b,c[d]))return!1;return!0},tz=function(a,b,c){var d=c.values||[],e=rz(a,b,d[0]),f=rz(a,b,d[1]),g=c.type;if("eqi"===g||"swi"===g||"ewi"===g||"cni"===g)k(e)&&(e=e.toLowerCase()),k(f)&&(f=f.toLowerCase());var h=!1;switch(g){case "eq":case "eqi":h=Rf(e,f);break;case "sw":case "swi":h=Wf(e,f);break;case "ew":case "ewi":h=
Nf(e,f);break;case "cn":case "cni":h=Qf(e,f);break;case "lt":h=Vf(e,f);break;case "le":h=Tf(e,f);break;case "gt":h=Uf(e,f);break;case "ge":h=Sf(e,f);break;case "re":case "rei":void 0!==e&&(h=Pf(e,f,"rei"===g))}return!!c.negate!==h},sz=!1;var qz=function(a){var b=a[P.g.Nb];if(b)return b;sz=!0;var c=a[P.g.ja];if(k(c)){var d=T(57);if(Fa(URL))try{var e=new URL(c);return e.pathname+wz(d?e.search:"")}catch(h){return}var f=cj(c);if(f.hostname){var g=d?
aj(f,"query"):"";g&&(g="?"+g);return aj(f,"path")+wz(g)}}},wz=function(a){if(!T(72)||!a)return a;var b=a.split("&"),c=[];b[0]=b[0].substring(1);for(var d=0;d<b.length;d++){var e=b[d],f=e.indexOf("=");xz[0<=f?e.substring(0,f):e]||c.push(b[d])}return c.length?"?"+c.join("&"):""},xz=Object.freeze({__utma:1,__utmb:1,__utmc:1,__utmk:1,__utmv:1,__utmx:1,__utmz:1,__ga:1,_gac:1,_gl:1,dclid:1,gbraid:1,gclid:1,gclsrc:1,utm_campaign:1,utm_content:1,utm_expid:1,utm_id:1,utm_medium:1,utm_nooverride:1,utm_referrer:1,
utm_source:1,utm_term:1,wbraid:1});function yz(a,b){var c=!1;return c}yz.M="internal.evaluatePredicates";var zz=function(a){var b;return b};function Az(a,b){b=void 0===b?!0:b;var c;return c}Az.O="getCookieValues";function Bz(){return Ei()}Bz.M="internal.getCountryCode";function Cz(){var a=[];a=gl();return Wc(a)}Cz.M="internal.getDestinationIds";function Dz(a){var b=null;return b}Dz.O="getElementById";var Ez={};Ez.enableAdsConversionValidation=T(83);Ez.enableAdsHistoryChangeEvents=T(36);Ez.enableAlwaysSendFormStart=T(38);Ez.enableCcdAutoRedaction=T(92);Ez.enableCcdEmForm=T(82);Ez.enableCcdEventEditingAndCreation=T(26);Ez.enableCcdPreAutoPiiDetection=T(49);Ez.enableCcdUserData=T(16);Ez.enableEesPagePath=T(43);Ez.enableEuidAutoMode=T(37);Ez.enableGa4OnoRemarketing=T(34);Ez.enableGaGamWindowSet=T(67);Ez.includeQueryInEesPagePath=T(57);Ez.pixieSetCorePlatformServices=T(105);
Ez.useEnableAutoEventOnFormApis=T(91);Ez.autoPiiEligible=Hi();function Fz(){return Wc(Ez)}Fz.M="internal.getFlags";function Gz(a,b){var c;L(F(this),["targetId:!string","name:!string"],arguments);var d=Li(a)||{};c=Wc(d[b],this.h);return c}Gz.M="internal.getProductSettingsParameter";function Hz(a,b){var c;L(F(this),["queryKey:!string","retrieveAll:?boolean"],arguments);M(this,"get_url","query",a);var d=aj(cj(z.location.href),"query"),e=Yi(d,a,b);c=Wc(e,this.h);return c}Hz.O="getQueryParameters";function Iz(a,b){var c;return c}Iz.O="getReferrerQueryParameters";function Jz(a){var b="";return b}Jz.O="getReferrerUrl";function Kz(){return Fi()}Kz.M="internal.getRegionCode";function Lz(a,b){var c;L(F(this),["targetId:!string","name:!string"],arguments);var d=uu(ou,a).h;c=Wc(d[b],this.h);return c}Lz.M="internal.getRemoteConfigParameter";function Mz(a){var b="";L(F(this),["component:?string"],arguments),M(this,"get_url",a),b=aj(cj(z.location.href),a);return b}Mz.O="getUrl";function Nz(){M(this,"get_user_agent");return fc.userAgent}Nz.O="getUserAgent";
var Oz=function(a){var b=!1;b=gp(a,"google_ono",!1);return b},Pz=function(a){var b;if(T(87)){var c=!1;T(87)&&(c=!!Ci["2"]);b=c}else b=gp(a,P.g.Ye,!1);return b},Qz=function(a){var b;if(T(87)){var c="";T(87)&&(c=Ci["3"]||"");b=c}else b=gp(a,P.g.Hd,U(a.h,P.g.Hd))||
"";return b},Rz=function(a){if(a.metadata.is_merchant_center)return!1;var b=U(a.h,P.g.Dd);return!(!0!==b&&"true"!==b||!U(a.h,P.g.za))},Sz=function(a){var b=a.metadata.user_data;if(Uc(b))return b},Tz=function(a,b){var c=gp(a,P.g.Bd,a.h.B[P.g.Bd]);if(c&&void 0!==c[b||a.eventName])return c[b||a.eventName]},Uz=function(a,b,c){a.m[P.g.ce]||(a.m[P.g.ce]={});a.m[P.g.ce][b]=c};var Vz=!1,Wz=function(a){var b=a.eventName===P.g.Xb&&bk()&&Rz(a),c=a.metadata.batch_on_navigation,d=a.metadata.is_conversion,e=a.metadata.is_session_start,f=a.metadata.create_dc_join,g=a.metadata.create_google_join,h=a.metadata.euid_mode_enabled&&!!Sz(a);return!(!fc.sendBeacon||d||h||e||f||g||b||!c&&Vz)};var Xz=function(a){vb("GA4_EVENT",a)};var Zz=function(a){return!a||Yz.test(a)||zh.hasOwnProperty(a)},$z=function(a,b,c){for(var d=c.event_param_ops||[],e=0;e<d.length;e++){var f=d[e];if(f.edit_param){var g=f.edit_param.param_name,h=rz(a,b,f.edit_param.param_value),m;if(h){var n=Number(h);m=isNaN(n)?h:n}else m=h;b[g]=m}else f.delete_param&&delete b[f.delete_param.param_name]}},Yz=/^(_|ga_|google_|gtag\.|firebase_).*$/;
var aA=function(a){var b=0,c=0;return{start:function(){b=Ta()},stop:function(){c=this.get()},get:function(){var d=0;a.jh()&&(d=Ta()-b);return d+c}}},bA=function(){this.h=void 0;this.m=0;this.isActive=this.isVisible=this.B=!1;this.N=this.C=void 0};aa=bA.prototype;aa.hk=function(a){var b=this;if(!this.h){this.B=H.hasFocus();this.isVisible=!H.hidden;this.isActive=!0;var c=function(d,e,f){tc(d,e,function(g){b.h.stop();f(g);b.jh()&&b.h.start()})};c(z,"focus",function(){b.B=!0});c(z,"blur",function(){b.B=
!1});c(z,"pageshow",function(d){b.isActive=!0;d.persisted&&O(56);b.N&&b.N()});c(z,"pagehide",function(){b.isActive=!1;b.C&&b.C()});c(H,"visibilitychange",function(){b.isVisible=!H.hidden});Rz(a)&&-1===(fc.userAgent||"").indexOf("Firefox")&&-1===(fc.userAgent||"").indexOf("FxiOS")&&c(z,"beforeunload",function(){Vz=!0});this.Ah();this.m=0}};aa.Ah=function(){this.m+=this.Ef();this.h=aA(this);this.jh()&&this.h.start()};aa.im=function(a){var b=this.Ef();0<b&&(a.m[P.g.zd]=b)};aa.Zk=function(a){a.m[P.g.zd]=
void 0;this.Ah();this.m=0};aa.jh=function(){return this.B&&this.isVisible&&this.isActive};aa.Sk=function(){return this.m+this.Ef()};aa.Ef=function(){return this.h&&this.h.get()||0};aa.Ql=function(a){this.C=a};aa.pj=function(a){this.N=a};function cA(){return z.gaGlobal=z.gaGlobal||{}}var dA=function(){var a=cA();a.hid=a.hid||Ja();return a.hid},eA=function(a,b){var c=cA();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};
var fA=function(a,b,c){var d=a.metadata.client_id_source;if(void 0===d||c<=d)a.m[P.g.Ya]=b,a.metadata.client_id_source=c},iA=function(a,b){var c;var d=b.metadata.cookie_options,e=d.prefix+"_ga",f=sn(d,void 0,void 0,P.g.U);if(!1===U(b.h,P.g.ab)&&gA(b)===a)c=!0;else{var g=$k(a,hA[0],d.domain,d.path);c=1!==Sk(e,g,f)}return c},gA=function(a){var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=Zk(c,b.domain,b.path,hA,P.g.U);if(!d){var e=String(U(a.h,P.g.Zb,""));e&&e!=c&&(d=Zk(e,b.domain,b.path,hA,P.g.U))}return d},
hA=["GA1"],jA=function(a,b){var c=a.m[P.g.Ya];if(U(a.h,P.g.fb)&&U(a.h,P.g.ic)||b&&c===b)return c;if(c){c=""+c;if(!iA(c,a))return O(31),a.H=!0,"";eA(c,tk(P.g.U));return c}O(32);a.H=!0;return""};
var mA=function(a,b,c){if(!b)return a;if(!a)return b;var d=kA(a);if(!d)return b;var e,f=Oa(null!=(e=U(c.h,P.g.Sc))?e:30);if(!(Math.floor(c.metadata.event_start_timestamp_ms/1E3)>d.xe+60*f))return a;var g=kA(b);if(!g)return a;g.uc=d.uc+1;var h;return null!=(h=lA(g.sessionId,g.uc,g.ed,g.xe,g.kh,g.qc,g.je))?h:b},pA=function(a,b){var c=b.metadata.cookie_options,d=nA(b,c),e=$k(a,oA[0],c.domain,c.path),f={Cb:P.g.U,domain:c.domain,path:c.path,expires:c.Ab?new Date(Ta()+1E3*c.Ab):void 0,flags:c.flags};T(52)&&
Sk(d,void 0,f);return 1!==Sk(d,e,f)},qA=function(a){var b=a.metadata.cookie_options,c=nA(a,b),d=Zk(c,b.domain,b.path,oA,P.g.U);if(!d||!zm&&!T(52))return d;var e=Jk(c,void 0,void 0,P.g.U);if(d&&1<e.length){O(114);for(var f=void 0,g=void 0,h=0;h<e.length;h++){var m=e[h].split(".");if(!(7>m.length)){var n=Number(m[5]);n&&(!g||n>g)&&(g=n,f=e[h])}}f&&!f.endsWith(d)&&(O(115),T(52)&&(d=f.split(".").slice(2).join(".")))}return d},lA=function(a,b,c,d,e,f,g){if(a&&b){var h=[a,b,Oa(c),d,e];h.push(f?"1":"0");
h.push(g||"0");return h.join(".")}},oA=["GS1"],nA=function(a,b){return b.prefix+"_ga_"+a.target.K[0]},kA=function(a){if(a){var b=a.split(".");if(!(5>b.length||7<b.length)){7>b.length&&O(67);var c=Number(b[1]),d=Number(b[3]),e=Number(b[4]||0);c||O(118);d||O(119);isNaN(e)&&O(120);if(!T(74)||c&&d&&!isNaN(e))return{sessionId:b[0],uc:c,ed:!!Number(b[2]),xe:d,kh:e,qc:"1"===b[5],je:"0"!==b[6]?b[6]:void 0}}}},rA=function(a){return lA(a.m[P.g.hb],a.m[P.g.Nd],a.m[P.g.Md],Math.floor(a.metadata.event_start_timestamp_ms/
1E3),a.metadata.join_timer_sec||0,!!a.metadata[P.g.We],a.m[P.g.Oc])};
var sA=function(a){var b=U(a.h,P.g.ya),c=a.h.B[P.g.ya];if(c===b)return c;var d=Vc(b);c&&c[P.g.V]&&(d[P.g.V]=(d[P.g.V]||[]).concat(c[P.g.V]));return d},tA=function(a,b){var c=Ln(!0);return"1"!==c._up?{}:{clientId:c[a],tj:c[b]}},uA=function(a,b,c){var d=Ln(!0),e=d[b];e&&(fA(a,e,2),iA(e,a));var f=d[c];f&&pA(f,a);return!(!e||!f)},vA=!1,wA=function(a){var b=sA(a)||{},c=a.metadata.cookie_options,d=c.prefix+"_ga",e=nA(a,c);Un(b[P.g.jc],!!b[P.g.V])&&uA(a,d,e)&&(vA=!0);b[P.g.V]&&Rn(function(){var f={},g=gA(a);
g&&(f[d]=g);var h=qA(a);h&&(f[e]=h);var m=Jk("FPLC",void 0,void 0,P.g.U);m.length&&(f._fplc=m[0]);return f},b[P.g.V],b[P.g.Mb],!!b[P.g.vb])},yA=function(a){if(!U(a.h,P.g.ib))return{};var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=nA(a,b);Sn(function(){var e;if(tk("analytics_storage"))e={};else{var f={};e=(f._up="1",f[c]=a.m[P.g.Ya],f[d]=rA(a),f)}return e},1);return!tk("analytics_storage")&&xA()?tA(c,d):{}},xA=function(){var a=$i(z.location,"host"),b=$i(cj(H.referrer),"host");return a&&b?a===b||
0<=a.indexOf("."+b)||0<=b.indexOf("."+a)?!0:!1:!1},zA=function(a){if(!a)return a;var b=String(a);b=Kn(b);return b=Kn(b,"_ga")};var AA=function(){var a=Ta(),b=a+864E5,c=20,d=5E3;return function(){var e=Ta();e>=b&&(b=e+864E5,d=5E3);if(1>d)return!1;c=Math.min(c+(e-a)/1E3*5,20);a=e;if(1>c)return!1;d--;c--;return!0}};var BA=function(){var a=!0;sm(7)&&sm(9)&&sm(10)||(a=!1);return a},CA=function(){var a=!0;sm(3)&&sm(4)||(a=!1);return a};
var DA=function(a,b){bk()&&(a.gcs=uk(),T(106)&&(a.gcd=yk()),b.metadata.is_consent_update&&(a.gcu="1"))},GA=function(a){if(a.metadata.is_merchant_center)return"https://www.merchant-center-analytics.goog/mc/collect";var b=gs(U(a.h,P.g.za),"/g/collect");if(b)return b;var c=gp(a,P.g.eb,U(a.h,P.g.eb));c=c||Oz(a);var d=U(a.h,P.g.rb);return c&&!Pz(a)&&!1!==d&&BA()&&tk(P.g.I)&&tk(P.g.U)?EA():
FA()},HA=!1;HA=!0;var IA={};IA[P.g.Ya]="cid";IA[P.g.Xe]="_fid";IA[P.g.ng]="_geo";IA[P.g.ub]="gdid";IA[P.g.Jd]="ir";IA[P.g.xa]="ul";IA[P.g.Rc]="_rdi";IA[P.g.xb]="sr";IA[P.g.Bi]="tid";IA[P.g.jf]="tt";IA[P.g.kf]="ec_mode";IA[P.g.Ji]="gtm_up";IA[P.g.Pd]="uaa",IA[P.g.Qd]="uab",IA[P.g.Rd]="uafvl",IA[P.g.Sd]="uamb",IA[P.g.Td]="uam",IA[P.g.Ud]="uap",IA[P.g.Vd]="uapv",IA[P.g.Wd]="uaw";var JA={};JA[P.g.Ec]="cc";JA[P.g.Fc]="ci";JA[P.g.Gc]="cm";JA[P.g.Hc]=
"cn";JA[P.g.Jc]="cs";JA[P.g.Kc]="ck";JA[P.g.sa]="cu";JA[P.g.ja]="dl";JA[P.g.Ea]="dr";JA[P.g.wb]="dt";JA[P.g.Md]="seg";JA[P.g.hb]="sid";JA[P.g.Nd]="sct";JA[P.g.Aa]="uid";T(80)&&(JA[P.g.Nb]="dp");var KA={};KA[P.g.zd]="_et";KA[P.g.tb]="edid";var LA={};LA[P.g.Ec]="cc";LA[P.g.Fc]="ci";LA[P.g.Gc]="cm";LA[P.g.Hc]="cn";LA[P.g.Jc]="cs";LA[P.g.Kc]="ck";var MA={},NA=Object.freeze((MA[P.g.na]=1,MA)),FA=function(){var a="www";HA&&Gi()&&(a=Gi());return"https://"+a+".google-analytics.com/g/collect"},EA=function(){var a;
HA&&""!==Gi()&&(a=Gi());return"https://"+(a?a+".":"")+"analytics.google.com/g/collect"},OA=function(a,b,c){var d={},e={},f={};d.v="2";d.tid=a.target.Z;Oz(a)&&!Pz(a)&&(d._ono=1);d.gtm=ol();d._p=dA();c&&(d.em=c);a.metadata.create_google_join&&(d._gaz=1);DA(d,a);var g=a.m[P.g.ub];g&&(d.gdid=g);e.en=xf(a.eventName,40);a.metadata.is_first_visit&&(e._fv=a.metadata.is_first_visit_conversion?
2:1);a.metadata.is_new_to_site&&(e._nsi=1);a.metadata.is_session_start&&(e._ss=a.metadata.is_session_start_conversion?2:1);a.metadata.is_conversion&&(e._c=1);a.metadata.is_external_event&&(e._ee=1);if(a.metadata.is_ecommerce){var h=a.m[P.g.ca]||U(a.h,P.g.ca);if(Ha(h))for(var m=0;m<h.length&&200>m;m++)e["pr"+(m+1)]=Cf(h[m])}var n=a.m[P.g.tb];n&&(e.edid=n);var p=function(t,u){if("object"!==typeof u||!NA[t]){t=xf(t,40);var v="ep."+t,w="epn."+t;t=Ga(u)?w:v;var x=Ga(u)?v:w;e.hasOwnProperty(x)&&delete e[x];
e[t]=xf(u,100)}};l(a.m,function(t,u){if(void 0!==u&&!xh.hasOwnProperty(t)){null===u&&(u="");var v;t!==P.g.Oc?v=!1:a.metadata.euid_mode_enabled?(d.ecid=u,v=!0):v=void 0;if(!v&&t!==P.g.We){var w=u;!0===u&&(w="1");!1===u&&(w="0");var x;if(IA[t])x=IA[t],d[x]=xf(w,420);else if(JA[t])x=JA[t],f[x]=xf(w,"dl"===x&&T(81)?1E3:420);else if(KA[t])x=KA[t],e[x]=xf(w,420);else if("_"===t.charAt(0))d[t]=xf(w,420);else{var y;LA[t]?y=!0:t!==P.g.Ic?y=!1:("object"!==typeof u&&p(t,u),y=!0);y||p(t,u)}}}});(function(t){Rz(a)&&
"object"===typeof t&&l(t||{},function(u,v){"object"!==typeof v&&(d["sst."+u]=xf(v,420))})})(a.m[P.g.ce]);var q=a.m[P.g.Ra]||{};!1!==U(a.h,P.g.aa)&&CA()||(q._npa="1");T(28)&&!1===U(a.h,P.g.rb)&&(d.ngs="1");l(q,function(t,u){if(void 0!==u)if(null===u&&(u=""),t===P.g.Aa&&!f.uid)f.uid=xf(u,36);else if(b[t]!==u){var v=(Ga(u)?"upn.":"up.")+xf(t,24);e[v]=xf(u,36);b[t]=u}});var r=!1;return Ef.call(this,
{Sa:d,vc:f,Yg:e},GA(a),Rz(a),r)||this};oa(OA,Ef);
var PA=function(a,b){return a.replace(/\$\{([^\}]+)\}/g,function(c,d){return b[d]||c})},QA=function(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")},RA=function(a){var b={},c="",d=a.pathname.indexOf("/g/collect");0<=d&&(c=a.pathname.substring(0,d));b.transport_url=a.protocol+"//"+a.hostname+c;return b},SA=function(a,b){var c=new z.XMLHttpRequest;c.withCredentials=!0;var d=b?"POST":"GET",e="",f=0,g=cj(a),h=RA(g),m=QA(g);c.onprogress=function(n){if(200===
c.status){e+=c.responseText.substring(f);f=n.loaded;for(var p=PA(e,h),q=p.indexOf("\n\n");-1!==q;){var r;a:{var t;var u=p.substring(0,q).split("\n"),v="undefined"!=typeof Symbol&&Symbol.iterator&&u[Symbol.iterator];if(v)t=v.call(u);else if("number"==typeof u.length)t={next:ba(u)};else throw Error(String(u)+" is not an iterable or ArrayLike");var w=t.next().value,x=t.next().value;if(w.startsWith("event: message")&&x.startsWith("data: "))try{r=JSON.parse(x.substring(x.indexOf(":")+1));break a}catch(J){}r=
void 0}var y=r;if(y){var A=y.send_pixel||[];if(Array.isArray(A))for(var B=0;B<A.length;B++)sc(A[B]);if(T(66)){var D=y.send_beacon||[];if(Array.isArray(D))for(var E=0;E<D.length;E++)zc(D[E])}}p=p.substring(q+2);q=p.indexOf("\n\n")}e=p}};c.open(d,m);c.send(b)};
var VA=function(a,b,c,d){var e=a+"?"+b;TA&&(d=!(0===e.indexOf(FA())||0===e.indexOf(EA())));d&&!Vz?SA(e,c):UA(a,b,c)},WA=function(a,b){function c(r){p.push(r+"="+encodeURIComponent(""+a.Sa[r]))}var d=b.Yl,e=b.Zl,f=b.Uk,g=b.wk,h=b.vk,m=b.kl,n=b.jl;if(d||e){var p=[];a.Sa._ono&&c("_ono");c("tid");c("cid");c("gtm");p.push("aip=1");a.vc.uid&&!n&&p.push("uid="+encodeURIComponent(""+a.vc.uid));
d&&(UA("https://stats.g.doubleclick.net/g/collect","v=2&"+p.join("&")),ik("https://stats.g.doubleclick.net/g/collect?v=2&"+p.join("&")));if(e){p.push("z="+Ja());if(!m){var q=f&&0===f.indexOf("google.")&&"google.com"!=f?"https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%",f):void 0;q&&sc(q+p.join("&"))}T(28)&&!Vz&&g&&h&&$p()&&function(){var r=bq()+"/td/ga/rul?";p=[];c("tid");p.push("gacid="+encodeURIComponent(String(a.Sa.cid)));c("gtm");p.push("aip=1");p.push("fledge=1");p.push("z="+
Ja());aq(r+p.join("&"),a.Sa.tid)}()}}},TA=!1;var XA=function(){this.C=1;this.N={};this.h=new Ff;this.m=-1};XA.prototype.B=function(a,b){var c=this,d=new OA(a,this.N,b),e=Wz(a);e&&this.h.C(d)||this.flush();if(e&&this.h.add(d)){if(0>this.m){var f=z.setTimeout,g;Rz(a)?YA?(YA=!1,g=ZA):g=$A:g=5E3;this.m=f.call(z,function(){return c.flush()},g)}}else{var h=Hf(d,this.C++);
VA(d.m,h.uh,h.body,d.C);var m=a.metadata.create_dc_join,n=a.metadata.create_google_join,p=!1!==U(a.h,P.g.Ca),q=!1!==U(a.h,P.g.aa),r={eventId:a.h.eventId,priorityId:a.h.priorityId},t={Yl:m,Zl:n,Uk:Qz(a),wk:p,vk:q,kl:Pz(a),jl:a.metadata.euid_mode_enabled,Am:r};WA(d,t)}Er(a)};XA.prototype.add=function(a){a.metadata.euid_mode_enabled&&!Vz?this.T(a):this.B(a)};XA.prototype.flush=function(){if(this.h.events.length){var a=If(this.h,this.C++);VA(this.h.h,a.uh,a.body,this.h.m);this.h=new Ff;0<=this.m&&(z.clearTimeout(this.m),
this.m=-1)}};XA.prototype.T=function(a){var b=this,c=Sz(a);c?uh(c,function(d){b.B(a,1===d.split("~").length?void 0:d)}):this.B(a)};var UA=function(a,b,c){var d=a+"?"+b;if(c)try{fc.sendBeacon&&fc.sendBeacon(d,c)}catch(e){vb("TAGGING",15)}else zc(d)},ZA=pl('',500),$A=pl('',5E3),YA=!0;var aB=function(a,b,c){void 0===c&&(c={});if("object"===typeof b)for(var d in b)aB(a+"."+d,b[d],c);else c[a]=b;return c},bB=function(a){if(Rz(a)){var b=function(d){var e=aB(P.g.na,d);l(e,function(f,g){a.m[f]=g})},c=U(a.h,P.g.na);void 0!==c?b(c):b(a.metadata.user_data);a.metadata.user_data=void 0}};var cB=window,dB=document,eB=function(a){var b=cB._gaUserPrefs;if(b&&b.ioo&&b.ioo()||dB.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===cB["ga-disable-"+a])return!0;try{var c=cB.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Dk("AMP_TOKEN",String(dB.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return dB.getElementById("__gaOptOutExtension")?!0:!1};
var fB=function(a,b,c){c||(c=function(){});void 0!==a.m[b]&&(a.m[b]=c(a.m[b]))},gB=function(a,b){var c=P.g.I;tk(c)||Ak(function(){b.metadata.is_consent_update=!0;var d=Hh[c||""];d&&Uz(b,"gcut",d);a.Vi(b)},c)},pn={Hk:"",lm:Number("")},hB={},iB=(hB[P.g.Ec]=1,hB[P.g.Fc]=1,hB[P.g.Gc]=1,hB[P.g.Hc]=1,hB[P.g.Jc]=1,hB[P.g.Kc]=1,hB),jB=function(a){this.T=a;this.pb=new XA;this.h=void 0;this.C=new bA;this.m=this.B=void 0;this.N=!1;this.Yd=void 0;this.nd=
!1};aa=jB.prototype;aa.Kl=function(a,b,c){var d=this,e=Ro(this.T);if(e)if(c.eventMetadata.is_external_event&&"_"===a.charAt(0))c.W();else{a!==P.g.ra&&a!==P.g.Ga&&Zz(a)&&O(58);kB(c.h);var f=new fp(e,a,c);f.metadata.event_start_timestamp_ms=b;var g=[P.g.U];(gp(f,P.g.eb,U(f.h,P.g.eb))||Rz(f))&&g.push(P.g.I);var h=function(){Bk(function(){d.Ll(f)},g)};T(11)&&T(25)?qn(h):h()}else c.W()};aa.Ll=function(a){this.m=a;try{if(eB(a.target.Z))O(28),a.H=!0;else if(T(97)){var b;var c=hl(kl()),d=c&&c.parent;b=d?
hl(d):void 0;if(b&&Ha(b.destinations))for(var e=0;e<b.destinations.length;e++)if(eB(b.destinations[e])){O(125);a.H=!0;break}}if(0<=pn.Hk.replace(/\s+/g,"").split(",").indexOf(a.eventName))a.H=!0;else{var f=Tz(a);f&&f.blacklisted&&(a.H=!0)}var g=H.location.protocol;"http:"!=g&&"https:"!=g&&(O(29),a.H=!0);fc&&"preview"==fc.loadPurpose&&(O(30),a.H=!0);T(107)&&T(108)&&(a.H=!0);T(107)&&U(a.h,P.g.fb)&&!U(a.h,P.g.ic)?(a.eventName!==P.g.ra&&a.eventName!==P.g.od&&O(131),a.H=!0):!U(a.h,P.g.fb)&&U(a.h,P.g.ic)&&
(O(132),a.H=!0);var h=Lh.grl;h||(h=AA(),Lh.grl=h);h()||(O(35),a.H=!0);if(a.H){a.h.W();wb();return}var m={prefix:String(U(a.h,P.g.Ia,"")),path:String(U(a.h,P.g.Mc,"/")),flags:String(U(a.h,P.g.Oa,"")),domain:String(U(a.h,P.g.Na,"auto")),Ab:Number(U(a.h,P.g.Da,63072E3))};a.metadata.cookie_options=m;lB(a);this.ik(a);this.C.im(a);a.metadata.is_merchant_center?a.metadata.euid_mode_enabled=!1:U(a.h,P.g.df)?a.metadata.euid_mode_enabled=!1:gp(a,"ccd_add_1p_data",!1)?a.metadata.euid_mode_enabled=!0:a.metadata.euid_mode_enabled=
T(16)?!1:xj(vj(a.h));if(a.metadata.euid_mode_enabled){var n=vj(a.h);if(xj(n)){var p=U(a.h,P.g.na);if(gp(a,"ccd_add_1p_data",!1))null===p?a.metadata.user_data_from_code=null:(n.enable_code&&Uc(p)&&(a.metadata.user_data_from_code=p),Uc(n.selectors)&&!a.metadata.user_data_from_manual&&(a.metadata.user_data_from_manual=uj(n.selectors)));else if(void 0!==p)a.metadata.user_data=p,a.m._udm="c";else{var q=yj(n);a.metadata.user_data=q;if("selectors"===n.mode||Uc(n.selectors))a.m._udm="s";else if("auto_detect"===
n.mode||Uc(n.auto_detect))a.m._udm="a"}}}var r=this.oj,t;U(a.h,P.g.ib)&&(tk(P.g.U)||U(a.h,P.g.Ya)||(a.m[P.g.Ji]=!0));var u;var v;v=void 0===v?3:v;var w=z.location.href;if(w){var x=cj(w).search.replace("?",""),y=Yi(x,"_gl",!1,!0)||"";u=y?void 0!==Mn(y,v):!1}else u=!1;u&&Rz(a)&&Uz(a,"glv",1);a.eventName===P.g.ra?(U(a.h,P.g.ib)&&Go(["aw","dc"]),wA(a),t=yA(a)):t={};r.call(this,t);a.eventName==P.g.ra&&(U(a.h,P.g.Qa,!0)?(a.h.h[P.g.ba]&&(a.h.m[P.g.ba]=a.h.h[P.g.ba],a.h.h[P.g.ba]=void 0,a.m[P.g.ba]=void 0),
a.eventName=P.g.Xb):a.H=!0);var A=db(Fp(a.h,P.g.ba,1),".");A&&(a.m[P.g.ub]=A);var B=db(Fp(a.h,P.g.ba,2),".");B&&(a.m[P.g.tb]=B);var D=this.B,E=this.C,J=!this.nd,G=this.h,N=U(a.h,P.g.Ya);if(U(a.h,P.g.fb)&&U(a.h,P.g.ic))N?fA(a,N,1):(O(127),a.H=!0);else{var Q=N?1:8;a.metadata.is_new_to_site=!1;N||(N=gA(a),Q=3);N||(N=G,Q=5);if(!N){var da=tk(P.g.U),na=cA();N=!na.from_cookie||da?na.vid:void 0;Q=6}N?N=""+N:(N=Wk(),Q=7,a.metadata.is_first_visit=a.metadata.is_new_to_site=!0);fA(a,N,Q)}var X=Math.floor(a.metadata.event_start_timestamp_ms/
1E3),R=void 0;a.metadata.is_new_to_site||(R=qA(a)||D);var ia=Oa(U(a.h,P.g.Sc,30));ia=Math.min(475,ia);ia=Math.max(5,ia);var ja=Oa(U(a.h,P.g.ff,1E4)),S=kA(R);a.metadata.is_first_visit=!1;a.metadata.is_session_start=!1;a.metadata.join_timer_sec=0;S&&S.kh&&(a.metadata.join_timer_sec=Math.max(0,S.kh-Math.max(0,X-S.xe)));var Ea=!1;S||(Ea=a.metadata.is_first_visit=!0,S={sessionId:String(X),uc:1,ed:!1,xe:X,qc:!1,je:void 0});X>S.xe+60*ia&&(Ea=!0,S.sessionId=String(X),S.uc++,S.ed=!1,S.je=void 0);if(Ea)a.metadata.is_session_start=
!0,E.Zk(a);else if(E.Sk()>ja||a.eventName==P.g.Xb)S.ed=!0;a.metadata.euid_mode_enabled?U(a.h,P.g.Aa)?S.qc=!0:(S.qc&&(S.je=void 0),S.qc=!1):S.qc=!1;var Wa=S.je;if(a.metadata.euid_mode_enabled){var Ca=U(a.h,P.g.Oc),Ka=Ca?1:8;Ca||(Ca=Wa,Ka=4);Ca||(Ca=Vk(),Ka=7);var ab=Ka,mc=a.metadata.enhanced_client_id_source;if(void 0===mc||ab<=mc)a.m[P.g.Oc]=Ca.toString(),a.metadata.enhanced_client_id_source=ab}J?(a.copyToHitData(P.g.hb,S.sessionId),a.copyToHitData(P.g.Nd,S.uc),a.copyToHitData(P.g.Md,S.ed?1:0)):(a.m[P.g.hb]=
S.sessionId,a.m[P.g.Nd]=S.uc,a.m[P.g.Md]=S.ed?1:0);a.metadata[P.g.We]=S.qc?1:0;mB(a);if(!U(a.h,P.g.ic)||!U(a.h,P.g.fb)){var nc="",oc=H.location;if(oc){var Ye=oc.pathname||"";"/"!=Ye.charAt(0)&&(Ye="/"+Ye);nc=oc.protocol+"//"+oc.hostname+Ye+oc.search}a.copyToHitData(P.g.ja,nc);var hE=a.copyToHitData,iE=P.g.Ea,di;a:{var qt=Jk("_opt_expid",void 0,void 0,P.g.U)[0];if(qt){var rt=decodeURIComponent(qt).split("$");if(3===rt.length){di=rt[2];break a}}if(void 0!==Lh.ga4_referrer_override)di=Lh.ga4_referrer_override;
else{var st=si("gtm.gtagReferrer."+a.target.Z);di=st?""+st:H.referrer}}hE.call(a,iE,di||void 0);a.copyToHitData(P.g.wb,H.title);a.copyToHitData(P.g.xa,(fc.language||"").toLowerCase());var tt=Mi();a.copyToHitData(P.g.xb,tt.width+"x"+tt.height);T(80)&&a.copyToHitData(P.g.Nb)}a.metadata.create_dc_join=!1;a.metadata.create_google_join=!1;if(!(T(66)&&Rz(a)||a.metadata.is_merchant_center||!1===U(a.h,P.g.rb))&&BA()&&tk(P.g.I)){var ei=gp(a,P.g.eb,U(a.h,P.g.eb));
ei=ei||Oz(a);(a.metadata.is_session_start||U(a.h,P.g.Ze))&&(a.metadata.create_dc_join=!!ei);var ut;ut=a.metadata.join_timer_sec;ei&&0===(ut||0)&&(a.metadata.join_timer_sec=60,a.metadata.create_google_join=!0)}nB(a);Bh.hasOwnProperty(a.eventName)&&(a.metadata.is_ecommerce=!0,a.copyToHitData(P.g.ca),a.copyToHitData(P.g.sa));a.copyToHitData(P.g.jf);for(var vt=U(a.h,P.g.af)||[],Ml=0;Ml<vt.length;Ml++){var wt=vt[Ml];if(wt.rule_result){a.copyToHitData(P.g.jf,
wt.traffic_type);Xz(3);break}}if(!a.metadata.is_merchant_center&&U(a.h,P.g.za)){var xt=sA(a)||{},kE=(Un(xt[P.g.jc],!!xt[P.g.V])?Ln(!0)._fplc:void 0)||(0<Jk("FPLC",void 0,void 0,P.g.U).length?void 0:"0");a.m._fplc=kE}if(void 0!==U(a.h,P.g.Jd))a.copyToHitData(P.g.Jd);else{var zt=U(a.h,P.g.Ld),Nl,fi;a:{if(vA){var Ol=sA(a)||{};if(Ol&&Ol[P.g.V])for(var At=aj(cj(a.m[P.g.Ea]),"host",!0),gi=Ol[P.g.V],hg=0;hg<gi.length;hg++)if(gi[hg]instanceof RegExp){if(gi[hg].test(At)){fi=!0;break a}}else if(0<=At.indexOf(gi[hg])){fi=
!0;break a}}fi=!1}if(!(Nl=fi)){var hi;if(hi=zt)a:{for(var Bt=zt.include_conditions||[],lE=aj(cj(a.m[P.g.Ea]),"host",!0),Pl=0;Pl<Bt.length;Pl++)if(Bt[Pl].test(lE)){hi=!0;break a}hi=!1}Nl=hi}Nl&&(a.m[P.g.Jd]="1",Xz(4))}Rz(a)&&(!T(87)&&hs()||Uz(a,"uc",Ei()),bk()&&Uz(a,"rnd",al()));if(T(66)&&Rz(a)){gp(a,P.g.eb,!1)&&Uz(a,"gse",1);!1===U(a.h,
P.g.rb)&&Uz(a,"ngs",1);Pz(a)&&Uz(a,"ga_rd",1);BA()||Uz(a,"ngst",1);var Ct=Qz(a);Ct&&Uz(a,"etld",Ct)}if(T(94)&&Rz(a)){var Dt=HA?Gi():"";Dt&&Uz(a,"gcsub",Dt)}Rz(a)&&bk()&&(ck()&&Uz(a,"gcd",yk()),U(a.h,P.g.la)&&Uz(a,"adr",1));if(Rz(a)){var Et=pq();Et&&Uz(a,"us_privacy",Et);var Ft=rm();Ft&&Uz(a,"gdpr",Ft);var Gt=qm();Gt&&Uz(a,"gdpr_consent",Gt)}a:if(T(11))if(!ln(z))O(87);else if(void 0!==nn){O(85);var Ht=jn();if(Ht){if(T(59)){if(U(a.h,P.g.Rc)&&!Rz(a))break a}else if(U(a.h,P.g.Rc))break a;rn(Ht,a)}else O(86)}T(61)&&
U(a.h,P.g.fb)&&Xz(12);if(T(78)){var Ql=Yp(Xp());Ql||oB||(oB=!0,Cl(),Ql=Yp(Xp()));Ql&&(a.m[P.g.Kb]="1")}if(a.eventName==P.g.Ga){var Jt=U(a.h,P.g.Pa),mE=U(a.h,P.g.cb),Kt=void 0;Kt=a.m[Jt];mE(Kt||U(a.h,Jt));a.H=!0}if(!T(26)&&!a.h.eventMetadata.syn_or_mod){var Rl=U(a.h,P.g.Re);if(Rl){var $d=Vc(a.h.h);Vc(a.m,$d);for(var Lt=Rl.edit_rules||[],Mt=!1,Sl=0;Sl<Lt.length;Sl++){var ii;a:{var ji=a,ae=Lt[Sl];if(vz(ji.eventName,$d,ae.event_name_predicate,ae.conditions||[])){if(ae.new_event_name){var Nt=k(ae.new_event_name)?
String(ae.new_event_name):rz(ji.eventName,$d,ae.new_event_name);if(Zz(Nt)){ii=!1;break a}ji.eventName=String(Nt)}$z(ji.eventName,$d,ae);Xz(2);ii=!0}else ii=!1}ii&&(Mt=!0)}for(var Ot=Rl.synthesis_rules||[],Tl=0;Tl<Ot.length;Tl++){var Ul=a,ig=Ot[Tl];if(vz(Ul.eventName,$d,ig.event_name_predicate,ig.conditions||[])){var Vl=ig.new_event_name;if(!Zz(Vl)){var Pt=ig.merge_source_event_params?Vc($d):{};$z(Vl,Pt,ig);var Qt={},Wl={eventMetadata:(Qt.syn_or_mod=!0,Qt)};Wl.eventMetadata.event_usage=[11];sz&&Wl.eventMetadata.event_usage.push(10);
var nE=jt(Ul.target.Z,Vl,Pt);mt(nE,Ul.h.eventId,Wl);Xz(1)}}}if(Mt){for(var Xl={},Rt={eventMetadata:(Xl.syn_or_mod=!0,Xl.is_external_event=!!a.h.eventMetadata.is_external_event,Xl)},St,Yl=[],Tt=ub.GA4_EVENT||[],ki=0;ki<Tt.length;ki++)Tt[ki]&&Yl.push(ki);(St=0<Yl.length?Yl:void 0)&&(Rt.eventMetadata.event_usage=St);var oE=jt(a.target.Z,a.eventName,$d);mt(oE,a.h.eventId,Rt);a.H=!0}}}a.copyToHitData(P.g.Aa);a.copyToHitData(P.g.Ra);jp(a);bB(a);a.metadata.em_event&&Xz(14);var Zl=a.metadata.event_usage;
if(Ha(Zl))for(var $l=0;$l<Zl.length;$l++)Xz(Zl[$l]);var Ut=xb("GA4_EVENT");Ut&&(a.m._eu=Ut);if(a.metadata.speculative||a.H){a.h.W();wb();return}var pE=this.oj,Vt,qE=this.h,am;a:{var bm=rA(a);if(bm){if(pA(bm,a)){am=bm;break a}O(25);a.H=!0}am=void 0}var rE=am;Vt={clientId:jA(a,qE),tj:rE};pE.call(this,Vt);this.nd=!0;this.fm(a);if(Rz(a)){var sE=a.metadata.is_conversion;("page_view"===a.eventName||sE)&&gB(this,a)}this.C.Ah();this.Yd=pB(a,this.Yd);a.copyToHitData(P.g.ng);U(a.h,P.g.Rc)&&(a.m[P.g.Rc]=!0,
T(75)&&Rz(a)||fB(a,P.g.xb));if(a.H){a.h.W();wb();return}this.Vi(a);a.h.R()}catch(GF){a.h.W()}wb()};aa.Vi=function(a){this.pb.add(a)};aa.oj=function(a){var b=a.clientId,c=a.tj;b&&c&&(this.h=b,this.B=c)};aa.flush=function(){this.pb.flush()};aa.fm=function(a){var b=this;if(!this.N){var c=tk(P.g.U);zk([P.g.U],function(){var d=tk(P.g.U);if(c^d&&b.m&&b.B&&b.h){var e=b.h;if(d){var f=gA(b.m);if(f){b.h=f;var g=qA(b.m);g&&(b.B=mA(g,b.B,b.m))}else iA(b.h,b.m),eA(b.h,!0);pA(b.B,b.m);
var h={};h[P.g.Ze]=e;var m=jt(b.T,P.g.od,h);mt(m,a.h.eventId,{});}else{b.B=void 0;b.h=void 0;z.gaGlobal={};}c=d}});this.N=!0}};aa.ik=function(a){a.eventName!==P.g.Ga&&this.C.hk(a)};var lB=function(a){function b(c,d){xh[c]||void 0===d||(a.m[c]=d)}l(a.h.m,b);l(a.h.h,b)},mB=function(a){var b=Gp(a.h),c=function(d,e){iB[d]&&(a.m[d]=e)};Uc(b[P.g.Ic])?
l(b[P.g.Ic],function(d,e){c((P.g.Ic+"_"+d).toLowerCase(),e)}):l(b,c)},nB=function(a){var b=function(c){return!!c&&c.conversion};a.metadata.is_conversion=b(Tz(a));a.metadata.is_first_visit&&(a.metadata.is_first_visit_conversion=b(Tz(a,"first_visit")));a.metadata.is_session_start&&(a.metadata.is_session_start_conversion=b(Tz(a,"session_start")))},pB=function(a,b){var c=void 0;return c},oB=!1;
function kB(a){l(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[P.g.Ra]||{};l(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var qB=function(a){if("prerender"==H.visibilityState)return!1;a();return!0},rB=function(a){if(!qB(a)){var b=!1,c=function(){!b&&qB(a)&&(b=!0,uc(H,"visibilitychange",c),O(55))};tc(H,"visibilitychange",c);O(54)}};var tB=function(a,b){rB(function(){var c=Ro(a);if(c){var d=sB(c,b);ou.register(a,d)}});};function sB(a,b){var c=function(){};var d=new jB(a.id),e="MC"===a.prefix;c=function(f,g,h,m){e&&(m.eventMetadata.is_merchant_center=!0);d.Kl(g,h,m)};uB(a,d,b);return c}
function uB(a,b,c){var d=b.C,e={},f={eventId:c,eventMetadata:(e.batch_on_navigation=!0,e)};d.Ql(function(){Vz=!0;ou.flush();1E3<=d.Ef()&&fc.sendBeacon&&pu(P.g.od,{},a.id,f);b.flush();d.pj(function(){Vz=!1;d.pj()})});};var eD=sB;function gD(a,b,c){var d=this;}gD.M="internal.gtagConfig";function hD(){var a={};return a};
function jD(a,b){}jD.O="gtagSet";function kD(a,b){}kD.O="injectHiddenIframe";var lD={};
function nD(a,b,c,d){}var oD=Object.freeze({dl:1,id:1}),pD={};
function qD(a,b,c,d){}nD.O="injectScript";qD.M="internal.injectScript";function rD(a){var b=!0;return b}rD.O="isConsentGranted";var sD=function(){var a=Gg(function(b){this.h.h.log("error",b)});a.O="JSON";return a};var tD=function(a){this.containerId=a};function uD(a,b){var c=this,d=null;return d}uD.M="internal.loadGoogleTag";var vD=function(){return!1},wD={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var xD=["textContent","value","tagName","children","childElementCount"];
function yD(a){var b;M(this,"read_dom_elements","css","*");for(var c=0;c<xD.length;c++)M(this,"access_dom_element_property",H.body,"read",xD[c]);var d=Xc(a)||{},e=rj({ad:!!d.includeSelector,bd:!!d.includeVisibility,ke:d.excludeElementSelectors,yb:d.fieldFilters,sj:!!d.selectMultipleElements});b=new jb;var f=new wa;b.set("elements",f);for(var g=e.elements,h=0;h<g.length;h++)f.push(zD(g[h]));void 0!==e.wh&&b.set("preferredEmailElement",
zD(e.wh));b.set("status",e.status);return b}var zD=function(a){var b=new jb;b.set("userData",a.ob);b.set("tagName",a.tagName);void 0!==a.querySelector&&b.set("querySelector",a.querySelector);void 0!==a.isVisible&&b.set("isVisible",a.isVisible);switch(a.type){case 1:b.set("type","email")}return b};yD.M="internal.locateUserData";function AD(){}AD.O="logToConsole";function BD(a){var b=void 0;if("function"===typeof URL){var c;a:{var d;try{d=new URL(a)}catch(w){c=void 0;break a}for(var e={},f=Array.from(d.searchParams),g=0;g<f.length;g++){var h=f[g][0],m=f[g][1];e.hasOwnProperty(h)?"string"===typeof e[h]?e[h]=[e[h],m]:e[h].push(m):e[h]=m}c=Wc({href:d.href,origin:d.origin,protocol:d.protocol,username:d.username,password:d.password,host:d.host,hostname:d.hostname,port:d.port,pathname:d.pathname,search:d.search,searchParams:e,
hash:d.hash})}return c}var n;try{n=cj(a)}catch(w){return}if(!n.protocol||!n.host)return;var p={};if(n.search)for(var q=n.search.replace("?","").split("&"),r=0;r<q.length;r++){var t=q[r].split("="),u=t[0],v=decodeURIComponent(t.splice(1).join("="));p.hasOwnProperty(u)?"string"===typeof p[u]?p[u]=[p[u],v]:p[u].push(v):p[u]=v}n.searchParams=p;n.origin=n.protocol+"//"+n.host;n.username="";n.password="";b=Wc(n);return b}BD.O="parseUrl";function CD(a){}CD.M="internal.processAsNewEvent";function DD(a,b){var c=!1;return c}DD.O="queryPermission";function ED(){var a="";return a}ED.O="readCharacterSet";function FD(){var a="";return a}FD.O="readTitle";function GD(a,b){var c=this;L(F(this),["destinationId:!string","callback:!Fn"],arguments),kp(a,function(d){b.h(c.h,Wc(d,c.h,1))});}GD.M="internal.registerCcdCallback";var HD=Object.freeze(["config","event","get","set"]);function ID(a,b,c){}ID.M="internal.registerGtagCommandListener";function JD(a,b){var c=!1;return c}JD.M="internal.removeDataLayerEventListener";function KD(){}KD.O="resetDataLayer";function LD(a,b,c,d){L(F(this),["destinationIds:!*","eventName:!*","eventParameters:?DustMap","messageContext:?DustMap"],arguments);var e=c?Xc(c):{},f=Xc(a);Array.isArray(f)||(f=[f]);b=String(b);var g=d?Xc(d):{},h=this.h.h;g.originatingEntity=fy(h);for(var m=0;m<f.length;m++){var n=f[m];if("string"===typeof n){var p=Vc(e),
q=Vc(g),r=jt(n,b,p);mt(r,g.eventId||h.eventId,q)}}}LD.M="internal.sendGtagEvent";function MD(a,b,c){}MD.O="sendPixel";function ND(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f}ND.O="setCookie";function OD(a,b){}OD.O="setCorePlatformServices";function PD(a){}PD.O="setDefaultConsentState";function QD(a,b){}QD.M="internal.setDelegatedConsentType";function RD(a,b,c){return!1}RD.O="setInWindow";function SD(a,b,c){L(F(this),["targetId:!string","name:!string","value:!*"],arguments);var d=Li(a)||{};d[b]=Xc(c,this.h);var e=a;Ji||Ki();Ii[e]=d;}SD.M="internal.setProductSettingsParameter";function TD(a,b,c){L(F(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=uu(ou,a).h,f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!Uc(e[d[f]]))throw Error("setRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}e[d[f]]=Xc(c,this.h);}TD.M="internal.setRemoteConfigParameter";function UD(a,b,c,d){var e=this;}UD.O="sha256";function VD(a,b,c){}
VD.M="internal.sortRemoteConfigParameters";var WD={},XD={};WD.O="templateStorage";WD.getItem=function(a){var b=null;M(this,"access_template_storage");var c=this.h.h;if(!c)throw Error("invalid program state");var d=c.qe();XD[d]&&(b=XD[d].hasOwnProperty("gtm."+a)?XD[d]["gtm."+a]:null);return b};
WD.setItem=function(a,b){M(this,"access_template_storage");var c=this.h.h;if(!c)throw Error("invalid program state");var d=c.qe();XD[d]=XD[d]||{};XD[d]["gtm."+a]=b;};
WD.removeItem=function(a){M(this,"access_template_storage");var b=this.h.h;if(!b)throw Error("invalid program state");var c=b.qe();if(!XD[c]||!XD[c].hasOwnProperty("gtm."+a))return;delete XD[c]["gtm."+a];};WD.clear=function(){M(this,"access_template_storage");var a=this.h.h;if(!a)throw Error("invalid program state");delete XD[a.qe()];};var YD=function(a){var b;return b};function ZD(a){}ZD.O="updateConsentState";var $D=function(){var a=new Qg,b=function(d){return Sg(a,d.M,d)},c=function(d){return a.add(d.O,d)};c(ax);c(gx);c(Tx);c(Wx);c(Xx);c(ay);c(by);c(dy);c(sD());c(ey);c(Az);c(Hz);c(Iz);c(Jz);c(Mz);c(jD);c(kD);c(nD);c(rD);c(AD);c(BD);c(DD);c(ED);c(FD);c(MD);c(ND);c(PD);c(RD);c(UD);c(WD);c(ZD);a.add("Math",qg());a.add("Object",Og);a.add("TestHelper",Tg());a.add("assertApi",mg);a.add("assertThat",ng);a.add("decodeUri",sg);a.add("decodeUriComponent",tg);a.add("encodeUri",ug);a.add("encodeUriComponent",vg);
a.add("fail",Bg);a.add("generateRandom",Cg);a.add("getContainerVersion",Dg);a.add("getTimestamp",Eg);a.add("getTimestampMillis",Eg);a.add("getType",Fg);a.add("makeInteger",Hg);a.add("makeNumber",Ig);a.add("makeString",Jg);a.add("makeTableMap",Kg);a.add("mock",Ng);a.add("fromBase64",zz,!("atob"in z));a.add("localStorage",wD,!vD());a.add("toBase64",YD,!("btoa"in z));b(dx);b(wx);b(Dx);b(Ix);b(Rx);b(Ux);b(Zx);b(cy);b(rg);b(hy);b(sy);b(xy);b(Cy);b(Ly);b(Py);b($y);b(mz);b(wg);b(oz);b(Bz);b(Cz);b(Fz);b(Gz);
b(Kz);b(Lz);b(gD);b(qD);b(uD);b(yD);b(CD);b(GD);b(ID);b(JD);b(LD);b(QD);b(SD);b(TD);b(VD);b(Ug);Sg(a,"internal.GtagSchema",hD());

T(105)&&c(OD);return function(d){var e;if(a.h.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.m.hasOwnProperty(d)){var g=!1,h=this.h.h;if(h){var m=h.qe();if(m){0!==m.indexOf("__cvt_")&&(g=!0);}}else g=
!0;f=g}if(f){var n=a.m.hasOwnProperty(d)?a.m[d]:void 0;e=n}else throw Error(d+" is not a valid API name.");}return e}};var aE=function(){return!1},bE=function(){var a={};return function(b,c,d){}};var cE;
function dE(){var a=cE;return function(b,c,d){var e=d&&d.event;eE(c);var f=new jb;l(c,function(q,r){var t=Wc(r);void 0===t&&void 0!==r&&O(44);f.set(q,t)});a.h.h.C=ef();var g={zk:rf(b),eventId:void 0!==e?e.id:void 0,priorityId:void 0!==e?e.priorityId:void 0,xf:void 0!==e?function(q){return e.Tb.xf(q)}:void 0,qe:function(){return b},log:function(){},Jk:{index:d&&d.index,type:d&&d.type,name:d&&d.name}};if(aE()){var h=bE(),m=void 0,n=void 0;g.Xa={Dh:[],fe:{},kb:function(q,r,t){1===r&&(m=q);7===r&&(n=
t);h(q,r,t)},ph:Lg()};g.log=function(q,r){if(m){var t=Array.prototype.slice.call(arguments,1);h(m,4,{level:q,source:n,message:t})}}}var p=me(a,g,[b,f]);a.h.h.C=void 0;p instanceof ra&&"return"===p.h&&(p=p.m);return Xc(p)}}function eE(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){I(b)});Fa(c)&&(a.gtmOnFailure=function(){I(c)})}
function fE(){cE.h.h.N=function(a,b,c){Lh.SANDBOXED_JS_SEMAPHORE=Lh.SANDBOXED_JS_SEMAPHORE||0;Lh.SANDBOXED_JS_SEMAPHORE++;try{return a.apply(b,c)}finally{Lh.SANDBOXED_JS_SEMAPHORE--}}}function gE(a){void 0!==a&&l(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ci[e]=ci[e]||[];ci[e].push(b)}})};var jE=encodeURI,Y=encodeURIComponent,tE=function(a,b,c){sc(a,b,c)},uE=function(a,b){if(!a)return!1;var c=aj(cj(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},vE=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&
a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Z={o:{}};Z.o.access_template_storage=["google"],function(){(function(a){Z.__access_template_storage=a;Z.__access_template_storage.s="access_template_storage";Z.__access_template_storage.isVendorTemplate=!0;Z.__access_template_storage.priorityOverride=0;Z.__access_template_storage.isInfrastructure=!1})(function(){return{assert:function(){},X:function(){return{}}}})}();

Z.o.c=["google"],function(){(function(a){Z.__c=a;Z.__c.s="c";Z.__c.isVendorTemplate=!0;Z.__c.priorityOverride=0;Z.__c.isInfrastructure=!1})(function(a){Aw(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.o.e=["google"],function(){(function(a){Z.__e=a;Z.__e.s="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!1})(function(a){return String(a.vtp_gtmCachedValues.event)})}();
Z.o.v=["google"],function(){(function(a){Z.__v=a;Z.__v.s="v";Z.__v.isVendorTemplate=!0;Z.__v.priorityOverride=0;Z.__v.isInfrastructure=!1})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=sw(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Aw(d,"v",a.vtp_gtmEventId);return d})}();

Z.o.process_dom_events=["google"],function(){function a(b,c,d){return{targetType:c,eventName:d}}(function(b){Z.__process_dom_events=b;Z.__process_dom_events.s="process_dom_events";Z.__process_dom_events.isVendorTemplate=!0;Z.__process_dom_events.priorityOverride=0;Z.__process_dom_events.isInfrastructure=!1})(function(b){for(var c=b.vtp_targets||[],d=b.vtp_createPermissionError,e={},f=0;f<c.length;f++){var g=c[f];e[g.targetType]=e[g.targetType]||[];e[g.targetType].push(g.eventName)}return{assert:function(h,
m,n){if(!e[m])throw d(h,{},"Prohibited event target "+m+".");if(-1===e[m].indexOf(n))throw d(h,{},"Prohibited listener registration for DOM event "+n+".");},X:a}})}();







Z.o.read_container_data=["google"],function(){(function(a){Z.__read_container_data=a;Z.__read_container_data.s="read_container_data";Z.__read_container_data.isVendorTemplate=!0;Z.__read_container_data.priorityOverride=0;Z.__read_container_data.isInfrastructure=!1})(function(){return{assert:function(){},X:function(){return{}}}})}();
Z.o.listen_data_layer=["google"],function(){function a(b,c){return{eventName:c}}(function(b){Z.__listen_data_layer=b;Z.__listen_data_layer.s="listen_data_layer";Z.__listen_data_layer.isVendorTemplate=!0;Z.__listen_data_layer.priorityOverride=0;Z.__listen_data_layer.isInfrastructure=!1})(function(b){var c=b.vtp_accessType,d=b.vtp_allowedEvents||[],e=b.vtp_createPermissionError;return{assert:function(f,g){if(!k(g))throw e(f,{eventName:g},"Event name must be a string.");if(!("any"===c||"specific"===
c&&0<=d.indexOf(g)))throw e(f,{eventName:g},"Prohibited listen on data layer event.");},X:a}})}();


Z.o.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.s="get_url";Z.__get_url.isVendorTemplate=!0;Z.__get_url.priorityOverride=0;Z.__get_url.isInfrastructure=!1})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));
var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!k(g))throw e(f,{},"URL component must be a string.");if(c&&0>c.indexOf(g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!k(h))throw e(f,{},"Query key must be a string.");if(0>d.indexOf(h))throw e(f,{},"Prohibited query key: "+h);}}else if(c)throw e(f,{},
"Prohibited from getting entire URL when components are specified.");},X:a}})}();
Z.o.read_dom_elements=["google"],function(){function a(b,c,d){return{type:c,value:d}}(function(b){Z.__read_dom_elements=b;Z.__read_dom_elements.s="read_dom_elements";Z.__read_dom_elements.isVendorTemplate=!0;Z.__read_dom_elements.priorityOverride=0;Z.__read_dom_elements.isInfrastructure=!1})(function(b){for(var c=b.vtp_selectors||[],d=b.vtp_createPermissionError,e=[],f=[],g=0;g<c.length;g++){var h=c[g];switch(h.type){case "id":e.push(h.value);break;case "css":f.push(h.value)}}return{assert:function(m,
n,p){switch(n){case "id":if(-1<e.indexOf(p))return;break;case "css":if(-1<f.indexOf(p))return;break;default:throw d(m,{},"Unknown selector type "+n+".");}throw d(m,{},"Prohibited selector value "+p+" for selector type "+n+".");},X:a}})}();
Z.o.gct=["google"],function(){function a(d){for(var e=[],f=0;f<d.length;f++)try{e.push(new RegExp(d[f]))}catch(g){}return e}function b(d){return d.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function c(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].matchValue,h;switch(d[f].matchType){case "BEGINS_WITH":h="^"+b(g);break;case "ENDS_WITH":h=b(g)+"$";break;case "EQUALS":h="^"+b(g)+"$";break;case "REGEX":h=g;break;default:h=b(g)}e.push(h)}return e}(function(d){Z.__gct=d;Z.__gct.s="gct";Z.__gct.isVendorTemplate=
!0;Z.__gct.priorityOverride=0;Z.__gct.isInfrastructure=!1})(function(d){var e={},f=d.vtp_sessionDuration;0<f&&(e[P.g.Sc]=f);e[P.g.Bd]=d.vtp_eventSettings;e[P.g.Re]=d.vtp_dynamicEventSettings;e[P.g.eb]=1===d.vtp_googleSignals;e[P.g.Hd]=d.vtp_foreignTld;e[P.g.Ye]=1===d.vtp_restrictDomain;e[P.g.af]=d.vtp_internalTrafficResults;var g=P.g.ya,h=d.vtp_linker;h&&h[P.g.V]&&(h[P.g.V]=a(h[P.g.V]));e[g]=h;var m=P.g.Ld,n=d.vtp_referralExclusionDefinition;n&&n.include_conditions&&(n.include_conditions=a(n.include_conditions));
e[m]=n;var p=d.vtp_trackingId,q=uu(ou,p).h,r=q.referral_exclusion_conditions;r&&(r.length&&"object"===typeof r[0]&&(r=c(r)),e[P.g.Ld]={include_conditions:a(r)});var t=q.cross_domain_conditions;if(t){t.length&&"object"===typeof t[0]&&(t=c(t));var u={};e[P.g.ya]=(u[P.g.V]=a(t),u[P.g.vb]=!0,u[P.g.jc]=!0,u[P.g.Mb]="query",u)}xu(p,e);tB(p,d.vtp_gtmEventId);I(d.vtp_gtmOnSuccess)})}();

Z.o.get=["google"],function(){(function(a){Z.__get=a;Z.__get.s="get";Z.__get.isVendorTemplate=!0;Z.__get.priorityOverride=0;Z.__get.isInfrastructure=!1})(function(a){var b=a.vtp_settings,c=b.eventParameters||{},d=String(a.vtp_eventName),e={};e.eventId=a.vtp_gtmEventId;e.priorityId=a.vtp_gtmPriorityId;a.vtp_deferrable&&(e.deferrable=!0);var f=jt(String(b.streamId),d,c);mt(f,e.eventId,e);a.vtp_gtmOnSuccess()})}();



Z.o.access_dom_element_property=["google"],function(){function a(b,c,d,e){var f={property:e,read:!1,write:!1};switch(d){case "read":f.read=!0;break;case "write":f.write=!0;break;default:throw Error("Invalid "+b+" operation "+d);}return f}(function(b){Z.__access_dom_element_property=b;Z.__access_dom_element_property.s="access_dom_element_property";Z.__access_dom_element_property.isVendorTemplate=!0;Z.__access_dom_element_property.priorityOverride=0;Z.__access_dom_element_property.isInfrastructure=
!1})(function(b){for(var c=b.vtp_properties||[],d=b.vtp_createPermissionError,e=[],f=[],g=0;g<c.length;g++){var h=c[g],m=h.property;h.read&&e.push(m);h.write&&f.push(m)}return{assert:function(n,p,q,r){if(!k(r))throw d(n,{},"Property must be a string.");if("read"===q){if(-1<e.indexOf(r))return}else if("write"===q){if(-1<f.indexOf(r))return}else throw d(n,{},"Operation must be either 'read' or 'write', was "+q);throw d(n,{},"Prohibited "+q+" on "+p.tagName+" property "+r+".");},X:a}})}();


var EF={};EF.dataLayer=ti;EF.callback=function(a){bi.hasOwnProperty(a)&&Fa(bi[a])&&bi[a]();delete bi[a]};EF.bootstrap=0;EF._spx=!1;
function FF(){Lh[K.D]=Lh[K.D]||EF;K.Gb&&(Lh["ctid_"+K.Gb]=EF);il();ll()||l(ml(),function(a,b){ks(a,b.transportUrl,b.context);O(92)});Xa(ci,Z.o);Ue=jf}
(function(a){function b(){m=H.documentElement.getAttribute("data-tag-assistant-present");Bv(m)&&(h=g.dk)}if(!z["__TAGGY_INSTALLED"]){var c=!1;if(H.referrer){var d=cj(H.referrer);c="cct.google"===$i(d,"host")}if(!c){var e=Jk("googTaggyReferrer");c=e.length&&e[0].length}c&&(z["__TAGGY_INSTALLED"]=!0,pc("https://cct.google/taggy/agent.js"))}if(Xh)a();else{var f=function(u){var v="GTM",w="GTM";Rh?(v="OGT",w="GTAG"):Xh&&(w=v="OPT");var x=z["google.tagmanager.debugui2.queue"];x||(x=[],
z["google.tagmanager.debugui2.queue"]=x,pc("https://"+Kh.Pe+"/debug/bootstrap?id="+K.D+"&src="+w+"&cond="+u+"&gtm="+ol()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:gc,containerProduct:v,debug:!1,id:K.D,destinations:gl()}};y.data.resume=function(){a()};Kh.Ej&&(y.data.initialPublish=!0);x.push(y)},g={om:1,ek:2,rk:3,Gj:4,dk:5},h=void 0,m=void 0,n=aj(z.location,"query",!1,void 0,"gtm_debug");Bv(n)&&(h=g.ek);if(!h&&H.referrer){var p=cj(H.referrer);"tagassistant.google.com"===$i(p,"host")&&(h=g.rk)}if(!h){var q=
Jk("__TAG_ASSISTANT");q.length&&q[0].length&&(h=g.Gj)}h||b();if(!h&&Cv(m)){var r=function(){if(t)return!0;t=!0;b();h&&gc?f(h):a()},t=!1;tc(H,"TADebugSignal",function(){r()},!1);z.setTimeout(function(){r()},200)}else h&&gc?f(h):a()}})(function(){if(T(70)){var a=er($q.J.Sf,K.D);fr(a)}Fj().m();pm();if(K.Gb?Lh["ctid_"+K.Gb]:Lh[K.D]){var b=Lh.zones;b&&b.unregisterChild(fl());}else{
(T(11)||T(13)||T(55)||T(48))&&on();for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Ke.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Ne.push(f[g]);for(var h=c.predicates||[],m=0;m<h.length;m++)Me.push(h[m]);for(var n=c.rules||[],p=0;p<n.length;p++){for(var q=n[p],r={},t=0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Le.push(r)}Pe=Z;Qe=Zw;qf=new pf;var u=data.sandboxed_scripts,v=data.security_groups,w=data.infra,x=data.runtime||
[],y=data.runtime_lines;cE=new ke;fE();Je=dE();var A=cE,B=$D();mb(A.h,"require",B);for(var D=0;D<x.length;D++){var E=x[D];if(!Ha(E)||3>E.length){if(0===E.length)continue;break}y&&y[D]&&y[D].length&&bf(E,y[D]);try{cE.execute(E)}catch(Ye){}}if(void 0!==u)for(var J=["sandboxedScripts"],G=0;G<u.length;G++){var N=u[G].replace(/^_*/,"");ci[N]=J}gE(v);if(void 0!==w)for(var Q=0;Q<w.length;Q++)li[w[Q]]=!0;FF();if(T(102)){var da;if(T(87)){for(var na=Ci["7"],X=na?na.split("|"):[],R={},ia=0;ia<X.length;ia++)R[X[ia]]=
!0;da=R}else da={};for(var ja=da,S=0;S<lk.length;S++){var Ea=lk[S],Wa=ja[Ea]?"granted":"denied";Mj().implicit(Ea,Wa)}}Av();zs=!1;As=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Cs();else{tc(H,"DOMContentLoaded",Cs);tc(H,"readystatechange",Cs);if(H.createEventObject&&H.documentElement.doScroll){var Ca=!0;try{Ca=!z.frameElement}catch(Ye){}Ca&&Ds()}tc(z,"load",Cs)}Pu=!1;"complete"===H.readyState?Ru():tc(z,"load",Ru);zm&&z.setInterval(Dm,864E5);vb("HEALTH",1);ai=Ta();EF.bootstrap=ai;if(T(70)){var nc=er($q.J.Mh,K.D);if(fr(nc)){var oc=er($q.J.Sf,K.D);gr(nc,oc)}}}});

})()


};
window.moduloBuild.nameToHash.configuration1 = "x1ance80";

window.moduloBuild.modules["x19tuf26"] = function library_configuration (modulo) {
/*! showdown v 2.1.0 - 21-04-2022 */
!function(){function a(e){"use strict";var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t,a={};for(t in r)r.hasOwnProperty(t)&&(a[t]=r[t].defaultValue);return a}var x={},t={},d={},p=a(!0),h="vanilla",_={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:function(){"use strict";var e,r=a(!0),t={};for(e in r)r.hasOwnProperty(e)&&(t[e]=!0);return t}()};function g(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};x.helper.isArray(e)||(e=[e]);for(var n=0;n<e.length;++n){var s=t+" sub-extension "+n+": ",o=e[n];if("object"!=typeof o)return a.valid=!1,a.error=s+"must be an object, but "+typeof o+" given",a;if(!x.helper.isString(o.type))return a.valid=!1,a.error=s+'property "type" must be a string, but '+typeof o.type+" given",a;var i=o.type=o.type.toLowerCase();if("lang"!==(i="html"===(i="language"===i?o.type="lang":i)?o.type="output":i)&&"output"!==i&&"listener"!==i)return a.valid=!1,a.error=s+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===i){if(x.helper.isUndefined(o.listeners))return a.valid=!1,a.error=s+'. Extensions of type "listener" must have a property called "listeners"',a}else if(x.helper.isUndefined(o.filter)&&x.helper.isUndefined(o.regex))return a.valid=!1,a.error=s+i+' extensions must define either a "regex" property or a "filter" method',a;if(o.listeners){if("object"!=typeof o.listeners)return a.valid=!1,a.error=s+'"listeners" property must be an object but '+typeof o.listeners+" given",a;for(var l in o.listeners)if(o.listeners.hasOwnProperty(l)&&"function"!=typeof o.listeners[l])return a.valid=!1,a.error=s+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+l+" must be a function but "+typeof o.listeners[l]+" given",a}if(o.filter){if("function"!=typeof o.filter)return a.valid=!1,a.error=s+'"filter" must be a function, but '+typeof o.filter+" given",a}else if(o.regex){if(x.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!(o.regex instanceof RegExp))return a.valid=!1,a.error=s+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",a;if(x.helper.isUndefined(o.replace))return a.valid=!1,a.error=s+'"regex" extensions must implement a replace string or function',a}}return a}function n(e,r){"use strict";return"¨E"+r.charCodeAt(0)+"E"}x.helper={},x.extensions={},x.setOption=function(e,r){"use strict";return p[e]=r,this},x.getOption=function(e){"use strict";return p[e]},x.getOptions=function(){"use strict";return p},x.resetOptions=function(){"use strict";p=a(!0)},x.setFlavor=function(e){"use strict";if(!_.hasOwnProperty(e))throw Error(e+" flavor was not found");x.resetOptions();var r,t=_[e];for(r in h=e,t)t.hasOwnProperty(r)&&(p[r]=t[r])},x.getFlavor=function(){"use strict";return h},x.getFlavorOptions=function(e){"use strict";if(_.hasOwnProperty(e))return _[e]},x.getDefaultOptions=a,x.subParser=function(e,r){"use strict";if(x.helper.isString(e)){if(void 0===r){if(t.hasOwnProperty(e))return t[e];throw Error("SubParser named "+e+" not registered!")}t[e]=r}},x.extension=function(e,r){"use strict";if(!x.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=x.helper.stdExtName(e),x.helper.isUndefined(r)){if(d.hasOwnProperty(e))return d[e];throw Error("Extension named "+e+" is not registered!")}"function"==typeof r&&(r=r());var t=g(r=x.helper.isArray(r)?r:[r],e);if(!t.valid)throw Error(t.error);d[e]=r},x.getAllExtensions=function(){"use strict";return d},x.removeExtension=function(e){"use strict";delete d[e]},x.resetExtensions=function(){"use strict";d={}},x.validateExtension=function(e){"use strict";e=g(e,null);return!!e.valid||(console.warn(e.error),!1)},x.hasOwnProperty("helper")||(x.helper={}),x.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},x.helper.isFunction=function(e){"use strict";return e&&"[object Function]"==={}.toString.call(e)},x.helper.isArray=function(e){"use strict";return Array.isArray(e)},x.helper.isUndefined=function(e){"use strict";return void 0===e},x.helper.forEach=function(e,r){"use strict";if(x.helper.isUndefined(e))throw new Error("obj param is required");if(x.helper.isUndefined(r))throw new Error("callback param is required");if(!x.helper.isFunction(r))throw new Error("callback param must be a function/closure");if("function"==typeof e.forEach)e.forEach(r);else if(x.helper.isArray(e))for(var t=0;t<e.length;t++)r(e[t],t,e);else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object");for(var a in e)e.hasOwnProperty(a)&&r(e[a],a,e)}},x.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},x.helper.escapeCharactersCallback=n,x.helper.escapeCharacters=function(e,r,t){"use strict";r="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])",t&&(r="\\\\"+r),t=new RegExp(r,"g");return e=e.replace(t,n)},x.helper.unescapeHTMLEntities=function(e){"use strict";return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};function u(e,r,t,a){"use strict";var n,s,o,i=-1<(a=a||"").indexOf("g"),l=new RegExp(r+"|"+t,"g"+a.replace(/g/g,"")),c=new RegExp(r,a.replace(/g/g,"")),u=[];do{for(n=0;p=l.exec(e);)if(c.test(p[0]))n++||(o=(s=l.lastIndex)-p[0].length);else if(n&&!--n){var d=p.index+p[0].length,p={left:{start:o,end:s},match:{start:s,end:p.index},right:{start:p.index,end:d},wholeMatch:{start:o,end:d}};if(u.push(p),!i)return u}}while(n&&(l.lastIndex=s));return u}function s(u){"use strict";return function(e,r,t,a,n,s,o){var i=t=t.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback),l="",c="",r=r||"",o=o||"";return/^www\./i.test(t)&&(t=t.replace(/^www\./i,"http://www.")),u.excludeTrailingPunctuationFromURLs&&s&&(l=s),r+'<a href="'+t+'"'+(c=u.openLinksInNewWindow?' rel="noopener noreferrer" target="¨E95Eblank"':c)+">"+i+"</a>"+l+o}}function o(n,s){"use strict";return function(e,r,t){var a="mailto:";return r=r||"",t=x.subParser("unescapeSpecialChars")(t,n,s),n.encodeEmails?(a=x.helper.encodeEmailAddress(a+t),t=x.helper.encodeEmailAddress(t)):a+=t,r+'<a href="'+a+'">'+t+"</a>"}}x.helper.matchRecursiveRegExp=function(e,r,t,a){"use strict";for(var n=u(e,r,t,a),s=[],o=0;o<n.length;++o)s.push([e.slice(n[o].wholeMatch.start,n[o].wholeMatch.end),e.slice(n[o].match.start,n[o].match.end),e.slice(n[o].left.start,n[o].left.end),e.slice(n[o].right.start,n[o].right.end)]);return s},x.helper.replaceRecursiveRegExp=function(e,r,t,a,n){"use strict";x.helper.isFunction(r)||(s=r,r=function(){return s});var s,o=u(e,t,a,n),t=e,i=o.length;if(0<i){var l=[];0!==o[0].wholeMatch.start&&l.push(e.slice(0,o[0].wholeMatch.start));for(var c=0;c<i;++c)l.push(r(e.slice(o[c].wholeMatch.start,o[c].wholeMatch.end),e.slice(o[c].match.start,o[c].match.end),e.slice(o[c].left.start,o[c].left.end),e.slice(o[c].right.start,o[c].right.end))),c<i-1&&l.push(e.slice(o[c].wholeMatch.end,o[c+1].wholeMatch.start));o[i-1].wholeMatch.end<e.length&&l.push(e.slice(o[i-1].wholeMatch.end)),t=l.join("")}return t},x.helper.regexIndexOf=function(e,r,t){"use strict";if(!x.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(r instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";e=e.substring(t||0).search(r);return 0<=e?e+(t||0):e},x.helper.splitAtIndex=function(e,r){"use strict";if(x.helper.isString(e))return[e.substring(0,r),e.substring(r)];throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"},x.helper.encodeEmailAddress=function(e){"use strict";var t=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=e.replace(/./g,function(e){var r;return e="@"===e?t[Math.floor(2*Math.random())](e):.9<(r=Math.random())?t[2](e):.45<r?t[1](e):t[0](e)})},x.helper.padEnd=function(e,r,t){"use strict";return r>>=0,t=String(t||" "),e.length>r?String(e):((r-=e.length)>t.length&&(t+=t.repeat(r/t.length)),String(e)+t.slice(0,r))},"undefined"==typeof console&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),x.helper.regexes={asteriskDashAndColon:/([*_:~])/g},x.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:"<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"},x.Converter=function(e){"use strict";var r,t,n={},i=[],l=[],o={},a=h,s={parsed:{},raw:"",format:""};for(r in e=e||{},p)p.hasOwnProperty(r)&&(n[r]=p[r]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);function c(e,r){if(r=r||null,x.helper.isString(e)){if(r=e=x.helper.stdExtName(e),x.extensions[e]){console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");var t=x.extensions[e],a=e;if("function"==typeof t&&(t=t(new x.Converter)),x.helper.isArray(t)||(t=[t]),!(a=g(t,a)).valid)throw Error(a.error);for(var n=0;n<t.length;++n)switch(t[n].type){case"lang":i.push(t[n]);break;case"output":l.push(t[n]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}return}if(x.helper.isUndefined(d[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=d[e]}"function"==typeof e&&(e=e());a=g(e=x.helper.isArray(e)?e:[e],r);if(!a.valid)throw Error(a.error);for(var s=0;s<e.length;++s){switch(e[s].type){case"lang":i.push(e[s]);break;case"output":l.push(e[s])}if(e[s].hasOwnProperty("listeners"))for(var o in e[s].listeners)e[s].listeners.hasOwnProperty(o)&&u(o,e[s].listeners[o])}}function u(e,r){if(!x.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");o.hasOwnProperty(e)||(o[e]=[]),o[e].push(r)}n.extensions&&x.helper.forEach(n.extensions,c),this._dispatch=function(e,r,t,a){if(o.hasOwnProperty(e))for(var n=0;n<o[e].length;++n){var s=o[e][n](e,r,this,t,a);s&&void 0!==s&&(r=s)}return r},this.listen=function(e,r){return u(e,r),this},this.makeHtml=function(r){if(!r)return r;var e,t,a={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:i,outputModifiers:l,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return r=(r=(r=(r=(r=r.replace(/¨/g,"¨T")).replace(/\$/g,"¨D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/\u00A0/g,"&nbsp;"),n.smartIndentationFix&&(t=(e=r).match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+t+"}","gm"),r=e.replace(t,"")),r="\n\n"+r+"\n\n",r=(r=x.subParser("detab")(r,n,a)).replace(/^[ \t]+$/gm,""),x.helper.forEach(i,function(e){r=x.subParser("runExtension")(e,r,n,a)}),r=x.subParser("metadata")(r,n,a),r=x.subParser("hashPreCodeTags")(r,n,a),r=x.subParser("githubCodeBlocks")(r,n,a),r=x.subParser("hashHTMLBlocks")(r,n,a),r=x.subParser("hashCodeTags")(r,n,a),r=x.subParser("stripLinkDefinitions")(r,n,a),r=x.subParser("blockGamut")(r,n,a),r=x.subParser("unhashHTMLSpans")(r,n,a),r=(r=(r=x.subParser("unescapeSpecialChars")(r,n,a)).replace(/¨D/g,"$$")).replace(/¨T/g,"¨"),r=x.subParser("completeHTMLDocument")(r,n,a),x.helper.forEach(l,function(e){r=x.subParser("runExtension")(e,r,n,a)}),s=a.metadata,r},this.makeMarkdown=this.makeMd=function(e,r){if(e=(e=(e=e.replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/>[ \t]+</,">¨NBSP;<"),!r){if(!window||!window.document)throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");r=window.document}for(var r=r.createElement("div"),t=(r.innerHTML=e,{preList:function(e){for(var r=e.querySelectorAll("pre"),t=[],a=0;a<r.length;++a)if(1===r[a].childElementCount&&"code"===r[a].firstChild.tagName.toLowerCase()){var n=r[a].firstChild.innerHTML.trim(),s=r[a].firstChild.getAttribute("data-language")||"";if(""===s)for(var o=r[a].firstChild.className.split(" "),i=0;i<o.length;++i){var l=o[i].match(/^language-(.+)$/);if(null!==l){s=l[1];break}}n=x.helper.unescapeHTMLEntities(n),t.push(n),r[a].outerHTML='<precode language="'+s+'" precodenum="'+a.toString()+'"></precode>'}else t.push(r[a].innerHTML),r[a].innerHTML="",r[a].setAttribute("prenum",a.toString());return t}(r)}),a=(!function e(r){for(var t=0;t<r.childNodes.length;++t){var a=r.childNodes[t];3===a.nodeType?/\S/.test(a.nodeValue)||/^[ ]+$/.test(a.nodeValue)?(a.nodeValue=a.nodeValue.split("\n").join(" "),a.nodeValue=a.nodeValue.replace(/(\s)+/g,"$1")):(r.removeChild(a),--t):1===a.nodeType&&e(a)}}(r),r.childNodes),n="",s=0;s<a.length;s++)n+=x.subParser("makeMarkdown.node")(a[s],t);return n},this.setOption=function(e,r){n[e]=r},this.getOption=function(e){return n[e]},this.getOptions=function(){return n},this.addExtension=function(e,r){c(e,r=r||null)},this.useExtension=function(e){c(e)},this.setFlavor=function(e){if(!_.hasOwnProperty(e))throw Error(e+" flavor was not found");var r,t=_[e];for(r in a=e,t)t.hasOwnProperty(r)&&(n[r]=t[r])},this.getFlavor=function(){return a},this.removeExtension=function(e){x.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],a=0;a<i.length;++a)i[a]===t&&i.splice(a,1);for(var n=0;n<l.length;++n)l[n]===t&&l.splice(n,1)}},this.getAllExtensions=function(){return{language:i,output:l}},this.getMetadata=function(e){return e?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(e,r){s.parsed[e]=r},this._setMetadataFormat=function(e){s.format=e},this._setMetadataRaw=function(e){s.raw=e}},x.subParser("anchors",function(e,i,l){"use strict";function r(e,r,t,a,n,s,o){if(x.helper.isUndefined(o)&&(o=""),t=t.toLowerCase(),-1<e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))a="";else if(!a){if(a="#"+(t=t||r.toLowerCase().replace(/ ?\n/g," ")),x.helper.isUndefined(l.gUrls[t]))return e;a=l.gUrls[t],x.helper.isUndefined(l.gTitles[t])||(o=l.gTitles[t])}return e='<a href="'+(a=a.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"',""!==o&&null!==o&&(e+=' title="'+(o=(o=o.replace(/"/g,"&quot;")).replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"'),i.openLinksInNewWindow&&!/^#/.test(a)&&(e+=' rel="noopener noreferrer" target="¨E95Eblank"'),e+=">"+r+"</a>"}return e=(e=(e=(e=(e=l.converter._dispatch("anchors.before",e,i,l)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[([^\[\]]+)]()()()()()/g,r),i.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,function(e,r,t,a,n){if("\\"===t)return r+a;if(!x.helper.isString(i.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");t="";return r+'<a href="'+i.ghMentionsLink.replace(/\{u}/g,n)+'"'+(t=i.openLinksInNewWindow?' rel="noopener noreferrer" target="¨E95Eblank"':t)+">"+a+"</a>"})),e=l.converter._dispatch("anchors.after",e,i,l)});var i=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,l=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,c=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,m=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,f=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;x.subParser("autoLinks",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(c,s(r))).replace(f,o(r,t)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),x.subParser("simplifiedAutoLinks",function(e,r,t){"use strict";return r.simplifiedAutoLink?(e=t.converter._dispatch("simplifiedAutoLinks.before",e,r,t),e=(e=r.excludeTrailingPunctuationFromURLs?e.replace(l,s(r)):e.replace(i,s(r))).replace(m,o(r,t)),t.converter._dispatch("simplifiedAutoLinks.after",e,r,t)):e}),x.subParser("blockGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("blockGamut.before",e,r,t),e=x.subParser("blockQuotes")(e,r,t),e=x.subParser("headers")(e,r,t),e=x.subParser("horizontalRule")(e,r,t),e=x.subParser("lists")(e,r,t),e=x.subParser("codeBlocks")(e,r,t),e=x.subParser("tables")(e,r,t),e=x.subParser("hashHTMLBlocks")(e,r,t),e=x.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),x.subParser("blockQuotes",function(e,r,t){"use strict";e=t.converter._dispatch("blockQuotes.before",e,r,t);var a=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return r.splitAdjacentBlockquotes&&(a=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=(e+="\n\n").replace(a,function(e){return e=(e=(e=e.replace(/^[ \t]*>[ \t]?/gm,"")).replace(/¨0/g,"")).replace(/^[ \t]+$/gm,""),e=x.subParser("githubCodeBlocks")(e,r,t),e=(e=(e=x.subParser("blockGamut")(e,r,t)).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){return r.replace(/^  /gm,"¨0").replace(/¨0/g,"")}),x.subParser("hashBlock")("<blockquote>\n"+e+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),x.subParser("codeBlocks",function(e,n,s){"use strict";e=s.converter._dispatch("codeBlocks.before",e,n,s);return e=(e=(e+="¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,function(e,r,t){var a="\n",r=x.subParser("outdent")(r,n,s);return r=x.subParser("encodeCode")(r,n,s),r="<pre><code>"+(r=(r=(r=x.subParser("detab")(r,n,s)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+(a=n.omitExtraWLInCodeBlocks?"":a)+"</code></pre>",x.subParser("hashBlock")(r,n,s)+t})).replace(/¨0/,""),e=s.converter._dispatch("codeBlocks.after",e,n,s)}),x.subParser("codeSpans",function(e,n,s){"use strict";return e=(e=void 0===(e=s.converter._dispatch("codeSpans.before",e,n,s))?"":e).replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,a){return a=(a=a.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""),a=r+"<code>"+(a=x.subParser("encodeCode")(a,n,s))+"</code>",a=x.subParser("hashHTMLSpans")(a,n,s)}),e=s.converter._dispatch("codeSpans.after",e,n,s)}),x.subParser("completeHTMLDocument",function(e,r,t){"use strict";if(!r.completeHTMLDocument)return e;e=t.converter._dispatch("completeHTMLDocument.before",e,r,t);var a,n="html",s="<!DOCTYPE HTML>\n",o="",i='<meta charset="utf-8">\n',l="",c="";for(a in void 0!==t.metadata.parsed.doctype&&(s="<!DOCTYPE "+t.metadata.parsed.doctype+">\n","html"!==(n=t.metadata.parsed.doctype.toString().toLowerCase())&&"html5"!==n||(i='<meta charset="utf-8">')),t.metadata.parsed)if(t.metadata.parsed.hasOwnProperty(a))switch(a.toLowerCase()){case"doctype":break;case"title":o="<title>"+t.metadata.parsed.title+"</title>\n";break;case"charset":i="html"===n||"html5"===n?'<meta charset="'+t.metadata.parsed.charset+'">\n':'<meta name="charset" content="'+t.metadata.parsed.charset+'">\n';break;case"language":case"lang":l=' lang="'+t.metadata.parsed[a]+'"',c+='<meta name="'+a+'" content="'+t.metadata.parsed[a]+'">\n';break;default:c+='<meta name="'+a+'" content="'+t.metadata.parsed[a]+'">\n'}return e=s+"<html"+l+">\n<head>\n"+o+i+c+"</head>\n<body>\n"+e.trim()+"\n</body>\n</html>",e=t.converter._dispatch("completeHTMLDocument.after",e,r,t)}),x.subParser("detab",function(e,r,t){"use strict";return e=(e=(e=(e=(e=(e=t.converter._dispatch("detab.before",e,r,t)).replace(/\t(?=\t)/g,"    ")).replace(/\t/g,"¨A¨B")).replace(/¨B(.+?)¨A/g,function(e,r){for(var t=r,a=4-t.length%4,n=0;n<a;n++)t+=" ";return t})).replace(/¨A/g,"    ")).replace(/¨B/g,""),e=t.converter._dispatch("detab.after",e,r,t)}),x.subParser("ellipsis",function(e,r,t){"use strict";return r.ellipsis?(e=(e=t.converter._dispatch("ellipsis.before",e,r,t)).replace(/\.\.\./g,"…"),t.converter._dispatch("ellipsis.after",e,r,t)):e}),x.subParser("emoji",function(e,r,t){"use strict";if(!r.emoji)return e;return e=(e=t.converter._dispatch("emoji.before",e,r,t)).replace(/:([\S]+?):/g,function(e,r){return x.helper.emojis.hasOwnProperty(r)?x.helper.emojis[r]:e}),e=t.converter._dispatch("emoji.after",e,r,t)}),x.subParser("encodeAmpsAndAngles",function(e,r,t){"use strict";return e=(e=(e=(e=(e=t.converter._dispatch("encodeAmpsAndAngles.before",e,r,t)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?$!])/gi,"&lt;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),e=t.converter._dispatch("encodeAmpsAndAngles.after",e,r,t)}),x.subParser("encodeBackslashEscapes",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("encodeBackslashEscapes.before",e,r,t)).replace(/\\(\\)/g,x.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,x.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeBackslashEscapes.after",e,r,t)}),x.subParser("encodeCode",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("encodeCode.before",e,r,t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,x.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeCode.after",e,r,t)}),x.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,x.helper.escapeCharactersCallback)})).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,function(e){return e.replace(/([\\`*_~=|])/g,x.helper.escapeCharactersCallback)}),e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,t)}),x.subParser("githubCodeBlocks",function(e,s,o){"use strict";return s.ghCodeBlocks?(e=o.converter._dispatch("githubCodeBlocks.before",e,s,o),e=(e=(e+="¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(e,r,t,a){var n=s.omitExtraWLInCodeBlocks?"":"\n";return a=x.subParser("encodeCode")(a,s,o),a="<pre><code"+(t?' class="'+t+" language-"+t+'"':"")+">"+(a=(a=(a=x.subParser("detab")(a,s,o)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+n+"</code></pre>",a=x.subParser("hashBlock")(a,s,o),"\n\n¨G"+(o.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"})).replace(/¨0/,""),o.converter._dispatch("githubCodeBlocks.after",e,s,o)):e}),x.subParser("hashBlock",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("hashBlock.before",e,r,t)).replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n",e=t.converter._dispatch("hashBlock.after",e,r,t)}),x.subParser("hashCodeTags",function(e,n,s){"use strict";e=s.converter._dispatch("hashCodeTags.before",e,n,s);return e=x.helper.replaceRecursiveRegExp(e,function(e,r,t,a){t=t+x.subParser("encodeCode")(r,n,s)+a;return"¨C"+(s.gHtmlSpans.push(t)-1)+"C"},"<code\\b[^>]*>","</code>","gim"),e=s.converter._dispatch("hashCodeTags.after",e,n,s)}),x.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){return r=(r=(r=r.replace(/\n\n/g,"\n")).replace(/^\n/,"")).replace(/\n+$/g,""),r="\n\n¨K"+(t.gHtmlBlocks.push(r)-1)+"K\n\n"}}),x.subParser("hashHTMLBlocks",function(e,r,n){"use strict";e=n.converter._dispatch("hashHTMLBlocks.before",e,r,n);function t(e,r,t,a){return-1!==t.search(/\bmarkdown\b/)&&(e=t+n.converter.makeHtml(r)+a),"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"}var a=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"];r.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(e,r){return"&lt;"+r+"&gt;"}));for(var s=0;s<a.length;++s)for(var o=new RegExp("^ {0,3}(<"+a[s]+"\\b[^>]*>)","im"),i="<"+a[s]+"\\b[^>]*>",l="</"+a[s]+">";-1!==(c=x.helper.regexIndexOf(e,o));){var c=x.helper.splitAtIndex(e,c),u=x.helper.replaceRecursiveRegExp(c[1],t,i,l,"im");if(u===c[1])break;e=c[0].concat(u)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,x.subParser("hashElement")(e,r,n)),e=(e=x.helper.replaceRecursiveRegExp(e,function(e){return"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,x.subParser("hashElement")(e,r,n)),e=n.converter._dispatch("hashHTMLBlocks.after",e,r,n)}),x.subParser("hashHTMLSpans",function(e,r,t){"use strict";function a(e){return"¨C"+(t.gHtmlSpans.push(e)-1)+"C"}return e=(e=(e=(e=(e=t.converter._dispatch("hashHTMLSpans.before",e,r,t)).replace(/<[^>]+?\/>/gi,a)).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,a)).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,a)).replace(/<[^>]+?>/gi,a),e=t.converter._dispatch("hashHTMLSpans.after",e,r,t)}),x.subParser("unhashHTMLSpans",function(e,r,t){"use strict";e=t.converter._dispatch("unhashHTMLSpans.before",e,r,t);for(var a=0;a<t.gHtmlSpans.length;++a){for(var n=t.gHtmlSpans[a],s=0;/¨C(\d+)C/.test(n);){var o=RegExp.$1,n=n.replace("¨C"+o+"C",t.gHtmlSpans[o]);if(10===s){console.error("maximum nesting of 10 spans reached!!!");break}++s}e=e.replace("¨C"+a+"C",n)}return e=t.converter._dispatch("unhashHTMLSpans.after",e,r,t)}),x.subParser("hashPreCodeTags",function(e,n,s){"use strict";e=s.converter._dispatch("hashPreCodeTags.before",e,n,s);return e=x.helper.replaceRecursiveRegExp(e,function(e,r,t,a){t=t+x.subParser("encodeCode")(r,n,s)+a;return"\n\n¨G"+(s.ghCodeBlocks.push({text:e,codeblock:t})-1)+"G\n\n"},"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=s.converter._dispatch("hashPreCodeTags.after",e,n,s)}),x.subParser("headers",function(e,n,s){"use strict";e=s.converter._dispatch("headers.before",e,n,s);var o=isNaN(parseInt(n.headerLevelStart))?1:parseInt(n.headerLevelStart),r=n.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,t=n.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm,r=(e=(e=e.replace(r,function(e,r){var t=x.subParser("spanGamut")(r,n,s),r=n.noHeaderId?"":' id="'+i(r)+'"',r="<h"+o+r+">"+t+"</h"+o+">";return x.subParser("hashBlock")(r,n,s)})).replace(t,function(e,r){var t=x.subParser("spanGamut")(r,n,s),r=n.noHeaderId?"":' id="'+i(r)+'"',a=o+1,r="<h"+a+r+">"+t+"</h"+a+">";return x.subParser("hashBlock")(r,n,s)}),n.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm);function i(e){var r=e=n.customizedHeaderId&&(r=e.match(/\{([^{]+?)}\s*$/))&&r[1]?r[1]:e,e=x.helper.isString(n.prefixHeaderId)?n.prefixHeaderId:!0===n.prefixHeaderId?"section-":"";return n.rawPrefixHeaderId||(r=e+r),r=(n.ghCompatibleHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,""):n.rawHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-"):r.replace(/[^\w]/g,"")).toLowerCase(),n.rawPrefixHeaderId&&(r=e+r),s.hashLinkCounts[r]?r=r+"-"+s.hashLinkCounts[r]++:s.hashLinkCounts[r]=1,r}return e=e.replace(r,function(e,r,t){var a=t,a=(n.customizedHeaderId&&(a=t.replace(/\s?\{([^{]+?)}\s*$/,"")),x.subParser("spanGamut")(a,n,s)),t=n.noHeaderId?"":' id="'+i(t)+'"',r=o-1+r.length,t="<h"+r+t+">"+a+"</h"+r+">";return x.subParser("hashBlock")(t,n,s)}),e=s.converter._dispatch("headers.after",e,n,s)}),x.subParser("horizontalRule",function(e,r,t){"use strict";e=t.converter._dispatch("horizontalRule.before",e,r,t);var a=x.subParser("hashBlock")("<hr />",r,t);return e=(e=(e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,a),e=t.converter._dispatch("horizontalRule.after",e,r,t)}),x.subParser("images",function(e,r,d){"use strict";function l(e,r,t,a,n,s,o,i){var l=d.gUrls,c=d.gTitles,u=d.gDimensions;if(t=t.toLowerCase(),i=i||"",-1<e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))a="";else if(""===a||null===a){if(a="#"+(t=""!==t&&null!==t?t:r.toLowerCase().replace(/ ?\n/g," ")),x.helper.isUndefined(l[t]))return e;a=l[t],x.helper.isUndefined(c[t])||(i=c[t]),x.helper.isUndefined(u[t])||(n=u[t].width,s=u[t].height)}r=r.replace(/"/g,"&quot;").replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback);e='<img src="'+(a=a.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'" alt="'+r+'"';return i&&x.helper.isString(i)&&(e+=' title="'+(i=i.replace(/"/g,"&quot;").replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"'),n&&s&&(e=e+(' width="'+(n="*"===n?"auto":n))+'" height="'+(s="*"===s?"auto":s)+'"'),e+=" />"}return e=(e=(e=(e=(e=(e=d.converter._dispatch("images.before",e,r,d)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,function(e,r,t,a,n,s,o,i){return l(e,r,t,a=a.replace(/\s/g,""),n,s,0,i)})).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,l)).replace(/!\[([^\[\]]+)]()()()()()/g,l),e=d.converter._dispatch("images.after",e,r,d)}),x.subParser("italicsAndBold",function(e,r,t){"use strict";return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<strong><em>"+r+"</em></strong>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<strong>"+r+"</strong>"})).replace(/\b_(\S[\s\S]*?)_\b/g,function(e,r){return"<em>"+r+"</em>"}):(e=(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e})).replace(/_([^\s_][\s\S]*?)_/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=r.literalMidWordAsterisks?(e=(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(e,r,t){return r+"<strong><em>"+t+"</em></strong>"})).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(e,r,t){return r+"<strong>"+t+"</strong>"})).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(e,r,t){return r+"<em>"+t+"</em>"}):(e=(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e})).replace(/\*\*(\S[\s\S]*?)\*\*/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e})).replace(/\*([^\s*][\s\S]*?)\*/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),x.subParser("lists",function(e,d,c){"use strict";function p(e,r){c.gListLevel++,e=e.replace(/\n{2,}$/,"\n");var t=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,l=/\n[ \t]*\n(?!¨0)/.test(e+="¨0");return d.disableForced4SpacesIndentedSublists&&(t=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=(e=e.replace(t,function(e,r,t,a,n,s,o){o=o&&""!==o.trim();var n=x.subParser("outdent")(n,d,c),i="";return s&&d.tasklists&&(i=' class="task-list-item" style="list-style-type: none;"',n=n.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return o&&(e+=" checked"),e+=">"})),n=n.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(e){return"¨A"+e}),n="<li"+i+">"+(n=(n=r||-1<n.search(/\n{2,}/)?(n=x.subParser("githubCodeBlocks")(n,d,c),x.subParser("blockGamut")(n,d,c)):(n=(n=x.subParser("lists")(n,d,c)).replace(/\n$/,""),n=(n=x.subParser("hashHTMLBlocks")(n,d,c)).replace(/\n\n+/g,"\n\n"),(l?x.subParser("paragraphs"):x.subParser("spanGamut"))(n,d,c))).replace("¨A",""))+"</li>\n"})).replace(/¨0/g,""),c.gListLevel--,e=r?e.replace(/\s+$/,""):e}function h(e,r){if("ol"===r){r=e.match(/^ *(\d+)\./);if(r&&"1"!==r[1])return' start="'+r[1]+'"'}return""}function n(n,s,o){var e,i=d.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,l=d.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,c="ul"===s?i:l,u="";return-1!==n.search(c)?function e(r){var t=r.search(c),a=h(n,s);-1!==t?(u+="\n\n<"+s+a+">\n"+p(r.slice(0,t),!!o)+"</"+s+">\n",c="ul"===(s="ul"===s?"ol":"ul")?i:l,e(r.slice(t))):u+="\n\n<"+s+a+">\n"+p(r,!!o)+"</"+s+">\n"}(n):(e=h(n,s),u="\n\n<"+s+e+">\n"+p(n,!!o)+"</"+s+">\n"),u}return e=c.converter._dispatch("lists.before",e,d,c),e+="¨0",e=(e=c.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t){return n(r,-1<t.search(/[*+-]/g)?"ul":"ol",!0)}):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t,a){return n(t,-1<a.search(/[*+-]/g)?"ul":"ol",!1)})).replace(/¨0/,""),e=c.converter._dispatch("lists.after",e,d,c)}),x.subParser("metadata",function(e,r,a){"use strict";return r.metadata?(e=(e=(e=(e=a.converter._dispatch("metadata.before",e,r,a)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(e,r,t){return n(t),"¨M"})).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(e,r,t){return r&&(a.metadata.format=r),n(t),"¨M"})).replace(/¨M/g,""),a.converter._dispatch("metadata.after",e,r,a)):e;function n(e){(e=(e=(a.metadata.raw=e).replace(/&/g,"&amp;").replace(/"/g,"&quot;")).replace(/\n {4}/g," ")).replace(/^([\S ]+): +([\s\S]+?)$/gm,function(e,r,t){return a.metadata.parsed[r]=t,""})}}),x.subParser("outdent",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("outdent.before",e,r,t)).replace(/^(\t|[ ]{1,4})/gm,"¨0")).replace(/¨0/g,""),e=t.converter._dispatch("outdent.after",e,r,t)}),x.subParser("paragraphs",function(e,r,t){"use strict";for(var a=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),n=[],s=a.length,o=0;o<s;o++){var i=a[o];0<=i.search(/¨(K|G)(\d+)\1/g)?n.push(i):0<=i.search(/\S/)&&(i=(i=x.subParser("spanGamut")(i,r,t)).replace(/^([ \t]*)/g,"<p>"),i+="</p>",n.push(i))}for(s=n.length,o=0;o<s;o++){for(var l="",c=n[o],u=!1;/¨(K|G)(\d+)\1/.test(c);){var d=RegExp.$1,p=RegExp.$2;l=(l="K"===d?t.gHtmlBlocks[p]:u?x.subParser("encodeCode")(t.ghCodeBlocks[p].text,r,t):t.ghCodeBlocks[p].codeblock).replace(/\$/g,"$$$$"),c=c.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,l),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(c)&&(u=!0)}n[o]=c}return e=(e=(e=n.join("\n")).replace(/^\n+/g,"")).replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),x.subParser("runExtension",function(e,r,t,a){"use strict";return e.filter?r=e.filter(r,a.converter,t):e.regex&&((a=e.regex)instanceof RegExp||(a=new RegExp(a,"g")),r=r.replace(a,e.replace)),r}),x.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r,t),e=x.subParser("codeSpans")(e,r,t),e=x.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=x.subParser("encodeBackslashEscapes")(e,r,t),e=x.subParser("images")(e,r,t),e=x.subParser("anchors")(e,r,t),e=x.subParser("autoLinks")(e,r,t),e=x.subParser("simplifiedAutoLinks")(e,r,t),e=x.subParser("emoji")(e,r,t),e=x.subParser("underline")(e,r,t),e=x.subParser("italicsAndBold")(e,r,t),e=x.subParser("strikethrough")(e,r,t),e=x.subParser("ellipsis")(e,r,t),e=x.subParser("hashHTMLSpans")(e,r,t),e=x.subParser("encodeAmpsAndAngles")(e,r,t),r.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,"<br />\n")):e=e.replace(/  +\n/g,"<br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),x.subParser("strikethrough",function(e,t,a){"use strict";return t.strikethrough&&(e=(e=a.converter._dispatch("strikethrough.before",e,t,a)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(e,r){return r=r,"<del>"+(r=t.simplifiedAutoLink?x.subParser("simplifiedAutoLinks")(r,t,a):r)+"</del>"}),e=a.converter._dispatch("strikethrough.after",e,t,a)),e}),x.subParser("stripLinkDefinitions",function(i,l,c){"use strict";function e(e,r,t,a,n,s,o){return r=r.toLowerCase(),i.toLowerCase().split(r).length-1<2?e:(t.match(/^data:.+?\/.+?;base64,/)?c.gUrls[r]=t.replace(/\s/g,""):c.gUrls[r]=x.subParser("encodeAmpsAndAngles")(t,l,c),s?s+o:(o&&(c.gTitles[r]=o.replace(/"|'/g,"&quot;")),l.parseImgDimensions&&a&&n&&(c.gDimensions[r]={width:a,height:n}),""))}return i=(i=(i=(i+="¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,e)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,e)).replace(/¨0/,"")}),x.subParser("tables",function(e,y,P){"use strict";if(!y.tables)return e;function r(e){for(var r=e.split("\n"),t=0;t<r.length;++t)/^ {0,3}\|/.test(r[t])&&(r[t]=r[t].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(r[t])&&(r[t]=r[t].replace(/\|[ \t]*$/,"")),r[t]=x.subParser("codeSpans")(r[t],y,P);var a,n,s,o,i,l=r[0].split("|").map(function(e){return e.trim()}),c=r[1].split("|").map(function(e){return e.trim()}),u=[],d=[],p=[],h=[];for(r.shift(),r.shift(),t=0;t<r.length;++t)""!==r[t].trim()&&u.push(r[t].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(t=0;t<c.length;++t)p.push((a=c[t],/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""));for(t=0;t<l.length;++t)x.helper.isUndefined(p[t])&&(p[t]=""),d.push((n=l[t],s=p[t],void 0,o="",n=n.trim(),"<th"+(o=y.tablesHeaderId||y.tableHeaderId?' id="'+n.replace(/ /g,"_").toLowerCase()+'"':o)+s+">"+(n=x.subParser("spanGamut")(n,y,P))+"</th>\n"));for(t=0;t<u.length;++t){for(var _=[],g=0;g<d.length;++g)x.helper.isUndefined(u[t][g]),_.push((i=u[t][g],"<td"+p[g]+">"+x.subParser("spanGamut")(i,y,P)+"</td>\n"));h.push(_)}for(var m=d,f=h,b="<table>\n<thead>\n<tr>\n",w=m.length,k=0;k<w;++k)b+=m[k];for(b+="</tr>\n</thead>\n<tbody>\n",k=0;k<f.length;++k){b+="<tr>\n";for(var v=0;v<w;++v)b+=f[k][v];b+="</tr>\n"}return b+="</tbody>\n</table>\n"}return e=(e=(e=(e=P.converter._dispatch("tables.before",e,y,P)).replace(/\\(\|)/g,x.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,r),e=P.converter._dispatch("tables.after",e,y,P)}),x.subParser("underline",function(e,r,t){"use strict";return r.underline?(e=t.converter._dispatch("underline.before",e,r,t),e=(e=r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<u>"+r+"</u>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<u>"+r+"</u>"}):(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/(_)/g,x.helper.escapeCharactersCallback),t.converter._dispatch("underline.after",e,r,t)):e}),x.subParser("unescapeSpecialChars",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("unescapeSpecialChars.before",e,r,t)).replace(/¨E(\d+)E/g,function(e,r){r=parseInt(r);return String.fromCharCode(r)}),e=t.converter._dispatch("unescapeSpecialChars.after",e,r,t)}),x.subParser("makeMarkdown.blockquote",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var a=e.childNodes,n=a.length,s=0;s<n;++s){var o=x.subParser("makeMarkdown.node")(a[s],r);""!==o&&(t+=o)}return t="> "+(t=t.trim()).split("\n").join("\n> ")}),x.subParser("makeMarkdown.codeBlock",function(e,r){"use strict";var t=e.getAttribute("language"),e=e.getAttribute("precodenum");return"```"+t+"\n"+r.preList[e]+"\n```"}),x.subParser("makeMarkdown.codeSpan",function(e){"use strict";return"`"+e.innerHTML+"`"}),x.subParser("makeMarkdown.emphasis",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="*";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="*"}return t}),x.subParser("makeMarkdown.header",function(e,r,t){"use strict";var t=new Array(t+1).join("#"),a="";if(e.hasChildNodes())for(var a=t+" ",n=e.childNodes,s=n.length,o=0;o<s;++o)a+=x.subParser("makeMarkdown.node")(n[o],r);return a}),x.subParser("makeMarkdown.hr",function(){"use strict";return"---"}),x.subParser("makeMarkdown.image",function(e){"use strict";var r="";return e.hasAttribute("src")&&(r=(r+="!["+e.getAttribute("alt")+"](")+"<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(r+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"),r}),x.subParser("makeMarkdown.links",function(e,r){"use strict";var t="";if(e.hasChildNodes()&&e.hasAttribute("href")){for(var a=e.childNodes,n=a.length,t="[",s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t=(t+="](")+("<"+e.getAttribute("href")+">"),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"}return t}),x.subParser("makeMarkdown.list",function(e,r,t){"use strict";var a="";if(!e.hasChildNodes())return"";for(var n=e.childNodes,s=n.length,o=e.getAttribute("start")||1,i=0;i<s;++i)void 0!==n[i].tagName&&"li"===n[i].tagName.toLowerCase()&&(a+=("ol"===t?o.toString()+". ":"- ")+x.subParser("makeMarkdown.listItem")(n[i],r),++o);return(a+="\n\x3c!-- --\x3e\n").trim()}),x.subParser("makeMarkdown.listItem",function(e,r){"use strict";for(var t="",a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);return/\n$/.test(t)?t=t.split("\n").join("\n    ").replace(/^ {4}$/gm,"").replace(/\n\n+/g,"\n\n"):t+="\n",t}),x.subParser("makeMarkdown.node",function(e,r,t){"use strict";t=t||!1;var a="";if(3===e.nodeType)return x.subParser("makeMarkdown.txt")(e,r);if(8===e.nodeType)return"\x3c!--"+e.data+"--\x3e\n\n";if(1!==e.nodeType)return"";switch(e.tagName.toLowerCase()){case"h1":t||(a=x.subParser("makeMarkdown.header")(e,r,1)+"\n\n");break;case"h2":t||(a=x.subParser("makeMarkdown.header")(e,r,2)+"\n\n");break;case"h3":t||(a=x.subParser("makeMarkdown.header")(e,r,3)+"\n\n");break;case"h4":t||(a=x.subParser("makeMarkdown.header")(e,r,4)+"\n\n");break;case"h5":t||(a=x.subParser("makeMarkdown.header")(e,r,5)+"\n\n");break;case"h6":t||(a=x.subParser("makeMarkdown.header")(e,r,6)+"\n\n");break;case"p":t||(a=x.subParser("makeMarkdown.paragraph")(e,r)+"\n\n");break;case"blockquote":t||(a=x.subParser("makeMarkdown.blockquote")(e,r)+"\n\n");break;case"hr":t||(a=x.subParser("makeMarkdown.hr")(e,r)+"\n\n");break;case"ol":t||(a=x.subParser("makeMarkdown.list")(e,r,"ol")+"\n\n");break;case"ul":t||(a=x.subParser("makeMarkdown.list")(e,r,"ul")+"\n\n");break;case"precode":t||(a=x.subParser("makeMarkdown.codeBlock")(e,r)+"\n\n");break;case"pre":t||(a=x.subParser("makeMarkdown.pre")(e,r)+"\n\n");break;case"table":t||(a=x.subParser("makeMarkdown.table")(e,r)+"\n\n");break;case"code":a=x.subParser("makeMarkdown.codeSpan")(e,r);break;case"em":case"i":a=x.subParser("makeMarkdown.emphasis")(e,r);break;case"strong":case"b":a=x.subParser("makeMarkdown.strong")(e,r);break;case"del":a=x.subParser("makeMarkdown.strikethrough")(e,r);break;case"a":a=x.subParser("makeMarkdown.links")(e,r);break;case"img":a=x.subParser("makeMarkdown.image")(e,r);break;default:a=e.outerHTML+"\n\n"}return a}),x.subParser("makeMarkdown.paragraph",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);return t=t.trim()}),x.subParser("makeMarkdown.pre",function(e,r){"use strict";e=e.getAttribute("prenum");return"<pre>"+r.preList[e]+"</pre>"}),x.subParser("makeMarkdown.strikethrough",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="~~";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="~~"}return t}),x.subParser("makeMarkdown.strong",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="**";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="**"}return t}),x.subParser("makeMarkdown.table",function(e,r){"use strict";for(var t="",a=[[],[]],n=e.querySelectorAll("thead>tr>th"),s=e.querySelectorAll("tbody>tr"),o=0;o<n.length;++o){var i=x.subParser("makeMarkdown.tableCell")(n[o],r),l="---";if(n[o].hasAttribute("style"))switch(n[o].getAttribute("style").toLowerCase().replace(/\s/g,"")){case"text-align:left;":l=":---";break;case"text-align:right;":l="---:";break;case"text-align:center;":l=":---:"}a[0][o]=i.trim(),a[1][o]=l}for(o=0;o<s.length;++o)for(var c=a.push([])-1,u=s[o].getElementsByTagName("td"),d=0;d<n.length;++d){var p=" ";void 0!==u[d]&&(p=x.subParser("makeMarkdown.tableCell")(u[d],r)),a[c].push(p)}var h=3;for(o=0;o<a.length;++o)for(d=0;d<a[o].length;++d){var _=a[o][d].length;h<_&&(h=_)}for(o=0;o<a.length;++o){for(d=0;d<a[o].length;++d)1===o?":"===a[o][d].slice(-1)?a[o][d]=x.helper.padEnd(a[o][d].slice(-1),h-1,"-")+":":a[o][d]=x.helper.padEnd(a[o][d],h,"-"):a[o][d]=x.helper.padEnd(a[o][d],h);t+="| "+a[o].join(" | ")+" |\n"}return t.trim()}),x.subParser("makeMarkdown.tableCell",function(e,r){"use strict";var t="";if(!e.hasChildNodes())return"";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r,!0);return t.trim()}),x.subParser("makeMarkdown.txt",function(e){"use strict";e=e.nodeValue;return e=(e=e.replace(/ +/g," ")).replace(/¨NBSP;/g," "),e=(e=(e=(e=(e=(e=(e=(e=(e=x.helper.unescapeHTMLEntities(e)).replace(/([*_~|`])/g,"\\$1")).replace(/^(\s*)>/g,"\\$1>")).replace(/^#/gm,"\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3")).replace(/^( {0,3}\d+)\./gm,"$1\\.")).replace(/^( {0,3})([+-])/gm,"$1\\$2")).replace(/]([\s]*)\(/g,"\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:")});"function"==typeof define&&define.amd?define(function(){"use strict";return x}):"undefined"!=typeof module&&module.exports?module.exports=x:this.showdown=x}.call(this);
//# sourceMappingURL=showdown.min.js.map

    function doMarkdown(source) {
        // Unescape
        source = source.replace(/&gt;/gi, '>').replace(/&lt;/gi, '<');
        //let html = snarkdown(source);
        let html = (new showdown.Converter()).makeHtml(source);
        return html;
    }
    modulo.register('util', doMarkdown);

};
window.moduloBuild.nameToHash.library_configuration = "x19tuf26";

window.moduloBuild.modules["x1833ghl"] = function library_Page (modulo) {

        const def = modulo.definitions['library_Page'];
        class x_Page extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Page);
        window.customElements.define(def.TagName, x_Page);
        return x_Page;
    
};
window.moduloBuild.nameToHash.library_Page = "x1833ghl";

window.moduloBuild.modules["x12svjee"] = function library_NavBar (modulo) {

        const def = modulo.definitions['library_NavBar'];
        class x_NavBar extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_NavBar);
        window.customElements.define(def.TagName, x_NavBar);
        return x_NavBar;
    
};
window.moduloBuild.nameToHash.library_NavBar = "x12svjee";

window.moduloBuild.modules["x1gb9ukk"] = function library_MobileNavBar (modulo) {

        const def = modulo.definitions['library_MobileNavBar'];
        class x_MobileNavBar extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_MobileNavBar);
        window.customElements.define(def.TagName, x_MobileNavBar);
        return x_MobileNavBar;
    
};
window.moduloBuild.nameToHash.library_MobileNavBar = "x1gb9ukk";

window.moduloBuild.modules["x1hhda6g"] = function library_Page_script (modulo) {
var script = { exports: {} }; var props, staticdata, element;

        function prepareCallback() {
            element.removeAttribute('title'); // get rid of annoying title attr
            // For now, store the navigation array and generate year in JS
            let markdown = null;
            if (props.markdown) {
                markdown = modulo.registry.utils.doMarkdown(element.originalHTML);
            }
            return {
                currentYear: (new Date()).getFullYear(),
                navigation: staticdata.navigation,
                smallNav: staticdata.smallNav,
                markdown,
            };
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {props=o.props; staticdata=o.staticdata; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_Page_script = "x1hhda6g";

window.moduloBuild.modules["xxi0gogo"] = function library_NavBar_script (modulo) {
var script = { exports: {} }; var props, state, script, element;
const volunteerNav = [
        {
            href: '/contact/?volunteer=y',
            title: 'Volunteer',
        },
        {
            href: '/contact/?pledge=y',
            title: 'Pledge',
        },
];

function prepareCallback() {
    if (/mobile/i.test(element.tagName)) {
        if (props.selected !== "index.html" && state.hide === null) {
            state.hide = true;
        }
        if (props.selected === "index.html" && state.hide === null) {
            state.hide = false;
        }
    }
    element.removeAttribute('title'); // get rid of annoying title attr
    // For now, store the navigation array and generate year in JS
    return {
        currentYear: (new Date()).getFullYear(),
        navigation: props.navigation,
        volunteerNav,
    };
}

function toggle() {
    state.hide = !state.hide;
}

let image = null;
let originalWidth = null;
let originalParentWidth = null;
const THRESH = 100; // should make proportional to screen height
const logoSize = 5;
const logoMax = '45vw';
script.exports.logoSize = logoSize;
script.exports.logoMax = logoMax;

/*
function _getDimensions() {
    originalWidth = image.offsetWidth;
    originalParentWidth = image.offsetWidth / logoSize;
}
*/

function imageMount({ el }) {
    //return; // XXX
    image = el;
    //_getDimensions();
}


function handleScroll(scrollPos) {
    // Do something with the throttled scroll position
    if (scrollPos > THRESH) {
        image.classList.add('nav-logo--forcibly-normal');
    } else {
        image.classList.remove('nav-logo--forcibly-normal');
    }
}



let lastKnownScrollPosition = 0;
let ticking = false;
document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (image) {
                handleScroll(lastKnownScrollPosition);
            }
            ticking = false;
        });
        ticking = true;
    }
});

/*
let timeout;
window.onresize = function() { // redo dimensions when resize
    clearTimeout(timeout);
    timeout = setTimeout(_getDimensions, 100);
};
*/

return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "toggle": typeof toggle !== "undefined" ? toggle : undefined, "_getDimensions": typeof _getDimensions !== "undefined" ? _getDimensions : undefined, "imageMount": typeof imageMount !== "undefined" ? imageMount : undefined, "handleScroll": typeof handleScroll !== "undefined" ? handleScroll : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; script=o.script; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_NavBar_script = "xxi0gogo";

window.moduloBuild.modules["xxi0gogo"] = function library_MobileNavBar_script (modulo) {
var script = { exports: {} }; var props, state, script, element;
const volunteerNav = [
        {
            href: '/contact/?volunteer=y',
            title: 'Volunteer',
        },
        {
            href: '/contact/?pledge=y',
            title: 'Pledge',
        },
];

function prepareCallback() {
    if (/mobile/i.test(element.tagName)) {
        if (props.selected !== "index.html" && state.hide === null) {
            state.hide = true;
        }
        if (props.selected === "index.html" && state.hide === null) {
            state.hide = false;
        }
    }
    element.removeAttribute('title'); // get rid of annoying title attr
    // For now, store the navigation array and generate year in JS
    return {
        currentYear: (new Date()).getFullYear(),
        navigation: props.navigation,
        volunteerNav,
    };
}

function toggle() {
    state.hide = !state.hide;
}

let image = null;
let originalWidth = null;
let originalParentWidth = null;
const THRESH = 100; // should make proportional to screen height
const logoSize = 5;
const logoMax = '45vw';
script.exports.logoSize = logoSize;
script.exports.logoMax = logoMax;

/*
function _getDimensions() {
    originalWidth = image.offsetWidth;
    originalParentWidth = image.offsetWidth / logoSize;
}
*/

function imageMount({ el }) {
    //return; // XXX
    image = el;
    //_getDimensions();
}


function handleScroll(scrollPos) {
    // Do something with the throttled scroll position
    if (scrollPos > THRESH) {
        image.classList.add('nav-logo--forcibly-normal');
    } else {
        image.classList.remove('nav-logo--forcibly-normal');
    }
}



let lastKnownScrollPosition = 0;
let ticking = false;
document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (image) {
                handleScroll(lastKnownScrollPosition);
            }
            ticking = false;
        });
        ticking = true;
    }
});

/*
let timeout;
window.onresize = function() { // redo dimensions when resize
    clearTimeout(timeout);
    timeout = setTimeout(_getDimensions, 100);
};
*/

return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "toggle": typeof toggle !== "undefined" ? toggle : undefined, "_getDimensions": typeof _getDimensions !== "undefined" ? _getDimensions : undefined, "imageMount": typeof imageMount !== "undefined" ? imageMount : undefined, "handleScroll": typeof handleScroll !== "undefined" ? handleScroll : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; script=o.script; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_MobileNavBar_script = "xxi0gogo";

window.moduloBuild.modules["x11jc8t5"] = function library1_ContactForm (modulo) {

        const def = modulo.definitions['library1_ContactForm'];
        class x_ContactForm extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_ContactForm);
        window.customElements.define(def.TagName, x_ContactForm);
        return x_ContactForm;
    
};
window.moduloBuild.nameToHash.library1_ContactForm = "x11jc8t5";

window.moduloBuild.modules["xxoqn1j9"] = function library1_ContactForm_script (modulo) {
var script = { exports: {} }; var props, state, style, component, element;
const ACT_BLUE = 'jovankaforcastatesenate';

const fields = [
    {
      label: 'First Name',
      name: 'firstname',
    },
    {
      label: 'Last Name',
      name: 'lastname',
    },
    {
      label: 'Email',
      name: 'email',
    },
    {
      label: 'Zip Code',
      name: 'zip',
      style: 'half',
    },
    {
      label: 'Phone',
      name: 'phone',
      style: 'half',
    },
    {
      label: 'Yes, I want to volunteer',
      name: 'volunteer',
    },
    {
      label: 'Yes, I want to donate',
      name: 'donate',
    },
];

const increments = [ 2, 9, 27, 50, 200, 1000 ];

let hasRun = false;
function prepareCallback() {
    if (!hasRun) {
        hasRun = true;
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get('volunteer')) {
            state.volunteer = true;
            state.title = 'Volunteer';
        } else if (urlParams.get('donate')) {
            state.donate = true;
            state.title = 'Donate';
        } else {
            if (props.volunteerform) {
                state.volunteer = true;
                state.title = 'Volunteer';
            } else if (props.donateform) {
                state.donate = true;
                state.title = 'Donate';
            }
        }

        const form = element.parentNode;
        if (form.tagName !== 'FORM') {
            console.error('could not find form, misusing component!', form);
        } else {
            form.addEventListener('submit', handleSubmit);
            console.log('adding event!', form);
        }

    }

    // ///////////////////////////////////////
    // Hacky bug fixes -v
    if (state.donate === 'on') {
        state.donate = !!document.querySelector('[name=donate]').checked;
    }
    if (state.volunteer === 'on') {
        state.volunteer = !!document.querySelector('[name=volunteer]').checked;
    }
    // ///////////////////////////////////////

    return {
        form_name: 'contact',
        fields,
        increments,
    }
}

function redirectToActBlue(formData) {
    if (!state.donate) {
        state.show_final_donation_modal = true;
        return; // nothing to do, but
    }
    state.is_redirecting_to_actblue = true;
    let amount = formData.get('donate_value') || '';
    if (amount === 'other' || (amount === '0' && formData.get('donate_other_value'))) {
        const otherVal = String(formData.get('donate_other_value') || '');
        amount = otherVal.replace(/\D+/g, '');
    }
    if (amount === '0') {
        amount = '';
    }
    if (amount) {
        amount = '&amount=' + amount;
    }

    /// create ref and url
    const ref = state.title ? ('x' + state.title.toLowerCase()) : '';
    const url = `https://secure.actblue.com/donate/${ACT_BLUE}?refcode=f1` +
                ref + amount;
    // Set 2 second delay to 1 second fade out
    window.document.body.style.opacity = "1.0";
    window.document.body.style.transition = "opacity 1s";
    setTimeout(() => {
        window.document.body.style.opacity = "0.0";
        setTimeout(() => {
            setTimeout(() => {
                window.document.body.style.opacity = "0.9";
            }, 0);
            window.location.href = url;
        }, 1000);
    }, 2000);
}

function setDonation (payload) {
    // hack, force copy back to get this working right
    const split = payload.split('_');
    const newValue = split.length === 3 ? split[2] : '';
    state.donate_value = newValue || 'undefined';
    const elem = element.querySelector(payload);
    if (elem) {
        elem.checked = true; // since we hijack the event
    }
}

function mergeFormData(ev, data) {
    const myForm = ev.target;
    const formData = new FormData(myForm);
    for (const [ key, value ] of  Object.entries(data)) {
        formData.set(key, value);
    }
    return formData;
}

function handleSubmit(ev) {
    // TODO: This is working now, just need to clean up data so the form submission is better.
    ev.preventDefault();
    const formData = mergeFormData(ev, state, {
        FORM_USED: ev.target.getAttribute('name'),
    });
    state.submitted = true;
    fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
      })
      .then(response => {
          if (!response.ok) {
              state.success = false;
              state.error = '' + response;
              window.response = response;
              response.text().then(text => {
                  // Using div to "clean" the tags away
                  const div = document.createElement('div');
                  div.innerHTML = text;
                  const cleanText = div.textContent;
                  state.error = cleanText;
                  redirectToActBlue(formData);
                  element.rerender();
              });
          } else {
              state.success = true;
              redirectToActBlue(formData);
              element.rerender();
          }
      })
      .catch((error) => {
          console.error(error);
          state.error = '' + error;
          state.success = false;
      });
}


return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "redirectToActBlue": typeof redirectToActBlue !== "undefined" ? redirectToActBlue : undefined, "setDonation": typeof setDonation !== "undefined" ? setDonation : undefined, "mergeFormData": typeof mergeFormData !== "undefined" ? mergeFormData : undefined, "handleSubmit": typeof handleSubmit !== "undefined" ? handleSubmit : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; style=o.style; component=o.component; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library1_ContactForm_script = "xxoqn1j9";

window.moduloBuild.modules["xxgh37r9"] = function library_Page_template_footer (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<div class=\"u--layout\">\n\n    <ul>\n        <h3>Contact</h3>\n        <li><a href=\"mailto:jovankaforsenate@gmail.com\">jovankaforsenate@gmail.com</a></li>\n        "); // "<div class=\"u--layout\"><ul><h3>Contact</h3><li><a href=\"mailto:jovankaforsenate@gmail.com\">jovankaforsenate@gmail.com</a></li>"
  /* // "comment"
  OUT.push("\n        <li><tt>1234 Street Address</tt></li>\n        <li><tt>City, CA 00000</tt></li>\n        "); // "<li><tt>1234 Street Address</tt></li><li><tt>City, CA 00000</tt></li>"
  */ // "endcomment"
  OUT.push("\n    </ul>\n\n    <ul>\n        <h3>Links</h3>\n        "); // "</ul><ul><h3>Links</h3>"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  OUT.push("\"> "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <ul>\n        <h3>&nbsp;</h3>\n        <li> <a href=\"/\">Home</a> </li>\n        "); // "</ul><ul><h3>&nbsp;</h3><li><a href=\"/\">Home</a></li>"
  var ARR0=CTX.staticdata.smallNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.smallNav"
  OUT.push("\n            <li> <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a> </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <div style=\"font-size: 12px; padding-top: 100px;\">\n        Paid for by:<br />\n        <tt>Jovanka Beckles For State Senate 2024</tt><br />\n        <tt>FPPC 1459429</tt><br />\n        &copy; "); // "</ul><div style=\"font-size: 12px; padding-top: 100px;\"> Paid for by:<br /><tt>Jovanka Beckles For State Senate 2024</tt><br /><tt>FPPC 1459429</tt><br /> &copy;"
  OUT.push(G.escapeText(CTX.script.currentYear)); // "script.currentYear"
  OUT.push(" Jovanka Beckles For State Senate 2024\n    </div>\n    <!--\n    <ul>\n        <h3>Social Media</h3>\n        <li class=\"inline-links\">\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-instagram fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-meetup fa-2x\"></i></a>\n        </li>\n        <li class=\"inline-links\">\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-linkedin fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-twitter-square fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-github fa-2x\"></i></a>\n        </li>\n    </ul>\n    -->\n\n\n</div>\n\n"); // "Jovanka Beckles For State Senate 2024 </div><!-- <ul><h3>Social Media</h3><li class=\"inline-links\"><a target=\"_blank\" href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-instagram fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-meetup fa-2x\"></i></a></li><li class=\"inline-links\"><a target=\"_blank\" href=\"#\"><i class=\"fab fa-linkedin fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-twitter-square fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-github fa-2x\"></i></a></li></ul> --></div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Page_template_footer = "xxgh37r9";

window.moduloBuild.modules["xx5n4s8k"] = function library_Page_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<head>\n    <title>"); // "<head><title>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.title,""))); // "props.title|default:''"
  if (CTX.props.title) { // "if props.title"
  OUT.push(" - "); // "-"
  } // "endif"
  OUT.push("Jovanka for California State Senate</title>\n\n    <meta name=\"title\" content=\""); // "Jovanka for California State Senate</title><meta name=\"title\" content=\""
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push(" | Jovanka for California State Senate\">\n    <meta name=\"description\" content=\"Jovanka fights for the working class. She fights for healthcare, good jobs, and progressive values for the East Bay. Learn more and join an event! \">\n    <meta name=\"keywords\" content=\"oakland,berkeley,richmond,california,senate,vote,2024,november\">\n    <meta name=\"robots\" content=\"index, follow\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"language\" content=\"English\">\n    <meta name=\"revisit-after\" content=\"30 days\">\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"/static/css/site.css\" />\n    <link rel=\"stylesheet\" href=\"/static/css/site-mobile.css\" />\n\n</head>\n<body>\n\n<x-NavBar\n    class=\"u--desktop\"\n    selected=\""); // "| Jovanka for California State Senate\"><meta name=\"description\" content=\"Jovanka fights for the working class. She fights for healthcare, good jobs, and progressive values for the East Bay. Learn more and join an event! \"><meta name=\"keywords\" content=\"oakland,berkeley,richmond,california,senate,vote,2024,november\"><meta name=\"robots\" content=\"index, follow\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /><meta name=\"language\" content=\"English\"><meta name=\"revisit-after\" content=\"30 days\"><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin><link href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"/static/css/site.css\" /><link rel=\"stylesheet\" href=\"/static/css/site-mobile.css\" /></head><body><x-NavBar class=\"u--desktop\" selected=\""
  OUT.push(G.escapeText(CTX.props.navselected)); // "props.navselected"
  OUT.push("\"\n></x-NavBar>\n\n<x-MobileNavBar\n    class=\"u--mobile\"\n    selected=\""); // "\" ></x-NavBar><x-MobileNavBar class=\"u--mobile\" selected=\""
  OUT.push(G.escapeText(CTX.props.navselected)); // "props.navselected"
  OUT.push("\"\n></x-MobileNavBar>\n\n"); // "\" ></x-MobileNavBar>"
  if (CTX.props.toptitle) { // "if props.toptitle"
  OUT.push("\n    <div class=\"Page-container layout-container page-top\">\n        <h1 class=\"hero-text-top layout-container\">\n            <div>"); // "<div class=\"Page-container layout-container page-top\"><h1 class=\"hero-text-top layout-container\"><div>"
  OUT.push(G.escapeText(CTX.props.toptitle)); // "props.toptitle"
  OUT.push("</div>\n        </h1>\n        "); // "</div></h1>"
  if (CTX.props.bottomtitle) { // "if props.bottomtitle"
  OUT.push("\n            <h1 class=\"hero-text-bottom layout-container\">\n                <div>"); // "<h1 class=\"hero-text-bottom layout-container\"><div>"
  OUT.push(G.escapeText(G.filters["safe"](CTX.props.bottomtitle))); // "props.bottomtitle|safe"
  OUT.push("</div>\n            </h1>\n        "); // "</div></h1>"
  } // "endif"
  OUT.push("\n    </div>\n"); // "</div>"
  } // "endif"
  OUT.push("\n\n"); // ""
  if (CTX.script.markdown) { // "if script.markdown"
  OUT.push("\n    <div class=\"Page-container layout-container Page-markdown\">\n        "); // "<div class=\"Page-container layout-container Page-markdown\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.script.markdown))); // "script.markdown|safe"
  OUT.push("\n    </div>\n"); // "</div>"
  } else { // "else"
  OUT.push("\n    <slot class=\"Page-container layout-container\">\n    </slot>\n"); // "<slot class=\"Page-container layout-container\"></slot>"
  } // "endif"
  OUT.push("\n\n<footer class=\"Page-footer layout-container\">\n    "); // "<footer class=\"Page-footer layout-container\">"
  OUT.push(CTX.template_footer.render(CTX)); // "include template_footer"
  OUT.push("\n</footer>\n</body>\n"); // "</footer></body>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Page_template = "xx5n4s8k";

window.moduloBuild.modules["xxxmhoce"] = function library_Page_staticdata (modulo) {
return {"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]};
};
window.moduloBuild.nameToHash.library_Page_staticdata = "xxxmhoce";

window.moduloBuild.modules["x17sa8tf"] = function library_NavBar_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<nav class=\"Page-nav layout-container\">\n    <div style=\"grid-column: 1;\" class=\"logo-wrapper\">\n        <a href=\"/\" style=\"border: none\">\n            <img\n                class=\"nav-logo\"\n                src=\"/static/images/logos/logo.png\"\n                alt=\"Delivering Results! Together. Jovanka Beckles for State Senate\"\n            />\n            "); // "<nav class=\"Page-nav layout-container\"><div style=\"grid-column: 1;\" class=\"logo-wrapper\"><a href=\"/\" style=\"border: none\"><img class=\"nav-logo\" src=\"/static/images/logos/logo.png\" alt=\"Delivering Results! Together. Jovanka Beckles for State Senate\" />"
  /* // "comment"
  OUT.push("\n            "); // ""
  if (CTX.props.selected != "index.html") { // "if props.selected != \"index.html\""
  OUT.push("\n            <img\n                [script.image]\n                class=\"\n                    nav-logo\n                    "); // "<img [script.image] class=\" nav-logo"
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n                        nav-logo--hero\n                    "); // "nav-logo--hero"
  } // "endif"
  OUT.push("\n                \"\n                src=\"/static/images/logos/logo.png\"\n                alt=\"Delivering Results! Together. Jovanka Beckles for State Senate\"\n            />\n            "); // "\" src=\"/static/images/logos/logo.png\" alt=\"Delivering Results! Together. Jovanka Beckles for State Senate\" />"
  } // "endif"
  OUT.push("\n            "); // ""
  */ // "endcomment"
  OUT.push("\n        </a>\n    </div>\n    <ul>\n        "); // "</a></div><ul>"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  OUT.push("\"\n                    title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\"\n                    class=\"\n                        Page-navLink\n                        "); // "\" class=\" Page-navLink"
  if (CTX.page.file === CTX.props.selected) { // "if page.file == props.selected"
  OUT.push("Page-navLink--selected"); // "Page-navLink--selected"
  } // "endif"
  OUT.push("\n                    \">\n                    "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\n                </a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <div style=\"grid-column: 3; width: 300px\">\n        "); // "</ul><div style=\"grid-column: 3; width: 300px\">"
  var ARR0=CTX.staticdata.smallNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.smallNav"
  OUT.push("\n            <a href=\""); // "<a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\" class=\"right-cta\">"); // "\" class=\"right-cta\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n        "); // "</a>"
  } // "endfor"
  OUT.push("\n    </div>\n</nav>\n\n\n"); // "</div></nav>"
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n    <img class=\"background-splash-cover\" src=\"/static/images/seiu_jovanka_1.jpg\" alt=\"Jovanka at union picket line\">\n\n    <!--<img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_IMG_8300.png\">-->\n    <img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_cropped_2.png\" alt=\"Jovanka cut out\">\n\n    <img\n        class=\"left-logo\"\n        src=\"/static/images/logos/logo_large.png\"\n        alt=\"Delivering Results Together! Jovanka Beckles for State Senate\"\n    />\n"); // "<img class=\"background-splash-cover\" src=\"/static/images/seiu_jovanka_1.jpg\" alt=\"Jovanka at union picket line\"><!--<img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_IMG_8300.png\">--><img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_cropped_2.png\" alt=\"Jovanka cut out\"><img class=\"left-logo\" src=\"/static/images/logos/logo_large.png\" alt=\"Delivering Results Together! Jovanka Beckles for State Senate\" />"
  } // "endif"
  OUT.push("\n\n\n"); // ""
  /* // "comment"
  OUT.push("\n"); // ""
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n<div style=\"position: absolute; right: 20px; top: 350px; z-index: 10; height: 100%; max-height: 100%\">\n    <div style=\"position: sticky; top: 2px\">\n        <a class=\"hero-cta\" href=\"/contact/\">\n            Volunteer\n            <!--<span style=\"font-weight: 200\" alt=\"Right arrow\">&#x29d0;</span>-->\n            <span style=\"font-weight: 200\" alt=\"Right arrow\">&#x25B9;</span>\n        </a>\n        <a href=\"/contact/?volunteer=y\" class=\"join-the-cause-nav-button\">Volunteer</a>\n        <a href=\"/contact/?donate=y\" class=\"join-the-cause-nav-button\">Donate</a>\n    </div>\n</div>\n"); // "<div style=\"position: absolute; right: 20px; top: 350px; z-index: 10; height: 100%; max-height: 100%\"><div style=\"position: sticky; top: 2px\"><a class=\"hero-cta\" href=\"/contact/\"> Volunteer <!--<span style=\"font-weight: 200\" alt=\"Right arrow\">&#x29d0;</span>--><span style=\"font-weight: 200\" alt=\"Right arrow\">&#x25B9;</span></a><a href=\"/contact/?volunteer=y\" class=\"join-the-cause-nav-button\">Volunteer</a><a href=\"/contact/?donate=y\" class=\"join-the-cause-nav-button\">Donate</a></div></div>"
  } // "endif"
  OUT.push("\n"); // ""
  */ // "endcomment"
  OUT.push("\n\n"); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_NavBar_template = "x17sa8tf";

window.moduloBuild.modules["xxxmhoce"] = function library_NavBar_staticdata (modulo) {
return {"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]};
};
window.moduloBuild.nameToHash.library_NavBar_staticdata = "xxxmhoce";

window.moduloBuild.modules["x1igtib6"] = function library_MobileNavBar_template (modulo) {
return function (CTX, G) { var OUT=[];
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n    <div class=\"top-splash\">\n        <a href=\"#\">\n            <img class=\"background-splash\" src=\"/static/images/seiu_jovanka_1.jpg\">\n\n            <img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_cropped_2.png\">\n\n            <img\n                class=\"left-logo\"\n                src=\"/static/images/logos/logo.png\"\n                alt=\"Delivering Results Together! Jovanka Beckles for State Senate\"\n            />\n        </a>\n    </div>\n"); // "<div class=\"top-splash\"><a href=\"#\"><img class=\"background-splash\" src=\"/static/images/seiu_jovanka_1.jpg\"><img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_cropped_2.png\"><img class=\"left-logo\" src=\"/static/images/logos/logo.png\" alt=\"Delivering Results Together! Jovanka Beckles for State Senate\" /></a></div>"
  } else { // "else"
  OUT.push("\n    <div class=\"menu-holder\"  @click:=script.toggle>\n        <a>☰</a>\n    </div>\n\n    <nav class=\"right-logo-holder\">\n        <a href=\"/\">\n            <img\n                src=\"/static/images/logos/logo.png\"\n                class=\"right-logo\"\n                alt=\"Delivering Results Together! Jovanka Beckles for State Senate\"\n            />\n        </a>\n    </nav>\n"); // "<div class=\"menu-holder\" @click:=script.toggle><a>☰</a></div><nav class=\"right-logo-holder\"><a href=\"/\"><img src=\"/static/images/logos/logo.png\" class=\"right-logo\" alt=\"Delivering Results Together! Jovanka Beckles for State Senate\" /></a></nav>"
  } // "endif"
  OUT.push("\n\n<nav class=\"sliding-nav "); // "<nav class=\"sliding-nav"
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("sliding-nav--index"); // "sliding-nav--index"
  } // "endif"
  OUT.push(" "); // ""
  if (CTX.state.hide) { // "if state.hide"
  OUT.push("sliding-nav--hide"); // "sliding-nav--hide"
  } // "endif"
  OUT.push(" \">\n    <ul class=\"main\">\n        "); // "\"><ul class=\"main\">"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a\n                    href=\""); // "<li><a href=\""
  if (CTX.page.file === CTX.props.selected) { // "if page.file == props.selected"
  OUT.push("#c"); // "#c"
  } else { // "else"
  OUT.push("/"); // "/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  } // "endif"
  OUT.push("\"\n                    title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\"\n                    class=\"mnav "); // "\" class=\"mnav"
  if (CTX.page.file === CTX.props.selected) { // "if page.file == props.selected"
  OUT.push("mnav--selected"); // "mnav--selected"
  } // "endif"
  OUT.push("\">\n                    "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\n                </a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <ul class=\"volunteer\" style=\"grid-template-columns: repeat("); // "</ul><ul class=\"volunteer\" style=\"grid-template-columns: repeat("
  OUT.push(G.escapeText(G.filters["length"](CTX.staticdata.smallNav))); // "staticdata.smallNav|length"
  OUT.push(", 1fr)\">\n        "); // ", 1fr)\">"
  var ARR0=CTX.staticdata.smallNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.smallNav"
  OUT.push("\n            <li>\n                <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n</nav>\n\n"); // "</ul></nav>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_MobileNavBar_template = "x1igtib6";

window.moduloBuild.modules["xxxmhoce"] = function library_MobileNavBar_staticdata (modulo) {
return {"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]};
};
window.moduloBuild.nameToHash.library_MobileNavBar_staticdata = "xxxmhoce";

window.moduloBuild.modules["x1aseves"] = function library1_ContactForm_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n<div class=\"form-container\">\n    <h2>"); // "<div class=\"form-container\"><h2>"
  OUT.push(G.escapeText(CTX.state.title)); // "state.title"
  OUT.push("</h2>\n    "); // "</h2>"
  var ARR0=CTX.script.fields;for (var KEY in ARR0) {CTX. field=ARR0[KEY]; // "for field in script.fields"
  OUT.push("\n        "); // ""
  if (("volunteer,donate").includes ? ("volunteer,donate").includes(CTX.field.name) : (CTX.field.name in "volunteer,donate")) { // "if field.name in \"volunteer,donate\""
  OUT.push("\n            <div class=\"field-pair\">\n                "); // "<div class=\"field-pair\">"
  if (CTX.field.name === G.filters["lower"](CTX.state.title)) { // "if field.name == state.title|lower"
  OUT.push("\n                    <div>\n                        <input\n                            type=\"hidden\"\n                            name=\""); // "<div><input type=\"hidden\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("\"\n                            value=\"yes_form\"\n                            id=\""); // "\" value=\"yes_form\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\"\n                        />\n                    </div>\n                "); // "\" /></div>"
  } else { // "else"
  OUT.push("\n                    <input\n                        [state.bind]\n                        type=\"checkbox\"\n                        name=\""); // "<input [state.bind] type=\"checkbox\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("\"\n                        id=\""); // "\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\"\n                    />\n                "); // "\" />"
  } // "endif"
  OUT.push("\n                <div>\n                    <label for=\""); // "<div><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\">\n                        "); // "\">"
  if (CTX.field.name === G.filters["lower"](CTX.state.title)) { // "if field.name == state.title|lower"
  OUT.push("\n                        "); // ""
  } else { // "else"
  OUT.push("\n                            "); // ""
  OUT.push(G.escapeText(CTX.field.label)); // "field.label"
  OUT.push("\n                        "); // ""
  } // "endif"
  OUT.push("\n                    </label>\n                    "); // "</label>"
  if (CTX.field.name === "donate") { // "if field.name == \"donate\""
  OUT.push("\n                        <ul class=\"submenu "); // "<ul class=\"submenu"
  if (CTX.state.donate) { // "if state.donate"
  OUT.push("submenu--visible"); // "submenu--visible"
  } // "endif"
  OUT.push("\">\n                            <li style=\"display:none\"> <!-- Hack to add a label to email / CSV -->\n                                <label>\n                                    Donation Value Entered (If Any):\n                                    <input type=\"checkbox\" name=\""); // "\"><li style=\"display:none\"><!-- Hack to add a label to email / CSV --><label> Donation Value Entered (If Any): <input type=\"checkbox\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_value\" value=\"\" />\n                                </label>\n                            </li>\n                            "); // "_value\" value=\"\" /></label></li>"
  var ARR3=CTX.script.increments;for (var KEY in ARR3) {CTX. num=ARR3[KEY]; // "for num in script.increments"
  OUT.push("\n                                <li>\n                                    <input\n                                        [state.bind]\n                                        type=\"radio\"\n                                        name=\""); // "<li><input [state.bind] type=\"radio\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_value\"\n                                        value=\""); // "_value\" value=\""
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\"\n                                        id=\""); // "\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\"\n                                    />\n                                    <label for=\""); // "\" /><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\"\n                                        @click:=script.setDonation payload=\"#"); // "\" @click:=script.setDonation payload=\"#"
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\">\n                                        DONATE $"); // "\"> DONATE $"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\n                                    </label>\n                                </li>\n                            "); // "</label></li>"
  } // "endfor"
  OUT.push("\n                            <li>\n                                <input\n                                    [state.bind]\n                                    type=\"radio\"\n                                    name=\""); // "<li><input [state.bind] type=\"radio\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_value\"\n                                    value=\"other\"\n                                    id=\""); // "_value\" value=\"other\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_other\"\n                                />\n                                <label for=\""); // "_other\" /><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_other\">\n                                    DONATE $_\n                                    <input\n                                        [state.bind]\n                                        name=\""); // "_other\"> DONATE $_ <input [state.bind] name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_other_value\"\n                                        class=\"other-amount\"\n                                        type=\"text\"\n                                        placeholder=\"Enter amount...\"\n                                        id=\""); // "_other_value\" class=\"other-amount\" type=\"text\" placeholder=\"Enter amount...\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_other_value\"\n                                    />\n                                </label>\n                            </li>\n                        </ul>\n                    "); // "_other_value\" /></label></li></ul>"
  } // "endif"
  OUT.push("\n                </div>\n            </div>\n        "); // "</div></div>"
  } else { // "else"
  OUT.push("\n            <div class=\"field-pair "); // "<div class=\"field-pair"
  if (CTX.field.style) { // "if field.style"
  OUT.push("field-pair--"); // "field-pair--"
  OUT.push(G.escapeText(CTX.field.style)); // "field.style"
  } // "endif"
  OUT.push("\">\n                <label for=\""); // "\"><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\">\n                    "); // "\">"
  OUT.push(G.escapeText(CTX.field.label)); // "field.label"
  OUT.push("\n                </label>\n                <input\n                    [state.bind]\n                    name=\""); // "</label><input [state.bind] name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("\"\n                    type=\""); // "\" type=\""
  if (G.filters["type"](G.filters["get"](CTX.state,CTX.field.name)) === "string") { // "if state|get:field.name|type == 'string'"
  OUT.push("text"); // "text"
  } else { // "else"
  OUT.push("checkbox"); // "checkbox"
  } // "endif"
  OUT.push("\"\n                    id=\""); // "\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\"\n                />\n            </div>\n        "); // "\" /></div>"
  } // "endif"
  OUT.push("\n    "); // ""
  } // "endfor"
  OUT.push("\n\n    <div style=\"text-align: center\">\n        <button>"); // "<div style=\"text-align: center\"><button>"
  OUT.push(G.escapeText(G.filters["default"](CTX.state.title,"Submit"))); // "state.title|default:\"Submit\""
  OUT.push("</button>\n    </div>\n</div>\n\n<div class=\"form-modal-wrapper\">\n    "); // "</button></div></div><div class=\"form-modal-wrapper\">"
  if (CTX.state.error) { // "if state.error"
  OUT.push("\n        <div class=\"form-modal-backdrop\"></div>\n        <div class=\"form-modal\">\n            "); // "<div class=\"form-modal-backdrop\"></div><div class=\"form-modal\">"
  if (CTX.state.is_redirecting_to_actblue) { // "if state.is_redirecting_to_actblue"
  OUT.push("\n                <h2>Redirecting to Act Blue</h2>\n                <p>Please re-enter details on our secure Act Blue donation page!<p>\n            "); // "<h2>Redirecting to Act Blue</h2><p>Please re-enter details on our secure Act Blue donation page!<p>"
  } else { // "else"
  OUT.push("\n                <h2>Error</h2>\n                <p>There was an error when submitting your form. If the problem\n                persists, please reach out to our email to get in touch:<br />\n                <strong>jovankaforsenate@gmail.com</strong>\n                </p>\n            "); // "<h2>Error</h2><p>There was an error when submitting your form. If the problem persists, please reach out to our email to get in touch:<br /><strong>jovankaforsenate@gmail.com</strong></p>"
  } // "endif"
  OUT.push("\n            <a class=\"form-modal-button\" href=\"?try-again=true\">Try again</a>\n            <a href=\"/\">Back to home</a>\n        </div>\n    "); // "<a class=\"form-modal-button\" href=\"?try-again=true\">Try again</a><a href=\"/\">Back to home</a></div>"
  } // "endif"
  OUT.push("\n    "); // ""
  if (CTX.state.success) { // "if state.success"
  OUT.push("\n        <div class=\"form-modal-backdrop\"></div>\n        <div class=\"form-modal\">\n            <h2>\n                "); // "<div class=\"form-modal-backdrop\"></div><div class=\"form-modal\"><h2>"
  if (CTX.state.is_redirecting_to_actblue) { // "if state.is_redirecting_to_actblue"
  OUT.push("\n                Redirecting to Act Blue\n                "); // "Redirecting to Act Blue"
  } else { // "else"
  OUT.push("\n                Form Submitted\n                "); // "Form Submitted"
  } // "endif"
  OUT.push("\n            </h2>\n            <h3>Thank you!</h3>\n            <a class=\"form-modal-button\" href=\"/\">Back to home</a>\n        </div>\n    "); // "</h2><h3>Thank you!</h3><a class=\"form-modal-button\" href=\"/\">Back to home</a></div>"
  } // "endif"
  OUT.push("\n<div>\n\n\n"); // "<div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library1_ContactForm_template = "x1aseves";

window.moduloBuild.definitions = { 
modulo: {"Parent":null,"DefName":null,"Type":"Modulo","ChildPrefix":"","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"defaultDef":{"DefTarget":null,"DefinedAs":null,"DefName":null},"src":"/static/js/Modulo.js","Name":"modulo","DefinitionName":"modulo","Source":"http://127.0.0.1:6627/static/libraries/","ChildrenNames":["configuration","configuration1","library","library1"]}, 

 

 

 

 

 

 

 

configuration: {"Parent":"modulo","DefName":null,"Type":"Configuration","DefBuilders":["Content|Code","DefinitionName|MainRequire"],"Name":"configuration"}, 

configuration1: {"Parent":"modulo","DefName":null,"Type":"Configuration","DefBuilders":["Content|Code","DefinitionName|MainRequire"],"Name":"configuration1","Source":"https://www.googletagmanager.com/gtag/js?id=G-6ZT8F1MF6V"}, 

library: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library","DefinitionName":"library","Source":"http://127.0.0.1:6627/static/libraries/layout.html","ChildrenNames":["library_configuration","library_Page","library_NavBar","library_MobileNavBar"]}, 

library1: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library1","DefinitionName":"library1","Source":"http://127.0.0.1:6627/static/libraries/forms.html","ChildrenNames":["library1_ContactForm"]}, 

library_configuration: {"Parent":"library","DefName":null,"Type":"Configuration","DefBuilders":["Content|Code","DefinitionName|MainRequire"],"Name":"configuration","Source":"https://unpkg.com/showdown/dist/showdown.min.js"}, 

library_Page: {"Parent":"library","DefName":null,"mode":"vanish-into-document","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Page","Name":"Page","DefinitionName":"library_Page","ChildrenNames":["library_Page_props","library_Page_template_footer","library_Page_template","library_Page_staticdata","library_Page_script"],"namespace":"x","TagName":"x-page"}, 

library_NavBar: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"NavBar","Name":"NavBar","DefinitionName":"library_NavBar","ChildrenNames":["library_NavBar_props","library_NavBar_template","library_NavBar_state","library_NavBar_staticdata","library_NavBar_script","library_NavBar_style"],"namespace":"x","TagName":"x-navbar"}, 

library_MobileNavBar: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"MobileNavBar","Name":"MobileNavBar","DefinitionName":"library_MobileNavBar","ChildrenNames":["library_MobileNavBar_props","library_MobileNavBar_template","library_MobileNavBar_state","library_MobileNavBar_staticdata","library_MobileNavBar_script","library_MobileNavBar_style"],"namespace":"x","TagName":"x-mobilenavbar"}, 

library_Page_props: {"Parent":"library_Page","DefName":null,"Content":"","Type":"Props","title":"","toptitle":"","bottomtitle":"","markdown":"","navselected":"","Name":"props","DefinitionName":"library_Page_props"}, 

library_Page_template_footer: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template_footer","DefinitionName":"library_Page_template_footer","Source":"http://127.0.0.1:6627/static/libraries/layout/Page-footer.html","Hash":"Txxgh37r9"}, 

library_Page_template: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_Page_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Page.html","Hash":"Txx5n4s8k"}, 

library_Page_staticdata: {"Parent":"library_Page","DefName":null,"Content":"{\n\n    navigation: [\n        /*{\n            title: \"Leadership\",\n            file: \"index.html\",\n        },*/\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        */\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_Page_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_Page_script: {"Parent":"library_Page","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_Page_script","Directives":[]}, 

library_NavBar_props: {"Parent":"library_NavBar","DefName":null,"Content":"","Type":"Props","selected":"","navigation":"","Name":"props","DefinitionName":"library_NavBar_props"}, 

library_NavBar_template: {"Parent":"library_NavBar","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_NavBar_template","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.html","Hash":"Tx17sa8tf"}, 

library_NavBar_state: {"Parent":"library_NavBar","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"hide":false,"Name":"state","DefinitionName":"library_NavBar_state"}, 

library_NavBar_staticdata: {"Parent":"library_NavBar","DefName":null,"Content":"{\n\n    navigation: [\n        /*{\n            title: \"Leadership\",\n            file: \"index.html\",\n        },*/\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        */\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_NavBar_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_NavBar_script: {"Parent":"library_NavBar","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_NavBar_script","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.js","Directives":["imageMount"]}, 

library_NavBar_style: {"Parent":"library_NavBar","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_NavBar_style","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.css"}, 

library_MobileNavBar_props: {"Parent":"library_MobileNavBar","DefName":null,"Content":"","Type":"Props","selected":"","navigation":"","Name":"props","DefinitionName":"library_MobileNavBar_props"}, 

library_MobileNavBar_template: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_MobileNavBar_template","Source":"http://127.0.0.1:6627/static/libraries/layout/MobileNavBar.html","Hash":"Tx1igtib6"}, 

library_MobileNavBar_state: {"Parent":"library_MobileNavBar","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"hide":null,"Name":"state","DefinitionName":"library_MobileNavBar_state"}, 

library_MobileNavBar_staticdata: {"Parent":"library_MobileNavBar","DefName":null,"Content":"{\n\n    navigation: [\n        /*{\n            title: \"Leadership\",\n            file: \"index.html\",\n        },*/\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        */\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_MobileNavBar_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_MobileNavBar_script: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_MobileNavBar_script","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.js","Directives":["imageMount"]}, 

library_MobileNavBar_style: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_MobileNavBar_style","Source":"http://127.0.0.1:6627/static/libraries/layout/MobileNavBar.css"}, 

library1_ContactForm: {"Parent":"library1","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"ContactForm","Name":"ContactForm","DefinitionName":"library1_ContactForm","ChildrenNames":["library1_ContactForm_props","library1_ContactForm_template","library1_ContactForm_state","library1_ContactForm_script","library1_ContactForm_style"],"namespace":"x","TagName":"x-contactform"}, 

library1_ContactForm_props: {"Parent":"library1_ContactForm","DefName":null,"Content":"","Type":"Props","volunteerform":"","donateform":"","Name":"props","DefinitionName":"library1_ContactForm_props"}, 

library1_ContactForm_template: {"Parent":"library1_ContactForm","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library1_ContactForm_template","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.html","Hash":"Tx1aseves"}, 

library1_ContactForm_state: {"Parent":"library1_ContactForm","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":"contact","title":"","firstname":"","lastname":"","email":"","zip":"","phone":"","donate_other_value":"","success":null,"submitted":null,"error":null,"show_final_donation_modal":false,"is_redirecting_to_actblue":false,"donate":false,"donate_value":0,"volunteer":false,"Name":"state","DefinitionName":"library1_ContactForm_state"}, 

library1_ContactForm_script: {"Parent":"library1_ContactForm","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library1_ContactForm_script","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.js","Directives":[]}, 

library1_ContactForm_style: {"Parent":"library1_ContactForm","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library1_ContactForm_style","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.css"}, 
 };
/* Modulo.js | (C) 2023 Michael Bethencourt | Use in compliance with LGPL 2.1 */
window.ModuloPrevious = window.Modulo;
window.moduloPrevious = window.modulo;
window.Modulo = class Modulo {
    constructor() {
        window._moduloID = (window._moduloID || 0) + 1;
        this.id = window._moduloID; // Every Modulo instance gets a unique ID.
        this._configSteps = 0; // Used to check for an infinite loop during load
        this.registry = {}; // All classes and functions get put here
        this.config = {}; // For default configurations (e.g. all Components)
        this.definitions = {}; // For specific definitions (e.g. one Component)
        this.stores = {}; // Global data store (by default, only used by State)
    }

    start(elem, callback = null) { // XXX DEAD CODE
        this.loadFromDOM(elem, null, true);
        this.preprocessAndDefine(callback);
    }

    register(type, cls, defaults = undefined) {
        type = (`${type}s` in this.registry) ? `${type}s` : type; // pluralize
        if (type in this.registry.registryCallbacks) { // TODO: Either refactor logic inot this, or rm
            this.registry.registryCallbacks[type](this,  cls, defaults);
        }
        this.assert(type in this.registry, 'Unknown registry type: ' + type);
        this.registry[type][cls.name] = cls;
        if (cls.name[0].toUpperCase() === cls.name[0]) { // is CapFirst
            // TODO: Refactor below:
            const conf = Object.assign(this.config[cls.name.toLowerCase()] || {}, { Type: cls.name }, cls.defaults, defaults);
            this.config[cls.name.toLowerCase()] = conf;

            if (type === 'core') { // Global / core class getting registered
                const lowerName = cls.name[0].toLowerCase() + cls.name.slice(1);
                this[lowerName] = new cls(this);
                this.assets = this.assetManager;
            }
        }
        if (type === 'processors') {
            this.registry.processors[cls.name.toLowerCase()] = cls;
        }
    }

    preprocessAndDefine(callback) {
        callback = callback ? callback : (() => {});
        this.fetchQueue.wait(() => {
            this.repeatProcessors(null, 'DefBuilders', [ ], () => {
                this.repeatProcessors(null, 'DefFinalizers', [ ], callback);
            });
        });
    }

    loadString(text, parentName = null) { // TODO: Refactor this method away
        return this.loadFromDOM(this.registry.utils.makeDiv(text), parentName);
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) { // TODO: Refactor this method away
        const loader = new this.registry.core.DOMLoader(this);
        return loader.loadFromDOM(elem, parentName, quietErrors);
    }

    repeatProcessors(confs, field, defaults, cb) {
        // TODO: Move defaults into global modulo config
        let changed = true; // Run at least once
        while (changed) {
            this.assert(this._configSteps++ < 90000, 'Config steps: 90000+');
            changed = false;
            for (const conf of confs || Object.values(this.definitions)) {
                const processors = conf[field] || defaults;
                //changed = changed || this.applyProcessors(conf, processors);
                const result = this.applyProcessors(conf, processors);
                if (result === 'wait') { // TODO: Test or document, or delete
                    changed = false;
                    break;
                }
                changed = changed || result;
            }
        }
        const repeat = () => this.repeatProcessors(confs, field, defaults, cb);
        if (Object.keys(this.fetchQueue ? this.fetchQueue.queue : {}).length === 0) { // TODO: Remove ?: after core object refactor
            if (cb) {
                cb(); // Synchronous path
            }
        } else {
            this.fetchQueue.enqueueAll(repeat);
        }
    }

    applyProcessors(def, processorNameArray) {
        const cls = this.registry.cparts[def.Type] || this.registry.core[def.Type]; // TODO: Fix this
        for (const name of processorNameArray) {
            const [ attrName, aliasedName ] = name.split('|');
            if (attrName in def) {
                const funcName = (aliasedName || attrName).toLowerCase();
                const func = cls && cls[funcName] ? cls[funcName] :
                    this.registry.processors[funcName];
                const value = def[attrName]; // Pluck value & remove attribute
                delete def[attrName]; // TODO: document 'wait' or rm -v
                return func(this, def, value) === true ? 'wait' : true;
            }
        }
        return false;
    }

    assert(value, ...info) {
        if (!value) {
            console.error(this.id, ...info);
            throw new Error(`Modulo Error: "${Array.from(info).join(' ')}"`);
        }
    }
}

// TODO: Move to conf
Modulo.INVALID_WORDS = new Set((`
    break case catch class const continue debugger default delete do else enum
    export extends finally for if implements import in instanceof interface new
    null package private protected public return static super switch throw try
    typeof var let void  while with await async true false
`).split(/\s+/ig));

// Create a new modulo instance to be the global default instance
window.modulo = new Modulo();
if (typeof modulo === "undefined" || modulo.id !== window.modulo.id) {
    var modulo = window.modulo; // TODO: RM when global modulo is cleaned up
}
window.modulo.registry = Object.fromEntries([
    'registryCallbacks', 'cparts', 'coreDefs', 'utils', 'core', 'engines',
    'commands', 'templateFilters', 'templateTags', 'processors', 'elements',
].map(registryType => ([ registryType, {} ])));

window.modulo.register('registryCallback', function commands(modulo, func, defaults) {
    window.m = window.m || {}; // Avoid overwriting existing truthy m
    window.m[func.name] = () => func(this); // Attach shortcut to global "m"
});

window.modulo.DEVLIB_SOURCE = (`
<Artifact name="css" bundle="link[rel=stylesheet]" exclude="[modulo-asset]">
    <Template>{% for elem in bundle %}{{ elem.bundledContent|safe }}{% endfor %}
              {% for css in assets.cssAssetsArray %}{{ css|safe }}
              {% endfor %}</Template>
</Artifact>
<Artifact name="js" bundle="script[src]" exclude="[modulo-asset]">
    <Template macros="yesplease">window.moduloBuild = window.moduloBuild || { modules: {}, nameToHash: {} };
        {% for name, hash in assets.nameToHash %}{% if hash in assets.moduleSources %}{% if name|first is not "_" %}
            window.moduloBuild.modules["{{ hash }}"] = function {{ name }} (modulo) {
                {{ assets.moduleSources|get:hash|safe }}
            };
            window.moduloBuild.nameToHash.{{ name }} = "{{ hash }}";
        {% endif %}{% endif %}{% endfor %}
        window.moduloBuild.definitions = { {% for name, value in definitions %}
            {% if name|first is not "_" %}{{ name }}: {{ value|json|safe }},{% endif %} 
        {% endfor %} };
        {% for elem in bundle %}{{ elem.bundledContent|safe }}{% endfor %}
        modulo.assets.modules = window.moduloBuild.modules;
        modulo.assets.nameToHash = window.moduloBuild.nameToHash;
        modulo.definitions = window.moduloBuild.definitions;
        {% for name in assets.mainRequires %}
            modulo.assets.require("{{ name|escapejs }}");
        {% endfor %}
    </Template>
</Artifact>
<Artifact name="html" remove="script[src],link[href],[modulo-asset],template[modulo],script[modulo],modulo">
    <Script>
        for (const elem of window.document.querySelectorAll('*')) {
            if (elem.isModulo && elem.originalHTML !== elem.innerHTML) {
                elem.setAttribute('modulo-original-html', elem.originalHTML);
            }
        }
        script.exports.prefix = '<!DOCTYPE html><html><head>' + (window.document.head ? window.document.head.innerHTML : '');
        script.exports.interfix = '</head><body>' + (window.document.body ? window.document.body.innerHTML : '');
        script.exports.suffix = '</body></html>';
    </S` + `cript>
    <Template>{{ script.prefix|safe }}<link rel="stylesheet" href="{{ definitions._artifact_css.OutputPath }}" />
        {{ script.interfix|safe }}<script async src="{{ definitions._artifact_js.OutputPath }}"></s` + `cript>
        {{ script.suffix|safe }}</Template>
</Artifact>
`).replace(/^\s+/gm, '');


modulo.register('core', class ValueResolver {
    constructor(contextObj = null) {
        this.ctxObj = contextObj;
    }

    get(key, ctxObj = null) {
        ctxObj = ctxObj || this.ctxObj;
        if (!/^[a-z]/i.test(key) || Modulo.INVALID_WORDS.has(key)) { // XXX global ref
            return JSON.parse(key); // Not a valid identifier, try JSON
        } // Otherwise, split and return:
        return modulo.registry.utils.get(ctxObj, key);
    }

    set(obj, keyPath, val) {
        const index = keyPath.lastIndexOf('.') + 1; // Index at 1 (0 if missing)
        const key = keyPath.slice(index).replace(/:$/, ''); // Between "." & ":"
        const path = keyPath.slice(0, index - 1); // Exclude "."
        const target = index ? this.get(path, obj) : obj; // Get ctxObj or obj
        //TODO: maybe bind? target[key] = typeof val === 'function' ? val.bind(target) : val;
        target[key] = keyPath.endsWith(':') ? this.get(val) : val;
    }
});


modulo.config.domloader = {
    topLevelTags: [ 'modulo' ], // Only "Modulo" is top
    genericDefTags: { def: 1, script: 1, template: 1, style: 1 },
};
modulo.register('core', class DOMLoader {
    constructor(modulo) {
        this.modulo = modulo; // TODO: need to standardize back references to prevent mismatches
    }

    getAllowedChildTags(parentName) {
        let tagsLower = this.modulo.config.domloader.topLevelTags; // "Modulo"
        if (/^_[a-z][a-zA-Z]+$/.test(parentName)) { // _likethis, e.g. _artifact
            tagsLower = [ parentName.toLowerCase().replace('_', '') ];
        } else if (parentName) { // Normal parent, e.g. Library, Component etc
            const parentDef = this.modulo.definitions[parentName];
            const msg = `Invalid parent: ${ parentName } (${ parentDef })`;
            this.modulo.assert(parentDef && parentDef.Contains, msg);
            const names = Object.keys(this.modulo.registry[parentDef.Contains]);
            tagsLower = names.map(s => s.toLowerCase()); // Ignore case
        }
        return tagsLower;
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) {
        const resolver = new this.modulo.registry.core.ValueResolver(this.modulo);
        const { defaultDef } = this.modulo.config.modulo;
        const toCamel = s => s.replace(/-([a-z])/g, g => g[1].toUpperCase());
        const tagsLower = this.getAllowedChildTags(parentName);
        const array = [];
        for (const node of elem.children || []) {
            const partTypeLC = this.getDefType(node, tagsLower, quietErrors);
            if (node._moduloLoadedBy || partTypeLC === null) {
                continue; // Already loaded, or an ignorable or silenced error
            }
            node._moduloLoadedBy = this.modulo.id; // First time loading, mark
            // Valid definition, now create the "def" object
            const def = Object.assign({ Parent: parentName }, defaultDef);
            def.Content = node.tagName === 'SCRIPT' ? node.textContent : node.innerHTML;
            array.push(Object.assign(def, this.modulo.config[partTypeLC]));
            for (let name of node.getAttributeNames()) { // Loop through attrs
                const value = node.getAttribute(name);
                if (partTypeLC === name && !value) { // e.g. <def Script>
                    continue; // This is the "Type" attribute itself, skip
                }
                def[toCamel(name)] = value; // "-kebab-case" to "CamelCase"
            }
        }
        this.modulo.repeatProcessors(array, 'DefLoaders', [ 'DefTarget', 'DefinedAs', 'Src' ]);
        return array;
    }

    getDefType(node, tagsLower, quiet = false) {
        const { tagName, nodeType, textContent } = node;
        if (nodeType !== 1) { // Text nodes, comment nodes, etc
            if (nodeType === 3 && textContent && textContent.trim() && !quiet) {
                console.error(`Unexpected text in definition: ${textContent}`);
            }
            return null;
        }
        let defType = tagName.toLowerCase();
        if (defType in this.modulo.config.domloader.genericDefTags) {
            for (const attrUnknownCase of node.getAttributeNames()) {
                const attr = attrUnknownCase.toLowerCase();
                if (!node.getAttribute(attr) && tagsLower.includes(attr)) {
                    defType = attr; // Has an empty string value, is a def
                }
                break; // Always break: We will only look at first attribute
            }
        }
        if (!(tagsLower.includes(defType))) { // Were any discovered?
            if (defType === 'testsuite') { return null; } /* XXX Remove and add recipe to stub / silence TestSuite not found errors */
            if (!quiet) { // Invalid def / cPart: This type is not allowed here
                console.error(`"${ defType }" is not one of: ${ tagsLower }`);
            }
            return null // Return null to signify not a definition
        }
        return defType; // Valid, expected definition: Return lowercase type
    }
});

modulo.register('processor', function src (modulo, def, value) {
    const { getParentDefPath } = modulo.registry.utils;
    def.Source = (new URL(value, getParentDefPath(modulo, def))).href;
    modulo.fetchQueue.fetch(def.Source).then(text => {
        def.Content = (text || '') + (def.Content || '');
    });
});

modulo.register('processor', function defTarget (modulo, def, value) {
    const resolverName = def.DefResolver || 'ValueResolver'; // TODO: document, make it switch to TemplaterResolver if there is {% or {{
    const resolver = new modulo.registry.core[resolverName](modulo);
    const target = value === null ? def : resolver.get(value);
    for (const [ key, defValue ] of Object.entries(def)) {
        if (key.endsWith(':') || key.includes('.')) {
            delete def[key]; // Remove & replace unresolved value
            resolver.set(/^[a-z]/.test(key) ? target : def, key, defValue);
        }
    }
});

modulo.register('processor', function content (modulo, conf, value) {
    modulo.loadString(value, conf.DefinitionName);
});

modulo.register('processor', function definedAs (modulo, def, value) {
    def.Name = value ? def[value] : (def.Name || def.Type.toLowerCase());
    const parentDef = modulo.definitions[def.Parent];
    const parentPrefix = parentDef && ('ChildPrefix' in parentDef) ?
        parentDef.ChildPrefix : (def.Parent ? def.Parent + '_' : '');
    def.DefinitionName = parentPrefix + def.Name;
    // Search for the next free Name by suffixing numbers
    while (def.DefinitionName in modulo.definitions) {
        const match = /([0-9]+)$/.exec(def.Name);
        const number = match ? match[0] : '';
        def.Name = def.Name.replace(number, '') + ((number * 1) + 1);
        def.DefinitionName = parentPrefix + def.Name;
    }
    modulo.definitions[def.DefinitionName] = def; // store definition
    const parentConf = modulo.definitions[def.Parent];
    if (parentConf) {
        parentConf.ChildrenNames = parentConf.ChildrenNames || [];
        parentConf.ChildrenNames.push(def.DefinitionName);
    }
});

modulo.register('processor', function customElement (modulo, def, value) {
    if (!def.ChildrenNames || def.ChildrenNames.length === 0) {
        console.warn('Empty ChildrenNames specified:', def.DefinitionName);
        return;
    }
    //if (def.namespace === 'modulo') { console.log("AWHAT modulo"); }
    //if (!def.namespace || def.namespace === 'modulo') { def.namespace = 'x'; }
    /*
    let s = '';
    for (const child of def.ChildrenNames.map(n => modulo.definitions[n])) {
        const cpName = def.RenderObj || def.Name;
        s += `        this.cparts.${ cpName } = `;
        s += `new modulo.registry.cparts.${ child.Type }(modulo, `;
        s += `modulo.defs['${ child.DefinitionName }'], this);\n`;
        s += `        this.cparts.${ cpName }.def = `
        s += `modulo.defs['${ child.DefinitionName }'];\n`;
    }
    */
    def.namespace = def.namespace || 'x';
    def.name = def.name || def.DefName || def.Name;
    def.TagName = `${ def.namespace }-${ def.name }`.toLowerCase();
    def.MainRequire = def.DefinitionName;
    const className =  `${ def.namespace }_${ def.name }`;
    def.Code = `
        const def = modulo.definitions['${ def.DefinitionName }'];
        class ${ className } extends ${ value } {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, ${ className });
        window.customElements.define(def.TagName, ${ className });
        return ${ className };
    `;
});

modulo.register('util', function initElement (modulo, def, elem) {
    elem.modulo = modulo;
    elem.isMounted = false;
    elem.isModulo = true;
    elem.originalHTML = null;
    elem.originalChildren = [];
    elem.cparts = {};
});

modulo.register('util', function makeStore (modulo, def) {
    const isLower = key => key[0].toLowerCase() === key[0];
    const data = modulo.registry.utils.keyFilter(def, isLower);
    const newStore = { boundElements: {}, subscribers: [] };
    newStore.data = JSON.parse(JSON.stringify(data));
    return newStore;
});

modulo.register('util', function initClass (modulo, def, cls) {
    const initRenderObj = { elementClass: cls };
    for (const defName of def.ChildrenNames) {
        const cpartDef = modulo.definitions[defName];
        const cpartCls = modulo.registry.cparts[cpartDef.Type];
        if (cpartCls.factoryCallback) {
            const result = cpartCls.factoryCallback(initRenderObj, cpartDef, modulo);
            initRenderObj[cpartDef.Name] = result;
        }
    }
    cls.prototype.initRenderObj = initRenderObj;
    // Alias a method from the component class (TODO rm at some point)
    cls.prototype.rerender = function (original = null) {
        this.cparts.component.rerender(original);
    };
    cls.prototype.getCurrentRenderObj = function () {
        return this.cparts.component.getCurrentRenderObj();
    };
    modulo.register('element', cls);
});

modulo.register('util', function mountElement (modulo, def, elem) {
    let original = elem;
    if (elem.hasAttribute('modulo-original-html')) {
        original = modulo.registry.utils.makeDiv(elem.getAttribute('modulo-original-html'));
    }

    ////////
    // (legacy CPart setup -v)
    const allNames = [ def.DefinitionName ].concat(def.ChildrenNames);
    const { cparts } = elem.modulo.registry;
    const isLower = key => key[0].toLowerCase() === key[0];
    for (const def of allNames.map(name => modulo.definitions[name])) {
        let instance;
        if (def.Type === 'Component') {
            instance = new elem.modulo.registry.coreDefs.Component(elem.modulo, def, elem);
        } else {
            instance = new cparts[def.Type](elem.modulo, def, elem);
        }
        instance.element = elem;
        instance.modulo = elem.modulo;
        instance.conf = def;
        instance.attrs = elem.modulo.registry.utils.keyFilter(def, isLower);
        instance.id = ++window._moduloID;
        elem.cparts[def.RenderObj || def.Name] = instance;
    }
    ////////

    ////////
    // First rerender
    elem.cparts.component.lifecycle([ 'initialized' ]);
    elem.rerender(original); // render and re-mount it's own childNodes
    // TODO - Needs refactor, should do elem somewhere else:
    if (elem.hasAttribute('modulo-original-html')) {
        const { reconciler } = elem.cparts.component;
        reconciler.patch = reconciler.applyPatch; // Apply patches immediately
        reconciler.patchAndDescendants(elem, 'Mount');
        reconciler.patch = reconciler.pushPatch;
    }
    elem.isMounted = true;
});

modulo.register('processor', function mainRequire (modulo, conf, value) {
    modulo.assets.mainRequire(value);
});

modulo.register('cpart', class Artifact {
    // TODO: Refactor Component logic to be shared with Artifact (maybe using
    // preprocessors?). Refactor this to use something more generalized for
    // children, so it shares code flow with component.
    static build(modulo, def) {
        const finish = () => {
            const { saveFileAs, hash } = modulo.registry.utils;
            const children = (def.ChildrenNames || []).map(n => modulo.definitions[n]);
            //for (const child of children
            const tDef = children.filter(({ Type }) => Type === 'Template')[0] || null;
            const sDef = children.filter(({ Type }) => Type === 'Script')[0] || null;
            let result = { exports: {} };
            if (sDef) {
                result = modulo.assets.require(sDef.DefinitionName);
            }
            const ctx = Object.assign({}, modulo, { script: result.exports });
            ctx.bundle = bundledElems;
            const templater = new modulo.registry.engines.Templater(modulo, tDef);
            let code = templater.render(ctx);
            if (tDef && tDef.macros) { // TODO: Refactor this code, maybe turn into Template core feature to allow 2 tier / "macro" templating?
                const tDef2 = Object.assign({}, tDef, {
                    modeTokens: ['/' + '*-{-% %-}-*/', '/' + '*-{-{ }-}-*/', '/' + '*-{-# #-}-*/'],
                    modes: {
                        ['/' + '*-{-%']: templater.modes['{%'], // alias
                        ['/' + '*-{-{']: templater.modes['{{'], // alias
                        ['/' + '*-{-#']: templater.modes['{#'], // alias
                        text: templater.modes.text,
                    },
                    Content: code,
                    DefinitionName: tDef.DefinitionName + '_macro',
                    Hash: undefined,
                });
                const templater2 = new modulo.registry.engines.Templater(modulo, tDef2);
                //templater2.escapeText = s => s; // turn on safe all the time
                code = templater2.render(ctx);
            }
            def.FileName = `modulo-build-${ hash(code) }.${ def.name }`;
            if (def.name === 'html') { // TODO: Make this only happen during SSG
                def.FileName = window.location.pathname.split('/').pop() || 'index.html';
            }
            def.OutputPath = saveFileAs(def.FileName, code);
        }

        const bundledElems = [];
        if (def.bundle) {
            for (const elem of document.querySelectorAll(def.bundle)) {
                if (def.exclude && elem.matches(def.exclude)) {
                    continue;
                }
                if (elem.src || elem.href) {
                    modulo.fetchQueue.fetch(elem.src || elem.href).then(text => {
                        delete modulo.fetchQueue.data[elem.src || elem.href];
                        elem.bundledContent = text;
                    });
                }
                bundledElems.push(elem);
            }
        }
        if (def.remove) {
            document.querySelectorAll(def.remove).forEach(elem => elem.remove());
        }
        modulo.fetchQueue.enqueueAll(() => finish(bundledElems));
    }
}, {
    Contains: 'cparts',
    DefinedAs: 'name',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
});


/*
modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
    directives: [ 'component.event', 'component.dataProp' ],
};
*/


modulo.config.component = {
    mode: 'regular',
    rerender: 'event',
    engine: 'Reconciler', // TODO: 'Engine':, depends on Instbuilders
    // namespace: 'x',
    Contains: 'cparts',
    CustomElement: 'window.HTMLElement',
    DefinedAs: 'name',
    RenderObj: 'component', // Make features available as "renderObj.component" 
    // Children: 'cparts', // How we can implement Parentage: Object.keys((get('modulo.registry.' + value))// cparts))
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
    DefBuilders: [ 'CustomElement', 'Code' ],
    DefFinalizers: [ 'MainRequire' ],
    Directives: [ 'slotLoad', 'eventMount', 'eventUnmount', 'dataPropMount', 'dataPropUnmount' ],
    //InstBuilders: [ 'CreateChildren' ],
};

modulo.register('coreDef', class Component {
    rerender(original = null) {
        if (original) {
            if (this.element.originalHTML === null) {
                this.element.originalHTML = original.innerHTML;
            }
            this.element.originalChildren = Array.from(
                original.hasChildNodes() ? original.childNodes : []);
        }
        this.lifecycle([ 'prepare', 'render', 'reconcile', 'update' ]);
    }

    getCurrentRenderObj() {
        return (this.element.eventRenderObj || this.element.renderObj || this.element.initRenderObj);
    }

    lifecycle(lifecycleNames, rObj={}) {
        const renderObj = Object.assign({}, rObj, this.getCurrentRenderObj());
        this.element.renderObj = renderObj;
        for (const lifecycleName of lifecycleNames) {
            const methodName = lifecycleName + 'Callback';
            for (const [ name, obj ] of Object.entries(this.element.cparts)) {
                if (!(methodName in obj)) {
                    continue; // Skip if obj has not registered callback
                }
                const result = obj[methodName].call(obj, renderObj);
                if (result) {
                    renderObj[obj.conf.RenderObj || obj.conf.Name] = result;
                }
            }
        }
        //this.element.renderObj = null; // ?rendering is over, set to null
    }

    scriptTagLoad({ el }) {
        const newScript = el.ownerDocument.createElement('script');
        newScript.src = el.src; // TODO: Possibly copy other attrs?
        el.remove(); // delete old element
        this.element.ownerDocument.head.append(newScript);
    }

    initializedCallback(renderObj) {
        const opts = { directiveShortcuts: [], directives: [] };
        for (const cPart of Object.values(this.element.cparts)) {
            const def = (cPart.def || cPart.conf);
            for (const method of def.Directives || []) {
                const dirName = (def.RenderObj || def.Name) + '.' + method;
                opts.directives[dirName] = cPart;
            }
        }
        const addHead = ({ el }) => this.element.ownerDocument.head.append(el);
        if (this.attrs.mode === 'shadow') {
            this.element.attachShadow({ mode: 'open' });
        } else { // TODO: Refactor logic here
            opts.directives.slot = this;
            this.slotTagLoad = this.slotLoad.bind(this); // TODO switch to only slotTagLoad
            if (this.attrs.mode === 'vanish-into-document') {
                opts.directives.script = this;
                for (const headTag of [ 'link', 'title', 'meta' ]) {
                    opts.directives[headTag] = this;
                    this[headTag + 'TagLoad'] = addHead;
                }
            }
        }
        this.reconciler = new this.modulo.registry.engines.Reconciler(this, opts);
        this.resolver = new this.modulo.registry.core.ValueResolver(this.modulo);
    }

    prepareCallback() {
        const { originalHTML } = this.element;
        return { originalHTML, innerHTML: null, patches: null, id: this.id };
    }

    reconcileCallback(renderObj) {
        let { innerHTML, patches, root } = renderObj.component;
        this.mode = this.attrs.mode || 'regular';
        if (innerHTML !== null) {
            if (this.mode === 'regular' || this.mode === 'vanish') {
                root = this.element; // default, use element as root
            } else if (this.mode === 'shadow') {
                root = this.element.shadowRoot;
            } else if (this.mode === 'vanish-into-document') {
                root = this.element.ownerDocument.body; // render into body
            } else {
                this.modulo.assert(this.mode === 'custom-root', 'Invalid mode');
            }
            patches = this.reconciler.reconcile(root, innerHTML || '', this.localNameMap);// rm last arg
        }
        return { patches, innerHTML }; // TODO remove innerHTML from here
    }

    updateCallback(renderObj) {
        const { patches, innerHTML } = renderObj.component;
        if (patches) {
            this.reconciler.applyPatches(patches);
        }

        if (!this.element.isMounted && (this.mode === 'vanish' ||
                                        this.mode === 'vanish-into-document')) {
            // First time initialized, and is one of the vanish modes
            this.element.replaceWith(...this.element.childNodes); // Replace self
        }
    }

    handleEvent(func, payload, ev) {
        this.lifecycle([ 'event' ]);
        const { value } = (ev.target || {}); // Get value if is <INPUT>, etc
        func.call(null, payload === undefined ? value : payload, ev);
        this.lifecycle([ 'eventCleanup' ]); // todo: should this go below rerender()?
        if (this.attrs.rerender !== 'manual') {
            this.element.rerender(); // always rerender after events
        }
    }

    slotLoad({ el, value }) {
        let chosenSlot = value || el.getAttribute('name') || null;
        const getSlot = c => c.getAttribute ? (c.getAttribute('slot') || null) : null;
        let childs = this.element.originalChildren;
        childs = childs.filter(child => getSlot(child) === chosenSlot);
        if (!el.moduloSlotHasLoaded) { // clear innerHTML if this is first load
            el.innerHTML = '';
            el.moduloSlotHasLoaded = true;
        }
        el.append(...childs);
    }

    eventMount({ el, value, attrName, rawName }) {
        // Note: attrName becomes "event name"
        // TODO: Make it @click.payload, and then have this see if '.' exists
        // in attrName and attach as payload if so
        const { resolveDataProp } = this.modulo.registry.utils;
        const get = (key, key2) => resolveDataProp(key, el, key2 && get(key2));
        const func = get(attrName);
        this.modulo.assert(func, `No function found for ${rawName} ${value}`);
        if (!el.moduloEvents) {
            el.moduloEvents = {};
        }
        const listen = ev => {
            ev.preventDefault();
            const payload = get(attrName + '.payload', 'payload');
            const currentFunction = resolveDataProp(attrName, el);
            this.handleEvent(currentFunction, payload, ev);
        };
        el.moduloEvents[attrName] = listen;
        el.addEventListener(attrName, listen);
    }

    eventUnmount({ el, attrName }) {
        el.removeEventListener(attrName, el.moduloEvents[attrName]);
        // Modulo.assert(el.moduloEvents[attrName], 'Invalid unmount');
        delete el.moduloEvents[attrName];
    }

    dataPropMount({ el, value, attrName, rawName }) { // element, 
        // Resolve the given value and attach to dataProps
        if (!el.dataProps) {
            el.dataProps = {};
            el.dataPropsAttributeNames = {};
        }
        const resolver = new modulo.registry.core.ValueResolver(// TODO: Global modulo
                      this.element && this.element.getCurrentRenderObj());
        resolver.set(el.dataProps, attrName + ':', value);
        el.dataPropsAttributeNames[rawName] = attrName;
    }

    dataPropUnmount({ el, attrName, rawName }) {
        if (!el.dataProps) { console.log('Modulo ERROR: Could not Unmount', attrName, rawName, el); }
        if (el.dataProps) {
            delete el.dataProps[attrName];
            delete el.dataPropsAttributeNames[rawName];
        }
    }
});

modulo.register('coreDef', class Modulo { }, {
    ChildPrefix: '', // Prevents all children from getting modulo_ prefixed
    Contains: 'coreDefs',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
    defaultDef: { DefTarget: null, DefinedAs: null, DefName: null },
});

modulo.register('coreDef', class Library { }, {
    Contains: 'coreDefs',
    DefTarget: 'config.component',
    // DefinedAs: 'namespace', // TODO: Write tests for Library, the add this
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
});

modulo.register('util', function keyFilter (obj, func) {
    const keys = func.call ? Object.keys(obj).filter(func) : func;
    return Object.fromEntries(keys.map(key => [ key, obj[key] ]));
});

modulo.register('util', function resolveDataProp (key, elem, defaultVal) {
    if (elem.dataProps && key in elem.dataProps) {
        return elem.dataProps[key];
    }
    return elem.hasAttribute(key) ? elem.getAttribute(key) : defaultVal;
});

modulo.register('util', function cleanWord (text) {
    // todo: should merge with stripWord ? See if "strip" functionality is enough
    return (text + '').replace(/[^a-zA-Z0-9$_\.]/g, '') || '';
});

modulo.register('util', function stripWord (text) {
    return text.replace(/^[^a-zA-Z0-9$_\.]/, '')
               .replace(/[^a-zA-Z0-9$_\.]$/, '');
});

modulo.register('util', function hash (str) {
    // Simple, insecure, "hashCode()" implementation. Returns base32 hash
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        //h = ((h << 5 - h) + str.charCodeAt(i)) | 0;
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    const hash8 = ('---------' + (h || 0).toString(32)).slice(-8);
    return hash8.replace(/-/g, 'x'); // Pad with 'x'
});

modulo.register('util', function makeDiv(html) {
    /* TODO: Have an options for doing <script  / etc preprocessing here:
      <state -> <script type="modulo/state"
      <\s*(state|props|template)([\s>]) -> <script type="modulo/\1"\2
      </(state|props|template)> -> </script>*/
    const div = window.document.createElement('div');
    div.innerHTML = html;
    return div;
});

modulo.register('util', function normalize(html) {
    // Normalize space to ' ' & trim around tags
    return html.replace(/\s+/g, ' ').replace(/(^|>)\s*(<|$)/g, '$1$2').trim();
});

modulo.register('util', function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
});

modulo.register('util', function saveFileAs(filename, text) {
    const element = window.document.createElement('a');
    const enc = window.encodeURIComponent(text);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + enc);
    element.setAttribute('download', filename);
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
    return `./${filename}`; // by default, return local path
});

modulo.register('util', function get(obj, key) {
    return (key in obj) ? obj[key] : (key + '').split('.').reduce((o, name) => o[name], obj);
});

modulo.register('util', function set(obj, keyPath, val) {
    return new modulo.registry.core.ValueResolver(modulo).set(obj, keyPath, val); // TODO: Global modulo
});

modulo.register('util', function getParentDefPath(modulo, def) {
    const { getParentDefPath } = modulo.registry.utils; // Use to recurse
    const pDef = def.Parent ? modulo.definitions[def.Parent] : null;
    const url = String(window.location).split('?')[0]; // Remove ? and #
    return pDef ? pDef.Source || getParentDefPath(modulo, pDef) : url;
});

modulo.register('util', function prefixAllSelectors(namespace, name, text='') {
    // TODO: Redo prefixAllSelectors to instead behave more like DataType,
    // basically using "?" auto determines based on Component mode + TagName,
    // allowing users to override if they want to intentionally silo their CSS
    // some other way
    // NOTE - has old tests that can be resurrected
    const fullName = `${namespace}-${name}`;
    let content = text.replace(/\*\/.*?\*\//ig, ''); // strip comments

    // To prefix the selectors, we loop through them, with this RegExp that
    // looks for { chars
    content = content.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/gi, selector => {
        selector = selector.trim();
        if (selector.startsWith('@') || selector.startsWith(fullName)
              || selector.startsWith('from') || selector.startsWith('to')) {
            // TODO: Make a regexp to check if matches other keyframe
            // stuff, 90% etc
            // Skip, is @media or @keyframes, or already prefixed
            return selector;
        }

        // Upgrade the ":host" pseudo-element to be the full name (since
        // this is not a Shadow DOM style-sheet)
        selector = selector.replace(new RegExp(/:host(\([^)]*\))?/, 'g'), hostClause => {
            // TODO: this needs more thorough testing
            const notBare = (hostClause && hostClause !== ':host');
            return fullName + (notBare ? `:is(${hostClause})` : '');
        });

        // If it is not prefixed at this point, then be sure to prefix
        if (!selector.startsWith(fullName)) {
            selector = `${fullName} ${selector}`;
        }
        return selector;
    });
    return content;
});

modulo.register('core', class AssetManager {
    constructor (modulo) {
        this.modulo = modulo;
        this.stylesheets = {};
        this.cssAssetsArray = [];
        this.modules = {};
        this.moduleSources = {};
        this.nameToHash = {};
        this.mainRequires = []; // List of globally invoked modules
    }

    mainRequire(moduleName) {
        this.mainRequires.push(moduleName);
        this.require(moduleName);
    }

    require(moduleName) {
        this.modulo.assert(moduleName in this.nameToHash,
            `${ moduleName } not in ${ Object.keys(this.nameToHash).join(', ') }`);
        const hash = this.nameToHash[moduleName];
        this.modulo.assert(hash in this.modules,
            `${ moduleName } / ${ hash } not in ${ Object.keys(this.modules).join(', ') }`);
        return this.modules[hash].call(window, this.modulo);
    }

    define(name, code) {
        const hash = this.modulo.registry.utils.hash(code);
        this.modulo.assert(!(name in this.nameToHash), `Duplicate: ${ name }`);
        this.nameToHash[name] = hash;
        if (!(hash in this.modules)) {
            this.moduleSources[hash] = code;
            const assignee = `window.modulo.assets.modules["${ hash }"] = `;
            const prefix = assignee + `function ${ name } (modulo) {\n`;
            //this.modulo.assets = this;// TODO Should investigate why needed
            //this.modulo.pushGlobal();
            this.appendToHead('script', `"use strict";${ prefix }${ code }};\n`);
            //this.modulo.popGlobal();
        }
        return () => this.modules[hash].call(window, modulo); // TODO: Rm this, and also rm the extra () in Templater
    }

    registerStylesheet(text) {
        const hash = this.modulo.registry.utils.hash(text);
        if (!(hash in this.stylesheets)) {
            this.stylesheets[hash] = true;
            this.cssAssetsArray.push(text);
            this.appendToHead('style', text);
        }
    }

    appendToHead(tagName, codeStr) {
        const doc = window.document;
        const elem = doc.createElement(tagName);
        elem.setAttribute('modulo-asset', 'y'); // Mark as an "asset"
        if (doc.head === null) {
            console.log('Modulo WARNING: Head not ready.');
            setTimeout(() => doc.head.append(elem), 0);
        } else {
            doc.head.append(elem);
        }
        elem.textContent = codeStr; // Blocking, causes eval
    }
});

modulo.register('core', class FetchQueue {
    constructor(modulo) {
        this.modulo = modulo;
        this.queue = {};
        this.data = {};
        this.waitCallbacks = [];
    }

    fetch(src) {
        const label = 'testlabel'; // XXX rm label concept
        //if (src in this.data) { // Already found, resolve immediately
        //    const then = resolve => resolve(this.data[src], label, src);
        //    return { then, catch: () => {} }; // Return synchronous Then-able
        //}
        //return new Promise((resolve, reject) => {
        //});
        return { then : (resolve, reject) => {
            if (src in this.data) { // Already found, resolve immediately
                resolve(this.data[src], label, src);
            } else if (!(src in this.queue)) { // First time, make queue
                this.queue[src] = [ resolve ];
                // TODO: Think about if we want to keep cache:no-store
                window.fetch(src, { cache: 'no-store' })
                    .then(response => response.text())
                    .then(text => this.receiveData(text, label, src))
                    .catch(reject);
            } else {
                this.queue[src].push(resolve); // add to end of src queue
            }
        }};
    }

    receiveData(text, label, src) {
        this.data[src] = text; // load data
        const queue = this.queue[src];
        delete this.queue[src]; // delete queue
        queue.forEach(func => func(text, label, src));
        this.checkWait();
    }

    enqueueAll(callback) {
        const allQueues = Array.from(Object.values(this.queue));
        if (allQueues.length === 0) {
            return callback();
        }
        let callbackCount = 0;
        for (const queue of allQueues) {
            queue.push(() => {
                callbackCount++;
                if (callbackCount >= allQueues.length) {
                    //console.log(Array.from(Object.values(this.queue)).length);
                    callback();
                }
            });
        }
    }

    wait(callback) {
        // NOTE: There is a bug with this vs enqueueAll, specifically if we are
        // already in a wait callback, it can end up triggering the next one
        // immediately
        //console.log({ wait: Object.keys(this.queue).length === 0 }, Object.keys(this.queue));
        this.waitCallbacks.push(callback); // add to end of queue
        this.checkWait(); // attempt to consume wait queue
    }

    checkWait() {
        if (Object.keys(this.queue).length === 0) {
            while (this.waitCallbacks.length > 0) {
                this.waitCallbacks.shift()(); // clear while invoking
            }
        }
    }
});


modulo.register('cpart', class Props {
    initializedCallback(renderObj) {
        const props = {};
        const { resolveDataProp } = modulo.registry.utils;
        for (const [ propName, def ] of Object.entries(this.attrs)) {
            props[propName] = resolveDataProp(propName, this.element, def);
            // TODO: Implement type-checked, and required
        }
        return props;
    }

    prepareCallback(renderObj) {
        /* TODO: Remove after observedAttributes is implemented, e.g.:
          static factoryCallback({ attrs }, { componentClass }, renderObj) {
              //componentClass.observedAttributes = Object.keys(attrs);
          }
        */
        return this.initializedCallback(renderObj);
    }
});

modulo.register('processor', function prefixCSS (modulo, def, value) {
    const { namespace, mode, Name } = modulo.definitions[def.Parent] || {};
    if (mode === 'regular') {
        value = modulo.registry.utils.prefixAllSelectors(namespace, Name, value);
    }
    if (mode !== 'shadow') {
        modulo.assets.registerStylesheet(value);
    }
});

modulo.register('cpart', class Style {
    initializedCallback(renderObj) {
        const { component, style } = renderObj;
        if (component && component.attrs && component.attrs.mode === 'shadow') { // TODO Finish
            const style = window.document.createElement('style');
            style.setAttribute('modulo-ignore', 'true');
            style.textContent = style.content;// `<style modulo-ignore>${style.content}</style>`;
            this.element.shadowRoot.append(style);
        }
    }
    /*
    updateCallback() {
        const { isolateClass, allSelectors } = this.def;
        if (!isolateClass || allSelectors.length < 1) {
            return;
        }
        for (const elem of this.element.querySelector(allSelectors.join(','))) {
            elem.classList.add(isolateClass); // ensure always has class added
        }
    }
    */
}, {
    DefFinalizers: [ 'Content|PrefixCSS' ]
});

modulo.register('processor', function templatePrebuild (modulo, def, value) {
    if (!def.Content) {
        console.error('No Template Content specified:', def.DefinitionName, JSON.stringify(def));
        return;
    }
    const engine = def.engine || 'Templater';
    const instance = new modulo.registry.engines[engine](modulo, def);
    def.Hash = instance.Hash;
    //console.log('Template code:', def.Content);
    delete def.Content;
    delete def.TemplatePrebuild;
});

modulo.register('cpart', class Template {
    initializedCallback() {
        const engine = this.conf.engine || 'Templater';
        this.templater = new this.modulo.registry.engines[engine](this.modulo, this.conf);
        const render = this.templater.render.bind(this.templater);
        return { render }; // Expose render to include, renderas etc
    }
    renderCallback(renderObj) {
        if (!renderObj.component)renderObj.component={};// XXX fix
        renderObj.component.innerHTML = this.templater.render(renderObj);
    }
}, {
    TemplatePrebuild: "yes",
    DefFinalizers: [ 'TemplatePrebuild' ]
});


modulo.register('processor', function contentCSV (modulo, def, value) {
    const js = JSON.stringify((def.Content || '').split('\n').map(line => line.split(',')));
    def.Code = 'return ' + js;
});

modulo.register('processor', function contentJS (modulo, def, value) {
    const tmpFunc = new Function('return (' + (def.Content || 'null') + ');');
    def.Code = 'return ' + JSON.stringify(tmpFunc()) + ';'; // Evaluate
});

modulo.register('processor', function contentJSON (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(JSON.parse(def.Content || '{}')) + ';';
});

modulo.register('processor', function contentTXT (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(def.Content);
});

modulo.register('processor', function dataType (modulo, def, value) {
    if (value === '?') { // '?' means determine based on extension
        const ext = def.Src && def.Src.match(/(?<=\.)[a-z]+$/i);
        value = ext ? ext[0] : 'json';
    }
    def['Content' + value.toUpperCase()] = value;
});

modulo.register('processor', function code (modulo, def, value) {
    if (def.DefinitionName in modulo.assets.nameToHash) {
        console.error("ERROR: Duped def:", def.DefinitionName);
        return;
    }
    modulo.assets.define(def.DefinitionName, value);
});

modulo.register('processor', function requireData (modulo, def, value) {
    def.data = modulo.assets.require(def[value]);
});

modulo.register('cpart', class StaticData {
    static factoryCallback(renderObj, def, modulo) {
        return def.data;
    }
    prepareCallback() { // XXX remove when fac gets to be default
        return this.conf.data;
    }
}, {
    DataType: '?', // Default behavior is to guess based on Src ext
    RequireData: 'DefinitionName',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'DataType', 'Src' ],
    DefBuilders: [ 'ContentCSV', 'ContentTXT', 'ContentJSON', 'ContentJS' ],
    DefFinalizers: [ 'Code', 'RequireData' ],
});

modulo.register('coreDef', class Configuration { }, {
    DefTarget: 'config',
    DefBuilders: [ 'Content|Code', 'DefinitionName|MainRequire' ],
});

modulo.register('processor', function scriptAutoExport (modulo, def, value) {
    const { getAutoExportNames } = modulo.registry.utils;
    if (def.lifecycle && def.lifecycle !== 'initialized') {
        value = `function ${ def.lifecycle }Callback (renderObj) {${ value }}`;
    }
    const isDirRegEx = /(Unmount|Mount)$/;
    def.Directives = getAutoExportNames(value).filter(s => s.match(isDirRegEx));
    const { ChildrenNames } = modulo.definitions[def.Parent] || { };
    const sibNames = (ChildrenNames || []).map(n => modulo.definitions[n].Name);
    sibNames.push('component', 'element', 'cparts'); // Add in extras
    const varNames = sibNames.filter(name => value.includes(name));
    // Build def.Code to wrap the user-provided code and export local vars
    def.Code = `var script = { exports: {} }; `;
    def.Code += varNames.length ? `var ${ varNames.join(', ') };` : '';
    def.Code += '\n' + value + '\nreturn {';
    for (const s of getAutoExportNames(value)) {
        def.Code += `"${s}": typeof ${s} !== "undefined" ? ${s} : undefined, `;
    }
    def.Code += `setLocalVariables: function(o) {`
    def.Code += varNames.map(name => `${ name }=o.${ name }`).join('; ');
    def.Code += `}, exports: script.exports }\n`
});

modulo.register('cpart', class Script {
    static factoryCallback(renderObj, def, modulo) {
        //modulo.assert(results || !def.Parent, 'Invalid script return');
        const hash = modulo.assets.nameToHash[def.DefinitionName];
        const func = () => modulo.assets.modules[hash].call(window, modulo);
        if (def.lifecycle === 'initialized') {
            return { initializedCallback: func }; // Attach as callback
        }
        return func(); // Otherwise, should run in static context (e.g. now)
    }

    initializedCallback(renderObj) {
        // Create all lifecycle callbacks, wrapping around the inner script
        const script = renderObj[this.conf.Name];
        this.eventCallback = (rObj) => { // Create eventCallback to set inner
            const vars = { element: this.element, cparts: this.element.cparts };
            const setLocal = script.setLocalVariables || (() => {});
            setLocal(Object.assign(vars, rObj)); // Set inner vars (or no-op)
        };

        if (script.initializedCallback) { // If defined, trigger inner init
            this.eventCallback(renderObj); // Prep before (used by lc=false)
            Object.assign(script, script.initializedCallback(renderObj));
            this.eventCallback(renderObj); // Prep again (used by lc=initialize)
        }

        const isCallback = /(Mount|Unmount|Callback)$/;
        for (const cbName of Object.keys(script)) {
            if (cbName === 'initializedCallback' || !cbName.match(isCallback)) {
                continue; // Skip over initialized (already handled) and non-CBs
            }
            this[cbName] = arg => { // Arg: Either renderObj or directive obj
                const renderObj = this.element.getCurrentRenderObj();
                const script = renderObj[this.conf.Name]; // Get new render obj
                this.eventCallback(renderObj); // Prep before lifecycle method
                Object.assign(script, script[cbName](arg) || {});
            };
        }
    }
}, {
    lifecycle: null,
    DefBuilders: [ 'Content|ScriptAutoExport', 'Code' ],
});



modulo.register('cpart', class State {
    static factoryCallback(renderObj, def, modulo) {
        if (def.Store) {
            const store = modulo.registry.utils.makeStore(modulo, def);
            if (!(def.Store in modulo.stores)) {
                modulo.stores[def.Store] = store;
            } else {
                Object.assign(modulo.stores[def.Store].data, store.data);
            }
        }
    }

    initializedCallback(renderObj) {
        if (!this.def && this.conf) { this.def = this.conf; } // XXX rm
        const store = this.def.Store ? this.modulo.stores[this.def.Store]
                : this.modulo.registry.utils.makeStore(this.modulo, this.def);
        store.subscribers.push(Object.assign(this, store));
        return store.data; // TODO: Possibly, push ALL sibling CParts with stateChangedCallback
    }

    bindMount({ el, attrName, value }) {
        const name = attrName || el.getAttribute('name');
        const val = modulo.registry.utils.get(this.data, name);
        this.modulo.assert(val !== undefined, `state.bind "${name}" undefined`);
        const isText = el.tagName === 'TEXTAREA' || el.type === 'text';
        const evName = value ? value : (isText ? 'keyup' : 'change');
        if (!(name in this.boundElements)) {
            this.boundElements[name] = [];
        }
        // Bind the "listen" event to propagate to all, and trigger initial vals
        const listen = () => this.propagate(name, el.value, el);
        this.boundElements[name].push([ el, evName, listen ]);
        el.addEventListener(evName, listen); // todo: make optional, e.g. to support cparts?
        this.propagate(name, val, this); // trigger initial assignment(s)
    }

    bindUnmount({ el, attrName }) {
        const name = attrName || el.getAttribute('name');
        if (!(name in this.boundElements)) { // XXX HACK
            return console.log('Modulo ERROR: Could not unbind', name);
        }
        const remainingBound = [];
        for (const row of this.boundElements[name]) {
            if (row[0] === el) {
                row[0].removeEventListener(row[1], row[2]);
            } else {
                remainingBound.push(row);
            }
        }
        this.boundElements[name] = remainingBound;
    }

    stateChangedCallback(name, value, el) {
        this.modulo.registry.utils.set(this.data, name, value);
        if (!this.def.Only || this.def.Only.includes(name)) { // TODO: Test & document
            this.element.rerender();
        }
    }

    eventCallback() {
        this._oldData = Object.assign({}, this.data);
    }

    propagate(name, val, originalEl = null) {
        const elems = (this.boundElements[name] || []).map(row => row[0]);
        for (const el of this.subscribers.concat(elems)) {
            if (originalEl && el === originalEl) {
                continue; // don't propagate to self
            }
            if (el.stateChangedCallback) {
                el.stateChangedCallback(name, val, originalEl);
            } else if (el.type === 'checkbox') {
                el.checked = !!val; // ensure is bool
            } else {
                el.value = val;
            }
        }
    }

    eventCleanupCallback() {
        for (const name of Object.keys(this.data)) {
            this.modulo.assert(name in this._oldData, `There is no "state.${name}"`);
            if (this.data[name] !== this._oldData[name]) {
                this.propagate(name, this.data[name], this);
            }
        }
        this._oldData = null;
    }
}, { Directives: [ 'bindMount', 'bindUnmount' ], Store: null });


/* Implementation of Modulo Templating Language */
modulo.register('engine', class Templater {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.setup(def.Content, def);
    }

    setup(text, def) {
        Object.assign(this, this.modulo.config.templater, def);
        this.filters = Object.assign({}, this.modulo.registry.templateFilters, this.filters);
        this.tags = Object.assign({}, this.modulo.registry.templateTags, this.tags);
        if (this.Hash) {
            this.renderFunc = this.modulo.assets.require(this.DefinitionName);
        } else {
            this.compiledCode = this.compile(text);
            const unclosed = this.stack.map(({ close }) => close).join(', ');
            this.modulo.assert(!unclosed, `Unclosed tags: ${ unclosed }`);

            this.compiledCode = `return function (CTX, G) { ${ this.compiledCode } };`;
            const { hash } = this.modulo.registry.utils;
            this.Hash = 'T' + hash(this.compiledCode);
            if (this.DefinitionName in this.modulo.assets.nameToHash) { // TODO RM
                console.error("ERROR: Duped template:", def.DefinitionName);
                this.renderFunc = () => '';
                return;
            }
            this.renderFunc = this.modulo.assets.define(this.DefinitionName, this.compiledCode)();
        }
    }

    static moduloClone(modulo, other) {
        // Possible idea: Return a serializable array as args for new()
        return new this('', other);
    }

    tokenizeText(text) {
        // Join all modeTokens with | (OR in regex).
        const { escapeRegExp } = this.modulo.registry.utils;
        const re = '(' + this.modeTokens.map(escapeRegExp).join('|(').replace(/ +/g, ')(.+?)');
        return text.split(RegExp(re)).filter(token => token !== undefined);
    }

    compile(text) {
        const { normalize } = this.modulo.registry.utils;
        this.stack = []; // Template tag stack
        this.output = 'var OUT=[];\n'; // Variable used to accumulate code
        let mode = 'text'; // Start in text mode
        const tokens = this.tokenizeText(text);
        for (const token of tokens) {
            if (mode) { // if in a "mode" (text or token), then call mode func
                const result = this.modes[mode](token, this, this.stack);
                if (result) { // Mode generated text output, add to code
                    const comment = JSON.stringify(normalize(token).trim());
                    this.output += `  ${result} // ${ comment }\n`;
                }
            }
            // FSM for mode: ('text' -> null) (null -> token) (* -> 'text')
            mode = (mode === 'text') ? null : (mode ? 'text' : token);
        }
        this.output += '\nreturn OUT.join("");'
        return this.output;
    }

    render(renderObj) {
        return this.renderFunc(Object.assign({ renderObj }, renderObj), this);
    }

    parseExpr(text) {
        // TODO: Store a list of variables / paths, so there can be warnings or
        // errors when variables are unspecified
        // TODO: Support this-style-variable being turned to thisStyleVariable
        const filters = text.split('|');
        let results = this.parseVal(filters.shift()); // Get left-most val
        for (const [ fName, arg ] of filters.map(s => s.trim().split(':'))) {
            const argList = arg ? ',' + this.parseVal(arg) : '';
            results = `G.filters["${fName}"](${results}${argList})`;
        }
        return results;
    }

    parseCondExpr(string) {
        // This RegExp splits around the tokens, with spaces added
        const regExpText = ` (${this.opTokens.split(',').join('|')}) `;
        return string.split(RegExp(regExpText));
    }

    parseVal(string) {
        // Parses string literals, de-escaping as needed, numbers, and context
        // variables
        const { cleanWord } = this.modulo.registry.utils;
        const s = string.trim();
        if (s.match(/^('.*'|".*")$/)) { // String literal
            return JSON.stringify(s.substr(1, s.length - 2));
        }
        return s.match(/^\d+$/) ? s : `CTX.${cleanWord(s)}`
    }

    escapeText(text) {
        if (text && text.safe) {
            return text;
        }
        return (text + '').replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/'/g, '&#x27;').replace(/"/g, '&quot;');
    }
}, {
    modeTokens: ['{% %}', '{{ }}', '{# #}'],
    opTokens: '==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt',
    opAliases: {
        '==': 'X === Y',
        'is': 'X === Y',
        'gt': 'X > Y',
        'lt': 'X < Y',
        'is not': 'X !== Y',
        'not': '!(Y)',
        'in': '(Y).includes ? (Y).includes(X) : (X in Y)',
        'not in': '!((Y).includes ? (Y).includes(X) : (X in Y))',
    },
});

// TODO: Consider patterns like this to avoid excess reapplication of
// filters:
// (x = X, y = Y).includes ? y.includes(x) : (x in y)
modulo.config.templater.modes = {
    '{%': (text, tmplt, stack) => {
        const tTag = text.trim().split(' ')[0];
        const tagFunc = tmplt.tags[tTag];
        if (stack.length && tTag === stack[stack.length - 1].close) {
            return stack.pop().end; // Closing tag, return it's end code
        } else if (!tagFunc) { // Undefined template tag
            throw new Error(`Unknown template tag "${tTag}": ${text}`);
        } // Normal opening tag
        const result = tagFunc(text.slice(tTag.length + 1), tmplt);
        if (result.end) { // Not self-closing, push to stack
            stack.push({ close: `end${ tTag }`, ...result });
        }
        return result.start || result;
    },
    '{#': (text, tmplt) => false, // falsy values are ignored
    '{{': (text, tmplt) => `OUT.push(G.escapeText(${tmplt.parseExpr(text)}));`,
    text: (text, tmplt) => text && `OUT.push(${JSON.stringify(text)});`,
};

modulo.config.templater.filters = (function () {
    const { get } = modulo.registry.utils;
    const safe = s => Object.assign(new String(s), { safe: true });
    const filters = {
        add: (s, arg) => s + arg,
        allow: (s, arg) => arg.split(',').includes(s) ? s : '',
        camelcase: s => s.replace(/-([a-z])/g, g => g[1].toUpperCase()),
        capfirst: s => s.charAt(0).toUpperCase() + s.slice(1),
        concat: (s, arg) => s.concat ? s.concat(arg) : s + arg,
        combine: (s, arg) => s.concat ? s.concat(arg) : Object.assign({}, s, arg),
        default: (s, arg) => s || arg,
        divisibleby: (s, arg) => ((s * 1) % (arg * 1)) === 0,
        dividedinto: (s, arg) => Math.ceil((s * 1) / (arg * 1)),
        escapejs: s => JSON.stringify(String(s)).replace(/(^"|"$)/g, ''),
        first: s => Array.from(s)[0],
        join: (s, arg) => (s || []).join(arg === undefined ? ", " : arg),
        json: (s, arg) => JSON.stringify(s, null, arg || undefined),
        last: s => s[s.length - 1],
        length: s => s.length !== undefined ? s.length : Object.keys(s).length,
        lower: s => s.toLowerCase(),
        multiply: (s, arg) => (s * 1) * (arg * 1),
        number: (s) => Number(s),
        pluralize: (s, arg) => (arg.split(',')[(s === 1) * 1]) || '',
        skipfirst: (s, arg) => Array.from(s).slice(arg || 1),
        subtract: (s, arg) => s - arg,
        truncate: (s, arg) => ((s && s.length > arg*1) ? (s.substr(0, arg-1) + '…') : s),
        type: s => s === null ? 'null' : (Array.isArray(s) ? 'array' : typeof s),
        renderas: (rCtx, template) => safe(template.render(rCtx)),
        reversed: s => Array.from(s).reverse(),
        upper: s => s.toUpperCase(),
        yesno: (s, arg) => `${ arg || 'yes,no' },,`.split(',')[s ? 0 : s === null ? 2 : 1],
    };
    const { values, keys, entries } = Object;
    const extra = { get, safe, values, keys, entries };
    return Object.assign(filters, extra);
})();

modulo.config.templater.tags = {
    'debugger': () => 'debugger;',
    'if': (text, tmplt) => {
        // Limit to 3 (L/O/R)
        const [ lHand, op, rHand ] = tmplt.parseCondExpr(text);
        const condStructure = !op ? 'X' : tmplt.opAliases[op] || `X ${op} Y`;
        const condition = condStructure.replace(/([XY])/g,
            (k, m) => tmplt.parseExpr(m === 'X' ? lHand : rHand));
        const start = `if (${condition}) {`;
        return { start, end: '}' };
    },
    'else': () => '} else {',
    'elif': (s, tmplt) => '} else ' + tmplt.tags['if'](s, tmplt).start,
    'comment': () => ({ start: "/*", end: "*/"}),
    'include': (text) => `OUT.push(CTX.${ text.trim() }.render(CTX));`,
    'for': (text, tmplt) => {
        // Make variable name be based on nested-ness of tag stack
        const { cleanWord } = modulo.registry.utils;
        const arrName = 'ARR' + tmplt.stack.length;
        const [ varExp, arrExp ] = text.split(' in ');
        let start = `var ${arrName}=${tmplt.parseExpr(arrExp)};`;
        // TODO: Upgrade to of (after good testing), since probably no need to
        // support for..in
        start += `for (var KEY in ${arrName}) {`;
        const [keyVar, valVar] = varExp.split(',').map(cleanWord);
        if (valVar) {
            start += `CTX.${keyVar}=KEY;`;
        }
        start += `CTX.${valVar ? valVar : varExp}=${arrName}[KEY];`;
        return {start, end: '}'};
    },
    'empty': (text, {stack}) => {
        // Make variable name be based on nested-ness of tag stack
        const varName = 'G.FORLOOP_NOT_EMPTY' + stack.length;
        const oldEndCode = stack.pop().end; // get rid of dangling for
        const start = `${varName}=true; ${oldEndCode} if (!${varName}) {`;
        const end = `}${varName} = false;`;
        return { start, end, close: 'endfor' };
    },
};

modulo.register('engine', class DOMCursor {
    constructor(parentNode, parentRival) {
        this.initialize(parentNode, parentRival);
        this.instanceStack = [];
    }

    initialize(parentNode, parentRival) {
        this.parentNode = parentNode;
        this.nextChild = parentNode.firstChild;
        this.nextRival = parentRival.firstChild;
        this.keyedChildren = {};
        this.keyedRivals = {};
        this.keyedChildrenArr = null;
        this.keyedRivalsArr = null;
    }

    saveToStack() {
        // TODO: Once we finalize this class, write "_.pick" helper
        const { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr } = this;
        const instance = { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr };
        this.instanceStack.push(instance);
    }

    loadFromStack() {
        const stack = this.instanceStack;
        return stack.length > 0 && Object.assign(this, stack.pop());
    }

    hasNext() {
        if (this.nextChild || this.nextRival) {
            return true; // Is pointing at another node
        }

        // Convert objects into arrays so we can pop
        if (!this.keyedChildrenArr) {
            this.keyedChildrenArr = Object.values(this.keyedChildren);
        }
        if (!this.keyedRivalsArr) {
            this.keyedRivalsArr = Object.values(this.keyedRivals);
        }

        if (this.keyedRivalsArr.length || this.keyedChildrenArr.length) {
            return true; // We have queued up nodes from keyed values
        }

        return this.loadFromStack() && this.hasNext();
    }

    next() {
        let child = this.nextChild;
        let rival = this.nextRival;
        if (!child && !rival) { // reached the end
            if (!this.keyedRivalsArr) {
                return [null, null];
            }
            // There were excess keyed rivals OR children, pop()
            return this.keyedRivalsArr.length ?
                  [ null, this.keyedRivalsArr.pop() ] :
                  [ this.keyedChildrenArr.pop(), null ];
        }

        // Handle keys
        this.nextChild = child ? child.nextSibling : null;
        this.nextRival = rival ? rival.nextSibling : null;

        let matchedRival = this.getMatchedNode(child, this.keyedChildren, this.keyedRivals);
        let matchedChild = this.getMatchedNode(rival, this.keyedRivals, this.keyedChildren);
        // TODO refactor this
        if (matchedRival === false) {
            // Child has a key, but does not match rival, so SKIP on child
            child = this.nextChild;
            this.nextChild = child ? child.nextSibling : null;
        } else if (matchedChild === false) {
            // Rival has a key, but does not match child, so SKIP on rival
            rival = this.nextRival;
            this.nextRival = rival ? rival.nextSibling : null;
        }
        const keyWasFound = matchedRival !== null || matchedChild !== null;
        const matchFound = matchedChild !== child && keyWasFound;
        if (matchFound && matchedChild) {
            // Rival matches, but not with child. Swap in child.
            this.nextChild = child;
            child = matchedChild;
        }

        if (matchFound && matchedRival) {
            // Child matches, but not with rival. Swap in rival.
            this.modulo.assert(matchedRival !== rival, 'Dupe!'); // (We know this due to ordering)
            this.nextRival = rival;
            rival = matchedRival;
        }

        return [ child, rival ];
    }

    getMatchedNode(elem, keyedElems, keyedOthers) {
        const key = elem && elem.getAttribute && elem.getAttribute('key');
        if (!key) {
            return null;
        }
        if (key in keyedOthers) {
            const matched = keyedOthers[key];
            delete keyedOthers[key];
            return matched;
        } else {
            if (key in keyedElems) {
                console.error('MODULO WARNING: Duplicate key:', key);
            }
            keyedElems[key] = elem;
            return false;
        }
    }
});

modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
};
modulo.register('engine', class Reconciler {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.constructor_old(def);
    }
    constructor_old(opts) {
        opts = opts || {};
        this.shouldNotDescend = !!opts.doNotDescend;
        this.directives = opts.directives || {};
        this.tagTransforms = opts.tagTransforms;
        this.directiveShortcuts = opts.directiveShortcuts || [];
        if (this.directiveShortcuts.length === 0) { // XXX horrible HACK
            this.directiveShortcuts = modulo.config.reconciler.directiveShortcuts; // TODO global modulo
        }
        this.patch = this.pushPatch;
        this.patches = [];
    }

    parseDirectives(rawName, directiveShortcuts) { //, foundDirectives) {
        if (/^[a-z0-9-]$/i.test(rawName)) {
            return null; // if alpha-only, stop right away
            // TODO: If we ever support key= as a shortcut, this will break
        }

        // "Expand" shortcuts into their full versions
        let name = rawName;
        for (const [regexp, directive] of directiveShortcuts) {
            if (rawName.match(regexp)) {
                name = `[${directive}]` + name.replace(regexp, '');
            }
        }
        if (!name.startsWith('[')) {
            return null; // There are no directives, regular attribute, skip
        }

        // There are directives... time to resolve them
        const { cleanWord, stripWord } = modulo.registry.utils; // TODO global modulo
        const arr = [];
        const attrName = stripWord((name.match(/\][^\]]+$/) || [ '' ])[0]);
        for (const directiveName of name.split(']').map(cleanWord)) {
            // Skip the bare name itself, and filter for valid directives
            if (directiveName !== attrName) {// && directiveName in directives) {
                arr.push({ attrName, rawName, directiveName, name })
            }
        }
        return arr;
    }

    loadString(rivalHTML, tagTransforms) {
        this.patches = [];
        const rival = modulo.registry.utils.makeDiv(rivalHTML);
        const transforms = Object.assign({}, this.tagTransforms, tagTransforms);
        this.applyLoadDirectives(rival, transforms);
        return rival;
    }

    reconcile(node, rival, tagTransforms) {
        // TODO: should normalize <!DOCTYPE html>
        if (typeof rival === 'string') {
            rival = this.loadString(rival, tagTransforms);
        }
        this.reconcileChildren(node, rival);
        this.cleanRecDirectiveMarks(node);
        return this.patches;
    }

    applyLoadDirectives(elem, tagTransforms) {
        this.patch = this.applyPatch; // Apply patches immediately
        for (const node of elem.querySelectorAll('*')) {
            // legacy -v, TODO rm
            const newTag = tagTransforms[node.tagName.toLowerCase()];
            //console.log('this is tagTransforms', tagTransforms);
            if (newTag) {
                modulo.registry.utils.transformTag(node, newTag);
            }
            ///////

            const lowerName = node.tagName.toLowerCase();
            if (lowerName in this.directives) {
                this.patchDirectives(node, `[${lowerName}]`, 'TagLoad');
            }

            for (const rawName of node.getAttributeNames()) {
                // Apply load-time directive patches
                this.patchDirectives(node, rawName, 'Load');
            }
        }
        this.markRecDirectives(elem); // TODO rm
        this.patch = this.pushPatch;
    }

    markRecDirectives(elem) {
        // TODO remove this after we reimplement [component.ignore]
        // Mark all children of modulo-ignore with mm-ignore
        for (const node of elem.querySelectorAll('[modulo-ignore] *')) {
            // TODO: Very important: also mark to ignore children that are
            // custom!
            node.setAttribute('mm-ignore', 'mm-ignore');
        }

        // TODO: hacky / leaky solution to attach like this
        //for (const rivalChild of elem.querySelectorAll('*')) {
        //    rivalChild.moduloDirectiveContext = this.directives;
        //}
    }

    cleanRecDirectiveMarks(elem) {
        // Remove all mm-ignores
        for (const node of elem.querySelectorAll('[mm-ignore]')) {
            node.removeAttribute('mm-ignore');
        }
    }

    applyPatches(patches) {
        patches.forEach(patch => this.applyPatch.apply(this, patch));
    }

    reconcileChildren(childParent, rivalParent) {
        // Nonstandard nomenclature: "The rival" is the node we wish to match
        const cursor = new modulo.registry.engines.DOMCursor(childParent, rivalParent);
        while (cursor.hasNext()) {
            const [ child, rival ] = cursor.next();
            const needReplace = child && rival && (
                child.nodeType !== rival.nodeType ||
                child.nodeName !== rival.nodeName
            ); // Does this node to be swapped out? Swap if exist but mismatched

            if ((child && !rival) || needReplace) { // we have more rival, delete child
                this.patchAndDescendants(child, 'Unmount');
                this.patch(cursor.parentNode, 'removeChild', child);
            }

            if (needReplace) { // do swap with insertBefore
                this.patch(cursor.parentNode, 'insertBefore', rival, child.nextSibling);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (!child && rival) { // we have less than rival, take rival
                // TODO: Possibly add directive resolution context to rival / child.originalChildren?
                this.patch(cursor.parentNode, 'appendChild', rival);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (child && rival && !needReplace) {
                // Both exist and are of same type, let's reconcile nodes
                if (child.nodeType !== 1) { // text or comment node
                    if (child.nodeValue !== rival.nodeValue) { // update
                        this.patch(child, 'node-value', rival.nodeValue);
                    }
                } else if (!child.isEqualNode(rival)) { // sync if not equal
                    this.reconcileAttributes(child, rival);
                    if (rival.hasAttribute('modulo-ignore')) {
                        // console.log('Skipping ignored node');
                    } else if (child.isModulo) { // is a Modulo component
                        // TODO: Possibly add directive resolution context to rival / child.originalChildren?
                        this.patch(child, 'rerender', rival);
                    } else if (!this.shouldNotDescend) {
                        cursor.saveToStack();
                        cursor.initialize(child, rival);
                    }
                }
            }
        }
    }

    pushPatch(node, method, arg, arg2 = null) {
        this.patches.push([ node, method, arg, arg2 ]);
    }

    applyPatch(node, method, arg, arg2) { // take that, rule of 3!
        //if (!node || !node[method]) { console.error('NO NODE:', node, method, arg, arg2) } // XXX
        if (method === 'node-value') {
            node.nodeValue = arg;
        } else if (method === 'insertBefore') {
            node.insertBefore(arg, arg2); // Needs 2 arguments
        } else if (method === 'attr-append') { // Append string to existing
            node.setAttribute(arg, (node.getAttribute(arg) || '') + arg2); // TODO: DEAD CODE
        } else if (method.startsWith('directive-')) {
            // TODO: Possibly, remove 'directive-' prefix, unnecessary
            method = method.substr('directive-'.length);
            node[method].call(node, arg); // invoke directive method
        } else {
            node[method].call(node, arg); // invoke method
        }
    }

    patchDirectives(el, rawName, suffix, copyFromEl = null) {
        const foundDirectives = this.parseDirectives(rawName, this.directiveShortcuts);
        if (!foundDirectives || foundDirectives.length === 0) {
            return;
        }

        const value = (copyFromEl || el).getAttribute(rawName); // Get value
        for (const directive of foundDirectives) {
            const dName = directive.directiveName; // e.g. "state.bind", "link"
            const fullName = dName + suffix; // e.g. "state.bindMount"

            // Hacky: Check if this elem has a different moduloDirectiveContext than expected
            //const directives = (copyFromEl || el).moduloDirectiveContext || this.directives;
            //if (el.moduloDirectiveContext) {
            //    console.log('el.moduloDirectiveContext', el.moduloDirectiveContext);
            //}
            const { directives } = this;

            const thisContext = directives[dName] || directives[fullName];
            if (thisContext) { // If a directive matches...
                const methodName = fullName.split('.')[1] || fullName;
                Object.assign(directive, { value, el });
                this.patch(thisContext, 'directive-' + methodName, directive);
            }
        }
    }

    reconcileAttributes(node, rival) {
        const myAttrs = new Set(node ? node.getAttributeNames() : []);
        const rivalAttributes = new Set(rival.getAttributeNames());

        // Check for new and changed attributes
        for (const rawName of rivalAttributes) {
            const attr = rival.getAttributeNode(rawName);
            if (myAttrs.has(rawName) && node.getAttribute(rawName) === attr.value) {
                continue; // Already matches, on to next
            }

            if (myAttrs.has(rawName)) { // If exists, trigger Unmount first
                this.patchDirectives(node, rawName, 'Unmount');
            }
            // Set attribute node, and then Mount based on rival value
            this.patch(node, 'setAttributeNode', attr.cloneNode(true));
            this.patchDirectives(node, rawName, 'Mount', rival);
        }

        // Check for old attributes that were removed
        for (const rawName of myAttrs) {
            if (!rivalAttributes.has(rawName)) {
                this.patchDirectives(node, rawName, 'Unmount');
                this.patch(node, 'removeAttribute', rawName);
            }
        }
    }

    patchAndDescendants(parentNode, actionSuffix) {
        if (parentNode.nodeType !== 1) { // cannot have descendants
            return;
        }
        let nodes = [ parentNode ]; // also, patch self (but last)
        if (!this.shouldNotDescend) {
            nodes = Array.from(parentNode.querySelectorAll('*')).concat(nodes);
        }
        for (let rival of nodes) { // loop through nodes to patch
            if (rival.hasAttribute('mm-ignore')) {
                // Skip any marked to ignore
                continue;
            }

            for (const rawName of rival.getAttributeNames()) {
                // Loop through each attribute patching foundDirectives as necessary
                this.patchDirectives(rival, rawName, actionSuffix);
            }
        }
    }
});

modulo.register('util', function getAutoExportNames(contents) {
    // TODO: Change exports/Directives/etc to def processor to better expose
    const regexpG = /(function|class)\s+(\w+)/g;
    const regexp2 = /(function|class)\s+(\w+)/; // hack, refactor
    return (contents.match(regexpG) || []).map(s => s.match(regexp2)[2])
        .filter(s => s && !Modulo.INVALID_WORDS.has(s));
});



modulo.assets.modules = window.moduloBuild.modules;
modulo.assets.nameToHash = window.moduloBuild.nameToHash;
modulo.definitions = window.moduloBuild.definitions;

modulo.assets.require("configuration");

modulo.assets.require("configuration1");

modulo.assets.require("library_configuration");

modulo.assets.require("library_Page");

modulo.assets.require("library_NavBar");

modulo.assets.require("library_MobileNavBar");

modulo.assets.require("library1_ContactForm");

