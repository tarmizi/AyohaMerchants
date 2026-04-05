Ext.define('ianMizi.model.MasterMemberships.MasterMembershipsDashboardApprovalStatusCountModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [           
                 'Request',
                 'Rejected',
                 'Expired',
                 'Approved',         
        ]
    }
});

