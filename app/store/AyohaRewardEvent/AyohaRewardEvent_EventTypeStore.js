Ext.define("ianMizi.store.AyohaRewardEvent.AyohaRewardEvent_EventTypeStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'AyohaRewardEvent_EventTypeStoreID',
    config: {
        model: 'ianMizi.model.AyohaRewardEvent.AyohaRewardEvent_EventTypeModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { EventType: 'Physical' },
            { EventType: 'Online' },
            { EventType: 'Hybrid' },

        ]
    }
});
