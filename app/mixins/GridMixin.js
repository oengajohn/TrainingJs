Ext.define('TrainingJs.mixins.GridMixin', {
    /**
     * @method 
     * loads the store for the grid.
     */
    loadGridStore: function() {
        var grid = this.getView();
        var store = grid.getStore();
        store.load();
    },

    /**
     * returns the selected record if exists otherwise returns null
     */
    getSelectedRecord: function() {
        var me = this,
            records = me.getSelectedRecords();
        if (records[0]) {
            return records[0];
        } else {
            Ext.Msg.alert('Error', 'Select at least one record.');
            return;
        }
    },
    /**
     * returns array  the selected records if exists otherwise returns empty array.
     */
    getSelectedRecords: function() {
        var me = this,
            grid = me.getView();
        var records = grid.getSelectionModel().getSelection();
        return records;
    },
    /**
     * Makes an ajax request to the server and returns the response to indicate deletion of a single record.
     */
    removeSelectedRecord: function(url, grid) {
        Ext.Ajax.request({
            url: url,
            method: 'DELETE',
            success: function(response, eOpts) {
                var result = TrainingJs.Util.jsonToPojo(response.responseText);
                if (result.success) {
                    Ext.toast({
                        html: 'Deleted successfully',
                        title: 'Success',
                        width: 200,
                        align: 't'
                    });
                }

            },
            failure: function(response, eOpts) {
                console.log(response.responseText);
                var result = TrainingJs.Util.jsonToPojo(response.responseText);
                TrainingJs.Util.showError(result.msg);
            }
        });
        grid.getStore().reload();

    },
    /**
     * Makes an ajax request to the server and returns the response to indicate deletion of a multiple records.
     */
    removeSelectedRecords: function() {

    }

});