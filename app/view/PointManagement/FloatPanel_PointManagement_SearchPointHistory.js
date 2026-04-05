Ext.define('ianMizi.view.PointManagement.FloatPanel_PointManagement_SearchPointHistory', {

});







var _FloatPanel_PointManagement_SearchPointHistory;
var globalSearchSendPointVal;



function FloatPanel_PointManagement_SearchPointHistory() {

    _FloatPanel_PointManagement_SearchPointHistory = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_PointManagement_SearchPointHistoryID',
            xtype: 'panel',
            zIndex: 350,
            xtype: 'container',
            height: 120,
            //  height: '60%',
            width: 460,
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
           hideOnMaskTap: false,
            layout: {
                type: 'fit'
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

            style: 'background-color:white;',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                _FloatPanel_PointManagement_SearchPointHistory.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';
                            } if (e.direction == "right") {
                                _FloatPanel_PointManagement_SearchPointHistory.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';
                            } if (e.direction == "up") {
                                _FloatPanel_PointManagement_SearchPointHistory.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'up',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';
                            }
                            if (e.direction == "down") {
                                _FloatPanel_PointManagement_SearchPointHistory.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'down',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';
                            }

                        }
                    });
                }
            },

            items: {
                //zIndex: 40,
                xtype: 'container',
                style: 'background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        // docked: 'top',
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_PointManagement_SearchPointHistoryHeader',
                        style: {
                            // background: '#D25959',
                            background: 'transparent',
                            // border: '2px'
                        },
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
                                                 margin: '0 0 0 30',
                                                 html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:18px;font-weight:bold">Search</div>',
                                             },

                                              {
                                                  xtype: 'spacer',

                                              },
                                               {
                                                   xtype: 'button',
                                                   id: 'btnFloatPanel_PointManagement_SearchPointHistoryCardBack',
                                                   height: 30,
                                                   width: 35,
                                                   // iconCls: 'list',
                                                   html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   handler: function () {
                                                       FloatPanel_PointManagement_SearchPointHistoryHide();
                                                       //_FloatPanel_PointManagement_SearchPointHistory.hide(Ext.fx.Animation({
                                                       //    type: 'slideOut',
                                                       //    direction: 'left',
                                                       //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                       //    duration: 250

                                                       //}));
                                                       is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';

                                                   }
                                               },













                               ]

                    },





                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        width: '100%',
                        margin: '13 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                          //{


                          //    html: '<font size=2 color=white>Search</font>',

                          //},


                           {
                               margin: '3 0 0 0',
                               html: '<input type="text" id="input-FloatPanel_PointManagement_SearchPointHistoryTxt" placeHolder="Name"/>'
                           },

                          //{

                          //    margin: '0 0 0 0',
                          //    width: '100%',
                          //    height: 20,
                          //    html: '<input type="password" id="input-FloatPanel_PointManagement_SearchPointHistory" placeHolder="Name,Email or Phone No" style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          //},














































                        ]
                    },


                ]

            },






        });

    return _FloatPanel_PointManagement_SearchPointHistory;
}



function FloatPanel_PointManagement_SearchPointHistoryShow() {
    Ext.Viewport.remove(_FloatPanel_PointManagement_SearchPointHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_PointManagement_SearchPointHistory());
    this.overlay.show();
    is_FloatPanel_PointManagement_SearchPointHistoryHide = 'Y';
    document.getElementById("input-FloatPanel_PointManagement_SearchPointHistoryTxt").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_ListTypeSearchPointHistoryTxtOnKeyUp);


}
var is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';

function FloatPanel_PointManagement_SearchPointHistoryHide() {
    if (is_FloatPanel_PointManagement_SearchPointHistoryHide == 'Y') {
    
        _FloatPanel_PointManagement_SearchPointHistory.hide();
        is_FloatPanel_PointManagement_SearchPointHistoryHide = 'N';
    }

}
