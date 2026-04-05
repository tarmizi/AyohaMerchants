
Ext.define('ianMizi.view.Subscriber.FloatPanel_SubscriberList', {

});

var _FloatPanel_SubscriberList;


var isFloatPanel_SubscriberListOpen = 'N';






function FloatPanel_SubscriberList() {

    _FloatPanel_SubscriberList =
    Ext.create('Ext.Container', {
        //zIndex: 150,
        zIndex: 49,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_SubscriberListID',
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
        //                    _FloatPanel_SubscriberList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_SubscriberList.hide(Ext.fx.Animation({
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

                id: 'containerFloatPanel_SubscriberListHeader',
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                            id: 'htmlFloatPanel_SubscriberList_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>All Members List</b></font>'
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
    '<input type="text" id="input-SubscriberListSearchText"  placeHolder="Search (Name/Mobile Phone No)" class="search-input" >'+
'</div>'
                        },{
                            xtype: 'spacer',
                            width:30
                        }, {
                            margin: '0 0 0 0',
                          //  id: 'htmlFloatPanel_SubscriberList_TitleHeaderTxt',
                            html: '<div style="font-size:12px;font-weight:bold;color:purple;cursor:pointer" onclick="swalFireUpgradePro(`Advance Filter`)";>Advance Filter</div>'
                        },
                           
                          {
                            xtype: 'button',
                            margin: '1 0 0 -10',
                            height: 40,
                            width: 40,
                            cls:'cursor:pointer',
                            html: '<img src="resources/icons/wired-gradient-736-funnel-tools-utensils-hover-pinch.gif" style="width:34px;height:34px;cursor:pointer" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                swalFireUpgradePro("Advance Filter");
                            }
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
                                        id: 'btnFloatPanel_SubscriberListBack',
                                        height: 30,
                                        width: 35,
                                        margin: '10 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                           // FloatPanel_SubscriberListHide();
                                          isFloatPanel_SubscriberListOpen = 'N';

                                           _FloatPanel_SubscriberList.hide(Ext.fx.Animation({
                                            type: 'popOut',
                                            //direction: 'left',
                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                            duration: 250

                                        }));
                                        document.getElementById("input-SubscriberListSearchText").value=" ";
                                            FloatPanel_SubscriberMenuHide();
                                           

                                        }
                                    },
                                       {
                                           xtype: 'container',
                                           width: 15,
                                           height: 30,
                                       },
                                              {
                                                  xtype: 'container',
                                                  //   margin: '0 0 0 5',
                                                  hidden: true,
                                                  //style: 'background-color: white;',
                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                  height: 25,
                                                  width: 70,
                                                  // margin: '70 0 0 0',
                                                  id: 'containerFloatPanel_SubscriberListHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_SubscriberListHaiUser',
                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          //   margin: '0 0 0 5',
                                                          hidden: true,
                                                          style: 'background-color: transparent;',

                                                          height: 25,
                                                          width: 70,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_SubscriberListeWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_SubscriberListeWallet',
                                                                   margin: '4 0 0 -15',
                                                                   height: 30,
                                                                   width: 35,
                                                                   // iconCls: 'list',
                                                                   html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                   ui: 'plain',
                                                                   handler: function () {
                                                                       DrawerMenuShow();

                                                                   }
                                                               },
                                                               {
                                                                   margin: '7 0 0 2',
                                                                   html: '<font size=2 color=white><b>RM00.00</b></font>'
                                                               }
                                                          ]
                                                      },

                                                  ]
                                              },
                                           {
                                               xtype: 'container',
                                               margin: '0 0 0 -5',
                                               hidden: true,
                                               //style: 'background-color: white;',
                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                               height: 40,
                                               width: 40,
                                               // margin: '70 0 0 0',
                                               id: 'containerFloatPanel_SubscriberListPictureUser',
                                               layout: {

                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center'
                                               },
                                               items: [
                                                   {
                                                       xtype: 'button',
                                                       height: 40,
                                                       width: 40,
                                                       margin: '0 0 0 -11',
                                                       id: 'btnFloatPanel_SubscriberListInfo',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                           //  setupMovementMap(2);





                                                           //Ext.getCmp('mainView').setActiveItem(16);
                                                           //loadNotificationSummary();
                                                       }
                                                   },



                                               ]
                                           },










                       ]

            },




            {
                xtype: 'container',
                id: 'containerSubscriberListTitleOutter',
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
                          id: 'btnSubscriberListSearch',
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
                    //      id: 'MySubscriberListMasterHeader_MyLSubscriberListTypeSearchTxt',
                    //      margin: '0 0 0 -10',
                    //      width: '48%',
                    //      height: 20,
                    //     hidden:true,
                    //      html: '<input type="text" id="input-SubscriberListSearchText"  placeHolder="Search (Name/Mobile Phone No)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                    //  },
                     {
                        margin: '0 0 0 20',
                        //hidden:true,
                        id: 'htmlFloatPanel_AyohaStore_NewOrderList_recordFoundCount',
                        html: '<font size=3 color=black><b>Record Found:</b></font>'
                    },
                     {
                        margin: '0 0 0 0',
                        //hidden:true,
                        id: 'htmlFloatPanel_SubscriberList_Count',
                        html: '<font size=3 color=black><b>(0)</b></font>'
                    },
{
xtype:'spacer',
},
                     {
                        xtype: 'container',                                                          
                        height: 40,
                        hidden:true,
                        margin: '0 0 0 10',
                      width:120,
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '3 0 0 -55',
                                 html: '<div style="color:green;text-align: center;font-size:10px;width:100%;font-weight:bold">APPROVED</div>',
                             },
                              {
                                  margin: '0 0 0 -55',
                                  id: 'htmlApprovedMembershipCount',                                                                    
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">0</div>',
                               
                              },
                        ]
                    },
                 
                    {
                        xtype: 'container',
                        height: 40,
                        width:70,
                        hidden:true,
                        margin: '2 0 0 0',
                        //style: {
                        //    // background: '#D25959',
                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //    // border: '2px'
                        //},
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '0 0 0 -45',
                                 html: '<div style="color:red;text-align: center;font-size:10px;width:100%;font-weight:bold">REJECTED</div>',
                             },
                              {
                                  margin: '0 0 0 -45',
                                  id: 'htmlRejectedMembershipCount',
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">0</div>',
                                 // html: '<div  style="background-color: red;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                                //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                              },
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 40,
                        width:70,
                        hidden:true,
                        margin: '2 0 0 0',
                        //style: {
                        //    // background: '#D25959',
                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //    // border: '2px'
                        //},
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '0 0 0 0',
                                 html: '<div style="color:grey;text-align: center;font-size:10px;width:100%;font-weight:bold">EXPIRED</div>',
                             },
                              {
                                  margin: '0 0 0 0',
                                  id: 'htmlExpiredMembershipCount',
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',
                                  //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                 // html: '<div  style="background-color: grey;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                              },
                        ]
                    },

                    {
                        xtype: 'container',
                        height: 40,
                        margin: '2 0 0 10',
                      width:160,
                      hidden:true,
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '0 0 0 0',
                                 html: '<div style="color:orange;text-align: center;font-size:10px;width:100%;font-weight:bold">PENDING APPROVAL</div>',
                             },
                              {
                                  margin: '0 0 0 0',
                                  id: 'htmlRequestApprovalMembershipCount',
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">0</div>',
                                //  html: '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div class="blink_me" style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                              },
                        ]
                    },
                      {
                          xtype: 'button',
                          id: 'btnSubscriberListFilter',
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
                             //   hidden: true,
                                id:'panelHeaderSubscriberListListID',
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial;padding:0px 0px"><b>Members Name / Mobile Phone No</b></div ><div style="float:left;width:13%;"><b>Membership Card</b></div><div style="float:left;width:15%;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;"><b>Membership Date</b></div><div style="float:left;width:12.2%;"><b>Membership End Date</b></div><div style="float:left;width:10.5%;"><b>Renewal Fee</b></div><div style="float:left;width:9%;"><b>Membership Status</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:14%;font-family: Arial;padding:0px 0px"><b>Members Name/<br>Mobile Phone No</b></div ><div style="float:left;width:11%;margin:0px 0px 0px 0px"><b>Membership Card</b></div><div style="float:left;width:12.2%;margin:0px 0px 0px 0px"><b>Membership Request<br>Date</b></div><div style="float:left;width:12.2%;margin:0px 0px 0px 0px"><b>Membership Approval<br>Date</b></div><div style="float:left;width:11.8%;margin:0px 0px 0px 0px"><b>Membership End<br>Date</b></div><div style="float:left;width:10.2%;margin:0px 0px 0px 0px"><b>Renewal Fee</b></div><div style="float:left;width:11.6%;margin:0px 0px 0px 0px"><b>Membership Card<br>Payment Method</b></div><div style="float:left;width:5%;margin:0px 0px 0px 0px"><b>Membership Status</b></div></div></div></div>'

  
                                        
                                    }
                                ]
                            },
                      
                              {
                                 // height: 639,
                                  width: '100%',
                                  height: '90%',
                                  style: 'background-color:transparent',
                                  id: 'containerSubscriberListList',
                                //  hidden:true,
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
                                         hidden:true,
                                          width: '100%',
                                          store: _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore,
                                          //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                          id: 'FloatPanel_SubscriberList_SubscriberListID',                                         
                                          // grouped: true,
                                          mode: 'SINGLE',
                                          //scrollable: {
                                          //    direction: 'vertical',
                                          //    indicators: {
                                          //        y: {
                                          //            autoHide: true
                                          //        },
                                          //        x: {
                                          //            autoHide: true
                                          //        }
                                          //    }
                                          //},

                                          scrollable: {
                                              direction: 'vertical',
                                             // directionLock: true,
                                              indicators: false,
                                             // bounces: false,
                                             // outOfBoundRestrictFactor: 0,
                                              //threshold: 20,
                                              scroller: {
                                                  listeners: {
                                                      scroll: function (scroller, x, y, eOpts) {
                                                         //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                                                          if (y < -123) {
                                                            rn=0;
                                                            MasterMembershipsLoadByEnterpriseAccNoStore();
                                                              //// console.log('sampai scrollable')
                                                              //scroller.scrollTo({
                                                              //    x: 0,
                                                              //    y: 0
                                                              //});
                                                              //return
                                                          }
                                                      },
                                                      //scrollend: function (scroller, x, y, eOpts) {
                                                      //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                                                      //    //if (y <= 0) {
                                                      //    //    console.log('sampai')
                                                      //    //    scroller.scrollTo({
                                                      //    //        x: 0,
                                                      //    //        y: 0
                                                      //    //    });
                                                      //    //}


                                                      //}
                                                  }
                                              }
                                          },
                                         // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                          style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                          disableSelection: true,
                                        

                                              itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                            
                                               
                                               
                                               
                                              // '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="width:1%;background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;">{ModifiedRowNumber}).</th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:5%;"><img src="{Photo}" alt="Image" style="width: 110px; height: 120px; margin:7px 0px 0px 0px;"></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 0px;text-align:left;vertical-align:top;word-break:normal;width:66%;"><div style="background-color: white; color: black;text-align: left;margin: 2px 0px 0px 0px;font-family:Arial, sans-serif;font-size:13px;font-weight:bold;width:100%">{ModifiedAccountName}</div><br><div style="background-color: white; color: black;text-align: left;margin: -27px 0px 0px 0px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;width:100%">{MembershipNo}</div><br><div style="background-color: white; color: black;text-align: left;margin: -21px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Membership Date:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CreatedDate}</div><br><div style="background-color: white; black: white;text-align: left;margin: -20px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Subscribed Membership Card:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CardCount}</div><br><div style="background-color: white; color: black;text-align: left;margin: -20px 0px 0px 3px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;width:100%">Latest Activity:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 3px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{Latest_ActivityDate}</div><br><div style="background-color: white; color: black;text-align: right;margin: -100px 0px 0px -23px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;width:100%"><button OnClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID})" class="buttonMediaSocial" style="margin:0px 20px 0px 0px;">{ModifiedMembershipApprovalStatusRound}</button>{ModifiedMembershipApprovalStatus}</div></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;width:28%;"><button  onClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID});" class="buttonAyohaNotificationMgmt" style="margin:0px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px -17px 0px;" alt="Company Name"></button><br><font size=2>View Detail</font></th></tr></thead></table>' +

                                             // '<div style="background-color: transparent;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;"/></span></div ><div style="float:left;width:16.3%;font-family: Arial; text-transform:uppercase;color:black;font-size:12px;font-weight:bold">{ModifiedAccountName}<br>{MembershipNo}</div ><div style="float:left;width:16%;color:#71797E;"><img src="{ModifiedMembershipCardBg}" alt="Image" style="width: 45px; height: 30px; margin:0px 0px 0px 0px;border-radius:5px;"/></div><div style="float:left;width:12%;color:#71797E;"><b>Membership Date</b></div><div style="float:left;width:12.2%;color:#71797E;"><b>Membership End Date</b></div><div style="float:left;width:13%;color:#71797E;"><b>Latest Activity</b></div><div style="float:left;width:10%;color:#71797E;"><b>Membership Status</b></div></div></div></div>'+
                                            
                                          // '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID});" style="float:left;width:18.4%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u><br><div style="font-size:10px;color:#71797E;margin:10px 0px 0px 0px"><i>Latest Activity:-</i></div><br><div style="font-size:10px;margin:-18px 0px 0px 0px;color:#71797E"><i>{ModifiedMembershipLatestActivity}</i></div></div ><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipCardBg}</div><div style="float:left;width:15.5%;color:#71797E;">{ModifiedMembershipCardName}</div><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+
                                          
                                           '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID});" style="float:left;width:14.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u><br><div style="font-size:10px;color:#71797E;margin:10px 0px 0px 0px"><i>Latest Activity:-</i></div><br><div style="font-size:10px;margin:-18px 0px 0px 0px;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;width:80%"><i>{ModifiedMembershipLatestActivity}</i></div></div ><div style="float:left;width:11%;color:#71797E;">{ModifiedMembershipCardBg}<br><div style="font-size:12px;margin:-4px 0px 0px 12px;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;width:80%">{ModifiedMembershipCardName}</div></div><div style="float:left;width:12.4%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">{CreatedDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:11.6%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:12.1%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">{ModifiedMembershipFeePaymentMethod}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+


                                                  '</div>',
                                         height: '100%',
                                          listeners: {
                                              itemsingletap: function (list, idx, target, records, evt) {
                                                  //LoadingPanelShow();
                                                  //ID = records.get('ID');
                                                  //EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                  //localStorage.setItem('EnterpriseAccNo', records.get('EnterpriseAccNo'));

                                                  //loadEnterpriseDetails(records.get('ID'), records.get('EnterpriseAccNo'));


                                                  //var SubcriberAccNo = records.get('SubcriberAccNo');
                                                  //var LoyaltyCardType = records.get('LoyaltyCardType');

                                                  //if (LoyaltyCardType == "Point") {
                                                  //    FloatLoyaltyCardPointShow();
                                                  //    loadlistsummaryreceipt('NewReceipt');
                                                  //    Ext.getCmp('tabpanelFloatLoyaltyCardPoint').getTabBar().hide();
                                                  //}
                                                  //if (LoyaltyCardType == "Stamp") {
                                                  //    //  Subscriber_FloatLoyaltyCardStampShow(SubcriberAccNo);
                                                  //    FloatPanel_SubscriberMasterShow();
                                                  //}




                                              },
                                              deselect: function (list, records) {

                                              }
                                          },

                                      },
                                      {
                                        xtype: 'list',
                                        //  flex: 1,
                                       hidden:true,
                                        width: '100%',
                                        store: _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore,
                                        //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                        id: 'FloatPanel_SubscriberList_SubscriberListID_FromMembershipsStatus',                                         
                                        // grouped: true,
                                        mode: 'SINGLE',
                                        //scrollable: {
                                        //    direction: 'vertical',
                                        //    indicators: {
                                        //        y: {
                                        //            autoHide: true
                                        //        },
                                        //        x: {
                                        //            autoHide: true
                                        //        }
                                        //    }
                                        //},

                                        scrollable: {
                                            direction: 'vertical',
                                           // directionLock: true,
                                            indicators: false,
                                           // bounces: false,
                                           // outOfBoundRestrictFactor: 0,
                                            //threshold: 20,
                                            scroller: {
                                                listeners: {
                                                    scroll: function (scroller, x, y, eOpts) {
                                                       //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                                                        if (y < -123) {
                                                          rn=0;
                                                          MasterMembershipsLoadByEnterpriseAccNoStore();
                                                            //// console.log('sampai scrollable')
                                                            //scroller.scrollTo({
                                                            //    x: 0,
                                                            //    y: 0
                                                            //});
                                                            //return
                                                        }
                                                    },
                                                    //scrollend: function (scroller, x, y, eOpts) {
                                                    //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                                                    //    //if (y <= 0) {
                                                    //    //    console.log('sampai')
                                                    //    //    scroller.scrollTo({
                                                    //    //        x: 0,
                                                    //    //        y: 0
                                                    //    //    });
                                                    //    //}


                                                    //}
                                                }
                                            }
                                        },
                                       // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                        disableSelection: true,
                                      

                                            itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                          
                                             
                                             
                                                             
                                         
                                         
                                       //  '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList({ID});" style="float:left;width:12.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u><br><div style="font-size:10px;color:#71797E;margin:10px 0px 0px 0px"><i>Latest Activity:-</i></div><br><div style="font-size:10px;margin:-18px 0px 0px 0px;color:#71797E"><i>{ModifiedMembershipLatestActivity}</i></div></div ><div style="float:left;width:11%;color:#71797E;">{ModifiedMembershipCardBg}</div><div style="float:left;width:11%;color:#71797E;">{ModifiedMembershipCardName}</div><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+
                                        //latest 13/4/2025 '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList({ID});" style="float:left;width:14.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u><br><div style="font-size:10px;color:#71797E;margin:10px 0px 0px 0px"><i>Latest Activity:-</i></div><br><div style="font-size:10px;margin:-18px 0px 0px 0px;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;width:80%"><i>{ModifiedMembershipLatestActivity}</i></div></div ><div style="float:left;width:11%;color:#71797E;">{ModifiedMembershipCardBg}</div><div style="float:left;width:12.2%;color:#71797E;">{ModifiedMembershipCardName}</div><div style="float:left;width:12.4%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">{CreatedDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:12.6%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:9.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+
                                         '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList({ID});" style="float:left;width:14.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u><br><div style="font-size:10px;color:#71797E;margin:10px 0px 0px 0px"><i>Latest Activity:-</i></div><br><div style="font-size:10px;margin:-18px 0px 0px 0px;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;width:80%"><i>{ModifiedMembershipLatestActivity}</i></div></div ><div style="float:left;width:11%;color:#71797E;">{ModifiedMembershipCardBg}<br><div style="font-size:12px;margin:-4px 0px 0px 12px;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;width:80%">{ModifiedMembershipCardName}</div></div><div style="float:left;width:12.4%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">{CreatedDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:11.6%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:12.1%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">{ModifiedMembershipFeePaymentMethod}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+



                                                '</div>',
                                       height: '100%',
                                        listeners: {
                                            itemsingletap: function (list, idx, target, records, evt) {
                                                //LoadingPanelShow();
                                                //ID = records.get('ID');
                                                //EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                //localStorage.setItem('EnterpriseAccNo', records.get('EnterpriseAccNo'));

                                                //loadEnterpriseDetails(records.get('ID'), records.get('EnterpriseAccNo'));


                                                //var SubcriberAccNo = records.get('SubcriberAccNo');
                                                //var LoyaltyCardType = records.get('LoyaltyCardType');

                                                //if (LoyaltyCardType == "Point") {
                                                //    FloatLoyaltyCardPointShow();
                                                //    loadlistsummaryreceipt('NewReceipt');
                                                //    Ext.getCmp('tabpanelFloatLoyaltyCardPoint').getTabBar().hide();
                                                //}
                                                //if (LoyaltyCardType == "Stamp") {
                                                //    //  Subscriber_FloatLoyaltyCardStampShow(SubcriberAccNo);
                                                //    FloatPanel_SubscriberMasterShow();
                                                //}




                                            },
                                            deselect: function (list, records) {

                                            }
                                        },

                                    },
                                      {
                                          width: '100%',
                                          height: '10%',
                                          style: 'background-color:white',
                                         
                                          xtype: 'container',
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
                                      }
                                      

                                  ]

                              },

                              



                              
                              





                        ]
                    },









                    



















                ]
            },












        ]





    });
    return _FloatPanel_SubscriberList;



}






var globalFloatPanel_SubscriberListShowSources;

function FloatPanel_SubscriberListShow() {

    Ext.Viewport.remove(_FloatPanel_SubscriberList);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberList());
    this.overlay.show();
    isFloatPanel_SubscriberListOpen = 'Y';
    globalFloatPanel_SubscriberListShowSources="FloatPanel_SubscriberListShow";
    document.getElementById("input-SubscriberListSearchText").addEventListener("keyup", SearchSubscriberListOnKeyUpEvent);
   // FloatPanel_SubscriberList_AddCardShow();
    //FloatPanel_SubscriberMenuShow();
    MasterMembershipsLoadByEnterpriseAccNoStore();
    FloatPanel_DrawerMenu_MainHide();
  //  FloatPanel_SubscriberList_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
    Ext.getCmp('FloatPanel_SubscriberList_SubscriberListID').setHidden(false);    
    document.getElementById("input-SubscriberListSearchText").value="";
    Ext.getCmp('htmlFloatPanel_SubscriberList_TitleHeaderTxt').setHtml('<font size=4 color=black><b>All Members List</b></font>');

  
}





var globalFloatPanel_SubscriberList_MembershipApprovalStatus;
function FloatPanel_SubscriberListShow_FromMembershipsStatus(MembershipApprovalStatus,rowCount) {

    Ext.Viewport.remove(_FloatPanel_SubscriberList);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberList());
    this.overlay.show();
    isFloatPanel_SubscriberListOpen = 'Y';
    globalFloatPanel_SubscriberListShowSources="FloatPanel_SubscriberListShow_FromMembershipsStatus";
    globalFloatPanel_SubscriberList_MembershipApprovalStatus=MembershipApprovalStatus;
    document.getElementById("input-SubscriberListSearchText").addEventListener("keyup", SearchSubscriberListOnKeyUpEvent_ApprovalStatus);
   // FloatPanel_SubscriberList_AddCardShow();
    //FloatPanel_SubscriberMenuShow();
   // MasterMembershipsLoadByEnterpriseAccNoStore();
if(MembershipApprovalStatus=="New"){
    MembershipApprovalStatus="REQUEST";
}
//alert(MembershipApprovalStatus)
Ext.getCmp('htmlFloatPanel_SubscriberList_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Members List : MEMBERSHIP STATUS - ( <u>'+ MembershipApprovalStatus.toUpperCase() + ' </u>)</b></font>');
    MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore(MembershipApprovalStatus,rowCount);
    FloatPanel_DrawerMenu_MainHide();
  //  FloatPanel_SubscriberList_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
    Ext.getCmp('FloatPanel_SubscriberList_SubscriberListID_FromMembershipsStatus').setHidden(false);    
    document.getElementById("input-SubscriberListSearchText").value="";
}



function FloatPanel_SubscriberListShow_FromMembershipsApprovalList(MembershipApprovalStatus) {

    Ext.Viewport.remove(_FloatPanel_SubscriberList);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberList());
    this.overlay.show();
    isFloatPanel_SubscriberListOpen = 'Y';
    globalFloatPanel_SubscriberListShowSources="FloatPanel_SubscriberListShow_FromMembershipsStatus";
    globalFloatPanel_SubscriberList_MembershipApprovalStatus=MembershipApprovalStatus;
    document.getElementById("input-SubscriberListSearchText").addEventListener("keyup", SearchSubscriberListOnKeyUpEvent_ApprovalStatus);
   // FloatPanel_SubscriberList_AddCardShow();
    //FloatPanel_SubscriberMenuShow();
   // MasterMembershipsLoadByEnterpriseAccNoStore();
if(MembershipApprovalStatus=="New"){
    MembershipApprovalStatus="REQUEST";
}

Ext.getCmp('htmlFloatPanel_SubscriberList_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Members List : MEMBERSHIP STATUS - ( <u>'+ MembershipApprovalStatus.toUpperCase() + ' </u>)</b></font>');
    MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore_FromMembershipApprovalList(MembershipApprovalStatus);
    FloatPanel_DrawerMenu_MainHide();
  //  FloatPanel_SubscriberList_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
    Ext.getCmp('FloatPanel_SubscriberList_SubscriberListID_FromMembershipsStatus').setHidden(false);    
    document.getElementById("input-SubscriberListSearchText").value="";
}




function FloatPanel_SubscriberListMemberShow_Dashboard(SubscriberAccNo) {

    // Ext.Viewport.remove(_FloatPanel_SubscriberList);
    // this.overlay = Ext.Viewport.add(FloatPanel_SubscriberList());
    // this.overlay.show();
    // isFloatPanel_SubscriberListOpen = 'Y';
    // document.getElementById("input-SubscriberListSearchText").addEventListener("keyup", SearchSubscriberListOnKeyUpEvent);
  
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
   
    MasterMembershipsLoadBySubscriberAccNo_Dashboard(SubscriberAccNo);
    FloatPanel_DrawerMenu_MainHide();
   // document.getElementById("input-SubscriberListSearchText").value=" ";
   
   
   
   
   
   
    //  FloatPanel_SubscriberList_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');

}


function FloatPanel_SubscriberListMemberShow(SubscriberAccNo,ID) {
return;
    Ext.Viewport.remove(_FloatPanel_SubscriberList);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberList());
    this.overlay.show();
    isFloatPanel_SubscriberListOpen = 'Y';
    document.getElementById("input-SubscriberListSearchText").addEventListener("keyup", SearchSubscriberListOnKeyUpEvent);
    MasterMembershipsLoadBySubscriberAccNo(SubscriberAccNo,ID);
    FloatPanel_DrawerMenu_MainHide();
    document.getElementById("input-SubscriberListSearchText").value=" ";
    //  FloatPanel_SubscriberList_AdjustHeight();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');

}

function FloatPanel_SubscriberList_AdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    document.getElementById("input-SubscriberListSearchText").value=" ";

    //var newHeights = x - 232;
    var newHeights = x - 500;
    console.log(newHeights)

    //  480px 
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_SubscriberListID').setHeight(x + 5);
    // Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList').setHeight(x);
    // Ext.getCmp('containerFloatPanel_RewardStore_List').setHeight(x - 180);




}



function FloatPanel_SubscriberListHide() {
    // FloatPanel_SubscriberList_AddCardHide();
   // FloatPanel_SubscriberMenuHide();
   if(isFloatPanel_SubscriberListOpen == 'Y')
   {
    _FloatPanel_SubscriberList.hide(); isFloatPanel_SubscriberListOpen = 'N';
   }
   
}






var countEnterpriseLoanFirst = 0
var countEnterpriseSubscribedLoadFirst = 0
//var _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore;
function MasterMembershipsLoadByEnterpriseAccNoStore() {

  


    var task = Ext.create('Ext.util.DelayedTask', function () {
       
       
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.clearFilter();
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MasterMembershipsLoadByEnterpriseAccNo');
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.load();

        var count = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
     
        countEnterpriseSubscribedLoadFirst = globalDashboard_TotalMember;
        Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + countEnterpriseSubscribedLoadFirst + '</div>');
        Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
      //  MasterMembershipsDashboardApprovalStatusCountStore();

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);











}


function MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore(MembershipApprovalStatus,rowCount) {

  

    _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('MembershipApprovalStatus', MembershipApprovalStatus);
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MembershipsLoadByEnterpriseAccNoAndApprovalStatus');
       
      
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.load();
   
   
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
       
      

        var count = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount();
   //alert(count)
        countEnterpriseSubscribedLoadFirst = rowCount;
        Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + countEnterpriseSubscribedLoadFirst + '</div>');
        Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.clearFilter();
        Ext.Viewport.setMasked(false);
      

    });
    task.delay(500);





   
    // var task = Ext.create('Ext.util.DelayedTask', function () {
       
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.clearFilter();
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('MembershipApprovalStatus', MembershipApprovalStatus);
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MembershipsLoadByEnterpriseAccNoAndApprovalStatus');
       
      
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.load();

    //     var count = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount();
    //  // alert(alert)
    //     countEnterpriseSubscribedLoadFirst = count;
    //     Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount() + '</div>');
    //     Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount() + ')</b></font>');
      
    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(1000);






}




function MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore_FromMembershipApprovalList(MembershipApprovalStatus) {

  

    _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('MembershipApprovalStatus', MembershipApprovalStatus);
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MembershipsLoadByEnterpriseAccNoAndApprovalStatus');
       
      
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.load();
   
   
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
       
      

        var count = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount();
   //alert(count)
        countEnterpriseSubscribedLoadFirst = count;
        Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + countEnterpriseSubscribedLoadFirst + '</div>');
        Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.clearFilter();
        Ext.Viewport.setMasked(false);
      

    });
    task.delay(500);





   
    // var task = Ext.create('Ext.util.DelayedTask', function () {
       
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.clearFilter();
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setExtraParam('MembershipApprovalStatus', MembershipApprovalStatus);
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MembershipsLoadByEnterpriseAccNoAndApprovalStatus');
       
      
    //     _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.load();

    //     var count = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount();
    //  // alert(alert)
    //     countEnterpriseSubscribedLoadFirst = count;
    //     Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount() + '</div>');
    //     Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount() + ')</b></font>');
      
    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(1000);






}






function MasterMembershipsLoadBySubscriberAccNo(SubscriberAccNo,ID) {



    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MasterMembershipsLoadBySubscriberAccNo');
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
        //var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

        // _DataStore_AyohaUserDashBoardNearestRedeemItemListStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

        //var count = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
        //countEnterpriseSubscribedLoadFirst = count;
        //Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + countEnterpriseSubscribedLoadFirst + '</div>');

        MasterMembershipsDashboardApprovalStatusCountStore();
        FloatPanel_AyohaNotification_UpdateIsReadNotification(ID);
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);
}

function MasterMembershipsLoadBySubscriberAccNo_Dashboard(SubscriberAccNo) {


//alert(SubscriberAccNo)

    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MasterMembershipsLoadBySubscriberAccNo');
    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

       var modelRecord = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getAt(0);
       var IDS =parseInt(modelRecord.get('ID'));

       
        FloatPanel_SubscriberList_ExpandMembershipSummary(IDS);




        // var SubscriberAccNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var MembershipCardCode = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var CardCount = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var EnterpriseAccNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var EnterpriseHQAccNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var MembershipApprovalStatus = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
    
        // var PhoneNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var Email = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var CreatedDate = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var MembershipByMethod = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
    
        // var Photo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var ModifiedAccountName = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var MembershipNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var PlayerID = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var Gender = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var DOB = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
        // var Latest_ActivityDate = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('SubscriberAccNo', SubscriberAccNo, 0, false, false, true);
       
    
    
    
        // var MembershipCardCodes = MembershipCardCode.get('MembershipCardCode');
        // var SubscriberAccNos = SubscriberAccNo.get('SubscriberAccNo');
        // var CardCounts = parseInt(CardCount.get('CardCount'));
        // var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
        // var EnterpriseHQAccNos = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
        // var MembershipApprovalStatuss = MembershipApprovalStatus.get('MembershipApprovalStatus');
        // var MembershipByMethods = MembershipByMethod.get('MembershipByMethod');
    
    
        // var Photos = Photo.get('Photo');
        // var ModifiedAccountNames = ModifiedAccountName.get('ModifiedAccountName');
        // var MembershipNos = MembershipNo.get('MembershipNo');
    
        // var PhoneNos = PhoneNo.get('PhoneNo');
        // var Emails = Email.get('Email');
        // var MembershipDate = CreatedDate.get('CreatedDate');
        // var PlayerIDs = PlayerID.get('PlayerID');
        // var Genders = Gender.get('Gender');
        // var DOBs = DOB.get('DOB');
        // var Latest_ActivityDates = Latest_ActivityDate.get('Latest_ActivityDate');
        
    
    
        // localStorage.setItem("PhoneNo",PhoneNos);
        // localStorage.setItem("Email", Emails);
        // localStorage.setItem("CreatedDate", MembershipDate);
        // localStorage.setItem("MembershipByMethod", MembershipByMethods);
    
        // localStorage.setItem("AyohaUserPicProfile", Photos);
        // localStorage.setItem("AyohaUserAccountNames", ModifiedAccountNames);
        // localStorage.setItem("AyohaUserMembershipNo", MembershipNos);
        // localStorage.setItem("AyohaUserPlayerID", PlayerIDs);
    
       
        // FloatPanel_MembershipDetailsPageShow(SubscriberAccNos,Photos,ModifiedAccountNames,PhoneNos
        //     ,Emails,DOBs,Genders,CardCounts,MembershipApprovalStatuss,MembershipByMethods,MembershipDate
        //     ,Latest_ActivityDates);




        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}























function MasterMembershipsDashboardApprovalStatusCountStore() {



    _DataStore_MasterMembershipsDashboardApprovalStatusCountStore.getProxy().setExtraParam('EnterpriseHQAccNo', GetEnterpriseAccNo());
    _DataStore_MasterMembershipsDashboardApprovalStatusCountStore.getProxy().setUrl(GetAPIurl() + '/MasterMemberships/MasterMembershipsDashboardApprovalStatusCount');
    _DataStore_MasterMembershipsDashboardApprovalStatusCountStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
        //var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

        // _DataStore_AyohaUserDashBoardNearestRedeemItemListStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');
      
        var count = _DataStore_MasterMembershipsDashboardApprovalStatusCountStore.getCount();
        var modelRecorded = _DataStore_MasterMembershipsDashboardApprovalStatusCountStore.getAt(0);
        var Request =parseInt(modelRecorded.get('Request'));
        var Rejected = parseInt(modelRecorded.get('Rejected'));
        var Expired = parseInt(modelRecorded.get('Expired'));
        var Approved = parseInt(modelRecorded.get('Approved'));


        Ext.getCmp('htmlExpiredMembershipCount').setHtml('<div  style="color:grey;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + Expired + '</div>');
        Ext.getCmp('htmlRejectedMembershipCount').setHtml('<div  style="color:red;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">' + Rejected + '</div>');
        Ext.getCmp('htmlRequestApprovalMembershipCount').setHtml('<div  style="color:orange;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">' + Request + '</div>');
        Ext.getCmp('htmlApprovedMembershipCount').setHtml('<div  style="color:green;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">' + Approved + '</div>');


        countEnterpriseSubscribedLoadFirst = Request + Rejected + Expired + Approved;
        Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:green;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + countEnterpriseSubscribedLoadFirst + '</div>');

        Ext.Viewport.setMasked(false);

    });
    task.delay(500);




    //Ext.getStore('MasterMembershipsDashboardApprovalStatusCountStore').getProxy().setExtraParams({
    //    EnterpriseHQAccNo: GetEnterpriseAccNo()
    //});
    //Ext.StoreMgr.get('MasterMembershipsDashboardApprovalStatusCountStore').load();

    //var task = Ext.create('Ext.util.DelayedTask', function () {

    //    Ext.getStore('MasterMembershipsDashboardApprovalStatusCountStore').getProxy().setExtraParams({
    //        EnterpriseHQAccNo: GetEnterpriseAccNo()
    //    });
    //    Ext.StoreMgr.get('MasterMembershipsDashboardApprovalStatusCountStore').load();
    //    var myStore = Ext.getStore('MasterMembershipsDashboardApprovalStatusCountStore');
    //    var modelRecorded = myStore.getAt(0);
    //    var Request = modelRecorded.get('Request');
    //    var Rejected = modelRecorded.get('Rejected');
    //    var Expired = modelRecorded.get('Expired');
    //    var Approved = modelRecorded.get('Approved');

        
    //    Ext.getCmp('htmlExpiredMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + Expired + '</div>');
    //    Ext.getCmp('htmlRejectedMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">' + Rejected + '</div>');
    //    Ext.getCmp('htmlRequestApprovalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">' + Request + '</div>');
    //    Ext.getCmp('htmlApprovedMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">' + Approved + '</div>');

    //    Ext.Viewport.setMasked(false);
    //    // LoadingPanelHide();









    //});
    //task.delay(500);

}




function SearchSubscriberListOnKeyUpEvent() {






    console.log('SearchEnterpriseOnKeyUp');
    var countSubscriber = 0;


    _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-SubscriberListSearchText').value;
    


    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.filterBy(function (record) {
          if (thisRegEx.test(record.get('SearchCol'))) {
               // if (thisRegEx.test(record.get('MembershipApprovalStatus'))) {
                console.log('ada0');

              countSubscriber = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
              Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countSubscriber = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
       Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
     //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
     //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}





function SearchSubscriberListOnKeyUpEvent_ApprovalStatus() {






    console.log('SearchSubscriberListOnKeyUpEvent_ApprovalStatus');
    var countSubscriber = 0;


    _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.clearFilter();

    var queryString = document.getElementById('input-SubscriberListSearchText').value;
    


    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.filterBy(function (record) {
          if (thisRegEx.test(record.get('SearchCol'))) {
               // if (thisRegEx.test(record.get('MembershipApprovalStatus'))) {
                console.log('ada0');

              countSubscriber = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount();
              Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countSubscriber = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.getCount();
       Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
     //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
     //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}








function FloatPanel_SubscriberList_ExpandMembershipSummary_ApprovalList(ID) {
    if(isLoadingPanelOpen=='N'){
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
    }
 //  alert(ID)

    var SubscriberAccNo = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipCardCode = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var CardCount = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseHQAccNo = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipApprovalStatus = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);

    var PhoneNo = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var Email = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var CreatedDate = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipByMethod = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);

    var Photo = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var ModifiedAccountName = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipNo = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var PlayerID = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var Gender = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var DOB = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
    var Latest_ActivityDate = _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
   
var LastloginDate= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);

var StreetAddress= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
var Town= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
var PostCode= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
var Country= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
var Profession= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
var Hobby= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);
var States= _DataStore_MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore.findRecord('ID', ID, 0, false, false, true);


    var MembershipCardCodes = MembershipCardCode.get('MembershipCardCode');
    var SubscriberAccNos = SubscriberAccNo.get('SubscriberAccNo');
    var CardCounts = parseInt(CardCount.get('CardCount'));
    var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
    var EnterpriseHQAccNos = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    var MembershipApprovalStatuss = MembershipApprovalStatus.get('MembershipApprovalStatus');
    var MembershipByMethods = MembershipByMethod.get('MembershipByMethod');





    var Photos = Photo.get('Photo');
    var ModifiedAccountNames = ModifiedAccountName.get('ModifiedAccountName');
    var MembershipNos = MembershipNo.get('MembershipNo');

    var PhoneNos = PhoneNo.get('PhoneNo');
    var Emails = Email.get('Email');
    var MembershipDate = CreatedDate.get('CreatedDate');
    var PlayerIDs = PlayerID.get('PlayerID');
    var Genders = Gender.get('Gender');
    var DOBs = DOB.get('DOB');
    var Latest_ActivityDates = Latest_ActivityDate.get('Latest_ActivityDate');
    var LastloginDates = LastloginDate.get('LastloginDate');



    var StreetAddresss = StreetAddress.get('StreetAddress');
    var Towns = Town.get('Town');
    var PostCodes = parseInt(PostCode.get('PostCode'));
    var Countrys = Country.get('Country');
    var Professions = Profession.get('Profession');
    var Hobbys = Hobby.get('Hobby');
    var Statess = States.get('States');

    localStorage.setItem("PhoneNo",PhoneNos);
    localStorage.setItem("Email", Emails);
    localStorage.setItem("CreatedDate", MembershipDate);
    localStorage.setItem("MembershipByMethod", MembershipByMethods);

    localStorage.setItem("AyohaUserPicProfile", Photos);
    localStorage.setItem("AyohaUserAccountNames", ModifiedAccountNames);
    localStorage.setItem("AyohaUserMembershipNo", MembershipNos);
    localStorage.setItem("AyohaUserPlayerID", PlayerIDs);
//alert(Latest_ActivityDates)
 
    FloatPanel_MembershipDetailsPageShow(SubscriberAccNos,Photos,ModifiedAccountNames,PhoneNos
        ,Emails,DOBs,Genders,CardCounts,MembershipApprovalStatuss,MembershipByMethods,MembershipDate
        ,Latest_ActivityDates,LastloginDates,StreetAddresss,Towns,PostCodes,Countrys,Professions,Hobbys,Statess);

    return;

    if (CardCounts <= 1) {
  
        FloatPanel_MembershipDetailsShow_MyMembershipCard(EnterpriseHQAccNos, EnterpriseAccNos, MembershipCardCodes, SubscriberAccNos, ID, MembershipApprovalStatuss);
    } else {
        FloatPanel_MembershipCardListShow(SubscriberAccNos);
    }
    
   
}









function FloatPanel_SubscriberList_ExpandMembershipSummary(ID) {
    if(isLoadingPanelOpen=='N'){
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
    }


    var SubscriberAccNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipCardCode = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var CardCount = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseHQAccNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipApprovalStatus = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    var PhoneNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var Email = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var CreatedDate = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipByMethod = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    var Photo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var ModifiedAccountName = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipNo = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PlayerID = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var Gender = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var DOB = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var Latest_ActivityDate = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
   
var LastloginDate= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

var StreetAddress= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
var Town= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
var PostCode= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
var Country= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
var Profession= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
var Hobby= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
var States= _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);


    var MembershipCardCodes = MembershipCardCode.get('MembershipCardCode');
    var SubscriberAccNos = SubscriberAccNo.get('SubscriberAccNo');
    var CardCounts = parseInt(CardCount.get('CardCount'));
    var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
    var EnterpriseHQAccNos = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    var MembershipApprovalStatuss = MembershipApprovalStatus.get('MembershipApprovalStatus');
    var MembershipByMethods = MembershipByMethod.get('MembershipByMethod');





    var Photos = Photo.get('Photo');
    var ModifiedAccountNames = ModifiedAccountName.get('ModifiedAccountName');
    var MembershipNos = MembershipNo.get('MembershipNo');

    var PhoneNos = PhoneNo.get('PhoneNo');
    var Emails = Email.get('Email');
    var MembershipDate = CreatedDate.get('CreatedDate');
    var PlayerIDs = PlayerID.get('PlayerID');
    var Genders = Gender.get('Gender');
    var DOBs = DOB.get('DOB');
    var Latest_ActivityDates = Latest_ActivityDate.get('Latest_ActivityDate');
    var LastloginDates = LastloginDate.get('LastloginDate');



    var StreetAddresss = StreetAddress.get('StreetAddress');
    var Towns = Town.get('Town');
    var PostCodes = parseInt(PostCode.get('PostCode'));
    var Countrys = Country.get('Country');
    var Professions = Profession.get('Profession');
    var Hobbys = Hobby.get('Hobby');
    var Statess = States.get('States');

    localStorage.setItem("PhoneNo",PhoneNos);
    localStorage.setItem("Email", Emails);
    localStorage.setItem("CreatedDate", MembershipDate);
    localStorage.setItem("MembershipByMethod", MembershipByMethods);

    localStorage.setItem("AyohaUserPicProfile", Photos);
    localStorage.setItem("AyohaUserAccountNames", ModifiedAccountNames);
    localStorage.setItem("AyohaUserMembershipNo", MembershipNos);
    localStorage.setItem("AyohaUserPlayerID", PlayerIDs);
//alert(Latest_ActivityDates)
 
    FloatPanel_MembershipDetailsPageShow(SubscriberAccNos,Photos,ModifiedAccountNames,PhoneNos
        ,Emails,DOBs,Genders,CardCounts,MembershipApprovalStatuss,MembershipByMethods,MembershipDate
        ,Latest_ActivityDates,LastloginDates,StreetAddresss,Towns,PostCodes,Countrys,Professions,Hobbys,Statess);

    return;

    if (CardCounts <= 1) {
  
        FloatPanel_MembershipDetailsShow_MyMembershipCard(EnterpriseHQAccNos, EnterpriseAccNos, MembershipCardCodes, SubscriberAccNos, ID, MembershipApprovalStatuss);
    } else {
        FloatPanel_MembershipCardListShow(SubscriberAccNos);
    }
    
   
}




function FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(SubscriberAccNo,MembershipCardCode){
   

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {


            "SubscriberAccNo": SubscriberAccNo,
            "CampaignEnterpriseAccNo": GetEnterpriseAccNo(),
            "MembershipCardCode": MembershipCardCode
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Memberships/MembershipsLoadByMembershipApprovalDetail',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    if (data.total > 0) {

                       // alert(data.results[0].MembershipApprovalStatus)
                 
                    
                   
                        // = data.results[0].CampaignEnterpriseAccNo;
                        // = data.results[0].CampaignRewardType;
                        // = data.results[0].SubscriberAccNo;
                        // = data.results[0].MembershipDate;
                        // = data.results[0].MembershipByMethod;
                        // = data.results[0].MembrshipApprovalDate;
                        // = data.results[0].MembershipApprovalBy;
                        // = data.results[0].ReferalSubscriberAccNo;
                        // = data.results[0].MembershipFee;
                        // = data.results[0].MembershipLevel;
                        // = data.results[0].IsRequiredMembershipFee;
                        // = data.results[0].RowStatus;
                        // = data.results[0].MembershipNo;
                        // = data.results[0].MembershipApprovalStatus;
                        // = data.results[0].MembershipFeePaymentMethod;
                        // = data.results[0].MembershipPaymentLink;
                        // = data.results[0].MembershipPaymentPaidProof;
                        // = data.results[0].MembershipCardCode;
                        // = data.results[0].MembershipPaymentCode;
                        // = data.results[0].CreatedDate;
                        // = data.results[0].CreatedBy;
                        // = data.results[0].ModifiedDate;
                        // = data.results[0].ModifiedBy;
                        // = data.results[0].MembershipCardFeePaymentCycle;
                        // = data.results[0].StrExpiredDate;
                        // = data.results[0].isValidLifeTime;
                        // = data.results[0].CampaignEnterpriseHQAccNo;
                        // = data.results[0].MembershipRejectedDate;
                        // = data.results[0].MembershipCardName
                        // = data.results[0].ValidUntilDate
                        // = data.results[0].AccountName
                        // = data.results[0].PhoneNo
                        // = data.results[0].Email
                        // = data.results[0].Photo      
                        // alert(data.results[0].MembershipCardStatusRemarks)
                        // alert(data.results[0].MembershipFeePaymentChannel)
                       // ,PaymentMethod,,Remarks,PaymentDocumentUploadImage_ImageName,PaymentDocumentUploadImage


                       // LoadingCustomMsgHide();
                        FloatPanel_MembershipDetails_ApproveShow_FromSubscriberList(data.results[0].MembershipCardName,data.results[0].MembershipLevel,data.results[0].MembershipFee,data.results[0].MembershipCardFeePaymentCycle
                            ,data.results[0].ValidUntilDate,data.results[0].IsRequiredMembershipFee,data.results[0].Photo,data.results[0].AccountName,data.results[0].Email,data.results[0].PhoneNo,data.results[0].CreatedDate
                            ,data.results[0].MembershipByMethod,data.results[0].MembershipDate,data.results[0].MembershipApprovalBy,data.results[0].MembrshipApprovalDate,data.results[0].MembershipRejectedDate
                            ,data.results[0].MembershipCardBackgroundImg,data.results[0].MembershipCardBackgroundImgback,data.results[0].MembershipApprovalStatus,data.results[0].MembershipFeePaymentMethod
                            ,data.results[0].ReceivedAmount,data.results[0].Remarks,data.results[0].MembershipPaymentLink,data.results[0].MembershipPaymentPaidProof,data.results[0].MembershipCardCode,data.results[0].SubscriberAccNo
                            ,data.results[0].ID,data.results[0].MembershipPaymentCode,data.results[0].ModifiedDate,data.results[0].ModifiedBy,data.results[0].MembershipPaymentDate,data.results[0].CreatedDate
                            ,data.results[0].MembershipCardStatusRemarks,data.results[0].MembershipFeePaymentChannel);






                            // (MembershipCardName,MembershipCardLevel,MembershipCardFees,MembershipCardFeesPaymentCycle
                            //     ,MembershipCardExpiry,MembershipCardisRequiredApproval,AyohaUserPhoto,MemberName,MemberEmail,MemberPhoneNo,MemberRegistrationDate
                            //     ,MemberRegistrationMethod,Membershipdate,ApprovedBy,ApprovedDate,RejectedDate,MembershipCardBackgroundImg_front,MembershipCardBackgroundImg_back,MembershipApprovalStatus
                            //     ,PaymentMethod,ReceiveAmount,Remarks,PaymentDocumentUploadImage_ImageName,PaymentDocumentUploadImage,MembershipCardCode,SubscriberAccNo,ID)
                        Ext.Viewport.setMasked(false);

                    }
                    if (data.total <= 0) {
                        LoadingCustomMsgHide();
                        swalFireLoginFailed(" Failed!" + result.responseText.trim());
                    }


                }
                else {
                    LoadingCustomMsgHide();
                    swalFireLoginFailed(" Failed!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingCustomMsgHide();
                swalFireLoginFailed(" Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(10);




}