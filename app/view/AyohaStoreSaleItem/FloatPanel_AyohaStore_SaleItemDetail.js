Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_SaleItemDetail', {
    requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
    ],
});







var _FloatPanel_AyohaStore_SaleItemDetail;

function FloatPanel_AyohaStore_SaleItemDetail() {

    _FloatPanel_AyohaStore_SaleItemDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaStore_SaleItemDetailID',
            requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
            ],
            // xtype: 'panel',
            zIndex: 380,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,
            styleHtmlContent: true,
            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: false,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
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
            //  style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            // style: ' background-color:black;',
            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            //listeners: {
            //    initialize: function (c) {
            //        this.element.on({
            //            swipe: function (e, node, options) {
            //                //if (e.direction == "up") {
            //                //    FloatPanel_AyohaReward_RedemptionHistoryHide();
            //                //}
            //                if (e.direction == "left") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'left',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                } if (e.direction == "right") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'right',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                } if (e.direction == "up") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'up',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                }
            //                if (e.direction == "down") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'down',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                }
            //                is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
            //                RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
            //            }
            //        });
            //    }
            //},


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color:transparent;',
               // style: 'background-color:rgba(0, 0, 0, 0.8);border-radius: 0px 0px 0px 0px;',
                // style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [


                    



                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        margin: '0 0 0 0',
                         style: 'background-color:transparent',
                      //  style: ' background-color:transparent;border-radius: 30px 30px 30px 30px;',
                        //  style: 'background-color:black',
                        //style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                                  //{
                                  //    xtype: 'container',
                                  //    width: '100%',
                                  //    id: 'containerFloatPanel_AyohaStore_SaleItemDetail_CaptionText',
                                  //    docked: 'bottom',
                                  //    // hidden:true,
                                  //    // margin: '-80 0 0 0',
                                  //    height: 75,
                                  //    style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                  //    layout: {
                                  //        type: 'vbox',
                                  //        pack: 'center',
                                  //        align: 'center'

                                  //    },
                                  //    items: [
                                  //        {
                                  //            id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_CaptionText',
                                  //            html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">Aslam cucu angah rahem..</div>',
                                  //        }
                                  //    ]
                                  //},








                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      // width: 40,
                                      //zIndex:-10,
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      //hidden: true,
                                      docked: 'top',
                                      id: 'containerFloatPanel_AyohaStore_SaleItemDetailHeader',
                                      style: "background-color: transparent;",
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
                                                     xtype: 'button',
                                                     id: 'btnFloatPanel_AyohaStore_SaleItemDetailBack',
                                                     height: 30,
                                                     width: 35,
                                                     margin: '0 0 0 0',
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'left',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                         is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                         RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
                                                     }
                                                 },

                                                            {
                                                                xtype: 'spacer',

                                                            },

                                                            {
                                                                xtype: 'button',
                                                                margin: '0 0 0 0',
                                                                zIndex: 100,
                                                                id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName',
                                                                html: '<font size=2 color=white><b>Barbegal</b></font>',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                                    RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
                                                                }
                                                            },

                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaStore_SaleItemDetailBacksLogo',
                                                      height: 30,
                                                      width: 30,
                                                      hidden: true,
                                                      // iconCls: 'list',
                                                      margin: '-5 3 0 0',
                                                      html: '<div><img src="resources/icons/AyohaPointRedemptionWhite.png" width="25" height="25" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'right',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                          RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
                                                      }
                                                  },












                                             ]

                                  },
                           {
                               xtype: 'container',
                               width: '100%',
                               id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Picture',
                             zIndex:100,
                               // hidden:true,
                               // margin: '-80 0 0 0',
                               height: 100,
                               style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'right',
                                   align: 'right'

                               },
                               margin:'50 0 0 -36',
                               items: [
                                   {

                                       xtype: 'container',
                                       id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Picture0',
                                       hidden: true,
                                       height: 42,
                                       width: 42,
                                       html: '<img src="resources/icons/AzuImg.jpg" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">',
                                       //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',


                                   },
                                   {
                                       xtype: 'panel',
                                       height: 6
                                   },
                                   {
                                         
                                       xtype: 'container',
                                       id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Picture1',
                                       hidden:true,
                                             height: 42,
                                             width: 42,
                                             html: '<img src="resources/icons/AzuImg.jpg" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">',
                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                            
                                         
                                   },
                                   {
                                       xtype: 'panel',
                                       height:6
                                   },
                                    {

                                        xtype: 'container',
                                        height: 42,
                                        width: 42,
                                        id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Picture2',
                                        hidden: true,
                                        html: '<img src="resources/icons/satay.jpg" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">',
                                       

                                    },
                                    {
                                        xtype: 'panel',
                                        height: 6
                                    },
                                     {

                                         xtype: 'container',
                                         height: 42,
                                         width: 42,
                                         id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Picture3',
                                         hidden: true,
                                         html: '<img src="https://setkita.com/AyohaImgCard/AdvertisementImage/CRCom-71100/satay.jpg" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">',
                                        

                                     },
                                     {
                                         xtype: 'panel',
                                         height: 6
                                     },
                                     {

                                         xtype: 'container',
                                         height: 42,
                                         width: 42,
                                         id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Picture4',
                                         hidden: true,
                                         html: '<img src="https://setkita.com/AyohaImgCard/AdvertisementImage/CRCom-71100/satay.jpg" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">',
             


                                     }
                               ]
                           },

                             {
                                 xtype: 'carousel',
                                 //hidden:true,
                                 id: 'FloatPanel_AyohaStore_SaleItemDetail_Carousel',
                                 name: 'nameFloatPanel_AyohaStore_SaleItemDetail_Carousel',
                                 width: '100%',
                                 height: '100%',
                               
                                 //height: '100%',
                                 indicator: true,
                                 requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
                                 ],
                                 listeners: {
                                     //initialize: function (c) {
                                     //    this.element.on({
                                     //        tap: function (e, node, options) {
                                     //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                     //        }
                                     //    });
                                     //},
                                     //initialize: function (c) {
                                     //    this.element.on({
                                     //        swipe: function (e, node, options) {
                                     //            if (e.direction == "left") {
                                     //                swipeDirection = "Left";

                                     //            } else {
                                     //                swipeDirection = "Right";
                                     //            }
                                     //        }
                                     //    });
                                     //},
                                     activeitemchange: function (container, newCard, oldCard, index) {
                                       

                                     },

                                 },



                                 margin: '-150 0 0 0',
                                 // items: [
                                 //   {
                                 //       xtype: 'image',
                                 //       id: 'carouselFloatPanel_PreviewAdvertisement_1',
                                 //      // hidden:true,
                                 //       src: 'https://setkita.com/AyohaImgCard/AdvertisementImage/CRCom-71100/satay.jpg',
                                 //       height: '100%',
                                 //       width: '100%',
                                 //       mode: 'image'
                                 //   },
                                 //   {
                                 //       xtype: 'image',
                                 //       id: 'carouselFloatPanel_PreviewAdvertisement_2',
                                 //       hidden: true,
                                 //       src: '',
                                 //       height: '100%',
                                 //       width: '100%',
                                 //       mode: 'image'
                                 //   },
                                 //{
                                 //    xtype: 'image',
                                 //    id: 'carouselFloatPanel_PreviewAdvertisement_3',
                                 //    hidden: true,
                                 //    src: '',
                                 //    height: '100%',
                                 //    width: '100%',
                                 //    mode: 'image'
                                 //},
                               
                               
                                 //  ]
                             },







                        ]
                    },


                 
                    









                        {
                            xtype: 'container',
                            style: 'background-color:white;',
                           docked: 'bottom',
                            width: '100%',
                           // margin:'-100 0 0 0',
                            zIndex:100,
                            height:38,
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [

                                {
                                    xtype: 'panel',
                                    width:10
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'left'
                                    },
                                    items: [
                                        {
                                            margin: '-8 0 0 0',
                                            id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice',
                                            html: '<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):25.00</u></div>',
                                        },
                                        {
                                            margin: '12 0 0 0',
                                            id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="1.41 M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*1.41 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>',
                                        },
                                        
                                    ]
                                },
                                
                                {
                                    xtype:'spacer'
                                },
                                {margin:'25 0 0 0',
                                html: '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><input type="number" id="input-FloatPanel_AyohaStore_SaleItemDetail" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_SaleItemDetailAddToCart();" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div>',
                                },
                            {
                            xtype: 'panel',
    width:10
},
                                //{
                                //    xtype:'panel',
                                //    width:'100%',
                                //    height:10
                                //},

                                //{
                                //    xtype: 'container',
                                //    width: '100%',
                                //    height:32,
                                   
                                //    style: 'background-color:transparent;',
                                //    layout: {
                                //        type: 'hbox',
                                //        pack: 'center',
                                //        align: 'center'
                                //    },
                                //    items: [

                                //        {
                                          
                                //            width: '100%',
                                //            id: 'FloatPanel_AyohaStore_SaleItemDetail_Quantity',
                                //            html: '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;width:100%;text-align:center;color:#c800ffc9;height:32px;"><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_MINUS({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ')"  class="buttonSigToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Cart_Qty{ID}"  style="border-radius: 2px;border: 1px solid black;padding: 2px; width: 35px;height: 36px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center;background-color:white"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ')"  class="buttonSigToCartSign">+</button> </div>'
                                //        },

                                //    ]
                                //},
                            //{
                            //    xtype: 'container',
                            //    width: '100%',
                            //    margin: '3 0 0 0',
                            //    style: 'background-color:transparent;',
                            //    layout: {
                            //        type: 'hbox',
                            //        pack: 'center',
                            //        align: 'center'
                            //    },
                            //    items: [
                                   
                            //        {
                            //            margin: '0 0 0 0',
                            //            width: '50%',
                            //            id: 'FloatPanel_AyohaStore_SaleItemDetail_Redeem',
                            //            html: '<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaStore_SaleItemDetailNow()" class="buttonAyohaPointRedemption_Redeem_Yes" style="margin:0px 0px 0px 0px;">Add To Cart</button></div>'
                            //        },

                            //    ]
                            //},
                            


                            ]
                        }





                ]

            },






        });

    return _FloatPanel_AyohaStore_SaleItemDetail;
}

var FloatPanel_AyohaStore_SaleItemDetailCarousel;
var globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
var globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
var globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType;
var globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice;
function FloatPanel_AyohaStore_SaleItemDetailShow(ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_SaleItemDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_SaleItemDetail());
    this.overlay.show();
    is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'Y';
    FloatPanel_AyohaStore_SaleItemDetailCarousel = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_Carousel');
    globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint = MerchantPoint;
    globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint = AyohaPoint;
    globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType = CampaignType;
    globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode = ItemCode;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice = ItemPrice;
    AddRoutePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName').setHtml('<font size=2 color=white><b>' + ItemName + '</b></font>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;color:#c800ffc9;text-align:center;" >PRICE:RM' + ItemPrice + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + MerchantPoint + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + AyohaPoint + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');
    FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemImgExtendloadByItemCodeStore(ItemCode, ItemCoverImg);
   

  


}





function FloatPanel_AyohaStore_SaleItemDetailShowExt(ID) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_SaleItemDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_SaleItemDetail());
    this.overlay.show();
    is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'Y';

   // (ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode)

    var ItemCode = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemCoverImg = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemName = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemPrice = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var MerchantPoint = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var AyohaPoint = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var CampaignType = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipCardCode = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);

    


    FloatPanel_AyohaStore_SaleItemDetailCarousel = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_Carousel');
    globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint = MerchantPoint.get('MerchantPoint');
    globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint = AyohaPoint.get('AyohaPoint');
    globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType = CampaignType.get('CampaignType');
    globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode = MembershipCardCode.get('MembershipCardCode');
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode = ItemCode.get('ItemCode');
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice = ItemPrice.get('ItemPrice');
    AddRoutePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName').setHtml('<font size=2 color=white><b>' + ItemName.get('ItemName') + '</b></font>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):' + ItemPrice.get('ItemPrice') + '</u></div>');
    FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemImgExtendloadByItemCodeStore(ItemCode.get('ItemCode'), ItemCoverImg.get('ItemCoverImg'));





}

function FloatPanel_AyohaStore_SaleItemDetailShowExtNoImage() {
    swalFireWarning("No Sale Item Image!");
}

var is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';




function FloatPanel_AyohaStore_SaleItemDetailAddToCart() {
    var val = document.getElementById("input-FloatPanel_AyohaStore_SaleItemDetail").value;

    if (globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode == "NotMember") {
        // Swal.fire({ title: '<strong>HTML <u>example</u></strong>', icon: 'info', html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class="fa fa-thumbs-down"></i>', cancelButtonAriaLabel: 'Thumbs down' });

        Swal.fire({
            title: '',
            html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>We require every user to be a member of each of our online stores, so that we can double the rewards for you.<br><br>  Press JOIN to get a membership card and join the campaign!",
            //imageUrl: "resources/icons/membershipPurpleThree.png",
            imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
            imageWidth: 350,
            imageHeight: 200,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'JOIN',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        }).then(function (result) {
            if (result.isConfirmed) {
                localStorage.setItem("MembershipByMethod", "AyohaStore");
                // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()

                var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
                FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
            }
        });
        return;

    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode == "NoMembershipCard") {
        swalFireWarning("This Merchant not create membership card!,Cannot procced.");
        return;
    }

    if (val) {
       

        var Qty = parseInt(val);

        if (Qty <= 0) {
            return;
        }
        var MerchantPoints = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint);
        var MerchantSumStamp;
        var AyohaPoints = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint);
        var ItemPrices = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice);
        var TTlMerchantPoint;
        var TTlAyohaPoint;
        var SumPrice;
        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Stamp Reward Loyalty Card") {
            TTlMerchantPoint = 0.00;
            TTlAyohaPoint = Qty * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
            MerchantSumStamp = 1;
        }
        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Point Reward Loyalty Card") {
            TTlMerchantPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
            TTlAyohaPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
            MerchantSumStamp = 0;
        }
        SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });

      
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert(globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode, Qty, SumPrice, globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint, globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint);

    } else {

    }


    // AC.LoyaltyRewardType, AC.MerchantSumPoint, AC.AyohaSumPoint, AC.MerchantSumStamp
}


function FloatPanel_AyohaStore_SaleItemDetailHide() {

    if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == 'Y') {
        _FloatPanel_AyohaStore_SaleItemDetail.hide();
        is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
        RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
    }

}







function FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemImgExtendloadByItemCodeStore(ItemCode,ItemCoverImg) {

    var Store;
    var counter = 1;
    _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getProxy().setExtraParam('ItemCode', ItemCode);
    _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemImgExtendloadByItemCode');
    _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getCount());
        if (count == 0) {
            FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: ItemCoverImg, height: '100%', width: '100%', mode: 'image' });
            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHidden(false);
            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHtml('<img src="' + ItemCoverImg + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

            return;
        } else {
            FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: ItemCoverImg, height: '100%', width: '100%', mode: 'image' });
            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHidden(false);
            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHtml('<img src="' + ItemCoverImg + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

            for (i = 0; i < count; i++) {
                Store = _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getAt(i);
                //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHidden(false);
                //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHtml('<img src="' + Store.get('ImgPath') + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

                FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: Store.get('ImgPath'), height: '100%', width: '100%', mode: 'image' });
                counter++;
            }
          
        }

        //var Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(0);
        //if (Store.get('TotalItemQuantity').length >= 6) {
        //    Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -7');
        //}
        //if (Store.get('TotalItemQuantity').length < 6) {
        //    Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -8');
        //}
        //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalItemQuantity') + '</div>');
        //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalSumPrice') + '</div>');
        //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalMerchantPoint') + '</div>');
        //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalAyohaPoint') + '</div>');
        //Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div class="blink_me" style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:purple;text-align:center;" >RM' + Store.get('TotalSumPrice') + '</div>');
        //Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div class="blink_me" style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:white;text-align:center;" ><b>' + Store.get('TotalItemQuantity') + '</b></div>');

        //globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = Store.get('TotalItemQuantity');
        //globalFloatPanel_AyohaStore_Cart_TotalSumPrice = Store.get('TotalSumPrice');
        //globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = Store.get('TotalMerchantPoint');


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}





function FloatPanel_AyohaStore_SaleItemDetailNow() {



    var CurrAyohaPoint = parseInt(localStorage.getItem("AyohaPoint"));
    var intglobalFloatPanel_AyohaPointRedemption_Point = parseInt(globalFloatPanel_AyohaPointRedemption_Point);
    //console.log(CurrAyohaPoint);10009
    //console.log(globalFloatPanel_AyohaPointRedemption_Point);5000
    //if (CurrAyohaPoint < globalFloatPanel_AyohaPointRedemption_Point) {
    //    swalFireWarning("Not Enough Ayoha Point!");
    //    return;
    //}
    //if (globalFloatPanel_AyohaPointRedemption_Point < CurrAyohaPoint) {

    //    return;
    //}



    if (CurrAyohaPoint >= intglobalFloatPanel_AyohaPointRedemption_Point) {

        var obj = {
            "ID": 0,
            "ItemCode": globalFloatPanel_AyohaPointRedemption_ItemCode,
            "RedeemHistoryCode": GenerateRandomNo() + "-" + globalFloatPanel_AyohaPointRedemption_ItemCode + "-" + GetCurrAyohaUserAccountNo(),
            "RedeemHistoryStatus": "Submitted",
            "RedeemHistoryStatusBy": GetCurrAyohaUserAccountNo(),
            "RedeemPoint": intglobalFloatPanel_AyohaPointRedemption_Point,
            "Remarks": "NA",
            "RowStatus": 'Active',
            "AyohaPoint": CurrAyohaPoint,

        };
        console.log(obj);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryInsertUpdate',

            dataType: "json",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Redeem has been Submitted!");
                    FloatPanel_AyohaStore_SaleItemDetailHide()
                    //  Dashboard_AyohaRewardSummary();
                    // FloatPanel_RedeemPrizeHide();

                }
                else {

                    swalFireFail("Redeem Process Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


                }

                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                // swalFireFail("Scan Failed!!");

            }

        });
    } else {
        swalFireWarning("Not Enough Ayoha Point!");
    }




}