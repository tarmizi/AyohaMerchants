Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryChargeList', {

});

var _FloatPanel_AyohaStore_DeliveryChargeList;


var isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';

var _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";









function FloatPanel_AyohaStore_DeliveryChargeList() {

    _FloatPanel_AyohaStore_DeliveryChargeList =
     Ext.create('Ext.Container', {
         requires: [
       'Ext.util.DelayedTask',
         ],
         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaStore_DeliveryChargeListID',
         draggable: false,
         zIndex: 280,


         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
         // hideOnMaskTap: true,
         layout: {
             type: 'vbox',
             pack: 'start',
            align: 'center'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',

         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                //if (e.direction == "up") {
         //                //    FloatPanel_AyohaStore_DeliveryChargeListHide();
         //                //}
         //                if (e.direction == "left") {
         //                    FloatPanel_AyohaStore_DeliveryChargeList_CartShow();

         //                }
         //            }
         //        });
         //    }
         //},


         items: [

   {

       xtype: 'container',
       width: '100%',
       height: 60,
       //zIndex:-10,
       //  title: '<font size="3" color="white">Live Tracking Map</font>',
       //hidden: true,
       docked: 'top',
       id: 'containerFloatPanel_AyohaStore_DeliveryChargeListHeader1',
       style:GetHeaderStyle(),
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                   id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_TitleTxt',
                   html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 19px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Delivery Charge List</div>',

                   //  html: '<div style="margin:-3px 0px 0px 0px;font-size:12px;color:white;font-weight:bold;">Product List</div>'
                  // html: '<font size=2 color=white><b>Product List</b></font>'
               },




                 
                             {
                                 xtype: 'spacer',

                             },

                             {
                                xtype: 'button',
                                id: 'btnFloatPanel_AyohaStore_DeliveryChargeListBack',
                                height: 30,
                                width: 35,
                                margin: '0 0 0 0',
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                    _FloatPanel_AyohaStore_DeliveryChargeList.hide(Ext.fx.Animation({
                                        type: 'popOut',
                                        //direction: 'left',
                                        //easing: 'cubic-bezier(.7,0,.7,1)',
                                        duration: 250
          
                                    }));
                                    isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
                                    _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";
                                    RemovePages(_FloatPanel_AyohaStore_DeliveryChargeList, "isFloatPanel_AyohaStore_DeliveryChargeListOpen");
                                }
                            },
          
                            {
                                xtype: 'spacer',
                                width:20
                            },


                                       {
                                           xtype: 'button',
                                           hidden:true,
                                           id: 'btnFloatPanel_AyohaStore_DeliveryChargeListIcon',
                                           height: 30,
                                           margin: '-5 0 0 0',
                                           width: 35,
                                           // iconCls: 'list',
                                           html: '<div ><img src="resources/icons/deliverypurple01.png" width="25" height="20" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {
                                               isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
                                               _FloatPanel_AyohaStore_DeliveryChargeList.hide(Ext.fx.Animation({
                                                   type: 'slideOut',
                                                   direction: 'right',
                                                   easing: 'cubic-bezier(.7,0,.7,1)',
                                                   duration: 250

                                               }));
                                               RemovePages(_FloatPanel_AyohaStore_DeliveryChargeList, "isFloatPanel_AyohaStore_DeliveryChargeListOpen");

                                               //  RemovePages(_FloatPanel_AyohaNotification, "isFloatPanel_AyohaNotificationOpen");
                                               //FloatPanel_AyohaNotification_AddCardHide();
                                           }
                                       },







              ]

   },
                     {


                         xtype: 'list',
                         margin: '0 0 0 0',
                         // height: '64%',
                         // height: '100%',
                         // height: 200,
                         //   flex: 2,
                         store: _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore,
                         id: 'FloatPanel_AyohaStore_DeliveryChargeList_SaleItemListAdministrator',
                         mode: 'SINGLE',
                         disableSelection: true,
                         grouped: true,
                         style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                         //itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +
                         //                                                 ///ori  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br> <div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0.05 Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*0.05 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;height:45px" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});">{ItemDescriptions}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});"><input type="number" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_RewardStore_OpenStore()" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                         //                                                     '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:break-all;margin:5px 0px 0px 0px;height:auto;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});">{ItemName}xx</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});">{ItemDescriptions}ldksfdskfklskdfjksjdfksdkfkdsfkldsfkdsfkdskfsdfkdsfkldsfksdjkfsfgdgjkdfgfdkfdjgfdjkfdkjghjgfhdhgfdjghfjdhgjfdhgfdjghfdjghfjghfdjhgfjghdjfghdfjghfj</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;"><input type="number" id="input-FloatPanel_AyohaStore_DeliveryChargeList_Qty{ID}" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_DeliveryChargeList_AddToCart({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                         //                                                   + '</div>',

                         itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:178px;">' +

                                                                                                            //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')"  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'
                                                                                                           /// '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:188px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ')"><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{DeliveryRate_Charge}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-7px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Show Delivery Charge?(Y=Yes,N=No)</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ')">{IsEnableDeliveryChargeSetting}</div></th></tr></thead></table>'
                                                                                                            '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:188px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" ><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryRate_Charge}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-7px 0px 0px 0px;height:35px"><u>Show Delivery Charge?(Y=Yes,N=No)</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{IsEnableDeliveryChargeSetting}</div></th></tr></thead></table>'

            + '</div>'

                                                         + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_DialogBoxShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'DeliveryChargeSetting'" + ')" class="buttonsHtmlBgTransparentListBtn" style="margin:0px -35px 0px 0px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button>&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button OnClick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"  class="buttonsHtmlBgTransparentListBtn" style="margin:0px -25px 0px 0px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button>&nbsp;&nbsp;&nbsp;</div>',

                         emptyText: '<div class="myContent">No Delivery Charge Setting</div>',
                         width: '98%',
                         height: '95%',
                         // height: '100%',

                         listeners: {


                             itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                             },

                             itemsingletap: function (dataview, index, target, record, e, eOpts) {

                             }
                         }


                     },


                     {


                        xtype: 'list',
                        margin: '0 0 0 0',
                        hidden:true,
                        // height: '64%',
                        // height: '100%',
                        // height: 200,
                        //   flex: 2,
                        store: _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore,
                       // id: 'FloatPanel_AyohaStore_DeliveryChargeList_SaleItemListStaff',
                        mode: 'SINGLE',
                        disableSelection: true,
                        grouped: true,
                        style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                        //itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +
                        //                                                 ///ori  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br> <div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0.05 Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*0.05 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;height:45px" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});">{ItemDescriptions}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});"><input type="number" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_RewardStore_OpenStore()" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                        //                                                     '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:break-all;margin:5px 0px 0px 0px;height:auto;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});">{ItemName}xx</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});">{ItemDescriptions}ldksfdskfklskdfjksjdfksdkfkdsfkldsfkdsfkdskfsdfkdsfkldsfksdjkfsfgdgjkdfgfdkfdjgfdjkfdkjghjgfhdhgfdjghfjdhgjfdhgfdjghfdjghfjghfdjhgfjghdjfghdfjghfj</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;"><input type="number" id="input-FloatPanel_AyohaStore_DeliveryChargeList_Qty{ID}" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_DeliveryChargeList_AddToCart({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                        //                                                   + '</div>',

                        itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:178px;">' +

                                                                                                           //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')"  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'
                                                                                                          /// '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:188px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ')"><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{DeliveryRate_Charge}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-7px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Show Delivery Charge?(Y=Yes,N=No)</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ')">{IsEnableDeliveryChargeSetting}</div></th></tr></thead></table>'
                                                                                                           '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:188px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" ><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryRate_Charge}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-7px 0px 0px 0px;height:35px"><u>Show Delivery Charge?(Y=Yes,N=No)</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{IsEnableDeliveryChargeSetting}</div></th></tr></thead></table>'

           + '</div>'

                                                        + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;visibility:hidden;"><button OnClick="FloatPanel_DialogBoxShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'DeliveryChargeSetting'" + ')" class="buttonsHtmlBgTransparentListBtn" style="margin:0px -35px 0px 0px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button>&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button OnClick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"  class="buttonsHtmlBgTransparentListBtn" style="margin:0px -25px 0px 0px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button>&nbsp;&nbsp;&nbsp;</div>',

                        emptyText: '<div class="myContent">No Delivery Charge Setting</div>',
                        width: '98%',
                        height: '95%',
                        // height: '100%',

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {

                            }
                        }


                    },
                     {
                         xtype: 'container',
                         docked: 'bottom',
                         width: '100%',
                         height: 50,
                         style:GetFooterStyle(),
                         //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid #EAEEF3;',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'
                         },
                         items: [
                            {
                                xtype: 'spacer',
                                width:20
                            },
                            {
                                xtype: 'container',
                                //  width: '100%',
                                margin: '3 0 0 0',
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'
                                },
                                items: [
                                     {
                                         html: '<div style="margin:0px 0px 0px 0px;font-size:16px;color:black;font-weight:normal;">Record Found:</div>'
                                     },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_recordFound',
                                        html: '<div style="margin:-1px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">0</div>'
                                    },
                                   
                                ]
                            },
                            
                             
                        {
                            xtype: 'spacer',


                        },
                      {
                          id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_AddNewProduct',
                          //margin: '-27 0 0 0',
                          margin: '0 0 -4 0',
                          html: '<button OnClick="FloatPanel_AyohaStore_DeliveryChargeShow()" class="buttonAddNewDeliveryCharge">Add New Delivery Charge</button>'



                      },
                      {
                        xtype: 'spacer',
                        width:20
                    },

                         ]

                     },



         ]















     });
    return _FloatPanel_AyohaStore_DeliveryChargeList;



}



function FloatPanel_AyohaStore_DeliveryChargeListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryChargeList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryChargeList());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_DeliveryChargeList, "isFloatPanel_AyohaStore_DeliveryChargeListOpen");
    isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'Y';
    FloatPanel_AyohaStore_DeliveryChargeListAdjustHeight();
    FloatPanel_AyohaStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore();





    // FloatPanel_AyohaStore_DeliveryChargeList_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
    //FloatPanel_AyohaStore_DeliveryChargeListAdjustHeight();



}












function FloatPanel_AyohaStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore() {

    _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '//ChargeDeliverySetting/ChargeDeliverySettingLoadByEnterpriseAccNo');
    _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.load();


    // 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count = _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryChargeList_recordFound').setHtml('<div style="margin:0px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">' + Count + '</div>');

      
        // alert(Count);


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_DeliveryChargeListHide() {
    _FloatPanel_AyohaStore_DeliveryChargeList.hide(); isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
    _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";
    RemovePages(_FloatPanel_AyohaStore_DeliveryChargeList, "isFloatPanel_AyohaStore_DeliveryChargeListOpen");
}



function FloatPanel_AyohaStore_DeliveryChargeListAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 96;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    //Ext.getCmp('FloatPanel_AyohaStore_DeliveryChargeListID').setHeight(x + 20);
    //Ext.getCmp('FloatPanel_AyohaStore_DeliveryChargeList_SaleItemList').setHeight(newHeights);


}


