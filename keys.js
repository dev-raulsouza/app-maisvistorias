import keysjson from './keys.json';

export default function keys(){

    let accessKeyID = keysjson["access_key"];
    let secretAccessKeyID = keysjson["secret_access_key"];
    let bucket = keysjson["bucket"];
    let region = keysjson["region"];
    
    return {accessKeyID, secretAccessKeyID, bucket, region};
}
