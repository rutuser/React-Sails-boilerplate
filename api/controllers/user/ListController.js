/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    friendlyName: 'users list',


    description: 'list all users',

    inputs: {},

    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'localhost:8080'
        },
        notFound: {
            description: 'No users was found in the database.',
            responseType: 'notFound'
        }
    },

    fn: async function (inputs, exits) {

        // Look up all the flights.
        var users = await Users.find({});

        // If no flight was found, respond "notFound" (like calling `res.notFound()`)
        if (!users) { return exits.notFound(); }

        // Display the hompage view.
        return exits.success({ users });
    }
};

