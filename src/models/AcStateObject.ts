// tslint:disable
// eslint-disable
/**
 * Sensibo API
 * <h1>Introduction</h1> The Sensibo API is built on HTTP. Our API is RESTful. It accepts and returns JSON in the HTTP body. You can use your favorite HTTP/REST library for your programming language to use the API, or you can use one of our SDKs (currently available in [Python](https://github.com/Sensibo/sensibo-python-sdk)). The yaml specification file can be uploaded to swagger. [try it live now](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sensibo/sensibo.github.io/master/sensibo.openapi.yaml).<h1>Contact</h1>The best way to get help and involved is to join the official [Sensibo Facebook group](https://facebook.com/groups/sensibo)<br>Also, you can find more resources and help on the [support site](http://support.sensibo.com)<h1>Authentication</h1> When you sign up for an account, you can generate API keys [here](https://home.sensibo.com/me/api), and delete API keys (as you may need to rotate your keys in the future). You authenticate to the Sensibo API by providing your api key in the request query parameters as ?apiKey={your_api_key}. <h1>GET requests</h1> Most GET requests can be provided with \'fields\' parameter in the query string to specify which fields you\'d like to retrieve. If you want to retrieve all fields or see the options specify fields=\\*<h1>Common Examples</h1><h3>Get all devices info</h3> `curl -X GET https://home.sensibo.com/api/v2/users/me/pods?fields=*&apiKey={api_key}`<h3>Turn on the AC</h3>`curl -X POST https://home.sensibo.com/api/v2/pods/{device_id}/acStates?apiKey={api_key} -d \"{\\\"acState\\\":{\\\"on\\\":true}}\"` <h3>Turn off the AC</h3>`curl -X POST https://home.sensibo.com/api/v2/pods/{device_id}/acStates?apiKey={api_key} -d \"{\\\"acState\\\":{\\\"on\\\":false}}\"`<h3>Get historical measurements up to 7 days</h3>`curl https://home.sensibo.com/api/v2/pods/{device_id}/historicalMeasurements?apiKey={api_key}&days=1`
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AcState,
    AcStateFromJSON,
    AcStateFromJSONTyped,
    AcStateToJSON,
} from './';

/**
 * 
 * @export
 * @interface AcStateObject
 */
export interface AcStateObject {
    /**
     * 
     * @type {AcState}
     * @memberof AcStateObject
     */
    acState: AcState;
}

export function AcStateObjectFromJSON(json: any): AcStateObject {
    return AcStateObjectFromJSONTyped(json, false);
}

export function AcStateObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcStateObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acState': AcStateFromJSON(json['acState']),
    };
}

export function AcStateObjectToJSON(value?: AcStateObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acState': AcStateToJSON(value.acState),
    };
}


