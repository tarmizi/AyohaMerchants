Ext.define('ianMizi.store.DashboardMerchant.AyohaStoreDashboardSaleInfoTopProductMerchantStore', {
});

var _DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.DashboardMerchant.AyohaStoreDashboardModel',
    id: '_AyohaStoreDashboardSaleInfoTopProductMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_Dashboard/AyohaStoreDashboardSaleInfoTopProductMerchant',
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