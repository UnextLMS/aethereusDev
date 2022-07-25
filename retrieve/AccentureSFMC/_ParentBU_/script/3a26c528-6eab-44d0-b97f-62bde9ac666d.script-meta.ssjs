// Author: Eliot Harper <eliot@eliot.com.au>
// Revision date: January 31, 2021

// DISCLAIMER
// While due care has been taken in the preparation of this
// supplied code example, no liability is assumed for incidental
// or consequential damages in connection with or arising out its
// use. Example code is provided on an "as is" basis and no
// expressed or implied warranty of any kind is made for the
// suitability of this code for your purpose. Salesforce Marketing
// Cloud operational procedures and programming methods may change
// between releases and you are solely responsible for determining
// whether this code is applicable for your intended use.

Platform.Load('Core', '1');

var prox = new Script.Util.WSProxy();

var queryDef = {
    CustomerKey: '40bba908-90b1-4c6f-8c8e-faa5d62943fa',
    ObjectID: 'a7a73841-97a1-43df-9d45-3c71c6c55efd',
    QueryText: queryStr,
    TargetType: 'DE',
    TargetUpdateType: 'Update',
    DataExtensionTarget: {
        CustomerKey: '61D7967B-23B8-4601-81D5-43FE46E2813D',
        Name: 'Suppression 2'
    }
};
var updateQuery = prox.updateItem('QueryDefinition', queryDef);

Write('result: ' + Stringify(updateQuery));
