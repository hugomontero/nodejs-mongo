# nodejs-mongo

NodeJs Mongo Implementation test

## HOW TO INSTALL
In order to install the project please: 
- Configure your environment file following the .env.example file
- Run the follow commands
    ```
    $ npm install
    $ npm run start
    ```
### REST API
The REST API to nodejs-mongo billings is described bellow

#### CREATE BILL
##### Request
``POST /billings``
``` 
{
  "id": "acccb-001",
  "client":{
    "name": "my client 2",
    "id": 1
  },
  "description": "billing test",
  "details": [
    {
      "position": "0010",
      "description": "item 01",
      "amount": 10,
      "tax": 1
    },
    {
      "position": "0020",
      "description": "item 02",
      "amount": 150,
      "tax": 15
    }
    
  ]
  
}
```

##### Response

```
{
    "result": {
        "n": 1,
        "opTime": {
            "ts": "6809786856738127873",
            "t": 2
        },
        "electionId": "7fffffff0000000000000002",
        "ok": 1,
        "$clusterTime": {
            "clusterTime": "6809786856738127873",
            "signature": {
                "hash": "D6yIZ2WvQn7VJ8reS7w29gJhbCE=",
                "keyId": "6804643693530710019"
            }
        },
        "operationTime": "6809786856738127873"
    },
    "connection": {
        "id": 1,
        "host": "hugomongotest-shard-00-02-mp6sj.mongodb.net",
        "port": 27017
    },
    "ops": [
        {
            "id": "acccb-001",
            "client": {
                "name": "my client 2",
                "id": 1
            },
            "description": "billing test",
            "details": [
                {
                    "position": "0010",
                    "description": "item 01",
                    "amount": 10,
                    "tax": 1,
                    "total_amount": 11
                },
                {
                    "position": "0020",
                    "description": "item 02",
                    "amount": 150,
                    "tax": 15,
                    "total_amount": 165
                }
            ],
            "created_at": "2020-03-30T00:10:57.298Z",
            "expiration_date": "2020-03-30T00:10:57.298Z",
            "updated_at": "2020-03-30T00:10:57.298Z",
            "created_by": "user_id_default",
            "updated_by": "user_id_default",
            "amount": 160,
            "tax": 16,
            "total_amount": 176,
            "_id": "5e81391149898677ed3f0cff"
        }
    ],
    "insertedCount": 1,
    "insertedId": "5e81391149898677ed3f0cff",
    "n": 1,
    "opTime": {
        "ts": "6809786856738127873",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6809786856738127873",
        "signature": {
            "hash": "D6yIZ2WvQn7VJ8reS7w29gJhbCE=",
            "keyId": "6804643693530710019"
        }
    },
    "operationTime": "6809786856738127873"
}
```

#### GET ALL BILLS
f: is the query object in string format (JSON.stringify(query))

##### Request
``GET /billings?f=%7B%22description%22%3A%20%22billing%20test%22%7D``


##### Response

```
[
    {
        "_id": "5e7b6969822fb269fd107b46",
        "id": "acccb-001",
        "client": {
            "name": "my client",
            "id": 1
        },
        "description": "billing test",
        "details": [
            {
                "position": "0010",
                "description": "item 01",
                "amount": 10,
                "tax": 1,
                "total_amount": 11
            },
            {
                "position": "0020",
                "description": "item 02",
                "amount": 150,
                "tax": 15,
                "total_amount": 165
            }
        ],
        "created_at": "2020-03-25T14:23:37.136Z",
        "expiration_date": "2020-03-25T14:23:37.136Z",
        "updated_at": "2020-03-29T23:48:14.304Z",
        "created_by": "user_id_default",
        "updated_by": "user_id_default",
        "amount": 160,
        "tax": 16,
        "total_amount": 176,
        "status": "void"
    },
    {
        "_id": "5e81391149898677ed3f0cff",
        "id": "acccb-001",
        "client": {
            "name": "my client 2",
            "id": 1
        },
        "description": "billing test",
        "details": [
            {
                "position": "0010",
                "description": "item 01",
                "amount": 10,
                "tax": 1,
                "total_amount": 11
            },
            {
                "position": "0020",
                "description": "item 02",
                "amount": 150,
                "tax": 15,
                "total_amount": 165
            }
        ],
        "created_at": "2020-03-30T00:10:57.298Z",
        "expiration_date": "2020-03-30T00:10:57.298Z",
        "updated_at": "2020-03-30T00:10:57.298Z",
        "created_by": "user_id_default",
        "updated_by": "user_id_default",
        "amount": 160,
        "tax": 16,
        "total_amount": 176
    }
]
```


#### GET A BILL BY ID

##### Request
``GET /billings/{id}``

id: is the object id you need to retrieve


##### Response

```
{
    "_id": "5e7b6969822fb269fd107b46",
    "id": "acccb-001",
    "client": {
        "name": "my client",
        "id": 1
    },
    "description": "billing test",
    "details": [
        {
            "position": "0010",
            "description": "item 01",
            "amount": 10,
            "tax": 1,
            "total_amount": 11
        },
        {
            "position": "0020",
            "description": "item 02",
            "amount": 150,
            "tax": 15,
            "total_amount": 165
        }
    ],
    "created_at": "2020-03-25T14:23:37.136Z",
    "expiration_date": "2020-03-25T14:23:37.136Z",
    "updated_at": "2020-03-29T23:48:14.304Z",
    "created_by": "user_id_default",
    "updated_by": "user_id_default",
    "amount": 160,
    "tax": 16,
    "total_amount": 176,
    "status": "void"
}
```

#### VOID A BILLING
change the bill status in order to be void

##### Request
``DELETE /billings/{id}``

id: is the object id you need to retrieve

##### Response
```
{
    "message": "the bill with id 5e7b6969822fb269fd107b46 was void "
}
```
