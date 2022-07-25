Platform.Load('Core', '1');

var prox = new Script.Util.WSProxy();

var queryStr = '';
queryStr += 'SELECT DISTINCT';
queryStr += '\nEmailAddress AS [Email Address]';
queryStr += '\nFROM _Sent s';
queryStr += '\nLEFT JOIN _Subscribers sub'; // add ENT. prefix if using in child BU
queryStr += '\n   ON s.SubscriberKey = sub.SubscriberKey';
queryStr += '\nLEFT JOIN _Open o';
queryStr += '\n   ON s.SubscriberKey = o.SubscriberKey';
queryStr += '\nWHERE o.SubscriberKey IS NULL';

var queryDef = {
    CustomerKey: 'ASKEY',
    ObjectID: '8ae99a30-4ada-470c-8a76-ff1cd02233bd',
    QueryText: queryStr,
    TargetType: 'DE',
    TargetUpdateType: 'Update',
    DataExtensionTarget: {
        CustomerKey: 'InactiveSubscribers',
        Name: 'Inactive Subscribers'
    }
};
var updateQuery = prox.updateItem('QueryDefinition', queryDef);

Write('result: ' + Stringify(updateQuery));
