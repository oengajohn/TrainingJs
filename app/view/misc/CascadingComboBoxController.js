Ext.define('TrainingJs.view.misc.CascadingComboBoxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cascadingcomboboxcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {
        var me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            countyComboBox = view.lookupReference('county');

        countyComboBox.getStore().load();
    },
    onCountySelect: function(combo, record, eOpts) {
        var me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            subCountyComboBox = view.lookupReference('subCounty'),
            countyCodeTextField = view.lookupReference('countyCode');
        var countyId = combo.getValue();
        subCountyComboBox.getStore().reload({
            params: {
                "countyId": countyId
            }
        });
        console.log(record);
        countyCodeTextField.setValue(record.get('code'));




    }
});