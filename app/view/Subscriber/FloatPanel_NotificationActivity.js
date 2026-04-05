
Ext.define('ianMizi.view.Subscriber.FloatPanel_NotificationActivity', {

});

var _FloatPanel_NotificationActivity;


var isFloatPanel_NotificationActivityOpen = 'N';






function FloatPanel_NotificationActivity() {

    _FloatPanel_NotificationActivity =
    Ext.create('Ext.Container', {
        //zIndex: 150,
        zIndex: 149,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_NotificationActivityID',
        draggable: false,

        styleHtmlContent: true,

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
            type: 'slideOut',
            direction: 'left',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
   // style: 'background-color:white;',
    style: GetbackgroundColor(),
      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_NotificationActivity.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_NotificationActivity.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [

            {

                xtype: 'container',
                width: '100%',
                docked:'top',
                 height: 60,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_NotificationActivityHeader',
              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                style:GetHeaderStyle(),
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
                            id: 'htmlFloatPanel_NotificationActivity_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Member Notification Activity Log</b></font>'
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
height: 40,
width: 40,
html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
ui: 'plain',
handler: function () {
}
},
{
  
html:'<div class="search-container">'+
'<input type="text" id="input-NotificationActivity"  placeHolder="Search (Name/Mobile Phone No/Message/Messaging Tool)" class="search-input" >'+
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
                                        id: 'btnFloatPanel_NotificationActivityBack',
                                        height: 30,
                                        width: 35,
                                        margin: '10 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                           // FloatPanel_NotificationActivityHide();
                                          isFloatPanel_NotificationActivityOpen = 'N';

                                           _FloatPanel_NotificationActivity.hide(Ext.fx.Animation({
                                            type: 'popOut',
                                            //direction: 'left',
                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                            duration: 250

                                        }));
                                        document.getElementById("input-NotificationActivity").value=" ";
                                            FloatPanel_SubscriberMenuHide();
                                           

                                        }
                                    },
                                       {
                                           xtype: 'container',
                                           width: 15,
                                           height: 30,
                                       },
                                              
                                           










                       ]

            },




            {
                xtype: 'container',
                id: 'containerNotificationActivityTitleOutter',
                width: '100%',
                docked: 'bottom',
                // hidden:true,
                height: 50,
                style:GetFooterStyle(),
                //////////style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                      {
                          xtype: 'button',
                          id: 'btnNotificationActivitySearch',
                          hidden: true,
                          //  badgeText: '1',
                          margin: '1 0 0 0',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },





                    //  {
                    //      id: 'MyNotificationActivityMasterHeader_MyLNotificationActivityTypeSearchTxt',
                    //      margin: '0 0 0 -10',
                    //      width: '48%',
                    //      height: 20,
                    //      html: '<input type="text" id="input-NotificationActivity" placeHolder="Search" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                    //  },
                    {
                        margin: '0 0 0 20',
                        //hidden:true,
                       // id: 'htmlFloatPanel_NotificationActivity_Count',
                        html: '<font size=3 color=black><b>Record Found:</b></font>'
                    },
                     {
                        margin: '0 0 0 0',
                        //hidden:true,
                        id: 'htmlFloatPanel_NotificationActivity_Count',
                        html: '<font size=3 color=black><b>(0)</b></font>'
                    },
{
xtype:'spacer',
},
                    
                 
                    
                    

                    
                      {
                          xtype: 'button',
                          id: 'btnNotificationActivityFilter',
                          hidden: true,
                          //  badgeText: '1',
                          margin: '1 0 0 -5',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/MenuBoxPurple.png" width="30" height="30" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              FloatPanel_AddSubscriberMenuShow();
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },




                ]

            },
            //////

            {
                xtype: 'container',
                width: '100%',
                height: '100%',
               //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
               style: 'background-color:transparent;',
                layout: {
                    type: 'fit',
                   

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            











                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////


                              {

                                  xtype: 'container',
                                  width: '100%',
                                  hidden:true,
                                  margin: '0 0 0 0',
                                  height: 10,
                                 // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                 // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                  style: "background-color: transparent;",
                                  layout: {
                                      type: 'hbox',
                                      pack: 'center',
                                      align: 'center'

                                  },
                                  items: [
                                      {
                                          xtype: 'spacer',
                                         width: '13%'
                                      },

                                      {
                                          xtype: 'container',
                                          width: '65%',
                                          height: 85,
                                          margin: '0 0 0 0',
                                          style: "background-color: transparent;",
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'left'

                                          },
                                          items: [

                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    height: 40,
                                                    margin: '-7 0 0 0',
                                                    //style: {
                                                    //    // background: '#D25959',
                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                    //    // border: '2px'
                                                    //},
                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                    style: 'background-color:transparent',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'start',
                                                        align: 'left',
                                                    },
                                                    items: [
                                                        // {
                                                        //     xtype: 'container',                                                          
                                                        //     flex: 1,
                                                        //     margin: '0 0 0 10',
                                                          
                                                        //     style: 'background-color:transparent',
                                                        //     layout: {
                                                        //         type: 'vbox',
                                                        //         pack: 'center',
                                                        //         align: 'center',
                                                        //     },
                                                        //     items: [
                                                        //          {
                                                        //              margin: '10 0 0 -55',
                                                        //              html: '<div style="color:green;text-align: center;font-size:10px;width:100%;font-weight:bold">APPROVED</div>',
                                                        //          },
                                                        //           {
                                                        //               margin: '-10 0 0 -55',
                                                        //               id: 'htmlApprovedMembershipCount',                                                                    
                                                        //               html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">0</div>',
                                                                   
                                                        //           },
                                                        //     ]
                                                        // },
                                                // {
                                                //     xtype: 'container',
                                                //     flex: 1,

                                                //     margin: '0 0 0 10',
                                                //     //style: {
                                                //     //    // background: '#D25959',
                                                //     //    background: 'rgba(76, 175, 80, 0.3);',
                                                //     //    // border: '2px'
                                                //     //},
                                                //     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                //     style: 'background-color:transparent',
                                                //     layout: {
                                                //         type: 'vbox',
                                                //         pack: 'center',
                                                //         align: 'center',
                                                //     },
                                                //     items: [
                                                //          {
                                                //              margin: '10 0 0 0',
                                                //              html: '<div style="color:orange;text-align: center;font-size:10px;width:100%;font-weight:bold">PENDING APPROVAL</div>',
                                                //          },
                                                //           {
                                                //               margin: '-10 0 0 0',
                                                //               id: 'htmlRequestApprovalMembershipCount',
                                                //               html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">0</div>',
                                                //             //  html: '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div class="blink_me" style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                                                //           },
                                                //     ]
                                                // },

                                                    ]
                                                },



                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    margin: '6 0 0 0',
                                                    hidden:true,
                                                    //style: {
                                                    //    // background: '#D25959',
                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                    //    // border: '2px'
                                                    //},
                                                    style: 'border-top:1px solid #ECF0F1;background: transparent;',
                                                    // style: 'background-color:transparent',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'start',
                                                        align: 'left',
                                                    },
                                                    items: [

                                           
                                                    ]
                                                }

                                          ]

                                      },
                                      {
                                          xtype: 'panel',
                                          width:20
                                      },
                                      {
                                          xtype: 'container',
                                          width: '25%',
hidden:true,
                                          margin: '0 0 0 0',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'left',
                                          },
                                          items: [
                                                {
                                                    //xtype: 'button',
                                                    //height: 75,
                                                    //width: 75,

                                                    margin: '0 0 0 0',
                                                    id: 'btnEnterprisesListLog',
                                                    //badgeText: "2",
                                                    //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                                                    html: '<div ><img src="resources/icons/AllCustomerWhite.png" width="80" height="65" alt="Company Name"></div>',
                                                    //ui: 'plain',
                                                    //handler: function () {

                                                    //    //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                    //    //  setupMovementMap(2);





                                                    //    //Ext.getCmp('mainView').setActiveItem(16);
                                                    //    //loadNotificationSummary();
                                                    //}
                                                },
                                                 {
                                                     margin: '-12 0 0 0',
                                                   //  id: 'htmlTotalMembershipCount',
                                                     //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                     html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 13px;">500</div>',
                                                 },

                                          ]
                                      },



                                      {
                                        xtype: 'spacer',
                                        width: '5%'
                                    },
                                  ]


                              },

                              {
                                xtype: 'panel',
                                width: '100%',
                             //   hidden: true,
                               id:'panelFloatPanel_Notification_bySubscriberAccNoAndEnterpriseAcNoListID',
                               hidden:true,
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6.2%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:14.5%;padding:0px 0px"><b>Messaging Tool</b></div ><div style="float:left;width:61.5%;"><b>Message</b></div><div style="float:left;width:9.5%;"><b>is Read(Yes/No)?</b></div><div style="float:left;width:8%;"><b>Read Date</b></div></div></div></div>'

                                        
                                    }
                                ]
                            },
                    
                            {
                                xtype: 'panel',
                                width: '100%',
                             //   hidden: true,
                               id:'panelFloatPanel_Notification_byEnterpriseAcNoListID',
                               hidden:true,
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6.2%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:14.5%;padding:0px 0px"><b>Members Name</b></div ><div style="float:left;width:13%;"><b>Messaging Tool</b></div><div style="float:left;width:48%;"><b>Message</b></div><div style="float:left;width:9.5%;"><b>is Read(Yes/No)?</b></div><div style="float:left;width:8%;"><b>Sent Date</b></div></div></div></div>'
                                        //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6.2%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:14.5%;padding:0px 0px"><b>Messaging Tool</b></div ><div style="float:left;width:61.5%;"><b>Message</b></div><div style="float:left;width:9.5%;"><b>is Read(Yes/No)?</b></div><div style="float:left;width:8%;"><b>Read Date</b></div></div></div></div>'

                                        
                                    }
                                ]
                            },
                              {
                                 // height: 639,
                                  width: '100%',
                                  height: '95%',
                                  style: 'background-color:transparent',
                                  id: 'containerNotificationActivityList',
                                  xtype:'container',
                                  //style: {
                                  //    // background: '#D25959',
                                  //    background: 'white',
                                  //    // border: '2px'
                                  //},
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',

                                  },
                                  items: [


                                    {
                                        xtype: 'list',
                                        //  flex: 1,
                                        width: '100%',
                                        store: _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore,
                                        //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                         id: 'FloatPanel_Notification_bySubscriberAccNoAndEnterpriseAcNoListID', 
                                         hidden:true,                                        
                                        // grouped: true,
                                        mode: 'SINGLE',
                                      
                                       
                                       // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                        disableSelection: true,
                                      
        
                                            itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                          
                                             
                                                                    
                                           
                                          // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                                           '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:5%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:15%;color:black;font-size:12px;">{NotificationMedium}</div><div style="float:left;width:59.5%;color:black;font-size:12px;word-wrap: break-word"><b><u>Title:{NotificationTitle}</u></b><br>{NotificationBody}<br><br>Sent Date:{SentDate}</div><div style="float:left;width:9.5%;color:black;font-size:12px;text-align:center;padding:0px 10px">{IsRead}</div><div style="float:left;width:11%;color:black;font-size:12px;text-align:right;">{ReadDate}</div></div></div></div>'+
        
        
        
                                                '</div>',
                                                emptyText: '<div class="myContent">No Notification History</div>',
                                       height: '100%',
                                        listeners: {
                                            itemsingletap: function (list, idx, target, records, evt) {
                                              
        
        
                                            },
                                            deselect: function (list, records) {
        
                                            }
                                        },
        
                                    },

                                   

                                    {
                                        xtype: 'list',
                                        //  flex: 1,
                                        width: '100%',
                                        store: _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore,
                                        //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                         id: 'FloatPanel_Notification_byEnterpriseAcNoListID', 
                                         hidden:true,                                        
                                        // grouped: true,
                                        mode: 'SINGLE',
                                      
                                       
                                       // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                        disableSelection: true,
                                      
        
                                            itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                          
                                             
                                                                    
                                           
                                          // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                                           '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:5%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:18.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;">{AccountName}<br>{MobilePhoneNo}</div><div style="float:left;width:10%;color:black;font-size:12px;text-align:left">{NotificationMedium}</div><div style="float:left;width:48%;color:black;font-size:12px;word-wrap: break-word">Tilte:<u>{NotificationTitle}</u><br>{NotificationBody}<br><br>Sent Date:{SentDate}</div><div style="float:left;width:8.5%;color:black;font-size:12px;text-align:center;padding:0px 10px">{IsRead}</div><div style="float:left;width:10%;color:black;font-size:12px;text-align:right;">{ReadDate}</div></div></div></div>'+
        
        
        
                                                '</div>',
                                                emptyText: '<div class="myContent">No Notification History</div>',
                                       height: '100%',
                                        listeners: {
                                            itemsingletap: function (list, idx, target, records, evt) {
                                              
        
        
                                            },
                                            deselect: function (list, records) {
        
                                            }
                                        },
        
                                    },

                                  ]

                              },

                              



                              
                              





                        ]
                    },









                    



















                ]
            },












        ]





    });
    return _FloatPanel_NotificationActivity;



}








function FloatPanel_NotificationActivityShow() {

    Ext.Viewport.remove(_FloatPanel_NotificationActivity);
    this.overlay = Ext.Viewport.add(FloatPanel_NotificationActivity());
    this.overlay.show();
    isFloatPanel_NotificationActivityOpen = 'Y';
    document.getElementById("input-NotificationActivity").addEventListener("keyup", SearchNotificationActivityOnKeyUp);
  
   Ext.getCmp('panelFloatPanel_Notification_bySubscriberAccNoAndEnterpriseAcNoListID').setHidden(false);
    Ext.getCmp('FloatPanel_Notification_bySubscriberAccNoAndEnterpriseAcNoListID').setHidden(false);
    Ext.getCmp('panelFloatPanel_Notification_byEnterpriseAcNoListID').setHidden(true);
    Ext.getCmp('FloatPanel_Notification_byEnterpriseAcNoListID').setHidden(true);
 

  
  
  
  
  
    // FloatPanel_NotificationActivity_AddCardShow();
    //FloatPanel_SubscriberMenuShow();
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.clearFilter();
    FloatPanel_MembershipDetailsPage_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore("All");
    FloatPanel_DrawerMenu_MainHide();
  //  FloatPanel_NotificationActivity_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
 
}


function FloatPanel_NotificationActivityShow_FromDrawerMenu() {

    Ext.Viewport.remove(_FloatPanel_NotificationActivity);
    this.overlay = Ext.Viewport.add(FloatPanel_NotificationActivity());
    this.overlay.show();
    isFloatPanel_NotificationActivityOpen = 'Y';
    document.getElementById("input-NotificationActivity").addEventListener("keyup", SearchNotificationActivityOnKeyUp_LoadbyEnterpriseAccNo);
    Ext.getCmp('panelFloatPanel_Notification_bySubscriberAccNoAndEnterpriseAcNoListID').setHidden(true);
    Ext.getCmp('FloatPanel_Notification_bySubscriberAccNoAndEnterpriseAcNoListID').setHidden(true);
    Ext.getCmp('panelFloatPanel_Notification_byEnterpriseAcNoListID').setHidden(false);
    Ext.getCmp('FloatPanel_Notification_byEnterpriseAcNoListID').setHidden(false);
    _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.clearFilter();
    FloatPanel_NotificationActivity_AyohaNotificationLoadByEnterpriseAccNoStore();
    FloatPanel_DrawerMenu_MainHide();
  //  FloatPanel_NotificationActivity_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
 
}






function FloatPanel_NotificationActivityHide() {
    // FloatPanel_NotificationActivity_AddCardHide();
   // FloatPanel_SubscriberMenuHide();
   if(isFloatPanel_NotificationActivityOpen == 'Y')
   {
    _FloatPanel_NotificationActivity.hide(); isFloatPanel_NotificationActivityOpen = 'N';
   }
   
}



































var NotificationActivityCount;
function SearchNotificationActivityOnKeyUp() {







    var NotificationActivityCount = 0;


    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-NotificationActivity').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                NotificationActivityCount = _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getCount();
              Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="3" color="black"><b>(' + NotificationActivityCount + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        NotificationActivityCount = _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getCount();
       Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="3" color="black"><b>(' + NotificationActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlNotificationActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="3" color="black"><b>(' + globalNotificationActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlNotificationActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}



function SearchNotificationActivityOnKeyUp_LoadbyEnterpriseAccNo() {







    var NotificationActivityCount = 0;


    _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-NotificationActivity').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                NotificationActivityCount = _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getCount();
              Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="3" color="black"><b>(' + NotificationActivityCount + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        NotificationActivityCount = _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getCount();
       Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="2" color="black"><b>(' + NotificationActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlNotificationActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="2" color="black"><b>(' + globalNotificationActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlNotificationActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}







function FloatPanel_NotificationActivity_AyohaNotificationLoadByEnterpriseAccNoStore() {

    globalNotificationActivityCount=0;

   
    //_DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_MembershipDetailsPage_SubscriberAccNo);
    _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
   // _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getProxy().setExtraParam('Limit', Limit);
    _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadByEnterpriseAccNo');
    _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.getCount();
        globalNotificationActivityCount=count;
        if(isFloatPanel_NotificationActivityOpen=="Y"){
            document.getElementById("input-NotificationActivity").value='';
            Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="2" color="black"><b>(' + globalNotificationActivityCount + ')</b></font>');
        }
      // alert(count);
       LoadingPanelHide();
       
       _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore.clearFilter();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(100);











}