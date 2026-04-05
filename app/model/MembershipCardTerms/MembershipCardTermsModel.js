Ext.define('ianMizi.model.MembershipCardTerms.MembershipCardTermsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'EnterpriseAccNo',
      'MembershipCardCode',
      'TermAndConditions',
      'RowStatus',
      'CreatedBy',
      'CreatedDate',
      'TermsStatus',
       {
           name: 'ModifiedTermAndConditions',
           convert: function (value, record) {
               var _value;

               var str = record.get('TermAndConditions');
              
               _value = str.substring(0, 250);

               return _value.replace(/\n/g, "<br />");
           }
       },
        {
            name: 'ModifiedTermsStatus',
            convert: function (value, record) {
                var _value;

                var str = record.get('TermsStatus');

                if (str == "DRAF") {
                    _value = '<div style="width:100%;text-align:right;margin:-25px 0px 0px 10px;"><button OnClick="FloatPanel_MembershipCardManagement_TermAndConditionShow()" class="button3viewloyaltycard">Full View</button></div>';
                }
                if (str == "CONFIRMED") {
                    _value = '<div style="width:100%;text-align:right;margin:-25px 0px 0px 10px;">.</div>';
                }

               
                return _value;
            }
        },
        ]
    }
});

