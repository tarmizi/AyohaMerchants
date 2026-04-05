Ext.define('ianMizi.model.AyohaRewardVoucher.AyohaRewardVoucherModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'VoucherCode',
                  'VoucherName',
                 'VoucherImgPath',
                 'VoucherImgName',
                 'VoucherAmount',
                  'VoucherTermAndCondition',
                 'RowStatus',
                 'CreatedDate',
                 'CreatedBy',
                  'EnterpriseAccNo',
                 'VoucherType',
                 'MembershipCardCode',
                 'VoucherEndDate',
                  'VoucherNote',
                 'isRequireVoucherEndDate',
                 'VocherRecipient',
                 'RowNumber',
                 'VoucherDayLeft',
                 {
                    name: 'ModifiedVoucherEndDate',
                    convert: function (value, record) {
                        var _value;
                        var isRequireVoucherEndDate = record.get('isRequireVoucherEndDate');
                        var VoucherEndDate = record.get('VoucherEndDate');
        
                      
                        if (isRequireVoucherEndDate == "Yes") {
                            //_value = '<input type="checkbox"  checked class="largerCheckbox" onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_OnChangeCheckbox (' + this + ',' + VoucherCode + ',' + VoucherAmount + ')" name="checkbox" />';
                            _value = VoucherEndDate;
                        } else {
                            _value = 'NA';
                        }
        
        
        
        
                        return _value;
                    }
                },
        ]
    }
});
