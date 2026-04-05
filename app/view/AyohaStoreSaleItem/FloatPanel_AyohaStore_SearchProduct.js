
Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_SearchProduct', {

});

var _FloatPanel_AyohaStore_SearchProduct;


var isFloatPanel_AyohaStore_SearchProductOpen = 'N';






function FloatPanel_AyohaStore_SearchProduct() {

    _FloatPanel_AyohaStore_SearchProduct =
    Ext.create('Ext.Panel', {
        zIndex: 300,
        xtype: 'container',
        //height: 465,
        height: 55,
        width: '99%',
        id: 'FloatPanel_AyohaStore_SearchProductID',
        draggable: false,

        styleHtmlContent: true,
        bottom:0,
       // centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        showAnimation: {
            type: 'slideIn',
            direction: 'up',
            easing: 'ease-out',
            duration: 250
        },
        hideAnimation: {
            type: 'slideOut',
            direction: 'down',
            easing: 'ease-out',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
       style: 'border-bottom:1px solid;background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaStore_SearchProduct.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isFloatPanel_AyohaStore_SearchProductOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaStore_SearchProduct.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaStore_SearchProductOpen = 'N';
                        }
                        RemovePages(_FloatPanel_AyohaStore_SearchProduct, "isFloatPanel_AyohaStore_SearchProductOpen");
                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: transparent;',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            







                               {
                                   id: 'htmlFloatPanel_AyohaStore_SearchProduct',
                                   margin: '0 0 0 0',

                                   // zIndex: -10,
                                   width: '100%',
                                   // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProductX" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                   // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                   html: '<input type="text" id="input-FloatPanel_AyohaStore_SearchProductX" style="width:100%;height: 35px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 10px;background-color: #f8f8f8;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 0px"  placeholder="Search Product">',
                               },



















                            //{
                            //    xtype: 'container',
                            //    id: 'containerFloatPanel_AyohaStore_SearchProduct',
                            //    // margin: '-10 0 0 0',
                            //    width: '100%',
                            //    height: '100%',
                            //    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            //   style: "background-color: transparent;",
                            //   // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                            //    //style: "background-color: #F35B57;",
                            //    title: 'FloatPanel_AyohaStore_SearchProductCardLis',
                            //    layout: {
                            //        type: 'vbox',
                            //        pack: 'center',
                            //        align: 'center'

                            //    },
                                

                            //    items: [
                                  
                                  
                            //         //{
                            //         //    id: 'htmlFloatPanel_AyohaStore_SearchProduct',
                            //         //    margin: '0 0 0 5',

                            //         //    // zIndex: -10,
                            //         //    width: '100%',
                            //         //    html: '<textarea id="input-FloatPanel_AyohaStore_SearchProductX" style="width:97%;height: 40px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',
                            //         //    // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                            //         //},

                            //    ]

                            //},










                        ]
                    },

















































                ]
            },












        ]





    });
    return _FloatPanel_AyohaStore_SearchProduct;



}








function FloatPanel_AyohaStore_SearchProductShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_SearchProduct);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_SearchProduct());
    this.overlay.show();
    //LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages(_FloatPanel_AyohaStore_SearchProduct, "isFloatPanel_AyohaStore_SearchProductOpen");
    isFloatPanel_AyohaStore_SearchProductOpen = 'Y';
    document.getElementById("input-FloatPanel_AyohaStore_SearchProductXX").addEventListener("keyup", OnKeyUpFloatPanel_AyohaStore_SearchProduct);
    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.clearFilter();
    // FloatPanel_AyohaStore_SearchProductAdjustHeight();
}





function FloatPanel_AyohaStore_SearchProductHide() {
    // FloatPanel_AyohaStore_SearchProduct_AddCardHide();
    _FloatPanel_AyohaStore_SearchProduct.hide(); isFloatPanel_AyohaStore_SearchProductOpen = 'N';
    RemovePages(_FloatPanel_AyohaStore_SearchProduct, "isFloatPanel_AyohaStore_SearchProductOpen");
}







