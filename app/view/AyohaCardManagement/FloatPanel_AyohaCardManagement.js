
Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement', {

});

var _FloatPanel_AyohaCardManagement;


var isFloatPanel_AyohaCardManagementOpen = 'N';



























function FloatPanel_AyohaCardManagement() {

    _FloatPanel_AyohaCardManagement =
    Ext.create('Ext.Container', {
        // zIndex: 150,
        zIndex: 110,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaCardManagementID',
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
                type: 'popOut',
              //  direction: 'left',
               // easing: 'cubic-bezier(.7,0,.7,1)',
                duration: 250          
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_AyohaCardManagement.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
                           
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaCardManagement.hide(Ext.fx.Animation({
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
                height: '100%',
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
                            {

                                xtype: 'container',
                                width: '100%',
                                height:60,
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaCardManagementHeader',
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
                                              //  height: 30,
                                                width: 20,
                                            },

                                            {
                                                margin: '0 0 0 0',
                                                id: 'htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt',
                                                html: '<font size=4 color=black><b>Loyalty Campaign Management</b></font>'
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
   // id: 'htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtStamp',
    id: 'htmlFloatPanel_AyohaCardManagementSearchTxtGeneral',
html:'<div class="search-container">'+
'<input type="text" id="input-FloatPanel_AyohaCardManagementSearchTxtGeneral"  placeHolder="Search (Campaign Name)" class="search-input" >'+
'</div>'
},

{
    hidden:true,
    id: 'htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtPoint',
html:'<div class="search-container">'+
'<input type="text" id="input-FloatPanel_AyohaCardManagementSearchTxtPoint"  placeHolder="Search (Campaign Name)" class="search-input" >'+
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
                                                        id: 'btnFloatPanel_AyohaCardManagementBack',
                                                        height: 30,
                                                        width: 35,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            FloatPanel_AyohaCardManagementHide();
                                                            FloatPanel_AyohaCardManagement_AddCardHide();
                                                            //_FloatPanel_AyohaCardManagement.hide(Ext.fx.Animation({
                                                            //    type: 'slideOut',
                                                            //    direction: 'left',
                                                            //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                            //    duration: 250

                                                            //}));
                                                          
                                                        }
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
                                                                  id: 'containerFloatPanel_AyohaCardManagementHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_AyohaCardManagementHaiUser',
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
                                                                          id: 'containerFloatPanel_AyohaCardManagementeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_AyohaCardManagementeWallet',
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
                                                               id: 'containerFloatPanel_AyohaCardManagementPictureUser',
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
                                                                       id: 'btnFloatPanel_AyohaCardManagementInfo',
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


 {
     xtype: 'spacer',
    // height: 30,
     width: 20,
 },








                                       ]

                            },











                              ///////////////////TAB PANEL///////////////////////////////////////////////////////////////////////////////////////////

                              {
                                  xtype: 'tabpanel',
                                  // hidden: true,
                                  //  hidden:true,
                                  id: 'tabpanelFloatPanel_AyohaCardManagement',
                                  // style: 'border-top:2px solid #ECF0F1;background: white;',
                                  // style: 'background-color: black;',
                                  // margin: '-20 0 0 -26',
                                  margin: '0 0 0 0',

                                  //width: 200,
                                  width: '100%',
                                  height: '100%',
                                  //height: 120,
                                  //height: 50,
                                  //  zIndex: 200,
                                  //  docked: 'bottom',
                                  tabBarPosition: 'top',
                                  ui: 'plain',
                                  // docked: 'bottom',

                                  initialize: function (c) {
                                      //this.getTabBar().hide();


                                  },



                                  items: [

//////////////////////////////////////////////stamp

                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_AyohaCardManagementStampCardList',
                                           width: '100%',
                                           height: '100%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_AyohaCardManagementCardLis',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           //listeners: {
                                           //    initialize: function (c) {

                                           //        this.element.on({
                                           //            swipe: function (e, node, options) {
                                           //                if (e.direction == "left") {
                                           //                    //  alert("Hey! I swipe left");

                                           //                } else {
                                           //                    //  alert("Hey! I swipe right");
                                           //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
                                           //                }
                                           //            }
                                           //        });
                                           //    }
                                           //},

                                           items: [


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 height: '100%',
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
                                                          height: 65,
                                                          hidden:true,
                                                          margin: '10 0 0 0',                                                        
                                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                          style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 0px 0px;',
                                                         // style: 'background-color:transparent',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [
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
                                                                         {
                                                                             margin: '10 0 0 0',
                                                                             html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">LOYALTY STAMP CAMPAIGN</div>',
                                                                         },
                                                                          {
                                                                              margin: '-10 0 0 0',
                                                                              id: 'htmlFloatPanel_AyohaCardManagementCardCount',
                                                                              html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                          },
                                                                    ]
                                                                },

                                                                {
                                                                    xtype: 'container',
                                                                    width: '40%',

                                                                    margin: '0 0 0 0',
                                                                    //style: {
                                                                    //    // background: '#D25959',
                                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                                    //    // border: '2px'
                                                                    //},
                                                                   
                                                                   style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'center',
                                                                    },
                                                                    items: [
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 60,
                                                                              width: 60,

                                                                              margin: '2 0 0 0',
                                                                              id: 'btnFloatPanel_AyohaCardManagementCardImage',
                                                                              //badgeText: "2",
                                                                              html: '<img src="resources/icons/StampCardChopPurplenew.png" width="50" height="50" alt="Company Name">',
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
                                                      //{
                                                      //    xtype: 'panel',
                                                      //    height: 10
                                                      //},

                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                            hidden:true,
                                                             // style: 'background-color:black;color:white',
                                                             style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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

                                                                         width: '50%',
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Loyalty Stamp Card</div>'
                                                                     },

                                                                     //{

                                                                     //    width: '50%',
                                                                     //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                                     //},
                                                                     //     //{
                                                                          //    margin: '-8 0 0 0',

                                                                          //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                          //},
                                                                          // {
                                                                          //     margin: '-7 0 0 0',

                                                                          //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                          // },


                                                             ]
                                                         },

                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          height: '100%',
                                                          //store: 'StampCampaignLoadByEnterpriseAccNoStore',
                                                          store:_DataStore_StampCampaignLoadByEnterpriseAccNoStore,
                                                          id: 'FloatPanel_AyohaCardManagementLoyaltyCardID',
                                                          mode: 'SINGLE',
                                                          hidden:true,
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
                                                            itemTpl: '<div class="myContent">' +
                                                               
                                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                      + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>Stamp Campaign Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StampCampaignName}</div>'
                                                                      + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Card Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StampCardType}</div>'
                                                                       + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                                       + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                                      + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscribers</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CountMembers}</div>'
                                                                       + '<br>'
                                                                       + '<br>'
                                                                   + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_PreviewCardShow(' + "'" + '{StampCampaignCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{StampCardType}' + "'" + ',' + "'" + '{StartDate}' + "'" + ',' + "'" + '{EndDate}' + "'" + ',' + "'" + '{StampCampaignName}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview Stamp Card</div></div>'
                                                                      + '<br>'
                                                                      + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_Staging_EditCardShow(' + "'" + '{StampCampaignCode}' + "'" + ',' + "'" + '{StampCampaignName}' + "'" + ',' + "'" + '{StampCardType}' + "'" + ',' + "'" + '{StartDate}' + "'" + ',' + "'" + '{EndDate}' + "'" + ',' + "'" + '{RowStatus}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{CreatedByAccNo}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{ModifiedBy}' + "'" + ',' + "'" + '{ModifiedDate}' + "'" + ',' + "'" + '{StartDateOnly}' + "'" + ',' + "'" + '{EndDateOnly}' + "'" + ',' + "'" + '{StampCardBackground}' + "'" + ',' + "'" + '{isAnimated}' + "'" + ',' + "'" + '{AnimatedInterval}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ','+ "'" + '{StampRuleAmount}' + "'" + ',' + "'" + '{isStampRulePopUp}' + "'" + ',' + "'" + '{LoyaltyCustomerType}' + "'" + ',' + "'" + '{StampCampaignPremiumQRCode}' + "'" + ',' + "'" + '{StrEndDate}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'                                                         
                                                                      + '<br>'
                                                                      + '<br>'
                                                                      + '</div>' +
                                                            
                                       
                                                              '</div>',
                                                          width: '100%',
                                                         

                                                      },


                                                      {
                                                        xtype: 'list',
                                                        //flex:1,
                                                        height: '100%',
                                                        //store: 'StampCampaignLoadByEnterpriseAccNoStore',
                                                        store:_DataStore_StampCampaignLoadByEnterpriseAccNoStore,
                                                        id: 'FloatPanel_AyohaCardManagementLoyaltyCardID_AddtoMembershipcard',
                                                        mode: 'SINGLE',
                                                        hidden:true,
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
                                                          itemTpl: '<div class="myContent">' +
                                                             
                                                                    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                    + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>Stamp Campaign Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StampCampaignName}</div>'
                                                                    + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Card Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StampCardType}</div>'
                                                                     + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                                     + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                                    + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscribers</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CountMembers}</div>'
                                                                     + '<br>'
                                                                     + '<br>'
                                                                 + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_PreviewCardShow(' + "'" + '{StampCampaignCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{StampCardType}' + "'" + ',' + "'" + '{StartDate}' + "'" + ',' + "'" + '{EndDate}' + "'" + ',' + "'" + '{StampCampaignName}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview Stamp Card</div></div>'
                                                                    + '<br>'
                                                                    + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_Staging_EditCardShow(' + "'" + '{StampCampaignCode}' + "'" + ',' + "'" + '{StampCampaignName}' + "'" + ',' + "'" + '{StampCardType}' + "'" + ',' + "'" + '{StartDate}' + "'" + ',' + "'" + '{EndDate}' + "'" + ',' + "'" + '{RowStatus}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{CreatedByAccNo}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{ModifiedBy}' + "'" + ',' + "'" + '{ModifiedDate}' + "'" + ',' + "'" + '{StartDateOnly}' + "'" + ',' + "'" + '{EndDateOnly}' + "'" + ',' + "'" + '{StampCardBackground}' + "'" + ',' + "'" + '{isAnimated}' + "'" + ',' + "'" + '{AnimatedInterval}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ','+ "'" + '{StampRuleAmount}' + "'" + ',' + "'" + '{isStampRulePopUp}' + "'" + ',' + "'" + '{LoyaltyCustomerType}' + "'" + ',' + "'" + '{StampCampaignPremiumQRCode}' + "'" + ',' + "'" + '{StrEndDate}' + "'" + ');" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Add To Membership Card</div></div>'                                                         
                                                                    + '<br>'
                                                                    + '<br>'
                                                                    + '</div>' +
                                                          
                                     
                                                            '</div>',
                                                        width: '100%',
                                                       

                                                    },

                                                 ]
                                             },


                                           ]

                                       },






















//////////////////////////////////////////////point

                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_AyohaCardManagementPointCardListPoint',
                                           width: '100%',
                                           height: '100%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_AyohaCardManagementCardListDetailsPoint',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           //listeners: {
                                           //    initialize: function (c) {

                                           //        this.element.on({
                                           //            swipe: function (e, node, options) {
                                           //                if (e.direction == "left") {
                                           //                    //  alert("Hey! I swipe left");

                                           //                } else {
                                           //                    //  alert("Hey! I swipe right");
                                           //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
                                           //                }
                                           //            }
                                           //        });
                                           //    }
                                           //},

                                           items: [


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 height: '100%',
                                                 style: "background-color: transparent;",
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [
                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 65,
                                                         hidden:true,
                                                         margin: '10 0 0 0',                                                       
                                                         style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 0px 0px;',
                                                        // style: 'background-color:transparent',
                                                         layout: {
                                                             type: 'hbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         items: [
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
                                                                        {
                                                                            margin: '10 0 0 0',
                                                                            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">LOYALTY POINTS CAMPAIGN</div>',
                                                                        },
                                                                         {
                                                                             margin: '-10 0 0 0',
                                                                             id: 'htmlFloatPanel_AyohaCardManagementCardCountPoint',
                                                                             html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                         },
                                                                   ]
                                                               },

                                                               {
                                                                   xtype: 'container',
                                                                   width: '40%',

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
                                                                             xtype: 'button',
                                                                             height: 60,
                                                                             width: 60,

                                                                             margin: '2 0 0 0',
                                                                             id: 'btnFloatPanel_AyohaCardManagementCardImagePoint',
                                                                             //badgeText: "2",
                                                                             html: '<img src="resources/icons/loyaltyPointInconWhite01.png" width="50" height="50" alt="Company Name">',
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
                                                      //{
                                                      //    xtype: 'panel',
                                                      //    height: 10
                                                      //},


                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                             hidden:true,
                                                             // style: 'background-color:black;color:white',
                                                             style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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

                                                                         width: '50%',
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Loyalty Point Card </div>'
                                                                     },


                                                                          //{
                                                                          //    margin: '-8 0 0 0',

                                                                          //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                          //},
                                                                          // {
                                                                          //     margin: '-7 0 0 0',

                                                                          //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                          // },


                                                             ]
                                                         },

                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          height: '100%',
                                                          store: 'PointCampaignLoadByEnterpriseAccNoStore',
                                                          id: 'FloatPanel_AyohaCardManagementLoyaltyCard_Point',
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
                                                        //   style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                        //   itemTpl: '<div class="myContent">' +
                                                            
                                                        //             '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                        //             + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Point Card Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{PointCampaignName}</div>'
                                                        //             + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                        //              + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                        //                + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                                                        //             + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedBy}</div>'
                                                        //             + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscriber</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CountMembers}</div><br>'
                                                        //            //+ '<div style="width:100%;text-align:right;margin:-90px 0px 0px 0px;"><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow({ID})"    class="buttonStampCampaignModelButton" ><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"></button><br><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow({ID})"    class="buttonStampCampaignModelButton" >Setting</button></div>'
                                                        //             + '<div style="width:100%;text-align:right;margin:-200px 0px 0px 0px;"><button   OnClick="FloatPanel_PointManagement_CreatePointShow({ID})"    class="button_AyohaCardManagementListImage" ><img src="resources/icons/generatePoint03.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"></button><br><button   OnClick="FloatPanel_PointManagement_CreatePointShow({ID})"    class="buttonStampCampaignModelButton" >Create Point</button></div><br>'
                                                        //               + '<div style="width:100%;text-align:right;margin:25px 0px 0px 0px;"><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow_val({ID})"    class="button_AyohaCardManagementListImage" ><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"></button><br><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow({ID})"    class="buttonStampCampaignModelButton" >Setting</button></div>'

                                                        //             + '</div>' +                                                          
                                                        //     '</div>',






                                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                            itemTpl: '<div class="myContent">' +
                                                               
                                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                      + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>Point Card Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{PointCampaignName}</div>'
                                                                      + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                                       + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                                       + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                                                                      + '<br>'
                                                                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscribers</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CountMembers}</div>'
                                                                       + '<br>'
                                                                     
                                                                   //    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'
                                                                 //  FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks); FloatLoyaltyCardPointShow(CampaingName, CampaignCode, GetEnterpriseLogoPath(), GetEnterpriseName(), GetEnterpriseAccNo(), EndDate, globalCampaignStartEndDateYesNo, "NotExpired");
                                                                // FloatLoyaltyCardPointShow(CampaingName, CampaignCode, GetEnterpriseLogoPath(), GetEnterpriseName(), GetEnterpriseAccNo(), EndDate, globalCampaignStartEndDateYesNo, "NotExpired");
                                                                   + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatLoyaltyCardPointShow(' + "'" + '{PointCampaignName}' + "'" + ',' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + GetEnterpriseLogoPath() + "'" + ',' + "'" + GetEnterpriseName() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{EndDate}' + "'" + ',' + "'" + '{StrEndDate}' + "'" + ',' + "'" + 'NotExpired' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview Point Card</div></div>'
                                                                      + '<br>'
                                                                      + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_PointManagement_CreatePointShow({ID})"  class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/generatePoint03.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Create Point</div></div>'
                                                                     + '<br>'
                                                                     // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'
                                                                      + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow_val({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'                                                         
                                                                    
                                                                      + '</div>' +
                                                            
                                       
                                                              '</div>',
                                                          width: '100%',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {






                                                          //        //var ID = records.get('ID');
                                                          //        //var PointCampaignCode = records.get('PointCampaignCode');
                                                          //        //var PointCampaignName = records.get('PointCampaignName');
                                                          //        //var StartDate = records.get('StartDate');
                                                          //        //var EndDate = records.get('EndDate');
                                                          //        //var StrEndDate = records.get('StrEndDate');
                                                          //        //var RowStatus = records.get('RowStatus');
                                                          //        //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                          //        //var CreatedByAccNo = records.get('CreatedByAccNo');
                                                          //        //var CreatedBy = records.get('CreatedBy');
                                                          //        //var CreatedDate = records.get('CreatedDate');
                                                          //        //var ModifiedBy = records.get('ModifiedBy');
                                                          //        //var ModifiedDate = records.get('ModifiedDate');
                                                          //        //var Remarks = records.get('Remarks');
                                                          //        //var PointCampaignPremiumQRCode = records.get('PointCampaignPremiumQRCode');
                                                          //        //var TermAndCondition = records.get('TermAndCondition');
                                                          //        //var isPointRulePopUp = records.get('isPointRulePopUp');
                                                          //        //var PointOption = records.get('PointOption');
                                                          //        //var PointAmountEquation = records.get('PointAmountEquation');

                                                              
                                                          //        //if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                                          //        //    MembershipCardCampaingEntitled_InsertUpdate(PointCampaignCode, "Point Reward Loyalty Card");
                                                          //        //    return;
                                                          //        //}


                                                          //        //FloatPanel_AyohaCardManagement_EditCard_PointShow(ID,PointCampaignName, PointCampaignCode, StartDate, EndDate, StrEndDate, RowStatus, EnterpriseAccNo, CreatedByAccNo, CreatedBy, CreatedDate,
                                                          //        //    ModifiedBy, ModifiedDate, Remarks, PointCampaignPremiumQRCode, TermAndCondition, isPointRulePopUp);


                                                          //    },
                                                          //    deselect: function (list, records) {

                                                          //    }
                                                          //},

                                                      },

                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          height: '100%',
                                                          store: 'PointCampaignLoadByEnterpriseAccNoStore',
                                                          id: 'FloatPanel_AyohaCardManagementLoyaltyCard_Point_ForMembershipCardManagement',
                                                          mode: 'SINGLE',
                                                          hidden:true,
                                                          //grouped: true,
                                                          disableSelection: true,
                                                        //   itemTpl: '<div class="myContent">' +

                                                        //             '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                        //             + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Point Card Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{PointCampaignName}</div>'
                                                        //             + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                        //              + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                        //                + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                                                        //             + '<br>'
                                                        //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedBy}</div>'
                                                        //             + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscriber</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">0</div><br>'
                                                        //            //+ '<div style="width:100%;text-align:right;margin:-90px 0px 0px 0px;"><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow({ID})"    class="buttonStampCampaignModelButton" ><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"></button><br><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow({ID})"    class="buttonStampCampaignModelButton" >Setting</button></div>'
                                                        //             //+ '<div style="width:100%;text-align:right;margin:-200px 0px 0px 0px;"><button   OnClick="FloatPanel_PointManagement_CreatePointShow({ID})"    class="button_AyohaCardManagementListImage" ><img src="resources/icons/generatePoint03.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"></button><br><button   OnClick="FloatPanel_PointManagement_CreatePointShow({ID})"    class="buttonStampCampaignModelButton" >Send Point</button></div><br>'
                                                        //             //  + '<div style="width:100%;text-align:right;margin:25px 0px 0px 0px;"><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow_val({ID})"    class="button_AyohaCardManagementListImage" ><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"></button><br><button   OnClick="FloatPanel_AyohaCardManagement_EditCard_PointShow({ID})"    class="buttonStampCampaignModelButton" >Setting</button></div>'

                                                        //             + '</div>' +
                                                        //     '</div>',
                                                        //   width: '100%',












                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          itemTpl: '<div class="myContent">' +
                                                             
                                                                    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                    + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>Point Card Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{PointCampaignName}</div>'
                                                                    + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                                     + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                                     + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                                                                    + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscribers</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CountMembers}</div>'
                                                                     + '<br>'
                                                                   

                                                                 + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatLoyaltyCardPointShow(' + "'" + '{PointCampaignName}' + "'" + ',' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + GetEnterpriseLogoPath() + "'" + ',' + "'" + GetEnterpriseName() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{EndDate}' + "'" + ',' + "'" + '{StrEndDate}' + "'" + ',' + "'" + 'NotExpired' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview Point Card</div></div>'
                                                                    + '<br>'
                                                                    + '<br>'
                                                                   // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_PointManagement_CreatePointShow({ID})"  class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/generatePoint03.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Create Point</div></div>'
                                                                   + '<br>'
                                                                   + '<br>'
                                                                   // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'
                                                                  //  + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="MembershipCardCampaingEntitled_InsertUpdate(' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + "Point Reward Loyalty Card" + "'" + ',' + "'" + document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value + "'" + ',' + "'" + document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Add To Membership Card</div></div>'                                                         
                                                                    + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="MembershipCardCampaingEntitled_InsertUpdate(' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + "Point Reward Loyalty Card" + "'" + ',' + "'" + "Point-Reward-Loyalty-Card" + "'"   + ',' +  "'" + "Point-Reward-Loyalty-Card" + "'"   + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Add To Membership Card</div></div>'                                                         
                                                                  
                                                                    + '</div>' +
                                                          
                                     
                                                            '</div>',
                                                        width: '100%',
                                                        //   listeners: {
                                                        //       itemsingletap: function (list, idx, target, records, evt) {






                                                        //           var ID = records.get('ID');
                                                        //           var PointCampaignCode = records.get('PointCampaignCode');
                                                        //           var PointCampaignName = records.get('PointCampaignName');
                                                        //           var StartDate = records.get('StartDate');
                                                        //           var EndDate = records.get('EndDate');
                                                        //           var StrEndDate = records.get('StrEndDate');
                                                        //           var RowStatus = records.get('RowStatus');
                                                        //           var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                        //           var CreatedByAccNo = records.get('CreatedByAccNo');
                                                        //           var CreatedBy = records.get('CreatedBy');
                                                        //           var CreatedDate = records.get('CreatedDate');
                                                        //           var ModifiedBy = records.get('ModifiedBy');
                                                        //           var ModifiedDate = records.get('ModifiedDate');
                                                        //           var Remarks = records.get('Remarks');
                                                        //           var PointCampaignPremiumQRCode = records.get('PointCampaignPremiumQRCode');
                                                        //           var TermAndCondition = records.get('TermAndCondition');
                                                        //           var isPointRulePopUp = records.get('isPointRulePopUp');
                                                        //           var PointOption = records.get('PointOption');
                                                        //           var PointAmountEquation = records.get('PointAmountEquation');


                                                        //           if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                                        //             var campaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
                                                        //             var MembersipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value;
                                                        //               MembershipCardCampaingEntitled_InsertUpdate(PointCampaignCode, "Point Reward Loyalty Card",campaignID,MembersipCardCode);
                                                        //               return;
                                                        //           }
                                                              

                                                                 

                                                        //       },
                                                        //       deselect: function (list, records) {

                                                        //       }
                                                        //   },

                                                      },

                                                 ]
                                             },


                                           ]

                                       },


//////////////////////////////////////////////////////////Membershipcard Discount

{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaCardManagementMembershipCardDiscountList',
    width: '100%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'FloatPanel_AyohaCardManagementCardMembershipCardDiscount',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    //listeners: {
    //    initialize: function (c) {

    //        this.element.on({
    //            swipe: function (e, node, options) {
    //                if (e.direction == "left") {
    //                    //  alert("Hey! I swipe left");

    //                } else {
    //                    //  alert("Hey! I swipe right");
    //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
    //                }
    //            }
    //        });
    //    }
    //},

    items: [


      {
          xtype: 'container',
          width: '100%',
          height: '100%',
          style: "background-color: transparent;",
          layout: {
              type: 'vbox',
              pack: 'start',
              align: 'left'

          },
          items: [

             

                  

               {
                   xtype: 'list',
                   //flex:1,
                   height: '100%',
                   //store: '_DataStore_DiscountCampaignLoadByEnterpriseAccNoStore',
                   store:_DataStore_DiscountCampaignLoadByEnterpriseAccNoStore,
                   id: 'FloatPanel_AyohaCardManagementLoyaltyCardMembershipCardDiscountID',
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
                //    style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                //    itemTpl: '<div onclick="FloatPanel_AyohaCardManagement_StagingMembershipCardDiscount_EditCardShow({ID},' + "'" + '{DiscountCode}' + "'" + ');" class="myContent">' +
                     
                //              '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                //              + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Memberships Discount Campaign Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{DiscountName}</div>'
                //              + '<br>'
                //              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Discount (%)</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{DiscountPercent}</div>'
                //               + '<br>'
                //              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Required End Date ?</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{isRequireDiscountEndDate}</div>'
                //               + '<br>'
                //              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{DiscountEndDate}</div>'
                //               + '<br>'
                //              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscriber</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">NA</div>'
                //              + '{StampCampaignModelButton}'


                //              + '</div>' +
                     

                //      '</div>',



                     
                     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                     itemTpl: '<div  class="myContent">' +
                        
                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                               + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>Discount Campaign Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{DiscountName}</div>'
                               + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Discount (%)</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{DiscountPercent}</div>'
                                + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Required End Date ?</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{isRequireDiscountEndDate}</div>'
                                + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{DiscountEndDate}</div>'
                               + '<br>'                             
                            + '<br>'
                            + '<br>'
                            + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(' + "'" + '{DiscountCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview Discount</div></div>'
                               + '<br>'
                             
                               + '<div id="divFloatPanel_AyohaCardManagementAddToMembershipCard" style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  onclick="FloatPanel_AyohaCardManagement_StagingMembershipCardDiscount_EditCardShow({ID},' + "'" + '{DiscountCode}' + "'" + ');"  style="width:32px;height:32px;margin:0px 0px 0px 0px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;" >Add To Membership Card</div></div>'                                                         
                               + '<br>'                            
                               + '</div>' +
                     

                       '</div>',

                   width: '100%',
                

               },

          ]
      },


    ]

},


//////////////////////////////////////////////contest


{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaCardManagementMembershipCardcontestList',
    width: '100%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'FloatPanel_AyohaCardManagementCardMembershipCardcontest',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    //listeners: {
    //    initialize: function (c) {

    //        this.element.on({
    //            swipe: function (e, node, options) {
    //                if (e.direction == "left") {
    //                    //  alert("Hey! I swipe left");

    //                } else {
    //                    //  alert("Hey! I swipe right");
    //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
    //                }
    //            }
    //        });
    //    }
    //},

    items: [


      {
          xtype: 'container',
          width: '100%',
          height: '100%',
          style: "background-color: transparent;",
          layout: {
              type: 'vbox',
              pack: 'start',
              align: 'left'

          },
          items: [

           {
            xtype: 'list',
            height: '100%',
            //store: 'StampCampaignLoadByEnterpriseAccNoStore',
            store:_DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore,
            id: 'FloatPanel_AyohaCardManagementLoyaltyContestID',
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
            itemTpl: '<div class="myContent">' +
               
                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                      + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>Contest Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ContestName}</div>'
                      + '<br>'
                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate_DateOnly_list}</div>'
                       + '<br>'
                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate_DateOnly_list}</div>'
                       + '<br>'
                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StatusContest}</div>'
                      + '<br>'
                      + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Total Participants</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CountParticipants}</div>'
                       + '<br>'
                   //    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'
                   
                   + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaContest_MembershipContestDetailShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview Contest</div></div>'
                      + '<br>'
                     // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaContest_ManageParticipantListShow(' + "'" + '{ContestCode}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Add To Membership Card</div></div>'
                     + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_StagingMembershipCardContest_EditCardShow({ID},' + "'" + '{ContestCode}' + "'" + ');"    class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Add To Membership Card</div></div>'
                     + '<br>'
                      + '<br>'
                      + '<br>'
                     // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'
                     // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaContestSettingShow({ID},' + "'" + '{ContestCode}' + "'" + ',' + "'" + '{ContestName}' + "'" + ',' + "'" + '{AdvertisementImgPath}' + "'" + ',' + "'" + '{AdvertismentImgName}' + "'" + ',' + "'" + '{StartDate_DateOnly}' + "'" + ',' + "'" + '{EndDate_DateOnly}' + "'" + ',' + "'" + '{isRequiredReceipt}' + "'" + ',' + "'" + '{ContestStatus}' + "'" + ',' + "'" + '{ContestDescription}' + "'" + ',' + "'" + '{WinnerAnnoucementStatus}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{ContestType}' + "'" + ',' + "'" + '{ContestQuestion}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'                                                         
                      + '</div>' +
            

              '</div>',
          width: '100%',
           },





            ////////////////

                  

            //    {
            //        xtype: 'list',
            //        //flex:1,
            //       // hidden:true,
            //        height: '100%',
            //        store: _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore,
            //       // store:_DataStore_PointCampaignLoadByEnterpriseAccNoStore,
            //        id: 'FloatPanel_AyohaCardManagementLoyaltyContestID',
            //        mode: 'SINGLE',
            //        //grouped: true,
            //        disableSelection: true,
            //        scrollable: {
            //            direction: 'vertical',
            //            indicators: {
            //                y: {
            //                    autoHide: true
            //                },
            //                x: {
            //                    autoHide: true
            //                }
            //            }
            //        },
            //        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
            //        itemTpl: '<div onclick="FloatPanel_AyohaCardManagement_StagingMembershipCardContest_EditCardShow({ID},' + "'" + '{ContestCode}' + "'" + ');" class="myContent">' +
                     
            //                  '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
            //                  + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ContestName}</div>'
            //                  + '<br>'
            //                  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
            //                   + '<br>'
            //                  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">End Date </div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
            //                   + '<br>'
            //                  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ContestStatus}</div>'
            //                 //   + '<br>'
            //                 //  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscriber</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">NA</div>'
            //                 //  + '{StampCampaignModelButton}'


            //                  + '</div>' +
                     

            //          '</div>',


                  
            //        width: '100%',
                

            //    },

          ]
      },


    ]

},


//////////////////////////////////////////////event


{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaCardManagementMembershipCardEventList',
    width: '100%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'FloatPanel_AyohaCardManagementCardMembershipCardevent',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    //listeners: {
    //    initialize: function (c) {

    //        this.element.on({
    //            swipe: function (e, node, options) {
    //                if (e.direction == "left") {
    //                    //  alert("Hey! I swipe left");

    //                } else {
    //                    //  alert("Hey! I swipe right");
    //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
    //                }
    //            }
    //        });
    //    }
    //},

    items: [


      {
          xtype: 'container',
          width: '100%',
          height: '100%',
          style: "background-color: transparent;",
          layout: {
              type: 'vbox',
              pack: 'start',
              align: 'left'

          },
          items: [

             

                  

            //    {
            //        xtype: 'list',
            //        //flex:1,
            //       // hidden:true,
            //        height: '100%',
            //        //store: 'StampCampaignLoadByEnterpriseAccNoStore',
            //        store:_DataStore_PointCampaignLoadByEnterpriseAccNoStore,
            //        id: 'FloatPanel_AyohaCardManagementLoyaltyEventID',
            //        mode: 'SINGLE',
            //        //grouped: true,
            //        disableSelection: true,
            //        scrollable: {
            //            direction: 'vertical',
            //            indicators: {
            //                y: {
            //                    autoHide: true
            //                },
            //                x: {
            //                    autoHide: true
            //                }
            //            }
            //        },
            //        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
            //        itemTpl: '<div onclick="FloatPanel_AyohaCardManagement_StagingMembershipCardContest_EditCardShow({ID},' + "'" + '{ContestCode}' + "'" + ');" class="myContent">' +
                     
            //                  '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
            //                  + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ContestName}</div>'
            //                  + '<br>'
            //                  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
            //                   + '<br>'
            //                  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">End Date </div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
            //                   + '<br>'
            //                  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Contest Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ContestStatus}</div>'
            //                 //   + '<br>'
            //                 //  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscriber</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">NA</div>'
            //                 //  + '{StampCampaignModelButton}'


            //                  + '</div>' +
                     

            //          '</div>',


                  
            //        width: '100%',
                

            //    },



               {
                xtype: 'list',
                //flex:1,
                height: '100%',
                //store: 'StampCampaignLoadByEnterpriseAccNoStore',
               store:_DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore,
               id: 'FloatPanel_AyohaCardManagementLoyaltyEventID',
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
                itemTpl: '<div class="myContent">' +
                   
                          '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                          + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>MembershipEvent Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EventName}</div>'
                          + '<br>'
                          + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">MembershipEvent Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EventStartDate_Day} {EventStartDate_Month} {EventStartDate_Year} , {EventStartTime_Modified}</div>'
                           + '<br>'
                          + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">MembershipEvent End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EventEndDate_Day} {EventEndDate_Month} {EventEndDate_Year}, {EventEndTime_Modified}</div>'
                           + '<br>'
                          + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">MembershipEvent Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ModifiedEventStatus_Merchant}</div>'
                          + '<br>'
                          + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Member will Attend</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{RespondStatus_IwillAttendCount}</div>'
                           + '<br>'
                           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Member just Interested</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{RespondStatus_InterestedCount}</div>'
                           + '<br>'
                       //    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'
                       
                       + '<div style="width:100%;text-align:right;margin:-165px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Preview MembershipEvent</div></div>'
                          + '<br>'
                          + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaCardManagement_StagingMembershipCardEvent_EditCardShow({ID},' + "'" + '{EventCode}' + "'" + ');"    class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/loyaltycardOn.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Add To Membership Card</div></div>'
                         + '<br>'
                         + '<br>'
                         + '<br>'
                         // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaRewardEventSettingShow({ID},' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EventType}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_DateOnly}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_DateOnly}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventCategoryCode}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventStatus}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{ModifiedBy}' + "'" + ',' + "'" + '{ModifiedDate}' + "'" + ',' + "'" + '{EventStatus_Merchant}' + "'" + ',' + "'" + '{EventCoverPhotoName}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'                                                         
                          + '</div>' +
                

                  '</div>',
                  width: '100%',




                //   style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                //   itemTpl: '<div onclick="FloatPanel_AyohaCardManagement_StagingMembershipCardEvent_EditCardShow({ID},' + "'" + '{EventCode}' + "'" + ');" class="myContent">' +
                     
                //             '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                //             + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><b>{RowNumber}).</b>MembershipEvent Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EventName}</div>'
                //             + '<br>'
                //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">MembershipEvent Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EventStartDate_Day} {EventStartDate_Month} {EventStartDate_Year} , {EventStartTime_Modified}</div>'
                //              + '<br>'
                //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">MembershipEvent End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EventEndDate_Day} {EventEndDate_Month} {EventEndDate_Year}, {EventEndTime_Modified}</div>'
                //              + '<br>'
                //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">MembershipEvent Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ModifiedEventStatus_Merchant}</div>'
                //             + '<br>'
                //             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Member will Attend</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{RespondStatus_IwillAttendCount}</div>'
                //              + '<br>'
                //              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Member just Interested</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{RespondStatus_InterestedCount}</div>'
                //              + '<br>'
                       
                //             + '</div>' +
                  

                //     '</div>',
                // width: '100%',
             

            },

          ]
      },


    ]

},











                                  ]

                                  //}
                              },










                        ]
                    },





















                    {
                        xtype: 'container',
                        id: 'FloatPanel_AyohaCardManagementTitleOutter',
                        width: '96%',
                        height: 55,
                        margin: '0 0 0 7',
                        hidden:true,
                        // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                        style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        docked:'bottom',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaCardManagement_StampCard',
                               // flex:1,
                               width: '20%',
                                //height: 45,
                                style: "background-color: transparent",
                                //style: "background-color: #F35B57;",

                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [

                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaCardManagement_StampCard',
                                         //  badgeText: '1',
                                         margin: '0 0 0 0',
                                         height: 40,
                                         width: 40,
                                         html: '<img src="resources/icons/latestStampcardPurple.png" width="30" height="30" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Loyalty Stamp</b></font>');
                                             FloatPanel_AyohaCardManagement_Type = 'Stamp';
                                             Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
                                             Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=1 color=grey>Loyalty Point</font>');
                                             Ext.getCmp('htmFloatPanel_AyohaCardManagement_StampCardTxt').setHtml('<font size=1 color=purple><b><u>Loyalty Stamp</u></b></font>');                                            
                                             FloatPanel_AyohaCardManagementHighlightPreviligeText();
                                            }
                                     },
                                      {
                                          margin: '-12 0 0 0',
                                          id: 'htmFloatPanel_AyohaCardManagement_StampCardTxt',
                                          html: '<font size=1 color=purple><b><u>Loyalty Stamp</u></b></font>'
                                      },

                                ]
                            },

                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaCardManagement_PointCard',
                                    width: '20%',
                                    style: "background-color: transparent",
                                    //style: "background-color: #F35B57;",

                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaCardManagement_PointCard',
                                             //  badgeText: '1',
                                             margin: '0 0 0 0',
                                             height: 40,
                                             width: 40,
                                             html: '<img src="resources/icons/loyaltyPointInconWhite01.png" width="30" height="30" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {
                                                 //tabpanelFloatPanel_AyohaCardManagement
                                                 Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore();
                                                 FloatPanel_AyohaCardManagement_Type = 'Point';
                                                 Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                                 Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=1 color=purple><b><u>Loyalty Point</u></b></font>');
                                                 Ext.getCmp('htmFloatPanel_AyohaCardManagement_StampCardTxt').setHtml('<font size=1 color=grey>Loyalty Stamp</font>');
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Loyalty Point</b></font>');
                                                 input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value
                                                 input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
                                                 FloatPanel_AyohaCardManagementHighlightPreviligeText();
   // alert(input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardID);
                                                
                                                 //  LoyaltyCardRedeemListShow();
                                             }
                                         },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmFloatPanel_AyohaCardManagement_PointCardTxt',
                                              html: '<font size=1 color=grey><b>Loyalty Point</b></font>'
                                         
                                         
                                         
                                            },

                                    ]
                                },
                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaCardManagement_LoyaltyCardDiscount',
                                    width: '20%',
                                    style: "background-color: transparent",
                                    //style: "background-color: #F35B57;",

                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaCardManagement_MembershipcardDiscountCard',
                                             //  badgeText: '1',
                                             margin: '0 0 0 0',
                                             height: 40,
                                             width: 40,
                                             html: '<img src="resources/icons/mypromotionThree.png" width="30" height="30" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {
                                                 //tabpanelFloatPanel_AyohaCardManagement
                                                 //Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore();
                                                 Load_FloatPanel_AyohaCardManagement_DiscountCampaignLoadByEnterpriseAccNoStore();
                                                 FloatPanel_AyohaCardManagement_Type = 'Discount';
                                                 Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(2);
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Membership Discount</b></font>');
                                                 FloatPanel_AyohaCardManagementHighlightPreviligeText();
                                                 //  LoyaltyCardRedeemListShow();
                                             }
                                         },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmFloatPanel_AyohaCardManagement_LoyaltyCardDiscounttTxt',
                                              html: '<font size=1 color=grey><b>Membership Discount</b></font>'
                                          },

                                    ]
                                },
                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaCardManagement_LoyaltyCardContest',
                                    width: '20%',
                                    //height: 45,
                                   // flex: 1,
                                    style: "background-color: transparent",
                                    //style: "background-color: #F35B57;",

                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaCardManagement_MembershipcardContestCard',
                                             //  badgeText: '1',
                                             margin: '0 0 0 0',
                                             height: 40,
                                             width: 40,
                                             html: '<img src="resources/icons/contest01-removebg-preview.png" width="30" height="30" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {
                                              //  FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                                              FloatPanel_AyohaCardManagement_AyohaRewardContestLoadByEnterpriseAccNoStore();
                                              FloatPanel_AyohaCardManagement_Type = 'Contest';
                                                 Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(3);
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Membership Contest</b></font>');
                                               
                                                 FloatPanel_AyohaCardManagementHighlightPreviligeText();
                                               
                                                 //  LoyaltyCardRedeemListShow();
                                             }
                                         },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmFloatPanel_AyohaCardManagement_LoyaltyContestTxt',
                                              html: '<font size=1 color=grey><b>Membership Contest</b></font>'
                                          },

                                    ]
                                },






                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaCardManagement_LoyaltyCardEvent',
                                    width: '20%',
                                    //height: 45,
                                   // flex: 1,
                                    style: "background-color: transparent",
                                    //style: "background-color: #F35B57;",

                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaCardManagement_MembershipcardEventCard',
                                             //  badgeText: '1',
                                             margin: '0 0 0 0',
                                             height: 40,
                                             width: 40,
                                             html: '<img src="resources/icons/membershipevent-removebg-preview.png" width="30" height="30" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {
                                              //  FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                                             // FloatPanel_AyohaCardManagement_AyohaRewardContestLoadByEnterpriseAccNoStore();
                                             FloatPanel_AyohaCardManagement_AyohaRewardEventLoadByEnterpriseAccNoStore();
                                              FloatPanel_AyohaCardManagement_Type = 'Event';
                                                 Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(4);
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Membership Event</b></font>');
                                                 FloatPanel_AyohaCardManagementHighlightPreviligeText();
                                                 //  LoyaltyCardRedeemListShow();
                                             }
                                         },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmFloatPanel_AyohaCardManagement_LoyaltyEventTxt',
                                              html: '<font size=1 color=grey><b>Membership Event</b></font>'
                                          },

                                    ]
                                },

                        ]

                    },












                    {

                        xtype: 'container',
                        width: '100%',
                        // hidden:true,
                        // width: 40,
                        docked: 'bottom',
                        height: 50,
                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaCardManagementBottom',
                        //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        style:GetFooterStyle(),
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },




                        // hidden:true,
                        items:
                               [
             
                  {
                     xtype:"spacer",
                     with:20
                                                  },
                  {

                     id: 'btnFloatPanel_AyohaCardManagement_Search',
                    hidden: true,
                     //  badgeText: '1',
                     margin: '0 5 0 0',
                     height: 30,
                     width: 30,
                     html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',

                 },
                  {
                  
                     hidden:true,
                     margin: '0 0 0 0',
                     width: '50%',
                     height: 20,
                     html: '<input type="text" id="input-FloatPanel_AyohaCardManagementSearchTxtx" placeHolder="Search (Stamp Campaign Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                 },
                 {
                   // id: 'htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtPoint',
                    hidden:true,
                    margin: '0 0 0 0',
                    width: '50%',
                    height: 20,
                    html: '<input type="text" id="input-FloatPanel_AyohaCardManagementSearchTxtPointx" placeHolder="Search (Point Campaign Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                },
                {
                    margin: '0 0 0 20',
                  //  id: 'htmlFloatPanel_AyohaCardManagement_count',
                    html: '<font size=3 color=black><b>Record Found:</b></font>'
                },
                
                 {
                     margin: '0 0 0 0',
                     id: 'htmlFloatPanel_AyohaCardManagement_count',
                     html: '<font size=3 color=black><b>(0)</b></font>'
                 },
                 

                  {
xtype:"spacer",
width:"75%"
                  },
                                   {


                                       // xtype: 'button',
                                       //  hidden: true,
                                       id: 'btnFloatPanel_AyohaCardManagement_AddNewStamp',
                                       //  badgeText: '1',
                                       margin: '0 0 0 0',
                                       //height: 40,
                                       //width: 135,
                                       //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                       html: '<button OnClick="FloatPanel_AyohaCardManagement_AddCardFormShow()" class="buttonsetNewMembershipEvent" style="margin:0px 0px 0px 0px;"> <font size=3px color=white>+ </font>Add Stamp Loyalty Card</button>',
                                       //ui: 'confirm',
                                       //handler: function () {

                                       //}

                                   },
                                   {


                                    // xtype: 'button',
                                    //  hidden: true,
                                    id: 'btnFloatPanel_AyohaCardManagement_AddPoint',
                                    //  badgeText: '1',
                                    margin: '0 0 0 0',
                                    //height: 40,
                                    //width: 135,
                                    //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                    html: '<button OnClick="FloatPanel_AyohaCardManagement_AddCardForm_PointShow()" class="buttonsetNewMembershipEvent" style="margin:0px 0px 0px 0px;"> <font size=3px color=white>+ </font>Add Point Loyalty Card</button>',
                                    //ui: 'confirm',
                                    //handler: function () {

                                    //}

                                },


                                              //{
                                              //    margin: '0 0 0 0',
                                              //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
                                              //},

                                              {
                                                 xtype:"spacer",
                                                 with:10
                                                                              },








                               ]

                    },














                ]
            },












        ]





    });
    return _FloatPanel_AyohaCardManagement;



}





















































var FloatPanel_AyohaCardManagement_Type;

var input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode;
var input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardID;



function FloatPanel_AyohaCardManagementShow_FromOpenAccountStep() {
  
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement());
    this.overlay.show();
    isFloatPanel_AyohaCardManagementOpen = 'Y';
  // alert('cap ayam')
  
    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').getTabBar().hide();
   // Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCard_Point_ForMembershipCardManagement').setHidden(false);
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCard_Point').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagementTitleOutter').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaCardManagementBottom').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCardID_AddtoMembershipcard').setHidden(false);
    Ext.getCmp('FloatPanel_AyohaCardManagementID').setZIndex(300);
   // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Loyalty Stamp Campaign</b></font>');
   // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Loyalty Stamp</b></font>');
  // divFloatPanel_AyohaCardManagementAddToMembershipCard


//   var v = document.getElementById("divFloatPanel_AyohaCardManagementAddToMembershipCard");
//   v.className = "blink_me_sendNow"; // Using el.className = "new-className"
 
  

//   var divElement = document.getElementById('divFloatPanel_AyohaCardManagementAddToMembershipCard');
//   divElement.classList.add('blink_me_sendNow');
//   //alert(divElement)
// // Check if the element exists
// if (divElement) {
 
//   divElement.className = 'blink_me_sendNow';
  
  
// }
}



function FloatPanel_AyohaCardManagementShow() {
  
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement());
    this.overlay.show();
    isFloatPanel_AyohaCardManagementOpen = 'Y';
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCardID').setHidden(false);
    Ext.getCmp('btnFloatPanel_AyohaCardManagement_AddPoint').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtPoint').setHidden(true);
    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').getTabBar().hide();
    Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Stamp Loyalty Campaign Management</b></font>');

  document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtGeneral").addEventListener("keyup", FloatPanel_AyohaCardManagementStamp_SearchTxtOnKeyUp);
  FloatPanel_AyohaCardManagement_Type = 'Stamp';
  FloatPanel_AyohaCardManagementHighlightPreviligeText();
  
   // FloatPanel_AyohaCardManagement_AddCardShow();
    FloatPanel_DrawerMenu_MainHide();
    //Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');

}



function FloatPanel_AyohaCardManagementShow_Point() {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement());
    this.overlay.show();
    isFloatPanel_AyohaCardManagementOpen = 'Y';
   



    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);

    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').getTabBar().hide();
   // FloatPanel_AyohaCardManagement_AddCardShow();
    FloatPanel_DrawerMenu_MainHide();
    Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore();
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Point Loyalty Campaign Management</b></font>');
    Ext.getCmp('btnFloatPanel_AyohaCardManagement_AddNewStamp').setHidden(true);
    if(isFloatPanel_OpenAccountStepOpen=='N'){
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxt').setHidden(true); 
        document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtPoint").addEventListener("keyup", FloatPanel_AyohaCardManagementPoint_SearchTxtOnKeyUp);
     
    }
    FloatPanel_AyohaCardManagement_Type = 'Point';
    FloatPanel_AyohaCardManagementHighlightPreviligeText();
   

}






function FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement() {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement());
    this.overlay.show();
    isFloatPanel_AyohaCardManagementOpen = 'Y';
   
  
    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').getTabBar().hide();
    Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCard_Point_ForMembershipCardManagement').setHidden(false);
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCard_Point').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagementTitleOutter').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaCardManagementBottom').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagementLoyaltyCardID_AddtoMembershipcard').setHidden(false);
    Ext.getCmp('FloatPanel_AyohaCardManagementID').setZIndex(300);
   // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Loyalty Stamp Campaign</b></font>');
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Loyalty Stamp</b></font>');
   
   
   // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtStamp').setHidden(false);
    //Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtPoint').setHidden(true);
   

}


function FloatPanel_AyohaCardManagementHide() {
    if(isFloatPanel_AyohaCardManagementOpen == 'Y'){       
        _FloatPanel_AyohaCardManagement.hide(); isFloatPanel_AyohaCardManagementOpen = 'N';
        FloatPanel_AyohaCardManagement_AddCardHide();
    }
   
}



//var StampCount;
var globalStampCampaignLoadByEnterpriseAccNoCount;
function Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore() {





    _DataStore_StampCampaignLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_StampCampaignLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/StampCampaign/StampCampaignLoadByEnterpriseAccNo');
    _DataStore_StampCampaignLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        var count = _DataStore_StampCampaignLoadByEnterpriseAccNoStore.getCount();
        globalStampCampaignLoadByEnterpriseAccNoCount=count;
        Ext.getCmp('htmlFloatPanel_AyohaCardManagementCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + count + ')</b></font>');
        Ext.Viewport.setMasked(false);


        document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtGeneral").addEventListener("keyup", FloatPanel_AyohaCardManagementStamp_SearchTxtOnKeyUp);

        


    });
    task.delay(700);


    //Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: GetEnterpriseAccNo()
    //});
    //Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
    //        EnterpriseAccNo: GetEnterpriseAccNo()
    //    });
    //    Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
    //    var myStore = Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore');
    //    StampCount = myStore.getCount();
    //    Ext.getCmp('htmlFloatPanel_AyohaCardManagementCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + StampCount + '</div>');      
    //    Ext.Viewport.setMasked(false);



    //});
    //task.delay(700);
}


var _DataStore_PointCampaignLoadByEnterpriseAccNoStore;
var globalPointCampaignLoadByEnterpriseAccNoCount;
function Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore() {

    Ext.getStore('PointCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('PointCampaignLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('PointCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        _DataStore_PointCampaignLoadByEnterpriseAccNoStore=Ext.StoreMgr.get('PointCampaignLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('PointCampaignLoadByEnterpriseAccNoStore');
      
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + myStore.getCount() + ')</b></font>');
        globalPointCampaignLoadByEnterpriseAccNoCount=myStore.getCount();
        
        // adjustHeight();





       // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtStamp').setHidden(true);
       // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtPoint').setHidden(false);
        document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtGeneral").addEventListener("keyup", FloatPanel_AyohaCardManagementPoint_SearchTxtOnKeyUp);
    
        Ext.Viewport.setMasked(false);



    });
    task.delay(500);
}

function Load_FloatPanel_AyohaCardManagement_DiscountCampaignLoadByEnterpriseAccNoStore() {





    _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/DiscountCampaign/DiscountCampaignLoadByEnterpriseAccNo');
    _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        var count = _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.getCount();       
        Ext.getCmp('htmlFloatPanel_AyohaCardManagementCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');
      
      
      
      
       // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtStamp').setHidden(true);
       // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_ListTypeSearchTxtPoint').setHidden(false);
        document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtGeneral").addEventListener("keyup", FloatPanel_AyohaCardManagementMembershipDiscount_SearchTxtOnKeyUp);
    
      
        // const element = document.getElementById('divFloatPanel_AyohaCardManagementAddToMembershipCard');
        // element.classList.toggle('blink_me_sendNow');
        FloatPanel_AyohaCardManagementHighlight_BlinkingText();
        
         
        Ext.Viewport.setMasked(false);


    });
    task.delay(700);


}





function Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo) {

    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo
    });
    Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo
        });
        Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}



function FloatPanel_AyohaCardManagement_StagingMembershipCardDiscount_EditCardShow(campaignID,CampaignCode) {
    
//    alert(campaignID);
//alert(globalFloatPanel_OpenAccountStepMembershipCardCode);
//alert(isFloatPanel_OpenAccountStepOpen);

    
    if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
       
      //  var campaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
        var MembersipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value;
        MembershipCardCampaingEntitled_InsertUpdate(CampaignCode, "Membership Card Discount",campaignID,MembersipCardCode);
        return;
    }


    if (isFloatPanel_OpenAccountStepOpen == 'Y') {
       
        //  var campaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
          var MembersipCardCode=globalFloatPanel_OpenAccountStepMembershipCardCode;
          MembershipCardCampaingEntitled_InsertUpdate(CampaignCode, "Membership Card Discount",campaignID,MembersipCardCode);
          return;
      }


    // FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, StampCardBackground, isAnimated, AnimatedInterval
    //     , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode, StrEndDate);
    // Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo);
}
function FloatPanel_AyohaCardManagement_StagingMembershipCardEvent_EditCardShow(campaignID,CampaignCode) {
    
  
    
    if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
       
      //  var campaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
        var MembersipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value;
        MembershipCardCampaingEntitled_InsertUpdate(CampaignCode, "Membership Card Event",campaignID,MembersipCardCode);
        return;
    }





    // FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, StampCardBackground, isAnimated, AnimatedInterval
    //     , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode, StrEndDate);
    // Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo);
}

function FloatPanel_AyohaCardManagement_StagingMembershipCardContest_EditCardShow(campaignID,CampaignCode) {
    

    
    if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
       
      //  var campaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
        var MembersipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value;
        MembershipCardCampaingEntitled_InsertUpdate(CampaignCode, "Membership Card Contest",campaignID,MembersipCardCode);
        return;
    }





    // FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, StampCardBackground, isAnimated, AnimatedInterval
    //     , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode, StrEndDate);
    // Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo);
}

function FloatPanel_AyohaCardManagement_Staging_EditCardShow(StampCampaignCode,StampCampaignName,StampCardType,StartDate,EndDate,RowStatus,EnterpriseAccNo,CreatedByAccNo,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,StartDateOnly,EndDateOnly,StampCardBackground,isAnimated,AnimatedInterval,StampRuleRemarks,isStampRulePopUp,LoyaltyCustomerType,StampCampaignPremiumQRCode,StrEndDate) {
   //alert(isFloatPanel_OpenAccountStepOpen)
   
    if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
        var campaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
        var MembersipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value;
        MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card",campaignID,MembersipCardCode);
        return;
    }

if(isFloatPanel_OpenAccountStepOpen=='Y'){
   
    MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card",globalFloatPanel_OpenAccountStepMembershipRowID,globalFloatPanel_OpenAccountStepMembershipCardCode);
    return
}


 //alert(isFloatPanel_MembershipCardManagement_EditCardOpen)
    FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, StampCardBackground, isAnimated, AnimatedInterval
        , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode, StrEndDate);
    Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo);
}





function FloatPanel_AyohaCardManagement_AyohaRewardContestLoadByEnterpriseAccNoStore() {
  


  
   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
 
   
    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadByEnterpriseAccNo');
    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        countTotalContest= _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getCount();  
        document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtGeneral").addEventListener("keyup", FloatPanel_AyohaCardManagementMembershipContest_SearchTxtOnKeyUp);
    
        // alert(countTotalContest)
       // Ext.getCmp('htmlFloatPanel_AyohaContestList_count').setHtml('<font size=2 color=black><b>('+countTotalContest+')</b></font>');
        Ext.Viewport.setMasked(false);
       // LoadingPanelHide();

    });
    task.delay(700);
 
 
 
 
    //  _DataStore_PointCampaignLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    //  _DataStore_PointCampaignLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadByEnterpriseAccNo');
    //  _DataStore_PointCampaignLoadByEnterpriseAccNoStore.load();
 
 
    //  var task = Ext.create('Ext.util.DelayedTask', function () {
        
 
    //      countTotalFloatPanel_AyohaCardManagementPoint= _DataStore_PointCampaignLoadByEnterpriseAccNoStore.getCount();  
    //    // alert(countTotalFloatPanel_AyohaCardManagementPoint)
    //      //Ext.getCmp('htmlFloatPanel_AyohaContestList_count').setHtml('<font size=2 color=black><b>('+countTotalFloatPanel_AyohaCardManagementPoint+')</b></font>');
        
    //      Ext.Viewport.setMasked(false);
    //      LoadingPanelHide();
 
    //  });
    //  task.delay(700);
 
 
 
 
 }



 function FloatPanel_AyohaCardManagement_AyohaRewardEventLoadByEnterpriseAccNoStore() {
  


  
   
    
     
 
 
 
     _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
     _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadByEnterpriseAccNo');
     _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.load();
 
 
     var task = Ext.create('Ext.util.DelayedTask', function () {
        
 
        // countTotalMembershipEvent= _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.getCount();  
       
         document.getElementById("input-FloatPanel_AyohaCardManagementSearchTxtGeneral").addEventListener("keyup", FloatPanel_AyohaCardManagementMembershipEvent_SearchTxtOnKeyUp);
    
        
        
        
         Ext.Viewport.setMasked(false);
        
 
     });
     task.delay(700);
 
 
 
 
 }




 function FloatPanel_AyohaCardManagementPoint_SearchTxtOnKeyUp() {


    var TotalFloatPanel_AyohaCardManagementPoint = 0;


    _DataStore_PointCampaignLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaCardManagementSearchTxtGeneral').value;
   
   


    if (queryString) {
        //console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_PointCampaignLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('PointCampaignName'))) {
                console.log('ada0');

                TotalFloatPanel_AyohaCardManagementPoint = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + TotalFloatPanel_AyohaCardManagementPoint + ')</b></font>');
    
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        
        TotalFloatPanel_AyohaCardManagementPoint = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+TotalFloatPanel_AyohaCardManagementPoint+')</b></font>');
               
    }


    else {
      
        _DataStore_PointCampaignLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+globalPointCampaignLoadByEnterpriseAccNoCount+')</b></font>');
               
        return false;
    }

}



function FloatPanel_AyohaCardManagementStamp_SearchTxtOnKeyUp() {
 
    var TotalFloatPanel_AyohaCardManagementStamp = 0;


    _DataStore_StampCampaignLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaCardManagementSearchTxtGeneral').value;
   
   


    if (queryString) {
        //console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_StampCampaignLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('StampCampaignName'))) {
                console.log('ada0');

                TotalFloatPanel_AyohaCardManagementStamp = _DataStore_StampCampaignLoadByEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + TotalFloatPanel_AyohaCardManagementStamp + ')</b></font>');
    
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        
        TotalFloatPanel_AyohaCardManagementStamp = _DataStore_StampCampaignLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+TotalFloatPanel_AyohaCardManagementStamp+')</b></font>');
               
    }


    else {
      
        _DataStore_StampCampaignLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+globalStampCampaignLoadByEnterpriseAccNoCount+')</b></font>');
               
        return false;
    }

}



function FloatPanel_AyohaCardManagementMembershipDiscount_SearchTxtOnKeyUp() {
 
    var TotalFloatPanel_AyohaCardManagementStamp = 0;


    _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaCardManagementSearchTxtGeneral').value;
   
   


    if (queryString) {
        //console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('DiscountName'))) {
                console.log('ada0');

                TotalFloatPanel_AyohaCardManagementStamp = _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + TotalFloatPanel_AyohaCardManagementStamp + ')</b></font>');
    
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        
        TotalFloatPanel_AyohaCardManagementStamp = _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+TotalFloatPanel_AyohaCardManagementStamp+')</b></font>');
               
    }


    else {
      
        _DataStore_StampCampaignLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+globalStampCampaignLoadByEnterpriseAccNoCount+')</b></font>');
               
        return false;
    }

}


function FloatPanel_AyohaCardManagementMembershipContest_SearchTxtOnKeyUp() {
 
    var TotalFloatPanel_AyohaCardManagementStamp = 0;


    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaCardManagementSearchTxtGeneral').value;
   
   


    if (queryString) {
        //console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('ContestName'))) {
                console.log('ada0');

                TotalFloatPanel_AyohaCardManagementStamp = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + TotalFloatPanel_AyohaCardManagementStamp + ')</b></font>');
    
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        
        TotalFloatPanel_AyohaCardManagementStamp = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+TotalFloatPanel_AyohaCardManagementStamp+')</b></font>');
               
    }


    else {
      
        _DataStore_StampCampaignLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+globalStampCampaignLoadByEnterpriseAccNoCount+')</b></font>');
               
        return false;
    }

}


function FloatPanel_AyohaCardManagementMembershipEvent_SearchTxtOnKeyUp() {
 
    var TotalFloatPanel_AyohaCardManagementStamp = 0;


    _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaCardManagementSearchTxtGeneral').value;
   
   


    if (queryString) {
        //console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EventName'))) {
                console.log('ada0');

                TotalFloatPanel_AyohaCardManagementStamp = _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3;color=black><b>(' + TotalFloatPanel_AyohaCardManagementStamp + ')</b></font>');
    
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        
        TotalFloatPanel_AyohaCardManagementStamp = _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+TotalFloatPanel_AyohaCardManagementStamp+')</b></font>');
               
    }


    else {
      
        _DataStore_AyohaRewardEventLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_count').setHtml('<font size=3 color=black><b>('+globalStampCampaignLoadByEnterpriseAccNoCount+')</b></font>');
               
        return false;
    }

}



function FloatPanel_AyohaCardManagementHighlightPreviligeText(){
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_StampCardTxt').setHtml('<font size=1 color=grey>Loyalty Stamp</font>');
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=1 color=grey>Loyalty Point</font>');
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyCardDiscounttTxt').setHtml('<font size=1 color=grey>Membership Discount</font>');
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyContestTxt').setHtml('<font size=1 color=grey>Membership Contest</font>');
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyEventTxt').setHtml('<font size=1 color=grey>Membership Event</font>');
if(FloatPanel_AyohaCardManagement_Type=="Stamp"){
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_StampCardTxt').setHtml('<font size=2 color=purple><b><u>Loyalty Stamp</u></b></font>');
}
if(FloatPanel_AyohaCardManagement_Type=="Point"){
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=2 color=purple><b><u>Loyalty Point</u></b></font>');
}
if(FloatPanel_AyohaCardManagement_Type=="Discount"){
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyCardDiscounttTxt').setHtml('<font size=2 color=purple><b><u>Membership Discount</u></b></font>');

}
if(FloatPanel_AyohaCardManagement_Type=="Contest"){
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyContestTxt').setHtml('<font size=2 color=purple><b><u>Membership Contest</u></b></font>');

}
if(FloatPanel_AyohaCardManagement_Type=="Event"){
    Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyEventTxt').setHtml('<font size=2 color=purple><b><u>Membership Event</u></b></font>');

}



//   var divElement = document.getElementById('divFloatPanel_AyohaCardManagementAddToMembershipCard');
//   divElement.classList.add('blink_me_sendNow');
//   alert(divElement)
// // Check if the element exists
// if (divElement) {
 
//   divElement.className = 'blink_me_sendNow';
  
  
// }
}




function FloatPanel_AyohaCardManagementHighlight_BlinkingText(){
    if(isFloatPanel_OpenAccountStepOpen=='Y'){
        if(FloatPanel_AyohaCardManagement_Type=="Point"){
            Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=2 color=purple><b><u>Loyalty Point</u></b></font>');
        }
        if(FloatPanel_AyohaCardManagement_Type=="Discount"){
            var divElement = document.getElementById('divFloatPanel_AyohaCardManagementAddToMembershipCard');
        divElement.classList.add('blink_me_sendNow');
        }
        if(FloatPanel_AyohaCardManagement_Type=="Contest"){
            Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyContestTxt').setHtml('<font size=2 color=purple><b><u>Membership Contest</u></b></font>');
        
        }
        if(FloatPanel_AyohaCardManagement_Type=="Event"){
            Ext.getCmp('htmFloatPanel_AyohaCardManagement_LoyaltyEventTxt').setHtml('<font size=2 color=purple><b><u>Membership Event</u></b></font>');
        
        }
    }
  
   
}