//Ext.define('ianMizi.model.AyohaUserProfile.AyohaUserProfileModel', {
//    extend: 'Ext.data.Model',
//    config: {
//        fields: [
//     'ID',
//      'AccountNo',
//      'AccountName',
//      'Email',
//      'PhoneNo',
//      'Photo',
//      'Gender',
//      'DOB',
//      'RowStatus',
//      'CreatedDate',
//      'ModifiedDate',
//      'UserName',
//      'Katalaluan',
//      'LastLoginDate',
//      'PhotoName',
//      'GUID',
//      'isUserVerified',
//      'VerifyString',
//      'AyohaVersion',
//      'PointAmountEquation',
//      'RequiredReceiptBillNo',
//      'EnterpriseAccNo',
//      'PlayerID',
//      'RowNumber'
//        ]
//    }
//});


Ext.define('ianMizi.model.AyohaUserProfile.AyohaUserProfileModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
     'ID',
      'AccountNo',
      'AccountName',
      'Email',
      'PhoneNo',
      'Photo',
      'Gender',
      'DOB',
      'RowStatus',
      'CreatedDate',
      'ModifiedDate',
      'UserName',
      'Katalaluan',
      'LastLoginDate',
      'PhotoName',
      'GUID',
      'isUserVerified',
      'VerifyString',
      'AyohaVersion',
      'AyohaUserGroupCode',
      'UnClaimedTotalPoint',
      'UnClaimedTotalStamp',
      'NextRedeemPoint',
      'NextRedeemStamp',
      'UserVerifiedDate',
      'Email_Debit',
      'PlayerID',
       'RowNumber',
       'AyohaeWalletTransactionTransactionType'
        ]
    }
});
