Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_Add', {

});







var _FloatPanel_AyohaNotificationManagement_Add;

function FloatPanel_AyohaNotificationManagement_Add() {

    _FloatPanel_AyohaNotificationManagement_Add = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaNotificationManagement_AddID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 400,
            // draggable: true,
            bottom: 100,
            // center: true,
            modal: false,
            right: 50,
            showAnimation: {
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: null,
                duration: null,
                easing: null

            },
            style: 'background-color: transparent;',

            items: {

                xtype: 'container',
                margin: '-11 0 0 -20',
                //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                height: 35,
                width: 150,





                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                height: 60,
                width: 60,
                items: [
                          {

                              xtype: 'button',
                              id: 'btnFloatPanel_AyohaNotificationManagement_Add_Shows',
                              margin: '-3 0 0 -5',
                              height: 70,
                              width: 70,
                              html: '<img src="resources/icons/AddNotification01.png" width="30" height="30" alt="Company Name">',
                              //  html: '<img src="resources/icons/SaleThree.gif" width="250" height="250" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {
                                  FloatPanel_AyohaNotificationManagement_CreateMessageShow();
                              }
                          },


                ]






            }




        });

    return _FloatPanel_AyohaNotificationManagement_Add;
}



function FloatPanel_AyohaNotificationManagement_AddShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_Add);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_Add());
    this.overlay.show();
    isFloatPanel_AyohaNotificationManagement_AddHide = 'Y';
}
var isFloatPanel_AyohaNotificationManagement_AddHide = 'N';

function FloatPanel_AyohaNotificationManagement_AddHide() {
    if (isFloatPanel_AyohaNotificationManagement_AddHide == 'Y') {
        _FloatPanel_AyohaNotificationManagement_Add.hide();
        isFloatPanel_AyohaNotificationManagement_AddHide = 'N';
    }

}

