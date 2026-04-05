Ext.define('ianMizi.model.AyohaNotificationMaster.AyohaNotificationMasterModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'ID',
      'NotificationCode',
      'NotificationTitle',
      'NotificationBody',
      'NotifcationImage',
      'NotificationFooterImage',
      'EnterpriseAccNo',
      'EnterpriseHQAccNo',
      'NotificationType',
      'NotificationStatus',
      'CreatedDate',
      'CreatedBy',
      'ModifiedDate',
      'ModifiedBy',
      'RowStatus',
      'SendToAudiencesCount',
      'AudienceType',
      'NotificationMedium',
      'AccountName',
        {
            name: 'ModifyNotificationImg',
            convert: function (value, record) {
                var _value;

                var NotificationType = record.get('NotificationType');
                var NotifcationImage = record.get('NotifcationImage');
                var NotificationFooterImage = record.get('NotificationFooterImage');

                if (NotificationType == "Text") {
                    _value = '<div style="width:50%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Footer Image</div><br><div style="width:50%;height:80px;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;"><img src="' + NotificationFooterImage + '"  style="width:50%;height:80px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div>';
                }
                if (NotificationType == "Image") {
                    _value = '<div style="width:50%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Image</div><br><div style="width:50%;height:220px;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;"><img src="' + NotifcationImage + '"  style="width:50%;height:220px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div>';
                }


                return _value;
            }
        },
        'TypeCRDB',
        'RowNumber'
        ]
    }
});


