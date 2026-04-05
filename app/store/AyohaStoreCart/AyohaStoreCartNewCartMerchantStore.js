
Ext.define('ianMizi.store.AyohaStoreCart.AyohaStoreCartNewCartMerchantStore', {
});





var _DataStore_AyohaStoreCartNewCartMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreCart.AyohaStoreCartNewCartModel',
    id: '_AyohaStoreCartNewCartMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartNewCartMerchant',
        actionMethods: {
            read: 'POST'
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