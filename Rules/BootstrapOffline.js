let FINAL_INSTANCE_ID_KEY = "KEY_CLIENT_INSTANCE_ID";
let FINAL_INSTANCE_ID_KEY_REGISTERED = "KEY_CLIENT_INSTANCE_ID_REGISTERED";

export default async function BootstrapOffline(clientAPI) {
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
