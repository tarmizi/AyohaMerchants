
var rn=0;
Ext.define('ianMizi.model.MasterMemberships.MasterMembershipsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
            'RowNumber',
            'MembershipByMethod',
            'SubscriberAccNo',
                 'CreatedDate',
                  'MembershipApprovalStatus',
                 'MembershipApprovalBy',
                  'MembrshipApprovalDate',
                  'MembershipRejectedDate',
                  'MembershipFeePaymentMethod',
                  'AccountName',
                 'PhoneNo',
                  'Email',
                 'Photo',
                 'MembershipCardCode',
                 'MembershipCardBg',
                 'MembershipCardName',
                 'MembershipApprovalDate',
                 'MembershipEndDate',
                 'MembershipLatestActivity',
                 'MembershipsRenewalInfo',
                 'MembershipsApprovalStatus',
                 'MembershipsCardCodes',
                 'EnterpriseAccNo',
                 'EnterpriseHQAccNo',
                  'CardCount',
                  'CountStamp',
                 'CountPoint',
                  'LastPointed_ActivityDate',
                 'LastStamped_ActivityDate',
                 'Latest_ActivityDate',
                 'SearchCol',
                 'PlayerID',
                 'Latest_ActivityDate_DateOnly',
                 'DOB',
                 'Gender',
                 'LastloginDate',
                 'StreetAddress',
                 'Town',
                 'PostCode',
                 'Country',
                 'Profession',
                 'Hobby',
                 'States',
                 'MembershipsRowStatus',
                 'ModifiedDate',
                 //{
                 //    name: 'Latest_ActivityDateModified',
                 //    convert: function (value, record) {

                 //        var _value;
                 //        var Latest_ActivityDate = record.get('Latest_ActivityDate');
                 //        _value = new Date(Latest_ActivityDate);
                 //       // console.log(-Latest_ActivityDate)
                 //        console.log(_value)
                 //        return _value;
                 //    }
                 //},
                 {
                     name: 'ModifiedMembershipApprovalStatus',
                     convert: function (value, record) {
                         // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                         // 0111 3218 9269
                         var _value;
                         var MembershipApprovalStatus = record.get('MembershipApprovalStatus');
                      //   var MembrshipApprovalDate = record.get('MembrshipApprovalDate');
                         var CardCount = record.get('CardCount');
                         //console.log(MembershipApprovalStatus);
                         if (MembershipApprovalStatus == "REQUEST") {
                             _value = '<div style="margin:-7px -20px 0px 0px"><font size=1 color=orange>Pending Approval</font></div>';

                             //_value = '<div style="margin:-7px -20px 0px 0px"><font size=1 color=orange>Pending Approval (' + CardCount + ')</font></div>';
                             return _value;
                         }
                         if (MembershipApprovalStatus == "REJECTED") {
                            
                             _value = '<div style="margin:-7px -10px 0px 0px"><font size=1 color=red>Rejected</font></div>';
                             //_value = '<div style="margin:-7px -10px 0px 0px"><font size=1 color=red>Rejected (' + CardCount + ')</font></div>';
                             return _value;
                         }
                         if (MembershipApprovalStatus == "APPROVED") {
                             
                             _value = '<div style="margin:-7px -10px 0px 0px"><font size=1 color=white>Subscribed Membership Card <font size=2><b>(' + CardCount + ')</b></font></font></div>';
                             return _value;
                         }
                         if (MembershipApprovalStatus == "EXPIRED") {
                             _value = '<div style="margin:-7px -20px 0px 0px"><font size=1 color=red>Expired</font></div>';
                           //  _value = '<div style="margin:-7px -20px 0px 0px"><font size=1 color=red>Expired (' + CardCount + ')</font></div>';
                             return _value;
                         }
                        

                     }
                 },
                 {
                     name: 'ModifiedMembershipApprovalStatusRound',
                     convert: function (value, record) {
                         // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                         // 0111 3218 9269
                         var _value;
                         var MembershipApprovalStatus = record.get('MembershipApprovalStatus');
                         //var MembrshipApprovalDate = record.get('MembrshipApprovalDate');
                         //console.log(MembershipApprovalStatus);
                         if (MembershipApprovalStatus == "REQUEST") {
                             //_value = '<div class="blink_me" style="width:102%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 10px" src="resources/icons/requestApproval01.png" height="20px" width="100px"></div>';
                          //   _value = '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:0px 0px 0px 5px"></div>';
                             _value = '<div class="blink_me"><img style="width: 42px; height: 32px;" src="resources/icons/PendingApproval.png" alt="" />"</div>';
                             return _value;
                         }
                         if (MembershipApprovalStatus == "APPROVED") {
                             //_value = '<div class="blink_me" style="width:102%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 10px" src="resources/icons/requestApproval01.png" height="20px" width="100px"></div>';
                             //   _value = '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:0px 0px 0px 5px"></div>';
                             _value = '<div><img style="width: 42px; height: 32px;" src="resources/icons/backgroundTransparent.png" alt="" />"</div>';
                             return _value;
                         }
                         if (MembershipApprovalStatus == "EXPIRED") {
                             //_value = '<div class="blink_me" style="width:102%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 10px" src="resources/icons/requestApproval01.png" height="20px" width="100px"></div>';
                             //   _value = '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:0px 0px 0px 5px"></div>';
                             _value = '<div><img style="width: 42px; height: 32px;" src="resources/icons/ExpiredCard01.png" alt="" />"</div>';
                             return _value;
                         }
                         if (MembershipApprovalStatus == "REJECTED") {
                             //_value = '<div class="blink_me" style="width:102%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 10px" src="resources/icons/requestApproval01.png" height="20px" width="100px"></div>';
                             //   _value = '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:0px 0px 0px 5px"></div>';
                             _value = '<div><img style="width: 42px; height: 32px;" src="resources/icons/RejectedCard01.png" alt="" />"</div>';

                             return _value;
                         }
                       

                     }
                 }
                 , {
                     name: 'MembershipNo',
                     convert: function (value, record) {
                         // Mizi-01113218926-9309422
                         // 0111 3218 9269
                         var _value;
                         var SubscriberAccNo = record.get('SubscriberAccNo');
                         var MembershipNo = SubscriberAccNo.split('-');
                         _value=MembershipNo[1] +'-'+ MembershipNo[2];
                         
                         return _value;
                     }
                 } , {
                    name: 'ModifiedMembershipCardBg',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipCardBg=[];
                        var _value;
                        var MembershipCardBg = record.get('MembershipCardBg');
                        if(MembershipCardBg){
                            
                       
                        arrMembershipCardBg= MembershipCardBg.split(',');
                        if(arrMembershipCardBg.length>1){
                            for (var i = 0; i < arrMembershipCardBg.length; i++) {
                                _value += '<div style="font-size:12px;margin:5px 0px 0px -10px">'+i+').</div><img src="'+arrMembershipCardBg[i]+'" alt="Image" style="width: 85px; height: 50px; margin:-20px 0px 0px 10px;border-radius:5px;"/><br>';
                               // return _value;
                            }
                        }else{
                            _value = '<div style="font-size:12px;margin:5px 0px 0px -8px">1).</div><img src="'+MembershipCardBg+'" alt="Image" style="width: 85px; height: 50px; margin:-20px 0px 0px 12px;border-radius:5px;"/>'
                           // return _value;
                        }
                  
                    
                      // '<img src="{ModifiedMembershipCardBg}" alt="Image" style="width: 45px; height: 30px; margin:0px 0px 0px 0px;border-radius:5px;"/>'
                       // _value=MembershipNo[1] +'-'+ MembershipNo[2];
                        
                        return _value.replace('undefined','');
                    }

                    }
                }  , {
                    name: 'ModifiedMembershipCardName',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipCardName=[];
                        var _value;
                        var MembershipCardName = record.get('MembershipCardName');
                        if(MembershipCardName){
                            arrMembershipCardName= MembershipCardName.split(',');
                            if(arrMembershipCardName.length>1){
                                for (var i = 0; i < arrMembershipCardName.length; i++) {
                                    _value += '<div  style="width: 200px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold">'+arrMembershipCardName[i]+'</div><br>';
                                   // return _value;
                                }
                            }else{
                                _value = '<div style="width: 200px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>'+MembershipCardName+'</div>'
                               // return _value;
                            }
    
                            return _value.replace('undefined','');
                        }
                       
                    }
                }   
                
                , {
                    name: 'ModifiedMembershipApprovalDate',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipApprovalDate=[];
                        var _value;
                        var MembershipApprovalDate = record.get('MembershipApprovalDate');
                        console.log("MembershipApprovalDate:"+MembershipApprovalDate)
                        var MembershipsApprovalStatus = record.get('MembershipsApprovalStatus');
                        if( MembershipsApprovalStatus !="REQUEST")
                        {
                            if(MembershipApprovalDate){
                                arrMembershipApprovalDate= MembershipApprovalDate.split(',');
                       
                                if(arrMembershipApprovalDate.length>1){
                                    for (var i = 0; i < arrMembershipApprovalDate.length; i++) {
                                      _value += '<div  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold">'+arrMembershipApprovalDate[i]+'</div><br>';
                                       // return _value;
                                    }
                                }else{
                                    _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>'+MembershipApprovalDate+'</div>'
                                   // return _value;
                                }
                         
                                return _value.replace('undefined','');
                            }else{
                                _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>Not Yet Approved</div>'
                                return _value
                            }
                        }else{

                            if(MembershipApprovalDate){
                                arrMembershipApprovalDate= MembershipApprovalDate.split(',');
                       
                                if(arrMembershipApprovalDate.length>1){
                                    for (var i = 0; i < arrMembershipApprovalDate.length; i++) {
                                      _value += '<div  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold">Not Yet Approved</div><br>';
                                       // return _value;
                                    }
                                }else{
                                    _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>Not Yet Approved</div>'
                                   // return _value;
                                }
                         
                                return _value.replace('undefined','');
                            }else{
                                _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>Not Yet Approved</div>'
                                return _value
                            }
                        }
                    
                       
                    }
                } 

                , {
                    name: 'ModifiedMembershipEndDate',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipEndDate=[];
                        var _value;
                        var MembershipEndDate = record.get('MembershipEndDate');
                      //  console.log("MembershipEndDate:"+MembershipEndDate)
                        if(MembershipEndDate){
                        arrMembershipEndDate= MembershipEndDate.split(',');
                       // console.log("MembershipEndDate length:"+arrMembershipEndDate.length)
                        if(arrMembershipEndDate.length>1){
                            for (var i = 0; i < arrMembershipEndDate.length; i++) {

                                _value += '<div  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold">'+arrMembershipEndDate[i]+'</div><br>';
                              //  console.log("_value:"+_value)
                                //  return _value;
                            }
                        }else{
                           _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>'+MembershipEndDate+'</div>'
                          // console.log("else _value:"+_value)
                           // _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>N/A</div>'
                         //  return _value;
                        }

                    
                      // '<img src="{ModifiedMembershipCardBg}" alt="Image" style="width: 45px; height: 30px; margin:0px 0px 0px 0px;border-radius:5px;"/>'
                       // _value=MembershipNo[1] +'-'+ MembershipNo[2];
                        
                        return _value.replace('undefined','');
                    }else{
                        return "N/A";
                    }
                    }
                } 

                , {
                    name: 'ModifiedMembershipLatestActivity',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipLatestActivity=[];
                        var _value;
                        var MembershipLatestActivity = record.get('MembershipLatestActivity');
                        if(MembershipLatestActivity){
                            arrMembershipLatestActivity= MembershipLatestActivity.split(',');
                            if(arrMembershipLatestActivity.length>1){
                                for (var i = 0; i < arrMembershipLatestActivity.length; i++) {
                                    _value = arrMembershipLatestActivity[0];
                                   // return _value;
                                }
                            }else{
                                _value = MembershipLatestActivity;
                               // return _value;
                            }
    if(_value){
    
    }else{
        _value="-"; 
    }
                        
                            
                            return _value.replace('undefined','');
                        }
                     
                    }
                }

                , {
                    name: 'ModifiedMembershipsRenewalInfo',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipsRenewalInfo=[];
                        var _value;
                        var MembershipsRenewalInfo = record.get('MembershipsRenewalInfo');
                        if(MembershipsRenewalInfo){
                            arrMembershipsRenewalInfo= MembershipsRenewalInfo.split(',');
                            if(arrMembershipsRenewalInfo.length>1){
                                for (var i = 0; i < arrMembershipsRenewalInfo.length; i++) {
                                    _value += '<div  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold">'+arrMembershipsRenewalInfo[i]+'</div><br>';
                                   // return _value;
                                }
                            }else{
                                _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>'+MembershipsRenewalInfo+'</div>'
                               // return _value;
                            }
    
                            return _value.replace('undefined','');
                        }
                       
                    }
                },  
                {
                    name: 'ModifiedMembershipFeePaymentMethod',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipFeePaymentMethod=[];
                        var _value;
                        var MembershipFeePaymentMethod = record.get('MembershipFeePaymentMethod');
                        if(MembershipFeePaymentMethod){
                            arrMembershipFeePaymentMethod= MembershipFeePaymentMethod.split(',');
                            if(arrMembershipFeePaymentMethod.length>1){
                                for (var i = 0; i < arrMembershipFeePaymentMethod.length; i++) {
                                    _value += '<div  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold">'+arrMembershipFeePaymentMethod[i]+'</div><br>';
                                   // return _value;
                                }
                            }else{
                                _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>'+MembershipFeePaymentMethod+'</div>'
                               // return _value;
                            }
    
                            return _value.replace('undefined','');
                        }
                       
                    }
                    
                }
                , {
                    name: 'ModifiedMembershipsApprovalStatus',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                        var arrMembershipsApprovalStatus=[];
                        var arrMembershipsCardCodes=[];
                        var arrMembershipsRowStatus=[];
                        var arrModifiedDate=[];
                        var arrMembershipRejectedDate=[];
                        var _value;
                        var _style;
                        var MembershipsApprovalStatus = record.get('MembershipsApprovalStatus');
                        var MembershipsCardCodes = record.get('MembershipsCardCodes');
                        var SubscriberAccNo = record.get('SubscriberAccNo');
                        var MembershipCardCode=record.get('MembershipCardCode');
                        var MembershipRejectedDate=record.get('MembershipRejectedDate');
                       // var MembershipsRowStatus=record.get('MembershipsRowStatus');
                        var ModifiedDate=record.get('ModifiedDate');                     
                        if(MembershipsApprovalStatus){
                            arrMembershipsApprovalStatus= MembershipsApprovalStatus.split(',');
                            arrMembershipsCardCodes= MembershipsCardCodes.split(',');
                           // arrMembershipsRowStatus= MembershipsRowStatus.split(',');
                           // arrModifiedDate= ModifiedDate.split(',');
                     
                            if(arrMembershipsApprovalStatus.length>1){
                                for (var i = 0; i < arrMembershipsApprovalStatus.length; i++) {
                                   
    if(arrMembershipsApprovalStatus[i]=="APPROVED"){
        _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:green;cursor: pointer"><u>'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</u></div><br>';
        // if(arrMembershipsRowStatus[i]=="Active")
        // {
        //     _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:green;cursor: pointer">'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</div><br>';
           
        // }
        // if(arrMembershipsRowStatus[i]=="InActive")
        // {
        //     _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer">UnSubscribe<br>'+arrModifiedDate[i]+'</div><br>';
           
        // }
                                
      
    }
    if(arrMembershipsApprovalStatus[i]=="REJECTED"){
        arrMembershipRejectedDate= MembershipRejectedDate.split(',');
      _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)"  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:red;cursor: pointer"><u>'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'<br>('+arrMembershipRejectedDate[i]+')</u></div><br>';
    //   if(arrMembershipsRowStatus[i]=="Active")
    //   {
    //            _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)"  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:red;cursor: pointer">'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</div><br>';
    //   }
    //   if(arrMembershipsRowStatus[i]=="InActive")
    //   {
    //       _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer">UnSubscribe<br>'+arrModifiedDate[i]+'</div><br>';
         
    //   }                        
    
    }if(arrMembershipsApprovalStatus[i]=="EXPIRED"){
       
       _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer"><u>'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</u></div><br>';
    //    if(arrMembershipsRowStatus[i]=="Active")
    //    {
    //     _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer">'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</div><br>';
          
    //    }
    //    if(arrMembershipsRowStatus[i]=="InActive")
    //    {
    //        _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer">UnSubscribe<br>'+arrModifiedDate[i]+'</div><br>';
          
    //    }                          
      
    }
    if(arrMembershipsApprovalStatus[i]=="REQUEST"){
       
      _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" class="blink_me_sendNow" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:blue;cursor: pointer"><u>'+arrMembershipsApprovalStatus[i].replace('REQUEST','REQUEST APPROVAL')+'</u></div><br>';
                    
   
    }                            
    if(arrMembershipsApprovalStatus[i]=="UNSUBSCRIBE"){
       
        _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)"  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:orange;cursor: pointer"><u>'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</u></div><br>';
                      
     
      }     
    
      if(arrMembershipsApprovalStatus[i]=="BANNED"){
       
        _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)"  style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:brown;cursor: pointer"><u>'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</u></div><br>';
                      
     
      }     

    
                                   
                                    // return _value;
                                }
                            }
                            
                            
                            
                            
                            else{
                              
                             // alert(arrMembershipsApprovalStatus.length)
                              //  _value = '<div style="width: 130px; height:70px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;font-weight:bold"/>'+MembershipsApprovalStatus+'</div>'
                              
                             // for (var i = 0; i < arrMembershipsApprovalStatus.length; i++) {
                              
                              if(MembershipsApprovalStatus=="APPROVED"){
       
                             //  alert(arrMembershipsRowStatus[1])
                                  _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:green;cursor: pointer"><u>'+capitalizeAllLetter(MembershipsApprovalStatus)+'</u></div><br>';
                                    // if(arrMembershipsRowStatus[i]=="Active")
                                    // {
                                    //     _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:green;cursor: pointer">'+capitalizeAllLetter(arrMembershipsApprovalStatus[i])+'</div><br>';
                                       
                                    // }
                                    // if(arrMembershipsRowStatus[i]=="InActive")
                                    // {
                                    //     _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+arrMembershipsCardCodes[i]+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer">UnSubscribe<br>'+arrModifiedDate[i]+'</div><br>';
                                       
                                    // }                        
                                
                                }
                                if(MembershipsApprovalStatus=="REJECTED"){
                                   
                                    _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:red;cursor: pointer"><u>'+capitalizeAllLetter(MembershipsApprovalStatus)+'</u></div><br>';
                                                               
                                
                                }if(MembershipsApprovalStatus=="EXPIRED"){
                                   
                                    _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:grey;cursor: pointer"><u>'+capitalizeAllLetter(MembershipsApprovalStatus)+'</u></div><br>';
                                                               
                                
                                }
                                if(MembershipsApprovalStatus=="REQUEST"){
                                   
                                    _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`)" class="blink_me_sendNow" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:blue;cursor: pointer"><u>'+MembershipsApprovalStatus.replace('REQUEST','REQUEST APPROVAL')+'</u></div><br>';
                                                               
                                
                                }
                                if(MembershipsApprovalStatus=="UNSUBSCRIBE"){
                                   
                                    _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:orange;cursor: pointer"><u>'+capitalizeAllLetter(MembershipsApprovalStatus)+'</u></div><br>';
                                                               
                                
                                }
                                if(MembershipsApprovalStatus=="BANNED"){
                                   
                                    _value += '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`)" style="width: 130px; height: 70px; margin:0px 0px -10px 0px;font-size:12px;text-align:left;font-weight:bold;color:brown;cursor: pointer"><u>'+capitalizeAllLetter(MembershipsApprovalStatus)+'</u></div><br>';
                                                               
                                
                                }   
                           // }
                            }
    
                            return _value.replace('undefined','');
                        }
                    
                    }
                }  
                 , {
                     name: 'ModifiedAccountName',
                     convert: function (value, record) {
                         // Mizi-01113218926-9309422
                         // 0111 3218 9269
                         var _value;
                         var AccountName = record.get('AccountName');
                         var AccountNames = AccountName.toLowerCase();
                         _value =capitalize_Words(AccountNames);

                         return _value;
                     }
                 }
                 , {
                     name: 'ModifiedLatestDateActivity',
                     convert: function (value, record) {
                         // Mizi-01113218926-9309422
                         // 0111 3218 9269
                         var _value;
                         var CreatedDate = record.get('CreatedDate');
                         var MembrshipApprovalDate = record.get('MembrshipApprovalDate');
                         var LastPointed_ActivityDate = record.get('LastPointed_ActivityDate');
                         var LastStamped_ActivityDate = record.get('LastStamped_ActivityDate');
                         _value = 'NA';

                         return _value;
                     }
                 } , {
                    name: 'ModifiedRowNumber',
                    convert: function (value, record) {
                        // Mizi-01113218926-9309422
                        // 0111 3218 9269
                       
                        rn = rn+1;
                       
                        
                        return rn;
                    }
                }
        ]
    }
});


function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}



var dates = [];


function GFG_Fun(dt,dt1,dt2,dt3) {
   // console.log(dt);
   // console.log(dt1);
   // console.log(dt2);
   // console.log(dt3);

  //  var dttt;
  //  var dttt1;
  //  var dttt2;
  //  var dttt3;
    
  //  //var d = new Date("2015-03-25T12:00:00Z");
    var dtt = new Date(dt);
    var dtt1 = new Date(dt1);
    var dtt2 = new Date(dt2);
    var dtt3 = new Date(dt3);

  //  //var date, res;
  //  //date = new Date();
  //  //res = date.toISOString();
  //  //console.log(dt);
  //  //console.log(dtt1);
  ////  console.log(dtt1.toISOString());

  //  if (dtt.length>1) {
  //      dttt = dtt.toISOString();
  //  } if (dtt1.length > 1) {
  //      dttt1 = dtt1.toISOString();
  //  }
  //  if (dtt2.length > 1) {
  //      dttt2 = dtt2.toISOString();
  //  } if (dtt3.length > 1) {
  //      dttt3 = dtt3.toISOString();
  //  }
  //  //dttt1 = dtt1.toISOString();
  //  //dttt2 = dtt2.toISOString();
  //  //dttt4 = dtt2.toISOString();
  //  console.log(dttt);
  //  console.log(dttt1);
  //  console.log(dttt2);
  //  console.log(dttt3);

    dates.push(new Date(dtt));
    dates.push(new Date(dtt1));
    dates.push(new Date(dtt2));
    dates.push(new Date(dtt3));

    //dates.push(new Date("2021-02-28 05:04:38.700"));
    //dates.push(new Date("2021-02-28 05:04:38.700"));
    //dates.push(new Date("2021-02-28 05:04:38.700"));
    //dates.push(new Date("2021-02-28 05:04:38.700"));

    //var Currentdate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    //console.log("Currentdate");  //2020-05-07 22:58:11

    var maximumDate = new Date(Math.max.apply(null, dates)).toLocaleDateString();
    var minimumDate = new Date(Math.min.apply(null, dates)).toLocaleDateString();

    //console.log(maximumDate);
    return maximumDate;
    //el_down.innerHTML = "Max date is - " + maximumDate
    //        + "<br>Min date is - " + minimumDate;
}