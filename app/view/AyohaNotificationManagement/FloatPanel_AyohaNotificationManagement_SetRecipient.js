Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_SetRecipient', {

});


var _FloatPanel_AyohaNotificationManagement_SetRecipient;


var isFloatPanel_AyohaNotificationManagement_SetRecipientOpen = 'N';



var _FloatPanel_AyohaNotificationManagement_SetRecipient_isFirstLoad = "N";







function FloatPanel_AyohaNotificationManagement_SetRecipient() {

    _FloatPanel_AyohaNotificationManagement_SetRecipient =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaNotificationManagement_SetRecipientID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 550,

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

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_SetRecipientHeader',
                                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
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
                                                id: 'htmlFloatPanel_AyohaNotificationManagement_SetRecipientTitleTxt',
                                                html: '<font size=4 color=black><b>Set Recipients</b></font>'
                                            },
                                                        

                                                         {
                                                             xtype: 'spacer',

                                                         },
                                                         {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaNotificationManagement_SetRecipientBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaNotificationManagement_SetRecipient.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                    //direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaNotificationManagement_SetRecipientOpen = 'N';
                                                                _FloatPanel_AyohaNotificationManagement_SetRecipient_isFirstLoad = "N";
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
                                                             id: 'btnFloatPanel_AyohaNotificationManagement_SetRecipient_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaNotificationManagement_SetRecipient.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaNotificationManagement_SetRecipientOpen = 'N';
                                                                 _FloatPanel_AyohaNotificationManagement_SetRecipient_isFirstLoad = "N";

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
                                   id: 'containerFloatPanel_AyohaNotificationManagement_SetRecipient',
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
                       id: 'radioFloatPanel_AyohaNotificationManagement_SetRecipient_AllSubscriber',
                       name: 'All',
                       checked: false,
                       listeners: {
                           check: function (radioFld, event, obj) {
                               console.log(radioFld.isChecked());
                               if (radioFld.isChecked()) {
                                   globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType = 'All_Members';
                                   Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_segment').setChecked(false);
                                   Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_specificsubscriber').setChecked(false);
                                   FloatPanel_AyohaNotificationManagement_SetRecipient_AyohaUserProfileLoadByEnterpriseAccNoStore();
                                   Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients').setHtml('<font size="2" color="black"><b><u>Recipients</u><br>(All Members)</b></font>');
                                   Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembers').setHidden(true);
                                   Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembersFake').setHidden(false);

                                   Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_AllMembersList').setHidden(false);
                                   Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SegmentList').setHidden(true);
                                   Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SpecificMemberList').setHidden(true);
                                   Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers').setHidden(false);
                                   Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment').setHidden(true);
                                   Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember').setHidden(true);
                                   Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + '</div>');
                                   globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo_Literal = "Not Required";
                                   

                               }
                           }
                       }
                   },
       {
           xtype: 'radiofield',
           label: 'Segment',
           labelWidth: '80%',
           //labelWrap: true,
           id: 'radioFloatPanel_AyohaNotificationManagement_SetRecipient_segment',
           name: 'seg',
           listeners: {
               check: function (radioFld, event, obj) {
                   console.log(radioFld.isChecked());
                   if (radioFld.isChecked()) {
                       globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType = 'Segment';
                       globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo_Literal = "Not Required";
                       Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_AllSubscriber').setChecked(false);
                       Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_specificsubscriber').setChecked(false);
                       Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients').setHtml('<font size="2" color="black"><b><u>Recipients</u><br>(Segment-NA)</b></font>');
                       Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembers').setHidden(true);
                       Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembersFake').setHidden(false);
                       Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_AllMembersList').setHidden(true);
                       Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SegmentList').setHidden(false);
                       Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SpecificMemberList').setHidden(true);
                       Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers').setHidden(true);
                       Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment').setHidden(false);
                       Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember').setHidden(true);
                       Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</div>');
                   }
               }
           }
       },
        {
            xtype: 'radiofield',
            label: 'Specific Members',
            labelWidth: '80%',
          //  labelWrap: true,
            id: 'radioFloatPanel_AyohaNotificationManagement_SetRecipient_specificsubscriber',
            name: 'spec',
            listeners: {
                check: function (radioFld, event, obj) {
                    if (radioFld.isChecked()) {
                        globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType = 'Specific_Members';
                        Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_segment').setChecked(false);
                        Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_AllSubscriber').setChecked(false);
                        Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembers').setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembersFake').setHidden(true);
                        
                      

                        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients').setHtml('<font size="2" color="black"><b><u>Recipients</u><br>(Specific Members)</b></font>');
                        Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_AllMembersList').setHidden(true);
                        Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SegmentList').setHidden(true);
                        Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SpecificMemberList').setHidden(false);



                        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers').setHidden(true);
                        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment').setHidden(true);
                        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember').setHidden(false);
                        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</div>');
                        FloatPanel_AyohaNotificationManagement_SetRecipient_RecipientSpecificMemberLoadByNotificationCodeStore();

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
                                                              id: 'htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients',
                                                              html: '<font size="2" color="black"><b><u>Recipients</u><br>(Not Selected)</b></font>',
                                                            //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                              xtype:'spacer',
                                                          },
                                                         
                                                         
                                                           {
                                                               id: 'htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers',
                                                               margin: '0 0 0 0',
                                                               width: '50%',
                                                               height: 20,
                                                               html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                                           },
                                                            {
                                                                id: 'htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment',
                                                                margin: '0 0 0 0',
                                                                width: '50%',
                                                                hidden:true,
                                                                height: 20,
                                                                html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                                            },
                                                             {
                                                                 id: 'htmlFloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember',
                                                                 margin: '0 0 0 0',
                                                                 width: '50%',
                                                                 hidden: true,
                                                                 height: 20,
                                                                 html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                                             },
                                                           {
                                                               xtype: 'button',
                                                               id: 'btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembersFake',
                                                              // hidden: true,
                                                               //  badgeText: '1',
                                                               margin: '0 0 0 0',
                                                               height: 40,
                                                               width: 40,
                                                               text:'',
                                                             //  html: '<img class="blink_me" src="resources/icons/userlistPurple.png" width="30" height="30" alt="Company Name">',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                 
                                                               }
                                                           },


                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaNotificationManagement_SetRecipient_ListOfMembers',
                                                                 hidden: true,
                                                                 //  badgeText: '1',
                                                                 margin: '0 0 0 0',
                                                                 height: 40,
                                                                 width: 40,
                                                                 html: '<img class="blink_me" src="resources/icons/userlistPurple.png" width="30" height="30" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                     FloatPanel_AyohaNotificationManagement_MembersListShow();
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
                                            store: 'AyohaUserProfileLoadByEnterpriseAccNoStore',
                                            id: 'FloatPanel_AyohaNotificationManagement_SetRecipient_AllMembersList',
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
                                            width: '100%',
                                         

                                        },

                                         {
                                             xtype: 'list',
                                             flex: 1,
                                             // height: '81%',
                                             store: '',
                                             id: 'FloatPanel_AyohaNotificationManagement_SetRecipient_SegmentList',
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
                                             width: '100%',


                                         },
                                           {
                                               xtype: 'list',
                                               flex: 1,
                                               // height: '81%',
                                               store: 'RecipientSpecificMemberLoadByNotificationCodeStore',
                                               id: 'FloatPanel_AyohaNotificationManagement_SetRecipient_SpecificMemberList',
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
                                                         + '<div style="width:100%;text-align:right;margin:-50px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipient__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div>'

                                                         + '</div>' +

                                                 '</div>',
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
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom',
                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
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
                                                     height: 55,
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'left',
                                                         align: 'left',
                                                     },
                                                     items: [





                                                          {
                                                              width: '100%',
                                                              margin: '5 0 0 0',
                                                              html: '<font size="2" color="black"><b><u>Record Found:</u></b></font>',
                                                              //    html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 14px;font-weight:normal;color:black;height:20px">Record Found:</b></div>',
                                                          },


                                                           {
                                                               width: '100%',
                                                               id: 'htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count',
                                                               margin: '-5 0 0 0',
                                                               html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</b></div>',
                                                           },



















                                                     ]

                                                 },

                                                 {
                                                     xtype: 'container',
                                                     //width: 600,
                                                     //  width: 400,
                                                     //width: '20%',
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
                                                               id: 'btnFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Preview',
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
                                                            id: 'btnFloatPanel_AyohaNotificationManagement_SetRecipient_SetReceipient',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            //height: 40,
                                                            //width: 135,
                                                            //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                            html: '<button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipient_Confirm()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Send Message</button>',
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
    return _FloatPanel_AyohaNotificationManagement_SetRecipient;



}




function FloatPanel_AyohaNotificationManagement_SetRecipientShow() {


    

    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_SetRecipient);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_SetRecipient());
    this.overlay.show();
    isFloatPanel_AyohaNotificationManagement_SetRecipientOpen = 'Y';
    _FloatPanel_AyohaNotificationManagement_SetRecipient_isFirstLoad = "Y";
    FloatPanel_AyohaNotificationManagement_SetRecipientAdjustHeight();
    globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType = "NA";
    globalPushNotificationID = "";
    PushNotificationID = "";
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers").addEventListener("keyup", FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxtOnKeyUp_AllMembers);
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment").addEventListener("keyup", FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxtOnKeyUp_Segment);
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember").addEventListener("keyup", FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxtOnKeyUp_SpecificMember);

//alert('FloatPanel_AyohaNotificationManagement_SetRecipientShow')

}





function FloatPanel_AyohaNotificationManagement_SetRecipientHide() {
    _FloatPanel_AyohaNotificationManagement_SetRecipient.hide();

    isFloatPanel_AyohaNotificationManagement_SetRecipientOpen = 'N';
    _FloatPanel_AyohaNotificationManagement_SetRecipient_isFirstLoad = "N";
}




function FloatPanel_AyohaNotificationManagement_SetRecipientAdjustHeight() {
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


    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_SetRecipient').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_SetRecipientInner').setHeight(newHeight + 60);






}


//All Client load
var globalPushNotificationID;
var PushNotificationID;
var globalFloatPanel_AyohaNotificationManagement_SetRecipient_count;
var _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore;
function FloatPanel_AyohaNotificationManagement_SetRecipient_AyohaUserProfileLoadByEnterpriseAccNoStore() {

    globalPushNotificationID = "";
    PushNotificationID = "";
    
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
        globalFloatPanel_AyohaNotificationManagement_SetRecipient_count = count;

        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + count + '</div>');


        if (arrFloatPanel_AyohaNotificationManagement_MembersList.length > 0) {
            Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + ')</b></font>');

        }
      


           for (i = 0; i < count; i++) {
               var modelRecorded = myStore.getAt(i);
               var AccountNo = modelRecorded.get('AccountNo');
               var AccountName = modelRecorded.get('AccountName');
               var PhoneNo = modelRecorded.get('PhoneNo');
               var Email = modelRecorded.get('Email');
               var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
               PushNotificationID += modelRecorded.get('PlayerID') + ",";
              
           
           }


           var text = PushNotificationID.replace("undefined", "");
           globalPushNotificationID = text.slice(0, -1) //'abcde'



           console.log(globalPushNotificationID);
        Ext.Viewport.setMasked(false);

      


    });
    task.delay(800);

}



//Specific Client load
var  globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo= "";
var  globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo_Literal = "";
var _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore;
function FloatPanel_AyohaNotificationManagement_SetRecipient_RecipientSpecificMemberLoadByNotificationCodeStore() {
    globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo="";
    globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo_Literal = "";
    globalPushNotificationID = "";
    PushNotificationID = "";

   //alert(GetNotificationCode())

    Ext.getStore('RecipientSpecificMemberLoadByNotificationCodeStore').getProxy().setExtraParams({
        NotificationCode: GetNotificationCode(),
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('RecipientSpecificMemberLoadByNotificationCodeStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('RecipientSpecificMemberLoadByNotificationCodeStore').getProxy().setExtraParams({
            NotificationCode: GetNotificationCode(),
            EnterpriseAccNo: GetEnterpriseAccNo()
        });

        _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore = Ext.StoreMgr.get('RecipientSpecificMemberLoadByNotificationCodeStore').load();
        var myStore = Ext.getStore('RecipientSpecificMemberLoadByNotificationCodeStore');
        var count = myStore.getCount();
        globalFloatPanel_AyohaNotificationManagement_SetRecipient_count = count;

        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + count + '</div>');

        
        //if (arrFloatPanel_AyohaNotificationManagement_MembersList.length > 0) {
        //    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + ')</b></font>');

        //}



        for (i = 0; i < count; i++) {
            var modelRecorded = myStore.getAt(i);
            globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo += modelRecorded.get('SubscriberAccNo') + ",";
            //var AccountName = modelRecorded.get('AccountName');
            //var PhoneNo = modelRecorded.get('PhoneNo');
            //var Email = modelRecorded.get('Email');
            //var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
            PushNotificationID += modelRecorded.get('PlayerID') + ",";


        }


        var text = PushNotificationID.replace("undefined", "");
        globalPushNotificationID = text.slice(0, -1) //'abcde'



        var texts = globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo.replace("undefined", "");
       
        
        globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo_Literal = texts.slice(0, -1) //'abcde'

        console.log(globalPushNotificationID);
        Ext.Viewport.setMasked(false);




    });
    task.delay(800);

}







































var globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType;


function FloatPanel_AyohaNotificationManagement_SetRecipient_Confirm() {

    if (globalPushNotificationID.length < 0) {
       
        swalFireFail("No Recipient !");
        return;
    }
    if (globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType =="NA") {
      
        swalFireFail("No Audience Type !");
        return;
    }
    sendPushNotification();
    //FloatPanel_AyohaNotificationManagement_PreviewMessageShow();
}








function sendPushNotification() {




    var bal = GetPushNotificationBalance();


    if (globalFloatPanel_AyohaNotificationManagement_SetRecipient_count > bal) {
        swalFireFail("InSufficient Push Notification Balance !, Please Topup Push NotificationQuota");
        return;
    }


    var AyohaNotificationCreateMsgSUbject = document.getElementById('AyohaNotificationCreateMsgSUbject').value;
    var AyohaNotificationManagement_CreateMessage_BodyMsg = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value;

    if (AyohaNotificationCreateMsgSUbject.length < 2) {
        alert("No Subject Message");
        return;
    }
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Text") {
       
        if (AyohaNotificationManagement_CreateMessage_BodyMsg.length < 2) {
            alert("No  Message");
            return;
        }
        if (FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage.length < 1) {
            alert("No  Footer Image");
            return;
        }
    }
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Image") {

        AyohaNotificationManagement_CreateMessage_BodyMsg = "NotRequired";
       
    }

    var footerImg;
    var PushNotificationMsgImg;

    if (FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage) {
        footerImg = FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage;
    } else {
        footerImg = "ExistingImage";
        FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName = "NA";
    }

    if (FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image) {
        PushNotificationMsgImg = FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image;
    } else {
        PushNotificationMsgImg = "ExistingImage";
        FloatPanel_AyohaNotificationManagement_CreateMessage_Image_ImageName = "NA";
        FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image="NA"
    }

    console.log(FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image)
   // if (undefined)


    var objn = {
        "ID": 0,
        "NotificationCode": GetNotificationCode(),
        "NotificationTitle": AyohaNotificationCreateMsgSUbject,
        "NotificationBody": AyohaNotificationManagement_CreateMessage_BodyMsg,
        //"NotifcationImageName": "NA",
        "NotifcationImageName": FloatPanel_AyohaNotificationManagement_CreateMessage_Image_ImageName,
        "NotificationFooterImageName": FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "NotificationType": globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType,
        "NotificationStatus": "Sent",
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "SendToAudiencesCount": globalFloatPanel_AyohaNotificationManagement_SetRecipient_count,
        "AudienceType": globalFloatPanel_AyohaNotificationManagement_SetRecipient_AudienceType,
        //"NotifcationImage": "ExistingImage",
        "NotifcationImage": FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image,
        "NotificationFooterImage": footerImg,
        "PlayerID": globalPushNotificationID,
        "NotificationMedium": "PN",
        "SubscriberAccNo": globalFloatPanel_AyohaNotificationManagement_SetRecipient_SubscriberAccNo_Literal,
        "Source": GetPushNotificationSource(),
        "TypeCRDB": "Debit",
        "EnterpriseName": localStorage.getItem('CurrEnterpriseName'),
    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterInsert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                swalFireSuccess("Push Notification Processed Successfully!");
                FloatPanel_AyohaNotificationManagement_SetRecipientHide();
                FloatPanel_AyohaNotificationManagement_CreateMessageHide();


                Ext.Viewport.mask({ xtype: 'loadmask', message: 'ReLoading....' });
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    AyohaNotificationManagementMonthYear_Month = "NA";
                    AyohaNotificationManagementMonthYear_Year = "NA"
                    AyohaNotificationMasterLoadByEnterpriseAccNoStore(AyohaNotificationManagementMonthYear_Year, AyohaNotificationManagementMonthYear_Month, "Current");                  

                    Ext.Viewport.setMasked(false);
                });
                task.delay(500);

              
            }
            else {
                swalFireFail("Send Failed!_Client" + result.responseText.trim());
            }

           // Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            //Ext.Viewport.unmask();
            swalFireFail("Send Failed!_Svr" + result.responseText.trim());
        }

    });

}




















function FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxtOnKeyUp_AllMembers() {

    var countRecipientList_List = 0;


    _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_AllMembers').value;

   

    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.getCount();
              //  Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

    }


    else {
        console.log('tiada2');
        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.clearFilter();
   
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + '</div>');

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}




function FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxtOnKeyUp_Segment() {

    var countRecipientList_List = 0;


    _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_Segment').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.getCount();

                Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');

    }


    else {
        console.log('tiada2');
        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.clearFilter();
       // Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<font size="2" color="black"><b>(' +  + ')</b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + '</div>');

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}




function FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxtOnKeyUp_SpecificMember() {

    var countRecipientList_List = 0;


    _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotificationManagement_SetRecipient_Receipients_ListTypeSearchTxt_SpecificMember').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');
    }


    else {
        console.log('tiada2');
        _Data_Store_RecipientSpecificMemberLoadByNotificationCodeStore.clearFilter();

        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_SetRecipient_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + '</div>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}











function FloatPanel_AyohaNotificationManagement_SetRecipient__DeleteSpecificMember(ID) {


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
                url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberDelete',
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
                        FloatPanel_AyohaNotificationManagement_SetRecipient_RecipientSpecificMemberLoadByNotificationCodeStore();
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