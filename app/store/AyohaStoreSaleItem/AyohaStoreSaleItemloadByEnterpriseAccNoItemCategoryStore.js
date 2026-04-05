
Ext.define('ianMizi.store.AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore', {
});

var _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreSaleItem.AyohaStoreSaleItemModel',
    id: '_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByEnterpriseAccNoItemCategory',
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