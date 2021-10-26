Ext.define('TrainingJs.view.lifecycle.LifeCycleEvents', {
    extend: 'Ext.window.Window',
    xtype: 'lifecycleevents',
    controller: 'lifecycleeventscontroller',
    autoShow: true,
    width: 520,

    //? lifecycle event initComponent
    // initComponent: function() {
    //     var me = this;
    //     console.log("Logging me from view");
    //     console.log(me);
    //     console.log("Init from view");

    //     me.callParent();
    // },
    items: [{
            xtype: 'form',
            items: [{
                xtype: 'combobox',
                fieldLabel: 'Choose your County',
                queryMode: 'local',
                store: {
                    type: 'counties'
                },
                forceSelection: true,
                displayField: 'name',
                valueField: 'id',
                reference: 'county',

            }]
        }

    ],
    dockedItems: [{
            text: 'Close',
            handler: '',
            iconCls: 'fa fas-circle',
        },

    ],

});