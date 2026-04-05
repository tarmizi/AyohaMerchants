Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStoreMerchant_ProductList', {

});

var _FloatPanel_AyohaStoreMerchant_ProductList;


var isFloatPanel_AyohaStoreMerchant_ProductListOpen = 'N';

var _FloatPanel_AyohaStoreMerchant_ProductList_isFirstLoad = "N";









function FloatPanel_AyohaStoreMerchant_ProductList() {

    _FloatPanel_AyohaStoreMerchant_ProductList =
     Ext.create('Ext.Panel', {
         requires: [
       'Ext.util.DelayedTask',
         ],
         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaStoreMerchant_ProductListID',
         draggable: false,
         zIndex: 280,


         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
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
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         //style: 'background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',

         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                //if (e.direction == "up") {
         //                //    FloatPanel_AyohaStoreMerchant_ProductListHide();
         //                //}
         //                if (e.direction == "left") {
         //                    FloatPanel_AyohaStoreMerchant_ProductList_CartShow();

         //                }
         //            }
         //        });
         //    }
         //},


         items: [

   {

       xtype: 'container',
       width: '100%',
       // width: 40,
       //zIndex:-10,
       //  title: '<font size="3" color="white">Live Tracking Map</font>',
       //hidden: true,
       docked: 'top',
       id: 'containerFloatPanel_AyohaStoreMerchant_ProductListHeader1',
       // style: "background-color: transparent;",
       //style: {
       //    // background: '#D25959',
       //    background: 'transparent',
       //    // border: '2px'
       //},
       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
       style: 'background-color:transparent',
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
                      xtype: 'button',
                      id: 'btnFloatPanel_AyohaStoreMerchant_ProductListBack',
                      height: 30,
                      width: 35,
                      margin: '0 0 0 0',
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          _FloatPanel_AyohaStoreMerchant_ProductList.hide(Ext.fx.Animation({
                              type: 'slideOut',
                              direction: 'left',
                              easing: 'cubic-bezier(.7,0,.7,1)',
                              duration: 250

                          }));
                          isFloatPanel_AyohaStoreMerchant_ProductListOpen = 'N';
                          _FloatPanel_AyohaStoreMerchant_ProductList_isFirstLoad = "N";
                          RemovePages(_FloatPanel_AyohaStoreMerchant_ProductList, "isFloatPanel_AyohaStoreMerchant_ProductListOpen");
                      }
                  },

                             {
                                 xtype: 'spacer',

                             },

                            {
                                // margin: '-3 -2 0 0',
                                id: 'htmlFloatPanel_AyohaStoreMerchant_ProductList_TitleTxt',
                                //  html: '<div style="margin:-3px 0px 0px 0px;font-size:12px;color:white;font-weight:bold;">Product List</div>'
                                html: '<font size=2 color=white><b>Product List</b></font>'
                            },


                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaStoreMerchant_ProductListIcon',
                                           height: 30,
                                           margin: '-5 0 0 0',
                                           width: 35,
                                           // iconCls: 'list',
                                           html: '<div ><img src="resources/icons/ProductListWhite01.png" width="25" height="20" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {
                                               isFloatPanel_AyohaStoreMerchant_ProductListOpen = 'N';
                                               _FloatPanel_AyohaStoreMerchant_ProductList.hide(Ext.fx.Animation({
                                                   type: 'slideOut',
                                                   direction: 'right',
                                                   easing: 'cubic-bezier(.7,0,.7,1)',
                                                   duration: 250

                                               }));
                                               RemovePages(_FloatPanel_AyohaStoreMerchant_ProductList, "isFloatPanel_AyohaStoreMerchant_ProductListOpen");

                                               //  RemovePages(_FloatPanel_AyohaNotification, "isFloatPanel_AyohaNotificationOpen");
                                               //FloatPanel_AyohaNotification_AddCardHide();
                                           }
                                       },







              ]

   },
                     {


                         xtype: 'list',
                         // height: '64%',
                         // height: '100%',
                         // height: 200,
                         //   flex: 2,
                         store: _DataStore_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore,
                         id: 'FloatPanel_AyohaStoreMerchant_ProductList_SaleItemList',
                         mode: 'SINGLE',
                         disableSelection: true,
                         grouped: true,
                         //itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +
                         //                                                 ///ori  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStoreMerchant_ProductList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaStoreMerchant_ProductList_SaleItem_Detail({ID});">{ItemName}</div><br><div onclick="FloatPanel_AyohaStoreMerchant_ProductList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br> <div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0.05 Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*0.05 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;height:45px" onclick="FloatPanel_AyohaStoreMerchant_ProductList_DetailsShow({ID});">{ItemDescriptions}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;" onclick="FloatPanel_AyohaStoreMerchant_ProductList_DetailsShow({ID});"><input type="number" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_RewardStore_OpenStore()" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                         //                                                     '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStoreMerchant_ProductList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:break-all;margin:5px 0px 0px 0px;height:auto;" onclick="FloatPanel_AyohaStoreMerchant_ProductList_SaleItem_Detail({ID});">{ItemName}xx</div><br><div onclick="FloatPanel_AyohaStoreMerchant_ProductList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStoreMerchant_ProductList_DetailsShow({ID});">{ItemDescriptions}ldksfdskfklskdfjksjdfksdkfkdsfkldsfkdsfkdskfsdfkdsfkldsfksdjkfsfgdgjkdfgfdkfdjgfdjkfdkjghjgfhdhgfdjghfjdhgjfdhgfdjghfdjghfjghfdjhgfjghdjfghdfjghfj</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;"><input type="number" id="input-FloatPanel_AyohaStoreMerchant_ProductList_Qty{ID}" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStoreMerchant_ProductList_AddToCart({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                         //                                                   + '</div>',

                         itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +

                                                                                                            //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ItemName}</div><br><div onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')"  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'
                                                                                                            '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ItemName}</div><br>{ModifiedPrice}<br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'

            + '</div>'

                                                         + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_AyohaStoreMerchant_ProductList_Delete({ID},' + "'" + '{ItemCode}' + "'" + ')" class="buttonsHtmlBgTransparent" style="margin:0px -35px 0px 0px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button><button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')"  class="buttonsHtmlBgTransparent" style="margin:0px -25px 0px 0px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button></div>',

                         emptyText: '<div class="myContent">No Sale Item</div>',
                         width: '100%',
                         height: '100%',
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
                         height: 40,
                         style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid #EAEEF3;',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'
                         },
                         items: [
                             {
                                 xtype: 'panel',
                                 width: 5
                             },
                            {
                                xtype: 'container',
                                //  width: '100%',
                                margin: '3 0 0 0',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        html: '<div style="margin:0px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">0</div>'
                                    },
                                    {
                                        html: '<div style="margin:-3px 0px 0px 0px;font-size:12px;color:black;font-weight:normal;">Total Product</div>'
                                    },
                                ]
                            },
                            {
                                xtype: 'panel',
                                width: 20
                            },
                              {
                                  xtype: 'container',
                                  // width: '100%',
                                  margin: '3 0 0 0',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [
                                      {
                                          html: '<div style="margin:0px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">0</div>'
                                      },
                                      {
                                          html: '<div style="margin:-3px 0px 0px 0px;font-size:12px;color:black;font-weight:normal;">Category</div>'
                                      },
                                  ]
                              },
                        {
                            xtype: 'spacer',


                        },
                      {
                          id: 'htmlFloatPanel_AyohaStoreMerchant_ProductList_AddNewProduct',
                          //margin: '-27 0 0 0',
                          margin: '0 0 -4 0',
                          html: '<button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShow()" class="buttonAddNewProduct">Add New Product</button>'



                      },


                         ]

                     },



         ]















     });
    return _FloatPanel_AyohaStoreMerchant_ProductList;



}



function FloatPanel_AyohaStoreMerchant_ProductListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStoreMerchant_ProductList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStoreMerchant_ProductList());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStoreMerchant_ProductList, "isFloatPanel_AyohaStoreMerchant_ProductListOpen");
    isFloatPanel_AyohaStoreMerchant_ProductListOpen = 'Y';
    FloatPanel_AyohaStoreMerchant_ProductListAdjustHeight();
    FloatPanel_AyohaStoreMerchant_ProductList_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore();





    // FloatPanel_AyohaStoreMerchant_ProductList_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
    //FloatPanel_AyohaStoreMerchant_ProductListAdjustHeight();



}












function FloatPanel_AyohaStoreMerchant_ProductList_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore() {

    _DataStore_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByEnterpriseAccNo');
    _DataStore_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore.load();


    // 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count = _DataStore_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore.getCount();
        // alert(Count);


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStoreMerchant_ProductListHide() {
    _FloatPanel_AyohaStoreMerchant_ProductList.hide(); isFloatPanel_AyohaStoreMerchant_ProductListOpen = 'N';
    _FloatPanel_AyohaStoreMerchant_ProductList_isFirstLoad = "N";
    RemovePages(_FloatPanel_AyohaStoreMerchant_ProductList, "isFloatPanel_AyohaStoreMerchant_ProductListOpen");
}



function FloatPanel_AyohaStoreMerchant_ProductListAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 96;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    //Ext.getCmp('FloatPanel_AyohaStoreMerchant_ProductListID').setHeight(x + 20);
    //Ext.getCmp('FloatPanel_AyohaStoreMerchant_ProductList_SaleItemList').setHeight(newHeights);


}


