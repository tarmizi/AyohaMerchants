Ext.define('ianMizi.view.Subscriber.FloatPanel_AddSubscriberMenu', {

});







var _FloatPanel_AddSubscriberMenu;

function FloatPanel_AddSubscriberMenu() {

    _FloatPanel_AddSubscriberMenu = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AddSubscriberMenuID',
            xtype: 'panel',
            height: 1,
            width: 1,
             zIndex: 400,
            // draggable: true,
            hideOnMaskTap: true,
            bottom: 210,
            // center: true,
            modal:true,
            right: 58,
            showAnimation: {
                //type: 'slide',
                //direction: 'left',
                //duration: 700,
                //easing: 'ease-in'
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 150,
                easing: 'ease-in'

            },
            style: 'background-color: transparent;',
            layout: {

                type: 'vbox',
            },

            items: [
          

                {

                    xtype: 'container',
                    margin: '-40 0 0 -170',
                
                    style: 'background: transparent;',

                    //height: 25,
                    //width: 170,
                    // margin: '70 0 0 0',
                    id: 'containerFloatPanel_AddSubscriberMenuStampCardTxt',
                    layout: {

                        type: 'hbox',
                        pack: 'start',
                        align: 'left'
                    },
                    items: [
                          {
                              xtype: 'container',
                              margin: '15 0 0 0',
                              // hidden:true,
                              //style: 'background-color: white;',
                              //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                              style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                              height: 35,
                              width: 150,
                              // margin: '70 0 0 0',
                              id: 'containerFloatPanel_AddSubscriberMenuStampcardInnerTxt',
                              layout: {

                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center'
                              },
                              items: [


                                  //{
                                  //    margin: '0 0 0 0',
                                  //    id: 'htmlFloatPanel_AddSubscriberMenuStampCardTxt',
                                  //    html: '<font size=2 color=black><b>Stamp Card</b></font>'
                                  //},

                                    {
                                        xtype: 'button',
                                        height: 35,
                                        width: 150,
                                        margin: '-1 0 0 0',
                                        id: 'btnFloatPanel_AddSubscriberMenuStampCardTxt',
                                        //badgeText: "2",
                                        html: '<font size=2 color=black><b>Stamp Card</b></font>',
                                        ui: 'plain',
                                        handler: function () {

                                            //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                            //  setupMovementMap(2);
                                            FloatPanel_AyohaCardManagementShow();



                                            //Ext.getCmp('mainView').setActiveItem(16);
                                            //loadNotificationSummary();
                                        }
                                    },

                              ]
                          },

                          {
                              xtype: 'panel',
                              width:18,
                          },


                          {
                              xtype: 'container',
                              margin: '0 0 0 -7',
                              // hidden: true,
                              //style: 'background-color: white;',
                              style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                              height: 60,
                              width: 60,
                              // margin: '70 0 0 0',
                              id: 'containerFloatPanel_AddSubscriberMenuStampQrCodeBtn',
                              layout: {

                                  type: 'hbox',
                                  pack: 'left',
                                  align: 'left'
                              },
                              items: [
                                  {
                                      xtype: 'button',
                                      height: 70,
                                      width: 70,
                                      margin: '-3 0 0 -5',
                                      id: 'btnFloatPanel_AddSubscriberMenuStampQrCodeBtn',
                                      //badgeText: "2",
                                      html: '<img src="resources/icons/StampQRCodePurple.png" width="30" height="30" alt="Company Name">',
                                      ui: 'plain',
                                      handler: function () {
                                          FloatPanel_AyohaCardManagementShow();
                                          //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                          //  setupMovementMap(2);





                                          //Ext.getCmp('mainView').setActiveItem(16);
                                          //loadNotificationSummary();
                                      }
                                  },



                              ]
                          }

                    ]
                },



              
                    {

                        xtype: 'container',
                        margin: '10 0 0 -170',

                        style: 'background: transparent;',

                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AddSubscriberMenuAddNewCustomerTxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [
                              {
                                  xtype: 'container',
                                  margin: '15 0 0 0',
                                  // hidden:true,
                                  //style: 'background-color: white;',
                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                                  height: 35,
                                  width: 150,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AddSubscriberMenuAddNewCustomerTxtInner',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      //{
                                      //    margin: '0 0 0 0',
                                      //    id: 'htmlFloatPanel_AddSubscriberMenuAddNewCustomerTxt',
                                      //    html: '<font size=2 color=black><b>Add New Customer</b></font>'
                                      //},

                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_AddSubscriberMenuAddNewCustomerTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>Add New Member</b></font>',
                                              ui: 'plain',
                                              handler: function () {

                                                  //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                  //  setupMovementMap(2);
                                                  FloatPanel_AddSubscriberMenuHide();
                                                  FloatPanel_SubscriberAddNewQrCodeShow();



                                                  //Ext.getCmp('mainView').setActiveItem(16);
                                                  //loadNotificationSummary();
                                              }
                                          },


                                  ]
                              },

                              {
                                  xtype: 'panel',
                                  width: 18,
                              },


                              {
                                  xtype: 'container',
                                  margin: '0 0 0 -7',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 60,
                                  width: 60,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AddSubscriberMenuAddNewCustomerBtn',
                                  layout: {

                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 70,
                                          width: 70,
                                          margin: '-3 0 0 -5',
                                          id: 'btnFloatPanel_AddSubscriberMenuAddNewCustomerBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/AddNewCustomerTwo.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                              //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                              //  setupMovementMap(2);
                                              FloatPanel_AddSubscriberMenuHide();
                                              FloatPanel_SubscriberAddNewQrCodeShow();



                                              //Ext.getCmp('mainView').setActiveItem(16);
                                              //loadNotificationSummary();
                                          }
                                      },



                                  ]
                              }

                        ]
                    },



                    //{
                    //    xtype: 'container',
                    //    margin: '-30 0 0 -170',
                    //    height: 5,
                    //    width: '100%',
                    //    style: 'background: white;',
                    //},



                    ///////////////////

                    {

                        xtype: 'container',
                        margin: '10 0 0 -170',

                      style: 'background: transparent;',
                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;',
                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AddSubscriberMenuFilterxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [
                              {
                                  xtype: 'container',
                                  margin: '15 0 0 0',
                                  // hidden:true,
                                  //style: 'background-color: white;',
                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                                  height: 35,
                                  width: 150,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AddSubscriberMenuFilterTxtInner',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      //{
                                      //    margin: '0 0 0 0',
                                      //    id: 'htmlFloatPanel_AddSubscriberMenuAddNewCustomerTxt',
                                      //    html: '<font size=2 color=black><b>Add New Customer</b></font>'
                                      //},

                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_AddSubscriberMenuFilterTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>Filter</b></font>',
                                              ui: 'plain',
                                              handler: function () {

                                                  //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                  //  setupMovementMap(2);
                                                  FloatPanel_AddSubscriberMenuHide();
                                                  
                                              }
                                          },


                                  ]
                              },

                              {
                                  xtype: 'panel',
                                  width: 18,
                              },


                              {
                                  xtype: 'container',
                                  margin: '0 0 0 -7',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 60,
                                  width: 60,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AddSubscriberMenuFilterTxtBtn',
                                  layout: {

                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 70,
                                          width: 70,
                                          margin: '-3 0 0 -5',
                                          id: 'btnFloatPanel_AddSubscriberMenuFilterTxtBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/filterPurpleThree.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                              //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                              //  setupMovementMap(2);
                                              FloatPanel_AddSubscriberMenuHide();
                                           
                                          }
                                      },



                                  ]
                              }

                        ]
                    },





                    

           ]




        });

    return _FloatPanel_AddSubscriberMenu;
}



function FloatPanel_AddSubscriberMenuShow() {
    Ext.Viewport.remove(_FloatPanel_AddSubscriberMenu);
    this.overlay = Ext.Viewport.add(FloatPanel_AddSubscriberMenu());
    this.overlay.show();
    is_FloatPanel_AddSubscriberMenuHide = 'Y';
}
var is_FloatPanel_AddSubscriberMenuHide = 'N';

function FloatPanel_AddSubscriberMenuHide() {
    if (is_FloatPanel_AddSubscriberMenuHide == 'Y') {
        _FloatPanel_AddSubscriberMenu.hide();
        is_FloatPanel_AddSubscriberMenuHide = 'N';
    }

}

