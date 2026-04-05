Ext.define('ianMizi.view.Master.FloatPanel_WizardCover0', {

});

var _FloatPanel_WizardCover0;


var isFloatPanel_WizardCover0Open = 'N';











function FloatPanel_WizardCover0() {

    _FloatPanel_WizardCover0 =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: '100%',
         // height: 615,
         width: '100%',
         id: 'LoadingFloatPanel_WizardCover0ID',
         //right: -1,
         //top:32,
        // modal: true,
        // hideOnMaskTap: true,
        centered:true,
         layout: {
             type: 'vbox'
         },
         
         zIndex: 49,
       
        
         showAnimation: {
            type: 'slideIn',
            direction: 'left',
            duration: 350,
            easing: 'ease-in'
        },
        hideAnimation: {
            //type: 'reveal',
            //duration: 250,
            type: 'slideOut',

            direction: 'right',
            duration: 150
        },
         //style: 'border-bottom:1px solid;background-color:#353839;',
       //style: 'background-color:white;',
       style: 'background-color:rgba(0,0,0, 0.7);',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       

         //  style: "background-color: #D25959;",
        //  items: {

        //      xtype: 'container',
        //      style: 'background-color:transparent;',
        //      layout: {
        //          type: 'vbox',
        //          pack: 'center',
        //          align: 'center'

        //      },

            




        //  },
        




         items: [

            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 50,
                style: 'background-color:transparent;',
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_WizardCover0Header',
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
width:10
                           },
                           // {
                           //     margin: '0 0 0 0',
                           //     html: '<font size=4 color=black><b>Approval Status</b></font>'
                           // },
                                      {
                                          xtype: 'spacer',

                                      },

                                      




                                       {
                                           xtype: 'button',
                                        //   id: 'btnFloatPanel_WizardCover0Back',
                                           height: 40,
                                           width: 45,
                                           // iconCls: 'list',
                                          // html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           html: '<div ><img src="resources/icons/wired-gradient-38-error-cross-simple1.gif" width="35" height="30" alt="Company Name"></div>',
                                        //  html:'<lord-icon src="https://cdn.lordicon.com/lbjtvqiv.json" trigger="hover" style="width:250px;height:250px"> </lord-icon>',
                                           
                                           ui: 'plain',
                                           handler: function () {

                                               _FloatPanel_WizardCover0.hide(Ext.fx.Animation({
                                                type: 'slideOut',

                                                direction: 'right',
                                                duration: 350

                                               }));
                                               isFloatPanel_WizardCover0Open = 'N';
                                               FloatPanel_WizardCover1Hide();
                                               FloatPanel_WizardCover2Hide()

                                           }
                                       },


                                       {
                                           xtype: 'spacer',
       width:10
                                       },






                       ]

            },
// {
//              xtype: 'container',
//              style: 'background-color:transparent;',
//            //  docked: 'right',
//              height: '100%',
//              width:'90%',
//              zIndex:100,
//              layout: {
//                  type: 'vbox',
//                  pack: 'center',
//                  align: 'center',
//              }
// }




      



        ]






     });
    return _FloatPanel_WizardCover0;





}

function FloatPanel_WizardCover0Show() {

    Ext.Viewport.remove(_FloatPanel_WizardCover0);
    this.overlay = Ext.Viewport.add(FloatPanel_WizardCover0());
    this.overlay.show();
    isFloatPanel_WizardCover0Open = 'Y';
   
}


function FloatPanel_WizardCover0Hide() {
    _FloatPanel_WizardCover0.hide(); isFloatPanel_WizardCover0Open = 'N';
}






















