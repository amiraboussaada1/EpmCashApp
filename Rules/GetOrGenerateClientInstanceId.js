var clientAPI;
let FINAL_INSTANCE_ID_KEY = "KEY_CLIENT_INSTANCE_ID";

/**
 * Functions checks availability of Client-Instance-ID in appSettings Key-Value Store and returns or generates, persists and returns it.
 * @returns {String} uuidv4-compliant string
 */
export default function GetOrGenerateClientInstanceId(clientAPI) {
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
