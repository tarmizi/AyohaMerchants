Ext.define('ianMizi.view.Master.FloatPanel_DialogBox', {

});

var _FloatPanel_DialogBox;


var isFloatPanel_DialogBoxOpen = 'N';









function FloatPanel_DialogBox() {

    _FloatPanel_DialogBox =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 230,
         width: 450,
         id: 'LoadingFloatPanel_DialogBoxID',
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
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_DialogBox.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_DialogBox.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_DialogBoxOpen = 'N';
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
             style: 'border-bottom:0px solid;background-color:white;',

            // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                     id: 'containerFloatPanel_DialogBoxHeader',
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

                                           },


                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_DialogBoxBack',
                                                height: 30,
                                                width: 30,
                                                margin:'10 0 0 0',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/xcloseblack01.png" width="20" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_DialogBox.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        duration: 250,
                                                        easing: 'ease-out'

                                                    }));
                                                    isFloatPanel_DialogBoxOpen = 'N';
                                                    RemovePages(_FloatPanel_DialogBox, "isFloatPanel_DialogBoxOpen");

                                                }
                                            },

                                            {
                                                xtype: 'panel',
                                                width:15
                                            }









                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_DialogBoxBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [


                    {
                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'FloatPanel_DialogBoxBorderBgInner',
                        //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                        style: ' background-color:transparent;',
                        height: '100%',
                        width: '90%',
                        // style: 'border:2px solid #D25959;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [

                            {
                                margin: '5 0 0 28',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Delete Charge Setting</div>',

                            },
                            {
                                margin: '10 0 0 28',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Are you sure you want to delete this setting?</div>',

                            }

                        ]


                    },


                    {
                        xtype: 'container',
                        width: '100%',
                        margin: '70 0 0 0',
                        height:30,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align:'center'
                        },
                        items: [
                             {
                                 id: 'htmlFloatPanel_DialogBox_No',
                                 //margin: '-27 0 0 0',
                                 //width: 80,
                                 //height: 30,
                                 margin: '0 0 0 0',
                                 html: '<button OnClick="FloatPanel_DialogBox_No()" class="buttonNoWhite">No</button>'



                             },
                                   {
                                       xtype: 'panel',
                                       width: 20
                                   },
                                   {
                                       id: 'htmlFloatPanel_DialogBox_Yes',
                                       //margin: '-27 0 0 0',
                                       margin: '0 0 0 0',
                                       html: '<button OnClick="FloatPanel_DialogBox_Yes()" class="buttonYesPurple">Yes</button>'



                                   },
                        ]
                    }


                    


                ]


            },









             ]




         }







     });
    return _FloatPanel_DialogBox;





}

function FloatPanel_DialogBoxShow(ID,Code,CreatedBy, EnterpriseAccNo,Module) {

    Ext.Viewport.remove(_FloatPanel_DialogBox);
    this.overlay = Ext.Viewport.add(FloatPanel_DialogBox());
    this.overlay.show();
    isFloatPanel_DialogBoxOpen = 'Y';
    AddRoutePages(_FloatPanel_DialogBox, "isFloatPanel_DialogBoxOpen");
    globalFloatPanel_DialogBox_ID=ID;
    globalFloatPanel_DialogBox_Code = Code;
    globalFloatPanel_DialogBox_CreatedBy = CreatedBy;
    globalFloatPanel_DialogBox_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_DialogBox_Module = Module;
}


function FloatPanel_DialogBoxHide() {
    _FloatPanel_DialogBox.hide(); isFloatPanel_DialogBoxOpen = 'N';
    RemovePages(_FloatPanel_DialogBox, "isFloatPanel_DialogBoxOpen");
}




var globalFloatPanel_DialogBox_ID;
var globalFloatPanel_DialogBox_Code;
var globalFloatPanel_DialogBox_CreatedBy;
var globalFloatPanel_DialogBox_EnterpriseAccNo;
var globalFloatPanel_DialogBox_Module;
function FloatPanel_DialogBox_DeleteChargeSetting() {
    var objn = {
        //"ID": globalFloatPanel_DialogBox_ID,
        "ChargeSettingCode": globalFloatPanel_DialogBox_Code,
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "EnterpriseAccNo": globalFloatPanel_DialogBox_EnterpriseAccNo,
     
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/ChargeDeliverySetting/ChargeDeliverySettingDelete',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Delete Successfully");
                FloatPanel_DialogBoxHide();
                FloatPanel_AyohaStore_DeliveryChargeHide();
              
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    FloatPanel_AyohaStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore();
                });
                task.delay(500);


            }
            else {

                swalFireFail("Fail->Delete!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail->Delete!!!!");
            Ext.Viewport.unmask();
        }

    });
}

function FloatPanel_DialogBox_Yes() {
    if (globalFloatPanel_DialogBox_Module == "DeliveryChargeSetting") {
        FloatPanel_DialogBox_DeleteChargeSetting();
    }
}
function FloatPanel_DialogBox_No() {
    FloatPanel_DialogBoxHide()
}