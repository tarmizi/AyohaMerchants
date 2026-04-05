Ext.define('ianMizi.model.VIEWRedemptionList.VIEWRedemptionListModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'RowNumber',
                 'ItemCode',
                 'RedeemPrizeImage',
                 'RedeemPrizeName',
                 'RedeemBy',
                 'PhotoRedeemBy',
                 'RedeemInfo',
                 'StampedCampaignStartDate',
                 'StampRuleRemarks',
                 'CampaignName',
                 'PointCampaignEndDate',
                 'PointCampaignisRequiredStartEndDate',
                 'isCampaignExpired',
                 'RedeemHistoryCode',
                 'RedeemHistoryStatus',
                 'RedeemHistoryStatusBy',
                 'RedeemHistoryStatusDate',
                 'RedeemPoint',
                 'Remarks',
                 'EnterpriseAccNo',
                 'PointCampaignCode',
                 'RedeemHistoryApprovalStatusBy',
                 'CampaignType',
                 'PhoneNo',
                 'SearchCol',
                 {
                    name: 'ModifiedRedeemPrizeImage',
                    convert: function (value, record) {
                        var _value;
                        var CampaignType=record.get('CampaignType');
                        var RedeemPrizeImage=record.get('RedeemPrizeImage');
                        var ca;
                        if (CampaignType == "StampCampaign") {

                        


                            

                            _value =RedeemPrizeImage;



                        } else {
                         
                       // _value =RedeemPrizeImage;





                        _value = '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url('+ RedeemPrizeImage +'); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp10" ></div>';
                        //_value = '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url('+ RedeemPrizeImage +'); background-size: 100% 100%; background-repeat: no-repeat;background-size: cover;border: 2px solid black; padding: 50px;" id="divContentFloatLoyaltyCardStamp10" ></div>';
                       
                    }


                        return _value;
                    }
                },
                {
                    name: 'ModifiedRedeemPrizeImage_memberDetails',
                    convert: function (value, record) {
                        var _value;
                        var CampaignType=record.get('CampaignType');
                        var RedeemPrizeImage=record.get('RedeemPrizeImage');
                        var ca;
                        if (CampaignType == "StampCampaign") {

                        
                            var text =RedeemPrizeImage;

                            for (var i = 0, j = 0; ; ) {
                                i = text.indexOf('(', i);
                                if (i !== -1) {
                                    i = i + 1
                                    j = text.indexOf(')', i);
                                    if (j !== -1) {
                                        ca=text.substring(i, j);
                                        i = j + 1;
                                        continue;
                                    }
                                }
                                break;
                            }

                            

                            _value =ca;



                        } else {
                         
                          //  _value =RedeemPrizeImage;



                         _value =RedeemPrizeImage;


                         // _value = '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url('+ RedeemPrizeImage +'); background-size: 100% 100%;no-repeat center #eee;" id="divContentFloatLoyaltyCardStamp10" ></div>';
                        }


                        return _value;
                    }
                },
                {
                    name: 'ModifiedButtonUpdateRedemptionStatus_RedeemPrizeImage',
                    convert: function (value, record) {
                        var _value;
                        var CampaignType=record.get('CampaignType');
                        var RedeemPrizeImage=record.get('RedeemPrizeImage');
                        var RedeemPrizeName=record.get('RedeemPrizeName');
                        var ca;
                        console.log(RedeemPrizeName)
                        if(RedeemPrizeName.length>1){
                            if (CampaignType == "StampCampaign") {

                                var text =RedeemPrizeImage;
    
                                for (var i = 0, j = 0; ; ) {
                                    i = text.indexOf('(', i);
                                    if (i !== -1) {
                                        i = i + 1
                                        j = text.indexOf(')', i);
                                        if (j !== -1) {
                                            ca=text.substring(i, j);
                                            i = j + 1;
                                            continue;
                                        }
                                    }
                                    break;
                                }
    
    
    
    
                                
    
                                _value =ca;
    
    
    
    
                            }else{
                                _value = RedeemPrizeImage; 
                            }
                        }
                       else {
                          //  _value = RedeemPrizeImage;

                            var htmlContent =RedeemPrizeImage;

// Removing all double quotes
_value = htmlContent.replace(/"/g, '');
// i have idea store the original value in array.
//_value = +'`'+RedeemPrizeImage+'`';
                           
                        }


                        return _value;
                    }
                },
                {
                    name: 'ModifiedRedeemInfo',
                    convert: function (value, record) {
                        var _value;
                        var CampaignType=record.get('CampaignType');
                        var RedeemInfo=record.get('RedeemInfo');
                        if (CampaignType == "StampCampaign") {
                            _value =RedeemInfo+'<br><div style="margin:-7px 0px 0px 0px;font-size:10px;">Stamped Redeem</div>';
                        } else {
                            _value =RedeemInfo+'<br><div style="margin:-7px 0px 0px 0px;font-size:10px;">Point Redeem</div>';
                        }


                        return _value;
                    }
                },
                {
                    name: 'ModifiedRedeemInfo_memberdetail',
                    convert: function (value, record) {
                        var _value;
                        var CampaignType=record.get('CampaignType');
                        var RedeemInfo=record.get('RedeemInfo');
                        if (CampaignType == "StampCampaign") {
                            _value ='<div style="width: 100%;"><div style="width: 20%; height: 20px; float: left; background: white;font-size:16px">'+RedeemInfo+'</div><div style="height: 20px; background: white;font-size:9px;width:80%;text-align:center;vertical-align:bottom;margin:0px 0px -10px -55px;">(Stamped Redeem)</div></div>';
                        } else {
                            _value ='<div style="width: 100%;"><div style="width: 20%; height: 20px; float: left; background: white;font-size:16px">'+RedeemInfo+'</div><div style="height: 20px; background: white;font-size:9px;width:80%;text-align:center;vertical-align:bottom;margin:0px 0px -10px -55px;">(Point Redeem)</div></div>';
                            //_value =RedeemInfo+'<div style="margin:-7px 0px 0px 0px;font-size:10px;">Point Redeem</div>';
                        }


                        return _value;
                    }
                },
                {
                    name: 'ModifiedRedeemHistoryStatus',
                    convert: function (value, record) {
                        var _value;
                        var RedeemHistoryStatus=record.get('RedeemHistoryStatus');
                        var RedeemHistoryCode=record.get('RedeemHistoryCode');
                        var RedeemHistoryStatusBy=record.get('RedeemHistoryStatusBy');
                        if (RedeemHistoryStatus == "Submitted") {
                            _value ='<div class="blink_me"><div style="background-color:orange;text-align:center;width:50%;"><font size=2 color=white><b>New</b></font></div></div>';
                            return _value;
                       
                        } 
                        if (RedeemHistoryStatus == "Approved") {
                            _value ='<div style="background-color:green;text-align:center;width:50%;cursor: pointer;" onclick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow_redemptionList('+ "'" +RedeemHistoryCode+ "'" +','+ "'" +RedeemHistoryStatusBy+ "'" +')"><font size=2 color=white><b><u>'+RedeemHistoryStatus+'</u></b></font></div><br><div style="margin:-9px 0px 0px 0px;font-size:10px;color:blue;text-align:center;width:50%;cursor: pointer;" onclick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow_redemptionList('+ "'" +RedeemHistoryCode+ "'" +','+ "'" +RedeemHistoryStatusBy+ "'" +')"><u>Click to view Status Log</u></div>';
                            return _value;
                        } 
                        if (RedeemHistoryStatus == "Rejected") {
                            _value ='<div style="background-color:red;text-align:center;width:50%;cursor: pointer;" onclick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow_redemptionList('+ "'" +RedeemHistoryCode+ "'" +','+ "'" +RedeemHistoryStatusBy+ "'" +')"><font size=2 color=white><b><u>'+RedeemHistoryStatus+'</u></b></font></div><br><div style="margin:-9px 0px 0px 0px;font-size:10px;color:blue;text-align:center;width:50%;cursor: pointer;" onclick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow_redemptionList('+ "'" +RedeemHistoryCode+ "'" +','+ "'" +RedeemHistoryStatusBy+ "'" +')"><u>Click to view Status Log</u></div>';
                            return _value;
                        } 
                        else {
                            _value = '<font size=3 color=black>'+RedeemHistoryStatus+'</font>';
                            return _value;
                        }


                        
                    }
                },
                {
                    name: 'ModifiedRedeemHistoryStatusBy',
                    convert: function (value, record) {
                        var _value;
                        var RedeemHistoryStatusBy=record.get('RedeemHistoryStatusBy');
                       // Syazmermustaffa-202212156273-773284
                        var arr = RedeemHistoryStatusBy.split('-');
_value=arr[1]+'-'+[2];

                        return _value;
                    }
                },
           
        ]
    }
});