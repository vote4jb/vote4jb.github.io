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

window.moduloBuild.modules["xx4mj0f9"] = function configuration1 (modulo) {

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
 ,[50,"__ogt_1p_data_v2",[46,"a"],[50,"j",[46,"m","n","o"],[22,[20,[16,[15,"n"],"type"],[15,"o"]],[46,[22,[28,[15,"m"]],[46,[3,"m",[8]]]],[22,[28,[16,[15,"m"],[15,"o"]]],[46,[43,[15,"m"],[15,"o"],[16,[15,"n"],"userData"]]]]]],[36,[15,"m"]]],[50,"k",[46,"m","n"],[52,"o",[16,[15,"a"],[15,"m"]]],[41,"p"],[22,[20,[15,"o"],"CSS_SELECTOR"],[46,[3,"p","css_selector"]],[46,[22,[20,[15,"o"],"JS_VAR"],[46,[3,"p","js_variable"]]]]],[36,[8,"selector_type",[15,"p"],"value",[16,[15,"a"],[15,"n"]]]]],[50,"l",[46,"m","n","o","p"],[22,[28,[16,[15,"a"],[15,"p"]]],[46,[36]]],[43,[15,"m"],[15,"n"],["k",[15,"o"],[15,"p"]]]],[22,[28,[17,[15,"a"],"isEnabled"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"b",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"c",["require","internal.getDestinationIds"]],[52,"d",["require","internal.getProductSettingsParameter"]],[52,"e",["require","internal.locateUserData"]],[52,"f",["require","internal.setRemoteConfigParameter"]],[52,"g",["require","internal.registerCcdCallback"]],[52,"h",[30,["c"],[7]]],[52,"i",[8,"enable_code",true]],[22,[17,[15,"a"],"isAutoEnabled"],[46,[53,[52,"m",[7]],[22,[1,[17,[15,"a"],"autoCollectExclusionSelectors"],[17,[17,[15,"a"],"autoCollectExclusionSelectors"],"length"]],[46,[53,[41,"o"],[3,"o",0],[63,[7,"o"],[23,[15,"o"],[17,[17,[15,"a"],"autoCollectExclusionSelectors"],"length"]],[33,[15,"o"],[3,"o",[0,[15,"o"],1]]],[46,[53,[52,"p",[17,[16,[17,[15,"a"],"autoCollectExclusionSelectors"],[15,"o"]],"exclusionSelector"]],[22,[15,"p"],[46,[2,[15,"m"],"push",[7,[15,"p"]]]]]]]]]]],[52,"n",[39,[17,[15,"a"],"isAutoCollectPiiEnabled"],[17,[15,"a"],"autoEmailEnabled"],true]],[43,[15,"i"],"auto_detect",[8,"email",[15,"n"],"phone",[17,[15,"a"],"autoPhoneEnabled"],"address",[17,[15,"a"],"autoAddressEnabled"],"exclude_element_selectors",[15,"m"]]]]]],[22,[17,[15,"a"],"isManualEnabled"],[46,[53,[52,"m",[8]],[22,[17,[15,"a"],"manualEmailEnabled"],[46,["l",[15,"m"],"email","emailType","emailValue"]]],[22,[17,[15,"a"],"manualPhoneEnabled"],[46,["l",[15,"m"],"phone","phoneType","phoneValue"]]],[22,[17,[15,"a"],"manualAddressEnabled"],[46,[53,[52,"n",[8]],["l",[15,"n"],"first_name","firstNameType","firstNameValue"],["l",[15,"n"],"last_name","lastNameType","lastNameValue"],["l",[15,"n"],"street","streetType","streetValue"],["l",[15,"n"],"city","cityType","cityValue"],["l",[15,"n"],"region","regionType","regionValue"],["l",[15,"n"],"country","countryType","countryValue"],["l",[15,"n"],"postal_code","postalCodeType","postalCodeValue"],[43,[15,"m"],"name_and_address",[7,[15,"n"]]]]]],[43,[15,"i"],"selectors",[15,"m"]]]]],[65,"m",[15,"h"],[46,[53,[22,[1,[1,[28,[16,[15,"b"],"enableCcdUserData"]],[28,["d",[15,"m"],"ads_customer_data_terms"]]],[28,["d",[15,"m"],"ga_customer_data_terms"]]],[46,[6]]],[41,"n"],[3,"n",[15,"i"]],[22,[1,[20,[2,[15,"m"],"indexOf",[7,"G-"]],0],[28,[16,[15,"b"],"enableEuidAutoMode"]]],[46,[53,[52,"q",[8,"enable_code",true,"selectors",[16,[15,"i"],"selectors"]]],[3,"n",[15,"q"]]]]],["f",[15,"m"],"user_data_settings",[15,"n"]],[22,[28,[16,[15,"b"],"enableCcdUserData"]],[46,[6]]],[52,"o",[16,[15,"n"],"auto_detect"]],[22,[28,[15,"o"]],[46,[6]]],[52,"p",[51,"",[7,"q"],[52,"r",[2,[15,"q"],"getMetadata",[7,"user_data_from_automatic"]]],[22,[15,"r"],[46,[36,[15,"r"]]]],[52,"s",["e",[8,"excludeElementSelectors",[16,[15,"o"],"exclude_element_selectors"],"fieldFilters",[8,"email",[16,[15,"o"],"email"],"phone",[16,[15,"o"],"phone"],"address",[16,[15,"o"],"address"]]]]],[52,"t",[1,[15,"s"],[16,[15,"s"],"elements"]]],[52,"u",[8]],[22,[1,[15,"t"],[18,[17,[15,"t"],"length"],0]],[46,[53,[41,"v"],[53,[41,"w"],[3,"w",0],[63,[7,"w"],[23,[15,"w"],[17,[15,"t"],"length"]],[33,[15,"w"],[3,"w",[0,[15,"w"],1]]],[46,[53,[52,"x",[16,[15,"t"],[15,"w"]]],["j",[15,"u"],[15,"x"],"email"],[22,[16,[15,"b"],"enableAutoPiiOnPhoneAndAddress"],[46,["j",[15,"u"],[15,"x"],"phone_number"],[3,"v",["j",[15,"v"],[15,"x"],"first_name"]],[3,"v",["j",[15,"v"],[15,"x"],"last_name"]],[3,"v",["j",[15,"v"],[15,"x"],"country"]],[3,"v",["j",[15,"v"],[15,"x"],"postal_code"]]]]]]]],[22,[1,[15,"v"],[28,[16,[15,"u"],"address"]]],[46,[43,[15,"u"],"address",[15,"v"]]]]]]],[2,[15,"q"],"setMetadata",[7,"user_data_from_automatic",[15,"u"]]],[36,[15,"u"]]]],["g",[15,"m"],[51,"",[7,"q"],[2,[15,"q"],"setMetadata",[7,"user_data_from_automatic_getter",[15,"p"]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
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
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){return a.raw=a},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},na={};try{na.__proto__=la;ka=na.a;break a}catch(a){}ka=!1}ha=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var oa=ha,pa=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Rm=b.prototype},qa=this||self,ra=function(a){return a};var sa=function(a,b){this.h=a;this.m=b};var ta=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ua=function(){this.B={};this.C=!1;this.M={}},va=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ua.prototype.get=function(a){return this.B["dust."+a]};ua.prototype.set=function(a,b){this.C||(a="dust."+a,this.M.hasOwnProperty(a)||(this.B[a]=b))};
ua.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.C||a.M.hasOwnProperty(b)||delete a.B[b]};ua.prototype.xc=function(){this.C=!0};ua.prototype.Of=function(){return this.C};var xa=function(a){this.m=new ua;this.h=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ta(b)?this.h[Number(b)]=a[Number(b)]:this.m.set(b,a[b]))};aa=xa.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.h.length;c++){var d=this.h[c];null===d||void 0===d?b.push(""):d instanceof xa?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!ta(b))throw Error("RangeError: Length property must be a valid integer.");this.h.length=Number(b)}else ta(a)?this.h[Number(a)]=b:this.m.set(a,b)};aa.get=function(a){return"length"===a?this.length():ta(a)?this.h[Number(a)]:this.m.get(a)};aa.length=function(){return this.h.length};aa.Vb=function(){for(var a=va(this.m,1),b=0;b<this.h.length;b++)a.push(b+"");return new xa(a)};var ya=function(a,b){ta(b)?delete a.h[Number(b)]:wa(a.m,b)};aa=xa.prototype;
aa.pop=function(){return this.h.pop()};aa.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.h.shift()};aa.splice=function(a,b,c){return new xa(this.h.splice.apply(this.h,arguments))};aa.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};aa.has=function(a){return ta(a)&&this.h.hasOwnProperty(a)||this.m.has(a)};aa.xc=function(){this.B=!0;Object.freeze(this.h);this.m.xc()};aa.Of=function(){return this.B};var za=function(){this.quota={}};za.prototype.reset=function(){this.quota={}};var Aa=function(a,b){this.R=a;this.M=function(c,d,e){return c.apply(d,e)};this.B=b;this.m=new ua;this.h=this.C=void 0};Aa.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.m.Of())if(d){var e=a.m;e.set(b,c);e.M["dust."+b]=!0}else a.m.set(b,c)};Aa.prototype.set=function(a,b){this.m.Of()||(!this.m.has(a)&&this.B&&this.B.has(a)?this.B.set(a,b):this.m.set(a,b))};Aa.prototype.get=function(a){return this.m.has(a)?this.m.get(a):this.B?this.B.get(a):void 0};
Aa.prototype.has=function(a){return!!this.m.has(a)||!(!this.B||!this.B.has(a))};var Da=function(a){var b=new Aa(a.R,a);a.C&&(b.C=a.C);b.M=a.M;b.h=a.h;return b};var Ea=function(){},Fa=function(a){return"function"===typeof a},k=function(a){return"string"===typeof a},Ga=function(a){return"number"===typeof a&&!isNaN(a)},Ia=Array.isArray,Ka=function(a,b){if(a&&Ia(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},La=function(a,b){if(!Ga(a)||!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Na=function(a,b){for(var c=new Ma,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},l=function(a,
b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Oa=function(a){return!!a&&("[object Arguments]"===Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"===String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ia(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return new Date(Date.now())},
Ua=function(){return Ta().getTime()},Ma=function(){this.prefix="gtm.";this.values={}};Ma.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ma.prototype.get=function(a){return this.values[this.prefix+a]};
var Va=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Ya=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},$a=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ab=function(a,b){var c=z;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
b.indexOf(d))return}return d},cb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},db=/^\w{1,9}$/,eb=function(a,b){a=a||{};b=b||",";var c=[];l(a,function(d,e){db.test(d)&&e&&c.push(d)});return c.join(b)},fb=function(a,b){function c(){++d===b&&(e(),e=null,c.done=!0)}var d=0,e=a;c.done=!1;return c};var gb=function(a,b){ua.call(this);this.R=a;this.ub=b};pa(gb,ua);gb.prototype.toString=function(){return this.R};gb.prototype.Vb=function(){return new xa(va(this,1))};gb.prototype.h=function(a,b){return this.ub.apply(new hb(this,a),Array.prototype.slice.call(arguments,1))};gb.prototype.m=function(a,b){try{return this.h.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var jb=function(a,b){for(var c,d=0;d<b.length&&!(c=ib(a,b[d]),c instanceof sa);d++);return c},ib=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof gb))throw Error("Attempting to execute non-function "+b[0]+".");return c.h.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.C;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},hb=function(a,b){this.m=a;this.h=b},C=function(a,b){return Ia(b)?ib(a.h,b):b},F=function(a){return a.m.R};var kb=function(){ua.call(this)};pa(kb,ua);kb.prototype.Vb=function(){return new xa(va(this,1))};var lb={map:function(a){for(var b=new kb,c=0;c<arguments.length-1;c+=2){var d=C(this,arguments[c])+"",e=C(this,arguments[c+1]);b.set(d,e)}return b},list:function(a){for(var b=new xa,c=0;c<arguments.length;c++){var d=C(this,arguments[c]);b.push(d)}return b},fn:function(a,b,c){var d=this.h,e=C(this,b);if(!(e instanceof xa))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);return new gb(a,function(){return function(g){var h=Da(d);void 0===
h.h&&(h.h=this.h.h);for(var m=Array.prototype.slice.call(arguments,0),n=0;n<m.length;n++)if(m[n]=C(this,m[n]),m[n]instanceof sa)return m[n];for(var p=e.get("length"),q=0;q<p;q++)q<m.length?h.add(e.get(q),m[q]):h.add(e.get(q),void 0);h.add("arguments",new xa(m));var r=jb(h,f);if(r instanceof sa)return"return"===r.h?r.m:r}}())},control:function(a,b){return new sa(a,C(this,b))},undefined:function(){}};var mb=function(){this.B=new za;this.h=new Aa(this.B)},nb=function(a,b,c){var d=new gb(b,c);d.xc();a.h.set(b,d)},ob=function(a,b,c){lb.hasOwnProperty(b)&&nb(a,c||b,lb[b])};mb.prototype.execute=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.m(c)};mb.prototype.m=function(a){for(var b,c=0;c<arguments.length;c++)b=ib(this.h,arguments[c]);return b};mb.prototype.C=function(a,b){var c=Da(this.h);c.h=a;for(var d,e=1;e<arguments.length;e++)d=ib(c,arguments[e]);return d};function pb(){for(var a=qb,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function rb(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var qb,sb;function tb(a){qb=qb||rb();sb=sb||pb();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,m=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(qb[m],qb[n],qb[p],qb[q])}return b.join("")}
function ub(a){function b(m){for(;d<a.length;){var n=a.charAt(d++),p=sb[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return m}qb=qb||rb();sb=sb||pb();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var vb={},wb=function(a,b){vb[a]=vb[a]||[];vb[a][b]=!0},xb=function(){delete vb.GA4_EVENT},yb=function(a){var b=vb[a];if(!b||0===b.length)return"";for(var c=[],d=0,e=0;e<b.length;e++)0===e%8&&0<e&&(c.push(String.fromCharCode(d)),d=0),b[e]&&(d|=1<<e%8);0<d&&c.push(String.fromCharCode(d));return tb(c.join("")).replace(/\.+$/,"")};var zb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Ab,Bb=function(){if(void 0===Ab){var a=null,b=qa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ra,createScript:ra,createScriptURL:ra})}catch(c){qa.console&&qa.console.error(c.message)}Ab=a}else Ab=a}return Ab};var Cb=function(a){this.h=a};Cb.prototype.toString=function(){return this.h+""};var Db=function(a){return a instanceof Cb&&a.constructor===Cb?a.h:"type_error:TrustedResourceUrl"},Eb={},Fb=function(a){var b=a,c=Bb(),d=c?c.createScriptURL(b):b;return new Cb(d,Eb)};var Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hb,Ib;a:{for(var Jb=["CLOSURE_FLAGS"],Kb=qa,Lb=0;Lb<Jb.length;Lb++)if(Kb=Kb[Jb[Lb]],null==Kb){Ib=null;break a}Ib=Kb}var Mb=Ib&&Ib[610401301];Hb=null!=Mb?Mb:!1;function Nb(){var a=qa.navigator;if(a){var b=a.userAgent;if(b)return b}return""}var Ob,Pb=qa.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Hb?Ob?Ob.brands.some(function(b){var c=b.brand;return c&&-1!=c.indexOf(a)}):!1:!1}function Rb(a){return-1!=Nb().indexOf(a)};function Sb(){return Hb?!!Ob&&0<Ob.brands.length:!1}function Tb(){return Sb()?!1:Rb("Opera")}function Ub(){return Rb("Firefox")||Rb("FxiOS")}function Vb(){return Sb()?Qb("Chromium"):(Rb("Chrome")||Rb("CriOS"))&&!(Sb()?0:Rb("Edge"))||Rb("Silk")};var Wb={},Xb=function(a){this.h=a};Xb.prototype.toString=function(){return this.h.toString()};var Yb=function(a){return a instanceof Xb&&a.constructor===Xb?a.h:"type_error:SafeHtml"};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Zb={};var $b=function(){},ac=function(a){this.h=a};pa(ac,$b);ac.prototype.toString=function(){return this.h};function bc(a,b){var c=[new ac(cc[0].toLowerCase(),Zb)];if(0===c.length)throw Error("");var d=c.map(function(f){var g;if(f instanceof ac)g=f.h;else throw Error("");return g}),e=b.toLowerCase();if(d.every(function(f){return 0!==e.indexOf(f)}))throw Error('Attribute "'+b+'" does not match any of the allowed prefixes.');a.setAttribute(b,"true")}function dc(a){var b=a.tagName;if("SCRIPT"===b||"STYLE"===b)throw Error("");};(function(){return""}).toString().indexOf("`");function ec(a){var b=a=fc(a),c=Bb(),d=c?c.createHTML(b):b;return new Xb(d,Wb)}function fc(a){return null===a?"null":void 0===a?"undefined":a};var z=window,G=document,gc=navigator,hc=G.currentScript&&G.currentScript.src,ic=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},jc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},kc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},lc={onload:1,src:1,width:1,height:1,style:1};function mc(a,b,c){b&&l(b,function(d,e){d=d.toLowerCase();c.hasOwnProperty(d)||a.setAttribute(d,e)})}
var nc=function(a,b,c,d,e){var f=G.createElement("script");mc(f,d,kc);f.type="text/javascript";f.async=!0;var g;g=Fb(fc(a));f.src=Db(g);var h,m,n,p=null==(n=(m=(f.ownerDocument&&f.ownerDocument.defaultView||window).document).querySelector)?void 0:n.call(m,"script[nonce]");(h=p?p.nonce||p.getAttribute("nonce")||"":"")&&f.setAttribute("nonce",h);jc(f,b);c&&(f.onerror=c);if(e)e.appendChild(f);else{var q=G.getElementsByTagName("script")[0]||G.body||G.head;q.parentNode.insertBefore(f,q)}return f},oc=function(){if(hc){var a=
hc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},pc=function(a,b,c,d,e){var f;f=void 0===f?!0:f;var g=e,h=!1;g||(g=G.createElement("iframe"),h=!0);mc(g,c,lc);d&&l(d,function(n,p){g.dataset[n]=p});f&&(g.height="0",g.width="0",g.style.display="none",g.style.visibility="hidden");if(h){var m=G.body&&G.body.lastChild||G.body||G.head;m.parentNode.insertBefore(g,m)}jc(g,b);void 0!==a&&(g.src=a);return g},qc=function(a,b,c,d){var e=new Image(1,1);mc(e,
d,{});e.onload=function(){e.onload=null;b&&b()};e.onerror=function(){e.onerror=null;c&&c()};e.src=a},rc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},sc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){z.setTimeout(a,0)},tc=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},uc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=
b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},vc=function(a){var b=G.createElement("div"),c=b,d=ec("A<div>"+a+"</div>");1===c.nodeType&&dc(c);c.innerHTML=Yb(d);b=b.lastChild;for(var e=[];b.firstChild;)e.push(b.removeChild(b.firstChild));return e},wc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},xc=function(a){var b;
try{b=gc.sendBeacon&&gc.sendBeacon(a)}catch(c){wb("TAGGING",15)}b||qc(a)},yc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c},zc=function(a,b){try{z.fetch(a,b)}catch(c){}},Ac=function(){var a=z.performance;if(a&&Fa(a.now))return a.now()},Bc=function(){return z.performance||void 0};var Cc=function(a,b){return C(this,a)&&C(this,b)},Fc=function(a,b){return C(this,a)===C(this,b)},Gc=function(a,b){return C(this,a)||C(this,b)},Hc=function(a,b){a=C(this,a);b=C(this,b);return-1<String(a).indexOf(String(b))},Ic=function(a,b){a=String(C(this,a));b=String(C(this,b));return a.substring(0,b.length)===b},Jc=function(a,b){a=C(this,a);b=C(this,b);switch(a){case "pageLocation":var c=z.location.href;b instanceof kb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var Lc=function(){this.h=new mb;Kc(this)};Lc.prototype.execute=function(a){return this.h.m(a)};var Kc=function(a){ob(a.h,"map");var b=function(c,d){nb(a.h,c,d)};b("and",Cc);b("contains",Hc);b("equals",Fc);b("or",Gc);b("startsWith",Ic);b("variable",Jc)};var Mc=function(){this.map=new Map};Mc.prototype.set=function(a,b){this.map.set(a,b)};Mc.prototype.get=function(a){return this.map.get(a)};var Nc=function(){this.keys=[];this.values=[]};Nc.prototype.set=function(a,b){this.keys.push(a);this.values.push(b)};Nc.prototype.get=function(a){var b=this.keys.indexOf(a);if(-1<b)return this.values[b]};var Oc=function(a){if(a instanceof Oc)return a;this.Wa=a};Oc.prototype.toString=function(){return String(this.Wa)};var Qc=function(a){ua.call(this);this.h=a;this.set("then",Pc(this));this.set("catch",Pc(this,!0));this.set("finally",Pc(this,!1,!0))};pa(Qc,kb);var Pc=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;return new gb("",function(d,e){b&&(e=d,d=void 0);c&&(e=d);d instanceof gb||(d=void 0);e instanceof gb||(e=void 0);var f=Da(this.h),g=function(m){return function(n){return c?(m.h(f),a.h):m.h(f,n)}},h=a.h.then(d&&g(d),e&&g(e));return new Qc(h)})};/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Rc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Sc=function(a){if(null==a)return String(a);var b=Rc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Tc=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Uc=function(a){if(!a||"object"!=Sc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Tc(a,"constructor")&&!Tc(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Tc(a,b)},Vc=function(a,b){var c=b||("array"==Sc(a)?[]:{}),d;for(d in a)if(Tc(a,d)){var e=a[d];"array"==Sc(e)?("array"!=Sc(c[d])&&(c[d]=[]),c[d]=Vc(e,c[d])):Uc(e)?(Uc(c[d])||(c[d]={}),c[d]=Vc(e,c[d])):c[d]=e}return c};var Xc=function(a,b,c){var d=Map?new Mc:new Nc,e=function(g,h){for(var m=va(g,1),n=0;n<m.length;n++)h[m[n]]=f(g.get(m[n]))},f=function(g){var h=d.get(g);if(h)return h;if(g instanceof xa){var m=[];d.set(g,m);for(var n=g.Vb(),p=0;p<n.length();p++)m[n.get(p)]=f(g.get(n.get(p)));return m}if(g instanceof Qc)return g.h;if(g instanceof kb){var q={};d.set(g,q);e(g,q);return q}if(g instanceof gb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Wc(u[v],b,c);var w=
new Aa(b?b.R:new za);b&&(w.h=b.h);return f(g.h.apply(g,[w].concat(u)))};d.set(g,r);e(g,r);return r}var t=!1;switch(c){case 1:t=!0;break;case 2:t=!1;break;case 3:t=!1;break;default:}if(g instanceof Oc&&t)return g.Wa;switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},Wc=function(a,b,c){var d=Map?
new Mc:new Nc,e=function(g,h){for(var m in g)g.hasOwnProperty(m)&&h.set(m,f(g[m]))},f=function(g){var h=d.get(g);if(h)return h;if(Ia(g)||Oa(g)){var m=new xa([]);d.set(g,m);for(var n in g)g.hasOwnProperty(n)&&m.set(n,f(g[n]));return m}if(Uc(g)){var p=new kb;d.set(g,p);e(g,p);return p}if("function"===typeof g){var q=new gb("",function(x){for(var y=Array.prototype.slice.call(arguments,0),A=0;A<y.length;A++)y[A]=Xc(C(this,y[A]),b,c);return f((0,this.h.M)(g,g,y))});d.set(g,q);e(g,q);return q}var v=typeof g;if(null===g||"string"===v||"number"===v||"boolean"===v)return g;var w=!1;switch(c){case 1:w=!0;break;case 2:w=!1;break;default:}if(void 0!==g&&w)return new Oc(g)};return f(a)};var Yc=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Zc=function(a){if(void 0===a||Ia(a)||Uc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var $c={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof xa)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new xa(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.h(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.h(a,this.get(e),e,this)&&d.push(this.get(e));return new xa(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.h(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.h(a,this.get(e),e,this));return new xa(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.h(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.h(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Yc(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ya(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new xa(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.h(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Yc(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.h(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ya(this,d);return this},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var bd={charAt:1,concat:1,indexOf:1,lastIndexOf:1,match:1,replace:1,search:1,slice:1,split:1,substring:1,toLowerCase:1,toLocaleLowerCase:1,toString:1,toUpperCase:1,toLocaleUpperCase:1,trim:1},cd=new sa("break"),dd=new sa("continue"),ed=function(a,b){return C(this,a)+C(this,b)},fd=function(a,b){return C(this,a)&&C(this,b)},gd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);if(!(c instanceof xa))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");var d="number"===typeof a;if("boolean"===typeof a||d){if("toString"===b){if(d&&c.length()){var e=Xc(c.get(0));try{return a.toString(e)}catch(r){}}return a.toString()}throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(bd.hasOwnProperty(b)){var f=2;f=1;var g=Xc(c,void 0,f);return Wc(a[b].apply(a,g),this.h)}throw Error("TypeError: "+
b+" is not a function");}if(a instanceof xa){if(a.has(b)){var h=a.get(b);if(h instanceof gb){var m=Yc(c);m.unshift(this.h);return h.h.apply(h,m)}throw Error("TypeError: "+b+" is not a function");}if(0<=$c.supportedMethods.indexOf(b)){var n=Yc(c);n.unshift(this.h);return $c[b].apply(a,n)}}if(a instanceof gb||a instanceof kb){if(a.has(b)){var p=a.get(b);if(p instanceof gb){var q=Yc(c);q.unshift(this.h);return p.h.apply(p,q)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof
gb?a.R:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Yc(c))}if(a instanceof Oc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},hd=function(a,b){a=C(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.h;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=C(this,b);c.set(a,d);return d},id=function(a){var b=Da(this.h),c=jb(b,Array.prototype.slice.apply(arguments));if(c instanceof
sa)return c},jd=function(){return cd},kd=function(a){for(var b=C(this,a),c=0;c<b.length;c++){var d=C(this,b[c]);if(d instanceof sa)return d}},ld=function(a){for(var b=this.h,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=C(this,arguments[c+1]);Ba(b,d,e,!0)}}},md=function(){return dd},nd=function(a,b,c){var d=new xa;b=C(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h.add(a,C(this,
f))},od=function(a,b){return C(this,a)/C(this,b)},pd=function(a,b){a=C(this,a);b=C(this,b);var c=a instanceof Oc,d=b instanceof Oc;return c||d?c&&d?a.Wa==b.Wa:!1:a==b},qd=function(a){for(var b,c=0;c<arguments.length;c++)b=C(this,arguments[c]);return b};function rd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=jb(f,d);if(g instanceof sa){if("break"===g.h)break;if("return"===g.h)return g}}}
function sd(a,b,c){if("string"===typeof b)return rd(a,function(){return b.length},function(f){return f},c);if(b instanceof kb||b instanceof xa||b instanceof gb){var d=b.Vb(),e=d.length();return rd(a,function(){return e},function(f){return d.get(f)},c)}}
var td=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return sd(function(e){d.set(a,e);return d},b,c)},ud=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return sd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},vd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return sd(function(e){var f=Da(d);f.add(a,e);return f},b,c)},xd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return wd(function(e){d.set(a,e);return d},b,c)},yd=
function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return wd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},zd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);var d=this.h;return wd(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function wd(a,b,c){if("string"===typeof b)return rd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof xa)return rd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var Ad=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=C(this,a);if(!(f instanceof xa))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.h;d=C(this,d);var h=Da(g);for(e(g,h);ib(h,b);){var m=jb(h,d);if(m instanceof sa){if("break"===m.h)break;if("return"===m.h)return m}var n=Da(g);e(h,n);ib(n,c);h=n}},Bd=function(a){a=C(this,a);var b=this.h,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},Cd=function(a,b){var c;a=C(this,a);b=C(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof kb||a instanceof xa||a instanceof gb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:ta(b)&&(c=a[b]);else if(a instanceof Oc)return;return c},Dd=function(a,b){return C(this,a)>C(this,
b)},Ed=function(a,b){return C(this,a)>=C(this,b)},Fd=function(a,b){a=C(this,a);b=C(this,b);a instanceof Oc&&(a=a.Wa);b instanceof Oc&&(b=b.Wa);return a===b},Gd=function(a,b){return!Fd.call(this,a,b)},Hd=function(a,b,c){var d=[];C(this,a)?d=C(this,b):c&&(d=C(this,c));var e=jb(this.h,d);if(e instanceof sa)return e},Id=function(a,b){return C(this,a)<C(this,b)},Jd=function(a,b){return C(this,a)<=C(this,b)},Kd=function(a,b){return C(this,a)%C(this,b)},Ld=function(a,b){return C(this,a)*C(this,b)},Md=function(a){return-C(this,
a)},Nd=function(a){return!C(this,a)},Od=function(a,b){return!pd.call(this,a,b)},Pd=function(){return null},Qd=function(a,b){return C(this,a)||C(this,b)},Rd=function(a,b){var c=C(this,a);C(this,b);return c},Sd=function(a){return C(this,a)},Td=function(a){return Array.prototype.slice.apply(arguments)},Ud=function(a){return new sa("return",C(this,a))},Vd=function(a,b,c){a=C(this,a);b=C(this,b);c=C(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
gb||a instanceof xa||a instanceof kb)&&a.set(b,c);return c},Wd=function(a,b){return C(this,a)-C(this,b)},Xd=function(a,b,c){a=C(this,a);var d=C(this,b),e=C(this,c);if(!Ia(d)||!Ia(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===C(this,d[h]))if(f=C(this,e[h]),f instanceof sa){var m=f.h;if("break"===m)return;if("return"===m||"continue"===m)return f}else g=!0;if(e.length===d.length+1&&(f=C(this,e[e.length-1]),f instanceof sa&&("return"===f.h||"continue"===
f.h)))return f},Yd=function(a,b,c){return C(this,a)?C(this,b):C(this,c)},Zd=function(a){a=C(this,a);return a instanceof gb?"function":typeof a},$d=function(a){for(var b=this.h,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},ae=function(a,b,c,d){var e=C(this,d);if(C(this,c)){var f=jb(this.h,e);if(f instanceof sa){if("break"===f.h)return;if("return"===f.h)return f}}for(;C(this,a);){var g=jb(this.h,e);if(g instanceof sa){if("break"===g.h)break;if("return"===g.h)return g}C(this,
b)}},be=function(a){return~Number(C(this,a))},ce=function(a,b){return Number(C(this,a))<<Number(C(this,b))},de=function(a,b){return Number(C(this,a))>>Number(C(this,b))},ee=function(a,b){return Number(C(this,a))>>>Number(C(this,b))},fe=function(a,b){return Number(C(this,a))&Number(C(this,b))},ie=function(a,b){return Number(C(this,a))^Number(C(this,b))},je=function(a,b){return Number(C(this,a))|Number(C(this,b))};var le=function(){this.h=new mb;ke(this)};le.prototype.execute=function(a){return me(this.h.m(a))};
var ne=function(a,b,c){return me(a.h.C(b,c))},ke=function(a){var b=function(d,e){ob(a.h,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){nb(a.h,String(d),e)};c(0,ed);c(1,fd);c(2,gd);c(3,hd);c(53,id);c(4,jd);c(5,kd);c(52,ld);c(6,md);c(9,kd);c(50,nd);c(10,od);c(12,pd);c(13,qd);c(47,td);c(54,ud);c(55,vd);c(63,Ad);c(64,xd);c(65,yd);c(66,zd);c(15,Bd);c(16,Cd);c(17,Cd);c(18,Dd);c(19,Ed);c(20,Fd);c(21,Gd);c(22,Hd);c(23,Id);c(24,Jd);c(25,Kd);c(26,Ld);c(27,
Md);c(28,Nd);c(29,Od);c(45,Pd);c(30,Qd);c(32,Rd);c(33,Rd);c(34,Sd);c(35,Sd);c(46,Td);c(36,Ud);c(43,Vd);c(37,Wd);c(38,Xd);c(39,Yd);c(40,Zd);c(41,$d);c(42,ae);c(58,be);c(57,ce);c(60,de);c(61,ee);c(56,fe);c(62,ie);c(59,je)};function me(a){if(a instanceof sa||a instanceof gb||a instanceof xa||a instanceof kb||a instanceof Oc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var oe=function(){var a=function(b){return{toString:function(){return b}}};return{Nj:a("consent"),Zh:a("convert_case_to"),ai:a("convert_false_to"),bi:a("convert_null_to"),di:a("convert_true_to"),ei:a("convert_undefined_to"),zm:a("debug_mode_metadata"),Ub:a("function"),Rg:a("instance_name"),uk:a("live_only"),vk:a("malware_disabled"),wk:a("metadata"),zk:a("original_activity_id"),Gm:a("original_vendor_template_id"),Fm:a("once_on_load"),yk:a("once_per_event"),Vi:a("once_per_load"),Km:a("priority_override"),
Lm:a("respected_consent_types"),Zi:a("setup_tags"),me:a("tag_id"),ej:a("teardown_tags")}}();var Ke;
var Le=[],Me=[],Ne=[],Oe=[],Pe=[],Qe={},Re,Se,Ue=function(){var a=Te;Se=Se||a},Ve,We=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Xe=function(a,b){var c=a["function"],d=b&&b.event;if(!c)throw Error("Error: No function name given for function call.");var e=Qe[c],f={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e&&d&&d.kj&&d.kj(a[g]),f[void 0!==e?g:g.substr(4)]=a[g]);e&&d&&d.jj&&(f.vtp_gtmCachedValues=d.jj);if(b){if(null==
b.name){var h;a:{var m=b.index;if(null==m)h="";else{var n;switch(b.type){case 2:n=Le[m];break;case 1:n=Oe[m];break;default:h="";break a}var p=n&&n[oe.Rg];h=p?String(p):""}}b.name=h}e&&(f.vtp_gtmEntityIndex=b.index,f.vtp_gtmEntityName=b.name)}return void 0!==e?e(f):Ke(c,f,b)},Ze=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ye(a[e],b,c));return d},Ye=function(a,b,c){if(Ia(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ye(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Le[f];if(!g||b.oh(g))return;c[f]=!0;var h=String(g[oe.Rg]);try{var m=Ze(g,b,c);m.vtp_gtmEventId=b.id;b.priorityId&&(m.vtp_gtmPriorityId=b.priorityId);d=Xe(m,{event:b,index:f,type:2,name:h});Ve&&(d=Ve.Kk(d,m))}catch(y){b.uj&&b.uj(y,Number(f),h),d=!1}c[f]=!1;return d;case "map":d={};for(var n=1;n<a.length;n+=2)d[Ye(a[n],b,c)]=Ye(a[n+1],b,c);return d;case "template":d=[];for(var p=!1,q=1;q<a.length;q++){var r=Ye(a[q],b,c);Se&&(p=p||r===Se.vf);
d.push(r)}return Se&&p?Se.Lk(d):d.join("");case "escape":d=Ye(a[1],b,c);if(Se&&Ia(a[1])&&"macro"===a[1][0]&&Se.vl(a))return Se.Rl(d);d=String(d);for(var t=2;t<a.length;t++)pe[a[t]]&&(d=pe[a[t]](d));return d;case "tag":var u=a[1];if(!Oe[u])throw Error("Unable to resolve tag reference "+u+".");return d={pj:a[2],index:u};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var w=$e(v,b,c),x=!!a[4];return x||2!==w?x!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+
a[0]+".");}}return a},$e=function(a,b,c){try{return Re(Ze(a,b,c))}catch(d){JSON.stringify(a)}return 2};var af=function(a,b,c){var d;d=Error.call(this,c);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.h=a};pa(af,Error);function bf(a,b){if(Ia(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)bf(a[c],b[c])}};var cf=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.Ml=a;this.m=b;this.h=[]};pa(cf,Error);var ef=function(){return function(a,b){a instanceof cf||(a=new cf(a,df));b&&a.h.push(b);throw a;}};function df(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var hf=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=ff(a),f=0;f<Me.length;f++){var g=Me[f],h=gf(g,e);if(h){for(var m=g.add||[],n=0;n<m.length;n++)c[m[n]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Oe.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},gf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},ff=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=$e(Ne[c],a));return b[c]}};var jf={Kk:function(a,b){b[oe.Zh]&&"string"===typeof a&&(a=1==b[oe.Zh]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(oe.bi)&&null===a&&(a=b[oe.bi]);b.hasOwnProperty(oe.ei)&&void 0===a&&(a=b[oe.ei]);b.hasOwnProperty(oe.di)&&!0===a&&(a=b[oe.di]);b.hasOwnProperty(oe.ai)&&!1===a&&(a=b[oe.ai]);return a}};var kf=function(){this.h={}};function lf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new af(c,d,g);}}function mf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.h[d],f=a.h.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));lf(e,b,d,g);lf(f,b,d,g)}}}};var pf=function(){var a=data.permissions||{},b=K.D,c=this;this.m=new kf;this.h={};var d={},e=mf(this.m,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});l(a,function(f,g){var h={};l(g,function(m,n){var p=nf(m,n);h[m]=p.assert;d[m]||(d[m]=p.X)});c.h[f]=function(m,n){var p=h[m];if(!p)throw of(m,{},"The requested permission "+m+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},rf=function(a){return qf.h[a]||
function(){}};function nf(a,b){var c=We(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=of;try{return Xe(c)}catch(d){return{assert:function(e){throw new af(e,{},"Permission "+e+" is unknown.");},X:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function of(a,b,c){return new af(a,b,c)};var sf=!1;var tf={};tf.xm=Qa('');tf.Nk=Qa('');var uf=sf,vf=tf.Nk,wf=tf.xm;var xf=function(a,b){var c=String(a);return c};
var Cf=function(a){var b={},c=0;l(a,function(e,f){if(null!=f)if(f=xf(f,100),yf.hasOwnProperty(e))b[yf[e]]=zf(f);else if(Af.hasOwnProperty(e)){var g=Af[e],h=zf(f);b.hasOwnProperty(g)||(b[g]=h)}else if("category"===e)for(var m=zf(f).split("/",5),n=0;n<m.length;n++){var p=Bf[n],q=m[n];b.hasOwnProperty(p)||(b[p]=q)}else if(27>c){var r=String.fromCharCode(10>c?48+c:65+c-10);b["k"+r]=zf(xf(e,40));b["v"+r]=zf(f);c++}});var d=[];l(b,function(e,f){d.push(""+e+f)});return d.join("~")},zf=function(a){return(""+
a).replace(/~/g,function(){return"~~"})},yf={item_id:"id",item_name:"nm",item_brand:"br",item_category:"ca",item_category2:"c2",item_category3:"c3",item_category4:"c4",item_category5:"c5",item_variant:"va",price:"pr",quantity:"qt",coupon:"cp",item_list_name:"ln",index:"lp",item_list_id:"li",discount:"ds",affiliation:"af",promotion_id:"pi",promotion_name:"pn",creative_name:"cn",creative_slot:"cs",location_id:"lo"},Af={id:"id",name:"nm",brand:"br",variant:"va",list_name:"ln",list_position:"lp",list:"ln",
position:"lp",creative:"cn"},Bf=["ca","c2","c3","c4","c5"];var Df=function(a){var b=[];l(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(String(d)))});return b.join("&")},Ef=function(a,b,c,d){this.Ua=a.Ua;this.Gc=a.Gc;this.ih=a.ih;this.m=b;this.C=c;this.B=Df(a.Ua);this.h=Df(a.ih);this.M=this.h.length;if(d&&16384<this.M)throw Error("EVENT_TOO_LARGE");};var Ff=function(){this.events=[];this.h=this.Ua="";this.B=0;this.m=!1};Ff.prototype.add=function(a){return this.C(a)?(this.events.push(a),this.Ua=a.B,this.h=a.m,this.B+=a.M,this.m=a.C,!0):!1};Ff.prototype.C=function(a){var b=20>this.events.length&&16384>a.M+this.B,c=this.Ua===a.B&&this.h===a.m&&this.m===a.C;return 0==this.events.length||b&&c};
var Gf=function(a,b){l(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))})},Hf=function(a,b){var c=[];a.B&&c.push(a.B);b&&c.push("_s="+b);Gf(a.Gc,c);var d=!1;a.h&&(c.push(a.h),d=!0);var e=c.join("&"),f="",g=e.length+a.m.length+1;d&&2048<g&&(f=c.pop(),e=c.join("&"));return{Fh:e,body:f}},If=function(a,b){var c=a.events;if(1==c.length)return Hf(c[0],b);var d=[];a.Ua&&d.push(a.Ua);for(var e={},f=0;f<c.length;f++)l(c[f].Gc,function(t,u){null!=u&&(e[t]=e[t]||{},e[t][String(u)]=
e[t][String(u)]+1||1)});var g={};l(e,function(t,u){var v,w=-1,x=0;l(u,function(y,A){x+=A;var B=(y.length+t.length+2)*(A-1);B>w&&(v=y,w=B)});x==c.length&&(g[t]=v)});Gf(g,d);b&&d.push("_s="+b);for(var h=d.join("&"),m=[],n={},p=0;p<c.length;n={Qe:n.Qe},p++){var q=[];n.Qe={};l(c[p].Gc,function(t){return function(u,v){g[u]!=""+v&&(t.Qe[u]=v)}}(n));c[p].h&&q.push(c[p].h);Gf(n.Qe,q);m.push(q.join("&"))}var r=m.join("\r\n");return{Fh:h,body:r}};var Mf=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];function Nf(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c}var Of=new Ma;function Pf(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Of.get(e);f||(f=new RegExp(b,d),Of.set(e,f));return f.test(a)}catch(g){return!1}}function Qf(a,b){return 0<=String(a).indexOf(String(b))}function Rf(a,b){return String(a)===String(b)}
function Sf(a,b){return Number(a)>=Number(b)}function Tf(a,b){return Number(a)<=Number(b)}function Uf(a,b){return Number(a)>Number(b)}function Vf(a,b){return Number(a)<Number(b)}function Wf(a,b){return 0===String(a).indexOf(String(b))};var cg=/^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;function dg(a,b){return"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a<<2|b]};var eg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,fg={Fn:"function",DustMap:"Object",List:"Array"},M=function(a,b,c){for(var d=0;d<b.length;d++){var e=eg.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],m=c[d];if(null==m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof m;m instanceof gb?n="Fn":m instanceof xa?n="List":m instanceof kb?n="DustMap":m instanceof Oc&&(n="OpaqueValue");
if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+(fg[n]||n)+", which does not match required type "+(fg[h]||h)+".");}}};function gg(a){return""+a}
function hg(a,b){var c=[];return c};var ig=function(a,b){var c=new gb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=C(this,d[e]);return b.apply(this,d)});c.xc();return c},jg=function(a,b){var c=new kb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,ig(a+"_"+d,e)):Uc(e)?c.set(d,jg(a+"_"+d,e)):(Ga(e)||k(e)||"boolean"===typeof e)&&c.set(d,e)}c.xc();
return c};var kg=function(a,b){M(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new kb;return d=jg("AssertApiSubject",c)};var lg=function(a,b){M(F(this),["actual:?*","message:?string"],arguments);if(a instanceof Qc)throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");var c={},d=new kb;return d=jg("AssertThatSubject",c)};function mg(a){return function(){for(var b=[],c=this.h,d=0;d<arguments.length;++d)b.push(Xc(arguments[d],c));return Wc(a.apply(null,b))}}var og=function(){for(var a=Math,b=ng,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=mg(a[e].bind(a)))}return c};function pg(a,b){var c=null;M(F(this),["pattern:!string","flags:?string"],arguments);try{var d=(b||"").split("").filter(function(e){return"ig".includes(e)}).join("");c=new Oc(new RegExp(a,d))}catch(e){}return c}pg.K="internal.createRegExp";var sg=function(a){var b;return b};var tg=function(a){var b;return b};var ug=function(a){return encodeURI(a)};var vg=function(a){return encodeURIComponent(a)};function wg(a,b){var c=!1;M(F(this),["booleanExpression:!string","context:?DustMap"],arguments);var d=JSON.parse(a);if(!d)throw Error("Invalid boolean expression string was given.");var e=b?Xc(b):{};c=xg(d,e);return c}
var yg=function(a,b){for(var c=0;c<b.length;c++){if(void 0===a)return;a=a[b[c]]}return a},zg=function(a,b){var c=b.preHit;if(c){var d=a[0];switch(d){case "hitData":return 2>a.length?void 0:yg(c.getHitData(a[1]),a.slice(2));case "metadata":return 2>a.length?void 0:yg(c.getMetadata(a[1]),a.slice(2));case "eventName":return c.getEventName();case "destinationId":return c.getDestinationId();default:throw Error(d+" is not a valid field that can be accessed\n                      from PreHit data.");}}},
Ag=function(a,b){if(a){if(void 0!==a.contextValue){var c;a:{var d=a.contextValue,e=d.keyParts;if(e&&0!==e.length){var f=d.namespaceType;switch(f){case 1:c=zg(e,b);break a;case 2:var g=b.macro;c=g?g[e[0]]:void 0;break a;default:throw Error("Unknown Namespace Type used: "+f);}}c=void 0}return c}if(void 0!==a.booleanExpressionValue)return xg(a.booleanExpressionValue,b);if(void 0!==a.booleanValue)return!!a.booleanValue;if(void 0!==a.stringValue)return String(a.stringValue);if(void 0!==a.integerValue)return Number(a.integerValue);
if(void 0!==a.doubleValue)return Number(a.doubleValue);throw Error("Unknown field used for variable of type ExpressionValue:"+a);}},xg=function(a,b){var c=a.args;if(!Ia(c)||0===c.length)throw Error('Invalid boolean expression format. Expected "args":'+c+" property to\n         be non-empty array.");var d=function(g){return Ag(g,b)};switch(a.type){case 1:for(var e=0;e<c.length;e++)if(d(c[e]))return!0;return!1;case 2:for(var f=0;f<c.length;f++)if(!d(c[f]))return!1;return 0<c.length;case 3:return!d(c[0]);
case 4:return Pf(d(c[0]),d(c[1]),!1);case 5:return Rf(d(c[0]),d(c[1]));case 6:return Wf(d(c[0]),d(c[1]));case 7:return Nf(d(c[0]),d(c[1]));case 8:return Qf(d(c[0]),d(c[1]));case 9:return Vf(d(c[0]),d(c[1]));case 10:return Tf(d(c[0]),d(c[1]));case 11:return Uf(d(c[0]),d(c[1]));case 12:return Sf(d(c[0]),d(c[1]));default:throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');}};
wg.K="internal.evaluateBooleanExpression";var Bg=function(a){M(F(this),["message:?string"],arguments);};var Cg=function(a,b){M(F(this),["min:!number","max:!number"],arguments);return La(a,b)};var N=function(a,b,c){var d=a.h.h;if(!d)throw Error("Missing program state.");d.Ik.apply(null,Array.prototype.slice.call(arguments,1))};var Dg=function(){N(this,"read_container_data");var a=new kb;a.set("containerId",'G-6ZT8F1MF6V');a.set("version",'1');a.set("environmentName",'');a.set("debugMode",uf);a.set("previewMode",wf);a.set("environmentMode",vf);a.xc();return a};var Eg=function(){return(new Date).getTime()};var Fg=function(a){if(null===a)return"null";if(a instanceof xa)return"array";if(a instanceof gb)return"function";if(a instanceof Oc){a=a.Wa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Gg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(uf||wf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Wc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Xc(c))})}};var Hg=function(a){return Pa(Xc(a,this.h))};var Ig=function(a){return Number(Xc(a,this.h))};var Jg=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Kg=function(a,b,c){var d=null,e=!1;return e?d:null};var ng="floor ceil round max min abs pow sqrt".split(" ");var Lg=function(){var a={};return{Xk:function(b){return a.hasOwnProperty(b)?a[b]:void 0},km:function(b,c){a[b]=c},reset:function(){a={}}}},Mg=function(a,b){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(b);return gb.prototype.h.apply(a,c)}},Ng=function(a,b){M(F(this),["apiName:!string","mock:?*"],arguments);};var Og={};
Og.keys=function(a){return new xa};
Og.values=function(a){return new xa};
Og.entries=function(a){return new xa};
Og.freeze=function(a){return a};Og.delete=function(a,b){return!1};var Qg=function(){this.h={};this.m={};};Qg.prototype.get=function(a,b){var c=this.h.hasOwnProperty(a)?this.h[a]:void 0;return c};
Qg.prototype.add=function(a,b,c){if(this.h.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.m.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.h[a]=c?void 0:Fa(b)?ig(a,b):jg(a,b)};
var Sg=function(a,b,c){if(a.m.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.h.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.m[b]=Fa(c)?ig(b,c):jg(b,c)};function Rg(a,b){var c=void 0;return c};function Tg(){var a={};return a};function Ug(a,b){var c=!1;return c}Ug.K="internal.testRegExp";var Wg=function(a){return Vg?G.querySelectorAll(a):null},Xg=function(a,b){if(!Vg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Yg=!1;if(G.querySelectorAll)try{var Zg=G.querySelectorAll(":root");Zg&&1==Zg.length&&Zg[0]==G.documentElement&&(Yg=!0)}catch(a){}var Vg=Yg;var O=function(a){wb("GTM",a)};
var $g=function(a){return null==a?"":k(a)?Sa(String(a)):"e0"},bh=function(a){return a.replace(ah,"")},dh=function(a){return ch(a.replace(/\s/g,""))},ch=function(a){return Sa(a.replace(eh,"").toLowerCase())},gh=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return fh.test(a)?a:"e0"},ih=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=c.replace(/\./g,""));c=c+"@"+b[1];if(hh.test(c))return c}return"e0"},lh=function(a,
b){window.Promise||b([]);Promise.all(a.map(function(c){return c.value&&-1!==jh.indexOf(c.name)?kh(c.value).then(function(d){c.value=d}):Promise.resolve()})).then(function(){b(a)}).catch(function(){b([])})},kh=function(a){if(""===a||"e0"===a)return Promise.resolve(a);if(z.crypto&&z.crypto.subtle){if(mh.test(a))return Promise.resolve(a);try{var b=nh(a);return z.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");
return z.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}}else return Promise.resolve("e1")},nh=function(a){var b;if(z.TextEncoder)b=(new TextEncoder("utf-8")).encode(a);else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|
e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},eh=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,hh=/^\S+@\S+\.\S+$/,fh=/^\+\d{10,15}$/,ah=/[.~]/g,oh=/^[0-9A-Za-z_-]{43}$/,mh=/^[0-9A-Fa-f]{64}$/,ph={},qh=(ph.email="em",ph.phone_number="pn",ph.first_name="fn",ph.last_name="ln",ph.street="sa",ph.city="ct",ph.region="rg",ph.country="co",ph.postal_code="pc",ph.error_code="ec",ph),rh={},sh=(rh.email="sha256_email_address",rh.phone_number="sha256_phone_number",rh.first_name="sha256_first_name",rh.last_name=
"sha256_last_name",rh.street="sha256_street",rh),th=function(a,b){function c(t,u,v,w){var x=$g(t);""!==x&&(mh.test(x)?m.push({name:u,value:x,index:w}):m.push({name:u,value:v(x),index:w}))}function d(t,u){var v=t;if(k(v)||Ia(v)){v=Ia(t)?t:[t];for(var w=0;w<v.length;++w){var x=$g(v[w]),y=mh.test(x);u&&!y&&O(89);!u&&y&&O(88)}}}function e(t,u){var v=t[u];d(v,!1);var w=sh[u];t.hasOwnProperty(w)&&(t.hasOwnProperty(u)&&O(90),v=t[w],d(v,!0));return v}function f(t,u,v){var w=e(t,u);w=Ia(w)?w:[w];for(var x=
0;x<w.length;++x)c(w[x],u,v)}function g(t,u,v,w){var x=e(t,u);c(x,u,v,w)}function h(t){return function(u){O(64);return t(u)}}var m=[];if("https:"===z.location.protocol){f(a,"email",ih);f(a,"phone_number",gh);f(a,"first_name",h(dh));f(a,"last_name",h(dh));var n=a.home_address||{};f(n,"street",h(ch));f(n,"city",h(ch));f(n,"postal_code",h(bh));f(n,"region",h(ch));f(n,"country",h(bh));var p=a.address||{};p=Ia(p)?p:[p];for(var q=0;q<p.length;q++){var r=p[q];g(r,"first_name",dh,q);g(r,"last_name",dh,q);
g(r,"street",ch,q);g(r,"city",ch,q);g(r,"postal_code",bh,q);g(r,"region",ch,q);g(r,"country",bh,q)}lh(m,b)}else m.push({name:"error_code",value:"e3",index:void 0}),b(m)},uh=function(a,b){th(a,function(c){for(var d=["tv.1"],e=0,f=0;f<c.length;++f){var g=c[f].name,h=c[f].value,m=c[f].index,n=qh[g];n&&h&&(-1===jh.indexOf(g)||/^e\d+$/.test(h)||oh.test(h)||mh.test(h))&&(void 0!==m&&(n+=m),d.push(n+"."+h),e++)}1===c.length&&"error_code"===c[0].name&&(e=0);b(encodeURIComponent(d.join("~")),e)})},vh=function(a){if(z.Promise)try{return new Promise(function(b){uh(a,
function(c,d){b({Pf:c,Pl:d})})})}catch(b){}},jh=Object.freeze(["email","phone_number","first_name","last_name","street"]);var P={g:{Vh:"ad_data_sharing",H:"ad_storage",Xf:"ad_user_data",T:"analytics_storage",Oa:"region",wd:"consent_updated",Ue:"wait_for_update",Rj:"ads",cg:"all",Sj:"play",Tj:"search",Uj:"youtube",fi:"app_remove",gi:"app_store_refund",hi:"app_store_subscription_cancel",ii:"app_store_subscription_convert",ji:"app_store_subscription_renew",eg:"add_payment_info",fg:"add_shipping_info",Zb:"add_to_cart",ac:"remove_from_cart",gg:"view_cart",Mb:"begin_checkout",bc:"select_item",cb:"view_item_list",vb:"select_promotion",
eb:"view_promotion",Ia:"purchase",fc:"refund",Ja:"view_item",hg:"add_to_wishlist",Vj:"exception",ki:"first_open",li:"first_visit",wa:"gtag.config",Ka:"gtag.get",mi:"in_app_purchase",hc:"page_view",Wj:"screen_view",ni:"session_start",Xj:"timing_complete",Yj:"track_social",yd:"user_engagement",wb:"gclid",na:"ads_data_redaction",aa:"allow_ad_personalization_signals",zd:"allow_custom_scripts",We:"allow_display_features",Ad:"allow_enhanced_conversions",xb:"allow_google_signals",Ea:"allow_interest_groups",
Zj:"app_id",bk:"app_installer_id",dk:"app_name",ek:"app_version",ic:"auid",oi:"auto_detection_enabled",Nb:"aw_remarketing",Xe:"aw_remarketing_only",Bd:"discount",Cd:"aw_feed_country",Dd:"aw_feed_language",ba:"items",Ed:"aw_merchant_id",ig:"aw_basket_type",Lc:"campaign_content",Mc:"campaign_id",Nc:"campaign_medium",Oc:"campaign_name",Pc:"campaign",Qc:"campaign_source",Rc:"campaign_term",fb:"client_id",ri:"content_group",si:"content_type",La:"conversion_cookie_prefix",Sc:"conversion_id",za:"conversion_linker",
Ob:"conversion_api",Pa:"cookie_domain",Fa:"cookie_expires",Qa:"cookie_flags",jc:"cookie_name",Tc:"cookie_path",Ma:"cookie_prefix",ib:"cookie_update",yb:"country",xa:"currency",Fd:"customer_lifetime_value",kc:"custom_map",ui:"gcldc",vi:"debug_mode",da:"developer_id",wi:"disable_merchant_reported_purchases",mc:"dc_custom_params",jg:"dc_natural_search",Ye:"dynamic_event_settings",kg:"affiliation",Gd:"checkout_option",Ze:"checkout_step",lg:"coupon",Uc:"item_list_name",af:"list_name",xi:"promotions",Vc:"shipping",
bf:"tax",Hd:"engagement_time_msec",Wc:"enhanced_client_id",Xc:"enhanced_conversions",mg:"enhanced_conversions_automatic_settings",Id:"estimated_delivery_date",cf:"euid_logged_in_state",nc:"event_callback",fk:"event_category",zb:"event_developer_id_string",gk:"event_label",ng:"event",Jd:"event_settings",Kd:"event_timeout",hk:"description",ik:"fatal",yi:"experiments",df:"firebase_id",Ld:"first_party_collection",Md:"_x_20",Pb:"_x_19",og:"fledge",pg:"flight_error_code",qg:"flight_error_message",zi:"fl_activity_category",
Ai:"fl_activity_group",rg:"fl_advertiser_id",Bi:"fl_ar_dedupe",Ci:"fl_random_number",Di:"tran",Ei:"u",Nd:"gac_gclid",oc:"gac_wbraid",sg:"gac_wbraid_multiple_conversions",ug:"ga_restrict_domain",ef:"ga_temp_client_id",Od:"gdpr_applies",vg:"geo_granularity",jb:"value_callback",Ra:"value_key",jk:"google_ono",kb:"google_signals",wg:"google_tld",Pd:"groups",xg:"gsa_experiment_id",yg:"iframe_state",Qd:"ignore_referrer",ff:"internal_traffic_results",qc:"is_legacy_converted",lb:"is_legacy_loaded",Rd:"is_passthrough",
Aa:"language",hf:"legacy_developer_id_string",Ba:"linker",sc:"accept_incoming",Bb:"decorate_forms",U:"domains",Qb:"url_position",zg:"method",kk:"name",Yc:"new_customer",Ag:"non_interaction",Fi:"optimize_id",jf:"page_hostname",Rb:"page_path",Ga:"page_referrer",Cb:"page_title",Bg:"passengers",Cg:"phone_conversion_callback",Gi:"phone_conversion_country_code",Dg:"phone_conversion_css_class",Hi:"phone_conversion_ids",Eg:"phone_conversion_number",Fg:"phone_conversion_options",uc:"quantity",Zc:"redact_device_info",
kf:"redact_enhanced_user_id",Ii:"redact_ga_client_id",Ji:"redact_user_id",Sd:"referral_exclusion_definition",Sb:"restricted_data_processing",Ki:"retoken",lk:"sample_rate",lf:"screen_name",Db:"screen_resolution",Li:"search_term",Sa:"send_page_view",Tb:"send_to",nf:"server_container_url",ad:"session_duration",Td:"session_engaged",pf:"session_engaged_time",nb:"session_id",Ud:"session_number",bd:"delivery_postal_code",Gg:"temporary_client_id",qf:"topmost_url",Mi:"tracking_id",rf:"traffic_type",oa:"transaction_id",
vc:"transport_url",Hg:"trip_type",dd:"update",ob:"url_passthrough",Wd:"_user_agent_architecture",Xd:"_user_agent_bitness",Yd:"_user_agent_full_version_list",Zd:"_user_agent_mobile",ae:"_user_agent_model",be:"_user_agent_platform",ce:"_user_agent_platform_version",de:"_user_agent_wow64",qa:"user_data",Ig:"user_data_auto_latency",Jg:"user_data_auto_meta",Kg:"user_data_auto_multi",Lg:"user_data_auto_selectors",Mg:"user_data_auto_status",tf:"user_data_mode",uf:"user_data_settings",Ca:"user_id",Ta:"user_properties",
Ng:"us_privacy_string",ia:"value",wc:"wbraid",Og:"wbraid_multiple_conversions",Si:"_host_name",Ti:"_in_page_command",Ui:"_is_passthrough_cid",xf:"non_personalized_ads",ke:"_sst_parameters",hb:"conversion_label",ka:"page_location",Ab:"global_developer_id_string",Vd:"tc_privacy_string"}},wh={},xh=Object.freeze((wh[P.g.aa]=1,wh[P.g.We]=1,wh[P.g.Ad]=1,wh[P.g.xb]=1,wh[P.g.ba]=1,wh[P.g.Pa]=1,wh[P.g.Fa]=1,wh[P.g.Qa]=1,wh[P.g.jc]=1,wh[P.g.Tc]=1,wh[P.g.Ma]=1,wh[P.g.ib]=1,wh[P.g.kc]=1,wh[P.g.da]=1,wh[P.g.Ye]=
1,wh[P.g.nc]=1,wh[P.g.Jd]=1,wh[P.g.Kd]=1,wh[P.g.Ld]=1,wh[P.g.ug]=1,wh[P.g.kb]=1,wh[P.g.wg]=1,wh[P.g.Pd]=1,wh[P.g.ff]=1,wh[P.g.qc]=1,wh[P.g.lb]=1,wh[P.g.Ba]=1,wh[P.g.kf]=1,wh[P.g.Sd]=1,wh[P.g.Sb]=1,wh[P.g.Sa]=1,wh[P.g.Tb]=1,wh[P.g.nf]=1,wh[P.g.ad]=1,wh[P.g.pf]=1,wh[P.g.bd]=1,wh[P.g.vc]=1,wh[P.g.dd]=1,wh[P.g.uf]=1,wh[P.g.Ta]=1,wh[P.g.ke]=1,wh));Object.freeze([P.g.ka,P.g.Ga,P.g.Cb,P.g.Aa,P.g.lf,P.g.Ca,P.g.df,P.g.ri]);
var yh={},zh=Object.freeze((yh[P.g.fi]=1,yh[P.g.gi]=1,yh[P.g.hi]=1,yh[P.g.ii]=1,yh[P.g.ji]=1,yh[P.g.ki]=1,yh[P.g.li]=1,yh[P.g.mi]=1,yh[P.g.ni]=1,yh[P.g.yd]=1,yh)),Ah={},Bh=Object.freeze((Ah[P.g.eg]=1,Ah[P.g.fg]=1,Ah[P.g.Zb]=1,Ah[P.g.ac]=1,Ah[P.g.gg]=1,Ah[P.g.Mb]=1,Ah[P.g.bc]=1,Ah[P.g.cb]=1,Ah[P.g.vb]=1,Ah[P.g.eb]=1,Ah[P.g.Ia]=1,Ah[P.g.fc]=1,Ah[P.g.Ja]=1,Ah[P.g.hg]=1,Ah)),Ch=Object.freeze([P.g.aa,P.g.xb,P.g.ib]),Dh=Object.freeze([].concat(Ch)),Eh=Object.freeze([P.g.Fa,P.g.Kd,P.g.ad,P.g.pf,P.g.Hd]),
Fh=Object.freeze([].concat(Eh)),Gh={},Hh=(Gh[P.g.H]="1",Gh[P.g.T]="2",Gh),Ih={},Jh=Object.freeze((Ih[P.g.aa]=1,Ih[P.g.Ad]=1,Ih[P.g.Ea]=1,Ih[P.g.Nb]=1,Ih[P.g.Xe]=1,Ih[P.g.Bd]=1,Ih[P.g.Cd]=1,Ih[P.g.Dd]=1,Ih[P.g.ba]=1,Ih[P.g.Ed]=1,Ih[P.g.La]=1,Ih[P.g.za]=1,Ih[P.g.Pa]=1,Ih[P.g.Fa]=1,Ih[P.g.Qa]=1,Ih[P.g.Ma]=1,Ih[P.g.xa]=1,Ih[P.g.Fd]=1,Ih[P.g.da]=1,Ih[P.g.wi]=1,Ih[P.g.Xc]=1,Ih[P.g.Id]=1,Ih[P.g.df]=1,Ih[P.g.Ld]=1,Ih[P.g.lb]=1,Ih[P.g.Aa]=1,Ih[P.g.Yc]=1,Ih[P.g.ka]=1,Ih[P.g.Ga]=1,Ih[P.g.Cg]=1,Ih[P.g.Dg]=1,
Ih[P.g.Eg]=1,Ih[P.g.Fg]=1,Ih[P.g.Sb]=1,Ih[P.g.Sa]=1,Ih[P.g.Tb]=1,Ih[P.g.nf]=1,Ih[P.g.bd]=1,Ih[P.g.oa]=1,Ih[P.g.vc]=1,Ih[P.g.dd]=1,Ih[P.g.ob]=1,Ih[P.g.qa]=1,Ih[P.g.Ca]=1,Ih[P.g.ia]=1,Ih));Object.freeze(P.g);var Kh={},Lh=z.google_tag_manager=z.google_tag_manager||{},Mh=Math.random();Kh.Tg="35a0";Kh.je=Number("0")||0;Kh.ma="dataLayer";Kh.Pj="ChAI8Mf3ogYQssqnldqE9+ECEiUA30kqke7Rbly9G0a46dMAAhzCkXbtwnTH1DFH6bbEPxDFNNmAGgLSEA\x3d\x3d";var Nh={__cl:1,__ecl:1,__ehl:1,__evl:1,__fal:1,__fil:1,__fsl:1,__hl:1,__jel:1,__lcl:1,__sdl:1,__tl:1,__ytl:1},Oh={__paused:1,__tg:1},Ph;for(Ph in Nh)Nh.hasOwnProperty(Ph)&&(Oh[Ph]=1);var Qh=Qa("true"),Rh,Sh=!1;Sh=!0;
Rh=Sh;var Th,Uh=!1;Th=Uh;var Vh,Wh=!1;Vh=Wh;var Xh,Yh=!1;Xh=Yh;Kh.Ve="www.googletagmanager.com";
var Zh=""+Kh.Ve+(Rh?"/gtag/js":"/gtm.js"),$h=null,ai=null,bi={},ci={},di={},ei=function(){var a=Lh.sequence||1;Lh.sequence=a+1;return a};Kh.Oj="true";var fi="";Kh.Bf=fi;var gi=new Ma,hi={},ii={},li={name:Kh.ma,set:function(a,b){Vc(cb(a,b),hi);ji()},get:function(a){return ki(a,2)},reset:function(){gi=new Ma;hi={};ji()}},ki=function(a,b){return 2!=b?gi.get(a):mi(a)},mi=function(a,b){var c=a.split(".");b=b||[];for(var d=hi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==b.indexOf(d))return}return d},wi=function(a,b){ii.hasOwnProperty(a)||(gi.set(a,b),Vc(cb(a,b),hi),ji())},xi=function(){for(var a=["gtm.allowlist","gtm.blocklist","gtm.whitelist",
"gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=ki(c,1);if(Ia(d)||Uc(d))d=Vc(d);ii[c]=d}},ji=function(a){l(ii,function(b,c){gi.set(b,c);Vc(cb(b),hi);Vc(cb(b,c),hi);a&&delete ii[b]})},yi=function(a,b){var c,d=1!==(void 0===b?2:b)?mi(a):gi.get(a);"array"===Sc(d)||"object"===Sc(d)?c=Vc(d):c=d;return c};var zi=[],Ai=function(a){return void 0==zi[a]?!1:zi[a]};var Bi=[];Bi[7]=!0;Bi[9]=!0;Bi[27]=!0;
Bi[28]=!0;Bi[11]=!0;Bi[13]=!0;Bi[15]=!0;
Bi[16]=!0;Bi[25]=!0;
Bi[34]=!0;Bi[36]=!0;
Bi[38]=!0;Bi[82]=!0;Bi[43]=!0;
Bi[52]=!0;Bi[57]=!0;Bi[59]=!0;
Bi[61]=!0;Bi[68]=!0;Bi[69]=!0;Bi[72]=!0;
Bi[75]=!0;zi[2]=!0;Bi[76]=!0;
Bi[77]=!0;Bi[79]=!0;Bi[80]=!0;Bi[83]=!0;Bi[88]=!0;
Bi[89]=!0;Bi[92]=!0;Bi[93]=!0;
Bi[94]=!0;Bi[96]=!0;Bi[97]=!0;
Bi[101]=!0;
Bi[113]=!0;var R=function(a){return!!Bi[a]};var Ci;try{Ci=JSON.parse(ub("eyIwIjoiVVMiLCIxIjoiVVMtQ0EiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))}catch(a){O(123),wb("HEALTH",2),Ci={}}
var Di=function(){return Ci["0"]||""},Ei=function(){return Ci["1"]||""},Fi=function(){var a=!1;a=!!Ci["2"];return a},Gi=function(){return!!Ci["6"]},Hi=function(){var a="";a=Ci["4"]||"";return a},Ii=function(){var a=!1;a=!!Ci["5"];return a},Ji=function(){var a="";
a=Ci["3"]||"";return a};var Ki,Li=!1;function Mi(){Li=!0;Ki=Ki||{}}var Ni=function(a){Li||Mi();return Ki[a]};var Oi=function(){var a=z.screen;return{width:a?a.width:0,height:a?a.height:0}},Pi=function(a){if(G.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!z.getComputedStyle)return!0;var c=z.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Qi=function(){var a=G.body,b=G.documentElement||a&&a.parentElement,c,d;if(G.compatMode&&"BackCompat"!==G.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ri=function(a){var b=Qi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Si=[],Ti=!(!z.IntersectionObserver||!z.IntersectionObserverEntry),Ui=function(a,b,c){for(var d=new z.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Si.length;f++)if(!Si[f])return Si[f]=d,f;return Si.push(d)-1},Vi=function(a,b,c){function d(h,m){var n={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:m,intersectionRect:n,isIntersecting:0<m,rootBounds:n,target:h,time:Ua()};I(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,m){return h-m});return function(){for(var h=0;h<b.length;h++){var m=Ri(b[h]);if(m>e[h])for(;f[h]<c.length-1&&m>=c[f[h]+1];)d(b[h],m),f[h]++;else if(m<e[h])for(;0<=f[h]&&m<=c[f[h]];)d(b[h],m),f[h]--;e[h]=m}}},Wi=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ti){var e=!1;I(function(){e||
Vi(a,b,c)()});return Ui(function(f){e=!0;for(var g={nd:0};g.nd<f.length;g={nd:g.nd},g.nd++)I(function(h){return function(){return a(f[h.nd])}}(g))},b,c)}return z.setInterval(Vi(a,b,c),1E3)},Xi=function(a){Ti?0<=a&&a<Si.length&&Si[a]&&(Si[a].disconnect(),Si[a]=void 0):z.clearInterval(a)};var Yi=/:[0-9]+$/,Zi=/^\d+\.fls\.doubleclick\.net$/,$i=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var m=h.slice(1).join("=");if(!c)return d?m:decodeURIComponent(m).replace(/\+/g," ");e.push(d?m:decodeURIComponent(m).replace(/\+/g," "))}}return c?e:void 0},cj=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=aj(a.protocol)||aj(z.location.protocol);"port"===b?a.port=
String(Number(a.hostname?a.port:z.location.port)||("http"===a.protocol?80:"https"===a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||z.location.hostname).replace(Yi,"").toLowerCase());return bj(a,b,c,d,e)},bj=function(a,b,c,d,e){var f,g=aj(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=dj(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Yi,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=
String(Number(a.port)||("http"===g?80:"https"===g?443:""));break;case "path":a.pathname||a.hostname||wb("TAGGING",1);f="/"===a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=(d||[]).indexOf(m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$i(f,e,!1));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},
aj=function(a){return a?a.replace(":","").toLowerCase():""},dj=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ej=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||wb("TAGGING",1),c="/"+c);var d=b.hostname.replace(Yi,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},fj=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:
p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!==p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=ej(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var m=""+f+g+h;"/"===m[m.length-1]&&(m=m.substring(0,m.length-1));return m},gj=function(a){var b=ej(z.location.href),c=cj(b,"host",!1);if(c&&c.match(Zi)){var d=cj(b,
"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}};
var ij=function(a,b,c){var d=a.element,e={V:a.V,type:a.la,tagName:d.tagName};b&&(e.querySelector=hj(d));c&&(e.isVisible=!Pi(d));return e},jj=function(a,b,c){return ij({element:a.element,V:a.V,la:"1"},b,c)},kj=function(a){var b=!!a.zc+"."+!!a.Ac;a&&a.jd&&a.jd.length&&(b+="."+a.jd.join("."));a&&a.Ya&&(b+="."+a.Ya.email+"."+a.Ya.phone+"."+a.Ya.address);return b},nj=function(a){if(0!=a.length){var b;b=lj(a,function(c){return!mj.test(c.V)});b=lj(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});
b=lj(b,function(c){return!Pi(c.element)});return b[0]}},oj=function(a,b){if(!b||0===b.length)return a;for(var c=[],d=0;d<a.length;d++){for(var e=!0,f=0;f<b.length;f++){var g=b[f];if(g&&Xg(a[d].element,g)){e=!1;break}}e&&c.push(a[d])}return c},lj=function(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c},hj=function(a){var b;if(a===G.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===
a){e=g+1;break a}e=-1}else e=1}d=hj(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b},qj=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=d.textContent;"INPUT"===d.tagName.toUpperCase()&&d.value&&(e=d.value);if(e){var f=e.match(pj);if(f){var g=f[0],h;if(z.location){var m=bj(z.location,"host",!0);h=0<=g.toLowerCase().indexOf(m)}else h=!1;h||b.push({element:d,V:g})}}}return b},uj=function(){var a=[],b=G.body;if(!b)return{elements:a,status:"4"};for(var c=b.querySelectorAll("*"),
d=0;d<c.length&&1E4>d;d++){var e=c[d];if(!(0<=rj.indexOf(e.tagName.toUpperCase()))&&e.children instanceof HTMLCollection){for(var f=!1,g=0;g<e.childElementCount&&1E4>g;g++)if(!(0<=sj.indexOf(e.children[g].tagName.toUpperCase()))){f=!0;break}(!f||R(114)&&-1!==tj.indexOf(e.tagName))&&a.push(e)}}return{elements:a,status:1E4<c.length?"2":"1"}},vj=!0,wj=!1;var pj=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,xj=/@(gmail|googlemail)\./i,mj=/support|noreply/i,rj="SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),sj=["BR"],yj={Am:"1",Im:"2",Bm:"3",Dm:"4",ym:"5",Jm:"6",Em:"7"},zj={},tj=["INPUT","SELECT"];var Sj=function(a){a=a||{zc:!0,Ac:!0};a.Ya=a.Ya||{email:!0,phone:!1,address:!1};var b=kj(a),c=zj[b];if(c&&200>Ua()-c.timestamp)return c.result;var d=uj(),e=d.status,
f=[],g,h,m=[];if(!R(114)){if(a.Ya&&a.Ya.email){var n=qj(d.elements);f=oj(n,a&&a.jd);g=nj(f);10<n.length&&(e="3")}!a.Oh&&g&&(f=[g]);for(var p=0;p<f.length;p++)m.push(jj(f[p],a.zc,a.Ac));m=m.slice(0,10)}else if(a.Ya){}g&&(h=jj(g,a.zc,a.Ac));var D={elements:m,Hh:h,status:e};zj[b]={timestamp:Ua(),result:D};return D},Tj=function(a){return a.tagName+":"+a.isVisible+":"+a.V.length+":"+xj.test(a.V)};
var Uj=function(a,b,c){if(!c)return!1;var d=c.selector_type,e=String(c.value),f;if("js_variable"===d){e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,"");for(var g=e.split(","),h=0;h<g.length;h++){var m=g[h].trim();if(m){if(0===m.indexOf("dataLayer."))f=ki(m.substring(10));else{var n=m.split(".");f=z[n.shift()];for(var p=0;p<n.length;p++)f=f&&f[n[p]]}if(void 0!==f)break}}}else if("css_selector"===d&&Vg){var q=Wg(e);if(q&&0<q.length){f=[];for(var r=0;r<q.length&&r<("email"===b||"phone_number"===b?5:1);r++)f.push(uc(q[r])||
Sa(q[r].value));f=1===f.length?f[0]:f}}return f?(a[b]=f,!0):!1},Vj=function(a){if(a){var b={},c=!1;c=Uj(b,"email",a.email)||c;c=Uj(b,"phone_number",a.phone)||c;b.address=[];for(var d=a.name_and_address||[],e=0;e<d.length;e++){var f={};c=Uj(f,"first_name",d[e].first_name)||c;c=Uj(f,"last_name",d[e].last_name)||c;c=Uj(f,"street",d[e].street)||c;c=Uj(f,"city",d[e].city)||c;c=Uj(f,"region",d[e].region)||c;c=Uj(f,"country",d[e].country)||c;c=Uj(f,"postal_code",d[e].postal_code)||c;b.address.push(f)}return c?
b:void 0}},Wj=function(a){return a.B[P.g.uf]},Xj=function(a){var b=T(a,P.g.Xc)||{},c=!1;l(b,function(d,e){var f=e.enhanced_conversions_mode;if("automatic"===f||"manual"===f)c=!0});return c},Yj=function(a){if(!Uc(a))return!1;var b=a.mode;return"auto_detect"===b||"selectors"===b||"code"===b||!!a.enable_code},Zj=function(a){if(a){if("selectors"===a.mode||Uc(a.selectors))return Vj(a.selectors);if("auto_detect"===a.mode||Uc(a.auto_detect)){var b;var c=a.auto_detect;if(c){var d=Sj({zc:!1,Ac:!1,jd:c.exclude_element_selectors,
Ya:{email:!!c.email,phone:!!c.phone,address:!!c.address}}).elements,e={};if(0<d.length)for(var f=0;f<d.length;f++){var g=d[f];if("1"===g.type){e.email=g.V;break}}b=e}else b=void 0;return b}}};var dk=new function(a,b){this.h=a;this.defaultValue=void 0===b?!1:b}(1933);var ek=function(a){ek[" "](a);return a};ek[" "]=function(){};var gk=function(){var a=fk,b="mh";if(a.mh&&a.hasOwnProperty(b))return a.mh;var c=new a;return a.mh=c};var fk=function(){var a={};this.h=function(){var b=dk.h,c=dk.defaultValue;return null!=a[b]?a[b]:c};this.m=function(){a[dk.h]=!0}};var hk=!1,ik=!1,jk=[],kk={},lk={},mk={ad_storage:!1,ad_user_data:!1,ad_data_sharing:!1};function nk(){var a=ic("google_tag_data",{});a.ics||(a.ics={entries:{},cps:{},set:ok,default:ok,update:pk,declare:qk,implicit:rk,addListener:sk,notifyListeners:tk,setCps:uk,active:!1,usedDeclare:!1,usedDefault:!1,usedUpdate:!1,usedImplicit:!1,usedSetCps:!1,accessedDefault:!1,accessedAny:!1,wasSetLate:!1});return a.ics}function vk(a,b,c,d){return""===c||a===d?!0:a===c?b!==d:!a&&!b}
function qk(a,b,c,d,e){var f=nk();f.active=!0;f.usedDeclare=!0;var g=f.entries,h=g[a]||{},m=h.declare_region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(vk(n,m,d,e)){var p={region:h.region,declare_region:n,declare:"granted"===b,implicit:h.implicit,initial:h.initial,default:h.default,update:h.update,quiet:h.quiet};if(""!==d||!1!==h.declare)g[a]=p}}
function rk(a,b){var c=nk();c.active=!0;c.usedImplicit=!0;var d=c.entries,e=d[a]=d[a]||{};!1!==e.implicit&&(e.implicit="granted"===b)}
function ok(a,b,c,d,e,f){var g=nk();g.usedDefault||!g.accessedDefault&&!g.accessedAny||(g.wasSetLate=!0);g.active=!0;g.usedDefault=!0;wb("TAGGING",19);if(void 0==b)wb("TAGGING",18);else{var h=g.entries,m=h[a]||{},n=m.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();var q="granted"===b;if(vk(p,n,d,e)){var r=!!(f&&0<f&&void 0===m.update),t={region:p,declare_region:m.declare_region,implicit:m.implicit,initial:q,default:q,declare:m.declare,update:m.update,quiet:r};if(""!==d||
!1!==m.default)h[a]=t;r&&z.setTimeout(function(){if(h[a]===t&&t.quiet){t.quiet=!1;var u=[a];if(Ai(4))for(var v in kk)kk.hasOwnProperty(v)&&kk[v]===a&&u.push(v);for(var w=0;w<u.length;w++)wk(u[w]);tk();wb("TAGGING",2)}},f)}}}
function pk(a,b){var c=nk();c.usedDefault||c.usedUpdate||!c.accessedAny||(c.wasSetLate=!0);c.active=!0;c.usedUpdate=!0;if(void 0!=b){var d=xk(c,a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=xk(c,a),h=[a];if(Ai(4))for(var m in kk)kk.hasOwnProperty(m)&&kk[m]===a&&h.push(m);if(f.quiet){f.quiet=!1;for(var n=0;n<h.length;n++)wk(h[n])}else if(g!==d)for(var p=0;p<h.length;p++)wk(h[p])}}
function yk(a,b,c,d,e,f){var g=a[b]||{},h=g.region,m=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(vk(m,h,e,f)){var n={enabled:"granted"===c,region:m};if(""!==e||!1!==g.enabled)return a[b]=n,!0}return!1}function uk(a,b,c,d,e){var f=nk();yk(f.cps,a,b,c,d,e)&&(f.usedSetCps=!0)}function sk(a,b){jk.push({consentTypes:a,Sk:b})}function wk(a){for(var b=0;b<jk.length;++b){var c=jk[b];Ia(c.consentTypes)&&-1!==c.consentTypes.indexOf(a)&&(c.xj=!0)}}
function tk(a,b){for(var c=0;c<jk.length;++c){var d=jk[c];if(d.xj){d.xj=!1;try{d.Sk({consentEventId:a,consentPriorityId:b})}catch(e){}}}}
function xk(a,b){var c=a.entries,d=c[b]||{},e=d.update;if(void 0!==e)return e?1:2;e=d.default;if(void 0!==e)return e?1:2;if(Ai(4)&&kk.hasOwnProperty(b)){var f=c[kk[b]]||{};e=f.update;if(void 0!==e)return e?1:2;e=f.default;if(void 0!==e)return e?1:2}e=d.declare;return void 0!==e?e?1:2:Ai(4)&&(e=d.implicit,void 0!==e)?e?3:4:Ai(3)&&mk.hasOwnProperty(b)?mk[b]?3:4:0}
var zk=function(a){var b=nk();b.accessedAny=!0;switch(xk(b,a)){case 1:case 3:return!0;case 2:case 4:return!1;default:return!0}},Ak=function(a){var b=nk();b.accessedAny=!0;return xk(b,a)},Bk=function(a){var b=nk();b.accessedAny=!0;switch(xk(b,a)){case 1:case 3:return!0;case 2:case 4:return!1}},Ck=function(a){var b=nk();b.accessedDefault=!0;switch((b.entries[a]||{}).default){case !0:return 3;case !1:return 2;default:return 1}},Dk=function(a){var b=nk();b.accessedAny=!0;return!(b.entries[a]||{}).quiet},
Ek=function(){if(!gk().h())return!1;var a=nk();a.accessedAny=!0;return a.active},Fk=function(){var a=nk();a.accessedDefault=!0;return a.usedDefault},Gk=function(a,b){nk().addListener(a,b)},Hk=function(a,b){nk().notifyListeners(a,b)},Ik=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Dk(b[e]))return!0;return!1}if(c()){var d=!1;Gk(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Jk=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Bk(h)||e[h]||(f.push(h),e[h]=!0)}return f}
var d=k(b)?[b]:b,e={};c().length!==d.length&&Gk(d,function(f){var g=c();0<g.length&&(f.consentTypes=g,a(f))})};function Kk(){}function Lk(){};var Mk=[P.g.H,P.g.T],Nk=[P.g.H,P.g.T,P.g.Xf,P.g.Vh],Ok={},Pk=(Ok[P.g.Rj]="a",Ok[P.g.Tj]="s",Ok[P.g.Uj]="y",Ok[P.g.Sj]="p",Ok),Qk=function(a){for(var b=a[P.g.Oa],c=Array.isArray(b)?b:[b],d={od:0};d.od<c.length;d={od:d.od},++d.od)l(a,function(e){return function(f,g){if(f!==P.g.Oa){var h=c[e.od],m=Di(),n=Ei();ik=!0;hk&&wb("TAGGING",20);nk().declare(f,g,h,m,n)}}}(d))},Rk=function(a){var b=a[P.g.Oa];b&&O(40);var c=a[P.g.Ue];c&&O(41);for(var d=Ia(b)?b:[b],e={pd:0};e.pd<d.length;e={pd:e.pd},++e.pd)l(a,function(f){return function(g,
h){if(g!==P.g.Oa&&g!==P.g.Ue){var m=d[f.pd],n=Number(c),p=Di(),q=Ei();hk=!0;ik&&wb("TAGGING",20);nk().default(g,h,m,p,q,n)}}}(e))},Sk=function(a,b){l(a,function(c,d){hk=!0;ik&&wb("TAGGING",20);nk().update(c,d)});Hk(b.eventId,b.priorityId)},Tk=function(a){for(var b=a[P.g.Oa],c=Array.isArray(b)?b:[b],d={rd:0};d.rd<c.length;d={rd:d.rd},++d.rd)l(a,function(e){return function(f,g){if(f!==P.g.Oa){var h=c[e.rd],m=Di(),n=Ei();nk().setCps(f,g,h,m,n)}}}(d))},Uk=function(a){for(var b=a[P.g.Oa],c=Array.isArray(b)?
b:[b],d={Hc:0};d.Hc<c.length;d={Hc:d.Hc},++d.Hc)a.hasOwnProperty(P.g.cg)&&l(Pk,function(e){return function(f){yk(lk,f,a[P.g.cg],c[e.Hc],Di(),Ei())}}(d)),l(a,function(e){return function(f,g){f!==P.g.Oa&&f!==P.g.cg&&yk(lk,f,g,c[e.Hc],Di(),Ei())}}(d))},Vk=function(a){var b=Bk(a);return void 0!=b?b:!0},Wk=function(){if(R(104)){for(var a="G2",b=0;b<Nk.length;b++)switch(Ak(Nk[b])){case 1:a+="G";break;case 2:a+="D";break;case 3:a+="g";break;case 4:a+="d";break;case 0:a+="g"}return a}var c=R(111)&&Mk.every(zk),
d=R(112);if(c||d){for(var e="G2",f=0;f<Mk.length;f++)switch(Ak(Mk[f])){case 1:e+="G";break;case 2:e+="D";break;case 3:e+="g";break;case 4:e+="d";break;case 0:e+="g"}return e}for(var g="G1",h=0;h<Mk.length;h++)switch(Ak(Mk[h])){case 1:case 3:g+="1";break;case 2:case 4:g+="0";break;case 0:g+="-"}return g},Xk={},Yk=(Xk[P.g.H]=0,Xk[P.g.T]=1,Xk[P.g.Xf]=2,Xk[P.g.Vh]=3,Xk);function Zk(a){switch(a){case void 0:return 1;case !0:return 3;case !1:return 2;default:return 0}}
var $k=function(){if(R(106)){for(var a="1",b=0;b<Nk.length;b++){var c=a,d,e=Nk[b],f=kk[e];d=void 0===f?0:Yk.hasOwnProperty(f)?12|Yk[f]:8;var g=nk();g.accessedAny=!0;var h=g.entries[e]||{};d=d<<2|Zk(h.implicit);a=c+(""+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[d]+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[Zk(h.declare)<<4|Zk(h.default)<<2|Zk(h.update)])}return a}for(var m="G1",n=0;n<Mk.length;n++)switch(Ck(Mk[n])){case 3:m+="1";break;case 2:m+="0";break;
case 1:m+="-"}return m},al=function(){var a=nk(),b=a.cps,c=[],d;for(d in lk)lk.hasOwnProperty(d)&&lk[d].enabled&&(a.usedSetCps?b.hasOwnProperty(d)&&b[d].enabled&&c.push(d):c.push(d));for(var e="",f=0;f<c.length;f++){var g=Pk[c[f]];g&&(e+=g)}return""===e?"-":e},bl=function(){return Vk(P.g.Xf)?Gi()||nk().usedSetCps:!1},cl=function(a,b){Gk(a,b)},dl=function(a,b){Jk(a,b)},el=function(a,b){Ik(a,b)};var fl=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!==c?b^c>>21:b;return b};var gl=function(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var m=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");m&&c&&(m=decodeURIComponent(m));d.push(m)}}return d};var hl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},il=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};function jl(a){return"null"!==a.origin};var ml=function(a,b,c,d){return kl(d)?gl(a,String(b||ll()),c):[]},pl=function(a,b,c,d,e){if(kl(e)){var f=nl(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ol(f,function(g){return g.Hf},b);if(1===f.length)return f[0].id;f=ol(f,function(g){return g.Ee},c);return f[0]?f[0].id:void 0}}};function ql(a,b,c,d){var e=ll(),f=window;jl(f)&&(f.document.cookie=a);var g=ll();return e!=g||void 0!=c&&0<=ml(b,g,!1,d).indexOf(c)}
var ul=function(a,b,c,d){function e(w,x,y){if(null==y)return delete h[x],w;h[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete h[x],w;h[x]=!0;return w+"; "+x}if(!kl(c.Hb))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=rl(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var m;c.expires instanceof Date?m=c.expires.toUTCString():null!=c.expires&&(m=""+c.expires);g=e(g,"expires",m);g=e(g,"max-age",c.Il);g=e(g,"samesite",
c.dm);c.gm&&(g=f(g,"secure"));var n=c.domain;if(n&&"auto"===n.toLowerCase()){for(var p=sl(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!tl(u,c.path)&&ql(v,a,b,c.Hb))return 0}if(q&&!r)throw q;return 1}n&&"none"!==n.toLowerCase()&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return tl(n,c.path)?1:ql(g,a,b,c.Hb)?0:1},vl=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ul(a,
b,c)};function ol(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],m=b(h);m===c?d.push(h):void 0===f||m<f?(e=[h],f=m):m===f&&e.push(h)}return 0<d.length?d:e}function nl(a,b,c){for(var d=[],e=ml(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var m=g.shift();m&&(m=m.split("-"),d.push({id:g.join("."),Hf:1*m[0]||1,Ee:1*m[1]||1}))}}return d}
var rl=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},wl=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,xl=/(^|\.)doubleclick\.net$/i,tl=function(a,b){return xl.test(window.document.location.hostname)||"/"===b&&wl.test(a)},ll=function(){return jl(window)?window.document.cookie:""},sl=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;xl.test(e)||wl.test(e)||a.push("none");return a},kl=function(a){if(!gk().h()||!a||!Ek())return!0;if(!Dk(a))return!1;var b=Bk(a);return null==b?!0:!!b};var yl=function(a){var b=Math.round(2147483647*Math.random());return a?String(b^fl(a)&2147483647):String(b)},zl=function(a){return[yl(a),Math.round(Ua()/1E3)].join(".")},Cl=function(a,b,c,d,e){var f=Al(b);return pl(a,f,Bl(c),d,e)},Dl=function(a,b,c,d){var e=""+Al(c),f=Bl(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Al=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Bl=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-
1};var El=function(){Lh.dedupe_gclid||(Lh.dedupe_gclid=""+zl());return Lh.dedupe_gclid};var Fl=function(){var a=!1;return a};var Gl=function(){this.container={};this.destination={};this.canonical={}},Hl=function(){var a=ic("google_tag_data",{}),b=a.tidr;b||(b=new Gl,a.tidr=b);return b};var K={D:"G-6ZT8F1MF6V",Lb:"115890836"},Il={vj:"G-6ZT8F1MF6V|GT-NBPP3SC",wj:"G-6ZT8F1MF6V"};K.wf=Qa("");
var Jl=function(){return Il.vj?Il.vj.split("|"):[K.D]},Kl=function(){return Il.wj?Il.wj.split("|"):[]},Ll=function(a){var b=Hl();return a.isDestination?b.destination[a.ctid]:b.container[a.ctid]},Ml=function(){for(var a=Hl(),b=Jl(),c=0;c<b.length;c++){var d=a.container[b[c]];d?(d.state=2,d.containers=Jl(),d.destinations=Kl()):a.container[b[c]]={state:2,containers:Jl(),destinations:Kl()}}for(var e=Kl(),f=0;f<e.length;f++){var g=a.destination[e[f]];g&&0===g.state&&O(93);g?(g.state=2,g.containers=Jl(),
g.destinations=Kl()):a.destination[e[f]]={state:2,containers:Jl(),destinations:Kl()}}a.canonical[K.Lb]=2},Nl=function(a){return!!Hl().container[a]},Ol=function(){return{ctid:K.D,isDestination:K.wf}},Pl=function(){var a=Hl().container,b;for(b in a)if(a.hasOwnProperty(b)&&1===a[b].state)return!0;return!1},Ql=function(){var a={};l(Hl().destination,function(b,c){0===c.state&&(a[b]=c)});return a};var Rl={UA:1,AW:2,DC:3,G:4,GF:5,GT:12,GTM:14,HA:6,MC:7},Sl=function(a){var b=K.D.split("-")[0].toUpperCase(),c={};c.ctid=K.D;c.Zl=Kh.je;c.bm=Kh.Tg;c.Fl=K.wf?2:1;Rh?(c.Tf=Rl[b],c.Tf||(c.Tf=0)):c.Tf=Xh?13:10;Vh?c.zh=1:Fl()?c.zh=2:c.zh=3;var d;var e=c.Tf,f=c.zh;void 0===e?d="":(f||(f=0),d=""+dg(1,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e<<2|f]);var g=c.Mm,h=4+d+(g?""+dg(2,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g]:""),m,n=c.bm;m=n&&cg.test(n)?
""+dg(3,2)+n:"";var p,q=c.Zl;p=q?""+dg(4,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]:"";var r;var t=c.ctid;if(t&&a){var u=t.split("-"),v=u[0].toUpperCase();if("GTM"!==v&&"OPT"!==v)r="";else{var w=u[1];r=""+dg(5,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1+w.length]+(c.Fl||0)+w}}else r="";return h+m+p+r};function Tl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Ul=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function Vl(){return Hb?!!Ob&&!!Ob.platform:!1}function Wl(){return Rb("iPhone")&&!Rb("iPod")&&!Rb("iPad")}function Xl(){Wl()||Rb("iPad")||Rb("iPod")};Tb();Sb()||Rb("Trident")||Rb("MSIE");Rb("Edge");!Rb("Gecko")||-1!=Nb().toLowerCase().indexOf("webkit")&&!Rb("Edge")||Rb("Trident")||Rb("MSIE")||Rb("Edge");-1!=Nb().toLowerCase().indexOf("webkit")&&!Rb("Edge")&&Rb("Mobile");Vl()||Rb("Macintosh");Vl()||Rb("Windows");(Vl()?"Linux"===Ob.platform:Rb("Linux"))||Vl()||Rb("CrOS");var Yl=qa.navigator||null;Yl&&(Yl.appVersion||"").indexOf("X11");Vl()||Rb("Android");Wl();Rb("iPad");Rb("iPod");Xl();Nb().toLowerCase().indexOf("kaios");var Zl=function(a,b,c,d){for(var e=b,f=c.length;0<=(e=a.indexOf(c,e))&&e<d;){var g=a.charCodeAt(e-1);if(38==g||63==g){var h=a.charCodeAt(e+f);if(!h||61==h||38==h||35==h)return e}e+=f+1}return-1},$l=/#|$/,am=function(a,b){var c=a.search($l),d=Zl(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))},bm=/[?&]($|#)/,cm=function(a,b,c){for(var d,e=a.search($l),f=0,g,h=[];0<=(g=Zl(a,f,b,e));)h.push(a.substring(f,
g)),f=Math.min(a.indexOf("&",g)+1||e,e);h.push(a.slice(f));d=h.join("").replace(bm,"$1");var m,n=null!=c?"="+encodeURIComponent(String(c)):"";var p=b+n;if(p){var q,r=d.indexOf("#");0>r&&(r=d.length);var t=d.indexOf("?"),u;0>t||t>r?(t=r,u=""):u=d.substring(t+1,r);q=[d.slice(0,t),u,d.slice(r)];var v=q[1];q[1]=p?v?v+"&"+p:p:v;m=q[0]+(q[1]?"?"+q[1]:"")+q[2]}else m=d;return m};var um=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ek(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},vm=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function wm(){if(!G.head)return null;var a=xm("META");G.head.appendChild(a);a.httpEquiv="origin-trial";a.content='A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';return a}
var ym=function(){if(z.top==z)return 0;var a=z.location.ancestorOrigins;return a?a[a.length-1]==z.location.origin?1:2:um(z.top)?1:2},xm=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function zm(a,b,c,d){d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=xm("IMG",a.document);if(c){var f=function(){if(c){var g=a.google_image_requests,h=zb(g,e);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,!1);e.removeEventListener&&e.removeEventListener("error",f,!1)};Ul(e,"load",f);Ul(e,"error",f)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
var Bm=function(a){var b;b=void 0===b?!1:b;var c="https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";vm(a,function(d,e){if(d||0===d)c+="&"+e+"="+encodeURIComponent(""+d)});Am(c,b)},Am=function(a,b){var c=window,d;b=void 0===b?!1:b;d=void 0===d?!1:d;if(c.fetch){var e={keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"};d&&(e.mode="cors",e.headers={"Attribution-Reporting-Eligible":"event-source"});c.fetch(a,e)}else zm(c,a,void 0===b?!1:b,void 0===d?!1:d)};var Cm=function(){};var Dm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Em=function(a,b){b=void 0===b?{}:b;this.m=a;this.h=null;this.M={};this.ub=0;var c;this.R=null!=(c=b.qm)?c:500;var d;this.C=null!=(d=b.Nm)?d:!1;this.B=null};pa(Em,Cm);
Em.prototype.addEventListener=function(a){var b=this,c={internalBlockOnErrors:this.C},d=il(function(){return a(c)}),e=0;-1!==this.R&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},this.R));var f=function(g,h){clearTimeout(e);g?(c=g,c.internalErrorState=Dm(c),c.internalBlockOnErrors=b.C,h&&0===c.internalErrorState||(c.tcString="tcunavailable",h||(c.internalErrorState=3))):(c.tcString="tcunavailable",c.internalErrorState=3);a(c)};try{Fm(this,"addEventListener",f)}catch(g){c.tcString=
"tcunavailable",c.internalErrorState=3,e&&(clearTimeout(e),e=0),d()}};Em.prototype.removeEventListener=function(a){a&&a.listenerId&&Fm(this,"removeEventListener",null,a.listenerId)};
var Hm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var m;if(0===h)if(a.purpose&&a.vendor){var n=Gm(a.vendor.consents,void 0===d?"755":d);m=n&&"1"===b&&a.purposeOneTreatment&&"CH"===a.publisherCC?!0:n&&Gm(a.purpose.consents,b)}else m=!0;else m=1===h?a.purpose&&a.vendor?Gm(a.purpose.legitimateInterests,
b)&&Gm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return m},Gm=function(a,b){return!(!a||!a[b])},Fm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.m.__tcfapi){var e=a.m.__tcfapi;e(b,2,c,d)}else if(Im(a)){Jm(a);var f=++a.ub;a.M[f]=c;if(a.h){var g={};a.h.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Im=function(a){if(a.h)return a.h;var b;a:{for(var c=a.m,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(h){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(h){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},Jm=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.M[c.callId](c.returnValue,c.success)}catch(d){}},Ul(a.m,"message",a.B))},Km=function(a){if(!1===a.gdprApplies)return!0;void 0===a.internalErrorState&&(a.internalErrorState=Dm(a));return"error"===a.cmpStatus||0!==a.internalErrorState?a.internalBlockOnErrors?
(Bm({e:String(a.internalErrorState)}),!1):!0:"loaded"!==a.cmpStatus||"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus?!1:!0};var Lm={1:0,3:0,4:0,7:3,9:3,10:3},Mm=Tl('',500);function Nm(){var a=Lh.tcf||{};return Lh.tcf=a}
var Tm=function(){var a=Nm(),b=new Em(z,{qm:-1});Om(b)&&Pm()&&O(124);if(!Pm()&&!a.active&&Om(b)){a.active=!0;a.Qf={};Qm();a.tcString="tcunavailable";try{b.addEventListener(function(c){if(0!==c.internalErrorState)Rm(a),Sm(a);else{var d;a.gdprApplies=c.gdprApplies;if(!1===c.gdprApplies){var e={},f;for(f in Lm)Lm.hasOwnProperty(f)&&(e[f]=!0);d=e;b.removeEventListener(c)}else if("tcloaded"===c.eventStatus||"useractioncomplete"===c.eventStatus||"cmpuishown"===c.eventStatus){var g={},h;for(h in Lm)if(Lm.hasOwnProperty(h))if("1"===
h){var m,n=c,p=!0;p=void 0===p?!1:p;m=Km(n)?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p||"string"!==typeof n.tcString||!n.tcString.length?!0:Hm(n,"1",0):!1;g["1"]=m}else g[h]=Hm(c,h,Lm[h]);d=g}d&&(a.tcString=c.tcString||"tcempty",a.Qf=d,Sm(a))}})}catch(c){Rm(a),Sm(a)}}};function Rm(a){a.type="e";a.tcString="tcunavailable"}function Qm(){var a={},b=(a.ad_storage="denied",a.wait_for_update=Mm,a);Rk(b)}
function Om(a){return"function"===typeof z.__tcfapi||"function"===typeof a.m.__tcfapi||null!=Im(a)?!0:!1}var Pm=function(){return!0!==z.gtag_enable_tcf_support};function Sm(a){var b={},c=(b.ad_storage=a.Qf["1"]?"granted":"denied",b);Sk(c,{eventId:0},{gdprApplies:a?a.gdprApplies:void 0,tcString:Um()})}
var Um=function(){var a=Nm();return a.active?a.tcString||"":""},Vm=function(){var a=Nm();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Wm=function(a){if(!Lm.hasOwnProperty(String(a)))return!0;var b=Nm();return b.active&&b.Qf?!!b.Qf[String(a)]:!0};var Xm=function(a){var b=String(a[oe.Ub]||"").replace(/_/g,"");0===b.indexOf("cvt")&&(b="cvt");return b},Ym=0<=z.location.search.indexOf("?gtm_latency=")||0<=z.location.search.indexOf("&gtm_latency=");var Zm={sampleRate:"0.005000",Kj:"",Jj:Number("5"),Sm:Number("")},$m;if(!($m=Ym)){var an=Math.random(),bn=Zm.sampleRate;$m=an<bn}var cn=$m,dn="https://www.googletagmanager.com/a?id="+K.D+"&cv=1";
function en(){return[dn,"&v=3&t=t","&pid="+La(),"&rv="+Kh.Tg].join("")}var fn=en();function gn(){fn=en()}var hn={},jn="",kn="",ln="",mn="",nn=[],on="",pn="",qn=void 0,rn={},sn={},tn=void 0,un=5;0<Zm.Jj&&(un=Zm.Jj);var vn=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);return{wl:function(){return c<a?!1:Ua()-d[c%a]<b},Vl:function(){var f=c++%a;d[f]=Ua()}}}(un,1E3),wn=1E3;
function xn(a){var b=qn;if(void 0===b)return"";var c=yb("GTM"),d=yb("TAGGING"),e=yb("HEALTH"),f=fn,g=hn[b]?"":"&es=1",h=rn[b],m=yn(),n=jn,p=kn,q=pn,r=ln,t=mn,u;return[f,g,h,c?"&u="+c:"",d?"&ut="+d:"",e?"&h="+e:"",m,n,p,q,r,t,u,on?"&dl="+encodeURIComponent(on):"",0<nn.length?"&tdp="+nn.join("."):"",Kh.je?"&x="+Kh.je:"",
"&z=0"].join("")}function An(){tn&&(z.clearTimeout(tn),tn=void 0);if(void 0!==qn&&(!hn[qn]||jn||kn))if(sn[qn]||vn.wl()||0>=wn--)O(1),sn[qn]=!0;else{vn.Vl();var a=xn(!0);qc(a);if(mn||on&&0<nn.length){var b=a.replace("/a?","/td?");qc(b)}hn[qn]=!0;on=mn=ln=pn=kn=jn="";nn=[]}}function Bn(){tn||(tn=z.setTimeout(An,500))}function Cn(){2022<=xn().length&&An()}function yn(){return"&tc="+Oe.filter(function(a){return a}).length}
var Dn=function(a,b){if(cn&&!sn[a]&&qn!==a){An();qn=a;ln=jn="";var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";rn[a]="&e="+c+"&eid="+a;Bn()}},En=function(a,b,c){if(cn&&b){var d=Xm(b),e=c+d;if(!sn[a]){a!==qn&&(An(),qn=a);jn=jn?jn+"."+e:"&tr="+e;var f=b["function"];if(!f)throw Error("Error: No function name given for function call.");var g=(Qe[f]?"1":"2")+d;ln=ln?ln+"."+g:"&ti="+g;Bn();Cn()}}},Fn=function(a,b,c){if(cn&&void 0!==a&&!sn[a]){a!==qn&&(An(),qn=a);var d=c+b;kn=kn?kn+"."+d:"&epr="+
d;Bn();Cn()}},Gn=function(a,b,c){},zn=void 0;var Hn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};Ub();Wl()||Rb("iPod");Rb("iPad");!Rb("Android")||Vb()||Ub()||Tb()||Rb("Silk");Vb();!Rb("Safari")||Vb()||(Sb()?0:Rb("Coast"))||Tb()||(Sb()?0:Rb("Edge"))||(Sb()?Qb("Microsoft Edge"):Rb("Edg/"))||(Sb()?Qb("Opera"):Rb("OPR"))||Ub()||Rb("Silk")||Rb("Android")||Xl();var In={},Jn=null,Kn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!Jn){Jn={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=g.concat(h[m].split(""));In[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===Jn[q]&&(Jn[q]=p)}}}for(var r=In[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],A=b[v+2],B=r[x>>2],D=r[(x&3)<<4|y>>4],E=r[(y&15)<<2|A>>6],J=r[A&63];t[w++]=""+B+D+E+J}var H=0,L=u;switch(b.length-v){case 2:H=b[v+1],L=r[(H&15)<<2]||u;case 1:var Q=b[v];t[w]=""+r[Q>>2]+r[(Q&3)<<4|H>>4]+L+u}return t.join("")};var Ln="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Mn(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function Nn(){var a=z.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function On(){var a,b;return null!=(b=null==(a=z.google_tag_data)?void 0:a.uach_promise)?b:null}
function Pn(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}function Qn(){var a=z;if(!Pn(a))return null;var b=Mn(a);if(b.uach_promise)return b.uach_promise;var c=a.navigator.userAgentData.getHighEntropyValues(Ln).then(function(d){null!=b.uach||(b.uach=d);return d});return b.uach_promise=c};
var Rn,Sn=function(){if(Pn(z)&&(Rn=Ua(),!On())){var a=Qn();a&&(a.then(function(){O(95);}),a.catch(function(){O(96)}))}},Un=function(a){var b=Tn.wm,c=function(g,h){try{a(g,h)}catch(m){}},d=Nn();if(d)c(d);else{var e=On();if(e){b=
Math.min(Math.max(isFinite(b)?b:0,0),1E3);var f=z.setTimeout(function(){c.Be||(c.Be=!0,O(106),c(null,Error("Timeout")))},b);e.then(function(g){c.Be||(c.Be=!0,O(104),z.clearTimeout(f),c(g))}).catch(function(g){c.Be||(c.Be=!0,O(105),z.clearTimeout(f),c(null,g))})}else c(null)}},Vn=function(a,b){a&&(b.m[P.g.Wd]=a.architecture,b.m[P.g.Xd]=a.bitness,a.fullVersionList&&(b.m[P.g.Yd]=a.fullVersionList.map(function(c){return encodeURIComponent(c.brand||"")+";"+encodeURIComponent(c.version||"")}).join("|")),
b.m[P.g.Zd]=a.mobile?"1":"0",b.m[P.g.ae]=a.model,b.m[P.g.be]=a.platform,b.m[P.g.ce]=a.platformVersion,b.m[P.g.de]=a.wow64?"1":"0")};function Wn(a,b,c,d){var e,f=Number(null!=a.Fb?a.Fb:void 0);0!==f&&(e=new Date((b||Ua())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,Hb:d}};var Xn;var ao=function(){var a=Yn,b=Zn,c=$n(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){rc(G,"mousedown",d);rc(G,"keyup",d);rc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},bo=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};$n().decorators.push(f)},co=function(a,b,c){for(var d=$n().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var m=g.domains,n=a,p=!!g.sameHost;if(m&&(p||n!==G.location.hostname))for(var q=0;q<m.length;q++)if(m[q]instanceof RegExp){if(m[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(m[q])||p&&0<=m[q].indexOf(n)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ya(e,g.callback())}}return e};function $n(){var a=ic("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var eo=/(.*?)\*(.*?)\*(.*)/,fo=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,go=/^(?:www\.|m\.|amp\.)+/,ho=/([^?#]+)(\?[^#]*)?(#.*)?/;function io(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}var ko=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(tb(String(d))))}var e=b.join("*");return["1",jo(e),e].join("*")};
function jo(a,b){var c=[gc.userAgent,(new Date).getTimezoneOffset(),gc.userLanguage||gc.language,Math.floor(Ua()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Xn)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Xn=d;for(var m=4294967295,n=0;n<c.length;n++)m=m>>>8^Xn[(m^c.charCodeAt(n))&255];return((m^-1)>>>0).toString(36)}
function lo(){return function(a){var b=ej(z.location.href),c=b.search.replace("?",""),d=$i(c,"_gl",!1,!0)||"";a.query=mo(d)||{};var e=cj(b,"fragment").match(io("_gl"));a.fragment=mo(e&&e[3]||"")||{}}}function no(a,b){var c=io(a).exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}return d}
var oo=function(a,b){b||(b="_gl");var c=ho.exec(a);if(!c)return"";var d=c[1],e=no(b,(c[2]||"").slice(1)),f=no(b,(c[3]||"").slice(1));e.length&&(e="?"+e);f.length&&(f="#"+f);return""+d+e+f},po=function(a){var b=lo(),c=$n();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ya(d,e.query),a&&Ya(d,e.fragment));return d},mo=function(a){try{var b=qo(a,3);if(void 0!==b){for(var c={},d=b?b.split("*"):[],e=0;e+1<d.length;e+=2){var f=d[e],g=ub(d[e+1]);c[f]=g}wb("TAGGING",6);return c}}catch(h){wb("TAGGING",
8)}};function qo(a,b){if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=eo.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],m;a:{for(var n=g[2],p=0;p<b;++p)if(n===jo(h,p)){m=!0;break a}m=!1}if(m)return h;wb("TAGGING",7)}}}
function ro(a,b,c,d){function e(p){p=no(a,p);var q=p.charAt(p.length-1);p&&"&"!==q&&(p+="&");return p+n}d=void 0===d?!1:d;var f=ho.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",m=f[3]||"",n=a+"="+b;d?m="#"+e(m.substring(1)):h="?"+e(h.substring(1));return""+g+h+m}
function so(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=co(b,1,c),e=co(b,2,c),f=co(b,3,c);if(Za(d)){var g=ko(d);c?to("_gl",g,a):uo("_gl",g,a,!1)}if(!c&&Za(e)){var h=ko(e);uo("_gl",h,a,!0)}for(var m in f)if(f.hasOwnProperty(m))a:{var n=m,p=f[m],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){uo(n,p,q);break a}if("form"===q.tagName.toLowerCase()){to(n,p,q);break a}}"string"==typeof q&&ro(n,p,q)}}
function uo(a,b,c,d){if(c.href){var e=ro(a,b,c.href,void 0===d?!1:d);Gb.test(e)&&(c.href=e)}}
function to(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var m=G.createElement("input");m.setAttribute("type","hidden");m.setAttribute("name",a);m.setAttribute("value",b);c.appendChild(m)}}else if("post"===d){var n=ro(a,b,c.action);Gb.test(n)&&(c.action=n)}}}
function Yn(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||so(e,e.hostname)}}catch(g){}}function Zn(a){try{if(a.action){var b=cj(ej(a.action),"host");so(a,b)}}catch(c){}}
var vo=function(a,b,c,d){ao();bo(a,b,"fragment"===c?2:1,!!d,!1)},wo=function(a,b){ao();bo(a,[bj(z.location,"host",!0)],b,!0,!0)},xo=function(){var a=G.location.hostname,b=fo.exec(G.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(go,""),m=e.replace(go,""),n;if(!(n=h===m)){var p="."+m;n=h.substring(h.length-p.length,
h.length)===p}return n},yo=function(a,b){return!1===a?!1:a||b||xo()};var zo=["1"],Ao={},Bo={},Do=function(a){return Ao[Co(a)]},Ho=function(a,b){b=void 0===b?!0:b;var c=Co(a.prefix);if(!Ao[c])if(Eo(c,a.path,a.domain)){if(Ai(1)){var d=Bo[Co(a.prefix)];Fo(a,d?d.id:void 0,d?d.wh:void 0)}}else{if(Ai(2)){var e=gj("auiddc");if(e){wb("TAGGING",17);Ao[c]=e;return}}if(b){var f=Co(a.prefix),g=zl();if(0===Go(f,g,a)){var h=ic("google_tag_data",{});h._gcl_au||(h._gcl_au=g)}Eo(c,a.path,a.domain)}}};
function Fo(a,b,c){var d=Co(a.prefix),e=Ao[d];if(e){var f=e.split(".");if(2===f.length){var g=Number(f[1])||0;if(g){var h=e;b&&(h=e+"."+b+"."+(c?c:Math.floor(Ua()/1E3)));Go(d,h,a,1E3*g)}}}}function Go(a,b,c,d){var e=Dl(b,"1",c.domain,c.path),f=Wn(c,d);f.Hb="ad_storage";return vl(a,e,f)}function Eo(a,b,c){var d=Cl(a,b,c,zo,"ad_storage");if(!d)return!1;Io(a,d);return!0}
function Io(a,b){var c=b.split(".");5===c.length?(Ao[a]=c.slice(0,2).join("."),Bo[a]={id:c.slice(2,4).join("."),wh:Number(c[4])||0}):3===c.length?Bo[a]={id:c.slice(0,2).join("."),wh:Number(c[2])||0}:Ao[a]=b}function Co(a){return(a||"_gcl")+"_au"}function Jo(a){Ek()?Ik(function(){zk("ad_storage")?a():Jk(a,"ad_storage")},["ad_storage"]):a()}
function Ko(a){var b=po(!0),c=Co(a.prefix);Jo(function(){var d=b[c];if(d){Io(c,d);var e=1E3*Number(Ao[c].split(".")[1]);if(e){wb("TAGGING",16);var f=Wn(a,e);f.Hb="ad_storage";var g=Dl(d,"1",a.domain,a.path);vl(c,g,f)}}})}function Lo(a,b,c,d,e){e=e||{};var f=function(){var g={},h=Cl(a,e.path,e.domain,zo,"ad_storage");h&&(g[a]=h);return g};Jo(function(){vo(f,b,c,d)})};var Mo=function(a){for(var b=[],c=G.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Qh:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function No(a,b){var c=Mo(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Qh]||(d[c[e].Qh]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),ja:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Qh].push(g)}}return d};var Oo=/^\w+$/,Po=/^[\w-]+$/,Qo={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Ro=function(){if(!gk().h()||!Ek())return!0;var a=Bk("ad_storage");return null==a?!0:!!a},So=function(a,b){Dk("ad_storage")?Ro()?a():Jk(a,"ad_storage"):b?wb("TAGGING",3):Ik(function(){So(a,!0)},["ad_storage"])},Uo=function(a){return To(a).map(function(b){return b.ja})},To=function(a){var b=[];if(!jl(z)||!G.cookie)return b;var c=ml(a,G.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Oe:d.Oe},e++){var f=Vo(c[e]);if(null!=f){var g=f,h=g.version;d.Oe=g.ja;var m=g.timestamp,n=g.labels,p=Ka(b,function(q){return function(r){return r.ja===q.Oe}}(d));p?(p.timestamp=Math.max(p.timestamp,m),p.labels=Wo(p.labels,n||[])):b.push({version:h,ja:d.Oe,timestamp:m,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Xo(b)};function Wo(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Yo(a){return a&&"string"==typeof a&&a.match(Oo)?a:"_gcl"}
var $o=function(){var a=ej(z.location.href),b=cj(a,"query",!1,void 0,"gclid"),c=cj(a,"query",!1,void 0,"gclsrc"),d=cj(a,"query",!1,void 0,"wbraid"),e=cj(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||$i(f,"gclid",!1);c=c||$i(f,"gclsrc",!1);d=d||$i(f,"wbraid",!1)}return Zo(b,c,e,d)},Zo=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Po.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(Po))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},bp=function(a){var b=$o();So(function(){ap(b,!1,a)})};
function ap(a,b,c,d,e){function f(w,x){var y=cp(w,g);y&&(vl(y,x,h),m=!0)}c=c||{};e=e||[];var g=Yo(c.prefix);d=d||Ua();var h=Wn(c,d,!0);h.Hb="ad_storage";var m=!1,n=Math.round(d/1E3),p=function(w){var x=["GCL",n,w];0<e.length&&x.push(e.join("."));return x.join(".")};a.aw&&f("aw",p(a.aw[0]));a.dc&&f("dc",p(a.dc[0]));a.gf&&f("gf",p(a.gf[0]));a.ha&&f("ha",p(a.ha[0]));a.gp&&f("gp",p(a.gp[0]));if(!m&&a.gb){var q=a.gb[0],r=cp("gb",g),t=!1;if(!b)for(var u=To(r),v=0;v<u.length;v++)u[v].ja===q&&u[v].labels&&
0<u[v].labels.length&&(t=!0);t||f("gb",p(q))}}
var ep=function(a,b){var c=po(!0);So(function(){for(var d=Yo(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Qo[f]){var g=cp(f,d),h=c[g];if(h){var m=Math.min(dp(h),Ua()),n;b:{var p=m;if(jl(z))for(var q=ml(g,G.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(dp(q[r])>p){n=!0;break b}n=!1}if(!n){var t=Wn(b,m,!0);t.Hb="ad_storage";vl(g,h,t)}}}}ap(Zo(c.gclid,c.gclsrc),!1,b)})},cp=function(a,b){var c=Qo[a];if(void 0!==c)return b+c},dp=function(a){return 0!==fp(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Vo(a){var b=fp(a.split("."));return 0===b.length?null:{version:b[0],ja:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function fp(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Po.test(a[2])?[]:a}
var gp=function(a,b,c,d,e){if(Ia(b)&&jl(z)){var f=Yo(e),g=function(){for(var h={},m=0;m<a.length;++m){var n=cp(a[m],f);if(n){var p=ml(n,G.cookie,void 0,"ad_storage");p.length&&(h[n]=p.sort()[p.length-1])}}return h};So(function(){vo(g,b,c,d)})}},Xo=function(a){return a.filter(function(b){return Po.test(b.ja)})},hp=function(a,b){if(jl(z)){for(var c=Yo(b.prefix),d={},e=0;e<a.length;e++)Qo[a[e]]&&(d[a[e]]=Qo[a[e]]);So(function(){l(d,function(f,g){var h=ml(c+g,G.cookie,void 0,"ad_storage");h.sort(function(t,
u){return dp(u)-dp(t)});if(h.length){var m=h[0],n=dp(m),p=0!==fp(m.split(".")).length?m.split(".").slice(3):[],q={},r;r=0!==fp(m.split(".")).length?m.split(".")[2]:void 0;q[f]=[r];ap(q,!0,b,n,p)}})})}};function ip(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var jp=function(a){function b(e,f,g){g&&(e[f]=g)}if(Ek()){var c=$o();if(ip(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);wo(function(){return d},3);wo(function(){var e={};return e._up="1",e},1)}}},kp=function(a,b,c,d){var e=[];c=c||{};if(!Ro())return e;var f=To(a);if(!f.length)return e;for(var g=0;g<f.length;g++)-1===(f[g].labels||[]).indexOf(b)?e.push(0):e.push(1);if(d)return e;if(1!==e[0]){var h=f[0],m=f[0].timestamp,n=[h.version,Math.round(m/
1E3),h.ja].concat(h.labels||[],[b]).join("."),p=Wn(c,m,!0);p.Hb="ad_storage";vl(a,n,p)}return e};function lp(a,b){var c=Yo(b),d=cp(a,c);if(!d)return 0;for(var e=To(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}function mp(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b}var np=function(a){var b=Math.max(lp("aw",a),mp(Ro()?No():{}));return Math.max(lp("gb",a),mp(Ro()?No("_gac_gb",!0):{}))>b};var sp=/[A-Z]+/,tp=/\s/,up=function(a){if(k(a)){a=Sa(a);var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(sp.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e]||tp.test(d[e])&&("AW"!==c||1!==e))return;return{id:a,prefix:c,Z:c+"-"+d[0],J:d}}}}},wp=function(a){for(var b={},c=0;c<a.length;++c){var d=up(a[c]);d&&(b[d.id]=d)}vp(b);var e=[];l(b,function(f,g){e.push(g)});return e};
function vp(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.J[1]&&b.push(d.Z)}for(var e=0;e<b.length;++e)delete a[b[e]]};var xp=function(a,b,c,d){var e=oc(),f;if(1===e)a:{var g=Zh;g=g.toLowerCase();for(var h="https://"+g,m="http://"+g,n=1,p=G.getElementsByTagName("script"),q=0;q<p.length&&100>q;q++){var r=p[q].src;if(r){r=r.toLowerCase();if(0===r.indexOf(m)){f=3;break a}1===n&&0===r.indexOf(h)&&(n=2)}}f=n}else f=e;return(2===f||d||"http:"!=z.location.protocol?a:b)+c};var Jp=function(a,b,c){this.target=a;this.eventName=b;this.h=c;this.m={};this.metadata=Vc(c.eventMetadata||{});this.isAborted=!1};Jp.prototype.copyToHitData=function(a,b){var c=T(this.h,a);void 0!==c?this.m[a]=c:void 0!==b&&(this.m[a]=b)};var Kp=function(a,b,c){var d=Ni(a.target.Z);return d&&d.hasOwnProperty(b)?d[b]:c};function Lp(a){return{getDestinationId:function(){return a.target.Z},getEventName:function(){return a.eventName},setEventName:function(b){a.eventName=b},getHitData:function(b){return a.m[b]},setHitData:function(b,c){a.m[b]=c},setHitDataIfNotDefined:function(b,c){void 0===a.m[b]&&(a.m[b]=c)},copyToHitData:function(b,c){a.copyToHitData(b,c)},getMetadata:function(b){return a.metadata[b]},setMetadata:function(b,c){a.metadata[b]=c},isAborted:function(){return a.isAborted},abort:function(){a.isAborted=
!0},getFromEventContext:function(b){return T(a.h,b)},Lf:function(){return a},getHitKeys:function(){return Object.keys(a.m)}}};var Np=function(a){var b=Mp[a.target.Z];if(!a.isAborted&&b)for(var c=Lp(a),d=0;d<b.length;++d){try{b[d](c)}catch(e){a.isAborted=!0}if(a.isAborted)break}},Op=function(a,b){var c=Mp[a];c||(c=Mp[a]=[]);c.push(b)},Mp={};var fq=function(a,b,c,d,e,f,g,h,m,n,p,q){this.eventId=a;this.priorityId=b;this.h=c;this.M=d;this.m=e;this.C=f;this.R=g;this.B=h;this.eventMetadata=m;this.P=n;this.W=p;this.F=q},T=function(a,b,c){if(void 0!==a.h[b])return a.h[b];if(void 0!==a.M[b])return a.M[b];if(void 0!==a.m[b])return a.m[b];cn&&gq(a,a.C[b],a.R[b])&&(O(71),O(79));return void 0!==a.C[b]?a.C[b]:void 0!==a.B[b]?a.B[b]:c},hq=function(a){function b(g){for(var h=Object.keys(g),m=0;m<h.length;++m)c[h[m]]=1}var c={};b(a.h);b(a.M);b(a.m);
b(a.C);if(cn)for(var d=Object.keys(a.R),e=0;e<d.length;e++){var f=d[e];if("event"!==f&&"gtm"!==f&&"tagTypeBlacklist"!==f&&!c.hasOwnProperty(f)){O(71);O(80);break}}return Object.keys(c)},iq=function(a,b,c){function d(m){Uc(m)&&l(m,function(n,p){f=!0;e[n]=p})}var e={},f=!1;c&&1!==c||(d(a.B[b]),d(a.C[b]),d(a.m[b]),d(a.M[b]));c&&2!==c||d(a.h[b]);if(cn){var g=f,h=e;e={};f=!1;c&&1!==c||(d(a.B[b]),d(a.R[b]),d(a.m[b]),d(a.M[b]));c&&2!==c||d(a.h[b]);if(f!==g||gq(a,e,h))O(71),O(81);f=g;e=h}return f?e:void 0},
jq=function(a){var b=[P.g.Pc,P.g.Lc,P.g.Mc,P.g.Nc,P.g.Oc,P.g.Qc,P.g.Rc],c={},d=!1,e=function(h){for(var m=0;m<b.length;m++)void 0!==h[b[m]]&&(c[b[m]]=h[b[m]],d=!0);return d};if(e(a.h)||e(a.M)||e(a.m))return c;e(a.C);if(cn){var f=c,g=d;c={};d=!1;e(a.R);gq(a,c,f)&&(O(71),O(82));c=f;d=g}if(d)return c;e(a.B);return c},gq=function(a,b,c){if(!cn)return!1;try{if(b===c)return!1;var d=Sc(b);if(d!==Sc(c)||!(Uc(b)&&Uc(c)||"array"===d))return!0;if("array"===d){if(b.length!==c.length)return!0;for(var e=0;e<b.length;e++)if(gq(a,
b[e],c[e]))return!0}else{for(var f in c)if(!b.hasOwnProperty(f))return!0;for(var g in b)if(!c.hasOwnProperty(g)||gq(a,b[g],c[g]))return!0}}catch(h){O(72)}return!1},kq=function(a,b){this.pk=a;this.qk=b;this.C={};this.Qi={};this.h={};this.M={};this.m={};this.fe={};this.B={};this.xd=function(){};this.ub=function(){};this.R=!1},lq=function(a,b){a.C=b;return a},mq=function(a,b){a.Qi=b;return a},nq=function(a,b){a.h=b;return a},oq=function(a,b){a.M=b;return a},pq=function(a,b){a.m=b;return a},qq=function(a,
b){a.fe=b;return a},rq=function(a,b){a.B=b||{};return a},sq=function(a,b){a.xd=b;return a},tq=function(a,b){a.ub=b;return a},uq=function(a){a.R=!0;return a},vq=function(a){return new fq(a.pk,a.qk,a.C,a.Qi,a.h,a.M,a.m,a.fe,a.B,a.xd,a.ub,a.R)};function Aq(){return"attribution-reporting"}function Bq(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var Cq=!1;function Dq(){if(Bq("join-ad-interest-group")&&Fa(gc.joinAdInterestGroup))return!0;Cq||(wm(),Cq=!0);return Bq("join-ad-interest-group")&&Fa(gc.joinAdInterestGroup)}
function Eq(a,b){var c=void 0;try{c=G.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>Ua()-d){wb("TAGGING",9);return}}else try{if(50<=G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){wb("TAGGING",10);return}}catch(e){}pc(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:Ua()},c)}function Fq(){return"https://td.doubleclick.net"};var Gq=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),Hq=/^~?[\w-]+(?:\.~?[\w-]+)*$/,Iq=/^\d+\.fls\.doubleclick\.net$/,Jq=/;gac=([^;?]+)/,Kq=/;gacgb=([^;?]+)/,Lq=/;gclaw=([^;?]+)/,Mq=/;gclgb=([^;?]+)/;
function Nq(a,b){if(Iq.test(G.location.host)){var c=G.location.href.match(b);return c&&2==c.length&&c[1].match(Gq)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],g=a[e],h=0;h<g.length;h++)f.push(g[h].ja);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var Oq=function(a,b,c){var d=Ro()?No("_gac_gb",!0):{},e=[],f=!1,g;for(g in d){var h=kp("_gac_gb_"+g,a,b,c);f=f||0!==h.length&&h.some(function(m){return 1===m});e.push(g+":"+h.join(","))}return{Vk:f?e.join(";"):"",Uk:Nq(d,Kq)}};function Pq(a,b,c){if(Iq.test(G.location.host)){var d=G.location.href.match(c);if(d&&2==d.length&&d[1].match(Hq))return[{ja:d[1]}]}else return To((a||"_gcl")+b);return[]}
var Qq=function(a){return Pq(a,"_aw",Lq).map(function(b){return b.ja}).join(".")},Rq=function(a){return Pq(a,"_gb",Mq).map(function(b){return b.ja}).join(".")},Sq=function(a,b){var c=kp((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var Tq=function(){if(Fa(z.__uspapi)){var a="";try{z.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};var Dr={I:{Uh:"ads_conversion_hit",Yf:"container_execute_start",Xh:"container_setup_end",Zf:"container_setup_start",Wh:"container_execute_end",Yh:"container_yield_end",ag:"container_yield_start",Ni:"event_execute_end",Oi:"event_setup_end",ee:"event_setup_start",Pi:"ga4_conversion_hit",he:"page_load",Hm:"pageview",Wb:"snippet_load",aj:"tag_callback_error",bj:"tag_callback_failure",cj:"tag_callback_success",dj:"tag_execute_end",fd:"tag_execute_start"}};var Er=!1,Fr="L S Y E TC HTC".split(" "),Gr=["S","E"],Hr=["TS","TE"];
var hs=function(a){},is=function(a){},Ir=function(a,b,c,d,e,f){var g;g=void 0===g?!1:g;var h={};return h},Jr=function(a){var b=!1;return b},Kr=function(a,b){},js=function(){var a={};return a},as=function(a){a=void 0===a?!0:a;var b={};return b},ks=function(){},ls=function(a,b,c){},ms=function(){var a=Ir("PAGEVIEW",
K.D);if(Tr(a.entryName,"mark")[0]){var b=Bc();b.clearMarks(a.entryName);b.clearMeasures("GTM-"+K.D+":"+Dr.I.he+":to:PAGEVIEW")}var c=Ir(Dr.I.he,K.D);Jr(a)&&Kr(a,c)};var ns=function(a,b){var c=z,d,e=c.GooglebQhCsO;e||(e={},c.GooglebQhCsO=e);d=e;if(d[a])return!1;d[a]=[];d[a][0]=b;return!0};var os=function(a,b,c){var d=am(a,"fmt");if(b){var e=am(a,"random"),f=am(a,"label")||"";if(!e)return!1;var g=Kn(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!ns(g,b))return!1}d&&4!=d&&(a=cm(a,"rfmt",d));var h=cm(a,"fmt",4);nc(h,function(){z.google_noFurtherRedirects&&b&&b.call&&(z.google_noFurtherRedirects=null,b())},void 0,c,G.getElementsByTagName("script")[0].parentElement||void 0);return!0};var Es=function(){this.h={}},Fs=function(a,b,c){null!=c&&(a.h[b]=c)},Gs=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},Is=function(a,b,c,d){};function Ks(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ej(""+c+b).href}}function Ls(){return!!Kh.Bf&&"SGTM_TOKEN"!==Kh.Bf.split("@@").join("")}function Ms(a){for(var b=Ns(),c=da(b),d=c.next();!d.done;d=c.next()){var e=T(a,d.value);if(e)return e}}function Ns(){var a=[];R(113)&&a.push(P.g.nf);a.push(P.g.vc);return a};var Ps=function(a,b,c,d){if(!Os()&&!Nl(a)){var e=c?"/gtag/js":"/gtm.js",f="?id="+encodeURIComponent(a)+"&l="+Kh.ma,g=0===a.indexOf("GTM-");g||(f+="&cx=c");var h=Ls();h&&(f+="&sign="+Kh.Bf);var m=Th||Vh?Ks(b,e+f):void 0;if(!m){var n=Kh.Ve+e;h&&hc&&g&&(n=hc.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0]);m=xp("https://","http://",n+f)}var p=Ol();Hl().container[a]={state:1,context:d,parent:p};nc(m)}},Qs=function(a,b,c){var d;if(d=!Os()){var e=Hl().destination[a];d=!(e&&e.state)}if(d)if(Pl())Hl().destination[a]=
{state:0,transportUrl:b,context:c,parent:Ol()},O(91);else{var f="/gtag/destination?id="+encodeURIComponent(a)+"&l="+Kh.ma+"&cx=c";Ls()&&(f+="&sign="+Kh.Bf);var g=Th||Vh?Ks(b,f):void 0;g||(g=xp("https://","http://",Kh.Ve+f));Hl().destination[a]={state:1,context:c,parent:Ol()};nc(g)}};function Os(){if(Fl()){return!0}return!1};var Rs=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ss={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ts={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Us="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),Xs=function(a){var b=ki("gtm.allowlist")||ki("gtm.whitelist");b&&O(9);Rh&&(b=["google","gtagfl","lcl","zone"]);Vs()&&(Rh?
O(116):O(117),Ws&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728.")));var c=b&&$a(Ra(b),Ss),d=ki("gtm.blocklist")||ki("gtm.blacklist");d||(d=ki("tagTypeBlacklist"))&&O(3);d?O(8):d=[];Vs()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ra(d).indexOf("google")&&O(2);var e=d&&$a(Ra(d),Ts),f={};return function(g){var h=g&&g[oe.Ub];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var m=ci[h]||
[],n=a(h,m);if(b){var p;if(p=n)a:{if(0>c.indexOf(h))if(m&&0<m.length)for(var q=0;q<m.length;q++){if(0>c.indexOf(m[q])){O(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var r=!1;if(d){var t=0<=e.indexOf(h);if(t)r=t;else{var u=Na(e,m||[]);u&&O(10);r=u}}var v=!n||r;v||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(v=Na(e,Us));return f[h]=v}},Ws=!1;
var Vs=function(){return Rs.test(z.location&&z.location.hostname)};var Ys={initialized:11,complete:12,interactive:13},Zs={},$s=Object.freeze((Zs[P.g.Sa]=!0,Zs)),at=0<=G.location.search.indexOf("?gtm_diagnostics=")||0<=G.location.search.indexOf("&gtm_diagnostics="),ct=function(a,b,c){if(cn&&"config"===a&&!(1<up(b).J.length)){var d,e=ic("google_tag_data",{});e.td||(e.td={});d=e.td;var f=Vc(c.C);Vc(c.h,f);var g=[],h;for(h in d){var m=bt(d[h],f);m.length&&(at&&console.log(m),g.push(h))}if(g.length){if(g.length){var n=b+"*"+g.join(".");mn=mn?mn+"!"+n:"&tdc="+n}wb("TAGGING",
Ys[G.readyState]||14)}d[b]=f}};function dt(a,b){var c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=!0);for(var e in a)a.hasOwnProperty(e)&&(c[e]=!0);return c}function bt(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?"":d;if(a===b)return[];var e=function(q,r){var t=r[q];return void 0===t?$s[q]:t},f;for(f in dt(a,b)){var g=(d?d+".":"")+f,h=e(f,a),m=e(f,b),n="object"===Sc(h)||"array"===Sc(h),p="object"===Sc(m)||"array"===Sc(m);if(n&&p)bt(h,m,c,g);else if(n||p||h!==m)c[g]=!0}return Object.keys(c)};var et=!1,ft=0,gt=[];function ht(a){if(!et){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){et=!0;for(var e=0;e<gt.length;e++)I(gt[e])}gt.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function it(){if(!et&&140>ft){ft++;try{G.documentElement.doScroll("left"),ht()}catch(a){z.setTimeout(it,50)}}}var jt=function(a){et?a():gt.push(a)};var kt=function(){this.C=0;this.h={}};kt.prototype.addListener=function(a,b,c){var d=++this.C;this.h[a]=this.h[a]||{};this.h[a][String(d)]={listener:b,rb:c};return d};kt.prototype.m=function(a,b){var c=this.h[a],d=String(b);if(!c||!c[d])return!1;delete c[d];return!0};kt.prototype.B=function(a,b){var c=[];l(this.h[a],function(d,e){0>c.indexOf(e.listener)&&(void 0===e.rb||0<=b.indexOf(e.rb))&&c.push(e.listener)});return c};var lt=function(a,b,c){return{entityType:a,indexInOriginContainer:b,nameInOriginContainer:c,originContainerId:K.D}};function mt(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var ot=function(a,b){this.h=!1;this.C=[];this.M={tags:[]};this.R=!1;this.m=this.B=0;nt(this,a,b)},pt=function(a,b,c,d){if(Oh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Uc(d)&&(e=Vc(d,e));e.id=c;e.status="timeout";return a.M.tags.push(e)-1},qt=function(a,b,c,d){var e=a.M.tags[b];e&&(e.status=c,e.executionTime=d)},rt=function(a){if(!a.h){for(var b=a.C,c=0;c<b.length;c++)b[c]();a.h=!0;a.C.length=0}},nt=function(a,b,c){void 0!==b&&a.Df(b);c&&z.setTimeout(function(){return rt(a)},Number(c))};
ot.prototype.Df=function(a){var b=this,c=Wa(function(){return I(function(){a(K.D,b.M)})});this.h?c():this.C.push(c)};var st=function(a){a.B++;return Wa(function(){a.m++;a.R&&a.m>=a.B&&rt(a)})},tt=function(a){a.R=!0;a.m>=a.B&&rt(a)};var ut={},wt=function(){return z[vt()]},xt=!1;
function vt(){return z.GoogleAnalyticsObject||"ga"}
var Bt=function(a){},Ct=function(a,b){return function(){var c=wt(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),m=0>g.indexOf("&tid="+b);m&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};function Ht(a,b,c,d){var e=Oe[a],f=It(a,b,c,d);if(!f)return null;var g=Ye(e[oe.Zi],c,[]);if(g&&g.length){var h=g[0];f=Ht(h.index,{P:f,W:1===h.pj?b.terminate:f,terminate:b.terminate},c,d)}return f}
function It(a,b,c,d){function e(){if(f[oe.vk])h();else{var w=Ze(f,c,[]),x=w[oe.Nj];if(null!=x)for(var y=0;y<x.length;y++)if(!Vk(x[y])){h();return}var A=pt(c.Xb,String(f[oe.Ub]),Number(f[oe.me]),w[oe.wk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var H=Ua()-J;En(c.id,Oe[a],"5");qt(c.Xb,A,"success",H);R(70)&&ls(c,f,Dr.I.cj);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var H=Ua()-J;En(c.id,Oe[a],"6");qt(c.Xb,A,"failure",H);R(70)&&ls(c,f,Dr.I.bj);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);En(c.id,f,"1");var D=function(){var H=Ua()-J;En(c.id,f,"7");qt(c.Xb,A,"exception",H);R(70)&&ls(c,f,Dr.I.aj);B||(B=!0,h())};if(R(70)){var E=Ir(Dr.I.fd,K.D,c.id,Number(f[oe.me]),c.name,Xm(f));Jr(E)}var J=Ua();try{Xe(w,{event:c,index:a,type:1})}catch(H){D(H)}R(70)&&ls(c,f,Dr.I.dj)}}var f=Oe[a],g=b.P,h=b.W,m=b.terminate;if(c.oh(f))return null;var n=Ye(f[oe.ej],c,[]);if(n&&n.length){var p=n[0],q=Ht(p.index,{P:g,W:h,terminate:m},c,d);if(!q)return null;
g=q;h=2===p.pj?m:q}if(f[oe.Vi]||f[oe.yk]){var r=f[oe.Vi]?Pe:c.lm,t=g,u=h;if(!r[a]){e=Wa(e);var v=Jt(a,r,e);g=v.P;h=v.W}return function(){r[a](t,u)}}return e}function Jt(a,b,c){var d=[],e=[];b[a]=Kt(d,e,c);return{P:function(){b[a]=Lt;for(var f=0;f<d.length;f++)d[f]()},W:function(){b[a]=cu;for(var f=0;f<e.length;f++)e[f]()}}}function Kt(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Lt(a){a()}function cu(a,b){b()};var ru=function(a,b){return 1===arguments.length?qu("set",a):qu("set",a,b)},su=function(a,b){return 1===arguments.length?qu("config",a):qu("config",a,b)},tu=function(a,b,c){c=c||{};c[P.g.Tb]=a;return qu("event",b,c)};function qu(a){return arguments}var uu=function(){this.h=[];this.m=[]};uu.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.m.length;f++)try{this.m[f](e)}catch(g){}};uu.prototype.listen=function(a){this.m.push(a)};
uu.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};uu.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var wu=function(a,b,c){vu().enqueue(a,b,c)},yu=function(){var a=xu;vu().listen(a)};function vu(){var a=Lh.mb;a||(a=new uu,Lh.mb=a);return a}var Gu=function(a){var b=Lh.zones;return b?b.getIsAllowedFn(Jl(),a):function(){return!0}},Hu=function(a){var b=Lh.zones;return b?b.isActive(Jl(),a):!0};var Ku=function(a,b){for(var c=[],d=0;d<Oe.length;d++)if(a[d]){var e=Oe[d];var f=st(b.Xb);try{var g=Ht(d,{P:f,W:f,terminate:f},b,d);if(g){var h=e["function"];if(!h)throw"Error: No function name given for function call.";var m=Qe[h];c.push({Fj:d,yj:(m?m.priorityOverride||0:0)||mt(e[oe.Ub],1)||0,execute:g})}else Iu(d,b),f()}catch(p){f()}}c.sort(Ju);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
var Mu=function(a,b){if(!Lu)return!1;var c=a["gtm.triggers"]&&String(a["gtm.triggers"]),d=Lu.B(a.event,c?String(c).split(","):[]);if(!d.length)return!1;for(var e=0;e<d.length;++e){var f=st(b);try{d[e](a,f)}catch(g){f()}}return!0};function Ju(a,b){var c,d=b.yj,e=a.yj;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Fj,h=b.Fj;f=g>h?1:g<h?-1:0}return f}
function Iu(a,b){if(cn){var c=function(d){var e=b.oh(Oe[d])?"3":"4",f=Ye(Oe[d][oe.Zi],b,[]);f&&f.length&&c(f[0].index);En(b.id,Oe[d],e);var g=Ye(Oe[d][oe.ej],b,[]);g&&g.length&&c(g[0].index)};c(a)}}var Nu=!1,Lu;var Ou=function(){Lu||(Lu=new kt);return Lu};
var Tu=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(R(70)){var e=Ir(Dr.I.ee,K.D,b,void 0,d);Jr(e)}if("gtm.js"===d){if(Nu)return!1;Nu=!0}var f,g=!1;if(Hu(b))f=Gu(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==d)return!1;g=!0;f=Gu(Number.MAX_SAFE_INTEGER)}Dn(b,d);var h=a.eventCallback,m=a.eventTimeout,n={id:b,priorityId:c,name:d,oh:Xs(f),lm:[],uj:function(){O(6);wb("HEALTH",0)},jj:Pu(),kj:Qu(b),Xb:new ot(function(){if(R(70)){var v=Ir(Dr.I.Ni,K.D,b,void 0,
d);if(Jr(v)){var w=Ir(Dr.I.ee,K.D,b,void 0,d);Kr(v,w)}if("gtm.load"===d){var x=Ir(Dr.I.Wh,K.D);if(Jr(x)){var y=Ir(Dr.I.Yf,K.D);Kr(x,y)}ks();}}h&&h.apply(h,[].slice.call(arguments,0))},m)},p=hf(n);g&&(p=Ru(p));if(R(70)){var q=Ir(Dr.I.Oi,K.D,b,void 0,d);if(Jr(q)){var r=
Ir(Dr.I.ee,K.D,b,void 0,d);Kr(q,r)}}var t=Ku(p,n),u=!1;u=Mu(a,n.Xb);tt(n.Xb);"gtm.js"!==d&&"gtm.sync"!==d||Bt(K.D);return Su(p,t)||u};function Qu(a){return function(b){cn&&(Zc(b)||Gn(a,"input",b))}}function Pu(){var a={};a.event=yi("event",1);a.ecommerce=yi("ecommerce",1);a.gtm=yi("gtm");a.eventModel=yi("eventModel");return a}
function Ru(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(Oe[c][oe.Ub]);if(Nh[d]||void 0!==Oe[c][oe.zk]||di[d]||mt(d,2))b[c]=!0}return b}function Su(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Oe[c]&&!Oh[String(Oe[c][oe.Ub])])return!0;return!1}var Vu=function(a,b,c,d){Uu.push("event",[b,a],c,d)},Wu=function(a,b,c,d){Uu.push("get",[a,b],c,d)},Xu=function(){this.status=1;this.M={};this.h={};this.m={};this.R=null;this.C={};this.B=!1},Yu=function(a,b,c,d){var e=Ua();this.type=a;this.m=e;this.fa=b||"";this.h=c;this.messageContext=d},Zu=function(){this.m={};this.B={};this.h=[]},$u=function(a,b){var c=up(b);return a.m[c.Z]=a.m[c.Z]||new Xu},av=function(a,b,c,d){if(d.fa){var e=$u(a,d.fa),f=e.R;if(f){var g=Vc(c),h=Vc(e.M[d.fa]),m=Vc(e.C),n=Vc(e.h),
p=Vc(a.B),q={};if(cn)try{q=Vc(hi)}catch(v){O(72)}var r=up(d.fa).prefix,t=function(v){Fn(d.messageContext.eventId,r,v);var w=g[P.g.nc];w&&I(w)},u=vq(tq(sq(rq(pq(oq(qq(nq(mq(lq(new kq(d.messageContext.eventId,d.messageContext.priorityId),g),h),m),n),p),q),d.messageContext.eventMetadata),function(){if(t){var v=t;t=void 0;v("2")}}),function(){if(t){var v=t;t=void 0;v("3")}}));try{Fn(d.messageContext.eventId,r,"1"),ct(d.type,d.fa,u),f(d.fa,b,d.m,u)}catch(v){Fn(d.messageContext.eventId,r,"4")}}}};
Zu.prototype.register=function(a,b,c){var d=$u(this,a);3!==d.status&&(d.R=b,d.status=3,c&&(Vc(d.h,c),d.h=c),this.flush())};Zu.prototype.push=function(a,b,c,d){if(void 0!==c){if(!up(c))return;if(c){var e=up(c);e&&1===$u(this,c).status&&($u(this,c).status=2,this.push("require",[{}],e.Z,{}))}$u(this,c).B&&(d.deferrable=!1)}this.h.push(new Yu(a,c,b,d));d.deferrable||this.flush()};
Zu.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.h.length;){var f=this.h[0];if(f.messageContext.deferrable)!f.fa||$u(this,f.fa).B?(f.messageContext.deferrable=!1,this.h.push(f)):c.push(f),this.h.shift();else{var g=void 0;switch(f.type){case "require":g=$u(this,f.fa);if(3!==g.status&&!a){this.h.push.apply(this.h,c);return}break;case "set":l(f.h[0],function(r,t){Vc(cb(r,t),b.B)});break;case "config":g=$u(this,f.fa);e.Ib={};l(f.h[0],function(r){return function(t,u){Vc(cb(t,u),r.Ib)}}(e));
var h=!!e.Ib[P.g.dd];delete e.Ib[P.g.dd];var m=up(f.fa),n=m.Z===m.id;h||(n?g.C={}:g.M[f.fa]={});g.B&&h||av(this,P.g.wa,e.Ib,f);g.B=!0;n?Vc(e.Ib,g.C):(Vc(e.Ib,g.M[f.fa]),O(70));d=!0;break;case "event":g=$u(this,f.fa);e.Ne={};l(f.h[0],function(r){return function(t,u){Vc(cb(t,u),r.Ne)}}(e));av(this,f.h[1],e.Ne,f);break;case "get":g=$u(this,f.fa);var p={},q=(p[P.g.Ra]=f.h[0],p[P.g.jb]=f.h[1],p);av(this,P.g.Ka,q,f)}this.h.shift();bv(this,f)}e={Ib:e.Ib,Ne:e.Ne}}this.h.push.apply(this.h,c);d&&this.flush()};
var bv=function(a,b){if("require"!==b.type)if(b.fa)for(var c=$u(a,b.fa).m[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.m)if(a.m.hasOwnProperty(e)){var f=a.m[e];if(f&&f.m)for(var g=f.m[b.type]||[],h=0;h<g.length;h++)g[h]()}},cv=function(a,b){var c=Uu,d=Vc(b);Vc($u(c,a).h,d);$u(c,a).h=d},Uu=new Zu;var qf;var dv={},ev={},fv=function(a){for(var b=[],c=[],d={},e=0;e<a.length;d={Se:d.Se,Pe:d.Pe},e++){var f=a[e];if(0<=f.indexOf("-"))d.Se=up(f),d.Se&&(Ka(Kl(),function(p){return function(q){return p.Se.Z===q}}(d))?b.push(f):c.push(f));else{var g=dv[f]||[];d.Pe={};g.forEach(function(p){return function(q){return p.Pe[q]=!0}}(d));for(var h=Jl(),m=0;m<h.length;m++)if(d.Pe[h[m]]){b=b.concat(Kl());break}var n=ev[f]||[];n.length&&(b=b.concat(n))}}return{Hl:b,Kl:c}},gv=function(a){l(dv,function(b,c){var d=c.indexOf(a);
0<=d&&c.splice(d,1)})},hv=function(a){l(ev,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var iv="HA GF G UA AW DC MC".split(" "),jv=!1,kv=!1;function lv(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:ei()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}function mv(a){return!!(a&&a.parent&&a.context&&1===a.context.source&&0!==a.parent.ctid.indexOf("GTM-"))}var nv=void 0,ov=void 0,pv=!1;
function qv(a){for(var b=Ns(),c=da(b),d=c.next();!d.done;d=c.next()){var e=d.value,f=a&&a[e]||Uu.B[e];if(f)return f}}
var rv={config:function(a,b){var c=lv(a,b);if(!(2>a.length)&&k(a[1])){var d={};if(2<a.length){if(void 0!=a[2]&&!Uc(a[2])||3<a.length)return;d=a[2]}var e=up(a[1]);if(e){if(!pv){var f;a:{if(!K.wf){var g=Ll(Ol()),h;if(mv(g))for(var m=g.parent;m;){h=m.isDestination;var n=Ll(m);if(!mv(n)){f={Yl:n,Gl:h};break a}m=n.parent}}f=void 0}var p=f;p&&(nv=p.Yl,ov=p.Gl);pv=!0}Dn(c.eventId,"gtag.config");var q=e.Z,r=e.id!==q;if(r?-1===Kl().indexOf(q):-1===Jl().indexOf(q)){if(!R(61)||!d[P.g.lb]){var t=qv(d);r?Qs(q,
t,{source:2,fromContainerExecution:b.fromContainerExecution}):(void 0!==nv&&-1!==nv.containers.indexOf(q)&&O(129),Ps(q,t,!0,{source:2,fromContainerExecution:b.fromContainerExecution}))}}else{if(Qh&&!r&&!d[P.g.dd]){var u=kv;kv=!0;if(u)return}jv||O(43);if(!b.noTargetGroup)if(r){hv(e.id);var v=e.id,w=d[P.g.Pd]||"default";w=String(w).split(",");for(var x=0;x<w.length;x++){var y=ev[w[x]]||[];ev[w[x]]=y;0>y.indexOf(v)&&y.push(v)}}else{gv(e.id);var A=e.id,B=d[P.g.Pd]||"default";B=B.toString().split(",");
for(var D=0;D<B.length;D++){var E=dv[B[D]]||[];dv[B[D]]=E;0>E.indexOf(A)&&E.push(A)}}delete d[P.g.Pd];var J=b.eventMetadata||{};J.hasOwnProperty("is_external_event")||(J.is_external_event=!b.fromContainerExecution);b.eventMetadata=J;delete d[P.g.nc];var H=r?[e.id]:Kl();nv&&(O(128),ov&&O(130));for(var L=0;L<H.length;L++){var Q=Vc(b);Uu.push("config",[d],H[L],Q)}}}}},consent:function(a,b){if(3===a.length){O(39);var c=lv(a,b),d=a[1];"default"===d?Rk(a[2]):"update"===d?Sk(a[2],c):"declare"===d?b.fromContainerExecution&&
Qk(a[2]):"core_platform_services"===d&&Tk(a[2])}},event:function(a,b){var c=a[1];if(!(2>a.length)&&k(c)){var d;if(2<a.length){if(!Uc(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},g=(f.event=c,f);e&&(g.eventModel=Vc(e),e[P.g.nc]&&(g.eventCallback=e[P.g.nc]),e[P.g.Kd]&&(g.eventTimeout=e[P.g.Kd]));var h=lv(a,b),m=h.eventId,n=h.priorityId;g["gtm.uniqueEventId"]=m;n&&(g["gtm.priorityId"]=n);if("optimize.callback"===c)return g.eventModel=g.eventModel||{},g;var p;var q=d,r=q&&q[P.g.Tb];void 0===
r&&(r=ki(P.g.Tb,2),void 0===r&&(r="default"));if(k(r)||Ia(r)){var t=r.toString().replace(/\s+/g,"").split(","),u=fv(t),v=u.Hl,w=u.Kl;if(w.length)for(var x=qv(q),y=0;y<w.length;y++){var A=up(w[y]);A&&Qs(A.Z,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=wp(v)}else p=void 0;var B=p;if(B){Dn(m,c);for(var D=[],E=0;E<B.length;E++){var J=B[E],H=Vc(b);if(-1!==iv.indexOf(J.prefix)){var L=Vc(d),Q=H.eventMetadata||{};Q.hasOwnProperty("is_external_event")||(Q.is_external_event=!H.fromContainerExecution);
H.eventMetadata=Q;delete L[P.g.nc];Vu(c,L,J.id,H)}D.push(J.id)}g.eventModel=g.eventModel||{};0<B.length?g.eventModel[P.g.Tb]=D.join():delete g.eventModel[P.g.Tb];jv||O(43);R(101)&&void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:g}}},get:function(a,b){O(53);if(4===a.length&&k(a[1])&&k(a[2])&&Fa(a[3])){var c=up(a[1]),d=String(a[2]),e=a[3];if(c){jv||O(43);var f=qv();if(!Ka(Kl(),function(h){return c.Z===h}))Qs(c.Z,f,{source:4,fromContainerExecution:b.fromContainerExecution});
else if(-1!==iv.indexOf(c.prefix)){lv(a,b);var g={};Kk(Vc((g[P.g.Ra]=d,g[P.g.jb]=e,g)));Wu(d,function(h){I(function(){return e(h)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){jv=!0;var c=lv(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(a){if(3===a.length&&k(a[1])&&Fa(a[2])){var b=a[1],c=a[2],d=qf.m;d.h[b]?d.h[b].push(c):d.h[b]=[c];
if(O(74),"all"===a[1]){O(75);var e=!1;try{e=a[2](K.D,"unknown",{})}catch(f){}e||O(76)}}else{O(73);}},set:function(a,b){var c;2==a.length&&Uc(a[1])?c=Vc(a[1]):3==a.length&&k(a[1])&&(c={},Uc(a[2])||Ia(a[2])?c[a[1]]=Vc(a[2]):c[a[1]]=a[2]);if(c){var d=lv(a,b),e=d.eventId,f=d.priorityId;Vc(c);var g=Vc(c);Uu.push("set",[g],void 0,
b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);R(30)&&delete c.event;b.overwriteModelFields=!0;return c}}},sv={policy:!0};var tv=function(a){var b=z[Kh.ma].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},uv=function(a){var b=z[Kh.ma],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var vv=!1,wv=[];function xv(){if(!vv){vv=!0;for(var a=0;a<wv.length;a++)I(wv[a])}}var yv=function(a){vv?I(a):wv.push(a)};var Pv=function(a){if(Ov(a))return a;this.h=a};Pv.prototype.getUntrustedMessageValue=function(){return this.h};var Ov=function(a){return!a||"object"!==Sc(a)||Uc(a)?!1:"getUntrustedMessageValue"in a};Pv.prototype.getUntrustedMessageValue=Pv.prototype.getUntrustedMessageValue;var Qv=0,Rv={},Sv=[],Tv=[],Uv=!1,Vv=!1;function Wv(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}var Xv=function(a){return z[Kh.ma].push(a)},Yv=function(a,b,c){a.eventCallback=b;c&&(a.eventTimeout=c);return Xv(a)},Zv=function(a,b){var c=Lh[Kh.ma],d=c?c.subscribers:1,e=0,f=!1,g=void 0;b&&(g=z.setTimeout(function(){f||(f=!0,a());g=void 0},b));return function(){++e===d&&(g&&(z.clearTimeout(g),g=void 0),f||(a(),f=!0))}};
function $v(a,b){var c=a._clear||b.overwriteModelFields;l(a,function(e,f){"_clear"!==e&&(c&&wi(e),wi(e,f))});$h||($h=a["gtm.start"]);var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=ei(),a["gtm.uniqueEventId"]=d,wi("gtm.uniqueEventId",d));return Tu(a)}
function aw(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Oa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function bw(){var a;if(Tv.length)a=Tv.shift();else if(Sv.length)a=Sv.shift();else return;var b;var c=a;if(Uv||!aw(c.message))b=c;else{Uv=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=ei());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},g={},h={message:(g.event="gtm.init",g["gtm.uniqueEventId"]=d-1,g),messageContext:{eventId:d-1}};Sv.unshift(h,c);if(cn&&K.D){var m,n=Ll(Ol());m=n&&n.context;
var p,q=ej(z.location.href);p=q.hostname+q.pathname;var r=m&&m.fromContainerExecution,t=m&&m.source,u=K.D,v=K.Lb,w=K.wf;on||(on=p);nn.push(u+";"+v+";"+(r?1:0)+";"+(t||0)+";"+(w?1:0))}b=f}return b}
function cw(){for(var a=!1,b;!Vv&&(b=bw());){Vv=!0;delete hi.eventModel;ji();var c=b,d=c.message,e=c.messageContext;if(null==d)Vv=!1;else{e.fromContainerExecution&&xi();try{if(Fa(d))try{d.call(li)}catch(x){}else if(Ia(d)){var f=d;if(k(f[0])){var g=f[0].split("."),h=g.pop(),m=f.slice(1),n=ki(g.join("."),2);if(null!=n)try{n[h].apply(n,m)}catch(x){}}}else{var p=void 0,q=!1;if(Oa(d)){a:{if(d.length&&k(d[0])){var r=rv[d[0]];if(r&&(!e.fromContainerExecution||!sv[d[0]])){p=r(d,e);break a}}p=void 0}(q=p&&
"set"===d[0]&&!!p.event)&&O(101)}else p=d;if(p){var t=$v(p,e);a=t||a;q&&t&&O(113)}}}finally{e.fromContainerExecution&&ji(!0);var u=d["gtm.uniqueEventId"];if("number"===typeof u){for(var v=Rv[String(u)]||[],w=0;w<v.length;w++)Tv.push(dw(v[w]));v.length&&Tv.sort(Wv);delete Rv[String(u)];u>Qv&&(Qv=u)}Vv=!1}}}return!a}function ew(){if(R(70)){var a=Ir(Dr.I.Yf,K.D);Jr(a);if(fw()){var b=Ir(Dr.I.Yh,K.D);if(Jr(b)){var c=Ir(Dr.I.ag,K.D);Kr(b,c)}}}var d=cw();try{tv(K.D)}catch(e){}return d}
function xu(a){if(Qv<a.notBeforeEventId){var b=String(a.notBeforeEventId);Rv[b]=Rv[b]||[];Rv[b].push(a)}else Tv.push(dw(a)),Tv.sort(Wv),I(function(){Vv||cw()})}function dw(a){return{message:a.message,messageContext:a.messageContext}}
var gw=function(){function a(g){var h={};if(Ov(g)){var m=g;g=Ov(m)?m.getUntrustedMessageValue():void 0;h.fromContainerExecution=!0}return{message:g,messageContext:h}}var b=ic(Kh.ma,[]),c=Lh[Kh.ma]=Lh[Kh.ma]||{};!0===c.pruned&&O(83);Rv=vu().get();yu();jt(function(){if(!c.gtmDom){c.gtmDom=!0;var g={};b.push((g.event="gtm.dom",g))}});yv(function(){if(!c.gtmLoad){c.gtmLoad=!0;var g={};b.push((g.event="gtm.load",g))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var g;if(0<Lh.SANDBOXED_JS_SEMAPHORE){g=
[];for(var h=0;h<arguments.length;h++)g[h]=new Pv(arguments[h])}else g=[].slice.call(arguments,0);var m=g.map(function(r){return a(r)});Sv.push.apply(Sv,m);var n=d.apply(b,g),p=Math.max(100,Number("1000")||300);if(this.length>p)for(O(4),c.pruned=!0;this.length>p;)this.shift();var q="boolean"!==typeof n||n;return cw()&&q};var e=b.slice(0).map(function(g){return a(g)});Sv.push.apply(Sv,e);if(fw()){if(R(70)){var f=Ir(Dr.I.ag,K.D);Jr(f)}I(ew)}},fw=function(){var a=!0;return a};function hw(a){if(null==a||0===a.length)return!1;var b=Number(a),c=Ua();return b<c+3E5&&b>c-9E5}function iw(a){return a&&0===a.indexOf("pending:")?hw(a.substr(8)):!1};var Te={};Te.vf=new String("undefined");
var Gw=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":yc(a,"className"),"gtm.elementId":a["for"]||tc(a,"id")||"","gtm.elementTarget":a.formTarget||yc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||yc(a,"href")||a.src||a.code||a.codebase||"";return d},Hw=function(a){Lh.hasOwnProperty("autoEventsSettings")||(Lh.autoEventsSettings={});var b=Lh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Iw=function(a,b,c){Hw(a)[b]=c},Jw=function(a,b,c,d){var e=Hw(a),f=Va(e,b,d);e[b]=c(f)},Kw=function(a,b,c){var d=Hw(a);return Va(d,b,c)},Lw=function(a){return"string"===typeof a?a:String(ei())};
var Mw=["input","select","textarea"],Nw=["button","hidden","image","reset","submit"],Ow=function(a){var b=a.tagName.toLowerCase();return 0>Mw.indexOf(b)||"input"===b&&0<=Nw.indexOf(a.type.toLowerCase())?!1:!0},Pw=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):wc(a,["form"],100)},Qw=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Ow(g)){if(g.dataset[c]===d)return f;f++}}return 0};var Rw=!!z.MutationObserver,Sw=void 0,Tw=function(a){if(!Sw){var b=function(){var c=G.body;if(c)if(Rw)(new MutationObserver(function(){for(var e=0;e<Sw.length;e++)I(Sw[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;rc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Sw.length;e++)I(Sw[e])}))})}};Sw=[];G.body?b():I(b)}Sw.push(a)};
var dx=function(a,b,c){function d(){var g=a();f+=e?(Ua()-e)*g.playbackRate/1E3:0;e=Ua()}var e=0,f=0;return{createEvent:function(g,h,m){var n=a(),p=n.hh,q=void 0!==m?Math.round(m):void 0!==h?Math.round(n.hh*h):Math.round(n.nj),r=void 0!==h?Math.round(100*h):0>=p?0:Math.round(q/p*100),t=G.hidden?!1:.5<=Ri(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=Gw(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=n.url;v["gtm.videoTitle"]=n.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(q);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=t;return v},Cj:function(){e=Ua()},gd:function(){d()}}};var ex=z.clearTimeout,fx=z.setTimeout,V=function(a,b,c,d){if(Fl()){b&&I(b)}else return nc(a,b,c,d)},gx=function(){return new Date},hx=function(){return z.location.href},ix=function(a){return cj(ej(a),"fragment")},jx=function(a){return dj(ej(a))},kx=function(a,b){return ki(a,b||2)},lx=function(a,b,c){return b?Yv(a,b,c):Xv(a)},mx=function(a,b){z[a]=b},X=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},
nx=function(a,b,c){return ml(a,b,void 0===c?!0:!!c)},ox=function(a,b,c){return 0===vl(a,b,c)},px=function(a,b){if(Fl()){b&&I(b)}else pc(a,b)},qx=function(a){return!!Kw(a,"init",!1)},rx=function(a){Iw(a,"init",!0)},sx=function(a,b,c){cn&&(Zc(a)||Gn(c,b,a))};function Qx(a,b){function c(g){var h=ej(g),m=cj(h,"protocol"),n=cj(h,"host",!0),p=cj(h,"port"),q=cj(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Rx(a){return Sx(a)?1:0}
function Sx(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=Vc(a,{});Vc({arg1:c[d],any_of:void 0},e);if(Rx(e))return!0}return!1}switch(a["function"]){case "_cn":return Qf(b,c);case "_css":var f;a:{if(b)try{for(var g=0;g<Mf.length;g++){var h=Mf[g];if(b[h]){f=b[h](c);break a}}}catch(m){}f=!1}return f;case "_ew":return Nf(b,c);case "_eq":return Rf(b,c);case "_ge":return Sf(b,c);case "_gt":return Uf(b,c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));
case "_le":return Tf(b,c);case "_lt":return Vf(b,c);case "_re":return Pf(b,c,a.ignore_case);case "_sw":return Wf(b,c);case "_um":return Qx(b,c)}return!1};function Tx(a,b){var c=this;}Tx.N="addConsentListener";var Ux;var Vx=function(a){for(var b=0;b<a.length;++b)if(Ux)try{a[b]()}catch(c){O(77)}else a[b]()};function Wx(a,b,c){var d=this,e;M(F(this),["eventName:!string","callback:!Fn","triggerId:?string"],arguments),Vx([function(){return N(d,"listen_data_layer",a)}]),e=Ou().addListener(a,Xc(b),c);return e}Wx.K="internal.addDataLayerEventListener";function Xx(a,b,c){}Xx.N="addDocumentEventListener";function Yx(a,b,c,d){}Yx.N="addElementEventListener";function Zx(a){}Zx.N="addEventCallback";
function cy(a){}cy.K="internal.addFormAbandonmentListener";var dy={},ey=[],fy={},gy=0,hy=0;
var jy=function(){rc(G,"change",function(a){for(var b=0;b<ey.length;b++)ey[b](a)});rc(z,"pagehide",function(){iy()})},iy=function(){l(fy,function(a,b){var c=dy[a];c&&l(b,function(d,e){ky(e,c)})})},ny=function(a,b){var c=""+a;if(dy[c])dy[c].push(b);else{var d=[b];dy[c]=d;var e=fy[c];e||(e={},fy[c]=e);ey.push(function(f){var g=f.target;if(g){var h=Pw(g);if(h){var m=ly(h,"gtmFormInteractId",function(){return gy++}),n=ly(g,"gtmFormInteractFieldId",function(){return hy++}),p=e[m];p?(p.Ha&&(z.clearTimeout(p.Ha),
p.sa.dataset.gtmFormInteractFieldId!==n&&ky(p,d)),p.sa=g,my(p,d,a)):(e[m]={form:h,sa:g,Yb:0,Ha:null},my(e[m],d,a))}}})}},ky=function(a,b){var c=a.form,d=a.sa,e=Gw(c,"gtm.formInteract"),f=c.action;f&&f.tagName&&(f=c.cloneNode(!1).action);e["gtm.elementUrl"]=f;e["gtm.interactedFormName"]=c.getAttribute("name");e["gtm.interactedFormLength"]=c.length;e["gtm.interactedFormField"]=d;e["gtm.interactedFormFieldPosition"]=Qw(c,d,"gtmFormInteractFieldId");e["gtm.interactSequenceNumber"]=a.Yb;e["gtm.interactedFormFieldId"]=
d.id;e["gtm.interactedFormFieldName"]=d.getAttribute("name");e["gtm.interactedFormFieldType"]=d.getAttribute("type");for(var g=0;g<b.length;g++)b[g](e);a.Yb++;a.Ha=null},my=function(a,b,c){c?a.Ha=z.setTimeout(function(){ky(a,b)},c):ky(a,b)},ly=function(a,b,c){var d=a.dataset[b];if(d)return d;d=String(c());return a.dataset[b]=d};
function oy(a,b){M(F(this),["callback:!Fn","options:?*"],arguments);var c=Xc(b)||{},d=Number(c.interval);if(!d||0>d)d=0;var e=Xc(a),f;Kw("pix.fil","init")?f=Kw("pix.fil","reg"):(jy(),f=ny,Iw("pix.fil","reg",ny),Iw("pix.fil","init",!0));f(d,e);}oy.K="internal.addFormInteractionListener";
var qy=function(a,b,c){var d=Gw(a,"gtm.formSubmit");d["gtm.interactedFormName"]=a.getAttribute("name");d["gtm.interactedFormLength"]=a.length;d["gtm.willOpenInCurrentWindow"]=!b&&py(a);c&&c.value&&(d["gtm.formSubmitButtonText"]=c.value);var e=a.action;e&&e.tagName&&(e=a.cloneNode(!1).action);d["gtm.elementUrl"]=e;return d},ry=function(a,b){var c=Kw("pix.fsl",a?"nv.mwt":"mwt",0);z.setTimeout(b,c)},sy=function(a,b,c,d,e){var f=Kw("pix.fsl",c?"nv.mwt":"mwt",0),g=Kw("pix.fsl",c?"runIfCanceled":"runIfUncanceled",
[]);if(!g.length)return!0;var h=qy(a,c,e);O(121);"https://www.facebook.com/tr/"===h["gtm.elementUrl"]&&O(122);if(R(79)&&"https://www.facebook.com/tr/"===h["gtm.elementUrl"])return!0;if(d&&f){for(var m=fb(b,g.length),n=0;n<g.length;++n)g[n](h,m);return m.done}for(var p=0;p<g.length;++p)g[p](h,function(){});return!0},ty=function(){var a=[],b=function(c){return Ka(a,function(d){return d.form===c})};return{store:function(c,d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(c){var d=b(c);
return d?d.button:null}}},py=function(a){var b=yc(a,"target");return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0},uy=function(){var a=ty(),b=HTMLFormElement.prototype.submit;rc(G,"click",function(c){var d=c.target;if(d&&(d=wc(d,["button","input"],100))&&("submit"==d.type||"image"==d.type)&&d.name&&tc(d,"value")){var e=Pw(d);e&&a.store(e,d)}},!1);rc(G,"submit",function(c){var d=c.target;if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=py(d)&&!e,g=a.get(d),h=!0,m=function(){if(h){var n;
g&&(n=G.createElement("input"),n.type="hidden",n.name=g.name,n.value=g.value,d.appendChild(n));b.call(d);n&&d.removeChild(n)}};if(sy(d,m,e,f,g))return h=!1,c.returnValue;ry(e,m);e||(c.preventDefault&&c.preventDefault(),c.returnValue=!1);return!1},!1);HTMLFormElement.prototype.submit=function(){var c=this,d=!0,e=function(){d&&b.call(c)};sy(c,e,!1,py(c))?(b.call(c),d=!1):ry(!1,e)}};
function vy(a,b){M(F(this),["callback:!Fn","options:?DustMap"],arguments);var c=Xc(b)||{},d=c.waitForCallbacks,e=c.waitForCallbacksTimeout,f=c.checkValidation;e=e&&0<e?e:2E3;var g=Xc(a);if(d){var h=function(n){return Math.max(e,n)};Jw("pix.fsl","mwt",h,0);f||Jw("pix.fsl","nv.mwt",h,0)}var m=function(n){n.push(g);return n};Jw("pix.fsl","runIfUncanceled",m,[]);f||Jw("pix.fsl","runIfCanceled",m,[]);Kw("pix.fsl","init")||(uy(),Iw("pix.fsl",
"init",!0));}vy.K="internal.addFormSubmitListener";
function Ay(a){}Ay.K="internal.addGaSendListener";var By={},Cy=[];
var Jy=function(a,b){};
Jy.K="internal.addHistoryChangeListener";function Ky(a,b,c){}Ky.N="addWindowEventListener";function Ly(a,b){return!0}Ly.N="aliasInWindow";function My(a,b,c){}My.K="internal.appendRemoteConfigParameter";function Ny(){var a=2;return a};function Oy(a,b){var c;return c}Oy.N="callInWindow";function Py(a){}Py.N="callLater";function Qy(a){}Qy.K="callOnDomReady";function Ry(a){}Ry.K="callOnWindowLoad";function Sy(a){var b;return b}Sy.K="internal.computeGtmParameter";function Ty(a,b){var c;var d=Wc(c,this.h,Ny());void 0===d&&void 0!==c&&O(45);return d}Ty.N="copyFromDataLayer";function Uy(a){var b;return b}Uy.N="copyFromWindow";function Vy(a,b){var c;M(F(this),["preHit:!DustMap","dustOptions:?DustMap"],arguments);var d=Xc(b)||{},e=Xc(a,this.h,1).Lf(),f=new Jp(e.target,e.eventName,e.h);d.omitHitData||Vc(e.m,f.m);d.omitMetadata?f.metadata={}:Vc(e.metadata,f.metadata);f.isAborted=e.isAborted;c=Wc(Lp(f),this.h,1);return c}Vy.K="internal.copyPreHit";function Wy(a,b){var c=null,d=Ny();return Wc(c,this.h,d)}Wy.N="createArgumentsQueue";function Xy(a){var b;return Wc(b,this.h,
Ny())}Xy.N="createQueue";function Yy(a){if(!a)return{};var b=a.Rk;return lt(b.type,b.index,b.name)}function Zy(a){return a?{originatingEntity:Yy(a)}:{}};function $y(a){}$y.K="internal.declareConsentState";var az={},bz=[],cz={},dz=0,ez=0;
var gz=function(){l(cz,function(a,b){var c=az[a];c&&l(b,function(d,e){fz(e,c)})})},jz=function(a,b){var c=""+b;if(az[c])az[c].push(a);else{var d=[a];az[c]=d;var e=cz[c];e||(e={},cz[c]=e);bz.push(function(f){var g=f.target;if(g){var h=Pw(g);if(h){var m=hz(h,"gtmFormInteractId",function(){return dz++}),n=hz(g,"gtmFormInteractFieldId",function(){return ez++});if(null!==m&&null!==n){var p=e[m];p?(p.Ha&&(z.clearTimeout(p.Ha),p.sa.getAttribute("data-gtm-form-interact-field-id")!==n&&fz(p,d)),p.sa=g,iz(p,
d,b)):(e[m]={form:h,sa:g,Yb:0,Ha:null},iz(e[m],d,b))}}}})}},fz=function(a,b){var c=a.form,d=a.sa,e=Gw(c,"gtm.formInteract",b),f=c.action;f&&f.tagName&&(f=c.cloneNode(!1).action);e["gtm.elementUrl"]=f;e["gtm.interactedFormName"]=null!=c.getAttribute("name")?c.getAttribute("name"):void 0;e["gtm.interactedFormLength"]=c.length;e["gtm.interactedFormField"]=d;e["gtm.interactedFormFieldId"]=d.id;e["gtm.interactedFormFieldName"]=null!=d.getAttribute("name")?d.getAttribute("name"):void 0;e["gtm.interactedFormFieldPosition"]=
Qw(c,d,"gtmFormInteractFieldId");e["gtm.interactedFormFieldType"]=null!=d.getAttribute("type")?d.getAttribute("type"):void 0;e["gtm.interactSequenceNumber"]=a.Yb;Xv(e);a.Yb++;a.Ha=null},iz=function(a,b,c){c?a.Ha=z.setTimeout(function(){fz(a,b)},c):fz(a,b)},hz=function(a,b,c){var d;try{if(d=a.dataset[b])return d;d=String(c());a.dataset[b]=d}catch(e){d=null}return d};
function kz(a,b){var c=this;M(F(this),["options:?DustMap","triggerId:?*"],arguments);Vx([function(){return N(c,"process_dom_events","document","change")},function(){return N(c,"process_dom_events","window","pagehide")}]);b=Lw(b);var d=a&&Number(a.get("interval"));0<d&&isFinite(d)||(d=0);if(Kw("fil","init",!1)){var e=Kw("fil","reg");if(e)e(b,d);else throw Error("Failed to register trigger: "+b);}else rc(G,"change",function(f){for(var g=
0;g<bz.length;g++)bz[g](f)}),rc(z,"pagehide",function(){gz()}),jz(b,d),Iw("fil","reg",jz),Iw("fil","init",!0);return b}kz.K="internal.enableAutoEventOnFormInteraction";
var lz=function(a,b,c,d,e){var f=Kw("fsl",c?"nv.mwt":"mwt",0),g;g=c?Kw("fsl","nv.ids",[]):Kw("fsl","ids",[]);if(!g.length)return!0;var h=Gw(a,"gtm.formSubmit",g),m=a.action;m&&m.tagName&&(m=a.cloneNode(!1).action);O(121);"https://www.facebook.com/tr/"===m&&O(122);if(R(79)&&"https://www.facebook.com/tr/"===m)return!0;h["gtm.elementUrl"]=m;null!=a.getAttribute("name")&&(h["gtm.interactedFormName"]=a.getAttribute("name"));e&&(h["gtm.formSubmitElement"]=e,h["gtm.formSubmitElementText"]=e.value);if(d&&
f){if(!Yv(h,Zv(b,f),f))return!1}else Yv(h,function(){},f||2E3);return!0},mz=function(){var a=[],b=function(c){return Ka(a,function(d){return d.form===c})};return{store:function(c,d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(c){var d=b(c);return d?d.button:null}}},nz=function(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0},oz=function(){var a=mz(),b=HTMLFormElement.prototype.submit;rc(G,"click",function(c){var d=c.target;if(d&&(d=wc(d,["button","input"],
100))&&("submit"==d.type||"image"==d.type)&&d.name&&tc(d,"value")){var e=Pw(d);e&&a.store(e,d)}},!1);rc(G,"submit",function(c){var d=c.target;if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=nz(d)&&!e,g=a.get(d),h=!0;if(lz(d,function(){if(h){var m;g&&(m=G.createElement("input"),m.type="hidden",m.name=g.name,m.value=g.value,d.appendChild(m));b.call(d);m&&d.removeChild(m)}},e,f,g))h=!1;else return e||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},
!1);HTMLFormElement.prototype.submit=function(){var c=this,d=!0;lz(c,function(){d&&b.call(c)},!1,nz(c))&&(b.call(c),d=!1)}};
function pz(a,b){var c=this;M(F(this),["options:?DustMap","triggerId:?*"],arguments);Vx([function(){return N(c,"process_dom_events","document","click")},function(){return N(c,"process_dom_events","document","submit")}]);var d=a&&a.get("waitForTags"),e=a&&a.get("checkValidation");b=Lw(b);if(d){var f=Number(a.get("waitForTagsTimeout"));0<f&&isFinite(f)||(f=2E3);var g=function(m){return Math.max(f,m)};Jw("fsl","mwt",g,0);e||
Jw("fsl","nv.mwt",g,0)}var h=function(m){m.push(b);return m};Jw("fsl","ids",h,[]);e||Jw("fsl","nv.ids",h,[]);Kw("fsl","init",!1)||(oz(),Iw("fsl","init",!0));return b}pz.K="internal.enableAutoEventOnFormSubmit";
function uz(){var a=this;}uz.K="internal.enableAutoEventOnGaSend";var vz={},wz=[];
var yz=function(a,b){var c=""+b;if(vz[c])vz[c].push(a);else{var d=[a];vz[c]=d;var e=xz(),f=-1;wz.push(function(g){0<=f&&z.clearTimeout(f);b?f=z.setTimeout(function(){e(g,d);f=-1},b):e(g,d)})}},xz=function(){var a=z.location.href,b={source:null,state:z.history.state||null,url:dj(ej(a)),O:cj(ej(a),"fragment")};return function(c,d){var e=b,f={};f[e.source]=!0;f[c.source]=!0;if(!f.popstate||!f.hashchange||e.O!=c.O){var g={},h=(g.event="gtm.historyChange-v2",g["gtm.historyChangeSource"]=c.source,g["gtm.oldUrlFragment"]=
b.O,g["gtm.newUrlFragment"]=c.O,g["gtm.oldHistoryState"]=b.state,g["gtm.newHistoryState"]=c.state,g["gtm.oldUrl"]=b.url,g["gtm.newUrl"]=c.url,g["gtm.triggers"]=d.join(","),g);b=c;Xv(h)}}},zz=function(a,b){var c=z.history,d=c[a];if(Fa(d))try{c[a]=function(e,f,g){d.apply(c,[].slice.call(arguments,0));var h=z.location.href;b({source:a,state:e,url:dj(ej(h)),O:cj(ej(h),"fragment")})}}catch(e){}},Bz=function(a){z.addEventListener("popstate",function(b){var c=Az(b);a({source:"popstate",state:b.state,url:dj(ej(c)),
O:cj(ej(c),"fragment")})})},Cz=function(a){z.addEventListener("hashchange",function(b){var c=Az(b);a({source:"hashchange",state:null,url:dj(ej(c)),O:cj(ej(c),"fragment")})})},Az=function(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:z.location.href};
function Dz(a,b){var c=this;M(F(this),["options:?DustMap","triggerId:?*"],arguments);Vx([function(){return N(c,"process_dom_events","window","popstate")},function(){return N(c,"process_dom_events","window","pushstate")}]);b=Lw(b);var d=Number(a&&a.get("interval"));0<d&&isFinite(d)||(d=0);if(Kw("ehl","init",!1)){var e=Kw("ehl","reg");e&&e(b,d)}else{var f=function(g){for(var h=0;h<wz.length;h++)wz[h](g)};Cz(f);Bz(f);zz("pushState",
f);zz("replaceState",f);yz(b,d);Iw("ehl","reg",yz);Iw("ehl","init",!0)}return b}Dz.K="internal.enableAutoEventOnHistoryChange";
var Ez=function(a,b){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=yc(b,"href"),d=c.indexOf("#"),e=yc(b,"target");if(e&&"_self"!==e&&"_parent"!==e&&"_top"!==e||0===d)return!1;if(0<d){var f=dj(ej(c)),g=dj(ej(z.location.href));return f!==g}return!0},Fz=function(a,b){for(var c=cj(ej((b.attributes&&b.attributes.formaction?b.formAction:"")||b.action||yc(b,"href")||b.src||b.code||b.codebase||""),"host"),d=0;d<a.length;d++)try{if((new RegExp(a[d])).test(c))return!1}catch(e){}return!0},
Gz=function(){var a=0,b=function(c){var d=c.target;if(d&&3!==c.which&&!(c.ph||c.timeStamp&&c.timeStamp===a)){a=c.timeStamp;d=wc(d,["a","area"],100);if(!d)return c.returnValue;var e=c.defaultPrevented||!1===c.returnValue,f=Kw("aelc",e?"nv.mwt":"mwt",0),g;g=e?Kw("aelc","nv.ids",[]):Kw("aelc","ids",[]);for(var h=[],m=0;m<g.length;m++){var n=g[m],p=Kw("aelc","aff.map",{})[n];p&&!Fz(p,d)||h.push(n)}if(h.length){var q=Ez(c,d),r=Gw(d,"gtm.linkClick",h);r["gtm.elementText"]=uc(d);r["gtm.willOpenInNewWindow"]=
!q;if(q&&!e&&f&&d.href){var t=!!Ka(String(yc(d,"rel")||"").split(" "),function(x){return"noreferrer"===x.toLowerCase()}),u=z[(yc(d,"target")||"_self").substring(1)],v=!0,w=Zv(function(){var x;if(x=v&&u){var y;a:if(t){var A;try{A=new MouseEvent(c.type,{bubbles:!0})}catch(B){if(!G.createEvent){y=!1;break a}A=G.createEvent("MouseEvents");A.initEvent(c.type,!0,!0)}A.ph=!0;c.target.dispatchEvent(A);y=!0}else y=!1;x=!y}x&&(u.location.href=yc(d,"href"))},f);if(Yv(r,w,f))v=!1;else return c.preventDefault&&
c.preventDefault(),c.returnValue=!1}else Yv(r,function(){},f||2E3);return!0}}};rc(G,"click",b,!1);rc(G,"auxclick",b,!1)};
function Hz(a,b){var c=this;M(F(this),["dustOptions:?DustMap","triggerId:?*"],arguments);Vx([function(){return N(c,"process_dom_events","document","click")},function(){return N(c,"process_dom_events","document","auxclick")}]);var d=Xc(a),e=d&&!!d.waitForTags,f=d&&!!d.checkValidation,g=d?d.affiliateDomains:void 0;b=Lw(b);if(e){var h=Number(d.waitForTagsTimeout);0<h&&isFinite(h)||(h=2E3);var m=function(p){return Math.max(h,p)};
Jw("aelc","mwt",m,0);f||Jw("aelc","nv.mwt",m,0)}var n=function(p){p.push(b);return p};Jw("aelc","ids",n,[]);f||Jw("aelc","nv.ids",n,[]);g&&Jw("aelc","aff.map",function(p){p[b]=g;return p},{});Kw("aelc","init",!1)||(Gz(),Iw("aelc","init",!0));return b}Hz.K="internal.enableAutoEventOnLinkClick";var Iz,Jz;
var Kz=function(a){return Kw("sdl",a,{})},Lz=function(a,b,c){b&&(Array.isArray(a)||(a=[a]),Jw("sdl",c,function(d){for(var e=0;e<a.length;e++){var f=String(a[e]);d.hasOwnProperty(f)||(d[f]=[]);d[f].push(b)}return d},{}))},Oz=function(){var a=250,b=!1;G.scrollingElement&&G.documentElement&&z.addEventListener&&(a=50,b=!0);var c=0,d=!1,e=function(){d?c=z.setTimeout(e,a):(c=0,Mz(),Kw("sdl","init",!1)&&!Nz()&&(sc(z,"scroll",f),sc(z,"resize",f),Iw("sdl","init",!1)));d=!1},f=function(){b&&Iz();c?d=!0:(c=
z.setTimeout(e,a),Iw("sdl","pending",!0))};return f},Mz=function(){var a=Iz(),b=a.fh,c=a.gh,d=b/Jz.scrollWidth*100,e=c/Jz.scrollHeight*100;Pz(b,"horiz.pix","PIXELS","horizontal");Pz(d,"horiz.pct","PERCENT","horizontal");Pz(c,"vert.pix","PIXELS","vertical");Pz(e,"vert.pct","PERCENT","vertical");Iw("sdl","pending",!1)},Pz=function(a,b,c,d){var e=Kz(b),f={},g;for(g in e){f.Jc=g;if(e.hasOwnProperty(f.Jc)){var h=Number(f.Jc);if(!(a<h)){var m={};Xv((m.event="gtm.scrollDepth",m["gtm.scrollThreshold"]=h,
m["gtm.scrollUnits"]=c.toLowerCase(),m["gtm.scrollDirection"]=d,m["gtm.triggers"]=e[f.Jc].join(","),m));Jw("sdl",b,function(n){return function(p){delete p[n.Jc];return p}}(f),{})}}f={Jc:f.Jc}}},Rz=function(){Jw("sdl","scr",function(a){a||(a=G.scrollingElement||G.body&&G.body.parentNode);return Jz=a},!1);Jw("sdl","depth",function(a){a||(a=Qz());return Iz=a},!1)},Qz=function(){var a=0,b=0;return function(){var c=Qi(),d=c.height;a=Math.max(Jz.scrollLeft+c.width,a);b=Math.max(Jz.scrollTop+d,b);return{fh:a,
gh:b}}},Nz=function(){return!!(Object.keys(Kz("horiz.pix")).length||Object.keys(Kz("horiz.pct")).length||Object.keys(Kz("vert.pix")).length||Object.keys(Kz("vert.pct")).length)};
function Sz(a,b){var c=this;M(F(this),["options:!DustMap","triggerId:?*"],arguments);Vx([function(){return N(c,"process_dom_events","window","resize")},function(){return N(c,"process_dom_events","window","scroll")}]);Rz();if(!Jz)return;b=Lw(b);var d=Xc(a);switch(d.horizontalThresholdUnits){case "PIXELS":Lz(d.horizontalThresholds,b,"horiz.pix");break;case "PERCENT":Lz(d.horizontalThresholds,b,"horiz.pct")}switch(d.verticalThresholdUnits){case "PIXELS":Lz(d.verticalThresholds,
b,"vert.pix");break;case "PERCENT":Lz(d.verticalThresholds,b,"vert.pct")}Kw("sdl","init",!1)?Kw("sdl","pending",!1)||I(function(){return Mz()}):(Iw("sdl","init",!0),Iw("sdl","pending",!0),I(function(){Mz();if(Nz()){var e=Oz();rc(z,"scroll",e);rc(z,"resize",e)}else Iw("sdl","init",!1)}));return b}Sz.K="internal.enableAutoEventOnScroll";var cc=ca(["data-gtm-yt-inspected-"]),Tz=["www.youtube.com","www.youtube-nocookie.com"],Uz,Vz=!1;
var Wz=function(a,b,c){var d=a.map(function(g){return{Da:g,Ie:g,Fe:void 0}});if(!b.length)return d;var e=b.map(function(g){return{Da:g*c,Ie:void 0,Fe:g}});if(!d.length)return e;var f=d.concat(e);f.sort(function(g,h){return g.Da-h.Da});return f},Xz=function(a){a=void 0===a?[]:a;for(var b=[],c=0;c<a.length;c++)0>a[c]||b.push(a[c]);b.sort(function(d,e){return d-e});return b},Yz=function(a){a=void 0===a?[]:a;for(var b=[],c=0;c<a.length;c++)100<a[c]||0>a[c]||(b[c]=a[c]/100);b.sort(function(d,e){return d-
e});return b},Zz=function(a,b){var c,d;function e(){t=dx(function(){return{url:w,title:x,hh:v,nj:a.getCurrentTime(),playbackRate:y}},b.rb,a.getIframe());v=0;x=w="";y=1;return f}function f(E){switch(E){case 1:v=Math.round(a.getDuration());w=a.getVideoUrl();if(a.getVideoData){var J=a.getVideoData();x=J?J.title:""}y=a.getPlaybackRate();b.ah?Xv(t.createEvent("start")):t.gd();u=Wz(b.Jh,b.Ih,a.getDuration());return g(E);default:return f}}function g(){A=a.getCurrentTime();B=Ta().getTime();t.Cj();r();return h}
function h(E){var J;switch(E){case 0:return n(E);case 2:J="pause";case 3:var H=a.getCurrentTime()-A;J=1<Math.abs((Ta().getTime()-B)/1E3*y-H)?"seek":J||"buffering";a.getCurrentTime()&&(b.Zg?Xv(t.createEvent(J)):t.gd());q();return m;case -1:return e(E);default:return h}}function m(E){switch(E){case 0:return n(E);case 1:return g(E);case -1:return e(E);default:return m}}function n(){for(;d;){var E=c;z.clearTimeout(d);E()}b.Yg&&Xv(t.createEvent("complete",1));return e(-1)}function p(){}function q(){d&&
(z.clearTimeout(d),d=0,c=p)}function r(){if(u.length&&0!==y){var E=-1,J;do{J=u[0];if(J.Da>a.getDuration())return;E=(J.Da-a.getCurrentTime())/y;if(0>E&&(u.shift(),0===u.length))return}while(0>E);c=function(){d=0;c=p;0<u.length&&u[0].Da===J.Da&&(u.shift(),Xv(t.createEvent("progress",J.Fe,J.Ie)));r()};d=z.setTimeout(c,1E3*E)}}var t,u=[],v,w,x,y,A,B,D=e(-1);d=0;c=p;return{onStateChange:function(E){D=D(E)},onPlaybackRateChange:function(E){A=a.getCurrentTime();B=Ta().getTime();t.gd();y=E;q();r()}}},aA=
function(a){I(function(){function b(){for(var d=c.getElementsByTagName("iframe"),e=d.length,f=0;f<e;f++)$z(d[f],a)}var c=G;b();Tw(b)})},$z=function(a,b){if(!a.getAttribute("data-gtm-yt-inspected-"+b.rb)&&(bc(a,"data-gtm-yt-inspected-"+b.rb),bA(a,b.ue))){a.id||(a.id=cA());var c=z.YT,d=c.get(a.id);d||(d=new c.Player(a.id));var e=Zz(d,b),f={},g;for(g in e)f.ud=g,e.hasOwnProperty(f.ud)&&d.addEventListener(f.ud,function(h){return function(m){return e[h.ud](m.data)}}(f)),f={ud:f.ud}}},bA=function(a,b){var c=
a.getAttribute("src");if(dA(c,"embed/")){if(0<c.indexOf("enablejsapi=1"))return!0;if(b){var d;var e=-1!==c.indexOf("?")?"&":"?";-1<c.indexOf("origin=")?d=c+e+"enablejsapi=1":(Uz||(Uz=G.location.protocol+"//"+G.location.hostname,G.location.port&&(Uz+=":"+G.location.port)),d=c+e+"enablejsapi=1&origin="+encodeURIComponent(Uz));var f;f=Fb(d);a.src=Db(f).toString();return!0}}return!1},dA=function(a,b){if(!a)return!1;for(var c=0;c<Tz.length;c++)if(0<=a.indexOf("//"+Tz[c]+"/"+b))return!0;return!1},cA=function(){var a=
Math.round(1E9*Math.random())+"";return G.getElementById(a)?cA():a};
function eA(a,b){var c=this;M(F(this),["dustOptions:!DustMap","triggerId:?*"],arguments);Vx([function(){return N(c,"process_dom_events","element","onStateChange")},function(){return N(c,"process_dom_events","element","onPlaybackRateChange")}]);b=Lw(b);var d=!!a.get("captureStart"),e=!!a.get("captureComplete"),f=!!a.get("capturePause"),g=Yz(Xc(a.get("progressThresholdsPercent"))),h=Xz(Xc(a.get("progressThresholdsTimeInSeconds"))),
m=!!a.get("fixMissingApi");if(!(d||e||f||g.length||h.length))return;var n={ah:d,Yg:e,Zg:f,Ih:g,Jh:h,ue:m,rb:b},p=z.YT,q=function(){aA(n)};if(p)return p.ready&&p.ready(q),b;var r=z.onYouTubeIframeAPIReady;z.onYouTubeIframeAPIReady=function(){r&&r();q()};I(function(){for(var t=G.getElementsByTagName("script"),u=t.length,v=0;v<u;v++){var w=t[v].getAttribute("src");if(dA(w,"iframe_api")||dA(w,"player_api"))return b}for(var x=G.getElementsByTagName("iframe"),y=x.length,A=0;A<y;A++)if(!Vz&&bA(x[A],n.ue))return nc("https://www.youtube.com/iframe_api"),
Vz=!0,b});return b}eA.K="internal.enableAutoEventOnYouTubeActivity";var fA;function gA(a){var b=!1;return b}gA.K="internal.evaluateMatchingRules";
var hA=function(a){var b=a[P.g.jf];if(b)return b;var c=a[P.g.ka];if(k(c)){if(Fa(URL))try{return(new URL(c)).hostname}catch(e){return}var d=ej(c);if(d.hostname)return cj(d,"host")}},jA=function(a,b,c){if(c)switch(c.type){case "event_name":return a;case "const":return c.const_value;case "event_param":var d=c.event_param.param_name;if(d===P.g.Rb)return iA(b);return d===P.g.jf?hA(b):b[d]}},nA=function(a,
b,c,d){kA=!1;if(c&&!lA(a,b,c))return!1;if(!d||0===d.length)return!0;for(var e=0;e<d.length;e++)if(mA(a,b,d[e].predicates||[]))return!0;return!1},mA=function(a,b,c){for(var d=0;d<c.length;d++)if(!lA(a,b,c[d]))return!1;return!0},lA=function(a,b,c){var d=c.values||[],e=jA(a,b,d[0]),f=jA(a,b,d[1]),g=c.type;if("eqi"===g||"swi"===g||"ewi"===g||"cni"===g)k(e)&&(e=e.toLowerCase()),k(f)&&(f=f.toLowerCase());var h=!1;switch(g){case "eq":case "eqi":h=Rf(e,f);break;case "sw":case "swi":h=Wf(e,f);break;case "ew":case "ewi":h=
Nf(e,f);break;case "cn":case "cni":h=Qf(e,f);break;case "lt":h=Vf(e,f);break;case "le":h=Tf(e,f);break;case "gt":h=Uf(e,f);break;case "ge":h=Sf(e,f);break;case "re":case "rei":void 0!==e&&(h=Pf(e,f,"rei"===g))}return!!c.negate!==h},kA=!1;var iA=function(a){var b=a[P.g.Rb];if(b)return b;kA=!0;var c=a[P.g.ka];if(k(c)){var d=R(57);if(Fa(URL))try{var e=new URL(c);return e.pathname+oA(d?e.search:"")}catch(h){return}var f=ej(c);if(f.hostname){var g=d?
cj(f,"query"):"";g&&(g="?"+g);return cj(f,"path")+oA(g)}}},oA=function(a){if(!R(72)||!a)return a;var b=a.split("&"),c=[];b[0]=b[0].substring(1);for(var d=0;d<b.length;d++){var e=b[d],f=e.indexOf("=");pA[0<=f?e.substring(0,f):e]||c.push(b[d])}return c.length?"?"+c.join("&"):""},pA=Object.freeze({__utma:1,__utmb:1,__utmc:1,__utmk:1,__utmv:1,__utmx:1,__utmz:1,__ga:1,_gac:1,_gl:1,dclid:1,gbraid:1,gclid:1,gclsrc:1,utm_campaign:1,utm_content:1,utm_expid:1,utm_id:1,utm_medium:1,utm_nooverride:1,utm_referrer:1,
utm_source:1,utm_term:1,wbraid:1});function qA(a,b){var c=!1;return c}qA.K="internal.evaluatePredicates";var rA=function(a){var b;return b};function sA(a,b){b=void 0===b?!0:b;var c;return c}sA.N="getCookieValues";function tA(){return Di()}tA.K="internal.getCountryCode";function uA(){var a=[];a=Kl();return Wc(a)}uA.K="internal.getDestinationIds";function vA(a){var b=null;return b}vA.N="getElementById";var wA={};wA.enableAdsConversionValidation=R(83);wA.enableAdsHistoryChangeEvents=R(36);wA.enableAlwaysSendFormStart=R(38);wA.enableAutoPiiOnPhoneAndAddress=R(114);wA.enableCcdAutoRedaction=R(92);wA.enableCcdEmForm=R(82);wA.enableCcdEventEditingAndCreation=R(26);wA.enableCcdPreAutoPiiDetection=R(49);wA.enableCcdUserData=R(16);wA.enableEesPagePath=R(43);wA.enableEuidAutoMode=R(37);wA.enableGa4OnoRemarketing=R(34);wA.includeQueryInEesPagePath=R(57);wA.pixieSetCorePlatformServices=R(105);
wA.useEnableAutoEventOnFormApis=R(91);wA.autoPiiEligible=Ii();function xA(){return Wc(wA)}xA.K="internal.getFlags";function yA(a,b){var c;M(F(this),["targetId:!string","name:!string"],arguments);var d=Ni(a)||{};c=Wc(d[b],this.h);return c}yA.K="internal.getProductSettingsParameter";function zA(a,b){var c;M(F(this),["queryKey:!string","retrieveAll:?boolean"],arguments);N(this,"get_url","query",a);var d=cj(ej(z.location.href),"query"),e=$i(d,a,b);c=Wc(e,this.h);return c}zA.N="getQueryParameters";function AA(a,b){var c;return c}AA.N="getReferrerQueryParameters";function BA(a){var b="";return b}BA.N="getReferrerUrl";function CA(){return Ei()}CA.K="internal.getRegionCode";function DA(a,b){var c;M(F(this),["targetId:!string","name:!string"],arguments);var d=$u(Uu,a).h;c=Wc(d[b],this.h);return c}DA.K="internal.getRemoteConfigParameter";function EA(a){var b="";M(F(this),["component:?string"],arguments),N(this,"get_url",a),b=cj(ej(z.location.href),a);return b}EA.N="getUrl";function FA(){N(this,"get_user_agent");return gc.userAgent}FA.N="getUserAgent";
var GA=function(a){var b=!1;b=Kp(a,"google_ono",!1);return b},HA=function(a){if(a.metadata.is_merchant_center||!Ms(a.h))return!1;if(!T(a.h,P.g.nf)){var b=T(a.h,P.g.Ld);return!0===b||"true"===b}return!0},IA=function(a){var b=a.metadata.user_data;if(Uc(b))return b},JA=function(a,b){var c=Kp(a,P.g.Jd,a.h.B[P.g.Jd]);if(c&&void 0!==c[b||a.eventName])return c[b||a.eventName]},KA=function(a,
b,c){a.m[P.g.ke]||(a.m[P.g.ke]={});a.m[P.g.ke][b]=c};var LA=!1,MA=function(a){var b=a.eventName===P.g.hc&&Ek()&&HA(a),c=a.metadata.batch_on_navigation,d=a.metadata.is_conversion,e=a.metadata.is_session_start,f=a.metadata.create_dc_join,g=a.metadata.create_google_join,h=a.metadata.euid_mode_enabled&&!!IA(a);return!(!gc.sendBeacon||d||h||e||f||g||b||!c&&LA)};var NA=function(a){wb("GA4_EVENT",a)};var PA=function(a){return!a||OA.test(a)||zh.hasOwnProperty(a)},QA=function(a,b,c){for(var d=c.event_param_ops||[],e=0;e<d.length;e++){var f=d[e];if(f.edit_param){var g=f.edit_param.param_name,h=jA(a,b,f.edit_param.param_value),m;if(h){var n=Number(h);m=isNaN(n)?h:n}else m=h;b[g]=m}else f.delete_param&&delete b[f.delete_param.param_name]}},OA=/^(_|ga_|google_|gtag\.|firebase_).*$/;
var RA=function(a){var b=0,c=0;return{start:function(){b=Ua()},stop:function(){c=this.get()},get:function(){var d=0;a.rh()&&(d=Ua()-b);return d+c}}},SA=function(){this.h=void 0;this.m=0;this.isActive=this.isVisible=this.B=!1;this.M=this.C=void 0};aa=SA.prototype;aa.rk=function(a){var b=this;if(!this.h){this.B=G.hasFocus();this.isVisible=!G.hidden;this.isActive=!0;var c=function(d,e,f){rc(d,e,function(g){b.h.stop();f(g);b.rh()&&b.h.start()})};c(z,"focus",function(){b.B=!0});c(z,"blur",function(){b.B=
!1});c(z,"pageshow",function(d){b.isActive=!0;d.persisted&&O(56);b.M&&b.M()});c(z,"pagehide",function(){b.isActive=!1;b.C&&b.C()});c(G,"visibilitychange",function(){b.isVisible=!G.hidden});HA(a)&&-1===(gc.userAgent||"").indexOf("Firefox")&&-1===(gc.userAgent||"").indexOf("FxiOS")&&c(z,"beforeunload",function(){LA=!0});this.Lh();this.m=0}};aa.Lh=function(){this.m+=this.Kf();this.h=RA(this);this.rh()&&this.h.start()};aa.rm=function(a){var b=this.Kf();0<b&&(a.m[P.g.Hd]=b)};aa.ml=function(a){a.m[P.g.Hd]=
void 0;this.Lh();this.m=0};aa.rh=function(){return this.B&&this.isVisible&&this.isActive};aa.Zk=function(){return this.m+this.Kf()};aa.Kf=function(){return this.h&&this.h.get()||0};aa.Xl=function(a){this.C=a};aa.Aj=function(a){this.M=a};function TA(){return z.gaGlobal=z.gaGlobal||{}}var UA=function(){var a=TA();a.hid=a.hid||La();return a.hid},VA=function(a,b){var c=TA();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};
var WA=function(a,b,c){var d=a.metadata.client_id_source;if(void 0===d||c<=d)a.m[P.g.fb]=b,a.metadata.client_id_source=c},ZA=function(a,b){var c;var d=b.metadata.cookie_options,e=d.prefix+"_ga",f=Wn(d,void 0,void 0,P.g.T);if(!1===T(b.h,P.g.ib)&&XA(b)===a)c=!0;else{var g=Dl(a,YA[0],d.domain,d.path);c=1!==vl(e,g,f)}return c},XA=function(a){var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=Cl(c,b.domain,b.path,YA,P.g.T);if(!d){var e=String(T(a.h,P.g.jc,""));e&&e!=c&&(d=Cl(e,b.domain,b.path,YA,P.g.T))}return d},
YA=["GA1"],$A=function(a,b){var c=a.m[P.g.fb];if(T(a.h,P.g.lb)&&T(a.h,P.g.qc)||b&&c===b)return c;if(c){c=""+c;if(!ZA(c,a))return O(31),a.isAborted=!0,"";VA(c,Vk(P.g.T));return c}O(32);a.isAborted=!0;return""};
var cB=function(a,b,c){if(!b)return a;if(!a)return b;var d=aB(a);if(!d)return b;var e,f=Pa(null!=(e=T(c.h,P.g.ad))?e:30);if(!(Math.floor(c.metadata.event_start_timestamp_ms/1E3)>d.Ce+60*f))return a;var g=aB(b);if(!g)return a;g.Fc=d.Fc+1;var h;return null!=(h=bB(g.sessionId,g.Fc,g.md,g.Ce,g.vh,g.Dc,g.qe))?h:b},fB=function(a,b){var c=b.metadata.cookie_options,d=dB(b,c),e=Dl(a,eB[0],c.domain,c.path),f={Hb:P.g.T,domain:c.domain,path:c.path,expires:c.Fb?new Date(Ua()+1E3*c.Fb):void 0,flags:c.flags};R(52)&&
vl(d,void 0,f);return 1!==vl(d,e,f)},gB=function(a){var b=a.metadata.cookie_options,c=dB(a,b),d=Cl(c,b.domain,b.path,eB,P.g.T);if(!d||!cn&&!R(52))return d;var e=ml(c,void 0,void 0,P.g.T);if(d&&1<e.length){O(114);for(var f=void 0,g=void 0,h=0;h<e.length;h++){var m=e[h].split(".");if(!(7>m.length)){var n=Number(m[5]);n&&(!g||n>g)&&(g=n,f=e[h])}}f&&!f.endsWith(d)&&(O(115),R(52)&&(d=f.split(".").slice(2).join(".")))}return d},bB=function(a,b,c,d,e,f,g){if(a&&b){var h=[a,b,Pa(c),d,e];h.push(f?"1":"0");
h.push(g||"0");return h.join(".")}},eB=["GS1"],dB=function(a,b){return b.prefix+"_ga_"+a.target.J[0]},aB=function(a){if(a){var b=a.split(".");if(!(5>b.length||7<b.length)){7>b.length&&O(67);var c=Number(b[1]),d=Number(b[3]),e=Number(b[4]||0);c||O(118);d||O(119);isNaN(e)&&O(120);if(!R(74)||c&&d&&!isNaN(e))return{sessionId:b[0],Fc:c,md:!!Number(b[2]),Ce:d,vh:e,Dc:"1"===b[5],qe:"0"!==b[6]?b[6]:void 0}}}},hB=function(a){return bB(a.m[P.g.nb],a.m[P.g.Ud],a.m[P.g.Td],Math.floor(a.metadata.event_start_timestamp_ms/
1E3),a.metadata.join_timer_sec||0,!!a.metadata[P.g.cf],a.m[P.g.Wc])};
var iB=function(a){var b=T(a.h,P.g.Ba),c=a.h.B[P.g.Ba];if(c===b)return c;var d=Vc(b);c&&c[P.g.U]&&(d[P.g.U]=(d[P.g.U]||[]).concat(c[P.g.U]));return d},jB=function(a,b){var c=po(!0);return"1"!==c._up?{}:{clientId:c[a],Dj:c[b]}},kB=function(a,b,c){var d=po(!0),e=d[b];e&&(WA(a,e,2),ZA(e,a));var f=d[c];f&&fB(f,a);return!(!e||!f)},lB=!1,mB=function(a){var b=iB(a)||{},c=a.metadata.cookie_options,d=c.prefix+"_ga",e=dB(a,c);yo(b[P.g.sc],!!b[P.g.U])&&kB(a,d,e)&&(lB=!0);b[P.g.U]&&vo(function(){var f={},g=XA(a);
g&&(f[d]=g);var h=gB(a);h&&(f[e]=h);var m=ml("FPLC",void 0,void 0,P.g.T);m.length&&(f._fplc=m[0]);return f},b[P.g.U],b[P.g.Qb],!!b[P.g.Bb])},oB=function(a){if(!T(a.h,P.g.ob))return{};var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=dB(a,b);wo(function(){var e;if(Vk("analytics_storage"))e={};else{var f={};e=(f._up="1",f[c]=a.m[P.g.fb],f[d]=hB(a),f)}return e},1);return!Vk("analytics_storage")&&nB()?jB(c,d):{}},nB=function(){var a=bj(z.location,"host"),b=bj(ej(G.referrer),"host");return a&&b?a===b||
0<=a.indexOf("."+b)||0<=b.indexOf("."+a)?!0:!1:!1},pB=function(a){if(!a)return a;var b=String(a);b=oo(b);return b=oo(b,"_ga")};var qB=function(){var a=Ua(),b=a+864E5,c=20,d=5E3;return function(){var e=Ua();e>=b&&(b=e+864E5,d=5E3);if(1>d)return!1;c=Math.min(c+(e-a)/1E3*5,20);a=e;if(1>c)return!1;d--;c--;return!0}};var rB=function(){var a=!0;Wm(7)&&Wm(9)&&Wm(10)||(a=!1);return a},sB=function(){var a=!0;Wm(3)&&Wm(4)||(a=!1);return a};
var tB=function(a,b){Ek()&&(a.gcs=Wk(),R(106)&&(a.gcd=$k()),b.metadata.is_consent_update&&(a.gcu="1"))},wB=function(a){if(a.metadata.is_merchant_center)return"https://www.merchant-center-analytics.goog/mc/collect";var b=Ks(Ms(a.h),"/g/collect");if(b)return b;var c=Kp(a,P.g.kb,T(a.h,P.g.kb));c=c||GA(a);var d=T(a.h,P.g.xb);return c&&!Fi()&&!1!==d&&rB()&&Vk(P.g.H)&&Vk(P.g.T)?uB():vB()},
xB=!1;xB=!0;var yB={};yB[P.g.fb]="cid";yB[P.g.df]="_fid";yB[P.g.vg]="_geo";yB[P.g.Ab]="gdid";yB[P.g.Qd]="ir";yB[P.g.Aa]="ul";yB[P.g.Zc]="_rdi";yB[P.g.Db]="sr";yB[P.g.Mi]="tid";yB[P.g.rf]="tt";yB[P.g.tf]="ec_mode";yB[P.g.Ui]="gtm_up";yB[P.g.Wd]="uaa",yB[P.g.Xd]="uab",yB[P.g.Yd]="uafvl",yB[P.g.Zd]="uamb",yB[P.g.ae]="uam",yB[P.g.be]="uap",yB[P.g.ce]="uapv",yB[P.g.de]="uaw";var zB={};zB[P.g.Lc]="cc";zB[P.g.Mc]="ci";zB[P.g.Nc]="cm";zB[P.g.Oc]=
"cn";zB[P.g.Qc]="cs";zB[P.g.Rc]="ck";zB[P.g.xa]="cu";zB[P.g.ka]="dl";zB[P.g.Ga]="dr";zB[P.g.Cb]="dt";zB[P.g.Td]="seg";zB[P.g.nb]="sid";zB[P.g.Ud]="sct";zB[P.g.Ca]="uid";R(80)&&(zB[P.g.Rb]="dp");var AB={};AB[P.g.Hd]="_et";AB[P.g.zb]="edid";var BB={};BB[P.g.Lc]="cc";BB[P.g.Mc]="ci";BB[P.g.Nc]="cm";BB[P.g.Oc]="cn";BB[P.g.Qc]="cs";BB[P.g.Rc]="ck";var CB={},DB=Object.freeze((CB[P.g.qa]=1,CB)),vB=function(){var a="www";xB&&Hi()&&(a=Hi());return"https://"+a+".google-analytics.com/g/collect"},uB=function(){var a;
xB&&""!==Hi()&&(a=Hi());return"https://"+(a?a+".":"")+"analytics.google.com/g/collect"},EB=function(a,b,c){var d={},e={},f={};d.v="2";d.tid=a.target.Z;GA(a)&&!Fi()&&(d._ono=1);d.gtm=Sl();d._p=UA();c&&(d.em=c);a.metadata.create_google_join&&(d._gaz=1);tB(d,a);R(109)&&(bl()&&(d.dma_cps=al()),Gi()&&(d.dma="1"));var g=a.m[P.g.Ab];g&&(d.gdid=g);e.en=xf(a.eventName,40);a.metadata.is_first_visit&&
(e._fv=a.metadata.is_first_visit_conversion?2:1);a.metadata.is_new_to_site&&(e._nsi=1);a.metadata.is_session_start&&(e._ss=a.metadata.is_session_start_conversion?2:1);a.metadata.is_conversion&&(e._c=1);a.metadata.is_external_event&&(e._ee=1);if(a.metadata.is_ecommerce){var h=a.m[P.g.ba]||T(a.h,P.g.ba);if(Ia(h))for(var m=0;m<h.length&&200>m;m++)e["pr"+(m+1)]=Cf(h[m])}var n=a.m[P.g.zb];n&&(e.edid=n);var p=function(t,u){if("object"!==typeof u||!DB[t]){t=xf(t,40);var v="ep."+t,w="epn."+t;t=Ga(u)?w:v;
var x=Ga(u)?v:w;e.hasOwnProperty(x)&&delete e[x];e[t]=xf(u,100)}};l(a.m,function(t,u){if(void 0!==u&&!xh.hasOwnProperty(t)){null===u&&(u="");var v;t!==P.g.Wc?v=!1:a.metadata.euid_mode_enabled?(d.ecid=u,v=!0):v=void 0;if(!v&&t!==P.g.cf){var w=u;!0===u&&(w="1");!1===u&&(w="0");var x;if(yB[t])x=yB[t],d[x]=xf(w,420);else if(zB[t])x=zB[t],f[x]=xf(w,"dl"===x&&R(81)?1E3:420);else if(AB[t])x=AB[t],e[x]=xf(w,420);else if("_"===t.charAt(0))d[t]=xf(w,420);else{var y;BB[t]?y=!0:t!==P.g.Pc?y=!1:("object"!==typeof u&&
p(t,u),y=!0);y||p(t,u)}}}});(function(t){HA(a)&&"object"===typeof t&&l(t||{},function(u,v){"object"!==typeof v&&(d["sst."+u]=xf(v,420))})})(a.m[P.g.ke]);var q=a.m[P.g.Ta]||{};!1!==T(a.h,P.g.aa)&&sB()||(q._npa="1");R(28)&&!1===T(a.h,P.g.xb)&&(d.ngs="1");l(q,function(t,u){if(void 0!==u)if(null===u&&(u=""),t===P.g.Ca&&!f.uid)f.uid=xf(u,36);else if(b[t]!==u){var v=(Ga(u)?"upn.":"up.")+xf(t,24);e[v]=xf(u,36);b[t]=u}});var r=!1;
return Ef.call(this,{Ua:d,Gc:f,ih:e},wB(a),HA(a),r)||this};pa(EB,Ef);
var FB=function(a,b){return a.replace(/\$\{([^\}]+)\}/g,function(c,d){return b[d]||c})},GB=function(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")},HB=function(a){var b={},c="",d=a.pathname.indexOf("/g/collect");0<=d&&(c=a.pathname.substring(0,d));b.transport_url=a.protocol+"//"+a.hostname+c;return b},IB=function(a,b){var c=new z.XMLHttpRequest;c.withCredentials=!0;var d=b?"POST":"GET",e="",f=0,g=ej(a),h=HB(g),m=GB(g);c.onprogress=function(n){if(200===
c.status){e+=c.responseText.substring(f);f=n.loaded;for(var p=FB(e,h),q=p.indexOf("\n\n");-1!==q;){var r;a:{var t=da(p.substring(0,q).split("\n")),u=t.next().value,v=t.next().value;if(u.startsWith("event: message")&&v.startsWith("data: "))try{r=JSON.parse(v.substring(v.indexOf(":")+1));break a}catch(D){}r=void 0}var w=r;if(w){var x=w.send_pixel||[];if(Array.isArray(x))for(var y=0;y<x.length;y++)qc(x[y]);if(R(66)){var A=w.send_beacon||[];if(Array.isArray(A))for(var B=0;B<A.length;B++)xc(A[B])}}p=p.substring(q+
2);q=p.indexOf("\n\n")}e=p}};c.open(d,m);c.send(b)};
var LB=function(a,b,c,d){var e=a+"?"+b;JB&&(d=!(0===e.indexOf(vB())||0===e.indexOf(uB())));d&&!LA?IB(e,c):KB(a,b,c)},MB=function(a,b){function c(r){p.push(r+"="+encodeURIComponent(""+a.Ua[r]))}var d=b.hm,e=b.im,f=b.bl,g=b.Fk,h=b.Ek,m=b.sl,n=b.rl;if(d||e){var p=[];a.Ua._ono&&c("_ono");c("tid");c("cid");c("gtm");p.push("aip=1");a.Gc.uid&&!n&&p.push("uid="+encodeURIComponent(""+a.Gc.uid));
d&&(KB("https://stats.g.doubleclick.net/g/collect","v=2&"+p.join("&")),Lk("https://stats.g.doubleclick.net/g/collect?v=2&"+p.join("&")));if(e){p.push("z="+La());if(!m){var q=f&&0===f.indexOf("google.")&&"google.com"!=f?"https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%",f):void 0;q&&qc(q+p.join("&"))}R(28)&&!LA&&g&&h&&Dq()&&function(){var r=Fq()+"/td/ga/rul?";p=[];c("tid");p.push("gacid="+encodeURIComponent(String(a.Ua.cid)));c("gtm");p.push("aip=1");p.push("fledge=1");p.push("z="+
La());Eq(r+p.join("&"),a.Ua.tid)}()}}},JB=!1;var NB=function(){this.C=1;this.M={};this.h=new Ff;this.m=-1};NB.prototype.B=function(a,b){var c=this,d=new EB(a,this.M,b),e=MA(a);e&&this.h.C(d)||this.flush();if(e&&this.h.add(d)){if(0>this.m){var f=z.setTimeout,g;HA(a)?OB?(OB=!1,g=PB):g=QB:g=5E3;this.m=f.call(z,function(){return c.flush()},g)}}else{var h=Hf(d,this.C++);
LB(d.m,h.Fh,h.body,d.C);var m=a.metadata.create_dc_join,n=a.metadata.create_google_join,p=!1!==T(a.h,P.g.Ea),q=!1!==T(a.h,P.g.aa),r={eventId:a.h.eventId,priorityId:a.h.priorityId},t={hm:m,im:n,bl:Ji(),Fk:p,Ek:q,sl:Fi(),rl:a.metadata.euid_mode_enabled,Pm:r};MB(d,t)}hs(a)};NB.prototype.add=function(a){a.metadata.euid_mode_enabled&&!LA?this.R(a):this.B(a)};NB.prototype.flush=function(){if(this.h.events.length){var a=If(this.h,this.C++);LB(this.h.h,a.Fh,a.body,this.h.m);this.h=new Ff;0<=this.m&&(z.clearTimeout(this.m),
this.m=-1)}};NB.prototype.R=function(a){var b=this,c=IA(a);c?uh(c,function(d){b.B(a,1===d.split("~").length?void 0:d)}):this.B(a)};var KB=function(a,b,c){var d=a+"?"+b;if(c)try{gc.sendBeacon&&gc.sendBeacon(d,c)}catch(e){wb("TAGGING",15)}else xc(d)},PB=Tl('',500),QB=Tl('',5E3),OB=!0;var RB=function(a,b,c){void 0===c&&(c={});if("object"===typeof b)for(var d in b)RB(a+"."+d,b[d],c);else c[a]=b;return c},SB=function(a){if(HA(a)){var b=function(d){var e=RB(P.g.qa,d);l(e,function(f,g){a.m[f]=g})},c=T(a.h,P.g.qa);void 0!==c?b(c):b(a.metadata.user_data);a.metadata.user_data=void 0}};var TB=window,UB=document,VB=function(a){var b=TB._gaUserPrefs;if(b&&b.ioo&&b.ioo()||UB.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===TB["ga-disable-"+a])return!0;try{var c=TB.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=gl("AMP_TOKEN",String(UB.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return UB.getElementById("__gaOptOutExtension")?!0:!1};
var WB=function(a,b,c){c||(c=function(){});void 0!==a.m[b]&&(a.m[b]=c(a.m[b]))},XB=function(a,b){var c=P.g.H;Vk(c)||dl(function(){b.metadata.is_consent_update=!0;var d=Hh[c||""];d&&KA(b,"gcut",d);a.gj(b)},c)},Tn={Pk:"",wm:Number("")},YB={},ZB=(YB[P.g.Lc]=1,YB[P.g.Mc]=1,YB[P.g.Nc]=1,YB[P.g.Oc]=1,YB[P.g.Qc]=1,YB[P.g.Rc]=1,YB),$B=function(a){this.R=a;this.ub=new NB;this.h=void 0;this.C=new SA;this.m=this.B=void 0;this.M=!1;this.fe=void 0;this.xd=
!1};aa=$B.prototype;aa.Sl=function(a,b,c){var d=this,e=up(this.R);if(e)if(c.eventMetadata.is_external_event&&"_"===a.charAt(0))c.W();else{a!==P.g.wa&&a!==P.g.Ka&&PA(a)&&O(58);aC(c.h);var f=new Jp(e,a,c);f.metadata.event_start_timestamp_ms=b;var g=[P.g.T];(Kp(f,P.g.kb,T(f.h,P.g.kb))||HA(f))&&g.push(P.g.H);var h=function(){el(function(){d.Tl(f)},g)};R(11)&&R(25)?Un(h):h()}else c.W()};aa.Tl=function(a){this.m=a;try{if(VB(a.target.Z))O(28),a.isAborted=!0;else if(R(97)){var b;var c=Ll(Ol()),d=c&&c.parent;
b=d?Ll(d):void 0;if(b&&Ia(b.destinations))for(var e=0;e<b.destinations.length;e++)if(VB(b.destinations[e])){O(125);a.isAborted=!0;break}}if(0<=Tn.Pk.replace(/\s+/g,"").split(",").indexOf(a.eventName))a.isAborted=!0;else{var f=JA(a);f&&f.blacklisted&&(a.isAborted=!0)}var g=G.location.protocol;"http:"!=g&&"https:"!=g&&(O(29),a.isAborted=!0);gc&&"preview"==gc.loadPurpose&&(O(30),a.isAborted=!0);R(107)&&R(108)&&(a.isAborted=!0);R(107)&&T(a.h,P.g.lb)&&!T(a.h,P.g.qc)?(a.eventName!==P.g.wa&&a.eventName!==
P.g.yd&&O(131),a.isAborted=!0):!T(a.h,P.g.lb)&&T(a.h,P.g.qc)&&(O(132),a.isAborted=!0);var h=Lh.grl;h||(h=qB(),Lh.grl=h);h()||(O(35),a.isAborted=!0);if(a.isAborted){a.h.W();xb();return}var m={prefix:String(T(a.h,P.g.Ma,"")),path:String(T(a.h,P.g.Tc,"/")),flags:String(T(a.h,P.g.Qa,"")),domain:String(T(a.h,P.g.Pa,"auto")),Fb:Number(T(a.h,P.g.Fa,63072E3))};a.metadata.cookie_options=m;bC(a);this.sk(a);this.C.rm(a);a.metadata.is_merchant_center?a.metadata.euid_mode_enabled=!1:T(a.h,P.g.kf)?a.metadata.euid_mode_enabled=
!1:Kp(a,"ccd_add_1p_data",!1)?a.metadata.euid_mode_enabled=!0:a.metadata.euid_mode_enabled=R(16)?!1:Yj(Wj(a.h));if(a.metadata.euid_mode_enabled){var n=Wj(a.h);if(Yj(n)){var p=T(a.h,P.g.qa);if(Kp(a,"ccd_add_1p_data",!1))null===p?a.metadata.user_data_from_code=null:(n.enable_code&&Uc(p)&&(a.metadata.user_data_from_code=p),Uc(n.selectors)&&!a.metadata.user_data_from_manual&&(a.metadata.user_data_from_manual=Vj(n.selectors)));else if(void 0!==p)a.metadata.user_data=p,a.m._udm="c";else{var q=Zj(n);a.metadata.user_data=
q;if("selectors"===n.mode||Uc(n.selectors))a.m._udm="m";else if("auto_detect"===n.mode||Uc(n.auto_detect))a.m._udm="a"}}}var r=this.zj,t;T(a.h,P.g.ob)&&(Vk(P.g.T)||T(a.h,P.g.fb)||(a.m[P.g.Ui]=!0));var u;var v;v=void 0===v?3:v;var w=z.location.href;if(w){var x=ej(w).search.replace("?",""),y=$i(x,"_gl",!1,!0)||"";u=y?void 0!==qo(y,v):!1}else u=!1;u&&HA(a)&&KA(a,"glv",1);a.eventName===P.g.wa?(T(a.h,P.g.ob)&&jp(["aw","dc"]),mB(a),t=oB(a)):t={};r.call(this,t);a.eventName==P.g.wa&&(T(a.h,P.g.Sa,!0)?(a.h.h[P.g.da]&&
(a.h.m[P.g.da]=a.h.h[P.g.da],a.h.h[P.g.da]=void 0,a.m[P.g.da]=void 0),a.eventName=P.g.hc):a.isAborted=!0);var A=eb(iq(a.h,P.g.da,1),".");A&&(a.m[P.g.Ab]=A);var B=eb(iq(a.h,P.g.da,2),".");B&&(a.m[P.g.zb]=B);var D=this.B,E=this.C,J=!this.xd,H=this.h,L=T(a.h,P.g.fb);if(T(a.h,P.g.lb)&&T(a.h,P.g.qc))L?WA(a,L,1):(O(127),a.isAborted=!0);else{var Q=L?1:8;a.metadata.is_new_to_site=!1;L||(L=XA(a),Q=3);L||(L=H,Q=5);if(!L){var ea=Vk(P.g.T),ia=TA();L=!ia.from_cookie||ea?ia.vid:void 0;Q=6}L?L=""+L:(L=zl(),Q=7,
a.metadata.is_first_visit=a.metadata.is_new_to_site=!0);WA(a,L,Q)}var W=Math.floor(a.metadata.event_start_timestamp_ms/1E3),S=void 0;a.metadata.is_new_to_site||(S=gB(a)||D);var ja=Pa(T(a.h,P.g.ad,30));ja=Math.min(475,ja);ja=Math.max(5,ja);var ma=Pa(T(a.h,P.g.pf,1E4)),U=aB(S);a.metadata.is_first_visit=!1;a.metadata.is_session_start=!1;a.metadata.join_timer_sec=0;U&&U.vh&&(a.metadata.join_timer_sec=Math.max(0,U.vh-Math.max(0,W-U.Ce)));var Ha=!1;U||(Ha=a.metadata.is_first_visit=!0,U={sessionId:String(W),
Fc:1,md:!1,Ce:W,Dc:!1,qe:void 0});W>U.Ce+60*ja&&(Ha=!0,U.sessionId=String(W),U.Fc++,U.md=!1,U.qe=void 0);if(Ha)a.metadata.is_session_start=!0,E.ml(a);else if(E.Zk()>ma||a.eventName==P.g.hc)U.md=!0;a.metadata.euid_mode_enabled?T(a.h,P.g.Ca)?U.Dc=!0:(U.Dc&&(U.qe=void 0),U.Dc=!1):U.Dc=!1;var Xa=U.qe;if(a.metadata.euid_mode_enabled){var Ca=T(a.h,P.g.Wc),Ja=Ca?1:8;Ca||(Ca=Xa,Ja=4);Ca||(Ca=yl(),Ja=7);var bb=Ja,Dc=a.metadata.enhanced_client_id_source;if(void 0===Dc||bb<=Dc)a.m[P.g.Wc]=Ca.toString(),a.metadata.enhanced_client_id_source=
bb}J?(a.copyToHitData(P.g.nb,U.sessionId),a.copyToHitData(P.g.Ud,U.Fc),a.copyToHitData(P.g.Td,U.md?1:0)):(a.m[P.g.nb]=U.sessionId,a.m[P.g.Ud]=U.Fc,a.m[P.g.Td]=U.md?1:0);a.metadata[P.g.cf]=U.Dc?1:0;cC(a);if(!T(a.h,P.g.qc)||!T(a.h,P.g.lb)){var Ec="",ad=G.location;if(ad){var ni=ad.pathname||"";"/"!=ni.charAt(0)&&(ni="/"+ni);Ec=ad.protocol+"//"+ad.hostname+ni+ad.search}a.copyToHitData(P.g.ka,Ec);var YE=a.copyToHitData,ZE=P.g.Ga,oi;a:{var Mt=ml("_opt_expid",void 0,void 0,P.g.T)[0];if(Mt){var Nt=decodeURIComponent(Mt).split("$");
if(3===Nt.length){oi=Nt[2];break a}}if(void 0!==Lh.ga4_referrer_override)oi=Lh.ga4_referrer_override;else{var Ot=ki("gtm.gtagReferrer."+a.target.Z);oi=Ot?""+Ot:G.referrer}}YE.call(a,ZE,oi||void 0);a.copyToHitData(P.g.Cb,G.title);a.copyToHitData(P.g.Aa,(gc.language||"").toLowerCase());var Pt=Oi();a.copyToHitData(P.g.Db,Pt.width+"x"+Pt.height);R(80)&&a.copyToHitData(P.g.Rb)}a.metadata.create_dc_join=!1;a.metadata.create_google_join=!1;if(!(R(66)&&HA(a)||a.metadata.is_merchant_center||!1===T(a.h,P.g.xb))&&
rB()&&Vk(P.g.H)){var pi=Kp(a,P.g.kb,T(a.h,P.g.kb));pi=pi||GA(a);(a.metadata.is_session_start||T(a.h,P.g.ef))&&(a.metadata.create_dc_join=!!pi);var Qt;Qt=a.metadata.join_timer_sec;pi&&0===(Qt||0)&&(a.metadata.join_timer_sec=60,a.metadata.create_google_join=!0)}dC(a);Bh.hasOwnProperty(a.eventName)&&(a.metadata.is_ecommerce=!0,a.copyToHitData(P.g.ba),a.copyToHitData(P.g.xa));a.copyToHitData(P.g.rf);
for(var Rt=T(a.h,P.g.ff)||[],dm=0;dm<Rt.length;dm++){var St=Rt[dm];if(St.rule_result){a.copyToHitData(P.g.rf,St.traffic_type);NA(3);break}}if(!a.metadata.is_merchant_center&&Ms(a.h)){var Tt=iB(a)||{},aF=(yo(Tt[P.g.sc],!!Tt[P.g.U])?po(!0)._fplc:void 0)||(0<ml("FPLC",void 0,void 0,P.g.T).length?void 0:"0");a.m._fplc=aF}if(void 0!==T(a.h,P.g.Qd))a.copyToHitData(P.g.Qd);else{var Ut=T(a.h,P.g.Sd),em,qi;a:{if(lB){var fm=iB(a)||{};if(fm&&fm[P.g.U])for(var Vt=cj(ej(a.m[P.g.Ga]),"host",!0),ri=fm[P.g.U],qg=
0;qg<ri.length;qg++)if(ri[qg]instanceof RegExp){if(ri[qg].test(Vt)){qi=!0;break a}}else if(0<=Vt.indexOf(ri[qg])){qi=!0;break a}}qi=!1}if(!(em=qi)){var si;if(si=Ut)a:{for(var Wt=Ut.include_conditions||[],bF=cj(ej(a.m[P.g.Ga]),"host",!0),gm=0;gm<Wt.length;gm++)if(Wt[gm].test(bF)){si=!0;break a}si=!1}em=si}em&&(a.m[P.g.Qd]="1",NA(4))}HA(a)&&(KA(a,"uc",Di()),Ek()&&KA(a,"rnd",El()));
if(R(66)&&HA(a)){Kp(a,P.g.kb,!1)&&KA(a,"gse",1);!1===T(a.h,P.g.xb)&&KA(a,"ngs",1);Fi()&&KA(a,"ga_rd",1);rB()||KA(a,"ngst",1);var Xt=Ji();Xt&&KA(a,"etld",Xt)}if(R(94)&&HA(a)){var Yt=xB?Hi():"";Yt&&KA(a,"gcsub",Yt)}HA(a)&&Ek()&&(Fk()&&KA(a,"gcd",$k()),T(a.h,P.g.na)&&KA(a,"adr",1));if(HA(a)){var Zt=Tq();Zt&&KA(a,"us_privacy",Zt);var $t=Vm();$t&&KA(a,"gdpr",$t);var au=Um();au&&KA(a,"gdpr_consent",au)}a:if(R(11))if(!Pn(z))O(87);else if(void 0!==Rn){O(85);var bu=Nn();if(bu){if(R(59)){if(T(a.h,P.g.Zc)&&
!HA(a))break a}else if(T(a.h,P.g.Zc))break a;Vn(bu,a)}else O(86)}R(61)&&T(a.h,P.g.lb)&&NA(12);if(R(78)){var hm=Bq(Aq());hm||eC||(eC=!0,wm(),hm=Bq(Aq()));hm&&(a.m[P.g.Ob]="1")}if(a.eventName==P.g.Ka){var du=T(a.h,P.g.Ra),cF=T(a.h,P.g.jb),eu=void 0;eu=a.m[du];cF(eu||T(a.h,du));a.isAborted=!0}if(!R(26)&&!a.h.eventMetadata.syn_or_mod){var im=T(a.h,P.g.Ye);if(im){var ge=Vc(a.h.h);Vc(a.m,ge);for(var fu=im.edit_rules||[],gu=!1,jm=0;jm<fu.length;jm++){var ti;a:{var ui=a,he=fu[jm];if(nA(ui.eventName,ge,he.event_name_predicate,
he.conditions||[])){if(he.new_event_name){var hu=k(he.new_event_name)?String(he.new_event_name):jA(ui.eventName,ge,he.new_event_name);if(PA(hu)){ti=!1;break a}ui.eventName=String(hu)}QA(ui.eventName,ge,he);NA(2);ti=!0}else ti=!1}ti&&(gu=!0)}for(var iu=im.synthesis_rules||[],km=0;km<iu.length;km++){var lm=a,rg=iu[km];if(nA(lm.eventName,ge,rg.event_name_predicate,rg.conditions||[])){var mm=rg.new_event_name;if(!PA(mm)){var ju=rg.merge_source_event_params?Vc(ge):{};QA(mm,ju,rg);var ku={},nm={eventMetadata:(ku.syn_or_mod=
!0,ku)};nm.eventMetadata.event_usage=[11];kA&&nm.eventMetadata.event_usage.push(10);var dF=tu(lm.target.Z,mm,ju);wu(dF,lm.h.eventId,nm);NA(1)}}}if(gu){for(var om={},lu={eventMetadata:(om.syn_or_mod=!0,om.is_external_event=!!a.h.eventMetadata.is_external_event,om)},mu,pm=[],nu=vb.GA4_EVENT||[],vi=0;vi<nu.length;vi++)nu[vi]&&pm.push(vi);(mu=0<pm.length?pm:void 0)&&(lu.eventMetadata.event_usage=mu);var eF=tu(a.target.Z,a.eventName,ge);wu(eF,a.h.eventId,lu);a.isAborted=!0}}}a.copyToHitData(P.g.Ca);a.copyToHitData(P.g.Ta);
Np(a);SB(a);a.metadata.em_event&&NA(14);var qm=a.metadata.event_usage;if(Ia(qm))for(var rm=0;rm<qm.length;rm++)NA(qm[rm]);var ou=yb("GA4_EVENT");ou&&(a.m._eu=ou);if(a.metadata.speculative||a.isAborted){a.h.W();xb();return}var fF=this.zj,pu,gF=this.h,sm;a:{var tm=hB(a);if(tm){if(fB(tm,a)){sm=tm;break a}O(25);a.isAborted=!0}sm=void 0}var hF=sm;pu={clientId:$A(a,gF),Dj:hF};fF.call(this,pu);this.xd=!0;this.mm(a);if(HA(a)){var iF=a.metadata.is_conversion;("page_view"===a.eventName||iF)&&XB(this,a)}this.C.Lh();
this.fe=fC(a,this.fe);a.copyToHitData(P.g.vg);T(a.h,P.g.Zc)&&(a.m[P.g.Zc]=!0,R(75)&&HA(a)||WB(a,P.g.Db));if(a.isAborted){a.h.W();xb();return}this.gj(a);a.h.P()}catch(wG){a.h.W()}xb()};aa.gj=function(a){this.ub.add(a)};aa.zj=function(a){var b=a.clientId,c=a.Dj;b&&c&&(this.h=b,this.B=c)};aa.flush=function(){this.ub.flush()};aa.mm=function(a){var b=this;if(!this.M){var c=Vk(P.g.T);cl([P.g.T],function(){var d=Vk(P.g.T);if(c^d&&b.m&&b.B&&b.h){var e=b.h;if(d){var f=XA(b.m);if(f){b.h=f;var g=gB(b.m);g&&
(b.B=cB(g,b.B,b.m))}else ZA(b.h,b.m),VA(b.h,!0);fB(b.B,b.m);var h={};h[P.g.ef]=e;var m=tu(b.R,P.g.yd,h);wu(m,a.h.eventId,{});}else{b.B=void 0;b.h=void 0;z.gaGlobal={};}c=d}});this.M=!0}};aa.sk=function(a){a.eventName!==P.g.Ka&&this.C.rk(a)};var bC=function(a){function b(c,d){xh[c]||void 0===
d||(a.m[c]=d)}l(a.h.m,b);l(a.h.h,b)},cC=function(a){var b=jq(a.h),c=function(d,e){ZB[d]&&(a.m[d]=e)};Uc(b[P.g.Pc])?l(b[P.g.Pc],function(d,e){c((P.g.Pc+"_"+d).toLowerCase(),e)}):l(b,c)},dC=function(a){var b=function(c){return!!c&&c.conversion};a.metadata.is_conversion=b(JA(a));a.metadata.is_first_visit&&(a.metadata.is_first_visit_conversion=b(JA(a,"first_visit")));a.metadata.is_session_start&&(a.metadata.is_session_start_conversion=b(JA(a,"session_start")))},fC=function(a,b){var c=void 0;return c},eC=!1;
function aC(a){l(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[P.g.Ta]||{};l(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var gC=function(a){if("prerender"==G.visibilityState)return!1;a();return!0},hC=function(a){if(!gC(a)){var b=!1,c=function(){!b&&gC(a)&&(b=!0,sc(G,"visibilitychange",c),O(55))};rc(G,"visibilitychange",c);O(54)}};var jC=function(a,b){hC(function(){var c=up(a);if(c){var d=iC(c,b);Uu.register(a,d)}});};function iC(a,b){var c=function(){};var d=new $B(a.id),e="MC"===a.prefix;c=function(f,g,h,m){e&&(m.eventMetadata.is_merchant_center=!0);d.Sl(g,h,m)};kC(a,d,b);return c}
function kC(a,b,c){var d=b.C,e={},f={eventId:c,eventMetadata:(e.batch_on_navigation=!0,e)};d.Xl(function(){LA=!0;Uu.flush();1E3<=d.Kf()&&gc.sendBeacon&&Vu(P.g.yd,{},a.id,f);b.flush();d.Aj(function(){LA=!1;d.Aj()})});};var VD=iC;function XD(a,b,c){var d=this;}XD.K="internal.gtagConfig";function YD(){var a={};return a};
function $D(a,b){}$D.N="gtagSet";function aE(a,b){}aE.N="injectHiddenIframe";var bE={};
function dE(a,b,c,d){}var eE=Object.freeze({dl:1,id:1}),fE={};
function gE(a,b,c,d){}dE.N="injectScript";gE.K="internal.injectScript";function hE(a){var b=!0;return b}hE.N="isConsentGranted";var iE=function(){var a=Gg(function(b){this.h.h.log("error",b)});a.N="JSON";return a};var jE=function(a){this.containerId=a};function kE(a,b){var c=this,d=null;return d}kE.K="internal.loadGoogleTag";var lE=function(){return!1},mE={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var nE=["textContent","value","tagName","children","childElementCount"];
function oE(a){var b;N(this,"read_dom_elements","css","*");for(var c=0;c<nE.length;c++)N(this,"access_dom_element_property",G.body,"read",nE[c]);var d=Xc(a)||{},e=Sj({zc:!!d.includeSelector,Ac:!!d.includeVisibility,jd:d.excludeElementSelectors,Ya:d.fieldFilters,Oh:!!d.selectMultipleElements});b=new kb;var f=new xa;b.set("elements",f);for(var g=e.elements,h=0;h<g.length;h++)f.push(pE(g[h]));void 0!==e.Hh&&b.set("preferredEmailElement",
pE(e.Hh));b.set("status",e.status);return b}
var pE=function(a){var b=new kb;b.set("userData",a.V);b.set("tagName",a.tagName);void 0!==a.querySelector&&b.set("querySelector",a.querySelector);void 0!==a.isVisible&&b.set("isVisible",a.isVisible);if(R(114)){}else switch(a.type){case "1":b.set("type","email")}return b};oE.K="internal.locateUserData";function qE(){}qE.N="logToConsole";function rE(a){var b=void 0;if("string"!==typeof a)return;a&&0===a.indexOf("//")&&(a=G.location.protocol+a);if("function"===typeof URL){var c;a:{var d;try{d=new URL(a)}catch(w){c=void 0;break a}for(var e={},f=Array.from(d.searchParams),g=0;g<f.length;g++){var h=f[g][0],m=f[g][1];e.hasOwnProperty(h)?"string"===typeof e[h]?e[h]=[e[h],m]:e[h].push(m):e[h]=m}c=Wc({href:d.href,origin:d.origin,protocol:d.protocol,username:d.username,password:d.password,host:d.host,
hostname:d.hostname,port:d.port,pathname:d.pathname,search:d.search,searchParams:e,hash:d.hash})}return c}var n;try{n=ej(a)}catch(w){return}if(!n.protocol||!n.host)return;var p={};if(n.search)for(var q=n.search.replace("?","").split("&"),r=0;r<q.length;r++){var t=q[r].split("="),u=t[0],v=decodeURIComponent(t.splice(1).join("=")).replace(/\+/g," ");p.hasOwnProperty(u)?"string"===typeof p[u]?p[u]=[p[u],v]:p[u].push(v):p[u]=v}n.searchParams=p;n.origin=n.protocol+"//"+n.host;n.username="";n.password=
"";b=Wc(n);return b}rE.N="parseUrl";function sE(a){}sE.K="internal.processAsNewEvent";function tE(a,b){var c=!1;return c}tE.N="queryPermission";function uE(){var a="";return a}uE.N="readCharacterSet";function vE(){var a="";return a}vE.N="readTitle";function wE(a,b){var c=this;M(F(this),["destinationId:!string","callback:!Fn"],arguments),Op(a,function(d){b.h(c.h,Wc(d,c.h,1))});}wE.K="internal.registerCcdCallback";var xE=Object.freeze(["config","event","get","set"]);function yE(a,b,c){}yE.K="internal.registerGtagCommandListener";function zE(a,b){var c=!1;return c}zE.K="internal.removeDataLayerEventListener";function AE(){}AE.N="resetDataLayer";function BE(a,b,c,d){M(F(this),["destinationIds:!*","eventName:!*","eventParameters:?DustMap","messageContext:?DustMap"],arguments);var e=c?Xc(c):{},f=Xc(a);Array.isArray(f)||(f=[f]);b=String(b);var g=d?Xc(d):{},h=this.h.h;g.originatingEntity=Yy(h);for(var m=0;m<f.length;m++){var n=f[m];if("string"===typeof n){var p=Vc(e),
q=Vc(g),r=tu(n,b,p);wu(r,g.eventId||h.eventId,q)}}}BE.K="internal.sendGtagEvent";function CE(a,b,c){}CE.N="sendPixel";function DE(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f}DE.N="setCookie";function EE(a,b){}EE.N="setCorePlatformServices";function FE(a){}FE.N="setDefaultConsentState";function GE(a,b){}GE.K="internal.setDelegatedConsentType";function HE(a,b,c){return!1}HE.N="setInWindow";function IE(a,b,c){M(F(this),["targetId:!string","name:!string","value:!*"],arguments);var d=Ni(a)||{};d[b]=Xc(c,this.h);var e=a;Li||Mi();Ki[e]=d;}IE.K="internal.setProductSettingsParameter";function JE(a,b,c){M(F(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=$u(Uu,a).h,f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!Uc(e[d[f]]))throw Error("setRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}e[d[f]]=Xc(c,this.h);}JE.K="internal.setRemoteConfigParameter";function KE(a,b,c,d){var e=this;}KE.N="sha256";function LE(a,b,c){}
LE.K="internal.sortRemoteConfigParameters";var ME={},NE={};ME.N="templateStorage";ME.getItem=function(a){var b=null;N(this,"access_template_storage");var c=this.h.h;if(!c)throw Error("invalid program state");var d=c.we();NE[d]&&(b=NE[d].hasOwnProperty("gtm."+a)?NE[d]["gtm."+a]:null);return b};
ME.setItem=function(a,b){N(this,"access_template_storage");var c=this.h.h;if(!c)throw Error("invalid program state");var d=c.we();NE[d]=NE[d]||{};NE[d]["gtm."+a]=b;};
ME.removeItem=function(a){N(this,"access_template_storage");var b=this.h.h;if(!b)throw Error("invalid program state");var c=b.we();if(!NE[c]||!NE[c].hasOwnProperty("gtm."+a))return;delete NE[c]["gtm."+a];};ME.clear=function(){N(this,"access_template_storage");var a=this.h.h;if(!a)throw Error("invalid program state");delete NE[a.we()];};var OE=function(a){var b;return b};function PE(a){}PE.N="updateConsentState";var QE=function(){var a=new Qg,b=function(d){return Sg(a,d.K,d)},c=function(d){return a.add(d.N,d)};c(Tx);c(Zx);c(Ly);c(Oy);c(Py);c(Ty);c(Uy);c(Wy);c(iE());c(Xy);c(sA);c(zA);c(AA);c(BA);c(EA);c($D);c(aE);c(dE);c(hE);c(qE);c(rE);c(tE);c(uE);c(vE);c(CE);c(DE);c(FE);c(HE);c(KE);c(ME);c(PE);a.add("Math",og());a.add("Object",Og);a.add("TestHelper",Tg());a.add("assertApi",kg);a.add("assertThat",lg);a.add("decodeUri",sg);a.add("decodeUriComponent",tg);a.add("encodeUri",ug);a.add("encodeUriComponent",vg);
a.add("fail",Bg);a.add("generateRandom",Cg);a.add("getContainerVersion",Dg);a.add("getTimestamp",Eg);a.add("getTimestampMillis",Eg);a.add("getType",Fg);a.add("makeInteger",Hg);a.add("makeNumber",Ig);a.add("makeString",Jg);a.add("makeTableMap",Kg);a.add("mock",Ng);a.add("fromBase64",rA,!("atob"in z));a.add("localStorage",mE,!lE());a.add("toBase64",OE,!("btoa"in z));b(Wx);b(oy);b(vy);b(Ay);b(Jy);b(My);b(Ry);b(Vy);b(pg);b($y);b(kz);b(pz);b(uz);b(Dz);b(Hz);b(Sz);b(eA);b(wg);b(gA);b(tA);b(uA);b(xA);b(yA);
b(CA);b(DA);b(XD);b(gE);b(kE);b(oE);b(sE);b(wE);b(yE);b(zE);b(BE);b(GE);b(IE);b(JE);b(LE);b(Ug);Sg(a,"internal.GtagSchema",YD());

R(105)&&c(EE);return function(d){var e;if(a.h.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.m.hasOwnProperty(d)){var g=!1,h=this.h.h;if(h){var m=h.we();if(m){0!==m.indexOf("__cvt_")&&(g=!0);}}else g=
!0;f=g}if(f){var n=a.m.hasOwnProperty(d)?a.m[d]:void 0;e=n}else throw Error(d+" is not a valid API name.");}return e}};var RE=function(){return!1},SE=function(){var a={};return function(b,c,d){}};var TE;
function UE(){var a=TE;return function(b,c,d){var e=d&&d.event;VE(c);var f=new kb;l(c,function(q,r){var t=Wc(r);void 0===t&&void 0!==r&&O(44);f.set(q,t)});a.h.h.C=ef();var g={Ik:rf(b),eventId:void 0!==e?e.id:void 0,priorityId:void 0!==e?e.priorityId:void 0,Df:void 0!==e?function(q){return e.Xb.Df(q)}:void 0,we:function(){return b},log:function(){},Rk:{index:d&&d.index,type:d&&d.type,name:d&&d.name}};if(RE()){var h=SE(),m=void 0,n=void 0;g.ab={Ph:[],ne:{},qb:function(q,r,t){1===r&&(m=q);7===r&&(n=
t);h(q,r,t)},Ah:Lg()};g.log=function(q,r){if(m){var t=Array.prototype.slice.call(arguments,1);h(m,4,{level:q,source:n,message:t})}}}var p=ne(a,g,[b,f]);a.h.h.C=void 0;p instanceof sa&&"return"===p.h&&(p=p.m);return Xc(p)}}function VE(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){I(b)});Fa(c)&&(a.gtmOnFailure=function(){I(c)})}
function WE(){TE.h.h.M=function(a,b,c){Lh.SANDBOXED_JS_SEMAPHORE=Lh.SANDBOXED_JS_SEMAPHORE||0;Lh.SANDBOXED_JS_SEMAPHORE++;try{return a.apply(b,c)}finally{Lh.SANDBOXED_JS_SEMAPHORE--}}}function XE(a){void 0!==a&&l(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ci[e]=ci[e]||[];ci[e].push(b)}})};var $E=encodeURI,Y=encodeURIComponent,jF=function(a,b,c){qc(a,b,c)},kF=function(a,b){if(!a)return!1;var c=cj(ej(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},lF=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&
a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Z={o:{}};Z.o.access_template_storage=["google"],function(){(function(a){Z.__access_template_storage=a;Z.__access_template_storage.s="access_template_storage";Z.__access_template_storage.isVendorTemplate=!0;Z.__access_template_storage.priorityOverride=0;Z.__access_template_storage.isInfrastructure=!1})(function(){return{assert:function(){},X:function(){return{}}}})}();

Z.o.c=["google"],function(){(function(a){Z.__c=a;Z.__c.s="c";Z.__c.isVendorTemplate=!0;Z.__c.priorityOverride=0;Z.__c.isInfrastructure=!1})(function(a){sx(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.o.e=["google"],function(){(function(a){Z.__e=a;Z.__e.s="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!1})(function(a){return String(a.vtp_gtmCachedValues.event)})}();
Z.o.v=["google"],function(){(function(a){Z.__v=a;Z.__v.s="v";Z.__v.isVendorTemplate=!0;Z.__v.priorityOverride=0;Z.__v.isInfrastructure=!1})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=kx(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;sx(d,"v",a.vtp_gtmEventId);return d})}();

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
!0;Z.__gct.priorityOverride=0;Z.__gct.isInfrastructure=!1})(function(d){var e={},f=d.vtp_sessionDuration;0<f&&(e[P.g.ad]=f);e[P.g.Jd]=d.vtp_eventSettings;e[P.g.Ye]=d.vtp_dynamicEventSettings;e[P.g.kb]=1===d.vtp_googleSignals;e[P.g.wg]=d.vtp_foreignTld;e[P.g.ug]=1===d.vtp_restrictDomain;e[P.g.ff]=d.vtp_internalTrafficResults;var g=P.g.Ba,h=d.vtp_linker;h&&h[P.g.U]&&(h[P.g.U]=a(h[P.g.U]));e[g]=h;var m=P.g.Sd,n=d.vtp_referralExclusionDefinition;n&&n.include_conditions&&(n.include_conditions=a(n.include_conditions));
e[m]=n;var p=d.vtp_trackingId,q=$u(Uu,p).h,r=q.referral_exclusion_conditions;r&&(r.length&&"object"===typeof r[0]&&(r=c(r)),e[P.g.Sd]={include_conditions:a(r)});var t=q.cross_domain_conditions;if(t){t.length&&"object"===typeof t[0]&&(t=c(t));var u={};e[P.g.Ba]=(u[P.g.U]=a(t),u[P.g.Bb]=!0,u[P.g.sc]=!0,u[P.g.Qb]="query",u)}cv(p,e);jC(p,d.vtp_gtmEventId);I(d.vtp_gtmOnSuccess)})}();

Z.o.get=["google"],function(){(function(a){Z.__get=a;Z.__get.s="get";Z.__get.isVendorTemplate=!0;Z.__get.priorityOverride=0;Z.__get.isInfrastructure=!1})(function(a){var b=a.vtp_settings,c=b.eventParameters||{},d=String(a.vtp_eventName),e={};e.eventId=a.vtp_gtmEventId;e.priorityId=a.vtp_gtmPriorityId;a.vtp_deferrable&&(e.deferrable=!0);var f=tu(String(b.streamId),d,c);wu(f,e.eventId,e);a.vtp_gtmOnSuccess()})}();



Z.o.access_dom_element_property=["google"],function(){function a(b,c,d,e){var f={property:e,read:!1,write:!1};switch(d){case "read":f.read=!0;break;case "write":f.write=!0;break;default:throw Error("Invalid "+b+" operation "+d);}return f}(function(b){Z.__access_dom_element_property=b;Z.__access_dom_element_property.s="access_dom_element_property";Z.__access_dom_element_property.isVendorTemplate=!0;Z.__access_dom_element_property.priorityOverride=0;Z.__access_dom_element_property.isInfrastructure=
!1})(function(b){for(var c=b.vtp_properties||[],d=b.vtp_createPermissionError,e=[],f=[],g=0;g<c.length;g++){var h=c[g],m=h.property;h.read&&e.push(m);h.write&&f.push(m)}return{assert:function(n,p,q,r){if(!k(r))throw d(n,{},"Property must be a string.");if("read"===q){if(-1<e.indexOf(r))return}else if("write"===q){if(-1<f.indexOf(r))return}else throw d(n,{},"Operation must be either 'read' or 'write', was "+q);throw d(n,{},"Prohibited "+q+" on "+p.tagName+" property "+r+".");},X:a}})}();


var uG={};uG.dataLayer=li;uG.callback=function(a){bi.hasOwnProperty(a)&&Fa(bi[a])&&bi[a]();delete bi[a]};uG.bootstrap=0;uG._spx=!1;
function vG(){Lh[K.D]=Lh[K.D]||uG;K.Lb&&(Lh["ctid_"+K.Lb]=uG);Ml();Pl()||l(Ql(),function(a,b){Qs(a,b.transportUrl,b.context);O(92)});Ya(ci,Z.o);Ve=jf}
(function(a){function b(){m=G.documentElement.getAttribute("data-tag-assistant-present");hw(m)&&(h=g.mk)}if(!z["__TAGGY_INSTALLED"]){var c=!1;if(G.referrer){var d=ej(G.referrer);c="cct.google"===bj(d,"host")}if(!c){var e=ml("googTaggyReferrer");c=e.length&&e[0].length}c&&(z["__TAGGY_INSTALLED"]=!0,nc("https://cct.google/taggy/agent.js"))}if(Xh)a();else{var f=function(u){var v="GTM",w="GTM";Rh?(v="OGT",w="GTAG"):Xh&&(w=v="OPT");var x=z["google.tagmanager.debugui2.queue"];x||(x=[],
z["google.tagmanager.debugui2.queue"]=x,nc("https://"+Kh.Ve+"/debug/bootstrap?id="+K.D+"&src="+w+"&cond="+u+"&gtm="+Sl()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:hc,containerProduct:v,debug:!1,id:K.D,destinations:Kl()}};y.data.resume=function(){a()};Kh.Oj&&(y.data.initialPublish=!0);x.push(y)},g={Cm:1,nk:2,Ak:3,Qj:4,mk:5},h=void 0,m=void 0,n=cj(z.location,"query",!1,void 0,"gtm_debug");hw(n)&&(h=g.nk);if(!h&&G.referrer){var p=ej(G.referrer);"tagassistant.google.com"===bj(p,"host")&&(h=g.Ak)}if(!h){var q=
ml("__TAG_ASSISTANT");q.length&&q[0].length&&(h=g.Qj)}h||b();if(!h&&iw(m)){var r=function(){if(t)return!0;t=!0;b();h&&hc?f(h):a()},t=!1;rc(G,"TADebugSignal",function(){r()},!1);z.setTimeout(function(){r()},200)}else h&&hc?f(h):a()}})(function(){if(R(70)){var a=Ir(Dr.I.Zf,K.D);Jr(a)}gk().m();Tm();if(K.Lb?Lh["ctid_"+K.Lb]:Lh[K.D]){var b=Lh.zones;b&&b.unregisterChild(Jl());}else{
(R(11)||R(13)||R(55)||R(48))&&Sn();for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Le.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Oe.push(f[g]);for(var h=c.predicates||[],m=0;m<h.length;m++)Ne.push(h[m]);for(var n=c.rules||[],p=0;p<n.length;p++){for(var q=n[p],r={},t=0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Me.push(r)}Qe=Z;Re=Rx;qf=new pf;var u=data.sandboxed_scripts,v=data.security_groups,w=data.infra,x=data.runtime||
[],y=data.runtime_lines;TE=new le;WE();Ke=UE();var A=TE,B=QE();nb(A.h,"require",B);for(var D=0;D<x.length;D++){var E=x[D];if(!Ia(E)||3>E.length){if(0===E.length)continue;break}y&&y[D]&&y[D].length&&bf(E,y[D]);try{TE.execute(E)}catch(Ec){}}if(void 0!==u)for(var J=["sandboxedScripts"],H=0;H<u.length;H++){var L=u[H].replace(/^_*/,"");ci[L]=J}XE(v);if(void 0!==w)for(var Q=0;Q<w.length;Q++)di[w[Q]]=!0;vG();if(R(102)){for(var ea=Ci["7"],ia=ea?ea.split("|"):[],W={},S=0;S<ia.length;S++)W[ia[S]]=!0;for(var ja=
0;ja<Nk.length;ja++){var ma=Nk[ja],U=W[ma]?"granted":"denied";nk().implicit(ma,U)}}gw();et=!1;ft=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ht();else{rc(G,"DOMContentLoaded",ht);rc(G,"readystatechange",ht);if(G.createEventObject&&G.documentElement.doScroll){var Ha=!0;try{Ha=!z.frameElement}catch(Ec){}Ha&&it()}rc(z,"load",ht)}vv=!1;"complete"===G.readyState?xv():rc(z,"load",xv);cn&&z.setInterval(gn,864E5);
wb("HEALTH",1);ai=Ua();uG.bootstrap=ai;if(R(70)){var bb=Ir(Dr.I.Xh,K.D);if(Jr(bb)){var Dc=Ir(Dr.I.Zf,K.D);Kr(bb,Dc)}}}});

})()


};
window.moduloBuild.nameToHash.configuration1 = "xx4mj0f9";

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

window.moduloBuild.modules["x1m45dof"] = function library_EndorsementsGallery (modulo) {

        const def = modulo.definitions['library_EndorsementsGallery'];
        class x_EndorsementsGallery extends window.HTMLElement {
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
        modulo.registry.utils.initClass(modulo, def, x_EndorsementsGallery);
        window.customElements.define(def.TagName, x_EndorsementsGallery);
        return x_EndorsementsGallery;
    
};
window.moduloBuild.nameToHash.library_EndorsementsGallery = "x1m45dof";

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

window.moduloBuild.modules["xx5bl57u"] = function library_Banner (modulo) {

        const def = modulo.definitions['library_Banner'];
        class x_Banner extends window.HTMLElement {
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
        modulo.registry.utils.initClass(modulo, def, x_Banner);
        window.customElements.define(def.TagName, x_Banner);
        return x_Banner;
    
};
window.moduloBuild.nameToHash.library_Banner = "xx5bl57u";

window.moduloBuild.modules["x14goo7g"] = function library_AllBanners (modulo) {

        const def = modulo.definitions['library_AllBanners'];
        class x_AllBanners extends window.HTMLElement {
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
        modulo.registry.utils.initClass(modulo, def, x_AllBanners);
        window.customElements.define(def.TagName, x_AllBanners);
        return x_AllBanners;
    
};
window.moduloBuild.nameToHash.library_AllBanners = "x14goo7g";

window.moduloBuild.modules["xxt562ig"] = function library_Page_script (modulo) {
var script = { exports: {} }; var props, staticdata, element;

        function prepareCallback() {
            element.removeAttribute('title'); // get rid of annoying title attr
            // For now, store the navigation array and generate year in JS
            let markdown = null;
            let hideJoin = false;
            if (props.markdown) {
                markdown = modulo.registry.utils.doMarkdown(element.originalHTML);
            }
            if (props.navselected.includes('contact')) {
                hideJoin = true;
            }
            return {
                currentYear: (new Date()).getFullYear(),
                navigation: staticdata.navigation,
                smallNav: staticdata.smallNav,
                markdown,
                hideJoin,
            };
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {props=o.props; staticdata=o.staticdata; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_Page_script = "xxt562ig";

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

window.moduloBuild.modules["x1bedb2n"] = function library_Banner_script (modulo) {
var script = { exports: {} }; var props;

        function prepareCallback() {
            let expired = false;
            if (props.expiry) {
                const [ year, month, day] = props.expiry.split('-');
                const expiry = new Date(Number(year), Number(month) - 1, Number(day));
                expired = expiry < new Date(); // in the past!
            }
            return { expired };
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {props=o.props}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_Banner_script = "x1bedb2n";

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

window.moduloBuild.modules["xxr6d91n"] = function library_Page_template (modulo) {
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
  OUT.push("\n\n<x-AllBanners></x-AllBanners>\n\n"); // "<x-AllBanners></x-AllBanners>"
  if (!(CTX.script.hideJoin)) { // "if not script.hideJoin"
  OUT.push("\n    <div class=\"hero-inset layout-container hero-inset--alt\"\n        style=\" background: linear-gradient(to top, #ffffff55, #ffffff99),\n                            url('/static/images/images-landing/atu_photo.JPG') 0 -100px;\n        height: 400px;\">\n        <div class=\"j4s-BtnBox\" style=\"height: 200px; margin-top: 120px;\">\n            <h3><span style=\"background: white; line-height: 1.4\">\n            JOIN THE CAMPAIGN<br />Become a volunteer, <br />or make a donation!\n            </span></h3>\n            <a class=\"j4s-Btn\" href=\"/contact/volunteer.html\">Volunteer<br />&#8640;</a>\n            <a class=\"j4s-Btn\" href=\"/contact/donate.html\">Donate<br />&#8640;</a>\n        </div>\n    </div>\n"); // "<div class=\"hero-inset layout-container hero-inset--alt\" style=\" background: linear-gradient(to top, #ffffff55, #ffffff99), url('/static/images/images-landing/atu_photo.JPG') 0 -100px; height: 400px;\"><div class=\"j4s-BtnBox\" style=\"height: 200px; margin-top: 120px;\"><h3><span style=\"background: white; line-height: 1.4\"> JOIN THE CAMPAIGN<br />Become a volunteer, <br />or make a donation! </span></h3><a class=\"j4s-Btn\" href=\"/contact/volunteer.html\">Volunteer<br />&#8640;</a><a class=\"j4s-Btn\" href=\"/contact/donate.html\">Donate<br />&#8640;</a></div></div>"
  } // "endif"
  OUT.push("\n\n<footer class=\"Page-footer layout-container\">\n    "); // "<footer class=\"Page-footer layout-container\">"
  OUT.push(CTX.template_footer.render(CTX)); // "include template_footer"
  OUT.push("\n</footer>\n</body>\n"); // "</footer></body>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Page_template = "xxr6d91n";

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

window.moduloBuild.modules["xx1tpqpl"] = function library_EndorsementsGallery_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<div class=\"endorsements-gallery\" >\n    <img\n        src=\"/static/images/endorsements/2305/kevin_murphy_facebook.jpg\"\n    />\n    <img\n        src=\"/static/images/endorsements/2305/alfredtwu_w_twitter.jpg\"\n    />\n    <img\n        src=\"/static/images/endorsements/2305/pamprice_pga.png\"\n    />\n    "); // "<div class=\"endorsements-gallery\" ><img src=\"/static/images/endorsements/2305/kevin_murphy_facebook.jpg\" /><img src=\"/static/images/endorsements/2305/alfredtwu_w_twitter.jpg\" /><img src=\"/static/images/endorsements/2305/pamprice_pga.png\" />"
  if (CTX.props.button) { // "if props.button"
  OUT.push("\n        <img\n            src=\"/static/images/endorsements/2305/pinole_pa_instagram.jpg\" \n        />\n        <a class=\"j4s-Btn\" href=\"/endorsements/\">\n        Endorsed by 10+ East Bay <br />\n        Mayors & Councilmembers<br />\n        &#8640;</a>\n    "); // "<img src=\"/static/images/endorsements/2305/pinole_pa_instagram.jpg\" /><a class=\"j4s-Btn\" href=\"/endorsements/\"> Endorsed by 10+ East Bay <br /> Mayors & Councilmembers<br /> &#8640;</a>"
  } // "endif"
  OUT.push("\n</div>\n"); // "</div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_EndorsementsGallery_template = "xx1tpqpl";

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

window.moduloBuild.modules["x1uhts7l"] = function library_Banner_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n"); // ""
  if (!(CTX.script.expired)) { // "if not script.expired"
  OUT.push("\n    <a href=\""); // "<a href=\""
  OUT.push(G.escapeText(CTX.props.url)); // "props.url"
  OUT.push("\">\n        🗓️\n        <strong>"); // "\"> 🗓️ <strong>"
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push("</strong>\n        "); // "</strong>"
  OUT.push(G.escapeText(CTX.props.text)); // "props.text"
  OUT.push("\n        <strong>"); // "<strong>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.date,""))); // "props.date|default:\"\""
  OUT.push("</strong>\n        <span>"); // "</strong><span>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.cta,"RSVP"))); // "props.cta|default:\"RSVP\""
  OUT.push(" &#8640;</span>\n    </a>\n"); // "&#8640;</span></a>"
  } // "endif"
  OUT.push("\n\n"); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Banner_template = "x1uhts7l";

window.moduloBuild.modules["x1a3111r"] = function library_AllBanners_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n<x-Banner\n    style=\"grid-column: 1 / span 3\"\n    title=\"JOIN OUR LAUNCH PICNIC!\"\n    text=\"Jovanka Beckles for State Senate Kick-Off\"\n    date=\"Sat May 13th at JFK Park in Richmond, CA\"\n    url=\"https://www.mobilize.us/jovanka4casenate/event/562724/\"\n    cta=\"Get details & RSVP\"\n    expiry=\"2023-05-14\"\n></x-Banner>\n\n"); // "<x-Banner style=\"grid-column: 1 / span 3\" title=\"JOIN OUR LAUNCH PICNIC!\" text=\"Jovanka Beckles for State Senate Kick-Off\" date=\"Sat May 13th at JFK Park in Richmond, CA\" url=\"https://www.mobilize.us/jovanka4casenate/event/562724/\" cta=\"Get details & RSVP\" expiry=\"2023-05-14\" ></x-Banner>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_AllBanners_template = "x1a3111r";

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

library: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library","DefinitionName":"library","Source":"http://127.0.0.1:6627/static/libraries/layout.html","ChildrenNames":["library_configuration","library_Page","library_NavBar","library_EndorsementsGallery","library_MobileNavBar","library_Banner","library_AllBanners"]}, 

library1: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library1","DefinitionName":"library1","Source":"http://127.0.0.1:6627/static/libraries/forms.html","ChildrenNames":["library1_ContactForm"]}, 

library_configuration: {"Parent":"library","DefName":null,"Type":"Configuration","DefBuilders":["Content|Code","DefinitionName|MainRequire"],"Name":"configuration","Source":"https://unpkg.com/showdown/dist/showdown.min.js"}, 

library_Page: {"Parent":"library","DefName":null,"mode":"vanish-into-document","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Page","Name":"Page","DefinitionName":"library_Page","ChildrenNames":["library_Page_props","library_Page_template_footer","library_Page_template","library_Page_staticdata","library_Page_script"],"namespace":"x","TagName":"x-page"}, 

library_NavBar: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"NavBar","Name":"NavBar","DefinitionName":"library_NavBar","ChildrenNames":["library_NavBar_props","library_NavBar_template","library_NavBar_state","library_NavBar_staticdata","library_NavBar_script","library_NavBar_style"],"namespace":"x","TagName":"x-navbar"}, 

library_EndorsementsGallery: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"EndorsementsGallery","Name":"EndorsementsGallery","DefinitionName":"library_EndorsementsGallery","ChildrenNames":["library_EndorsementsGallery_props","library_EndorsementsGallery_template","library_EndorsementsGallery_style"],"namespace":"x","TagName":"x-endorsementsgallery"}, 

library_MobileNavBar: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"MobileNavBar","Name":"MobileNavBar","DefinitionName":"library_MobileNavBar","ChildrenNames":["library_MobileNavBar_props","library_MobileNavBar_template","library_MobileNavBar_state","library_MobileNavBar_staticdata","library_MobileNavBar_script","library_MobileNavBar_style"],"namespace":"x","TagName":"x-mobilenavbar"}, 

library_Banner: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Banner","Name":"Banner","DefinitionName":"library_Banner","ChildrenNames":["library_Banner_props","library_Banner_template","library_Banner_style","library_Banner_script"],"namespace":"x","TagName":"x-banner"}, 

library_AllBanners: {"Parent":"library","DefName":null,"mode":"vanish","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"AllBanners","Name":"AllBanners","DefinitionName":"library_AllBanners","ChildrenNames":["library_AllBanners_template"],"namespace":"x","TagName":"x-allbanners"}, 

library_Page_props: {"Parent":"library_Page","DefName":null,"Content":"","Type":"Props","title":"","toptitle":"","bottomtitle":"","markdown":"","navselected":"","Name":"props","DefinitionName":"library_Page_props"}, 

library_Page_template_footer: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template_footer","DefinitionName":"library_Page_template_footer","Source":"http://127.0.0.1:6627/static/libraries/layout/Page-footer.html","Hash":"Txxp38t8d"}, 

library_Page_template: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_Page_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Page.html","Hash":"Txxr6d91n"}, 

library_Page_staticdata: {"Parent":"library_Page","DefName":null,"Content":"{\n\n    navigation: [\n        /*{\n            title: \"Leadership\",\n            file: \"index.html\",\n        },*/\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        */\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_Page_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_Page_script: {"Parent":"library_Page","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_Page_script","Directives":[]}, 

library_NavBar_props: {"Parent":"library_NavBar","DefName":null,"Content":"","Type":"Props","selected":"","navigation":"","Name":"props","DefinitionName":"library_NavBar_props"}, 

library_NavBar_template: {"Parent":"library_NavBar","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_NavBar_template","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.html","Hash":"Tx17sa8tf"}, 

library_NavBar_state: {"Parent":"library_NavBar","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"hide":false,"Name":"state","DefinitionName":"library_NavBar_state"}, 

library_NavBar_staticdata: {"Parent":"library_NavBar","DefName":null,"Content":"{\n\n    navigation: [\n        /*{\n            title: \"Leadership\",\n            file: \"index.html\",\n        },*/\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        */\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_NavBar_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_NavBar_script: {"Parent":"library_NavBar","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_NavBar_script","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.js","Directives":["imageMount"]}, 

library_NavBar_style: {"Parent":"library_NavBar","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_NavBar_style","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.css"}, 

library_EndorsementsGallery_props: {"Parent":"library_EndorsementsGallery","DefName":null,"Content":"","Type":"Props","button":"","Name":"props","DefinitionName":"library_EndorsementsGallery_props"}, 

library_EndorsementsGallery_template: {"Parent":"library_EndorsementsGallery","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_EndorsementsGallery_template","Source":"http://127.0.0.1:6627/static/libraries/layout/EndorsementsGallery.html","Hash":"Txx1tpqpl"}, 

library_EndorsementsGallery_style: {"Parent":"library_EndorsementsGallery","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_EndorsementsGallery_style","Source":"http://127.0.0.1:6627/static/libraries/layout/EndorsementsGallery.css"}, 

library_MobileNavBar_props: {"Parent":"library_MobileNavBar","DefName":null,"Content":"","Type":"Props","selected":"","navigation":"","Name":"props","DefinitionName":"library_MobileNavBar_props"}, 

library_MobileNavBar_template: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_MobileNavBar_template","Source":"http://127.0.0.1:6627/static/libraries/layout/MobileNavBar.html","Hash":"Tx1igtib6"}, 

library_MobileNavBar_state: {"Parent":"library_MobileNavBar","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"hide":null,"Name":"state","DefinitionName":"library_MobileNavBar_state"}, 

library_MobileNavBar_staticdata: {"Parent":"library_MobileNavBar","DefName":null,"Content":"{\n\n    navigation: [\n        /*{\n            title: \"Leadership\",\n            file: \"index.html\",\n        },*/\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        */\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_MobileNavBar_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_MobileNavBar_script: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_MobileNavBar_script","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.js","Directives":["imageMount"]}, 

library_MobileNavBar_style: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_MobileNavBar_style","Source":"http://127.0.0.1:6627/static/libraries/layout/MobileNavBar.css"}, 

library_Banner_props: {"Parent":"library_Banner","DefName":null,"Content":"","Type":"Props","cta":"","date":"","expiry":"","text":"","title":"","url":"","Name":"props","DefinitionName":"library_Banner_props"}, 

library_Banner_template: {"Parent":"library_Banner","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_Banner_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Banner.html","Hash":"Tx1uhts7l"}, 

library_Banner_style: {"Parent":"library_Banner","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_Banner_style","Source":"http://127.0.0.1:6627/static/libraries/layout/Banner.css"}, 

library_Banner_script: {"Parent":"library_Banner","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_Banner_script","Directives":[]}, 

library_AllBanners_template: {"Parent":"library_AllBanners","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_AllBanners_template","Source":"http://127.0.0.1:6627/static/libraries/layout/AllBanners.html","Hash":"Tx1a3111r"}, 

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

modulo.assets.require("library_EndorsementsGallery");

modulo.assets.require("library_MobileNavBar");

modulo.assets.require("library_Banner");

modulo.assets.require("library_AllBanners");

modulo.assets.require("library1_ContactForm");

