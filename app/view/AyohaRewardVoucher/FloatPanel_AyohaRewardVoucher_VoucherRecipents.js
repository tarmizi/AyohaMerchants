Ext.define('ianMizi.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_VoucherRecipents', {

});


var _FloatPanel_AyohaRewardVoucher_VoucherRecipents;


var isFloatPanel_AyohaRewardVoucher_VoucherRecipentsOpen = 'N';



var _FloatPanel_AyohaRewardVoucher_VoucherRecipents_isFirstLoad = "N";







function FloatPanel_AyohaRewardVoucher_VoucherRecipents() {

    _FloatPanel_AyohaRewardVoucher_VoucherRecipents =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaRewardVoucher_VoucherRecipentsID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 100,

         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: "background-color: transparent;",
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'fit',

                 },
                 items: [
                       {
                           xtype: 'container',
                           width: '100%',

                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'

                           },
                           items: [

                               /////

                               {

                                   xtype: 'container',
                                   width: '100%',
                                   height: 60,
                                   // width: 40,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaRewardVoucher_VoucherRecipentsHeader',
                                   style:GetHeaderStyle(),
                                   //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'spacer',
                                                  //height: 30,
                                                  width: 20,

                                              },

                                              {
                                                margin: '0 0 0 0',
                                                id: 'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipentsTitleTxt',
                                                html: '<font size=4 color=black><b>Voucher Recipients List</b></font>'
                                            },

                                            {
                                                xtype: 'spacer',
                                                width:20
                                            },
                                            {
                                                xtype: 'container',
                                                width: 1,
                                                height: '60%',
                                                style: ' background-color: #ccc;',
                                            },
                                            {
                                                xtype: 'spacer',
                                                width:10
                                            },
                                            
                                          {
                                            xtype: 'button',
                                            margin: '1 0 0 0',
                                            id:'btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_searchBox',  
                                            height: 40,
                                            width: 40,
                                            html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {
                                            }
                                        },
                                            {
                                                id:'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_searchBox',                                              
                    html:'<div class="search-container">'+
                        '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxt"  placeHolder="Search (Name/Mobile Phone No)" class="search-input" >'+
                    '</div>'
                                            },
                                                          {
                                                              xtype: 'spacer',
                    
                                                          },
                    
                                                           
                    
                       
                                                          {
                                                            xtype: 'container',
                                                            width: 1,
                                                            height: '60%',
                                                            style: ' background-color: #ccc;',
                                                        },
                    
                                                        {
                                                            xtype: 'spacer',
                                                            width:10
                                                        }, 
                    
                                                         
                                                          {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaRewardVoucher_VoucherRecipentsBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaRewardVoucher_VoucherRecipents.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaRewardVoucher_VoucherRecipentsOpen = 'N';
                                                                _FloatPanel_AyohaRewardVoucher_VoucherRecipents_isFirstLoad = "N";
                                                               
                                                            }
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             hidden:true,
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaRewardVoucher_VoucherRecipents.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaRewardVoucher_VoucherRecipentsOpen = 'N';
                                                                 _FloatPanel_AyohaRewardVoucher_VoucherRecipents_isFirstLoad = "N";

                                                             }
                                                         },




                                                         {
                                                             xtype: 'spacer',
                                                             height: 30,
                                                             width: 7,

                                                         },





                                          ]

                               },



                               ///////////







                               {
                                   xtype: 'container',
                                   // docked: 'top',
                                   // hidden:true,
                                   //  margin: '0 0 0 0',
                                   //  docked: 'bottom',
                                   margin: '0 0 0 0',
                                   style: 'background-color: transparent;',
                                   id: 'containerFloatPanel_AyohaRewardVoucher_VoucherRecipents',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                   // margin: '70 0 0 0',

                                   layout: {

                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },


                                   items: [




                                     






                                           

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: 40,
                                                style: 'background-color: #E5E4E2;border:1px solid grey',
                                               //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //height: 50,
                                                  margin:'0 0 0 0',
                                                  items: [

                                                          //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                          //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                          //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                          //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                          //    '</div></div></div>'

                                                          {

                                                           margin:'0 0 0 18',
                                                              id: 'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_Receipients',
                                                              html: '<font size="3" color="black"><b>Recipients</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                              xtype:'spacer'
                                                          },
                                                          {

                                                              margin: '0 100 0 0',
                                                              id: 'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_IsRead',
                                                              html: '<font size="3" color="black"><b>Is Voucher Used?</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                            id:'checkBoxFloatPanel_AyohaRewardVoucher_VoucherRecipents_IsRead',
                                                            margin: '7 0 0 0',
html:'<input type="checkbox" class="largerCheckbox1" onclick="OnChangeCheckbox_CheckAll (this,0)" name="checkbox" id="CheckBox_SetVoucherAll"/>'
                                                          },
                                                          {
                                                            xtype:'spacer',
                                                            width:'28px'
                                                        },
                                                          //{

                                                          //    width: '50%',
                                                          //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                          //},
                                                          //     //{
                                                               //    margin: '-8 0 0 0',

                                                               //    html: '<font size=2 color=black>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                               //},
                                                               // {
                                                               //     margin: '-7 0 0 0',

                                                               //     html: '<font size=2 color=black>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                               // },


                                                  ]
                                              },




                                        {
                                            xtype: 'list',
                                           // flex: 1,
                                          hidden:true,
                                          margin: '0 0 0 0',
                                         height: '90%',
                                            store:_DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore,
                                            id: 'FloatPanel_AyohaRewardVoucher_VoucherRecipents_List',
                                            mode: 'SINGLE',
                                           // grouped: true,
                                            disableSelection: true,
                                            scrollable: {
                                                direction: 'vertical',
                                                indicators: {
                                                    y: {
                                                        autoHide: true
                                                    },
                                                    x: {
                                                        autoHide: true
                                                    }
                                                }
                                            },
                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;">{RowNumber}).<b>{AccountName}</b><br><b>{PhoneNo}</b></div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-45px 0px 0px -160px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifiedEntitledVoucherStatus}</div>'
                                                    //    + '<br>'
                                                    //   + '<div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifedDate}</div>'
                                                      + '<br>'
                                                     // + '<div style="width:100%;text-align:right;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaRewardVoucher_VoucherRecipents__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div>'
                                                     + '<div style="width:100%;text-align:right;margin: -35px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="MediumCheckbox" onclick="OnChangeCheckbox_DeleteVoucherReceipients (this,{ID})" name="checkbox" id="checkbox_setVoucherRecipents_{RowNumber}"/></div>'
                                                        
                                                      + '</div>' +

                                              '</div>',
                                              emptyText: '<div class="myContent">No Voucher Created</div>',
                                            width: '100%',
                                            //listeners: {
                                            //    itemsingletap: function (list, idx, target, records, evt) {

                                            //        var StampCampaignCode = records.get('StampCampaignCode');
                                            //        var StampCampaignName = records.get('StampCampaignName');
                                            //        var StampCardType = records.get('StampCardType');
                                            //        var StartDate = records.get('StartDate');
                                            //        var EndDate = records.get('EndDate');
                                            //        var RowStatus = records.get('RowStatus');
                                            //        var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                            //        var CreatedByAccNo = records.get('CreatedByAccNo');
                                            //        var CreatedBy = records.get('CreatedBy');
                                            //        var CreatedDate = records.get('CreatedDate');
                                            //        var ModifiedBy = records.get('ModifiedBy');
                                            //        var ModifiedDate = records.get('ModifiedDate');
                                            //        var StartDateOnly = records.get('StartDateOnly');
                                            //        var EndDateOnly = records.get('EndDateOnly');
                                            //        var BackgroundImage = records.get('StampCardBackground');
                                            //        var isAnimated = records.get('isAnimated');
                                            //        var AnimatedInterval = records.get('AnimatedInterval');

                                            //        var StampRuleRemarks = records.get('StampRuleRemarks');
                                            //        var isStampRulePopUp = records.get('isStampRulePopUp');
                                            //        var LoyaltyCustomerType = records.get('LoyaltyCustomerType');

                                            //        var StampCampaignPremiumQRCode = records.get('StampCampaignPremiumQRCode');

                                            //        if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                            //            MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card");
                                            //            return;
                                            //        }





                                            //        FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                                            //            , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);
                                            //        Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                                            //        //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                            //    },
                                            //    deselect: function (list, records) {

                                            //    }
                                            //},

                                        },


                                        {
                                            xtype: 'list',
                                           // flex: 1,
                                          hidden:true,
                                          margin: '0 0 0 0',
                                         height: '90%',
                                          store:_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage,
                                            id: 'FloatPanel_AyohaRewardVoucher_VoucherRecipents_List_FromMemberDetailsPage',
                                            mode: 'SINGLE',
                                           grouped: true,
                                            disableSelection: true,
                                            scrollable: {
                                                direction: 'vertical',
                                                indicators: {
                                                    y: {
                                                        autoHide: true
                                                    },
                                                    x: {
                                                        autoHide: true
                                                    }
                                                }
                                            },
                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;">{RowNumber}).<b>{AccountName}</b><br><b>{PhoneNo}</b></div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-45px 0px 0px -160px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifiedEntitledVoucherStatus}</div>'
                                                    //    + '<br>'
                                                    //   + '<div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifedDate}</div>'
                                                      + '<br>'
                                                     // + '<div style="width:100%;text-align:right;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaRewardVoucher_VoucherRecipents__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div>'
                                                   
                                                   //  + '<div style="width:100%;text-align:right;margin: -35px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="MediumCheckbox" onclick="OnChangeCheckbox_DeleteVoucherReceipients (this,{ID})" name="checkbox" id="checkbox_setVoucherRecipents_{RowNumber}"/></div>'
                                                        
                                                      + '</div>' +

                                              '</div>',
                                              emptyText: '<div class="myContent">No Voucher Entitled</div>',
                                            width: '100%',
                                            //listeners: {
                                            //    itemsingletap: function (list, idx, target, records, evt) {

                                            //        var StampCampaignCode = records.get('StampCampaignCode');
                                            //        var StampCampaignName = records.get('StampCampaignName');
                                            //        var StampCardType = records.get('StampCardType');
                                            //        var StartDate = records.get('StartDate');
                                            //        var EndDate = records.get('EndDate');
                                            //        var RowStatus = records.get('RowStatus');
                                            //        var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                            //        var CreatedByAccNo = records.get('CreatedByAccNo');
                                            //        var CreatedBy = records.get('CreatedBy');
                                            //        var CreatedDate = records.get('CreatedDate');
                                            //        var ModifiedBy = records.get('ModifiedBy');
                                            //        var ModifiedDate = records.get('ModifiedDate');
                                            //        var StartDateOnly = records.get('StartDateOnly');
                                            //        var EndDateOnly = records.get('EndDateOnly');
                                            //        var BackgroundImage = records.get('StampCardBackground');
                                            //        var isAnimated = records.get('isAnimated');
                                            //        var AnimatedInterval = records.get('AnimatedInterval');

                                            //        var StampRuleRemarks = records.get('StampRuleRemarks');
                                            //        var isStampRulePopUp = records.get('isStampRulePopUp');
                                            //        var LoyaltyCustomerType = records.get('LoyaltyCustomerType');

                                            //        var StampCampaignPremiumQRCode = records.get('StampCampaignPremiumQRCode');

                                            //        if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                            //            MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card");
                                            //            return;
                                            //        }





                                            //        FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                                            //            , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);
                                            //        Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                                            //        //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                            //    },
                                            //    deselect: function (list, records) {

                                            //    }
                                            //},

                                        },


                                        















                                        ///////////////////////


                                      
                                   ]
                               },




                               ////////////////////////////////////////////









                               //////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                  // hidden:true,
                                   // width: 40,
                                   docked: 'bottom',
                                   height: 50,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaRewardVoucher_VoucherRecipents_MenuBottom',
                                   style:GetFooterStyle(),
                                  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  style: "background-color: transparent",
                                                  height: 50,
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  //scrollable: {
                                                  //    direction: 'horizontal',
                                                  //    directionLock: false
                                                  //},
                                                  items: [


                                                    {
                                                        xtype:'spacer',
                                                        width: '2%',
                                                    },




                                                        // {
                                                        //     xtype: 'button',
                                                        //     id: 'btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_Search',
                                                        //     // hidden: true,
                                                        //     //  badgeText: '1',
                                                        //     margin: '0 0 0 -10',
                                                        //     height: 40,
                                                        //     width: 40,
                                                        //     html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',
                                                        //     ui: 'plain',
                                                        //     handler: function () {
                                                        //         // NotificationsPanelShow();

                                                        //         // LoyaltyCardRedeemListShow();


                                                        //         //  LoyaltyCardRedeemListShow();
                                                        //     }
                                                        // },





                            //  {
                            //      id: 'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxt',
                            //      margin: '0 0 0 0',
                            //      width: '40%',
                            //      height: 20,
                            //      html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                            //  },
                            {
                                margin: '0 0 0 0',
                               // id:'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count',
                                                           html: '<font size=3 color=black><b>Record Found:</b></font>'
                                                       },
                              {
                                  margin: '0 0 0 0',
                                  id:'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count',
                                                             html: '<font size=3 color=black><b>(0)</b></font>'
                                                         },
                                                         {
                                                            xtype:'spacer'
                                                        },

                                                         {


                                                            // xtype: 'button',
                                                            //  hidden: true,
                                                            id: 'btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_SetReceipient',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            height: 40,
                                                            width: 135,
                                                            //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                            html: '<button OnClick="FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsShow()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Set Receipient(s)</button>',
                                                            //ui: 'confirm',
                                                            //handler: function () {

                                                            //}

                                                        },
                                                        {
                                                            xtype:'spacer',
                                                            width: '3%',
                                                        },

                                                        
                                                        {


                                                            // xtype: 'button',
                                                            //  hidden: true,
                                                            id: 'btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_DeleteReceipient',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            height: 40,
                                                            width: 70,
                                                            //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                            html: '<button OnClick="FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Delete</button>',
                                                            //ui: 'confirm',
                                                            //handler: function () {

                                                            //}

                                                        },
                                                        {
                                                            xtype:'spacer',
                                                            width: '7%',
                                                        }
                                                        

                                                  ]
                                              },





                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
                                                         //},







                                                         


                                          ]

                               },










                           ]

                       },








                              /////





                              //////



                              ////////////////////////









                 ]

             },




         ]















     });
    return _FloatPanel_AyohaRewardVoucher_VoucherRecipents;



}



var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode;
var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_EntitledVoucherStartDate;
var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_EntitledVoucherEndDate;
var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_EntitledVoucherNote;
//var globalarrFloatPanel_AyohaRewardVoucher_VoucherRecipents_CheckingVal=[];
function FloatPanel_AyohaRewardVoucher_VoucherRecipentsShow(VoucherCode,StartDate,EndDate,VoucherNote) {
    globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode=VoucherCode;
    globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_StartDate=StartDate;
    globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_EndDate=EndDate;
    globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;
    // var NotificationCode = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    // var NotificationCodes = NotificationCode.get('NotificationCode');

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucher_VoucherRecipents);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucher_VoucherRecipents());
    this.overlay.show();
   
    isFloatPanel_AyohaRewardVoucher_VoucherRecipentsOpen = 'Y';
    _FloatPanel_AyohaRewardVoucher_VoucherRecipents_isFirstLoad = "Y";
    Ext.getCmp('FloatPanel_AyohaRewardVoucher_VoucherRecipents_List').setHidden(false);

    
    FloatPanel_AyohaRewardVoucher_VoucherRecipentsAdjustHeight();

    document.getElementById("input-FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxtOnKeyUp);
    FloatPanel_AyohaCardManagement_AddCardHide();
    FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
}





function FloatPanel_AyohaRewardVoucher_VoucherRecipentsShow_FromMemberDetailsPage() {
    // globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode=VoucherCode;
    // globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_StartDate=StartDate;
    // globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_EndDate=EndDate;
    // globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;
    // var NotificationCode = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    // var NotificationCodes = NotificationCode.get('NotificationCode');

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucher_VoucherRecipents);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucher_VoucherRecipents());
    this.overlay.show();
   
    isFloatPanel_AyohaRewardVoucher_VoucherRecipentsOpen = 'Y';
    _FloatPanel_AyohaRewardVoucher_VoucherRecipents_isFirstLoad = "Y";
    Ext.getCmp('FloatPanel_AyohaRewardVoucher_VoucherRecipents_List_FromMemberDetailsPage').setHidden(false);

    
    Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_DeleteReceipient').setHidden(true);
    Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_SetReceipient').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_searchBox').setHidden(true);
    Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_VoucherRecipents_searchBox').setHidden(true); 
    Ext.getCmp('checkBoxFloatPanel_AyohaRewardVoucher_VoucherRecipents_IsRead').setHidden(true); 
    
    FloatPanel_AyohaRewardVoucher_VoucherRecipentsAdjustHeight();
    FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage();
   // document.getElementById("input-FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxtOnKeyUp);
    //FloatPanel_AyohaCardManagement_AddCardHide();
   // FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
}



function FloatPanel_AyohaRewardVoucher_VoucherRecipentsHide() {
    _FloatPanel_AyohaRewardVoucher_VoucherRecipents.hide();

    isFloatPanel_AyohaRewardVoucher_VoucherRecipentsOpen = 'N';
    _FloatPanel_AyohaRewardVoucher_VoucherRecipents_isFirstLoad = "N";
  
    
}




function FloatPanel_AyohaRewardVoucher_VoucherRecipentsAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    //   var adjustedHeight = x - headerHeight;
    var newHeight = x - 90;
    //var bodyMsgHeight01 = x + 17;
    //var bodyMsgHeight02 = bodyMsgHeight01 - x;



    //  var newHeight = adjustedHeight - 80;
    //alert(x)
    // alert(bodyMsgHeight02)


    //900
    //450


    Ext.getCmp('containerFloatPanel_AyohaRewardVoucher_VoucherRecipents').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaRewardVoucher_VoucherRecipentsInner').setHeight(newHeight + 60);






}

var globalcountVoucherReceipientList;
function FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode) {

    globalcountVoucherReceipientList=0;
   

   // 


arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;
FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = "";
   _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getProxy().setExtraParam('VoucherCode', VoucherCode);
   _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
   _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNo');
   _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.load();


   var task = Ext.create('Ext.util.DelayedTask', function () {



       //_DataStore_EnterprisesLoadByMerchantCategory.load();
       var count = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getCount();

       for (i = 0; i < count; i++) {
        var Store = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getAt(i);

       
        
        arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.push(Store.get('SubscriberAccNo'));
        FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += Store.get('SubscriberAccNo') + ",";

    }
       

    var text = FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo.replace("undefined", "");
    globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = text.slice(0, -1) //'abcde'

//alert(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo);
globalcountVoucherReceipientList = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getCount();
Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count').setHtml('<font size="2" color="black"><b>(' + globalcountVoucherReceipientList + ')</b></font>')
      
       LoadingPanelHide();
       FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();



   });
   task.delay(500);

















   

}





function FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage() {

    globalcountVoucherReceipientList=0;
   

   // 


arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;
FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = "";


   _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_MembershipDetailsPage_SubscriberAccNo);
   _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
   _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage');
   _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.load();


   var task = Ext.create('Ext.util.DelayedTask', function () {



       //_DataStore_EnterprisesLoadByMerchantCategory.load();
       var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.getCount();

       for (i = 0; i < count; i++) {
        var Store = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.getAt(i);

       
        
        arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.push(Store.get('SubscriberAccNo'));
        FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += Store.get('SubscriberAccNo') + ",";

    }
       

    var text = FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo.replace("undefined", "");
    globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = text.slice(0, -1) //'abcde'

//alert(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo);
globalcountVoucherReceipientList = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage.getCount();
Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count').setHtml('<font size="2" color="black"><b>(' + globalcountVoucherReceipientList + ')</b></font>')
      
       LoadingPanelHide();
     //  FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();



   });
   task.delay(500);






   //onclick="FloatPanel_AyohaRewardVoucher_PreviewVoucherShow('Hari Malaysia 2023','https://setkita.com/AyohaImgCard/AyohaVoucher/72666-0134292934-NoEnterprise/VCM-8132121-72666-0134292934-NoEnterprise/prn-2023-tarikh-undi.jpg','1983-02-19','-15171','VCM-8132121-72666-0134292934-NoEnterprise','5.00','voucher sah dalam bulan september saja','No')"










   

}



function FloatPanel_AyohaRewardVoucher_VoucherRecipents_stagingOpenVoucher(){
    _result = new AyohaRewardVoucher_EntitledUserModel();
    _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
    _result.VoucherCode = _SQLDataReader["VoucherCode"].ToString();
    _result.SubscriberAccNo = _SQLDataReader["SubscriberAccNo"].ToString();
    _result.EnterpriseAccNo = _SQLDataReader["EnterpriseAccNo"].ToString();
    _result.EntitledVoucherStartDate = String.Format("{0:d/M/yyyy}", _SQLDataReader["EntitledVoucherStartDate"]) + " " + String.Format("{0:T}", _SQLDataReader["EntitledVoucherStartDate"]);
    _result.EntitledVoucherEndDate = String.Format("{0:d/M/yyyy}", _SQLDataReader["EntitledVoucherEndDate"]);

    _result.EntitledVoucherNote = _SQLDataReader["EntitledVoucherNote"].ToString();
    _result.EntitledVoucherStatus = _SQLDataReader["EntitledVoucherStatus"].ToString();
    _result.RowStatus = _SQLDataReader["RowStatus"].ToString();


    _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
    _result.CreatedBy = _SQLDataReader["CreatedBy"].ToString();
    _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();


    _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();
    _result.PaymentNo = _SQLDataReader["PaymentNo"].ToString();
    _result.PaymentAtEnterpriseAccNo = _SQLDataReader["PaymentAtEnterpriseAccNo"].ToString();

    _result.PaymentNoDisplay = _SQLDataReader["PaymentNoDisplay"].ToString();
    _result.MembershipCardCode = _SQLDataReader["MembershipCardCode"].ToString();
    _result.RowNumber = _SQLDataReader["RowNumber"].ToString();
    _result.AccountName = _SQLDataReader["AccountName"].ToString();
    _result.PhoneNo = _SQLDataReader["PhoneNo"].ToString();
    _result.Email = _SQLDataReader["Email"].ToString();
    _result.DayLeft = _SQLDataReader["DayLeft"].ToString();
    _result.VoucherName = _SQLDataReader["VoucherName"].ToString();
    _result.VoucherAmount = _SQLDataReader["VoucherAmount"].ToString();
}


function FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxtOnKeyUp() {

  
    var countRecipientList_List = 0;


    _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucher_VoucherRecipents_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count').setHtml('<font size="2" color="black"><b>(' + globalcountVoucherReceipientList + ')</b></font>');
        
        //  Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_VoucherRecipents_count').setHtml('<font size="2" color="black"><b>(' + globalcountAyohaNotificationLoadByNotification + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}




function FloatPanel_AyohaRewardVoucher_VoucherRecipents__DeleteSpecificMember(ID){
    Swal.fire({
        title: 'Are you sure want to delete?',
      //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "ID": ID,

            };
            console.log(objn);
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserDelete',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        swalFireSuccess("Delete Successfully!");
                        var VoucherCode=globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode;
                        FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
                    }
                    else {
                        swalFireFail("Delete Failed!" + result.responseText.trim());
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!" + result.responseText.trim());
                }

            });
        }
    });

   
   

   
   
}






var arrFloatPanel_AyohaRewardVoucher_VoucherRecipents=[];

function OnChangeCheckbox_DeleteVoucherReceipients(checkbox, ID) {


   


/// 11/9/2023 pending nak delete dari ayohareward_voucher

    var AccountNo = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PAccountNos = AccountNo.get('SubscriberAccNo');
//alert(arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length)

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        document.getElementById("CheckBox_SetVoucherAll").checked = false;
           arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.push(PAccountNos);
            
      
    
    }
    else {
      //  alert("The check box is not checked.");
      document.getElementById("CheckBox_SetVoucherAll").checked = false;
        var index = arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.indexOf(PAccountNos);
        if (index > -1) {
            arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.splice(index, 1);
        }
       
    }


   
}


function OnChangeCheckbox_CheckAll(checkbox, ID){
  
    if (checkbox.checked) {
        arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length=0;
       // alert(arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length);
        
       // checkbox_setVoucherRecipents_{ID}
            
       for (i = 1; i <= arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length; i++) {
       
        document.getElementById("checkbox_setVoucherRecipents_"+i).checked = true;
        
        arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.push(arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal[i-1]);
       
        // FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += arrFloatPanel_AyohaRewardVoucher_VoucherRecipents[i] + ",";
    }
   // alert(arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length);
    
    }
    else {
        for (i = 1; i <= arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length; i++) {
       
            document.getElementById("checkbox_setVoucherRecipents_"+i).checked = false;
            arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length=0;
           // FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += arrFloatPanel_AyohaRewardVoucher_VoucherRecipents[i] + ",";
        }
    
    }

}

var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo;
function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients() {


    if (arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length <= 0) {
        swalFireFail("No Recipient Selected!");
        // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
         return;
     }
    
     if (arrFloatPanel_AyohaRewardVoucher_VoucherRecipents) {
        
      }else{
         swalFireFail("No Recipient Selected!");
         // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
          return;
      }
 
 
 
     FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
     globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = "";
     if (arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length > 0) {
         for (i = 0; i < arrFloatPanel_AyohaRewardVoucher_VoucherRecipents.length; i++) {
             FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += arrFloatPanel_AyohaRewardVoucher_VoucherRecipents[i] + ",";
         }
 
 
         var text = FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo.replace("undefined", "");
         globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = text.slice(0, -1) //'abcde'
     } else {
        globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo = "";
     }




    Swal.fire({
        title: 'Are you sure want to delete?',
      //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "SubscriberAccNo": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo,
                "EnterpriseAccNo": GetEnterpriseAccNo(),
                "VoucherCode": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode,

            };
            console.log(objn);
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        swalFireSuccess("Delete Successfully!");
                        var VoucherCode=globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode;
                        FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
                    }
                    else {
                        swalFireFail("Delete Failed!" + result.responseText.trim());
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!" + result.responseText.trim());
                }

            });
        }
    });

   


 

}