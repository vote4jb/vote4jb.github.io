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

window.moduloBuild.modules["x1qol96v"] = function configuration1 (modulo) {

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
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){return a.raw=a},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ka={a:!0},la={};try{la.__proto__=ka;ha=la.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=fa,oa=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wm=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.h=a;this.m=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.B={};this.C=!1;this.N={}},ua=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.B["dust."+a]};ta.prototype.set=function(a,b){this.C||(a="dust."+a,this.N.hasOwnProperty(a)||(this.B[a]=b))};
ta.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var va=function(a,b){b="dust."+b;a.C||a.N.hasOwnProperty(b)||delete a.B[b]};ta.prototype.nc=function(){this.C=!0};ta.prototype.Gf=function(){return this.C};var wa=function(a){this.m=new ta;this.h=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.h[Number(b)]=a[Number(b)]:this.m.set(b,a[b]))};aa=wa.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.h.length;c++){var d=this.h[c];null===d||void 0===d?b.push(""):d instanceof wa?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.h.length=Number(b)}else sa(a)?this.h[Number(a)]=b:this.m.set(a,b)};aa.get=function(a){return"length"===a?this.length():sa(a)?this.h[Number(a)]:this.m.get(a)};aa.length=function(){return this.h.length};aa.Rb=function(){for(var a=ua(this.m,1),b=0;b<this.h.length;b++)a.push(b+"");return new wa(a)};var xa=function(a,b){sa(b)?delete a.h[Number(b)]:va(a.m,b)};aa=wa.prototype;
aa.pop=function(){return this.h.pop()};aa.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.h.shift()};aa.splice=function(a,b,c){return new wa(this.h.splice.apply(this.h,arguments))};aa.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};aa.has=function(a){return sa(a)&&this.h.hasOwnProperty(a)||this.m.has(a)};aa.nc=function(){this.B=!0;Object.freeze(this.h);this.m.nc()};aa.Gf=function(){return this.B};var ya=function(){this.quota={}};ya.prototype.reset=function(){this.quota={}};var za=function(a,b){this.T=a;this.N=function(c,d,e){return c.apply(d,e)};this.B=b;this.m=new ta;this.h=this.C=void 0};za.prototype.add=function(a,b){Aa(this,a,b,!1)};var Aa=function(a,b,c,d){if(!a.m.Gf())if(d){var e=a.m;e.set(b,c);e.N["dust."+b]=!0}else a.m.set(b,c)};za.prototype.set=function(a,b){this.m.Gf()||(!this.m.has(a)&&this.B&&this.B.has(a)?this.B.set(a,b):this.m.set(a,b))};za.prototype.get=function(a){return this.m.has(a)?this.m.get(a):this.B?this.B.get(a):void 0};
za.prototype.has=function(a){return!!this.m.has(a)||!(!this.B||!this.B.has(a))};var Ba=function(a){var b=new za(a.T,a);a.C&&(b.C=a.C);b.N=a.N;b.h=a.h;return b};var Da=function(){},Fa=function(a){return"function"===typeof a},k=function(a){return"string"===typeof a},Ga=function(a){return"number"===typeof a&&!isNaN(a)},Ha=Array.isArray,Ia=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},l=function(a,
b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"===Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Oa=function(a){return Math.round(Number(a))||0},Pa=function(a){return"false"===String(a).toLowerCase()?!1:!!a},Qa=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ra=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Sa=function(){return new Date(Date.now())},
Ta=function(){return Sa().getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Wa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},$a=function(a,b){var c=z;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
b.indexOf(d))return}return d},ab=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},cb=/^\w{1,9}$/,db=function(a,b){a=a||{};b=b||",";var c=[];l(a,function(d,e){cb.test(d)&&e&&c.push(d)});return c.join(b)},eb=function(a,b){function c(){++d===b&&(e(),e=null,c.done=!0)}var d=0,e=a;c.done=!1;return c};var fb=function(a,b){ta.call(this);this.T=a;this.pb=b};oa(fb,ta);fb.prototype.toString=function(){return this.T};fb.prototype.Rb=function(){return new wa(ua(this,1))};fb.prototype.h=function(a,b){return this.pb.apply(new gb(this,a),Array.prototype.slice.call(arguments,1))};fb.prototype.m=function(a,b){try{return this.h.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var ib=function(a,b){for(var c,d=0;d<b.length&&!(c=hb(a,b[d]),c instanceof ra);d++);return c},hb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof fb))throw Error("Attempting to execute non-function "+b[0]+".");return c.h.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.C;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},gb=function(a,b){this.m=a;this.h=b},C=function(a,b){return Ha(b)?hb(a.h,b):b},F=function(a){return a.m.T};var jb=function(){ta.call(this)};oa(jb,ta);jb.prototype.Rb=function(){return new wa(ua(this,1))};var kb={map:function(a){for(var b=new jb,c=0;c<arguments.length-1;c+=2){var d=C(this,arguments[c])+"",e=C(this,arguments[c+1]);b.set(d,e)}return b},list:function(a){for(var b=new wa,c=0;c<arguments.length;c++){var d=C(this,arguments[c]);b.push(d)}return b},fn:function(a,b,c){var d=this.h,e=C(this,b);if(!(e instanceof wa))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);return new fb(a,function(){return function(g){var h=Ba(d);void 0===
h.h&&(h.h=this.h.h);for(var m=Array.prototype.slice.call(arguments,0),n=0;n<m.length;n++)if(m[n]=C(this,m[n]),m[n]instanceof ra)return m[n];for(var p=e.get("length"),q=0;q<p;q++)q<m.length?h.add(e.get(q),m[q]):h.add(e.get(q),void 0);h.add("arguments",new wa(m));var r=ib(h,f);if(r instanceof ra)return"return"===r.h?r.m:r}}())},control:function(a,b){return new ra(a,C(this,b))},undefined:function(){}};var lb=function(){this.B=new ya;this.h=new za(this.B)},mb=function(a,b,c){var d=new fb(b,c);d.nc();a.h.set(b,d)},nb=function(a,b,c){kb.hasOwnProperty(b)&&mb(a,c||b,kb[b])};lb.prototype.execute=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.m(c)};lb.prototype.m=function(a){for(var b,c=0;c<arguments.length;c++)b=hb(this.h,arguments[c]);return b};lb.prototype.C=function(a,b){var c=Ba(this.h);c.h=a;for(var d,e=1;e<arguments.length;e++)d=hb(c,arguments[e]);return d};function ob(){for(var a=pb,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qb(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var pb,rb;function sb(a){pb=pb||qb();rb=rb||ob();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,m=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(pb[m],pb[n],pb[p],pb[q])}return b.join("")}
function tb(a){function b(m){for(;d<a.length;){var n=a.charAt(d++),p=rb[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return m}pb=pb||qb();rb=rb||ob();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var ub={},vb=function(a,b){ub[a]=ub[a]||[];ub[a][b]=!0},wb=function(){delete ub.GA4_EVENT},xb=function(a){var b=ub[a];if(!b||0===b.length)return"";for(var c=[],d=0,e=0;e<b.length;e++)0===e%8&&0<e&&(c.push(String.fromCharCode(d)),d=0),b[e]&&(d|=1<<e%8);0<d&&c.push(String.fromCharCode(d));return sb(c.join("")).replace(/\.+$/,"")};var yb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var zb,Ab=function(){if(void 0===zb){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}zb=a}else zb=a}return zb};var Bb=function(a){this.h=a};Bb.prototype.toString=function(){return this.h+""};var Cb=function(a){return a instanceof Bb&&a.constructor===Bb?a.h:"type_error:TrustedResourceUrl"},Db={},Eb=function(a){var b=a,c=Ab(),d=c?c.createScriptURL(b):b;return new Bb(d,Db)};var Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Gb,Hb;a:{for(var Ib=["CLOSURE_FLAGS"],Jb=pa,Kb=0;Kb<Ib.length;Kb++)if(Jb=Jb[Ib[Kb]],null==Jb){Hb=null;break a}Hb=Jb}var Lb=Hb&&Hb[610401301];Gb=null!=Lb?Lb:!1;function Mb(){var a=pa.navigator;if(a){var b=a.userAgent;if(b)return b}return""}var Nb,Ob=pa.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Gb?Nb?Nb.brands.some(function(b){var c=b.brand;return c&&-1!=c.indexOf(a)}):!1:!1}function Qb(a){return-1!=Mb().indexOf(a)};function Rb(){return Gb?!!Nb&&0<Nb.brands.length:!1}function Sb(){return Rb()?!1:Qb("Opera")}function Tb(){return Qb("Firefox")||Qb("FxiOS")}function Ub(){return Rb()?Pb("Chromium"):(Qb("Chrome")||Qb("CriOS"))&&!(Rb()?0:Qb("Edge"))||Qb("Silk")};var Vb={},Wb=function(a){this.h=a};Wb.prototype.toString=function(){return this.h.toString()};var Xb=function(a){return a instanceof Wb&&a.constructor===Wb?a.h:"type_error:SafeHtml"};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Yb={};var Zb=function(){},$b=function(a){this.h=a};oa($b,Zb);$b.prototype.toString=function(){return this.h};function ac(a,b){var c=[new $b(bc[0].toLowerCase(),Yb)];if(0===c.length)throw Error("");var d=c.map(function(f){var g;if(f instanceof $b)g=f.h;else throw Error("");return g}),e=b.toLowerCase();if(d.every(function(f){return 0!==e.indexOf(f)}))throw Error('Attribute "'+b+'" does not match any of the allowed prefixes.');a.setAttribute(b,"true")}function cc(a){var b=a.tagName;if("SCRIPT"===b||"STYLE"===b)throw Error("");};(function(){return""}).toString().indexOf("`");function dc(a){var b=a=ec(a),c=Ab(),d=c?c.createHTML(b):b;return new Wb(d,Vb)}function ec(a){return null===a?"null":void 0===a?"undefined":a};var z=window,H=document,fc=navigator,gc=H.currentScript&&H.currentScript.src,hc=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},kc={onload:1,src:1,width:1,height:1,style:1};function lc(a,b,c){b&&l(b,function(d,e){d=d.toLowerCase();c.hasOwnProperty(d)||a.setAttribute(d,e)})}
var mc=function(a,b,c,d,e){var f=H.createElement("script");lc(f,d,jc);f.type="text/javascript";f.async=!0;var g;g=Eb(ec(a));f.src=Cb(g);var h,m,n,p=null==(n=(m=(f.ownerDocument&&f.ownerDocument.defaultView||window).document).querySelector)?void 0:n.call(m,"script[nonce]");(h=p?p.nonce||p.getAttribute("nonce")||"":"")&&f.setAttribute("nonce",h);ic(f,b);c&&(f.onerror=c);if(e)e.appendChild(f);else{var q=H.getElementsByTagName("script")[0]||H.body||H.head;q.parentNode.insertBefore(f,q)}return f},nc=function(){if(gc){var a=
gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},oc=function(a,b,c,d,e){var f;f=void 0===f?!0:f;var g=e,h=!1;g||(g=H.createElement("iframe"),h=!0);lc(g,c,kc);d&&l(d,function(n,p){g.dataset[n]=p});f&&(g.height="0",g.width="0",g.style.display="none",g.style.visibility="hidden");if(h){var m=H.body&&H.body.lastChild||H.body||H.head;m.parentNode.insertBefore(g,m)}ic(g,b);void 0!==a&&(g.src=a);return g},pc=function(a,b,c,d){var e=new Image(1,1);lc(e,
d,{});e.onload=function(){e.onload=null;b&&b()};e.onerror=function(){e.onerror=null;c&&c()};e.src=a},qc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},rc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){z.setTimeout(a,0)},sc=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},tc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=
b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},uc=function(a){var b=H.createElement("div"),c=b,d=dc("A<div>"+a+"</div>");1===c.nodeType&&cc(c);c.innerHTML=Xb(d);b=b.lastChild;for(var e=[];b.firstChild;)e.push(b.removeChild(b.firstChild));return e},vc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},wc=function(a){var b;
try{b=fc.sendBeacon&&fc.sendBeacon(a)}catch(c){vb("TAGGING",15)}b||pc(a)},xc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c},yc=function(a,b){try{z.fetch(a,b)}catch(c){}},zc=function(){var a=z.performance;if(a&&Fa(a.now))return a.now()},Ac=function(){return z.performance||void 0};var Bc=function(a,b){return C(this,a)&&C(this,b)},Cc=function(a,b){return C(this,a)===C(this,b)},Dc=function(a,b){return C(this,a)||C(this,b)},Gc=function(a,b){a=C(this,a);b=C(this,b);return-1<String(a).indexOf(String(b))},Hc=function(a,b){a=String(C(this,a));b=String(C(this,b));return a.substring(0,b.length)===b},Ic=function(a,b){a=C(this,a);b=C(this,b);switch(a){case "pageLocation":var c=z.location.href;b instanceof jb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var Kc=function(){this.h=new lb;Jc(this)};Kc.prototype.execute=function(a){return this.h.m(a)};var Jc=function(a){nb(a.h,"map");var b=function(c,d){mb(a.h,c,d)};b("and",Bc);b("contains",Gc);b("equals",Cc);b("or",Dc);b("startsWith",Hc);b("variable",Ic)};var Lc=function(){this.map=new Map};Lc.prototype.set=function(a,b){this.map.set(a,b)};Lc.prototype.get=function(a){return this.map.get(a)};var Mc=function(){this.keys=[];this.values=[]};Mc.prototype.set=function(a,b){this.keys.push(a);this.values.push(b)};Mc.prototype.get=function(a){var b=this.keys.indexOf(a);if(-1<b)return this.values[b]};var Nc=function(a){if(a instanceof Nc)return a;this.Ua=a};Nc.prototype.toString=function(){return String(this.Ua)};var Pc=function(a){ta.call(this);this.h=a;this.set("then",Oc(this));this.set("catch",Oc(this,!0));this.set("finally",Oc(this,!1,!0))};oa(Pc,jb);var Oc=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;return new fb("",function(d,e){b&&(e=d,d=void 0);c&&(e=d);d instanceof fb||(d=void 0);e instanceof fb||(e=void 0);var f=Ba(this.h),g=function(m){return function(n){return c?(m.h(f),a.h):m.h(f,n)}},h=a.h.then(d&&g(d),e&&g(e));return new Pc(h)})};/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Qc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Rc=function(a){if(null==a)return String(a);var b=Qc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sc=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Tc=function(a){if(!a||"object"!=Rc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sc(a,"constructor")&&!Sc(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sc(a,b)},Uc=function(a,b){var c=b||("array"==Rc(a)?[]:{}),d;for(d in a)if(Sc(a,d)){var e=a[d];"array"==Rc(e)?("array"!=Rc(c[d])&&(c[d]=[]),c[d]=Uc(e,c[d])):Tc(e)?(Tc(c[d])||(c[d]={}),c[d]=Uc(e,c[d])):c[d]=e}return c};var Wc=function(a,b,c){var d=Map?new Lc:new Mc,e=function(g,h){for(var m=ua(g,1),n=0;n<m.length;n++)h[m[n]]=f(g.get(m[n]))},f=function(g){var h=d.get(g);if(h)return h;if(g instanceof wa){var m=[];d.set(g,m);for(var n=g.Rb(),p=0;p<n.length();p++)m[n.get(p)]=f(g.get(n.get(p)));return m}if(g instanceof Pc)return g.h;if(g instanceof jb){var q={};d.set(g,q);e(g,q);return q}if(g instanceof fb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Vc(u[v],b,c);var w=
new za(b?b.T:new ya);b&&(w.h=b.h);return f(g.h.apply(g,[w].concat(u)))};d.set(g,r);e(g,r);return r}var t=!1;switch(c){case 1:t=!0;break;case 2:t=!1;break;case 3:t=!1;break;default:}if(g instanceof Nc&&t)return g.Ua;switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},Vc=function(a,b,c){var d=Map?
new Lc:new Mc,e=function(g,h){for(var m in g)g.hasOwnProperty(m)&&h.set(m,f(g[m]))},f=function(g){var h=d.get(g);if(h)return h;if(Ha(g)||Na(g)){var m=new wa([]);d.set(g,m);for(var n in g)g.hasOwnProperty(n)&&m.set(n,f(g[n]));return m}if(Tc(g)){var p=new jb;d.set(g,p);e(g,p);return p}if("function"===typeof g){var q=new fb("",function(x){for(var y=Array.prototype.slice.call(arguments,0),A=0;A<y.length;A++)y[A]=Wc(C(this,y[A]),b,c);return f((0,this.h.N)(g,g,y))});d.set(g,q);e(g,q);return q}var v=typeof g;if(null===g||"string"===v||"number"===v||"boolean"===v)return g;var w=!1;switch(c){case 1:w=!0;break;case 2:w=!1;break;default:}if(void 0!==g&&w)return new Nc(g)};return f(a)};var Xc=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Yc=function(a){if(void 0===a||Ha(a)||Tc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Zc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof wa)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new wa(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.h(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.h(a,this.get(e),e,this)&&d.push(this.get(e));return new wa(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.h(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.h(a,this.get(e),e,this));return new wa(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.h(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.h(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Xc(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new wa(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.h(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Xc(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.h(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d);return this},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ad={charAt:1,concat:1,indexOf:1,lastIndexOf:1,match:1,replace:1,search:1,slice:1,split:1,substring:1,toLowerCase:1,toLocaleLowerCase:1,toString:1,toUpperCase:1,toLocaleUpperCase:1,trim:1},bd=new ra("break"),cd=new ra("continue"),dd=function(a,b){return C(this,a)+C(this,b)},ed=function(a,b){return C(this,a)&&C(this,b)},fd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);if(!(c instanceof wa))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");var d="number"===typeof a;if("boolean"===typeof a||d){if("toString"===b){if(d&&c.length()){var e=Wc(c.get(0));try{return a.toString(e)}catch(r){}}return a.toString()}throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(ad.hasOwnProperty(b)){var f=2;f=1;var g=Wc(c,void 0,f);return Vc(a[b].apply(a,g),this.h)}throw Error("TypeError: "+
b+" is not a function");}if(a instanceof wa){if(a.has(b)){var h=a.get(b);if(h instanceof fb){var m=Xc(c);m.unshift(this.h);return h.h.apply(h,m)}throw Error("TypeError: "+b+" is not a function");}if(0<=Zc.supportedMethods.indexOf(b)){var n=Xc(c);n.unshift(this.h);return Zc[b].apply(a,n)}}if(a instanceof fb||a instanceof jb){if(a.has(b)){var p=a.get(b);if(p instanceof fb){var q=Xc(c);q.unshift(this.h);return p.h.apply(p,q)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof
fb?a.T:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Xc(c))}if(a instanceof Nc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},gd=function(a,b){a=C(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.h;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=C(this,b);c.set(a,d);return d},hd=function(a){var b=Ba(this.h),c=ib(b,Array.prototype.slice.apply(arguments));if(c instanceof
ra)return c},id=function(){return bd},jd=function(a){for(var b=C(this,a),c=0;c<b.length;c++){var d=C(this,b[c]);if(d instanceof ra)return d}},kd=function(a){for(var b=this.h,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=C(this,arguments[c+1]);Aa(b,d,e,!0)}}},ld=function(){return cd},md=function(a,b,c){var d=new wa;b=C(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h.add(a,C(this,
f))},nd=function(a,b){return C(this,a)/C(this,b)},od=function(a,b){a=C(this,a);b=C(this,b);var c=a instanceof Nc,d=b instanceof Nc;return c||d?c&&d?a.Ua==b.Ua:!1:a==b},pd=function(a){for(var b,c=0;c<arguments.length;c++)b=C(this,arguments[c]);return b};function qd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ib(f,d);if(g instanceof ra){if("break"===g.h)break;if("return"===g.h)return g}}}
function rd(a,b,c){if("string"===typeof b)return qd(a,function(){return b.length},function(f){return f},c);if(b instanceof jb||b instanceof wa||b instanceof fb){var d=b.Rb(),e=d.length();return qd(a,function(){return e},function(f){return d.get(f)},c)}}
var sd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return rd(function(e){d.set(a,e);return d},b,c)},td=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return rd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},ud=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return rd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},wd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return vd(function(e){d.set(a,e);return d},b,c)},xd=
function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return vd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},yd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return vd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)};
function vd(a,b,c){if("string"===typeof b)return qd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof wa)return qd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var zd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=C(this,a);if(!(f instanceof wa))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.h;d=C(this,d);var h=Ba(g);for(e(g,h);hb(h,b);){var m=ib(h,d);if(m instanceof ra){if("break"===m.h)break;if("return"===m.h)return m}var n=Ba(g);e(h,n);hb(n,c);h=n}},Ad=function(a){a=C(this,a);var b=this.h,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},Bd=function(a,b){var c;a=C(this,a);b=C(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof jb||a instanceof wa||a instanceof fb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof Nc)return;return c},Cd=function(a,b){return C(this,a)>C(this,
b)},Dd=function(a,b){return C(this,a)>=C(this,b)},Ed=function(a,b){a=C(this,a);b=C(this,b);a instanceof Nc&&(a=a.Ua);b instanceof Nc&&(b=b.Ua);return a===b},Fd=function(a,b){return!Ed.call(this,a,b)},Gd=function(a,b,c){var d=[];C(this,a)?d=C(this,b):c&&(d=C(this,c));var e=ib(this.h,d);if(e instanceof ra)return e},Hd=function(a,b){return C(this,a)<C(this,b)},Id=function(a,b){return C(this,a)<=C(this,b)},Jd=function(a,b){return C(this,a)%C(this,b)},Kd=function(a,b){return C(this,a)*C(this,b)},Ld=function(a){return-C(this,
a)},Md=function(a){return!C(this,a)},Nd=function(a,b){return!od.call(this,a,b)},Od=function(){return null},Pd=function(a,b){return C(this,a)||C(this,b)},Qd=function(a,b){var c=C(this,a);C(this,b);return c},Rd=function(a){return C(this,a)},Sd=function(a){return Array.prototype.slice.apply(arguments)},Td=function(a){return new ra("return",C(this,a))},Ud=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
fb||a instanceof wa||a instanceof jb)&&a.set(b,c);return c},Vd=function(a,b){return C(this,a)-C(this,b)},Wd=function(a,b,c){a=C(this,a);var d=C(this,b),e=C(this,c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===C(this,d[h]))if(f=C(this,e[h]),f instanceof ra){var m=f.h;if("break"===m)return;if("return"===m||"continue"===m)return f}else g=!0;if(e.length===d.length+1&&(f=C(this,e[e.length-1]),f instanceof ra&&("return"===f.h||"continue"===
f.h)))return f},Xd=function(a,b,c){return C(this,a)?C(this,b):C(this,c)},Yd=function(a){a=C(this,a);return a instanceof fb?"function":typeof a},Zd=function(a){for(var b=this.h,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},$d=function(a,b,c,d){var e=C(this,d);if(C(this,c)){var f=ib(this.h,e);if(f instanceof ra){if("break"===f.h)return;if("return"===f.h)return f}}for(;C(this,a);){var g=ib(this.h,e);if(g instanceof ra){if("break"===g.h)break;if("return"===g.h)return g}C(this,
b)}},ce=function(a){return~Number(C(this,a))},de=function(a,b){return Number(C(this,a))<<Number(C(this,b))},ee=function(a,b){return Number(C(this,a))>>Number(C(this,b))},fe=function(a,b){return Number(C(this,a))>>>Number(C(this,b))},ge=function(a,b){return Number(C(this,a))&Number(C(this,b))},he=function(a,b){return Number(C(this,a))^Number(C(this,b))},ie=function(a,b){return Number(C(this,a))|Number(C(this,b))};var ke=function(){this.h=new lb;je(this)};ke.prototype.execute=function(a){return le(this.h.m(a))};
var me=function(a,b,c){return le(a.h.C(b,c))},je=function(a){var b=function(d,e){nb(a.h,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){mb(a.h,String(d),e)};c(0,dd);c(1,ed);c(2,fd);c(3,gd);c(53,hd);c(4,id);c(5,jd);c(52,kd);c(6,ld);c(9,jd);c(50,md);c(10,nd);c(12,od);c(13,pd);c(47,sd);c(54,td);c(55,ud);c(63,zd);c(64,wd);c(65,xd);c(66,yd);c(15,Ad);c(16,Bd);c(17,Bd);c(18,Cd);c(19,Dd);c(20,Ed);c(21,Fd);c(22,Gd);c(23,Hd);c(24,Id);c(25,Jd);c(26,Kd);c(27,
Ld);c(28,Md);c(29,Nd);c(45,Od);c(30,Pd);c(32,Qd);c(33,Qd);c(34,Rd);c(35,Rd);c(46,Sd);c(36,Td);c(43,Ud);c(37,Vd);c(38,Wd);c(39,Xd);c(40,Yd);c(41,Zd);c(42,$d);c(58,ce);c(57,de);c(60,ee);c(61,fe);c(56,ge);c(62,he);c(59,ie)};function le(a){if(a instanceof ra||a instanceof fb||a instanceof wa||a instanceof jb||a instanceof Nc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var ne=function(){var a=function(b){return{toString:function(){return b}}};return{Cj:a("consent"),Nh:a("convert_case_to"),Oh:a("convert_false_to"),Ph:a("convert_null_to"),Qh:a("convert_true_to"),Rh:a("convert_undefined_to"),hm:a("debug_mode_metadata"),Qb:a("function"),Ig:a("instance_name"),ik:a("live_only"),jk:a("malware_disabled"),kk:a("metadata"),nk:a("original_activity_id"),km:a("original_vendor_template_id"),jm:a("once_on_load"),mk:a("once_per_event"),Ji:a("once_per_load"),mm:a("priority_override"),
nm:a("respected_consent_types"),Ni:a("setup_tags"),ce:a("tag_id"),Si:a("teardown_tags")}}();var Je;
var Ke=[],Le=[],Me=[],Ne=[],Oe=[],Pe={},Qe,Re,Te=function(){var a=Se;Re=Re||a},Ue,Ve=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},We=function(a,b){var c=a["function"],d=b&&b.event;if(!c)throw Error("Error: No function name given for function call.");var e=Pe[c],f={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e&&d&&d.Xi&&d.Xi(a[g]),f[void 0!==e?g:g.substr(4)]=a[g]);e&&d&&d.Wi&&(f.vtp_gtmCachedValues=d.Wi);if(b){if(null==
b.name){var h;a:{var m=b.index;if(null==m)h="";else{var n;switch(b.type){case 2:n=Ke[m];break;case 1:n=Ne[m];break;default:h="";break a}var p=n&&n[ne.Ig];h=p?String(p):""}}b.name=h}e&&(f.vtp_gtmEntityIndex=b.index,f.vtp_gtmEntityName=b.name)}return void 0!==e?e(f):Je(c,f,b)},Ye=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Xe(a[e],b,c));return d},Xe=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xe(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Ke[f];if(!g||b.fh(g))return;c[f]=!0;var h=String(g[ne.Ig]);try{var m=Ye(g,b,c);m.vtp_gtmEventId=b.id;b.priorityId&&(m.vtp_gtmPriorityId=b.priorityId);d=We(m,{event:b,index:f,type:2,name:h});Ue&&(d=Ue.zk(d,m))}catch(y){b.ij&&b.ij(y,Number(f),h),d=!1}c[f]=!1;return d;case "map":d={};for(var n=1;n<a.length;n+=2)d[Xe(a[n],b,c)]=Xe(a[n+1],b,c);return d;case "template":d=[];for(var p=!1,q=1;q<a.length;q++){var r=Xe(a[q],b,c);Re&&(p=p||r===Re.kf);
d.push(r)}return Re&&p?Re.Ak(d):d.join("");case "escape":d=Xe(a[1],b,c);if(Re&&Ha(a[1])&&"macro"===a[1][0]&&Re.bl(a))return Re.El(d);d=String(d);for(var t=2;t<a.length;t++)oe[a[t]]&&(d=oe[a[t]](d));return d;case "tag":var u=a[1];if(!Ne[u])throw Error("Unable to resolve tag reference "+u+".");return d={cj:a[2],index:u};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var w=Ze(v,b,c),x=!!a[4];return x||2!==w?x!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+
a[0]+".");}}return a},Ze=function(a,b,c){try{return Qe(Ye(a,b,c))}catch(d){JSON.stringify(a)}return 2};var $e=function(a,b,c){var d;d=Error.call(this,c);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.h=a};oa($e,Error);function af(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)af(a[c],b[c])}};var bf=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.Al=a;this.m=b;this.h=[]};oa(bf,Error);var df=function(){return function(a,b){a instanceof bf||(a=new bf(a,cf));b&&a.h.push(b);throw a;}};function cf(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var gf=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=ef(a),f=0;f<Le.length;f++){var g=Le[f],h=ff(g,e);if(h){for(var m=g.add||[],n=0;n<m.length;n++)c[m[n]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Ne.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},ff=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},ef=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ze(Me[c],a));return b[c]}};var hf={zk:function(a,b){b[ne.Nh]&&"string"===typeof a&&(a=1==b[ne.Nh]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ne.Ph)&&null===a&&(a=b[ne.Ph]);b.hasOwnProperty(ne.Rh)&&void 0===a&&(a=b[ne.Rh]);b.hasOwnProperty(ne.Qh)&&!0===a&&(a=b[ne.Qh]);b.hasOwnProperty(ne.Oh)&&!1===a&&(a=b[ne.Oh]);return a}};var jf=function(){this.h={}};function kf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new $e(c,d,g);}}function lf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.h[d],f=a.h.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));kf(e,b,d,g);kf(f,b,d,g)}}}};var of=function(){var a=data.permissions||{},b=K.D,c=this;this.m=new jf;this.h={};var d={},e=lf(this.m,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});l(a,function(f,g){var h={};l(g,function(m,n){var p=mf(m,n);h[m]=p.assert;d[m]||(d[m]=p.X)});c.h[f]=function(m,n){var p=h[m];if(!p)throw nf(m,{},"The requested permission "+m+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},qf=function(a){return pf.h[a]||
function(){}};function mf(a,b){var c=Ve(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=nf;try{return We(c)}catch(d){return{assert:function(e){throw new $e(e,{},"Permission "+e+" is unknown.");},X:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function nf(a,b,c){return new $e(a,b,c)};var rf=!1;var sf={};sf.gm=Pa('');sf.Ck=Pa('');var tf=rf,uf=sf.Ck,vf=sf.gm;var wf=function(a,b){var c=String(a);return c};
var Bf=function(a){var b={},c=0;l(a,function(e,f){if(null!=f)if(f=wf(f,100),xf.hasOwnProperty(e))b[xf[e]]=yf(f);else if(zf.hasOwnProperty(e)){var g=zf[e],h=yf(f);b.hasOwnProperty(g)||(b[g]=h)}else if("category"===e)for(var m=yf(f).split("/",5),n=0;n<m.length;n++){var p=Af[n],q=m[n];b.hasOwnProperty(p)||(b[p]=q)}else if(27>c){var r=String.fromCharCode(10>c?48+c:65+c-10);b["k"+r]=yf(wf(e,40));b["v"+r]=yf(f);c++}});var d=[];l(b,function(e,f){d.push(""+e+f)});return d.join("~")},yf=function(a){return(""+
a).replace(/~/g,function(){return"~~"})},xf={item_id:"id",item_name:"nm",item_brand:"br",item_category:"ca",item_category2:"c2",item_category3:"c3",item_category4:"c4",item_category5:"c5",item_variant:"va",price:"pr",quantity:"qt",coupon:"cp",item_list_name:"ln",index:"lp",item_list_id:"li",discount:"ds",affiliation:"af",promotion_id:"pi",promotion_name:"pn",creative_name:"cn",creative_slot:"cs",location_id:"lo"},zf={id:"id",name:"nm",brand:"br",variant:"va",list_name:"ln",list_position:"lp",list:"ln",
position:"lp",creative:"cn"},Af=["ca","c2","c3","c4","c5"];var Cf=function(a){var b=[];l(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(String(d)))});return b.join("&")},Df=function(a,b,c,d){this.Sa=a.Sa;this.vc=a.vc;this.Xg=a.Xg;this.m=b;this.C=c;this.B=Cf(a.Sa);this.h=Cf(a.Xg);this.N=this.h.length;if(d&&16384<this.N)throw Error("EVENT_TOO_LARGE");};var Ef=function(){this.events=[];this.h=this.Sa="";this.B=0;this.m=!1};Ef.prototype.add=function(a){return this.C(a)?(this.events.push(a),this.Sa=a.B,this.h=a.m,this.B+=a.N,this.m=a.C,!0):!1};Ef.prototype.C=function(a){var b=20>this.events.length&&16384>a.N+this.B,c=this.Sa===a.B&&this.h===a.m&&this.m===a.C;return 0==this.events.length||b&&c};
var Ff=function(a,b){l(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))})},Gf=function(a,b){var c=[];a.B&&c.push(a.B);b&&c.push("_s="+b);Ff(a.vc,c);var d=!1;a.h&&(c.push(a.h),d=!0);var e=c.join("&"),f="",g=e.length+a.m.length+1;d&&2048<g&&(f=c.pop(),e=c.join("&"));return{th:e,body:f}},Hf=function(a,b){var c=a.events;if(1==c.length)return Gf(c[0],b);var d=[];a.Sa&&d.push(a.Sa);for(var e={},f=0;f<c.length;f++)l(c[f].vc,function(t,u){null!=u&&(e[t]=e[t]||{},e[t][String(u)]=
e[t][String(u)]+1||1)});var g={};l(e,function(t,u){var v,w=-1,x=0;l(u,function(y,A){x+=A;var B=(y.length+t.length+2)*(A-1);B>w&&(v=y,w=B)});x==c.length&&(g[t]=v)});Ff(g,d);b&&d.push("_s="+b);for(var h=d.join("&"),m=[],n={},p=0;p<c.length;n={Je:n.Je},p++){var q=[];n.Je={};l(c[p].vc,function(t){return function(u,v){g[u]!=""+v&&(t.Je[u]=v)}}(n));c[p].h&&q.push(c[p].h);Ff(n.Je,q);m.push(q.join("&"))}var r=m.join("\r\n");return{th:h,body:r}};var Lf=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];function Mf(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c}var Nf=new La;function Of(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Nf.get(e);f||(f=new RegExp(b,d),Nf.set(e,f));return f.test(a)}catch(g){return!1}}function Pf(a,b){return 0<=String(a).indexOf(String(b))}function Qf(a,b){return String(a)===String(b)}
function Rf(a,b){return Number(a)>=Number(b)}function Sf(a,b){return Number(a)<=Number(b)}function Tf(a,b){return Number(a)>Number(b)}function Uf(a,b){return Number(a)<Number(b)}function Vf(a,b){return 0===String(a).indexOf(String(b))};var bg=/^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;function cg(a,b){return"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a<<2|b]};var dg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,eg={Fn:"function",DustMap:"Object",List:"Array"},L=function(a,b,c){for(var d=0;d<b.length;d++){var e=dg.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],m=c[d];if(null==m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof m;m instanceof fb?n="Fn":m instanceof wa?n="List":m instanceof jb?n="DustMap":m instanceof Nc&&(n="OpaqueValue");
if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+(eg[n]||n)+", which does not match required type "+(eg[h]||h)+".");}}};function fg(a){return""+a}
function gg(a,b){var c=[];return c};var hg=function(a,b){var c=new fb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=C(this,d[e]);return b.apply(this,d)});c.nc();return c},kg=function(a,b){var c=new jb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,hg(a+"_"+d,e)):Tc(e)?c.set(d,kg(a+"_"+d,e)):(Ga(e)||k(e)||"boolean"===typeof e)&&c.set(d,e)}c.nc();
return c};var lg=function(a,b){L(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new jb;return d=kg("AssertApiSubject",c)};var mg=function(a,b){L(F(this),["actual:?*","message:?string"],arguments);if(a instanceof Pc)throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");var c={},d=new jb;return d=kg("AssertThatSubject",c)};function ng(a){return function(){for(var b=[],c=this.h,d=0;d<arguments.length;++d)b.push(Wc(arguments[d],c));return Vc(a.apply(null,b))}}var pg=function(){for(var a=Math,b=og,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=ng(a[e].bind(a)))}return c};function qg(a,b){var c=null;L(F(this),["pattern:!string","flags:?string"],arguments);try{var d=(b||"").split("").filter(function(e){return"ig".includes(e)}).join("");c=new Nc(new RegExp(a,d))}catch(e){}return c}qg.M="internal.createRegExp";var rg=function(a){var b;return b};var sg=function(a){var b;return b};var tg=function(a){return encodeURI(a)};var ug=function(a){return encodeURIComponent(a)};function vg(a,b){var c=!1;L(F(this),["booleanExpression:!string","context:?DustMap"],arguments);var d=JSON.parse(a);if(!d)throw Error("Invalid boolean expression string was given.");var e=b?Wc(b):{};c=wg(d,e);return c}
var xg=function(a,b){for(var c=0;c<b.length;c++){if(void 0===a)return;a=a[b[c]]}return a},yg=function(a,b){var c=b.preHit;if(c){var d=a[0];switch(d){case "hitData":return 2>a.length?void 0:xg(c.getHitData(a[1]),a.slice(2));case "metadata":return 2>a.length?void 0:xg(c.getMetadata(a[1]),a.slice(2));case "eventName":return c.getEventName();case "destinationId":return c.getDestinationId();default:throw Error(d+" is not a valid field that can be accessed\n                      from PreHit data.");}}},
zg=function(a,b){if(a){if(void 0!==a.contextValue){var c;a:{var d=a.contextValue,e=d.keyParts;if(e&&0!==e.length){var f=d.namespaceType;switch(f){case 1:c=yg(e,b);break a;case 2:var g=b.macro;c=g?g[e[0]]:void 0;break a;default:throw Error("Unknown Namespace Type used: "+f);}}c=void 0}return c}if(void 0!==a.booleanExpressionValue)return wg(a.booleanExpressionValue,b);if(void 0!==a.booleanValue)return!!a.booleanValue;if(void 0!==a.stringValue)return String(a.stringValue);if(void 0!==a.integerValue)return Number(a.integerValue);
if(void 0!==a.doubleValue)return Number(a.doubleValue);throw Error("Unknown field used for variable of type ExpressionValue:"+a);}},wg=function(a,b){var c=a.args;if(!Ha(c)||0===c.length)throw Error('Invalid boolean expression format. Expected "args":'+c+" property to\n         be non-empty array.");var d=function(g){return zg(g,b)};switch(a.type){case 1:for(var e=0;e<c.length;e++)if(d(c[e]))return!0;return!1;case 2:for(var f=0;f<c.length;f++)if(!d(c[f]))return!1;return 0<c.length;case 3:return!d(c[0]);
case 4:return Of(d(c[0]),d(c[1]),!1);case 5:return Qf(d(c[0]),d(c[1]));case 6:return Vf(d(c[0]),d(c[1]));case 7:return Mf(d(c[0]),d(c[1]));case 8:return Pf(d(c[0]),d(c[1]));case 9:return Uf(d(c[0]),d(c[1]));case 10:return Sf(d(c[0]),d(c[1]));case 11:return Tf(d(c[0]),d(c[1]));case 12:return Rf(d(c[0]),d(c[1]));default:throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');}};
vg.M="internal.evaluateBooleanExpression";var Ag=function(a){L(F(this),["message:?string"],arguments);};var Bg=function(a,b){L(F(this),["min:!number","max:!number"],arguments);return Ka(a,b)};var M=function(a,b,c){var d=a.h.h;if(!d)throw Error("Missing program state.");d.xk.apply(null,Array.prototype.slice.call(arguments,1))};var Cg=function(){M(this,"read_container_data");var a=new jb;a.set("containerId",'G-6ZT8F1MF6V');a.set("version",'1');a.set("environmentName",'');a.set("debugMode",tf);a.set("previewMode",vf);a.set("environmentMode",uf);a.nc();return a};var Dg=function(){return(new Date).getTime()};var Eg=function(a){if(null===a)return"null";if(a instanceof wa)return"array";if(a instanceof fb)return"function";if(a instanceof Nc){a=a.Ua;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Fg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(tf||vf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Vc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Wc(c))})}};var Gg=function(a){return Oa(Wc(a,this.h))};var Hg=function(a){return Number(Wc(a,this.h))};var Ig=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Jg=function(a,b,c){var d=null,e=!1;return e?d:null};var og="floor ceil round max min abs pow sqrt".split(" ");var Kg=function(){var a={};return{Mk:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Vl:function(b,c){a[b]=c},reset:function(){a={}}}},Lg=function(a,b){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(b);return fb.prototype.h.apply(a,c)}},Mg=function(a,b){L(F(this),["apiName:!string","mock:?*"],arguments);};var Ng={};
Ng.keys=function(a){return new wa};
Ng.values=function(a){return new wa};
Ng.entries=function(a){return new wa};
Ng.freeze=function(a){return a};Ng.delete=function(a,b){return!1};var Pg=function(){this.h={};this.m={};};Pg.prototype.get=function(a,b){var c=this.h.hasOwnProperty(a)?this.h[a]:void 0;return c};
Pg.prototype.add=function(a,b,c){if(this.h.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.m.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.h[a]=c?void 0:Fa(b)?hg(a,b):kg(a,b)};
var Rg=function(a,b,c){if(a.m.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.h.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.m[b]=Fa(c)?hg(b,c):kg(b,c)};function Qg(a,b){var c=void 0;return c};function Sg(){var a={};return a};function Tg(a,b){var c=!1;return c}Tg.M="internal.testRegExp";var Vg=function(a){return Ug?H.querySelectorAll(a):null},Wg=function(a,b){if(!Ug)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Xg=!1;if(H.querySelectorAll)try{var Yg=H.querySelectorAll(":root");Yg&&1==Yg.length&&Yg[0]==H.documentElement&&(Xg=!0)}catch(a){}var Ug=Xg;var O=function(a){vb("GTM",a)};
var Zg=function(a){return null==a?"":k(a)?Ra(String(a)):"e0"},ah=function(a){return a.replace($g,"")},ch=function(a){return bh(a.replace(/\s/g,""))},bh=function(a){return Ra(a.replace(dh,"").toLowerCase())},fh=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return eh.test(a)?a:"e0"},hh=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=c.replace(/\./g,""));c=c+"@"+b[1];if(gh.test(c))return c}return"e0"},kh=function(a,
b){window.Promise||b([]);Promise.all(a.map(function(c){return c.value&&-1!==ih.indexOf(c.name)?jh(c.value).then(function(d){c.value=d}):Promise.resolve()})).then(function(){b(a)}).catch(function(){b([])})},jh=function(a){if(""===a||"e0"===a)return Promise.resolve(a);if(z.crypto&&z.crypto.subtle){if(lh.test(a))return Promise.resolve(a);try{var b=mh(a);return z.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");
return z.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}}else return Promise.resolve("e1")},mh=function(a){var b;if(z.TextEncoder)b=(new TextEncoder("utf-8")).encode(a);else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|
e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},dh=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,gh=/^\S+@\S+\.\S+$/,eh=/^\+\d{10,15}$/,$g=/[.~]/g,nh=/^[0-9A-Za-z_-]{43}$/,lh=/^[0-9A-Fa-f]{64}$/,oh={},ph=(oh.email="em",oh.phone_number="pn",oh.first_name="fn",oh.last_name="ln",oh.street="sa",oh.city="ct",oh.region="rg",oh.country="co",oh.postal_code="pc",oh.error_code="ec",oh),qh={},rh=(qh.email="sha256_email_address",qh.phone_number="sha256_phone_number",qh.first_name="sha256_first_name",qh.last_name=
"sha256_last_name",qh.street="sha256_street",qh),sh=function(a,b){function c(t,u,v,w){var x=Zg(t);""!==x&&(lh.test(x)?m.push({name:u,value:x,index:w}):m.push({name:u,value:v(x),index:w}))}function d(t,u){var v=t;if(k(v)||Ha(v)){v=Ha(t)?t:[t];for(var w=0;w<v.length;++w){var x=Zg(v[w]),y=lh.test(x);u&&!y&&O(89);!u&&y&&O(88)}}}function e(t,u){var v=t[u];d(v,!1);var w=rh[u];t.hasOwnProperty(w)&&(t.hasOwnProperty(u)&&O(90),v=t[w],d(v,!0));return v}function f(t,u,v){var w=e(t,u);w=Ha(w)?w:[w];for(var x=
0;x<w.length;++x)c(w[x],u,v)}function g(t,u,v,w){var x=e(t,u);c(x,u,v,w)}function h(t){return function(u){O(64);return t(u)}}var m=[];if("https:"===z.location.protocol){f(a,"email",hh);f(a,"phone_number",fh);f(a,"first_name",h(ch));f(a,"last_name",h(ch));var n=a.home_address||{};f(n,"street",h(bh));f(n,"city",h(bh));f(n,"postal_code",h(ah));f(n,"region",h(bh));f(n,"country",h(ah));var p=a.address||{};p=Ha(p)?p:[p];for(var q=0;q<p.length;q++){var r=p[q];g(r,"first_name",ch,q);g(r,"last_name",ch,q);
g(r,"street",bh,q);g(r,"city",bh,q);g(r,"postal_code",ah,q);g(r,"region",bh,q);g(r,"country",ah,q)}kh(m,b)}else m.push({name:"error_code",value:"e3",index:void 0}),b(m)},th=function(a,b){sh(a,function(c){for(var d=["tv.1"],e=0,f=0;f<c.length;++f){var g=c[f].name,h=c[f].value,m=c[f].index,n=ph[g];n&&h&&(-1===ih.indexOf(g)||/^e\d+$/.test(h)||nh.test(h)||lh.test(h))&&(void 0!==m&&(n+=m),d.push(n+"."+h),e++)}1===c.length&&"error_code"===c[0].name&&(e=0);b(encodeURIComponent(d.join("~")),e)})},uh=function(a){if(z.Promise)try{return new Promise(function(b){th(a,
function(c,d){b({Hf:c,Dl:d})})})}catch(b){}},ih=Object.freeze(["email","phone_number","first_name","last_name","street"]);var P={g:{Ih:"ad_data_sharing",I:"ad_storage",Jh:"ad_user_data",U:"analytics_storage",Ja:"region",md:"consent_updated",Me:"wait_for_update",Gj:"ads",Sf:"all",Hj:"play",Ij:"search",Jj:"youtube",Sh:"app_remove",Th:"app_store_refund",Uh:"app_store_subscription_cancel",Vh:"app_store_subscription_convert",Wh:"app_store_subscription_renew",Uf:"add_payment_info",Vf:"add_shipping_info",Ac:"add_to_cart",Bc:"remove_from_cart",Wf:"view_cart",Vb:"begin_checkout",Cc:"select_item",Hb:"view_item_list",Wb:"select_promotion",
Ib:"view_promotion",Ka:"purchase",Dc:"refund",La:"view_item",Xf:"add_to_wishlist",Kj:"exception",Xh:"first_open",Yh:"first_visit",ra:"gtag.config",Fa:"gtag.get",Zh:"in_app_purchase",Xb:"page_view",Lj:"screen_view",ai:"session_start",Mj:"timing_complete",Nj:"track_social",od:"user_engagement",qb:"gclid",la:"ads_data_redaction",aa:"allow_ad_personalization_signals",pd:"allow_custom_scripts",Oe:"allow_display_features",rd:"allow_enhanced_conversions",rb:"allow_google_signals",Ba:"allow_interest_groups",
Oj:"app_id",Pj:"app_installer_id",Qj:"app_name",Rj:"app_version",Yb:"auid",bi:"auto_detection_enabled",Jb:"aw_remarketing",Pe:"aw_remarketing_only",sd:"discount",ud:"aw_feed_country",vd:"aw_feed_language",ca:"items",wd:"aw_merchant_id",Yf:"aw_basket_type",Ec:"campaign_content",Fc:"campaign_id",Gc:"campaign_medium",Hc:"campaign_name",Ic:"campaign",Jc:"campaign_source",Kc:"campaign_term",Ya:"client_id",di:"content_group",ei:"content_type",Ga:"conversion_cookie_prefix",Lc:"conversion_id",wa:"conversion_linker",
Kb:"conversion_api",Ma:"cookie_domain",Ca:"cookie_expires",Na:"cookie_flags",Zb:"cookie_name",Mc:"cookie_path",Ha:"cookie_prefix",ab:"cookie_update",sb:"country",sa:"currency",xd:"customer_lifetime_value",ac:"custom_map",fi:"gcldc",gi:"debug_mode",ba:"developer_id",hi:"disable_merchant_reported_purchases",bc:"dc_custom_params",Zf:"dc_natural_search",Qe:"dynamic_event_settings",ag:"affiliation",Re:"checkout_option",Se:"checkout_step",cg:"coupon",yd:"item_list_name",Te:"list_name",ii:"promotions",Nc:"shipping",
Ue:"tax",zd:"engagement_time_msec",Oc:"enhanced_client_id",Pc:"enhanced_conversions",dg:"enhanced_conversions_automatic_settings",Ad:"estimated_delivery_date",Ve:"euid_logged_in_state",fc:"event_callback",Sj:"event_category",tb:"event_developer_id_string",Tj:"event_label",eg:"event",Bd:"event_settings",Cd:"event_timeout",Uj:"description",Vj:"fatal",ji:"experiments",We:"firebase_id",Dd:"first_party_collection",Ed:"_x_20",Lb:"_x_19",fg:"fledge",gg:"flight_error_code",hg:"flight_error_message",ki:"fl_activity_category",
li:"fl_activity_group",ig:"fl_advertiser_id",mi:"fl_ar_dedupe",ni:"fl_random_number",oi:"tran",ri:"u",Fd:"gac_gclid",hc:"gac_wbraid",jg:"gac_wbraid_multiple_conversions",kg:"ga_restrict_domain",Xe:"ga_temp_client_id",Gd:"gdpr_applies",lg:"geo_granularity",cb:"value_callback",Oa:"value_key",Wj:"google_ono",eb:"google_signals",mg:"google_tld",Hd:"groups",ng:"gsa_experiment_id",og:"iframe_state",Id:"ignore_referrer",Ye:"internal_traffic_results",ic:"is_legacy_converted",fb:"is_legacy_loaded",Jd:"is_passthrough",
xa:"language",Ze:"legacy_developer_id_string",ya:"linker",jc:"accept_incoming",vb:"decorate_forms",V:"domains",Mb:"url_position",pg:"method",Xj:"name",Qc:"new_customer",qg:"non_interaction",si:"optimize_id",af:"page_hostname",Nb:"page_path",Da:"page_referrer",wb:"page_title",rg:"passengers",sg:"phone_conversion_callback",ui:"phone_conversion_country_code",ug:"phone_conversion_css_class",vi:"phone_conversion_ids",vg:"phone_conversion_number",wg:"phone_conversion_options",kc:"quantity",Rc:"redact_device_info",
bf:"redact_enhanced_user_id",wi:"redact_ga_client_id",xi:"redact_user_id",Kd:"referral_exclusion_definition",Ob:"restricted_data_processing",yi:"retoken",Yj:"sample_rate",cf:"screen_name",xb:"screen_resolution",zi:"search_term",Pa:"send_page_view",Pb:"send_to",Sc:"session_duration",Ld:"session_engaged",df:"session_engaged_time",hb:"session_id",Md:"session_number",Tc:"delivery_postal_code",xg:"temporary_client_id",ef:"topmost_url",Ai:"tracking_id",ff:"traffic_type",ma:"transaction_id",Qa:"transport_url",
yg:"trip_type",Uc:"update",ib:"url_passthrough",Od:"_user_agent_architecture",Pd:"_user_agent_bitness",Qd:"_user_agent_full_version_list",Rd:"_user_agent_mobile",Sd:"_user_agent_model",Td:"_user_agent_platform",Ud:"_user_agent_platform_version",Vd:"_user_agent_wow64",na:"user_data",zg:"user_data_auto_latency",Ag:"user_data_auto_meta",Bg:"user_data_auto_multi",Cg:"user_data_auto_selectors",Dg:"user_data_auto_status",hf:"user_data_mode",jf:"user_data_settings",za:"user_id",Ra:"user_properties",Eg:"us_privacy_string",
fa:"value",mc:"wbraid",Fg:"wbraid_multiple_conversions",Gi:"_host_name",Hi:"_in_page_command",Ii:"_is_passthrough_cid",nf:"non_personalized_ads",be:"_sst_parameters",Za:"conversion_label",ja:"page_location",ub:"global_developer_id_string",Nd:"tc_privacy_string"}},vh={},wh=Object.freeze((vh[P.g.aa]=1,vh[P.g.Oe]=1,vh[P.g.rd]=1,vh[P.g.rb]=1,vh[P.g.ca]=1,vh[P.g.Ma]=1,vh[P.g.Ca]=1,vh[P.g.Na]=1,vh[P.g.Zb]=1,vh[P.g.Mc]=1,vh[P.g.Ha]=1,vh[P.g.ab]=1,vh[P.g.ac]=1,vh[P.g.ba]=1,vh[P.g.Qe]=1,vh[P.g.fc]=1,vh[P.g.Bd]=
1,vh[P.g.Cd]=1,vh[P.g.Dd]=1,vh[P.g.kg]=1,vh[P.g.eb]=1,vh[P.g.mg]=1,vh[P.g.Hd]=1,vh[P.g.Ye]=1,vh[P.g.ic]=1,vh[P.g.fb]=1,vh[P.g.ya]=1,vh[P.g.bf]=1,vh[P.g.Kd]=1,vh[P.g.Ob]=1,vh[P.g.Pa]=1,vh[P.g.Pb]=1,vh[P.g.Sc]=1,vh[P.g.df]=1,vh[P.g.Tc]=1,vh[P.g.Qa]=1,vh[P.g.Uc]=1,vh[P.g.jf]=1,vh[P.g.Ra]=1,vh[P.g.be]=1,vh));Object.freeze([P.g.ja,P.g.Da,P.g.wb,P.g.xa,P.g.cf,P.g.za,P.g.We,P.g.di]);
var xh={},yh=Object.freeze((xh[P.g.Sh]=1,xh[P.g.Th]=1,xh[P.g.Uh]=1,xh[P.g.Vh]=1,xh[P.g.Wh]=1,xh[P.g.Xh]=1,xh[P.g.Yh]=1,xh[P.g.Zh]=1,xh[P.g.ai]=1,xh[P.g.od]=1,xh)),zh={},Ah=Object.freeze((zh[P.g.Uf]=1,zh[P.g.Vf]=1,zh[P.g.Ac]=1,zh[P.g.Bc]=1,zh[P.g.Wf]=1,zh[P.g.Vb]=1,zh[P.g.Cc]=1,zh[P.g.Hb]=1,zh[P.g.Wb]=1,zh[P.g.Ib]=1,zh[P.g.Ka]=1,zh[P.g.Dc]=1,zh[P.g.La]=1,zh[P.g.Xf]=1,zh)),Bh=Object.freeze([P.g.aa,P.g.rb,P.g.ab]),Ch=Object.freeze([].concat(Bh)),Dh=Object.freeze([P.g.Ca,P.g.Cd,P.g.Sc,P.g.df,P.g.zd]),
Eh=Object.freeze([].concat(Dh)),Fh={},Gh=(Fh[P.g.I]="1",Fh[P.g.U]="2",Fh),Hh={},Ih=Object.freeze((Hh[P.g.aa]=1,Hh[P.g.rd]=1,Hh[P.g.Ba]=1,Hh[P.g.Jb]=1,Hh[P.g.Pe]=1,Hh[P.g.sd]=1,Hh[P.g.ud]=1,Hh[P.g.vd]=1,Hh[P.g.ca]=1,Hh[P.g.wd]=1,Hh[P.g.Ga]=1,Hh[P.g.wa]=1,Hh[P.g.Ma]=1,Hh[P.g.Ca]=1,Hh[P.g.Na]=1,Hh[P.g.Ha]=1,Hh[P.g.sa]=1,Hh[P.g.xd]=1,Hh[P.g.ba]=1,Hh[P.g.hi]=1,Hh[P.g.Pc]=1,Hh[P.g.Ad]=1,Hh[P.g.We]=1,Hh[P.g.Dd]=1,Hh[P.g.fb]=1,Hh[P.g.xa]=1,Hh[P.g.Qc]=1,Hh[P.g.ja]=1,Hh[P.g.Da]=1,Hh[P.g.sg]=1,Hh[P.g.ug]=1,
Hh[P.g.vg]=1,Hh[P.g.wg]=1,Hh[P.g.Ob]=1,Hh[P.g.Pa]=1,Hh[P.g.Pb]=1,Hh[P.g.Tc]=1,Hh[P.g.ma]=1,Hh[P.g.Qa]=1,Hh[P.g.Uc]=1,Hh[P.g.ib]=1,Hh[P.g.na]=1,Hh[P.g.za]=1,Hh[P.g.fa]=1,Hh));Object.freeze(P.g);var Jh={},Kh=z.google_tag_manager=z.google_tag_manager||{},Lh=Math.random();Jh.Kg="3530";Jh.ae=Number("0")||0;Jh.ka="dataLayer";Jh.Ej="ChEI8NLSogYQwMfWjZ7HqZ6cARIlALKMrSbR6aRLI7CmLloEUU2xN5jPnUcPLMNkF2W2T1yUUqwbLBoCBbQ\x3d";var Mh={__cl:1,__ecl:1,__ehl:1,__evl:1,__fal:1,__fil:1,__fsl:1,__hl:1,__jel:1,__lcl:1,__sdl:1,__tl:1,__ytl:1},Nh={__paused:1,__tg:1},Oh;for(Oh in Mh)Mh.hasOwnProperty(Oh)&&(Nh[Oh]=1);var Ph=Pa("true"),Qh,Rh=!1;Rh=!0;
Qh=Rh;var Sh,Th=!1;Sh=Th;var Uh,Vh=!1;Uh=Vh;var Wh,Xh=!1;Wh=Xh;Jh.Ne="www.googletagmanager.com";
var Yh=""+Jh.Ne+(Qh?"/gtag/js":"/gtm.js"),Zh=null,$h=null,ai={},bi={},li={},mi=function(){var a=Kh.sequence||1;Kh.sequence=a+1;return a};Jh.Dj="true";var ni="";Jh.tf=ni;var oi=new La,pi={},qi={},ti={name:Jh.ka,set:function(a,b){Uc(ab(a,b),pi);ri()},get:function(a){return si(a,2)},reset:function(){oi=new La;pi={};ri()}},si=function(a,b){return 2!=b?oi.get(a):ui(a)},ui=function(a,b){var c=a.split(".");b=b||[];for(var d=pi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==b.indexOf(d))return}return d},vi=function(a,b){qi.hasOwnProperty(a)||(oi.set(a,b),Uc(ab(a,b),pi),ri())},wi=function(){for(var a=["gtm.allowlist","gtm.blocklist","gtm.whitelist",
"gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=si(c,1);if(Ha(d)||Tc(d))d=Uc(d);qi[c]=d}},ri=function(a){l(qi,function(b,c){oi.set(b,c);Uc(ab(b),pi);Uc(ab(b,c),pi);a&&delete qi[b]})},xi=function(a,b){var c,d=1!==(void 0===b?2:b)?ui(a):oi.get(a);"array"===Rc(d)||"object"===Rc(d)?c=Uc(d):c=d;return c};var yi;try{yi=JSON.parse(tb("eyIwIjoiVVMiLCIxIjoiVVMtQ0EiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))}catch(a){O(123),vb("HEALTH",2),yi={}}
var zi=function(){return yi["0"]||""},Ai=function(){return yi["1"]||""},Bi=function(){var a=!1;a=!!yi["2"];return a},Ci=function(){var a="";a=yi["4"]||"";return a},Di=function(){var a=!1;a=!!yi["5"];return a},Ei=function(){var a="";a=yi["3"]||"";
return a};var Fi,Gi=!1;function Hi(){Gi=!0;Fi=Fi||{}}var Ii=function(a){Gi||Hi();return Fi[a]};var Ji=function(){var a=z.screen;return{width:a?a.width:0,height:a?a.height:0}},Ki=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!z.getComputedStyle)return!0;var c=z.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Li=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Mi=function(a){var b=Li(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Ni=[],Oi=!(!z.IntersectionObserver||!z.IntersectionObserverEntry),Pi=function(a,b,c){for(var d=new z.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Ni.length;f++)if(!Ni[f])return Ni[f]=d,f;return Ni.push(d)-1},Qi=function(a,b,c){function d(h,m){var n={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:m,intersectionRect:n,isIntersecting:0<m,rootBounds:n,target:h,time:Ta()};I(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,m){return h-m});return function(){for(var h=0;h<b.length;h++){var m=Mi(b[h]);if(m>e[h])for(;f[h]<c.length-1&&m>=c[f[h]+1];)d(b[h],m),f[h]++;else if(m<e[h])for(;0<=f[h]&&m<=c[f[h]];)d(b[h],m),f[h]--;e[h]=m}}},Ri=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Oi){var e=!1;I(function(){e||
Qi(a,b,c)()});return Pi(function(f){e=!0;for(var g={fd:0};g.fd<f.length;g={fd:g.fd},g.fd++)I(function(h){return function(){return a(f[h.fd])}}(g))},b,c)}return z.setInterval(Qi(a,b,c),1E3)},Si=function(a){Oi?0<=a&&a<Ni.length&&Ni[a]&&(Ni[a].disconnect(),Ni[a]=void 0):z.clearInterval(a)};var Ti=/:[0-9]+$/,Ui=/^\d+\.fls\.doubleclick\.net$/,Vi=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var m=h.slice(1).join("=");if(!c)return d?m:decodeURIComponent(m).replace(/\+/g," ");e.push(d?m:decodeURIComponent(m).replace(/\+/g," "))}}return c?e:void 0},Yi=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Wi(a.protocol)||Wi(z.location.protocol);"port"===b?a.port=
String(Number(a.hostname?a.port:z.location.port)||("http"===a.protocol?80:"https"===a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||z.location.hostname).replace(Ti,"").toLowerCase());return Xi(a,b,c,d,e)},Xi=function(a,b,c,d,e){var f,g=Wi(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Zi(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ti,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=
String(Number(a.port)||("http"===g?80:"https"===g?443:""));break;case "path":a.pathname||a.hostname||vb("TAGGING",1);f="/"===a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=(d||[]).indexOf(m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Vi(f,e,!1));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},
Wi=function(a){return a?a.replace(":","").toLowerCase():""},Zi=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},$i=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||vb("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ti,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},aj=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:
p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!==p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=$i(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var m=""+f+g+h;"/"===m[m.length-1]&&(m=m.substring(0,m.length-1));return m},bj=function(a){var b=$i(z.location.href),c=Yi(b,"host",!1);if(c&&c.match(Ui)){var d=Yi(b,
"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}};
var dj=function(a,b,c){if(a){var d=a.element,e={ob:a.ob,tagName:d.tagName,type:1};b&&(e.querySelector=cj(d));c&&(e.isVisible=!Ki(d));return e}},gj=function(a){if(0!=a.length){var b;b=ej(a,function(c){return!fj.test(c.ob)});b=ej(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=ej(b,function(c){return!Ki(c.element)});return b[0]}},ej=function(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c},cj=function(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;
else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=cj(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b},hj=!0,ij=!1;
var jj=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,kj=/@(gmail|googlemail)\./i,fj=/support|noreply/i,lj="SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),mj=["BR"],nj={},oj=function(a){a=a||{ad:!0,bd:!0};a.yb=a.yb||{email:!0,phone:!0,address:!0};var b,c=a,d=!!c.ad+"."+!!c.bd;c&&c.ie&&c.ie.length&&(d+="."+c.ie.join("."));c&&c.yb&&(d+="."+c.yb.email+"."+c.yb.phone+"."+c.yb.address);b=d;var e=nj[b];if(e&&200>Ta()-e.timestamp)return e.result;var f;var g=[],h=H.body;if(h){for(var m=h.querySelectorAll("*"),
n=0;n<m.length&&1E4>n;n++){var p=m[n];if(!(0<=lj.indexOf(p.tagName.toUpperCase()))&&p.children instanceof HTMLCollection){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=mj.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<m.length?"2":"1"}}else f={elements:g,status:"4"};var t=f,u=t.status,v=[],w;if(a.yb&&a.yb.email){for(var x=t.elements,y=[],A=0;A<x.length;A++){var B=x[A],D=B.textContent;"INPUT"===B.tagName.toUpperCase()&&B.value&&(D=B.value);
if(D){var E=D.match(jj);if(E){var J=E[0],G;if(z.location){var N=Xi(z.location,"host",!0);G=0<=J.toLowerCase().indexOf(N)}else G=!1;G||y.push({element:B,ob:J})}}}var Q=a&&a.ie;if(Q&&0!==Q.length){for(var ea=[],na=0;na<y.length;na++){for(var X=!0,R=0;R<Q.length;R++){var ia=Q[R];if(ia&&Wg(y[na].element,ia)){X=!1;break}}X&&ea.push(y[na])}v=ea}else v=y;w=gj(v);10<y.length&&(u="3")}var ja=[];!a.rj&&w&&(v=[w]);for(var T=0;T<v.length;T++)ja.push(dj(v[T],a.ad,a.bd));var Ea={elements:ja.slice(0,10),vh:dj(w,
a.ad,a.bd),status:u};nj[b]={timestamp:Ta(),result:Ea};return Ea},pj=function(a){return a.tagName+":"+a.isVisible+":"+a.ob.length+":"+kj.test(a.ob)};
var qj=function(a,b,c){if(!c)return!1;var d=c.selector_type,e=String(c.value),f;if("js_variable"===d){e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,"");for(var g=e.split(","),h=0;h<g.length;h++){var m=g[h].trim();if(m){if(0===m.indexOf("dataLayer."))f=si(m.substring(10));else{var n=m.split(".");f=z[n.shift()];for(var p=0;p<n.length;p++)f=f&&f[n[p]]}if(void 0!==f)break}}}else if("css_selector"===d&&Ug){var q=Vg(e);if(q&&0<q.length){f=[];for(var r=0;r<q.length&&r<("email"===b||"phone_number"===b?5:1);r++)f.push(tc(q[r])||
Ra(q[r].value));f=1===f.length?f[0]:f}}return f?(a[b]=f,!0):!1},rj=function(a){if(a){var b={},c=!1;c=qj(b,"email",a.email)||c;c=qj(b,"phone_number",a.phone)||c;b.address=[];for(var d=a.name_and_address||[],e=0;e<d.length;e++){var f={};c=qj(f,"first_name",d[e].first_name)||c;c=qj(f,"last_name",d[e].last_name)||c;c=qj(f,"street",d[e].street)||c;c=qj(f,"city",d[e].city)||c;c=qj(f,"region",d[e].region)||c;c=qj(f,"country",d[e].country)||c;c=qj(f,"postal_code",d[e].postal_code)||c;b.address.push(f)}return c?
b:void 0}},sj=function(a){return a.B[P.g.jf]},tj=function(a){var b=S(a,P.g.Pc)||{},c=!1;l(b,function(d,e){var f=e.enhanced_conversions_mode;if("automatic"===f||"manual"===f)c=!0});return c},uj=function(a){if(!Tc(a))return!1;var b=a.mode;return"auto_detect"===b||"selectors"===b||"code"===b||!!a.enable_code},vj=function(a){if(a){if("selectors"===a.mode||Tc(a.selectors))return rj(a.selectors);if("auto_detect"===a.mode||Tc(a.auto_detect)){var b;var c=a.auto_detect;if(c){var d=oj({ad:!1,bd:!1,ie:c.exclude_element_selectors,
yb:{email:!!c.email,phone:!!c.phone,address:!!c.address}}).elements,e={};if(0<d.length)for(var f=0;f<d.length;f++){var g=d[f];if(1===g.type){e.email=g.ob;break}}b=e}else b=void 0;return b}}};var zj=[],Aj=function(a){return void 0==zj[a]?!1:zj[a]};var Bj=[];Bj[7]=!0;Bj[9]=!0;Bj[27]=!0;
Bj[11]=!0;Bj[13]=!0;Bj[15]=!0;
Bj[16]=!0;Bj[25]=!0;
Bj[34]=!0;Bj[36]=!0;
Bj[38]=!0;Bj[82]=!0;Bj[43]=!0;
Bj[52]=!0;Bj[57]=!0;Bj[59]=!0;
Bj[61]=!0;Bj[67]=!0;Bj[68]=!0;
Bj[69]=!0;Bj[72]=!0;Bj[75]=!0;zj[2]=!0;
Bj[76]=!0;Bj[77]=!0;Bj[79]=!0;
Bj[80]=!0;Bj[83]=!0;
Bj[88]=!0;Bj[89]=!0;Bj[92]=!0;
Bj[93]=!0;Bj[94]=!0;Bj[96]=!0;Bj[97]=!0;Bj[101]=!0;var U=function(a){return!!Bj[a]};var Cj=new function(a,b){this.h=a;this.defaultValue=void 0===b?!1:b}(1933);var Dj=function(a){Dj[" "](a);return a};Dj[" "]=function(){};var Fj=function(){var a=Ej,b="bh";if(a.bh&&a.hasOwnProperty(b))return a.bh;var c=new a;return a.bh=c};var Ej=function(){var a={};this.h=function(){var b=Cj.h,c=Cj.defaultValue;return null!=a[b]?a[b]:c};this.m=function(){a[Cj.h]=!0}};var Gj=!1,Hj=!1,Ij=[],Jj={},Kj={},Lj={ad_storage:!1,ad_user_data:!1,ad_data_sharing:!1};function Mj(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},cps:{},set:Nj,default:Nj,update:Oj,declare:Pj,implicit:Qj,addListener:Rj,notifyListeners:Sj,setCps:Tj,active:!1,usedDeclare:!1,usedDefault:!1,usedUpdate:!1,usedImplicit:!1,usedSetCps:!1,accessedDefault:!1,accessedAny:!1,wasSetLate:!1});return a.ics}function Uj(a,b,c,d){return""===c||a===d?!0:a===c?b!==d:!a&&!b}
function Pj(a,b,c,d,e){var f=Mj();f.active=!0;f.usedDeclare=!0;var g=f.entries,h=g[a]||{},m=h.declare_region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(Uj(n,m,d,e)){var p={region:h.region,declare_region:n,declare:"granted"===b,implicit:h.implicit,initial:h.initial,default:h.default,update:h.update,quiet:h.quiet};if(""!==d||!1!==h.declare)g[a]=p}}
function Qj(a,b){var c=Mj();c.active=!0;c.usedImplicit=!0;var d=c.entries,e=d[a]=d[a]||{};!1!==e.implicit&&(e.implicit="granted"===b)}
function Nj(a,b,c,d,e,f){var g=Mj();g.usedDefault||!g.accessedDefault&&!g.accessedAny||(g.wasSetLate=!0);g.active=!0;g.usedDefault=!0;vb("TAGGING",19);if(void 0==b)vb("TAGGING",18);else{var h=g.entries,m=h[a]||{},n=m.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();var q="granted"===b;if(Uj(p,n,d,e)){var r=!!(f&&0<f&&void 0===m.update),t={region:p,declare_region:m.declare_region,implicit:m.implicit,initial:q,default:q,declare:m.declare,update:m.update,quiet:r};if(""!==d||
!1!==m.initial)h[a]=t;r&&z.setTimeout(function(){if(h[a]===t&&t.quiet){t.quiet=!1;var u=[a];if(Aj(4))for(var v in Jj)Jj.hasOwnProperty(v)&&Jj[v]===a&&u.push(v);for(var w=0;w<u.length;w++)Vj(u[w]);Sj();vb("TAGGING",2)}},f)}}}
function Oj(a,b){var c=Mj();c.usedDefault||c.usedUpdate||!c.accessedAny||(c.wasSetLate=!0);c.active=!0;c.usedUpdate=!0;if(void 0!=b){var d=Wj(c,a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Wj(c,a),h=[a];if(Aj(4))for(var m in Jj)Jj.hasOwnProperty(m)&&Jj[m]===a&&h.push(m);if(f.quiet){f.quiet=!1;for(var n=0;n<h.length;n++)Vj(h[n])}else if(g!==d)for(var p=0;p<h.length;p++)Vj(h[p])}}
function Xj(a,b,c,d,e,f){var g=a[b]||{},h=g.region,m=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(Uj(m,h,e,f)){var n={enabled:"granted"===c,region:m};if(""!==e||!1!==g.enabled)return a[b]=n,!0}return!1}function Tj(a,b,c,d,e){var f=Mj();Xj(f.cps,a,b,c,d,e)&&(f.usedSetCps=!0)}function Rj(a,b){Ij.push({consentTypes:a,Hk:b})}function Vj(a){for(var b=0;b<Ij.length;++b){var c=Ij[b];Ha(c.consentTypes)&&-1!==c.consentTypes.indexOf(a)&&(c.lj=!0)}}
function Sj(a,b){for(var c=0;c<Ij.length;++c){var d=Ij[c];if(d.lj){d.lj=!1;try{d.Hk({consentEventId:a,consentPriorityId:b})}catch(e){}}}}function Wj(a,b){var c=a.entries,d=c[b]||{},e=d.update;if(void 0!==e)return e;e=d.initial;if(void 0!==e)return e;if(Aj(4)&&Jj.hasOwnProperty(b)){var f=c[Jj[b]]||{};e=f.update;if(void 0!==e)return e;e=f.initial;if(void 0!==e)return e}e=d.declare;if(void 0!==e||Aj(4)&&(e=d.implicit,void 0!==e))return e;if(Aj(3)&&Lj.hasOwnProperty(b))return Lj[b]}
var Yj=function(a){var b=Mj();b.accessedAny=!0;return Wj(b,a)},Zj=function(a){var b=Mj();b.accessedDefault=!0;return(b.entries[a]||{}).initial},ak=function(a){var b=Mj();b.accessedAny=!0;return!(b.entries[a]||{}).quiet},bk=function(){if(!Fj().h())return!1;var a=Mj();a.accessedAny=!0;return a.active},ck=function(){var a=Mj();a.accessedDefault=!0;return a.usedDefault},dk=function(a,b){Mj().addListener(a,b)},ek=function(a,b){Mj().notifyListeners(a,b)},fk=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!ak(b[e]))return!0;
return!1}if(c()){var d=!1;dk(b,function(e){d||c()||(d=!0,a(e))})}else a({})},gk=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Yj(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=k(b)?[b]:b,e={};c().length!==d.length&&dk(d,function(f){var g=c();0<g.length&&(f.consentTypes=g,a(f))})};function hk(){}function ik(){};function jk(a,b){if(!U(104)||b){for(var c=[],d=0;d<kk.length;d++){var e=a(kk[d]);c[d]=!0===e?"1":!1===e?"0":"-"}return c.join("")}for(var f=[],g=0;g<lk.length;g++){var h=a(lk[g]);f[g]=!0===h?"1":!1===h?"0":"-"}return f.join("")}
var kk=[P.g.I,P.g.U],lk=[P.g.I,P.g.U,P.g.Jh,P.g.Ih],mk={},nk=(mk[P.g.Gj]="a",mk[P.g.Ij]="s",mk[P.g.Jj]="y",mk[P.g.Hj]="p",mk),ok=function(a){for(var b=a[P.g.Ja],c=Array.isArray(b)?b:[b],d={gd:0};d.gd<c.length;d={gd:d.gd},++d.gd)l(a,function(e){return function(f,g){if(f!==P.g.Ja){var h=c[e.gd],m=zi(),n=Ai();Hj=!0;Gj&&vb("TAGGING",20);Mj().declare(f,g,h,m,n)}}}(d))},pk=function(a){var b=a[P.g.Ja];b&&O(40);var c=a[P.g.Me];c&&O(41);for(var d=Ha(b)?b:[b],e={hd:0};e.hd<d.length;e={hd:e.hd},++e.hd)l(a,function(f){return function(g,
h){if(g!==P.g.Ja&&g!==P.g.Me){var m=d[f.hd],n=Number(c),p=zi(),q=Ai();Gj=!0;Hj&&vb("TAGGING",20);Mj().set(g,h,m,p,q,n)}}}(e))},qk=function(a,b){l(a,function(c,d){Gj=!0;Hj&&vb("TAGGING",20);Mj().update(c,d)});ek(b.eventId,b.priorityId)},rk=function(a){for(var b=a[P.g.Ja],c=Array.isArray(b)?b:[b],d={jd:0};d.jd<c.length;d={jd:d.jd},++d.jd)l(a,function(e){return function(f,g){if(f!==P.g.Ja){var h=c[e.jd],m=zi(),n=Ai();Mj().setCps(f,g,h,m,n)}}}(d))},sk=function(a){for(var b=a[P.g.Ja],c=Array.isArray(b)?
b:[b],d={wc:0};d.wc<c.length;d={wc:d.wc},++d.wc)a.hasOwnProperty(P.g.Sf)&&l(nk,function(e){return function(f){Xj(Kj,f,a[P.g.Sf],c[e.wc],zi(),Ai())}}(d)),l(a,function(e){return function(f,g){f!==P.g.Ja&&f!==P.g.Sf&&Xj(Kj,f,g,c[e.wc],zi(),Ai())}}(d))},tk=function(a){var b=Yj(a);return void 0!=b?b:!0},uk=function(){return"G"+(U(104)?"2":"1")+jk(Yj)},vk={},wk=(vk[P.g.I]=0,vk[P.g.U]=1,vk[P.g.Jh]=2,vk[P.g.Ih]=3,vk);
function xk(a){switch(a){case void 0:return 1;case !0:return 3;case !1:return 2;default:return 0}}
var yk=function(){if(!U(106))return"G1"+jk(Zj,!0);for(var a="1",b=0;b<lk.length;b++){var c=a,d,e=lk[b],f=Jj[e];d=void 0===f?0:wk.hasOwnProperty(f)?12|wk[f]:8;var g=Mj();g.accessedAny=!0;var h=g.entries[e]||{};d=d<<2|xk(h.implicit);a=c+(""+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[d]+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[xk(h.declare)<<4|xk(h.initial)<<2|xk(h.update)])}return a},zk=function(){var a=Mj(),b=a.cps,c=[],d;for(d in Kj)Kj.hasOwnProperty(d)&&
Kj[d].enabled&&(a.usedSetCps?b.hasOwnProperty(d)&&b[d].enabled&&c.push(d):c.push(d));for(var e="",f=0;f<c.length;f++){var g=nk[c[f]];g&&(e+=g)}return""===e?"-":e},Ak=function(a,b){dk(a,b)},Bk=function(a,b){gk(a,b)},Ck=function(a,b){fk(a,b)};var Dk=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!==c?b^c>>21:b;return b};var Ek=function(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var m=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");m&&c&&(m=decodeURIComponent(m));d.push(m)}}return d};var Fk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Gk=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};function Hk(a){return"null"!==a.origin};var Kk=function(a,b,c,d){return Ik(d)?Ek(a,String(b||Jk()),c):[]},Nk=function(a,b,c,d,e){if(Ik(e)){var f=Lk(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Mk(f,function(g){return g.zf},b);if(1===f.length)return f[0].id;f=Mk(f,function(g){return g.xe},c);return f[0]?f[0].id:void 0}}};function Ok(a,b,c,d){var e=Jk(),f=window;Hk(f)&&(f.document.cookie=a);var g=Jk();return e!=g||void 0!=c&&0<=Kk(b,g,!1,d).indexOf(c)}
var Sk=function(a,b,c,d){function e(w,x,y){if(null==y)return delete h[x],w;h[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete h[x],w;h[x]=!0;return w+"; "+x}if(!Ik(c.Cb))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Pk(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var m;c.expires instanceof Date?m=c.expires.toUTCString():null!=c.expires&&(m=""+c.expires);g=e(g,"expires",m);g=e(g,"max-age",c.wl);g=e(g,"samesite",
c.Pl);c.Rl&&(g=f(g,"secure"));var n=c.domain;if(n&&"auto"===n.toLowerCase()){for(var p=Qk(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Rk(u,c.path)&&Ok(v,a,b,c.Cb))return 0}if(q&&!r)throw q;return 1}n&&"none"!==n.toLowerCase()&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Rk(n,c.path)?1:Ok(g,a,b,c.Cb)?0:1},Tk=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Sk(a,
b,c)};function Mk(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],m=b(h);m===c?d.push(h):void 0===f||m<f?(e=[h],f=m):m===f&&e.push(h)}return 0<d.length?d:e}function Lk(a,b,c){for(var d=[],e=Kk(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var m=g.shift();m&&(m=m.split("-"),d.push({id:g.join("."),zf:1*m[0]||1,xe:1*m[1]||1}))}}return d}
var Pk=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Uk=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Vk=/(^|\.)doubleclick\.net$/i,Rk=function(a,b){return Vk.test(window.document.location.hostname)||"/"===b&&Uk.test(a)},Jk=function(){return Hk(window)?window.document.cookie:""},Qk=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Vk.test(e)||Uk.test(e)||a.push("none");return a},Ik=function(a){if(!Fj().h()||!a||!bk())return!0;if(!ak(a))return!1;var b=Yj(a);return null==b?!0:!!b};var Wk=function(a){var b=Math.round(2147483647*Math.random());return a?String(b^Dk(a)&2147483647):String(b)},Xk=function(a){return[Wk(a),Math.round(Ta()/1E3)].join(".")},$k=function(a,b,c,d,e){var f=Yk(b);return Nk(a,f,Zk(c),d,e)},al=function(a,b,c,d){var e=""+Yk(c),f=Zk(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Yk=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Zk=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-
1};var bl=function(){Kh.dedupe_gclid||(Kh.dedupe_gclid=""+Xk());return Kh.dedupe_gclid};var cl=function(){var a=!1;return a};var dl=function(){this.container={};this.destination={};this.canonical={}},el=function(){var a=hc("google_tag_data",{}),b=a.tidr;b||(b=new dl,a.tidr=b);return b};var K={D:"G-6ZT8F1MF6V",Gb:"115890836"},fl={jj:"G-6ZT8F1MF6V|GT-NBPP3SC",kj:"G-6ZT8F1MF6V"};K.lf=Pa("");
var gl=function(){return fl.jj?fl.jj.split("|"):[K.D]},hl=function(){return fl.kj?fl.kj.split("|"):[]},il=function(a){var b=el();return a.isDestination?b.destination[a.ctid]:b.container[a.ctid]},jl=function(){for(var a=el(),b=gl(),c=0;c<b.length;c++){var d=a.container[b[c]];d?(d.state=2,d.containers=gl(),d.destinations=hl()):a.container[b[c]]={state:2,containers:gl(),destinations:hl()}}for(var e=hl(),f=0;f<e.length;f++){var g=a.destination[e[f]];g&&0===g.state&&O(93);g?(g.state=2,g.containers=gl(),
g.destinations=hl()):a.destination[e[f]]={state:2,containers:gl(),destinations:hl()}}a.canonical[K.Gb]=2},kl=function(a){return!!el().container[a]},ll=function(){return{ctid:K.D,isDestination:K.lf}},ml=function(){var a=el().container,b;for(b in a)if(a.hasOwnProperty(b)&&1===a[b].state)return!0;return!1},nl=function(){var a={};l(el().destination,function(b,c){0===c.state&&(a[b]=c)});return a};var ol={UA:1,AW:2,DC:3,G:4,GF:5,GT:12,GTM:14,HA:6,MC:7},pl=function(a){var b=K.D.split("-")[0].toUpperCase(),c={};c.ctid=K.D;c.Ml=Jh.ae;c.Ol=Jh.Kg;c.rl=K.lf?2:1;Qh?(c.Lf=ol[b],c.Lf||(c.Lf=0)):c.Lf=Wh?13:10;Uh?c.nh=1:cl()?c.nh=2:c.nh=3;var d;var e=c.Lf,f=c.nh;void 0===e?d="":(f||(f=0),d=""+cg(1,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e<<2|f]);var g=c.om,h=4+d+(g?""+cg(2,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g]:""),m,n=c.Ol;m=n&&bg.test(n)?
""+cg(3,2)+n:"";var p,q=c.Ml;p=q?""+cg(4,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]:"";var r;var t=c.ctid;if(t&&a){var u=t.split("-"),v=u[0].toUpperCase();if("GTM"!==v&&"OPT"!==v)r="";else{var w=u[1];r=""+cg(5,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1+w.length]+(c.rl||0)+w}}else r="";return h+m+p+r};function ql(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var rl=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function sl(){return Gb?!!Nb&&!!Nb.platform:!1}function tl(){return Qb("iPhone")&&!Qb("iPod")&&!Qb("iPad")}function ul(){tl()||Qb("iPad")||Qb("iPod")};Sb();Rb()||Qb("Trident")||Qb("MSIE");Qb("Edge");!Qb("Gecko")||-1!=Mb().toLowerCase().indexOf("webkit")&&!Qb("Edge")||Qb("Trident")||Qb("MSIE")||Qb("Edge");-1!=Mb().toLowerCase().indexOf("webkit")&&!Qb("Edge")&&Qb("Mobile");sl()||Qb("Macintosh");sl()||Qb("Windows");(sl()?"Linux"===Nb.platform:Qb("Linux"))||sl()||Qb("CrOS");var vl=pa.navigator||null;vl&&(vl.appVersion||"").indexOf("X11");sl()||Qb("Android");tl();Qb("iPad");Qb("iPod");ul();Mb().toLowerCase().indexOf("kaios");var wl=function(a,b,c,d){for(var e=b,f=c.length;0<=(e=a.indexOf(c,e))&&e<d;){var g=a.charCodeAt(e-1);if(38==g||63==g){var h=a.charCodeAt(e+f);if(!h||61==h||38==h||35==h)return e}e+=f+1}return-1},xl=/#|$/,yl=function(a,b){var c=a.search(xl),d=wl(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))},zl=/[?&]($|#)/,Al=function(a,b,c){for(var d,e=a.search(xl),f=0,g,h=[];0<=(g=wl(a,f,b,e));)h.push(a.substring(f,
g)),f=Math.min(a.indexOf("&",g)+1||e,e);h.push(a.slice(f));d=h.join("").replace(zl,"$1");var m,n=null!=c?"="+encodeURIComponent(String(c)):"";var p=b+n;if(p){var q,r=d.indexOf("#");0>r&&(r=d.length);var t=d.indexOf("?"),u;0>t||t>r?(t=r,u=""):u=d.substring(t+1,r);q=[d.slice(0,t),u,d.slice(r)];var v=q[1];q[1]=p?v?v+"&"+p:p:v;m=q[0]+(q[1]?"?"+q[1]:"")+q[2]}else m=d;return m};var Bl=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Dj(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Cl=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function Dl(){if(!H.head)return null;var a=El("META");H.head.appendChild(a);a.httpEquiv="origin-trial";a.content='A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';return a}
var Fl=function(){if(z.top==z)return 0;var a=z.location.ancestorOrigins;return a?a[a.length-1]==z.location.origin?1:2:Bl(z.top)?1:2},El=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function Gl(a,b,c,d){d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=El("IMG",a.document);if(c){var f=function(){if(c){var g=a.google_image_requests,h=yb(g,e);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,!1);e.removeEventListener&&e.removeEventListener("error",f,!1)};rl(e,"load",f);rl(e,"error",f)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
var Il=function(a){var b;b=void 0===b?!1:b;var c="https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";Cl(a,function(d,e){if(d||0===d)c+="&"+e+"="+encodeURIComponent(""+d)});Hl(c,b)},Hl=function(a,b){var c=window,d;b=void 0===b?!1:b;d=void 0===d?!1:d;if(c.fetch){var e={keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"};d&&(e.mode="cors",e.headers={"Attribution-Reporting-Eligible":"event-source"});c.fetch(a,e)}else Gl(c,a,void 0===b?!1:b,void 0===d?!1:d)};var Jl=function(){};var Kl=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Ll=function(a,b){b=void 0===b?{}:b;this.m=a;this.h=null;this.N={};this.pb=0;var c;this.T=null!=(c=b.Zl)?c:500;var d;this.C=null!=(d=b.qm)?d:!1;this.B=null};oa(Ll,Jl);
Ll.prototype.addEventListener=function(a){var b=this,c={internalBlockOnErrors:this.C},d=Gk(function(){return a(c)}),e=0;-1!==this.T&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},this.T));var f=function(g,h){clearTimeout(e);g?(c=g,c.internalErrorState=Kl(c),c.internalBlockOnErrors=b.C,h&&0===c.internalErrorState||(c.tcString="tcunavailable",h||(c.internalErrorState=3))):(c.tcString="tcunavailable",c.internalErrorState=3);a(c)};try{Ml(this,"addEventListener",f)}catch(g){c.tcString=
"tcunavailable",c.internalErrorState=3,e&&(clearTimeout(e),e=0),d()}};Ll.prototype.removeEventListener=function(a){a&&a.listenerId&&Ml(this,"removeEventListener",null,a.listenerId)};
var Ol=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var m;if(0===h)if(a.purpose&&a.vendor){var n=Nl(a.vendor.consents,void 0===d?"755":d);m=n&&"1"===b&&a.purposeOneTreatment&&"CH"===a.publisherCC?!0:n&&Nl(a.purpose.consents,b)}else m=!0;else m=1===h?a.purpose&&a.vendor?Nl(a.purpose.legitimateInterests,
b)&&Nl(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return m},Nl=function(a,b){return!(!a||!a[b])},Ml=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.m.__tcfapi){var e=a.m.__tcfapi;e(b,2,c,d)}else if(fm(a)){gm(a);var f=++a.pb;a.N[f]=c;if(a.h){var g={};a.h.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},fm=function(a){if(a.h)return a.h;var b;a:{for(var c=a.m,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(h){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(h){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},gm=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.N[c.callId](c.returnValue,c.success)}catch(d){}},rl(a.m,"message",a.B))},hm=function(a){if(!1===a.gdprApplies)return!0;void 0===a.internalErrorState&&(a.internalErrorState=Kl(a));return"error"===a.cmpStatus||0!==a.internalErrorState?a.internalBlockOnErrors?
(Il({e:String(a.internalErrorState)}),!1):!0:"loaded"!==a.cmpStatus||"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus?!1:!0};var im={1:0,3:0,4:0,7:3,9:3,10:3},jm=ql('',500);function km(){var a=Kh.tcf||{};return Kh.tcf=a}
var qm=function(){var a=km(),b=new Ll(z,{Zl:-1});lm(b)&&mm()&&O(124);if(!mm()&&!a.active&&lm(b)){a.active=!0;a.If={};nm();a.tcString="tcunavailable";try{b.addEventListener(function(c){if(0!==c.internalErrorState)om(a),pm(a);else{var d;a.gdprApplies=c.gdprApplies;if(!1===c.gdprApplies){var e={},f;for(f in im)im.hasOwnProperty(f)&&(e[f]=!0);d=e;b.removeEventListener(c)}else if("tcloaded"===c.eventStatus||"useractioncomplete"===c.eventStatus||"cmpuishown"===c.eventStatus){var g={},h;for(h in im)if(im.hasOwnProperty(h))if("1"===
h){var m,n=c,p=!0;p=void 0===p?!1:p;m=hm(n)?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p||"string"!==typeof n.tcString||!n.tcString.length?!0:Ol(n,"1",0):!1;g["1"]=m}else g[h]=Ol(c,h,im[h]);d=g}d&&(a.tcString=c.tcString||"tcempty",a.If=d,pm(a))}})}catch(c){om(a),pm(a)}}};function om(a){a.type="e";a.tcString="tcunavailable"}function nm(){var a={},b=(a.ad_storage="denied",a.wait_for_update=jm,a);pk(b)}
function lm(a){return"function"===typeof z.__tcfapi||"function"===typeof a.m.__tcfapi||null!=fm(a)?!0:!1}var mm=function(){return!0!==z.gtag_enable_tcf_support};function pm(a){var b={},c=(b.ad_storage=a.If["1"]?"granted":"denied",b);qk(c,{eventId:0},{gdprApplies:a?a.gdprApplies:void 0,tcString:rm()})}
var rm=function(){var a=km();return a.active?a.tcString||"":""},sm=function(){var a=km();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},tm=function(a){if(!im.hasOwnProperty(String(a)))return!0;var b=km();return b.active&&b.If?!!b.If[String(a)]:!0};var um=function(a){var b=String(a[ne.Qb]||"").replace(/_/g,"");0===b.indexOf("cvt")&&(b="cvt");return b},vm=0<=z.location.search.indexOf("?gtm_latency=")||0<=z.location.search.indexOf("&gtm_latency=");var wm={sampleRate:"0.005000",zj:"",yj:Number("5"),xm:Number("")},xm;if(!(xm=vm)){var ym=Math.random(),zm=wm.sampleRate;xm=ym<zm}var Am=xm,Bm="https://www.googletagmanager.com/a?id="+K.D+"&cv=1";
function Cm(){return[Bm,"&v=3&t=t","&pid="+Ka(),"&rv="+Jh.Kg].join("")}var Dm=Cm();function Em(){Dm=Cm()}var Fm={},Gm="",Hm="",Im="",Jm="",Km=[],Lm="",Mm="",Nm=void 0,Om={},Pm={},Qm=void 0,Rm=5;0<wm.yj&&(Rm=wm.yj);var Sm=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);return{fl:function(){return c<a?!1:Ta()-d[c%a]<b},Il:function(){var f=c++%a;d[f]=Ta()}}}(Rm,1E3),Tm=1E3;
function Um(a){var b=Nm;if(void 0===b)return"";var c=xb("GTM"),d=xb("TAGGING"),e=xb("HEALTH"),f=Dm,g=Fm[b]?"":"&es=1",h=Om[b],m=Vm(),n=Gm,p=Hm,q=Mm,r=Im,t=Jm,u;return[f,g,h,c?"&u="+c:"",d?"&ut="+d:"",e?"&h="+e:"",m,n,p,q,r,t,u,Lm?"&dl="+encodeURIComponent(Lm):"",0<Km.length?"&tdp="+Km.join("."):"",Jh.ae?"&x="+Jh.ae:"",
"&z=0"].join("")}function Xm(){Qm&&(z.clearTimeout(Qm),Qm=void 0);if(void 0!==Nm&&(!Fm[Nm]||Gm||Hm))if(Pm[Nm]||Sm.fl()||0>=Tm--)O(1),Pm[Nm]=!0;else{Sm.Il();var a=Um(!0);pc(a);if(Jm||Lm&&0<Km.length){var b=a.replace("/a?","/td?");pc(b)}Fm[Nm]=!0;Lm=Jm=Im=Mm=Hm=Gm="";Km=[]}}function Ym(){Qm||(Qm=z.setTimeout(Xm,500))}function Zm(){2022<=Um().length&&Xm()}function Vm(){return"&tc="+Ne.filter(function(a){return a}).length}
var $m=function(a,b){if(Am&&!Pm[a]&&Nm!==a){Xm();Nm=a;Im=Gm="";var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";Om[a]="&e="+c+"&eid="+a;Ym()}},an=function(a,b,c){if(Am&&b){var d=um(b),e=c+d;if(!Pm[a]){a!==Nm&&(Xm(),Nm=a);Gm=Gm?Gm+"."+e:"&tr="+e;var f=b["function"];if(!f)throw Error("Error: No function name given for function call.");var g=(Pe[f]?"1":"2")+d;Im=Im?Im+"."+g:"&ti="+g;Ym();Zm()}}},bn=function(a,b,c){if(Am&&void 0!==a&&!Pm[a]){a!==Nm&&(Xm(),Nm=a);var d=c+b;Hm=Hm?Hm+"."+d:"&epr="+
d;Ym();Zm()}},cn=function(a,b,c){},Wm=void 0;var dn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};Tb();tl()||Qb("iPod");Qb("iPad");!Qb("Android")||Ub()||Tb()||Sb()||Qb("Silk");Ub();!Qb("Safari")||Ub()||(Rb()?0:Qb("Coast"))||Sb()||(Rb()?0:Qb("Edge"))||(Rb()?Pb("Microsoft Edge"):Qb("Edg/"))||(Rb()?Pb("Opera"):Qb("OPR"))||Tb()||Qb("Silk")||Qb("Android")||ul();var en={},fn=null,gn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!fn){fn={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=g.concat(h[m].split(""));en[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===fn[q]&&(fn[q]=p)}}}for(var r=en[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],A=b[v+2],B=r[x>>2],D=r[(x&3)<<4|y>>4],E=r[(y&15)<<2|A>>6],J=r[A&63];t[w++]=""+B+D+E+J}var G=0,N=u;switch(b.length-v){case 2:G=b[v+1],N=r[(G&15)<<2]||u;case 1:var Q=b[v];t[w]=""+r[Q>>2]+r[(Q&3)<<4|G>>4]+N+u}return t.join("")};var hn="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function jn(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function kn(){var a=z.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function ln(){var a,b;return null!=(b=null==(a=z.google_tag_data)?void 0:a.uach_promise)?b:null}
function mn(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}function nn(){var a=z;if(!mn(a))return null;var b=jn(a);if(b.uach_promise)return b.uach_promise;var c=a.navigator.userAgentData.getHighEntropyValues(hn).then(function(d){null!=b.uach||(b.uach=d);return d});return b.uach_promise=c};
var on,pn=function(){if(mn(z)&&(on=Ta(),!ln())){var a=nn();a&&(a.then(function(){O(95);}),a.catch(function(){O(96)}))}},rn=function(a){var b=qn.fm,c=function(g,h){try{a(g,h)}catch(m){}},d=kn();if(d)c(d);else{var e=ln();if(e){b=
Math.min(Math.max(isFinite(b)?b:0,0),1E3);var f=z.setTimeout(function(){c.ue||(c.ue=!0,O(106),c(null,Error("Timeout")))},b);e.then(function(g){c.ue||(c.ue=!0,O(104),z.clearTimeout(f),c(g))}).catch(function(g){c.ue||(c.ue=!0,O(105),z.clearTimeout(f),c(null,g))})}else c(null)}},sn=function(a,b){a&&(b.m[P.g.Od]=a.architecture,b.m[P.g.Pd]=a.bitness,a.fullVersionList&&(b.m[P.g.Qd]=a.fullVersionList.map(function(c){return encodeURIComponent(c.brand||"")+";"+encodeURIComponent(c.version||"")}).join("|")),
b.m[P.g.Rd]=a.mobile?"1":"0",b.m[P.g.Sd]=a.model,b.m[P.g.Td]=a.platform,b.m[P.g.Ud]=a.platformVersion,b.m[P.g.Vd]=a.wow64?"1":"0")};function tn(a,b,c,d){var e,f=Number(null!=a.Ab?a.Ab:void 0);0!==f&&(e=new Date((b||Ta())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,Cb:d}};var un;var yn=function(){var a=vn,b=wn,c=xn(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){qc(H,"mousedown",d);qc(H,"keyup",d);qc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},zn=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};xn().decorators.push(f)},An=function(a,b,c){for(var d=xn().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var m=g.domains,n=a,p=!!g.sameHost;if(m&&(p||n!==H.location.hostname))for(var q=0;q<m.length;q++)if(m[q]instanceof RegExp){if(m[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(m[q])||p&&0<=m[q].indexOf(n)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Wa(e,g.callback())}}return e};function xn(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Bn=/(.*?)\*(.*?)\*(.*)/,Cn=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Dn=/^(?:www\.|m\.|amp\.)+/,En=/([^?#]+)(\?[^#]*)?(#.*)?/;function Fn(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}var Hn=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sb(String(d))))}var e=b.join("*");return["1",Gn(e),e].join("*")};
function Gn(a,b){var c=[fc.userAgent,(new Date).getTimezoneOffset(),fc.userLanguage||fc.language,Math.floor(Ta()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=un)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}un=d;for(var m=4294967295,n=0;n<c.length;n++)m=m>>>8^un[(m^c.charCodeAt(n))&255];return((m^-1)>>>0).toString(36)}
function In(){return function(a){var b=$i(z.location.href),c=b.search.replace("?",""),d=Vi(c,"_gl",!1,!0)||"";a.query=Jn(d)||{};var e=Yi(b,"fragment").match(Fn("_gl"));a.fragment=Jn(e&&e[3]||"")||{}}}function Kn(a,b){var c=Fn(a).exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}return d}
var Ln=function(a,b){b||(b="_gl");var c=En.exec(a);if(!c)return"";var d=c[1],e=Kn(b,(c[2]||"").slice(1)),f=Kn(b,(c[3]||"").slice(1));e.length&&(e="?"+e);f.length&&(f="#"+f);return""+d+e+f},Mn=function(a){var b=In(),c=xn();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Wa(d,e.query),a&&Wa(d,e.fragment));return d},Jn=function(a){try{var b=Nn(a,3);if(void 0!==b){for(var c={},d=b?b.split("*"):[],e=0;e+1<d.length;e+=2){var f=d[e],g=tb(d[e+1]);c[f]=g}vb("TAGGING",6);return c}}catch(h){vb("TAGGING",
8)}};function Nn(a,b){if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Bn.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],m;a:{for(var n=g[2],p=0;p<b;++p)if(n===Gn(h,p)){m=!0;break a}m=!1}if(m)return h;vb("TAGGING",7)}}}
function On(a,b,c,d){function e(p){p=Kn(a,p);var q=p.charAt(p.length-1);p&&"&"!==q&&(p+="&");return p+n}d=void 0===d?!1:d;var f=En.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",m=f[3]||"",n=a+"="+b;d?m="#"+e(m.substring(1)):h="?"+e(h.substring(1));return""+g+h+m}
function Pn(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=An(b,1,c),e=An(b,2,c),f=An(b,3,c);if(Ya(d)){var g=Hn(d);c?Qn("_gl",g,a):Rn("_gl",g,a,!1)}if(!c&&Ya(e)){var h=Hn(e);Rn("_gl",h,a,!0)}for(var m in f)if(f.hasOwnProperty(m))a:{var n=m,p=f[m],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Rn(n,p,q);break a}if("form"===q.tagName.toLowerCase()){Qn(n,p,q);break a}}"string"==typeof q&&On(n,p,q)}}
function Rn(a,b,c,d){if(c.href){var e=On(a,b,c.href,void 0===d?!1:d);Fb.test(e)&&(c.href=e)}}
function Qn(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var m=H.createElement("input");m.setAttribute("type","hidden");m.setAttribute("name",a);m.setAttribute("value",b);c.appendChild(m)}}else if("post"===d){var n=On(a,b,c.action);Fb.test(n)&&(c.action=n)}}}
function vn(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Pn(e,e.hostname)}}catch(g){}}function wn(a){try{if(a.action){var b=Yi($i(a.action),"host");Pn(a,b)}}catch(c){}}
var Sn=function(a,b,c,d){yn();zn(a,b,"fragment"===c?2:1,!!d,!1)},Tn=function(a,b){yn();zn(a,[Xi(z.location,"host",!0)],b,!0,!0)},Un=function(){var a=H.location.hostname,b=Cn.exec(H.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Dn,""),m=e.replace(Dn,""),n;if(!(n=h===m)){var p="."+m;n=h.substring(h.length-p.length,
h.length)===p}return n},Vn=function(a,b){return!1===a?!1:a||b||Un()};var Wn=["1"],Xn={},Yn={},$n=function(a){return Xn[Zn(a)]},eo=function(a,b){b=void 0===b?!0:b;var c=Zn(a.prefix);if(!Xn[c])if(ao(c,a.path,a.domain)){if(Aj(1)){var d=Yn[Zn(a.prefix)];bo(a,d?d.id:void 0,d?d.kh:void 0)}}else{if(Aj(2)){var e=bj("auiddc");if(e){vb("TAGGING",17);Xn[c]=e;return}}if(b){var f=Zn(a.prefix),g=Xk();if(0===co(f,g,a)){var h=hc("google_tag_data",{});h._gcl_au||(h._gcl_au=g)}ao(c,a.path,a.domain)}}};
function bo(a,b,c){var d=Zn(a.prefix),e=Xn[d];if(e){var f=e.split(".");if(2===f.length){var g=Number(f[1])||0;if(g){var h=e;b&&(h=e+"."+b+"."+(c?c:Math.floor(Ta()/1E3)));co(d,h,a,1E3*g)}}}}function co(a,b,c,d){var e=al(b,"1",c.domain,c.path),f=tn(c,d);f.Cb="ad_storage";return Tk(a,e,f)}function ao(a,b,c){var d=$k(a,b,c,Wn,"ad_storage");if(!d)return!1;fo(a,d);return!0}
function fo(a,b){var c=b.split(".");5===c.length?(Xn[a]=c.slice(0,2).join("."),Yn[a]={id:c.slice(2,4).join("."),kh:Number(c[4])||0}):3===c.length?Yn[a]={id:c.slice(0,2).join("."),kh:Number(c[2])||0}:Xn[a]=b}function Zn(a){return(a||"_gcl")+"_au"}function go(a){bk()||a();fk(function(){Yj("ad_storage")&&a();gk(a,"ad_storage")},["ad_storage"])}
function ho(a){var b=Mn(!0),c=Zn(a.prefix);go(function(){var d=b[c];if(d){fo(c,d);var e=1E3*Number(Xn[c].split(".")[1]);if(e){vb("TAGGING",16);var f=tn(a,e);f.Cb="ad_storage";var g=al(d,"1",a.domain,a.path);Tk(c,g,f)}}})}function io(a,b,c,d,e){e=e||{};var f=function(){var g={},h=$k(a,e.path,e.domain,Wn,"ad_storage");h&&(g[a]=h);return g};go(function(){Sn(f,b,c,d)})};var jo=function(a){for(var b=[],c=H.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Dh:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function ko(a,b){var c=jo(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Dh]||(d[c[e].Dh]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),ia:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Dh].push(g)}}return d};var lo=/^\w+$/,mo=/^[\w-]+$/,no={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},oo=function(){if(!Fj().h()||!bk())return!0;var a=Yj("ad_storage");return null==a?!0:!!a},po=function(a,b){ak("ad_storage")?oo()?a():gk(a,"ad_storage"):b?vb("TAGGING",3):fk(function(){po(a,!0)},["ad_storage"])},ro=function(a){return qo(a).map(function(b){return b.ia})},qo=function(a){var b=[];if(!Hk(z)||!H.cookie)return b;var c=Kk(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{He:d.He},e++){var f=so(c[e]);if(null!=f){var g=f,h=g.version;d.He=g.ia;var m=g.timestamp,n=g.labels,p=Ia(b,function(q){return function(r){return r.ia===q.He}}(d));p?(p.timestamp=Math.max(p.timestamp,m),p.labels=to(p.labels,n||[])):b.push({version:h,ia:d.He,timestamp:m,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return uo(b)};function to(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function vo(a){return a&&"string"==typeof a&&a.match(lo)?a:"_gcl"}
var xo=function(){var a=$i(z.location.href),b=Yi(a,"query",!1,void 0,"gclid"),c=Yi(a,"query",!1,void 0,"gclsrc"),d=Yi(a,"query",!1,void 0,"wbraid"),e=Yi(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Vi(f,"gclid",!1);c=c||Vi(f,"gclsrc",!1);d=d||Vi(f,"wbraid",!1)}return wo(b,c,e,d)},wo=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&mo.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(mo))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},zo=function(a){var b=xo();po(function(){yo(b,!1,a)})};
function yo(a,b,c,d,e){function f(w,x){var y=Ao(w,g);y&&(Tk(y,x,h),m=!0)}c=c||{};e=e||[];var g=vo(c.prefix);d=d||Ta();var h=tn(c,d,!0);h.Cb="ad_storage";var m=!1,n=Math.round(d/1E3),p=function(w){var x=["GCL",n,w];0<e.length&&x.push(e.join("."));return x.join(".")};a.aw&&f("aw",p(a.aw[0]));a.dc&&f("dc",p(a.dc[0]));a.gf&&f("gf",p(a.gf[0]));a.ha&&f("ha",p(a.ha[0]));a.gp&&f("gp",p(a.gp[0]));if(!m&&a.gb){var q=a.gb[0],r=Ao("gb",g),t=!1;if(!b)for(var u=qo(r),v=0;v<u.length;v++)u[v].ia===q&&u[v].labels&&
0<u[v].labels.length&&(t=!0);t||f("gb",p(q))}}
var Co=function(a,b){var c=Mn(!0);po(function(){for(var d=vo(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==no[f]){var g=Ao(f,d),h=c[g];if(h){var m=Math.min(Bo(h),Ta()),n;b:{var p=m;if(Hk(z))for(var q=Kk(g,H.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(Bo(q[r])>p){n=!0;break b}n=!1}if(!n){var t=tn(b,m,!0);t.Cb="ad_storage";Tk(g,h,t)}}}}yo(wo(c.gclid,c.gclsrc),!1,b)})},Ao=function(a,b){var c=no[a];if(void 0!==c)return b+c},Bo=function(a){return 0!==Do(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function so(a){var b=Do(a.split("."));return 0===b.length?null:{version:b[0],ia:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Do(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!mo.test(a[2])?[]:a}
var Eo=function(a,b,c,d,e){if(Ha(b)&&Hk(z)){var f=vo(e),g=function(){for(var h={},m=0;m<a.length;++m){var n=Ao(a[m],f);if(n){var p=Kk(n,H.cookie,void 0,"ad_storage");p.length&&(h[n]=p.sort()[p.length-1])}}return h};po(function(){Sn(g,b,c,d)})}},uo=function(a){return a.filter(function(b){return mo.test(b.ia)})},Fo=function(a,b){if(Hk(z)){for(var c=vo(b.prefix),d={},e=0;e<a.length;e++)no[a[e]]&&(d[a[e]]=no[a[e]]);po(function(){l(d,function(f,g){var h=Kk(c+g,H.cookie,void 0,"ad_storage");h.sort(function(t,
u){return Bo(u)-Bo(t)});if(h.length){var m=h[0],n=Bo(m),p=0!==Do(m.split(".")).length?m.split(".").slice(3):[],q={},r;r=0!==Do(m.split(".")).length?m.split(".")[2]:void 0;q[f]=[r];yo(q,!0,b,n,p)}})})}};function Go(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ho=function(a){function b(e,f,g){g&&(e[f]=g)}if(bk()){var c=xo();if(Go(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Tn(function(){return d},3);Tn(function(){var e={};return e._up="1",e},1)}}},Io=function(a,b,c,d){var e=[];c=c||{};if(!oo())return e;var f=qo(a);if(!f.length)return e;for(var g=0;g<f.length;g++)-1===(f[g].labels||[]).indexOf(b)?e.push(0):e.push(1);if(d)return e;if(1!==e[0]){var h=f[0],m=f[0].timestamp,n=[h.version,Math.round(m/
1E3),h.ia].concat(h.labels||[],[b]).join("."),p=tn(c,m,!0);p.Cb="ad_storage";Tk(a,n,p)}return e};function Jo(a,b){var c=vo(b),d=Ao(a,c);if(!d)return 0;for(var e=qo(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}function Ko(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b}var Lo=function(a){var b=Math.max(Jo("aw",a),Ko(oo()?ko():{}));return Math.max(Jo("gb",a),Ko(oo()?ko("_gac_gb",!0):{}))>b};var Qo=/[A-Z]+/,Ro=/\s/,So=function(a){if(k(a)){a=Ra(a);var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qo.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e]||Ro.test(d[e])&&("AW"!==c||1!==e))return;return{id:a,prefix:c,Z:c+"-"+d[0],K:d}}}}},Uo=function(a){for(var b={},c=0;c<a.length;++c){var d=So(a[c]);d&&(b[d.id]=d)}To(b);var e=[];l(b,function(f,g){e.push(g)});return e};
function To(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.K[1]&&b.push(d.Z)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vo=function(a,b,c,d){var e=nc(),f;if(1===e)a:{var g=Yh;g=g.toLowerCase();for(var h="https://"+g,m="http://"+g,n=1,p=H.getElementsByTagName("script"),q=0;q<p.length&&100>q;q++){var r=p[q].src;if(r){r=r.toLowerCase();if(0===r.indexOf(m)){f=3;break a}1===n&&0===r.indexOf(h)&&(n=2)}}f=n}else f=e;return(2===f||d||"http:"!=z.location.protocol?a:b)+c};var gp=function(a,b,c){this.target=a;this.eventName=b;this.h=c;this.m={};this.metadata=Uc(c.eventMetadata||{});this.H=!1};gp.prototype.copyToHitData=function(a,b){var c=S(this.h,a);void 0!==c?this.m[a]=c:void 0!==b&&(this.m[a]=b)};var hp=function(a,b,c){var d=Ii(a.target.Z);return d&&d.hasOwnProperty(b)?d[b]:c};function ip(a){return{getDestinationId:function(){return a.target.Z},getEventName:function(){return a.eventName},setEventName:function(b){a.eventName=b},getHitData:function(b){return a.m[b]},setHitData:function(b,c){a.m[b]=c},setHitDataIfNotDefined:function(b,c){void 0===a.m[b]&&(a.m[b]=c)},copyToHitData:function(b,c){a.copyToHitData(b,c)},getMetadata:function(b){return a.metadata[b]},setMetadata:function(b,c){a.metadata[b]=c},abort:function(){a.H=!0},getFromEventContext:function(b){return S(a.h,
b)},Df:function(){return a},getHitKeys:function(){return Object.keys(a.m)}}};var kp=function(a){var b=jp[a.target.Z];if(!a.H&&b)for(var c=ip(a),d=0;d<b.length;++d){try{b[d](c)}catch(e){a.H=!0}if(a.H)break}},lp=function(a,b){var c=jp[a];c||(c=jp[a]=[]);c.push(b)},jp={};var Dp=function(a,b,c,d,e,f,g,h,m,n,p,q){this.eventId=a;this.priorityId=b;this.h=c;this.N=d;this.m=e;this.C=f;this.T=g;this.B=h;this.eventMetadata=m;this.R=n;this.W=p;this.F=q},S=function(a,b,c){if(void 0!==a.h[b])return a.h[b];if(void 0!==a.N[b])return a.N[b];if(void 0!==a.m[b])return a.m[b];Am&&Ep(a,a.C[b],a.T[b])&&(O(71),O(79));return void 0!==a.C[b]?a.C[b]:void 0!==a.B[b]?a.B[b]:c},Fp=function(a){function b(g){for(var h=Object.keys(g),m=0;m<h.length;++m)c[h[m]]=1}var c={};b(a.h);b(a.N);b(a.m);
b(a.C);if(Am)for(var d=Object.keys(a.T),e=0;e<d.length;e++){var f=d[e];if("event"!==f&&"gtm"!==f&&"tagTypeBlacklist"!==f&&!c.hasOwnProperty(f)){O(71);O(80);break}}return Object.keys(c)},Gp=function(a,b,c){function d(m){Tc(m)&&l(m,function(n,p){f=!0;e[n]=p})}var e={},f=!1;c&&1!==c||(d(a.B[b]),d(a.C[b]),d(a.m[b]),d(a.N[b]));c&&2!==c||d(a.h[b]);if(Am){var g=f,h=e;e={};f=!1;c&&1!==c||(d(a.B[b]),d(a.T[b]),d(a.m[b]),d(a.N[b]));c&&2!==c||d(a.h[b]);if(f!==g||Ep(a,e,h))O(71),O(81);f=g;e=h}return f?e:void 0},
Hp=function(a){var b=[P.g.Ic,P.g.Ec,P.g.Fc,P.g.Gc,P.g.Hc,P.g.Jc,P.g.Kc],c={},d=!1,e=function(h){for(var m=0;m<b.length;m++)void 0!==h[b[m]]&&(c[b[m]]=h[b[m]],d=!0);return d};if(e(a.h)||e(a.N)||e(a.m))return c;e(a.C);if(Am){var f=c,g=d;c={};d=!1;e(a.T);Ep(a,c,f)&&(O(71),O(82));c=f;d=g}if(d)return c;e(a.B);return c},Ep=function(a,b,c){if(!Am)return!1;try{if(b===c)return!1;var d=Rc(b);if(d!==Rc(c)||!(Tc(b)&&Tc(c)||"array"===d))return!0;if("array"===d){if(b.length!==c.length)return!0;for(var e=0;e<b.length;e++)if(Ep(a,
b[e],c[e]))return!0}else{for(var f in c)if(!b.hasOwnProperty(f))return!0;for(var g in b)if(!c.hasOwnProperty(g)||Ep(a,b[g],c[g]))return!0}}catch(h){O(72)}return!1},Ip=function(a,b){this.dk=a;this.ek=b;this.C={};this.Ei={};this.h={};this.N={};this.m={};this.Xd={};this.B={};this.nd=function(){};this.pb=function(){};this.T=!1},Jp=function(a,b){a.C=b;return a},Kp=function(a,b){a.Ei=b;return a},Lp=function(a,b){a.h=b;return a},Mp=function(a,b){a.N=b;return a},Np=function(a,b){a.m=b;return a},Op=function(a,
b){a.Xd=b;return a},Pp=function(a,b){a.B=b||{};return a},Qp=function(a,b){a.nd=b;return a},Rp=function(a,b){a.pb=b;return a},Sp=function(a){a.T=!0;return a},Tp=function(a){return new Dp(a.dk,a.ek,a.C,a.Ei,a.h,a.N,a.m,a.Xd,a.B,a.nd,a.pb,a.T)};function Yp(){return"attribution-reporting"}function Zp(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var $p=!1;function aq(){if(Zp("join-ad-interest-group")&&Fa(fc.joinAdInterestGroup))return!0;$p||(Dl(),$p=!0);return Zp("join-ad-interest-group")&&Fa(fc.joinAdInterestGroup)}
function bq(a,b){var c=void 0;try{c=H.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>Ta()-d){vb("TAGGING",9);return}}else try{if(50<=H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){vb("TAGGING",10);return}}catch(e){}oc(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:Ta()},c)}function cq(){return"https://td.doubleclick.net"};var dq=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),eq=/^~?[\w-]+(?:\.~?[\w-]+)*$/,fq=/^\d+\.fls\.doubleclick\.net$/,gq=/;gac=([^;?]+)/,hq=/;gacgb=([^;?]+)/,iq=/;gclaw=([^;?]+)/,jq=/;gclgb=([^;?]+)/;
function kq(a,b){if(fq.test(H.location.host)){var c=H.location.href.match(b);return c&&2==c.length&&c[1].match(dq)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],g=a[e],h=0;h<g.length;h++)f.push(g[h].ia);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var lq=function(a,b,c){var d=oo()?ko("_gac_gb",!0):{},e=[],f=!1,g;for(g in d){var h=Io("_gac_gb_"+g,a,b,c);f=f||0!==h.length&&h.some(function(m){return 1===m});e.push(g+":"+h.join(","))}return{Kk:f?e.join(";"):"",Jk:kq(d,hq)}};function mq(a,b,c){if(fq.test(H.location.host)){var d=H.location.href.match(c);if(d&&2==d.length&&d[1].match(eq))return[{ia:d[1]}]}else return qo((a||"_gcl")+b);return[]}
var nq=function(a){return mq(a,"_aw",iq).map(function(b){return b.ia}).join(".")},oq=function(a){return mq(a,"_gb",jq).map(function(b){return b.ia}).join(".")},pq=function(a,b){var c=Io((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var qq=function(){if(Fa(z.__uspapi)){var a="";try{z.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};var ar={J:{Hh:"ads_conversion_hit",Pf:"container_execute_start",Lh:"container_setup_end",Qf:"container_setup_start",Kh:"container_execute_end",Mh:"container_yield_end",Rf:"container_yield_start",Bi:"event_execute_end",Ci:"event_setup_end",Wd:"event_setup_start",Di:"ga4_conversion_hit",Yd:"page_load",lm:"pageview",Sb:"snippet_load",Oi:"tag_callback_error",Pi:"tag_callback_failure",Qi:"tag_callback_success",Ri:"tag_execute_end",Wc:"tag_execute_start"}};var br=!1,cr="L S Y E TC HTC".split(" "),dr=["S","E"],er=["TS","TE"];
var Fr=function(a){},Gr=function(a){},fr=function(a,b,c,d,e,f){var g;g=void 0===g?!1:g;var h={};return h},gr=function(a){var b=!1;return b},hr=function(a,b){},Hr=function(){var a={};return a},yr=function(a){a=void 0===a?!0:a;var b={};return b},Ir=function(){},Jr=function(a,b,c){},Kr=function(){var a=fr("PAGEVIEW",
K.D);if(qr(a.entryName,"mark")[0]){var b=Ac();b.clearMarks(a.entryName);b.clearMeasures("GTM-"+K.D+":"+ar.J.Yd+":to:PAGEVIEW")}var c=fr(ar.J.Yd,K.D);gr(a)&&hr(a,c)};var Lr=function(a,b){var c=z,d,e=c.GooglebQhCsO;e||(e={},c.GooglebQhCsO=e);d=e;if(d[a])return!1;d[a]=[];d[a][0]=b;return!0};var Mr=function(a,b,c){var d=yl(a,"fmt");if(b){var e=yl(a,"random"),f=yl(a,"label")||"";if(!e)return!1;var g=gn(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!Lr(g,b))return!1}d&&4!=d&&(a=Al(a,"rfmt",d));var h=Al(a,"fmt",4);mc(h,function(){z.google_noFurtherRedirects&&b&&b.call&&(z.google_noFurtherRedirects=null,b())},void 0,c,H.getElementsByTagName("script")[0].parentElement||void 0);return!0};var bs=function(){this.h={}},cs=function(a,b,c){null!=c&&(a.h[b]=c)},ds=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},fs=function(a,b,c,d){};function hs(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return $i(""+c+b).href}}function is(){return!!Jh.tf&&"SGTM_TOKEN"!==Jh.tf.split("@@").join("")};var ks=function(a,b,c,d){if(!js()&&!kl(a)){var e=c?"/gtag/js":"/gtm.js",f="?id="+encodeURIComponent(a)+"&l="+Jh.ka,g=0===a.indexOf("GTM-");g||(f+="&cx=c");var h=is();h&&(f+="&sign="+Jh.tf);var m=Sh||Uh?hs(b,e+f):void 0;if(!m){var n=Jh.Ne+e;h&&gc&&g&&(n=gc.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0]);m=Vo("https://","http://",n+f)}var p=ll();el().container[a]={state:1,context:d,parent:p};mc(m)}},ls=function(a,b,c){var d;if(d=!js()){var e=el().destination[a];d=!(e&&e.state)}if(d)if(ml())el().destination[a]=
{state:0,transportUrl:b,context:c,parent:ll()},O(91);else{var f="/gtag/destination?id="+encodeURIComponent(a)+"&l="+Jh.ka+"&cx=c";is()&&(f+="&sign="+Jh.tf);var g=Sh||Uh?hs(b,f):void 0;g||(g=Vo("https://","http://",Jh.Ne+f));el().destination[a]={state:1,context:c,parent:ll()};mc(g)}};function js(){if(cl()){return!0}return!1};var ms=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ns={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},os={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ps="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),ss=function(a){var b=si("gtm.allowlist")||si("gtm.whitelist");b&&O(9);Qh&&(b=["google","gtagfl","lcl","zone"]);qs()&&(Qh?
O(116):O(117),rs&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728.")));var c=b&&Za(Qa(b),ns),d=si("gtm.blocklist")||si("gtm.blacklist");d||(d=si("tagTypeBlacklist"))&&O(3);d?O(8):d=[];qs()&&(d=Qa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Qa(d).indexOf("google")&&O(2);var e=d&&Za(Qa(d),os),f={};return function(g){var h=g&&g[ne.Qb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var m=bi[h]||
[],n=a(h,m);if(b){var p;if(p=n)a:{if(0>c.indexOf(h))if(m&&0<m.length)for(var q=0;q<m.length;q++){if(0>c.indexOf(m[q])){O(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var r=!1;if(d){var t=0<=e.indexOf(h);if(t)r=t;else{var u=Ma(e,m||[]);u&&O(10);r=u}}var v=!n||r;v||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(v=Ma(e,ps));return f[h]=v}},rs=!1;
var qs=function(){return ms.test(z.location&&z.location.hostname)};var ts={initialized:11,complete:12,interactive:13},us={},vs=Object.freeze((us[P.g.Pa]=!0,us)),ws=0<=H.location.search.indexOf("?gtm_diagnostics=")||0<=H.location.search.indexOf("&gtm_diagnostics="),ys=function(a,b,c){if(Am&&"config"===a&&!(1<So(b).K.length)){var d,e=hc("google_tag_data",{});e.td||(e.td={});d=e.td;var f=Uc(c.C);Uc(c.h,f);var g=[],h;for(h in d){var m=xs(d[h],f);m.length&&(ws&&console.log(m),g.push(h))}if(g.length){if(g.length){var n=b+"*"+g.join(".");Jm=Jm?Jm+"!"+n:"&tdc="+n}vb("TAGGING",
ts[H.readyState]||14)}d[b]=f}};function zs(a,b){var c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=!0);for(var e in a)a.hasOwnProperty(e)&&(c[e]=!0);return c}function xs(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?"":d;if(a===b)return[];var e=function(q,r){var t=r[q];return void 0===t?vs[q]:t},f;for(f in zs(a,b)){var g=(d?d+".":"")+f,h=e(f,a),m=e(f,b),n="object"===Rc(h)||"array"===Rc(h),p="object"===Rc(m)||"array"===Rc(m);if(n&&p)xs(h,m,c,g);else if(n||p||h!==m)c[g]=!0}return Object.keys(c)};var As=!1,Bs=0,Cs=[];function Ds(a){if(!As){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){As=!0;for(var e=0;e<Cs.length;e++)I(Cs[e])}Cs.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Es(){if(!As&&140>Bs){Bs++;try{H.documentElement.doScroll("left"),Ds()}catch(a){z.setTimeout(Es,50)}}}var Fs=function(a){As?a():Cs.push(a)};var Gs=function(){this.C=0;this.h={}};Gs.prototype.addListener=function(a,b,c){var d=++this.C;this.h[a]=this.h[a]||{};this.h[a][String(d)]={listener:b,lb:c};return d};Gs.prototype.m=function(a,b){var c=this.h[a],d=String(b);if(!c||!c[d])return!1;delete c[d];return!0};Gs.prototype.B=function(a,b){var c=[];l(this.h[a],function(d,e){0>c.indexOf(e.listener)&&(void 0===e.lb||0<=b.indexOf(e.lb))&&c.push(e.listener)});return c};var Hs=function(a,b,c){return{entityType:a,indexInOriginContainer:b,nameInOriginContainer:c,originContainerId:K.D}};function Is(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var Ks=function(a,b){this.h=!1;this.C=[];this.N={tags:[]};this.T=!1;this.m=this.B=0;Js(this,a,b)},Ls=function(a,b,c,d){if(Nh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Tc(d)&&(e=Uc(d,e));e.id=c;e.status="timeout";return a.N.tags.push(e)-1},Ms=function(a,b,c,d){var e=a.N.tags[b];e&&(e.status=c,e.executionTime=d)},Ns=function(a){if(!a.h){for(var b=a.C,c=0;c<b.length;c++)b[c]();a.h=!0;a.C.length=0}},Js=function(a,b,c){void 0!==b&&a.vf(b);c&&z.setTimeout(function(){return Ns(a)},Number(c))};
Ks.prototype.vf=function(a){var b=this,c=Va(function(){return I(function(){a(K.D,b.N)})});this.h?c():this.C.push(c)};var Os=function(a){a.B++;return Va(function(){a.m++;a.T&&a.m>=a.B&&Ns(a)})},Ps=function(a){a.T=!0;a.m>=a.B&&Ns(a)};var Qs={},Ss=function(){return z[Rs()]},Ts=!1;
function Rs(){return z.GoogleAnalyticsObject||"ga"}
var Ws=function(a){},Xs=function(a,b){return function(){var c=Ss(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),m=0>g.indexOf("&tid="+b);m&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};function bt(a,b,c,d){var e=Ne[a],f=ct(a,b,c,d);if(!f)return null;var g=Xe(e[ne.Ni],c,[]);if(g&&g.length){var h=g[0];f=bt(h.index,{R:f,W:1===h.cj?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ct(a,b,c,d){function e(){if(f[ne.jk])h();else{var w=Ye(f,c,[]),x=w[ne.Cj];if(null!=x)for(var y=0;y<x.length;y++)if(!tk(x[y])){h();return}var A=Ls(c.Tb,String(f[ne.Qb]),Number(f[ne.ce]),w[ne.kk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var G=Ta()-J;an(c.id,Ne[a],"5");Ms(c.Tb,A,"success",G);U(70)&&Jr(c,f,ar.J.Qi);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var G=Ta()-J;an(c.id,Ne[a],"6");Ms(c.Tb,A,"failure",G);U(70)&&Jr(c,f,ar.J.Pi);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);an(c.id,f,"1");var D=function(){var G=Ta()-J;an(c.id,f,"7");Ms(c.Tb,A,"exception",G);U(70)&&Jr(c,f,ar.J.Oi);B||(B=!0,h())};if(U(70)){var E=fr(ar.J.Wc,K.D,c.id,Number(f[ne.ce]),c.name,um(f));gr(E)}var J=Ta();try{We(w,{event:c,index:a,type:1})}catch(G){D(G)}U(70)&&Jr(c,f,ar.J.Ri)}}var f=Ne[a],g=b.R,h=b.W,m=b.terminate;if(c.fh(f))return null;var n=Xe(f[ne.Si],c,[]);if(n&&n.length){var p=n[0],q=bt(p.index,{R:g,W:h,terminate:m},c,d);if(!q)return null;
g=q;h=2===p.cj?m:q}if(f[ne.Ji]||f[ne.mk]){var r=f[ne.Ji]?Oe:c.Wl,t=g,u=h;if(!r[a]){e=Va(e);var v=dt(a,r,e);g=v.R;h=v.W}return function(){r[a](t,u)}}return e}function dt(a,b,c){var d=[],e=[];b[a]=et(d,e,c);return{R:function(){b[a]=ft;for(var f=0;f<d.length;f++)d[f]()},W:function(){b[a]=gt;for(var f=0;f<e.length;f++)e[f]()}}}function et(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ft(a){a()}function gt(a,b){b()};var it=function(a,b){return 1===arguments.length?ht("set",a):ht("set",a,b)},jt=function(a,b){return 1===arguments.length?ht("config",a):ht("config",a,b)},kt=function(a,b,c){c=c||{};c[P.g.Pb]=a;return ht("event",b,c)};function ht(a){return arguments}var lt=function(){this.h=[];this.m=[]};lt.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.m.length;f++)try{this.m[f](e)}catch(g){}};lt.prototype.listen=function(a){this.m.push(a)};
lt.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};lt.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var nt=function(a,b,c){mt().enqueue(a,b,c)},pt=function(){var a=ot;mt().listen(a)};function mt(){var a=Kh.mb;a||(a=new lt,Kh.mb=a);return a}var bu=function(a){var b=Kh.zones;return b?b.getIsAllowedFn(gl(),a):function(){return!0}},cu=function(a){var b=Kh.zones;return b?b.isActive(gl(),a):!0};var fu=function(a,b){for(var c=[],d=0;d<Ne.length;d++)if(a[d]){var e=Ne[d];var f=Os(b.Tb);try{var g=bt(d,{R:f,W:f,terminate:f},b,d);if(g){var h=e["function"];if(!h)throw"Error: No function name given for function call.";var m=Pe[h];c.push({uj:d,mj:(m?m.priorityOverride||0:0)||Is(e[ne.Qb],1)||0,execute:g})}else du(d,b),f()}catch(p){f()}}c.sort(eu);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
var hu=function(a,b){if(!gu)return!1;var c=a["gtm.triggers"]&&String(a["gtm.triggers"]),d=gu.B(a.event,c?String(c).split(","):[]);if(!d.length)return!1;for(var e=0;e<d.length;++e){var f=Os(b);try{d[e](a,f)}catch(g){f()}}return!0};function eu(a,b){var c,d=b.mj,e=a.mj;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.uj,h=b.uj;f=g>h?1:g<h?-1:0}return f}
function du(a,b){if(Am){var c=function(d){var e=b.fh(Ne[d])?"3":"4",f=Xe(Ne[d][ne.Ni],b,[]);f&&f.length&&c(f[0].index);an(b.id,Ne[d],e);var g=Xe(Ne[d][ne.Si],b,[]);g&&g.length&&c(g[0].index)};c(a)}}var iu=!1,gu;var ju=function(){gu||(gu=new Gs);return gu};
var ou=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(U(70)){var e=fr(ar.J.Wd,K.D,b,void 0,d);gr(e)}if("gtm.js"===d){if(iu)return!1;iu=!0}var f,g=!1;if(cu(b))f=bu(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==d)return!1;g=!0;f=bu(Number.MAX_SAFE_INTEGER)}$m(b,d);var h=a.eventCallback,m=a.eventTimeout,n={id:b,priorityId:c,name:d,fh:ss(f),Wl:[],ij:function(){O(6);vb("HEALTH",0)},Wi:ku(),Xi:lu(b),Tb:new Ks(function(){if(U(70)){var v=fr(ar.J.Bi,K.D,b,void 0,
d);if(gr(v)){var w=fr(ar.J.Wd,K.D,b,void 0,d);hr(v,w)}if("gtm.load"===d){var x=fr(ar.J.Kh,K.D);if(gr(x)){var y=fr(ar.J.Pf,K.D);hr(x,y)}Ir();}}h&&h.apply(h,[].slice.call(arguments,0))},m)},p=gf(n);g&&(p=mu(p));if(U(70)){var q=fr(ar.J.Ci,K.D,b,void 0,d);if(gr(q)){var r=
fr(ar.J.Wd,K.D,b,void 0,d);hr(q,r)}}var t=fu(p,n),u=!1;u=hu(a,n.Tb);Ps(n.Tb);"gtm.js"!==d&&"gtm.sync"!==d||Ws(K.D);return nu(p,t)||u};function lu(a){return function(b){Am&&(Yc(b)||cn(a,"input",b))}}function ku(){var a={};a.event=xi("event",1);a.ecommerce=xi("ecommerce",1);a.gtm=xi("gtm");a.eventModel=xi("eventModel");return a}
function mu(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(Ne[c][ne.Qb]);if(Mh[d]||void 0!==Ne[c][ne.nk]||li[d]||Is(d,2))b[c]=!0}return b}function nu(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Ne[c]&&!Nh[String(Ne[c][ne.Qb])])return!0;return!1}var qu=function(a,b,c,d){pu.push("event",[b,a],c,d)},ru=function(a,b,c,d){pu.push("get",[a,b],c,d)},su=function(){this.status=1;this.N={};this.h={};this.m={};this.T=null;this.C={};this.B=!1},tu=function(a,b,c,d){var e=Ta();this.type=a;this.m=e;this.da=b||"";this.h=c;this.messageContext=d},uu=function(){this.m={};this.B={};this.h=[]},vu=function(a,b){var c=So(b);return a.m[c.Z]=a.m[c.Z]||new su},wu=function(a,b,c,d){if(d.da){var e=vu(a,d.da),f=e.T;if(f){var g=Uc(c),h=Uc(e.N[d.da]),m=Uc(e.C),n=Uc(e.h),
p=Uc(a.B),q={};if(Am)try{q=Uc(pi)}catch(v){O(72)}var r=So(d.da).prefix,t=function(v){bn(d.messageContext.eventId,r,v);var w=g[P.g.fc];w&&I(w)},u=Tp(Rp(Qp(Pp(Np(Mp(Op(Lp(Kp(Jp(new Ip(d.messageContext.eventId,d.messageContext.priorityId),g),h),m),n),p),q),d.messageContext.eventMetadata),function(){if(t){var v=t;t=void 0;v("2")}}),function(){if(t){var v=t;t=void 0;v("3")}}));try{bn(d.messageContext.eventId,r,"1"),ys(d.type,d.da,u),f(d.da,b,d.m,u)}catch(v){bn(d.messageContext.eventId,r,"4")}}}};
uu.prototype.register=function(a,b,c){var d=vu(this,a);3!==d.status&&(d.T=b,d.status=3,c&&(Uc(d.h,c),d.h=c),this.flush())};uu.prototype.push=function(a,b,c,d){if(void 0!==c){if(!So(c))return;if(c){var e=So(c);e&&1===vu(this,c).status&&(vu(this,c).status=2,this.push("require",[{}],e.Z,{}))}vu(this,c).B&&(d.deferrable=!1)}this.h.push(new tu(a,c,b,d));d.deferrable||this.flush()};
uu.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.h.length;){var f=this.h[0];if(f.messageContext.deferrable)!f.da||vu(this,f.da).B?(f.messageContext.deferrable=!1,this.h.push(f)):c.push(f),this.h.shift();else{var g=void 0;switch(f.type){case "require":g=vu(this,f.da);if(3!==g.status&&!a){this.h.push.apply(this.h,c);return}break;case "set":l(f.h[0],function(r,t){Uc(ab(r,t),b.B)});break;case "config":g=vu(this,f.da);e.Db={};l(f.h[0],function(r){return function(t,u){Uc(ab(t,u),r.Db)}}(e));
var h=!!e.Db[P.g.Uc];delete e.Db[P.g.Uc];var m=So(f.da),n=m.Z===m.id;h||(n?g.C={}:g.N[f.da]={});g.B&&h||wu(this,P.g.ra,e.Db,f);g.B=!0;n?Uc(e.Db,g.C):(Uc(e.Db,g.N[f.da]),O(70));d=!0;break;case "event":g=vu(this,f.da);e.Ge={};l(f.h[0],function(r){return function(t,u){Uc(ab(t,u),r.Ge)}}(e));wu(this,f.h[1],e.Ge,f);break;case "get":g=vu(this,f.da);var p={},q=(p[P.g.Oa]=f.h[0],p[P.g.cb]=f.h[1],p);wu(this,P.g.Fa,q,f)}this.h.shift();xu(this,f)}e={Db:e.Db,Ge:e.Ge}}this.h.push.apply(this.h,c);d&&this.flush()};
var xu=function(a,b){if("require"!==b.type)if(b.da)for(var c=vu(a,b.da).m[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.m)if(a.m.hasOwnProperty(e)){var f=a.m[e];if(f&&f.m)for(var g=f.m[b.type]||[],h=0;h<g.length;h++)g[h]()}},yu=function(a,b){var c=pu,d=Uc(b);Uc(vu(c,a).h,d);vu(c,a).h=d},pu=new uu;var pf;var zu={},Au={},Bu=function(a){for(var b=[],c=[],d={},e=0;e<a.length;d={Le:d.Le,Ie:d.Ie},e++){var f=a[e];if(0<=f.indexOf("-"))d.Le=So(f),d.Le&&(Ia(hl(),function(p){return function(q){return p.Le.Z===q}}(d))?b.push(f):c.push(f));else{var g=zu[f]||[];d.Ie={};g.forEach(function(p){return function(q){return p.Ie[q]=!0}}(d));for(var h=gl(),m=0;m<h.length;m++)if(d.Ie[h[m]]){b=b.concat(hl());break}var n=Au[f]||[];n.length&&(b=b.concat(n))}}return{vl:b,yl:c}},Cu=function(a){l(zu,function(b,c){var d=c.indexOf(a);
0<=d&&c.splice(d,1)})},Du=function(a){l(Au,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var Eu="HA GF G UA AW DC MC".split(" "),Fu=!1,Gu=!1;function Hu(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:mi()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}function Iu(a){return!!(a&&a.parent&&a.context&&1===a.context.source&&0!==a.parent.ctid.indexOf("GTM-"))}var Ju=void 0,Ku=void 0,Lu=!1;function Mu(a){var b;(b=a&&a[P.g.Qa])||(b=pu.B[P.g.Qa]);return b}
var Nu={config:function(a,b){var c=Hu(a,b);if(!(2>a.length)&&k(a[1])){var d={};if(2<a.length){if(void 0!=a[2]&&!Tc(a[2])||3<a.length)return;d=a[2]}var e=So(a[1]);if(e){if(!Lu){var f;a:{if(!K.lf){var g=il(ll()),h;if(Iu(g))for(var m=g.parent;m;){h=m.isDestination;var n=il(m);if(!Iu(n)){f={Ll:n,sl:h};break a}m=n.parent}}f=void 0}var p=f;p&&(Ju=p.Ll,Ku=p.sl);Lu=!0}$m(c.eventId,"gtag.config");var q=e.Z,r=e.id!==q;if(r?-1===hl().indexOf(q):-1===gl().indexOf(q)){if(!U(61)||!d[P.g.fb]){var t=Mu(d);r?ls(q,
t,{source:2,fromContainerExecution:b.fromContainerExecution}):(void 0!==Ju&&-1!==Ju.containers.indexOf(q)&&O(129),ks(q,t,!0,{source:2,fromContainerExecution:b.fromContainerExecution}))}}else{if(Ph&&!r&&!d[P.g.Uc]){var u=Gu;Gu=!0;if(u)return}Fu||O(43);if(!b.noTargetGroup)if(r){Du(e.id);var v=e.id,w=d[P.g.Hd]||"default";w=String(w).split(",");for(var x=0;x<w.length;x++){var y=Au[w[x]]||[];Au[w[x]]=y;0>y.indexOf(v)&&y.push(v)}}else{Cu(e.id);var A=e.id,B=d[P.g.Hd]||"default";B=B.toString().split(",");
for(var D=0;D<B.length;D++){var E=zu[B[D]]||[];zu[B[D]]=E;0>E.indexOf(A)&&E.push(A)}}delete d[P.g.Hd];var J=b.eventMetadata||{};J.hasOwnProperty("is_external_event")||(J.is_external_event=!b.fromContainerExecution);b.eventMetadata=J;delete d[P.g.fc];var G=r?[e.id]:hl();Ju&&(O(128),Ku&&O(130));for(var N=0;N<G.length;N++){var Q=Uc(b);pu.push("config",[d],G[N],Q)}}}}},consent:function(a,b){if(3===a.length){O(39);var c=Hu(a,b),d=a[1];"default"===d?pk(a[2]):"update"===d?qk(a[2],c):"declare"===d?b.fromContainerExecution&&
ok(a[2]):"core_platform_services"===d&&rk(a[2])}},event:function(a,b){var c=a[1];if(!(2>a.length)&&k(c)){var d;if(2<a.length){if(!Tc(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},g=(f.event=c,f);e&&(g.eventModel=Uc(e),e[P.g.fc]&&(g.eventCallback=e[P.g.fc]),e[P.g.Cd]&&(g.eventTimeout=e[P.g.Cd]));var h=Hu(a,b),m=h.eventId,n=h.priorityId;g["gtm.uniqueEventId"]=m;n&&(g["gtm.priorityId"]=n);if("optimize.callback"===c)return g.eventModel=g.eventModel||{},g;var p;var q=d,r=q&&q[P.g.Pb];void 0===
r&&(r=si(P.g.Pb,2),void 0===r&&(r="default"));if(k(r)||Ha(r)){var t=r.toString().replace(/\s+/g,"").split(","),u=Bu(t),v=u.vl,w=u.yl;if(w.length)for(var x=Mu(q),y=0;y<w.length;y++){var A=So(w[y]);A&&ls(A.Z,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=Uo(v)}else p=void 0;var B=p;if(B){$m(m,c);for(var D=[],E=0;E<B.length;E++){var J=B[E],G=Uc(b);if(-1!==Eu.indexOf(J.prefix)){var N=Uc(d),Q=G.eventMetadata||{};Q.hasOwnProperty("is_external_event")||(Q.is_external_event=!G.fromContainerExecution);
G.eventMetadata=Q;delete N[P.g.fc];qu(c,N,J.id,G)}D.push(J.id)}g.eventModel=g.eventModel||{};0<B.length?g.eventModel[P.g.Pb]=D.join():delete g.eventModel[P.g.Pb];Fu||O(43);U(101)&&void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:g}}},get:function(a,b){O(53);if(4===a.length&&k(a[1])&&k(a[2])&&Fa(a[3])){var c=So(a[1]),d=String(a[2]),e=a[3];if(c){Fu||O(43);var f=Mu();if(!Ia(hl(),function(h){return c.Z===h}))ls(c.Z,f,{source:4,fromContainerExecution:b.fromContainerExecution});
else if(-1!==Eu.indexOf(c.prefix)){Hu(a,b);var g={};hk(Uc((g[P.g.Oa]=d,g[P.g.cb]=e,g)));ru(d,function(h){I(function(){return e(h)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){Fu=!0;var c=Hu(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(a){if(3===a.length&&k(a[1])&&Fa(a[2])){var b=a[1],c=a[2],d=pf.m;d.h[b]?d.h[b].push(c):d.h[b]=[c];
if(O(74),"all"===a[1]){O(75);var e=!1;try{e=a[2](K.D,"unknown",{})}catch(f){}e||O(76)}}else{O(73);}},set:function(a,b){var c;2==a.length&&Tc(a[1])?c=Uc(a[1]):3==a.length&&k(a[1])&&(c={},Tc(a[2])||Ha(a[2])?c[a[1]]=Uc(a[2]):c[a[1]]=a[2]);if(c){var d=Hu(a,b),e=d.eventId,f=d.priorityId;Uc(c);var g=Uc(c);pu.push("set",[g],void 0,
b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);U(30)&&delete c.event;b.overwriteModelFields=!0;return c}}},Ou={policy:!0};var Pu=function(a){var b=z[Jh.ka].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},Qu=function(a){var b=z[Jh.ka],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Ru=!1,Su=[];function Tu(){if(!Ru){Ru=!0;for(var a=0;a<Su.length;a++)I(Su[a])}}var Uu=function(a){Ru?I(a):Su.push(a)};var kv=function(a){if(jv(a))return a;this.h=a};kv.prototype.getUntrustedMessageValue=function(){return this.h};var jv=function(a){return!a||"object"!==Rc(a)||Tc(a)?!1:"getUntrustedMessageValue"in a};kv.prototype.getUntrustedMessageValue=kv.prototype.getUntrustedMessageValue;var lv=0,mv={},nv=[],ov=[],pv=!1,qv=!1;function rv(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}var sv=function(a){return z[Jh.ka].push(a)},tv=function(a,b,c){a.eventCallback=b;c&&(a.eventTimeout=c);return sv(a)},uv=function(a,b){var c=Kh[Jh.ka],d=c?c.subscribers:1,e=0,f=!1,g=void 0;b&&(g=z.setTimeout(function(){f||(f=!0,a());g=void 0},b));return function(){++e===d&&(g&&(z.clearTimeout(g),g=void 0),f||(a(),f=!0))}};
function vv(a,b){var c=a._clear||b.overwriteModelFields;l(a,function(e,f){"_clear"!==e&&(c&&vi(e),vi(e,f))});Zh||(Zh=a["gtm.start"]);var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=mi(),a["gtm.uniqueEventId"]=d,vi("gtm.uniqueEventId",d));return ou(a)}
function wv(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Na(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function xv(){var a;if(ov.length)a=ov.shift();else if(nv.length)a=nv.shift();else return;var b;var c=a;if(pv||!wv(c.message))b=c;else{pv=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=mi());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},g={},h={message:(g.event="gtm.init",g["gtm.uniqueEventId"]=d-1,g),messageContext:{eventId:d-1}};nv.unshift(h,c);if(Am&&K.D){var m,n=il(ll());m=n&&n.context;
var p,q=$i(z.location.href);p=q.hostname+q.pathname;var r=m&&m.fromContainerExecution,t=m&&m.source,u=K.D,v=K.Gb,w=K.lf;Lm||(Lm=p);Km.push(u+";"+v+";"+(r?1:0)+";"+(t||0)+";"+(w?1:0))}b=f}return b}
function yv(){for(var a=!1,b;!qv&&(b=xv());){qv=!0;delete pi.eventModel;ri();var c=b,d=c.message,e=c.messageContext;if(null==d)qv=!1;else{e.fromContainerExecution&&wi();try{if(Fa(d))try{d.call(ti)}catch(x){}else if(Ha(d)){var f=d;if(k(f[0])){var g=f[0].split("."),h=g.pop(),m=f.slice(1),n=si(g.join("."),2);if(null!=n)try{n[h].apply(n,m)}catch(x){}}}else{var p=void 0,q=!1;if(Na(d)){a:{if(d.length&&k(d[0])){var r=Nu[d[0]];if(r&&(!e.fromContainerExecution||!Ou[d[0]])){p=r(d,e);break a}}p=void 0}(q=p&&
"set"===d[0]&&!!p.event)&&O(101)}else p=d;if(p){var t=vv(p,e);a=t||a;q&&t&&O(113)}}}finally{e.fromContainerExecution&&ri(!0);var u=d["gtm.uniqueEventId"];if("number"===typeof u){for(var v=mv[String(u)]||[],w=0;w<v.length;w++)ov.push(zv(v[w]));v.length&&ov.sort(rv);delete mv[String(u)];u>lv&&(lv=u)}qv=!1}}}return!a}function Av(){if(U(70)){var a=fr(ar.J.Pf,K.D);gr(a);if(Bv()){var b=fr(ar.J.Mh,K.D);if(gr(b)){var c=fr(ar.J.Rf,K.D);hr(b,c)}}}var d=yv();try{Pu(K.D)}catch(e){}return d}
function ot(a){if(lv<a.notBeforeEventId){var b=String(a.notBeforeEventId);mv[b]=mv[b]||[];mv[b].push(a)}else ov.push(zv(a)),ov.sort(rv),I(function(){qv||yv()})}function zv(a){return{message:a.message,messageContext:a.messageContext}}
var Cv=function(){function a(g){var h={};if(jv(g)){var m=g;g=jv(m)?m.getUntrustedMessageValue():void 0;h.fromContainerExecution=!0}return{message:g,messageContext:h}}var b=hc(Jh.ka,[]),c=Kh[Jh.ka]=Kh[Jh.ka]||{};!0===c.pruned&&O(83);mv=mt().get();pt();Fs(function(){if(!c.gtmDom){c.gtmDom=!0;var g={};b.push((g.event="gtm.dom",g))}});Uu(function(){if(!c.gtmLoad){c.gtmLoad=!0;var g={};b.push((g.event="gtm.load",g))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var g;if(0<Kh.SANDBOXED_JS_SEMAPHORE){g=
[];for(var h=0;h<arguments.length;h++)g[h]=new kv(arguments[h])}else g=[].slice.call(arguments,0);var m=g.map(function(r){return a(r)});nv.push.apply(nv,m);var n=d.apply(b,g),p=Math.max(100,Number("1000")||300);if(this.length>p)for(O(4),c.pruned=!0;this.length>p;)this.shift();var q="boolean"!==typeof n||n;return yv()&&q};var e=b.slice(0).map(function(g){return a(g)});nv.push.apply(nv,e);if(Bv()){if(U(70)){var f=fr(ar.J.Rf,K.D);gr(f)}I(Av)}},Bv=function(){var a=!0;return a};function Dv(a){if(null==a||0===a.length)return!1;var b=Number(a),c=Ta();return b<c+3E5&&b>c-9E5}function Ev(a){return a&&0===a.indexOf("pending:")?Dv(a.substr(8)):!1};var Se={};Se.kf=new String("undefined");
var Qv=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":xc(a,"className"),"gtm.elementId":a["for"]||sc(a,"id")||"","gtm.elementTarget":a.formTarget||xc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||xc(a,"href")||a.src||a.code||a.codebase||"";return d},Rv=function(a){Kh.hasOwnProperty("autoEventsSettings")||(Kh.autoEventsSettings={});var b=Kh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Sv=function(a,b,c){Rv(a)[b]=c},Tv=function(a,b,c,d){var e=Rv(a),f=Ua(e,b,d);e[b]=c(f)},Uv=function(a,b,c){var d=Rv(a);return Ua(d,b,c)},Vv=function(a){return"string"===typeof a?a:String(mi())};
var Wv=["input","select","textarea"],Xv=["button","hidden","image","reset","submit"],Yv=function(a){var b=a.tagName.toLowerCase();return 0>Wv.indexOf(b)||"input"===b&&0<=Xv.indexOf(a.type.toLowerCase())?!1:!0},Zv=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):vc(a,["form"],100)},$v=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Yv(g)){if(g.dataset[c]===d)return f;f++}}return 0};var aw=!!z.MutationObserver,bw=void 0,cw=function(a){if(!bw){var b=function(){var c=H.body;if(c)if(aw)(new MutationObserver(function(){for(var e=0;e<bw.length;e++)I(bw[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;qc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<bw.length;e++)I(bw[e])}))})}};bw=[];H.body?b():I(b)}bw.push(a)};
var nw=function(a,b,c){function d(){var g=a();f+=e?(Ta()-e)*g.playbackRate/1E3:0;e=Ta()}var e=0,f=0;return{createEvent:function(g,h,m){var n=a(),p=n.Wg,q=void 0!==m?Math.round(m):void 0!==h?Math.round(n.Wg*h):Math.round(n.aj),r=void 0!==h?Math.round(100*h):0>=p?0:Math.round(q/p*100),t=H.hidden?!1:.5<=Mi(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=Qv(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=n.url;v["gtm.videoTitle"]=n.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(q);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=t;return v},qj:function(){e=Ta()},Xc:function(){d()}}};var ow=z.clearTimeout,pw=z.setTimeout,V=function(a,b,c,d){if(cl()){b&&I(b)}else return mc(a,b,c,d)},qw=function(){return new Date},rw=function(){return z.location.href},sw=function(a){return Yi($i(a),"fragment")},tw=function(a){return Zi($i(a))},uw=function(a,b){return si(a,b||2)},vw=function(a,b,c){return b?tv(a,b,c):sv(a)},ww=function(a,b){z[a]=b},W=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},
xw=function(a,b,c){return Kk(a,b,void 0===c?!0:!!c)},yw=function(a,b,c){return 0===Tk(a,b,c)},zw=function(a,b){if(cl()){b&&I(b)}else oc(a,b)},Aw=function(a){return!!Uv(a,"init",!1)},Bw=function(a){Sv(a,"init",!0)},Cw=function(a,b,c){Am&&(Yc(a)||cn(c,b,a))};function $w(a,b){function c(g){var h=$i(g),m=Yi(h,"protocol"),n=Yi(h,"host",!0),p=Yi(h,"port"),q=Yi(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ax(a){return bx(a)?1:0}
function bx(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=Uc(a,{});Uc({arg1:c[d],any_of:void 0},e);if(ax(e))return!0}return!1}switch(a["function"]){case "_cn":return Pf(b,c);case "_css":var f;a:{if(b)try{for(var g=0;g<Lf.length;g++){var h=Lf[g];if(b[h]){f=b[h](c);break a}}}catch(m){}f=!1}return f;case "_ew":return Mf(b,c);case "_eq":return Qf(b,c);case "_ge":return Rf(b,c);case "_gt":return Tf(b,c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));
case "_le":return Sf(b,c);case "_lt":return Uf(b,c);case "_re":return Of(b,c,a.ignore_case);case "_sw":return Vf(b,c);case "_um":return $w(b,c)}return!1};function cx(a,b){var c=this;}cx.O="addConsentListener";var dx;var ex=function(a){for(var b=0;b<a.length;++b)if(dx)try{a[b]()}catch(c){O(77)}else a[b]()};function fx(a,b,c){var d=this,e;L(F(this),["eventName:!string","callback:!Fn","triggerId:?string"],arguments),ex([function(){return M(d,"listen_data_layer",a)}]),e=ju().addListener(a,Wc(b),c);return e}fx.M="internal.addDataLayerEventListener";function gx(a,b,c){}gx.O="addDocumentEventListener";function hx(a,b,c,d){}hx.O="addElementEventListener";function ix(a){}ix.O="addEventCallback";
function mx(a){}mx.M="internal.addFormAbandonmentListener";var nx={},ox=[],px={},qx=0,rx=0;
var tx=function(){qc(H,"change",function(a){for(var b=0;b<ox.length;b++)ox[b](a)});qc(z,"pagehide",function(){sx()})},sx=function(){l(px,function(a,b){var c=nx[a];c&&l(b,function(d,e){ux(e,c)})})},xx=function(a,b){var c=""+a;if(nx[c])nx[c].push(b);else{var d=[b];nx[c]=d;var e=px[c];e||(e={},px[c]=e);ox.push(function(f){var g=f.target;if(g){var h=Zv(g);if(h){var m=vx(h,"gtmFormInteractId",function(){return qx++}),n=vx(g,"gtmFormInteractFieldId",function(){return rx++}),p=e[m];p?(p.Ea&&(z.clearTimeout(p.Ea),
p.qa.dataset.gtmFormInteractFieldId!==n&&ux(p,d)),p.qa=g,wx(p,d,a)):(e[m]={form:h,qa:g,Ub:0,Ea:null},wx(e[m],d,a))}}})}},ux=function(a,b){var c=a.form,d=a.qa,e=Qv(c,"gtm.formInteract"),f=c.action;f&&f.tagName&&(f=c.cloneNode(!1).action);e["gtm.elementUrl"]=f;e["gtm.interactedFormName"]=c.getAttribute("name");e["gtm.interactedFormLength"]=c.length;e["gtm.interactedFormField"]=d;e["gtm.interactedFormFieldPosition"]=$v(c,d,"gtmFormInteractFieldId");e["gtm.interactSequenceNumber"]=a.Ub;e["gtm.interactedFormFieldId"]=
d.id;e["gtm.interactedFormFieldName"]=d.getAttribute("name");e["gtm.interactedFormFieldType"]=d.getAttribute("type");for(var g=0;g<b.length;g++)b[g](e);a.Ub++;a.Ea=null},wx=function(a,b,c){c?a.Ea=z.setTimeout(function(){ux(a,b)},c):ux(a,b)},vx=function(a,b,c){var d=a.dataset[b];if(d)return d;d=String(c());return a.dataset[b]=d};
function yx(a,b){L(F(this),["callback:!Fn","options:?*"],arguments);var c=Wc(b)||{},d=Number(c.interval);if(!d||0>d)d=0;var e=Wc(a),f;Uv("pix.fil","init")?f=Uv("pix.fil","reg"):(tx(),f=xx,Sv("pix.fil","reg",xx),Sv("pix.fil","init",!0));f(d,e);}yx.M="internal.addFormInteractionListener";
var Ax=function(a,b,c){var d=Qv(a,"gtm.formSubmit");d["gtm.interactedFormName"]=a.getAttribute("name");d["gtm.interactedFormLength"]=a.length;d["gtm.willOpenInCurrentWindow"]=!b&&zx(a);c&&c.value&&(d["gtm.formSubmitButtonText"]=c.value);var e=a.action;e&&e.tagName&&(e=a.cloneNode(!1).action);d["gtm.elementUrl"]=e;return d},Bx=function(a,b){var c=Uv("pix.fsl",a?"nv.mwt":"mwt",0);z.setTimeout(b,c)},Cx=function(a,b,c,d,e){var f=Uv("pix.fsl",c?"nv.mwt":"mwt",0),g=Uv("pix.fsl",c?"runIfCanceled":"runIfUncanceled",
[]);if(!g.length)return!0;var h=Ax(a,c,e);O(121);"https://www.facebook.com/tr/"===h["gtm.elementUrl"]&&O(122);if(U(79)&&"https://www.facebook.com/tr/"===h["gtm.elementUrl"])return!0;if(d&&f){for(var m=eb(b,g.length),n=0;n<g.length;++n)g[n](h,m);return m.done}for(var p=0;p<g.length;++p)g[p](h,function(){});return!0},Dx=function(){var a=[],b=function(c){return Ia(a,function(d){return d.form===c})};return{store:function(c,d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(c){var d=b(c);
return d?d.button:null}}},zx=function(a){var b=xc(a,"target");return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0},Ex=function(){var a=Dx(),b=HTMLFormElement.prototype.submit;qc(H,"click",function(c){var d=c.target;if(d&&(d=vc(d,["button","input"],100))&&("submit"==d.type||"image"==d.type)&&d.name&&sc(d,"value")){var e=Zv(d);e&&a.store(e,d)}},!1);qc(H,"submit",function(c){var d=c.target;if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=zx(d)&&!e,g=a.get(d),h=!0,m=function(){if(h){var n;
g&&(n=H.createElement("input"),n.type="hidden",n.name=g.name,n.value=g.value,d.appendChild(n));b.call(d);n&&d.removeChild(n)}};if(Cx(d,m,e,f,g))return h=!1,c.returnValue;Bx(e,m);e||(c.preventDefault&&c.preventDefault(),c.returnValue=!1);return!1},!1);HTMLFormElement.prototype.submit=function(){var c=this,d=!0,e=function(){d&&b.call(c)};Cx(c,e,!1,zx(c))?(b.call(c),d=!1):Bx(!1,e)}};
function Fx(a,b){L(F(this),["callback:!Fn","options:?DustMap"],arguments);var c=Wc(b)||{},d=c.waitForCallbacks,e=c.waitForCallbacksTimeout,f=c.checkValidation;e=e&&0<e?e:2E3;var g=Wc(a);if(d){var h=function(n){return Math.max(e,n)};Tv("pix.fsl","mwt",h,0);f||Tv("pix.fsl","nv.mwt",h,0)}var m=function(n){n.push(g);return n};Tv("pix.fsl","runIfUncanceled",m,[]);f||Tv("pix.fsl","runIfCanceled",m,[]);Uv("pix.fsl","init")||(Ex(),Sv("pix.fsl",
"init",!0));}Fx.M="internal.addFormSubmitListener";
function Kx(a){}Kx.M="internal.addGaSendListener";var Lx={},Mx=[];
var Tx=function(a,b){};
Tx.M="internal.addHistoryChangeListener";function Ux(a,b,c){}Ux.O="addWindowEventListener";function Vx(a,b){return!0}Vx.O="aliasInWindow";function Wx(a,b,c){}Wx.M="internal.appendRemoteConfigParameter";function Xx(){var a=2;return a};function Yx(a,b){var c;return c}Yx.O="callInWindow";function Zx(a){}Zx.O="callLater";function $x(a){}$x.M="callOnDomReady";function ay(a){}ay.M="callOnWindowLoad";function by(a){var b;return b}by.M="internal.computeGtmParameter";function cy(a,b){var c;var d=Vc(c,this.h,Xx());void 0===d&&void 0!==c&&O(45);return d}cy.O="copyFromDataLayer";function dy(a){var b;return b}dy.O="copyFromWindow";function ey(a,b){var c;L(F(this),["preHit:!DustMap","dustOptions:?DustMap"],arguments);var d=Wc(b)||{},e=Wc(a,this.h,1).Df(),f=new gp(e.target,e.eventName,e.h);d.omitHitData||Uc(e.m,f.m);d.omitMetadata?f.metadata={}:Uc(e.metadata,f.metadata);f.H=e.H;c=Vc(ip(f),this.h,1);return c}ey.M="internal.copyPreHit";function fy(a,b){var c=null,d=Xx();return Vc(c,this.h,d)}fy.O="createArgumentsQueue";function gy(a){var b;return Vc(b,this.h,
Xx())}gy.O="createQueue";function hy(a){if(!a)return{};var b=a.Gk;return Hs(b.type,b.index,b.name)}function iy(a){return a?{originatingEntity:hy(a)}:{}};function jy(a){}jy.M="internal.declareConsentState";var ky={},ly=[],my={},ny=0,oy=0;
var qy=function(){l(my,function(a,b){var c=ky[a];c&&l(b,function(d,e){py(e,c)})})},ty=function(a,b){var c=""+b;if(ky[c])ky[c].push(a);else{var d=[a];ky[c]=d;var e=my[c];e||(e={},my[c]=e);ly.push(function(f){var g=f.target;if(g){var h=Zv(g);if(h){var m=ry(h,"gtmFormInteractId",function(){return ny++}),n=ry(g,"gtmFormInteractFieldId",function(){return oy++});if(null!==m&&null!==n){var p=e[m];p?(p.Ea&&(z.clearTimeout(p.Ea),p.qa.getAttribute("data-gtm-form-interact-field-id")!==n&&py(p,d)),p.qa=g,sy(p,
d,b)):(e[m]={form:h,qa:g,Ub:0,Ea:null},sy(e[m],d,b))}}}})}},py=function(a,b){var c=a.form,d=a.qa,e=Qv(c,"gtm.formInteract",b),f=c.action;f&&f.tagName&&(f=c.cloneNode(!1).action);e["gtm.elementUrl"]=f;e["gtm.interactedFormName"]=null!=c.getAttribute("name")?c.getAttribute("name"):void 0;e["gtm.interactedFormLength"]=c.length;e["gtm.interactedFormField"]=d;e["gtm.interactedFormFieldId"]=d.id;e["gtm.interactedFormFieldName"]=null!=d.getAttribute("name")?d.getAttribute("name"):void 0;e["gtm.interactedFormFieldPosition"]=
$v(c,d,"gtmFormInteractFieldId");e["gtm.interactedFormFieldType"]=null!=d.getAttribute("type")?d.getAttribute("type"):void 0;e["gtm.interactSequenceNumber"]=a.Ub;sv(e);a.Ub++;a.Ea=null},sy=function(a,b,c){c?a.Ea=z.setTimeout(function(){py(a,b)},c):py(a,b)},ry=function(a,b,c){var d;try{if(d=a.dataset[b])return d;d=String(c());a.dataset[b]=d}catch(e){d=null}return d};
function uy(a,b){var c=this;L(F(this),["options:?DustMap","triggerId:?*"],arguments);ex([function(){return M(c,"process_dom_events","document","change")},function(){return M(c,"process_dom_events","window","pagehide")}]);b=Vv(b);var d=a&&Number(a.get("interval"));0<d&&isFinite(d)||(d=0);if(Uv("fil","init",!1)){var e=Uv("fil","reg");if(e)e(b,d);else throw Error("Failed to register trigger: "+b);}else qc(H,"change",function(f){for(var g=
0;g<ly.length;g++)ly[g](f)}),qc(z,"pagehide",function(){qy()}),ty(b,d),Sv("fil","reg",ty),Sv("fil","init",!0);return b}uy.M="internal.enableAutoEventOnFormInteraction";
var vy=function(a,b,c,d,e){var f=Uv("fsl",c?"nv.mwt":"mwt",0),g;g=c?Uv("fsl","nv.ids",[]):Uv("fsl","ids",[]);if(!g.length)return!0;var h=Qv(a,"gtm.formSubmit",g),m=a.action;m&&m.tagName&&(m=a.cloneNode(!1).action);O(121);"https://www.facebook.com/tr/"===m&&O(122);if(U(79)&&"https://www.facebook.com/tr/"===m)return!0;h["gtm.elementUrl"]=m;null!=a.getAttribute("name")&&(h["gtm.interactedFormName"]=a.getAttribute("name"));e&&(h["gtm.formSubmitElement"]=e,h["gtm.formSubmitElementText"]=e.value);if(d&&
f){if(!tv(h,uv(b,f),f))return!1}else tv(h,function(){},f||2E3);return!0},wy=function(){var a=[],b=function(c){return Ia(a,function(d){return d.form===c})};return{store:function(c,d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(c){var d=b(c);return d?d.button:null}}},xy=function(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0},yy=function(){var a=wy(),b=HTMLFormElement.prototype.submit;qc(H,"click",function(c){var d=c.target;if(d&&(d=vc(d,["button","input"],
100))&&("submit"==d.type||"image"==d.type)&&d.name&&sc(d,"value")){var e=Zv(d);e&&a.store(e,d)}},!1);qc(H,"submit",function(c){var d=c.target;if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=xy(d)&&!e,g=a.get(d),h=!0;if(vy(d,function(){if(h){var m;g&&(m=H.createElement("input"),m.type="hidden",m.name=g.name,m.value=g.value,d.appendChild(m));b.call(d);m&&d.removeChild(m)}},e,f,g))h=!1;else return e||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},
!1);HTMLFormElement.prototype.submit=function(){var c=this,d=!0;vy(c,function(){d&&b.call(c)},!1,xy(c))&&(b.call(c),d=!1)}};
function zy(a,b){var c=this;L(F(this),["options:?DustMap","triggerId:?*"],arguments);ex([function(){return M(c,"process_dom_events","document","click")},function(){return M(c,"process_dom_events","document","submit")}]);var d=a&&a.get("waitForTags"),e=a&&a.get("checkValidation");b=Vv(b);if(d){var f=Number(a.get("waitForTagsTimeout"));0<f&&isFinite(f)||(f=2E3);var g=function(m){return Math.max(f,m)};Tv("fsl","mwt",g,0);e||
Tv("fsl","nv.mwt",g,0)}var h=function(m){m.push(b);return m};Tv("fsl","ids",h,[]);e||Tv("fsl","nv.ids",h,[]);Uv("fsl","init",!1)||(yy(),Sv("fsl","init",!0));return b}zy.M="internal.enableAutoEventOnFormSubmit";
function Ey(){var a=this;}Ey.M="internal.enableAutoEventOnGaSend";var Fy={},Gy=[];
var Iy=function(a,b){var c=""+b;if(Fy[c])Fy[c].push(a);else{var d=[a];Fy[c]=d;var e=Hy(),f=-1;Gy.push(function(g){0<=f&&z.clearTimeout(f);b?f=z.setTimeout(function(){e(g,d);f=-1},b):e(g,d)})}},Hy=function(){var a=z.location.href,b={source:null,state:z.history.state||null,url:Zi($i(a)),P:Yi($i(a),"fragment")};return function(c,d){var e=b,f={};f[e.source]=!0;f[c.source]=!0;if(!f.popstate||!f.hashchange||e.P!=c.P){var g={},h=(g.event="gtm.historyChange-v2",g["gtm.historyChangeSource"]=c.source,g["gtm.oldUrlFragment"]=
b.P,g["gtm.newUrlFragment"]=c.P,g["gtm.oldHistoryState"]=b.state,g["gtm.newHistoryState"]=c.state,g["gtm.oldUrl"]=b.url,g["gtm.newUrl"]=c.url,g["gtm.triggers"]=d.join(","),g);b=c;sv(h)}}},Jy=function(a,b){var c=z.history,d=c[a];if(Fa(d))try{c[a]=function(e,f,g){d.apply(c,[].slice.call(arguments,0));var h=z.location.href;b({source:a,state:e,url:Zi($i(h)),P:Yi($i(h),"fragment")})}}catch(e){}},Ly=function(a){z.addEventListener("popstate",function(b){var c=Ky(b);a({source:"popstate",state:b.state,url:Zi($i(c)),
P:Yi($i(c),"fragment")})})},My=function(a){z.addEventListener("hashchange",function(b){var c=Ky(b);a({source:"hashchange",state:null,url:Zi($i(c)),P:Yi($i(c),"fragment")})})},Ky=function(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:z.location.href};
function Ny(a,b){var c=this;L(F(this),["options:?DustMap","triggerId:?*"],arguments);ex([function(){return M(c,"process_dom_events","window","popstate")},function(){return M(c,"process_dom_events","window","pushstate")}]);b=Vv(b);var d=Number(a&&a.get("interval"));0<d&&isFinite(d)||(d=0);if(Uv("ehl","init",!1)){var e=Uv("ehl","reg");e&&e(b,d)}else{var f=function(g){for(var h=0;h<Gy.length;h++)Gy[h](g)};My(f);Ly(f);Jy("pushState",
f);Jy("replaceState",f);Iy(b,d);Sv("ehl","reg",Iy);Sv("ehl","init",!0)}return b}Ny.M="internal.enableAutoEventOnHistoryChange";
var Oy=function(a,b){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=xc(b,"href"),d=c.indexOf("#"),e=xc(b,"target");if(e&&"_self"!==e&&"_parent"!==e&&"_top"!==e||0===d)return!1;if(0<d){var f=Zi($i(c)),g=Zi($i(z.location.href));return f!==g}return!0},Py=function(a,b){for(var c=Yi($i((b.attributes&&b.attributes.formaction?b.formAction:"")||b.action||xc(b,"href")||b.src||b.code||b.codebase||""),"host"),d=0;d<a.length;d++)try{if((new RegExp(a[d])).test(c))return!1}catch(e){}return!0},
Qy=function(){var a=0,b=function(c){var d=c.target;if(d&&3!==c.which&&!(c.gh||c.timeStamp&&c.timeStamp===a)){a=c.timeStamp;d=vc(d,["a","area"],100);if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=Uv("aelc",e?"nv.mwt":"mwt",0),g;g=e?Uv("aelc","nv.ids",[]):Uv("aelc","ids",[]);for(var h=[],m=0;m<g.length;m++){var n=g[m],p=Uv("aelc","aff.map",{})[n];p&&!Py(p,d)||h.push(n)}if(h.length){var q=Oy(c,d),r=Qv(d,"gtm.linkClick",h);r["gtm.elementText"]=tc(d);r["gtm.willOpenInNewWindow"]=
!q;if(q&&!e&&f&&d.href){var t=!!Ia(String(xc(d,"rel")||"").split(" "),function(x){return"noreferrer"===x.toLowerCase()}),u=z[(xc(d,"target")||"_self").substring(1)],v=!0,w=uv(function(){var x;if(x=v&&u){var y;a:if(t){var A;try{A=new MouseEvent(c.type,{bubbles:!0})}catch(B){if(!H.createEvent){y=!1;break a}A=H.createEvent("MouseEvents");A.initEvent(c.type,!0,!0)}A.gh=!0;c.target.dispatchEvent(A);y=!0}else y=!1;x=!y}x&&(u.location.href=xc(d,"href"))},f);if(tv(r,w,f))v=!1;else return c.preventDefault&&
c.preventDefault(),c.returnValue=!1}else tv(r,function(){},f||2E3);return!0}}};qc(H,"click",b,!1);qc(H,"auxclick",b,!1)};
function Ry(a,b){var c=this;L(F(this),["dustOptions:?DustMap","triggerId:?*"],arguments);ex([function(){return M(c,"process_dom_events","document","click")},function(){return M(c,"process_dom_events","document","auxclick")}]);var d=Wc(a),e=d&&!!d.waitForTags,f=d&&!!d.checkValidation,g=d?d.affiliateDomains:void 0;b=Vv(b);if(e){var h=Number(d.waitForTagsTimeout);0<h&&isFinite(h)||(h=2E3);var m=function(p){return Math.max(h,p)};
Tv("aelc","mwt",m,0);f||Tv("aelc","nv.mwt",m,0)}var n=function(p){p.push(b);return p};Tv("aelc","ids",n,[]);f||Tv("aelc","nv.ids",n,[]);g&&Tv("aelc","aff.map",function(p){p[b]=g;return p},{});Uv("aelc","init",!1)||(Qy(),Sv("aelc","init",!0));return b}Ry.M="internal.enableAutoEventOnLinkClick";var Sy,Ty;
var Uy=function(a){return Uv("sdl",a,{})},Vy=function(a,b,c){b&&(Array.isArray(a)||(a=[a]),Tv("sdl",c,function(d){for(var e=0;e<a.length;e++){var f=String(a[e]);d.hasOwnProperty(f)||(d[f]=[]);d[f].push(b)}return d},{}))},Yy=function(){var a=250,b=!1;H.scrollingElement&&H.documentElement&&z.addEventListener&&(a=50,b=!0);var c=0,d=!1,e=function(){d?c=z.setTimeout(e,a):(c=0,Wy(),Uv("sdl","init",!1)&&!Xy()&&(rc(z,"scroll",f),rc(z,"resize",f),Sv("sdl","init",!1)));d=!1},f=function(){b&&Sy();c?d=!0:(c=
z.setTimeout(e,a),Sv("sdl","pending",!0))};return f},Wy=function(){var a=Sy(),b=a.Ug,c=a.Vg,d=b/Ty.scrollWidth*100,e=c/Ty.scrollHeight*100;Zy(b,"horiz.pix","PIXELS","horizontal");Zy(d,"horiz.pct","PERCENT","horizontal");Zy(c,"vert.pix","PIXELS","vertical");Zy(e,"vert.pct","PERCENT","vertical");Sv("sdl","pending",!1)},Zy=function(a,b,c,d){var e=Uy(b),f={},g;for(g in e){f.yc=g;if(e.hasOwnProperty(f.yc)){var h=Number(f.yc);if(!(a<h)){var m={};sv((m.event="gtm.scrollDepth",m["gtm.scrollThreshold"]=h,
m["gtm.scrollUnits"]=c.toLowerCase(),m["gtm.scrollDirection"]=d,m["gtm.triggers"]=e[f.yc].join(","),m));Tv("sdl",b,function(n){return function(p){delete p[n.yc];return p}}(f),{})}}f={yc:f.yc}}},az=function(){Tv("sdl","scr",function(a){a||(a=H.scrollingElement||H.body&&H.body.parentNode);return Ty=a},!1);Tv("sdl","depth",function(a){a||(a=$y());return Sy=a},!1)},$y=function(){var a=0,b=0;return function(){var c=Li(),d=c.height;a=Math.max(Ty.scrollLeft+c.width,a);b=Math.max(Ty.scrollTop+d,b);return{Ug:a,
Vg:b}}},Xy=function(){return!!(Object.keys(Uy("horiz.pix")).length||Object.keys(Uy("horiz.pct")).length||Object.keys(Uy("vert.pix")).length||Object.keys(Uy("vert.pct")).length)};
function bz(a,b){var c=this;L(F(this),["options:!DustMap","triggerId:?*"],arguments);ex([function(){return M(c,"process_dom_events","window","resize")},function(){return M(c,"process_dom_events","window","scroll")}]);az();if(!Ty)return;b=Vv(b);var d=Wc(a);switch(d.horizontalThresholdUnits){case "PIXELS":Vy(d.horizontalThresholds,b,"horiz.pix");break;case "PERCENT":Vy(d.horizontalThresholds,b,"horiz.pct")}switch(d.verticalThresholdUnits){case "PIXELS":Vy(d.verticalThresholds,
b,"vert.pix");break;case "PERCENT":Vy(d.verticalThresholds,b,"vert.pct")}Uv("sdl","init",!1)?Uv("sdl","pending",!1)||I(function(){return Wy()}):(Sv("sdl","init",!0),Sv("sdl","pending",!0),I(function(){Wy();if(Xy()){var e=Yy();qc(z,"scroll",e);qc(z,"resize",e)}else Sv("sdl","init",!1)}));return b}bz.M="internal.enableAutoEventOnScroll";var bc=ca(["data-gtm-yt-inspected-"]),cz=["www.youtube.com","www.youtube-nocookie.com"],dz,ez=!1;
var fz=function(a,b,c){var d=a.map(function(g){return{Aa:g,Be:g,ye:void 0}});if(!b.length)return d;var e=b.map(function(g){return{Aa:g*c,Be:void 0,ye:g}});if(!d.length)return e;var f=d.concat(e);f.sort(function(g,h){return g.Aa-h.Aa});return f},gz=function(a){a=void 0===a?[]:a;for(var b=[],c=0;c<a.length;c++)0>a[c]||b.push(a[c]);b.sort(function(d,e){return d-e});return b},hz=function(a){a=void 0===a?[]:a;for(var b=[],c=0;c<a.length;c++)100<a[c]||0>a[c]||(b[c]=a[c]/100);b.sort(function(d,e){return d-
e});return b},iz=function(a,b){var c,d;function e(){t=nw(function(){return{url:w,title:x,Wg:v,aj:a.getCurrentTime(),playbackRate:y}},b.lb,a.getIframe());v=0;x=w="";y=1;return f}function f(E){switch(E){case 1:v=Math.round(a.getDuration());w=a.getVideoUrl();if(a.getVideoData){var J=a.getVideoData();x=J?J.title:""}y=a.getPlaybackRate();b.Rg?sv(t.createEvent("start")):t.Xc();u=fz(b.xh,b.wh,a.getDuration());return g(E);default:return f}}function g(){A=a.getCurrentTime();B=Sa().getTime();t.qj();r();return h}
function h(E){var J;switch(E){case 0:return n(E);case 2:J="pause";case 3:var G=a.getCurrentTime()-A;J=1<Math.abs((Sa().getTime()-B)/1E3*y-G)?"seek":J||"buffering";a.getCurrentTime()&&(b.Qg?sv(t.createEvent(J)):t.Xc());q();return m;case -1:return e(E);default:return h}}function m(E){switch(E){case 0:return n(E);case 1:return g(E);case -1:return e(E);default:return m}}function n(){for(;d;){var E=c;z.clearTimeout(d);E()}b.Pg&&sv(t.createEvent("complete",1));return e(-1)}function p(){}function q(){d&&
(z.clearTimeout(d),d=0,c=p)}function r(){if(u.length&&0!==y){var E=-1,J;do{J=u[0];if(J.Aa>a.getDuration())return;E=(J.Aa-a.getCurrentTime())/y;if(0>E&&(u.shift(),0===u.length))return}while(0>E);c=function(){d=0;c=p;0<u.length&&u[0].Aa===J.Aa&&(u.shift(),sv(t.createEvent("progress",J.ye,J.Be)));r()};d=z.setTimeout(c,1E3*E)}}var t,u=[],v,w,x,y,A,B,D=e(-1);d=0;c=p;return{onStateChange:function(E){D=D(E)},onPlaybackRateChange:function(E){A=a.getCurrentTime();B=Sa().getTime();t.Xc();y=E;q();r()}}},kz=
function(a){I(function(){function b(){for(var d=c.getElementsByTagName("iframe"),e=d.length,f=0;f<e;f++)jz(d[f],a)}var c=H;b();cw(b)})},jz=function(a,b){if(!a.getAttribute("data-gtm-yt-inspected-"+b.lb)&&(ac(a,"data-gtm-yt-inspected-"+b.lb),lz(a,b.me))){a.id||(a.id=mz());var c=z.YT,d=c.get(a.id);d||(d=new c.Player(a.id));var e=iz(d,b),f={},g;for(g in e)f.kd=g,e.hasOwnProperty(f.kd)&&d.addEventListener(f.kd,function(h){return function(m){return e[h.kd](m.data)}}(f)),f={kd:f.kd}}},lz=function(a,b){var c=
a.getAttribute("src");if(nz(c,"embed/")){if(0<c.indexOf("enablejsapi=1"))return!0;if(b){var d;var e=-1!==c.indexOf("?")?"&":"?";-1<c.indexOf("origin=")?d=c+e+"enablejsapi=1":(dz||(dz=H.location.protocol+"//"+H.location.hostname,H.location.port&&(dz+=":"+H.location.port)),d=c+e+"enablejsapi=1&origin="+encodeURIComponent(dz));var f;f=Eb(d);a.src=Cb(f).toString();return!0}}return!1},nz=function(a,b){if(!a)return!1;for(var c=0;c<cz.length;c++)if(0<=a.indexOf("//"+cz[c]+"/"+b))return!0;return!1},mz=function(){var a=
Math.round(1E9*Math.random())+"";return H.getElementById(a)?mz():a};
function oz(a,b){var c=this;L(F(this),["dustOptions:!DustMap","triggerId:?*"],arguments);ex([function(){return M(c,"process_dom_events","element","onStateChange")},function(){return M(c,"process_dom_events","element","onPlaybackRateChange")}]);b=Vv(b);var d=!!a.get("captureStart"),e=!!a.get("captureComplete"),f=!!a.get("capturePause"),g=hz(Wc(a.get("progressThresholdsPercent"))),h=gz(Wc(a.get("progressThresholdsTimeInSeconds"))),
m=!!a.get("fixMissingApi");if(!(d||e||f||g.length||h.length))return;var n={Rg:d,Pg:e,Qg:f,wh:g,xh:h,me:m,lb:b},p=z.YT,q=function(){kz(n)};if(p)return p.ready&&p.ready(q),b;var r=z.onYouTubeIframeAPIReady;z.onYouTubeIframeAPIReady=function(){r&&r();q()};I(function(){for(var t=H.getElementsByTagName("script"),u=t.length,v=0;v<u;v++){var w=t[v].getAttribute("src");if(nz(w,"iframe_api")||nz(w,"player_api"))return b}for(var x=H.getElementsByTagName("iframe"),y=x.length,A=0;A<y;A++)if(!ez&&lz(x[A],n.me))return mc("https://www.youtube.com/iframe_api"),
ez=!0,b});return b}oz.M="internal.enableAutoEventOnYouTubeActivity";var pz;function qz(a){var b=!1;return b}qz.M="internal.evaluateMatchingRules";
var rz=function(a){var b=a[P.g.af];if(b)return b;var c=a[P.g.ja];if(k(c)){if(Fa(URL))try{return(new URL(c)).hostname}catch(e){return}var d=$i(c);if(d.hostname)return Yi(d,"host")}},tz=function(a,b,c){if(c)switch(c.type){case "event_name":return a;case "const":return c.const_value;case "event_param":var d=c.event_param.param_name;if(d===P.g.Nb)return sz(b);return d===P.g.af?rz(b):b[d]}},xz=function(a,
b,c,d){uz=!1;if(c&&!vz(a,b,c))return!1;if(!d||0===d.length)return!0;for(var e=0;e<d.length;e++)if(wz(a,b,d[e].predicates||[]))return!0;return!1},wz=function(a,b,c){for(var d=0;d<c.length;d++)if(!vz(a,b,c[d]))return!1;return!0},vz=function(a,b,c){var d=c.values||[],e=tz(a,b,d[0]),f=tz(a,b,d[1]),g=c.type;if("eqi"===g||"swi"===g||"ewi"===g||"cni"===g)k(e)&&(e=e.toLowerCase()),k(f)&&(f=f.toLowerCase());var h=!1;switch(g){case "eq":case "eqi":h=Qf(e,f);break;case "sw":case "swi":h=Vf(e,f);break;case "ew":case "ewi":h=
Mf(e,f);break;case "cn":case "cni":h=Pf(e,f);break;case "lt":h=Uf(e,f);break;case "le":h=Sf(e,f);break;case "gt":h=Tf(e,f);break;case "ge":h=Rf(e,f);break;case "re":case "rei":void 0!==e&&(h=Of(e,f,"rei"===g))}return!!c.negate!==h},uz=!1;var sz=function(a){var b=a[P.g.Nb];if(b)return b;uz=!0;var c=a[P.g.ja];if(k(c)){var d=U(57);if(Fa(URL))try{var e=new URL(c);return e.pathname+yz(d?e.search:"")}catch(h){return}var f=$i(c);if(f.hostname){var g=d?
Yi(f,"query"):"";g&&(g="?"+g);return Yi(f,"path")+yz(g)}}},yz=function(a){if(!U(72)||!a)return a;var b=a.split("&"),c=[];b[0]=b[0].substring(1);for(var d=0;d<b.length;d++){var e=b[d],f=e.indexOf("=");zz[0<=f?e.substring(0,f):e]||c.push(b[d])}return c.length?"?"+c.join("&"):""},zz=Object.freeze({__utma:1,__utmb:1,__utmc:1,__utmk:1,__utmv:1,__utmx:1,__utmz:1,__ga:1,_gac:1,_gl:1,dclid:1,gbraid:1,gclid:1,gclsrc:1,utm_campaign:1,utm_content:1,utm_expid:1,utm_id:1,utm_medium:1,utm_nooverride:1,utm_referrer:1,
utm_source:1,utm_term:1,wbraid:1});function Az(a,b){var c=!1;return c}Az.M="internal.evaluatePredicates";var Bz=function(a){var b;return b};function Cz(a,b){b=void 0===b?!0:b;var c;return c}Cz.O="getCookieValues";function Dz(){return zi()}Dz.M="internal.getCountryCode";function Ez(){var a=[];a=hl();return Vc(a)}Ez.M="internal.getDestinationIds";function Fz(a){var b=null;return b}Fz.O="getElementById";var Gz={};Gz.enableAdsConversionValidation=U(83);Gz.enableAdsHistoryChangeEvents=U(36);Gz.enableAlwaysSendFormStart=U(38);Gz.enableCcdAutoRedaction=U(92);Gz.enableCcdEmForm=U(82);Gz.enableCcdEventEditingAndCreation=U(26);Gz.enableCcdPreAutoPiiDetection=U(49);Gz.enableCcdUserData=U(16);Gz.enableEesPagePath=U(43);Gz.enableEuidAutoMode=U(37);Gz.enableGa4OnoRemarketing=U(34);Gz.enableGaGamWindowSet=U(67);Gz.includeQueryInEesPagePath=U(57);Gz.pixieSetCorePlatformServices=U(105);
Gz.useEnableAutoEventOnFormApis=U(91);Gz.autoPiiEligible=Di();function Hz(){return Vc(Gz)}Hz.M="internal.getFlags";function Iz(a,b){var c;L(F(this),["targetId:!string","name:!string"],arguments);var d=Ii(a)||{};c=Vc(d[b],this.h);return c}Iz.M="internal.getProductSettingsParameter";function Jz(a,b){var c;L(F(this),["queryKey:!string","retrieveAll:?boolean"],arguments);M(this,"get_url","query",a);var d=Yi($i(z.location.href),"query"),e=Vi(d,a,b);c=Vc(e,this.h);return c}Jz.O="getQueryParameters";function Kz(a,b){var c;return c}Kz.O="getReferrerQueryParameters";function Lz(a){var b="";return b}Lz.O="getReferrerUrl";function Mz(){return Ai()}Mz.M="internal.getRegionCode";function Nz(a,b){var c;L(F(this),["targetId:!string","name:!string"],arguments);var d=vu(pu,a).h;c=Vc(d[b],this.h);return c}Nz.M="internal.getRemoteConfigParameter";function Oz(a){var b="";L(F(this),["component:?string"],arguments),M(this,"get_url",a),b=Yi($i(z.location.href),a);return b}Oz.O="getUrl";function Pz(){M(this,"get_user_agent");return fc.userAgent}Pz.O="getUserAgent";
var Qz=function(a){var b=!1;b=hp(a,"google_ono",!1);return b},Rz=function(a){if(a.metadata.is_merchant_center||!S(a.h,P.g.Qa))return!1;var b=S(a.h,P.g.Dd);return!0===b||"true"===b},Sz=function(a){var b=a.metadata.user_data;if(Tc(b))return b},Tz=function(a,b){var c=hp(a,P.g.Bd,a.h.B[P.g.Bd]);if(c&&void 0!==c[b||a.eventName])return c[b||a.eventName]},Uz=function(a,b,c){a.m[P.g.be]||(a.m[P.g.be]=
{});a.m[P.g.be][b]=c};var Vz=!1,Wz=function(a){var b=a.eventName===P.g.Xb&&bk()&&Rz(a),c=a.metadata.batch_on_navigation,d=a.metadata.is_conversion,e=a.metadata.is_session_start,f=a.metadata.create_dc_join,g=a.metadata.create_google_join,h=a.metadata.euid_mode_enabled&&!!Sz(a);return!(!fc.sendBeacon||d||h||e||f||g||b||!c&&Vz)};var Xz=function(a){vb("GA4_EVENT",a)};var Zz=function(a){return!a||Yz.test(a)||yh.hasOwnProperty(a)},$z=function(a,b,c){for(var d=c.event_param_ops||[],e=0;e<d.length;e++){var f=d[e];if(f.edit_param){var g=f.edit_param.param_name,h=tz(a,b,f.edit_param.param_value),m;if(h){var n=Number(h);m=isNaN(n)?h:n}else m=h;b[g]=m}else f.delete_param&&delete b[f.delete_param.param_name]}},Yz=/^(_|ga_|google_|gtag\.|firebase_).*$/;
var aA=function(a){var b=0,c=0;return{start:function(){b=Ta()},stop:function(){c=this.get()},get:function(){var d=0;a.ih()&&(d=Ta()-b);return d+c}}},bA=function(){this.h=void 0;this.m=0;this.isActive=this.isVisible=this.B=!1;this.N=this.C=void 0};aa=bA.prototype;aa.fk=function(a){var b=this;if(!this.h){this.B=H.hasFocus();this.isVisible=!H.hidden;this.isActive=!0;var c=function(d,e,f){qc(d,e,function(g){b.h.stop();f(g);b.ih()&&b.h.start()})};c(z,"focus",function(){b.B=!0});c(z,"blur",function(){b.B=
!1});c(z,"pageshow",function(d){b.isActive=!0;d.persisted&&O(56);b.N&&b.N()});c(z,"pagehide",function(){b.isActive=!1;b.C&&b.C()});c(H,"visibilitychange",function(){b.isVisible=!H.hidden});Rz(a)&&-1===(fc.userAgent||"").indexOf("Firefox")&&-1===(fc.userAgent||"").indexOf("FxiOS")&&c(z,"beforeunload",function(){Vz=!0});this.zh();this.m=0}};aa.zh=function(){this.m+=this.Cf();this.h=aA(this);this.ih()&&this.h.start()};aa.am=function(a){var b=this.Cf();0<b&&(a.m[P.g.zd]=b)};aa.Vk=function(a){a.m[P.g.zd]=
void 0;this.zh();this.m=0};aa.ih=function(){return this.B&&this.isVisible&&this.isActive};aa.Ok=function(){return this.m+this.Cf()};aa.Cf=function(){return this.h&&this.h.get()||0};aa.Kl=function(a){this.C=a};aa.oj=function(a){this.N=a};function cA(){return z.gaGlobal=z.gaGlobal||{}}var dA=function(){var a=cA();a.hid=a.hid||Ka();return a.hid},eA=function(a,b){var c=cA();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};
var fA=function(a,b,c){var d=a.metadata.client_id_source;if(void 0===d||c<=d)a.m[P.g.Ya]=b,a.metadata.client_id_source=c},iA=function(a,b){var c;var d=b.metadata.cookie_options,e=d.prefix+"_ga",f=tn(d,void 0,void 0,P.g.U);if(!1===S(b.h,P.g.ab)&&gA(b)===a)c=!0;else{var g=al(a,hA[0],d.domain,d.path);c=1!==Tk(e,g,f)}return c},gA=function(a){var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=$k(c,b.domain,b.path,hA,P.g.U);if(!d){var e=String(S(a.h,P.g.Zb,""));e&&e!=c&&(d=$k(e,b.domain,b.path,hA,P.g.U))}return d},
hA=["GA1"],jA=function(a,b){var c=a.m[P.g.Ya];if(S(a.h,P.g.fb)&&S(a.h,P.g.ic)||b&&c===b)return c;if(c){c=""+c;if(!iA(c,a))return O(31),a.H=!0,"";eA(c,tk(P.g.U));return c}O(32);a.H=!0;return""};
var mA=function(a,b,c){if(!b)return a;if(!a)return b;var d=kA(a);if(!d)return b;var e,f=Oa(null!=(e=S(c.h,P.g.Sc))?e:30);if(!(Math.floor(c.metadata.event_start_timestamp_ms/1E3)>d.ve+60*f))return a;var g=kA(b);if(!g)return a;g.uc=d.uc+1;var h;return null!=(h=lA(g.sessionId,g.uc,g.ed,g.ve,g.jh,g.qc,g.he))?h:b},pA=function(a,b){var c=b.metadata.cookie_options,d=nA(b,c),e=al(a,oA[0],c.domain,c.path),f={Cb:P.g.U,domain:c.domain,path:c.path,expires:c.Ab?new Date(Ta()+1E3*c.Ab):void 0,flags:c.flags};U(52)&&
Tk(d,void 0,f);return 1!==Tk(d,e,f)},qA=function(a){var b=a.metadata.cookie_options,c=nA(a,b),d=$k(c,b.domain,b.path,oA,P.g.U);if(!d||!Am&&!U(52))return d;var e=Kk(c,void 0,void 0,P.g.U);if(d&&1<e.length){O(114);for(var f=void 0,g=void 0,h=0;h<e.length;h++){var m=e[h].split(".");if(!(7>m.length)){var n=Number(m[5]);n&&(!g||n>g)&&(g=n,f=e[h])}}f&&!f.endsWith(d)&&(O(115),U(52)&&(d=f.split(".").slice(2).join(".")))}return d},lA=function(a,b,c,d,e,f,g){if(a&&b){var h=[a,b,Oa(c),d,e];h.push(f?"1":"0");
h.push(g||"0");return h.join(".")}},oA=["GS1"],nA=function(a,b){return b.prefix+"_ga_"+a.target.K[0]},kA=function(a){if(a){var b=a.split(".");if(!(5>b.length||7<b.length)){7>b.length&&O(67);var c=Number(b[1]),d=Number(b[3]),e=Number(b[4]||0);c||O(118);d||O(119);isNaN(e)&&O(120);if(!U(74)||c&&d&&!isNaN(e))return{sessionId:b[0],uc:c,ed:!!Number(b[2]),ve:d,jh:e,qc:"1"===b[5],he:"0"!==b[6]?b[6]:void 0}}}},rA=function(a){return lA(a.m[P.g.hb],a.m[P.g.Md],a.m[P.g.Ld],Math.floor(a.metadata.event_start_timestamp_ms/
1E3),a.metadata.join_timer_sec||0,!!a.metadata[P.g.Ve],a.m[P.g.Oc])};
var sA=function(a){var b=S(a.h,P.g.ya),c=a.h.B[P.g.ya];if(c===b)return c;var d=Uc(b);c&&c[P.g.V]&&(d[P.g.V]=(d[P.g.V]||[]).concat(c[P.g.V]));return d},tA=function(a,b){var c=Mn(!0);return"1"!==c._up?{}:{clientId:c[a],sj:c[b]}},uA=function(a,b,c){var d=Mn(!0),e=d[b];e&&(fA(a,e,2),iA(e,a));var f=d[c];f&&pA(f,a);return!(!e||!f)},vA=!1,wA=function(a){var b=sA(a)||{},c=a.metadata.cookie_options,d=c.prefix+"_ga",e=nA(a,c);Vn(b[P.g.jc],!!b[P.g.V])&&uA(a,d,e)&&(vA=!0);b[P.g.V]&&Sn(function(){var f={},g=gA(a);
g&&(f[d]=g);var h=qA(a);h&&(f[e]=h);var m=Kk("FPLC",void 0,void 0,P.g.U);m.length&&(f._fplc=m[0]);return f},b[P.g.V],b[P.g.Mb],!!b[P.g.vb])},yA=function(a){if(!S(a.h,P.g.ib))return{};var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=nA(a,b);Tn(function(){var e;if(tk("analytics_storage"))e={};else{var f={};e=(f._up="1",f[c]=a.m[P.g.Ya],f[d]=rA(a),f)}return e},1);return!tk("analytics_storage")&&xA()?tA(c,d):{}},xA=function(){var a=Xi(z.location,"host"),b=Xi($i(H.referrer),"host");return a&&b?a===b||
0<=a.indexOf("."+b)||0<=b.indexOf("."+a)?!0:!1:!1},zA=function(a){if(!a)return a;var b=String(a);b=Ln(b);return b=Ln(b,"_ga")};var AA=function(){var a=Ta(),b=a+864E5,c=20,d=5E3;return function(){var e=Ta();e>=b&&(b=e+864E5,d=5E3);if(1>d)return!1;c=Math.min(c+(e-a)/1E3*5,20);a=e;if(1>c)return!1;d--;c--;return!0}};var BA=function(){var a=!0;tm(7)&&tm(9)&&tm(10)||(a=!1);return a},CA=function(){var a=!0;tm(3)&&tm(4)||(a=!1);return a};
var DA=function(a,b){bk()&&(a.gcs=uk(),U(106)&&(a.gcd=yk()),b.metadata.is_consent_update&&(a.gcu="1"))},GA=function(a){if(a.metadata.is_merchant_center)return"https://www.merchant-center-analytics.goog/mc/collect";var b=hs(S(a.h,P.g.Qa),"/g/collect");if(b)return b;var c=hp(a,P.g.eb,S(a.h,P.g.eb));c=c||Qz(a);var d=S(a.h,P.g.rb);return c&&!Bi()&&!1!==d&&BA()&&tk(P.g.I)&&tk(P.g.U)?EA():
FA()},HA=!1;HA=!0;var IA={};IA[P.g.Ya]="cid";IA[P.g.We]="_fid";IA[P.g.lg]="_geo";IA[P.g.ub]="gdid";IA[P.g.Id]="ir";IA[P.g.xa]="ul";IA[P.g.Rc]="_rdi";IA[P.g.xb]="sr";IA[P.g.Ai]="tid";IA[P.g.ff]="tt";IA[P.g.hf]="ec_mode";IA[P.g.Ii]="gtm_up";IA[P.g.Od]="uaa",IA[P.g.Pd]="uab",IA[P.g.Qd]="uafvl",IA[P.g.Rd]="uamb",IA[P.g.Sd]="uam",IA[P.g.Td]="uap",IA[P.g.Ud]="uapv",IA[P.g.Vd]="uaw";var JA={};JA[P.g.Ec]="cc";JA[P.g.Fc]="ci";JA[P.g.Gc]="cm";JA[P.g.Hc]=
"cn";JA[P.g.Jc]="cs";JA[P.g.Kc]="ck";JA[P.g.sa]="cu";JA[P.g.ja]="dl";JA[P.g.Da]="dr";JA[P.g.wb]="dt";JA[P.g.Ld]="seg";JA[P.g.hb]="sid";JA[P.g.Md]="sct";JA[P.g.za]="uid";U(80)&&(JA[P.g.Nb]="dp");var KA={};KA[P.g.zd]="_et";KA[P.g.tb]="edid";var LA={};LA[P.g.Ec]="cc";LA[P.g.Fc]="ci";LA[P.g.Gc]="cm";LA[P.g.Hc]="cn";LA[P.g.Jc]="cs";LA[P.g.Kc]="ck";var MA={},NA=Object.freeze((MA[P.g.na]=1,MA)),FA=function(){var a="www";HA&&Ci()&&(a=Ci());return"https://"+a+".google-analytics.com/g/collect"},EA=function(){var a;
HA&&""!==Ci()&&(a=Ci());return"https://"+(a?a+".":"")+"analytics.google.com/g/collect"},OA=function(a,b,c){var d={},e={},f={};d.v="2";d.tid=a.target.Z;Qz(a)&&!Bi()&&(d._ono=1);d.gtm=pl();d._p=dA();c&&(d.em=c);a.metadata.create_google_join&&(d._gaz=1);DA(d,a);var g=a.m[P.g.ub];g&&(d.gdid=g);e.en=wf(a.eventName,40);a.metadata.is_first_visit&&(e._fv=a.metadata.is_first_visit_conversion?
2:1);a.metadata.is_new_to_site&&(e._nsi=1);a.metadata.is_session_start&&(e._ss=a.metadata.is_session_start_conversion?2:1);a.metadata.is_conversion&&(e._c=1);a.metadata.is_external_event&&(e._ee=1);if(a.metadata.is_ecommerce){var h=a.m[P.g.ca]||S(a.h,P.g.ca);if(Ha(h))for(var m=0;m<h.length&&200>m;m++)e["pr"+(m+1)]=Bf(h[m])}var n=a.m[P.g.tb];n&&(e.edid=n);var p=function(t,u){if("object"!==typeof u||!NA[t]){t=wf(t,40);var v="ep."+t,w="epn."+t;t=Ga(u)?w:v;var x=Ga(u)?v:w;e.hasOwnProperty(x)&&delete e[x];
e[t]=wf(u,100)}};l(a.m,function(t,u){if(void 0!==u&&!wh.hasOwnProperty(t)){null===u&&(u="");var v;t!==P.g.Oc?v=!1:a.metadata.euid_mode_enabled?(d.ecid=u,v=!0):v=void 0;if(!v&&t!==P.g.Ve){var w=u;!0===u&&(w="1");!1===u&&(w="0");var x;if(IA[t])x=IA[t],d[x]=wf(w,420);else if(JA[t])x=JA[t],f[x]=wf(w,"dl"===x&&U(81)?1E3:420);else if(KA[t])x=KA[t],e[x]=wf(w,420);else if("_"===t.charAt(0))d[t]=wf(w,420);else{var y;LA[t]?y=!0:t!==P.g.Ic?y=!1:("object"!==typeof u&&p(t,u),y=!0);y||p(t,u)}}}});(function(t){Rz(a)&&
"object"===typeof t&&l(t||{},function(u,v){"object"!==typeof v&&(d["sst."+u]=wf(v,420))})})(a.m[P.g.be]);var q=a.m[P.g.Ra]||{};!1!==S(a.h,P.g.aa)&&CA()||(q._npa="1");U(28)&&!1===S(a.h,P.g.rb)&&(d.ngs="1");l(q,function(t,u){if(void 0!==u)if(null===u&&(u=""),t===P.g.za&&!f.uid)f.uid=wf(u,36);else if(b[t]!==u){var v=(Ga(u)?"upn.":"up.")+wf(t,24);e[v]=wf(u,36);b[t]=u}});var r=!1;return Df.call(this,
{Sa:d,vc:f,Xg:e},GA(a),Rz(a),r)||this};oa(OA,Df);
var PA=function(a,b){return a.replace(/\$\{([^\}]+)\}/g,function(c,d){return b[d]||c})},QA=function(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")},RA=function(a){var b={},c="",d=a.pathname.indexOf("/g/collect");0<=d&&(c=a.pathname.substring(0,d));b.transport_url=a.protocol+"//"+a.hostname+c;return b},SA=function(a,b){var c=new z.XMLHttpRequest;c.withCredentials=!0;var d=b?"POST":"GET",e="",f=0,g=$i(a),h=RA(g),m=QA(g);c.onprogress=function(n){if(200===
c.status){e+=c.responseText.substring(f);f=n.loaded;for(var p=PA(e,h),q=p.indexOf("\n\n");-1!==q;){var r;a:{var t;var u=p.substring(0,q).split("\n"),v="undefined"!=typeof Symbol&&Symbol.iterator&&u[Symbol.iterator];if(v)t=v.call(u);else if("number"==typeof u.length)t={next:ba(u)};else throw Error(String(u)+" is not an iterable or ArrayLike");var w=t.next().value,x=t.next().value;if(w.startsWith("event: message")&&x.startsWith("data: "))try{r=JSON.parse(x.substring(x.indexOf(":")+1));break a}catch(J){}r=
void 0}var y=r;if(y){var A=y.send_pixel||[];if(Array.isArray(A))for(var B=0;B<A.length;B++)pc(A[B]);if(U(66)){var D=y.send_beacon||[];if(Array.isArray(D))for(var E=0;E<D.length;E++)wc(D[E])}}p=p.substring(q+2);q=p.indexOf("\n\n")}e=p}};c.open(d,m);c.send(b)};
var VA=function(a,b,c,d){var e=a+"?"+b;TA&&(d=!(0===e.indexOf(FA())||0===e.indexOf(EA())));d&&!Vz?SA(e,c):UA(a,b,c)},WA=function(a,b){function c(r){p.push(r+"="+encodeURIComponent(""+a.Sa[r]))}var d=b.Sl,e=b.Tl,f=b.Qk,g=b.uk,h=b.tk,m=b.al,n=b.Zk;if(d||e){var p=[];a.Sa._ono&&c("_ono");c("tid");c("cid");c("gtm");p.push("aip=1");a.vc.uid&&!n&&p.push("uid="+encodeURIComponent(""+a.vc.uid));
d&&(UA("https://stats.g.doubleclick.net/g/collect","v=2&"+p.join("&")),ik("https://stats.g.doubleclick.net/g/collect?v=2&"+p.join("&")));if(e){p.push("z="+Ka());if(!m){var q=f&&0===f.indexOf("google.")&&"google.com"!=f?"https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%",f):void 0;q&&pc(q+p.join("&"))}U(28)&&!Vz&&g&&h&&aq()&&function(){var r=cq()+"/td/ga/rul?";p=[];c("tid");p.push("gacid="+encodeURIComponent(String(a.Sa.cid)));c("gtm");p.push("aip=1");p.push("fledge=1");p.push("z="+
Ka());bq(r+p.join("&"),a.Sa.tid)}()}}},TA=!1;var XA=function(){this.C=1;this.N={};this.h=new Ef;this.m=-1};XA.prototype.B=function(a,b){var c=this,d=new OA(a,this.N,b),e=Wz(a);e&&this.h.C(d)||this.flush();if(e&&this.h.add(d)){if(0>this.m){var f=z.setTimeout,g;Rz(a)?YA?(YA=!1,g=ZA):g=$A:g=5E3;this.m=f.call(z,function(){return c.flush()},g)}}else{var h=Gf(d,this.C++);
VA(d.m,h.th,h.body,d.C);var m=a.metadata.create_dc_join,n=a.metadata.create_google_join,p=!1!==S(a.h,P.g.Ba),q=!1!==S(a.h,P.g.aa),r={eventId:a.h.eventId,priorityId:a.h.priorityId},t={Sl:m,Tl:n,Qk:Ei(),uk:p,tk:q,al:Bi(),Zk:a.metadata.euid_mode_enabled,sm:r};WA(d,t)}Fr(a)};XA.prototype.add=function(a){a.metadata.euid_mode_enabled&&!Vz?this.T(a):this.B(a)};XA.prototype.flush=function(){if(this.h.events.length){var a=Hf(this.h,this.C++);VA(this.h.h,a.th,a.body,this.h.m);this.h=new Ef;0<=this.m&&(z.clearTimeout(this.m),
this.m=-1)}};XA.prototype.T=function(a){var b=this,c=Sz(a);c?th(c,function(d){b.B(a,1===d.split("~").length?void 0:d)}):this.B(a)};var UA=function(a,b,c){var d=a+"?"+b;if(c)try{fc.sendBeacon&&fc.sendBeacon(d,c)}catch(e){vb("TAGGING",15)}else wc(d)},ZA=ql('',500),$A=ql('',5E3),YA=!0;var aB=function(a,b,c){void 0===c&&(c={});if("object"===typeof b)for(var d in b)aB(a+"."+d,b[d],c);else c[a]=b;return c},bB=function(a){if(Rz(a)){var b=function(d){var e=aB(P.g.na,d);l(e,function(f,g){a.m[f]=g})},c=S(a.h,P.g.na);void 0!==c?b(c):b(a.metadata.user_data);a.metadata.user_data=void 0}};var cB=window,dB=document,eB=function(a){var b=cB._gaUserPrefs;if(b&&b.ioo&&b.ioo()||dB.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===cB["ga-disable-"+a])return!0;try{var c=cB.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Ek("AMP_TOKEN",String(dB.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return dB.getElementById("__gaOptOutExtension")?!0:!1};
var fB=function(a,b,c){c||(c=function(){});void 0!==a.m[b]&&(a.m[b]=c(a.m[b]))},gB=function(a,b){var c=P.g.I;tk(c)||Bk(function(){b.metadata.is_consent_update=!0;var d=Gh[c||""];d&&Uz(b,"gcut",d);a.Ui(b)},c)},qn={Ek:"",fm:Number("")},hB={},iB=(hB[P.g.Ec]=1,hB[P.g.Fc]=1,hB[P.g.Gc]=1,hB[P.g.Hc]=1,hB[P.g.Jc]=1,hB[P.g.Kc]=1,hB),jB=function(a){this.T=a;this.pb=new XA;this.h=void 0;this.C=new bA;this.m=this.B=void 0;this.N=!1;this.Xd=void 0;this.nd=
!1};aa=jB.prototype;aa.Fl=function(a,b,c){var d=this,e=So(this.T);if(e)if(c.eventMetadata.is_external_event&&"_"===a.charAt(0))c.W();else{a!==P.g.ra&&a!==P.g.Fa&&Zz(a)&&O(58);kB(c.h);var f=new gp(e,a,c);f.metadata.event_start_timestamp_ms=b;var g=[P.g.U];(hp(f,P.g.eb,S(f.h,P.g.eb))||Rz(f))&&g.push(P.g.I);var h=function(){Ck(function(){d.Gl(f)},g)};U(11)&&U(25)?rn(h):h()}else c.W()};aa.Gl=function(a){this.m=a;try{if(eB(a.target.Z))O(28),a.H=!0;else if(U(97)){var b;var c=il(ll()),d=c&&c.parent;b=d?
il(d):void 0;if(b&&Ha(b.destinations))for(var e=0;e<b.destinations.length;e++)if(eB(b.destinations[e])){O(125);a.H=!0;break}}if(0<=qn.Ek.replace(/\s+/g,"").split(",").indexOf(a.eventName))a.H=!0;else{var f=Tz(a);f&&f.blacklisted&&(a.H=!0)}var g=H.location.protocol;"http:"!=g&&"https:"!=g&&(O(29),a.H=!0);fc&&"preview"==fc.loadPurpose&&(O(30),a.H=!0);U(107)&&U(108)&&(a.H=!0);U(107)&&S(a.h,P.g.fb)&&!S(a.h,P.g.ic)?(a.eventName!==P.g.ra&&a.eventName!==P.g.od&&O(131),a.H=!0):!S(a.h,P.g.fb)&&S(a.h,P.g.ic)&&
(O(132),a.H=!0);var h=Kh.grl;h||(h=AA(),Kh.grl=h);h()||(O(35),a.H=!0);if(a.H){a.h.W();wb();return}var m={prefix:String(S(a.h,P.g.Ha,"")),path:String(S(a.h,P.g.Mc,"/")),flags:String(S(a.h,P.g.Na,"")),domain:String(S(a.h,P.g.Ma,"auto")),Ab:Number(S(a.h,P.g.Ca,63072E3))};a.metadata.cookie_options=m;lB(a);this.gk(a);this.C.am(a);a.metadata.is_merchant_center?a.metadata.euid_mode_enabled=!1:S(a.h,P.g.bf)?a.metadata.euid_mode_enabled=!1:hp(a,"ccd_add_1p_data",!1)?a.metadata.euid_mode_enabled=!0:a.metadata.euid_mode_enabled=
U(16)?!1:uj(sj(a.h));if(a.metadata.euid_mode_enabled){var n=sj(a.h);if(uj(n)){var p=S(a.h,P.g.na);if(hp(a,"ccd_add_1p_data",!1))null===p?a.metadata.user_data_from_code=null:(n.enable_code&&Tc(p)&&(a.metadata.user_data_from_code=p),Tc(n.selectors)&&!a.metadata.user_data_from_manual&&(a.metadata.user_data_from_manual=rj(n.selectors)));else if(void 0!==p)a.metadata.user_data=p,a.m._udm="c";else{var q=vj(n);a.metadata.user_data=q;if("selectors"===n.mode||Tc(n.selectors))a.m._udm="m";else if("auto_detect"===
n.mode||Tc(n.auto_detect))a.m._udm="a"}}}var r=this.nj,t;S(a.h,P.g.ib)&&(tk(P.g.U)||S(a.h,P.g.Ya)||(a.m[P.g.Ii]=!0));var u;var v;v=void 0===v?3:v;var w=z.location.href;if(w){var x=$i(w).search.replace("?",""),y=Vi(x,"_gl",!1,!0)||"";u=y?void 0!==Nn(y,v):!1}else u=!1;u&&Rz(a)&&Uz(a,"glv",1);a.eventName===P.g.ra?(S(a.h,P.g.ib)&&Ho(["aw","dc"]),wA(a),t=yA(a)):t={};r.call(this,t);a.eventName==P.g.ra&&(S(a.h,P.g.Pa,!0)?(a.h.h[P.g.ba]&&(a.h.m[P.g.ba]=a.h.h[P.g.ba],a.h.h[P.g.ba]=void 0,a.m[P.g.ba]=void 0),
a.eventName=P.g.Xb):a.H=!0);var A=db(Gp(a.h,P.g.ba,1),".");A&&(a.m[P.g.ub]=A);var B=db(Gp(a.h,P.g.ba,2),".");B&&(a.m[P.g.tb]=B);var D=this.B,E=this.C,J=!this.nd,G=this.h,N=S(a.h,P.g.Ya);if(S(a.h,P.g.fb)&&S(a.h,P.g.ic))N?fA(a,N,1):(O(127),a.H=!0);else{var Q=N?1:8;a.metadata.is_new_to_site=!1;N||(N=gA(a),Q=3);N||(N=G,Q=5);if(!N){var ea=tk(P.g.U),na=cA();N=!na.from_cookie||ea?na.vid:void 0;Q=6}N?N=""+N:(N=Xk(),Q=7,a.metadata.is_first_visit=a.metadata.is_new_to_site=!0);fA(a,N,Q)}var X=Math.floor(a.metadata.event_start_timestamp_ms/
1E3),R=void 0;a.metadata.is_new_to_site||(R=qA(a)||D);var ia=Oa(S(a.h,P.g.Sc,30));ia=Math.min(475,ia);ia=Math.max(5,ia);var ja=Oa(S(a.h,P.g.df,1E4)),T=kA(R);a.metadata.is_first_visit=!1;a.metadata.is_session_start=!1;a.metadata.join_timer_sec=0;T&&T.jh&&(a.metadata.join_timer_sec=Math.max(0,T.jh-Math.max(0,X-T.ve)));var Ea=!1;T||(Ea=a.metadata.is_first_visit=!0,T={sessionId:String(X),uc:1,ed:!1,ve:X,qc:!1,he:void 0});X>T.ve+60*ia&&(Ea=!0,T.sessionId=String(X),T.uc++,T.ed=!1,T.he=void 0);if(Ea)a.metadata.is_session_start=
!0,E.Vk(a);else if(E.Ok()>ja||a.eventName==P.g.Xb)T.ed=!0;a.metadata.euid_mode_enabled?S(a.h,P.g.za)?T.qc=!0:(T.qc&&(T.he=void 0),T.qc=!1):T.qc=!1;var Xa=T.he;if(a.metadata.euid_mode_enabled){var Ca=S(a.h,P.g.Oc),Ja=Ca?1:8;Ca||(Ca=Xa,Ja=4);Ca||(Ca=Wk(),Ja=7);var bb=Ja,Ec=a.metadata.enhanced_client_id_source;if(void 0===Ec||bb<=Ec)a.m[P.g.Oc]=Ca.toString(),a.metadata.enhanced_client_id_source=bb}J?(a.copyToHitData(P.g.hb,T.sessionId),a.copyToHitData(P.g.Md,T.uc),a.copyToHitData(P.g.Ld,T.ed?1:0)):(a.m[P.g.hb]=
T.sessionId,a.m[P.g.Md]=T.uc,a.m[P.g.Ld]=T.ed?1:0);a.metadata[P.g.Ve]=T.qc?1:0;mB(a);if(!S(a.h,P.g.ic)||!S(a.h,P.g.fb)){var Fc="",$c=H.location;if($c){var ci=$c.pathname||"";"/"!=ci.charAt(0)&&(ci="/"+ci);Fc=$c.protocol+"//"+$c.hostname+ci+$c.search}a.copyToHitData(P.g.ja,Fc);var hE=a.copyToHitData,iE=P.g.Da,di;a:{var st=Kk("_opt_expid",void 0,void 0,P.g.U)[0];if(st){var tt=decodeURIComponent(st).split("$");if(3===tt.length){di=tt[2];break a}}if(void 0!==Kh.ga4_referrer_override)di=Kh.ga4_referrer_override;
else{var ut=si("gtm.gtagReferrer."+a.target.Z);di=ut?""+ut:H.referrer}}hE.call(a,iE,di||void 0);a.copyToHitData(P.g.wb,H.title);a.copyToHitData(P.g.xa,(fc.language||"").toLowerCase());var vt=Ji();a.copyToHitData(P.g.xb,vt.width+"x"+vt.height);U(80)&&a.copyToHitData(P.g.Nb)}a.metadata.create_dc_join=!1;a.metadata.create_google_join=!1;if(!(U(66)&&Rz(a)||a.metadata.is_merchant_center||!1===S(a.h,P.g.rb))&&BA()&&tk(P.g.I)){var ei=hp(a,P.g.eb,S(a.h,P.g.eb));
ei=ei||Qz(a);(a.metadata.is_session_start||S(a.h,P.g.Xe))&&(a.metadata.create_dc_join=!!ei);var wt;wt=a.metadata.join_timer_sec;ei&&0===(wt||0)&&(a.metadata.join_timer_sec=60,a.metadata.create_google_join=!0)}nB(a);Ah.hasOwnProperty(a.eventName)&&(a.metadata.is_ecommerce=!0,a.copyToHitData(P.g.ca),a.copyToHitData(P.g.sa));a.copyToHitData(P.g.ff);for(var xt=S(a.h,P.g.Ye)||[],Pl=0;Pl<xt.length;Pl++){var zt=xt[Pl];if(zt.rule_result){a.copyToHitData(P.g.ff,
zt.traffic_type);Xz(3);break}}if(!a.metadata.is_merchant_center&&S(a.h,P.g.Qa)){var At=sA(a)||{},kE=(Vn(At[P.g.jc],!!At[P.g.V])?Mn(!0)._fplc:void 0)||(0<Kk("FPLC",void 0,void 0,P.g.U).length?void 0:"0");a.m._fplc=kE}if(void 0!==S(a.h,P.g.Id))a.copyToHitData(P.g.Id);else{var Bt=S(a.h,P.g.Kd),Ql,fi;a:{if(vA){var Rl=sA(a)||{};if(Rl&&Rl[P.g.V])for(var Ct=Yi($i(a.m[P.g.Da]),"host",!0),gi=Rl[P.g.V],ig=0;ig<gi.length;ig++)if(gi[ig]instanceof RegExp){if(gi[ig].test(Ct)){fi=!0;break a}}else if(0<=Ct.indexOf(gi[ig])){fi=
!0;break a}}fi=!1}if(!(Ql=fi)){var hi;if(hi=Bt)a:{for(var Dt=Bt.include_conditions||[],lE=Yi($i(a.m[P.g.Da]),"host",!0),Sl=0;Sl<Dt.length;Sl++)if(Dt[Sl].test(lE)){hi=!0;break a}hi=!1}Ql=hi}Ql&&(a.m[P.g.Id]="1",Xz(4))}Rz(a)&&(Uz(a,"uc",zi()),bk()&&Uz(a,"rnd",bl()));if(U(66)&&Rz(a)){hp(a,P.g.eb,!1)&&Uz(a,"gse",1);!1===S(a.h,P.g.rb)&&Uz(a,
"ngs",1);Bi()&&Uz(a,"ga_rd",1);BA()||Uz(a,"ngst",1);var Et=Ei();Et&&Uz(a,"etld",Et)}if(U(94)&&Rz(a)){var Ft=HA?Ci():"";Ft&&Uz(a,"gcsub",Ft)}Rz(a)&&bk()&&(ck()&&Uz(a,"gcd",yk()),S(a.h,P.g.la)&&Uz(a,"adr",1));if(Rz(a)){var Gt=qq();Gt&&Uz(a,"us_privacy",Gt);var Ht=sm();Ht&&Uz(a,"gdpr",Ht);var It=rm();It&&Uz(a,"gdpr_consent",It)}a:if(U(11))if(!mn(z))O(87);else if(void 0!==on){O(85);var Jt=kn();if(Jt){if(U(59)){if(S(a.h,P.g.Rc)&&!Rz(a))break a}else if(S(a.h,P.g.Rc))break a;sn(Jt,a)}else O(86)}U(61)&&S(a.h,
P.g.fb)&&Xz(12);if(U(78)){var Tl=Zp(Yp());Tl||oB||(oB=!0,Dl(),Tl=Zp(Yp()));Tl&&(a.m[P.g.Kb]="1")}if(a.eventName==P.g.Fa){var Lt=S(a.h,P.g.Oa),mE=S(a.h,P.g.cb),Mt=void 0;Mt=a.m[Lt];mE(Mt||S(a.h,Lt));a.H=!0}if(!U(26)&&!a.h.eventMetadata.syn_or_mod){var Ul=S(a.h,P.g.Qe);if(Ul){var ae=Uc(a.h.h);Uc(a.m,ae);for(var Nt=Ul.edit_rules||[],Ot=!1,Vl=0;Vl<Nt.length;Vl++){var ii;a:{var ji=a,be=Nt[Vl];if(xz(ji.eventName,ae,be.event_name_predicate,be.conditions||[])){if(be.new_event_name){var Pt=k(be.new_event_name)?
String(be.new_event_name):tz(ji.eventName,ae,be.new_event_name);if(Zz(Pt)){ii=!1;break a}ji.eventName=String(Pt)}$z(ji.eventName,ae,be);Xz(2);ii=!0}else ii=!1}ii&&(Ot=!0)}for(var Qt=Ul.synthesis_rules||[],Wl=0;Wl<Qt.length;Wl++){var Xl=a,jg=Qt[Wl];if(xz(Xl.eventName,ae,jg.event_name_predicate,jg.conditions||[])){var Yl=jg.new_event_name;if(!Zz(Yl)){var Rt=jg.merge_source_event_params?Uc(ae):{};$z(Yl,Rt,jg);var St={},Zl={eventMetadata:(St.syn_or_mod=!0,St)};Zl.eventMetadata.event_usage=[11];uz&&Zl.eventMetadata.event_usage.push(10);
var nE=kt(Xl.target.Z,Yl,Rt);nt(nE,Xl.h.eventId,Zl);Xz(1)}}}if(Ot){for(var $l={},Tt={eventMetadata:($l.syn_or_mod=!0,$l.is_external_event=!!a.h.eventMetadata.is_external_event,$l)},Ut,am=[],Vt=ub.GA4_EVENT||[],ki=0;ki<Vt.length;ki++)Vt[ki]&&am.push(ki);(Ut=0<am.length?am:void 0)&&(Tt.eventMetadata.event_usage=Ut);var oE=kt(a.target.Z,a.eventName,ae);nt(oE,a.h.eventId,Tt);a.H=!0}}}a.copyToHitData(P.g.za);a.copyToHitData(P.g.Ra);kp(a);bB(a);a.metadata.em_event&&Xz(14);var bm=a.metadata.event_usage;
if(Ha(bm))for(var cm=0;cm<bm.length;cm++)Xz(bm[cm]);var Wt=xb("GA4_EVENT");Wt&&(a.m._eu=Wt);if(a.metadata.speculative||a.H){a.h.W();wb();return}var pE=this.nj,Xt,qE=this.h,dm;a:{var em=rA(a);if(em){if(pA(em,a)){dm=em;break a}O(25);a.H=!0}dm=void 0}var rE=dm;Xt={clientId:jA(a,qE),sj:rE};pE.call(this,Xt);this.nd=!0;this.Xl(a);if(Rz(a)){var sE=a.metadata.is_conversion;("page_view"===a.eventName||sE)&&gB(this,a)}this.C.zh();this.Xd=pB(a,this.Xd);a.copyToHitData(P.g.lg);S(a.h,P.g.Rc)&&(a.m[P.g.Rc]=!0,
U(75)&&Rz(a)||fB(a,P.g.xb));if(a.H){a.h.W();wb();return}this.Ui(a);a.h.R()}catch(GF){a.h.W()}wb()};aa.Ui=function(a){this.pb.add(a)};aa.nj=function(a){var b=a.clientId,c=a.sj;b&&c&&(this.h=b,this.B=c)};aa.flush=function(){this.pb.flush()};aa.Xl=function(a){var b=this;if(!this.N){var c=tk(P.g.U);Ak([P.g.U],function(){var d=tk(P.g.U);if(c^d&&b.m&&b.B&&b.h){var e=b.h;if(d){var f=gA(b.m);if(f){b.h=f;var g=qA(b.m);g&&(b.B=mA(g,b.B,b.m))}else iA(b.h,b.m),eA(b.h,!0);pA(b.B,b.m);
var h={};h[P.g.Xe]=e;var m=kt(b.T,P.g.od,h);nt(m,a.h.eventId,{});}else{b.B=void 0;b.h=void 0;z.gaGlobal={};}c=d}});this.N=!0}};aa.gk=function(a){a.eventName!==P.g.Fa&&this.C.fk(a)};var lB=function(a){function b(c,d){wh[c]||void 0===d||(a.m[c]=d)}l(a.h.m,b);l(a.h.h,b)},mB=function(a){var b=Hp(a.h),c=function(d,e){iB[d]&&(a.m[d]=e)};Tc(b[P.g.Ic])?
l(b[P.g.Ic],function(d,e){c((P.g.Ic+"_"+d).toLowerCase(),e)}):l(b,c)},nB=function(a){var b=function(c){return!!c&&c.conversion};a.metadata.is_conversion=b(Tz(a));a.metadata.is_first_visit&&(a.metadata.is_first_visit_conversion=b(Tz(a,"first_visit")));a.metadata.is_session_start&&(a.metadata.is_session_start_conversion=b(Tz(a,"session_start")))},pB=function(a,b){var c=void 0;return c},oB=!1;
function kB(a){l(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[P.g.Ra]||{};l(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var qB=function(a){if("prerender"==H.visibilityState)return!1;a();return!0},rB=function(a){if(!qB(a)){var b=!1,c=function(){!b&&qB(a)&&(b=!0,rc(H,"visibilitychange",c),O(55))};qc(H,"visibilitychange",c);O(54)}};var tB=function(a,b){rB(function(){var c=So(a);if(c){var d=sB(c,b);pu.register(a,d)}});};function sB(a,b){var c=function(){};var d=new jB(a.id),e="MC"===a.prefix;c=function(f,g,h,m){e&&(m.eventMetadata.is_merchant_center=!0);d.Fl(g,h,m)};uB(a,d,b);return c}
function uB(a,b,c){var d=b.C,e={},f={eventId:c,eventMetadata:(e.batch_on_navigation=!0,e)};d.Kl(function(){Vz=!0;pu.flush();1E3<=d.Cf()&&fc.sendBeacon&&qu(P.g.od,{},a.id,f);b.flush();d.oj(function(){Vz=!1;d.oj()})});};var eD=sB;function gD(a,b,c){var d=this;}gD.M="internal.gtagConfig";function hD(){var a={};return a};
function jD(a,b){}jD.O="gtagSet";function kD(a,b){}kD.O="injectHiddenIframe";var lD={};
function nD(a,b,c,d){}var oD=Object.freeze({dl:1,id:1}),pD={};
function qD(a,b,c,d){}nD.O="injectScript";qD.M="internal.injectScript";function rD(a){var b=!0;return b}rD.O="isConsentGranted";var sD=function(){var a=Fg(function(b){this.h.h.log("error",b)});a.O="JSON";return a};var tD=function(a){this.containerId=a};function uD(a,b){var c=this,d=null;return d}uD.M="internal.loadGoogleTag";var vD=function(){return!1},wD={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var xD=["textContent","value","tagName","children","childElementCount"];
function yD(a){var b;M(this,"read_dom_elements","css","*");for(var c=0;c<xD.length;c++)M(this,"access_dom_element_property",H.body,"read",xD[c]);var d=Wc(a)||{},e=oj({ad:!!d.includeSelector,bd:!!d.includeVisibility,ie:d.excludeElementSelectors,yb:d.fieldFilters,rj:!!d.selectMultipleElements});b=new jb;var f=new wa;b.set("elements",f);for(var g=e.elements,h=0;h<g.length;h++)f.push(zD(g[h]));void 0!==e.vh&&b.set("preferredEmailElement",
zD(e.vh));b.set("status",e.status);return b}var zD=function(a){var b=new jb;b.set("userData",a.ob);b.set("tagName",a.tagName);void 0!==a.querySelector&&b.set("querySelector",a.querySelector);void 0!==a.isVisible&&b.set("isVisible",a.isVisible);switch(a.type){case 1:b.set("type","email")}return b};yD.M="internal.locateUserData";function AD(){}AD.O="logToConsole";function BD(a){var b=void 0;if("function"===typeof URL){var c;a:{var d;try{d=new URL(a)}catch(w){c=void 0;break a}for(var e={},f=Array.from(d.searchParams),g=0;g<f.length;g++){var h=f[g][0],m=f[g][1];e.hasOwnProperty(h)?"string"===typeof e[h]?e[h]=[e[h],m]:e[h].push(m):e[h]=m}c=Vc({href:d.href,origin:d.origin,protocol:d.protocol,username:d.username,password:d.password,host:d.host,hostname:d.hostname,port:d.port,pathname:d.pathname,search:d.search,searchParams:e,
hash:d.hash})}return c}var n;try{n=$i(a)}catch(w){return}if(!n.protocol||!n.host)return;var p={};if(n.search)for(var q=n.search.replace("?","").split("&"),r=0;r<q.length;r++){var t=q[r].split("="),u=t[0],v=decodeURIComponent(t.splice(1).join("="));p.hasOwnProperty(u)?"string"===typeof p[u]?p[u]=[p[u],v]:p[u].push(v):p[u]=v}n.searchParams=p;n.origin=n.protocol+"//"+n.host;n.username="";n.password="";b=Vc(n);return b}BD.O="parseUrl";function CD(a){}CD.M="internal.processAsNewEvent";function DD(a,b){var c=!1;return c}DD.O="queryPermission";function ED(){var a="";return a}ED.O="readCharacterSet";function FD(){var a="";return a}FD.O="readTitle";function GD(a,b){var c=this;L(F(this),["destinationId:!string","callback:!Fn"],arguments),lp(a,function(d){b.h(c.h,Vc(d,c.h,1))});}GD.M="internal.registerCcdCallback";var HD=Object.freeze(["config","event","get","set"]);function ID(a,b,c){}ID.M="internal.registerGtagCommandListener";function JD(a,b){var c=!1;return c}JD.M="internal.removeDataLayerEventListener";function KD(){}KD.O="resetDataLayer";function LD(a,b,c,d){L(F(this),["destinationIds:!*","eventName:!*","eventParameters:?DustMap","messageContext:?DustMap"],arguments);var e=c?Wc(c):{},f=Wc(a);Array.isArray(f)||(f=[f]);b=String(b);var g=d?Wc(d):{},h=this.h.h;g.originatingEntity=hy(h);for(var m=0;m<f.length;m++){var n=f[m];if("string"===typeof n){var p=Uc(e),
q=Uc(g),r=kt(n,b,p);nt(r,g.eventId||h.eventId,q)}}}LD.M="internal.sendGtagEvent";function MD(a,b,c){}MD.O="sendPixel";function ND(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f}ND.O="setCookie";function OD(a,b){}OD.O="setCorePlatformServices";function PD(a){}PD.O="setDefaultConsentState";function QD(a,b){}QD.M="internal.setDelegatedConsentType";function RD(a,b,c){return!1}RD.O="setInWindow";function SD(a,b,c){L(F(this),["targetId:!string","name:!string","value:!*"],arguments);var d=Ii(a)||{};d[b]=Wc(c,this.h);var e=a;Gi||Hi();Fi[e]=d;}SD.M="internal.setProductSettingsParameter";function TD(a,b,c){L(F(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=vu(pu,a).h,f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!Tc(e[d[f]]))throw Error("setRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}e[d[f]]=Wc(c,this.h);}TD.M="internal.setRemoteConfigParameter";function UD(a,b,c,d){var e=this;}UD.O="sha256";function VD(a,b,c){}
VD.M="internal.sortRemoteConfigParameters";var WD={},XD={};WD.O="templateStorage";WD.getItem=function(a){var b=null;M(this,"access_template_storage");var c=this.h.h;if(!c)throw Error("invalid program state");var d=c.oe();XD[d]&&(b=XD[d].hasOwnProperty("gtm."+a)?XD[d]["gtm."+a]:null);return b};
WD.setItem=function(a,b){M(this,"access_template_storage");var c=this.h.h;if(!c)throw Error("invalid program state");var d=c.oe();XD[d]=XD[d]||{};XD[d]["gtm."+a]=b;};
WD.removeItem=function(a){M(this,"access_template_storage");var b=this.h.h;if(!b)throw Error("invalid program state");var c=b.oe();if(!XD[c]||!XD[c].hasOwnProperty("gtm."+a))return;delete XD[c]["gtm."+a];};WD.clear=function(){M(this,"access_template_storage");var a=this.h.h;if(!a)throw Error("invalid program state");delete XD[a.oe()];};var YD=function(a){var b;return b};function ZD(a){}ZD.O="updateConsentState";var $D=function(){var a=new Pg,b=function(d){return Rg(a,d.M,d)},c=function(d){return a.add(d.O,d)};c(cx);c(ix);c(Vx);c(Yx);c(Zx);c(cy);c(dy);c(fy);c(sD());c(gy);c(Cz);c(Jz);c(Kz);c(Lz);c(Oz);c(jD);c(kD);c(nD);c(rD);c(AD);c(BD);c(DD);c(ED);c(FD);c(MD);c(ND);c(PD);c(RD);c(UD);c(WD);c(ZD);a.add("Math",pg());a.add("Object",Ng);a.add("TestHelper",Sg());a.add("assertApi",lg);a.add("assertThat",mg);a.add("decodeUri",rg);a.add("decodeUriComponent",sg);a.add("encodeUri",tg);a.add("encodeUriComponent",ug);
a.add("fail",Ag);a.add("generateRandom",Bg);a.add("getContainerVersion",Cg);a.add("getTimestamp",Dg);a.add("getTimestampMillis",Dg);a.add("getType",Eg);a.add("makeInteger",Gg);a.add("makeNumber",Hg);a.add("makeString",Ig);a.add("makeTableMap",Jg);a.add("mock",Mg);a.add("fromBase64",Bz,!("atob"in z));a.add("localStorage",wD,!vD());a.add("toBase64",YD,!("btoa"in z));b(fx);b(yx);b(Fx);b(Kx);b(Tx);b(Wx);b(ay);b(ey);b(qg);b(jy);b(uy);b(zy);b(Ey);b(Ny);b(Ry);b(bz);b(oz);b(vg);b(qz);b(Dz);b(Ez);b(Hz);b(Iz);
b(Mz);b(Nz);b(gD);b(qD);b(uD);b(yD);b(CD);b(GD);b(ID);b(JD);b(LD);b(QD);b(SD);b(TD);b(VD);b(Tg);Rg(a,"internal.GtagSchema",hD());

U(105)&&c(OD);return function(d){var e;if(a.h.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.m.hasOwnProperty(d)){var g=!1,h=this.h.h;if(h){var m=h.oe();if(m){0!==m.indexOf("__cvt_")&&(g=!0);}}else g=
!0;f=g}if(f){var n=a.m.hasOwnProperty(d)?a.m[d]:void 0;e=n}else throw Error(d+" is not a valid API name.");}return e}};var aE=function(){return!1},bE=function(){var a={};return function(b,c,d){}};var cE;
function dE(){var a=cE;return function(b,c,d){var e=d&&d.event;eE(c);var f=new jb;l(c,function(q,r){var t=Vc(r);void 0===t&&void 0!==r&&O(44);f.set(q,t)});a.h.h.C=df();var g={xk:qf(b),eventId:void 0!==e?e.id:void 0,priorityId:void 0!==e?e.priorityId:void 0,vf:void 0!==e?function(q){return e.Tb.vf(q)}:void 0,oe:function(){return b},log:function(){},Gk:{index:d&&d.index,type:d&&d.type,name:d&&d.name}};if(aE()){var h=bE(),m=void 0,n=void 0;g.Xa={Ch:[],de:{},kb:function(q,r,t){1===r&&(m=q);7===r&&(n=
t);h(q,r,t)},oh:Kg()};g.log=function(q,r){if(m){var t=Array.prototype.slice.call(arguments,1);h(m,4,{level:q,source:n,message:t})}}}var p=me(a,g,[b,f]);a.h.h.C=void 0;p instanceof ra&&"return"===p.h&&(p=p.m);return Wc(p)}}function eE(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){I(b)});Fa(c)&&(a.gtmOnFailure=function(){I(c)})}
function fE(){cE.h.h.N=function(a,b,c){Kh.SANDBOXED_JS_SEMAPHORE=Kh.SANDBOXED_JS_SEMAPHORE||0;Kh.SANDBOXED_JS_SEMAPHORE++;try{return a.apply(b,c)}finally{Kh.SANDBOXED_JS_SEMAPHORE--}}}function gE(a){void 0!==a&&l(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");bi[e]=bi[e]||[];bi[e].push(b)}})};var jE=encodeURI,Y=encodeURIComponent,tE=function(a,b,c){pc(a,b,c)},uE=function(a,b){if(!a)return!1;var c=Yi($i(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},vE=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&
a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Z={o:{}};Z.o.access_template_storage=["google"],function(){(function(a){Z.__access_template_storage=a;Z.__access_template_storage.s="access_template_storage";Z.__access_template_storage.isVendorTemplate=!0;Z.__access_template_storage.priorityOverride=0;Z.__access_template_storage.isInfrastructure=!1})(function(){return{assert:function(){},X:function(){return{}}}})}();

Z.o.c=["google"],function(){(function(a){Z.__c=a;Z.__c.s="c";Z.__c.isVendorTemplate=!0;Z.__c.priorityOverride=0;Z.__c.isInfrastructure=!1})(function(a){Cw(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.o.e=["google"],function(){(function(a){Z.__e=a;Z.__e.s="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!1})(function(a){return String(a.vtp_gtmCachedValues.event)})}();
Z.o.v=["google"],function(){(function(a){Z.__v=a;Z.__v.s="v";Z.__v.isVendorTemplate=!0;Z.__v.priorityOverride=0;Z.__v.isInfrastructure=!1})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=uw(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Cw(d,"v",a.vtp_gtmEventId);return d})}();

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
!0;Z.__gct.priorityOverride=0;Z.__gct.isInfrastructure=!1})(function(d){var e={},f=d.vtp_sessionDuration;0<f&&(e[P.g.Sc]=f);e[P.g.Bd]=d.vtp_eventSettings;e[P.g.Qe]=d.vtp_dynamicEventSettings;e[P.g.eb]=1===d.vtp_googleSignals;e[P.g.mg]=d.vtp_foreignTld;e[P.g.kg]=1===d.vtp_restrictDomain;e[P.g.Ye]=d.vtp_internalTrafficResults;var g=P.g.ya,h=d.vtp_linker;h&&h[P.g.V]&&(h[P.g.V]=a(h[P.g.V]));e[g]=h;var m=P.g.Kd,n=d.vtp_referralExclusionDefinition;n&&n.include_conditions&&(n.include_conditions=a(n.include_conditions));
e[m]=n;var p=d.vtp_trackingId,q=vu(pu,p).h,r=q.referral_exclusion_conditions;r&&(r.length&&"object"===typeof r[0]&&(r=c(r)),e[P.g.Kd]={include_conditions:a(r)});var t=q.cross_domain_conditions;if(t){t.length&&"object"===typeof t[0]&&(t=c(t));var u={};e[P.g.ya]=(u[P.g.V]=a(t),u[P.g.vb]=!0,u[P.g.jc]=!0,u[P.g.Mb]="query",u)}yu(p,e);tB(p,d.vtp_gtmEventId);I(d.vtp_gtmOnSuccess)})}();

Z.o.get=["google"],function(){(function(a){Z.__get=a;Z.__get.s="get";Z.__get.isVendorTemplate=!0;Z.__get.priorityOverride=0;Z.__get.isInfrastructure=!1})(function(a){var b=a.vtp_settings,c=b.eventParameters||{},d=String(a.vtp_eventName),e={};e.eventId=a.vtp_gtmEventId;e.priorityId=a.vtp_gtmPriorityId;a.vtp_deferrable&&(e.deferrable=!0);var f=kt(String(b.streamId),d,c);nt(f,e.eventId,e);a.vtp_gtmOnSuccess()})}();



Z.o.access_dom_element_property=["google"],function(){function a(b,c,d,e){var f={property:e,read:!1,write:!1};switch(d){case "read":f.read=!0;break;case "write":f.write=!0;break;default:throw Error("Invalid "+b+" operation "+d);}return f}(function(b){Z.__access_dom_element_property=b;Z.__access_dom_element_property.s="access_dom_element_property";Z.__access_dom_element_property.isVendorTemplate=!0;Z.__access_dom_element_property.priorityOverride=0;Z.__access_dom_element_property.isInfrastructure=
!1})(function(b){for(var c=b.vtp_properties||[],d=b.vtp_createPermissionError,e=[],f=[],g=0;g<c.length;g++){var h=c[g],m=h.property;h.read&&e.push(m);h.write&&f.push(m)}return{assert:function(n,p,q,r){if(!k(r))throw d(n,{},"Property must be a string.");if("read"===q){if(-1<e.indexOf(r))return}else if("write"===q){if(-1<f.indexOf(r))return}else throw d(n,{},"Operation must be either 'read' or 'write', was "+q);throw d(n,{},"Prohibited "+q+" on "+p.tagName+" property "+r+".");},X:a}})}();


var EF={};EF.dataLayer=ti;EF.callback=function(a){ai.hasOwnProperty(a)&&Fa(ai[a])&&ai[a]();delete ai[a]};EF.bootstrap=0;EF._spx=!1;
function FF(){Kh[K.D]=Kh[K.D]||EF;K.Gb&&(Kh["ctid_"+K.Gb]=EF);jl();ml()||l(nl(),function(a,b){ls(a,b.transportUrl,b.context);O(92)});Wa(bi,Z.o);Ue=hf}
(function(a){function b(){m=H.documentElement.getAttribute("data-tag-assistant-present");Dv(m)&&(h=g.Zj)}if(!z["__TAGGY_INSTALLED"]){var c=!1;if(H.referrer){var d=$i(H.referrer);c="cct.google"===Xi(d,"host")}if(!c){var e=Kk("googTaggyReferrer");c=e.length&&e[0].length}c&&(z["__TAGGY_INSTALLED"]=!0,mc("https://cct.google/taggy/agent.js"))}if(Wh)a();else{var f=function(u){var v="GTM",w="GTM";Qh?(v="OGT",w="GTAG"):Wh&&(w=v="OPT");var x=z["google.tagmanager.debugui2.queue"];x||(x=[],
z["google.tagmanager.debugui2.queue"]=x,mc("https://"+Jh.Ne+"/debug/bootstrap?id="+K.D+"&src="+w+"&cond="+u+"&gtm="+pl()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:gc,containerProduct:v,debug:!1,id:K.D,destinations:hl()}};y.data.resume=function(){a()};Jh.Dj&&(y.data.initialPublish=!0);x.push(y)},g={im:1,bk:2,pk:3,Fj:4,Zj:5},h=void 0,m=void 0,n=Yi(z.location,"query",!1,void 0,"gtm_debug");Dv(n)&&(h=g.bk);if(!h&&H.referrer){var p=$i(H.referrer);"tagassistant.google.com"===Xi(p,"host")&&(h=g.pk)}if(!h){var q=
Kk("__TAG_ASSISTANT");q.length&&q[0].length&&(h=g.Fj)}h||b();if(!h&&Ev(m)){var r=function(){if(t)return!0;t=!0;b();h&&gc?f(h):a()},t=!1;qc(H,"TADebugSignal",function(){r()},!1);z.setTimeout(function(){r()},200)}else h&&gc?f(h):a()}})(function(){if(U(70)){var a=fr(ar.J.Qf,K.D);gr(a)}Fj().m();qm();if(K.Gb?Kh["ctid_"+K.Gb]:Kh[K.D]){var b=Kh.zones;b&&b.unregisterChild(gl());}else{
(U(11)||U(13)||U(55)||U(48))&&pn();for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Ke.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Ne.push(f[g]);for(var h=c.predicates||[],m=0;m<h.length;m++)Me.push(h[m]);for(var n=c.rules||[],p=0;p<n.length;p++){for(var q=n[p],r={},t=0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Le.push(r)}Pe=Z;Qe=ax;pf=new of;var u=data.sandboxed_scripts,v=data.security_groups,w=data.infra,x=data.runtime||
[],y=data.runtime_lines;cE=new ke;fE();Je=dE();var A=cE,B=$D();mb(A.h,"require",B);for(var D=0;D<x.length;D++){var E=x[D];if(!Ha(E)||3>E.length){if(0===E.length)continue;break}y&&y[D]&&y[D].length&&af(E,y[D]);try{cE.execute(E)}catch(Fc){}}if(void 0!==u)for(var J=["sandboxedScripts"],G=0;G<u.length;G++){var N=u[G].replace(/^_*/,"");bi[N]=J}gE(v);if(void 0!==w)for(var Q=0;Q<w.length;Q++)li[w[Q]]=!0;FF();if(U(102)){for(var ea=yi["7"],na=ea?ea.split("|"):[],X={},R=0;R<na.length;R++)X[na[R]]=!0;for(var ia=
0;ia<lk.length;ia++){var ja=lk[ia],T=X[ja]?"granted":"denied";Mj().implicit(ja,T)}}Cv();As=!1;Bs=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Ds();else{qc(H,"DOMContentLoaded",Ds);qc(H,"readystatechange",Ds);if(H.createEventObject&&H.documentElement.doScroll){var Ea=!0;try{Ea=!z.frameElement}catch(Fc){}Ea&&Es()}qc(z,"load",Ds)}Ru=!1;"complete"===H.readyState?Tu():qc(z,"load",Tu);Am&&z.setInterval(Em,864E5);
vb("HEALTH",1);$h=Ta();EF.bootstrap=$h;if(U(70)){var bb=fr(ar.J.Lh,K.D);if(gr(bb)){var Ec=fr(ar.J.Qf,K.D);hr(bb,Ec)}}}});

})()


};
window.moduloBuild.nameToHash.configuration1 = "x1qol96v";

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

window.moduloBuild.modules["x1nk6q0k"] = function library1_ContactForm_script (modulo) {
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
      style: 'check',
    },
    {
      label: 'Include message',
      name: 'has_message',
      style: 'check',
    },
    {
      label: 'Yes, I want to donate',
      name: 'donate',
      style: 'check',
    },
];

const increments = [ 2, 9, 27, 50, 200, 1000 ];

let hasRun = false;
function prepareCallback() {
    if (!hasRun) {
        hasRun = true;
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get('volunteer')) { // TODO rm this, urlParams are dead code
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
            } else if (props.endorseform) {
                state.title = 'Endorse Jovanka';
            }
        }

        const form = element.parentNode;
        if (form.tagName !== 'FORM') {
            console.error('could not find form, misusing component!', form);
        } else {
            form.addEventListener('submit', handleSubmit);
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
    if (state.has_message === 'on') {
        state.has_message = !!document.querySelector('[name=has_message]').checked;
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
window.moduloBuild.nameToHash.library1_ContactForm_script = "x1nk6q0k";

window.moduloBuild.modules["xxp38t8d"] = function library_Page_template_footer (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<div class=\"u--layout\">\n\n    <ul>\n        <h3>Contact</h3>\n        <li><a href=\"mailto:jovankaforsenate@gmail.com\">jovankaforsenate@gmail.com</a></li>\n        "); // "<div class=\"u--layout\"><ul><h3>Contact</h3><li><a href=\"mailto:jovankaforsenate@gmail.com\">jovankaforsenate@gmail.com</a></li>"
  /* // "comment"
  OUT.push("\n        <li><tt>1234 Street Address</tt></li>\n        <li><tt>City, CA 00000</tt></li>\n        "); // "<li><tt>1234 Street Address</tt></li><li><tt>City, CA 00000</tt></li>"
  */ // "endcomment"
  OUT.push("\n    </ul>\n\n    <ul>\n        <h3>Links</h3>\n        <li> <a href=\"/\">Home</a> </li>\n        "); // "</ul><ul><h3>Links</h3><li><a href=\"/\">Home</a></li>"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  OUT.push("\"> "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <ul>\n        <h3>&nbsp;</h3>\n        <li> <a href=\"/contact/endorse.html\">Endorse</a> </li>\n        "); // "</ul><ul><h3>&nbsp;</h3><li><a href=\"/contact/endorse.html\">Endorse</a></li>"
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
window.moduloBuild.nameToHash.library_Page_template_footer = "xxp38t8d";

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

window.moduloBuild.modules["xx2a5ave"] = function library1_ContactForm_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n<div class=\"form-container\">\n    <h2>"); // "<div class=\"form-container\"><h2>"
  OUT.push(G.escapeText(CTX.state.title)); // "state.title"
  OUT.push("</h2>\n    "); // "</h2>"
  var ARR0=CTX.script.fields;for (var KEY in ARR0) {CTX. field=ARR0[KEY]; // "for field in script.fields"
  OUT.push("\n        "); // ""
  if (("volunteer,donate,has_message").includes ? ("volunteer,donate,has_message").includes(CTX.field.name) : (CTX.field.name in "volunteer,donate,has_message")) { // "if field.name in \"volunteer,donate,has_message\""
  OUT.push("\n            <div class=\"field-pair  "); // "<div class=\"field-pair"
  if (CTX.field.style) { // "if field.style"
  OUT.push("field-pair--"); // "field-pair--"
  OUT.push(G.escapeText(CTX.field.style)); // "field.style"
  } // "endif"
  OUT.push("\">\n                "); // "\">"
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
  OUT.push("\n                <div style=\"width: 100%\">\n                    <label for=\""); // "<div style=\"width: 100%\"><label for=\""
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
  OUT.push("\n                    "); // ""
  if (CTX.field.name === "has_message") { // "if field.name == \"has_message\""
  OUT.push("\n                        <ul class=\"submenu submenu--simple "); // "<ul class=\"submenu submenu--simple"
  if (CTX.state.has_message) { // "if state.has_message"
  OUT.push("submenu--visible"); // "submenu--visible"
  } // "endif"
  OUT.push("\">\n                            <li>\n                                <textarea\n                                    [state.bind]\n                                    name=\"has_message_value\"\n                                    class=\"message-value-text\"\n                                ></textarea>\n                            </li>\n                        </ul>\n                    "); // "\"><li><textarea [state.bind] name=\"has_message_value\" class=\"message-value-text\" ></textarea></li></ul>"
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
window.moduloBuild.nameToHash.library1_ContactForm_template = "xx2a5ave";

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

library_Page_template_footer: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template_footer","DefinitionName":"library_Page_template_footer","Source":"http://127.0.0.1:6627/static/libraries/layout/Page-footer.html","Hash":"Txxp38t8d"}, 

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

library1_ContactForm_props: {"Parent":"library1_ContactForm","DefName":null,"Content":"","Type":"Props","volunteerform":"","donateform":"","endorseform":"","Name":"props","DefinitionName":"library1_ContactForm_props"}, 

library1_ContactForm_template: {"Parent":"library1_ContactForm","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library1_ContactForm_template","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.html","Hash":"Txx2a5ave"}, 

library1_ContactForm_state: {"Parent":"library1_ContactForm","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":"contact","title":"","firstname":"","lastname":"","email":"","zip":"","phone":"","has_message_value":"","donate_other_value":"","success":null,"submitted":null,"error":null,"show_final_donation_modal":false,"is_redirecting_to_actblue":false,"has_message":false,"donate":false,"donate_value":0,"volunteer":false,"Name":"state","DefinitionName":"library1_ContactForm_state"}, 

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

