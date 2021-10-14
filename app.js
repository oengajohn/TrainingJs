/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TrainingJs.Application',

    name: 'TrainingJs',

    //dependency injection //eagerly loaded
    requires: [
        // This will automatically load all classes in the TrainingJs namespace
        // so that application classes do not need to require each other.
        'Ext.layout.container.Fit',
        'Ext.form.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Center',
        'Ext.form.FieldSet',
        'Ext.grid.Panel',
        'Ext.layout.container.Accordion',
        'TrainingJs.*',

    ],
    //uses lazily loaded



    // The name of the initial view to create.
    mainView: 'TrainingJs.view.base.MainViewPort'
});