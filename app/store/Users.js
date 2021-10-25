//Ext.data.store

Ext.define('TrainingJs.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'TrainingJs.model.User',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/Jotech/api/users',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    pageSize: 5,


});