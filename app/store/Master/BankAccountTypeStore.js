Ext.define("ianMizi.store.Master.BankAccountTypeStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'BankAccountTypeStoreStore',
    config: {
        model: 'ianMizi.model.Master.BankAccountTypeModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { BankAccountType: 'Bussiness' },
           { BankAccountType: 'Personal' },

        ]
    }
});
