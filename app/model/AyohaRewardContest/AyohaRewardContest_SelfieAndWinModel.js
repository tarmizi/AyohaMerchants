Ext.define('ianMizi.model.AyohaRewardContest.AyohaRewardContest_SelfieAndWinModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'RowNumber',
      'ContestCode',
      'SelfieImagePath',
      'SelfieImageName',
      'SubscriberAccNo',
      'CreatedDate',
      'CreatedBy',
      'ModifiedDate',
      'ModifiedBy',
      'Note',
      'RowStatus',
      'ContestStatus',
      'EnterpriseAccNo',
      'ReceiptLink',
      'ReceiptName',
      'AccountName',
      'AccountEmail',
      'AccountPhone',
      'AccountPhoto',
      'ContestName',
      'ContestType',
      'MainContestStatus',
      'isWinner',
      'ModifiedAnswerBy',
      'DayLeft',
      'isRequiredReceipt',
      'AdvertisementImgPath',
      'ContestQuestion',
      'RankNo',
      {
        name: 'ModifiedisWinner',
        convert: function (value, record) {
            var _value;

            var isWinnerStatus = record.get('isWinner');
            if (isWinnerStatus == "Yes") {
                _value = '<div class="blink_me"><font size=4px color=green><b>Yes</b></font></div>';
            } else {
                _value = isWinnerStatus;
            }

            return _value;
        }
    },
        ]
    }
});