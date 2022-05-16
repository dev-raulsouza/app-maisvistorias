export default function keys(){
var keysjson = require('./keys.json');

    let accessKeyID = keysjson[access_key];
    let secretAccessKeyID = keysjson[secret_access_key];
    
    return {accessKeyID, secretAccessKeyID};
}
