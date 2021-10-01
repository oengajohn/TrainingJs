/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TrainingJs.Application',

    name: 'TrainingJs',

    requires: [
        // This will automatically load all classes in the TrainingJs namespace
        // so that application classes do not need to require each other.
        'TrainingJs.*'
    ],

    // The name of the initial view to create.
    mainView: 'TrainingJs.view.main.Main'
});