const axios = require("axios");

module.exports = (app) => {
    app.get('/whatsapp/sendMessage', async (request, response) => {
        let bodyData = {
            key : "a3ec0818623e4b428b07c5297ad5e9df",
            // to : "917487855889",
            to : "918904852460",
            message : "Hey, Testing message sent from jay. Let me know if you get this message.",
            SendingMessageType : "1",
            /* isUrgent : "true",
            isDeleteAfterSend : "false",
            isGroupMsg : "false",
            ExpiryTime : "01:00:00",
            IsFailMessage : "false",
            SenderId : "AB-111213",
            ContentTemplate : "Hello. Good Morning",
            SendingMessageType : "1", */
        };
    
        return await  axios.post(process.env.WHATSAPP_API_BASE_URL+"/sendMessage",bodyData).then((responsedata) => {
            console.log('responsedata ::',responsedata.data);
            // return responsedata?.data?.data || null
        }).catch((err) => {
            console.log("err :: ", err)
            console.log("error occured in ademin event bus", err.message);
        });
        response.status(200).json({ message: "API Called" });
    })
}