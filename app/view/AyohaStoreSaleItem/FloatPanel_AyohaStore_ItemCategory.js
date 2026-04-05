Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_ItemCategory', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_ItemCategory;


var isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
var globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt = "NA";




function FloatPanel_AyohaStore_ItemCategory() {

    _FloatPanel_AyohaStore_ItemCategory =
     Ext.create('Ext.Panel', {
         zIndex: 320,
         xtype: 'container',
         // height: '50%',
         width: 400,
         height: 400,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_ItemCategoryID',
         name: 'nameFloatPanel_AyohaStore_ItemCategoryID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
        // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
         },
        
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

        

         

         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
                         RemovePages(_FloatPanel_AyohaStore_ItemCategory, "isFloatPanel_AyohaStore_ItemCategoryOpen");
                     },

                   

                 }



                 );
                
             },
             
          
             
         },
        

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

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
                id: 'FloatPanel_AyohaStore_ItemCategoryBorderBg',
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
                             // width: 40,
                             style: ' background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaStore_ItemCategoryHeader',
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
                                            width:10
                                        },

                                        {
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt',
                                          //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Product Category</div>',

                                            // html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                        },
                                      

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                  

                                                   {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_AyohaStore_ItemCategoryBack',
                                                    height: 30,
                                                    width: 35,
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {

                                                        _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                            // direction: 'left',
                                                            // easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250

                                                        }));
                                                        isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
                                                        RemovePages(_FloatPanel_AyohaStore_ItemCategory, "isFloatPanel_AyohaStore_ItemCategoryOpen");

                                                    }
                                                },

                                                {
                                                    xtype: 'spacer',
                                                    width:10
                                                },
        
                                            //{
                                            //    xtype: 'button',

                                            //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                            //    height: 40,
                                            //    width: 40,
                                            //    // iconCls: 'list',
                                            //    id: 'btnFloatPanel_AyohaStore_ItemCategory_PicProfile',
                                            //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                            //    ui: 'plain',
                                            //    handler: function () {
                                            //        _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                            //            type: 'slideOut',
                                            //            direction: 'right',
                                            //            easing: 'cubic-bezier(.7,0,.7,1)',
                                            //            duration: 250

                                            //        }));

                                            //        isFloatPanel_AyohaStore_ItemCategoryOpen = "N";
                                            //        RemovePages(_FloatPanel_AyohaStore_ItemCategory, "isFloatPanel_AyohaStore_ItemCategoryOpen");
                                            //    }
                                            //},












                                    ]

                         },


                   {
                       xtype: 'list',
                       width: '100%',
                       height: '99%',
                       // height: '98%',
                       // flex: 1,
                       store: _DataStore_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore,
                       id: 'FloatPanel_AyohaStore_ItemCategoryListID',
                       mode: 'SINGLE',
                       // width: '100%',
                       disableSelection: true,
                       itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +


                         ///ori'<table style="border-collapse:collapse;border-spacing:0;width:107%;background-color:white;margin:-10px 0px 0px -17px;height:40px;"><tr onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border:1px solid white; width:1px;height:40px;background-color:transparent;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:99%;vertical-align:center">{ItemCategoryCode} ({CountItemCategory} - Items)</td></tr></table>' +

                         '<table style="border-collapse:collapse;border-spacing:0;width:107%;background-color:white;margin:-10px 0px 0px -17px;height:40px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border:1px solid white; width:1px;height:40px;background-color:transparent;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:99%;vertical-align:center">{row_num}.{ProductCategoryName}</td></tr></table>' +

                     '<br>' +
                           '<div style="width:104%;text-align:left;margin:-64px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><div style="width: 23px; height: 23px; margin:0px 0px 0px 40px;background-color:transparent" /></button></div>',





                       emptyText: '<div class="myContent">No Product Category!</div>',
                       listeners: {
                           itemsingletap: function (list, idx, target, records, evt) {
                               var ID = records.get('ID');
                               var ProductCategoryName = records.get('ProductCategoryName');
                               var ProductCategoryDescription = records.get('ProductCategoryDescription');
                               globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode = records.get('ItemCategoryCode');
                               ////FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(ItemCategoryCode);
                               ////document.getElementById("input-htmlFloatPanel_AyohaStor_ProductCategoryTxt").value = ItemCategoryCode;
                               //console.log(globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt);
                               //globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt = Ext.getCmp('htmlFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt').getHtml();
                               //console.log(globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt);

                               //if (globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt == "<font size=2 color=white><b>Add New Product</b></font>" || globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt == "<font size=2 color=white><b>Edit Product</b></font>") {
                               //    document.getElementById("input-FloatPanel_AyohaStoreMerchant_AddEditItem_Category").value = ProductCategoryName;
                               //    FloatPanel_AyohaStore_ItemCategoryHide();
                               //    globalFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt = "NA";
                               //    return;

                               //}

                               if (isFloatPanel_AyohaStoreMerchant_AddEditItemOpen == "Y") {
                                   document.getElementById("input-FloatPanel_AyohaStoreMerchant_AddEditItem_Category").value = ProductCategoryName;
                                   FloatPanel_AyohaStore_ItemCategoryHide();
                                   
                                   return;

                               } if (is_FloatPanel_AyohaStore_DotMenuItemOpen == 'Y') {
                                   FloatPanel_AyohaStore_DotMenuItemHide();
                                   FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode);
                                   FloatPanel_AyohaStore_ItemCategoryHide();
                               }


                               else {
                                   FloatPanel_AyohaStore_AddNewItemCategoryEditShow(ID, globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode, ProductCategoryName, ProductCategoryDescription)
                               }

                               
                               //if (isFloatPanel_AyohaStoreOpen == 'Y') {
                                  
                               //    FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode);
                               //    FloatPanel_AyohaStore_ItemCategoryHide();
                               //} else {


                               //    FloatPanel_AyohaStore_AddNewItemCategoryEditShow(ID, globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode, ProductCategoryName, ProductCategoryDescription);

                               //    //document.getElementById("input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryName").value = ProductCategoryName;
                               //    //document.getElementById("input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryDescriptions").value = ProductCategoryDescription;
                               //    //Ext.getCmp('htmlFloatPanel_AyohaStore_AddNewItemCategory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Edit Product Category</div>')


                                 
                                   
                               //}





                              


                           },
                           deselect: function (list, records) {

                           }
                       },
                       

                   },
               

  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
      height: 30,
      // width: 40,
      style: ' background-color:transparent;',
      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      //  title: '<font size="3" color="white">Live Tracking Map</font>',
      //hidden: true,

      id: 'containerFloatPanel_AyohaStore_ItemCategoryFooter',
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
                              xtype: 'panel',
                              width: 3
                          },

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:4px 0px 0px 0px">0</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },



                             {
                                 xtype: 'spacer',
                               

                             },
                  {
                      id: 'htmlFloatPanel_AyohaStore_ItemCategory_AddEditItem_Save',
                      //margin: '-27 0 0 0',
                      margin: '0 0 0 0',
                      html: '<button OnClick="FloatPanel_AyohaStore_AddNewItemCategoryShow()" class="buttonSaveDeleteProduct">Add New</button>'



                  },
                    {
                        xtype: 'panel',
                        width: 3
                    },









             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_ItemCategory;





}



function FloatPanel_AyohaStore_ItemCategoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_ItemCategory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_ItemCategory());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_ItemCategory, "isFloatPanel_AyohaStore_ItemCategoryOpen");
    isFloatPanel_AyohaStore_ItemCategoryOpen = 'Y';
    FloatPanel_AyohaStore_AyohaStoreSaleItemloadItemCategory();


    //Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    //Ext.getCmp('btnFloatPanel_AyohaStore_ItemCategory_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');


   


}

var globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode;



function FloatPanel_AyohaStore_AyohaStoreSaleItemloadItemCategory() {


    _DataStore_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem_ProductCategory/AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNo');
    _DataStore_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore.getCount();


        if (isFloatPanel_AyohaStoreMerchant_AddEditItemOpen == 'Y') {
            Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Select Product Category</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:4px 0px 0px 0px">* Tap to select</div>');

        } if (is_FloatPanel_AyohaStore_DotMenuItemOpen == 'Y') {
            Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Filter Product Category</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:4px 0px 0px 0px">* Tap to select</div>');

        }

        else {
            Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Record found</div>');

        }

      

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}





function FloatPanel_AyohaStore_ItemCategoryHide() {
    if (isFloatPanel_AyohaStore_ItemCategoryOpen == 'Y') {
        _FloatPanel_AyohaStore_ItemCategory.hide(); isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
        RemovePages(_FloatPanel_AyohaStore_ItemCategory, "isFloatPanel_AyohaStore_ItemCategoryOpen");
    }
}













