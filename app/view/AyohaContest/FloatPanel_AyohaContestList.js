
Ext.define('ianMizi.view.AyohaContest.FloatPanel_AyohaContestList', {

});

var _FloatPanel_AyohaContestList;


var isFloatPanel_AyohaContestListOpen = 'N';






function FloatPanel_AyohaContestList() {

    _FloatPanel_AyohaContestList =
    Ext.create('Ext.Container', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaContestListID',
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
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_AyohaContestList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaContestList.hide(Ext.fx.Animation({
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
                style: ' background-color:white',
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
                                docked:'top',
                                height: 60,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaContestListHeader',
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
                                              // height: 30,
                                               width: 20,
                                           },

                                           {
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaContestList_TitleHeaderTxt',
                                            html: '<font size=3 color=black><b>Contest Campaign Setting</b></font>'
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
'<input type="text" id="input-FloatPanel_AyohaContestList_ListTypeSearchTxt"  placeHolder="Search (Contest Name)" class="search-input" >'+
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
                                                        id: 'btnFloatPanel_AyohaContestListBack',
                                                        height: 30,
                                                        width: 35,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           // FloatPanel_AyohaContestListHide();
                                                            // FloatPanel_AyohaContestList_AddCardHide();
                                                            isFloatPanel_AyohaContestListOpen = 'N';
                                                            _FloatPanel_AyohaContestList.hide(Ext.fx.Animation({
                                                                type: 'popOut',
                                                                //direction: 'left',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                               // duration: 250

                                                            }));
                                                            FloatPanel_AyohaContestListHide();

                                                        }
                                                    },    
                                                    {
                                                        xtype: 'spacer',
                                                       // height: 30,
                                                        width: 20,
                                                    },
                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaContestList_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                hidden:true,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardsetting.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                   
                                                                    isFloatPanel_AyohaContestListOpen = 'N';

                                                                    _FloatPanel_AyohaContestList.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    FloatPanel_AyohaContestList_AddCardHide();
                                                                }
                                                            },



 {
     xtype: 'spacer',
     height: 30,
     width: 8,
 },





                                       ]

                            },



                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaContestListStampCardList',
                               // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaContestListCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaContestList').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    // {
                                    //     xtype: 'panel',
                                    //     height:5
                                    // },

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
                                               height: 55,
                                               margin: '0 0 0 0',
                                               hidden: true,
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
                                                         xtype: 'container',
                                                         width: '45%',
                                                         height: 55,
                                                         margin: '0 0 0 0',
                                                         //style: {
                                                         //    // background: '#D25959',
                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                         //    // border: '2px'
                                                         //},
                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                         style: 'background-color:transparent;',
                                                        /// style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         items: [
                                                           
                                                              {
                                                                  margin: '0 0 0 0',
                                                                  html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Membership Card</div>',
                                                              },

                                                                {
                                                                    xtype: 'container',
                                                                    width: '45%',
                                                                    style: "background-color: transparent;",
                                                                    layout: {
                                                                        type: 'hbox',
                                                                        pack: 'center',
                                                                        align: 'center',
                                                                    },
                                                                    items:[
                                                                         {
                                                                             margin: '0 0 0 0',
                                                                             html: '<img src="resources/icons/membershicarddashboard.png" width="40" height="40" alt="Company Name">',
                                                                         },
                                                                         {
                                                                             xtype: 'panel', width: 5
                                                                         },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlFloatPanel_AyohaContestListCardCount',
                                                                            html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                        },
                                                                    ]

                                                                }

                                                              
                                                         ]
                                                     },

                                                     {
                                                         xtype: 'panel',
                                                         width:'10%'
                                                     },

                                                      {
                                                          xtype: 'container',
                                                          width: '45%',
                                                          height:55,

                                                          margin: '0 0 0 0',
                                                          //style: {
                                                          //    // background: '#D25959',
                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                          //    // border: '2px'
                                                          //},
                                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                          style: 'background-color:transparent;',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [
                                                             
                                                               {
                                                                   margin: '0 0 0 0',
                                                                   html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Total Members</div>',
                                                               },
                                                               {
                                                                   xtype: 'container',
                                                                   width: '45%',
                                                                   style: "background-color: transparent;",
                                                                   layout: {
                                                                       type: 'hbox',
                                                                       pack: 'center',
                                                                       align: 'center',
                                                                   },
                                                                   items:[
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            html: '<img src="resources/icons/membershicardmemeberdashboard.png" width="40" height="40" alt="Company Name">',
                                                                        },
                                                                        {
                                                                            xtype:'panel',width:5
                                                                        },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlFloatPanel_AyohaContestListCardCount',
                                                                            html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">10</div>',
                                                                        },
                                                                   ]

                                                               }
                                                                
                                                          ]
                                                      },

                                                     {
                                                         xtype: 'container',
                                                         width: '40%',
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
                                                                   xtype: 'button',
                                                                   height: 60,
                                                                   width: 60,

                                                                   margin: '2 0 0 0',
                                                                   id: 'btnFloatPanel_AyohaContestListCardImage',
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
                                                              html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Membership Card List</div>'
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
    xtype: 'container',
    width: '100%',
    height:'100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    style: 'background-color:transparent',
    items:[

     
        {
            xtype: 'container',
            width: '100%',
            margin:'0 0 0 0',
            height:'100%',

            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
            style: 'background-color:transparent',
            
            items: [
                // {
                //     xtype: 'list',
                //     hidden:true,
                //     //flex:1,
                //     height: '96%',
                //     store: 'MembershipCardLoadByEnterpriseAccNoMerchantVersionStore',
                //     id: 'FloatPanel_AyohaContestListLoyaltyCardID',
                //     mode: 'SINGLE',
                //     //grouped: true,
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
                //     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                    
                //     itemTpl: '<div class="myContent"  onclick="FloatPanel_AyohaContestListSettingShow(' + "'" + '{MembershipCardCode}' + "'" + ')"  style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                 
                //   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                //                                 '</div>' +
                                          
                //     '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
                //     '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:30px;font-weight:bold;">{MembersCount}</div></div>' +
                  
                //     '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Privilage Level</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
                 
                //     '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardType}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">RM{MembershipCardFee}</div></div>',


                //     width: '100%',
                   

                // },







                {
                    xtype: 'list',
                    //flex:1,
                    height: '96%',
                    //store: 'StampCampaignLoadByEnterpriseAccNoStore',
                    store:_DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore,
                    id: 'FloatPanel_AyohaContestListID',
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
                    // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                    // itemTpl: '<div onclick="FloatPanel_AyohaContestListSettingShow({ID},' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{VoucherImgName}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{VoucherTermAndCondition}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{VoucherType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{VoucherEndDate}' + "'" + ',' + "'" + '{VoucherNote}' + "'" + ',' + "'" + '{isRequireVoucherEndDate}' + "'" + ')"  class="myContent">' +
                      
                    //           '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                    //           + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Memberships Voucher Campaign Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{VoucherName}</div>'
                    //           + '<br>'
                    //           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Voucher Amount(RM)</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{VoucherAmount}</div>'
                    //            + '<br>'
                    //           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Required End Date ?</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{isRequireVoucherEndDate}</div>'
                    //            + '<br>'
                    //           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{VoucherEndDate}</div>'
                    //            + '<br>'
                    //           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Subscriber</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">NA</div>'
                    //           + '{StampCampaignModelButton}'
 
 
                    //           + '</div>' +
                      
 
                    //   '</div>',






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
                                + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaContest_ManageParticipantListShow(' + "'" + '{ContestCode}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/userlistPurple.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Review Participation</div></div>'
                                + '<br>'
                               // + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'
                                + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaContestSettingShow({ID},' + "'" + '{ContestCode}' + "'" + ',' + "'" + '{ContestName}' + "'" + ',' + "'" + '{AdvertisementImgPath}' + "'" + ',' + "'" + '{AdvertismentImgName}' + "'" + ',' + "'" + '{StartDate_DateOnly}' + "'" + ',' + "'" + '{EndDate_DateOnly}' + "'" + ',' + "'" + '{isRequiredReceipt}' + "'" + ',' + "'" + '{ContestStatus}' + "'" + ',' + "'" + '{ContestDescription}' + "'" + ',' + "'" + '{WinnerAnnoucementStatus}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{ContestType}' + "'" + ',' + "'" + '{ContestQuestion}' + "'" + ')" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/editReview.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px -30px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Edit</div></div>'                                                         
                                + '</div>' +
                      
 
                        '</div>',
                    width: '100%',
                 
 
                },
            ]
        },
    ]
},
                                           
                                          
        
                                      ]
                                  },
                                  
                                ]

                            },







                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaContestList',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [



                                       
























                                       













                              //    ]

                              //    //}
                              //},










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

                        id: 'containerFloatPanel_AyohaContestList_MenuBottom',
                        //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
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
                //   {

                //      id: 'btnFloatPanel_AyohaContestList_Search',
                //      // hidden: true,
                //      //  badgeText: '1',
                //      margin: '0 5 0 0',
                //      height: 30,
                //      width: 30,
                //      html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',

                //  },
                //   {
                //      id: 'htmlFloatPanel_AyohaRewardVoucher_VoucherRecipentsList_ListVoucher_ListTypeSearchTxt',
                //      margin: '0 0 0 0',
                //      width: '50%',
                //      height: 20,
                //      html: '<input type="text" id="input-FloatPanel_AyohaContestList_ListTypeSearchTxt" placeHolder="Search (Contest Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                //  },
                {
                    margin: '0 0 0 0',
                   // id: 'htmlFloatPanel_AyohaContestList_count',
                    html: '<font size=3 color=black><b>Record Found:</b></font>'
                },
                 {
                     margin: '0 0 0 0',
                     id: 'htmlFloatPanel_AyohaContestList_count',
                     html: '<font size=3 color=black><b>(0)</b></font>'
                 },
                 

                  {
xtype:"spacer",
width:"78%"
                  },
                                   {


                                       // xtype: 'button',
                                       //  hidden: true,
                                       id: 'btnFloatPanel_AyohaContestList_AddNew',
                                       //  badgeText: '1',
                                       margin: '0 0 0 0',
                                       //height: 40,
                                       //width: 135,
                                       //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                       html: '<button OnClick="FloatPanel_AyohaContestSettingShow_AddNew()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;"> <font size=3px color=white>+ </font>Add New Contest</button>',
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
                                                 with:20
                                                                              },








                               ]

                    },




                    // {
                    //     xtype: 'container',
                    //     id: 'FloatPanel_AyohaContestListTitleOutter',
                    //  //   hidden:true,
                    //     width: '100%',
                    //     height: 45,
                    //     margin: '0 0 0 0',
                    //     // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                    //     style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                    //     docked: 'bottom',
                    //     layout: {
                    //         type: 'hbox',
                    //         pack: 'center',
                    //         align: 'center'

                    //     },
                    //     items: [
                    //         {
                    //             xtype: 'container',
                    //             id: 'containerFloatPanel_AyohaContestList_StampCard',
                    //             flex: 1,
                    //             //width: '33.3%',
                    //             //height: 45,
                    //             style: "background-color: transparent",
                    //             //style: "background-color: #F35B57;",

                    //             layout: {
                    //                 type: 'vbox',
                    //                 pack: 'center',
                    //                 align: 'center'

                    //             },
                    //             items: [

                    //                  {
                    //                      xtype: 'button',
                    //                      id: 'btnFloatPanel_AyohaContestList_StampCard',
                    //                      //  badgeText: '1',
                    //                      margin: '-10 0 0 0',
                    //                      height: 45,
                    //                      width: 45,
                    //                      html: '<img src="resources/icons/mypromotionThree.png" width="35" height="35" alt="Company Name">',
                    //                      ui: 'plain',
                    //                      handler: function () {
                    //                         // FloatPanel_AyohaContestList_NewCardAddShow();
                    //                          //FloatPanel_AyohaContestList_EditCardShow();
                    //                          //document.getElementById('input-FloatPanel_AyohaContestList_EditCard_MembershipCardID').value = 0;
                    //                      }
                    //                  },
                    //                   {
                    //                       margin: '-9 0 0 0',
                    //                       html: '<font size=2 color=purple><b>* Select Membership Card to set Voucher</b></font>'
                    //                   },

                    //             ]
                    //         },

                                



                    //     ]

                    // },



























                ]
            },












        ]





    });
    return _FloatPanel_AyohaContestList;



}








function FloatPanel_AyohaContestListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaContestList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContestList());
    this.overlay.show();
    isFloatPanel_AyohaContestListOpen = 'Y';
    
  //  FloatPanel_AyohaCardManagement_AddCardShow();
   // FloatPanel_AyohaContestList_AddCardShow();

    //Ext.getCmp('tabpanelFloatPanel_AyohaContestList').getTabBar().hide();
    //Load_FloatPanel_AyohaContestList_StampCampaignLoadByEnterpriseAccNoStore();
    //FloatPanel_AyohaContestList_AddCardShow();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
    FloatPanel_AyohaContestList_AyohaRewardContestLoadByEnterpriseAccNoStore();
    FloatPanel_DrawerMenu_MainHide();
    document.getElementById("input-FloatPanel_AyohaContestList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaContestListSearchTxtOnKeyUp);

}





function FloatPanel_AyohaContestListHide() {
    
   // FloatPanel_AyohaContestList_AddCardHide();
    _FloatPanel_AyohaContestList.hide(); isFloatPanel_AyohaContestListOpen = 'N';
   
    FloatPanel_AyohaCardManagement_AddCardHide();
}

var countTotalVoucher;
//var _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore;
function FloatPanel_AyohaContestList_AyohaRewardContestLoadByEnterpriseAccNoStore() {
  


  
   LoadingPanelShow(getLoadingIcon(), 'Loading....');

   
    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore').getProxy().setExtraParams({
    //         EnterpriseAccNo: GetEnterpriseAccNo()
    //     }); 
    //     Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore').load(); 
    //     var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore');
    //     _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMerchantVersionStore');   
    //     var count = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.getCount();  
    //     Ext.Viewport.setMasked(false);
    //     LoadingPanelHide();
    // });
    // task.delay(1000);




    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadByEnterpriseAccNo');
    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        countTotalContest= _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getCount();  
      // alert(countTotalContest)
        Ext.getCmp('htmlFloatPanel_AyohaContestList_count').setHtml('<font size=3 color=black><b>('+countTotalContest+')</b></font>');
        Ext.Viewport.setMasked(false);
        LoadingPanelHide();

    });
    task.delay(700);




}






function FloatPanel_AyohaContestListSearchTxtOnKeyUp() {


    var TotalContest = 0;


    _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaContestList_ListTypeSearchTxt').value;



    if (queryString) {
        //console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('ContestName'))) {
                console.log('ada0');

                TotalContest = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getCount();
              //  Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                Ext.getCmp('htmlFloatPanel_AyohaContestList_count').setHtml('<font size=3 color=black><b>('+TotalVoucher+')</b></font>');
               
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        
        TotalContest = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaContestList_count').setHtml('<font size=3 color=black><b>('+TotalContest+')</b></font>');
               
    }


    else {
      
        _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaContestList_count').setHtml('<font size=3 color=black><b>('+countTotalContest+')</b></font>');
               
        return false;
    }

}



//var StampCount;
// function Load_FloatPanel_AyohaContestList_StampCampaignLoadByEnterpriseAccNoStore() {

//     Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
//         EnterpriseAccNo: GetEnterpriseAccNo()
//     });
//     Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
//     var task = Ext.create('Ext.util.DelayedTask', function () {
//         Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
//             EnterpriseAccNo: GetEnterpriseAccNo()
//         });
//         Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
//         var myStore = Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore');
//         StampCount = myStore.getCount();
//         Ext.getCmp('htmlFloatPanel_AyohaContestListCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + StampCount + '</div>');
//         // adjustHeight();
//         Ext.Viewport.setMasked(false);



//     });
//     task.delay(2000);
// }



// function Load_FloatPanel_AyohaContestList_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo) {

//     Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
//         StampCampaignCode: strStampCampaignCode,
//         EnterpriseAccNo: EnterpriseAccNo
//     });
//     Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
//     var task = Ext.create('Ext.util.DelayedTask', function () {
//         Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
//             StampCampaignCode: strStampCampaignCode,
//             EnterpriseAccNo: EnterpriseAccNo
//         });
//         Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
//         var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore');
//         //StampCount = myStore.getCount();
//         //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
//         // adjustHeight();
//         Ext.Viewport.setMasked(false);

//     });
//     task.delay(2000);
// }






function FloatPanel_AyohaContestList_AddNew(){
    FloatPanel_AyohaRewardVoucherList_SettingShow_AddNew();
}