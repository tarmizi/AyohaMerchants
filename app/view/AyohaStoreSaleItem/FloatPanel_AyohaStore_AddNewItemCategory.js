Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_AddNewItemCategory', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_AddNewItemCategory;


var isFloatPanel_AyohaStore_AddNewItemCategoryOpen = 'N';





function FloatPanel_AyohaStore_AddNewItemCategory() {

    _FloatPanel_AyohaStore_AddNewItemCategory =
     Ext.create('Ext.Panel', {
         zIndex: 340,
         xtype: 'container',
         // height: '50%',
         width: 400,
         height: 400,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_AddNewItemCategoryID',
         name: 'nameFloatPanel_AyohaStore_AddNewItemCategoryID',
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
                             _FloatPanel_AyohaStore_AddNewItemCategory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_AddNewItemCategory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaStore_AddNewItemCategoryOpen = 'N';
                         RemovePages(_FloatPanel_AyohaStore_AddNewItemCategory, "isFloatPanel_AyohaStore_AddNewItemCategoryOpen");
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
                id: 'FloatPanel_AyohaStore_AddNewItemCategoryBorderBg',
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
                             style:GetHeaderStyle(),
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaStore_AddNewItemCategoryHeader',
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
                                            id: 'htmlFloatPanel_AyohaStore_AddNewItemCategory_TitleHeaderTxt',
                                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Add New Product Category</div>',

                                            //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                        },  

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                 
                                                   {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_AyohaStore_AddNewItemCategoryBack',
                                                    height: 30,
                                                    width: 35,
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {

                                                        _FloatPanel_AyohaStore_AddNewItemCategory.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                           // direction: 'left',
                                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250

                                                        }));
                                                        isFloatPanel_AyohaStore_AddNewItemCategoryOpen = 'N';
                                                        RemovePages(_FloatPanel_AyohaStore_AddNewItemCategory, "isFloatPanel_AyohaStore_AddNewItemCategoryOpen");

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
                                            //    id: 'btnFloatPanel_AyohaStore_AddNewItemCategory_PicProfile',
                                            //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                            //    ui: 'plain',
                                            //    handler: function () {
                                            //        _FloatPanel_AyohaStore_AddNewItemCategory.hide(Ext.fx.Animation({
                                            //            type: 'slideOut',
                                            //            direction: 'right',
                                            //            easing: 'cubic-bezier(.7,0,.7,1)',
                                            //            duration: 250

                                            //        }));

                                            //        isFloatPanel_AyohaStore_AddNewItemCategoryOpen = "N";
                                            //        RemovePages(_FloatPanel_AyohaStore_AddNewItemCategory, "isFloatPanel_AyohaStore_AddNewItemCategoryOpen");
                                            //    }
                                            //},












                                    ]

                         },


                   
                   {
                       xtype: 'container',
                       width: '100%',
                       height: '99%',
                       style: ' background-color:transparent;',
                       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containerFloatPanel_AyohaStore_AddNewItemCategoryAddNew',

                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'left',
                       },
                       items: [


                            {
                                margin: '0 0 0 5',
                                html: '<font color="black" size="1"><b>Category Name</b></font>',
                            },
                             {
                                 id: 'htmlFloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryName',
                                 margin: '-5 0 0 5',

                                 // zIndex: -10,
                                 width: '90%',
                                 html: '<input type="text"  id="input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },
                               {
                                   margin: '5 0 0 5',
                                   html: '<font color="black" size="1"><b>Descriptions</b></font>',
                               },
                        {
                            id: 'htmlFloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryDescriptions',
                            margin: '0 0 0 5',

                            // zIndex: -10,
                            width: '100%',
                            html: '<textarea id="input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryDescriptions" style="width:97%;height: 250px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',
                            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                        },
                       ]
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

      id: 'containerFloatPanel_AyohaStore_AddNewItemCategoryFooter',
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
                                id: 'htmlFloatPanel_AyohaStore_AddNewItemCategory_CountLoveTxt',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:transparent;margin:4px 0px 0px 0px">0</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },



                             {
                                 xtype: 'spacer',


                             },
                //   {
                    
                //       //margin: '-27 0 0 0',
                //       margin: '0 0 0 0',
                //       html: '<button OnClick="AddEditClaimToll()" class="buttonSaveDeleteProduct">Delete</button>'



                //   },
                // {
                //   xtype: 'button',
                //   id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Delete',
                //   //  badgeText: '1',
                //   margin: '0 -18 -8 0',
                //   //height: 35,
                //   //width: 35,
                //   html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                //   ui: 'plain',
                //   handler: function () {
                //     AddEditClaimToll()
                //   }
                // },
                // {
                //     xtype: 'button',
                //     id: 'txtFloatPanel_AyohaStoreMerchant_AddEditItem_Delete',
                //     //  badgeText: '1',
                //     margin: '7 0 0 7',
                //     //height: 40,
                //     //width: 130,
                //     html: '<font size=2 color=grey>*Delete</font>',
                //     ui: 'plain',
                //     handler: function (){
                //         AddEditClaimToll()
                //     }
                // },
                    {
                        xtype: 'panel',
                        width: 3
                    },


                    {
                        xtype: 'button',
                        id: 'htmlFloatPanel_AyohaStore_AddNewItemCategory_AddEditItem_Save',
                        //  badgeText: '1',
                        margin: '0 -18 -8 0',
                        //height: 35,
                        //width: 35,
                        html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                        ui: 'plain',
                        handler: function () {
                            FloatPanel_AyohaStore_AddNewItemCategory_Save();
                        }
                    },
               {
                   xtype: 'button',
                   id: 'txtFloatPanel_AyohaStore_AddNewItemCategory_AddEditItem_Save',
                   //  badgeText: '1',
                  // hidden:true,
                   margin: '0 0 0 7',
                   //height: 40,
                   //width: 130,
                   html: '<font size=2 color=grey>Save</font>',
                   ui: 'plain',
                   handler: function () {
                    FloatPanel_AyohaStore_AddNewItemCategory_Save();
                   }
               },

                   
                    // {
                    //     xtype: 'spacer',
                    //     width: 10
                    // },








             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_AddNewItemCategory;





}



function FloatPanel_AyohaStore_AddNewItemCategoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_AddNewItemCategory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_AddNewItemCategory());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_AddNewItemCategory, "isFloatPanel_AyohaStore_AddNewItemCategoryOpen");
    isFloatPanel_AyohaStore_AddNewItemCategoryOpen = 'Y';
    globalFloatPanel_AyohaStore_AddNewItemCategory_ID=0;
    globalFloatPanel_AyohaStore_AddNewItemCategory_ItemCategoryCode="New";

   

}




function FloatPanel_AyohaStore_AddNewItemCategoryEditShow(ID, ItemCategoryCode, ProductCategoryName, ProductCategoryDescription) {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_AddNewItemCategory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_AddNewItemCategory());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_AddNewItemCategory, "isFloatPanel_AyohaStore_AddNewItemCategoryOpen");
    isFloatPanel_AyohaStore_AddNewItemCategoryOpen = 'Y';
    globalFloatPanel_AyohaStore_AddNewItemCategory_ID = ID;
    globalFloatPanel_AyohaStore_AddNewItemCategory_ItemCategoryCode = ItemCategoryCode;

    document.getElementById("input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryName").value = ProductCategoryName;
    document.getElementById("input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryDescriptions").value = ProductCategoryDescription;
    Ext.getCmp('htmlFloatPanel_AyohaStore_AddNewItemCategory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Edit Product Category</div>')





}





function FloatPanel_AyohaStore_AddNewItemCategoryHide() {
    if (isFloatPanel_AyohaStore_AddNewItemCategoryOpen == 'Y') {
        _FloatPanel_AyohaStore_AddNewItemCategory.hide(); isFloatPanel_AyohaStore_AddNewItemCategoryOpen = 'N';
        RemovePages(_FloatPanel_AyohaStore_AddNewItemCategory, "isFloatPanel_AyohaStore_AddNewItemCategoryOpen");
    }
}

var globalFloatPanel_AyohaStore_AddNewItemCategory_ID;
var globalFloatPanel_AyohaStore_AddNewItemCategory_ItemCategoryCode;
function FloatPanel_AyohaStore_AddNewItemCategory_Save() {



    var ProductCategoryName = document.getElementById('input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryName').value;

    if (ProductCategoryName) {

    } else {
        swalFireFail("Fail!,Product Category Name is Required!");
        return;
    }
  
   


    var objn = {
        "ID": globalFloatPanel_AyohaStore_AddNewItemCategory_ID,
        "ProductCategoryName": ProductCategoryName,
        "ProductCategoryDescription": document.getElementById('input-FloatPanel_AyohaStore_AddNewItemCategory_ProductCategoryDescriptions').value,
        "ItemCategoryCode": globalFloatPanel_AyohaStore_AddNewItemCategory_ItemCategoryCode,
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "EnterpriseAccNo": GetEnterpriseAccNo()
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_SaleItem_ProductCategory/AyohaStore_SaleItemProductCategoryInsertUpdate',

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



                swalFireSuccess("Success Add New Product Category");
                FloatPanel_AyohaStore_AddNewItemCategoryHide();

                //globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
                //if (isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen == 'N') {
                //    swalFireSuccess("Success Set Membership Card");
                //}





                //FloatPanel_AyohaStore_MembershipCardUsedHide();
                //if (isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen == 'Y') {
                //    FloatPanel_AyohaStore_MembershipCardBeingUsedHide();
                //    FloatPanel_AyohaStore_MembershipCardBeingUsed_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore();
                    var task = Ext.create('Ext.util.DelayedTask', function () {


                        FloatPanel_AyohaStore_AyohaStoreSaleItemloadItemCategory();
                        Ext.Viewport.unmask();
                    });
                    Ext.Viewport.unmask();
                    task.delay(700);
                //}
                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });


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












