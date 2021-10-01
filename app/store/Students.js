Ext.define('TrainingJs.store.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.students',

    model: 'TrainingJs.model.Student',

    proxy: {
        type: 'rest', //rest,json POST,DELETE,UPDATE
        url: 'http://localhost:3000/students',
        reader: {
            type: 'json',
            rootProperty: 'students',
            totalProperty: 'X-Total-Count'
        }
    },
    pageSize: 2,
    listeners: {
        load: function(store, records, successful, operation, eOpts) {
            console.log(records);
            console.log(operation);
        }
    }
    // autoLoad: true,
});