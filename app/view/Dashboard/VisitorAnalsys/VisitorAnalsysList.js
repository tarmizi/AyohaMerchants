Ext.define('ianMizi.view.Dashboard.VisitorAnalsys.VisitorAnalsysList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_VisitorAnalsysList;


var isFloatPanel_VisitorAnalsysListOpen = 'N';





function FloatPanel_VisitorAnalsysList() {

    _FloatPanel_VisitorAnalsysList =
     Ext.create('Ext.Container', {
         zIndex: 100,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         //height: 685,
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_VisitorAnalsysListID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         //hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         ////////////listeners: {
         ////////////    initialize: function (c) {
         ////////////        this.element.on({
         ////////////            swipe: function (e, node, options) {

         ////////////                if (e.direction == "left") {
         ////////////                    _FloatPanel_VisitorAnalsysList.hide(Ext.fx.Animation({
         ////////////                        type: 'slideOut',
         ////////////                        direction: 'left',
         ////////////                        easing: 'cubic-bezier(.7,0,.7,1)',
         ////////////                        duration: 250

         ////////////                    }));
         ////////////                } if (e.direction == "right") {
         ////////////                    _FloatPanel_VisitorAnalsysList.hide(Ext.fx.Animation({
         ////////////                        type: 'slideOut',
         ////////////                        direction: 'right',
         ////////////                        easing: 'cubic-bezier(.7,0,.7,1)',
         ////////////                        duration: 250

         ////////////                    }));
         ////////////                }
         ////////////                isFloatPanel_VisitorAnalsysListOpen = 'N';
         ////////////              //  RemovePages(_FloatPanel_VisitorAnalsysList, "isFloatPanel_VisitorAnalsysListOpen");
         ////////////            }
         ////////////        });
         ////////////    }
         ////////////},

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_VisitorAnalsysListBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                            height: 60,
                            style:GetHeaderStyle(),
                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ccc;border-top:2px none #ECF0F1 ;background: white;',
                             id: 'containerFloatPanel_VisitorAnalsysListHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
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
                                            xtype: 'spacer',
width:20
                                        },
                                        {
                                            margin: '-6 0 0 0',
                                            id: 'htmlFloatPanel_VisitorAnalsysList_TitleHeaderTxt',
                                            html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Visitor Analsys</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                            //html: '<font size=3 color=black><b>Add New User</b></font>'
                                        },  

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                  


                                                   {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_VisitorAnalsysListBack',
                                                    height: 30,
                                                    width: 35,
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {

                                                        _FloatPanel_VisitorAnalsysList.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                            //direction: 'left',
                                                            //easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250

                                                        }));
                                                        isFloatPanel_VisitorAnalsysListOpen = 'N';
                                                        //RemovePages(_FloatPanel_VisitorAnalsysList, "isFloatPanel_VisitorAnalsysListOpen");

                                                    }
                                                },
                                                {
                                                    xtype: 'spacer',
        width:20
                                                },
                                            {
                                                xtype: 'button',
                                                hidden:true,

                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 40,
                                                width: 40,
                                                // iconCls: 'list',
                                                id: 'btnFloatPanel_VisitorAnalsysList_PicProfile',
                                                html: '<div ><img src="resources/icons/analisis-removebg-preview.png" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_VisitorAnalsysList.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));

                                                    isFloatPanel_VisitorAnalsysListOpen = "N";
                                                    //RemovePages(_FloatPanel_VisitorAnalsysList, "isFloatPanel_VisitorAnalsysListOpen");
                                                }
                                            },












                                    ]

                         },


                   {
                       xtype: 'list',
                       width: '100%',
                       height: '100%',
                       margin:'0 0 0 0',
                       // height: '98%',
                       // flex: 1,
                       store: _DataStore_VisitorAnalsysLoadDetailsStore,
                       id: 'FloatPanel_VisitorAnalsysList',
                       mode: 'SINGLE',
                       // width: '100%',
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
                       itemTpl: '<div class="myContent" style="background-color:white;width:100%">' +
  '<br>'+
                                                                              '<div style="width:100%;text-align:right;margin:-2px 0px 0px -55px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;height:1px;"> <input type="checkbox"   style="margin:-20px 0px 0px 0px"  class="largerCheckbox" onclick="VisitorAnalsys_OnChangeCheckbox (this,' + "'" + '{PlayerID}' + "'" + ',' + "'" + '{MobilePhoneNo}' + "'" + ',' + "'" + '{SubscriberAccNo}' + "'" + ')" name="checkbox" /></div>' +


                         '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-30px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_VisitorAnalsys_OpenMemberImage({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:4%;vertical-align:center"><img src="{Photo}" style="border:1px solid black; width:75px;height:75px;border-radius:50%;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:70%;vertical-align:center"><b>{AccountName}</b><br>Visit Count:{VisitCount}<br>Last Visit:{lastAccess}</td></tr></table>' +
                      '<br>' +
                          '<div style="width:100%;height:1px;text-align:center;margin:-34px 0px 0px 0px;background-color:white;"></div>',

                       emptyText: '<div class="myContent">No visitor!</div>',
                       //listeners: {
                       //    itemsingletap: function (list, idx, target, records, evt) {

                       //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                       //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                       //        //var MembershipCardCode = records.get('MembershipCardCode');
                       //        //var ID = records.get('ID');
                       //        ////FloatPanel_AyohaNotification_EditCardShow_Edit(ID);
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
                       listeners: {
                           itemswipe: function (list, idx, target, record, evt) {
                               //  To get the selection you should use getSelection() instead
                               //////var selected = list.getActiveItem();
                               //////alert(list.getActiveItem());
                               //////if (!selected) { return; }

                               //////var selectedIndex = selected[0];
                               //////alert([selectedIndex, idx]);
                               //Ext.Msg.alert('itemswipe', idx);


                           } // itemswipe
                       }

                   },


  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
      height: 50,
      // width: 40,
     style: GetFooterStyle(),
      //style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
     // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
      id: 'containerFloatPanel_VisitorAnalsysListFooter',
      //style: {
      //    // background: '#D25959',
      //    background: 'transparent',
      //    // border: '2px'
      //},
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
                     width: 10,
                     height: 50,
                 },


                 {
                     xtype: 'container',
                    // width: '100%',
                     layout: {
                         type: 'vbox',
                         pack: 'center',
                         align: 'center',
                     }, items: [
                            {


                                // iconCls: 'list',
                                id: 'htmlFloatPanel_VisitorAnalsysList_TotalVisitTxt',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Total Visit</div>',

                            },

                        

                            {
                              // margin: '-7 0 0 0',
                                id: 'htmlFloatPanel_VisitorAnalsysList_TotalVisit',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:8px 0px 0px 0px;">0</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                     ]

                 },
                      {
                          xtype: 'panel',
                          width: 10
                      },

{
    xtype: 'container',
    // width: '100%',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    }, items: [
           {


               // iconCls: 'list',
               id: 'htmlFloatPanel_VisitorAnalsysList_TotalVisitorTxt',
               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Total Visitor</div>',

           },

        
           {
              // margin: '-7 0 0 0',
               id: 'htmlFloatPanel_VisitorAnalsysList_TotalVisitor',
               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:8px 0px 0px 0px">0/div>',

               //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
           },

    ]

},


 {
     xtype: 'spacer',
     //width: 10
 },


 {
     xtype: 'container',
     // width: '100%',
     layout: {
         type: 'vbox',
         pack: 'center',
         align: 'center',
     }, items: [
            {


                // iconCls: 'list',
                id: 'htmlFloatPanel_VisitorAnalsysList_SendMessagingTxt',
                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:4px 0px 0px 0px">Send Message to Visitor</div>',

            },

            {
                xtype: 'container',
                // width: '100%',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [
                       {
                           xtype: 'button',
                           margin: '-5 0 0 0',
                           id: 'btnFloatPanel_VisitorAnalsysList_SendMessaging',
                           height: 40,
                           width: 45,
                           // iconCls: 'list',
                           html: '<div ><img src="resources/icons/smsgrey01.png" width="35" height="30" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {

                               //for (var i = 0; i < arrVisitorAnalsys_SubscriberAccNo.length; i++) {
                               //    alert(arrVisitorAnalsys_SubscriberAccNo[i]);
                               //}
                               if (arrVisitorAnalsys_SubscriberAccNo.length >= 1) {
                                   FloatPanel_AyohaNotificationManagement_CreateMessageShow();

                                   
                                   Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_SetReceipient').setHidden(true);
                                   Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_SetReceipient_FromVisitorAnalsys').setHidden(false);
                               } else {
                                 //  Ext.getCmp('btnFloatPanel_VisitorAnalsysList_SendMessaging').setHtml('<div ><img src="resources/icons/smsgrey01.png" width="35" height="30" alt="Company Name"></div>');
                               }

                           }
                       },
                        //{
                        //    xtype: 'button',
                        //    id: 'btnFloatPanel_VisitorAnalsysList_SendMessaging_PN',
                        //    height: 30,
                        //    width: 35,
                        //    // iconCls: 'list',
                        //    html: '<div ><img src="resources/icons/NotificationPurple.png" width="25" height="20" alt="Company Name"></div>',
                        //    ui: 'plain',
                        //    handler: function () {


                        //    }
                        //},
                ]

            }

            //{
            //    margin: '0 0 0 0',
            //    id: 'htmlFloatPanel_VisitorAnalsysList_TotalVisitor',
            //    // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
            //    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:4px 0px 0px 0px">3</div>',

            //    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
            //},

     ]

 },

  {
      xtype: 'container',
      width: 10,
      height: 50,
  },




             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_VisitorAnalsysList;





}

function FloatPanel_VisitorAnalsysListShowTest() {

    Ext.Viewport.remove(_FloatPanel_VisitorAnalsysList);
    this.overlay = Ext.Viewport.add(FloatPanel_VisitorAnalsysList());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_VisitorAnalsysList, "isFloatPanel_VisitorAnalsysListOpen");
    isFloatPanel_VisitorAnalsysListOpen = 'Y';
    
    //if (countLikeDislikeTap == 0) {
    //    FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore();
    //    return
    //}

    //if (countLikeDislikeTap > 0) {
    //    FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore_Save();

    //    return
    //}








}

function FloatPanel_VisitorAnalsysListShow(Module, Year, Month,TotalVisit) {

    Ext.Viewport.remove(_FloatPanel_VisitorAnalsysList);
    this.overlay = Ext.Viewport.add(FloatPanel_VisitorAnalsysList());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_VisitorAnalsysList, "isFloatPanel_VisitorAnalsysListOpen");
    isFloatPanel_VisitorAnalsysListOpen = 'Y';
    var m = ConvertShortStringMonth(Month)


    FloatPanel_VisitorAnalsysLoadDetails(Module, Year, m);
    Ext.getCmp('htmlFloatPanel_VisitorAnalsysList_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Visitor Analsys</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + Module + ' Visitor</div>');
    Ext.getCmp('htmlFloatPanel_VisitorAnalsysList_TotalVisit').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:8px 0px 0px 0px;">'+TotalVisit.replace("Visit","")+'</div>');
 
    //if (countLikeDislikeTap == 0) {
    //    FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore();
    //    return
    //}

    //if (countLikeDislikeTap > 0) {
    //    FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore_Save();

    //    return
    //}








}


function FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore_Save() {


    var objn = {
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "isLike": likedStatus
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/VisitorAnalsys/AyohaStoreLikeStatusInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                //AyohaMerchantReview_AddEditHide();


                countLikeDislikeTap = 0;
                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload..' });
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore();
                    Ext.Viewport.unmask();
                });
                Ext.Viewport.unmask();
                task.delay(500);

            }
            else {

                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!");
            Ext.Viewport.unmask();
        }

    });
}





function FloatPanel_VisitorAnalsysLoadDetails(Module,Year,Month) {


  

    _DataStore_VisitorAnalsysLoadDetailsStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VisitorAnalsysLoadDetailsStore.getProxy().setExtraParam('Module', Module);
    _DataStore_VisitorAnalsysLoadDetailsStore.getProxy().setExtraParam('Month', Month);
    _DataStore_VisitorAnalsysLoadDetailsStore.getProxy().setExtraParam('Year', Year);
    _DataStore_VisitorAnalsysLoadDetailsStore.getProxy().setUrl(GetAPIurl() + '/VisitorAnalsys/VisitorAnalsysLoadDetails');




    console.log(GetEnterpriseAccNo());
    console.log(Module);
    console.log(Month);
    console.log(Year);

    _DataStore_VisitorAnalsysLoadDetailsStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {
        
        var count = _DataStore_VisitorAnalsysLoadDetailsStore.getCount();
        Ext.getCmp('htmlFloatPanel_VisitorAnalsysList_TotalVisitor').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:8px 0px 0px 0px">' + count + '</div>');
        // alert(count);
      //  Ext.getCmp('htmlFloatPanel_VisitorAnalsysList_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Loves</div>');


    });
    task.delay(1000);


    //Ext.Viewport.setMasked(false);
}





function FloatPanel_VisitorAnalsysListHide() {
    if(isFloatPanel_VisitorAnalsysListOpen == 'Y'){
        _FloatPanel_VisitorAnalsysList.hide(); isFloatPanel_VisitorAnalsysListOpen = 'N';
    }
   
  //  RemovePages(_FloatPanel_VisitorAnalsysList, "isFloatPanel_VisitorAnalsysListOpen");
}


var arrVisitorAnalsys_SubscriberAccNo = [];
var arrVisitorAnalsys_PlayerID = [];
var arrVisitorAnalsys_MobilePhoneNo = [];

function VisitorAnalsys_OnChangeCheckbox(checkbox, PlayerID, MobilePhoneNo, SubscriberAccNo) {



  
    //var AccountNo = _DataStore_VisitorAnalsysLoadDetailsStore.findRecord('ID', ID, 0, false, false, true);
    //var PlayerID = _DataStore_VisitorAnalsysLoadDetailsStore.findRecord('ID', ID, 0, false, false, true);
    //var PAccountNos = AccountNo.get('SubscriberAccNo');
    //var PlayerIDs = PlayerID.get('PlayerID');
   // var n = arrVisitorAnalsys_SubscriberAccNo.includes(SubscriberAccNo);

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        //if (n) {

        //} else {
           
        //    //var xx = document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).value;
        //    //if (xx) {
        //    //    var x = document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).value;
        //    //    console.log(x);
        //    //    console.log(PAccountNos);
        //    //    console.log(PlayerIDs);

                
        //    //}
        //    //else {
        //    //    swalFireWarning("Amount is Compulsory!");
        //    //    checkbox.checked = false;
        //    //}



        //}



        arrVisitorAnalsys_SubscriberAccNo.push(SubscriberAccNo);
        arrVisitorAnalsys_PlayerID.push(PlayerID);
        arrVisitorAnalsys_MobilePhoneNo.push(MobilePhoneNo);




    }
    else {
        //  alert("The check box is not checked.");
        // document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).disabled = true;
        //var index = arrFloatPanel_PointManagement_CreatePoint.indexOf(PAccountNos);
        //if (index > -1) {
        //    arrFloatPanel_PointManagement_CreatePoint.splice(index, 1);
        //}
        var indexs = arrVisitorAnalsys_SubscriberAccNo.indexOf(SubscriberAccNo);
        if (indexs > -1) {
            arrVisitorAnalsys_SubscriberAccNo.splice(indexs, 1);
        }

        var indexss = arrVisitorAnalsys_PlayerID.indexOf(PlayerID);
        if (indexss > -1) {
            arrVisitorAnalsys_PlayerID.splice(indexss, 1);
        }

        var indexssd = arrVisitorAnalsys_MobilePhoneNo.indexOf(MobilePhoneNo);
        if (indexssd > -1) {
            arrVisitorAnalsys_MobilePhoneNo.splice(indexssd, 1);
        }

       

    }



    //alert(arrVisitorAnalsys_SubscriberAccNo.length);

    if (arrVisitorAnalsys_SubscriberAccNo.length >= 1) {
        
        Ext.getCmp('btnFloatPanel_VisitorAnalsysList_SendMessaging').setHtml('<div ><img src="resources/icons/SmsIcon01.png" width="35" height="30" alt="Company Name"></div>');
    } else {
        Ext.getCmp('btnFloatPanel_VisitorAnalsysList_SendMessaging').setHtml('<div ><img src="resources/icons/smsgrey01.png" width="35" height="30" alt="Company Name"></div>');
    }



    
}



function VisitorAnalsys_SetRecipientShowStaging() {


    var AyohaNotificationCreateMsgSUbject = document.getElementById('AyohaNotificationCreateMsgSUbject').value;
    var AyohaNotificationManagement_CreateMessage_BodyMsg = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value;

    if (AyohaNotificationCreateMsgSUbject.length < 2) {

        swalFireFail("No Subject Message!");
        return;
    }

    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Text") {

        if (AyohaNotificationManagement_CreateMessage_BodyMsg.length < 2) {

            swalFireFail("No  Message !");
            return;
        }
        if (FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage.length < 1) {

            swalFireFail("No  Footer Image !");
            return;
        }
        FloatPanel_AyohaNotificationManagement_SetRecipientShow();
        VisitorAnalsys_MembersList_select();
        FloatPanel_VisitorAnalsysListHide();
        return;
    }

    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Image") {

        if (FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image.length < 2) {
            swalFireFail("No Image !");
            return;
        }
        FloatPanel_AyohaNotificationManagement_SetRecipientShow();
        VisitorAnalsys_MembersList_select();
        FloatPanel_VisitorAnalsysListHide();
    }




}




function VisitorAnalsys_MembersList_select() {

    

    


    FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    if (arrVisitorAnalsys_SubscriberAccNo.length > 0) {
        for (var i = 0; i < arrVisitorAnalsys_SubscriberAccNo.length; i++) {
           
            FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo += arrVisitorAnalsys_SubscriberAccNo[i] + ",";
            //console.log("FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo:" + FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);


        }


        var text = FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo.replace("undefined", "");
        globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = text.slice(0, -1) //'abcde'

        //console.log("globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo:" + globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);



    } else {
        //alert('gile')
        globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    }
   // console.log("globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo:" + globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);

   // console.log(globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);

   // console.log("NotificationCode:" + GetNotificationCode());
  

    var objn = {
        "NotificationCode": GetNotificationCode(),
        "SubscriberAccNo": globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberInsert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                //swalFireSuccess("Push Notification Processed Successfully!");
                //FloatPanel_AyohaNotificationManagement_MembersListHide();
                arrVisitorAnalsys_SubscriberAccNo.length = 0;
               // FloatPanel_AyohaNotificationManagement_SetRecipient_RecipientSpecificMemberLoadByNotificationCodeStore();               
                //Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SpecificMemberList').setHidden(false);
                //Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_AllMembersList').setHidden(true);
                //Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SegmentList').setHidden(true);

                Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_specificsubscriber').setChecked(true);
                
            }
            else {
                swalFireFail("Failed!" + result.responseText.trim());
            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            Ext.Viewport.unmask();
            swalFireFail("Failed!" + result.responseText.trim());
        }

    });

}




function VisitorAnalsys_MembersList_select_fromBirthDay() {

    

    


    FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    if (arrVisitorAnalsys_SubscriberAccNo.length > 0) {
        for (var i = 0; i < arrVisitorAnalsys_SubscriberAccNo.length; i++) {
           
            FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo += arrVisitorAnalsys_SubscriberAccNo[i] + ",";
            //console.log("FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo:" + FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);


        }


        var text = FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo.replace("undefined", "");
        globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = text.slice(0, -1) //'abcde'

        //console.log("globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo:" + globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);



    } else {
        //alert('gile')
        globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    }
   // console.log("globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo:" + globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);

   // console.log(globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);

   // console.log("NotificationCode:" + GetNotificationCode());
  

    var objn = {
        "NotificationCode": GetNotificationCode(),
        "SubscriberAccNo": globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberInsert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                //swalFireSuccess("Push Notification Processed Successfully!");
                //FloatPanel_AyohaNotificationManagement_MembersListHide();
                arrVisitorAnalsys_SubscriberAccNo.length = 0;
               // FloatPanel_AyohaNotificationManagement_SetRecipient_RecipientSpecificMemberLoadByNotificationCodeStore();               
                //Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SpecificMemberList').setHidden(false);
                //Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_AllMembersList').setHidden(true);
                //Ext.getCmp('FloatPanel_AyohaNotificationManagement_SetRecipient_SegmentList').setHidden(true);

                Ext.getCmp('radioFloatPanel_AyohaNotificationManagement_SetRecipient_specificsubscriber').setChecked(true);
                
            }
            else {
                swalFireFail("Failed!" + result.responseText.trim());
            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            Ext.Viewport.unmask();
            swalFireFail("Failed!" + result.responseText.trim());
        }

    });

}


