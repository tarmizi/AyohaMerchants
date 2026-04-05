Ext.define('ianMizi.store.AyohaMerchantReview.AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.AyohaMerchantReview.AyohaMerchantReviewModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewTopTwoLoadByEnterpriseAccNo',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});




var _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore = Ext.create('Ext.data.Store', {

   model: 'ianMizi.model.AyohaMerchantReview.AyohaMerchantReviewModel',
   id: '_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStoreID',
   proxy: {
       type: 'ajax',
       url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndSubscriberAccNo',
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