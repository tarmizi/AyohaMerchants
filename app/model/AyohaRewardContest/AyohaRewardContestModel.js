Ext.define('ianMizi.model.AyohaRewardContest.AyohaRewardContestModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'ContestCode',
      'AdvertisementImgPath',
      'AdvertismentImgName',
      'StartDate',
      'EndDate',
      'RowStatus',
      'CreatedDate',
      'CreatedBy',
      'ContestStatus',
      'SegmentContestCode',
      'StartDate_DateOnly',
      'EndDate_DateOnly',
      'StartDate_DateOnly_list',
      'EndDate_DateOnly_list',
      'ContestDescription',
      'ContestFees',
      'FirstPrizeImgPath',
      'FirstPrizeImgName',
      'SecondPrizeImgPath',
      'SecondPrizeImgName',
      'ThirdPrizeImgPath',
      'ThirdPrizeImgName',
      'ConsolationPrizeImg',
      'ConsolationPrizeName',
      'ContestName',
      'WinnerAnnoucementStatus',
      'TodayDateSvr',
      'ContestStatus_ContestStatus',
      'RowNumber',
      'isRequiredReceipt',
      'ContestType',
      'ContestQuestion',
      'ModifiedDate',
      'ModifiedBy',
      'CountParticipants',
      'StatusContest',
       {
           name: 'ModifiedWidth',
           convert: function (value, record) {
               var _value = parseInt(window.innerWidth) - 24;

               return _value;
           }
       },
       {
           name: 'ModifiedContestStatus_ContestStatus',
           convert: function (value, record) {
               var _value;

               var ContestStatus_ContestStatus = record.get('ContestStatus_ContestStatus');
               if (ContestStatus_ContestStatus == "New") {
                   _value = '<div class="blink_me"><font size=2 color=purple><b>Join Contest Now!</b></font></div>';
               } else {
                   _value = ContestStatus_ContestStatus;
               }

               return _value;
           }
       },
       'EnterpriseLogo',
       'EnterpriseName',
       'EnterpriseAccNo'
        ]
    }
});