var messages = []; //Create an array to hold the messages.
var id = 0; //Create a variable that will keep track of what id to assign to messages.
//The id should start at 0 and increment after every creation.

module.exports = { //Export an object with methods to create, read, update, and delete messages.
    create: (req, res) => {
        const { text, time } = req.body; //Create - Should be able to create a message using text and time off of the request body.
        messages.push({ id, text, time }); //Should be able to assign a unique id to the message.
        id++;
        res.status(200).send( messages );
    },

    read: (req, res) => {
        res.status(200).send( messages ); //Read - Should be able to return the messages array.
    },

    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];//Update - Should be able to update the text property of a message using the request body.

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send( messages ); //Should be able to determine which message to update using an id url parameter.
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(messageIndex, 1);
        res.status(200).send( messages ); 
    }

};