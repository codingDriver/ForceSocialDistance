const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const countTable = "fosod-count-prod";

function doPost(context) {

    const updateParams = {
        TableName: countTable,
        Key: {
            "count": 1
        },
        UpdateExpression: "set counterValue = counterValue + :val",
        ExpressionAttributeValues: {
            ":val": 1
        },
        ReturnValues: "UPDATED_NEW"
    };

    return docClient.update(updateParams, function (err, data) {

        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            context.done(null, {
                "statusCode": 500,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                }
            });
        } else {
            console.log("success", data);
            const response = {
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                }
            };

            context.done(null, response);

        }
    });


}

function doGet(context) {
    const params = {
        TableName: countTable,
        KeyConditionExpression: "#id = :counterValue",
        ExpressionAttributeNames: {
            "#id": "count"
        },
        ExpressionAttributeValues: {
            ":counterValue": 1
        }
    };

    return docClient.query(params, function (err, data) {
        if (err) {
            console.error("Unable to count items. Error JSON:", JSON.stringify(err, null, 2));
            context.done(null, {
                "statusCode": 500,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                }
            });

        } else {
            const response = {
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                body: data.Items[0].counterValue
            };

            context.done(null, response);

        }
    });
}

exports.handler = function (event, context) {


    if (event.httpMethod === "POST") {
        doPost(context);
    } else {
        doGet(context);
    }
}
;
