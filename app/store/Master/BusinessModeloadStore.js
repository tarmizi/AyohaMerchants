Ext.define('ianMizi.store.Master.BusinessModeloadStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'ianMizi.model.Master.BusinessModeModel',
        autoLoad: true,

        proxy: {

            type: 'ajax',          
            url: GetAPIurl() + '/BusinessMode/BusinessModeload',
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
