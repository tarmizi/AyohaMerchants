Ext.define("ianMizi.store.Master.RedemptionApprovalStatusStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'ListRedemptionApprovalStatusStore',
    config: {
        model: 'ianMizi.model.Master.RedemptionApprovalStatusModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { ApprovalStatus: 'Approved' },
            { ApprovalStatus: 'Rejected' },
            { ApprovalStatus: 'Submitted' },
        ]
    }
});
