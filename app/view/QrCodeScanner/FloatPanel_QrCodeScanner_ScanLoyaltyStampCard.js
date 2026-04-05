Ext.define('ianMizi.view.QrCodeScanner.FloatPanel_QrCodeScanner_ScanLoyaltyStampCard', {

});






let scanner;
var _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard;
var is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardOpen;

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCard() {

    _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_QrCodeScanner_ScanLoyaltyStampCardID',
            // xtype: 'panel',
            //zIndex: 400,
            xtype: 'container',
            ////height: 475,
            //height:'50%',
            ////  height: '60%',
            //width: '100%',
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: false,
           // hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit',
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
         
            style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',



            items: [
                {

                    xtype: 'container',
                    width: '100%',
                    docked: 'top',
                    height: 40,
                    id: 'containerFloatPanel_QrCodeScanner_ScanLoyaltyStampCardHeader',
                    style: 'background-color:black',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items:
                        [
{
xtype:'spacer',
width:20
},
                            {
                                margin: '0 15 0 0',
                                id: 'htmlFloatPanel_QrCodeScanner_ScanLoyaltyStampCard_TitleHeaderTxt',
                                html: '<font size=2 color=white><b>Scan Ayoha QR Code</b></font>'
                            },
                           

                            {
                                xtype: 'spacer',


                            },

                            
                            {
                                xtype: 'button',
                                id: 'btnFloatPanel_QrCodeScanner_ScanLoyaltyStampCardBack',
                                height: 30,
                                width: 35,
                                margin: '0 0 0 10',
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                                                                scanner.stop();
                                                                                Ext.getCmp('mainView').setHidden(false);
                                                    FloatPanel_QrCodeScanner_CenterLineMessageHide();
                                                 
                                                    _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        duration: 250

                                                    }));
                                }
                            },
                            {
                                xtype:'spacer',
                                width:20
                                },
                                    
                            {
                                xtype: 'button',
                                id: 'btnFloatPanel_QrCodeScanner_ScanLoyaltyStampCard_CardIcon',
                                height: 30,
                                width: 35,
                                hidden: true,
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/scanQRcodeGrey.png" width="25" height="20" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                   

                                  
                                }
                            },
















                        ]

                },




                /////////////////

                {
                    xtype: 'container',
                    height: '100%',
                    width: '100%',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    style: ' background-color:transparent;',
                    items: [

                        {



                            xtype: 'container',
                            height: '33.3%',
                            //  height: '60%',
                            width: '100%',

                            // flex: 1,

                            // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                            name: 'containerFloatPanel_QrCodeScanner_ScanLoyaltyStampCardTop',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                            //style: ' background-color:transparent;',
                            items: [


                                {
                                    margin: '0 0 0 -5',
                                    id: 'FloatPanel_QrCodeScanner_ScanLoyaltyStampCard_AyohaRewardLogo',
                                    height: 160,
                                    width: 160,
                                    html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:160px;height:160px;">',
                                },
                                {

                                    margin: '-10 0 0 0',
                                    // height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:white;">Ayoha Rewards</div>'
                                },
                                {

                                    margin: '-3 0 0 0',
                                    // height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;">We Double Your Reward !</div>'
                                },



                            ]



                        },








                        {



                            xtype: 'container',
                            height: '33.3%',
                            //  height: '60%',
                            width: '100%',

                            // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                            id: 'containerFloatPanel_QrCodeScanner_ScanLoyaltyStampCardCenter',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                            },
                          
                            style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;border-right:600px solid rgba(0, 0, 0, 0.5);border-top:2px none rgba(0, 0, 0, 0.5);border-left:600px solid rgba(0, 0, 0, 0.5);border-bottom:2px none rgba(0, 0, 0, 0.5);',
                            items: [




                            ]



                        },
                        {



                            xtype: 'container',
                            height: '33.3%',
                            //  height: '60%',
                            width: '100%',


                            // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                            id: 'containerFloatPanel_QrCodeScanner_ScanLoyaltyStampCardBottom',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                            //style: ' background-color:transparent;',
                            items: [





                                {
                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent" >Place a QR Code inside the scan area</div>',
                                    margin: '40 0 0 0',
                                },






                            ]



                        },
                    ]
                },

                 {

                   
                   //  html: ' <video id="preview"></video>',
                     html: '<video id="preview" playsinline muted></video>',
                   

                 },

                //////////////////


                {

                    xtype: 'container',
                    width: '100%',

                    // width: 40,
                    docked: 'bottom',
                    height: 40,
                    style: 'background-color:black',
                    //style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [

                        {
                            html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;background-color:transparent" >Developed by ianMizi Solution Sdn Bhd. Kuala Lumpur ,MALAYSIA</div>',
                            margin: '0 0 0 0',
                        },

                    ]

                },











            ],


            // items: {
            //     xtype: 'container',
            //     height: '100%',
            //     width: '100%',
            //     name: 'clickableContainerFloatPanel_QrCodeScanner_ScanLoyaltyStampCard',
            //     layout: {
            //         type: 'fit'
            //     },
            //    style: ' background-color:black;',            
            //     items: [


            //         {
            //             xtype: 'container',
            //             width: '100%',
            //             docked:'top',
            //             id: 'containerFloatPanel_QrCodeScanner_ScanLoyaltyStampCardHeader',
            //             style: {
            //               background: 'transparent',
            //             },
            //             layout: {
            //                 type: 'hbox',
            //                 pack: 'center',
            //                 align: 'center',
            //             },
            //             items:
            //                    [

            //                     {
            //                         html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px" >Scan Ayoha Reward Card</div>',
            //                     },
            //                     {

            //                         xtype: 'image',
            //                         src: 'resources/icons/scanQRcodeGrey.png',
            //                         width: 25,
            //                         height: 25,
            //                         margin: '0 0 0 0'
            //                     },
                                            
            //                                   {
            //                                       xtype: 'spacer',
            //                                   },                                                                                             
            //                                  {
            //                                     xtype: 'button',
            //                                     id: 'btnFloatPanel_QrCodeScanner_ScanLoyaltyStampCardBack',
            //                                     height: 30,
            //                                     width: 35,
            //                                     margin: '0 0 0 0',
            //                                     html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
            //                                     ui: 'plain',
            //                                     handler: function () {
            //                                         scanner.stop();
            //                                         FloatPanel_QrCodeScanner_CenterLineMessageHide();
            //                                         _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard.hide(Ext.fx.Animation({
            //                                             type: 'popOut',
            //                                             duration: 250

            //                                         }));
                                                  
            //                                     }
            //                                 },
                                           
                                               
                            









            //                    ]

            //         },

                 

            //          {
            //              html: '<video id="preview"></video>',
            //          },
                    
                    




            //     ]

            // },






        });

    return _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard;
}





//var scanner = null;
var QRCodeResult;

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShow() {
  QRCodeResult = "";

  // buka overlay macam biasa
  Ext.Viewport.remove(_FloatPanel_QrCodeScanner_ScanLoyaltyStampCard);
  this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_ScanLoyaltyStampCard());
  this.overlay.show();

  FloatPanel_QrCodeScanner_CenterLineMessageShow();
  is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'Y';
  is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardOpen = 'Y';

  // ✅ penting: start scanner lepas panel dah "painted" (DOM video confirm wujud)
  this.overlay.on('painted', function () {
    startFastInstascan();
  }, null, { single: true });
}

function startFastInstascan() {
  const videoEl = document.getElementById('preview');
  if (!videoEl) {
    console.log("preview video not found");
    return;
  }

  // kalau ada scanner lama, stop dulu
  if (scanner) {
    try { scanner.stop(); } catch(e) {}
    scanner = null;
  }

  // optional: bantu browser render video cara stabil
  videoEl.setAttribute('autoplay', '');
  videoEl.setAttribute('playsinline', '');
  videoEl.muted = true;

  // ✅ “fast” settings
  scanner = new Instascan.Scanner({
    video: videoEl,
    mirror: false,

    // scan lebih kerap (lebih cepat detect)
    scanPeriod: 1,          // cuba 1; kalau CPU tinggi, naikkan 2-3
    refractoryPeriod: 250,  // elak duplicate scan berturut-turut

    // paksa resolusi rendah untuk decode laju (kalau build support)
    videoConstraints: {
      width: { ideal: 640 },
      height: { ideal: 480 },
      frameRate: { ideal: 30, max: 30 }
    }
  });

  scanner.addListener('scan', function (content) {
    QRCodeResult = content;
    localStorage.setItem('CurrStampCardQrCode', QRCodeResult);

    // stop cepat lepas dapat result
    try { scanner.stop(); } catch(e) {}

    Ext.getCmp('FloatPanel_QrCodeScanner_CenterLineMessageID').setStyle('background-color:black;');
    Ext.getCmp('FloatPanel_QrCodeScanner_RedCenterLine').setHidden(true);
    Ext.getCmp('FloatPanel_QrCodeScanner_ProcessImage').setHidden(false);
    Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHidden(false);

    Ext.getCmp('mainView').setHidden(false);

    var audio = new Audio();
    audio.src = 'https://setkita.com/AyohaSoundExternal/store-scanner-beep.mp3';
    audio.play();

    if (QRCodeResult.includes("Point")) {
      Scan_QRCode_VerifyQRCode_PointCampaign(QRCodeResult);
    } else {
      Scan_QRCode_VerifyQRCodeStampCampaign(QRCodeResult);
    }
  });

  Instascan.Camera.getCameras().then(function (cameras) {
    console.log('cameras length: ' + (cameras ? cameras.length : 0));

    if (!cameras || cameras.length === 0) {
      console.log('No cameras found.');
      return;
    }

    // ✅ pilih camera paling sesuai (kalau ada back/rear)
    var best =
      cameras.find(c => /back|rear|environment/i.test((c.name || ""))) ||
      cameras[0];

    console.log('Using camera: ' + (best.name || 'unknown'));
    scanner.start(best);
  }).catch(function (e) {
    console.log(e);
  });
}




//var QRCodeResult;

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShowORI() {
    QRCodeResult = "";
    Ext.Viewport.remove(_FloatPanel_QrCodeScanner_ScanLoyaltyStampCard);
    this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_ScanLoyaltyStampCard());
    this.overlay.show();
    FloatPanel_QrCodeScanner_CenterLineMessageShow();
    is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'Y';
    is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardOpen='Y';

    var x = screen.width;
    var y = screen.height;
    var xx = x - 28;
    console.log(y);

    //Ext.getCmp('QrCodeInstaScan').setHtml('<video id="preview" style="width:' + x +'px;height:'+ y +'px;"></video>');
 
    scanner = new Instascan.Scanner({
        video: document.getElementById('preview'),
        mirror: false,
        // width: "auto",
        // height: "auto",
        //  width: x,
        // height:y,
    });


  

    scanner.addListener('scan', function (content) {
      // alert(content);
         QRCodeResult = content;
         localStorage.setItem('CurrStampCardQrCode',QRCodeResult);
         scanner.stop();
         Ext.getCmp('FloatPanel_QrCodeScanner_CenterLineMessageID').setStyle('background-color:black;');
         Ext.getCmp('FloatPanel_QrCodeScanner_RedCenterLine').setHidden(true);
         Ext.getCmp('FloatPanel_QrCodeScanner_ProcessImage').setHidden(false);
         Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHidden(false);
        
        
        Ext.getCmp('mainView').setHidden(false);
          var audio = new Audio();
          audio.src = 'https://setkita.com/AyohaSoundExternal/store-scanner-beep.mp3';
          audio.play();
       
          var n = QRCodeResult.includes("Point");
          if (n) {
              Scan_QRCode_VerifyQRCode_PointCampaign(QRCodeResult);
          } else {
              Scan_QRCode_VerifyQRCodeStampCampaign(QRCodeResult);
          }


    });
    Instascan.Camera.getCameras().then(function (cameras) {
        console.log('cameras length.'+cameras.length);
        if (cameras.length > 0) {
            scanner.start(cameras[1]);
            console.log('cameras found.');
        } else {
            console.log('No cameras found.');
        }
    }).catch(function (e) {
        console.log(e);
    });


}
var is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'N';

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide() {
    scanner.stop();  
    FloatPanel_QrCodeScanner_CenterLineMessageHide();
    if (is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide == 'Y') {
        _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard.hide();
        is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'N';
        is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardOpen='N';
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







