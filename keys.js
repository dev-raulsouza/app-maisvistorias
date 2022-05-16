import keysjson from './keys.json' assert {type: "json"};

export default function keys(){

    let accessKeyID = keysjson["access_key"];
    let secretAccessKeyID = keysjson["secret_access_key"];
    
    return {accessKeyID, secretAccessKeyID};
}
