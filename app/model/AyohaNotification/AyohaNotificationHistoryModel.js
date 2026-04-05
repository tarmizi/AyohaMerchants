Ext.define('ianMizi.model.AyohaNotification.AyohaNotificationHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID'
      ,'RowNumber'
      ,'NotificationCode'
      ,'SubscriberAccNo'
      ,'AccountName'
      ,'IsRead'
      ,'ReadDate'
      ,'PlayerID'
      ,'SentDate'
      ,'UserRowStatus'
      ,'EnterpriseAccNo'
      ,'EnterpriseHQAccNo'
      ,'MobilePhoneNo'
      ,'Counts'
      ,'SendStatus'
      ,'NotificationMedium'
      , 'AMID'
      ,'NotificationTitle'
      ,'NotificationBody'
      , 'NotificationType'
      ,'SearchCol'
        ]
    }
});