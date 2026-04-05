Ext.define('ianMizi.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_SetVoucherRecipents', {

});


var _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents;


var isFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsOpen = 'N';



var _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_isFirstLoad = "N";







function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents() {

    _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 150,

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
                 //  style: "background-color: transparent;",
                 style: 'background-color:transparent;',
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
                                   style:GetHeaderStyle(),

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsHeader',
                                  // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                                width:20

                                            },

                                            {
                                                margin: '0 0 0 0',
                                                id: 'htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsTitleTxt',
                                                html: '<font size=4 color=black><b>Set Recipients</b></font>'
                                            },
                                                        

                                                         {
                                                             xtype: 'spacer',

                                                         },
                                                         {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                    //direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsOpen = 'N';
                                                                _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_isFirstLoad = "N";
                                                            }
                                                        },
                                                        {
                                                            xtype: 'spacer',
                                                            width:20
            
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             height: 30,
                                                             width: 35,
                                                             hidden:true,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsOpen = 'N';
                                                                 _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_isFirstLoad = "N";

                                                             }
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
                                   margin: '10 0 0 0',
                                   style: 'background-color: transparent;',
                                   id: 'containerFloatPanel_AyohaRewardVoucher_SetVoucherRecipents',
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
                                           //  style: "border-right:3px solid #EAEDED",
                                           layout: {
                                               type: 'vbox',
                                               //align: 'center',

                                           },
                                           items: [

                  {
                      xtype: 'label',
                      // label: 'Published On',
                      html: '<font size="2" color="black"><b><u>Audience</u></b></font>',

                  },


                   {
                       xtype: 'radiofield',
                       label: 'All Members',
                       labelWidth:'80%',
                       //labelWrap: true,
                       id: 'radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllSubscriber',
                       name: 'All',
                       checked: false,
                       listeners: {
                           check: function (radioFld, event, obj) {
                               console.log(radioFld.isChecked());
                               if (radioFld.isChecked()) {
                                   globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AudienceType = 'All_Members';
                                   Ext.getCmp('radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_segment').setChecked(false);
                                   Ext.getCmp('radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_specificsubscriber').setChecked(false);
                                  // FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaUserProfileLoadByEnterpriseAccNoStore();
                                  FloatPanel_AyohaRewardVoucher_AllMembersList_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNo();
                                   Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients').setHtml('<font size="2" color="black"><b><u>Recipients</u><br>(All Members)</b></font>');
                                   Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembers').setHidden(true);
                                   Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembersFake').setHidden(false);

                                   Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllMembersList').setHidden(false);
                                   Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SegmentList').setHidden(true);
                                   Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SpecificMemberList').setHidden(true);
                                   Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers').setHidden(false);
                                   Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment').setHidden(true);
                                   Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember').setHidden(true);
                                   Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count + '</div>');
                                   globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo_Literal = "Not Required";
                                   

                               }
                           }
                       }
                   },
       {
           xtype: 'radiofield',
           label: 'Segment',
           labelWidth: '80%',
           //labelWrap: true,
           id: 'radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_segment',
           name: 'seg',
           listeners: {
               check: function (radioFld, event, obj) {
                   console.log(radioFld.isChecked());
                   if (radioFld.isChecked()) {
                  //  _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.removeAll();
                       globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AudienceType = 'Segment';
                       globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo_Literal = "Not Required";
                       Ext.getCmp('radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllSubscriber').setChecked(false);
                       Ext.getCmp('radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_specificsubscriber').setChecked(false);
                       Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients').setHtml('<font size="2" color="black"><b><u>Recipients</u><br>(Segment-NA)</b></font>');
                       Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembers').setHidden(true);
                       Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembersFake').setHidden(false);
                       Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllMembersList').setHidden(true);
                       Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SegmentList').setHidden(false);
                       Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SpecificMemberList').setHidden(true);
                       Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers').setHidden(true);
                       Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment').setHidden(false);
                       Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember').setHidden(true);
                       Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</div>');
                   }
               }
           }
       },
        {
            xtype: 'radiofield',
            label: 'Specific Members',
            labelWidth: '80%',
          //  labelWrap: true,
            id: 'radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_specificsubscriber',
            name: 'spec',
            listeners: {
                check: function (radioFld, event, obj) {
                    if (radioFld.isChecked()) {
                        globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AudienceType = 'Specific_Members';
                        Ext.getCmp('radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_segment').setChecked(false);
                        Ext.getCmp('radioFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllSubscriber').setChecked(false);
                        Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembers').setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembersFake').setHidden(true);
                        
                      

                        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients').setHtml('<font size="2" color="black"><b><u>Recipients</u><br>(Specific Members)</b></font>');
                        Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllMembersList').setHidden(true);
                        Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SegmentList').setHidden(true);
                        Ext.getCmp('FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SpecificMemberList').setHidden(false);



                        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers').setHidden(true);
                        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment').setHidden(true);
                        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember').setHidden(false);
                        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</div>');
                        //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByNotificationCodeStore();
                        //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByVoucherCodeStore();
                       FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_DeleteCheck();

                    }
                }
            }
        }

                                           ]






                                       },



                                                           
                                       
                                       
                                            {
                                                xtype: 'panel',
                                                height: 10
                                            },

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height:40,
                                                   style: 'background-color:transparent',
                                                 // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //height: 50,
                                                  // margin:'10 0 0 0',
                                                  items: [

                                                          //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                          //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                          //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                          //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                          //    '</div></div></div>'

                                                          {

                                                            //  width: '100%',
                                                              id: 'htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients',
                                                              html: '<font size="2" color="black"><b><u>Recipients</u><br>(Not Selected)</b></font>',
                                                            //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                              xtype:'spacer',
                                                          },
                                                         
                                                         
                                                           {
                                                               id: 'htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers',
                                                               margin: '0 0 0 0',
                                                               width: '50%',
                                                               height: 20,
                                                               html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                                           },
                                                            {
                                                                id: 'htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment',
                                                                margin: '0 0 0 0',
                                                                width: '50%',
                                                                hidden:true,
                                                                height: 20,
                                                                html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                                            },
                                                             {
                                                                 id: 'htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember',
                                                                 margin: '0 0 0 0',
                                                                 width: '50%',
                                                                 hidden: true,
                                                                 height: 20,
                                                                 html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                                             },
                                                           {
                                                               xtype: 'button',
                                                               id: 'btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembersFake',
                                                              // hidden: true,
                                                               //  badgeText: '1',
                                                               margin: '0 0 0 0',
                                                               height: 40,
                                                               width: 40,
                                                               text:'',
                                                             //  html: '<img class="blink_me" src="resources/icons/userlistPurple.png" width="30" height="30" alt="Company Name">',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                FloatPanel_AyohaRewardVoucher_AllMembersListShow();
                                                               }
                                                           },


                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_ListOfMembers',
                                                                 hidden: true,
                                                                 //  badgeText: '1',
                                                                 margin: '0 0 0 0',
                                                                 height: 40,
                                                                 width: 40,
                                                                 html: '<img class="blink_me" src="resources/icons/userlistPurple.png" width="30" height="30" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                     //FloatPanel_AyohaNotificationManagement_MembersListShow();
                                                                     FloatPanel_AyohaRewardVoucher_AllMembersListShow();
                                                                     // NotificationsPanelShow();

                                                                     // LoyaltyCardRedeemListShow();


                                                                     //  LoyaltyCardRedeemListShow();
                                                                 }
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
                                            flex:1,
                                           // height: '81%',
                                           // store: 'AyohaUserProfileLoadByEnterpriseAccNoStore',
                                           store:_DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore,
                                            id: 'FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AllMembersList',
                                            mode: 'SINGLE',
                                            //grouped: true,
                                            disableSelection: true,
                                            itemTpl: '<div class="myContent">' +
                                              
                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo}</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{Email}</div>'
                                                     

                                                      + '</div>' +
                                            
                                              '</div>',
                                              emptyText: '<div class="myContent">No Members</div>',
                                            width: '100%',
                                         

                                        },

                                         {
                                             xtype: 'list',
                                             flex: 1,
                                             // height: '81%',
                                             store: '',
                                             id: 'FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SegmentList',
                                             mode: 'SINGLE',
                                             hidden:true,
                                             //grouped: true,
                                             disableSelection: true,
                                             itemTpl: '<div class="myContent">' +

                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                       + '<br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'
                                                       + '<br>'
                                                       + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo}</div>'
                                                        + '<br>'
                                                       + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{Email}</div>'


                                                       + '</div>' +

                                               '</div>',
                                               emptyText: 'Not Available',
                                             width: '100%',


                                         },
                                           {
                                               xtype: 'list',
                                               flex: 1,
                                               // height: '81%',
                                              // store: 'RecipientSpecificMemberLoadByNotificationCodeStore',
                                               store:_DataStore_RecipientSpecificMemberLoadByVoucherCodeStore,
                                               id: 'FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SpecificMemberList',
                                               mode: 'SINGLE',
                                               hidden: true,
                                               //grouped: true,
                                               disableSelection: true,
                                               itemTpl: '<div class="myContent">' +

                                                         '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                         + '<br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{RowNumber}).{AccountName}</div>'
                                                         + '<br>'
                                                         + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo}</div>'
                                                          + '<br>'
                                                         + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{Email}</div>'
                                                         + '<br>'
                                                        + '<div style="width:100%;text-align:right;margin:-50px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaRewardVoucher_SetVoucherRecipents__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div>'
                                                       
                                                        + '</div>' +

                                                 '</div>',
                                                 emptyText: 'No Members Selected',
                                               width: '100%',


                                           },

                                   ]
                               },




                               ////////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                   // width: 40,
                                   docked: 'bottom',
                                   height: 50,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,
                                   style:GetFooterStyle(),
                                   id: 'containerFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom',
                                 // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                 // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                                             

                                                 {
                                                     xtype: 'container',
                                                     //width: 600,
                                                     //  width: 400,
                                                     //width: '20%',
                                                     style: "background-color: transparent",
                                                     height: 50,
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'left',
                                                         align: 'left',
                                                     },
                                                     items: [





                                                          {
                                                              width: '100%',
                                                              margin: '5 0 0 10',
                                                              html: '<font size="2" color="black"><b><u>Record Found:</u></b></font>',
                                                              //    html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 14px;font-weight:normal;color:black;height:20px">Record Found:</b></div>',
                                                          },


                                                           {
                                                               width: '100%',
                                                               margin: '-5 0 0 0',
                                                               id: 'htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count',                                                              
                                                               html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</b></div>',
                                                           },



















                                                     ]

                                                 },

                                                 {
                                                     xtype: 'container',
                                                     //width: 600,
                                                     //  width: 400,
                                                     //width: '20%',
                                                     hidden:true,
                                                     style: "background-color: transparent",
                                                     height: 55,
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'left',
                                                         align: 'left',
                                                     },
                                                     items: [





                                                          {
                                                              width: '100%',
                                                              margin: '5 0 0 30',
                                                              html: '<font size="2" color="black"><b>Preview</b></font>',
                                                              //    html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 14px;font-weight:normal;color:black;height:20px">Record Found:</b></div>',
                                                          },


                                                           {
                                                               xtype: 'button',
                                                               id: 'btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Preview',
                                                               //  badgeText: '1',
                                                               // hidden:true,
                                                               margin: '-5 0 0 30',
                                                               height: 35,
                                                               width: 35,
                                                               html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                   //FloatPanel_AyohaNotificationManagement_PreviewMessageShow();
                                                                   FloatPanel_AyohaNotificationManagement_ViewMessage_Preview_Show();

                                                               }
                                                           },



















                                                     ]

                                                 },






                                                      {
                                                          xtype: 'spacer'
                                                      },

                                                        {


                                                            // xtype: 'button',
                                                            //  hidden: true,
                                                            id: 'btnFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SetReceipient',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            //height: 40,
                                                            //width: 135,
                                                            //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                            html: '<button OnClick="FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Confirm()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Save</button>',
                                                            //ui: 'confirm',
                                                            //handler: function () {

                                                            //}

                                                        },

                                                         {
                                                             xtype: 'spacer',
                                                             width:8
                                                         },







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
    return _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents;



}




function FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsShow() {


    

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucher_SetVoucherRecipents);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucher_SetVoucherRecipents());
    this.overlay.show();
    isFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsOpen = 'Y';
    _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_isFirstLoad = "Y";
    FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsAdjustHeight();
    globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AudienceType = "NA";
    globalSetVoucherReceipientsID = "";
    SetVoucherReceipientsID = "";
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";
    document.getElementById("input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers").addEventListener("keyup", FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxtOnKeyUp_AllMembers);
    document.getElementById("input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment").addEventListener("keyup", FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxtOnKeyUp_Segment);
    document.getElementById("input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember").addEventListener("keyup", FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxtOnKeyUp_SpecificMember);
    _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.removeAll();
    //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo();
    FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo_NoReload();


}





function FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsHide() {
    _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents.hide();

    isFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsOpen = 'N';
    _FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_isFirstLoad = "N";
}




function FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsAdjustHeight() {
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


    Ext.getCmp('containerFloatPanel_AyohaRewardVoucher_SetVoucherRecipents').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaRewardVoucher_SetVoucherRecipentsInner').setHeight(newHeight + 60);






}


//All Client load
var globalSetVoucherReceipientsID;
var SetVoucherReceipientsID;
var globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count;
var _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore;
function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaUserProfileLoadByEnterpriseAccNoStore() {
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";
    globalSetVoucherReceipientsID = "";
    SetVoucherReceipientsID = "";
    
    Ext.getStore('AyohaUserProfileLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('AyohaUserProfileLoadByEnterpriseAccNoStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });

        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore= Ext.StoreMgr.get('AyohaUserProfileLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoadByEnterpriseAccNoStore');
        var count = myStore.getCount();
        globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count = count;

        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + count + '</div>');


        if (arrFloatPanel_AyohaNotificationManagement_MembersList.length > 0) {
            Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count + ')</b></font>');

        }
      


           for (i = 0; i < count; i++) {
               var modelRecorded = myStore.getAt(i);
               var AccountNo = modelRecorded.get('AccountNo');
               var AccountName = modelRecorded.get('AccountName');
               var PhoneNo = modelRecorded.get('PhoneNo');
               var Email = modelRecorded.get('Email');
               var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
               SetVoucherReceipientsID += modelRecorded.get('AccountNo') + ",";
              
           
           }


           var text = SetVoucherReceipientsID.replace("undefined", "");
           globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = text.slice(0, -1) //'abcde'



           console.log(globalSetVoucherReceipientsID);
        Ext.Viewport.setMasked(false);

      


    });
    task.delay(800);

}



function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByVoucherCodeStore(){
  
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";
    globalSetVoucherReceipientsID = "";
    SetVoucherReceipientsID = "";
    arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;


  
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getProxy().setExtraParam('VoucherCode', globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode);
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getProxy().setUrl(GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberLoadByVoucherCode');
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        var globalFloatPanel_AyohaRewardVoucher_AllMembersList_count = _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getCount();  
      // alert(globalFloatPanel_AyohaRewardVoucher_AllMembersList_count)
      //  Ext.getCmp('htmlFloatPanel_AyohaCardManagementCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');
      var myStore = _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore;
      for (i = 0; i < globalFloatPanel_AyohaRewardVoucher_AllMembersList_count; i++) {
        var modelRecorded = myStore.getAt(i);
        // var AccountNo = modelRecorded.get('AccountNo');
        // var AccountName = modelRecorded.get('AccountName');
        // var PhoneNo = modelRecorded.get('PhoneNo');
        // var Email = modelRecorded.get('Email');
        // var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
        SetVoucherReceipientsID += modelRecorded.get('SubscriberAccNo') + ",";
//alert(modelRecorded.get('SubscriberAccNo'));
        arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.push(modelRecorded.get('SubscriberAccNo'));
       
    
    }


    var text = SetVoucherReceipientsID.replace("undefined", "");
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = text.slice(0, -1) //'abcde'
   // alert(SetVoucherReceipientsID)
      //alert(globalSetVoucherReceipientsID)
      Ext.Viewport.setMasked(false);
        LoadingPanelHide();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">'+globalFloatPanel_AyohaRewardVoucher_AllMembersList_count+'</div>');
    });
    task.delay(700);
}




// //Specific Client load
// var  globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo= "";
// var  globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo_Literal = "";
// var _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore;
// function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByNotificationCodeStore() {
//     globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo="";
//     globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo_Literal = "";
//     globalSetVoucherReceipientsID = "";
//     SetVoucherReceipientsID = "";

//     Ext.getStore('RecipientSpecificMemberLoadByNotificationCodeStore').getProxy().setExtraParams({
//         NotificationCode: GetNotificationCode(),
//         EnterpriseAccNo: GetEnterpriseAccNo()
//     });
//     Ext.StoreMgr.get('RecipientSpecificMemberLoadByNotificationCodeStore').load();


//     var task = Ext.create('Ext.util.DelayedTask', function () {
//         Ext.getStore('RecipientSpecificMemberLoadByNotificationCodeStore').getProxy().setExtraParams({
//             NotificationCode: GetNotificationCode(),
//             EnterpriseAccNo: GetEnterpriseAccNo()
//         });

//         _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore = Ext.StoreMgr.get('RecipientSpecificMemberLoadByNotificationCodeStore').load();
//         var myStore = Ext.getStore('RecipientSpecificMemberLoadByNotificationCodeStore');
//         var count = myStore.getCount();
//         globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count = count;

//         Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + count + '</div>');

        
//         //if (arrFloatPanel_AyohaNotificationManagement_MembersList.length > 0) {
//         //    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count + ')</b></font>');

//         //}



//         for (i = 0; i < count; i++) {
//             var modelRecorded = myStore.getAt(i);
//             globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo += modelRecorded.get('SubscriberAccNo') + ",";
//             //var AccountName = modelRecorded.get('AccountName');
//             //var PhoneNo = modelRecorded.get('PhoneNo');
//             //var Email = modelRecorded.get('Email');
//             //var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
//             SetVoucherReceipientsID += modelRecorded.get('PlayerID') + ",";


//         }


//         var text = SetVoucherReceipientsID.replace("undefined", "");
//         globalSetVoucherReceipientsID = text.slice(0, -1) //'abcde'



//         var texts = globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo.replace("undefined", "");
//         globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_SubscriberAccNo_Literal = texts.slice(0, -1) //'abcde'

//         console.log(globalSetVoucherReceipientsID);
//         Ext.Viewport.setMasked(false);




//     });
//     task.delay(800);

// }







































var globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AudienceType;


function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Confirm() {
    if (globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo) {
       
      
    }else
    {
        swalFireFail("No Recipient !");
        return;
    }
    if (globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo.length < 0) {
       
        swalFireFail("No Recipient !");
        return;
    }

    if (globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AudienceType =="NA") {
      
        swalFireFail("No Audience Type !");
        return;
    }
    // for (var i = 0; i < arrFloatPanel_AyohaRewardVoucher_AllMembersList.length; i++) {
    //     var text = arrFloatPanel_AyohaRewardVoucher_AllMembersList;
    //     var n = globalarrFloatPanel_AyohaRewardVoucher_VoucherRecipents_CheckingVal.includes(text);


    //     if (n) {
    //         // alert("already Exist!");
    //          swalFireWarning("Data already selected!");
    //          var index = arrFloatPanel_AyohaRewardVoucher_AllMembersList.indexOf(text);
    //     if (index > -1) {
    //         arrFloatPanel_AyohaRewardVoucher_AllMembersList.splice(index, 1);
    //     }
             
    //      }

        
    //   }
   

// alert(arrFloatPanel_AyohaRewardVoucher_AllMembersList);
//       return;
//nampak cam betul dah,,,,7/9/2023

    SetVoucherReceipients();
    //FloatPanel_AyohaNotificationManagement_PreviewMessageShow();
}



function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
//console.log(formatDate('Sun May 11,2014'))




function SetVoucherReceipients() {

//var aa=formatDate(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_StartDate)
 // alert(globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo);


    var objn = {
        "SubscriberAccNo": globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo,
        "VoucherCode": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "EntitledVoucherStartDate": formatDate(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_StartDate),
        "EntitledVoucherEndDate": formatDate(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_EndDate),
        // "EntitledVoucherStartDate": "2023-06-26",
        // "EntitledVoucherEndDate": "2023-06-26",
        "EntitledVoucherNote": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherNote,
        "EntitledVoucherStatus": "Valid",
        "CreatedBy": GetEnterpriseHQAccNo(),
        "PaymentNo": "NA",
        "PaymentAtEnterpriseAccNo":  "NA",
        "PaymentNoDisplay":  "NA",
        "MembershipCardCode":  "NA",
    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserInsert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                swalFireSuccess("Voucher Set Successfully!");
                FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsHide();
                globalSetVoucherReceipientsID="";
                globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";
                
                
                FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo();
                // FloatPanel_AyohaNotificationManagement_CreateMessageHide();


                // Ext.Viewport.mask({ xtype: 'loadmask', message: 'ReLoading....' });
                // var task = Ext.create('Ext.util.DelayedTask', function () {
                //     AyohaNotificationManagementMonthYear_Month = "NA";
                //     AyohaNotificationManagementMonthYear_Year = "NA"
                //     AyohaNotificationMasterLoadByEnterpriseAccNoStore(AyohaNotificationManagementMonthYear_Year, AyohaNotificationManagementMonthYear_Month, "Current");                  

                //     Ext.Viewport.setMasked(false);
                // });
                // task.delay(500);

              
            }
            else {
                swalFireFail("Send Failed!_Client" + result.responseText.trim());
                globalSetVoucherReceipientsID="";
            }

           // Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            //Ext.Viewport.unmask();
            swalFireFail("Send Failed!_Svr" + result.responseText.trim());
            globalSetVoucherReceipientsID="";
        }

    });

}



















var countRecipientList_List = 0;
function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxtOnKeyUp_AllMembers() {

   


    _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_AllMembers').value;

   

    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
              //  Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

    }


    else {
        console.log('tiada2');
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.clearFilter();
   
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count + '</div>');

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}




function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxtOnKeyUp_Segment() {

    var countRecipientList_List = 0;


    _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_Segment').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();

                Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

    }


    else {
        console.log('tiada2');
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.clearFilter();
       // Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<font size="2" color="black"><b>(' +  + ')</b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count + '</div>');

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}




function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxtOnKeyUp_SpecificMember() {

    var countRecipientList_List = 0;


    _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_Receipients_ListTypeSearchTxt_SpecificMember').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');
    }


    else {
        console.log('tiada2');
        _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.clearFilter();

        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count + '</div>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}












function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo_NoReload(){
   // alert(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode)
    
    var objn = {
        "VoucherCode": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode,
        "EnterpriseAccNo":GetEnterpriseAccNo()

    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.removeAll();
              // var VoucherCode=globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode;
              // FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
               // swalFireSuccess("Delete Successfully!");
                //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByVoucherCodeStore();
                //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByNotificationCodeStore();
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




function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo(){
    // alert(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode)
     
     var objn = {
         "VoucherCode": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode,
         "EnterpriseAccNo":GetEnterpriseAccNo()
 
     };
     console.log(objn);
     var _value = Ext.Ajax.request({
         type: "POST",
         url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo',
         dataType: "json",
         data: JSON.stringify(objn),
         headers: {
             "Content-Type": "application/json; charset=utf-8"
         },
 
         success: function (result, request) {
 
             //console.log(result.responseText);
 
 
             data = Ext.decode(result.responseText.trim());
 
             if (data.success == "true") {
                 _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.removeAll();
                var VoucherCode=globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode;
                FloatPanel_AyohaRewardVoucher_VoucherRecipents_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
                // swalFireSuccess("Delete Successfully!");
                 //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByVoucherCodeStore();
                 //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByNotificationCodeStore();
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






function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents__DeleteSpecificMember(ID) {


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
                url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMember_VoucherDelete',
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
                        FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByVoucherCodeStore();
                        //FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberLoadByNotificationCodeStore();
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




function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_DeleteCheck(){
    var count=parseInt(_DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getCount());


if(count>0){
    globalSetVoucherReceipientsID="";
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";
FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_RecipientSpecificMemberVoucherDeleteByVoucerCodeEnterpriseAccountNo();
}
}