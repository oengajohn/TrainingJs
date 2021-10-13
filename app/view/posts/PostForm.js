
Ext.define('TrainingJs.view.posts/PostForm',{
    extend: 'Ext.form.FormPanel',

    requires: [
        'TrainingJs.view.posts/PostFormController',
        'TrainingJs.view.posts/PostFormModel'
    ],

    controller: 'posts/postform',
    viewModel: {
        type: 'posts/postform'
    },

    html: 'Hello, World!!'
});
