
Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistoryListAll', {

});

var _FloatPanel_AyohaStore_OrderHistoryListAll;


var isFloatPanel_AyohaStore_OrderHistoryListAllOpen = 'N';






function FloatPanel_AyohaStore_OrderHistoryListAll() {

    _FloatPanel_AyohaStore_OrderHistoryListAll =
    Ext.create('Ext.Container', {
        //zIndex: 150,
        zIndex: 49,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaStore_OrderHistoryListAllID',
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
        //                    _FloatPanel_AyohaStore_OrderHistoryListAll.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaStore_OrderHistoryListAll.hide(Ext.fx.Animation({
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

                id: 'containerFloatPanel_AyohaStore_OrderHistoryListAllHeader',
                style:GetHeaderStyle(),
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                    
                //style: ' background-color: transparent;',
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
                            id: 'htmlFloatPanel_AyohaStore_OrderHistoryListAll_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Order History</b></font>'
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
id:'btnFloatPanel_AyohaStore_OrderHistoryListAll_SearchTextBox',
hidden:true,
margin: '1 0 0 0',
height: 40,
width: 40,
html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
ui: 'plain',
handler: function () {
}
},
{
  id:'htmlFloatPanel_AyohaStore_OrderHistoryListAll_SearchTextBox',
  hidden:true,
html:'<div class="search-container">'+
'<input type="text" id="input-OrderHistoryListAllSearchText"  placeHolder="Search (Member Name / Phone No/Order No)" class="search-input" >'+
'</div>'
},

{
    xtype: 'spacer',
    width:20
},
{
    xtype: 'container',
    hidden:true,
    id:'containerFloatPanel_AyohaStore_OrderHistoryListAll_FilterBorder',
    width: 1,
    height: '60%',
    style: ' background-color: #ccc;',
},
{
    xtype: 'spacer',
    width:20
},
{
    id:'selectFloatPanel_AyohaStore_OrderHistoryListAll_Filter',
    hidden:true,
        html: '<div style="color:black;text-align: left;font-size:16px;width:100%;paddign:0px 20px"><select style="font-size:16px;width:180px;height:30px"  id="FloatPanel_AyohaStore_OrderHistoryListAll_Selection"><option value="NA"> - Filter - </option><option value="Today">Today</option><option value="ThisWeek">This Week</option><option value="Month">This Month</option><option value="Year">This Year</option><option value="Custome">Custome Date</option></select></div>'  
     
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
                                        id: 'btnFloatPanel_AyohaStore_OrderHistoryListAllBack',
                                        height: 30,
                                        width: 35,
                                        margin: '10 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                           // FloatPanel_AyohaStore_OrderHistoryListAllHide();
                                          isFloatPanel_AyohaStore_OrderHistoryListAllOpen = 'N';

                                           _FloatPanel_AyohaStore_OrderHistoryListAll.hide(Ext.fx.Animation({
                                            type: 'popOut',
                                            //direction: 'left',
                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                            duration: 250

                                        }));
                                        document.getElementById("input-OrderHistoryListAllSearchText").value=" ";
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
                                                  id: 'containerFloatPanel_AyohaStore_OrderHistoryListAllHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaStore_OrderHistoryListAllHaiUser',
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
                                                          id: 'containerFloatPanel_AyohaStore_OrderHistoryListAlleWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_AyohaStore_OrderHistoryListAlleWallet',
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
                                               id: 'containerFloatPanel_AyohaStore_OrderHistoryListAllPictureUser',
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
                                                       id: 'btnFloatPanel_AyohaStore_OrderHistoryListAllInfo',
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
                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
               // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                // style: "background-color: #EAEEF3;",
                //////////style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                    //   {
                    //       xtype: 'button',
                    //       id: 'btnMembershipApprovalListSearch',
                    //       // hidden: true,
                    //       //  badgeText: '1',
                    //       margin: '1 0 0 0',
                    //       height: 40,
                    //       width: 40,
                    //       html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                    //       ui: 'plain',
                    //       handler: function () {
                    //           // NotificationsPanelShow();

                    //           // LoyaltyCardRedeemListShow();


                    //           //  LoyaltyCardRedeemListShow();
                    //       }
                    //   },





                    //  {
                    //      id: 'MyMembershipApprovalListMasterHeader_MyLMembershipApprovalListTypeSearchTxt',
                    //      margin: '0 0 0 -10',
                    //      width: '48%',
                    //      height: 20,
                    //      html: '<input type="text" id="input-OrderHistoryListAllSearchText" placeHolder="Search (Member Name / Phone No/Order No)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                    //  },
                    {
                        margin: '0 0 0 20',
                        //hidden:true,
                       // id: 'htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count',
                        html: '<font size=3 color=black><b>Record Found:</b></font>'
                    },
                     {
                        margin: '0 0 0 0',
                        //hidden:true,
                        id: 'htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count',
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
                                //  id: 'htmlApprovedMembershipCount',                                                                    
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
                                //  id: 'htmlRejectedMembershipCount',
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
                                 // id: 'htmlExpiredMembershipCount',
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
                               //   id: 'htmlRequestApprovalMembershipCount',
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
                                                   // id: 'btnEnterprisesListLog',
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
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:3%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;padding:0px 0px"><b>Members Name / Phone No</b></div ><div style="float:left;width:11%;"><b>Order No</b></div><div style="float:left;width:19.5%;"><b>Order Item</b></div><div style="float:left;width:14.7%;"><b>Order Date</b></div><div style="float:left;width:8.5%;"><b>Delivery</b></div><div style="float:left;width:10%;"><b>Grand Total</b></div><div style="float:left;width:7%;"><b>Order Status</b></div></div></div></div>'
                                        //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6.2%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:16.5%;padding:0px 0px"><b>Messaging Tool</b></div ><div style="float:left;width:57.5%;"><b>Message</b></div><div style="float:left;width:7.5%;"><b>IsRead</b></div><div style="float:left;width:10.3%;"><b>DateTime</b></div></div></div></div>'
                                        
                                    }
                                ]
                            },
                      
                              {
                                 // height: 639,
                                  width: '100%',
                                  height: '90%',
                                  style: 'background-color:transparent',
                                 // id: 'containerMembershipApprovalListList',
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
                                        store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore,
                                        id: 'FloatPanel_AyohaStore_OrderHistory_ListAllID',
                                        mode: 'SINGLE',
                                        hidden:true,
                                        disableSelection: false,
                                        style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                                     
   
                                        //  itemTpl: '<div class="myContent">' +
                                        //  '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                        // '</table><br>' +
                                        //  '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                        //        '</div>',
         


                                               itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                            
                                             
                                              '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{Row_num}).</div ><div  style="float:left;width:18.4%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:bold">{ClientName}<br>({ClientPhoneNo})</div ><div style="float:left;width:11%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DisplayOrderNo}</div><div style="float:left;width:20%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{ModifiedItemsName}</div><div style="float:left;width:15%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{CreatedDate}</div><div style="float:left;width:9%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DeliveryName}</div><div style="float:left;width:10%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:16px;font-weight:bold;">RM{GrandTotal}</div><div style="float:left;width:8%;font-family:'+GetListFontStyle()+'; color:blue;font-size:12px;font-weight:normal;bold;cursor: pointer;"   onclick="FloatPanel_AyohaStore_OrderHistoryLoadByOrderNoMerchantShow(`{OrderNo}`,`1`)"><u>{OrderStatus}</u></div><div style="float:left;width:6%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal"><div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:0px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:0px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div></div></div></div></div>'+
   
 
 
                                                   '</div>',
   
   
   
   
                                        emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order',
                                        width: '100%',
                                        height: '100%',
                                        disableSelection: true,
   
   
                                    },

                                    {
                                        xtype: 'list',
                                        //  flex: 1,
                                        store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore,
                                        id: 'FloatPanel_AyohaStore_OrderHistory_ListAllID_FromMemberDetailsPage',
                                        mode: 'SINGLE',
                                        hidden:true,
                                        disableSelection: false,
                                        style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                                     
   
                                        //  itemTpl: '<div class="myContent">' +
                                        //  '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                        // '</table><br>' +
                                        //  '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                        //        '</div>',
         


                                               itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                            
                                             
                                              '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{Row_num}).</div ><div  style="float:left;width:18.4%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:bold">{ClientName}<br>({ClientPhoneNo})</div ><div style="float:left;width:11%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DisplayOrderNo}</div><div style="float:left;width:20%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{ModifiedItemsName}</div><div style="float:left;width:15%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{CreatedDate}</div><div style="float:left;width:9%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DeliveryName}</div><div style="float:left;width:10%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:16px;font-weight:bold;">RM{GrandTotal}</div><div style="float:left;width:8%;font-family:'+GetListFontStyle()+'; color:blue;font-size:12px;font-weight:normal;bold;cursor: pointer;"   onclick="FloatPanel_AyohaStore_OrderHistoryLoadByOrderNoMerchantShow(`{OrderNo}`,`1`)"><u>{OrderStatus}</u></div><div style="float:left;width:6%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal"><div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:0px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:0px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div></div></div></div></div>'+
   
 
 
                                                   '</div>',
   
   
   
   
                                        emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order',
                                        width: '100%',
                                        height: '100%',
                                        disableSelection: true,
   
   
                                    },
                                    //   {
                                    //       xtype: 'list',
                                    //       //  flex: 1,
                                    //       width: '100%',
                                    //       store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore,
                                    //       //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                    //       id: 'FloatPanel_AyohaStore_OrderHistoryListAll_MembershipApprovalListID',                                         
                                    //       // grouped: true,
                                    //       mode: 'SINGLE',
                                    //       //scrollable: {
                                    //       //    direction: 'vertical',
                                    //       //    indicators: {
                                    //       //        y: {
                                    //       //            autoHide: true
                                    //       //        },
                                    //       //        x: {
                                    //       //            autoHide: true
                                    //       //        }
                                    //       //    }
                                    //       //},

                                    //       scrollable: {
                                    //           direction: 'vertical',
                                    //          // directionLock: true,
                                    //           indicators: false,
                                    //          // bounces: false,
                                    //          // outOfBoundRestrictFactor: 0,
                                    //           //threshold: 20,
                                    //           scroller: {
                                    //               listeners: {
                                    //                   scroll: function (scroller, x, y, eOpts) {
                                    //                      //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                                    //                       if (y < -123) {
                                    //                         rn=0;
                                    //                         MasterMembershipsLoadByEnterpriseAccNoStore();
                                    //                           //// console.log('sampai scrollable')
                                    //                           //scroller.scrollTo({
                                    //                           //    x: 0,
                                    //                           //    y: 0
                                    //                           //});
                                    //                           //return
                                    //                       }
                                    //                   },
                                    //                   //scrollend: function (scroller, x, y, eOpts) {
                                    //                   //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                                    //                   //    //if (y <= 0) {
                                    //                   //    //    console.log('sampai')
                                    //                   //    //    scroller.scrollTo({
                                    //                   //    //        x: 0,
                                    //                   //    //        y: 0
                                    //                   //    //    });
                                    //                   //    //}


                                    //                   //}
                                    //               }
                                    //           }
                                    //       },
                                    //      // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                    //       style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                    //       disableSelection: true,
                                        

                                    //           itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                            
                                               
                                               
                                               
                                    //           // '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="width:1%;background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;">{ModifiedRowNumber}).</th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:5%;"><img src="{Photo}" alt="Image" style="width: 110px; height: 120px; margin:7px 0px 0px 0px;"></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 0px;text-align:left;vertical-align:top;word-break:normal;width:66%;"><div style="background-color: white; color: black;text-align: left;margin: 2px 0px 0px 0px;font-family:Arial, sans-serif;font-size:13px;font-weight:bold;width:100%">{ModifiedAccountName}</div><br><div style="background-color: white; color: black;text-align: left;margin: -27px 0px 0px 0px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;width:100%">{MembershipNo}</div><br><div style="background-color: white; color: black;text-align: left;margin: -21px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Membership Date:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CreatedDate}</div><br><div style="background-color: white; black: white;text-align: left;margin: -20px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Subscribed Membership Card:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CardCount}</div><br><div style="background-color: white; color: black;text-align: left;margin: -20px 0px 0px 3px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;width:100%">Latest Activity:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 3px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{Latest_ActivityDate}</div><br><div style="background-color: white; color: black;text-align: right;margin: -100px 0px 0px -23px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;width:100%"><button OnClick="FloatPanel_AyohaStore_OrderHistoryListAll_ExpandMembershipSummary({ID})" class="buttonMediaSocial" style="margin:0px 20px 0px 0px;">{ModifiedMembershipApprovalStatusRound}</button>{ModifiedMembershipApprovalStatus}</div></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;width:28%;"><button  onClick="FloatPanel_AyohaStore_OrderHistoryListAll_ExpandMembershipSummary({ID});" class="buttonAyohaNotificationMgmt" style="margin:0px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px -17px 0px;" alt="Company Name"></button><br><font size=2>View Detail</font></th></tr></thead></table>' +

                                    //          // '<div style="background-color: transparent;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;"/></span></div ><div style="float:left;width:16.3%;font-family: Arial; text-transform:uppercase;color:black;font-size:12px;font-weight:bold">{ModifiedAccountName}<br>{MembershipNo}</div ><div style="float:left;width:16%;color:#71797E;"><img src="{ModifiedMembershipCardBg}" alt="Image" style="width: 45px; height: 30px; margin:0px 0px 0px 0px;border-radius:5px;"/></div><div style="float:left;width:12%;color:#71797E;"><b>Membership Date</b></div><div style="float:left;width:12.2%;color:#71797E;"><b>Membership End Date</b></div><div style="float:left;width:13%;color:#71797E;"><b>Latest Activity</b></div><div style="float:left;width:10%;color:#71797E;"><b>Membership Status</b></div></div></div></div>'+
                                    //           '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_AyohaStore_OrderHistoryListAll_ExpandMembershipSummary_fromMembershipApprovalList({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_AyohaStore_OrderHistoryListAll_ExpandMembershipSummary_fromMembershipApprovalList({ID});" style="float:left;width:18.4%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u></div ><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipCardBg}</div><div style="float:left;width:15.5%;color:#71797E;">{ModifiedMembershipCardName}</div><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+
  


                                    //               '</div>',
                                    //      height: '100%',
                                    //       listeners: {
                                    //           itemsingletap: function (list, idx, target, records, evt) {
                                    //               //LoadingPanelShow();
                                    //               //ID = records.get('ID');
                                    //               //EnterpriseAccNo = records.get('EnterpriseAccNo');
                                    //               //localStorage.setItem('EnterpriseAccNo', records.get('EnterpriseAccNo'));

                                    //               //loadEnterpriseDetails(records.get('ID'), records.get('EnterpriseAccNo'));


                                    //               //var SubcriberAccNo = records.get('SubcriberAccNo');
                                    //               //var LoyaltyCardType = records.get('LoyaltyCardType');

                                    //               //if (LoyaltyCardType == "Point") {
                                    //               //    FloatLoyaltyCardPointShow();
                                    //               //    loadlistsummaryreceipt('NewReceipt');
                                    //               //    Ext.getCmp('tabpanelFloatLoyaltyCardPoint').getTabBar().hide();
                                    //               //}
                                    //               //if (LoyaltyCardType == "Stamp") {
                                    //               //    //  Subscriber_FloatLoyaltyCardStampShow(SubcriberAccNo);
                                    //               //    FloatPanel_SubscriberMasterShow();
                                    //               //}




                                    //           },
                                    //           deselect: function (list, records) {

                                    //           }
                                    //       },

                                    //   },

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
    return _FloatPanel_AyohaStore_OrderHistoryListAll;



}













function FloatPanel_AyohaStore_OrderHistoryListAllMemberShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistoryListAll);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistoryListAll());
    this.overlay.show();
    isFloatPanel_AyohaStore_OrderHistoryListAllOpen = 'Y';
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.clearFilter();
    FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore('Year','00','00');
   document.getElementById("input-OrderHistoryListAllSearchText").addEventListener("keyup", SearchOrderHistoryListAllSearch);
   // FloatPanel_AyohaStore_OrderHistoryListAllMember_MembershipsLoadByEnterpriseAccNoApprovalListStore();
    FloatPanel_DrawerMenu_MainHide();
 //   document.getElementById("input-OrderHistoryListAllSearchText").value="";
 Ext.getCmp('FloatPanel_AyohaStore_OrderHistory_ListAllID').setHidden(false);

 Ext.getCmp('btnFloatPanel_AyohaStore_OrderHistoryListAll_SearchTextBox').setHidden(false);
 Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_SearchTextBox').setHidden(false);
 Ext.getCmp('selectFloatPanel_AyohaStore_OrderHistoryListAll_Filter').setHidden(false);
 Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryListAll_FilterBorder').setHidden(false);
 
 
 
 var selectElement = document.getElementById('FloatPanel_AyohaStore_OrderHistoryListAll_Selection');

 // Add an event listener for the 'change' event
 selectElement.addEventListener('change', function() {
     // Get the value of the selected option
     var selectedValue = selectElement.value;
     
     // Do something with the selected value
     console.log("Selected filter: " + selectedValue);
     // For example, you can call a function to handle different filters
     handleFilterChange_OrderHistoryListAll(selectedValue);
 });
   
}







function FloatPanel_AyohaStore_OrderHistoryListAllMemberShow_FromMemberDetailsPage(OrderNo) {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistoryListAll);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistoryListAll());
    this.overlay.show();
    isFloatPanel_AyohaStore_OrderHistoryListAllOpen = 'Y';
    
    Ext.getCmp('LoadingFloatPanel_MembershipDetailsPageID').setZIndex(47);
    Ext.getCmp('LoadingFloatPanel_AyohaRewardVoucher_VoucherRecipentsID').setZIndex(48);
    Ext.getCmp('FloatPanel_AyohaStore_OrderHistory_ListAllID_FromMemberDetailsPage').setHidden(false);
    
   // FloatPanel_AyohaStore_OrderHistoryListAllMember_MembershipsLoadByEnterpriseAccNoApprovalListStore();
    FloatPanel_DrawerMenu_MainHide();
 //   document.getElementById("input-OrderHistoryListAllSearchText").value="";

 FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore(OrderNo);
 
   
}

function handleFilterChange_OrderHistoryListAll(filter) {
    switch (filter) {
        case 'Today':

        FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore(filter,'00','00');
            break;
        case 'ThisWeek':
            FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore(filter,'00','00');
            break;
        case 'Month':
            FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore(filter,'00','00');
            break;
        case 'Year':
            FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore(filter,'00','00');
            break;
        case 'Custome':
            FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore(filter,'00','00');
            break;
        default:
            console.log("No filter selected or action defined.");
    }
}



function FloatPanel_AyohaStore_OrderHistoryListAllHide() {
    // FloatPanel_AyohaStore_OrderHistoryListAll_AddCardHide();
   // FloatPanel_SubscriberMenuHide();
   if(isFloatPanel_AyohaStore_OrderHistoryListAllOpen == 'Y')
   {
    _FloatPanel_AyohaStore_OrderHistoryListAll.hide(); isFloatPanel_AyohaStore_OrderHistoryListAllOpen = 'N';
   }
   
}






var globalCountOrder;
function FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore(DashboardFilter,StartDate,EndDate) {
   // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.clearFilter();
  
   
    
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getProxy().setExtraParam('DashboardFilter', DashboardFilter);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getProxy().setExtraParam('StartDate', StartDate);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getProxy().setExtraParam('EndDate', EndDate);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchant');
 
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
      //  _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.load();
      // alert(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getCount())
       var Store = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getAt(0);
       globalCountOrder=Store.get('TotalRow');
       Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');
      //  var count =parseInt(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getCount());
       

       // var OrderStatus = Store.get('OrderStatus');

        //ModifiedOrderLogCreatedDate
        //if (OrderStatus == "All Orders") {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');

        //} else {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');

        //}
        // id: 'htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count',
        // html: '<font size=2 color=black><b>(0)</b></font>'
       

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}






function FloatPanel_AyohaStore_OrderHistoryListAll_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore(OrderNo) {
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.clearFilter();
   
   // alert(OrderNo);
    
 
 
     var task = Ext.create('Ext.util.DelayedTask', function () {
       //  _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.load();
       // alert(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getCount())
      //  var Store = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore.getAt(0);
       
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore.getProxy().setExtraParam('OrderNo', OrderNo);   
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNo_Merchant');  
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore.load();
        globalCountOrder='1';
        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');
      //  Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');
       var count =parseInt(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore.getCount());
      // alert(count);
 
        // var OrderStatus = Store.get('OrderStatus');
 
         //ModifiedOrderLogCreatedDate
         //if (OrderStatus == "All Orders") {
         //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');
 
         //} else {
         //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');
 
         //}
         // id: 'htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count',
         // html: '<font size=2 color=black><b>(0)</b></font>'
        
 
     });
     task.delay(500);
 
 
     Ext.Viewport.setMasked(false);
 }







//////////////////////////////////////////////////////////////////////////































function SearchOrderHistoryListAllSearch() {






    console.log('SearchEnterpriseOnKeyUp');
    var countOrder = 0;


    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.clearFilter();

    var queryString = document.getElementById('input-OrderHistoryListAllSearchText').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

              countOrder = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getCount();
              Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count').setHtml('<font size="2" color="black"><b>(' + countOrder + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countOrder = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.getCount();
       Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count').setHtml('<font size="3" color="black"><b>(' + countOrder + ')</b></font>');
     //   Ext.getCmp('htmlMembershipApprovalListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistoryListAll_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');
     //   Ext.getCmp('htmlMembershipApprovalListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}






