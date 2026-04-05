Ext.define('ianMizi.store.Master.MalaysiaPostcodestatesLoadStore', {
    extend: 'Ext.data.Store',
   
    config: {
        model: 'ianMizi.model.Master.MalaysiaPostcodeModel',
        autoLoad: true,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
            url: GetAPIurl() + '/Malaysia_Postcode_states/Malaysia_Postcode_states_Load',

            actionMethods: {
                read: 'GET'
            },
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        },

    }
});
