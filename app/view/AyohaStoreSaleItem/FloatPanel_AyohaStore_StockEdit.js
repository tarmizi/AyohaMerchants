Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_StockEdit', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_StockEdit;


var isFloatPanel_AyohaStore_StockEditOpen = 'N';





function FloatPanel_AyohaStore_StockEdit() {

    _FloatPanel_AyohaStore_StockEdit =
     Ext.create('Ext.Panel', {
         zIndex: 340,
         xtype: 'container',
         // height: '50%',
         width: 400,
         height: 400,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_StockEditID',
         name: 'nameFloatPanel_AyohaStore_StockEditID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         hideOnMaskTap: false,
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
                             _FloatPanel_AyohaStore_StockEdit.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_StockEdit.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaStore_StockEditOpen = 'N';
                         RemovePages(_FloatPanel_AyohaStore_StockEdit, "isFloatPanel_AyohaStore_StockEditOpen");
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

                    xtype: 'container',
                    width: '100%',
                    docked: 'top',
                    height:40,
                    // width: 40,
                    style:GetHeaderStyle(),
                    //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,

                  //  id: 'containerFloatPanel_AyohaStore_ItemCategoryHeader',
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
                                  // id: 'htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt',
                                 //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Edit Stock Level</div>',

                                   // html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                               },
                             

                                         {
                                             xtype: 'spacer'
                                         },


                                         

                                          {
                                           xtype: 'button',
                                         //  id: 'btnFloatPanel_AyohaStore_ItemCategoryBack',
                                           height: 30,
                                           width: 35,
                                           // iconCls: 'list',
                                           html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {

                                            _FloatPanel_AyohaStore_StockEdit.hide(Ext.fx.Animation({
                                                   type: 'popOut',
                                                   // direction: 'left',
                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                   duration: 250

                                               }));
                                               isFloatPanel_AyohaStore_StockEditOpen = 'N';
                                               RemovePages(_FloatPanel_AyohaStore_StockEdit, "isFloatPanel_AyohaStore_StockEditOpen");

                                           }
                                       },

                                       {
                                           xtype: 'spacer',
                                           width:10
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
              
                    id: 'containerFloatPanel_AyohaStore_StockEditFooter',
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
                                              id: 'htmlFloatPanel_AyohaStore_StockEdit_CountLoveTxt',
                                              // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:transparent;margin:4px 0px 0px 0px">0</div>',
              
                                              //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                          },
              
              
              
                                           {
                                               xtype: 'spacer',
              
              
                                           },
                                           {
                                              xtype: 'button',
                                              //id: 'htmlFloatPanel_AyohaStore_AddNewItemCategory_AddEditItem_Save',
                                              //  badgeText: '1',
                                              margin: '0 -18 -8 0',
                                              //height: 35,
                                              //width: 35,
                                              html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_AyohaStore_StockEdit_Save();
                                              }
                                          },
                                     {
                                         xtype: 'button',
                                        // id: 'txtFloatPanel_AyohaStore_AddNewItemCategory_AddEditItem_Save',
                                         //  badgeText: '1',
                                        // hidden:true,
                                         margin: '0 0 0 7',
                                         //height: 40,
                                         //width: 130,
                                         html: '<font size=2 color=grey>Save</font>',
                                         ui: 'plain',
                                         handler: function () {
                                          FloatPanel_AyohaStore_StockEdit_Save();
                                         }
                                     },
                                  // {
                                  //     id: 'htmlFloatPanel_AyohaStore_StockEdit_Save01',
                                  //     //margin: '-27 0 0 0',
                                  //     margin: '0 0 0 0',
                                  //     html: '<button OnClick="FloatPanel_AyohaStore_StockEdit_Save();" class="buttonSaveDeleteProduct">Save</button>'
              
              
              
                                  // },
                                  {
                                      xtype: 'panel',
                                      width: 3
                                  },
              
              
              
              
              
              
              
              
                           ]
              
                },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaStore_StockEditBorderBg',
               // docked: 'top',
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
                       
                       style: ' background-color:transparent;',
                       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containerFloatPanel_AyohaStore_StockEdit',

                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'left',
                       },
                       items: [


                           {
                               xtype: 'container',
                               width: '100%',
                               margin: '20 0 0 0',
                               height:40,
                               style: ' background-color:transparent;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                   {
                                       id: 'htmlFloatPanel_AyohaStore_StockEdit_CurrentStock',
                                       margin: '0 0 0 0',

                                       // zIndex: -10,
                                       width: '100%',
                                       html: '<input type="number"  id="input-FloatPanel_AyohaStore_StockEdit_CurrentStock" readOnly  placeHolder="55" style="border-color:white;color:grey;width:100%;text-align: center;font-size:54px;font-weight:bold">'
                                   },
                             {
                                 margin: '-15 0 0 0',
                                 html: '<font color="black" size="1"><b>Current Stock</b></font>',
                             },

                               ]
                           },
                            
                             
                              {
                                  xtype: 'container',
                                  width: '100%',
                                  margin: '40 0 0 0',
                                  height: 1,
                                  style: ' background-color:grey;',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center',
                                  },
                            
                              },



                               {
                                   margin: '0 0 0 5',
                                   html: '<font color="black" size="1"><b>Add Stock</b></font>',
                               },
                        {
                            id: 'htmlFloatPanel_AyohaStore_StockEdit_AddStock',
                            margin: '0 0 0 5',

                            // zIndex: -10,
                            width: '100%',
                            html: '<input type="number" id="number-FloatPanel_AyohaStore_StockEdit_AddStock"    oninput="OnInput_FloatPanel_AyohaStore_StockEdit_AddStock()"     style="width:40%;height: 25px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;color:black" placeholder="Add Stock "/>',
                            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                        },

                         {
                             margin: '5 0 0 5',
                             html: '<font color="black" size="1"><b>Remove Stock</b></font>',
                         },
                        {
                            id: 'htmlFloatPanel_AyohaStore_StockEdit_RemoveStock',
                            margin: '0 0 0 5',

                            // zIndex: -10,
                            width: '100%',
                            html: '<input type="number" id="number-FloatPanel_AyohaStore_StockEdit_RemoveStock"  oninput="OnInput_FloatPanel_AyohaStore_StockEdit_RemoveStock()" style="width:40%;height: 25px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;color:black;" placeholder="Remove Stock"/>',
                            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                        },

                        {
                            xtype: 'container',
                            width: '100%',
                            margin: '10 0 0 0',
                            height: 1,
                            style: ' background-color:grey;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },

                        },

                             {
                                 margin: '0 0 0 5',
                                 html: '<font color="black" size="1"><b>Stock Alert</b></font>',
                             },
                             {
                                 id: 'htmlFloatPanel_AyohaStore_StockEdit_AlertStock',
                                 margin: '-5 0 0 5',

                                 // zIndex: -10,
                                 width: '40%',
                                 html: '<input type="number"  id="input-FloatPanel_AyohaStore_StockEdit_AlertStock"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },
                       ]
                   },


  



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_StockEdit;





}



function FloatPanel_AyohaStore_StockEditShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_StockEdit);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_StockEdit());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_StockEdit, "isFloatPanel_AyohaStore_StockEditOpen");
    isFloatPanel_AyohaStore_StockEditOpen = 'Y';
    document.getElementById('input-FloatPanel_AyohaStore_StockEdit_CurrentStock').value = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Stock').value;
    currStock = parseInt(document.getElementById('input-FloatPanel_AyohaStore_StockEdit_CurrentStock').value);
    document.getElementById('input-FloatPanel_AyohaStore_StockEdit_AlertStock').value = globalFloatPanel_AyohaDtoreMerchant_AddEditItem_StockAlert;
}

var currStock;


//function FloatPanel_AyohaStore_StockEditEditShow(ID, ItemCategoryCode, ProductCategoryName, ProductCategoryDescription) {

//    Ext.Viewport.remove(_FloatPanel_AyohaStore_StockEdit);
//    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_StockEdit());
//    this.overlay.show();
//    AddRoutePages(_FloatPanel_AyohaStore_StockEdit, "isFloatPanel_AyohaStore_StockEditOpen");
//    isFloatPanel_AyohaStore_StockEditOpen = 'Y';
//    globalFloatPanel_AyohaStore_StockEdit_ID = ID;
//    globalFloatPanel_AyohaStore_StockEdit_ItemCategoryCode = ItemCategoryCode;

    




//}





function FloatPanel_AyohaStore_StockEditHide() {
    if (isFloatPanel_AyohaStore_StockEditOpen == 'Y') {
        _FloatPanel_AyohaStore_StockEdit.hide(); isFloatPanel_AyohaStore_StockEditOpen = 'N';
        RemovePages(_FloatPanel_AyohaStore_StockEdit, "isFloatPanel_AyohaStore_StockEditOpen");
    }
}

var globalFloatPanel_AyohaStore_StockEdit_StockStatus;

function OnInput_FloatPanel_AyohaStore_StockEdit_RemoveStock() {
    
  
    var RemoveStock = parseInt(document.getElementById('number-FloatPanel_AyohaStore_StockEdit_RemoveStock').value);
    var ResultStock = currStock - RemoveStock;

    globalFloatPanel_AyohaStore_StockEdit_StockStatus = "Stock-Out";
    document.getElementById('number-FloatPanel_AyohaStore_StockEdit_AddStock').value = 0;

    if (RemoveStock >= currStock) {
        swalFireFail("Not Valid!");
        return;
    } else {
        document.getElementById('input-FloatPanel_AyohaStore_StockEdit_CurrentStock').value = ResultStock;
    }

    globalFloatPanel_AyohaStore_StockEdit_AddRemoveStock = RemoveStock;
  
}

var globalFloatPanel_AyohaStore_StockEdit_AddRemoveStock;
function OnInput_FloatPanel_AyohaStore_StockEdit_AddStock() {
  
    var AddStock = parseInt(document.getElementById('number-FloatPanel_AyohaStore_StockEdit_AddStock').value);
    var ResultStock = currStock + AddStock;

    globalFloatPanel_AyohaStore_StockEdit_StockStatus = "Stock-In";
    document.getElementById('number-FloatPanel_AyohaStore_StockEdit_RemoveStock').value = 0;

    document.getElementById('input-FloatPanel_AyohaStore_StockEdit_CurrentStock').value = ResultStock;
    globalFloatPanel_AyohaStore_StockEdit_AddRemoveStock = AddStock;

}




function FloatPanel_AyohaStore_StockEdit_Save() {
 
    var AddStock = document.getElementById('number-FloatPanel_AyohaStore_StockEdit_AddStock').value;
    var RemoveStock = document.getElementById('number-FloatPanel_AyohaStore_StockEdit_RemoveStock').value;
    var AlertStock = document.getElementById('input-FloatPanel_AyohaStore_StockEdit_AlertStock').value;

 

    if (parseInt(AlertStock) > parseInt(currStock)) {
        swalFireFail("Not Valid!");
        return;
    }


    
    if (AddStock) {

    } else {
        globalFloatPanel_AyohaStore_StockEdit_AddRemoveStock = 0;
        globalFloatPanel_AyohaStore_StockEdit_StockStatus = "NA";
    }

    if (RemoveStock) {

    } else {
        globalFloatPanel_AyohaStore_StockEdit_AddRemoveStock = 0;
        globalFloatPanel_AyohaStore_StockEdit_StockStatus = "NA";
    }


    if (AlertStock) {

    } else {
        AlertStock = 0;
       // globalFloatPanel_AyohaStore_StockEdit_StockStatus = "NA";
    }

    var objn = {
        "ItemCode": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "Stock": globalFloatPanel_AyohaStore_StockEdit_AddRemoveStock,
        "StockStatus": globalFloatPanel_AyohaStore_StockEdit_StockStatus,
        "StockNote": "NA",
        "StockAlert": AlertStock,
        "ID":globalFloatPanel_AyohaStoreMerchant_AddEditItem_ID
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStoreSaleItemStock/AyohaStoreSaleItemStockInsert',

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
                document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Stock').value=document.getElementById('input-FloatPanel_AyohaStore_StockEdit_CurrentStock').value;


                swalFireSuccess("Success");
                FloatPanel_AyohaStore_StockEditHide();


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












