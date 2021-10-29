Ext.define('TrainingJs.Util', {

    statics: {
        jsonToPojo: function(text) {
            return Ext.JSON.decode(text);
        },
        log: function(text) {
            Ext.log(text);
        },
        showError: function(text) {
            Ext.Msg.alert('Error', text);
        },


    }

});