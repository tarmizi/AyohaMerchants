Ext.define('ianMizi.view.Master.FloatPanel_OnlineStoreList', {

});

var _FloatPanel_OnlineStoreList;


var isFloatPanel_OnlineStoreListOpen = 'N';
var globalFloatPanel_OnlineStoreList_ChargeTypes;
var globalFloatPanel_OnlineStoreList_ChargeCode;











function FloatPanel_OnlineStoreList() {

    _FloatPanel_OnlineStoreList =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: 450,
         id: 'LoadingFloatPanel_OnlineStoreListID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: false,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_OnlineStoreList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_OnlineStoreList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_OnlineStoreListOpen = 'N';
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'background-color:white;',

             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_OnlineStoreListHeader',
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
                                    margin: '0 0 0 0',
                                    html: '<font size=3 color=black><b>Online Store</b></font>'
                                },

                                           {
                                               xtype: 'spacer',

                                           },







                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_OnlineStoreListBack',
                                                 height: 30,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     _FloatPanel_OnlineStoreList.hide(Ext.fx.Animation({
                                                         type: 'popOut',
                                                         //direction: 'left',
                                                         //easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     isFloatPanel_OnlineStoreListOpen = 'N';

                                                 }
                                             },







                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_OnlineStoreListBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 290,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [







                    {
                        xtype: 'list',
                        //  flex: 1,
                        store: 'OnlineStoreList',
                        id: 'FloatPanel_OnlineStoreListLoadMasterListID',
                        mode: 'SINGLE',
                        disableSelection: false,

                        //itemTpl: '<div class="myContent">' +
                        //   '<div><b>{ID}</b></div>' +
                        //   '<div>{ReceiptName}</div>' +
                        //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                        //   '<div><b>{Amount}</b></div>' +
                        //    '<div style="display: none;">{ID}</div>' +
                        //   '</div>',

                        itemTpl: '<div class="myContent" style="width:100%;">' +

                              '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal;width:150px;height:60px;" rowspan="2"><img src="{OnlineStoreIconPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=3><b>{OnlineStoreName}</b></font></div></th></tr><tr></tr></thead></table>' +

                                  
                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var OnlineStoreName = record.get('OnlineStoreName');
                                var OnlineStoreCode = record.get('OnlineStoreCode');
                                globalAyohaOtherOnlineStoreDetail_OnlineStoreCode = OnlineStoreCode;
                                globalAyohaOtherOnlineStoreDetail_OnlineStoreName = OnlineStoreName;
                                document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode').value = OnlineStoreCode;
                                document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreName').value = OnlineStoreName;
                                if (isFloatPanel_OnlineStoreListOpen == 'Y') {
                                    _FloatPanel_OnlineStoreList.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_OnlineStoreListOpen = 'N';
                               
                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var OnlineStoreName = record.get('OnlineStoreName');
                                var OnlineStoreCode = record.get('OnlineStoreCode');
                                globalAyohaOtherOnlineStoreDetail_OnlineStoreCode = OnlineStoreCode;
                                globalAyohaOtherOnlineStoreDetail_OnlineStoreName = OnlineStoreName;
                                document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode').value = OnlineStoreCode;
                                document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreName').value = OnlineStoreName;
                                if (isFloatPanel_OnlineStoreListOpen == 'Y') {
                                    _FloatPanel_OnlineStoreList.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_OnlineStoreListOpen = 'N';
                              
                            
                               

                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_OnlineStoreList;





}

function FloatPanel_OnlineStoreListShow() {

    Ext.Viewport.remove(_FloatPanel_OnlineStoreList);
    this.overlay = Ext.Viewport.add(FloatPanel_OnlineStoreList());
    this.overlay.show();
    isFloatPanel_OnlineStoreListOpen = 'Y';
    AddRoutePages(_FloatPanel_OnlineStoreList, "isFloatPanel_OnlineStoreListOpen");
}


function FloatPanel_OnlineStoreListHide() {
    _FloatPanel_OnlineStoreList.hide(); isFloatPanel_OnlineStoreListOpen = 'N';
}








