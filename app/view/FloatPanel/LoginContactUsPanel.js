Ext.define('ianMizi.view.FloatPanel.LoginContactUsPanel', {

});





var globalLoginContactUsPanelExpandShrinkBtn;
var globalLoginContactUsPanelColListViewBtn;
var _LoginContactUsPanel;

function LoginContactUsPanel() {

    _LoginContactUsPanel = Ext.create('Ext.Container',


        {
            id: 'LoginContactUsPanelID',
            xtype: 'container',
          //height: 100,
            width: '35%',
           // zIndex: 300,
            // draggable: true,
          //  hideOnMaskTap: true,
            bottom: 0,
           // top: 260,
           // modal: false,
            right: 0,
            showAnimation: {
                type: 'slideIn',
                direction: 'up',
             easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // More smooth easing function
            //  easing: 'cubic-bezier(2, 0.8, 2, 1)', // More smooth easing function
                duration: 700 // Increase the duration for smoother effect

                // type: 'popIn',
                // duration: 500,
                // easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 150,
                easing: 'ease-in'

            },
            style: 'background-color: transparent;',
            layout: {

                type: 'vbox',
                pack: 'center',
                align: 'center'
            },

            items: [
{
    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Let Connected With Ayoha!</div>',
},

                {

                    xtype: 'container',
                  //  margin: '-40 0 0 -170',
                    margin: '0 0 0 0',
                    style: 'background: transparent;',

                    //height: 25,
                    //width: 170,
                    height: 70,
                    width: '100%',
                    // margin: '70 0 0 0',
                    id: 'containerLoginContactUsPanel_Txt',
                    layout: {

                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                          

                        


                          {
                            xtype: 'container',
                            // margin: '0 0 0 -7',
                            margin: '0 0 0 0',
                             // hidden: true,
                             style: 'border:3px none #ECF0F1;background: white;border-radius:50%;',
                          //   style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:50%;',
                             height: 65,
                             width: 65,
                             // margin: '70 0 0 0',
                          //   id: 'containerLoginContactUsPanelListViewBtn',
                             layout: {
 
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                            items: [
                                {
                                    xtype: 'button',
                                    height: 65,
                                    width: 65,
                                   //   id: 'btnLoginContactUsPanel_AddNewSaleItem',
                                      //badgeText: "2",
                                      html: '<a href="mailto:Admin@IanMizi.com?subject=Regarding Ayoha Merchant Suite &body=Hi,I would like to know more about this system.TQ" title="Click to send an email about Ayoha Merchant Suite"><img src="resources/icons/wired-gradient-177-envelope-send.gif" width="40" height="40" alt="Company Name"></a>',
                                     
                                    //  html:'<script src="https://cdn.lordicon.com/lordicon.js"></script>'+
                                    // '<lord-icon'+
                                    // 'src="https://cdn.lordicon.com/ukwexxlc.json"'+
                                    // 'trigger="hover"'+
                                    // 'stroke="bold"'+
                                    // 'colors="primary:#c69cf4,secondary:#a866ee"'+
                                    // 'style="width:250px;height:250px">'+
                                    // '</lord-icon>',
                                      ui: 'plain',
                                      handler: function () {
                                       
                                             
                                         

                                      }
                                  },



                              ]
                          },


                          ///////////////////////////
                        //   {
                        //     xtype: 'spacer',
                        //     width:5,
                        // },
                          {
                            xtype: 'container',
                            // margin: '0 0 0 -7',
                            margin: '0 0 0 0',
                             // hidden: true,
                             style: 'border:3px none #ECF0F1;background: white;border-radius:50%;',
                          //   style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:50%;',
                             height: 65,
                             width: 65,
                             // margin: '70 0 0 0',
                          //   id: 'containerLoginContactUsPanelListViewBtn',
                             layout: {
 
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                            items: [
                                {
                                    xtype: 'button',
                                    height: 65,
                                    width: 65,
                                 //   id: 'btnLoginContactUsPanelListViewBtn',
                                    //badgeText: "2",
                                    html: '<img src="resources/icons/wired-gradient-959-internet.gif"     style="width:40px;height:40px;cursor:pointer;" title="Visit Ayoha Reward website">',
                                    ui: 'plain',
                                    handler: function () {
                                        LoginContactUs_openWebsite();
                                    }
                                },



                            ]
                        },
                        /////////////////////////////////
                        // {
                        //     xtype: 'spacer',
                        //     width:5,
                        // },

                        {
                            xtype: 'container',
                            // margin: '0 0 0 -7',
                            margin: '0 0 0 0',
                             // hidden: true,
                             style: 'border:3px none #ECF0F1;background: white;border-radius:50%;',
                          //   style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:50%;',
                             height: 65,
                             width: 65,
                             // margin: '70 0 0 0',
                          //   id: 'containerLoginContactUsPanelListViewBtn',
                             layout: {
 
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                            items: [
                                {
                                    xtype: 'button',
                                    height: 65,
                                    width: 65,
                                  //  margin: '0 0 0 0',
                                 //   id: 'btnLoginContactUsPanelListViewBtn',
                                    //badgeText: "2",
                                    html: '<img src="resources/icons/wired-gradient-2540-logo-facebook.gif" style="width:40px;height:40px;cursor:pointer;" title="Visit Ayoha Reward Facebook">',
                                    ui: 'plain',
                                    handler: function () {
                                        LoginContactUs_openFB();
                                    }
                                },



                            ]
                        },
                        //////////////////////////////////////
// {
//     xtype: 'spacer',
//     width:5,
// },

                        {
                            xtype: 'container',
                           // margin: '0 0 0 -7',
                           margin: '0 0 0 0',
                            // hidden: true,
                            style: 'border:3px none #ECF0F1;background: white;border-radius:50%;',
                         //   style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:50%;',
                            height: 65,
                            width: 65,
                            // margin: '70 0 0 0',
                         //   id: 'containerLoginContactUsPanelListViewBtn',
                            layout: {

                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    height: 65,
                                    width: 65,
                                   // margin: '-3 0 0 -5',
                                    margin: '0 0 0 0',
                                   // id: 'btnLoginContactUsPanelListViewBtn',
                                    //badgeText: "2",
                                    html: '<img src="resources/icons/wired-gradient-2543-logo-whatsapp.gif" style="width:40px;height:40px;cursor:pointer;" title=" WhatsApp Ayoha Reward Support">',
                                    ui: 'plain',
                                    handler: function () {
                                        LoginContactUs_openWhatsapp();
                                    }
                                },



                            ]
                        }

                    ]
                },




                    



                    

                   
                    ///////////////////

                    



                    ///



                    



            ]




        });

    return _LoginContactUsPanel;
}



function LoginContactUsPanelShow() {
    Ext.Viewport.remove(_LoginContactUsPanel);
    this.overlay = Ext.Viewport.add(LoginContactUsPanel());
    this.overlay.show();
    is_LoginContactUsPanelOpen = 'Y';

   
}
var is_LoginContactUsPanelOpen = 'N';

function LoginContactUsPanelHide() {
    if (is_LoginContactUsPanelOpen == 'Y') {
        _LoginContactUsPanel.hide();
        is_LoginContactUsPanelOpen = 'N';
    }

}

function LoginContactUs_openWhatsapp(){
    window.open("https://api.whatsapp.com/send?phone=+60133376958&text=Hi", '_system'); return false;
}
function LoginContactUs_openFB(){
    setTimeout(function () { window.open("https://www.facebook.com/profile.php?id=100063681805814", '_system'); return false; }, 25); 
}
function LoginContactUs_openWebsite(){
    window.open("https://ayoha-reward.com/", '_system'); return false;
}
// function LoginContactUs_openEmail(){
//     <a href="mailto:Admin@IanMizi.com?subject=InAppriroate Push Notification (Notification Code:' + val + ') &body=Hi,I would like to report this Push Notification.TQ"><b>Admin@ianMizi.com</b></a>
// }