Ext.define('ianMizi.store.AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantCodeStore', {
});

var _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaHotMerchant.AyohaHotMerchantModel',
    id: '_AyohaHotMerchantLoadByAyohaHotMerchantCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantCode',
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