Ext.define('ianMizi.model.DiscountCampaign.DiscountCampaignModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'DiscountCode',
                  'DiscountName',
                 'DiscountImgPath',
                 'DiscountImgName',
                 'DiscountPercent',
                  'DiscountTermAndCondition',
                 'RowStatus',
                 'CreatedDate',
                 'CreatedBy',
                  'EnterpriseAccNo',
                 'DiscountType',
                 'MembershipCardCode',
                 'DiscountEndDate',
                  'DiscountNote',
                 'isRequireDiscountEndDate',
        ]
    }
});
