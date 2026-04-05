
//Ext.define('ianMizi.view.MyAccount.Dashboard', {
//    extend: 'Ext.tab.Panel',
//    xtype: 'UserAccount',
var detectIndex = [];
Ext.define('ianMizi.view.MyAccount.Dashboard', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'Dashboard',
    id: 'DashboardID',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,    
        //style: "background-color: white; color:black;",
        style: GetbackgroundColor(),
        items: [
            // {
            //     xtype: 'container',
            //     //xtype: 'carousel',
            //     //direction: 'horizontal',
            //     //directionLock: true,
            //    // hidden:true,
            //     width: '100%',
            //     margin: '0px 0px 0px 0px',
            //     //zIndex:30,
            //     zIndex:1,
            //     height: '100%',
            //    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            //    style: 'background-color:#F7F7F7;',
            //    // style: GetbackgroundColor(),                
            //     id:'FloatPanel_AyohaCardManagement_PreviewCardInnerIDs_dashboard',
            //     html: '<div id="divCardBgImg_dashboard" ></div>',
            //     layout: {
            //         type: 'vbox',

            //     },
            //     items: [
                   
            //     ]
            // },


  {

                        xtype: 'container',
                        width: '100%',
                        height: 60,
 docked:'top',
                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerMyAccount_DashboardHeader',
                      style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
                   
                      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },

                        items:
                               [
{
xtype:'spacer',
width:10
},

                                             {
                                                 xtype: 'button',
                                                 id: 'btnMyAccount_DashboardBack',
                                                 height: 35,
                                                 width: 48,
                                                 margin:'3 0 0 0',
                                                 // iconCls: 'list',
                                                // html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="20" height="18" alt="Company Name"></div>',
                                                html: '<div ><img src="resources/icons/Logo/LogoWhiteSimplifed.png" width="25" height="25" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     FloatPanel_DrawerMenu_MainShow();
                                                   
                                                 }
                                             },
                                             //{
                                             //    margin: '0 0 0 0',
                                             //    id: 'htmlMyAccount_Dashboard_TitleHeaderTxt',
                                             //    html: '<font size=2 color=white><b>Ayoha-Reward Pro v 1.0</b></font>'
                                             //},
                                              {
                                                  margin: '-2 0 0 0',
                                                  id: 'htmlMyAccount_Dashboard_TitleHeaderTxt',
                                                  html: '<div onclick="FloatPanel_DrawerMenu_MainShow()"><font size=2 color=white><b>Hi Rabiatul!</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">Ayoha Reward Business V 1.0</div></div>'
                                                  // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                              },
                                              {
                                                  xtype: 'spacer',

                                              },

                                             {
                                                 xtype: 'container',
                                                 margin: '0 -8 0 0',
                                                // zIndex: 200,
                                                 id: 'containerMyAccount_DashboardAyohaeWallet',
                                                 name: 'namecontainerMyAccount_DashboardAyohaeWallet',
                                                 style: 'background-color:transparent;',
                                                 //style: 'background-color:rgba(255,255,255, 0.7);border-radius: 25px 25px 25px 25px;',
                                                 //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                 // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                                                 height: 36,
                                                 width: 145,
                                                 layout: {

                                                     type: 'hbox',
                                                     pack: 'right',
                                                     align: 'right'
                                                 },
                                                 items: [
                                                     //{
                                                     //    xtype: 'panel',
                                                     //    width:1
                                                     //},
                                                     {
                                                         margin: '0 -8 3 0',
                                                         id: 'htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet',
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">RM 00.00</div>'
                                                         // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                     },

                                                        

                                                     {
                                                         xtype: 'container',
                                                         //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                                         style: 'background: transparent;',
                                                         height: 40,
                                                         width: 65,
                                                         margin: '0 0 -2 0',
                                                         layout: {

                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center'
                                                         },
                                                         items: [
                                                             {
                                                                 //xtype: 'button',
                                                                 //id: 'btnMyAccount_DashboardEwalletIcon',
                                                                 height: 20,
                                                                 width: 20,
                                                                 margin: '0 0 15 0',
                                                                 // iconCls: 'list',
                                                                 //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                                                 //html: '<div ><img src="resources/icons/ayohaewallet01.png" style ="width:20px;height:20px;" alt="Company Name"></div>',
                                                                 html: '<div ><img src="resources/icons/ayohaewallet01.png" style ="width:30px;height:30px;" alt="Company Name"></div>',
                                                                 
                                                             },
                                                         ]
                                                     },



                                                 ]
                                             },
                                             {
                                                xtype: 'button',
                                                id: 'btnMyAccount_DashboardTopOrderReceived',
                                                height: 35,
                                                width: 45,
                                                margin:'3 0 0 0',
                                                // iconCls: 'list',
                                               // html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="20" height="18" alt="Company Name"></div>',
                                               html: '<div ><img src="resources/icons/order-removebg-preview.png" width="25" height="25" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    
                                                    globalFloatPanel_AyohaStore_OrderHistory_Year = GetCurrentYear();
                                                   // FloatPanel_AyohaStore_OrderHistoryShow();
                                                   FloatPanel_AyohaStore_NewOrderListMemberShow();
                                                    FloatPanel_DrawerMenu_MainHide();
                                                   
                                                }
                                            },

                                             {
                                                xtype: 'button',
                                                id: 'btnMyAccount_DashboardTopNotification',
                                                height: 35,
                                                width: 45,
                                                margin:'3 0 0 0',
                                                // iconCls: 'list',
                                               // html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="20" height="18" alt="Company Name"></div>',
                                               html: '<div ><img src="resources/icons/NotificationPurple.png" width="25" height="25" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    
                                                    FloatPanel_AyohaNotificationShow();
                                                   
                                                }
                                            },

                                            {
                                                xtype: 'button',
                                                id: 'btnMyAccount_DashboardTopScanner',
                                                height: 35,
                                                width: 45,
                                                margin:'3 0 0 0',
                                                // iconCls: 'list',
                                               // html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="20" height="18" alt="Company Name"></div>',
                                               html: '<div ><img src="resources/icons/scanQrCodePurple.png" width="25" height="25" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    Ext.getCmp('mainView').setHidden(true);
                                                    FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShow();
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                id: 'btnMyAccount_DashboardTopSetting',
                                                hidden:true,
                                                height: 35,
                                                width: 45,
                                                margin:'3 0 0 0',                                               
                                                html: '<div class="blink_me_sendNow"><img src="resources/icons/settingPurple.png" width="25" height="25" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    FloatPanel_OpenAccountStepShow();
                                                   // Ext.getCmp('mainView').setHidden(true);
                                                   // FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShow();
                                                }
                                            },
                                            {
                                                xtype: 'spacer',
                                                width:5
                                            },
                                            {
                                                xtype: 'container',
                                                width: 0.5,
                                                height: '60%',
                                                style: ' background-color: #ccc;',
                                            },
                                            {
                                                xtype: 'spacer',
                                                width:3
                                            },
                                            {
                                                xtype: 'button',
                                                id: 'btnMyAccount_DashboardTopLogOut',
                                                height: 35,
                                                width: 50,
                                                margin:'3 0 0 0',
                                                // iconCls: 'list',
                                               // html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="20" height="18" alt="Company Name"></div>',
                                               html: '<div ><img src="resources/icons/logoutPurpleOne.png" width="25" height="25" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    localStorage.clear();
                                                    sessionStorage.clear();
                                                    globalFloatPanel_AyohaEnterpriseAccount_Enterprisecount=0;
                                                    globalcountTotalEnterprise=0;
                                                    Ext.getCmp('mainView').setActiveItem(0);
                                                }
                                            },



                                                {
                                                    xtype: 'button',
                                                    id: 'btnMyAccount_DashboardeWalletValue',
                                                    hidden:true,
                                                    margin: '10 0 0 2',
                                                    height: 30,
                                                    width: 65,

                                                    // iconCls: 'list',
                                                    html: '<div style="color:black;text-align: right;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                                    ui: 'plain',
                                                    handler: function () {
                                                        // Ayoha_eWallet();
                                                        FloatPanel_AyohaeWalletShow();

                                                    }
                                                },
                                                                      {
                                                                          xtype: 'button',
                                                                          id: 'btnMyAccount_DashboardeWallet',
                                                                          margin: '10 0 0 8',
                                                                          hidden:true,
                                                                          height: 30,
                                                                          width: 35,
                                                                          // iconCls: 'list',
                                                                          html: '<div ><img src="resources/icons/ayohaewallet01.png" width="25" height="20" alt="Company Name"></div>',
                                                                          ui: 'plain',
                                                                          handler: function () {
                                                                              // Ayoha_eWallet();
                                                                              FloatPanel_AyohaeWalletShow();

                                                                          }
                                                                      },
                                                      {
                                                          xtype: 'container',
                                                        margin: '5 0 0 0',
                                                          hidden: true,
                                                          //style: 'background-color: white;',
                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                          style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                          height: 25,
                                                          width: 75,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerMyAccount_DashboardHaiUser',
                                                          layout: {

                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center'
                                                          },
                                                          items: [


                                                              {
                                                                  margin: '2 0 0 0',
                                                                  id: 'htmlMyAccount_DashboardHaiUser',
                                                                  html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  // hidden: true,
                                                                  style: 'background-color: transparent;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerMyAccount_DashboardeWallet',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'left',
                                                                      align: 'left'
                                                                  },
                                                                  items: [
                                                                      
                                                                       //{
                                                                       //    height: 30,
                                                                       //    margin: '10 0 0 0',
                                                                       //    width: 65,
                                                                          
                                                                       //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                       //},
                                                                   
                                                                  ]
                                                              },

                                                          ]
                                                      },
                                                   {
                                                       xtype: 'container',
                                                       margin: '5 0 0 -5',
                                                       hidden: true,
                                                       //style: 'background-color: white;',
                                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                       height: 35,
                                                       width: 35,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerMyAccount_DashboardPictureUser',
                                                       layout: {

                                                           type: 'hbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                             
                                                           {
                                                               xtype: 'button',
                                                               height: 40,
                                                               hidden:true,
                                                               width: 40,
                                                               margin: '0 0 0 -8',
                                                               id: 'btnMyAccount_DashboardPicProfile',
                                                               //badgeText: "2",
                                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
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



                                                   {
                                                       xtype: 'panel',
                                                       width:5
                                                   }






                               ]

                    },





                    {
                        xtype: 'container',
                        id: 'containerMyAccount_DashboardMaster',
                        width: '100%',
                        height: '100%',
                        margin:'10 0 0 0',
                        zIndex:10,
                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                        style: "background-color: transparent;",
                        //style: "background-color: #F35B57;",
                        title: 'DashboardNewMaster',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
              
                        },
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true,
                            indicators: false,
                        },
                        listeners: {
                            initialize: function (c) {
              
                                this.element.on({
                                    swipe: function (e, node, options) {
                                        if (e.direction == "left") {
                                            //  alert("Hey! I swipe left");
                                          //  Ext.getCmp('tabpanelDashboard').setActiveItem(1);
                                        } else {
                                            //  alert("Hey! I swipe right");
              
                                        }
                                    }
                                });
                            }
                        },
                        // scrollable: {
                        //     direction: 'vertical',
                        //     directionLock: true,
                        //     indicators: false,
                        //     bounces: false,
                        //     outOfBoundRestrictFactor: 0,
                        //     //threshold: 20,
                        //     scroller: {
                        //         listeners: {
                        //             scroll: function (scroller, x, y, eOpts) {
                        //               //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                        //                 if (y <= 0) {
                                         
                        //                    // console.log('sampai scrollable')
                        //                     scroller.scrollTo({
                        //                         x: 0,
                        //                         y: 0
                        //                     });
                        //                     return
                        //                 }
                        //             },
                        //             //scrollend: function (scroller, x, y, eOpts) {
                        //             //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                        //             //    //if (y <= 0) {
                        //             //    //    console.log('sampai')
                        //             //    //    scroller.scrollTo({
                        //             //    //        x: 0,
                        //             //    //        y: 0
                        //             //    //    });
                        //             //    //}
              
                                       
                        //             //}
                        //         }
                        //     }
                        // },
              
                        items: [
              
              
                            {
                                xtype: 'container',
                                style: "background-color: transparent;",
                                hidden:true,
                                width: '100%',
                              
                                //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'
              
                                },
                                items: [
                                          {
                                              //width: 220,
                                              //// hidden:true,
                                              ////  id: 'Pictureprofile',
                                              //// margin: '10 0 5 -20',
                                              ////left:-2,
                                              //height: 150,
                                              //  html: '<img src="resources/icons/founder.jpg" width="220" height="150" border:2px solid red; border-radius: 50%; max-width:300px; alt="Company Name">',
                                              id: 'htmlDashboard_EnterpriseLogo',
                                              html: '<img src="resources/icons/ccrlogo.png" style="width: 160px; height: 160px; border:2px none grey; border-radius: 50%; max-width:250px; " />',
                                          },
              
              
                                      {
                                          margin: '0 0 0 0',
                                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                          id:'htmlDashboard_EnterpriseName',
                                          html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>The Community Coffea Sdn Bhd</b></div>'
                                          // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                      },
              
                                        {
                                            margin: '0 0 0 0',
                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                            id: 'htmlDashboard_EnterpriseAddress',
                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">Petronas Wangsa Maju Sekysen 3,Jalan Genting Kelang,5215461 Ampang. Selangor Darul Ehsan</div>'
                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
              
              
                                ]
              
                            },
              
              /// container 1 horizontal
              {
                xtype: 'container',
                id: 'containerMyAccount_DashboardMaster_inner_one',
                margin: '20 0 0 0',
                width: '100%',
                //height: 720,
                height: 400,
                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                style: "background-color: transparent;",
                //style: "background-color: #F35B57;",
                title: 'DashboardNewMaster_inner_one',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
      
                },
                items:[

                    ///////////////////////////////////////Membership card
                    {
                        xtype: 'container',
                        id: 'containerMyAccount_DashboardMaster_inner_one_left',
                       // width: '50%',
                        width: '30%',
                        height: '100%',
                       // hidden:true,
                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                      //  style: 'border:2px solid #D25959;background-color:transparent',
                      style: "background-color: transparent;",
                        //style: "background-color: #F35B57;",
                        title: 'DashboardNewMaster_inner_one_left',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                    
                        },
                        items:[

                            {
                                xtype: 'container',
                                id: 'containerMyAccount_DashboardMaster_inner_one_left_inner',
                               // width: '50%',
                                width: '90%',
                                height: '100%',
                               // hidden:true,
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                             
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'
                            
                                },
                                items:[
                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        /// hidden:true,
                                        margin: '20 0 0 0',
                                        //style: {
                                        //    // background: '#D25959',
                                        //    background: 'transparent',
                                        //    // border: '2px'
                                        //},
                                        //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        style: 'background-color:transparent',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                             {
                                                 margin: '0 0 0 20',                                                
                                                // width: 100,
                                                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                 id:'htmlLabel_MembershipCard',
                                                 html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Cards</b></div>'
                                                 // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                             },
                                            //  {
                                            //      xtype: 'spacer'
                                            //  },
                                            //   {
                                            //       xtype: 'button',
                                            //       hidden: true,
                                            //       id: 'btnMyDashboard_AyohaRewardInfo',
                                            //       //  badgeText: '1',
                                            //       margin: '10 10 0 0',
                                            //       height: 35,
                                            //       width: 35,
                                            //       html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                                            //       ui: 'plain',
                                            //       handler: function () {
                                            //           swalFireGeneralMsg("A Rule Stamp Message will be pop up to remind mechandiser before card stamped")
                                            //       }
                                            //   },
                            
                                        ]
                                    },
                            
                            
                            
                            
                            {
                            
                            xtype: 'container',
                            id: 'containerAyohaRewards',
                            
                            //  hidden: true,
                            style: "background-color: transparent;",
                            margin: '5 0 0 0',
                            width: '100%',
                            height: 280,
                            
                            //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                            layout: {
                              type: 'vbox',
                              pack: 'start',
                              align: 'center'
                            
                            },
                            items: [
                            
                                {
                                    xtype: 'list',
                                    margin:'5 0 0 0',
                                    //flex:1,
                                    height: 300,
                                   // hidden:true,
                                    store: 'MembershipCardLoadByEnterpriseAccNoMerchantVersionStore',
                                    id: 'DashboardMembershipCardID',
                                    mode: 'SINGLE',
                                    //grouped: true,
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
                                    //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                                    //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                    //   '</div>' +
                                    //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
                            
                                   // itemTpl: '<div onClick="FloatPanel_MembershipCardManagement_EditCardShow_Edit({ID})" class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                    itemTpl: '<div class="dropdown" style="float:right;"><button class="dropbtn">...</button><div class="dropdown-content"> <div onClick="FloatPanel_MembershipCardManagement_EditCardShow_Edit({ID})">Setting</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">View Membership Card</div> <div onClick="FloatPanel_MembershipCardManagement_EditCardShow_Edit({ID})">Members</div></div>   </div><br><div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                
                                    //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                    '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                '</div>' +
                                                                // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                    '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
                                    '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:30px;font-weight:bold;">{MembersCount}</div></div>' +
                                   //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +
                            
                                    '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Privilage Level</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
                                  //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                                    //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                                      '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardType}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">RM{MembershipCardFee}</div></div>',
                                     // '<br><div class="blink_me" style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px;color:blue"><u>Click Card To Setting</u></div>',
                            
                                    //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
                            
                            
                                    emptyText: '<div  style="background-color:transparent;width:100%;height106%;"><img src="resources/icons/noMembershipcard.png" style="width:150px;height:150px" alt="Company Name"><br>No Membership Card Created</div>',
                            
                            
                            
                            
                                  //  width: '90%',
                                    width: 360,
                                    // listeners: {
                                    //     itemsingletap: function (list, idx, target, records, evt) {
                            
                                    //         var ID = records.get('ID');
                            
                                    //         FloatPanel_MembershipCardManagement_EditCardShow_Edit(ID);
                            
                                    //     },
                                    //     deselect: function (list, records) {
                            
                                    //     }
                                    // },
                            
                                },
                                 
                            ]
                            
                            },
                                                           
                           
                                     /////////old x leh tutup lagi
                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          hidden:true,
                                          height: 100,
                                          margin: '-4 0 0 0',
                                          name: 'nameContainer_Dashboard_LoyaltyCampaignsSummary_LatestPoint',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [
                                              {
                                                  xtype: 'spacer',
                                                 
                                              },
                                              {
                                                  xtype: 'container',
                                                  width: '92%',
                                                  height: 100,
                                                  margin: '0 0 0 0',
                                                
                                                 
                                                  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                 
                                                 // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 10px 10px 10px 10px;',
                                                 
                                                 
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                       {
                                                           xtype: 'spacer',
                                                           width:20
                                                       },
                                                          
                                                        {
                                                            xtype: 'container',
                                                            width: '60%',
                            
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
                                                                pack: 'center',
                                                                align: 'center',
                                                            },
                                                            items: [
                                                                 //{
                                                                 //    margin: '0 0 0 0',
                                                                 //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Points Loyalty</div>',
                                                                 //},
                            
                            
                                                                 {
                                                                     xtype: 'container',
                                                                     width: '100%',
                            
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
                                                                         pack: 'center',
                                                                         align: 'left',
                                                                     },
                                                                     items: [
                                                                          {
                                                                              margin: '0 0 0 0',
                                                                              id: 'htmlAyohaRewardPoint_MemberNameTxt',
                                                                              html: '<div style="color:black;text-align: left;font-size:11px;width:100%;font-weight:normal">Member Name:</div>',
                                                                          },
                                                                         {
                                                                             margin: '-5 0 0 0',
                                                                             id: 'htmlAyohaRewardPoint_MemberName',
                                                                             html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Mohd Akmal</div>',
                                                                         },
                                                                  {
                                                                      margin: '0 0 0 0',
                                                                      id: 'htmlAyohaRewardPoint_DateTxt',
                                                                      html: '<div style="color:black;text-align: left;font-size:11px;width:100%;font-weight:normal">Date:</div>',
                                                                  },
                                                                   {
                                                                       margin: '-5 0 0 0',
                                                                       id: 'htmlAyohaRewardPoint_Date',
                                                                       html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">03/11/2021 09:55:45 PM</div>',
                                                                   },
                            
                                                                     ]
                                                                 },
                            
                            
                                                                  
                                                            ]
                                                        },
                                                         {
                                                             xtype: 'container',
                                                             width: '30%',
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
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                       {
                                                                         
                            
                                                                           margin: '-15 0 0 75',
                                                                           id: 'html_DashboardPointIcon',
                                                                           //badgeText: "2",
                                                                           html: '<img src="resources/icons/ExpandArrowPurple.png" width="12" height="12" alt="Company Name">',
                                                                        
                                                                       },
                            
                                                                  {
                                                                      margin: '-10 0 0 0',
                                                                      id: 'htmlAyohaRewardPoint_PointEarnTxt',
                                                                      html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Point Earn:</div>',
                                                                  },
                                                                  {
                                                                      margin: '-5 0 0 0',
                                                                      id: 'htmlAyohaRewardPoint_PointEarn',
                                                                      html: '<div style="color:black;text-align: center;font-size:36px;width:100%;font-weight:bold">400</div>',
                                                                  },
                                                                   //{
                                                                   //    xtype: 'button',
                                                                   //    height: 80,
                                                                   //    width: 80,
                            
                                                                   //    margin: '2 0 0 0',
                                                                   //    id: 'btnMyAccount_DashboardPoint_MemberPicture',
                                                                   //    //badgeText: "2",
                                                                   //    html: '<img src="resources/icons/picprofile.png" width="70" height="70" alt="Company Name">',
                                                                   //    ui: 'plain',
                                                                   //    handler: function () {
                            
                                                                   //        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                   //        //  setupMovementMap(2);
                            
                            
                            
                            
                            
                                                                   //        //Ext.getCmp('mainView').setActiveItem(16);
                                                                   //        //loadNotificationSummary();
                                                                   //    }
                                                                   //},
                            
                                                             ]
                                                         },
                                                         
                                                   
                                                  ]
                                              },
                            
                                              {
                                                  xtype: 'spacer'
                                              },
                                          ]
                            
                                      },  
                                       {
                                           margin: '20 0 0 14',
                                           //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                           // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'
                            hidden:true,
                                           xtype: 'container',
                                           width: '100%',
                                           style: 'background-color:transparent',
                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'left',
                                           },
                                           items: [
                                               {
                                                   html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Latest Stamp-</div>',
                                               },
                                               {
                                                   margin: '-10 0 0 0',
                                                   html: '<div style="color:black;text-align: left;font-size:11px;width:100%;"><img src="resources/icons/loyaltyStampIconWhite01.png"  style="width:30px;height;30px;" alt="Company Name"></div>',
                                               },
                                               {
                                                   xtype: 'spacer',
                                               },
                                                  {
                                                      xtype: 'button',
                                                      margin: '-5 0 0 0',
                                                      id: 'btnDashboard_LatestStamp_ViewAll',
                                                      height: 30,
                                                      width: 60,
                                                      hidden:true,
                                                      // iconCls: 'list',
                                                      html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                                                      //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          // AyohaMerchantReviewShow();
                                                          //AyohaMerchantReviewShow_FromDashboard();
                                                      }
                            
                                                  },
                                                  {
                                                      xtype: 'panel',
                                                      width: 23
                                                  }
                            
                            
                                           ]
                            
                                       },
                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: 100,
                                          hidden:true,
                                          margin: '-4 0 0 0',
                                          name: 'nameContainer_Dashboard_LoyaltyCampaignsSummary_LatestStamp',
                                         
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [
                                              {
                                                  xtype: 'spacer',
                            
                                              },
                                              {
                                                  xtype: 'container',
                                                  width: '92%',
                                                  height: 100,
                                                  margin: '0 0 0 0',                         
                                                 
                                                  
                                                  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                 
                                                  //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 10px 10px 10px 10px;',
                                                 layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                       {
                                                           xtype: 'spacer',
                                                           width: 20
                                                       },
                            
                                                        {
                                                            xtype: 'container',
                                                            width: '60%',
                            
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
                                                                pack: 'center',
                                                                align: 'center',
                                                            },
                                                            items: [
                                                                 //{
                                                                 //    margin: '0 0 0 0',
                                                                 //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Points Loyalty</div>',
                                                                 //},
                            
                            
                                                                 {
                                                                     xtype: 'container',
                                                                     width: '100%',
                            
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
                                                                         pack: 'center',
                                                                         align: 'left',
                                                                     },
                                                                     items: [
                                                                          {
                                                                              margin: '0 0 0 0',
                                                                              id: 'htmlAyohaRewardStamped_MemberNameTxt',
                                                                              html: '<div style="color:black;text-align: left;font-size:11px;width:100%;font-weight:normal">Member Name:</div>',
                                                                          },
                                                                         {
                                                                             margin: '-5 0 0 0',
                                                                             id: 'htmlAyohaRewardStamped_MemberName',
                                                                             html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Mohd Akmal</div>',
                                                                         },
                                                                  {
                                                                      margin: '0 0 0 0',
                                                                      id: 'htmlAyohaRewardStamped_DateTxt',
                                                                      html: '<div style="color:black;text-align: left;font-size:11px;width:100%;font-weight:normal">Date:</div>',
                                                                  },
                                                                   {
                                                                       margin: '-5 0 0 0',
                                                                       id: 'htmlAyohaRewardStamped_Date',
                                                                       html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">03/11/2021 09:55:45 PM</div>',
                                                                   },
                            
                                                                     ]
                                                                 },
                            
                            
                            
                                                            ]
                                                        },
                                                         {
                                                             xtype: 'container',
                                                             width: '30%',
                            
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
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                       {
                            
                            
                                                                           margin: '-15 0 0 75',
                                                                           id: 'html_DashboardStampedIcon',
                                                                           //badgeText: "2",
                                                                           html: '<img src="resources/icons/ExpandArrowPurple.png" width="12" height="12" alt="Company Name">',
                            
                                                                       },
                                                                  {
                                                                      margin: '-10 0 0 0',
                                                                      id: 'htmlAyohaRewardStamped_StampedEarnTxt',
                                                                      html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Stamped:</div>',
                                                                  },
                                                                  {
                                                                      margin: '-5 0 0 0',
                                                                      id: 'htmlAyohaRewardStamped_StampedEarn',
                                                                      html: '<div style="color:black;text-align: center;font-size:36px;width:100%;font-weight:bold">0/0</div>',
                                                                  },
                                                                   //{
                                                                   //    xtype: 'button',
                                                                   //    height: 80,
                                                                   //    width: 80,
                            
                                                                   //    margin: '2 0 0 0',
                                                                   //    id: 'btnMyAccount_DashboardPoint_MemberPicture',
                                                                   //    //badgeText: "2",
                                                                   //    html: '<img src="resources/icons/picprofile.png" width="70" height="70" alt="Company Name">',
                                                                   //    ui: 'plain',
                                                                   //    handler: function () {
                            
                                                                   //        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                   //        //  setupMovementMap(2);
                            
                            
                            
                            
                            
                                                                   //        //Ext.getCmp('mainView').setActiveItem(16);
                                                                   //        //loadNotificationSummary();
                                                                   //    }
                                                                   //},
                            
                                                             ]
                                                         },
                            
                            
                                                  ]
                                              },
                            
                                              {
                                                  xtype: 'spacer'
                                              },
                                          ]
                            
                                      },
                            
                                      //////
                                    
                                ]
                            },
                                 

                               
                        ]
                    },

                




///////////////////////////////////////Total Member


{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_one_center',
   // width: '50%',
    width: '25%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardNewMaster_inner_one_center',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[


        {
            xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_one_center_inner',
           // width: '50%',
            width: '90%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
         
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
        
            },
            items:[
                {
                    id:'htmlDashboard_ActiveMembershipCardLbl',
                   // margin:'20 0 0 0',
                    margin: '20 0 0 20',
                    html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Total Members</b></div>'
                  //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                },
             
        
        
        
                {
                         xtype: 'container',
                         //  style: 'background-color:#f7347a;border-radius: 50%;',
                         // style: 'background-color:#C72CB4;border-radius: 50%;border:2px solid purple',
            
            
                         style: "background-color: transparent;",
                         //  style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac',
            
            
                         margin: '25 0 0 60',
                         id: 'htmlDashboard_AyohaRewardLogos',
                         name: 'containerNameAyohaRewards',
                         zIndex: 200,
                        // width: 230,
                         width: '70%',
                         height: 230,
                        //  width: 200,
                        //  height: 230,
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'
            
                         },
                         items: [
            
            
                             {
                                 xtype: 'container',
                                
                                 width: '100%',
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'
            
                                 },
                                 items: [
            
                                     {
                                         width: 16,
                                         height: 16,
                                         html: '<div style="margin:30px 0px 0px -10px"><img src="resources/icons/shiningIcon.png" width="16" height="16" alt="Company Name"></div>',
                                     },
                                     {
                                         xtype: 'spacer'
                                     },
                                     {
                                         width: 26,
                                         height: 26,
                                         html: '<div style="margin:20px 0px 0px 10px"><img src="resources/icons/shiningIcon.png" width="26" height="26" alt="Company Name"></div>',
                                     },
                                 ]
            
                             },
            
                             {
            
                                 //  html: '<div  class="pulse" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px"><div style="color:black;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>2560</b></div><br><div style="color:black;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div></div>'
                                 id: 'Dashboard_AyohaRewardPoint',
                                 html: '<div onclick="FloatPanel_SubscriberListShow()" class="example-1" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="margin:50px 0px 0px 0px"><img src="resources/icons/MembershipsMembersWhite.png" width="80" height="80" alt="Company Name"></div><br><div style="color:white;text-align: center;font-size:48px;width:100%;margin:-50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Total Unique Members</b></div></div>'
            
            
            
                             },
                               {
                                   xtype: 'container',
                                   width: '100%',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
            
                                   },
                                   items: [
            
                                       {
                                           width: 36,
                                           height: 36,
                                           html: '<div style="margin:-30px 0px 0px -10px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                       },
                                       {
                                           xtype: 'spacer'
                                       },
                                       {
                                           width: 20,
                                           height: 20,
                                           html: '<div style="margin:-20px 0px 0px 10px"><img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name"></div>',
                                       },
                                   ]
            
                               },
                             {
                                 hidden: true,
                                 id: 'htmlDashboard_AyohaPointCollected',
                                 html: '<div style="color:black;text-align: center;font-size:48px;width:100%;"><b>2560</b></div>'
                             }, {
                                 hidden: true,
                                 margin: '-10 0 0 0',
                                 id: 'htmlDashboard_AyohaPointCollectedTxt',
                                 html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>Collected Point</b></div>'
                             },
                              {
                                  //width: 220,
                                  hidden: true,
                                  //  id: 'btnDashboard_Redeem',
                                  // margin: '5 0 0 0',
                                  ////left:-2,
                                  //height: 150,
                                  //  html: '<img src="resources/icons/founder.jpg" width="220" height="150" border:2px solid red; border-radius: 50%; max-width:300px; alt="Company Name">',
                                  id: 'htmlDashboard_Redeem',
                                  html: '<div style="margin:-110px 0px 0px 0px" class="blink_me"><button class="buttonRedeem">Redeem!</button></div>',
                                  //html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" style="width: 64px; height: 64px;" /></div>',
                              },
                         ]
                         // html: '<img src="resources/icons/ayohaReward01.gif" style="width: 230px; height: 230px;" />',
                     },
        
        
            ]
        },





     


    ]
},

///////////////////////////////////////Membership Status Chart Bar
{
    xtype: 'container',
   // id: 'containerMyAccount_DashboardMaster_inner_one_right',
    //width: '37%',
   width: '45%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardNewMaster_inner_one_right_StatusBarChart',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_one_right_inner_StatusBarChart',
           // width: '50%',
            width: '95%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:4%',
         
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
        
            },
            items:[
                               //////// Chart top6 active member
                               {
                                margin: '20 0 0 14',
                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'
           
                                xtype: 'container',
                                width: '100%',
                                style: 'background-color:transparent',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'left',
                                },
                                items: [
                                    {
                                        //id:'htmlDashboard_ActiveMembershipCountLbl',
                                        html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Status</b></div>'
                                      //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                                    },
                                    //{
                                    //    margin: '-10 0 0 0',
                                    //    html: '<div style="color:black;text-align: left;font-size:11px;width:100%;"><img src="resources/icons/loyaltyStampIconWhite01.png"  style="width:30px;height;30px;" alt="Company Name"></div>',
                                    //},
                                    {
                                        xtype: 'spacer',
                                    },
                                       {
                                           xtype: 'button',
                                           margin: '-5 0 0 0',
                                           hidden:true,
                                           height: 30,
                                           width: 60,
                                           // iconCls: 'list',
                                           html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                                           //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {
                                               // AyohaMerchantReviewShow();
                                               //AyohaMerchantReviewShow_FromDashboard();
                                           }
           
                                       },
                                       {
                                           xtype: 'panel',
                                           width: 23
                                       }
           
           
                                ]
           
                            },
            {
               
                xtype: 'container',
                style: "background-color: transparent;",
                width: '100%',
                margin: '-7 0 0 0',
                id: 'ContainerDashboard_StatusBarChart',
                // width: 800,
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'left'
                },
                items: [
                   
                   
  
                 
                  {
                     // margin: '0 0 0 -80', 
                      margin: '20 0 0 40', 
                     // width: '75%',
                      id:'Dashboard_MembershipStatusBarChart',                         
                      html: ' <canvas id="chart_MembershipStatusBarChart" style="width: 95%; height: 320px;"></canvas>',
                      //  html: ' <div id="chart_InvoiceIssuedCountAmount" style="width: 100%; height: 360px;"></div>',
                  },







                ]

            },
            // {
            //     margin:'10 0 0 130', 
            //     id:'DashboardMembershipStatusBarChartNoStatus',             
                                
            //    // html: '<img  id="imgDashboardNoMembership" src="resources/icons/notop6.png" alt="Girl in a jacket" style="width:400px;height:300px;">',
            //     html: '<img  id="imgMembershipStatusBarChartNoStatus" src="resources/icons/bgPutih.png" alt="Girl in a jacket" style="width:400px;height:300px;">',
            //     //  html: ' <div id="chart_InvoiceIssuedCountAmount" style="width: 100%; height: 360px;"></div>',
            // },

            ]
        },
                          
 
              
              










                          


              



           
    ]
},
                ]
              },

////////// 2nd new Horizon
///////////////////////////////////////
{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon2ndNewHorizon',
    margin: '35 0 0 0',
    width: '100%',
    //height: 720,
    height: 430,
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardNewMaster_inner_one_2ndNewHorizon',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items:[

        {
            xtype:'spacer',
            width: '1.5%',
           },
   
 ///// Recent Activity
        {
            xtype: 'container',
            hidden:true,
           // id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1',
           width: '38%',
          //  width: '33.6%',
            //height: 720,
            height: '100%',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
           // style: "background-color: transparent;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:4%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[

                {
                    margin: '20 0 0 0',
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'

                    xtype: 'container',
                    width: '90%',
                    style: 'background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                       
                        //{
                        //    margin: '-10 0 0 0',
                        //    html: '<div style="color:black;text-align: left;font-size:11px;width:100%;"><img src="resources/icons/loyaltyStampIconWhite01.png"  style="width:30px;height;30px;" alt="Company Name"></div>',
                        //},
                        {
                            margin: '0 0 0 0',
                            id:'htmlDashboard_LatestActivityLbl',                                            
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Recent Activity</b></div>'
                          //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        },
                        {
                            xtype: 'spacer',
                        },
                           {
                               xtype: 'button',
                               margin: '-5 0 0 0',
                               //hidden:true,
                             height: 30,
                               width: 60,
                               // iconCls: 'list',
                               html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                               //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   // AyohaMerchantReviewShow();
                                   //AyohaMerchantReviewShow_FromDashboard();
                               }

                           },
                           {
                               xtype: 'panel',
                               width: 23
                           }


                    ]

                },
{
   
    xtype: 'container',
    style: "background-color: transparent;",
    width: '100%',
    margin: '0 0 0 0',
   // height: 400,
   // id: 'ContainerDashboardInvoiceStatusOverDue',
    // width: 800,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
       
       
        {
           // hidden:true,
           margin: '10 0 0 0',
            xtype: 'list',
            width: '90%',
            height: 370,
          //  height: '100%',
            // flex: 1,
            //store: _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore,
            // store:'AyohaUserDashBoardNearestRedeemItemListStore',
            id: 'DashboardList_LatestActivity',
            mode: 'SINGLE',
            // width: '100%',
           //grouped:true,
           style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
            itemTpl: '<div  class="myContent" style="background-color:white;width:100%;height:50px;">' +


            //  '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 20px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({UserPhoto}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:70%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{AccountNo}</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{LoyaltyActivity} - {UpdatedDate}</font></td></tr></table><br>'
            //  + '<div style="width:94%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{LoyaltyActivity} - {UpdatedDate}</div>'
            //      + '</div>',


            '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;margin:0px 0px 0px 0px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:center;vertical-align:middle;word-break:normal;width:16%;cursor: pointer;" rowspan="2"><img src="{Photo}" onclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" style="border:1px solid white; width:55px;height:55px;border-radius:50%"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:middle;word-break:normal;width:40%" rowspan="2">{AccountName}</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:100%;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal;width:55%" rowspan="2"><div style="font-weight:bold;font-size:10px;margin:0px 0px -22px 0px">{TblActivity}-{LoyaltyActivity}</div><br><div style="font-weight:bold;font-size:9px;margin:0px 0px 0px 0px">{UpdatedDate}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td></tr></thead></table>',

           // emptyText: '<div  style="background-color:transparent;width:100%;height106%;">No Members Activity</div>',
            //emptyText: '<div  style="background-color:transparent;width:100%;height106%;">No Members Activity</div>',
            emptyText: '<div  style="background-color:transparent;width:100%;height100%;"><img src="resources/icons/NoActivityIcon.png" style="width:150px;height:150px" alt="Company Name"><br>No Members Activity</div>',  

        },
     
    //   {
       
    //       margin: '-20 0 0 -77', 
    //       id:'DashboardHaveMembership',                         
    //       html: ' <div id="chart_top6Membership" style="width: 620px; height: 400px;"></div>',
        
    //   },







    ]

},
{
    margin:'10 0 0 130', 
    id:'DashboardNoMembership',             
                    
   // html: '<img  id="imgDashboardNoMembership" src="resources/icons/notop6.png" alt="Girl in a jacket" style="width:400px;height:300px;">',
    html: '<img  id="imgDashboardNoMembership" src="resources/icons/bgPutih.png" alt="Girl in a jacket" style="width:400px;height:300px;">',
    //  html: ' <div id="chart_InvoiceIssuedCountAmount" style="width: 100%; height: 360px;"></div>',
},
                /////////////////////////////////////////////////////////////////////////////////////


{

    xtype: 'container',
    hidden:true,
    //id: 'containerMyAccount_DashboardMaster_inner_one_right',
    //width: '37%',
   width: '95%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardNewMaster_inner_one_right',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_one_right_inner',
           // width: '50%',
            width: '95%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:4%',
         
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                               //////// Chart top6 active member
                             

            ]
        },
               
    
]
}
            ]

        },
        // {
        //     xtype:'spacer',
        //     width: '1%',
        //    },

/////// Membership Growth
{
    xtype: 'container',
    // id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1',
     width: '69%',
   //  width: '33.6%',
     //height: 720,
     height: '100%',
     //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
     style: "background-color: transparent;",
     layout: {
         type: 'vbox',
         pack: 'start',
         align: 'center'
 
     },
     items:[
        {
            xtype: 'container',
       // id: 'containerMyAccount_DashboardMaster_inner_one_right_inner',
       // width: '50%',
        width: '100%',
        height: '100%',
       // hidden:true,
        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
        style: 'border:1px solid #CCCCCC;background-color:white;border-radius:4%',
     
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'
    
        },
        items:[
            {
                margin: '20 0 0 0',
                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'

                xtype: 'container',
                width: '90%',
                style: 'background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'left',
                    align: 'left',
                },
                items: [
                   
                    //{
                    //    margin: '-10 0 0 0',
                    //    html: '<div style="color:black;text-align: left;font-size:11px;width:100%;"><img src="resources/icons/loyaltyStampIconWhite01.png"  style="width:30px;height;30px;" alt="Company Name"></div>',
                    //},
                    {
                        margin: '0 0 0 0',
                       // id:'htmlDashboard_LatestActivityLbl',                                            
                        html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Growth</b></div>'
                      //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                    },
                    {
                        xtype: 'spacer',
                    },
                       {
                           xtype: 'button',
                           margin: '-5 0 0 0',
                           hidden:true,
                         height: 30,
                           width: 60,
                           // iconCls: 'list',
                           html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                           //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {
                               // AyohaMerchantReviewShow();
                               //AyohaMerchantReviewShow_FromDashboard();
                           }

                       },
                       {
                           xtype: 'panel',
                           width: 23
                       }


                ]

            },
            {
                margin:'0 0 0 0',
                html:'<div style="width: 100%; height: 400px; padding: 15px; overflow: hidden;"><canvas id="membershipGrowthChart"></canvas></div>'
            }
        ]
        }

     ]

   },
//    {
//     xtype:'spacer',
//     width: '1%',
//    },

 ///// Membership Tier

       {
        xtype: 'container',
        // id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1',
         width: '29%',
       //  width: '33.6%',
         //height: 720,
         height: '100%',
         //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
         style: "background-color: transparent;",
         layout: {
             type: 'vbox',
             pack: 'start',
             align: 'center'
     
         },
         items:[
            {
                xtype: 'container',
           // id: 'containerMyAccount_DashboardMaster_inner_one_right_inner',
           // width: '50%',
            width: '95%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:4%',
         
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    margin: '20 0 0 0',
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'

                    xtype: 'container',
                    width: '90%',
                    style: 'background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                       
                        //{
                        //    margin: '-10 0 0 0',
                        //    html: '<div style="color:black;text-align: left;font-size:11px;width:100%;"><img src="resources/icons/loyaltyStampIconWhite01.png"  style="width:30px;height;30px;" alt="Company Name"></div>',
                        //},
                        {
                            margin: '0 0 0 0',
                           // id:'htmlDashboard_LatestActivityLbl',                                            
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Tier</b></div>'
                          //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        },
                        {
                            xtype: 'spacer',
                        },
                           {
                               xtype: 'button',
                               margin: '-5 0 0 0',
                               hidden:true,
                             height: 30,
                               width: 60,
                               // iconCls: 'list',
                               html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                               //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   // AyohaMerchantReviewShow();
                                   //AyohaMerchantReviewShow_FromDashboard();
                               }

                           },
                           {
                               xtype: 'panel',
                               width: 23
                           }


                    ]

                },
                {
                    margin:'20 0 0 0',
                    html:'<canvas id="chart_MembershipLevelPieChart"></canvas>'
                }
            ]
            }

         ]

       },
       {
        xtype:'spacer',
        width: '1.5%',
       },
       
    ]
},





              
     /// container 2horizontal 
     //Top5 Active member         
{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon2',
    margin: '35 0 0 0',
    width: '100%',
    //height: 720,
    height: 430,
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardNewMaster_inner_one',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items:[

        {
            xtype:'spacer',
            width: '1.5%',
           },
   
        {
            xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1',
            width: '68%',
          //  width: '33.6%',
          height: 430,
          //  height: '100%',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    //id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1_inner_inner',
                   // width: '50%',
                    width: '100%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'center'
                
                    },
                    items:[
                        {
                            xtype: 'container',
                           // id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1_inner',
                           // width: '50%',
                            width: '50%',
                            height: '100%',
                            style: "background-color: transparent;",
                           // hidden:true,
                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                          //  style: 'border:1px solid grey;background-color:transparent;border-radius:5%',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                        
                            },
                            items:[
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height:20,
                                    margin: '20 0 0 0',
                                    style: {
                                        // background: '#D25959',
                                        background: 'transparent',
                                        // border: '2px'
                                    },
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [
                                       

                                        {
                                            id:'htmlDashboard_ActiveMembershipCountLbl',
                                            margin: '0 0 0 20',
                                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Recent Activity</b></div>'
                                          //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                                        },
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin:'15 0 0 0',
                                    width: '90%',
                                    height: 350,
                                    //height: '95%',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items:[

                                        
                  {
                    // margin: '0 0 0 -80', 
                     margin: '0 0 0 30', 
                     id:'DashboardHaveMembership',                         
                     html: ' <div  id="chart_top6Membership" style="width: 670px; height: 400px;"></div >',
                     //  html: ' <div id="chart_InvoiceIssuedCountAmount" style="width: 100%; height: 360px;"></div>',
                 },



                                        // {
                                        //     hidden:true,
                                        //     xtype: 'list',
                                        //     width: '106%',
                                        //     //height: 300,
                                        //     height: '100%',
                                        //     // flex: 1,
                                        //     //store: _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore,
                                        //     // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                        //     id: 'DashboardList_LatestActivity',
                                        //     mode: 'SINGLE',
                                        //     // width: '100%',
                                        //    //grouped:true,
                                        //    style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        //     disableSelection: true,
                                        //     scrollable: {
                                        //         direction: 'vertical',
                                        //         indicators: {
                                        //             y: {
                                        //                 autoHide: true
                                        //             },
                                        //             x: {
                                        //                 autoHide: true
                                        //             }
                                        //         }
                                        //     },
                                        //     itemTpl: '<div  class="myContent" style="background-color:white;width:100%;height:50px;">' +
                        
                        
                                        //     //  '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 20px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({UserPhoto}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:70%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{AccountNo}</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{LoyaltyActivity} - {UpdatedDate}</font></td></tr></table><br>'
                                        //     //  + '<div style="width:94%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{LoyaltyActivity} - {UpdatedDate}</div>'
                                        //     //      + '</div>',
                        
                        
                                        //     '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 106%;margin:-5px 0px 0px -20px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:center;vertical-align:middle;word-break:normal;width:16%;cursor: pointer;" rowspan="2"><img src="{Photo}" onclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" style="border:1px solid white; width:55px;height:55px;border-radius:50%"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:middle;word-break:normal;width:40%" rowspan="2">{AccountName}</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:100%;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal;width:55%" rowspan="2"><div style="font-weight:bold;font-size:10px;margin:0px 0px -22px 0px">{TblActivity}-{LoyaltyActivity}</div><br><div style="font-weight:bold;font-size:9px;margin:0px 0px 0px 0px">{UpdatedDate}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td></tr></thead></table>',
                        
                                        //    // emptyText: '<div  style="background-color:transparent;width:100%;height106%;">No Members Activity</div>',
                                        //     //emptyText: '<div  style="background-color:transparent;width:100%;height106%;">No Members Activity</div>',
                                        //     emptyText: '<div  style="background-color:transparent;width:100%;height106%;"><img src="resources/icons/NoActivityIcon.png" style="width:150px;height:150px" alt="Company Name"><br>No Members Activity</div>',  
                        
                                        // },
                        
                                    ]
                                    
                                },
                                
                            ]
                        },
                        {
                         xtype:'spacer',
                        },
                        {
                            xtype: 'container',
                           // id: 'containerMyAccount_DashboardMaster_inner_Horizon2_3',
                          //  width: '33.6%',
                            width: '50%',
                            margin: '0 0 0 20',
                            //height: 720,
                            height: '100%',
                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            style: "background-color: transparent;",
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                        
                            },
                            items:[
                                {
                                    xtype: 'container',
                                    width: '95%',
                                    height:20,
                                    margin: '20 0 0 0',
                                    style: {
                                        // background: '#D25959',
                                        background: 'transparent',
                                        // border: '2px'
                                    },
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [
                                        {
                                            id:'htmlDashboard_LoyaltyCampaignActivityLbl',
                                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Loyalty Campaign Activity</b></div>'
                                          //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                                        },
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height:25,
                                },
                                {
                               
                                                    xtype: 'container',
                                                    style: "background-color: transparent;",
                                                    width: '95%',
                                                    height: 100,
                                                    margin: '0 0 0 0',
                                                    
                                                  //  hidden:true,
                                                    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'start',
                                                        align: 'center'
                               
                                                    },
                                                    items: [
                                                         
                                                        {
                                                            xtype: 'container',
                                                            width: '45%',
                                                            height: 100,
                                                            margin: '0 0 0 0',
                                                            style: 'border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                          //  style: 'border-right:0.1px none #ECECEC;border-left:0.1px none #ECECEC;border-bottom:0.1px none #ECECEC;border-top:0.1px none #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'center',
                                                                align: 'center',
                                                            },
                                                            items: [
                                                                  {
                                                                      xtype: 'container',
                                                                      width: '100%',
                               
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
                                                                        
                                                                      },
                                                                      items: [
                                                                           {
                                                                               margin: '0 0 0 0',
                                                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Total Stamped</div>',
                                                                           },
                                                                           
                                                                      ]
                                                                  },
                                                                     {
                                                                         xtype: 'container',
                                                                         width: '100%',
                               
                                                                         margin: '-5 0 0 0',
                                                                         //style: {
                                                                         //    // background: '#D25959',
                                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                                         //    // border: '2px'
                                                                         //},
                                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                         style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'center',
                                                                             align: 'center',
                                                                         },
                                                                         items: [
                                                                              {
                                                                                
                                                                                      xtype: 'button',
                                                                                      height: 60,
                                                                                      width: 60,
                                                                                 
                                                                                      margin: '0 0 0 0',
                                                                                      id: 'btnDashboard_LoyaltyCampaingActivity_Stamp',
                                                                                      //badgeText: "2",
                                                                                      html: '<img src="resources/icons/latestStampcardPurple.png" width="50" height="50" alt="Company Name">',
                                                                                      ui: 'plain',
                                                                                      handler: function () {
                               
                                                                                          //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                                          //  setupMovementMap(2);
                               
                               
                               
                               
                               
                                                                                          //Ext.getCmp('mainView').setActiveItem(16);
                                                                                          //loadNotificationSummary();
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      margin: '0 0 0 0',
                                                                                      id: 'htmlDashboard_LoyaltyCampaingActivity_StampCount',
                                                                                      html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                                  },
                                                                                  //margin: '10 0 0 0',
                                                                                  //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                                                                             
                                                                         ]
                                                                     },
                                                                  {
                                                                      margin: '0 0 0 0',
                                                                      id: 'htmlDashboard_LoyaltyCampaingActivity_StampCountDate',
                                                                      html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Last Update On:27/1/2024 04:35:56 PM</div>',
                                                                  },
                                                            ]
                                                        },
                               
                                                        {
                                                            xtype:'spacer',
                                                            width:20
                                                        },
                               
                               
                               
                                                          {
                                                              xtype: 'container',
                                                              width: '45%',
                                                              height: 100,
                                                              margin: '0 0 0 0',
                                                              style: 'border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px none #ECECEC;border-left:0.1px none #ECECEC;border-bottom:0.1px none #ECECEC;border-top:0.1px none #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                            //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                              //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'center',
                                                                  align: 'center',
                                                              },
                                                              items: [
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                               
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
                               
                                                                        },
                                                                        items: [
                                                                             {
                                                                                 margin: '0 0 0 0',
                                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Total Contestant</div>',
                                                                             },
                               
                                                                        ]
                                                                    },
                                                                       {
                                                                           xtype: 'container',
                                                                           width: '100%',
                               
                                                                           margin: '-5 0 0 0',
                                                                           //style: {
                                                                           //    // background: '#D25959',
                                                                           //    background: 'rgba(76, 175, 80, 0.3);',
                                                                           //    // border: '2px'
                                                                           //},
                                                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                           style: 'background-color:transparent',
                                                                           layout: {
                                                                               type: 'hbox',
                                                                               pack: 'center',
                                                                               align: 'center',
                                                                           },
                                                                           items: [
                                                                                {
                               
                                                                                    xtype: 'button',
                                                                                    height: 60,
                                                                                    width: 60,
                               
                                                                                    margin: '0 0 0 0',                                                               
                                                                                    //badgeText: "2",
                                                                                    html: '<img src="resources/icons/contest01-removebg-preview.png" width="40" height="40" alt="Company Name">',
                                                                                    ui: 'plain',
                                                                                    handler: function () {
                               
                                                                                        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                                        //  setupMovementMap(2);
                               
                               
                               
                               
                               
                                                                                        //Ext.getCmp('mainView').setActiveItem(16);
                                                                                        //loadNotificationSummary();
                                                                                    }
                                                                                },
                                                                                    {
                                                                                        margin: '0 0 0 0',
                                                                                        id: 'htmlDashboard_LoyaltyCampaingActivity_TotalContestantCount',
                                                                                        html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                                    },
                                                                                    //margin: '10 0 0 0',
                                                                                    //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                               
                                                                           ]
                                                                       },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlDashboard_LoyaltyCampaingActivity_TotalContestantCountDate',
                                                                            html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:27/1/2024 04:43:12 PM</div>',
                                                                        },
                               
                                                              ]
                                                          },
                                                           {
                                                               xtype: 'spacer',
                                                               width:40
                                                           },
                                                    ]
                               
                               
                                                },
                               
                                                {
                               
                                                    xtype: 'container',
                                                    style: "background-color: transparent;",
                                                    width: '95%',
                                                   // height: 100,
                                                    margin: '15 0 0 0',
                                                  //  hidden:true,
                                                    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'start',
                                                        align: 'center'
                               
                                                    },
                                                    items: [
                                                         
                                                        {
                                                            xtype: 'container',
                                                            width: '45%',
                                                            height: 100,
                                                            margin: '0 0 0 0',
                                                            style: 'border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'border-right:0.1px none #ECECEC;border-left:0.1px none #ECECEC;border-bottom:0.1px none #ECECEC;border-top:0.1px none #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                          //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'center',
                                                                align: 'center',
                                                            },
                                                            items: [
                                                                  {
                                                                      xtype: 'container',
                                                                      width: '100%',
                               
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
                                                                        
                                                                      },
                                                                      items: [
                                                                           {
                                                                               margin: '0 0 0 0',
                                                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Total Points</div>',
                                                                           },
                                                                           
                                                                      ]
                                                                  },
                                                                     {
                                                                         xtype: 'container',
                                                                         width: '100%',
                               
                                                                         margin: '-5 0 0 0',
                                                                         //style: {
                                                                         //    // background: '#D25959',
                                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                                         //    // border: '2px'
                                                                         //},
                                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                         style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'center',
                                                                             align: 'center',
                                                                         },
                                                                         items: [
                                                                              {
                                                                                
                                                                                      xtype: 'button',
                                                                                      height: 60,
                                                                                      width: 60,
                                                                                 
                                                                                      margin: '0 0 0 0',                                                                
                                                                                      html: '<img src="resources/icons/thisweekpointredemption01.png" width="40" height="40" alt="Company Name">',
                                                                                      ui: 'plain',
                                                                                      handler: function () {
                               
                                                                                          //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                                          //  setupMovementMap(2);
                               
                               
                               
                               
                               
                                                                                          //Ext.getCmp('mainView').setActiveItem(16);
                                                                                          //loadNotificationSummary();
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      margin: '0 0 0 0',
                                                                                      id: 'htmlDashboard_LoyaltyCampaingActivity_TotalPointCount',
                                                                                      html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                                  },
                                                                                  //margin: '10 0 0 0',
                                                                                  //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                                                                             
                                                                         ]
                                                                     },
                                                                  {
                                                                      margin: '0 0 0 0',
                                                                      id: 'htmlDashboard_LoyaltyCampaingActivity_TotalPointCountDate',
                                                                      html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:27/1/2024 04:52:41 PM</div>',
                                                                  },
                                                            ]
                                                        },
                               
                                                        {
                                                            xtype:'spacer',
                                                            width:20
                                                        },
                               
                               
                               
                                                          {
                                                              xtype: 'container',
                                                              width: '45%',
                                                              height: 100,
                                                              margin: '0 0 0 0',
                                                              style: 'border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px none #ECECEC;border-left:0.1px none #ECECEC;border-bottom:0.1px none #ECECEC;border-top:0.1px none #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                            // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                              //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'center',
                                                                  align: 'center',
                                                              },
                                                              items: [
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                               
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
                               
                                                                        },
                                                                        items: [
                                                                             {
                                                                                 margin: '0 0 0 0',
                                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Total Voucher Used</div>',
                                                                             },
                               
                                                                        ]
                                                                    },
                                                                       {
                                                                           xtype: 'container',
                                                                           width: '100%',
                               
                                                                           margin: '-5 0 0 0',
                                                                           //style: {
                                                                           //    // background: '#D25959',
                                                                           //    background: 'rgba(76, 175, 80, 0.3);',
                                                                           //    // border: '2px'
                                                                           //},
                                                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                           style: 'background-color:transparent',
                                                                           layout: {
                                                                               type: 'hbox',
                                                                               pack: 'center',
                                                                               align: 'center',
                                                                           },
                                                                           items: [
                                                                                {
                               
                                                                                    xtype: 'button',
                                                                                    height: 60,
                                                                                    width: 60,
                               
                                                                                    margin: '0 0 0 0',                                                               
                                                                                    html: '<img src="resources/icons/voucer-removebg-preview.png" width="40" height="40" alt="Company Name">',
                                                                                    ui: 'plain',
                                                                                    handler: function () {
                               
                                                                                        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                                        //  setupMovementMap(2);
                               
                               
                               
                               
                               
                                                                                        //Ext.getCmp('mainView').setActiveItem(16);
                                                                                        //loadNotificationSummary();
                                                                                    }
                                                                                },
                                                                                    {
                                                                                        margin: '0 0 0 0',
                                                                                        id: 'htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCount',
                                                                                        html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                                    },
                                                                                    //margin: '10 0 0 0',
                                                                                    //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                               
                                                                           ]
                                                                       },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCountDate',
                                                                            html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:27/1/2024 04:57:25 PM</div>',
                                                                        },
                               
                                                              ]
                                                          },
                                                           {
                                                               xtype: 'spacer',
                                                               width:40
                                                           },
                                                    ]
                               
                               
                                                },
                               
                                                {
                               
                                                    xtype: 'container',
                                                    style: "background-color: transparent;",
                                                    width: '95%',
                                                    margin: '15 0 0 0',
                                                  //  hidden:true,
                                                    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'start',
                                                        align: 'center'
                               
                                                    },
                                                    items: [
                                                         
                                                        {
                                                            xtype: 'container',
                                                            width: '45%',
                                                            height: 100,
                                                            margin: '0 0 0 0',
                                                            style: 'border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'border-right:0.1px none #ECECEC;border-left:0.1px none #ECECEC;border-bottom:0.1px none #ECECEC;border-top:0.1px none #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'center',
                                                                align: 'center',
                                                            },
                                                            items: [
                                                                  {
                                                                      xtype: 'container',
                                                                      width: '100%',
                               
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
                                                                        
                                                                      },
                                                                      items: [
                                                                           {
                                                                               margin: '0 0 0 0',
                                                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Membership Discount Used</div>',
                                                                           },
                                                                           
                                                                      ]
                                                                  },
                                                                     {
                                                                         xtype: 'container',
                                                                         width: '100%',
                               
                                                                         margin: '-5 0 0 0',
                                                                         //style: {
                                                                         //    // background: '#D25959',
                                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                                         //    // border: '2px'
                                                                         //},
                                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                         style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'center',
                                                                             align: 'center',
                                                                         },
                                                                         items: [
                                                                              {
                                                                                
                                                                                      xtype: 'button',
                                                                                      height: 60,
                                                                                      width: 60,
                                                                                 
                                                                                      margin: '0 0 0 0',
                                                                                     // id: 'btnMyAccount_Dashboard_Enterprise_Activity_Stamp',
                                                                                      //badgeText: "2",
                                                                                      html: '<img src="resources/icons/mypromotionThree.png" width="40" height="40" alt="Company Name">',
                                                                                      ui: 'plain',
                                                                                      handler: function () {
                               
                                                                                          //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                                          //  setupMovementMap(2);
                               
                               
                               
                               
                               
                                                                                          //Ext.getCmp('mainView').setActiveItem(16);
                                                                                          //loadNotificationSummary();
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      margin: '0 0 0 0',
                                                                                      id: 'htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCount',
                                                                                      html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                                  },
                                                                                  //margin: '10 0 0 0',
                                                                                  //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                                                                             
                                                                         ]
                                                                     },
                                                                  {
                                                                      margin: '0 0 0 0',
                                                                      id: 'htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCountDate',
                                                                      html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:27/1/2024 05:09:45 PM</div>',
                                                                  },
                                                            ]
                                                        },
                               
                                                        {
                                                            xtype:'spacer',
                                                            width:20
                                                        },
                               
                               
                               
                                                          {
                                                              xtype: 'container',
                                                              width: '45%',
                                                              height: 100,
                                                              margin: '0 0 0 0',
                                                              style: 'border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                            //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                              //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'center',
                                                                  align: 'center',
                                                              },
                                                              items: [
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                               
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
                               
                                                                        },
                                                                        items: [
                                                                             {
                                                                                 margin: '0 0 0 0',
                                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Total Event Responded</div>',
                                                                             },
                               
                                                                        ]
                                                                    },
                                                                       {
                                                                           xtype: 'container',
                                                                           width: '100%',
                               
                                                                           margin: '-5 0 0 0',
                                                                           //style: {
                                                                           //    // background: '#D25959',
                                                                           //    background: 'rgba(76, 175, 80, 0.3);',
                                                                           //    // border: '2px'
                                                                           //},
                                                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                           style: 'background-color:transparent',
                                                                           layout: {
                                                                               type: 'hbox',
                                                                               pack: 'center',
                                                                               align: 'center',
                                                                           },
                                                                           items: [
                                                                                {
                               
                                                                                    xtype: 'button',
                                                                                    height: 60,
                                                                                    width: 60,
                               
                                                                                    margin: '0 0 0 0',                                                              
                                                                                    html: '<img src="resources/icons/membershipevent-removebg-preview.png" width="40" height="40" alt="Company Name">',
                                                                                    ui: 'plain',
                                                                                    handler: function () {
                               
                                                                                        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                                        //  setupMovementMap(2);
                               
                               
                               
                               
                               
                                                                                        //Ext.getCmp('mainView').setActiveItem(16);
                                                                                        //loadNotificationSummary();
                                                                                    }
                                                                                },
                                                                                    {
                                                                                        margin: '0 0 0 0',
                                                                                        id: 'htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCount',
                                                                                        html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                                    },
                                                                                    //margin: '10 0 0 0',
                                                                                    //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                               
                                                                           ]
                                                                       },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCountDate',
                                                                            html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:27/1/2024 05:15:48 PM</div>',
                                                                        },
                               
                                                              ]
                                                          },
                                                           {
                                                               xtype: 'spacer',
                                                               width:40
                                                           },
                                                    ]
                               
                               
                                                },
                            ]
                        },
                    ]
                },
              
                
            ]
        },
        {
            xtype:'spacer',
            width: '1%',
           },
 /////Latest New Redemption
{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon2_2',
    width: '29%',
    //height: 720,
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    items:[
       
        {
            xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_Horizon2_1_inner_inner',
           // width: '50%',
           margin: '0 0 0 0',
            width: '95%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                    height:20,
                    margin: '20 0 0 0',
                    style: {
                        // background: '#D25959',
                        background: 'transparent',
                        // border: '2px'
                    },
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                           
                            margin: '0 0 0 20',
                            id:'htmlDashboard_LatestRedemptionLbl', 
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Latest Redemption</b></div>'
                          //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        },
                        {
                            xtype: 'spacer',
                        },
                        {
                            xtype: 'button',
                            margin: '3 0 0 0',
                           // hidden:true,
                            id: 'btnDashboard_Dashboard_LatestRedemptionViewAll',
                            height: 35,
                            width: 60,
                            // iconCls: 'list',
                            html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                          //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_VIEWRedemptionListShow();
                            }
       
                        },
                   {
                       xtype: 'panel',
                       width: 25
                   }

                    ]
                },
        
        
        
                {
                    xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_Horizon2_LatestRedemption',
            width: '100%',
            //height: 720,
            height: '100%',
            margin: '20 0 0 0',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
        
                {
                    xtype: 'list',
                    width: '100%',                                        
                    //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore,
                    //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore,
                    id: 'Dashboard_VIEWRedemptionListListID',
                    mode: 'SINGLE',
                    height: 350,
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
                //     itemTpl: '<div class="myContent">' +


                   
                //    '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;width:70%;color:black;cursor: pointer;">{RedeemBy}</div><div style="float:left;text-align:center;width:30%"><div style="margin:0px 0px 0px 20px">{ModifiedRedeemPrizeImage}</div><br><div style="margin:-7px 0px 0px 0px"><b>{RedeemPrizeName}</b></div><br><div style="margin:-10px 0px 0px 0px"><b>{RedeemHistoryStatusDate}</b></div></div></div>' +

                //      '</div>',


                     itemTpl: '<div ondblclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{RedeemHistoryStatusBy}' + "'" + ');" class="myContent" style="background-color:white;width:100%;height:100px;">' +
                 
 
                    // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 106%;margin:-5px 0px 0px -20px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:center;vertical-align:middle;word-break:normal;width:19%;" rowspan="2"><img src="{PhotoRedeemBy}"  style="border:1px solid white; width:55px;height:55px;border-radius:50%"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:middle;word-break:normal;width:60%" rowspan="2">{RedeemBy}</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:100%;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:55%" rowspan="2"><div style="margin:0px 0px 0px 0px;width:100%;text-align:center">{ModifiedRedeemPrizeImage}</div><br><div style="margin:0px 0px 0px 0px"><b>{RedeemPrizeName}</b></div><br><div style="font-weight:bold;font-size:9px;margin:0px 0px 0px 0px">{RedeemHistoryStatusDate}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td></tr></thead></table>',
 
                    '<table style="border-collapse:collapse;border-spacing:0;width: 100%;height:55px;table-layout: fixed;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal; width:55px;height:55px;" rowspan="3"><img src="{PhotoRedeemBy}"  style="border:1px solid white; width:55px;height:55px;border-radius:50%;margin:0px 0px 0px 0px;"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3" ><div onclick="FloatPanel_VIEWRedemptionListShow_SubscriberAccNo(' + "'" + '{RedeemHistoryStatusBy}' + "'" + ')" style="width:100%;margin:0px 0px 0px 80px" >{ModifiedRedeemPrizeImage}</div><br><div style="width:100%;margin:-12px 0px 0px 30px" >{RedeemPrizeName}<br>{RedeemHistoryStatusDate}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;width:200px;height:55px;"><div style="width:200px;margin:-10px 0px 0px 10px;">{RedeemBy}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"></td></tr></thead></table></div>',
                    //emptyText: '<div class="myContent">No Redemption</div>',
                    emptyText: '<div  style="background-color:transparent;width:100%;height106%;"><img src="resources/icons/noRedemptionIcon.png" style="width:150px;height:150px" alt="Company Name"><br>No Redemption</div>',   
                   
                    //listeners: {
                    //    itemsingletap: function (list, idx, target, records, evt) {

                    //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                    //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                    //        //var MembershipCardCode = records.get('MembershipCardCode');
                    //        //var ID = records.get('ID');
                    //        ////FloatPanel_VIEWRedemptionList_EditCardShow_Edit(ID);
                    //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                    //        //setTimeout(function () {
                    //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                    //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

                    //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                    //        //}, 2000);



                    //    },
                    //    deselect: function (list, records) {

                    //    }
                    //},
                    // listeners: {
                    //     itemswipe: function (list, idx, target, record, evt) {
                    //       //  To get the selection you should use getSelection() instead
                    //         //////var selected = list.getActiveItem();
                    //         //////alert(list.getActiveItem());
                    //         //////if (!selected) { return; }

                    //         //////var selectedIndex = selected[0];
                    //         //////alert([selectedIndex, idx]);
                    //         //Ext.Msg.alert('itemswipe', idx);


                    //     } // itemswipe
                    // }

                },
               
              //  FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[selectedItem.row]);
               
            ]  
                }
            ]
        },
     
    ]
},
       
{
    xtype:'spacer',
    width: '1%',
   },

       
    ]
},

///container 3horizontal revieww and rate
{

    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon3',
    margin: '35 0 0 0',
    width: '100%',
    //height: 720,
   // height: 550,
   height: 430,
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardcontainerMyAccount_DashboardMaster_inner_Horizon3',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items:[
/// birthday
{
    xtype:'spacer',
    width: '1%',
    height: '100%',
},
{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon3_1',
    width: '29.5%',
    //height: 720,
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    items:[
       
        {
            xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_Horizon3_1_inner_inner',
           // width: '50%',
           margin: '0 0 0 -10',
            width: '99%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                    height:20,
                    margin: '20 0 0 0',
                    style: {
                        // background: '#D25959',
                        background: 'transparent',
                        // border: '2px'
                    },
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'left',
                    },
                    items: [
                        {
                            id:'htmlDashboard_MemberBirthdayLbl',
                            margin: '0 0 0 20',
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Member Birthday</b></div>'
                          //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        },
                    ]
                },
        
        
        
                {
                    xtype: 'container',
            id: 'containerMyAccount_DashboardMaster_inner_Horizon2_Birthdays',
            width: '100%',
            //height: 720,
            height: '100%',
            margin: '20 0 0 0',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                                        
                    id: 'tableDashboard_BirthDay',
                    xtype: 'dataview',
                   
                    scrollable: true,
                    inline: {
                        wrap: false
                    },
                    scrollable: {
                        direction: 'horizontal',
                        indicators: false,
                    },
                    width: '100%',
        
        
        
        
                    // scrollable: {
                    //     direction: 'vertical',
                    //     indicators: false,
                    // },
                    // inline: true,
                    // width: '100%',
                    height: 350,
                    cls: 'dataview-item',        

                   //itemTpl :'<div ondblclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="img" style="width: 200px; height: 300px; border:2px none grey;border-radius:0px 0px 0px 0px;position: relative;margin:0px 0px 0px 0px;"><div  style="border:1px none grey;border-radius:0px 0px 0px 0px;margin-left: auto;margin-right: auto;width: 180px; height: 280px;display: block;"><div class="blink_me" style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;color:purple;text-align:left;">DOB:{DOB}</div><img  src="{Photo}" style="margin-left: auto;margin-right: auto;width: 180px; height: 250px;display: block;border-radius:3%" /><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-15px 0px 0px 0px;color:black;text-align:left;" onclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');">{RowNumber}).<u>{AccountName}</u><br>{PhoneNo}<br>{Email}</div></div></div><br>',
                   //itemTpl :'<div ondblclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="img" style="width: 180px; height: 335px; border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;position: relative;margin:0px 0px 0px 0px;padding:0px 10px;"><div  style="border:1px solid grey;border-radius:10px 10px 10px 10px;width: 180px; height: 300px;display: block;text-align:center"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;color:purple;text-align:right;"><button onClick="FloatPanel_MessagingOptionShow(' + "'" + '{AccountNo}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;"><img src="resources/icons/BlastingMsgPurple.png" style="width:22px;height:22px;margin:0px 0px -5px -40px;" alt="Company Name"></button><button  onclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" style="width:22px;height:22px;margin:0px 0px -5px -40px;" alt="Company Name"></button></div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;"><br><br><img  src="{Photo}" style="width: 120px; height: 120px;display: block;border-radius:50%; margin-left: auto;margin-right: auto;display: block;" /></div><br><br><br><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-15px 0px 0px 0px;color:black;text-align:center;">{RowNumber}).<u>{AccountName}</u><br>{PhoneNo}<br>{Email}</div></div></div>',
                 
                   //itemTpl :'<div style="width: 180px; height: 335px;margin:0px 0px 0px 20px;"><div ondblclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="img" style="width: 180px; height: 335px; border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;position: relative;margin:0px 0px 0px 0px;padding:0px 10px;"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;color:purple;text-align:right;"><button onClick="FloatPanel_MessagingOptionShow(' + "'" + '{AccountNo}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;"><img src="resources/icons/BlastingMsgPurple.png" style="width:22px;height:22px;margin:0px 0px -5px -40px;" alt="Company Name"></button><button  onclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" style="width:22px;height:22px;margin:0px 0px -5px -40px;" alt="Company Name"></button></div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;"><br><br><img  src="{Photo}" style="width: 120px; height: 120px;display: block;border-radius:50%; margin-left: auto;margin-right: auto;display: block;" /></div><br><br><br><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-15px 0px 0px 0px;color:black;text-align:center;">{RowNumber}).<u>{AccountName}</u><br>{PhoneNo}<br>{Email}</div></div></div>',
                   itemTpl :'<div style="width: 180px; height: 335px;margin:0px 0px 0px 20px;"><div ondblclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="img" style="width: 180px; height: 335px; border-right:2px solid #ECECEC;border-left:2px solid #ECECEC;border-bottom:2px solid #ECECEC;border-top:2px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;position: relative;margin:0px 0px 0px 0px;padding:0px 10px;"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;color:purple;text-align:right;"><button onClick="FloatPanel_MessagingOptionShow(' + "'" + '{AccountNo}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;"><img src="resources/icons/BlastingMsgPurple.png" style="width:22px;height:22px;margin:0px 0px -5px -40px;" alt="Company Name"></button><button  onclick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{AccountNo}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" style="width:22px;height:22px;margin:0px 0px -5px -40px;" alt="Company Name"></button></div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;"><br><br><img  src="{Photo}" style="width: 120px; height: 120px;display: block;border-radius:50%; margin-left: auto;margin-right: auto;display: block;border:2px purple solid;" /></div><img  src="resources/icons/happybirthday3.gif" style="width: 60px; height: 60px;display: block; margin-left: auto;margin-right: auto;display: block;margin:-25px 0px 0px 0px;border-radius:50%" /><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-55px 0px 0px 13px;color:black;text-align:center;" class="blink_me">Date Of Birth<br>{DOB}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-15px 0px 0px 0px;color:black;text-align:center;"><br><br><br>{RowNumber}).{AccountName}<br>{Email}</div></div></div>',
                   emptyText: '<div  style="background-color:transparent;width:100%;height:300px;padding:60px 153px"><img src="resources/icons/Nobirtdays.jpg" style="width:150px;height:150px" alt="Company Name"><br>No Member Birthday</div>',   

                  // emptyText: '<div  style="background-color:transparent;width: 100%; height: 350px;margin:0px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/Nobirtday.png" style="width: 80%; height: 300px;"/></div>',
                },
              
            ]  
                }
            ]
        },
     
    ]
},
{
xtype:'spacer',
width: '1.7%',
height: '100%',
},
////review and rate
        {
            xtype: 'container',
          //  id: 'containerMyAccount_DashboardMaster_inner_Horizon3_inner',
           // width: '50%',
           margin: '0 0 0 0',
            width: '65.8%',
            height: '100%',
           // hidden:true,
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: 'border:1px solid #CCCCCC;background-color:white;border-radius:1%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                    /// hidden:true,
                    margin: '20 0 0 0',
                    style: {
                        // background: '#D25959',
                        background: 'transparent',
                        // border: '2px'
                    },
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                         {
                             margin: '0 0 0 40',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'
                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Latest Review And Rate</b></div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },
                         {
                             xtype: 'spacer',
                         },
                         {
                             xtype: 'button',
                             margin: '3 0 0 0',
                            // hidden:true,
                             id: 'btnDashboard_LatestReviewAndRate',
                             height: 35,
                             width: 60,
                             // iconCls: 'list',
                             html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>View All</b></div>',
                           //  html: '<img src="resources/icons/MerchantReviewIconWhite01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 //AyohaMerchantReviewShow();
                                AyohaMerchantReviewShow_FromDashboard();
                             }
        
                         },
                    {
                        xtype: 'panel',
                        width: 25
                    }
                    ]
                },
                  {
                      xtype: 'container',
                      width: '100%',
                      zIndex: 50,
                      //height:270,
                      style: 'background-color:transparent',
                      height: 350,
                      layout: {
                          type: 'vbox',
                          align: 'center',
                          pack: 'center'
                      }, items: [
                            {
                                xtype: 'container',
                                width: '96%',
                               // zIndex: 50,
                                //height:270,
                                style: 'background-color:transparent',
                                height: 365,
                                layout: {
                                    type: 'vbox',
                                    align: 'center',
                                    pack: 'start'
                                }, items: [
                                    {
                                        xtype: 'container',
                                        id: 'containerDashboard_AyohaMerchantReview_ReviewMaster',
                                        width: '100%',
                                        height: 125,
                                        margin: '0 0 0 0',
                                        // hidden: true,
                                        //  style: "background-color: white",
                                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
                                        //style: "background-color: #F35B57;",
                                        //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left'
        
                                        },
                                        items: [
                                              //{
                                              //    xtype: 'container',
                                              //    id: 'containerDashboard_AyohaMerchantReview_LoadingInner',
                                              //    width: '100%',
                                              //    height: 140,
                                              //    //hidden:true,
                                              //    // style: "background-color: transparent",
                                              //    //style: "background-color: #F35B57;",
                                              //    style: 'background-image: url("resources/icons/reviewImgSample.png"); background-size: 100% 140px;background-repeat: no-repeat;',
        
                                              //},
                                              {
                                                  xtype: 'container',
                                                  width: '20%',
                                                  height: 140,
                                                  style: "background-color: white",
                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'left'
                                                  },
                                                  items: [
        
                                                       {
                                                           margin: '-30 0 0 -37',
                                                           html: '<div id="Dashboard_barchartAyohaMerchantReview" style="width: 300px; height: 140px;"></div>'
                                                       },
        
                                                  ]
        
                                              },
        
                                                    {
                                                        xtype: 'container',
                                                        width: '80%',
                                                        height: 140,
                                                        style: "background-color: white",
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'start',
                                                            align: 'left'
                                                        },
                                                        items: [
        
                                                             {
                                                                 margin: '-10 0 0 6',
                                                                 id: 'htmlDashboard_AyohaMerchantReview_Rate',
                                                                 html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">0.0</div>',
                                                             },
        
                                                               {
                                                                   xtype: 'container',
                                                                   width: '100%',
                                                                   height: 28,
                                                                   margin: '-18 0 0 -2',
                                                                   style: "background-color: transparent",
                                                                   layout: {
                                                                       type: 'hbox',
                                                                       pack: 'left',
                                                                       align: 'left'
                                                                   },
                                                                   items: [
        
                                                                        {
                                                                            xtype: 'button',
                                                                            id: 'btnDashboard_AyohaMerchantReview_Star1',
                                                                            height: 28,
                                                                            width: 28,
                                                                            // iconCls: 'list',
                                                                            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                            ui: 'plain',
                                                                            handler: function () {
        
        
                                                                            }
                                                                        },
                    {
                        xtype: 'button',
                        id: 'btnDashboard_AyohaMerchantReview_Star2',
                        height: 28,
                        width: 28,
                        margin: '0 0 0 -5',
                        // iconCls: 'list',
                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
        
                        }
                    },
                      {
                          xtype: 'button',
                          id: 'btnDashboard_AyohaMerchantReview_Star3',
                          height: 28,
                          width: 28,
                          margin: '0 0 0 -5',
                          // iconCls: 'list',
                          html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {
        
        
                          }
                      },
                        {
                            xtype: 'button',
                            id: 'btnDashboard_AyohaMerchantReview_Star4',
                            height: 28,
                            width: 28,
                            margin: '0 0 0 -5',
                            // iconCls: 'list',
                            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function () {
        
                            }
                        },
                          {
                              xtype: 'button',
                              id: 'btnDashboard_AyohaMerchantReview_Star5',
                              height: 28,
                              width: 28,
                              margin: '0 0 0 -5',
                              // iconCls: 'list',
                              html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {
        
                              }
                          },
                                                                   ]
        
                                                               },
        
        
        
        
                                                               {
                                                                   margin: '13 0 0 0',
                                                                   id: 'htmlDashboard_AyohaMerchantReview_TotalReviews',
                                                                   html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                                               }
        
        
        
        
                                                        ]
        
                                                    },
        
        
        
        
                                        ]
        
                                    },
        
        
                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        height: '95%',
                                        id: 'Dashboard_AyohaMerchantReviewContentID',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'center'
        
                                        },
                                        // style: 'background-color:transparent',
                                        style: 'border-top:2px solid #ECF0F1 ;background: transparent;',
        
                                        items: [
                                            {
                                                xtype: 'list',
                                                width: '100%',
                                                height: 240,
                                                // flex: 1,
                                              //  store: 'Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore',
                                                store: 'AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore',
                                                //store:_DataStore_Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore,
                                                id: 'Dashboard_AyohaMerchantReviewListID',
                                                mode: 'SINGLE',
                                                scrollable:false,
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
                            
                                                disableSelection: true,
                                                itemTpl: '<div class="myContent" style="background-color:white;width:104%;">' +
        
        
        //<div style="width:30%;background-color: white;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><button OnClick="AyohaMerchantReviewLike({ID})" class="buttonsHtmlBgTransparent"><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:0px -40px 30px 0px;">Reply</div></button><button OnClick="AyohaMerchantReview_AddEditShow_Edit({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/editReview.png" style="width: 23px; height: 23px; margin:10px 0px 0px 0px;" /></button></div>
                                                   //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:110px;"><tr onclick="openDashboard_AyohaMerchantReviewPanel({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;width:4%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 10px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:95%;vertical-align:top;"><div style="width:100%;background-color: transparent;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedReviewTxt}<br><br><br></div></td></tr></table>' +
                                                  // <div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:blue;font-weight:bold;margin:-15px 0px 0px 0px;height:25px;width:auto;" onclick="AyohaMerchantReview_ReplyShow_Add();"><u>Reply</u></div>
                                                   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:{ReviewTxtHeightList};"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;width:4%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 10px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:95%;vertical-align:top;"><div style="width:100%;background-color: transparent;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color:white;"><div style="width:90%;float: left;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-10px 0px 0px 0px;height:45px;">{ModifiedReviewTxt}</div><div style="background-color: white;margin-left: 90%;height:45px;"><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:blue;font-weight:bold;margin:-15px 0px 0px 0px;width:50px;height:25px;z-index:9;position: relative" onclick="AyohaMerchantReview_ReplyShow_Add(' + "'" + '{ReviewCode}' + "'" + ',' + "'" + '{ItemCodeReview}' + "'" + ');"><u>Reply</u></div><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-27px 0px 0px 0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button OnClick="AyohaMerchantReview_Delete(' + "'" + '{ReviewCode}' + "'" + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px;" /></button></div></div></div></td></tr></table>' +
        
                                                      '</div>' ,
                                                //  '<br>' +
                                                //  '{ModifiedBottomButton}',
                                               
                                               
                                               
                                               
                                                 //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:white;"><button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipiednt__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/like02.png" style="width: 23px; height: 23px; margin:10px 0px 0px 50px;" /></button></div>',
        
        
        
        
                                                //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="Dashboard_AyohaMerchantReviewLike({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 30px;" /></button></div>',
                                                //height: '100%',
        
                                               // emptyText: '<div class="myContent">No Review Yet</div>',
                                                emptyText: '<div  style="background-color:transparent;width:100%;height106%;"><img src="resources/icons/noreviewandrate01.png" style="width:150px;height:150px" alt="Company Name"><br>No Review Yet</div>',   
        
                                            },
                                        ]
                                    },
        
        
        
        
                                ]
        
                            },
        
                      ]
        
                  },
            ]
        },
        {
            xtype:'spacer',
            width: '0.5%',
            height: '100%',
        },
    ]
},
{
    xtype: 'container',
    margin: '70 0 0 0',
    width: '100%',
    //height: 720,
   // height: 550,
   height: 30,
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardcontainerMyAccount_DashboardMaster_inner_HorizonSelectionAyohaStore',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'left'

    },
    items:[
        {
xtype:'spacer',
width:23
        },
        {
            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;paddign:0px 20px"><select style="font-size:16px;width:180px;height:30px" name="cars" id="SelectionAyohaStoreDashboard"><option value="NA"> -Filter Dashboard- </option><option value="Today">Today</option><option value="Month">This Month</option><option value="Year">This Year</option></select></div>'  
        },  {
            xtype:'spacer',
            width:8
                    },
        
        {
            html:'<img onclick="Dashboard_AyohastoreDashboardFilter();" src="resources/icons/ResetPurpleOne.png" alt="Girl in a jacket" style="width:26px;height:26px;cursor:pointer">'
        }
    ]
},

//////////////////////////ayoha sale

{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon4',
    margin: '10 0 0 0',
    width: '100%',
    //height: 720,
   // height: 550,
   height: 150,
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardcontainerMyAccount_DashboardMaster_inner_Horizon4',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center'

    },
    items:[
         ////////////////////Ayoha Sale Order
        {
            xtype: 'container',
          //  id: 'containerMyAccount_DashboardMaster_outterHorizon4_1',
           // width: '50%',
            width: '25%',
            height: '100%',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            //style: "background-color: #F35B57;",
            title: 'Ayoha Sale Order',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
        
        
                {
                    xtype: 'container',
                    id: 'containerMyAccount_DashboardMaster_AyohaSaleOrder',
                   // width: '50%',
                    width: '90%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                
                    },
                    items:[
                        {
                           
                         
                            margin: '20 0 0 20',
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Ayoha Store Gross Sale</b><div class="dropdown" style="float:right;margin:5px 0px 0px 110px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div><br><div style="color:grey;text-align: left;font-size:14px;width:100%;font-weight:bold;" id="Dashboard_AyohaSaleOrderLbl"><b>Today</b></div></div>'
                         
                        },
                        // {
                        //     id:'htmlDashboard_AyohaSaleOrderLbl',
                        //    // margin:'20 0 0 0',
                        //     margin: '0 0 0 20',
                        //     html: '<div style="color:grey;text-align: left;font-size:12px;width:100%;"><b>Today</b></div>'
                        //   //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        // },
                {
                    xtype: 'container',                  
                    width: '100%',
                    height: '50%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px none #CCCCCC;background-color:white;',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                
                    },
                    items:[
                        {
                            id:'htmlDashboard_AyohaSaleOrdervalue',
                            html: '<font style="color:grey;font-size:40px;"><b>RM125,000.00</b></font>'                               
                           // html: '<div style="color:grey;align-items: center;font-size:37px;width:97.5%;background-color:transparent"><b>RM125,000.00</b></div>'
                        },
                    ]
                },
                        
                
                    
                
                
                    ]
                },
        
        
        
        
        
             
        
        
            ]
        },

          ////////////////////Ayoha Sale Payment
          {
            xtype: 'container',
            //id: 'containerMyAccount_DashboardMaster_outterHorizon4_2',
           // width: '50%',
           width: '25%',
           height: '100%',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            //style: "background-color: #F35B57;",
            title: 'Ayoha Sale Payment',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
        
        
                {
                    xtype: 'container',
                    id: 'containerMyAccount_DashboardMaster_AyohaSalePayment',
                   // width: '50%',
                    width: '90%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                
                    },
                    items:[
                        {
                           
                         
                            margin: '20 0 0 20',
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Ayoha Store Net Sale</b><div class="dropdown" style="float:right;margin:5px 0px 0px 130px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div><br><div style="color:grey;text-align: left;font-size:14px;width:100%;font-weight:bold;" id="Dashboard_AyohaSalePaymetLbl"><b>Today</b></div></div>'
                         
                        },
                        // {
                        //     id:'htmlDashboard_AyohaSalePaymentLbl',
                        //    // margin:'20 0 0 0',
                        //     margin: '0 0 0 20',
                        //     html: '<div style="color:grey;text-align: left;font-size:12px;width:100%;"><b>Today</b></div>'
                        //   //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        // },



                        // {
                        //   //  id:'htmlDashboard_AyohaSalePaymentLbl',
                        //    // margin:'20 0 0 0',
                        //     margin: '20 0 0 20',
                        //     html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Ayoha Store Payment</b></div>'
                        //   //  html: '<div style="color:black;text-align: left;font-size:11px;width:100%;">-Campaign Activity Summary-</div>',
                        // },
                       
                
                        {
                            xtype: 'container',                  
                            width: '100%',
                            height: '50%',
                           // hidden:true,
                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            style: 'border:1px none #CCCCCC;background-color:white;',
                         
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                        
                            },
                            items:[
                                {
                                    id:'htmlDashboard_AyohaSalePaymentvalue', 
                                    html: '<font style="color:grey;font-size:40px;"><b>RM25,000.00</b></font>'                               
                                   // html: '<div style="color:grey;display: flex;justify-content: center;align-items: center;padding:0px 55px;font-size:37px;width:97.5%;height:80px;background-color:transparent"><b>RM25,000.00</b></div>'
                                },
                            ]
                        },
                      
                
                    ]
                },
        
        
        
        
        
             
        
        
            ]
        },

         ////////////////////Ayoha Sale Transaction
         {
            xtype: 'container',
         //   id: 'containerMyAccount_DashboardMaster_outterHorizon4_3',
           // width: '50%',
           width: '25%',
           height: '100%',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            //style: "background-color: #F35B57;",
            title: 'Ayoha Sale Transaction',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
        
        
                {
                    xtype: 'container',
                   // id: 'containerMyAccount_DashboardMaster_AyohaSaleTransaction',
                   // width: '50%',
                    width: '90%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                
                    },
                    items:[
                        

                        {
                           
                         
                            margin: '20 0 0 20',
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Ayoha Store Net Sale Transaction</b><div class="dropdown" style="float:right;margin:5px 0px 0px 40px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div><br><div style="color:grey;text-align: left;font-size:14px;width:100%;font-weight:bold;" id="Dashboard_AyohaSaleTransactionLbl"><b>Today</b></div></div>'
                           // html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Ayoha Store Transaction</b><div class="dropdown" style="float:right;margin:5px 0px 0px 105px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div></div>'
                         
                        },
                        



                        {
                            xtype: 'container',                  
                            width: '100%',
                            height: '50%',
                           // hidden:true,
                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            style: 'border:1px none #CCCCCC;background-color:white;',
                         
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                        
                            },
                            items:[
                                {
                                    id:'htmlDashboard_AyohaSaleTransactionvalue',
                                   // html: '<div style="color:grey;font-size:37px;background-color:transparent"><b>150</b></div>'  
                                    html: '<font style="color:grey;font-size:40px;"><b>150</b></font>'                              
                                   // html: '<div style="color:grey;display: flex;justify-content: center;align-items: center;padding:0px 55px;font-size:37px;width:97.5%;height:80px;background-color:transparent"><b>150</b></div>'
                                },
                            ]
                        },
                       
                    
                
                
                    ]
                },
        
        
        
        
        
             
        
        
            ]
        },


         ////////////////////Ayoha Sale Average Order Value
         {
            xtype: 'container',
            //id: 'containerMyAccount_DashboardMaster_outterHorizon4_4',
           // width: '50%',
           width: '25%',
           height: '100%',
            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
            style: "background-color: transparent;",
            //style: "background-color: #F35B57;",
            title: 'Ayoha Average Order Value',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
        
        
                {
                    xtype: 'container',
                    id: 'containerMyAccount_DashboardMaster_AyohaSaleAverageOrderValue',
                   // width: '50%',
                    width: '90%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                
                    },
                    items:[
                        {
                           
                           // margin:'20 0 0 0',
                            margin: '20 0 0 20',
                         //   html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Ayoha Store Average Order Value</b><div class="dropdown" style="float:right;margin:5px 0px 0px 40px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div></div>'
                            html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Ayoha Store Sale Quantity</b><div class="dropdown" style="float:right;margin:5px 0px 0px 87px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div><br><div style="color:grey;text-align: left;font-size:14px;width:100%;font-weight:bold;" id="Dashboard_AyohaSaleAOLbl"><b>Today</b></div></div>'
                        },
                       
                        {
                            xtype: 'container',                  
                            width: '100%',
                            height: '50%',
                           // hidden:true,
                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            style: 'border:1px none #CCCCCC;background-color:white;',
                         
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                        
                            },
                            items:[
                                {
                                    id:'htmlDashboard_AyohaSaleAverageOrderValuevalue', 
                                    html: '<font style="color:grey;font-size:40px;"><b>RM200.00</b></font>'                          
                                   // html: '<div style="color:grey;display: flex;justify-content: center;align-items: center;padding:0px 55px;font-size:37px;width:97.5%;height:80px;background-color:transparent"><b>RM200.00</b></div>'
                                },
                            ]
                        },
                       
                
                    
                
                
                    ]
                },
        
        
        
        
        
             
        
        
            ]
        },
    ]
},


/////// Dashboard Graph OrderandSale and Top Order Sale List
{
    xtype: 'container',
    id: 'containerMyAccount_DashboardMaster_inner_Horizon5',
    margin: '60 0 0 0',
    width: '100%',
    //height: 720,
   // height: 550,
   height: 480,
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardcontainerMyAccount_DashboardMaster_OrderandSale_and_order_Status_graph',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            //  id: 'containerMyAccount_DashboardMaster_outterHorizon4_1',
             // width: '50%',
              width: '60%',
              height: '100%',
              //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
              style: "background-color: transparent;",
              //style: "background-color: #F35B57;",
              title: 'DashboardcontainerMyAccount_DashboardMaster_OrderandSale_graphCharting',
              layout: {
                  type: 'vbox',
                  pack: 'start',
                  align: 'center'
          
              },
              items:[
                {
                    xtype: 'container',                   
                   // width: '50%',
                    width: '100%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                
                    },
                    items:[
                        {
                           margin: '-30 0 0 -70',
                            html: '<div id="chart_invoice" style="width: 900px; height: 500px" class="x-container x-sized x-layout-box-item" ></div>',
                            // width: 800,
                            // height:530,
                            //html: '<div id="chart_invoice" style="width: 1000px; height: 550px"></div>'
                        },
                    ]
                }
              ]
        },
        {
xtype:'spacer',
width:'2.5%'
        },

        {
            xtype: 'container',
            //  id: 'containerMyAccount_DashboardMaster_outterHorizon4_1',
             // width: '50%',
              width: '35%',
              height: '100%',
              //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
              style: "background-color: transparent;",
              //style: "background-color: #F35B57;",
              title: 'DashboardcontainerMyAccount_DashboardMaster_TopOrderList',
              layout: {
                  type: 'vbox',
                  pack: 'start',
                  align: 'center'
          
              },
              items:[
                {
                    xtype: 'container',                   
                   // width: '50%',
                    width: '100%',
                    height: '100%',
                   // hidden:true,
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                    style: 'border:1px solid #CCCCCC;background-color:white;border-radius:5%',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                
                    },
                    items:[
                        {
                            
                         
                                margin: '20 0 0 20',
                                html: '<div style="color:black;text-align: left;font-size:16px;width:100%;float:left"><b>Top 10 Sale Product</b><div class="dropdown" style="float:right;margin:10px 0px 0px 320px"><button class="dropbtn"><img src="resources/icons/MenuDotPurple01.png" alt="Girl in a jacket" style="width:6px;height:26px;"></button><div class="dropdown-content"><div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">Today</div> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">This Month</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">This Year</div> </div></div><br><div style="color:grey;text-align: left;font-size:14px;width:100%;font-weight:bold;" id="Dashboard_AyohaSaleTop10Lbl"><b>Today</b></div></div>'
                             
                            
                        },
                        {
                            xtype: 'container',
                            margin:'15 0 0 22',
                            width: '90%',
                            height: 390,
                            //height: '95%',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    xtype: 'list',
                                    width: '100%',
                                    //height: 300,
                                    height: '100%',
                                    // flex: 1,
                                    //store: _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoStore,
                                   // store:_DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore,
                                    id: 'DashboardList_DashboardSaleInfoTopProductMerchant',
                                    mode: 'SINGLE',
                                    // width: '100%',
                                   //grouped:true,
                                   style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
                                    itemTpl: '<div  class="myContent" style="background-color:white;width:100%;height:60px">' +
                
                
                                    //  '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 20px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({UserPhoto}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:70%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{AccountNo}</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{LoyaltyActivity} - {UpdatedDate}</font></td></tr></table><br>'
                                    //  + '<div style="width:94%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{LoyaltyActivity} - {UpdatedDate}</div>'
                                    //      + '</div>',
                
                
                                    '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:center;vertical-align:middle;word-break:normal;width:16%;" rowspan="2"><img src="{ItemImg}"  style="border:1px solid white; width:55px;height:55px;"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:middle;word-break:normal;width:40%" rowspan="2">{ItemName}</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:100%;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal;width:55%" rowspan="2"><div style="font-weight:bold;font-size:14px;margin:0px 0px 0px 0px">RM{TotalRevenue}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 9px;text-align:left;vertical-align:top;word-break:normal"></td></tr></thead></table>',
                
                                   // emptyText: '<div  style="background-color:transparent;width:100%;height106%;">No Members Activity</div>',
                                    //emptyText: '<div  style="background-color:transparent;width:100%;height106%;">No Members Activity</div>',
                                    emptyText: '<div  style="background-color:transparent;width:100%;height100%;text-align:center"><img src="resources/icons/NoActivityIcon.png" style="width:150px;height:150px" alt="Company Name"><br>No Product Sold</div>',  
                
                                },
                
                            ]
                            
                        },
                        
                    ]
                }
              ]

        }
    ]
},



              ////////////////////New Messaging placeing Spacer
              
              {
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'ContainerHeaderDashboardBlastingQuotaRemainingSpacerID',
                style: "background-color:transparent",
                width: '100%',
                //height:270,
                height: 100,
              },
              ///container 4horizontal Messaging
              {
                xtype: 'container',
                margin: '25 0 0 0',
                hidden:true,
                id: 'ContainerHeaderDashboardBlastingQuotaRemainingID',
                style: "background-color:transparent",
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                width: '100%',
                //height:270,
                height: 260,
                items:[
                    {
                        margin: '0 0 0 20',
                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                       // html: '<div style="color:black;text-align: left;font-size:14px;width:100%;"><b>Blasting Message Quota</b></div>'
                        html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Messaging Tool Usage</b></div>'
                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                    },



                    {
                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'ContainerMyAccount_Dashboard_BlastingMessageQuota_Inner',
                        style: "background-color:transparent",
                       
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        width: '100%',
                        //height:270,
                        height: 200,
                        items: [
                           




                            // {
                            //     xtype:'panel',
                            //     width:15
                            // },


 ///container chart 1

                               {
                                   xtype: 'container',
                                   name:'Name_containerchartPushNotificationsDashboardOri',
                                  // width: '33.33%',
                           width: '25%',
                                   style: "border:3px none #EAEDED",
                                   layout: {

                                       type: 'vbox',
                                       align: 'center',
                                       pack: 'start'

                                   },
                                   items: [


                                         {

                                             html: '<div id="chartPushNotificationsDashboardOri"></div>',
                                             //  margin: '-35 0 0 0',
                                         },


                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             //  height:'100%',
                                             margin: '-165 0 0 -25',
                                             style: "border:3px none #EAEDED",
                                             layout: {

                                                 type: 'vbox',
                                                 align: 'center',
                                                 pack: 'start'

                                             },
                                             items: [


                                               { //  id:'htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent',
                                                   html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>0%</b></div>',
                                               },
                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   height:80
                                               },
                                                  {
                                                      xtype: 'button',
                                                      height: 27,
                                                      width: 30,
                                                      //  margin: '-33 0 0 0',
                                                      //id: 'btnMyAccount_Dashboard_BlastingMessageQuota_PushNotification',
                                                      //badgeText: "2",
                                                      html: '<img src="resources/icons/Notification1.png" width="20" height="20" alt="Company Name">',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          AyohaNotificationManagementShow();
                                                      }
                                                  },
                                           {
                                               margin: '-5 0 0 0',
                                               width: '100%',
                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                               //id:'htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification',
                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">Push Notifications</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>30/1000</b></div>',
                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                           },

                                             ]
                                         },


                                   ]

                               },

                               ///container chart 2
                            {
                                xtype: 'container',
                               // width: '33.33%',
                           width: '25%',
                                style: "border:3px none #EAEDED",
                                layout: {

                                    type: 'vbox',
                                    align: 'center',
                                    pack: 'start'

                                },
                                items: [


                                      {

                                          html: '<div id="chartSMSDashboard"></div>',
                                          //  margin: '-35 0 0 0',
                                      },

                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          //  height:'100%',
                                          margin: '-165 0 0 -60',
                                          style: "border:3px none #EAEDED",
                                          layout: {

                                              type: 'vbox',
                                              align: 'center',
                                              pack: 'start'

                                          },
                                          items: [

                                           {
                                               html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>0%</b></div>',
                                           },
                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               height:80
                                           },
                                               {
                                                   xtype: 'button',
                                                   height: 27,
                                                   width: 30,
                                                  // margin: '-33 0 0 0',
                                                   id: 'btnMyAccount_Dashboard_BlastingMessageQuota_SMS',
                                                   //badgeText: "2",
                                                   html: '<img src="resources/icons/Sms-icon.png" width="20" height="20" alt="Company Name">',
                                                   ui: 'plain',
                                                   handler: function () {


                                                   }
                                               },
                                        {
                                            margin: '-5 0 0 0',
                                            width: '100%',
                                           
                                           // html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">SMS(Coming Soon)</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>0/0</b></div><br><div style="color:black;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>0%</b></div>',
                                           html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">SMS(Coming Soon)</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>0/0</b></div>',
                                        },
                                          ]
                                      },
                                                  

                                ]
                            },

///container chart 3
                            {
                               xtype: 'container',
                              // width: '33.33%',
                           width: '25%',
                               style: "border:3px none #EAEDED",
                               layout: {

                                   type: 'vbox',
                                   align: 'center',
                                   pack: 'start'

                               },
                               items: [

                                     {

                                         html: '<div id="chartWhatAppDashboard"></div>',
                                         //  margin: '-35 0 0 0',
                                     },
                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           //  height:'100%',
                                           margin: '-165 0 0 -117',
                                           style: "border:3px none #EAEDED",
                                           layout: {

                                               type: 'vbox',
                                               align: 'center',
                                               pack: 'start'

                                           },
                                           items: [
                                               {
                                                   html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>0%</b></div>',
                                               },
                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   height:80
                                               },
                                                {
                                                    xtype: 'button',
                                                    height: 27,
                                                    width: 30,
                                                    //  margin: '-33 0 0 0',
                                                    id: 'btnMyAccount_Dashboard_BlastingMessageQuota_WhatApp',
                                                    //badgeText: "2",
                                                    html: '<img src="resources/icons/wassap.png" width="20" height="20" alt="Company Name">',
                                                    ui: 'plain',
                                                    handler: function () {


                                                    }
                                                },
                                         {
                                             margin: '-5 0 0 0',
                                             width: '100%',
                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">Whats App(Coming Soon)</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>0/0</b></div>',
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },




                                           ]
                                       },













                               ]






                           },


                        ///container chart 4
                        {
                            xtype: 'container',
                           // width: '33.33%',
                           width: '25%',
                            style: "border:3px none #EAEDED",
                            layout: {

                                type: 'vbox',
                                align: 'center',
                                pack: 'start'

                            },
                            items: [

                                  {

                                      html: '<div id="chartEmailDashboard"></div>',
                                      //  margin: '-35 0 0 0',
                                  },
                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        //  height:'100%',
                                        margin: '-165 0 0 -117',
                                        style: "border:3px none #EAEDED",
                                        layout: {

                                            type: 'vbox',
                                            align: 'center',
                                            pack: 'start'

                                        },
                                        items: [
                                            {
                                                html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>0%</b></div>',
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                height:80
                                            },
                                             {
                                                 xtype: 'button',
                                                 height: 27,
                                                 width: 30,
                                                 //  margin: '-33 0 0 0',
                                                 id: 'btnMyAccount_Dashboard_BlastingMessageQuota_Email',
                                                 //badgeText: "2",
                                                 html: '<img src="resources/icons/emailIcon01.png" width="20" height="20" alt="Company Name">',
                                                 ui: 'plain',
                                                 handler: function () {


                                                 }
                                             },
                                      {
                                          margin: '-5 0 0 0',
                                          width: '100%',
                                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">Email(Coming Soon)</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>0/0</b></div>',
                                          // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                      },




                                        ]
                                    },













                            ]






                        },  


















                        ]

                    },

                ]
              },
              
              
              
              
              
                               ////////////////////////Advertisement Visitor Graph
              
              
              
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    hidden:true,
                                    margin: '150 0 0 0',
                                    style: {
                                        // background: '#D25959',
                                        background: 'transparent',
                                        // border: '2px'
                                    },
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [
                                        {
                                            xtype: 'spacer',
                                            width: 30,
                                          //  width: '2%',
                                        }, 
                                         {
                                             margin: '0 0 0 0',
                                            // width: '40%',
                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                             // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'
                                             html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Visitor Analyst</b></div>'
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },
                                         {
                                            xtype: 'spacer',
                                            width: 60,
                                          //  width: '2%',
                                        }, 
                                          
                                        //   {
                                        //       margin: '0 0 0 0',
                                        //       //width: '5%',
                                        //       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        //       // html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'
                                        //       html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Year:</b></div>'
                                        //       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        //   },
                                                                                             {
                                                                                                width: 180,
                                                                                               //  margin: '0 0 0 0',
                                                                                                 html: '<div style="color:black;text-align: left;font-size:16px;width:180px;"><b>Year:</b><input type="year" id="Dashboard_visitorAnalsysYear" style="border-color:black;color:black;width:60px;text-align: left;font-size:16px;font-weight:bold;margin:0px 0px 0px 10px;"></div>',
                                                                                             },
                                                                                         {
                                                                                             xtype: 'button',
                                                                                             margin: '-10 0 0 0',
                                                                                             hidden:true,
                                                                                             id: 'btnDashboard_VisitorAnalsysList_Year',
                                                                                             height: 35,
                                                                                             width: 30,
                                                                                             // iconCls: 'list',
                                                                                             html: '<img src="resources/icons/calendar01.png"  style="width:20px;height:25px;margin:0px 0px 0px 0px;" alt="Company Name">',
                                                                                             ui: 'plain',
                                                                                             handler: function () {
                                                                                                 globalYearSourceModule = "DashBoard_VisitorAnalsys";
                                                                                                 FloatPanel_YearOnlyShow();
                                                                                             }
              
                                                                                         },
                                //     {
                                //         xtype: 'panel',
                                //         width:28
                                // }
                                    ]
                                },
                                   {
                                       xtype: 'container',
                                       width: '100%',
                                      margin:"20 0 0 0",
                                   height: 410,
                                   hidden:true,
                                      // height: 1200,
                                       layout: {
                                           type: 'hbox',
                                           align: 'start',
                                           pack: 'center'
                                       }, items: [
                                           {
                                               xtype: 'container',
                                               width: '96%',
                                               hidden:true,
                                               //height:270,
                                               style: 'background-color:transparent',
                                               height: 60,
                                               layout: {
                                                   type: 'hbox',
                                                   align: 'center',
                                                   pack: 'center',
                                                  
                                               }, items: [
                                                   {
                                                       xtype: 'panel',
                                                       width: 8
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       width: '32%',                                        
                                                       zIndex:200,
                                                       height: 50,
                                                       name: 'container_DashboardAnalsys_AdvertisementVisitor',
                                                       style: 'background-color:transparent',
                                                       margin: '10 0 0 0',
                                                       layout: {
                                                           type: 'vbox',
                                                           align: 'center',
                                                           pack: 'center'
                                                       },
                                                       items: [
              
                                                           
                                                           {
                                                               id: 'html_DashboardAnalsys_AdvertisementVisitor_Txt',
                                                               html: '<div style="width:100%;font-size:11px;color:black;text-align:center;font-weight:bold;">Advertisement Visitor</div>'
                                                           },
                                                           //{
                                                           //    xtype: 'spacer',
                                                           //    width:5
                                                           //},
                                                           {
                                                               xtype: 'container',
                                                               id: 'container_DashboardAnalsys_AdvertisementVisitor_ID',
                                                               width: 30,
                                                               //height:270,
                                                               style: 'background-color:blue',
                                                               height: 4,
                                                           },
              
                                                       ]
                                                   },
                                                  
              
              
                                               ]
              
                                           },
                                           {
                                               xtype: 'container',
                                               width: '33.3%',
                                               hidden:true,
                                               zIndex:50,
                                               //height:270,
                                               style: 'background-color:transparent',
                                               height: 350,
                                               layout: {
                                                   type: 'vbox',
                                                   align: 'center',
                                                   pack: 'center'
                                               }, items: [
                                                    {
                                                        margin: '-60 0 0 -60',
                                                        html: '<div class="col-md-6"><div id="chart_VisitorAnalsys" style="width: 100%; height: 430px"></div></div>'
                                                    },
                                                   
                                               ]
              
                                           },
              
              
              
              
              
              
                                            {
                                                xtype: 'container',
                                             //   width: '96%',
                                             width: '33.3%',
                                                zIndex: 50,
                                                //height:270,
                                                style: 'background-color:transparent',
                                                height: 350,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center',
                                                    pack: 'center'
                                                }, items: [

                                                    {
                                                        id: 'html_DashboardAnalsys_AdvertisementVisitor_Txtx',
                                                        html: '<div style="width:100%;font-size:11px;color:black;text-align:center;font-weight:bold;">Advertisement Visitor</div>'
                                                    },
                                                    //{
                                                    //    xtype: 'spacer',
                                                    //    width:5
                                                    //},
                                                    {
                                                        xtype: 'container',
                                                        id: 'container_DashboardAnalsys_AdvertisementVisitor_IDx',
                                                        width: 30,
                                                        //height:270,
                                                        style: 'background-color:blue',
                                                        height: 4,
                                                    },
                                                     {
                                                         margin: '-60 0 0 -60',
                                                         html: '<div class="col-md-6"><div id="chart_VisitorAnalsys_AdvertisementOri" style="width: 100%; height: 430px"></div></div>'
                                                     },
                                                     { 
                                                        html: '<div class="blink_me" style="width:100%;font-size:10px;color:black;text-align:center;font-weight:normal">*Tap Number of visit to view details</div>'
                                                    }
                                                ]
              
                                            },
              
                                             {
                                                 margin: '-30 0 0 0',
                                                 hidden:true,
                                                 html: '<div class="blink_me" style="width:100%;font-size:10px;color:black;text-align:center;font-weight:normal">*Tap Number of visit to view details</div>'
                                             },
              
              
              
                                                {
                                                    xtype: 'container',
                                                    width: '32%',
                                                    hidden:true,
                                                    height: 50,
                                                    name: 'container_DashboardAnalsys_AyohaStoreVisitor',
                                                    zIndex: 200,
                                                    style: 'background-color:transparent',
                                                    margin: '30 0 0 0',
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'center',
                                                        pack: 'center'
                                                    },
                                                    items: [
              
                                                        
                                                       
              
                                                    ]
                                                },
              
              
                                            {
                                                xtype: 'container',
                                               // width: '96%',
                                               width: '33.3%',
                                                zIndex: 50,
                                                //height:270,
                                                style: 'background-color:transparent',
                                                height: 350,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center',
                                                    pack: 'center'
                                                }, items: [

                                                    {
                                                        id: 'html_DashboardAnalsys_AyohaStoreVisitor_Txt',
                                                        html: '<div style="width:100%;font-size:11px;color:black;text-align:center;font-weight:bold;">Ayoha Store Visitor</div>'
                                                    },
                                                   
                                                    {
                                                        xtype: 'container',
                                                        width: 30,
                                                        //height:270,
          
                                                        id: 'container_DashboardAnalsys_AyohaStoreVisitor_ID',
                                                        style: 'background-color:brown',
                                                        height: 4,
                                                    },


                                                   
                                                     {
                                                         margin: '-60 0 0 -60',
                                                         html: '<div class="col-md-6"><div id="chart_VisitorAnalsys_AyohaStore" style="width: 100%; height: 430px"></div></div>'
                                                     },
                                                     { 
                                                        html: '<div class="blink_me" style="width:100%;font-size:10px;color:black;text-align:center;font-weight:normal">*Tap Number of visit to view details</div>'
                                                    }
                                                ]
              
                                            },
              
                                            {
                                                margin: '-30 0 0 0',
                                                hidden:true,
                                                html: '<div class="blink_me" style="width:100%;font-size:10px;color:black;text-align:center;font-weight:normal">*Tap Number of visit to view details</div>'
                                            },
              
              
              
              
                                            {
                                                    xtype: 'container',
                                                    width: '32%',
                                                    hidden:true,
                                                    height: 50,
                                                    margin: '30 0 0 0',
                                                    name: 'container_DashboardAnalsys_MembershipVisitor',
                                                    style: 'background-color:transparent',
                                                    zIndex: 200,
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'center',
                                                        pack: 'center'
                                                    },
                                                    items: [
              
              
                                                    ]
                                                },
              
                                             {
                                                 xtype: 'container',
                                               //  width: '96%',
                                               width: '33.3%',
                                                 zIndex: 50,
                                                 //height:270,
                                                 style: 'background-color:transparent',
                                                 height: 350,
                                                 layout: {
                                                     type: 'vbox',
                                                     align: 'center',
                                                     pack: 'center'
                                                 }, items: [
                                                    
                                                    {
                                                        id: 'html_DashboardAnalsys_MembershipVisitor_Txt',
                                                        html: '<div style="width:100%;font-size:11px;color:black;text-align:center;font-weight:bold;">Membership Visitor</div>'
                                                    }, 
                                                                                              {
                                                                                                  xtype: 'container',
                                                                                                  width: 30,
                                                                                                  //height:270,
                                                                                                  id: 'container_DashboardAnalsys_MembershipVisitor_ID',
                                                                                                  style: 'background-color:orange',
                                                                                                  height: 4,
                                                                                              },
          
                                                      {
                                                          margin: '-60 0 0 -60',
                                                          html: '<div class="col-md-6"><div id="chart_VisitorAnalsys_MembershipCardOri" style="width: 100%; height: 430px"></div></div>'
                                                      },
                                                      { 
                                                        html: '<div class="blink_me" style="width:100%;font-size:10px;color:black;text-align:center;font-weight:normal">*Tap Number of visit to view details</div>'
                                                    }
                                                 ]
              
                                             },
                                           {
                                               xtype: 'container',
                                               //width: '96%',
                                               width: '33.3%',
                                               hidden:true,
                                               zIndex: 150,
                                               margin: '-35 0 0 0',
                                               style: 'background-color:transparent',
                                               height: 30,
                                               layout: {
                                                   type: 'vbox',
                                                   align: 'center',
                                                   pack: 'center'
                                               }, items: [
                                                   {
                                                       margin: '-20 0 0 0',
                                                       id: 'htmlDashboard_VisitorAnalsysYearTxt',
                                                       hidden:true,
                                                       html: '<div style="width:100%;font-size:12px;color:black;text-align:center;font-weight:bold">Year:2021</div>'
                                                   },
                                                   
                                               ]
              
                                           }
                                             
              
                                       ]
                                   },

              
{
    xtype: 'container',
    width: '100%',
     hidden:true,
    margin: '80 0 0 0',
    style: {
        // background: '#D25959',
        background: 'transparent',
        // border: '2px'
    },
    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },

    items:[

        {
            xtype: 'container',
            width: '30%',
            /// hidden:true,
            margin: '0 0 0 0',
            style: {
                // background: '#D25959',
                background: 'transparent',
                // border: '2px'
            },
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[

                {
                    xtype: 'container',
                    width: '100%',
                    /// hidden:true,
                    margin: '0 0 0 0',
                    style: {
                        // background: '#D25959',
                        background: 'transparent',
                        // border: '2px'
                    },
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                         {
                             margin: '0 0 0 14',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div style="color:black;text-align: center;font-size:17px;width:100%;"><b>VIA Advertisement</b></div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },
                    ]
                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 250,
                                    margin: '0 0 0 0',
                                    name: 'namecontainerVIA_Advertisement',
                                    //style: {
                                    //    // background: '#D25959',
                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                    //    // border: '2px'
                                    //},
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    style: 'background-color:transparent',
                
                
                                    // style: 'background-color:black;border-radius: 10px 10px 10px 10px;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;',
                
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'left',
                                    },
                                    items: [
                                        {
                                            xtype: 'spacer',
                                            width:30,
                                        },
                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            height: 330,
                                            margin: '0 0 0 0',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                            //    // border: '2px'
                                            //},
                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 0px 0px;',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            //scrollable: {
                                            //    direction: 'horizontal',
                                            //    directionLock: true
                                            //},
                                            items: [
                
                {
                    xtype: 'container',
                
                    // hidden: true,
                    style: 'background-color: transparent;',
                    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',
                
                    height: 0,
                    width: '100%',
                    // margin: '70 0 0 0',
                    id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia',
                    layout: {
                
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'container',
                            margin: '2 0 0 0',
                            // hidden: true,
                            style: 'background-color: transparent;',
                            //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                            // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',
                
                            height: 3,
                            width: '100%',
                            // margin: '70 0 0 0',
                            id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia_TimingBar',
                            layout: {
                
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'spacer'
                                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing0',
                    margin: '0 0 0 0',
                    flex: 1,
                    // hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    html: '<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">',
                
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing1',
                    margin: '0 0 0 0',
                    flex: 1,
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    hidden: true,
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing2',
                    margin: '0 0 0 0',
                    flex: 1,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    hidden: true,
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing3',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing4',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing5',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing6',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing7',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing8',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Timing9',
                    margin: '0 0 0 0',
                    flex: 1,
                    hidden: true,
                    // iconCls: 'list',
                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                
                
                    }
                },
                {
                    xtype: 'spacer'
                }, {
                    xtype: 'button',
                    id: 'btnDashboard_PreviewAdvertisement_Start',
                    hidden: true,
                    margin: '7 10 0 0',
                    height: 25,
                    width: 25,
                    html: '<img src="resources/icons/playPurpleOne.png" style="width: 15px; height: 15px;">',
                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        VIAAdvertismentAutoSlide();
                        Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(true);
                        Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(false);
                
                    }
                },
                     {
                         xtype: 'button',
                         id: 'btnDashboard_PreviewAdvertisement_Stop',
                         margin: '7 10 0 0',
                         height: 25,
                         width: 25,
                         html: '<img src="resources/icons/stopPurple.png" style="width: 15px; height: 15px;">',
                         // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                
                             clearInterval(VIAAdvertismentAutoSlideTimer);
                             Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(false);
                             Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(true);
                
                         }
                     },
                            ]
                        },
                
                        {
                            xtype: 'container',
                            //   margin: '0 0 0 5',
                            // hidden: true,
                            style: 'background-color: transparent;',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                            // style: 'background-color:black;border-radius: 10px 10px 10px 10px;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;',
                            //height: 25,
                            //width: 70,
                            margin: '25 15 0 0',
                            id: 'containerDashboard_PreviewAdvertisementHeaderOutter',
                            layout: {
                
                                type: 'hbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items: [
                
                
                              {
                                  xtype: 'button',
                                  id: 'btnDashboard_PreviewAdvertisement_PicProfile',
                                  margin: '0 0 0 10',
                                  height: 60,
                                  width: 60,
                                  // iconCls: 'list',
                                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                  html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">',
                
                
                                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                  ui: 'plain',
                                  handler: function () {
                
                
                                  }
                              },
                              {
                                  xtype: 'button',
                                  id: 'btnDashboard_PreviewAdvertisement_UserNameProfile',
                                  margin: '0 0 0 0',
                                  height: 60,
                                  width: 250,
                                  // iconCls: 'list',
                                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                  html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                
                                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                  ui: 'plain',
                                  handler: function () {
                
                
                                  }
                              },
                            {
                                xtype: 'spacer'
                            },
                
                
                
                            ]
                        },
                
                    ]
                },
                
                
                
                                                {
                                                    xtype: 'carousel',
                                                    id: 'Dashboard_PreviewAdvertisement_Carousel',
                                                    name: 'Dashboard_PreviewAdvertisement_CarouselName',
                                                    width: '100%',
                                                    height: '100%',
                
                                                    //delay :2000,
                                                    //  carouselSlideDelay: 1000,
                                                    // autoSlide: true,
                                                    indicator: false,
                
                
                                                    //initialize: function (c) {
                                                    //    this.element.on({
                                                    //        tap: function (e, node, options) {
                                                    //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                                    //        }
                                                    //    });
                                                    //},
                
                
                                                    listeners:
                                             {
                
                                                 activeitemchange: function (container, newCard, oldCard, index) {
                
                                                     //console.log("newCard Index:"+carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard));
                                                     //console.log("oldCard Index:" + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard));
                
                
                
                
                                                     if (ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] != 'NULL') {
                                                         //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
                                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
                                                         Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
                                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:black;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] + '</div>');
                
                                                     } else {
                                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
                                                         Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
                                                     }
                
                                                     if (carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard) > carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard)) {
                                                         // console.log("kanan");
                                                         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                
                                                     } else {
                                                         //  console.log("kiri");
                                                         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">')
                                                     }
                
                
                
                                                 },
                
                                             },
                
                                                },
                
                                            ]
                                        },
                
                                        {
                                            xtype: 'spacer'
                                        },
                                    ]
                
                                },
                               
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 60,
                                    //hidden:true,
                                    margin: '14 0 0 32',
                
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    id: 'containerDashboard_Advertisement_CaptionText',
                                    // hidden:true,
                
                                    style: 'background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;',
                                    items: [
                                         {
                                             id: 'htmlDashboard_Advertisement_CaptionText',
                                             html: '<div style="color:black;text-align: center;font-size:13px;width:100%;font-weight:bold"></div>',
                                         }
                                    ]
                                },
                                
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 46,
                                    /// hidden:true,
                                    margin: '1 0 0 31',
                                    style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 10px 10px;',
                                    //style: {
                                    //    // background: '#D25959',
                                    //    background: 'transparent',
                                    //    // border: '2px'
                                    //},
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [
                
                                        {
                                            xtype: 'container',
                                            id: 'DashboardAdvertisementButtonHeader_bottom',
                                            //hidden:true,
                                            width: '100%',
                                            style: "background-color: transparent",
                                            //style: "background-color: #F35B57;",
                                            margin: '-5 0 0 0',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center'
                
                                            },
                                            items: [
                                                 //{
                                                 //    width: '75%',
                                                 //    margin: '0 0 0 5',
                                                 //    hidden:true,
                                                 //    id: 'htmlDasboardAdvertisementTitleTxt',
                                                 //    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">Ramadhan AlMubarak 2021 Promotion.Started:March 2020</div>',
                
                                                 //    // html: '<font size=2 color=black><b>Contact Us</b></font>',
                                                 //},
                                                 {
                                                     xtype: 'container',
                
                                                     //hidden:true,
                                                     width: '60%',
                                                     style: "background-color: transparent",
                                                    name: 'nameContainerDashboardVIAAdvertisement_eStore',
                                                     //style: "background-color: #F35B57;",
                                                     margin: '0 0 0 0',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'left',
                                                         align: 'left'
                
                                                     },
                                                     items: [
                                                          {
                                                              xtype: 'panel',
                                                              width: 5
                                                          },
                                                          {
                                                              //xtype: 'button',
                                                              height: 38,
                                                              width: 38,
                                                              //margin: '0 0 0 0',
                                                              //hidden: false,
                                                              margin: '5 0 0 0',
                                                              id: 'DashboardVIAAdvertisement_eStoreIcon',
                                                              //badgeText: "2",
                                                              html: '<div><img src="https://setkita.com/AyohaImgCard/eStoreLogo/Default.png" width="38" height="38" alt="Company Name"></div>',
                
                                                          },
                                                          {
                                                              xtype: 'panel',
                                                              width: 5
                                                          },
                                                                                {
                                                                                    margin: '0 0 0 0',
                                                                                    id: 'DashboardVIAAdvertisement_eStoreName',
                                                                                    html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>Kiah Store</b></font></div></div>',
                                                                                },
                                                     ]
                
                                                 },
                                                 {
                                                     xtype: 'container',
                
                                                     //hidden:true,
                                                     width: '40%',
                                                     style: "background-color: transparent",
                                                     id: 'DashboardAdvertisementButton_bottom',
                                                     margin: '8 0 0 0',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'right',
                                                         align: 'right'
                
                                                     },
                                                     items: [
                
                
                                                         {
                                                             xtype: 'button',
                                                             height: 36,
                                                             width: 36,
                                                             margin: '0 0 0 0',
                                                             //  hidden: true,
                                                             id: 'btnDashboardAdvertisementbottom_Location',
                                                             //badgeText: "2",
                                                             html: '<div ><img src="resources/icons/locationThree.png" width="26" height="26" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                     FloatPanel_PreviewAdvertisement_OpenLocation();
                                                                 });
                                                                 task.delay(150);
                
                                                                 //var Coordinate = globalEnterpriseCoordinate.split(",");
                                                                 //var PlaceMarkerlats = Coordinate[0];
                                                                 //var PlaceMarkerlngs = Coordinate[1];
                
                
                
                
                
                                                                 //if (PlaceMarkerlats) {
                                                                 //    if (PlaceMarkerlngs) {
                                                                 //        window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlats + "," + PlaceMarkerlngs, '_system'); return false;
                                                                 //    } else {
                
                                                                 //        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
                                                                 //    }
                                                                 //} else {
                                                                 //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
                                                                 //}
                
                
                
                
                
                
                                                             }
                                                         },
                                                                        {
                                                                            xtype: 'button',
                                                                            height: 38,
                                                                            width: 38,
                                                                            margin: '0 0 0 0',
                                                                            // hidden: true,
                                                                            id: 'btnDashboardAdvertisementbottom_FB',
                                                                            //badgeText: "2",
                                                                            html: '<div ><img src="resources/icons/Facebooklogo.png" width="28" height="28" alt="Company Name"></div>',
                                                                            ui: 'plain',
                                                                            handler: function () {
                                                                                //alert(GetEnterpriseFacebook());
                                                                                //window.open("fb://page/1999591407027990" + ModifiedMediaFileName);
                                                                                // setTimeout(function () { window.open("fb://profile/100002717204522"); }, 25);
                                                                                //setTimeout(function () { window.open("fb://page/107468437955395"); }, 25);
                                                                                globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                    FloatPanel_PreviewAdvertisement_OpenFB();
                                                                                });
                                                                                task.delay(150);
                
                
                
                                                                                //if (globalVIAEnterpriseFacebookUrl) {
                                                                                //    setTimeout(function () { window.open("fb://page/" + globalVIAEnterpriseFacebookUrl + "", '_system'); return false; }, 25);
                
                                                                                //} else {
                
                                                                                //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
                                                                                //}
                
                
                                                                            }
                                                                        },
                                                                         {
                                                                             xtype: 'button',
                                                                             height: 38,
                                                                             width: 38,
                                                                             margin: '0 0 0 0',
                                                                             hidden: true,
                                                                             id: 'btnDashboardAdvertisementbottom_Insta',
                                                                             //badgeText: "2",
                                                                             html: '<div ><img src="resources/icons/instagram.png" width="28" height="28" alt="Company Name"></div>',
                                                                             ui: 'plain',
                                                                             handler: function () {
                                                                                 globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                     FloatPanel_PreviewAdvertisement_OpenInsta();
                                                                                 });
                                                                                 task.delay(150);
                
                
                
                                                                                 //if (globalVIAEnterpriseInstagramUrl) {
                
                                                                                 //    setTimeout(function () { window.open("instagram://user?username=" + globalVIAEnterpriseInstagramUrl + "", '_system'); return false; }, 25);
                
                                                                                 //} else {
                
                                                                                 //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Instagram Link.,Help Merchant to know this Message!", "Insta")
                                                                                 //}
                
                
                
                
                                                                             }
                                                                         },
                                                                         {
                                                                             xtype: 'button',
                                                                             height: 38,
                                                                             width: 38,
                                                                             margin: '0 0 0 0',
                                                                             hidden: true,
                                                                             id: 'btnDashboardAdvertisementbottom_Twitter',
                                                                             //badgeText: "2",
                                                                             html: '<div ><img src="resources/icons/twitter.png" width="28" height="28" alt="Company Name"></div>',
                                                                             ui: 'plain',
                                                                             handler: function () {
                
                                                                                 setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);
                
                                                                             }
                                                                         },
                                                                         {
                                                                             xtype: 'button',
                                                                             height: 28,
                                                                             width: 28,
                                                                             margin: '0 0 0 0',
                                                                             id: 'btnDashboardAdvertisementbottom_Web',
                                                                             hidden: true,
                                                                             //badgeText: "2",
                                                                             // html: '<div ><img src="resources/icons/websiteIcon.png" width="18" height="18" alt="Company Name"></div>',
                                                                             ui: 'plain',
                                                                             handler: function () {
                
                                                                                 window.open(GetEnterpriseWebsite());
                                                                                 //setTimeout(function () { window.open(GetEnterpriseWebsite()); }, 25);
                                                                                 //setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);
                
                                                                             }
                                                                         },
                                                                           {
                                                                               xtype: 'button',
                                                                               height: 38,
                                                                               width: 38,
                                                                               margin: '0 0 0 0',
                                                                               id: 'btnDashboardAdvertisementbottom_Email',
                                                                               hidden: true,
                                                                               //badgeText: "2",
                                                                               // html: '<div ><img src="resources/icons/EmailRed.png" width="18" height="18" alt="Company Name"></div>',
                                                                               ui: 'plain',
                                                                               handler: function () {
                
                                                                                   window.open("mailto:" + GetEnterpriseEmail() + "");
                
                                                                               }
                                                                           },
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 28,
                                                                              width: 28,
                                                                              margin: '0 0 0 0',
                                                                              id: 'btnDashboarddvertisementbottom_Call',
                                                                              hidden: true,
                                                                              //badgeText: "2",
                                                                              html: '<div ><img src="resources/icons/calling.png" width="18" height="18" alt="Company Name"></div>',
                                                                              ui: 'plain',
                                                                              handler: function () {
                
                                                                                  setTimeout(function () { window.open("tel:0133376958"); }, 25);
                
                
                                                                              }
                                                                          },
                                                                          //{
                                                                          //    //xtype: 'button',
                                                                          //    //align: 'stretch',
                                                                          //    //height: 32,
                                                                          //    //width: 92,
                                                                          //    id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
                                                                          //    // ui: 'plain',
                                                                          //    //  window.open("http://" + url, "_blank");
                                                                          //    //  html: '<img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" />'
                
                
                                                                          //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatApplogosnew.png" style="width: 22px; height: 22px;" /></a>'
                                                                          //}
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 38,
                                                                              width: 38,
                                                                              margin: '0 0 0 0',
                                                                              hidden: true,
                                                                              id: 'btnDashboardAdvertisementbottom_Wassap',
                                                                              //badgeText: "2",
                                                                              html: '<img src="resources/icons/whatsapp01.png" width="28" height="28" alt="Company Name"/>',
                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                                  globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                                  var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                      FloatPanel_PreviewAdvertisement_OpenWhatsApp();
                                                                                  });
                                                                                  task.delay(150);
                
                                                                                  //if (globalVIAPICContactNo) {
                                                                                  //    // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                                                                  //    //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                                                                  //    window.open("https://api.whatsapp.com/send?phone=" + globalVIAPICContactNo + "&text=Hi", '_system'); return false;
                                                                                  //    // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);
                                                                                  //} else {
                                                                                  //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                                                                  //}
                
                
                                                                              }
                                                                          },
                
                
                                                                          {
                                                                              xtype: 'panel',
                                                                              width: 5
                                                                          }
                
                
                                                          //{
                
                                                          //    margin: '0 0 0 0',
                                                          //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;">Contact Us</div>',
                
                                                          //    // html: '<font size=2 color=black><b>Contact Us</b></font>',
                                                          //},
                                                          //{
                                                          //    xtype: 'container',
                                                          //    id: 'DashboardAdvertisementButton_bottom',
                                                          //    //hidden:true,
                                                          //    width: '100%',
                                                          //    style: "background-color: transparent",
                                                          //    //style: "background-color: #F35B57;",
                                                          //    margin: '0 0 0 0',
                                                          //    layout: {
                                                          //        type: 'hbox',
                                                          //        pack: 'center',
                                                          //        align: 'center'
                
                                                          //    },
                
                
                                                          //    items: [
                
                
                                                          //    ]
                
                                                          //},
                                                     ]
                
                                                 },
                
                                            ]
                                        },
                
                
                
                
                
                
                
                                    ]
                                },
            ]
        },


        {
            xtype: 'panel',
            width: '5%',
        },


        {
            xtype: 'container',
            width: '65%',
            /// hidden:true,
            margin: '0 0 0 0',
            style: {
                // background: '#D25959',
                background: 'transparent',
                // border: '2px'
            },
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[

                {
                    xtype: 'container',
                    width: '100%',
                    /// hidden:true,
                    margin: '-85 0 0 0',
                    style: {
                        // background: '#D25959',
                        background: 'transparent',
                        // border: '2px'
                    },
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                         {
                             margin: '0 0 0 14',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Hot Seat Promotion!</b></div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },
                    ]
                },



                {
                    xtype: 'container',
                    width: '100%',
                    height: 280,
                    margin: '0 0 0 0',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    style: 'background-color:transparent',
                
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'container',
                            width: '95%',
                            height: 310,
                            margin: '0 0 0 0',
                            //style: {
                            //    // background: '#D25959',
                            //    background: 'rgba(76, 175, 80, 0.3);',
                            //    // border: '2px'
                            //},
                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                            // style: 'background-color:rgba(255, 255, 255, 0);border-radius: 10px 10px 10px 10px;',
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            scrollable: {
                                direction: 'horizontal',
                                directionLock: true,
                                indicators: false
                            },
                            items: [
                              {
                                  xtype: 'panel',
                                  width: 7
                              },
                
                
                                       {
                                           xtype: 'container',
                                           height: 300,
                                           width: 230,
                                           margin: '0 0 0 0',
                                           style: 'background-color:transparent;',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center',
                                           },
                                           items: [
                
                
                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   height: 30,
                                                   docked: 'bottom',
                                                   hidden: true,
                                                   margin: '-2 0 0 0',
                                                   style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [
                
                
                                                           {
                                                               xtype: 'container',
                                                               id: 'DashboardHotSeatAdvertisementButton_bottom0',
                                                               //hidden:true,
                                                               width: '100%',
                                                               style: "background-color: transparent",
                                                               //style: "background-color: #F35B57;",
                                                               margin: '0 0 0 0',
                                                               layout: {
                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'
                
                                                               },
                
                
                                                               items: [
                
                                                                   {
                                                                       xtype: 'button',
                                                                       margin: '0 0 0 0',
                                                                       ui: 'plain',
                                                                       width: '100%',
                                                                       id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt0',
                                                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                       html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                       handler: function () {
                
                
                                                                       }
                
                
                                                                   }
                
                                                               ]
                
                                                           },
                
                
                
                
                                                   ]
                                               },
                
                
                
                                               {
                                                   xtype: 'button',
                                                   id: 'btnDashboard_HotSeatAdvertisement_PicProfile0',
                                                   margin: '0 0 0 0',
                                                   //docked:'top',
                                                   height: 60,
                                                   width: 60,
                                                   // iconCls: 'list',
                                                   //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                   html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                                   // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   handler: function () {
                
                
                                                   }
                                               },
                
                
                                                 {
                
                                                     height: 260,
                                                     width: 230,
                                                     id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat0',
                                                     margin: '-30 0 0 0',
                                                     html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                                 },
                                                     {
                                                         xtype: 'container',
                                                         // width: '91.1%',
                                                         width: 228,
                                                         height: 60,
                                                         hidden: true,
                                                         margin: '14 0 0 16',
                
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         id: 'containerDashboard_HotSeatAdvertisement_ProfileText0',
                                                         // hidden:true,
                
                                                         style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                         items: [
                
                                                         ]
                                                     },
                
                                               {
                                                   xtype: 'container',
                                                   id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile0',
                                                   margin: '-40 0 0 0',
                                                   height: 40,
                                                   zIndex: 200,
                                                   //width: 228,
                                                   width: '100%',
                                                   style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                                   // iconCls: 'list',
                                                   //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                   //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                                   // 
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [
                                                       {
                                                           id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName0',
                                                           html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                       },
                                                        {
                                                            xtype: 'container',
                                                            style: 'background-color:white;',
                                                            height: 2,
                                                            width: '80%',
                                                            // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                        },
                                                         {
                                                             id: 'htmlDasboard_HotSeatAdvertisement_Title0',
                                                             html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                         },
                                                   ]
                
                                               },
                                           ]
                                       },
                
                
                            
                
                                {
                                    xtype: 'panel',
                                    width: 15
                                },
                
                
                
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                
                
                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                
                
                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom1',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                
                                                          },
                
                
                                                          items: [
                
                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt1',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {
                
                
                                                                  }
                
                
                                                              }
                
                                                          ]
                
                                                      },
                
                
                
                
                                              ]
                                          },
                
                
                
                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile1',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                
                
                                              }
                                          },
                
                
                                            {
                
                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat1',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',
                
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText1',
                                                    // hidden:true,
                
                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [
                
                                                    ]
                                                },
                
                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile1',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName1',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title1',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]
                
                                          },
                                      ]
                                  },
                
                
                                  ////////////////hotseat 2
                
                                {
                                    xtype: 'panel',
                                    width: 15
                                },
                
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                
                
                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                
                
                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom2',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                
                                                          },
                
                
                                                          items: [
                
                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt2',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {
                
                
                                                                  }
                
                
                                                              }
                
                                                          ]
                
                                                      },
                
                
                
                
                                              ]
                                          },
                
                
                
                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile2',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                
                
                                              }
                                          },
                
                
                                            {
                
                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat2',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',
                
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText2',
                                                    // hidden:true,
                
                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [
                
                                                    ]
                                                },
                
                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile2',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName2',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title2',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]
                
                                          },
                                      ]
                                  },
                
                                  ///////hotseat 3
                
                
                                {
                                    xtype: 'panel',
                                    width: 15
                                },
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                
                
                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                
                
                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom3',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                
                                                          },
                
                
                                                          items: [
                
                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt3',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {
                
                
                                                                  }
                
                
                                                              }
                
                                                          ]
                
                                                      },
                
                
                
                
                                              ]
                                          },
                
                
                
                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile3',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                
                
                                              }
                                          },
                
                
                                            {
                
                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat3',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',
                
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText3',
                                                    // hidden:true,
                
                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [
                
                                                    ]
                                                },
                
                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile3',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName3',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title3',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]
                
                                          },
                                      ]
                                  },
                
                
                
                
                
                
                
                
                                ///////////////////hotseat 4
                           {
                               xtype: 'panel',
                               width: 15
                           },
                
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                
                
                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                
                
                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom4',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                
                                                          },
                
                
                                                          items: [
                
                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt4',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {
                
                
                                                                  }
                
                
                                                              }
                
                                                          ]
                
                                                      },
                
                
                
                
                                              ]
                                          },
                
                
                
                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile4',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                
                
                                              }
                                          },
                
                
                                            {
                
                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat4',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',
                
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText4',
                                                    // hidden:true,
                
                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [
                
                                                    ]
                                                },
                
                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile4',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName4',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title4',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]
                
                                          },
                                      ]
                                  },
                
                
                
                                /////////////////hotseat 5
                
                
                                  {
                                      xtype: 'panel',
                                      width: 15
                                  },
                
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                
                
                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                
                
                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom5',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                
                                                          },
                
                
                                                          items: [
                
                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt5',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {
                
                
                                                                  }
                
                
                                                              }
                
                                                          ]
                
                                                      },
                
                
                
                
                                              ]
                                          },
                
                
                
                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile5',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                
                
                                              }
                                          },
                
                
                                            {
                
                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat5',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',
                
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText5',
                                                    // hidden:true,
                
                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [
                
                                                    ]
                                                },
                
                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile5',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName5',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title5',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]
                
                                          },
                                      ]
                                  },
                
                                /////////////////////hotseat 5 unused
                
                
                                // {
                                //     xtype: 'panel',
                                //     width: 15
                                // },
                                //{
                                //    xtype: 'container',
                                //    height: 270,
                                //    width: 230,
                                //    margin: '0 0 0 0',
                                //    style: 'background-color:transparent;',
                                //    layout: {
                                //        type: 'vbox',
                                //        pack: 'center',
                                //        align: 'center',
                                //    },
                                //    items: [
                
                
                                //        {
                                //            xtype: 'container',
                                //            width: '100%',
                                //            height: 30,
                                //            docked: 'bottom',
                                //            margin: '-2 0 0 0',
                                //            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                
                                //            layout: {
                                //                type: 'vbox',
                                //                pack: 'center',
                                //                align: 'center',
                                //            },
                                //            items: [
                
                                //                    {
                                //                        xtype: 'container',
                                //                        id: 'DashboardHotSeatAdvertisementButton_bottom5',
                                //                        //hidden:true,
                                //                        width: '100%',
                                //                        style: "background-color: transparent",
                                //                        //style: "background-color: #F35B57;",
                                //                        margin: '0 0 0 0',
                                //                        layout: {
                                //                            type: 'hbox',
                                //                            pack: 'center',
                                //                            align: 'center'
                
                                //                        },
                
                
                                //                        items: [
                
                                //                            {
                                //                                xtype: 'button',
                                //                                margin: '0 0 0 0',
                                //                                ui: 'plain',
                                //                                width: '100%',
                                //                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt5',
                                //                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                //                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Opening Restauran Promotion! >></b></div>',
                                //                                handler: function () {
                
                
                                //                                }
                
                
                                //                            }
                
                                //                        ]
                
                                //                    },
                
                
                
                
                                //            ]
                                //        },
                
                
                
                                //        {
                                //            xtype: 'container',
                                //            id: 'btnDashboard_HotSeatAdvertisement_PicProfile5',
                                //            margin: '-2 0 0 0',
                                //            //docked:'top',
                                //            zIndex: 300,
                                //            height: 60,
                                //            width: '100%',
                                //            layout:{
                                //                type: 'hbox',
                                //                pack: 'left',
                                //                align: 'left'
                                //            },
                
                                //            items:[
                                //                {
                                //                    zIndex:300,
                                //                    html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',
                
                                //                }
                                //            ]
                
                                //        },
                                //        {
                                //            xtype: 'container',
                                //            // width: '91.1%',
                                //            width: 228,
                                //            height: 60,
                                //            hidden: true,
                                //            margin: '14 0 0 16',
                
                                //            layout: {
                                //                type: 'vbox',
                                //                pack: 'center',
                                //                align: 'center',
                                //            },
                                //            id: 'containerDashboard_HotSeatAdvertisement_ProfileText5',
                                //            // hidden:true,
                
                                //            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                //            items: [
                
                                //            ]
                                //        },
                
                                //        {
                                //            xtype: 'button',
                                //            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile5',
                                //            margin: '-20 0 0 0',
                                //            height: 60,
                                //            //width: 228,
                                //            width: '100%',
                                //            // iconCls: 'list',
                                //            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                //            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                //            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                
                                //            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                //            ui: 'plain',
                                //            handler: function () {
                
                
                                //            }
                                //        },
                
                                //          {
                
                                //              height: 210,
                                //              width: 230,
                                //              id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat5',
                                //              margin: '-70 0 0 0',
                                //              html: '<img src="resources/icons/toypromo.jpg"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;">',
                
                                //          },
                                //    ]
                                //},
                
                                /////////////////////////hotseat 6
                
                
                                  {
                                      xtype: 'panel',
                                      width: 15
                                  },
                
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                
                
                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                
                
                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom6',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                
                                                          },
                
                
                                                          items: [
                
                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt6',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {
                
                
                                                                  }
                
                
                                                              }
                
                                                          ]
                
                                                      },
                
                
                
                
                                              ]
                                          },
                
                
                
                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile6',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                
                
                                              }
                                          },
                
                
                                            {
                
                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat6',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',
                
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText6',
                                                    // hidden:true,
                
                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [
                
                                                    ]
                                                },
                
                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile6',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName6',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title6',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]
                
                                          },
                                      ]
                                  },
                
                
                
                
                
                                ////////////// hotseat 7
                
                
                
                                        {
                                            xtype: 'panel',
                                            width: 15
                                        },
                
                                {
                                    xtype: 'container',
                                    height: 300,
                                    width: 230,
                                    margin: '0 0 0 0',
                                    style: 'background-color:transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [
                
                
                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            height: 30,
                                            docked: 'bottom',
                                            hidden: true,
                                            margin: '-2 0 0 0',
                                            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                
                
                                                    {
                                                        xtype: 'container',
                                                        id: 'DashboardHotSeatAdvertisementButton_bottom7',
                                                        //hidden:true,
                                                        width: '100%',
                                                        style: "background-color: transparent",
                                                        //style: "background-color: #F35B57;",
                                                        margin: '0 0 0 0',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'
                
                                                        },
                
                
                                                        items: [
                
                                                            {
                                                                xtype: 'button',
                                                                margin: '0 0 0 0',
                                                                ui: 'plain',
                                                                width: '100%',
                                                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt7',
                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                handler: function () {
                
                
                                                                }
                
                
                                                            }
                
                                                                    //{
                                                                    //    xtype: 'button',
                                                                    //    height: 28,
                                                                    //    width: 28,
                                                                    //    margin: '0 0 0 0',
                                                                    //    id: 'btnDashboardAdvertisementbottom_Wassap',
                                                                    //    //badgeText: "2",
                                                                    //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                                    //    ui: 'plain',
                                                                    //    handler: function () {
                
                                                                    //        //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                
                                                                    //        //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);
                
                                                                    //        //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);
                
                                                                    //    }
                                                                    //},
                                                        ]
                
                                                    },
                
                
                
                
                                            ]
                                        },
                
                
                
                                        {
                                            xtype: 'button',
                                            id: 'btnDashboard_HotSeatAdvertisement_PicProfile7',
                                            margin: '0 0 0 0',
                                            //docked:'top',
                                            height: 60,
                                            width: 60,
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',
                
                
                                            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                
                
                                            }
                                        },
                
                
                                          {
                
                                              height: 260,
                                              width: 230,
                                              id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat7',
                                              margin: '-30 0 0 0',
                                              html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',
                
                                          },
                                              {
                                                  xtype: 'container',
                                                  // width: '91.1%',
                                                  width: 228,
                                                  height: 60,
                                                  hidden: true,
                                                  margin: '14 0 0 16',
                
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  id: 'containerDashboard_HotSeatAdvertisement_ProfileText7',
                                                  // hidden:true,
                
                                                  style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                  items: [
                
                                                  ]
                                              },
                
                                        {
                                            xtype: 'container',
                                            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile7',
                                            margin: '-40 0 0 0',
                                            height: 40,
                                            zIndex: 200,
                                            //width: 228,
                                            width: '100%',
                                            style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                            // 
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                {
                                                    id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName7',
                                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                },
                                                 {
                                                     xtype: 'container',
                                                     style: 'background-color:white;',
                                                     height: 2,
                                                     width: '80%',
                                                     // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                 },
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_Title7',
                                                      html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                  },
                                            ]
                
                                        },
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    width: 15
                                }
                
                            ]
                        },
                
                
                
                
                
                
                
                
                
                
                        {
                            xtype: 'spacer'
                        },
                    ]
                
                },
                
            ]
        },
    ]
},

          
              
              ///////
              {
                  xtype: 'panel',
                  height: 15
              },
              
             
             
              
                       {
                           xtype: 'container',
                           width: '100%',
                           id: 'Dashboard_FloatingAdvertisement_Txt',
                           hidden: true,
                           margin: '60 0 0 0',
                           style: {
                               // background: '#D25959',
                               background: 'transparent',
                               // border: '2px'
                           },
                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                           layout: {
                               type: 'hbox',
                               pack: 'left',
                               align: 'left',
                           },
                           items: [
                                {
                                    margin: '0 0 0 14',
                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                    html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Floating Advertisement!</b></div>'
                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                },
                           ]
                       },
                               {
                                   xtype: 'container',
                                   width: '100%',
                                   height: 110,
                                   margin: '0 0 0 20',
                                  hidden: true,
                                   id: 'Dashboard_FloatingAdvertisement_Icon',
                                   //style: {
                                   //    // background: '#D25959',
                                   //    background: 'rgba(76, 175, 80, 0.3);',
                                   //    // border: '2px'
                                   //},
                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                   style: 'background-color:transparent',
              
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left',
                                   },
                                   items: [
                                       {
                                           html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                                           name: 'nameHtmlDashboard_FloatAdvertisementIcon',
                                           height: 105,
                                           width: 100,
                                       },
                                   ]
              
                               },
              
              
              
              
              
              
                              {
                                  xtype: 'panel',
                                //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                                  height:200
                              },
              
                             
              
                             //{
                             //    xtype: 'container',
                             //    style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                             //    width: '100%',
                             //    height:200,
                             //    //  style: "background-color: transparent;",
                             //    layout: {
                             //        type: 'vbox',
                             //        pack: 'start',
                             //        align: 'center'
              
                             //    },
                             //}
                             
                               
                            ////////////////////////////////
                              
              
              
                              
              
              
              
              
              
              
              
              
              
                        ]
              
                    },
              

   




        ]
    },
    initialize: function () {

    }
});



var TotalSend = 1;
var TotalUsed;
var PNremainingval;
function setDashBoardPushNotificationsQuota() {


// Dashboard data variables
var dataPNDashBoard;
var optionPNDashBoard;
var chartPushNotificationsDashboard;

// Values for the percentage and remaining notifications
var valUsedPercentage;
var TotalUsed = GetPushNotificationTotalUsed();
var PNremainingval = GetPushNotificationQuota() - TotalUsed;
valUsedPercentage = (TotalUsed / GetPushNotificationQuota()) * 100;

// Log current usage
console.log(TotalUsed);
console.log(valUsedPercentage + '%');

// Initialization of Google Chart for Push Notifications
function initializePushNotificationsChart() {
    dataPNDashBoard = google.visualization.arrayToDataTable([
        ['Content', 'Size'],
        ['Used', TotalUsed],
        ['Remaining', PNremainingval]
    ]);
    chartPushNotificationsDashboard = new google.visualization.PieChart(document.getElementById('chartPushNotificationsDashboard'));
    optionPNDashBoard = {
        title: "",
        pieHole: 0.5,
        pieSliceBorderColor: "none",
        colors: ['#067ab5', '#eaeaea'],
        backgroundColor: 'transparent', pieStartAngle: 180,
        //is3D:true,
        legend: {
            position: "none"
        },
        pieSliceText: "none",
        tooltip: {
            trigger: "98"
        }
    };
    chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
}

// Dynamic update for the chart
var percentchartPN = 0;
var handlerchartPN = setInterval(function () {
    percentchartPN++;
   
   
    // Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification').setHtml('<div style="text-align: center; font-size: 12px;">Push Notifications</div><br><div style="text-align: center; font-size: 14px; margin-top: -25px"><b>' + TotalUsed + '/' + GetPushNotificationQuota() + '</b></div>');
    // Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_percent').setHtml('<div style="text-align: center; font-size: 25px;"><b>' + percentchartPN + '%</b></div>');

    if (percentchartPN >= valUsedPercentage) {
        clearInterval(handlerchartPN);
        initializePushNotificationsChart(); // Refresh the chart with final values
    }
}, 1000);

// Handling cases when no notifications have been used
if (TotalUsed <= 0) {
    TotalUsed = 0;
    valUsedPercentage = 0;
    PNremainingval = GetPushNotificationQuota();
    initializePushNotificationsUtil(); // Refresh or initialize the chart with zero values
}

















    // var dataPNDashBoard; var optionPNDashBoard; var chartPushNotificationsDashboard;


   




    
    // var percentchartPN = 0;
    // var valUsedPercentage;


    // PNremainingval = GetPushNotificationQuota() - GetPushNotificationTotalUsed();
    // valUsedPercentage = (100 * GetPushNotificationTotalUsed()) / GetPushNotificationQuota();

    
   
    // console.log(GetPushNotificationTotalUsed());
    // console.log(valUsedPercentage);

    // if (GetPushNotificationTotalUsed() > 1) {

    // }
    // if (GetPushNotificationTotalUsed() < 1) {
    //     TotalUsed = 0;
    //     valUsedPercentage = 0;
    //     PNremainingval = 0;
    // }



    // var handlerchartPN = setInterval(function () {









    //     percentchartPN += 1;
    //     dataPNDashBoard.setValue(0, 1, percentchartPN);
    //     dataPNDashBoard.setValue(1, 1, 100 - percentchartPN);
    //     Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;">Push Notifications</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>' + GetPushNotificationTotalUsed() + '/' + GetPushNotificationQuota() + '</b></div>');
    //     Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent').setHtml('<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>' + percentchartPN + '%</b></div>');
       
    //     chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
    //     if (valUsedPercentage) {
    //         if (percentchartPN > valUsedPercentage) {
    //             clearInterval(handlerchartPN);
    //             dataPNDashBoard = google.visualization.arrayToDataTable([
    //               ['Content', 'Size'],
    //               ['Used', TotalUsed],
    //               ['Remaining', PNremainingval],
    //             ]);
    //             chartPushNotificationsDashboard = new google.visualization
    //        .PieChart(document.getElementById('chartPushNotificationsDashboard'));
    //             chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
    //         }
    //     } else {
    //        // alert('sdfdsfsdf')
    //         Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;">Push Notifications</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>' + GetPushNotificationTotalUsed() + '/' + GetPushNotificationQuota() + '</b></div>');
    //         Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent').setHtml('<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>0%</b></div>');
    //         clearInterval(handlerchartPN);
    //         dataPNDashBoard = google.visualization.arrayToDataTable([
    //           ['Content', 'Size'],
    //           ['Used', 0],
    //           ['Remaining', 100],
    //         ]);
    //         chartPushNotificationsDashboard = new google.visualization
    //    .PieChart(document.getElementById('chartPushNotificationsDashboard'));
    //         chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
    //     }
        


    // }, 30);
// commented on 15/2/2024
   // Gnerate_VisitorAnalsysChart();





}






var SMSremainingval;

function setDashBoardSMSQuota() {



    var percentchartSMS = 0;
    var valUsedPercentage;


    SMSremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartSMS = setInterval(function () {


        percentchartSMS += 1;
        dataSMSDashBoard.setValue(0, 1, percentchartSMS);
        dataSMSDashBoard.setValue(1, 1, 100 - percentchartSMS);
        chartSMSDashboard.draw(dataSMSDashBoard, optionSMSDashBoard);
        if (percentchartSMS > valUsedPercentage) {
            clearInterval(handlerchartSMS);
            dataSMSDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', SMSremainingval],
            ]);
            chartSMSDashboard = new google.visualization
       .PieChart(document.getElementById('chartSMSDashboard'));
            chartSMSDashboard.draw(dataSMSDashBoard, optionSMSDashBoard);
        }


    }, 30);








}



var WhatAppremainingval;

function setDashBoardWhatAppQuota() {



    var percentchartWhatApp = 0;
    var valUsedPercentage;


    WhatAppremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartSMS = setInterval(function () {

        percentchartWhatApp += 1;
        dataWhatAppDashBoard.setValue(0, 1, percentchartWhatApp);
        dataWhatAppDashBoard.setValue(1, 1, 100 - percentchartWhatApp);

        chartWhatAppDashboard.draw(dataWhatAppDashBoard, optionWhatAppDashBoard);
        if (percentchartWhatApp > valUsedPercentage) {
            clearInterval(handlerchartSMS);
            dataWhatAppDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', WhatAppremainingval],
            ]);
            chartWhatAppDashboard = new google.visualization
       .PieChart(document.getElementById('chartWhatAppDashboard'));
            chartWhatAppDashboard.draw(dataWhatAppDashBoard, optionWhatAppDashBoard);
        }


    }, 30);

  

   
   

   // loadVIAAdvertisement();



}


var Emailremainingval;

function setDashBoardEmailQuota() {



    var percentchartEmail = 0;
    var valUsedPercentage;


    Emailremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartEmail = setInterval(function () {

        percentchartEmail += 1;
        dataEmailDashBoard.setValue(0, 1, percentchartEmail);
        dataEmailDashBoard.setValue(1, 1, 100 - percentchartEmail);

        chartEmailDashboard.draw(dataEmailDashBoard, optionEmailDashBoard);
        if (percentchartEmail > valUsedPercentage) {
            clearInterval(handlerchartEmail);
            dataEmailDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', Emailremainingval],
            ]);
            chartEmailDashboard = new google.visualization
       .PieChart(document.getElementById('chartEmailDashboard'));
            chartEmailDashboard.draw(dataEmailDashBoard, optionEmailDashBoard);
        }


    }, 30);

  

   
   


}


var VIAAdvertismentAutoSlideTimer;
var currDirection;
var VIAAdvertisementOnlineStoreIndex = 0;
var AdvertismentTypeTag = 'NA';
function VIAAdvertismentAutoSlide() {
    var i = 0;
    var interval = parseInt(3000);
    var crsl = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');

    var maxIndenx = crsl.getMaxItemIndex();
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    VIAAdvertismentAutoSlideTimer = setInterval(function () {

        crsl.next();
        globalMediaFileName = ArrMediaFileName[crsl.getActiveIndex() + 1];
        //  console.log(globalMediaFileName);

        ////if (ArrCaptionTextVIAAdvertisement[crsl.getActiveIndex()] != 'NULL') {
        ////    //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
        ////    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
        ////    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
        ////    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:black;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[crsl.getActiveIndex()] + '</div>');

        ////} else {
        ////      Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
        ////    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
        ////}
        if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
            // crsl.previous();
            Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
        }
        //if (crsl.getActiveIndex() === 0) {
        //    crsl.next();
        //}

        Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + arrVIAAdvertisementeStoreIconPath[VIAAdvertisementOnlineStoreIndex] + '" width="38" height="38" alt="Company Name"></div>');
        Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + arrVIAAdvertisementeStoreName[VIAAdvertisementOnlineStoreIndex] + '</b></font></div></div>');

        VIAAdvertisementOnlineStoreIndex++;
        // console.log(VIAAdvertisementOnlineStoreIndex);
        if (VIAAdvertisementOnlineStoreIndex == VIAAdvertisementCount) {
            // console.log('stop');
            VIAAdvertisementOnlineStoreIndex = 0;
            // console.log('reset');
        }
        //  console.log(VIAAdvertisementOnlineStoreIndex);




    }, interval);
}


function VIAAdvertismentAutoSlideReset() {
    carouselDasboardVIAAdertisement.removeAll();
    clearInterval(VIAAdvertismentAutoSlideTimer);
    Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
}







var carouselDasboardVIAAdertisement;
var ArrCaptionTextVIAAdvertisement = [];
var globalDashboardVIAAdvertisement_EnterpriseAccNo;
var globalDashboardVIAAdvertisement_EnterpriseLogoPath;
var globalDashboardVIAAdvertisement_EnterpriseName;
var globalDashboardVIAAdvertisement_AdvertisementTitle;
function loadVIAAdvertisement() {
    AdvertismentTypeTag = 'VIAAdvertisement';
    globalFloatPanel_AyohaStore_ModuleTagging = 'VIAAdvertisement';

    //Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore').getProxy().setExtraParams({
    //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    //});
    //Ext.StoreMgr.get('AdvertisementloadMediaAdvertisementVIAStore').load();




    _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadMediaAdvertisementVIA');
    _DataStore_AdvertisementloadMediaAdvertisementVIAStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
     

        var count = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getCount();

        CountAdvertisementMedia = count - 1;
        var modelRecorded = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        var AdvertisementCode = modelRecorded.get('AdvertisementCode');
        var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
        var EnterpriseName = modelRecorded.get('EnterpriseName');
        var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
        //var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
        //var EnterpriseHQAccNo = modelRecorded.get('EnterpriseHQAccNo');

        //globalDashboardVIAAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
        globalDashboardVIAAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
        globalDashboardVIAAdvertisement_EnterpriseName = EnterpriseName;
        globalDashboardVIAAdvertisement_AdvertisementTitle = AdvertisementTitle;








        localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);
        //localStorage.setItem('EnterpriseHQAccNo', EnterpriseHQAccNo);

        Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
       

        carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
        ArrCaptionTextVIAAdvertisement.length = 0;
        ArrMediaFileName.length = 0;

        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(i);

            var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var MediaFileName = modelRecord.get('MediaFileName');





            ArrMediaFileName.push(MediaFileName);

            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
            //  xtype: 'pinchzoomimage',
            if (MediaType == "Image") {
                carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });

            }

            if (AdvertismentMediaNote) {
                ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
            } else {
                ArrCaptionTextVIAAdvertisement.push('NULL');
            }


            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }




        //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


        var modelRecords = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        // localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //  localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        // localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));
        ////globalVIAEnterpriseFacebookUrl=modelRecords.get('EnterpriseFacebook');
        ////globalVIAEnterpriseInstagramUrl = modelRecords.get('EnterpriseInstagram');
        ////globalVIAPICContactNo = modelRecords.get('PICContactNo');
        ////globalEnterpriseCoordinate = modelRecords.get('EnterpriseCoordinate');
        Ext.Viewport.setMasked(false);
        //////VIAAdvertismentAutoSlide();
        //////loadAdvertisementloadHotSeatStore();
        //////Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);

    });
    task.delay(1000);

}




var arrVIAAdvertisementeStoreName = [];
var arrVIAAdvertisementOnlineStoreUrl = [];
var arrVIAAdvertisementeStoreIconPath = [];
var VIAAdvertisementCount = 0;

function Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo) {

    arrVIAAdvertisementeStoreName.length = 0;
    arrVIAAdvertisementOnlineStoreUrl.length = 0;
    arrVIAAdvertisementeStoreIconPath.length = 0;



    _DataStore_EnterprisesContactUsLinkStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesContactUsLinkStore.getProxy().setUrl(GetAPIurl() + 'Enterprises/EnterprisesContactUsLink');
    _DataStore_EnterprisesContactUsLinkStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Store = _DataStore_EnterprisesContactUsLinkStore.getAt(0);
        VIAAdvertisementCount = _DataStore_EnterprisesContactUsLinkStore.getCount();
       // alert(VIAAdvertisementCount)
if(VIAAdvertisementCount<=0){

    return;
}

        globalVIAEnterpriseFacebookUrl = Store.get('EnterpriseFacebook');
        globalVIAEnterpriseInstagramUrl = Store.get('EnterpriseInstagram');
        globalVIAPICContactNo = Store.get('PICContactNo');
        globalEnterpriseCoordinate = Store.get('EnterpriseCoordinate');
        globalVIAEnterpriseWebsite = Store.get('EnterpriseWebsite');

        globalVIAMerchantLinkType = Store.get('MerchantLinkType');

        if (globalEnterpriseCoordinate !='NA') {
            Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(true);
        }
        if (globalVIAEnterpriseFacebookUrl != 'NA') {
            Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(true);
        }
        if (globalVIAEnterpriseInstagramUrl != 'NA') {
            Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(true);
        }
        if (globalVIAPICContactNo != 'NA') {
            Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(true);
        }


        //   Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + Store.get('eStoreIconPath') + '" width="38" height="38" alt="Company Name"></div>');
        //   Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + Store.get('eStoreName') + '</b></font></div></div>');


        //if (globalVIAMerchantLinkType.includes("eCommerce")) {
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + Store.get('eStoreIconPath') + '" width="38" height="38" alt="Company Name"></div>');
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + Store.get('eStoreName') + '</b></font></div></div>');

        //    //  margin:'0 0 0 5' ,
        //} else {
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="resources/icons/websiteIcon.png" width="38" height="38" alt="Company Name"></div>');
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<font class="blink_me" size=2 color=black><b>Visit Our Website</b></font>');

        //}



        for (i = 0; i < _DataStore_EnterprisesContactUsLinkStore.getCount() ; i++) {
            Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(i);



            arrVIAAdvertisementeStoreName.push(Stores.get('eStoreName'));
            arrVIAAdvertisementOnlineStoreUrl.push(Stores.get('OnlineStoreUrl'));
            arrVIAAdvertisementeStoreIconPath.push(Stores.get('eStoreIconPath'));

            //if (Stores.get('eStoreName')) {
            //    Ext.getCmp('containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_' + i).setHidden(false);
            //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon' + i).setHtml('<div class="blink_me"><img src="' + Stores.get('eStoreIconPath') + '" width="32" height="32" alt="Company Name" onclick="FloatPanel_PreviewAdvertisement_OpenOnlineStore' + i + '()"></div>');
            //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName' + i).setHtml('<div class="blink_me" style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + Stores.get('eStoreName') + '</div>');

            //} else {
            //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>No Online Store</b></font>');
            //}

        }


    });
    task.delay(1000);


    Ext.Viewport.setMasked(false);
}


var ArrAdvertisementCodeHotSeat = [];
var ArrAdvertisementHotseat_CompanyLogo = [];
var ArrAdvertisementHotseat_CompanyName = [];
var ArrAdvertisementHotseat_AdvertisementTitle = [];
var ArrAdvertisementHotseat_EnterpriseAccNo = [];
function loadAdvertisementloadHotSeatStore() {
    AdvertismentTypeTag = 'HotSeatAdvertisement';
    //Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
    //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    //});
    //Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();
    _DataStore_AdvertisementloadHotSeatStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadHotSeat');
    _DataStore_AdvertisementloadHotSeatStore.load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
        //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        //});
        //Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();



        // var myStore = Ext.getStore('AdvertisementloadHotSeatStore');

        var count = _DataStore_AdvertisementloadHotSeatStore.getCount();


        ArrAdvertisementCodeHotSeat.length = 0;

        ArrAdvertisementHotseat_CompanyLogo.length = 0;
        ArrAdvertisementHotseat_CompanyName.length = 0;
        ArrAdvertisementHotseat_AdvertisementTitle.length = 0;
        ArrAdvertisementHotseat_EnterpriseAccNo.length = 0;

        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AdvertisementloadHotSeatStore.getAt(i);

            var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
            var EnterpriseName = modelRecord.get('EnterpriseName');
            var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
            var AdvertisementCode = modelRecord.get('AdvertisementCode');
            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');

            ArrAdvertisementCodeHotSeat.push(AdvertisementCode);
            ArrAdvertisementHotseat_CompanyLogo.push(EnterpriseLogoPath);
            ArrAdvertisementHotseat_CompanyName.push(EnterpriseName);
            ArrAdvertisementHotseat_AdvertisementTitle.push(AdvertisementTitle);
            ArrAdvertisementHotseat_EnterpriseAccNo.push(EnterpriseAccNo);
            //ArrMediaFileName.push(MediaFileName);
            Ext.getCmp('btnDashboard_HotSeatAdvertisement_PicProfile' + i).setHtml('<img src="' + EnterpriseLogoPath + '" style="background-color:white;width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">');
            // Ext.getCmp('btnDashboard_HotSeatAdvertisement_UserNameProfile' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);border-radius:5px 5px 5px 5px">' + EnterpriseName + '</div><br>');
            Ext.getCmp('htmlDasboard_HotSeatAdvertisement_EnterpriseName' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">' + EnterpriseName + '</div>');
            Ext.getCmp('htmlDasboard_HotSeatAdvertisement_Title' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">' + AdvertisementTitle + ' </div>');

            Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');

            Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');



            ////  xtype: 'pinchzoomimage',
            //if (MediaType == "Image") {
            //    carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
            //    // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            //}
            //if (MediaType == "Video") {
            //    carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, margin: '7 0 0 0' });

            //}

            //if (AdvertismentMediaNote) {
            //    ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
            //} else {
            //    ArrCaptionTextVIAAdvertisement.push('NULL');
            //}


            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }




        //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


        //var modelRecords = myStore.getAt(0);
        //localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        //localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        //localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        //localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        //localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        //localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));


        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);

}











function openAdvertisement_fromOtherPage(index) {
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[index]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[index], ArrAdvertisementHotseat_CompanyName[index], ArrAdvertisementHotseat_AdvertisementTitle[index], ArrAdvertisementHotseat_EnterpriseAccNo[index]);

}
var globalDashboard_OpenAdvertisementNo;
function openAdvertisement0() {
    globalDashboard_OpenAdvertisementNo = 0;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[0]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[0], ArrAdvertisementHotseat_CompanyName[0], ArrAdvertisementHotseat_AdvertisementTitle[0], ArrAdvertisementHotseat_EnterpriseAccNo[0]);
}
function openAdvertisement1() {
    globalDashboard_OpenAdvertisementNo = 1;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[1]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[1], ArrAdvertisementHotseat_CompanyName[1], ArrAdvertisementHotseat_AdvertisementTitle[1], ArrAdvertisementHotseat_EnterpriseAccNo[1]);
}
function openAdvertisement2() {
    globalDashboard_OpenAdvertisementNo = 2;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[2]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[2], ArrAdvertisementHotseat_CompanyName[2], ArrAdvertisementHotseat_AdvertisementTitle[2], ArrAdvertisementHotseat_EnterpriseAccNo[2]);
}


function openAdvertisement3() {
    globalDashboard_OpenAdvertisementNo = 3;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[3]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[3], ArrAdvertisementHotseat_CompanyName[3], ArrAdvertisementHotseat_AdvertisementTitle[3], ArrAdvertisementHotseat_EnterpriseAccNo[3]);
}
function openAdvertisement4() {
    globalDashboard_OpenAdvertisementNo = 4;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[4]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[4], ArrAdvertisementHotseat_CompanyName[4], ArrAdvertisementHotseat_AdvertisementTitle[4], ArrAdvertisementHotseat_EnterpriseAccNo[4]);
}
function openAdvertisement5() {
    globalDashboard_OpenAdvertisementNo = 5;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[5]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[5], ArrAdvertisementHotseat_CompanyName[5], ArrAdvertisementHotseat_AdvertisementTitle[5], ArrAdvertisementHotseat_EnterpriseAccNo[5]);
}

function openAdvertisement6() {
    globalDashboard_OpenAdvertisementNo = 6;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[6]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[6], ArrAdvertisementHotseat_CompanyName[6], ArrAdvertisementHotseat_AdvertisementTitle[6], ArrAdvertisementHotseat_EnterpriseAccNo[6]);
}
function openAdvertisement7() {
    globalDashboard_OpenAdvertisementNo = 7;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[7]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[7], ArrAdvertisementHotseat_CompanyName[7], ArrAdvertisementHotseat_AdvertisementTitle[7], ArrAdvertisementHotseat_EnterpriseAccNo[7]);
}







//function openAdvertisement0() {
  
//    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[0]);
//    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement");
//}
//function openAdvertisement1() {

//    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[1]);
//    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement");
//}
//function openAdvertisement2() {

//    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[2]);
//    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement");
//}

function Ayoha_eWallet() {
    swalFireGeneralMsg('eWallet will be available in next  Version.!.Thank You for your support.');
}



var globalDashboard_LatestPointCampaignCode;
var globalDashboard_LatestStampCampaignCode;
var globalDashboard_LatestPointCampaignCode_SubscriberAccNo;
var globalDashboard_LatestStampCampaignCode_SubscriberAccNo;
var globalPNUnread;
var globalNewRedemption;
var globalNewOrderPaid;
var globalNewRequestForApproval;



var globalCountMembershipCard;
var globalCountMembershipCardPrivilege;
var globalCountPrivilgeOnMembershipCard;
//var globalCountQrCodeMembershipCampaign;
var globalCountPrintAndDisplayMembershipCard;
var globalCountAyohaSaleItem;
var globalDashboard_QRDescCheckBox="NA";
var globalDashboard_QRDescBtn;
function DashboardMerchantMainStore() {
   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
    globalNewOrderPaid=0;
    // $("#divCardBgImg_dashboard").fadeOut("slow", function () {
    //   // $("#divCardBgImg_dashboard").css("background-image", "url(https://setkita.com/AyohaImgCard/DashboardMerchantFakeBg/LogoOrangeSimplifed.png)");
    //   $("#divCardBgImg_dashboard").css("background-image", "url(  "+ GetEnterpriseLogoPath() + ")");
    //   $("#divCardBgImg_dashboard").css("background-repeat", "no-repeat");
    //     $("#divCardBgImg_dashboard").css("background-size", "15% 20%");
    //     $("#divCardBgImg_dashboard").css("background-position", "center");
    //     // $("#divCardBgImg_dashboard").css("border-radius", "50%");
    //     // $("#divCardBgImg_dashboard").css("border", "2px solid black");
    //     $("#divCardBgImg_dashboard").css("height", $(window).height() - 3);
    //     //  $("#divCardBgImg").css("width", "1"));
    //     $("#divCardBgImg_dashboard").fadeIn("slow");
    // });

   // GetEnterpriseLogoPath()


    Ext.getStore('DashboardMerchantMainStore').getProxy().setExtraParams({      
        EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    });
    Ext.StoreMgr.get('DashboardMerchantMainStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('DashboardMerchantMainStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });

        Ext.StoreMgr.get('DashboardMerchantMainStore').load();
        var myStore = Ext.getStore('DashboardMerchantMainStore');
      

        var modelRecorded = myStore.getAt(0);
        // var ThisWeekCountsStamp = modelRecorded.get('ThisWeekCountsStamp');
        // var ThisWeekCountsPoint = modelRecorded.get('ThisWeekCountsPoint');
        var ThisWeekCountsStamp = 0;
        var ThisWeekCountsPoint = 0;
        var TotalCountStamp = modelRecorded.get('TotalCountStamp');
        var TotalCountPoint = modelRecorded.get('TotalCountPoint');
        var TotalMembershipCard = modelRecorded.get('TotalMembershipCard');
        var AyohaPoint = modelRecorded.get('AyohaPoint');
        var TotalMembers = modelRecorded.get('TotalMembers');
        var LatestPointCampaignCode = modelRecorded.get('LatestPointCampaignCode');
        var LatestStampCampaignCode = modelRecorded.get('LatestStampCampaignCode');

        var LatestPointCampaignCode_SubscriberAccNo = modelRecorded.get('LatestPointCampaignCode_SubscriberAccNo');
        var LatestStampCampaignCode_SubscriberAccNo = modelRecorded.get('LatestStampCampaignCode_SubscriberAccNo');

       
        var LatestcountsPoint = modelRecorded.get('LatestcountsPoint');
        var LatestPointedByDate = modelRecorded.get('LatestPointedByDate');

        var LatestStamp = modelRecorded.get('LatestStamp');
        var LatestStampedByDate = modelRecorded.get('LatestStampedByDate');

        var LatestStampedMemberName = modelRecorded.get('LatestStampedMemberName');
        var LatestPointMemberName = modelRecorded.get('LatestPointMemberName');
        var NewRedemption = modelRecorded.get('NewRedemption');






        var CountLoyaltyStamp = modelRecorded.get('CountLoyaltyStamp');
        var CountLoyaltyPoint = modelRecorded.get('CountLoyaltyPoint');

        var CountMembershipDiscountUsed = modelRecorded.get('CountMembershipDiscountUsed');
        var CountContestant = modelRecorded.get('CountContestant');

        var CountVoucherUsed = modelRecorded.get('CountVoucherUsed');
        var CountEventRespond = modelRecorded.get('CountEventRespond');
       
        var CountVoucherUsedDate = modelRecorded.get('CountVoucherUsedDate');
        var CountContestantDate = modelRecorded.get('CountContestantDate');

        var CountMembershipDiscountUsedDate = modelRecorded.get('CountMembershipDiscountUsedDate');
        var CountLoyaltyPointDate = modelRecorded.get('CountLoyaltyPointDate');

        var CountLoyaltyStampDate = modelRecorded.get('CountLoyaltyStampDate');
        var CountEventRespondDate = modelRecorded.get('CountEventRespondDate');
        globalNewOrderPaid=parseInt(modelRecorded.get('NewPaidOrder'));
        var MembershipCardCount =parseInt(modelRecorded.get('MembershipCardCount'));
         globalNewRequestForApproval =parseInt(modelRecorded.get('NewRequestForApproval'));

         globalCountMembershipCard =parseInt(modelRecorded.get('CountMembershipCard'));
         globalCountMembershipCardPrivilege =parseInt(modelRecorded.get('CountMembershipCardPrivilege'));
         globalCountPrivilgeOnMembershipCard =parseInt(modelRecorded.get('CountPrivilgeOnMembershipCard'));
      //   globalCountQrCodeMembershipCampaign =parseInt(modelRecorded.get('CountQrCodeMembershipCampaign'));
         globalCountAyohaSaleItem =parseInt(modelRecorded.get('CountAyohaSaleItem'));
         globalDashboard_QRDescCheckBox=modelRecorded.get('QRDescCheckBox');
         globalDashboard_QRDescBtn=modelRecorded.get('QRDescBtn');

// alert("globalCountMembershipCard:"+globalCountMembershipCard)
// alert("globalCountMembershipCardPrivilege:"+globalCountMembershipCardPrivilege)
// alert("globalCountPrivilgeOnMembershipCard:"+globalCountPrivilgeOnMembershipCard)
// alert("globalCountQrCodeMembershipCampaign:"+globalCountQrCodeMembershipCampaign)
// alert("globalCountAyohaSaleItem:"+globalCountAyohaSaleItem)
if(globalDashboard_QRDescCheckBox=="alreadyPrint"){
    globalCountPrintAndDisplayMembershipCard=1;    
    Ext.getCmp('btnMyAccount_DashboardTopSetting').setHidden(false);
    globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox="alreadyPrint";
    if(globalCountAyohaSaleItem>0){
        Ext.getCmp('btnMyAccount_DashboardTopSetting').setHidden(true);
    }
    
}
else{
    globalCountPrintAndDisplayMembershipCard=0;
    globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox="notPrint";
}
// alert(globalCountPrintAndDisplayMembershipCard)

if (MembershipCardCount) {
    MembershipCardCount = MembershipCardCount;
} else {
    MembershipCardCount = "0";
}

        globalPNUnread = modelRecorded.get('PNUnread');
        globalNewRedemption = modelRecorded.get('NewRedemption');
        if (LatestStampedMemberName) {
            LatestStampedMemberName = LatestStampedMemberName
        } else {
            LatestStampedMemberName="-"
        }

        if (LatestPointMemberName) {
            LatestPointMemberName = LatestPointMemberName
        } else {
            LatestPointMemberName = "-"
        }

        if (LatestcountsPoint) {
            LatestcountsPoint = LatestcountsPoint;
        } else {
            LatestcountsPoint = "0";
        }

        if (LatestStamp) {
            LatestStamp = LatestStamp;
        } else {
            LatestStamp = "0/0";
        }


        if (ThisWeekCountsStamp) {
            ThisWeekCountsStamp = ThisWeekCountsStamp;
        } else {
            ThisWeekCountsStamp = "0";
        }
        if (ThisWeekCountsPoint) {
            ThisWeekCountsPoint = ThisWeekCountsPoint;
        } else {
            ThisWeekCountsPoint = "0";
        }

        if (TotalCountStamp) {
            TotalCountStamp = TotalCountStamp;
        } else {
            TotalCountStamp = "0";
        }


        if (TotalCountPoint) {
            TotalCountPoint = TotalCountPoint;
        } else {
            TotalCountPoint = "0";
        }
        if (TotalMembershipCard) {
            TotalMembershipCard = TotalMembershipCard;
        } else {
            TotalMembershipCard = "0";
        }
        if (AyohaPoint) {
            AyohaPoint = AyohaPoint;
        } else {
            AyohaPoint = "0";
        }
        if (TotalMembers) {
            TotalMembers = TotalMembers;
        } else {
            TotalMembers = "0";
        }


        if (LatestPointCampaignCode) {
            LatestPointCampaignCode = LatestPointCampaignCode;
        } else {
            LatestPointCampaignCode = "NA";
        }


        if (LatestStampCampaignCode) {
            LatestStampCampaignCode = LatestStampCampaignCode;
        } else {
            LatestStampCampaignCode = "NA";
        }


        if (LatestPointCampaignCode_SubscriberAccNo) {
            LatestPointCampaignCode_SubscriberAccNo = LatestPointCampaignCode_SubscriberAccNo;
        } else {
            LatestPointCampaignCode_SubscriberAccNo = "NA";
        }


        if (LatestStampCampaignCode_SubscriberAccNo) {
            LatestStampCampaignCode_SubscriberAccNo = LatestStampCampaignCode_SubscriberAccNo;
        } else {
            LatestStampCampaignCode_SubscriberAccNo = "NA";
        }



        if (LatestPointedByDate) {
            LatestPointedByDate = LatestPointedByDate
        } else {
            LatestPointedByDate="-"
        }


        if (LatestStampedByDate) {
            LatestStampedByDate = LatestStampedByDate
        } else {
            LatestStampedByDate = "-"
        }


       
       
        globalDashboard_LatestPointCampaignCode = LatestPointCampaignCode;
        globalDashboard_LatestStampCampaignCode = LatestStampCampaignCode;
        globalDashboard_LatestPointCampaignCode_SubscriberAccNo = LatestPointCampaignCode_SubscriberAccNo;
        globalDashboard_LatestStampCampaignCode_SubscriberAccNo = LatestStampCampaignCode_SubscriberAccNo;
        //Ext.getCmp('htmlAyohaRewardStampCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + LatestStamp + '</div>');
        //Ext.getCmp('htmlAyohaRewardPointCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + LatestcountsPoint + '</div>');


        Ext.getCmp('htmlAyohaRewardStamped_StampedEarn').setHtml('<div style="color:black;text-align: center;font-size:36px;width:100%;font-weight:bold">' + LatestStamp + '</div>');
        Ext.getCmp('htmlAyohaRewardPoint_PointEarn').setHtml('<div style="color:black;text-align: center;font-size:36px;width:100%;font-weight:bold">' + LatestcountsPoint + '</div>');




        //Ext.getCmp('htmlAyohaRewardStampCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Last Activity On:'+ LatestStampedByDate+'</div>');
        //Ext.getCmp('htmlAyohaRewardPointCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Last Activity On:'+LatestPointedByDate +'</div>');


        Ext.getCmp('htmlAyohaRewardStamped_Date').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestStampedByDate + '</div>');
        Ext.getCmp('htmlAyohaRewardPoint_Date').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestPointedByDate + '</div>');


        Ext.getCmp('htmlAyohaRewardStamped_MemberName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestStampedMemberName + '</div>');
        Ext.getCmp('htmlAyohaRewardPoint_MemberName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestPointMemberName + '</div>');







       // Ext.getCmp('htmlAyohaRewardThisWeekStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+ThisWeekCountsStamp+'</div>');
      //  Ext.getCmp('htmlAyohaRewardThisWeekPoint').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPoint + '</div>');


      
      //  Ext.getCmp('htmlAyohaRewardTotalMembers').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + TotalMembers + '</div>');
      
      
        Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div onclick="FloatPanel_SubscriberListShow()" class="example-1" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="margin:50px 0px 0px 0px"><img src="resources/icons/MembershipsMembersWhite.png" width="80" height="80" alt="Company Name"></div><br><div style="color:white;text-align: center;font-size:48px;width:100%;margin:-50px 0px 0px 0px;"><b>' + TotalMembers + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Total Unique Members</b></div></div>');



       //Ext.getCmp('htmlAyohaRewardTotalMembershipCard').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + TotalMembershipCard + '</div>');
        
      
        if (globalPNUnread) {
            globalPNUnread = globalPNUnread;
        } else {
            globalPNUnread = '0';
        }

if(NewRedemption){
    NewRedemption = NewRedemption;
}else
{
    NewRedemption = '0';
}



Ext.getCmp('htmlDashboard_LatestRedemptionLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Latest Redemptions ('+NewRedemption+')</b></div>');

Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setMargin('14 0 0 0');
Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setHtml('<img src="resources/icons/order-removebg-preview.png"  style="width:25px;height:25px;margin:-10px 0px 0px 0px;zIndex:-100px;"/>'); 

if(globalNewOrderPaid>0){
    Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setMargin('-6px 0px 0px 0px');
    Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setHtml('<img src="resources/icons/order-removebg-preview.png"  style="width:25px;height:25px;margin:-10px 0px 0px 0px;zIndex:-100px;"/><div style="margin:-40px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;">' + globalNewOrderPaid + '</div>');
}

sessionStorage.setItem("globalNewOrderPaid",globalNewOrderPaid.toString());

// if(globalNewOrderPaid==0){
   
// }


Ext.getCmp('htmlLabel_MembershipCard').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Cards ('+MembershipCardCount+')</b></div>');



        if (globalPNUnread != "0") {
     
       // Ext.getCmp('btnMyAccount_DashboardTopNotification').setWidth(38);
       // Ext.getCmp('btnMyAccount_DashboardTopNotification').setZIndex(-10);
       Ext.getCmp('btnMyAccount_DashboardTopNotification').setMargin('-6px 0px 0px 0px');
        Ext.getCmp('btnMyAccount_DashboardTopNotification').setHtml('<img src="resources/icons/NotificationPurple.png"  style="width:25px;height:25px;margin:-10px 0px 0px 0px;zIndex:-100px;"/><div style="margin:-40px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;">' + globalPNUnread + '</div>');
        //html: '<div ><img src="resources/icons/Notification.png" width="25" height="25" alt="Company Name"></div>',
      
    
    }
    

if (CountLoyaltyStamp){
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountLoyaltyStamp+'</div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountLoyaltyStampDate+'</div>');
}else
{
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
}


if (CountLoyaltyPoint){
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountLoyaltyPointDate+'</div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountLoyaltyPoint+'</div>');
}else
{    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
}

if (CountMembershipDiscountUsed){
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountMembershipDiscountUsedDate+'</div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountMembershipDiscountUsed+'</div>');
}else
{    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
}

if (CountContestant){
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountContestantDate+'</div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountContestant+'</div>');
}else
{ Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
}

if (CountVoucherUsed){
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountVoucherUsedDate+'</div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountVoucherUsed+'</div>');
}else
{ Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
}

if (CountEventRespond){
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountEventRespondDate+'</div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountEventRespond+'</div>');
}else
{    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
}

//Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerIDs_dashboard').setZIndex(1);
Dashboard_MembershipCardManagement_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore();
        Ext.Viewport.setMasked(false);

//temporary ioff 15/02/2024
       /// loadDashboard_MessagingTool();
      //  Dashboard_top6Membership();
       // Dashboard_LoadBirthDay();
    });
    task.delay(1000);










}
var globalDashboardMembershipCardCode;
function Dashboard_MembershipCardManagement_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore() {


    
   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
 
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
       

        Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore').load();
 
      
        
        _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore');
       
        var modelRecord = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore').getAt(0);
      var ct =parseInt(Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore').getCount());
      //alert(ct)
      if(ct>0){
        globalDashboardMembershipCardCode=modelRecord.get('MembershipCardCode');
       
       
      }
      Dashboardchart_MembershipStatusBarChartCount();
      
  //  var RowNumber = modelRecord.get('RowNumber');
       //  Ext.getCmp('htmlLabel_MembershipCard').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Cards ('+RowNumber+')</b></div>');
       
     Ext.Viewport.setMasked(false);






        



    });
    task.delay(1000);




}

function Dashboard_LoadBirthDay(){
  
    _DataStore_MembershipsLoadByBirthDayStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipsLoadByBirthDayStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadByBirthDay');
    _DataStore_MembershipsLoadByBirthDayStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_MembershipsLoadByBirthDayStore.getCount());

      //alert(count)
      Ext.getCmp('tableDashboard_BirthDay').setStore(_DataStore_MembershipsLoadByBirthDayStore);
    // var modelRecord = _DataStore_MembershipsLoadByBirthDayStore.getAt(0);
    Ext.getCmp('htmlDashboard_MemberBirthdayLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Member Birthday</b></div>');
    var FilterBY;
    if(count>0){
        var Store = _DataStore_MembershipsLoadByBirthDayStore.getAt(0);

        FilterBY=Store.get('FilterBY');
         
    if(count==1){ 
        
    //alert(FilterBY);
   // htmlDashboard_MemberBirthdayLbl
        Ext.getCmp('htmlDashboard_MemberBirthdayLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Member Birthday '+FilterBY+'-('+count+')</b></div>');
    }
    if(count>1){ 
        
    
        Ext.getCmp('htmlDashboard_MemberBirthdayLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Members Birthday '+FilterBY+'-('+count+')</b></div>');
    }
    
   
    }
 
          
           
            Dashboard_LoadMembershipsLatestActivity();
    });
    task.delay(500);

}


function Dashboard_LoadMembershipsLatestActivity(){
  
  // alert(GetEnterpriseAccNo())
   _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', GetEnterpriseAccNo());
   _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsTopFiveLatestActivityLoadByEnterpriseAccNo');
   _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.getCount());
        Ext.getCmp('DashboardList_LatestActivity').setStore(_DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore);
        Ext.getCmp('htmlDashboard_LatestActivityLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Recent Activity ('+count+')</b></div>');
        Dashboardchart_MembershipGrowthChartCount();
       
         

    });
    task.delay(500);

}







function Dashboard_LoyaltyCampaignSummary_LatestStamps() {




    if (globalDashboard_LatestStampCampaignCode == "NA") {
        swalFireInfo("No Stamp Activity!.");
        return;
    }



    console.log(globalDashboard_LatestStampCampaignCode_SubscriberAccNo)
    console.log(globalDashboard_LatestStampCampaignCode)

    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getProxy().setExtraParam('SubscriberAccNo', globalDashboard_LatestStampCampaignCode_SubscriberAccNo);
    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getProxy().setExtraParam('StampCampaignCode', globalDashboard_LatestStampCampaignCode);
    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getProxy().setUrl(GetAPIurl() + '/StampCampaign/StampCampaignDashboardAyohaUserLatestStamp');

    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
       
        var count = _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getCount();



        var modelRecord = _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getAt(0);


     

        if (count > 0) {

            var StampCampaignCode = modelRecord.get('StampCampaignCode');
            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
            var StartDateOnly = modelRecord.get('StartDateOnly');
            var EndDateOnly = modelRecord.get('EndDateOnly');
            var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
            var isStampRulePopUp = modelRecord.get('isStampRulePopUp');
            var StampCampaignName = modelRecord.get('StampCampaignName');
            var EnterpriseName = modelRecord.get('EnterpriseName');
            var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
            var CountStampStr = modelRecord.get('CountStampStr').split("/");
            var YESStamped = CountStampStr[0];
            var TotalRows = CountStampStr[1];

            localStorage.setItem('StampCampaignCode', StampCampaignCode);
            localStorage.setItem('CountLoyaltyStamped', YESStamped);
            localStorage.setItem('CountStampCardRowShow', TotalRows);
            //alert(StampRuleRemarks); alert(isStampRulePopUp);

            FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDateOnly, EndDateOnly, globalDashboard_LatestStampCampaignCode_SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterpriseLogo);

        } else {

            swalFireStampInfo("Dear User,Hurry up go to (" + globalEnterpriseNameStampCard + ") get stamped and redeem the reward!.");
        }




        
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);














    //Ext.getStore('StampCampaignDashboardAyohaUserLatestStampStore').getProxy().setExtraParams({

    //    SubscriberAccNo: globalDashboard_LatestStampCampaignCode_SubscriberAccNo,
    //    StampCampaignCode: globalDashboard_LatestStampCampaignCode,
    //});
    //Ext.StoreMgr.get('StampCampaignDashboardAyohaUserLatestStampStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('StampCampaignDashboardAyohaUserLatestStampStore').getProxy().setExtraParams({

    //        SubscriberAccNo: globalDashboard_LatestStampCampaignCode_SubscriberAccNo,
    //        StampCampaignCode: globalDashboard_LatestStampCampaignCode,
    //    });
    //    Ext.StoreMgr.get('StampCampaignDashboardAyohaUserLatestStampStore').load();
    //    var myStore = Ext.getStore('StampCampaignDashboardAyohaUserLatestStampStore');
    //    var modelRecord = myStore.getAt(0);


    //    var count = myStore.getCount();

    //    if (count > 0) {

    //        var StampCampaignCode = modelRecord.get('StampCampaignCode');
    //        var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
    //        var StartDateOnly = modelRecord.get('StartDateOnly');
    //        var EndDateOnly = modelRecord.get('EndDateOnly');
    //        var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
    //        var isStampRulePopUp = modelRecord.get('isStampRulePopUp');
    //        var StampCampaignName = modelRecord.get('StampCampaignName');
    //        var EnterpriseName = modelRecord.get('EnterpriseName');
    //        var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
    //        var CountStampStr = modelRecord.get('CountStampStr').split("/");
    //        var YESStamped = CountStampStr[0];
    //        var TotalRows = CountStampStr[1];

    //        localStorage.setItem('StampCampaignCode', StampCampaignCode);
    //        localStorage.setItem('CountLoyaltyStamped', YESStamped);
    //        localStorage.setItem('CountStampCardRowShow', TotalRows);
    //        //alert(StampRuleRemarks); alert(isStampRulePopUp);

    //        FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDateOnly, EndDateOnly, GetCurrAyohaUserAccountNo(), EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterpriseLogo);

    //    } else {

    //        swalFireStampInfo("Dear User,Hurry up go to (" + globalEnterpriseNameStampCard + ") get stamped and redeem the reward!.");
    //    }


    //    Ext.Viewport.setMasked(false);

    //});
    //task.delay(500);











    // Dashboard_MembershipActivityStampShow();
}




function Dashboard_LoyaltyCampaignSummary_LatestPoint() {


    if (globalDashboard_LatestPointCampaignCode == "NA") {
        swalFireInfo("No Point Activity!.");
        return;
    }

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "PointCampaignCode": globalDashboard_LatestPointCampaignCode,
            "SubscriberAccNo": globalDashboard_LatestPointCampaignCode_SubscriberAccNo
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/PointCampaign/PointCampaignMerchantDashboardLoadByPointCampaignCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        PointCampaignName = data.results[0].PointCampaignName;
                        PointCampaignCode = data.results[0].PointCampaignCode;
                        EnterpriseLogo = data.results[0].EnterpriseLogo;
                        EnterpriseName = data.results[0].EnterpriseName;
                        EnterpriseAccNo = data.results[0].EnterpriseAccNo;
                        EndDate = data.results[0].EndDate;
                        StrEndDate = data.results[0].StrEndDate;
                        PointisCampaignExpired = data.results[0].PointisCampaignExpired;


                        UserAccountName = data.results[0].UserAccountName;
                        UserAccountPhoto = data.results[0].UserAccountPhoto;
                        UserMobilePhone = data.results[0].UserMobilePhone;
                        UserPlayerID = data.results[0].UserPlayerID;

             

                     
                        FloatLoyaltyCardPointShow(PointCampaignName, PointCampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, StrEndDate, PointisCampaignExpired, UserAccountName, UserAccountPhoto);
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    task.delay(500);

















}


function loadDashboard_MessagingTool() {



    _DataStore_AyohaNotificationMasterPNDashboardStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaNotificationMasterPNDashboardStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterPNDashboard');
    _DataStore_AyohaNotificationMasterPNDashboardStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaNotificationMasterPNDashboardStore.getCount();

      
            
            var modelRecord = _DataStore_AyohaNotificationMasterPNDashboardStore.getAt(0);
            TotalUsed = modelRecord.get('TotalUsed');
            var Quota = modelRecord.get('Quota');
            var Balance = modelRecord.get('Balance');
            localStorage.setItem('PushNotificationBalance', Balance);
            localStorage.setItem('PushNotificationQuota', Quota);
            localStorage.setItem('PushNotificationTotalUsed', TotalUsed);
           
           // commented on 15/2/2024
            //setDashBoardPushNotificationsQuota();
        
        // setDashBoardSMSQuota();
        // setDashBoardWhatAppQuota();
        // setDashBoardEmailQuota();


        // Gnerate_VisitorAnalsysChart();
        // Dashboard_AyohaMerchantReview_Dashboard_AyohaMerchantReview_CalculateRating();

// commented on 9/2/2024
      //  VIAAdvertismentAutoSlide();
       // loadAdvertisementloadHotSeatStore();
       // Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(GetEnterpriseAccNo());
       // loadVIAAdvertisement();

    });
    task.delay(1000);





    //Ext.getStore('AyohaNotificationMasterPNDashboardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: GetEnterpriseAccNo(),

    //});
    //Ext.StoreMgr.get('AyohaNotificationMasterPNDashboardStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('AyohaNotificationMasterPNDashboardStore').getProxy().setExtraParams({
    //        EnterpriseAccNo: GetEnterpriseAccNo(),
    //    });
    //    Ext.StoreMgr.get('AyohaNotificationMasterPNDashboardStore').load();
    //    var myStore = Ext.getStore('AyohaNotificationMasterPNDashboardStore');
    //    var modelRecord = myStore.getAt(0);
    //    TotalUsed = modelRecord.get('TotalUsed');
    //    var Quota = modelRecord.get('Quota');
    //    var Balance = modelRecord.get('Balance');
    //    localStorage.setItem('PushNotificationBalance', Balance);
    //    localStorage.setItem('PushNotificationQuota', Quota);
    //    localStorage.setItem('PushNotificationTotalUsed', TotalUsed);







      
        
    //    Ext.Viewport.setMasked(false);



    //});
    //task.delay(1000);

}



function Generate_MembershipCardVisitChart() {

    google.load("visualization", "1", { packages: ["corechart"] });
    google.setOnLoadCallback(drawMembershipCardVisitChart);
    function drawMembershipCardVisitChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Membership Card Visitor','Ayoha Store Visitor','Advertisement Visitor'],
          ['Jan', 6,12,16],
          ['Feb', 50,22,11],
          ['Mac', 80,33,45],
          ['Apr', 100,44,67],
          ['May', 55,11,87],
          ['Jun', 30,62,41],
          ['Jul', 80,71,90],
          ['Aug', 250,29,83],
          ['Sep', 280,63,103],
          ['Oct', 300,37,93],
          ['Nov', 0,0,0],
          ['Dec', 0,0,0]
        ]);

        var options = {
            title: '',
            hAxis: { title: '', titleTextStyle: { color: 'black' } },
            vAxis: { minValue: 0 },
            legend: { position: 'none' },
           // legend: { position: 'top', alignment: 'center' },
            width: 510,
            backgroundColor: 'transparent',
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys'));
        chart.draw(data, options);
    }

    $(window).resize(function () {
        // drawChart1();
        drawMembershipCardVisitChart();
    });

}



function Gnerate_VisitorAnalsysChart_Original() {



  

    Dashboard_AnalsysVisitor_VisitorType.length=0;
    Dashboard_AnalsysVisitor_VisitorType.length = 0;
    Dashboard_AnalsysVisitor_VisitorType.length = 0;


    Ext.getCmp('container_DashboardAnalsys_MembershipVisitor_ID').setStyle("background-color:orange");
    Ext.getCmp('html_DashboardAnalsys_MembershipVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:black;text-align:center;">Membership Card-MC</div>');


    Ext.getCmp('container_DashboardAnalsys_AyohaStoreVisitor_ID').setStyle("background-color:brown");
    Ext.getCmp('html_DashboardAnalsys_AyohaStoreVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:black;text-align:center;">Ayoha Store-AS</div>');


    Ext.getCmp('container_DashboardAnalsys_AdvertisementVisitor_ID').setStyle("background-color:blue");
    Ext.getCmp('html_DashboardAnalsys_AdvertisementVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:black;text-align:center;">Advertisement-AD</div>');

    //Dashboard_AnalsysVisitor_VisitorType.push('Advertisement');
    //Dashboard_AnalsysVisitor_VisitorType.push('AyohaStore');
    //Dashboard_AnalsysVisitor_VisitorType.push('MembershipCard');

    Dashboard_AnalsysVisitor_VisitorType.push('AD');
    Dashboard_AnalsysVisitor_VisitorType.push('AS');
    Dashboard_AnalsysVisitor_VisitorType.push('MC');

    Ext.getCmp('htmlDashboard_VisitorAnalsysYearTxt').setHtml('<div style="width:100%;font-size:12px;color:black;text-align:center;font-weight:bold">Year:' + document.getElementById('Dashboard_visitorAnalsysYear').value + '</div>');

   


    var objn = {
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "Year": document.getElementById('Dashboard_visitorAnalsysYear').value,
    };




    var task = Ext.create('Ext.util.DelayedTask', function () {

  

    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/VisitorAnalsys/VisitorAnalsysLoadByEnterpriseAccNo',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        
        success: function (result, request) {

          

            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                //var newData = JSON.parse(JSON.stringify(result.results.Email))
                //console.log(result.results.Email);
                //  //data.results[0];
             
                if (data.total > 0) {

                    google.load("visualization", "1", { packages: ["corechart"] });
                    google.setOnLoadCallback(Dashboard_GenerateVisitorAnalysysChart);
                   

                    function Dashboard_GenerateVisitorAnalysysChart() {

                        var VisitorAnalsys = new google.visualization.DataTable();
                        VisitorAnalsys.addColumn('string', 'Month');
                        VisitorAnalsys.addColumn('number', 'Advertisement');
                        VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });

                        VisitorAnalsys.addColumn('number', 'AyohaStore');
                        VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });


                        VisitorAnalsys.addColumn('number', 'MembershipCard');
                        VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });





                        for (var i = 0; i < data.total; i++) {
                            Month = ConvertShortMonth(data.results[i].Month);
                            Advertisement = parseInt(data.results[i].Advertisement);
                            AyohaStore = parseInt(data.results[i].AyohaStore);
                            MembershipCard = parseInt(data.results[i].MembershipCard);
                            VisitorAnalsys.addRow([Month, Advertisement, data.results[i].Advertisement + " Visit", AyohaStore, data.results[i].AyohaStore + " Visit", MembershipCard, data.results[i].MembershipCard + " Visit"]);
                        }




                        var options = {
                            title: '',
                            hAxis: { title: '', titleTextStyle: { color: 'black' } },
                            // vAxis: { minValue: 0 },
                            vAxis: { minValue: 0, format: '0' },
                            legend: { position: 'none' },
                            // legend: { position: 'top', alignment: 'center' },
                            width: 510,
                            backgroundColor: 'transparent',
                            tooltip: {
                                isHtml: false,
                                trigger: 'both'
                            },
                        };







                        var chart = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys'));


                        function selectHandler() {
                            var selection = chart.getSelection();
                            var message = '';
                            for (var i = 0; i < selection.length; i++) {
                                var item = selection[i];
                                if (item.row != null && item.column != null) {
                                    var str = VisitorAnalsys.getFormattedValue(item.row, item.column);
                                    var category = VisitorAnalsys
                                    .getValue(chart.getSelection()[0].row, 0)
                                    var type
                                    if (item.column == 2) {
                                        type = "Advertisement";
                                    } if (item.column == 4) {
                                        type = "AyohaStore";
                                    }
                                    if (item.column == 6) {
                                        type = "MembershipCard";
                                    }



                                    message += '{row:' + item.row + ',column:' + item.column
                                    + '} = ' + str + '  The Month is:' + category
                                    + ' it belongs to : ' + type + '\n';

                                  FloatPanel_VisitorAnalsysListShow(type, GetCurrentYear(), category, str);


                                    
                                }


                                //else if (item.row != null) {
                                //    var str = VisitorAnalsys.getFormattedValue(item.row, 0);
                                //    message += '{row:' + item.row
                                //    + ', column:none}; value (col 0) = ' + str
                                //    + '  The Category is:' + category + '\n';
                                //} else if (item.column != null) {
                                //    var str = VisitorAnalsys.getFormattedValue(0, item.column);
                                //    message += '{row:none, column:' + item.column
                                //    + '}; value (row 0) = ' + str
                                //    + '  The Category is:' + category + '\n';
                                //}
                            }
                            if (message == '') {
                                message = 'nothing';
                            }
                            //alert('You selected ' + message);

                        }

                        google.visualization.events.addListener(chart, 'select', selectHandler);


                        chart.draw(VisitorAnalsys, options);


                       


                    }

                    $(window).resize(function () {
                        // drawChart1();
                        Dashboard_GenerateVisitorAnalysysChart();
                    });






                
                    Ext.Viewport.unmask();
                }
                if (data.total == 0) {

                    return;
                    google.load("visualization", "1", { packages: ["corechart"] });
                    google.setOnLoadCallback(Dashboard_GenerateVisitorAnalysysChart);

                    function Dashboard_GenerateVisitorAnalysysChart() {

                        var VisitorAnalsys = new google.visualization.DataTable();
                        VisitorAnalsys.addColumn('string', 'Month');
                        VisitorAnalsys.addColumn('number', 'Advertisement Visitor');
                        VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });

                        VisitorAnalsys.addColumn('number', 'Ayoha Store Visitor');
                        VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });


                        VisitorAnalsys.addColumn('number', 'Membership Card Visitor');
                        VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });





                        for (var i = 0; i < data.total; i++) {
                            Month = ConvertShortMonth(data.results[i].Month);
                            Advertisement = parseInt(data.results[i].Advertisement);
                            AyohaStore = parseInt(data.results[i].AyohaStore);
                            MembershipCard = parseInt(data.results[i].MembershipCard);
                            VisitorAnalsys.addRow([Month, Advertisement, data.results[i].Advertisement + " Visit", AyohaStore, data.results[i].AyohaStore + " Visit", MembershipCard, data.results[i].MembershipCard + " Visit"]);
                        }




                        var options = {
                            title: '',
                            hAxis: { title: '', titleTextStyle: { color: 'black' } },
                            // vAxis: { minValue: 0 },
                            vAxis: { minValue: 0, format: '0' },
                            legend: { position: 'none' },
                            // legend: { position: 'top', alignment: 'center' },
                            width: 510,
                            backgroundColor: 'transparent',
                            tooltip: {
                                isHtml: false,
                                trigger: 'both'
                            },
                        };







                        var chart = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys'));


                        function selectHandler() {
                            var selection = chart.getSelection();
                            var message = '';
                            for (var i = 0; i < selection.length; i++) {
                                var item = selection[i];
                                if (item.row != null && item.column != null) {
                                    var str = VisitorAnalsys.getFormattedValue(item.row, item.column);
                                    var category = VisitorAnalsys
                                    .getValue(chart.getSelection()[0].row, 0)
                                    var type
                                    if (item.column == 2) {
                                        type = "Advertisement";
                                    } if (item.column == 4) {
                                        type = "AyohaStore";
                                    }
                                    if (item.column == 6) {
                                        type = "MembershipCard";
                                    }



                                    message += '{row:' + item.row + ',column:' + item.column
                                    + '} = ' + str + '  The Month is:' + category
                                    + ' it belongs to : ' + type + '\n';

                                    FloatPanel_VisitorAnalsysListShow(type, GetCurrentYear(), category, str);
                                }


                                //else if (item.row != null) {
                                //    var str = VisitorAnalsys.getFormattedValue(item.row, 0);
                                //    message += '{row:' + item.row
                                //    + ', column:none}; value (col 0) = ' + str
                                //    + '  The Category is:' + category + '\n';
                                //} else if (item.column != null) {
                                //    var str = VisitorAnalsys.getFormattedValue(0, item.column);
                                //    message += '{row:none, column:' + item.column
                                //    + '}; value (row 0) = ' + str
                                //    + '  The Category is:' + category + '\n';
                                //}
                            }
                            if (message == '') {
                                message = 'nothing';
                            }
                            //alert('You selected ' + message);

                        }

                        google.visualization.events.addListener(chart, 'select', selectHandler);


                        chart.draw(VisitorAnalsys, options);




                    }



                    $(window).resize(function () {
                        // drawChart1();
                        Dashboard_GenerateVisitorAnalysysChart();
                    });


                    Ext.Viewport.unmask();

                }





            }
            else {

                alert('error');
                Ext.Viewport.unmask();
            }


        },

        failure: function (result, request) {
            alert('failure');
            Ext.Viewport.unmask();
        }

    });


    });

    task.delay(1000);



}
function setDashBoardMerchantReviewRate() {


    // google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {

        console.log(FiveStar);



        var data = google.visualization.arrayToDataTable([
        ["Rate", "Count", { role: "style" }],
        ["5", FiveStar, "orange"],
        ["4", FourStar, "orange"],
        ["3", ThreeStar, "orange"],
        ["2", TwoStar, "color: orange"],
         ["1", OneStar, "color: orange"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         {
                             calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation"
                         },
                         2]);

        var options = {
            title: "",
            width: 320,
            height: 185,
            bar: { groupWidth: "80%" },
            //animation: {
            //    startup: true,
            //    duration: 2500,
            //    easing: 'out'
            //},
            vAxis: { minValue: 0 },
            hAxis: {
                textStyle: { color: 'transparent' },
                gridlines: {
                    color: "transparent"
                },
                baselineColor: '#FFFFFF'
            },
            vAxis: {
                //textStyle: { color: '#FFF' ,size:'12px'}
                title: '',
                //textStyle: {
                //    color: "black",
                //    fontName: "sans-serif",
                //    fontSize: 12,
                //    bold: true,
                //    italic: false
                //}
            },
            animation: {
                duration: 2500,
                easing: 'out',
                startup: false,
            },
            legend: { position: "none" }, backgroundColor: 'transparent',

        };
        var chart = new google.visualization.BarChart(document.getElementById("Dashboard_barchartAyohaMerchantReview"));
        chart.draw(view, options);

        Dashboard_Dashboard_AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore();

    };





}


var FiveStar;
var FourStar;
var ThreeStar;
var TwoStar;
var OneStar;
var TotalStar;
var TotalVoter;
var VoteFiveStar;
var VoteFourStar;
var VoteThreeStar;
var VoteTwoStar;
var VoteOneStar;
function Dashboard_AyohaMerchantReview_Dashboard_AyohaMerchantReview_CalculateRating() {
   // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": GetEnterpriseAccNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRating',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        FiveStar = data.results[0].FiveStar;
                        FourStar = data.results[0].FourStar;
                        ThreeStar = data.results[0].ThreeStar;
                        TwoStar = data.results[0].TwoStar;
                        OneStar = data.results[0].OneStar;
                        TotalStar = data.results[0].TotalStar;
                        TotalVoter = data.results[0].TotalVoter;
                        VoteFiveStar = data.results[0].VoteFiveStar;
                        VoteFourStar = data.results[0].VoteFourStar;
                        VoteThreeStar = data.results[0].VoteThreeStar;
                        VoteTwoStar = data.results[0].VoteTwoStar;
                        VoteOneStar = data.results[0].VoteOneStar;


                        var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;

                        if (TotalAvg) {
                            Ext.getCmp('htmlDashboard_AyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">' + TotalAvg.toFixed(1) + '</div>');

                        } else {
                            Ext.getCmp('htmlDashboard_AyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">0.0</div>');

                        }


                        Ext.getCmp('htmlDashboard_AyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);



                        if (RateReviews == 5) {

                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnDashboard_AyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                        }


























                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            setDashBoardMerchantReviewRate();
                        });

                        task.delay(500);





                        // globalDashboard_AyohaMerchantReviewRating = Math.round(TotalAvg);
                        // globalDashboard_AyohaMerchantReviewRating = TotalAvg.toFixed(1);



                        // console.log(globalDashboard_AyohaMerchantReviewRating);
                        // --20 + 8 + 9 + 2 + 1 / 11
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();
    Dashboard_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore('Submitted',GetCurrentYear());
    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);


}





function Dashboard_Dashboard_AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore() {

    //_DataStore_Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    //_DataStore_Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Dashboard_AyohaMerchantReview/Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNo');
    //_DataStore_Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore.load();


    //// 
    //var task = Ext.create('Ext.util.DelayedTask', function () {

    //    var Count = _DataStore_Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore.getCount();
    //    // alert(Count);


    //});
    //task.delay(500);


    //Ext.Viewport.setMasked(false);
    Ext.getStore('AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo(),
        ItemCodeReview:'AyohaStoreReview',
    });
    Ext.StoreMgr.get('AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo(),
            ItemCodeReview: 'AyohaStoreReview',
        });
        _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore = Ext.StoreMgr.get('AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore');
        count = myStore.getCount();
      
       // AyohaMerchantReview_AyohaMerchantReview_CalculateRating();


AyohaStoreDashboardSaleInfoMainMerchant('Today');

    //    setDashBoardSMSQuota();
    //     setDashBoardWhatAppQuota();
    //     setDashBoardEmailQuota();
    //     FloatPanel_MembershipCardManagement_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore();
        Ext.Viewport.setMasked(false);
        LoadingPanelHide();


    });
    task.delay(500);
}




function Dashboard_VisitorAnalsys_Advertisement_Only() {
    
   // var Style = Ext.getCmp('container_DashboardAnalsys_AdvertisementVisitor_ID').getStyle();

   // if (Style == "background-color:blue") {
   //     Ext.getCmp('container_DashboardAnalsys_AdvertisementVisitor_ID').setStyle("background-color:#DCDCDC");
   //     Ext.getCmp('html_DashboardAnalsys_AdvertisementVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:#DCDCDC;text-align:center;">Advertisement-AD</div>');
   //     var indexs = Dashboard_AnalsysVisitor_VisitorType.indexOf('AD');
   //     if (indexs > -1) {
   //         Dashboard_AnalsysVisitor_VisitorType.splice(indexs, 1);
   //     }
   //     GenerateDynamic_AnalsysVisitor();
       
   // }
   //else {
    
   //     Ext.getCmp('container_DashboardAnalsys_AdvertisementVisitor_ID').setStyle("background-color:blue");
   //     Ext.getCmp('html_DashboardAnalsys_AdvertisementVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:black;text-align:center;">Advertisement-AD</div>');
   //     Dashboard_AnalsysVisitor_VisitorType.push('AD');
   //     GenerateDynamic_AnalsysVisitor();
       
   // }
    GenerateDynamic_AnalsysVisitor_Advertisement();
}



function Dashboard_VisitorAnalsys_AyohaStore_Only() {
   
    var Style = Ext.getCmp('container_DashboardAnalsys_AyohaStoreVisitor_ID').getStyle();

    if (Style == "background-color:brown") {
        Ext.getCmp('container_DashboardAnalsys_AyohaStoreVisitor_ID').setStyle("background-color:#DCDCDC");
        Ext.getCmp('html_DashboardAnalsys_AyohaStoreVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:#DCDCDC;text-align:center;">Ayoha Store-AS</div>');
        var indexs = Dashboard_AnalsysVisitor_VisitorType.indexOf('AS');
        if (indexs > -1) {
            Dashboard_AnalsysVisitor_VisitorType.splice(indexs, 1);
        }
        GenerateDynamic_AnalsysVisitor();

    }
    else {

        Ext.getCmp('container_DashboardAnalsys_AyohaStoreVisitor_ID').setStyle("background-color:brown");
        Ext.getCmp('html_DashboardAnalsys_AyohaStoreVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:black;text-align:center;">Ayoha Store-AS</div>');
        Dashboard_AnalsysVisitor_VisitorType.push('AS');
        GenerateDynamic_AnalsysVisitor();

    }
    //  alert(Style);
}

function Dashboard_VisitorAnalsys_Membership_Only() {
    
   
    var Style = Ext.getCmp('container_DashboardAnalsys_MembershipVisitor_ID').getStyle();

    if (Style == "background-color:orange") {
        Ext.getCmp('container_DashboardAnalsys_MembershipVisitor_ID').setStyle("background-color:#DCDCDC");
        Ext.getCmp('html_DashboardAnalsys_MembershipVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:#DCDCDC;text-align:center;">Membership Card-MC</div>');
        var indexs = Dashboard_AnalsysVisitor_VisitorType.indexOf('MC');
        if (indexs > -1) {
            Dashboard_AnalsysVisitor_VisitorType.splice(indexs, 1);
        }
        GenerateDynamic_AnalsysVisitor();
    }
    else {

        Ext.getCmp('container_DashboardAnalsys_MembershipVisitor_ID').setStyle("background-color:orange");
        Ext.getCmp('html_DashboardAnalsys_MembershipVisitor_Txt').setHtml('<div style="width:100%;font-size:11px;color:black;text-align:center;">Membership Card-MC</div>');
        Dashboard_AnalsysVisitor_VisitorType.push('MC');
        GenerateDynamic_AnalsysVisitor();

    }
    //  alert(Style);
}




var Dashboard_AnalsysVisitor_VisitorType = [];
var Dashboard_AnalsysVisitor_VisitorTypeColor = [];





function Gnerate_VisitorAnalsysChart() {




    //Dashboard_AnalsysVisitor_VisitorType.length = 0;
    //  Dashboard_AnalsysVisitor_VisitorTypeColor.length = 0;
    Ext.getCmp('htmlDashboard_VisitorAnalsysYearTxt').setHtml('<div style="width:100%;font-size:12px;color:black;text-align:center;font-weight:bold">Year:' + document.getElementById('Dashboard_visitorAnalsysYear').value + '</div>');




    var objn = {
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "Year": document.getElementById('Dashboard_visitorAnalsysYear').value,
    };




    var task = Ext.create('Ext.util.DelayedTask', function () {



        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/VisitorAnalsys/VisitorAnalsysLoadByEnterpriseAccNo',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {



                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    if (data.total > 0) {

                        google.load("visualization", "1", { packages: ["corechart"] });
                        google.setOnLoadCallback(Dashboard_GenerateVisitorAnalysysChart);


                        function Dashboard_GenerateVisitorAnalysysChart() {

                            var VisitorAnalsys_Advertisement = new google.visualization.DataTable();
                            VisitorAnalsys_Advertisement.addColumn('string', 'Month');
                            VisitorAnalsys_Advertisement.addColumn('number', 'Advertisement');
                            VisitorAnalsys_Advertisement.addColumn({ type: 'string', role: 'annotation' });



                            var VisitorAnalsys_AyohaStore = new google.visualization.DataTable();
                            VisitorAnalsys_AyohaStore.addColumn('string', 'Month');
                            VisitorAnalsys_AyohaStore.addColumn('number', 'AyohaStore');
                            VisitorAnalsys_AyohaStore.addColumn({ type: 'string', role: 'annotation' });



                            var VisitorAnalsys_MembershipCard = new google.visualization.DataTable();
                            VisitorAnalsys_MembershipCard.addColumn('string', 'Month');
                            VisitorAnalsys_MembershipCard.addColumn('number', 'MembershipCard');
                            VisitorAnalsys_MembershipCard.addColumn({ type: 'string', role: 'annotation' });


                            for (var i = 0; i < data.total; i++) {
                                Month = ConvertShortMonth(data.results[i].Month);


                                Advertisement = parseInt(data.results[i].Advertisement);
                                AyohaStore = parseInt(data.results[i].AyohaStore);
                                MembershipCard = parseInt(data.results[i].MembershipCard);


                                VisitorAnalsys_Advertisement.addRow([Month, Advertisement, data.results[i].Advertisement + " " + "Visit"]);
                                VisitorAnalsys_AyohaStore.addRow([Month, AyohaStore, data.results[i].AyohaStore + " " + "Visit"]);
                                VisitorAnalsys_MembershipCard.addRow([Month, MembershipCard, data.results[i].MembershipCard + " " + "Visit"]);
                            }




                            var options_Advertisement = {
                                title: '',
                                hAxis: { title: '', titleTextStyle: { color: 'black' } },
                                vAxis: { minValue: 0, format: '0' },
                                legend: { position: 'none' },
                                colors: ['blue'],
                                //colors: Dashboard_AnalsysVisitor_VisitorTypeColor,
                                // legend: { position: 'top', alignment: 'center' },
                                width:700,
                                backgroundColor: 'transparent',
                                tooltip: {
                                    isHtml: false,
                                    trigger: 'both'
                                },
                            };


                            var options_AyohaStore = {
                                title: '',
                                hAxis: { title: '', titleTextStyle: { color: 'black' } },
                                vAxis: { minValue: 0, format: '0' },
                                legend: { position: 'none' },
                                colors: ['brown'],
                                //colors: Dashboard_AnalsysVisitor_VisitorTypeColor,
                                // legend: { position: 'top', alignment: 'center' },
                                width: 700,
                                backgroundColor: 'transparent',
                                tooltip: {
                                    isHtml: false,
                                    trigger: 'both'
                                },
                            };


                            var options_MembershipCard = {
                                title: '',
                                hAxis: { title: '', titleTextStyle: { color: 'black' } },
                                vAxis: { minValue: 0, format: '0' },
                                legend: { position: 'none' },
                                colors: ['orange'],
                                //colors: Dashboard_AnalsysVisitor_VisitorTypeColor,
                                // legend: { position: 'top', alignment: 'center' },
                                width: 700,
                                backgroundColor: 'transparent',
                                tooltip: {
                                    isHtml: false,
                                    trigger: 'both'
                                },
                            };

if(isFloatPanel_AdvertisementOpen=='Y'){
    var chart_Advertisement = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys_Advertisement'));
    function selectHandler_Advertisement() {
        var selection = chart_Advertisement.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                var str = VisitorAnalsys_Advertisement.getFormattedValue(item.row, item.column);
                var category = VisitorAnalsys_Advertisement
                .getValue(chart_Advertisement.getSelection()[0].row, 0)                                      
                //alert(str);
                //alert(category);
                FloatPanel_VisitorAnalsysListShow('Advertisement', GetCurrentYear(), category, str);
            }
        }
        if (message == '') {
            message = 'nothing';
        }
    }
    google.visualization.events.addListener(chart_Advertisement, 'select', selectHandler_Advertisement);
    chart_Advertisement.draw(VisitorAnalsys_Advertisement, options_Advertisement);
}
                           



if(isFloatPanel_AyohaStoreOpen=='Y'){

    var chart_AyohaStore = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys_AyohaStore'));
    function selectHandler_AyohaStore() {
        var selection = chart_AyohaStore.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                var str = VisitorAnalsys_AyohaStore.getFormattedValue(item.row, item.column);
                var category = VisitorAnalsys_AyohaStore
                .getValue(chart_AyohaStore.getSelection()[0].row, 0)                                      
                FloatPanel_VisitorAnalsysListShow('AyohaStore', GetCurrentYear(), category, str);
            }
        }
        if (message == '') {
            message = 'nothing';
        }
    }
    google.visualization.events.addListener(chart_AyohaStore, 'select', selectHandler_AyohaStore);
    chart_AyohaStore.draw(VisitorAnalsys_AyohaStore, options_AyohaStore);

}

                         



                            if(isFloatPanel_MembershipCardManagementOpen=='Y')
                            {
                                var chart_MembershipCard = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys_MembershipCard'));
                                function selectHandler_MembershipCard() {
                                    var selection = chart_MembershipCard.getSelection();
                                    var message = '';
                                    for (var i = 0; i < selection.length; i++) {
                                        var item = selection[i];
                                        if (item.row != null && item.column != null) {
                                            var str = VisitorAnalsys_MembershipCard.getFormattedValue(item.row, item.column);
                                            var category = VisitorAnalsys_MembershipCard
                                            .getValue(chart_MembershipCard.getSelection()[0].row, 0)                                       
                                            FloatPanel_VisitorAnalsysListShow('MembershipCard', GetCurrentYear(), category, str);
                                        }
                                    }
                                    if (message == '') {
                                        message = 'nothing';
                                    }
                                }
                                google.visualization.events.addListener(chart_MembershipCard, 'select', selectHandler_MembershipCard);
                                chart_MembershipCard.draw(VisitorAnalsys_MembershipCard, options_MembershipCard);
                            }

                          


                        }

                        $(window).resize(function () {
                            // drawChart1();
                            Dashboard_GenerateVisitorAnalysysChart();
                        });



                       // Gnerate_VisitorAnalsysChart();
                       // comment on 15/2/2024
                      // Dashboard_AyohaMerchantReview_Dashboard_AyohaMerchantReview_CalculateRating();
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        return;

                        google.load("visualization", "1", { packages: ["corechart"] });
                        google.setOnLoadCallback(Dashboard_GenerateVisitorAnalysysChart);

                        function Dashboard_GenerateVisitorAnalysysChart() {

                            var VisitorAnalsys = new google.visualization.DataTable();
                            VisitorAnalsys.addColumn('string', 'Month');
                            VisitorAnalsys.addColumn('number', 'Advertisement Visitor');
                            VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });

                            VisitorAnalsys.addColumn('number', 'Ayoha Store Visitor');
                            VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });


                            VisitorAnalsys.addColumn('number', 'Membership Card Visitor');
                            VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });





                            for (var i = 0; i < data.total; i++) {
                                Month = ConvertShortMonth(data.results[i].Month);
                                Advertisement = parseInt(data.results[i].Advertisement);
                                AyohaStore = parseInt(data.results[i].AyohaStore);
                                MembershipCard = parseInt(data.results[i].MembershipCard);
                                VisitorAnalsys.addRow([Month, Advertisement, data.results[i].Advertisement, AyohaStore, data.results[i].AyohaStore, MembershipCard, data.results[i].MembershipCard]);
                            }




                            var options = {
                                title: '',
                                hAxis: { title: '', titleTextStyle: { color: 'black' } },
                                // vAxis: { minValue: 0 },
                                vAxis: { minValue: 0, format: '0' },
                                legend: { position: 'none' },
                                // legend: { position: 'top', alignment: 'center' },
                                width: 510,
                                backgroundColor: 'transparent',
                                tooltip: {
                                    isHtml: false,
                                    trigger: 'both'
                                },
                            };







                            var chart = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys_Advertisement'));


                            function selectHandler() {
                                var selection = chart.getSelection();
                                var message = '';
                                for (var i = 0; i < selection.length; i++) {
                                    var item = selection[i];
                                    if (item.row != null && item.column != null) {
                                        var str = VisitorAnalsys.getFormattedValue(item.row, item.column);
                                        var category = VisitorAnalsys
                                        .getValue(chart.getSelection()[0].row, 0)
                                        var type = '';
                                        if (item.column == 2) {
                                            type = "Advertisement";
                                        } if (item.column == 4) {
                                            type = "AyohaStore";
                                        }
                                        if (item.column == 6) {
                                            type = "MembershipCard";
                                        }



                                        message += '{row:' + item.row + ',column:' + item.column
                                        + '} = ' + str + '  The Month is:' + category
                                        + ' it belongs to : ' + type + '\n';

                                        //  FloatPanel_VisitorAnalsysListShow(type, GetCurrentYear(), category, str);
                                        //  alert(message)
                                    }


                                    //else if (item.row != null) {
                                    //    var str = VisitorAnalsys.getFormattedValue(item.row, 0);
                                    //    message += '{row:' + item.row
                                    //    + ', column:none}; value (col 0) = ' + str
                                    //    + '  The Category is:' + category + '\n';
                                    //} else if (item.column != null) {
                                    //    var str = VisitorAnalsys.getFormattedValue(0, item.column);
                                    //    message += '{row:none, column:' + item.column
                                    //    + '}; value (row 0) = ' + str
                                    //    + '  The Category is:' + category + '\n';
                                    //}
                                }
                                if (message == '') {
                                    message = 'nothing';
                                }
                                //alert('You selected ' + message);

                            }

                            google.visualization.events.addListener(chart, 'select', selectHandler);


                            chart.draw(VisitorAnalsys, options);




                        }



                        $(window).resize(function () {
                            // drawChart1();
                            Dashboard_GenerateVisitorAnalysysChart();
                        });


                        Ext.Viewport.unmask();

                    }





                }
                else {

                    alert('error');
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                alert('failure');
                Ext.Viewport.unmask();
            }

        });


    });

    task.delay(1000);
}

























function GenerateDynamic_AnalsysVisitor() {


  

  //Dashboard_AnalsysVisitor_VisitorType.length = 0;
  //  Dashboard_AnalsysVisitor_VisitorTypeColor.length = 0;
    Ext.getCmp('htmlDashboard_VisitorAnalsysYearTxt').setHtml('<div style="width:100%;font-size:12px;color:black;text-align:center;font-weight:bold">Year:' + document.getElementById('Dashboard_visitorAnalsysYear').value + '</div>');




    var objn = {
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "Year": document.getElementById('Dashboard_visitorAnalsysYear').value,
    };




    var task = Ext.create('Ext.util.DelayedTask', function () {



        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/VisitorAnalsys/VisitorAnalsysLoadByEnterpriseAccNo',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {



                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];

                    if (data.total > 0) {

                        google.load("visualization", "1", { packages: ["corechart"] });
                        google.setOnLoadCallback(Dashboard_GenerateVisitorAnalysysChart);


                        function Dashboard_GenerateVisitorAnalysysChart() {

                            var VisitorAnalsys = new google.visualization.DataTable();
                            //VisitorAnalsys.addColumn('string', 'ID');
                            VisitorAnalsys.addColumn('string', 'Month');

                           

                            for (var ii = 0; ii < Dashboard_AnalsysVisitor_VisitorType.length; ii++) {
                                
                                VisitorAnalsys.addColumn('number', Dashboard_AnalsysVisitor_VisitorType[ii]);
                                VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });

                               // alert(Dashboard_AnalsysVisitor_VisitorType[ii]);
                            }

                            





                            for (var i = 0; i < data.total; i++) {
                                Month = ConvertShortMonth(data.results[i].Month);


                                Advertisement = parseInt(data.results[i].Advertisement);
                                AyohaStore = parseInt(data.results[i].AyohaStore);
                                MembershipCard = parseInt(data.results[i].MembershipCard);

                                if (Dashboard_AnalsysVisitor_VisitorType.length == 3) {

                                   Dashboard_AnalsysVisitor_VisitorTypeColor = ['blue', 'brown', 'orange'];
                                   VisitorAnalsys.addRow([Month, Advertisement, data.results[i].Advertisement + "-" + "AD", AyohaStore, data.results[i].AyohaStore + "-" + "AS", MembershipCard, data.results[i].MembershipCard + "-" + "MC"]);
                                }
                                if (Dashboard_AnalsysVisitor_VisitorType.length == 2) {
                                    var a = Dashboard_AnalsysVisitor_VisitorType[0];
                                    var b = Dashboard_AnalsysVisitor_VisitorType[1];
                                    var c;
                                    var d;
                                    var kaler;
                                    var kalering
                                    if (a == "AD") {
                                        c = Advertisement;
                                        kaler = 'blue';
                                    } if (a == "AS") {
                                        c = AyohaStore;
                                        kaler = 'brown';
                                    } if (a == "MC") {
                                        c = MembershipCard;
                                        kaler = 'orange';
                                    }

                                    if (b == "AD") {
                                        d = Advertisement;
                                        kalering = 'blue';
                                    } if (b == "AS") {
                                        d = AyohaStore;
                                        kalering = 'brown';
                                    } if (b == "MC") {
                                        d = MembershipCard;
                                        kalering = 'orange';
                                    }
                                    var e = c.toString();
                                    var f = d.toString();
                                   Dashboard_AnalsysVisitor_VisitorTypeColor = [kaler, kalering];
                                    ////VisitorAnalsys.addRow([Month, c, e + " Visit", d, f + " Visit"]);
                                   VisitorAnalsys.addRow([Month, c, e + "-"+a, d, f + "-"+b]);
                                    //VisitorAnalsys.addRow([Month, Advertisement, data.results[i].Advertisement, AyohaStore, data.results[i].AyohaStore]);
                                }
                                if (Dashboard_AnalsysVisitor_VisitorType.length == 1) {
                                    var a = Dashboard_AnalsysVisitor_VisitorType[0];
                                    var c;
                                    var warna;
                                    if (a == "AD") {
                                        c = Advertisement;
                                        warna = 'blue';
                                    } if (a == "AS") {
                                        c = AyohaStore;
                                        warna = 'brown';
                                    } if (a == "MC") {
                                        c = MembershipCard;
                                        warna = 'orange';
                                    }

                                    var e = c.toString();
                                   Dashboard_AnalsysVisitor_VisitorTypeColor = [warna];
                                   VisitorAnalsys.addRow([Month, c, e + "-"+a]);

                                }
                            }




                            var options = {
                                title: '',
                                hAxis: { title: '', titleTextStyle: { color: 'black' } },
                                // vAxis: { minValue: 0 },
                                vAxis: { minValue: 0, format: '0' },
                                legend: { position: 'none' },
                                colors: Dashboard_AnalsysVisitor_VisitorTypeColor,
                                // legend: { position: 'top', alignment: 'center' },
                                width: 510,
                                backgroundColor: 'transparent',
                                tooltip: {
                                    isHtml: false,
                                    trigger: 'both'
                                },
                            };







                            var chart = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys_Advertisement'));

                           
                            function selectHandler() {
                                var selection = chart.getSelection();
                                var message = '';

                               
                                //var estrutura = VisitorAnalsys.getValue()
                                //alert(estrutura);
                               
                               


                                for (var i = 0; i < selection.length; i++) {
                                    var item = selection[i];
                                    if (item.row != null && item.column != null) {
                                        var str = VisitorAnalsys.getFormattedValue(item.row, item.column);
                                        var category = VisitorAnalsys
                                        .getValue(chart.getSelection()[0].row, 0)
                                        var typing;
                                        if (item.column == 2) {
                                            typing = "Advertisement";
                                        } if (item.column == 3) {
                                            typing = "AyohaStore";
                                        }
                                        if (item.column == 2) {
                                            typing = "MembershipCard";
                                        }


                                        

                                        message += '{row:' + item.row + ',column:' + item.column
                                        + '} = ' + str + '  The Month is:' + category
                                        + ' it belongs to : ' + typing + '\n';
                                        //var color = VisitorAnalsys.getFormattedValue(item.row, item.column, item.colors);
                                        //var colorx = VisitorAnalsys.getFormattedValue(item.row, item.column, item.color);
                                        //FloatPanel_VisitorAnalsysListShow(typing, GetCurrentYear(), category, str);
                                        //console.log(color);
                                       // console.log(i);
                                       // var stri = VisitorAnalsys.getColors();
                                       // alert(VisitorAnalsys.getValue(chart.getSelection()[0].row,i));
                                        alert(str);
                                      //  var stri = VisitorAnalsys.getFormattedValue(item.row, item.column[0]);
                                        //alert(VisitorAnalsys.getColor(chart.getSelection()[0].row, chart.getSelection()[0].column));
                                        //alert(VisitorAnalsys.getValue(chart.getSelection()[0].row, chart.getSelection()[0].column));
                                       
                                        
                                    }


                                    //else if (item.row != null) {
                                    //    var str = VisitorAnalsys.getFormattedValue(item.row, 0);
                                    //    message += '{row:' + item.row
                                    //    + ', column:none}; value (col 0) = ' + str
                                    //    + '  The Category is:' + category + '\n';
                                    //} else if (item.column != null) {
                                    //    var str = VisitorAnalsys.getFormattedValue(0, item.column);
                                    //    message += '{row:none, column:' + item.column
                                    //    + '}; value (row 0) = ' + str
                                    //    + '  The Category is:' + category + '\n';
                                    //}
                                }
                                if (message == '') {
                                    message = 'nothing';
                                }
                                //alert('You selected ' + message);

                            }

                            google.visualization.events.addListener(chart, 'select', selectHandler);


                            chart.draw(VisitorAnalsys, options);





                        }

                        $(window).resize(function () {
                            // drawChart1();
                            Dashboard_GenerateVisitorAnalysysChart();
                        });



                       // Dashboard_AnalsysVisitor_VisitorType.length = 0;



                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {


                        google.load("visualization", "1", { packages: ["corechart"] });
                        google.setOnLoadCallback(Dashboard_GenerateVisitorAnalysysChart);

                        function Dashboard_GenerateVisitorAnalysysChart() {

                            var VisitorAnalsys = new google.visualization.DataTable();
                            VisitorAnalsys.addColumn('string', 'Month');
                            VisitorAnalsys.addColumn('number', 'Advertisement Visitor');
                            VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });

                            VisitorAnalsys.addColumn('number', 'Ayoha Store Visitor');
                            VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });


                            VisitorAnalsys.addColumn('number', 'Membership Card Visitor');
                            VisitorAnalsys.addColumn({ type: 'string', role: 'annotation' });





                            for (var i = 0; i < data.total; i++) {
                                Month = ConvertShortMonth(data.results[i].Month);
                                Advertisement = parseInt(data.results[i].Advertisement);
                                AyohaStore = parseInt(data.results[i].AyohaStore);
                                MembershipCard = parseInt(data.results[i].MembershipCard);
                                VisitorAnalsys.addRow([Month, Advertisement, data.results[i].Advertisement, AyohaStore, data.results[i].AyohaStore, MembershipCard, data.results[i].MembershipCard]);
                            }




                            var options = {
                                title: '',
                                hAxis: { title: '', titleTextStyle: { color: 'black' } },
                                // vAxis: { minValue: 0 },
                                vAxis: { minValue: 0, format: '0' },
                                legend: { position: 'none' },
                                // legend: { position: 'top', alignment: 'center' },
                                width: 510,
                                backgroundColor: 'transparent',
                                tooltip: {
                                    isHtml: false,
                                    trigger: 'both'
                                },
                            };







                            var chart = new google.visualization.LineChart(document.getElementById('chart_VisitorAnalsys_Advertisement'));


                            function selectHandler() {
                                var selection = chart.getSelection();
                                var message = '';
                                for (var i = 0; i < selection.length; i++) {
                                    var item = selection[i];
                                    if (item.row != null && item.column != null) {
                                        var str = VisitorAnalsys.getFormattedValue(item.row, item.column);
                                        var category = VisitorAnalsys
                                        .getValue(chart.getSelection()[0].row, 0)
                                        var type='';
                                        if (item.column == 2) {
                                            type = "Advertisement";
                                        } if (item.column == 4) {
                                            type = "AyohaStore";
                                        }
                                        if (item.column == 6) {
                                            type = "MembershipCard";
                                        }



                                        message += '{row:' + item.row + ',column:' + item.column
                                        + '} = ' + str + '  The Month is:' + category
                                        + ' it belongs to : ' + type + '\n';

                                      //  FloatPanel_VisitorAnalsysListShow(type, GetCurrentYear(), category, str);
                                      //  alert(message)
                                    }


                                    //else if (item.row != null) {
                                    //    var str = VisitorAnalsys.getFormattedValue(item.row, 0);
                                    //    message += '{row:' + item.row
                                    //    + ', column:none}; value (col 0) = ' + str
                                    //    + '  The Category is:' + category + '\n';
                                    //} else if (item.column != null) {
                                    //    var str = VisitorAnalsys.getFormattedValue(0, item.column);
                                    //    message += '{row:none, column:' + item.column
                                    //    + '}; value (row 0) = ' + str
                                    //    + '  The Category is:' + category + '\n';
                                    //}
                                }
                                if (message == '') {
                                    message = 'nothing';
                                }
                                //alert('You selected ' + message);

                            }

                            google.visualization.events.addListener(chart, 'select', selectHandler);


                            chart.draw(VisitorAnalsys, options);




                        }



                        $(window).resize(function () {
                            // drawChart1();
                            Dashboard_GenerateVisitorAnalysysChart();
                        });


                        Ext.Viewport.unmask();

                    }





                }
                else {

                    alert('error');
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                alert('failure');
                Ext.Viewport.unmask();
            }

        });


    });

    task.delay(1000);
}




function openDashboard_AyohaMerchantReviewPanel() {

}



function Dashboard_openVIAAdvertisement_OnlineStore() {
    FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
    //var nm;
    //var web;

    //nm = arrVIAAdvertisementeStoreName[VIAAdvertisementOnlineStoreIndex];
    //web = arrVIAAdvertisementOnlineStoreUrl[VIAAdvertisementOnlineStoreIndex];
    //console.log(VIAAdvertisementOnlineStoreIndex);
    //if (nm == "Ayoha") {

    //    FloatPanel_AyohaStoreShow_VIA();
    //} else {
    //    window.open(web, '_system'); return false;
    //}
}




var globalDashboardeWalletType;
var globalDashboardeWalletStatus;
var globalDashboardCreditLimitPerDay;
var globalDashboardDebitLimitPerDay;
var globalDashboardeWalletCurrentBalance;
var globalDashboardisUserHasEwalletAccount = "N";
var globalDashboardeWalletStep=0;

function Dashboard_LoadAyohaEwallet() {
    console.log(" GetEnterpriseAccNo():" + GetEnterpriseAccNo())
    console.log(" GetCurrentUserAccountNo():" + GetCurrentUserAccountNo())
    var task = Ext.create('Ext.util.DelayedTask', function () {
        globalDashboardeWalletStep=0;
        var objn = {
            "eWalletAccNo": GetEnterpriseAccNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletLoadeWallet',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        globalDashboardeWalletType = data.results[0].eWalletType;
                        globalDashboardeWalletStatus = data.results[0].eWalletStatus;
                        globalDashboardCreditLimitPerDay = data.results[0].CreditLimitPerDay;
                        globalDashboardDebitLimitPerDay = data.results[0].DebitLimitPerDay;

                        if(data.results[0].eWalletCurrentBalance){
                            globalDashboardeWalletCurrentBalance = data.results[0].eWalletCurrentBalance;
                        }else{
                            globalDashboardeWalletCurrentBalance = "0:00";
                        }
                        
                        localStorage.setItem("DashboardeWalletCurrentBalance", data.results[0].eWalletCurrentBalance);
                        localStorage.setItem("isUserHasEwalletAccount", "Y");
                        localStorage.setItem("AyohaeWalletDeviceID", data.results[0].DeviceID);
                        localStorage.setItem("AyohaeWalletisUsedDeviceID_Detection", data.results[0].isUsedDeviceID_Detection);
                        localStorage.setItem("AyohaeWalletisUsedTAC_Code", data.results[0].isUsedTAC_Code);
                        localStorage.setItem("AyohaeWalletPassCode", data.results[0].PassCode);
                        globalDashboardisUserHasEwalletAccount = "Y";
                        globalDashboardeWalletStep=1;
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }

                        if (isFloatPanel_AyohaStoreOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_TitleHeaderTxtAyohaEwallet').setHtml('<div  style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:-3px 0px 0px 0px">Ayoha Business Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-24px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }
                        if (isFloatPanel_AyohaeWalletOpen == 'Y') {
                            //Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div id="odometer_ewallet" class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + globalDashboardeWalletCurrentBalance + '</div>');
                            Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div id="odometer_ewallet" class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">' + globalDashboardeWalletCurrentBalance + '</div>');
                            FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();
                        }

                     
                       // Ext.getCmp('btnMyAccount_DashboardeWalletValue').setHtml('<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM' + globalDashboardeWalletCurrentBalance + '</div>');
                       
                       Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setMargin('0px -18px 3px 0px');
                       
                       Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:bold;color:black;margin:-3px 0px 0px 0px">Ayoha Business Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-22px 0px 0px 0px">RM' + globalDashboardeWalletCurrentBalance + '</div>');





                        // FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'



                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        globalDashboardisUserHasEwalletAccount = "N";
                        globalDashboardeWalletStep=0;
                        localStorage.setItem("isUserHasEwalletAccount", "N");
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM 00.00</div>');

                        }
                      //  Ext.getCmp('btnMyAccount_DashboardeWalletValue').setHtml('<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM' + globalDashboardeWalletCurrentBalance + '</div>');
                      Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setMargin('0px -18px 3px 0px');
                     if(globalDashboardeWalletCurrentBalance){
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:bold;color:black;margin:-3px 0px 0px 0px">Ayoha Business Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-22px 0px 0px 0px">RM' + globalDashboardeWalletCurrentBalance + '</div>');
                     }else{
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:bold;color:black;margin:-3px 0px 0px 0px">Ayoha Business Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-22px 0px 0px 0px">RM 0:00</div>');
                     }
                     
                    
                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}







function setPreviewCardBackgroundImage_dashboard() {
   

    var y = parseInt(screen.height)-12;
   
    
    

    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerIDs_dashboard').setHtml('<div style="background-color:transparent;width:100%;height:' + y + 'px;" id="divCardBgImg_dashboard" ></div>');
    $("#divCardBgImg_dashboard").css("background-repeat", "no-repeat");
        $("#divCardBgImg_dashboard").css("background-size", "100% 100%");
        $("#divCardBgImg_dashboard").css("height", $(window).height() - 3);

   
 
 



    



  
}



function Dashboard_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemHistoryStatus,Year) {
    loadFrom='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore';

    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setExtraParam('RedeemHistoryStatus', RedeemHistoryStatus);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setExtraParam('Year', Year);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setUrl(GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3');
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.load();
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
     
        Ext.Viewport.setMasked(false);

        countVIEWRedemptionListLoadBySubscriberAccNoFirst=_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getCount();
      //  Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countVIEWRedemptionListLoadBySubscriberAccNoFirst + ')</b></font>');
        Ext.getCmp('Dashboard_VIEWRedemptionListListID').setStore(_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store);
        
        LoadingPanelHide();







    });
    task.delay(200);




}



////////////////////////




///////////////////////////////////////////

////Reload front dashboard
function ReloadDashboard_LoadMembershipsLatestActivity(){
  
    // alert(GetEnterpriseAccNo())
    _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsTopFiveLatestActivityLoadByEnterpriseAccNo');
    _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.load();
 
 
 
     var task = Ext.create('Ext.util.DelayedTask', function () {
 
         var count = parseInt(_DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore.getCount());
         Ext.getCmp('DashboardList_LatestActivity').setStore(_DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore);
         Ext.getCmp('htmlDashboard_LatestActivityLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Recent Activity ('+count+')</b></div>');
         ReloadDashboardMerchantMainStore_TotalMember_LoyaltyCampaignActivity();
    
 
     });
     task.delay(500);
 
 }






function ReloadDashboardMerchantMainStore_TotalMember_LoyaltyCampaignActivity() {
    // LoadingPanelShow(getLoadingIcon(), 'Loading....');
     globalNewOrderPaid=0;
     // $("#divCardBgImg_dashboard").fadeOut("slow", function () {
     //   // $("#divCardBgImg_dashboard").css("background-image", "url(https://setkita.com/AyohaImgCard/DashboardMerchantFakeBg/LogoOrangeSimplifed.png)");
     //   $("#divCardBgImg_dashboard").css("background-image", "url(  "+ GetEnterpriseLogoPath() + ")");
     //   $("#divCardBgImg_dashboard").css("background-repeat", "no-repeat");
     //     $("#divCardBgImg_dashboard").css("background-size", "15% 20%");
     //     $("#divCardBgImg_dashboard").css("background-position", "center");
     //     // $("#divCardBgImg_dashboard").css("border-radius", "50%");
     //     // $("#divCardBgImg_dashboard").css("border", "2px solid black");
     //     $("#divCardBgImg_dashboard").css("height", $(window).height() - 3);
     //     //  $("#divCardBgImg").css("width", "1"));
     //     $("#divCardBgImg_dashboard").fadeIn("slow");
     // });
 
    // GetEnterpriseLogoPath()
 
 
     Ext.getStore('DashboardMerchantMainStore').getProxy().setExtraParams({      
         EnterpriseHQAccNo: GetEnterpriseHQAccNo()
     });
     Ext.StoreMgr.get('DashboardMerchantMainStore').load();
 
 
     var task = Ext.create('Ext.util.DelayedTask', function () {
         Ext.getStore('DashboardMerchantMainStore').getProxy().setExtraParams({
             EnterpriseHQAccNo: GetEnterpriseHQAccNo()
         });
 
         Ext.StoreMgr.get('DashboardMerchantMainStore').load();
         var myStore = Ext.getStore('DashboardMerchantMainStore');
       
 
         var modelRecorded = myStore.getAt(0);
         // var ThisWeekCountsStamp = modelRecorded.get('ThisWeekCountsStamp');
         // var ThisWeekCountsPoint = modelRecorded.get('ThisWeekCountsPoint');
         var ThisWeekCountsStamp = 0;
         var ThisWeekCountsPoint = 0;
         var TotalCountStamp = modelRecorded.get('TotalCountStamp');
         var TotalCountPoint = modelRecorded.get('TotalCountPoint');
         var TotalMembershipCard = modelRecorded.get('TotalMembershipCard');
         var AyohaPoint = modelRecorded.get('AyohaPoint');
         var TotalMembers = modelRecorded.get('TotalMembers');
         var LatestPointCampaignCode = modelRecorded.get('LatestPointCampaignCode');
         var LatestStampCampaignCode = modelRecorded.get('LatestStampCampaignCode');
 
         var LatestPointCampaignCode_SubscriberAccNo = modelRecorded.get('LatestPointCampaignCode_SubscriberAccNo');
         var LatestStampCampaignCode_SubscriberAccNo = modelRecorded.get('LatestStampCampaignCode_SubscriberAccNo');
 
        
         var LatestcountsPoint = modelRecorded.get('LatestcountsPoint');
         var LatestPointedByDate = modelRecorded.get('LatestPointedByDate');
 
         var LatestStamp = modelRecorded.get('LatestStamp');
         var LatestStampedByDate = modelRecorded.get('LatestStampedByDate');
 
         var LatestStampedMemberName = modelRecorded.get('LatestStampedMemberName');
         var LatestPointMemberName = modelRecorded.get('LatestPointMemberName');
         var NewRedemption = modelRecorded.get('NewRedemption');
 
 
 
 
 
 
         var CountLoyaltyStamp = modelRecorded.get('CountLoyaltyStamp');
         var CountLoyaltyPoint = modelRecorded.get('CountLoyaltyPoint');
 
         var CountMembershipDiscountUsed = modelRecorded.get('CountMembershipDiscountUsed');
         var CountContestant = modelRecorded.get('CountContestant');
 
         var CountVoucherUsed = modelRecorded.get('CountVoucherUsed');
         var CountEventRespond = modelRecorded.get('CountEventRespond');
        
         var CountVoucherUsedDate = modelRecorded.get('CountVoucherUsedDate');
         var CountContestantDate = modelRecorded.get('CountContestantDate');
 
         var CountMembershipDiscountUsedDate = modelRecorded.get('CountMembershipDiscountUsedDate');
         var CountLoyaltyPointDate = modelRecorded.get('CountLoyaltyPointDate');
 
         var CountLoyaltyStampDate = modelRecorded.get('CountLoyaltyStampDate');
         var CountEventRespondDate = modelRecorded.get('CountEventRespondDate');
         globalNewOrderPaid=parseInt(modelRecorded.get('NewPaidOrder'));
         var MembershipCardCount =parseInt(modelRecorded.get('MembershipCardCount'));
 //alert(NewRedemption)
 
 if (MembershipCardCount) {
     MembershipCardCount = MembershipCardCount;
 } else {
     MembershipCardCount = "0";
 }
 
         globalPNUnread = modelRecorded.get('PNUnread');
         globalNewRedemption = modelRecorded.get('NewRedemption');
         if (LatestStampedMemberName) {
             LatestStampedMemberName = LatestStampedMemberName
         } else {
             LatestStampedMemberName="-"
         }
 
         if (LatestPointMemberName) {
             LatestPointMemberName = LatestPointMemberName
         } else {
             LatestPointMemberName = "-"
         }
 
         if (LatestcountsPoint) {
             LatestcountsPoint = LatestcountsPoint;
         } else {
             LatestcountsPoint = "0";
         }
 
         if (LatestStamp) {
             LatestStamp = LatestStamp;
         } else {
             LatestStamp = "0/0";
         }
 
 
         if (ThisWeekCountsStamp) {
             ThisWeekCountsStamp = ThisWeekCountsStamp;
         } else {
             ThisWeekCountsStamp = "0";
         }
         if (ThisWeekCountsPoint) {
             ThisWeekCountsPoint = ThisWeekCountsPoint;
         } else {
             ThisWeekCountsPoint = "0";
         }
 
         if (TotalCountStamp) {
             TotalCountStamp = TotalCountStamp;
         } else {
             TotalCountStamp = "0";
         }
 
 
         if (TotalCountPoint) {
             TotalCountPoint = TotalCountPoint;
         } else {
             TotalCountPoint = "0";
         }
         if (TotalMembershipCard) {
             TotalMembershipCard = TotalMembershipCard;
         } else {
             TotalMembershipCard = "0";
         }
         if (AyohaPoint) {
             AyohaPoint = AyohaPoint;
         } else {
             AyohaPoint = "0";
         }
         if (TotalMembers) {
             TotalMembers = TotalMembers;
         } else {
             TotalMembers = "0";
         }
 
 
         if (LatestPointCampaignCode) {
             LatestPointCampaignCode = LatestPointCampaignCode;
         } else {
             LatestPointCampaignCode = "NA";
         }
 
 
         if (LatestStampCampaignCode) {
             LatestStampCampaignCode = LatestStampCampaignCode;
         } else {
             LatestStampCampaignCode = "NA";
         }
 
 
         if (LatestPointCampaignCode_SubscriberAccNo) {
             LatestPointCampaignCode_SubscriberAccNo = LatestPointCampaignCode_SubscriberAccNo;
         } else {
             LatestPointCampaignCode_SubscriberAccNo = "NA";
         }
 
 
         if (LatestStampCampaignCode_SubscriberAccNo) {
             LatestStampCampaignCode_SubscriberAccNo = LatestStampCampaignCode_SubscriberAccNo;
         } else {
             LatestStampCampaignCode_SubscriberAccNo = "NA";
         }
 
 
 
         if (LatestPointedByDate) {
             LatestPointedByDate = LatestPointedByDate
         } else {
             LatestPointedByDate="-"
         }
 
 
         if (LatestStampedByDate) {
             LatestStampedByDate = LatestStampedByDate
         } else {
             LatestStampedByDate = "-"
         }
        
         globalDashboard_LatestPointCampaignCode = LatestPointCampaignCode;
         globalDashboard_LatestStampCampaignCode = LatestStampCampaignCode;
         globalDashboard_LatestPointCampaignCode_SubscriberAccNo = LatestPointCampaignCode_SubscriberAccNo;
         globalDashboard_LatestStampCampaignCode_SubscriberAccNo = LatestStampCampaignCode_SubscriberAccNo;
         //Ext.getCmp('htmlAyohaRewardStampCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + LatestStamp + '</div>');
         //Ext.getCmp('htmlAyohaRewardPointCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + LatestcountsPoint + '</div>');
 
 
         Ext.getCmp('htmlAyohaRewardStamped_StampedEarn').setHtml('<div style="color:black;text-align: center;font-size:36px;width:100%;font-weight:bold">' + LatestStamp + '</div>');
         Ext.getCmp('htmlAyohaRewardPoint_PointEarn').setHtml('<div style="color:black;text-align: center;font-size:36px;width:100%;font-weight:bold">' + LatestcountsPoint + '</div>');
 
 
 
 
         //Ext.getCmp('htmlAyohaRewardStampCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Last Activity On:'+ LatestStampedByDate+'</div>');
         //Ext.getCmp('htmlAyohaRewardPointCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Last Activity On:'+LatestPointedByDate +'</div>');
 
 
         Ext.getCmp('htmlAyohaRewardStamped_Date').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestStampedByDate + '</div>');
         Ext.getCmp('htmlAyohaRewardPoint_Date').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestPointedByDate + '</div>');
 
 
         Ext.getCmp('htmlAyohaRewardStamped_MemberName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestStampedMemberName + '</div>');
         Ext.getCmp('htmlAyohaRewardPoint_MemberName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + LatestPointMemberName + '</div>');
 
 
 
 
 
 
 
        // Ext.getCmp('htmlAyohaRewardThisWeekStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+ThisWeekCountsStamp+'</div>');
       //  Ext.getCmp('htmlAyohaRewardThisWeekPoint').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPoint + '</div>');
 
 
       
       //  Ext.getCmp('htmlAyohaRewardTotalMembers').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + TotalMembers + '</div>');
       
       
         Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div onclick="FloatPanel_SubscriberListShow()" class="example-1" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="margin:50px 0px 0px 0px"><img src="resources/icons/MembershipsMembersWhite.png" width="80" height="80" alt="Company Name"></div><br><div style="color:white;text-align: center;font-size:48px;width:100%;margin:-50px 0px 0px 0px;"><b>' + TotalMembers + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Total Members</b></div></div>');
 
 
 
        //Ext.getCmp('htmlAyohaRewardTotalMembershipCard').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + TotalMembershipCard + '</div>');
         
       
         if (globalPNUnread) {
             globalPNUnread = globalPNUnread;
         } else {
             globalPNUnread = '0';
         }
 
 if(NewRedemption){
     NewRedemption = NewRedemption;
 }else
 {
     NewRedemption = '0';
 }
 
 
 
 Ext.getCmp('htmlDashboard_LatestRedemptionLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Latest Redemptions ('+NewRedemption+')</b></div>');
 
 Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setMargin('14 0 0 0');
 Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setHtml('<img src="resources/icons/order-removebg-preview.png"  style="width:25px;height:25px;margin:-10px 0px 0px 0px;zIndex:-100px;"/>'); 
 
 if(globalNewOrderPaid>0){
     Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setMargin('-6px 0px 0px 0px');
     Ext.getCmp('btnMyAccount_DashboardTopOrderReceived').setHtml('<img src="resources/icons/order-removebg-preview.png"  style="width:25px;height:25px;margin:-10px 0px 0px 0px;zIndex:-100px;"/><div style="margin:-40px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;">' + globalNewOrderPaid + '</div>');
 }
 
 sessionStorage.setItem("globalNewOrderPaid",globalNewOrderPaid.toString());
 
 // if(globalNewOrderPaid==0){
    
 // }
 
 
 Ext.getCmp('htmlLabel_MembershipCard').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Membership Cards ('+MembershipCardCount+')</b></div>');
 
 
 
         if (globalPNUnread != "0") {
      
        // Ext.getCmp('btnMyAccount_DashboardTopNotification').setWidth(38);
        // Ext.getCmp('btnMyAccount_DashboardTopNotification').setZIndex(-10);
        Ext.getCmp('btnMyAccount_DashboardTopNotification').setMargin('-6px 0px 0px 0px');
         Ext.getCmp('btnMyAccount_DashboardTopNotification').setHtml('<img src="resources/icons/NotificationPurple.png"  style="width:25px;height:25px;margin:-10px 0px 0px 0px;zIndex:-100px;"/><div style="margin:-40px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;">' + globalPNUnread + '</div>');
         //html: '<div ><img src="resources/icons/Notification.png" width="25" height="25" alt="Company Name"></div>',
       
     
     }
     
 
 if (CountLoyaltyStamp){
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountLoyaltyStamp+'</div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountLoyaltyStampDate+'</div>');
 }else
 {
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_StampCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
 }
 
 
 if (CountLoyaltyPoint){
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountLoyaltyPointDate+'</div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountLoyaltyPoint+'</div>');
 }else
 {    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalPointCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
 }
 
 if (CountMembershipDiscountUsed){
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountMembershipDiscountUsedDate+'</div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountMembershipDiscountUsed+'</div>');
 }else
 {    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipDiscountUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
 }
 
 if (CountContestant){
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountContestantDate+'</div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountContestant+'</div>');
 }else
 { Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalContestantCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
 }
 
 if (CountVoucherUsed){
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountVoucherUsedDate+'</div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountVoucherUsed+'</div>');
 }else
 { Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_TotalVoucherUsedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
 }
 
 if (CountEventRespond){
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Updated On:'+CountEventRespondDate+'</div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">'+CountEventRespond+'</div>');
 }else
 {    Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCountDate').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal"></div>');
     Ext.getCmp('htmlDashboard_LoyaltyCampaingActivity_MembershipEventRespondedCount').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>');
 }
 ReloadDashboard_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore();
 
         Ext.Viewport.setMasked(false);
 
 //temporary ioff 15/02/2024
        /// loadDashboard_MessagingTool();
       //  Dashboard_top6Membership();
        // Dashboard_LoadBirthDay();
     });
     task.delay(500);
 
 
 
 
 
 
 
 
 
 
 }



 function ReloadDashboard_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore() {
    loadFrom='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore';
//alert(RedeemHistoryStatus);
    
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setExtraParam('RedeemHistoryStatus', "Submitted");
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setExtraParam('Year', GetCurrentYear());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getProxy().setUrl(GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3');
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.load();
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
     
        Ext.Viewport.setMasked(false);

        countVIEWRedemptionListLoadBySubscriberAccNoFirst=_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store.getCount();
      //  Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countVIEWRedemptionListLoadBySubscriberAccNoFirst + ')</b></font>');
        Ext.getCmp('Dashboard_VIEWRedemptionListListID').setStore(_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store);
        ReloadDashboard_top6Membership();
        LoadingPanelHide();







    });
    task.delay(200);




}




 


///////////////////////////////////////
function AyohaStoreDashboardSaleInfoMainMerchant(DashboardFilter) {
    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });

     var task = Ext.create('Ext.util.DelayedTask', function () {
 
         var objn = {
             "EnterpriseAccNo": GetEnterpriseAccNo(),
             "DashboardFilter":DashboardFilter,
         };
        console.log(objn);
         var _value = Ext.Ajax.request({
 
             type: "POST",
 
             url: GetAPIurl() + '/AyohaStore_Dashboard/AyohaStoreDashboardSaleInfoMainMerchant',
 
             dataType: "json",
             data: JSON.stringify(objn),
             headers: {
                 "Content-Type": "application/json; charset=utf-8"
             },
 
             success: function (result, request) {
 
                 //console.log(result.responseText);
 
 
                 data = Ext.decode(result.responseText.trim());
 
                 if (data.success == "true") {
                     //var newData = JSON.parse(JSON.stringify(result.results.Email))
                     //console.log(result.results.Email);
                     //  //data.results[0];
                     // console.log(data.total);
                     if (data.total > 0) {
                       var OrderCartValue = data.results[0].OrderCartValue;
                       var PaymentRevenue = data.results[0].PaymentRevenue;
                       var NumberOfTransactions = data.results[0].NumberOfTransactions;
                       var AverageOrderValue = data.results[0].AverageOrderValue;
                       if(OrderCartValue){
                        OrderCartValue=OrderCartValue;
                       }else{
                        OrderCartValue="00:00";
                       }
                       if(PaymentRevenue){
                        PaymentRevenue=PaymentRevenue;
                       }else{
                        PaymentRevenue="00:00";
                       }
                       if(AverageOrderValue){
                        AverageOrderValue=AverageOrderValue;
                       }else{
                        AverageOrderValue="00:00";
                       }
 



                        Ext.getCmp('htmlDashboard_AyohaSaleOrdervalue').setHtml('<font style="color:grey;font-size:40px;"><b>RM'+OrderCartValue+'</b></font>');
                        Ext.getCmp('htmlDashboard_AyohaSalePaymentvalue').setHtml('<font style="color:grey;font-size:40px;"><b>RM'+PaymentRevenue+'</b></font>');
                        Ext.getCmp('htmlDashboard_AyohaSaleTransactionvalue').setHtml('<font style="color:grey;font-size:40px;"><b>'+NumberOfTransactions+'</b></font>');
                        Ext.getCmp('htmlDashboard_AyohaSaleAverageOrderValuevalue').setHtml('<font style="color:grey;font-size:40px;"><b>'+AverageOrderValue+'</b></font>');
 
 
 
 
                        Dashboardload_OrderAndPaymentChart(DashboardFilter);
                         Ext.Viewport.unmask();
                     }
                     if (data.total == 0) {
 
                         Ext.Viewport.unmask();
 
                     }
 
 
 
 
 
                 }
                 else {
 
 
                     Ext.Viewport.unmask();
                 }
 
 
             },
 
             failure: function (result, request) {
                 Ext.Viewport.unmask();
             }
 
         });
 
 
 
     });
 
    
     task.delay(500);
 
 
 }


 function Dashboard_AyohastoreDashboardFilter(){
   var val= document.getElementById("SelectionAyohaStoreDashboard").value;
   
var vals=$("#SelectionAyohaStoreDashboard option:selected" ).text();

   document.getElementById("Dashboard_AyohaSaleOrderLbl").innerHTML ="-"+ vals +"-";
   document.getElementById("Dashboard_AyohaSalePaymetLbl").innerHTML = "-"+ vals +"-";
   document.getElementById("Dashboard_AyohaSaleTransactionLbl").innerHTML = "-"+ vals +"-";
   document.getElementById("Dashboard_AyohaSaleAOLbl").innerHTML = "-"+ vals +"-";
   document.getElementById("Dashboard_AyohaSaleTop10Lbl").innerHTML = "-"+ vals +"-";
   
   AyohaStoreDashboardSaleInfoMainMerchant(val);
 }



 var arrtransaction_year =[];
 var arrtransaction_month =[];
 var arrtotal_amount=[];
 var arrsource =[];
 var arrtotal_amount_payment =[];
 var arrtotal_amount_cart =[];
 function Dashboardload_OrderAndPaymentChart(DashboardFilter){

    arrtransaction_year.length =0;
    arrtransaction_month.length =0;
    arrtotal_amount.length=0;
    arrsource.length =0;
    arrtotal_amount_payment.length =0;
    arrtotal_amount_cart.length =0;
    var task = Ext.create('Ext.util.DelayedTask', function () {
 
        var objn = {
            "EnterpriseAccNo": GetEnterpriseAccNo(),
            "Year":GetCurrentYear(),
        };
      
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Dashboard/AyohaStoreDashboardSaleInfoOrderCartAndPayment_Merchant',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                 

                   
                    if (data.total > 0) {
                    


                      var ChartSaleOrderAnalsys = new google.visualization.DataTable();
                      ChartSaleOrderAnalsys.addColumn('string', 'Month');
                      ChartSaleOrderAnalsys.addColumn('number', 'Gross Sale');
                      ChartSaleOrderAnalsys.addColumn('number', 'Net Sale');
                    




                      for (var i = 0; i < data.total; i++) {



                        if(data.results[i].source=="Cart"){
                            arrtotal_amount_cart.push(data.results[i].total_amount)

                            arrtransaction_month.push(data.results[i].transaction_month);

                        }if(data.results[i].source=="Payment"){
                            arrtotal_amount_payment.push(data.results[i].total_amount)

                            
                        }
                      arrtransaction_year.push(data.results[i].transaction_year);
                     
                    
                      }

                     
                      for (var i = 0; i < arrtotal_amount_cart.length; i++) {
                      
                        ChartSaleOrderAnalsys.addRow([arrtransaction_month[i],Number(arrtotal_amount_cart[i]), Number(arrtotal_amount_payment[i])]);
                        
                    
                      }

                      var formatter = new google.visualization.NumberFormat({
                        pattern: 'RM #,##0.00'
                    });
                    
                    // Apply the formatter to the Gross Sale and Net Sale columns (index 1 and 2)
                    formatter.format(ChartSaleOrderAnalsys, 1);
                    formatter.format(ChartSaleOrderAnalsys, 2);

                       var options = {
                 
                         title: 'Ayoha Store Gross Sale and Net Sale',
                         curveType: 'function',
                         backgroundColor: 'transparent',
                         // legend: { position: 'right' }, pointSize: '5',
                         legend: { position: "top" },
                        // width: '100%',
                         width: 1100,
                         height: 550,
                         animation: { duration: 250 },
                         explorer: {
                             actions: ['dragToZoom', 'rightClickToReset'],
                             axis: 'horizontal',
                             keepInBounds: true,
                             maxZoomIn: 10.0
                         },
                         vAxis: {
                           // format: 'RM #,##0.00' // Consistent two decimal format for axis
                            format: 'RM #,###.##' // This will format the vAxis labels to include RM
                        }
                       };
                 
                       var chart = new google.visualization.LineChart(document.getElementById('chart_invoice'));
                       var indexBulan = 0;
                       var index = 0;
                       var indexs = 0;
                       var chartBulan = arrtransaction_month;
                       var chartData = arrtotal_amount_cart;
                       var chartDatas = arrtotal_amount_payment;


                       var drawChartInvoceBulan = function () {
                         if (indexBulan < chartBulan.length) {
                            ChartSaleOrderAnalsys.setValue(indexBulan, 0, chartBulan[indexBulan++]);         
                             chart.draw(ChartSaleOrderAnalsys, options);           
                         }
                       
                     }
                       var drawChartInvoce = function () {
                           if (index < chartData.length) {
                            ChartSaleOrderAnalsys.setValue(index, 1, chartData[index++]);           
                               chart.draw(ChartSaleOrderAnalsys, options);             
                           }
                         
                       }
                   
                   
                       var drawChartInvoce2 = function () {
                         //  console.log('drawChart index ' + indexs);
                           if (indexs < chartData.length) {
                            ChartSaleOrderAnalsys.setValue(indexs, 2, chartDatas[indexs++]);             
                               chart.draw(ChartSaleOrderAnalsys, options);             
                           }
                          
                       }    
                   
                      
                   
                           google.visualization.events.addListener(chart, 'animationfinish', drawChartInvoceBulan);
                           google.visualization.events.addListener(chart, 'animationfinish', drawChartInvoce);
                           google.visualization.events.addListener(chart, 'animationfinish', drawChartInvoce2);
                           chart.draw(ChartSaleOrderAnalsys, options);        
                           drawChartInvoceBulan();
                           drawChartInvoce();
                           drawChartInvoce2();



                           var chartContainer = document.getElementById('chart_invoice'); // Make sure this is your chart's container ID
                           if (chartContainer) {
                               chartContainer.addEventListener('wheel', function(event) {
                                   console.log('Wheel event captured on chart!');
                                   event.stopPropagation();  // This stops the event from propagating further
                               }, true); // Use capture phase to ensure it catches the event before Google Charts can handle it
                           }



                           AyohaStoreDashboardSaleInfoTopProductMerchantStore(DashboardFilter);
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);













 }


 function Dashboardload_OrderAndPaymentChartx() {
    
    var data = new google.visualization.DataTable();
    data.addRows(4);
    data.addColumn('date', 'Month');
    data.addColumn('number', 'Issued');
    data.addColumn('number', 'Collections');
    data.addRows(4);
    data.setValue(0, 0, new Date(2018, 0));
    data.setValue(1, 0, new Date(2018, 1));
    data.setValue(2, 0, new Date(2018, 2));
    data.setValue(3, 0, new Date(2018, 3));
    // data.setValue(4, 0, new Date(2018, 4));
    // data.setValue(5, 0, new Date(2018, 5));
    // data.setValue(6, 0, new Date(2018, 6));
    // data.setValue(7, 0, new Date(2018, 7));
    // data.setValue(8, 0, new Date(2018, 8));
    // data.setValue(9, 0, new Date(2018, 9));
    // data.setValue(10, 0, new Date(2018, 10));
    // data.setValue(11, 0, new Date(2018, 11));

    var options = {
        title: 'Ayoha Store Cart and Payment',
        curveType: 'function',
        backgroundColor: 'transparent',
        // legend: { position: 'right' }, pointSize: '5',
        legend: { position: "none" },
       // width: '100%',
        width: 1100,
        height: 550,
      //  chartArea: {width: '80%', height: '80%'},
      animation: { duration: 250 },
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 10.0
            },
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_invoice'));
    var index = 0;
    var indexs = 0;
    // var chartData = [5000.50, 18296.13, 34216.80,42543.70,82654.20,62548.69,19256.00,14025.12,20000.40,25367.56,100586.10,86256.40] 
    // var chartDatas = [4879.30, 18200.70, 30986.00, 20154.73, 75462.80, 62500.90, 15256.50, 14024.40, 19000.30, 25222.10, 99000.15, 81000.20]
   
    var chartData = [5000.50, 18296.13, 34216.80,42543.70] 
    var chartDatas = [4879.30, 18200.70, 30986.00, 20154.73]


    var drawChartInvoce = function () {
        if (index < chartData.length) {
            data.setValue(index, 1, chartData[index++]);
         
            chart.draw(data, options);
           
        }
      
    }


    var drawChartInvoce2 = function () {
      //  console.log('drawChart index ' + indexs);
        if (indexs < chartData.length) {
            data.setValue(indexs, 2, chartDatas[indexs++]);
           
            chart.draw(data, options);
           
        }
       
    }

     



        google.visualization.events.addListener(chart, 'animationfinish', drawChartInvoce);
        google.visualization.events.addListener(chart, 'animationfinish', drawChartInvoce2);
        chart.draw(data, options);
      
      
        drawChartInvoce();
        drawChartInvoce2();

    }






    function AyohaStoreDashboardSaleInfoTopProductMerchantStore(DashboardFilter){
        

        _DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore.getProxy().setExtraParam('DashboardFilter', DashboardFilter);
        _DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Dashboard/AyohaStoreDashboardSaleInfoTopProductMerchant');
        _DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore.load();
        
    
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getCmp('DashboardList_DashboardSaleInfoTopProductMerchant').setStore(_DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore)
            
        // alert(_DataStore_AyohaStoreDashboardSaleInfoTopProductMerchantStore.getCount())
      
            Ext.Viewport.setMasked(false);
    
    
    
    
    
    
    
        });
        task.delay(500);
    }




    function Dashboardchart_MembershipStatusBarChartCount(){
        drawChart_MembershipStatusBarChartCount();
        let chart;
        let apiData;

        async function drawChart_MembershipStatusBarChartCount() {

   // Fetch the API data
   apiData = await fetchData();

   // Prepare data and colors
   const labels = [];
   const dataValues = [];
   const backgroundColors = [];
   const statusColors = {
       'APPROVED': '#4CAF50',
       'EXPIRED': '#FF9800',
       'REJECTED': '#F44336',
       'New': '#2196F3',
       'UNSUBSCRIBE': 'grey'
   };

   apiData.forEach(item => {
       const status = item.MembershipStatus;
       labels.push(capitalizeFirstLetter(status.toLowerCase()));
       dataValues.push(item.StatusCount);
       backgroundColors.push(statusColors[status] || '#000000');
   });

   // Chart.js setup
   const ctx = document.getElementById('chart_MembershipStatusBarChart').getContext('2d');
   chart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: labels,
           datasets: [{
               label: 'Status Count',
               data: dataValues,
               backgroundColor: backgroundColors,
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           },
           plugins: {
               legend: {
                   display: false
               },
               tooltip: {
                   callbacks: {
                       label: function(context) {
                           return `${context.dataset.label}: ${context.raw}`;
                       }
                   }
               },
               datalabels: {
                   anchor: 'end',
                   align: 'start',
                   formatter: function(value, context) {
                       return value;
                   },
                   color: '#000', // Set the color of the label
                   font: {
                       weight: 'bold',
                       size: 14,
                   }
               }
           },
           animation: {
               duration: 1000, // Animation duration in milliseconds
               easing: 'easeOutQuad',  // Animation style
               onComplete: function() {
                   // Animation complete callback if needed
               }
           }
       },
       plugins: [ChartDataLabels] // Add the ChartDataLabels plugin
   });

   // Add a 'click' event listener
   document.getElementById('chart_MembershipStatusBarChart').onclick = function(evt) {
       const activePoints = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
       if (activePoints.length) {
           const index = activePoints[0].index;
           const selectedStatus = chart.data.labels[index];
           const selectedCount = chart.data.datasets[0].data[index];
           // Replace the alert with any action you want to perform on bar click
           alert('You selected: ' + selectedStatus + ' with count: ' + selectedCount);
       }
   };
}

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
Dashboard_top6Membership();
async function fetchData() {
   const response = await fetch(GetAPIurl()+'Memberships/MembershipsDashboardApprovalStatusCount', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           "enterpriseAccNo": GetEnterpriseAccNo(),
          // "Year": GetCurrentYear()
       })
   });
   const jsonData = await response.json();
   return jsonData.results; // Assuming 'results' is the correct data array
}








    }
    




   
    













    function ReloadDashboard_top6Membership() {
   








  
        arrSubAccNo.length=0;
        google.charts.load('current', {
            packages: ['corechart']
        }).then(function () {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Point/Transactions');
         //   data.addColumn('number', 'id');
            var countMembership = 0;
            var entAccNo = GetEnterpriseAccNo();
            var api_url = GetAPIurl() + 'AyohaRewardPoint/AyohaRewardPointGraphByEnterpriseAccNo?EnterpriseAccNo=' + entAccNo;
    
            $.ajax({
                url: api_url,
                contentType: "application/json",
                dataType: 'json',
                success: function (result) {
                    console.log(result.total);
    
    
                    for (i = 0; i < result.total; i++) {
                        countMembership++;
                        var strData = JSON.parse(JSON.stringify(result.results[i]))
                       
                        var countint = parseInt(strData.CountsPointCount)
                        var gambor = strData.Photo.replace("https://setkita.com/AyohaImgCard/AyohaUserPicProfile/", "");
                        arrSubAccNo.push(strData.SubscriberAccNo);
                       // data.addRow([strData.AccountName, 'clone_old.png', countint]);
                        data.addRow([{ v: capitalizeFirstLetter(strData.AccountName), p: { thumb: gambor } }, countint]);
    
                        var view = new google.visualization.DataView(data);
                        view.setColumns([0, 1,
                                         { calc: "stringify",
                                           sourceColumn: 1,
                                           type: "string",
                                           role: "annotation" },
                                         ]);
    
                        var options = {
                            legend: 'none',
                            //width: 950,
                            width: 850,
                            bar: { groupWidth: "60%" },
                            //animation: {
                            //    startup: true,
                            //    duration: 2500,
                            //    easing: 'out'
                            //},
                            vAxis: { 
                                minValue: 0 ,
                                gridlines: {
                                    color: 'transparent'
                                }
                            },
                           // colors: ['#E0B0FF'],
                            colors:['#be2ed6'],
                            legend: { position: "none" }, backgroundColor: 'transparent',
                        };
    
                      
    
                        //var container = document.getElementById('chart_top6Membership');
                        // var containerBounds = container.getBoundingClientRect();
                        // var chart = new google.visualization.ColumnChart(container);
    
                        // google.visualization.events.addListener(chart, 'ready', function () {
                        //     var chartLayout = chart.getChartLayoutInterface();
    
                        //     for (var ii = 0; ii < data.getNumberOfRows() ; ii++) {
                        //         var barBounds = chartLayout.getBoundingBox('bar#0#' + ii);
                        //        // var path = 'http://findicons.com/files/icons/512/star_wars/32/';
                        //         var path = 'https://setkita.com/AyohaImgCard/AyohaUserPicProfile/';
                        //         var thumb = container.appendChild(document.createElement('img'));
                        //         thumb.width = 52;
                        //         thumb.height = 52;
                        //         thumb.id =ii;
                        //         thumb.src = path + data.getProperty(ii, 0, 'thumb');
                        //         thumb.style.position = 'absolute';
                        //         thumb.style.border = "1px solid purple";
                        //         thumb.style.borderRadius = "50%";
                        //       //  thumb.style.zIndex = "-1";
    
                             
                        //         thumb.style.top = (barBounds.top + containerBounds.top - 125) + 'px';
                        //        // thumb.style.right = (barBounds.right - containerBounds.right - (barBounds.width / 2) - 500) + 'px';
                        //        //// thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width / 2) - 795) + 'px';
                               
                        //        thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width /2) - (window.innerWidth-645)) + 'px';
                        //         thumb.addEventListener('click', function handleClick(event) {
                        //          FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[event.target.id]);
                        //          //  alert((barBounds.left + containerBounds.left + (barBounds.width /2) - (window.innerWidth-810))); 
                        //          //  alert( console.log(e.target.id); );
                        //           // alert('element clicked-'+ arrSubAccNo[event.target.id]);
                        //           });
                            
                            
                        //     }
                        // });
    
    
                        function selectHandler() {
                            var selectedItem = chart.getSelection()[0];
                            if (selectedItem) {
                                LoadingPanelShow(getLoadingIcon(), 'Loading....');
                              var topping = data.getValue(selectedItem.row,0);
                              //console.log('The user selected ' + arrSubAccNo[selectedItem.row] );
                              FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[selectedItem.row]);
                            }
                          }
                  
                        google.visualization.events.addListener(chart, 'select', selectHandler);   
                        chart.draw(view, options);
                        
                    }
    
                  
    if(countMembership>0){
       // document.getElementById("imgDashboardNoMembership").style.display = "none";      
        Ext.getCmp('htmlDashboard_ActiveMembershipCountLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Top ' + countMembership + ' Active Membership !</b></div>');
      //  Ext.getCmp('ContainerDashboardInvoiceStatusOverDue').setHidden(false);  
        Ext.getCmp('DashboardNoMembership').setHidden(true);
    
        
        //  var element = document.getElementById("DashboardNoMembership");
        //  element.remove();
        //  document.getElementById('imgDashboardNoMembership').style.height = "0px";  
        //  document.getElementById('imgDashboardNoMembership').style.width = "0px";  
        
            
    }else{
        Ext.getCmp('htmlDashboard_ActiveMembershipCountLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>No transaction from members yet.Let Promote our membership card!</b></div>');
      //  Ext.getCmp('ContainerDashboardInvoiceStatusOverDue').setHidden(true);
        Ext.getCmp('DashboardNoMembership').setHtml('<img id="imgDashboardNoMembership" src="resources/icons/notop6.png" alt="Girl in a jacket" style="width:400px;height:300px;"></img>');   
        Ext.getCmp('DashboardNoMembership').setHidden(false);    
    }
                  
                   
    
    
                }
            })
    
    
    
    
        });
    }




    var arrSubAccNo=[];
    function Dashboard_top6Membership() {

       
         arrSubAccNo.length=0;

         google.charts.load('current', {
             packages: ['corechart']
         }).then(function () {
             var data = new google.visualization.DataTable();
             data.addColumn('string', 'X');
             data.addColumn('number', 'Point/Transactions');
             
             var countMembership = 0;
             var entAccNo = GetEnterpriseAccNo();
             var api_url = GetAPIurl() + 'AyohaRewardPoint/AyohaRewardPointGraphByEnterpriseAccNo?EnterpriseAccNo=' + entAccNo;
         
             $.ajax({
                 url: api_url,
                 contentType: "application/json",
                 dataType: 'json',
                 success: function (result) {
                     console.log(result.total);
         
                     for (i = 0; i < result.total; i++) {
                         countMembership++;
                         var strData = JSON.parse(JSON.stringify(result.results[i]));
                         
                         var countint = parseInt(strData.CountsPointCount);
                         var gambor = strData.Photo.replace("https://setkita.com/AyohaImgCard/AyohaUserPicProfile/", "");
                         arrSubAccNo.push(strData.SubscriberAccNo);
         
                         data.addRow([{ v: capitalizeFirstLetter(strData.AccountName), p: { thumb: gambor } }, countint]);
         
                         var view = new google.visualization.DataView(data);
                         view.setColumns([0, 1, {
                             calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation"
                         }]);
         
                         var options = {
                             legend: 'none',
                             width: '100%',  // Set width to 100% to make the chart responsive
                             height: 'auto',  // Adjust height accordingly
                             bar: { groupWidth: "70%" },
                             vAxis: {
                                 minValue: 0,
                                 gridlines: {
                                     color: 'transparent'
                                 }
                             },
                             colors: ['#be2ed6'],
                             legend: { position: "none" },
                             backgroundColor: 'transparent'
                         };
         
                         var container = document.getElementById('chart_top6Membership');
                         var containerBounds = container.getBoundingClientRect();
                         var chart = new google.visualization.ColumnChart(container);
         
                        //  google.visualization.events.addListener(chart, 'ready', function () {
                        //      var chartLayout = chart.getChartLayoutInterface();
         
                            //  for (var ii = 0; ii < data.getNumberOfRows(); ii++) {
                            //      var barBounds = chartLayout.getBoundingBox('bar#0#' + ii);
                            //      var path = 'https://setkita.com/AyohaImgCard/AyohaUserPicProfile/';
                            //      var thumb = container.appendChild(document.createElement('img'));
         
                            //      thumb.width = 52;
                            //      thumb.height = 52;
                            //      thumb.id = ii;
                            //      thumb.src = path + data.getProperty(ii, 0, 'thumb');
                            //      thumb.style.position = 'absolute';
                            //      thumb.style.border = "1px solid purple";
                            //      thumb.style.borderRadius = "50%";
         
                            //      // Adjust top and left positions based on the parent container and bar's dimensions
                               
                            //    //  position: absolute; border: 1px solid purple; border-radius: 50%; bottom: 10.889px; left: 167.125px;
                            //   // 80px=640.8px
                            //   //276.0000114440918=barBounds.left
                            //   //-36.47500228881836=containerBounds.left
                            //   //398=barBounds.width
                            //  // 111.213px=161
                            //    console.log(barBounds.left)
                            //    console.log(containerBounds.left)
                            //    console.log(barBounds.width)
                            //      thumb.style.top = ((barBounds.top + containerBounds.top)-560) - (thumb.height / 2) + 'px';
                            //      thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width / 2) - thumb.width / 2) + 'px';
         
                            //      thumb.addEventListener('click', function handleClick(event) {
                            //          FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[event.target.id]);
                            //      });
                            //  }



                            //  for (var ii = 0; ii < data.getNumberOfRows(); ii++) {
                            //     var barBounds = chartLayout.getBoundingBox('bar#0#' + ii);
                            //     var path = 'https://setkita.com/AyohaImgCard/AyohaUserPicProfile/';
                            //     var thumb = container.appendChild(document.createElement('img'));
                            
                            //     thumb.width = 52; // Thumbnail width
                            //     thumb.height = 52; // Thumbnail height
                            //     thumb.id = ii;
                            //     thumb.src = path + data.getProperty(ii, 0, 'thumb');
                            //     thumb.style.position = 'absolute';
                            //     thumb.style.border = "1px solid purple";
                            //     thumb.style.borderRadius = "50%";
                            
                            //     // Calculate the top and left position for centering the thumbnail on the bar
                            //   //  thumb.style.top = (barBounds.top + containerBounds.top - thumb.height - 10) + 'px'; // Adjusted for better centering
                            //    // thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width / 2) - (thumb.width / 2)) + 'px';
                            
                            //       // Calculate the top and left position for positioning the thumbnail at the top of the bar
                            //    thumb.style.top = (barBounds.top + containerBounds.top - thumb.height - 540) + 'px'; // Positioned at the top of the bar with a 5px gap
                            //    thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width / 2) - (thumb.width / 2)) + 'px';
                            //     // Add click event listener for each thumbnail
                            //     thumb.addEventListener('click', function handleClick(event) {
                            //         FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[event.target.id]);
                            //     });
                            // }
                            
                        // });
         
                         function selectHandler() {
                             var selectedItem = chart.getSelection()[0];
                             if (selectedItem) {
                                 LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                 FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[selectedItem.row]);
                             }
                         }
         
                         google.visualization.events.addListener(chart, 'select', selectHandler);
                         chart.draw(view, options);
         
                         // Add an event listener for window resize to redraw the chart
                         window.addEventListener('resize', function() {
                             chart.draw(view, options);
                         });



                                        
    
                   
                    
                     }

                     if(countMembership>0){
                        // document.getElementById("imgDashboardNoMembership").style.display = "none";      
                         Ext.getCmp('htmlDashboard_ActiveMembershipCountLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Top ' + countMembership + ' Active Membership !</b></div>');
                        // Ext.getCmp('ContainerDashboardInvoiceStatusOverDue').setHidden(false);  
                         Ext.getCmp('DashboardNoMembership').setHidden(true);
                     
                         
                         //  var element = document.getElementById("DashboardNoMembership");
                         //  element.remove();
                         //  document.getElementById('imgDashboardNoMembership').style.height = "0px";  
                         //  document.getElementById('imgDashboardNoMembership').style.width = "0px";  
                         
                             
                     }else{
                         Ext.getCmp('htmlDashboard_ActiveMembershipCountLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>No transaction from members yet.Let Promote our membership card!</b></div>');
                       //  Ext.getCmp('ContainerDashboardInvoiceStatusOverDue').setHidden(true);
                         Ext.getCmp('DashboardNoMembership').setHtml('<img id="imgDashboardNoMembership" src="resources/icons/notop6.png" alt="Girl in a jacket" style="width:400px;height:300px;"></img>');   
                         Ext.getCmp('DashboardNoMembership').setHidden(false);    
                     }
                    
                     Dashboard_LoadBirthDay();
                 }
             });
         });
         



















         return
         google.charts.load('current', {
             packages: ['corechart']
         }).then(function () {
             var data = new google.visualization.DataTable();
             data.addColumn('string', 'X');
             data.addColumn('number', 'Point/Transactions');
          //   data.addColumn('number', 'id');
             var countMembership = 0;
             var entAccNo = GetEnterpriseAccNo();
             var api_url = GetAPIurl() + 'AyohaRewardPoint/AyohaRewardPointGraphByEnterpriseAccNo?EnterpriseAccNo=' + entAccNo;
     
             $.ajax({
                 url: api_url,
                 contentType: "application/json",
                 dataType: 'json',
                 success: function (result) {
                     console.log(result.total);
     
     
                     for (i = 0; i < result.total; i++) {
                         countMembership++;
                         var strData = JSON.parse(JSON.stringify(result.results[i]))
                        
                         var countint = parseInt(strData.CountsPointCount)
                         var gambor = strData.Photo.replace("https://setkita.com/AyohaImgCard/AyohaUserPicProfile/", "");
                         arrSubAccNo.push(strData.SubscriberAccNo);
                        // data.addRow([strData.AccountName, 'clone_old.png', countint]);
                         data.addRow([{ v: strData.AccountName, p: { thumb: gambor } }, countint]);
     
                         var view = new google.visualization.DataView(data);
                         view.setColumns([0, 1,
                                          { calc: "stringify",
                                            sourceColumn: 1,
                                            type: "string",
                                            role: "annotation" },
                                          ]);
     
                         var options = {
                             legend: 'none',
                             //width: 950,
                             width: 850,
                             bar: { groupWidth: "60%" },
                             //animation: {
                             //    startup: true,
                             //    duration: 2500,
                             //    easing: 'out'
                             //},
                             vAxis: { 
                                 minValue: 0 ,
                                 gridlines: {
                                     color: 'transparent'
                                 }
                             },
                            // colors: ['#E0B0FF'],
                             colors:['#be2ed6'],
                             legend: { position: "none" }, backgroundColor: 'transparent',
                         };
     
                       
     
                         var container = document.getElementById('chart_top6Membership');
                         var containerBounds = container.getBoundingClientRect();
                         var chart = new google.visualization.ColumnChart(container);
     
                         google.visualization.events.addListener(chart, 'ready', function () {
                             var chartLayout = chart.getChartLayoutInterface();
     
                             for (var ii = 0; ii < data.getNumberOfRows() ; ii++) {
                                 var barBounds = chartLayout.getBoundingBox('bar#0#' + ii);
                                // var path = 'http://findicons.com/files/icons/512/star_wars/32/';
                                 var path = 'https://setkita.com/AyohaImgCard/AyohaUserPicProfile/';
                                 var thumb = container.appendChild(document.createElement('img'));
                                 thumb.width = 52;
                                 thumb.height = 52;
                                 thumb.id =ii;
                                 thumb.src = path + data.getProperty(ii, 0, 'thumb');
                                 thumb.style.position = 'absolute';
                                 thumb.style.border = "1px solid purple";
                                 thumb.style.borderRadius = "50%";
                               //  thumb.style.zIndex = "-1";
     
                              
                                 thumb.style.top = (barBounds.top + containerBounds.top - 125) + 'px';
                                // thumb.style.right = (barBounds.right - containerBounds.right - (barBounds.width / 2) - 500) + 'px';
                                //// thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width / 2) - 795) + 'px';
                                
                                thumb.style.left = (barBounds.left + containerBounds.left + (barBounds.width /2) - (window.innerWidth-645)) + 'px';
                                 thumb.addEventListener('click', function handleClick(event) {
                                  FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[event.target.id]);
                                  //  alert((barBounds.left + containerBounds.left + (barBounds.width /2) - (window.innerWidth-810))); 
                                  //  alert( console.log(e.target.id); );
                                   // alert('element clicked-'+ arrSubAccNo[event.target.id]);
                                   });
                             
                             
                             }
                         });
     
     
                         function selectHandler() {
                             var selectedItem = chart.getSelection()[0];
                             if (selectedItem) {
                                 LoadingPanelShow(getLoadingIcon(), 'Loading....');
                               var topping = data.getValue(selectedItem.row,0);
                               //console.log('The user selected ' + arrSubAccNo[selectedItem.row] );
                               FloatPanel_SubscriberListMemberShow_Dashboard(arrSubAccNo[selectedItem.row]);
                             }
                           }
                   
                         google.visualization.events.addListener(chart, 'select', selectHandler);   
                         chart.draw(view, options);
                         
                     }
     
                   
     if(countMembership>0){
        // document.getElementById("imgDashboardNoMembership").style.display = "none";      
         Ext.getCmp('htmlDashboard_ActiveMembershipCountLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Top ' + countMembership + ' Active Membership !</b></div>');
         Ext.getCmp('ContainerDashboardInvoiceStatusOverDue').setHidden(false);  
         Ext.getCmp('DashboardNoMembership').setHidden(true);
     
         
         //  var element = document.getElementById("DashboardNoMembership");
         //  element.remove();
         //  document.getElementById('imgDashboardNoMembership').style.height = "0px";  
         //  document.getElementById('imgDashboardNoMembership').style.width = "0px";  
         
             
     }else{
         Ext.getCmp('htmlDashboard_ActiveMembershipCountLbl').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>No transaction from members yet.Let Promote our membership card!</b></div>');
         Ext.getCmp('ContainerDashboardInvoiceStatusOverDue').setHidden(true);
         Ext.getCmp('DashboardNoMembership').setHtml('<img id="imgDashboardNoMembership" src="resources/icons/notop6.png" alt="Girl in a jacket" style="width:400px;height:300px;"></img>');   
         Ext.getCmp('DashboardNoMembership').setHidden(false);    
     }
                   
                    
     
     
                 }
             })
     
     
     
     
             //data.addRows([
             //  [{ v: 'a', p: { thumb: 'clone_old.png' } }, 20],
             //  [{ v: 'b', p: { thumb: 'boba_fett.png' } }, 15],
             //  [{ v: 'c', p: { thumb: 'jango_fett.png' } }, 30],
             //  [{ v: 'd', p: { thumb: 'clone_3.png' } }, 5],
             //  [{ v: 'e', p: { thumb: 'clone_2.png' } }, 25],
             //  [{ v: 'f', p: { thumb: 'clone_2.png' } }, 29]
             //]);
     
             Dashboard_LoadBirthDay();
         });
     }



     function Dashboardchart_MembershipLevelPieChartCount(){
        drawChart_MembershipLevelPieChartCount();
        let chart;
        let apiData;
        
        async function drawChart_MembershipLevelPieChartCount() {
        
            // Fetch the API data
            apiData = await fetchData();
        
            // Prepare data and colors
            const labels = [];
            const dataValues = [];
            const backgroundColors = [];
            const statusColors = {};
        
            apiData.forEach(item => {
                const status = item.MembershipLevel;
                labels.push(status.toUpperCase());
                dataValues.push(item.StatusCount);
        
                // Check if the status already has an assigned color
                if (!statusColors[status]) {
                    // Generate a random color and assign it to the status
                    statusColors[status] = getRandomColor();
                }
        
                backgroundColors.push(statusColors[status]);
            });
        
            // Chart.js setup
            const ctx = document.getElementById('chart_MembershipLevelPieChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'doughnut',  // Chart type is 'pie'
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Membership Type',
                        data: dataValues,
                        backgroundColor: backgroundColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    cutout: '50%',  // Control the size of the hole in the middle
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top' // Position of the legend
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw}`;
                                }
                            }
                        },
                        datalabels: {
                            formatter: function(value, context) {
                                return value;
                            },
                            color: '#000', // Set the color of the label
                            font: {
                                weight: 'bold',
                                size: 14,
                            }
                        }
                    },
                    animation: {
                        duration: 1000, // Animation duration in milliseconds
                        easing: 'easeOutQuad',  // Animation style
                        onComplete: function() {
                            // Animation complete callback if needed
                        }
                    }
                },
                plugins: [ChartDataLabels] // Add the ChartDataLabels plugin
            });
        
            // Add a 'click' event listener
            document.getElementById('chart_MembershipLevelPieChart').onclick = function(evt) {
                const activePoints = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
                if (activePoints.length) {
                    const index = activePoints[0].index;
                    const selectedStatus = chart.data.labels[index];
                    const selectedCount = chart.data.datasets[0].data[index];
                    // Replace the alert with any action you want to perform on slice click
                    alert('You selected: ' + selectedStatus + ' with count: ' + selectedCount);
                }
            };
        }
        
       
        
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        async function fetchData() {
            const response = await fetch(GetAPIurl()+'Memberships/MembershipsDashboardMembershipLevelCount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "enterpriseAccNo": GetEnterpriseAccNo(),
                    // "Year": GetCurrentYear()
                })
            });
            const jsonData = await response.json();
            return jsonData.results; // Assuming 'results' is the correct data array
        }
        Dashboard_AyohaMerchantReview_Dashboard_AyohaMerchantReview_CalculateRating();
        
        
     }



     function Dashboardchart_MembershipGrowthChartCount(){
      // Call the function to draw the chart
drawChart_MembershipGrowthOverTime();
      
      
      
      
        let chart;

async function drawChart_MembershipGrowthOverTime() {

    // Fetch the API data
    const apiData = await fetchData();

    // Prepare data
    const labels = [];
    const dataValues = [];

    apiData.forEach(item => {
       // alert(item.MembershipCount)
        labels.push(item.Month);  // Assuming the API returns 'Month' field
        dataValues.push(item.StatusCount);  // Assuming the API returns 'MembershipCount' field
    });

    // Chart.js setup
    const ctx = document.getElementById('membershipGrowthChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',  // Line chart
        data: {
            labels: labels,  // Months
            datasets: [{
                label: 'Membership Growth Over Time',
                data: dataValues,
                borderColor: 'rgba(75, 0, 130, 1)',  // Dark purple for the line color
                backgroundColor: 'rgba(75, 0, 130, 0.2)',  // Dark purple with transparency for the fill
                borderWidth: 2,
                fill: true,
                tension: 0.4  // Curve smoothing
            }]
        },
        options: {
         // responsive: true,  // Ensures the chart resizes with the window
         maintainAspectRatio: false,  // Allows the chart to fill the container without maintaining aspect ratio
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,  // Display legend
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Count: ${context.raw}`;
                        }
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'start',
                    formatter: function(value, context) {
                        return value;
                    },
                    color: '#000', // Label color
                    font: {
                        weight: 'bold',
                        size: 14,
                    }
                }
            },
            animation: {
                duration: 500, // Animation duration in milliseconds
                easing: 'easeOutQuad',  // Animation style
                onComplete: function() {
                    // Callback if needed after animation
                }
            }
        },
        plugins: [ChartDataLabels] // Add the ChartDataLabels plugin
    });

    // Add a 'click' event listener for interaction
    document.getElementById('membershipGrowthChart').onclick = function(evt) {
        const activePoints = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
        if (activePoints.length) {
            const index = activePoints[0].index;
            const selectedMonth = chart.data.labels[index];
            const selectedCount = chart.data.datasets[0].data[index];
            // Replace the alert with any action you want to perform on point click
            alert('You selected: ' + selectedMonth + ' with count: ' + selectedCount);
        }
    };
}

// Function to fetch data from the API
async function fetchData() {
    const response = await fetch(GetAPIurl() + 'Memberships/MembershipsDashboardMembershipGrowthCount', {  // Adjust API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "enterpriseAccNo": GetEnterpriseAccNo(),
            // Add other filters or parameters if necessary
        })
    });
    Dashboardchart_MembershipLevelPieChartCount();
    const jsonData = await response.json();
    return jsonData.results;  // Assuming 'results' is the correct data array
    
   
}



     }


