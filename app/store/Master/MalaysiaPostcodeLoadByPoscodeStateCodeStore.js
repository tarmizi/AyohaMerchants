Ext.define('ianMizi.store.Master.MalaysiaPostcodeLoadByPoscodeStateCodeStore', {

});




var _DataStore_MalaysiaPostcodeLoadByPoscodeStateCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Master.MalaysiaPostcodeModel',
    id: 'MalaysiaPostcodeLoadByPoscodeStateCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Malaysia_Postcode_states/MalaysiaPostcodeLoadByPoscodeStateCode',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
});