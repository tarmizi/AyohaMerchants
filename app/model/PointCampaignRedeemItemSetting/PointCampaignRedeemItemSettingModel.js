Ext.define('ianMizi.model.PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             'ID',
      'ImgPath',
      'AyohaUserGroupCode',
      'ItemName',
      'ItemCode',
      'ItemPoint',
      'ItemImg',
      'RowStatus',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'Remarks',
      'ItemPrizePriceCost',
      'AyohaUserGroupCategory',
      'PointCampaignCode',
      'EnterpriseAccNo',
      'TotalItemPoint',
      'TotalItemPrizePriceCost',
        {
            name: 'ModifiedItemCode',
            convert: function (value, record) {
                var _value;

                var str = record.get('ItemCode');
                var ModiStr = str.split('-');
                _value = ModiStr[0];

                return _value;
            }
        },
        ]
    }
});



