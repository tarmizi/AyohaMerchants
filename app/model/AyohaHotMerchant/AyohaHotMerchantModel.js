Ext.define('ianMizi.model.AyohaHotMerchant.AyohaHotMerchantModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'ID',
      'AyohaHotMerchant_VideoUrl',
      'AyohaHotMerchant_CoverImgVideoUrl',
      'AyohaHotMerchant_Description',
      'AyohaHotMerchant_Code',
      'AyohaHotMerchant_Status',
      'EnterpriseAccNo',
      'RowStatus',
      'Segment',
      'StartDate',
      'EndDate',
      'isUsedEndDate',
      'CreatedDate',
      'CreatedBy',
      'ModifiedDate',
      'ModifiedBy',
      'AyohaHotMerchant_SourceURL',
      'AdvertismentTypeCode',
      'AyohaHotMerchant_Option',
      'AdvertisementPeriodDay',
        {
            name: 'ModifiedAyohaHotMerchant_Option',
            convert: function (value, record) {
                var _value;
                var AyohaHotMerchant_Option = record.get('AyohaHotMerchant_Option');
               
                if (AyohaHotMerchant_Option == "TikTok") {
                    _value = 'resources/icons/TikToklogo.jpg';
                }
                if (AyohaHotMerchant_Option == "Facebook") {
                    _value = 'resources/icons/facebook_logos.png';
                }
                if (AyohaHotMerchant_Option == "Instagram") {
                    _value = 'resources/icons/instagramlogo.png';
                }
                if (AyohaHotMerchant_Option == "Youtube") {
                    _value = 'resources/icons/youtubelogo.png';
                }


                return _value
            }
        },
        ]
    }
});
