(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/EpmCacheApp/i18n/i18n.properties":
/*!************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/i18n/i18n.properties ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "BusinessPartnerFilterSet=BusinessPartnerFilterSet\nBusinessPartnerFilter_Detail=BusinessPartnerFilter Detail\nCreate_BusinessPartnerFilter_Detail=Create BusinessPartnerFilter Detail\nUpdate_BusinessPartnerFilter_Detail=Update BusinessPartnerFilter Detail\nBusinessPartnerSet=BusinessPartnerSet\nBusinessPartner_Detail=BusinessPartner Detail\nCreate_BusinessPartner_Detail=Create BusinessPartner Detail\nUpdate_BusinessPartner_Detail=Update BusinessPartner Detail\nCreate_SalesOrder=Create SalesOrder\nClientRegistrationSet=ClientRegistrationSet\nClientRegistration_Detail=ClientRegistration Detail\nCreate_ClientRegistration_Detail=Create ClientRegistration Detail\nUpdate_ClientRegistration_Detail=Update ClientRegistration Detail\nSalesOrderSet=SalesOrderSet\nSalesOrder_Detail=SalesOrder Detail\nCreate_SalesOrder_Detail=Create SalesOrder Detail\nUpdate_SalesOrder_Detail=Update SalesOrder Detail"

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/AppUpdateFailure.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/AppUpdateFailure.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/EpmCacheApp/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/AppUpdateSuccess.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/AppUpdateSuccess.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/EpmCacheApp/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/EpmCacheApp/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/ClientIsMultiUserMode.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/ClientIsMultiUserMode.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/GetClientSupportVersions.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/GetClientSupportVersions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/GetClientVersion.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/GetClientVersion.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/OnWillUpdate.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/OnWillUpdate.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/EpmCacheApp/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/EpmCacheApp/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/BootstrapOffline.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/BootstrapOffline.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BootstrapOffline)
/* harmony export */ });
let FINAL_INSTANCE_ID_KEY = "KEY_CLIENT_INSTANCE_ID";
let FINAL_INSTANCE_ID_KEY_REGISTERED = "KEY_CLIENT_INSTANCE_ID_REGISTERED";

async function BootstrapOffline(clientAPI) {
    let LOG_PREFIX = "Rule BootstrapOffline: ";
    console.log(LOG_PREFIX + "entered")
    let appSettings = clientAPI.nativescript.appSettingsModule;
    if (appSettings.hasKey(FINAL_INSTANCE_ID_KEY) && appSettings.hasKey(FINAL_INSTANCE_ID_KEY_REGISTERED)) {
        let sInstanceId = appSettings.getString(FINAL_INSTANCE_ID_KEY);
        console.log(LOG_PREFIX + "instance ID found: " + sInstanceId);
        clientAPI.executeAction("/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action");
        return sInstanceId;
    } else {
        return new Promise( async function(
            fnResolve,
            fnReject
        ) {
            try{
                console.log(LOG_PREFIX + "Registration missing or bootstrap incomplete - initializing sequence - opening online service");
                await clientAPI.executeAction("/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOnline.action");
                console.log(LOG_PREFIX + "Online service opened - performing registration for client instance ID");
                await clientAPI.executeAction("/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_CreateEntity.action");
                appSettings.setBoolean(FINAL_INSTANCE_ID_KEY_REGISTERED, true);
                fnResolve(appSettings.getString(FINAL_INSTANCE_ID_KEY));
                await clientAPI.executeAction("/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action");
                console.log(LOG_PREFIX + "Offline Store initialized");
                await clientAPI.executeAction("/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncStartedMessage.action");
                console.log(LOG_PREFIX + "Starting Sync");
            } catch (error) {
                fnReject(error);
            }
        });
    }
}


/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/GetOrGenerateClientInstanceId.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/GetOrGenerateClientInstanceId.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetOrGenerateClientInstanceId)
/* harmony export */ });
var clientAPI;
let FINAL_INSTANCE_ID_KEY = "KEY_CLIENT_INSTANCE_ID";

/**
 * Functions checks availability of Client-Instance-ID in appSettings Key-Value Store and returns or generates, persists and returns it.
 * @returns {String} uuidv4-compliant string
 */
function GetOrGenerateClientInstanceId(clientAPI) {
    let appSettings = clientAPI.nativescript.appSettingsModule;
    console.log("Rule GetOrGenerateClientInstanceId: entered");
    if(appSettings.hasKey(FINAL_INSTANCE_ID_KEY)){
        let sClientInstanceId = appSettings.getString(FINAL_INSTANCE_ID_KEY);
        console.log("Rule GetOrGenerateClientInstanceId: returning CID: " + sClientInstanceId);
        return sClientInstanceId;
    } else {
        console.log("Rule GetOrGenerateClientInstanceId: Generating CID");
        //Using unsafe simple Math UUID generation
        let sClientInstanceId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        console.log("Rule GetOrGenerateClientInstanceId: generated CID: " + sClientInstanceId);
        appSettings.setString(FINAL_INSTANCE_ID_KEY, sClientInstanceId);
        console.log("Rule GetOrGenerateClientInstanceId: persisted CID: " + sClientInstanceId);
        return sClientInstanceId;
    }
}


/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Logging/LogLevels.js":
/*!******************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Logging/LogLevels.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Logging/SetTraceCategories.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Logging/SetTraceCategories.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Logging/SetUserLogLevel.js":
/*!************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Logging/SetUserLogLevel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Logging/ToggleLogging.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Logging/ToggleLogging.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Logging/TraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Logging/TraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Logging/UserLogSetting.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Logging/UserLogSetting.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteConfirmation.js":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteConfirmation.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/EpmCacheApp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteConfirmation.js":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteConfirmation.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/EpmCacheApp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteConfirmation.js":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteConfirmation.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/EpmCacheApp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/ErrorArchive_CheckForSyncError.js":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/ErrorArchive_CheckForSyncError.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/EpmCacheApp/Services/MbtEpmDemo.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/EpmCacheApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteConfirmation.js":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteConfirmation.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/EpmCacheApp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/RandomInt64.js":
/*!************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/RandomInt64.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RandomInt64)
/* harmony export */ });
var clientAPI;

/**
 * Will generate a random positive number in Int64 range
 * @returns {number} random int
 */
function RandomInt64(clientAPI) {
    let min = 0, max = 2147483647;
    let iRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log("Rule RandomInt64: generated Number: " + iRandom)
    return iRandom;
}


/***/ }),

/***/ "./build.definitions/EpmCacheApp/Rules/Service/Initialize.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Rules/Service/Initialize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _MbtEpmDemo = context.executeAction('/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_MbtEpmDemo]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/EpmCacheApp/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let epmcacheapp_actions_application_appupdate_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/AppUpdate.action */ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdate.action")
let epmcacheapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdateFailureMessage.action")
let epmcacheapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdateProgressBanner.action")
let epmcacheapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdateSuccessMessage.action")
let epmcacheapp_actions_application_logout_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/Logout.action */ "./build.definitions/EpmCacheApp/Actions/Application/Logout.action")
let epmcacheapp_actions_application_navtoabout_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/NavToAbout.action */ "./build.definitions/EpmCacheApp/Actions/Application/NavToAbout.action")
let epmcacheapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/NavToActivityLog.action */ "./build.definitions/EpmCacheApp/Actions/Application/NavToActivityLog.action")
let epmcacheapp_actions_application_navtosupport_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/NavToSupport.action */ "./build.definitions/EpmCacheApp/Actions/Application/NavToSupport.action")
let epmcacheapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/OnWillUpdate.action */ "./build.definitions/EpmCacheApp/Actions/Application/OnWillUpdate.action")
let epmcacheapp_actions_application_reset_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/Reset.action */ "./build.definitions/EpmCacheApp/Actions/Application/Reset.action")
let epmcacheapp_actions_application_resetmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/ResetMessage.action */ "./build.definitions/EpmCacheApp/Actions/Application/ResetMessage.action")
let epmcacheapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Application/UserMenuPopover.action */ "./build.definitions/EpmCacheApp/Actions/Application/UserMenuPopover.action")
let epmcacheapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./EpmCacheApp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/EpmCacheApp/Actions/CloseModalPage_Cancel.action")
let epmcacheapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./EpmCacheApp/Actions/CloseModalPage_Complete.action */ "./build.definitions/EpmCacheApp/Actions/CloseModalPage_Complete.action")
let epmcacheapp_actions_closepage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/ClosePage.action */ "./build.definitions/EpmCacheApp/Actions/ClosePage.action")
let epmcacheapp_actions_createentityfailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/CreateEntityFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/CreateEntityFailureMessage.action")
let epmcacheapp_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/EpmCacheApp/Actions/CreateEntitySuccessMessage.action")
let epmcacheapp_actions_deleteconfirmation_action = __webpack_require__(/*! ./EpmCacheApp/Actions/DeleteConfirmation.action */ "./build.definitions/EpmCacheApp/Actions/DeleteConfirmation.action")
let epmcacheapp_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/DeleteEntityFailureMessage.action")
let epmcacheapp_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action")
let epmcacheapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./EpmCacheApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/EpmCacheApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let epmcacheapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let epmcacheapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let epmcacheapp_actions_genericbannermessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/GenericBannerMessage.action */ "./build.definitions/EpmCacheApp/Actions/GenericBannerMessage.action")
let epmcacheapp_actions_genericmessagebox_action = __webpack_require__(/*! ./EpmCacheApp/Actions/GenericMessageBox.action */ "./build.definitions/EpmCacheApp/Actions/GenericMessageBox.action")
let epmcacheapp_actions_genericnavigation_action = __webpack_require__(/*! ./EpmCacheApp/Actions/GenericNavigation.action */ "./build.definitions/EpmCacheApp/Actions/GenericNavigation.action")
let epmcacheapp_actions_generictoastmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/GenericToastMessage.action */ "./build.definitions/EpmCacheApp/Actions/GenericToastMessage.action")
let epmcacheapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/EpmCacheApp/Actions/Logging/LogUploadFailure.action")
let epmcacheapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/EpmCacheApp/Actions/Logging/LogUploadSuccessful.action")
let epmcacheapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Logging/UploadLog.action */ "./build.definitions/EpmCacheApp/Actions/Logging/UploadLog.action")
let epmcacheapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./EpmCacheApp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/EpmCacheApp/Actions/Logging/UploadLogProgress.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_createentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_CreateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_CreateEntity.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_deleteentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteEntity.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_updateentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_UpdateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_UpdateEntity.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_create_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Create.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Create.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_detail_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Detail.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Detail.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_edit_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Edit.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Edit.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_list_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_List.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_List.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_createentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateEntity.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_createsalesorder_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_deleteentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteEntity.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_detailpopover_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DetailPopover.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DetailPopover.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_updateentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_UpdateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_UpdateEntity.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_create_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Create.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Create.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_createsalesorder_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_CreateSalesOrder.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_CreateSalesOrder.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_detail_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Detail.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Detail.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_edit_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Edit.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Edit.action")
let epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_list_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_List.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_List.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_createentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_CreateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_CreateEntity.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_deleteentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteEntity.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_updateentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_UpdateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_UpdateEntity.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_create_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Create.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Create.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_detail_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Detail.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Detail.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_edit_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Edit.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Edit.action")
let epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_list_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_List.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_List.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_create_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Create.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Create.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_detail_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Detail.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Detail.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_edit_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Edit.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Edit.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_list_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_List.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_List.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_createentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_CreateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_CreateEntity.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_deleteentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteEntity.action")
let epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_updateentity_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_UpdateEntity.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_UpdateEntity.action")
let epmcacheapp_actions_mbtepmdemo_service_closeoffline_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOffline.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOffline.action")
let epmcacheapp_actions_mbtepmdemo_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineFailureMessage.action")
let epmcacheapp_actions_mbtepmdemo_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineSuccessMessage.action")
let epmcacheapp_actions_mbtepmdemo_service_downloadoffline_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadOffline.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadOffline.action")
let epmcacheapp_actions_mbtepmdemo_service_downloadstartedmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadStartedMessage.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadStartedMessage.action")
let epmcacheapp_actions_mbtepmdemo_service_initializeoffline_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action")
let epmcacheapp_actions_mbtepmdemo_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOfflineFailureMessage.action")
let epmcacheapp_actions_mbtepmdemo_service_initializeonline_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOnline.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOnline.action")
let epmcacheapp_actions_mbtepmdemo_service_syncfailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action")
let epmcacheapp_actions_mbtepmdemo_service_syncstartedmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/SyncStartedMessage.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncStartedMessage.action")
let epmcacheapp_actions_mbtepmdemo_service_uploadoffline_action = __webpack_require__(/*! ./EpmCacheApp/Actions/MbtEpmDemo/Service/UploadOffline.action */ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/UploadOffline.action")
let epmcacheapp_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/EpmCacheApp/Actions/UpdateEntityFailureMessage.action")
let epmcacheapp_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./EpmCacheApp/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action")
let epmcacheapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./EpmCacheApp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/EpmCacheApp/Globals/Application/AppDefinition_Version.global")
let epmcacheapp_globals_application_applicationname_global = __webpack_require__(/*! ./EpmCacheApp/Globals/Application/ApplicationName.global */ "./build.definitions/EpmCacheApp/Globals/Application/ApplicationName.global")
let epmcacheapp_globals_application_supportemail_global = __webpack_require__(/*! ./EpmCacheApp/Globals/Application/SupportEmail.global */ "./build.definitions/EpmCacheApp/Globals/Application/SupportEmail.global")
let epmcacheapp_globals_application_supportphone_global = __webpack_require__(/*! ./EpmCacheApp/Globals/Application/SupportPhone.global */ "./build.definitions/EpmCacheApp/Globals/Application/SupportPhone.global")
let epmcacheapp_i18n_i18n_properties = __webpack_require__(/*! ./EpmCacheApp/i18n/i18n.properties */ "./build.definitions/EpmCacheApp/i18n/i18n.properties")
let epmcacheapp_jsconfig_json = __webpack_require__(/*! ./EpmCacheApp/jsconfig.json */ "./build.definitions/EpmCacheApp/jsconfig.json")
let epmcacheapp_pages_application_about_page = __webpack_require__(/*! ./EpmCacheApp/Pages/Application/About.page */ "./build.definitions/EpmCacheApp/Pages/Application/About.page")
let epmcacheapp_pages_application_support_page = __webpack_require__(/*! ./EpmCacheApp/Pages/Application/Support.page */ "./build.definitions/EpmCacheApp/Pages/Application/Support.page")
let epmcacheapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./EpmCacheApp/Pages/Application/UserActivityLog.page */ "./build.definitions/EpmCacheApp/Pages/Application/UserActivityLog.page")
let epmcacheapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./EpmCacheApp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let epmcacheapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./EpmCacheApp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_List.page")
let epmcacheapp_pages_main_page = __webpack_require__(/*! ./EpmCacheApp/Pages/Main.page */ "./build.definitions/EpmCacheApp/Pages/Main.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_create_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Create.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Create.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_detail_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Detail.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Detail.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_edit_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Edit.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Edit.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_list_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_List.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_List.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_create_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Create.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Create.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_createsalesorder_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_detail_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Detail.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Detail.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_edit_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Edit.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Edit.page")
let epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_list_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_List.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_List.page")
let epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_create_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Create.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Create.page")
let epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_detail_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Detail.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Detail.page")
let epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_edit_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Edit.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Edit.page")
let epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_list_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_List.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_List.page")
let epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_create_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Create.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Create.page")
let epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_detail_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Detail.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Detail.page")
let epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_edit_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Edit.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Edit.page")
let epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_list_page = __webpack_require__(/*! ./EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_List.page */ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_List.page")
let epmcacheapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/EpmCacheApp/Rules/Application/AppUpdateFailure.js")
let epmcacheapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/EpmCacheApp/Rules/Application/AppUpdateSuccess.js")
let epmcacheapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/EpmCacheApp/Rules/Application/ClientIsMultiUserMode.js")
let epmcacheapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/EpmCacheApp/Rules/Application/GetClientSupportVersions.js")
let epmcacheapp_rules_application_getclientversion_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/GetClientVersion.js */ "./build.definitions/EpmCacheApp/Rules/Application/GetClientVersion.js")
let epmcacheapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/OnWillUpdate.js */ "./build.definitions/EpmCacheApp/Rules/Application/OnWillUpdate.js")
let epmcacheapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/EpmCacheApp/Rules/Application/ResetAppSettingsAndLogout.js")
let epmcacheapp_rules_bootstrapoffline_js = __webpack_require__(/*! ./EpmCacheApp/Rules/BootstrapOffline.js */ "./build.definitions/EpmCacheApp/Rules/BootstrapOffline.js")
let epmcacheapp_rules_getorgenerateclientinstanceid_js = __webpack_require__(/*! ./EpmCacheApp/Rules/GetOrGenerateClientInstanceId.js */ "./build.definitions/EpmCacheApp/Rules/GetOrGenerateClientInstanceId.js")
let epmcacheapp_rules_logging_loglevels_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Logging/LogLevels.js */ "./build.definitions/EpmCacheApp/Rules/Logging/LogLevels.js")
let epmcacheapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/EpmCacheApp/Rules/Logging/SetTraceCategories.js")
let epmcacheapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/EpmCacheApp/Rules/Logging/SetUserLogLevel.js")
let epmcacheapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Logging/ToggleLogging.js */ "./build.definitions/EpmCacheApp/Rules/Logging/ToggleLogging.js")
let epmcacheapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Logging/TraceCategories.js */ "./build.definitions/EpmCacheApp/Rules/Logging/TraceCategories.js")
let epmcacheapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Logging/UserLogSetting.js */ "./build.definitions/EpmCacheApp/Rules/Logging/UserLogSetting.js")
let epmcacheapp_rules_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_deleteconfirmation_js = __webpack_require__(/*! ./EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteConfirmation.js */ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteConfirmation.js")
let epmcacheapp_rules_mbtepmdemo_businesspartnerset_businesspartnerset_deleteconfirmation_js = __webpack_require__(/*! ./EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteConfirmation.js */ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteConfirmation.js")
let epmcacheapp_rules_mbtepmdemo_clientregistrationset_clientregistrationset_deleteconfirmation_js = __webpack_require__(/*! ./EpmCacheApp/Rules/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteConfirmation.js */ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteConfirmation.js")
let epmcacheapp_rules_mbtepmdemo_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./EpmCacheApp/Rules/MbtEpmDemo/ErrorArchive_CheckForSyncError.js */ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/ErrorArchive_CheckForSyncError.js")
let epmcacheapp_rules_mbtepmdemo_salesorderset_salesorderset_deleteconfirmation_js = __webpack_require__(/*! ./EpmCacheApp/Rules/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteConfirmation.js */ "./build.definitions/EpmCacheApp/Rules/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteConfirmation.js")
let epmcacheapp_rules_randomint64_js = __webpack_require__(/*! ./EpmCacheApp/Rules/RandomInt64.js */ "./build.definitions/EpmCacheApp/Rules/RandomInt64.js")
let epmcacheapp_rules_service_initialize_js = __webpack_require__(/*! ./EpmCacheApp/Rules/Service/Initialize.js */ "./build.definitions/EpmCacheApp/Rules/Service/Initialize.js")
let epmcacheapp_services_mbtepmdemo_service = __webpack_require__(/*! ./EpmCacheApp/Services/MbtEpmDemo.service */ "./build.definitions/EpmCacheApp/Services/MbtEpmDemo.service")
let epmcacheapp_services_mbtepmdemoonline_service = __webpack_require__(/*! ./EpmCacheApp/Services/MbtEpmDemoOnline.service */ "./build.definitions/EpmCacheApp/Services/MbtEpmDemoOnline.service")
let epmcacheapp_styles_styles_css = __webpack_require__(/*! ./EpmCacheApp/Styles/Styles.css */ "./build.definitions/EpmCacheApp/Styles/Styles.css")
let epmcacheapp_styles_styles_json = __webpack_require__(/*! ./EpmCacheApp/Styles/Styles.json */ "./build.definitions/EpmCacheApp/Styles/Styles.json")
let epmcacheapp_styles_styles_less = __webpack_require__(/*! ./EpmCacheApp/Styles/Styles.less */ "./build.definitions/EpmCacheApp/Styles/Styles.less")
let epmcacheapp_styles_styles_nss = __webpack_require__(/*! ./EpmCacheApp/Styles/Styles.nss */ "./build.definitions/EpmCacheApp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	epmcacheapp_actions_application_appupdate_action : epmcacheapp_actions_application_appupdate_action,
	epmcacheapp_actions_application_appupdatefailuremessage_action : epmcacheapp_actions_application_appupdatefailuremessage_action,
	epmcacheapp_actions_application_appupdateprogressbanner_action : epmcacheapp_actions_application_appupdateprogressbanner_action,
	epmcacheapp_actions_application_appupdatesuccessmessage_action : epmcacheapp_actions_application_appupdatesuccessmessage_action,
	epmcacheapp_actions_application_logout_action : epmcacheapp_actions_application_logout_action,
	epmcacheapp_actions_application_navtoabout_action : epmcacheapp_actions_application_navtoabout_action,
	epmcacheapp_actions_application_navtoactivitylog_action : epmcacheapp_actions_application_navtoactivitylog_action,
	epmcacheapp_actions_application_navtosupport_action : epmcacheapp_actions_application_navtosupport_action,
	epmcacheapp_actions_application_onwillupdate_action : epmcacheapp_actions_application_onwillupdate_action,
	epmcacheapp_actions_application_reset_action : epmcacheapp_actions_application_reset_action,
	epmcacheapp_actions_application_resetmessage_action : epmcacheapp_actions_application_resetmessage_action,
	epmcacheapp_actions_application_usermenupopover_action : epmcacheapp_actions_application_usermenupopover_action,
	epmcacheapp_actions_closemodalpage_cancel_action : epmcacheapp_actions_closemodalpage_cancel_action,
	epmcacheapp_actions_closemodalpage_complete_action : epmcacheapp_actions_closemodalpage_complete_action,
	epmcacheapp_actions_closepage_action : epmcacheapp_actions_closepage_action,
	epmcacheapp_actions_createentityfailuremessage_action : epmcacheapp_actions_createentityfailuremessage_action,
	epmcacheapp_actions_createentitysuccessmessage_action : epmcacheapp_actions_createentitysuccessmessage_action,
	epmcacheapp_actions_deleteconfirmation_action : epmcacheapp_actions_deleteconfirmation_action,
	epmcacheapp_actions_deleteentityfailuremessage_action : epmcacheapp_actions_deleteentityfailuremessage_action,
	epmcacheapp_actions_deleteentitysuccessmessage_action : epmcacheapp_actions_deleteentitysuccessmessage_action,
	epmcacheapp_actions_errorarchive_errorarchive_syncfailure_action : epmcacheapp_actions_errorarchive_errorarchive_syncfailure_action,
	epmcacheapp_actions_errorarchive_navtoerrorarchive_detail_action : epmcacheapp_actions_errorarchive_navtoerrorarchive_detail_action,
	epmcacheapp_actions_errorarchive_navtoerrorarchive_list_action : epmcacheapp_actions_errorarchive_navtoerrorarchive_list_action,
	epmcacheapp_actions_genericbannermessage_action : epmcacheapp_actions_genericbannermessage_action,
	epmcacheapp_actions_genericmessagebox_action : epmcacheapp_actions_genericmessagebox_action,
	epmcacheapp_actions_genericnavigation_action : epmcacheapp_actions_genericnavigation_action,
	epmcacheapp_actions_generictoastmessage_action : epmcacheapp_actions_generictoastmessage_action,
	epmcacheapp_actions_logging_loguploadfailure_action : epmcacheapp_actions_logging_loguploadfailure_action,
	epmcacheapp_actions_logging_loguploadsuccessful_action : epmcacheapp_actions_logging_loguploadsuccessful_action,
	epmcacheapp_actions_logging_uploadlog_action : epmcacheapp_actions_logging_uploadlog_action,
	epmcacheapp_actions_logging_uploadlogprogress_action : epmcacheapp_actions_logging_uploadlogprogress_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_createentity_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_createentity_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_deleteentity_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_deleteentity_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_updateentity_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_updateentity_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_create_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_create_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_detail_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_detail_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_edit_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_edit_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_list_action : epmcacheapp_actions_mbtepmdemo_businesspartnerfilterset_navtobusinesspartnerfilterset_list_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_createentity_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_createentity_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_createsalesorder_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_createsalesorder_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_deleteentity_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_deleteentity_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_detailpopover_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_detailpopover_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_updateentity_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_businesspartnerset_updateentity_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_create_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_create_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_createsalesorder_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_createsalesorder_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_detail_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_detail_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_edit_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_edit_action,
	epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_list_action : epmcacheapp_actions_mbtepmdemo_businesspartnerset_navtobusinesspartnerset_list_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_createentity_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_createentity_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_deleteentity_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_deleteentity_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_updateentity_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_clientregistrationset_updateentity_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_create_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_create_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_detail_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_detail_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_edit_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_edit_action,
	epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_list_action : epmcacheapp_actions_mbtepmdemo_clientregistrationset_navtoclientregistrationset_list_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_create_action : epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_create_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_detail_action : epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_detail_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_edit_action : epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_edit_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_list_action : epmcacheapp_actions_mbtepmdemo_salesorderset_navtosalesorderset_list_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_createentity_action : epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_createentity_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_deleteentity_action : epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_deleteentity_action,
	epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_updateentity_action : epmcacheapp_actions_mbtepmdemo_salesorderset_salesorderset_updateentity_action,
	epmcacheapp_actions_mbtepmdemo_service_closeoffline_action : epmcacheapp_actions_mbtepmdemo_service_closeoffline_action,
	epmcacheapp_actions_mbtepmdemo_service_closeofflinefailuremessage_action : epmcacheapp_actions_mbtepmdemo_service_closeofflinefailuremessage_action,
	epmcacheapp_actions_mbtepmdemo_service_closeofflinesuccessmessage_action : epmcacheapp_actions_mbtepmdemo_service_closeofflinesuccessmessage_action,
	epmcacheapp_actions_mbtepmdemo_service_downloadoffline_action : epmcacheapp_actions_mbtepmdemo_service_downloadoffline_action,
	epmcacheapp_actions_mbtepmdemo_service_downloadstartedmessage_action : epmcacheapp_actions_mbtepmdemo_service_downloadstartedmessage_action,
	epmcacheapp_actions_mbtepmdemo_service_initializeoffline_action : epmcacheapp_actions_mbtepmdemo_service_initializeoffline_action,
	epmcacheapp_actions_mbtepmdemo_service_initializeofflinefailuremessage_action : epmcacheapp_actions_mbtepmdemo_service_initializeofflinefailuremessage_action,
	epmcacheapp_actions_mbtepmdemo_service_initializeonline_action : epmcacheapp_actions_mbtepmdemo_service_initializeonline_action,
	epmcacheapp_actions_mbtepmdemo_service_syncfailuremessage_action : epmcacheapp_actions_mbtepmdemo_service_syncfailuremessage_action,
	epmcacheapp_actions_mbtepmdemo_service_syncstartedmessage_action : epmcacheapp_actions_mbtepmdemo_service_syncstartedmessage_action,
	epmcacheapp_actions_mbtepmdemo_service_uploadoffline_action : epmcacheapp_actions_mbtepmdemo_service_uploadoffline_action,
	epmcacheapp_actions_updateentityfailuremessage_action : epmcacheapp_actions_updateentityfailuremessage_action,
	epmcacheapp_actions_updateentitysuccessmessage_action : epmcacheapp_actions_updateentitysuccessmessage_action,
	epmcacheapp_globals_application_appdefinition_version_global : epmcacheapp_globals_application_appdefinition_version_global,
	epmcacheapp_globals_application_applicationname_global : epmcacheapp_globals_application_applicationname_global,
	epmcacheapp_globals_application_supportemail_global : epmcacheapp_globals_application_supportemail_global,
	epmcacheapp_globals_application_supportphone_global : epmcacheapp_globals_application_supportphone_global,
	epmcacheapp_i18n_i18n_properties : epmcacheapp_i18n_i18n_properties,
	epmcacheapp_jsconfig_json : epmcacheapp_jsconfig_json,
	epmcacheapp_pages_application_about_page : epmcacheapp_pages_application_about_page,
	epmcacheapp_pages_application_support_page : epmcacheapp_pages_application_support_page,
	epmcacheapp_pages_application_useractivitylog_page : epmcacheapp_pages_application_useractivitylog_page,
	epmcacheapp_pages_errorarchive_errorarchive_detail_page : epmcacheapp_pages_errorarchive_errorarchive_detail_page,
	epmcacheapp_pages_errorarchive_errorarchive_list_page : epmcacheapp_pages_errorarchive_errorarchive_list_page,
	epmcacheapp_pages_main_page : epmcacheapp_pages_main_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_create_page : epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_create_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_detail_page : epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_detail_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_edit_page : epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_edit_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_list_page : epmcacheapp_pages_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_list_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_create_page : epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_create_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_createsalesorder_page : epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_createsalesorder_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_detail_page : epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_detail_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_edit_page : epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_edit_page,
	epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_list_page : epmcacheapp_pages_mbtepmdemo_businesspartnerset_businesspartnerset_list_page,
	epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_create_page : epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_create_page,
	epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_detail_page : epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_detail_page,
	epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_edit_page : epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_edit_page,
	epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_list_page : epmcacheapp_pages_mbtepmdemo_clientregistrationset_clientregistrationset_list_page,
	epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_create_page : epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_create_page,
	epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_detail_page : epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_detail_page,
	epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_edit_page : epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_edit_page,
	epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_list_page : epmcacheapp_pages_mbtepmdemo_salesorderset_salesorderset_list_page,
	epmcacheapp_rules_application_appupdatefailure_js : epmcacheapp_rules_application_appupdatefailure_js,
	epmcacheapp_rules_application_appupdatesuccess_js : epmcacheapp_rules_application_appupdatesuccess_js,
	epmcacheapp_rules_application_clientismultiusermode_js : epmcacheapp_rules_application_clientismultiusermode_js,
	epmcacheapp_rules_application_getclientsupportversions_js : epmcacheapp_rules_application_getclientsupportversions_js,
	epmcacheapp_rules_application_getclientversion_js : epmcacheapp_rules_application_getclientversion_js,
	epmcacheapp_rules_application_onwillupdate_js : epmcacheapp_rules_application_onwillupdate_js,
	epmcacheapp_rules_application_resetappsettingsandlogout_js : epmcacheapp_rules_application_resetappsettingsandlogout_js,
	epmcacheapp_rules_bootstrapoffline_js : epmcacheapp_rules_bootstrapoffline_js,
	epmcacheapp_rules_getorgenerateclientinstanceid_js : epmcacheapp_rules_getorgenerateclientinstanceid_js,
	epmcacheapp_rules_logging_loglevels_js : epmcacheapp_rules_logging_loglevels_js,
	epmcacheapp_rules_logging_settracecategories_js : epmcacheapp_rules_logging_settracecategories_js,
	epmcacheapp_rules_logging_setuserloglevel_js : epmcacheapp_rules_logging_setuserloglevel_js,
	epmcacheapp_rules_logging_togglelogging_js : epmcacheapp_rules_logging_togglelogging_js,
	epmcacheapp_rules_logging_tracecategories_js : epmcacheapp_rules_logging_tracecategories_js,
	epmcacheapp_rules_logging_userlogsetting_js : epmcacheapp_rules_logging_userlogsetting_js,
	epmcacheapp_rules_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_deleteconfirmation_js : epmcacheapp_rules_mbtepmdemo_businesspartnerfilterset_businesspartnerfilterset_deleteconfirmation_js,
	epmcacheapp_rules_mbtepmdemo_businesspartnerset_businesspartnerset_deleteconfirmation_js : epmcacheapp_rules_mbtepmdemo_businesspartnerset_businesspartnerset_deleteconfirmation_js,
	epmcacheapp_rules_mbtepmdemo_clientregistrationset_clientregistrationset_deleteconfirmation_js : epmcacheapp_rules_mbtepmdemo_clientregistrationset_clientregistrationset_deleteconfirmation_js,
	epmcacheapp_rules_mbtepmdemo_errorarchive_checkforsyncerror_js : epmcacheapp_rules_mbtepmdemo_errorarchive_checkforsyncerror_js,
	epmcacheapp_rules_mbtepmdemo_salesorderset_salesorderset_deleteconfirmation_js : epmcacheapp_rules_mbtepmdemo_salesorderset_salesorderset_deleteconfirmation_js,
	epmcacheapp_rules_randomint64_js : epmcacheapp_rules_randomint64_js,
	epmcacheapp_rules_service_initialize_js : epmcacheapp_rules_service_initialize_js,
	epmcacheapp_services_mbtepmdemo_service : epmcacheapp_services_mbtepmdemo_service,
	epmcacheapp_services_mbtepmdemoonline_service : epmcacheapp_services_mbtepmdemoonline_service,
	epmcacheapp_styles_styles_css : epmcacheapp_styles_styles_css,
	epmcacheapp_styles_styles_json : epmcacheapp_styles_styles_json,
	epmcacheapp_styles_styles_less : epmcacheapp_styles_styles_less,
	epmcacheapp_styles_styles_nss : epmcacheapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Styles/Styles.css":
/*!*********************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Styles/Styles.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/EpmCacheApp/Styles/Styles.less":
/*!**********************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Styles/Styles.less ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/EpmCacheApp/Styles/Styles.nss":
/*!*********************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Styles/Styles.nss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/noSourceMaps.js":
/*!***********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/noSourceMaps.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/Application/About.page":
/*!********************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/Application/About.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/EpmCacheApp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/EpmCacheApp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/EpmCacheApp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/EpmCacheApp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/Application/Support.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/Application/Support.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/EpmCacheApp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/EpmCacheApp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/EpmCacheApp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/EpmCacheApp/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/Application/UserActivityLog.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/Application/UserActivityLog.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/EpmCacheApp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/EpmCacheApp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/EpmCacheApp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/EpmCacheApp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/EpmCacheApp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/EpmCacheApp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/EpmCacheApp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/EpmCacheApp/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_List.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/Main.page":
/*!*******************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/Main.page ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_MbtEpmDemo","AccessoryType":"None","UseTopPadding":true,"Caption":"MbtEpmDemo","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_List.action","Alignment":"Center","Title":"BusinessPartnerFilterSet","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_List.action","Alignment":"Center","Title":"BusinessPartnerSet","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_List.action","Alignment":"Center","Title":"ClientRegistrationSet","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_List.action","Alignment":"Center","Title":"SalesOrderSet","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"_Name":"SectionButtonTable_MbtEpmDemo","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/EpmCacheApp/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Create.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Create.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"CountryPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Choose Country for subscription","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":["DE","GB","US"]}],"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"BusinessPartnerFilterSet_Create","Caption":"$(L,Create_BusinessPartnerFilter_Detail)","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Detail.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Detail.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,BusinessPartnerFilter_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"BusinessPartnerFilterSet","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{FilterID}","Subhead":"{CountryFilter}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CountryFilter","Value":"{CountryFilter}"},{"KeyName":"FilterID","Value":"{FilterID}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerFilterSet_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Edit.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Edit.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_BusinessPartnerFilter_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"BusinessPartnerFilterSet","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"CountryFilter","_Name":"CountryFilter","Value":"{CountryFilter}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FilterID","_Name":"FilterID","Value":"{FilterID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerFilterSet_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_List.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_List.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,BusinessPartnerFilterSet)","ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Detail.action","StatusImage":"","Title":"{FilterID}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{CountryFilter}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"BusinessPartnerFilterSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerFilterSet_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Create.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Create.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_BusinessPartner_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressType","_Name":"AddressType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Building","_Name":"Building","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"City","_Name":"City","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PostalCode","_Name":"PostalCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Street","_Name":"Street","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerID","KeyboardType":"Number","_Name":"BusinessPartnerID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerRole","_Name":"BusinessPartnerRole","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CompanyName","_Name":"CompanyName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FaxNumber","_Name":"FaxNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LegalForm","_Name":"LegalForm","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumber","_Name":"PhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerSet_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_SalesOrder)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"BillingStatus","_Name":"BillingStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BillingStatusDescription","_Name":"BillingStatusDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartnerID}","ReturnValue":"{BusinessPartnerID}","Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"}},"_Name":"BusinessPartnerID","_Type":"Control.Type.FormCell.ListPicker","Value":"{BusinessPartnerID}"},{"Mode":"Datetime","_Name":"ChangedAt","Caption":"ChangedAt","_Type":"Control.Type.FormCell.DatePicker"},{"Mode":"Datetime","_Name":"CreatedAt","Caption":"CreatedAt","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"CurrencyCode","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CustomerID","_Name":"CustomerID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CustomerName","_Name":"CustomerName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryStatus","_Name":"DeliveryStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryStatusDescription","_Name":"DeliveryStatusDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"GrossAmount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LifecycleStatus","_Name":"LifecycleStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LifecycleStatusDescription","_Name":"LifecycleStatusDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NetAmount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Note","_Name":"Note","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NoteLanguage","_Name":"NoteLanguage","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SalesOrderID","KeyboardType":"Number","_Name":"SalesOrderID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"TaxAmount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerSet_CreateSalesOrder","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Detail.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Detail.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,BusinessPartner_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"BusinessPartnerSet","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{CompanyName}","Subhead":"{AddressType}","BodyText":"","Footnote":"{City}","Description":"{Building}","StatusText":"{Country}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PostalCode}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"AddressType","Value":"{AddressType}"},{"KeyName":"Building","Value":"{Building}"},{"KeyName":"City","Value":"{City}"},{"KeyName":"Country","Value":"{Country}"},{"KeyName":"PostalCode","Value":"{PostalCode}"},{"KeyName":"Street","Value":"{Street}"},{"KeyName":"BusinessPartnerID","Value":"{BusinessPartnerID}"},{"KeyName":"BusinessPartnerRole","Value":"{BusinessPartnerRole}"},{"KeyName":"CompanyName","Value":"{CompanyName}"},{"KeyName":"FaxNumber","Value":"{FaxNumber}"},{"KeyName":"LegalForm","Value":"{LegalForm}"},{"KeyName":"PhoneNumber","Value":"{PhoneNumber}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"ToSalesOrders","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{BillingStatusDescription}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{CustomerName}","Footnote":"{BusinessPartnerID}","PreserveIconStackSpacing":false,"StatusText":"{ChangedAt}","Subhead":"{BillingStatus}","SubstatusText":"{CreatedAt}","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/ToSalesOrders","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderSet"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerSet_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Edit.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Edit.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_BusinessPartner_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"BusinessPartnerSet","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressType","_Name":"AddressType","Value":"{AddressType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Building","_Name":"Building","Value":"{Building}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"City","_Name":"City","Value":"{City}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","Value":"{Country}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PostalCode","_Name":"PostalCode","Value":"{PostalCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Street","_Name":"Street","Value":"{Street}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerID","_Name":"BusinessPartnerID","Value":"{BusinessPartnerID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"BusinessPartnerRole","_Name":"BusinessPartnerRole","Value":"{BusinessPartnerRole}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CompanyName","_Name":"CompanyName","Value":"{CompanyName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FaxNumber","_Name":"FaxNumber","Value":"{FaxNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LegalForm","_Name":"LegalForm","Value":"{LegalForm}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumber","_Name":"PhoneNumber","Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerSet_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_List.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_List.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,BusinessPartnerSet)","ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Building}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Detail.action","StatusImage":"","Title":"{CompanyName}","Footnote":"{City}","PreserveIconStackSpacing":false,"StatusText":"{Country}","Subhead":"{AddressType}","SubstatusText":"{PostalCode}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"BusinessPartnerSet_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Create.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Create.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_ClientRegistration_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AuthorizedUser","_Name":"AuthorizedUser","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ClientID","KeyboardType":"Number","_Name":"ClientID","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"ClientRegistrationSet_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Detail.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Detail.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,ClientRegistration_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"ClientRegistrationSet","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/EpmCacheApp/Rules/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ClientID}","Subhead":"{AuthorizedUser}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"AuthorizedUser","Value":"{AuthorizedUser}"},{"KeyName":"ClientID","Value":"{ClientID}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ClientRegistrationSet_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Edit.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Edit.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_ClientRegistration_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"ClientRegistrationSet","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AuthorizedUser","_Name":"AuthorizedUser","Value":"{AuthorizedUser}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ClientID","_Name":"ClientID","Value":"{ClientID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"ClientRegistrationSet_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_List.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_List.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,ClientRegistrationSet)","ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Detail.action","StatusImage":"","Title":"{ClientID}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{AuthorizedUser}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ClientRegistrationSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ClientRegistrationSet_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Create.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Create.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_SalesOrder_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"BillingStatus","_Name":"BillingStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BillingStatusDescription","_Name":"BillingStatusDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartnerID}","ReturnValue":"{BusinessPartnerID}","Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"}},"_Name":"BusinessPartnerID","_Type":"Control.Type.FormCell.ListPicker"},{"Mode":"Datetime","_Name":"ChangedAt","Caption":"ChangedAt","_Type":"Control.Type.FormCell.DatePicker"},{"Mode":"Datetime","_Name":"CreatedAt","Caption":"CreatedAt","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"CurrencyCode","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CustomerID","_Name":"CustomerID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CustomerName","_Name":"CustomerName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryStatus","_Name":"DeliveryStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryStatusDescription","_Name":"DeliveryStatusDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"GrossAmount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LifecycleStatus","_Name":"LifecycleStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LifecycleStatusDescription","_Name":"LifecycleStatusDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NetAmount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Note","_Name":"Note","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NoteLanguage","_Name":"NoteLanguage","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SalesOrderID","KeyboardType":"Number","_Name":"SalesOrderID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"TaxAmount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderSet_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Detail.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Detail.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,SalesOrder_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"SalesOrderSet","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/EpmCacheApp/Rules/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{CustomerName}","Subhead":"{BillingStatus}","BodyText":"","Footnote":"{BusinessPartnerID}","Description":"{BillingStatusDescription}","StatusText":"{ChangedAt}","StatusImage":"","SubstatusImage":"","SubstatusText":"{CreatedAt}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"BillingStatus","Value":"{BillingStatus}"},{"KeyName":"BillingStatusDescription","Value":"{BillingStatusDescription}"},{"KeyName":"BusinessPartnerID","Value":"{BusinessPartnerID}"},{"KeyName":"ChangedAt","Value":"{ChangedAt}"},{"KeyName":"CreatedAt","Value":"{CreatedAt}"},{"KeyName":"CurrencyCode","Value":"{CurrencyCode}"},{"KeyName":"CustomerID","Value":"{CustomerID}"},{"KeyName":"CustomerName","Value":"{CustomerName}"},{"KeyName":"DeliveryStatus","Value":"{DeliveryStatus}"},{"KeyName":"DeliveryStatusDescription","Value":"{DeliveryStatusDescription}"},{"KeyName":"GrossAmount","Value":"{GrossAmount}"},{"KeyName":"LifecycleStatus","Value":"{LifecycleStatus}"},{"KeyName":"LifecycleStatusDescription","Value":"{LifecycleStatusDescription}"},{"KeyName":"NetAmount","Value":"{NetAmount}"},{"KeyName":"Note","Value":"{Note}"},{"KeyName":"NoteLanguage","Value":"{NoteLanguage}"},{"KeyName":"SalesOrderID","Value":"{SalesOrderID}"},{"KeyName":"TaxAmount","Value":"{TaxAmount}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderSet_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Edit.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Edit.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_SalesOrder_Detail)","DesignTimeTarget":{"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","EntitySet":"SalesOrderSet","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/EpmCacheApp/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"BillingStatus","_Name":"BillingStatus","Value":"{BillingStatus}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BillingStatusDescription","_Name":"BillingStatusDescription","Value":"{BillingStatusDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartnerID}","ReturnValue":"{BusinessPartnerID}","Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"}},"Value":"{BusinessPartnerID}","_Name":"BusinessPartnerID","_Type":"Control.Type.FormCell.ListPicker"},{"Mode":"Datetime","_Name":"ChangedAt","Value":"{ChangedAt}","Caption":"ChangedAt","_Type":"Control.Type.FormCell.DatePicker"},{"Mode":"Datetime","_Name":"CreatedAt","Value":"{CreatedAt}","Caption":"CreatedAt","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"CurrencyCode","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CustomerID","_Name":"CustomerID","Value":"{CustomerID}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CustomerName","_Name":"CustomerName","Value":"{CustomerName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryStatus","_Name":"DeliveryStatus","Value":"{DeliveryStatus}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryStatusDescription","_Name":"DeliveryStatusDescription","Value":"{DeliveryStatusDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"GrossAmount","_Name":"GrossAmount","Value":"{GrossAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LifecycleStatus","_Name":"LifecycleStatus","Value":"{LifecycleStatus}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LifecycleStatusDescription","_Name":"LifecycleStatusDescription","Value":"{LifecycleStatusDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NetAmount","_Name":"NetAmount","Value":"{NetAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Note","_Name":"Note","Value":"{Note}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NoteLanguage","_Name":"NoteLanguage","Value":"{NoteLanguage}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SalesOrderID","_Name":"SalesOrderID","Value":"{SalesOrderID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"TaxAmount","_Name":"TaxAmount","Value":"{TaxAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderSet_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_List.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_List.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,SalesOrderSet)","ActionBar":{"Items":[{"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{BillingStatusDescription}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Detail.action","StatusImage":"","Title":"{CustomerName}","Footnote":"{BusinessPartnerID}","PreserveIconStackSpacing":false,"StatusText":"{ChangedAt}","Subhead":"{BillingStatus}","SubstatusText":"{CreatedAt}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderSet_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/EpmCacheApp/Pages/Main.page","OnLaunch":["/EpmCacheApp/Rules/BootstrapOffline.js"],"OnWillUpdate":"/EpmCacheApp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/EpmCacheApp/Rules/BootstrapOffline.js","Styles":"/EpmCacheApp/Styles/Styles.less","Version":"/EpmCacheApp/Globals/Application/AppDefinition_Version.global","Localization":"/EpmCacheApp/i18n/i18n.properties","_SchemaVersion":"24.7","_Name":"EpmCacheApp","StyleSheets":{"Styles":{"css":"/EpmCacheApp/Styles/Styles.css","ios":"/EpmCacheApp/Styles/Styles.nss","android":"/EpmCacheApp/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/AppUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/EpmCacheApp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/EpmCacheApp/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdateFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/AppUpdateFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdateProgressBanner.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/AppUpdateProgressBanner.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/EpmCacheApp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/AppUpdateSuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/Logout.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/Logout.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/NavToAbout.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/NavToAbout.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/NavToActivityLog.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/NavToActivityLog.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/NavToSupport.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/NavToSupport.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/EpmCacheApp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/OnWillUpdate.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/OnWillUpdate.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/Reset.action":
/*!************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/Reset.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/ResetMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/ResetMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/EpmCacheApp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Application/UserMenuPopover.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Application/UserMenuPopover.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/EpmCacheApp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/EpmCacheApp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/EpmCacheApp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/EpmCacheApp/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/EpmCacheApp/Actions/Application/Logout.action","Title":"Logout","Visible":"/EpmCacheApp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/CloseModalPage_Cancel.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/CloseModalPage_Cancel.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/CloseModalPage_Complete.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/CloseModalPage_Complete.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/ClosePage.action":
/*!****************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/ClosePage.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/CreateEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/CreateEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/CreateEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/CreateEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/EpmCacheApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/DeleteConfirmation.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/DeleteConfirmation.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/DeleteEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/DeleteEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/EpmCacheApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/GenericBannerMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/GenericBannerMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/GenericMessageBox.action":
/*!************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/GenericMessageBox.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/GenericNavigation.action":
/*!************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/GenericNavigation.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/EpmCacheApp/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/GenericToastMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/GenericToastMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Logging/LogUploadFailure.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Logging/LogUploadFailure.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Logging/LogUploadSuccessful.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Logging/LogUploadSuccessful.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Logging/UploadLog.action":
/*!************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Logging/UploadLog.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/EpmCacheApp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/EpmCacheApp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/Logging/UploadLogProgress.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/Logging/UploadLogProgress.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/EpmCacheApp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_CreateEntity.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_CreateEntity.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/EpmCacheApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/EpmCacheApp/Actions/CreateEntitySuccessMessage.action","Target":{"EntitySet":"BusinessPartnerFilterSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"},"Properties":{"CountryFilter":"#Page:BusinessPartnerFilterSet_Create/#Control:CountryPicker/#SelectedValue","FilterID":"/EpmCacheApp/Rules/RandomInt64.js"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteEntity.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_DeleteEntity.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"BusinessPartnerFilterSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_UpdateEntity.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/BusinessPartnerFilterSet_UpdateEntity.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"BusinessPartnerFilterSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"Properties":{"CountryFilter":"#Control:CountryFilter/#Value","FilterID":"#Control:FilterID/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Create.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Create.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Detail.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Detail.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Detail.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Edit.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_Edit.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_List.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerFilterSet/NavToBusinessPartnerFilterSet_List.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerFilterSet/BusinessPartnerFilterSet_List.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateEntity.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateEntity.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/EpmCacheApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/EpmCacheApp/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressType":"#Control:AddressType/#Value","Building":"#Control:Building/#Value","City":"#Control:City/#Value","Country":"#Control:Country/#Value","PostalCode":"#Control:PostalCode/#Value","Street":"#Control:Street/#Value","BusinessPartnerID":"#Control:BusinessPartnerID/#Value","BusinessPartnerRole":"#Control:BusinessPartnerRole/#Value","CompanyName":"#Control:CompanyName/#Value","FaxNumber":"#Control:FaxNumber/#Value","LegalForm":"#Control:LegalForm/#Value","PhoneNumber":"#Control:PhoneNumber/#Value"},"Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"ToSalesOrders","Target":{"EntitySet":"BusinessPartnerSet","ReadLink":"{@odata.readLink}"}},"OnFailure":"/EpmCacheApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/EpmCacheApp/Actions/CreateEntitySuccessMessage.action","Properties":{"BillingStatus":"#Control:BillingStatus/#Value","BillingStatusDescription":"#Control:BillingStatusDescription/#Value","BusinessPartnerID":"#Control:BusinessPartnerID/#SelectedValue","ChangedAt":"#Control:ChangedAt/#Value","CreatedAt":"#Control:CreatedAt/#Value","CurrencyCode":"#Control:CurrencyCode/#Value","CustomerID":"#Control:CustomerID/#Value","CustomerName":"#Control:CustomerName/#Value","DeliveryStatus":"#Control:DeliveryStatus/#Value","DeliveryStatusDescription":"#Control:DeliveryStatusDescription/#Value","GrossAmount":"#Control:GrossAmount/#Value","LifecycleStatus":"#Control:LifecycleStatus/#Value","LifecycleStatusDescription":"#Control:LifecycleStatusDescription/#Value","NetAmount":"#Control:NetAmount/#Value","Note":"#Control:Note/#Value","NoteLanguage":"#Control:NoteLanguage/#Value","SalesOrderID":"#Control:SalesOrderID/#Value","TaxAmount":"#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteEntity.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteEntity.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DetailPopover.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DetailPopover.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add SalesOrder","OnPress":"/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_CreateSalesOrder.action"},{"Title":"Delete","OnPress":"/EpmCacheApp/Rules/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_UpdateEntity.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/BusinessPartnerSet_UpdateEntity.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"BusinessPartnerSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"Properties":{"AddressType":"#Control:AddressType/#Value","Building":"#Control:Building/#Value","City":"#Control:City/#Value","Country":"#Control:Country/#Value","PostalCode":"#Control:PostalCode/#Value","Street":"#Control:Street/#Value","BusinessPartnerID":"#Control:BusinessPartnerID/#Value","BusinessPartnerRole":"#Control:BusinessPartnerRole/#Value","CompanyName":"#Control:CompanyName/#Value","FaxNumber":"#Control:FaxNumber/#Value","LegalForm":"#Control:LegalForm/#Value","PhoneNumber":"#Control:PhoneNumber/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Create.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Create.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_CreateSalesOrder.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_CreateSalesOrder.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_CreateSalesOrder.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Detail.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Detail.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Detail.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Edit.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_Edit.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_List.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/BusinessPartnerSet/NavToBusinessPartnerSet_List.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_BusinessPartnerSet/BusinessPartnerSet_List.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_CreateEntity.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_CreateEntity.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/EpmCacheApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/EpmCacheApp/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/EpmCacheApp/Services/MbtEpmDemoOnline.service","EntitySet":"ClientRegistrationSet"},"Properties":{"ClientID":"/EpmCacheApp/Rules/RandomInt64.js"},"Headers":{"Client-Instance-ID":"/EpmCacheApp/Rules/GetOrGenerateClientInstanceId.js"}}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteEntity.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_DeleteEntity.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"ClientRegistrationSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_UpdateEntity.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/ClientRegistrationSet_UpdateEntity.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"ClientRegistrationSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"Properties":{"AuthorizedUser":"#Control:AuthorizedUser/#Value","ClientID":"#Control:ClientID/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Create.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Create.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Detail.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Detail.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Detail.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Edit.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_Edit.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_List.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/ClientRegistrationSet/NavToClientRegistrationSet_List.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_ClientRegistrationSet/ClientRegistrationSet_List.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Create.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Create.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Detail.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Detail.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Detail.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Edit.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_Edit.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_List.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/NavToSalesOrderSet_List.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EpmCacheApp/Pages/MbtEpmDemo_SalesOrderSet/SalesOrderSet_List.page"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_CreateEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_CreateEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/EpmCacheApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/EpmCacheApp/Actions/CreateEntitySuccessMessage.action","Properties":{"BillingStatus":"#Control:BillingStatus/#Value","BillingStatusDescription":"#Control:BillingStatusDescription/#Value","BusinessPartnerID":"#Control:BusinessPartnerID/#SelectedValue","ChangedAt":"#Control:ChangedAt/#Value","CreatedAt":"#Control:CreatedAt/#Value","CurrencyCode":"#Control:CurrencyCode/#Value","CustomerID":"#Control:CustomerID/#Value","CustomerName":"#Control:CustomerName/#Value","DeliveryStatus":"#Control:DeliveryStatus/#Value","DeliveryStatusDescription":"#Control:DeliveryStatusDescription/#Value","GrossAmount":"#Control:GrossAmount/#Value","LifecycleStatus":"#Control:LifecycleStatus/#Value","LifecycleStatusDescription":"#Control:LifecycleStatusDescription/#Value","NetAmount":"#Control:NetAmount/#Value","Note":"#Control:Note/#Value","NoteLanguage":"#Control:NoteLanguage/#Value","SalesOrderID":"#Control:SalesOrderID/#Value","TaxAmount":"#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_DeleteEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"SalesOrderSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/EpmCacheApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_UpdateEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/SalesOrderSet/SalesOrderSet_UpdateEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"SalesOrderSet","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","ReadLink":"{@odata.readLink}"},"Properties":{"BillingStatus":"#Control:BillingStatus/#Value","BillingStatusDescription":"#Control:BillingStatusDescription/#Value","BusinessPartnerID":"#Control:BusinessPartnerID/#SelectedValue","ChangedAt":"#Control:ChangedAt/#Value","CreatedAt":"#Control:CreatedAt/#Value","CurrencyCode":"#Control:CurrencyCode/#Value","CustomerID":"#Control:CustomerID/#Value","CustomerName":"#Control:CustomerName/#Value","DeliveryStatus":"#Control:DeliveryStatus/#Value","DeliveryStatusDescription":"#Control:DeliveryStatusDescription/#Value","GrossAmount":"#Control:GrossAmount/#Value","LifecycleStatus":"#Control:LifecycleStatus/#Value","LifecycleStatusDescription":"#Control:LifecycleStatusDescription/#Value","NetAmount":"#Control:NetAmount/#Value","Note":"#Control:Note/#Value","NoteLanguage":"#Control:NoteLanguage/#Value","SalesOrderID":"#Control:SalesOrderID/#Value","TaxAmount":"#Control:TaxAmount/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOffline.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOffline.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/EpmCacheApp/Services/MbtEpmDemo.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineSuccessMessage.action","OnFailure":"/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineFailureMessage.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineFailureMessage.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineSuccessMessage.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/CloseOfflineSuccessMessage.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadOffline.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadOffline.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","DefiningRequests":[{"Name":"BusinessPartnerFilterSet","Query":"BusinessPartnerFilterSet"},{"Name":"BusinessPartnerSet","Query":"BusinessPartnerSet"},{"Name":"ClientRegistrationSet","Query":"ClientRegistrationSet"},{"Name":"SalesOrderSet","Query":"SalesOrderSet"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action","OnSuccess":"/EpmCacheApp/Rules/MbtEpmDemo/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadStartedMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadStartedMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOffline.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","DefiningRequests":[{"Name":"BusinessPartnerFilterSet","Query":"BusinessPartnerFilterSet"},{"Name":"BusinessPartnerSet","Query":"BusinessPartnerSet"},{"Name":"ClientRegistrationSet","Query":"ClientRegistrationSet"},{"Name":"SalesOrderSet","Query":"SalesOrderSet"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOfflineFailureMessage.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOfflineFailureMessage.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOnline.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOnline.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","ActionResult":{"_Name":"init"},"OnFailure":"/EpmCacheApp/Actions/MbtEpmDemo/Service/InitializeOfflineFailureMessage.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","Service":"/EpmCacheApp/Services/MbtEpmDemoOnline.service"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncStartedMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncStartedMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/EpmCacheApp/Actions/MbtEpmDemo/Service/UploadOffline.action","OnFailure":"/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/UploadOffline.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/MbtEpmDemo/Service/UploadOffline.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/EpmCacheApp/Services/MbtEpmDemo.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/EpmCacheApp/Actions/MbtEpmDemo/Service/DownloadStartedMessage.action","OnFailure":"/EpmCacheApp/Actions/MbtEpmDemo/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/UpdateEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/UpdateEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Actions/UpdateEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/EpmCacheApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Globals/Application/AppDefinition_Version.global":
/*!****************************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Globals/Application/AppDefinition_Version.global ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Globals/Application/ApplicationName.global":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Globals/Application/ApplicationName.global ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Globals/Application/SupportEmail.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Globals/Application/SupportEmail.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Globals/Application/SupportPhone.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Globals/Application/SupportPhone.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Services/MbtEpmDemo.service":
/*!*******************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Services/MbtEpmDemo.service ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"MbtEpmDemo","Headers":{"Client-Instance-ID\t":"/EpmCacheApp/Rules/GetOrGenerateClientInstanceId.js"},"OfflineEnabled":true,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Services/MbtEpmDemoOnline.service":
/*!*************************************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Services/MbtEpmDemoOnline.service ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"MbtEpmDemo","OfflineEnabled":false,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/EpmCacheApp/Styles/Styles.json":
/*!**********************************************************!*\
  !*** ./build.definitions/EpmCacheApp/Styles/Styles.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/EpmCacheApp/jsconfig.json":
/*!*****************************************************!*\
  !*** ./build.definitions/EpmCacheApp/jsconfig.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});