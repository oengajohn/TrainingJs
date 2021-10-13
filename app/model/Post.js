Ext.define('TrainingJs.model.Post', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' },
        { name: 'published', type: 'boolean' },
        { name: 'publicationDate', type: 'date' }

    ]
});
