Ext.define('ianMizi.model.AyohaeWalletTransaction.AyohaeWalletTransactionModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'ID',
        'RowNumber',
      'eWalletAccNo',
      'TransactionType',
      'TransactionAmount',
      'TransactionReferenceNo',
      'TransactionStatus',
      'TransactionNote',
      'CreditDebitType',
      'CustomerAccNo',
      'CreatedDate',
      'ModifiedCreatedDate',
      'RowStatus',
      'AccountName',
      'AccountProfileImg',
      'ItemCartCode',
      'MembershipCardCode',
      'OrderNo',
       'MonthNumber',
      'CreatedDate_MonthYear',
      'ThisMonthSpent',
      'ThisMonthIncome',
      'PhoneNo',
      'UserProfileImg',
      'FullAccountName',
      'PaymentMethod',
      'PaymentChannel',
      'CreatedBy',
      {
          name: 'ModifiedTransactionAmount',
          convert: function (value, record) {
              var _value;
              var floatTransactionAmount = parseFloat(record.get('TransactionAmount'));
              var strCreditDebitType = record.get('CreditDebitType');

              if (strCreditDebitType == 'Credit') {
                  _value = " +RM" + floatTransactionAmount.toFixed(2) + ""
              } else {
                  _value = " -RM" + floatTransactionAmount.toFixed(2) + ""
              }




              return _value;
          }
      },
    //   {
    //     name: 'ModifiedAccountName',
    //     convert: function (value, record) {
    //         var _value;
           

    //         var text  = record.get('AccountName');
    //         console.log(text)
    //        _value = text.replace(/(^|[^<])br>/g, '\n');

    //        console.log(_value)



    //         return _value;
    //     }
    // },


    {
        name: 'ModifiedAccountName',
        convert: function (value, record) {
            var text = record.get('AccountName');
    
            // Decode HTML entities (like &lt; and &gt;)
            var textarea = document.createElement("textarea");
            textarea.innerHTML = text;
            var decoded = textarea.value;
    
            // Replace bad `br>` or plain "br>" with actual <br> or \n
            decoded = decoded.replace(/(^|[^<])br>/g, '$1<br>');
    
            // Optional: convert <br> into newline if needed for plain text display
            var finalOutput = decoded.replace("see more", '<div style="color:blue"><u>See More</u></div>');
    
           
    
            return finalOutput;
        }
    },
    //    {
    //        name: 'isSpentOrIncome',
    //        convert: function (value, record) {
    //            var _value;
    //            var strCreditDebitType = record.get('CreditDebitType');
    //            var TransactionType = record.get('TransactionType');
    //            var TransactionStatus = record.get('TransactionStatus');
    //            if (strCreditDebitType == 'Credit') {
    //                _value = "<font color=green>Paid</font>"
    //            } else {
    //                _value = "<font color=red>Spent</font>"

    //                if (TransactionType == "CashOut") {
    //                    _value = "<font color=red>" + TransactionStatus + "</font>"
    //                }
    //            }




    //            return _value;
    //        }
    //    },

       {
        name: 'isSpentOrIncome',
        convert: function (value, record) {
            var _value;
            var strCreditDebitType = record.get('CreditDebitType');
            var TransactionType = record.get('TransactionType');
            var TransactionStatus = record.get('TransactionStatus');
            if (strCreditDebitType == 'Credit') {
                _value = "<font color=green>Paid</font>"
                if (TransactionType == "Ayoha eWallet Topup Enterprise")
                {
                    if (TransactionStatus == "Success")
                    {
                        _value = "<font color=blue>Income</font> (<font color=green>" + TransactionStatus + "</font>)"
                    } else {
                        _value = "<font color=red>" + TransactionStatus + "</font>"
                    }
                   
                }

                
                if (TransactionType == "AyohaStore_Payment") {
                    _value = "<font color=blue>Income</font> (<font color=green>Paid</font>)"
                }
                if (TransactionType == "eWallet_AppTransferCredit") {
                    _value = "<font color=blue>Income</font>"
                }
                if (TransactionType == "AyohaRewardContest_TapAndWin") {
                    _value = "<font color=blue>Income</font>"
                }
                
            } else {
                _value = "<font color=red>Spent</font>"

                if (TransactionType == "CashOut") {
                    _value = "<font color=red>" + TransactionStatus + "</font>"
                }
                
            }




            return _value;
        }
    },
        {
            name: 'SearchCol',
            convert: function (value, record) {
                var _value;
               
                var strAccountName = record.get('AccountName');
                var strFullAccountName = record.get('FullAccountName');
                var strTransactionAmount = record.get('TransactionAmount');
                var strCreditDebitType = record.get('CreditDebitType');

                if (strCreditDebitType == 'Credit') {
                    _value = "Income|" + strAccountName + "|"+ strFullAccountName +"|"+ strTransactionAmount +""
                } else {
                    _value = "Spent|" + strAccountName + "|" + strFullAccountName + "|" + strTransactionAmount + ""
                }




                return _value;
            }
        },
         {
             name: 'ModifiedFullAccountName',
             convert: function (value, record) {
                 var _value;
               //  var floatTransactionAmount = parseFloat(record.get('TransactionAmount'));
                 var FullAccountName = record.get('FullAccountName');
                 var TransactionType = record.get('TransactionType');
                 if (FullAccountName.length>17) {
                     _value = FullAccountName.substring(0,17);
                 } else {
                     _value = FullAccountName
                     if (TransactionType == "CashOut") {
                         _value = "CashOut"
                     }
                 }




                 return _value;
             }
         },

        ]
    }
});
