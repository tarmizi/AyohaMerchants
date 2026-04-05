
Ext.define('ianMizi.store.AyohaStoreSaleItem.AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore', {
});

var _DataStore_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreSaleItem.AyohaStoreSaleItemProductCategoryModel',
    id: '_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem_ProductCategory/AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNo',
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