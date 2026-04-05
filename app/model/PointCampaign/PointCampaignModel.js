Ext.define('ianMizi.model.PointCampaign.PointCampaignModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           'ID',
      'PointCampaignCode',
      'PointCampaignName',
      'StartDate',
      'EndDate',
      'StrEndDate',
      'RowStatus',
      'EnterpriseAccNo',
      'CreatedByAccNo',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'Remarks',
      'PointCampaignPremiumQRCode',
      'TermAndCondition',
      'isPointRulePopUp',
       'PointOption',
      'PointAmountEquation',
      'RequiredReceiptBillNo',
      'CountMembers',
      'ModifiedStartDate',
      'ModifiedEndDate',
       ]
    }
});