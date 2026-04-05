
Ext.define('ianMizi.view.Subscriber.FloatPanel_MembershipApprovalList', {

});

var _FloatPanel_MembershipApprovalList;


var isFloatPanel_MembershipApprovalListOpen = 'N';






function FloatPanel_MembershipApprovalList() {

    _FloatPanel_MembershipApprovalList =
    Ext.create('Ext.Container', {
        //zIndex: 150,
        zIndex: 49,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MembershipApprovalListID',
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
        //                    _FloatPanel_MembershipApprovalList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_MembershipApprovalList.hide(Ext.fx.Animation({
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

                id: 'containerFloatPanel_MembershipApprovalListHeader',
                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                style:GetHeaderStyle(),
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
              //     
               //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
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
                            id: 'htmlFloatPanel_MembershipApprovalList_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Membership Request For Approval</b></font>'
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
        '<input type="text" id="input-MembershipApprovalListSearchText"  placeHolder="Search (Name/Mobile Phone No)" class="search-input" >'+
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
                                        id: 'btnFloatPanel_MembershipApprovalListBack',
                                        height: 30,
                                        width: 35,
                                        margin: '10 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                           // FloatPanel_MembershipApprovalListHide();
                                          isFloatPanel_MembershipApprovalListOpen = 'N';

                                           _FloatPanel_MembershipApprovalList.hide(Ext.fx.Animation({
                                            type: 'popOut',
                                            //direction: 'left',
                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                            duration: 250

                                        }));
                                        document.getElementById("input-MembershipApprovalListSearchText").value=" ";
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
                                                  id: 'containerFloatPanel_MembershipApprovalListHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_MembershipApprovalListHaiUser',
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
                                                          id: 'containerFloatPanel_MembershipApprovalListeWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_MembershipApprovalListeWallet',
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
                                               id: 'containerFloatPanel_MembershipApprovalListPictureUser',
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
                                                       id: 'btnFloatPanel_MembershipApprovalListInfo',
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
                id: 'containerMembershipApprovalListTitleOutter',
                width: '100%',
                docked: 'bottom',
                // hidden:true,
                height: 50,
                style:GetFooterStyle(),
                //////////style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                      {
                          xtype: 'button',
                          id: 'btnMembershipApprovalListSearch',
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
                    //      id: 'MyMembershipApprovalListMasterHeader_MyLMembershipApprovalListTypeSearchTxt',
                    //      margin: '0 0 0 -10',
                    //      width: '48%',
                    //      height: 20,
                    //      html: '<input type="text" id="input-MembershipApprovalListSearchText" placeHolder="Search (Member Name / Phone No)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                    //  },
                     {
                        margin: '0 0 0 20',
                        //hidden:true,
                       // id: 'htmlFloatPanel_AyohaStore_NewOrderList_recordFoundCount',
                        html: '<font size=3 color=black><b>Record Found:</b></font>'
                    },
                     {
                        margin: '0 0 0 0',
                        //hidden:true,
                        id: 'htmlFloatPanel_MembershipApprovalList_Count',
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
                          id: 'btnMembershipApprovalListFilter',
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
                              //  id:'panelHeaderMembershipApprovalListListID',
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                      //  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border:1px solid grey"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial; text-transform:uppercase;font-size:12px;color:white"><div style="float:left;width:9.2%;"><span style="font-family: Arial; text-transform:uppercase;color:white;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial; text-transform:uppercase;color:white;padding:0px 0px"><b>Members Name / Phone No</b></div ><div style="float:left;width:13%;color:white;"><b>Membership Card</b></div><div style="float:left;width:15.3%;color:white;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;color:white;"><b>Membership Date</b></div><div style="float:left;width:12.2%;color:white;"><b>Membership End Date</b></div><div style="float:left;width:9.5%;color:white;"><b>Renewal Fee</b></div><div style="float:left;width:9%;color:white;"><b>Membership Status</b></div></div></div></div>'
                                      html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial;padding:0px 0px"><b>Members Name / Mobile Phone No</b></div ><div style="float:left;width:13%;"><b>Membership Card</b></div><div style="float:left;width:15%;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;"><b>Membership Date</b></div><div style="float:left;width:12.2%;"><b>Membership End Date</b></div><div style="float:left;width:10.5%;"><b>Renewal Fee</b></div><div style="float:left;width:9%;"><b>Membership Status</b></div></div></div></div>'

                                        
                                    }
                                ]
                            },
                      
                              {
                                 // height: 639,
                                  width: '100%',
                                  height: '90%',
                                  style: 'background-color:transparent',
                                  id: 'containerMembershipApprovalListList',
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
                                          store: _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore,
                                          //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                          id: 'FloatPanel_MembershipApprovalList_MembershipApprovalListID',                                         
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
                                            
                                               
                                               
                                               
                                              // '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="width:1%;background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;">{ModifiedRowNumber}).</th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:5%;"><img src="{Photo}" alt="Image" style="width: 110px; height: 120px; margin:7px 0px 0px 0px;"></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 0px;text-align:left;vertical-align:top;word-break:normal;width:66%;"><div style="background-color: white; color: black;text-align: left;margin: 2px 0px 0px 0px;font-family:Arial, sans-serif;font-size:13px;font-weight:bold;width:100%">{ModifiedAccountName}</div><br><div style="background-color: white; color: black;text-align: left;margin: -27px 0px 0px 0px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;width:100%">{MembershipNo}</div><br><div style="background-color: white; color: black;text-align: left;margin: -21px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Membership Date:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CreatedDate}</div><br><div style="background-color: white; black: white;text-align: left;margin: -20px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Subscribed Membership Card:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CardCount}</div><br><div style="background-color: white; color: black;text-align: left;margin: -20px 0px 0px 3px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;width:100%">Latest Activity:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 3px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{Latest_ActivityDate}</div><br><div style="background-color: white; color: black;text-align: right;margin: -100px 0px 0px -23px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;width:100%"><button OnClick="FloatPanel_MembershipApprovalList_ExpandMembershipSummary({ID})" class="buttonMediaSocial" style="margin:0px 20px 0px 0px;">{ModifiedMembershipApprovalStatusRound}</button>{ModifiedMembershipApprovalStatus}</div></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;width:28%;"><button  onClick="FloatPanel_MembershipApprovalList_ExpandMembershipSummary({ID});" class="buttonAyohaNotificationMgmt" style="margin:0px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px -17px 0px;" alt="Company Name"></button><br><font size=2>View Detail</font></th></tr></thead></table>' +

                                             // '<div style="background-color: transparent;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;"/></span></div ><div style="float:left;width:16.3%;font-family: Arial; text-transform:uppercase;color:black;font-size:12px;font-weight:bold">{ModifiedAccountName}<br>{MembershipNo}</div ><div style="float:left;width:16%;color:#71797E;"><img src="{ModifiedMembershipCardBg}" alt="Image" style="width: 45px; height: 30px; margin:0px 0px 0px 0px;border-radius:5px;"/></div><div style="float:left;width:12%;color:#71797E;"><b>Membership Date</b></div><div style="float:left;width:12.2%;color:#71797E;"><b>Membership End Date</b></div><div style="float:left;width:13%;color:#71797E;"><b>Latest Activity</b></div><div style="float:left;width:10%;color:#71797E;"><b>Membership Status</b></div></div></div></div>'+
                                              '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_MembershipApprovalList_ExpandMembershipSummary_fromMembershipApprovalList({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_MembershipApprovalList_ExpandMembershipSummary_fromMembershipApprovalList({ID});" style="float:left;width:18.4%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u></div ><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipCardBg}</div><div style="float:left;width:15.5%;color:#71797E;">{ModifiedMembershipCardName}</div><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+
  


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
    return _FloatPanel_MembershipApprovalList;



}













function FloatPanel_MembershipApprovalListMemberShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipApprovalList);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipApprovalList());
    this.overlay.show();
    isFloatPanel_MembershipApprovalListOpen = 'Y';
   document.getElementById("input-MembershipApprovalListSearchText").addEventListener("keyup", SearchMembershipApprovalListOnKeyUpSearch);
    FloatPanel_MembershipApprovalListMember_MembershipsLoadByEnterpriseAccNoApprovalListStore();
    FloatPanel_DrawerMenu_MainHide();
    document.getElementById("input-MembershipApprovalListSearchText").value="";
   
}





function FloatPanel_MembershipApprovalListHide() {
    // FloatPanel_MembershipApprovalList_AddCardHide();
   // FloatPanel_SubscriberMenuHide();
   if(isFloatPanel_MembershipApprovalListOpen == 'Y')
   {
    _FloatPanel_MembershipApprovalList.hide(); isFloatPanel_MembershipApprovalListOpen = 'N';
   }
   
}






var countEnterpriseLoanFirst = 0
var countEnterpriseSubscribedLoadFirst = 0
//var _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore;
function FloatPanel_MembershipApprovalListMember_MembershipsLoadByEnterpriseAccNoApprovalListStore() {

 

   // _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.clearFilter();
    _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoApprovalList');
    _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
        //var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

        // _DataStore_AyohaUserDashBoardNearestRedeemItemListStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');
       
        var count = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.getCount();
      //  alert(count)
        countEnterpriseSubscribedLoadFirst = count;
        Ext.getCmp('htmlTotalMembershipCount').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 23px;">' + countEnterpriseSubscribedLoadFirst + '</div>');
        Ext.getCmp('htmlFloatPanel_MembershipApprovalList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
      //  MasterMembershipsDashboardApprovalStatusCountStore();

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);











}





























function SearchMembershipApprovalListOnKeyUpSearch() {






    console.log('SearchEnterpriseOnKeyUp');
    var countSubscriber = 0;


    _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.clearFilter();

    var queryString = document.getElementById('input-MembershipApprovalListSearchText').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

              countSubscriber = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.getCount();
              Ext.getCmp('htmlFloatPanel_MembershipApprovalList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countSubscriber = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.getCount();
       Ext.getCmp('htmlFloatPanel_MembershipApprovalList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
     //   Ext.getCmp('htmlMembershipApprovalListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_MembershipApprovalList_Count').setHtml('<font size="2" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
     //   Ext.getCmp('htmlMembershipApprovalListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}





function FloatPanel_MembershipApprovalList_ExpandMembershipSummary_fromMembershipApprovalList(ID) {
    LoadingPanelShow(getLoadingIcon(), 'Loading....');

    var SubscriberAccNo = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipCardCode = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var CardCount = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseHQAccNo = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipApprovalStatus = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);

    var PhoneNo = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var Email = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var CreatedDate = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipByMethod = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);

    var Photo = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var ModifiedAccountName = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipNo = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var PlayerID = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var Gender = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var DOB = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
    var Latest_ActivityDate = _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
   
var LastloginDate= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);

var StreetAddress= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
var Town= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
var PostCode= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
var Country= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
var Profession= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
var Hobby= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);
var States= _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore.findRecord('ID', ID, 0, false, false, true);


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


function FloatPanel_MembershipApprovalList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(SubscriberAccNo,MembershipCardCode){
   

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
                        

                       // ,PaymentMethod,,Remarks,PaymentDocumentUploadImage_ImageName,PaymentDocumentUploadImage


                       // LoadingCustomMsgHide();
                        FloatPanel_MembershipDetails_ApproveShow_FromMembershipApprovalList(data.results[0].MembershipCardName,data.results[0].MembershipLevel,data.results[0].MembershipFee,data.results[0].MembershipCardFeePaymentCycle
                            ,data.results[0].ValidUntilDate,data.results[0].IsRequiredMembershipFee,data.results[0].Photo,data.results[0].AccountName,data.results[0].Email,data.results[0].PhoneNo,data.results[0].CreatedDate
                            ,data.results[0].MembershipByMethod,data.results[0].MembershipDate,data.results[0].MembershipApprovalBy,data.results[0].MembrshipApprovalDate,data.results[0].MembershipRejectedDate
                            ,data.results[0].MembershipCardBackgroundImg,data.results[0].MembershipCardBackgroundImgback,data.results[0].MembershipApprovalStatus,data.results[0].MembershipFeePaymentMethod
                            ,data.results[0].ReceivedAmount,data.results[0].Remarks,data.results[0].MembershipPaymentLink,data.results[0].MembershipPaymentPaidProof,data.results[0].MembershipCardCode,data.results[0].SubscriberAccNo,
                            data.results[0].ID,data.results[0].MembershipPaymentCode);






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