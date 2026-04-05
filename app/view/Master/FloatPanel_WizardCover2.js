Ext.define('ianMizi.view.Master.FloatPanel_WizardCover2', {

});

var _FloatPanel_WizardCover2;


var isFloatPanel_WizardCover2Open = 'N';











function FloatPanel_WizardCover2() {

    _FloatPanel_WizardCover2 =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: '20%',
         // height: 615,
         width: 280,
         id: 'LoadingFloatPanel_WizardCover2ID',
         top: -1,
         //top:32,
        // modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         
         zIndex: 60,
       
        
        //  showAnimation: {
        //     type: 'slideIn',
        //     direction: 'down',
        //     duration: 550,
        //     easing: 'ease-out'
        // },
        showAnimation: {
            type: 'slideIn',
            direction: 'down',
            duration: 550,
            easing: 'ease-out',
            listeners: {
                afteranimate: function(animation, startTime, eOpts) {
                    // Set the final y-axis position
                  // Replace 100 with your desired y-axis value
                }
            }
        },
        hideAnimation: {
            //type: 'reveal',
            //duration: 250,
            type: 'slideOut',
            direction: 'up',
            duration: 150
        },
         //style: 'border-bottom:1px solid;background-color:#353839;',
       //style: 'background-color:white;',
       style: 'background-color:rgba(0,0,0, 0.8);',
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
    return _FloatPanel_WizardCover2;





}

function FloatPanel_WizardCover2Show() {

    Ext.Viewport.remove(_FloatPanel_WizardCover2);
    this.overlay = Ext.Viewport.add(FloatPanel_WizardCover2());
    this.overlay.show();
    isFloatPanel_WizardCover2Open = 'Y';

   // Ext.getCmp('LoadingFloatPanel_WizardCover2ID').setTop(400); 
   // Ext.getCmp('LoadingFloatPanel_WizardCover2ID');
   
}


function FloatPanel_WizardCover2Hide() {
    _FloatPanel_WizardCover2.hide(); isFloatPanel_WizardCover2Open = 'N';
}






















