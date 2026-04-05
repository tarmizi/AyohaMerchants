Ext.define('ianMizi.store.VisitorAnalsys.VisitorAnalsysLoadDetailsStore', {
});

var _DataStore_VisitorAnalsysLoadDetailsStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.VisitorAnalsys.VisitorAnalsysModel',
    id: '_VisitorAnalsysLoadDetailsStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VisitorAnalsys/VisitorAnalsysLoadDetails',
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



    //autoLoad: true

});