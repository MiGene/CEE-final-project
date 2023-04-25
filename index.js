const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
    region: 'us-east-1',
    endpoint: 'http://dynamodb.us-east-1.amazonaws.com/',
    credentials: {
        accessKeyId: 'AKIA23F6GJGZZSJHWATH',
        secretAccessKey: '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'
    }
});

const params = {
    TableName: 'ess_final_group_18',
    Key: {
        'student_id': { S: '6430204221' }
    }
};

const command = new GetItemCommand(params);

client.send(command, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(JSON.stringify(data.Item));
    }
});

// exports.getItems = async (req, res) => {
//     try {
//         const params = {
//             TableName: 'ess_final_group_18'
//         };

//         const command = new ScanCommand(params);

//         const { Items } = await client.send(command);

//         res.json(Items);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// };
