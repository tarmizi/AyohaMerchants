Ext.define('ianMizi.view.AyohaContest.FloatPanel_AyohaContest_MembershipContestDetail', {

});




var is_FloatPanel_AyohaContest_MembershipContestDetailOpen = "N";


var _FloatPanel_AyohaContest_MembershipContestDetail;

function FloatPanel_AyohaContest_MembershipContestDetail() {

    _FloatPanel_AyohaContest_MembershipContestDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaContest_MembershipContestDetailID',
            name: 'clickableContainerFloatPanel_AyohaContest_MembershipContestDetail',
            // xtype: 'panel',
           // zIndex: 150,
            zIndex: 310,
            xtype: 'container',
            //height: 475,
            height: '95%',
            //  height: '60%',
            width: 370,
            draggable: false,

            styleHtmlContent: true,
            modal: true,
            centered: true,
            //bottom: 64,
            // zIndex: 100,
            // modal: true,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },

            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            //style: ' background-color:white;',


            style: 'background-image: url("resources/icons/previewcontest.png"); background-size: 100% 98%;border-bottom:1px none;background-repeat: no-repeat;',
            // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'N';
                                RemovePages("FloatPanel_AyohaContest_MembershipContestDetailHide()");
                                _FloatPanel_AyohaContest_MembershipContestDetail.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'N';
                                RemovePages("FloatPanel_AyohaContest_MembershipContestDetailHide()");
                                _FloatPanel_AyohaContest_MembershipContestDetail.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            }


                            
                        }
                    });
                }
            },
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_AyohaContest_MembershipContestDetail',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_AyohaContest_MembershipContestDetail',
                style: ' background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '85%',
                //  margin:'-10 0 0 -7',
                items: [


                   {

                       xtype: 'container',
                       width: '100%',
                       docked: 'top',
                       // width: 40,

                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containeFloatPanel_AyohaContest_MembershipContestDetailHeader',
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
                       // hidden:true,
                       items:
                              [
                                   {
                                       xtype: 'panel',
                                       width: 10
                                   },
                            
                                   {
                                    margin: '0 0 0 0',
                                    hidden:true,
                                    id: 'htmlFloatPanel_AyohaContest_MembershipContestDetail_TitleHeaderTxt',
                                    html: '<font size=2 color=white><b>Preview Contest Details</b></font>'
                                },

                                             {
                                                 xtype: 'spacer',

                                             },


                                            
                                             
                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaContest_MembershipContestDetailBack',
                                                height: 30,
                                                width: 35,
                                                margin: '15 -30 0 0',
                                                // iconCls: 'list',
                                                html: '<img src="resources/icons/BtnCloseNew.png" width="25" height="25" alt="Company Name">',
                                              //  html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'N';
                                                    _FloatPanel_AyohaContest_MembershipContestDetail.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            
                                                    }));
                                                    RemovePages("FloatPanel_AyohaContest_MembershipContestDetailHide()");
            
                                                }
                                            },
                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_AyohaContest_MembershipContestDetail_CardIcon',
                                                       height: 30,
                                                       hidden: true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'N';

                                                           _FloatPanel_AyohaContest_MembershipContestDetail.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages(_FloatPanel_AyohaContest_MembershipContestDetail, "is_FloatPanel_AyohaContest_MembershipContestDetailOpen");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_AyohaContest_MembershipContestDetail',
                           margin:'30 0 0 0',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_AyohaContest_MembershipContestDetail',
                           style: ' background-color:transparent;',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
                           },
                           width: '100%',
                           height: '100%',
                           scrollable: {
                               directionLock: true,
                               indicators: false
                           },
                           items: [

                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_AyohaContest_MembershipContestDetailImage',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   width: '94%',
                                   height: 700,
                                   items: [
                                        {
                                            margin: '0 0 0 0',
                                            width: '100%',
                                            height: 700,
                                            id: 'htmlFloatPanel_AyohaContest_MembershipContestDetail',
                                            //html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>'
                                            // html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
                                            html: '<div class="myContent" style="background-color:white;width:100%;height:400px;">' +
                                                              '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                             '&nbsp;&nbsp;<img src="{EventCoverPhoto}" style="width:100%;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                            '<div style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div></div></div><br>',

                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                        //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   // hidden:true,
                                   margin:'-110 0 0 0',
                                   id: 'ContainerFloatPanel_AyohaContest_MembershipContestDetailText',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_AyohaContest_MembershipContestDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'left'
                                   },
                                   width: '94%',
                                   height: 500,
                                   items: [
                                       {margin:'0 0 0 10',
                                           html: '<div style="width: 100%; height:30px; background:white;text-align:left;font-size:10px;">Contest Rules:</div>',
                                       },
                                        {
                                            margin: '-10 0 0 10',
                                            id: 'htmlFloatPanel_AyohaContest_MembershipContestDetailText',
                                            html: '<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">Contest Descriptions:</div>',
                                        },
                                   ]
                               },



                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              height: 60,
                              hidden: true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_AyohaContest_MembershipContestDetailReedemVoucerBottom',
                              //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                              style: 'background-color:transparent;border-top:1px solid #DCDCDC',

                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
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

                                             xtype: 'container',
                                             width: '90%',
                                             height: 60,
                                             margin: '0 0 0 0',
                                             // name: 'containeFloatPanel_AyohaContest_MembershipContestDetailRedeemVoucher',
                                             style: 'background-color:transparent;',
                                            // style:'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:85%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [

                                                {
                                                    width: '100%',
                                                    height: 40,
                                                    id: 'htmlFloatPanel_AyohaContest_MembershipContestDetail_Register',
                                                    html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">Join The Contest Now!</div></div>'
                                                }

                                             ]
                                         },



                                         


                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_AyohaContest_MembershipContestDetail;
}














var globalFloatPanel_AyohaContest_MembershipContestDetail_ID;
var globalFloatPanel_AyohaContest_MembershipContestDetail_ContestCode;
var globalFloatPanel_AyohaContest_MembershipContestDetail_EnterpriseAccNo;
var globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus;
//function FloatPanel_AyohaContest_MembershipContestDetailShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_AyohaContest_MembershipContestDetailShow(ID) {
    AddRoutePages("FloatPanel_AyohaContest_MembershipContestDetailHide()");
    Ext.Viewport.remove(_FloatPanel_AyohaContest_MembershipContestDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContest_MembershipContestDetail());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_AyohaContest_MembershipContestDetail, "is_FloatPanel_AyohaContest_MembershipContestDetailOpen");
    

    is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'Y';

    EnterpriseLogo = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EnterpriseName = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    AdvertisementImgPath = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ModifiedWidth = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestCode = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestName = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestStatus_ContestStatus = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    StartDate_DateOnly = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EndDate_DateOnly = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EndDate_DateOnly = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestDescription = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EnterpriseAccNo = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestStatus = _DataStore_AyohaRewardContestLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_AyohaContest_MembershipContestDetail_ID = ID;
    globalFloatPanel_AyohaContest_MembershipContestDetail_ContestCode = ContestCode.get('ContestCode');
    globalFloatPanel_AyohaContest_MembershipContestDetail_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus = ContestStatus_ContestStatus.get('ContestStatus_ContestStatus');
    globalConfig_ResizeUploadedImage = "";

    Ext.getCmp('htmlFloatPanel_AyohaContest_MembershipContestDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:600px;">' +
                        //'&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo.get('EnterpriseLogo') + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName.get('EnterpriseName') + '</div></div>&nbsp;&nbsp;' +
                        '&nbsp;&nbsp;<img src="' + AdvertisementImgPath.get('AdvertisementImgPath') + '" style="width:100%;height:450px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +

                      '<div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + ContestName.get('ContestName') + '</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Type:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">' + EnterpriseName.get('EnterpriseName') + '</div></div></div></div></div><br>' +

                                                           '<div  style="width: 70%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + StartDate_DateOnly.get('StartDate_DateOnly') + ' - ' + EndDate_DateOnly.get('EndDate_DateOnly') + '</div></div><div style="width: 30%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">' + ContestStatus.get('ContestStatus') + '</div></div></div><br>');




    // '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

    Ext.getCmp('htmlFloatPanel_AyohaContest_MembershipContestDetailText').setHtml('<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">' + ContestDescription.get('ContestDescription') + '</div>');

   // alert(globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus)

    // if (globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus != 'New') {
    //     Ext.getCmp('htmlFloatPanel_AyohaContest_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Selfie</div></div>');
    // }




    
}

// function FloatPanel_AyohaContest_MembershipContestDetailShow_FromAyohaStore_ContestList(ID) {
//     AddRoutePages("FloatPanel_AyohaContest_MembershipContestDetailHide()");
//     Ext.Viewport.remove(_FloatPanel_AyohaContest_MembershipContestDetail);
//     this.overlay = Ext.Viewport.add(FloatPanel_AyohaContest_MembershipContestDetail());
//     this.overlay.show();
//     //AddRoutePages(_FloatPanel_AyohaContest_MembershipContestDetail, "is_FloatPanel_AyohaContest_MembershipContestDetailOpen");


//     is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'Y';

//     EnterpriseLogo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     EnterpriseName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     AdvertisementImgPath = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     ModifiedWidth = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     ContestCode = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     ContestName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     ContestStatus_ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     StartDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     ContestDescription = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     EnterpriseAccNo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
//     ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

//     globalFloatPanel_AyohaContest_MembershipContestDetail_ID = ID;
//     globalFloatPanel_AyohaContest_MembershipContestDetail_ContestCode = ContestCode.get('ContestCode');
//     globalFloatPanel_AyohaContest_MembershipContestDetail_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
//     globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus = ContestStatus_ContestStatus.get('ContestStatus_ContestStatus');
//     globalConfig_ResizeUploadedImage = "";

//     Ext.getCmp('htmlFloatPanel_AyohaContest_MembershipContestDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:600px;">' +
//                         '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo.get('EnterpriseLogo') + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName.get('EnterpriseName') + '</div></div>&nbsp;&nbsp;' +
//                         '&nbsp;&nbsp;<img src="' + AdvertisementImgPath.get('AdvertisementImgPath') + '" style="width:' + ModifiedWidth.get('ModifiedWidth') + 'px;height:600px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +

//                       '<div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + ContestName.get('ContestName') + '</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">' + EnterpriseName.get('EnterpriseName') + '</div></div></div></div></div><br>' +

//                                                            '<div  style="width: 70%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + StartDate_DateOnly.get('StartDate_DateOnly') + ' - ' + EndDate_DateOnly.get('EndDate_DateOnly') + '</div></div><div style="width: 30%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">' + ContestStatus.get('ContestStatus') + '</div></div></div><br>');




//     // '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

//     Ext.getCmp('htmlFloatPanel_AyohaContest_MembershipContestDetailText').setHtml('<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">' + ContestDescription.get('ContestDescription') + '</div>');

//     // alert(globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus)

//     // if (globalFloatPanel_AyohaContest_MembershipContestDetail_ContestStatus != 'New') {
//     //     Ext.getCmp('htmlFloatPanel_AyohaContest_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Selfie</div></div>');
//     // }
// }
function FloatPanel_AyohaContest_MembershipContestDetailHide() {

    if (is_FloatPanel_AyohaContest_MembershipContestDetailOpen == 'Y') {
        _FloatPanel_AyohaContest_MembershipContestDetail.hide();
        is_FloatPanel_AyohaContest_MembershipContestDetailOpen = 'N';
        RemovePages("FloatPanel_AyohaContest_MembershipContestDetailHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}





//function FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(RespondStatus) {




//    LoadingPanelShow(getLoadingIcon(), 'Save Respond....');
//    var task = Ext.create('Ext.util.DelayedTask', function () {

//        var objn = {
//            "ID": globalFloatPanel_AyohaContest_MembershipContestDetail_ID,
//            "EventCode": globalFloatPanel_AyohaContest_MembershipContestDetail_EventCode,
//            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
//            "RespondStatus": RespondStatus,
//            "CreatedBy": GetCurrAyohaUserAccountNo(),
//            "Noted": "NA",
//            "EnterpriseAccNo": globalFloatPanel_AyohaContest_MembershipContestDetail_EnterpriseAccNo,
//        };
//        console.log(objn);
//        var _value = Ext.Ajax.request({

//            type: "POST",

//            url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEventRespondInsertUpdate',

//            dataType: "json",
//            data: JSON.stringify(objn),
//            headers: {
//                "Content-Type": "application/json; charset=utf-8"
//            },

//            success: function (result, request) {

//                //console.log(result.responseText);


//                data = Ext.decode(result.responseText.trim());

//                if (data.success == "true") {
//                    FloatPanel_AyohaContest_MembershipContestDetailHide();
//                    swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/follow-up.png", "Your Respond Has Been Saved!", "Purple", "Purple");
//                    FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
//                }
//                else {

//                    swalFireFail("Fail!-->" + result.responseText.trim());
//                    Ext.Viewport.unmask();
//                    LoadingPanelHide();
//                }
//                Ext.Viewport.unmask();
//                LoadingPanelHide();

//            },

//            failure: function (result, request) {
//                swalFireFail("Fail!");
//                Ext.Viewport.unmask();
//                LoadingPanelHide();
//            }

//        });

//        Ext.Viewport.unmask();
//    });
//    task.delay(500);
//}







