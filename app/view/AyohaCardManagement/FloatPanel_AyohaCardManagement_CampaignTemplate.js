Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_CampaignTemplate', {

});




var _FloatPanel_AyohaCardManagement_CampaignTemplate;


var isFloatPanel_AyohaCardManagement_CampaignTemplateOpen = 'N';





function FloatPanel_AyohaCardManagement_CampaignTemplate() {

    _FloatPanel_AyohaCardManagement_CampaignTemplate =
     Ext.create('Ext.Container', {
         zIndex: 360,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_AyohaCardManagement_CampaignTemplateID',
         draggable: false,
         modal: false,

         centered: true,
         //bottom: 64,         
         //modal: true,
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
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px none;background-color:white;',
         style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',

         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {

         //                if (e.direction == "left") {
         //                    _FloatPanel_AyohaCardManagement_CampaignTemplate.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AyohaCardManagement_CampaignTemplate.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                }
         //                isFloatPanel_AyohaCardManagement_CampaignTemplateOpen = 'N';
         //                RemovePages(_FloatPanel_AyohaCardManagement_CampaignTemplate, "isFloatPanel_AyohaCardManagement_CampaignTemplateOpen");
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",
         //items: {




         //    //  margin:'-50 0 0 0',
         //    //height: 150,
         //    //width: 200,

         //    height: '100%',
         //    width: '100%',
         //    xtype: 'container',
         //    // style: 'border-bottom:0px solid;background-color:#353839;',
         //   // style: 'border-bottom:0px solid;background-color:transparent;',
         //    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
         //    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //    layout: {
         //        type: 'vbox',
         //        pack: 'start',
         //        align: 'center'

         //    },

         //    items: [












         //    ]




         //}



         items: {
             xtype: 'container',
             height: '100%',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'
             },
             // style: ' background-color:transparent;',
             style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
             items: [


                   {

                       width: '100%',
                       height: '100%',
                      // hidden: true,
                       id: 'htmlFloatPanel_AyohaCardManagement_CampaignTemplate',
                       html: 'hello'


                   },



                                   {

                                       xtype: 'container',
                                       hidden:true,
                                       style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'center',
                                           align: 'center'

                                       },
                                       height: 90,
                                       width: 120,

                                       items: [
                                           {
                                               id: 'htmlIcon',
                                               height: 52,
                                               width: '100%',
                                               margin: '5 0 0 0',
                                               html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icons/loadingBlade01.gif" style="width:52px;height:52px;"/></div>',
                                           },
                                        {
                                            //xtype: 'button',
                                            ////   align: 'stretch',
                                            //height: 32,
                                            //width: 92,
                                            id: 'htmlTxt',
                                            // ui: 'plain',
                                            width: '100%',
                                            margin: '5 0 0 0',
                                            html: '<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;">Generate Receipt..</div>',
                                        }

                                       ]

                                   },




             ]
         },



     });
    return _FloatPanel_AyohaCardManagement_CampaignTemplate;





}




function FloatPanel_AyohaCardManagement_CampaignTemplate_PrintHtml() {




    var tbltdDesc = "";
    var extraRows = "";


    var task = Ext.create('Ext.util.DelayedTask', function () {
     

       
       







        tbltdDesc = '<html ><head><style type="text/css" media="print">footer { text-align: center;}@media print { footer { position: fixed;bottom: 0;width:100%}body {-webkit-print-color-adjust: exact;}@page { margin-left: 0px; margin-right: 0px; margin-top: 0px; margin-bottom: 0px; margin: 0;-webkit-print-color-adjust: exact;}}</style>}' +
         '</style>' +
         '</head>' +
         '<body>' +
         //'<table id="myPrint" style="border-collapse:collapse;border-spacing:0;width:100%" class="tg" background="https://setkita.com/AyohaImgCard/LoyaltyCampaignBackgroundQR/templateBaseCampaignQrCode.png"><thead><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 10px;text-align:center;vertical-align:middle;word-break:normal"><img src="https://setkita.com/AyohaImgCard/LoyaltyCampaignBackgroundQR/templateBaseCampaignQrCode.png" width="80%" height="800px"></td></tr></thead></table>' +
           '<table id="myPrint"    width = "930px" height = "450px" style="background-repeat:no-repeat;" background="resources/icons/templateBaseCampaignQrCode.png"> ><thead><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 10px;text-align:center;vertical-align:middle;word-break:normal"></td></tr></thead></table>' +

         '</body>' +
         '</html>'

     


        //setTimeout(function () { printJS('myPrint', 'html') }, 5000);
        //  alert(mywindow);
        setTimeout(function () { Ext.getCmp('htmlFloatPanel_AyohaCardManagement_CampaignTemplate').setHtml(tbltdDesc); }, 500);

        setTimeout(function () { printJS('myPrint', 'html'); FloatPanel_AyohaCardManagement_CampaignTemplateHide(); }, 500);
    });
    task.delay(1000);









    // return true;




}






function FloatPanel_AyohaCardManagement_CampaignTemplateShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_CampaignTemplate);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_CampaignTemplate());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaCardManagement_CampaignTemplateHide()");
    isFloatPanel_AyohaCardManagement_CampaignTemplateOpen = 'Y';
    FloatPanel_AyohaCardManagement_CampaignTemplate_PrintHtml();









}


function FloatPanel_AyohaCardManagement_CampaignTemplateHide() {


    if (isFloatPanel_AyohaCardManagement_CampaignTemplateOpen == 'Y') {
        _FloatPanel_AyohaCardManagement_CampaignTemplate.hide(); isFloatPanel_AyohaCardManagement_CampaignTemplateOpen = 'N';
        RemovePages("FloatPanel_AyohaCardManagement_CampaignTemplateHide()");
    }
}


