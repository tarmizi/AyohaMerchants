Ext.define('ianMizi.view.AyohaMerchantReview.AyohaMerchantReview_Reply', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _AyohaMerchantReview_Reply;


var isAyohaMerchantReview_ReplyOpen = 'N';

var starCount = 0;









function AyohaMerchantReview_Reply() {

    _AyohaMerchantReview_Reply =
     Ext.create('Ext.Panel', {
         zIndex:320,
         xtype: 'container',
        // height: '50%',
         width: 500,
         height:400,
         //width: 280,
         id: 'LoadingAyohaMerchantReview_ReplyID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
        modal: true,
         //hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px none;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _AyohaMerchantReview_Reply.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _AyohaMerchantReview_Reply.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isAyohaMerchantReview_ReplyOpen = 'N';
                         RemovePages(_AyohaMerchantReview_Reply, "isAyohaMerchantReview_ReplyOpen");
                     }
                 });
             }
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


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'AyohaMerchantReview_ReplyBorderBg',
                docked: 'top',
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
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             // width: 40,
                            style: ' background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerAyohaMerchantReview_ReplyHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnAyohaMerchantReview_ReplyBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backblack.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _AyohaMerchantReview_Reply.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                            duration: 150,
                                                            easing: 'ease-out'

                                                          }));
                                                          isAyohaMerchantReview_ReplyOpen = 'N';
                                                          RemovePages(_AyohaMerchantReview_Reply, "isAyohaMerchantReview_ReplyOpen");

                                                      }
                                                  },

                                                  {
                                                      xtype:'spacer'
                                                  },


                                                   {
                                                       margin: '-8 0 0 0',
                                                       id: 'htmlAyohaMerchantReview_Reply_TitleHeaderTxt',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review By</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">Tarmizi Bin Rahim</div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            {
                                                xtype: 'button',
                                               
                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 40,
                                                width: 40,
                                                // iconCls: 'list',
                                                id: 'btnAyohaMerchantReview_Reply_PicProfile',
                                                html: '<div ><img src="resources/icons/founder.jpg" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _AyohaMerchantReview_Reply.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                 
                                                    isAyohaMerchantReview_ReplyOpen = "N";
                                                    RemovePages(_AyohaMerchantReview_Reply, "isAyohaMerchantReview_ReplyOpen");
                                                }
                                            },












                                    ]

                         },


                    {
                        margin: '0 0 0 10',
                        id: 'htmlAyohaMerchantReview_Reply_ReviewTxt',
                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review</div>',
                        //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    },
                                                    

               //{
               //    xtype: 'container',
               //    style: 'background-color: white;',
               //    id: 'containerAyohaMerchantReview_ReplyInner',
                  
               //    width: '100%',
               //    layout: {

               //        type: 'vbox',
               //        pack: 'start',
               //        align: 'center'
               //    },
               //    height: 201,
               //    //scrollable: {
               //    //    direction: 'vertical',
               //    //    directionLock: true
               //    //},

               //    items: [
                        




               //    ]


               //},
 //{
 //    xtype: 'panel',
 //    height: 20
 //},




            {
                xtype: 'container',
                width: '100%',
                id: 'containerAyohaMerchantReview_Reply_BodyMsg',
                style: ' background-color: transparent',
                height: 261,
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },

                items: [

                     {

                         margin: '10 0 0 0',
                         width: '95%',
                         height: '100%',
                         // height: 20,
                         id: 'htmlAyohaMerchantReview_Reply_BodyMsg',
                         html: '<textarea id="input-AyohaMerchantReview_Reply_BodyMsg"  placeHolder="Reply to this review."  style="border-bottom: 1px solid grey;border-top: 0px; border-right: 0px;border-left: 0px;color:grey;text-align: left;font-family:Century Gothic;font-size:16px;background-color: #f5f5f5;width:100%;height:260px;"    maxlength="1250"  wrap="hard">'
                     },

                ]

            },
  {
      margin: '10 0 0 10',
      hidden:true,
      id: 'htmlAyohaMerchantReview_Reply_RatingTxt',
      html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px"><font size=2 color=red><b>*</b></font>Rating</div>',
      //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
  },

  {
      xtype: 'container',
      width: '100%',
      hidden:true,
      margin: '2 0 0 10',
      height: 60,
      style: ' background-color:transparent;',
      layout: {
          type: 'hbox',
          pack: 'left',
          align: 'left',
      },
      items: [
          {
              xtype: 'button',
              id: 'btnAyohaMerchantReview_ReplyStar1',
              height: 35,
              width: 35,
              // iconCls: 'list',
              html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
              ui: 'plain',
              handler: function () {
                  starCount = 1;
                  var star1 = Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').getHtml();
                  if (star1 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                      Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                    
                      Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                  } else {
                    //  Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                  }


              }
          },
            {
                xtype: 'button',
                id: 'btnAyohaMerchantReview_ReplyStar2',
                height: 35,
                width: 35,
                // iconCls: 'list',
                html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {
                    starCount = 2;
                    var star2 = Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').getHtml();
                    if (star2 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                        Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');                     
                      
                        Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                    } else {
                        //  Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                       // Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                    }

                }
            },
              {
                  xtype: 'button',
                  id: 'btnAyohaMerchantReview_ReplyStar3',
                  height: 35,
                  width: 35,
                  // iconCls: 'list',
                  html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {

                      starCount = 3;
                      var star3 = Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').getHtml();
                      if (star3 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                          Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                       
                          Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                      } else {
                          //  Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          // Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                         // Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                      }
                  }
              },
                {
                    xtype: 'button',
                    id: 'btnAyohaMerchantReview_ReplyStar4',
                    height: 35,
                    width: 35,
                    // iconCls: 'list',
                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        starCount = 4;
                        var star4 = Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').getHtml();
                        if (star4 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                            Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                           
                            Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                        } else {
                            //  Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            // Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            // Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                           // Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                        }


                    }
                },
                  {
                      xtype: 'button',
                      id: 'btnAyohaMerchantReview_ReplyStar5',
                      height: 35,
                      width: 35,
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          starCount = 5;
                          var star5 = Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').getHtml();
                          if (star5 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                              Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            

                              Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');

                          } else {
                              //  Ext.getCmp('btnAyohaMerchantReview_ReplyStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_ReplyStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_ReplyStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_ReplyStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_ReplyStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('htmlAyohaMerchantReview_Reply_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                          }

                      }
                  },
                  {
                      margin: '7 0 0 20',
                      id: 'htmlAyohaMerchantReview_Reply_RatingCountTxt',                     
                      html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">0/5</div>',
                  }
      ]
  },




                {
                    xtype: 'container',
                    width: '100%',
                    height: 40,
                    margin: '20 0 0 0',
                   // docked: 'bottom',
                    // height:'70%',
                    // width: 40,
                    style: ' background-color:transparent;',
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,
                    // style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    id: 'containerAyohaMerchantReview_Replybottom',
                    layout: {
                        type: 'hbox',
                        pack: 'right',
                        align: 'right',
                    },
                    items: [

                        {
                            xtype: 'button',
                           // width: 200,
                            // hidden: true,
                            //  align: 'stretch',
                            hidden:true,
                            ui: 'plain',
                            //  width: '80%',
                            height: 40,
                            margin: '0 0 0 0',
                            id: 'btnAyohaMerchantReview_Reply_Delete',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                            html: '<button class="buttonDeleteReview">Delete</button>',

                            handler: function () {
                                //  FloatPanel_AyohaUserRegistration_Save();
                                Swal.fire({
                                    title: 'Are you sure want to delete?',
                                    //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                                    //icon: 'warning',
                                    //showCancelButton: true,
                                    //confirmButtonColor: '#3085d6',
                                    //cancelButtonColor: '#d33',
                                    imageUrl: "resources/icons/attention1.png",
                                    imageWidth: 150,
                                    imageHeight: 150,
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    //  confirmButtonColor: '#3085d6',
                                    confirmButtonColor: '#9932cc',
                                    cancelButtonColor: '#d33',
                                    cancelButtonText: 'No',
                                    confirmButtonText: 'Yes'
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        AyohaMerchantReview_Reply_PostReview_Delete();
                                    }
                                });

                               






                            },
                        },
                        {
                            xtype: 'button',
                           // width: 200,
                            // hidden: true,
                            //  align: 'stretch',
                            hidden:true,
                            ui: 'plain',
                            //  width: '80%',
                            height: 40,
                            margin: '0 0 0 0',
                            id: 'btnAyohaMerchantReview_Reply_AddPostReview',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                            html: '<button class="buttonPostReview">Post Review</button>',

                            handler: function () {
                                //  FloatPanel_AyohaUserRegistration_Save();

                                AyohaMerchantReview_Reply_PostReview_Add();



                                


                            },


                        },

                           {
                               xtype: 'button',
                               // width: 200,
                               // hidden: true,
                               //  align: 'stretch',
                               hidden:true,
                               ui: 'plain',
                               //  width: '80%',
                               height: 40,
                               margin: '0 0 0 0',
                               id: 'btnAyohaMerchantReview_Reply_EditPostReview',
                               // width: '80%',
                               //style: {
                               //    background: '#FA8072',
                               //},
                               // padding: '10px',
                               //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                               html: '<button class="buttonPostReview">Post Review</button>',

                               handler: function () {
                                   //  FloatPanel_AyohaUserRegistration_Save();

                                   AyohaMerchantReview_Reply_PostReview_Edit();






                               },


                           },
                    ]
                },



                ]


            },



                



                //{
                //    //width: '100%',
                //    //height: '50%',

                //    xtype: 'container',
                //    width: '100%',
                //    docked: 'bottom',
                //    height:'30%',
                //    //  ui: 'confirm',
                //    style: ' background-color:transparent;',
                //     style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 360px;background-repeat: no-repeat;',
                //    layout: {
                //        type: 'vbox',
                //        pack: 'end',
                //        align: 'center',
                //    },
                //    items: [
                //                    //{
                //                    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //                    //}
                //    ]
                //    //style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                //    // html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //    //handler: function () {

                //    //}
                //},


             ]




         }







     });
    return _AyohaMerchantReview_Reply;





}


var globalAyohaMerchantReview_Reply_ReviewCode;
var globalAyohaMerchantReview_Reply_ItemCodeReview;
function AyohaMerchantReview_ReplyShow_Add(ReviewCode,ItemCodeReview) {

    Ext.Viewport.remove(_AyohaMerchantReview_Reply);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview_Reply());
    this.overlay.show();
    AddRoutePages(_AyohaMerchantReview_Reply, "isAyohaMerchantReview_ReplyOpen");
    isAyohaMerchantReview_ReplyOpen = 'Y';
    globalAyohaMerchantReview_Reply_ReviewCode=ReviewCode;
    globalAyohaMerchantReview_Reply_ItemCodeReview=ItemCodeReview;

    
    var AyohaUserPicProfile= GetAyohaUserPicProfile();
    var AyohaUserAccountNames =GetCurrentAccountName();

    Ext.getCmp('htmlAyohaMerchantReview_Reply_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review By</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + AyohaUserAccountNames + '</div>');
    Ext.getCmp('btnAyohaMerchantReview_Reply_PicProfile').setHtml('<div ><img src="' + AyohaUserPicProfile + '" width="30" height="30" alt="Company Name"></div>');


   
    Ext.getCmp('btnAyohaMerchantReview_Reply_Delete').setHidden(true);

    Ext.getCmp('btnAyohaMerchantReview_Reply_AddPostReview').setHidden(false);
    Ext.getCmp('btnAyohaMerchantReview_Reply_EditPostReview').setHidden(true);

    
    

    
    
}



















function AyohaMerchantReview_ReplyHide() {
    _AyohaMerchantReview_Reply.hide(); isAyohaMerchantReview_ReplyOpen = 'N';
    RemovePages(_AyohaMerchantReview_Reply, "isAyohaMerchantReview_ReplyOpen");
}





function AyohaMerchantReview_Reply_PostReview_Add(){

    //AM.ReviewCode,AM.ReplyCode, AM.SubscriberAccNo, AM.EnterpriseAccNo, AM.StarReview, AM.ReviewText, AM.ItemCodeReview

var val=document.getElementById('input-AyohaMerchantReview_Reply_BodyMsg').value;
if(val.length <=2){
    swalFireFail("Review not valid!");
    return;
}


    var objn = {
         "ReviewCode":globalAyohaMerchantReview_Reply_ReviewCode,   
        "ReplyCode": GetCurrentUserAccountNo()+"-"+globalAyohaMerchantReview_Reply_ReviewCode+"-reply-"+GenerateRandomNo(),
        "SubscriberAccNo": GetCurrentUserAccountNo(),
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "StarReview": 0,
        "ReviewText": document.getElementById('input-AyohaMerchantReview_Reply_BodyMsg').value,
        "ItemCodeReview":globalAyohaMerchantReview_Reply_ItemCodeReview,
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewReplyInsert',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccesPostReview('Success post your reply,Thank You!');
              
                AyohaMerchantReview_ReplyHide();


                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
                var task = Ext.create('Ext.util.DelayedTask', function () {

if(isAyohaMerchantReviewOpen == 'Y'){
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
    return
}
if(isFloatPanel_MembershipDetailsPageOpen == 'Y'){
                               

    FloatPanel_MembershipDetailsPage_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore('AyohaStoreReview',globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,GetCurrentYear());
    return
}
else{
    Dashboard_Dashboard_AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore();
}



                   
                   // AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
                    Ext.Viewport.unmask();
                });
                Ext.Viewport.unmask();
                task.delay(500);

            }
            else {

                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!");
            Ext.Viewport.unmask();
        }

    });

}
















