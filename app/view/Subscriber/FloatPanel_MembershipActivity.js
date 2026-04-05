
Ext.define('ianMizi.view.Subscriber.FloatPanel_MembershipActivity', {

});

var _FloatPanel_MembershipActivity;


var isFloatPanel_MembershipActivityOpen = 'N';






function FloatPanel_MembershipActivity() {

    _FloatPanel_MembershipActivity =
    Ext.create('Ext.Container', {
        //zIndex: 150,
        zIndex: 149,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MembershipActivityID',
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
        //                    _FloatPanel_MembershipActivity.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_MembershipActivity.hide(Ext.fx.Animation({
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

                id: 'containerFloatPanel_MembershipActivityHeader',
                style:GetHeaderStyle(),
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
                            id: 'htmlFloatPanel_MembershipActivity_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Members Campaign Activity Log</b></font>'
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
                        }, {
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
        '<input type="text" id="input-MembershipActivity"  placeHolder="Search (Member Name/Campaign Name/Activity)" class="search-input" >'+
    '</div>'
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
                                width:20
                            },
                            {
                            id:'htmlFloatPanel_MembershipActivity_Selection',
                                    html: '<div style="color:black;text-align: left;font-size:16px;width:100%;paddign:0px 20px"><select style="font-size:16px;width:180px;height:30px"  id="FloatPanel_MembershipActivity_Selection"><option value="NA"> - Filter - </option><option value="Today">Today</option><option value="ThisWeek">This Week</option><option value="Month">This Month</option><option value="Year">This Year</option><option value="Custome">Custome Date</option></select></div>'  
                                 
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
                                        id: 'btnFloatPanel_MembershipActivityBack',
                                        height: 30,
                                        width: 35,
                                        margin: '10 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                           // FloatPanel_MembershipActivityHide();
                                          isFloatPanel_MembershipActivityOpen = 'N';

                                           _FloatPanel_MembershipActivity.hide(Ext.fx.Animation({
                                            type: 'popOut',
                                            //direction: 'left',
                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                            duration: 250

                                        }));
                                        document.getElementById("input-MembershipActivity").value=" ";
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
                id: 'containerMembershipActivityTitleOutter',
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
                        margin: '0 0 0 20',
                        //hidden:true,
                       // id: 'htmlFloatPanel_AyohaStore_NewOrderList_recordFoundCount',
                        html: '<font size=3 color=black><b>Record Found:</b></font>'
                    },

                     {
                         id: 'MyMembershipActivityMasterHeader_MyLMembershipActivityTypeSearchTxt',
                         margin: '0 0 0 -10',
                         hidden:true,
                         width: '48%',
                         height: 20,
                        // html: '<input type="text" id="input-MembershipActivity" placeHolder="Search (Member Name/Campaign Name/Activity)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                     },
                     {
                        margin: '0 0 0 0',
                        //hidden:true,
                        id: 'htmlFloatPanel_MembershipActivity_Count',
                        html: '<font size=3 color=black><b>(0)</b></font>'
                    },
{
xtype:'spacer',
},
                    
                 
                    
                    

                    
                      {
                          xtype: 'button',
                          id: 'btnMembershipActivityFilter',
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

                                                //    {
                                                //        xtype: 'container',
                                                //        flex: 1,

                                                //        margin: '2 0 0 0',
                                                //        //style: {
                                                //        //    // background: '#D25959',
                                                //        //    background: 'rgba(76, 175, 80, 0.3);',
                                                //        //    // border: '2px'
                                                //        //},
                                                //        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                //        style: 'background-color:transparent',
                                                //        layout: {
                                                //            type: 'vbox',
                                                //            pack: 'center',
                                                //            align: 'center',
                                                //        },
                                                //        items: [
                                                //             {
                                                //                 margin: '0 0 0 -45',
                                                //                 html: '<div style="color:red;text-align: center;font-size:10px;width:100%;font-weight:bold">REJECTED</div>',
                                                //             },
                                                //              {
                                                //                  margin: '-10 0 0 -45',
                                                //                  id: 'htmlRejectedMembershipCount',
                                                //                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">0</div>',
                                                //                 // html: '<div  style="background-color: red;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                                                //                //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                //              },
                                                //        ]
                                                //    },
                                                //    {
                                                //        xtype: 'container',
                                                //        flex: 1,

                                                //        margin: '2 0 0 0',
                                                //        //style: {
                                                //        //    // background: '#D25959',
                                                //        //    background: 'rgba(76, 175, 80, 0.3);',
                                                //        //    // border: '2px'
                                                //        //},
                                                //        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                //        style: 'background-color:transparent',
                                                //        layout: {
                                                //            type: 'vbox',
                                                //            pack: 'center',
                                                //            align: 'center',
                                                //        },
                                                //        items: [
                                                //             {
                                                //                 margin: '0 0 0 0',
                                                //                 html: '<div style="color:grey;text-align: center;font-size:10px;width:100%;font-weight:bold">EXPIRED</div>',
                                                //             },
                                                //              {
                                                //                  margin: '-10 0 0 0',
                                                //                  id: 'htmlExpiredMembershipCount',
                                                //                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',
                                                //                  //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                //                 // html: '<div  style="background-color: grey;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                                                //              },
                                                //        ]
                                                //    },


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
                                                     id: 'htmlTotalMembershipCount',
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
                                id:'FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStorePanel',
                                hidden:true,
                               // id:'panelHeaderSubscriberListListID',
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border:1px solid grey"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial; text-transform:uppercase;font-size:12px;color:white"><div style="float:left;width:9.2%;"><span style="font-family: Arial; text-transform:uppercase;color:white;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:38.5%;font-family: Arial; text-transform:uppercase;color:white;padding:0px 0px"><b>Campaign Name</b></div ><div style="float:left;width:29%;color:white;"><b>Activity</b></div><div style="float:left;width:10.3%;color:white;"><b>DateTime</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:6%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:22%;font-family: Arial;padding:0px 0px"><b>Member Name</b></div ><div style="float:left;width:28%;font-family: Arial;padding:0px 0px"><b>Campaign Name</b></div ><div style="float:left;width:30%;"><b>Activity</b></div><div style="float:left;width:10.3%;"><b>DateTime</b></div></div></div></div>'
                                        
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                width: '100%',
                                id:'FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStorePanel',
                                hidden:true,
                               // id:'panelHeaderSubscriberListListID',
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:6%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:22%;font-family: Arial;padding:0px 0px"><b>Member Name</b></div ><div style="float:left;width:28%;font-family: Arial;padding:0px 0px"><b>Campaign Name</b></div ><div style="float:left;width:30%;"><b>Activity</b></div><div style="float:left;width:10.3%;"><b>DateTime</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial;padding:0px 0px"><b>Members Name / Mobile Phone No</b></div ><div style="float:left;width:13%;"><b>Membership Card</b></div><div style="float:left;width:15%;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;"><b>Membership Date</b></div><div style="float:left;width:12.2%;"><b>Membership End Date</b></div><div style="float:left;width:10.5%;"><b>Renewal Fee</b></div><div style="float:left;width:9%;"><b>Membership Status</b></div></div></div></div>'

                                        
                                    }
                                ]
                            },
                      
                              {
                                 // height: 639,
                                  width: '100%',
                                  height: '95%',
                                  style: 'background-color:transparent',
                                  id: 'containerMembershipActivityList',
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
                                        store: _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore,
                                        //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                       id: 'FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStoreList',                                         
                                       
                                       // grouped: true,
                                        mode: 'SINGLE',
                                        hidden:true,
                                       
                                       // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                        disableSelection: true,
                                      
        
                                            itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                          
                                             
                                                                    
                                           
                                          // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                                           '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img  src="resources/icons/transparentbox.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
        
        
        
                                                '</div>',
                                                emptyText: '<div class="myContent">No Activity</div>',
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
                                        store: _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore,
                                        //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                       id: 'FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStoreList',                                         
                                       hidden:true,
                                       // grouped: true,
                                        mode: 'SINGLE',
                                      
                                       
                                       // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                        disableSelection: true,
                                      
        
                                            itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                          
                                             
                                                                    
                                           
                                          // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                                           '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:5%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:23%;color:black;font-size:12px;">{AccountName}</div><div style="float:left;width:28%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:11%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img  src="resources/icons/transparentbox.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
        
        
        
                                                '</div>',
                                                emptyText: '<div class="myContent">No Activity</div>',
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
    return _FloatPanel_MembershipActivity;



}








function FloatPanel_MembershipActivityShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipActivity);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipActivity());
    this.overlay.show();
    isFloatPanel_MembershipActivityOpen = 'Y';
    document.getElementById("input-MembershipActivity").addEventListener("keyup", SearchMembershipActivityOnKeyUp);
   // FloatPanel_MembershipActivity_AddCardShow();
    //FloatPanel_SubscriberMenuShow();



    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStoreList').setHidden(false);
    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStorePanel').setHidden(false);
    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStorePanel').setHidden(true);
    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStoreList').setHidden(true);
    Ext.getCmp('htmlFloatPanel_MembershipActivity_Selection').setHidden(true);
    
    FloatPanel_MembershipDetailsPage_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNo("All");
    FloatPanel_DrawerMenu_MainHide();
  //  FloatPanel_MembershipActivity_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
 





    
 var selectElement = document.getElementById('FloatPanel_MembershipActivity_Selection');

 // Add an event listener for the 'change' event
 selectElement.addEventListener('change', function() {
     // Get the value of the selected option
     var selectedValue = selectElement.value;
     
     // Do something with the selected value
     console.log("Selected filter: " + selectedValue);
     // For example, you can call a function to handle different filters
     handleFilterChange_FloatPanel_MembershipActivity(selectedValue);
 });
}

function handleFilterChange_FloatPanel_MembershipActivity(filter) {
    switch (filter) {
        case 'Today':
            FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore(filter,'00','00');
            break;
        case 'ThisWeek':
            FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore(filter,'00','00');
            break;
        case 'Month':
            FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore(filter,'00','00');
            break;
        case 'Year':
            FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore(filter,'00','00');
            break;
        case 'Custome':
            FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore(filter,'00','00');
            break;
        default:
            console.log("No filter selected or action defined.");
    }
}

function FloatPanel_MembershipActivityShow_FromDrawerMenu() {

    Ext.Viewport.remove(_FloatPanel_MembershipActivity);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipActivity());
    this.overlay.show();
    isFloatPanel_MembershipActivityOpen = 'Y';
    document.getElementById("input-MembershipActivity").addEventListener("keyup", SearchMembershipActivityOnKeyUp_FromDrawerMenu);
   // FloatPanel_MembershipActivity_AddCardShow();
    //FloatPanel_SubscriberMenuShow();



    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStoreList').setHidden(true);
    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStorePanel').setHidden(true);
    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStorePanel').setHidden(false);
    Ext.getCmp('FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStoreList').setHidden(false);

    FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore('Year','00','00');
    FloatPanel_DrawerMenu_MainHide();

    var selectElement = document.getElementById('FloatPanel_MembershipActivity_Selection');

    // Add an event listener for the 'change' event
    selectElement.addEventListener('change', function() {
        // Get the value of the selected option
        var selectedValue = selectElement.value;
        
        // Do something with the selected value
        console.log("Selected filter: " + selectedValue);
        // For example, you can call a function to handle different filters
        handleFilterChange_FloatPanel_MembershipActivity(selectedValue);
    });
  //  FloatPanel_MembershipActivity_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
 
}





function FloatPanel_MembershipActivityHide() {
    // FloatPanel_MembershipActivity_AddCardHide();
   // FloatPanel_SubscriberMenuHide();
   if(isFloatPanel_MembershipActivityOpen == 'Y')
   {
    _FloatPanel_MembershipActivity.hide(); isFloatPanel_MembershipActivityOpen = 'N';
   }
   
}








function FloatPanel_MembershipActivity_MembershipsLatestActivityLoadByEnterpriseAccNoStore(DashboardFilter,StartDate,EndDate) {

    globalMembershipActivityCount=0;

    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.clearFilter();
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', GetEnterpriseAccNo()); 
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getProxy().setExtraParam('DashboardFilter', DashboardFilter);  
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getProxy().setExtraParam('StartDate', StartDate);  
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EndDate', EndDate);   
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLatestActivityLoadByEnterpriseAccNo');
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getCount();
        globalMembershipActivityCount=count;
        if(isFloatPanel_MembershipActivityOpen=="Y"){
            document.getElementById("input-MembershipActivity").value='';
            Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + globalMembershipActivityCount + ')</b></font>');
        }
      // alert(count);
     // FloatPanel_MembershipDetailsPage_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore('Limit');
      // LoadingPanelHide();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(100);











}


























var MembershipActivityCount;
function SearchMembershipActivityOnKeyUp() {







    var MembershipActivityCount = 0;


    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-MembershipActivity').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                MembershipActivityCount = _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getCount();
              Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + MembershipActivityCount + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        MembershipActivityCount = _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getCount();
       Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + MembershipActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlMembershipActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + globalMembershipActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlMembershipActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}



function SearchMembershipActivityOnKeyUp_FromDrawerMenu() {







    var MembershipActivityCount = 0;


    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-MembershipActivity').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                MembershipActivityCount = _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getCount();
              Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + MembershipActivityCount + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        MembershipActivityCount = _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.getCount();
       Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + MembershipActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlMembershipActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="3" color="black"><b>(' + globalMembershipActivityCount + ')</b></font>');
     //   Ext.getCmp('htmlMembershipActivityTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}




