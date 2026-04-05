Ext.define('ianMizi.view.AyohaOtherOnlineStore.FloatPanel_AyohaOtherOnlineStoreDetail', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaOtherOnlineStoreDetail;


var isFloatPanel_AyohaOtherOnlineStoreDetailOpen = 'N';





function FloatPanel_AyohaOtherOnlineStoreDetail() {

    _FloatPanel_AyohaOtherOnlineStoreDetail =
     Ext.create('Ext.Container', {
         zIndex: 340,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_AyohaOtherOnlineStoreDetailID',
         name: 'nameFloatPanel_AyohaOtherOnlineStoreDetailID',
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
                             _FloatPanel_AyohaOtherOnlineStoreDetail.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaOtherOnlineStoreDetail.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaOtherOnlineStoreDetailOpen = 'N';
                         RemovePages(_FloatPanel_AyohaOtherOnlineStoreDetail, "isFloatPanel_AyohaOtherOnlineStoreDetailOpen");
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
                     docked: 'bottom',

                     height: 50,
                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',

                     id: 'containerFloatPanel_AyohaOtherOnlineStoreDetailFooter',
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
                                               id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_CountLoveTxt',
                                               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:transparent;margin:4px 0px 0px 0px">0</div>',

                                               //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                           },



                                            {
                                                xtype: 'spacer',


                                            },
                                //  {
                                    
                                //      //margin: '-27 0 0 0',
                                //      margin: '0 0 0 0',
                                //      //html: '<button OnClick="FloatPanel_DialogBoxShow("0",' + globalFloatPanel_AyohaOtherOnlineStoreDetail_ChargeSettingCode + ',' + GetCurrAyohaEnterpriseUserAccountNo() + ', ' + GetEnterpriseAccNo() + ',"0")" class="buttonSaveDeleteProduct">Delete</button>'
                                //      html: '<button OnClick="FloatPanel_DialogBoxShow(0,' + "'" + globalFloatPanel_AyohaOtherOnlineStoreDetail_ChargeSettingCode + "'" + ',' + "'" + GetCurrAyohaEnterpriseUserAccountNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'DeliveryChargeSetting'" + ')" class="buttonSaveDeleteProduct">Delete</button>'


                                //  },


                                 {
                                    xtype: 'button',
                        
                                    id: 'btnFloatPanel_AyohaOtherOnlineStoreDetail_Delete',
                                    //  badgeText: '1',
                                    margin: '0 -18 -8 0',
                                    //height: 35,
                                    //width: 35,
                                    html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function (){
                                        FloatPanel_DialogBoxShow(0,globalFloatPanel_AyohaOtherOnlineStoreDetail_ChargeSettingCode,GetCurrAyohaEnterpriseUserAccountNo(),GetEnterpriseAccNo(),DeliveryChargeSetting);
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_Delete',
                                    //  badgeText: '1',
                                    margin: '7 0 0 5',
                                    //height: 40,
                                    //width: 130,
                                    html: '<font size=2 color=grey>*Delete</font>',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_DialogBoxShow(0,globalFloatPanel_AyohaOtherOnlineStoreDetail_ChargeSettingCode,GetCurrAyohaEnterpriseUserAccountNo(),GetEnterpriseAccNo(),DeliveryChargeSetting);
                                    }
                                },
                                   {
                                       xtype: 'panel',
                                       width: 3
                                   },

                                   
 {
    xtype: 'button',
   // id:'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
    //  badgeText: '1',
    margin: '0 -18 -8 0',
    //height: 35,
    //width: 35,
    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaOtherOnlineStoreDetail_Save();
    }
},

{
    xtype: 'button',
    //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
   // id:'txtbtn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
    //  badgeText: '1',
    margin: '7 0 0 7',
    //height: 40,
    //width: 130,
    html: '<font size=2 color=grey>Save</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaOtherOnlineStoreDetail_Save(); 
    }
},
                                //    {
                                //        id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_Save',
                                //        //margin: '-27 0 0 0',
                                //        margin: '0 0 0 0',
                                //        html: '<button OnClick="FloatPanel_AyohaOtherOnlineStoreDetail_Save()" class="buttonSaveDeleteProduct">Save</button>'



                                //    },
                                   {
                                       xtype: 'panel',
                                       width: 3
                                   },








                            ]

                 },

                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height: 60,
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                    style:GetHeaderStyle(),
                     id: 'containerFloatPanel_AyohaOtherOnlineStoreDetailHeader',
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
                                    width: 20
                                },

                                {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_TitleHeaderTxt',
                                    //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Online Store Details</div>',

                                    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                },


                                          {
                                              xtype: 'spacer'
                                          },

                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_AyohaOtherOnlineStoreDetailBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AyohaOtherOnlineStoreDetail.hide(Ext.fx.Animation({
                                                      type: 'popOut',
                                                      // direction: 'left',
                                                      //easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AyohaOtherOnlineStoreDetailOpen = 'N';
                                                  RemovePages(_FloatPanel_AyohaOtherOnlineStoreDetail, "isFloatPanel_AyohaOtherOnlineStoreDetailOpen");

                                              }
                                          },

                                           {
                                               xtype: 'spacer',
                                               width: 20
                                           },
                                    //{
                                    //    xtype: 'button',

                                    //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                    //    height: 40,
                                    //    width: 40,
                                    //    // iconCls: 'list',
                                    //    id: 'btnFloatPanel_AyohaOtherOnlineStoreDetail_PicProfile',
                                    //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                    //    ui: 'plain',
                                    //    handler: function () {
                                    //        _FloatPanel_AyohaOtherOnlineStoreDetail.hide(Ext.fx.Animation({
                                    //            type: 'slideOut',
                                    //            direction: 'right',
                                    //            easing: 'cubic-bezier(.7,0,.7,1)',
                                    //            duration: 250

                                    //        }));

                                    //        isFloatPanel_AyohaOtherOnlineStoreDetailOpen = "N";
                                    //        RemovePages(_FloatPanel_AyohaOtherOnlineStoreDetail, "isFloatPanel_AyohaOtherOnlineStoreDetailOpen");
                                    //    }
                                    //},












                            ]

                 },





            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaOtherOnlineStoreDetailBorderBg',
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
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators: false
                },
                items: [





                   {
                       xtype: 'container',
                       width: '100%',
                       height: 700,
                       style: ' background-color:transparent;',
                       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containerFloatPanel_AyohaOtherOnlineStoreDetails',

                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'left',
                       },
                       items: [






                               {
                                   margin: '25 0 0 5',
                                   html: '<font color="black" size="1"><b>Online Store Code</b></font>',
                               },

                               {
                                   xtype: 'container',
                                   // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                   name: 'namecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode',
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   height: 10,
                                   styleHtmlContent: true,
                                   style: "background-color: transparent",
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [
                                        {
                                            id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode',
                                            margin: '-17 0 0 -13',
                                            width: '70%',
                                            html: '<input type="text" id="input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode" readOnly placeHolder="Please Select" style="border-color:black;color:grey;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                        },


                         {
                             width: 20,
                             height: 20,
                             margin: '-15 0 0 0',
                             id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_StoreCodeIcon',
                             html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                         },
                                   ]
                               },


                            {
                                margin: '30 0 0 5',
                                html: '<font color="black" size="1"><b>Online Store Name</b></font>',
                            },
                             {
                                 id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreName',
                                 margin: '-5 0 0 5',

                                 // zIndex: -10,
                                 width: '90%',
                                 html: '<input type="text"  id="input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreName"   style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },




                              {
                                  margin: '20 0 0 5',
                                  html: '<font color="black" size="1"><b>Online Store URL</b></font>',
                              },
                             {
                                 id: 'htmlFloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreURL',
                                 margin: '-5 0 0 5',

                                 // zIndex: -10,
                                 width: '90%',
                                 html: '<input type="text"  id="input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreURL"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },







                       




                                


                                    
                                       


                           
                             

                                   





                                   



                                           




                                    



                              

                              

                               




                      
                             







                              



                                      
                   







                       ]
                   },





                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaOtherOnlineStoreDetail;





}


var globalFloatPanel_AyohaOtherOnlineStoreDetail_ID;
var globalFloatPanel_AyohaOtherOnlineStoreDetail_ChargeSettingCode;

function FloatPanel_AyohaOtherOnlineStoreDetailShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaOtherOnlineStoreDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaOtherOnlineStoreDetail());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaOtherOnlineStoreDetail, "isFloatPanel_AyohaOtherOnlineStoreDetailOpen");
    isFloatPanel_AyohaOtherOnlineStoreDetailOpen = 'Y';
    globalAyohaOtherOnlineStoreDetail_ID = 0;
    globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo = GetEnterpriseAccNo();

    Ext.getCmp('btnFloatPanel_AyohaOtherOnlineStoreDetail_Delete').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaOtherOnlineStoreDetail_Delete').setHidden(true);
    





    var containerViewnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode = containerViewnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode.element;
    containerViewElnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_OnlineStoreListShow();
      }
    );
}



var globalAyohaOtherOnlineStoreDetail_ID;
var globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreCode;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreURL;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreName;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreIconPath;
function FloatPanel_AyohaOtherOnlineStoreDetailEditShow(ID, EnterpriseAccNo, OnlineStoreCode, OnlineStoreURL, OnlineStoreName, OnlineStoreIconPath) {

    Ext.Viewport.remove(_FloatPanel_AyohaOtherOnlineStoreDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaOtherOnlineStoreDetail());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaOtherOnlineStoreDetail, "isFloatPanel_AyohaOtherOnlineStoreDetailOpen");
    isFloatPanel_AyohaOtherOnlineStoreDetailOpen = 'Y';
    //globalFloatPanel_AyohaOtherOnlineStoreDetail_ID = ID;
    //globalFloatPanel_AyohaOtherOnlineStoreDetail_ChargeSettingCode = ChargeSettingCode;
    //globalFloatPanel_StoreCode_ChargeCode = StoreCodeCode;
    //globalFloatPanel_FreeConditionDeliveryCharge_FC_Code = FreeDeliveryConditionCode;
    globalAyohaOtherOnlineStoreDetail_ID=ID;
    globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo = EnterpriseAccNo;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreCode = OnlineStoreCode;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreURL = OnlineStoreURL;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreName = OnlineStoreName;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreIconPath = OnlineStoreIconPath;
    
    document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode').value = OnlineStoreCode;
    document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreName').value = OnlineStoreName;
    document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreURL').value = OnlineStoreURL;
    //document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode').value = StoreCodes;
    //document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_FreeDelivery').value = FreeCondition;

    //globalFloatPanel_DialogBox_Code = ChargeSettingCode;
    //globalFloatPanel_DialogBox_EnterpriseAccNo = GetEnterpriseAccNo();

    //if (IsEnableDeliveryChargeSetting == "Y") {
    //    document.getElementById("checkbox-FloatPanel_AyohaOtherOnlineStoreDetail_EnableChargeSetting").checked = true;
    //} else {
    //    document.getElementById("checkbox-FloatPanel_AyohaOtherOnlineStoreDetail_EnableChargeSetting").checked = false;
    //}

    //FloatPanel_StoreCodeSetStoreCodeLbl(StoreCodes);
    //FloatPanel_AyohaOtherOnlineStoreDetail_SetValue(StoreCodeCode, DeliveryRate_Charge);

    //var containerViewnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_FreeDelivery = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaOtherOnlineStoreDetail_FreeDelivery]')[0];
    //var containerViewElnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_FreeDelivery = containerViewnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_FreeDelivery.element;
    //containerViewElnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_FreeDelivery.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_FreeConditionDeliveryChargeShow();
    //  }
    //);

    var containerViewnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode = containerViewnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode.element;
    containerViewElnamecontainerFloatPanel_AyohaOtherOnlineStoreDetail_StoreCode.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_OnlineStoreListShow();
      }
    );

}




function FloatPanel_AyohaOtherOnlineStoreDetailHide() {
    if (isFloatPanel_AyohaOtherOnlineStoreDetailOpen == 'Y') {
        _FloatPanel_AyohaOtherOnlineStoreDetail.hide(); isFloatPanel_AyohaOtherOnlineStoreDetailOpen = 'N';
        RemovePages(_FloatPanel_AyohaOtherOnlineStoreDetail, "isFloatPanel_AyohaOtherOnlineStoreDetailOpen");
    }
}










var globalFloatPanel_AyohaOtherOnlineStoreDetail_IsEnableDeliveryChargeSetting = "N";

function FloatPanel_AyohaOtherOnlineStoreDetail_Save() {



    var OnlineStoreCode=  document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode').value;
    var OnlineStoreName= document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreName').value;
    var OnlineStoreURL=document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreURL').value;

    if (OnlineStoreName) {

    } else {
        swalFireFail("Online Store Name is Required!");
        return;
    }

    if (OnlineStoreURL) {

    } else {
        swalFireFail("Online Store URL is Required!");
    }
    if (OnlineStoreCode) {

    } else {
        swalFireFail("Online Store Code is Required!");
        return;
    }

   
    

    

    var objn = {
        "ID": globalAyohaOtherOnlineStoreDetail_ID,
        "EnterpriseAccNo": globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo,
        "OnlineStoreCode": document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_StoreCode').value,
        "OnlineStoreURL": document.getElementById('input-FloatPanel_AyohaOtherOnlineStoreDetail_OnlineStoreURL').value,
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/EnterprisesOnlineStore/EnterprisesOnlineStoreInsertUpdate',

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
                FloatPanel_AyohaOtherOnlineStoreDetailHide();
                swalFireSuccess("Save Successfully");
                FloatPanel_EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStore();

            }
            else {

                swalFireFail("Fail->Delivery Setting!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail->Delivery Setting!!!!");
            Ext.Viewport.unmask();
        }

    });
}


