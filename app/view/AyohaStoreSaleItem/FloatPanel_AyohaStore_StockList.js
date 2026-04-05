Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_StockList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_StockList;


var isFloatPanel_AyohaStore_StockListOpen = 'N';





function FloatPanel_AyohaStore_StockList() {

    _FloatPanel_AyohaStore_StockList =
     Ext.create('Ext.Panel', {
         zIndex: 400,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         //height: 685,
         height: '101%',
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_StockListID',
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
         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //////////listeners: {
         //////////    initialize: function (c) {
         //////////        this.element.on({
         //////////            swipe: function (e, node, options) {

         //////////                if (e.direction == "left") {
         //////////                    _FloatPanel_AyohaStore_StockList.hide(Ext.fx.Animation({
         //////////                        type: 'slideOut',
         //////////                        direction: 'left',
         //////////                        easing: 'cubic-bezier(.7,0,.7,1)',
         //////////                        duration: 250

         //////////                    }));
         //////////                } if (e.direction == "right") {
         //////////                    _FloatPanel_AyohaStore_StockList.hide(Ext.fx.Animation({
         //////////                        type: 'slideOut',
         //////////                        direction: 'right',
         //////////                        easing: 'cubic-bezier(.7,0,.7,1)',
         //////////                        duration: 250

         //////////                    }));
         //////////                }
         //////////                isFloatPanel_AyohaStore_StockListOpen = 'N';
         //////////                //  RemovePages(_FloatPanel_AyohaStore_StockList, "isFloatPanel_AyohaStore_StockListOpen");
         //////////            }
         //////////        });
         //////////    }
         //////////},

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',

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
                id: 'FloatPanel_AyohaStore_StockListBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
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
                             // width: 40,
                             style: ' background-color:transparent;',
                            // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaStore_StockListHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaStore_StockListBack',
                                                      height: 35,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="25" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaStore_StockList.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaStore_StockListOpen = 'N';
                                                          //RemovePages(_FloatPanel_AyohaStore_StockList, "isFloatPanel_AyohaStore_StockListOpen");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                  {
                                                      margin: '0 -5 0 0',
                                                      id: 'htmlFloatPanel_AyohaStore_StockList_TitleTxt',
                                                      html: '<font size=2 color=white><b>Stock List</b></font>'
                                                      //  html: '<div style="margin:0px 0px 0px 0px;font-size:12px;color:white;font-weight:bold;">Add New Product</div>'
                                                  },
                                            {
                                                xtype: 'button',

                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 35,
                                                width: 35,
                                                margin: '-5 0 0 0',
                                                // iconCls: 'list',
                                                id: 'btnFloatPanel_AyohaStore_StockList_PicProfile',
                                                html: '<div ><img src="resources/icons/stocklistwhite01.png" width="25" height="25" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_AyohaStore_StockList.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));

                                                    isFloatPanel_AyohaStore_StockListOpen = "N";
                                                    //RemovePages(_FloatPanel_AyohaStore_StockList, "isFloatPanel_AyohaStore_StockListOpen");
                                                }
                                            },












                                    ]

                         },


                   {
                       xtype: 'list',
                       width: '100%',
                       height: '100%',
                       // height: '98%',
                       // flex: 1,
                       store: _DataStore_VisitorAnalsysLoadDetailsStore,
                       id: 'FloatPanel_AyohaStore_StockList',
                       mode: 'SINGLE',
                       // width: '100%',
                       disableSelection: true,
                       itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +
  '<br>' +
                                                                              '<div style="width:110%;text-align:right;margin:-2px 0px 0px -40px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;height:1px;"> <input type="checkbox"   style="margin:-20px 0px 0px 0px"  class="largerCheckbox" onclick="VisitorAnalsys_OnChangeCheckbox (this,' + "'" + '{PlayerID}' + "'" + ',' + "'" + '{MobilePhoneNo}' + "'" + ',' + "'" + '{SubscriberAccNo}' + "'" + ')" name="checkbox" /></div>' +


                         '<table style="border-collapse:collapse;border-spacing:0;width:104%;background-color:white;margin:-30px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_VisitorAnalsys_OpenMemberImage({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Photo}" style="border:1px solid black; width:75px;height:75px;border-radius:50%;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{AccountName}</b><br>Visit Count:{VisitCount}<br>Last Visit:{lastAccess}</td></tr></table>' +
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
      height: 40,
      // width: 40,
      style: ' background-color:white;',
      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      //  title: '<font size="3" color="white">Live Tracking Map</font>',
      //hidden: true,

      id: 'containerFloatPanel_AyohaStore_StockListFooter',
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
                     // width: '100%',
                     layout: {
                         type: 'vbox',
                         pack: 'center',
                         align: 'center',
                     }, items: [
                            {


                                // iconCls: 'list',
                                id: 'htmlFloatPanel_AyohaStore_StockList_TotalVisitTxt',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:4px 0px 0px 0px">Total Visit</div>',

                            },



                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaStore_StockList_TotalVisit',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:4px 0px 0px 0px">..</div>',

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
               id: 'htmlFloatPanel_AyohaStore_StockList_TotalVisitorTxt',
               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:4px 0px 0px 0px">Total Visitor</div>',

           },

           
           {
               margin: '0 0 0 0',
               id: 'htmlFloatPanel_AyohaStore_StockList_TotalVisitorNew',
               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:4px 0px 0px 0px">0</div>',

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
                id: 'htmlFloatPanel_AyohaStore_StockList_SendMessagingTxt',
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
                           id: 'btnFloatPanel_AyohaStore_StockList_SendMessaging',
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
                                   //  Ext.getCmp('btnFloatPanel_AyohaStore_StockList_SendMessaging').setHtml('<div ><img src="resources/icons/smsgrey01.png" width="35" height="30" alt="Company Name"></div>');
                               }

                           }
                       },
                        //{
                        //    xtype: 'button',
                        //    id: 'btnFloatPanel_AyohaStore_StockList_SendMessaging_PN',
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
            //    id: 'htmlFloatPanel_AyohaStore_StockList_TotalVisitor',
            //    // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
            //    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:4px 0px 0px 0px">3</div>',

            //    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
            //},

     ]

 },






             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_StockList;





}



function FloatPanel_AyohaStore_StockListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_StockList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_StockList());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_AyohaStore_StockList, "isFloatPanel_AyohaStore_StockListOpen");
    //isFloatPanel_AyohaStore_StockListOpen = 'Y';
    //var m = ConvertShortStringMonth(Month)


    //FloatPanel_VisitorAnalsysLoadDetails(Module, Year, m);
    //Ext.getCmp('htmlFloatPanel_AyohaStore_StockList_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Visitor Analsys</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + Module + ' Visitor</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_StockList_TotalVisit').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + TotalVisit + '</div>');




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








function FloatPanel_AyohaStore_StockListHide() {
    _FloatPanel_AyohaStore_StockList.hide(); isFloatPanel_AyohaStore_StockListOpen = 'N';
    //  RemovePages(_FloatPanel_AyohaStore_StockList, "isFloatPanel_AyohaStore_StockListOpen");
}









