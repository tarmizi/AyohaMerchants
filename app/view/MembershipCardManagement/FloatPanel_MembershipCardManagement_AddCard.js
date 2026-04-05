Ext.define('ianMizi.view.MembershipCardManagement.FloatPanel_MembershipCardManagement_AddCard', {

});







var _FloatPanel_MembershipCardManagement_AddCard;

function FloatPanel_MembershipCardManagement_AddCard() {

    _FloatPanel_MembershipCardManagement_AddCard = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_MembershipCardManagement_AddCardID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 150,
            // draggable: true,
            bottom: 55,
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
                              id: 'btnFloatPanel_MembershipCardManagement_AddCard_Shows',
                              margin: '-3 0 0 -5',
                              height: 70,
                              width: 70,
                              html: '<img src="resources/icons/addNewCard.png" width="30" height="30" alt="Company Name">',
                              //  html: '<img src="resources/icons/SaleThree.gif" width="250" height="250" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {
                                  FloatPanel_MembershipCardManagement_NewCardAddShow();
                                 // FloatPanel_MembershipCardManagement_AddCardFormShow();
                                  //FloatPanel_MembershipCardManagement_EditCardShow();
                              }
                          },


                ]






            }




        });

    return _FloatPanel_MembershipCardManagement_AddCard;
}



function FloatPanel_MembershipCardManagement_AddCardShow() {
    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_AddCard);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_AddCard());
    this.overlay.show();
    isFloatPanel_MembershipCardManagement_AddCardHide = 'Y';
}
var isFloatPanel_MembershipCardManagement_AddCardHide = 'N';

function FloatPanel_MembershipCardManagement_AddCardHide() {
    if (isFloatPanel_MembershipCardManagement_AddCardHide == 'Y') {
        _FloatPanel_MembershipCardManagement_AddCard.hide();
        isFloatPanel_MembershipCardManagement_AddCardHide = 'N';
    }

}

