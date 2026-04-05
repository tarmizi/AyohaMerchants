Ext.define('ianMizi.model.Memberships.MembershipsLatestActivityModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'RowNumber',
            'AccountNo',
                 'Photo',
      'AccountName',
      'CampaignCode',
      'CampaignName',
      'UpdatedDate',
      'enterpriseAccNo',
      'TblActivity',
      'LoyaltyActivity',
      'SearchCol',
      {
        name: 'ModifiedCampaignName',
        convert: function (value, record) {
            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
            // 0111 3218 9269
            var _value;
            var TblActivity = record.get('TblActivity');
            var CampaignName = record.get('CampaignName');
            console.log(TblActivity)
            if (TblActivity.includes("Memberships Status")) {
                _value = 'Membership Registration';
                return _value;
            }
            if (TblActivity.includes("Ayoha Store")) {
                _value = 'Ayoha Store';
                return _value;
            }
            else{
                _value = CampaignName;
                return _value;
            }
           
           

        }
    },
    
        ]
    }
});
