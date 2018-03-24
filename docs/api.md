## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_brew/db/beers/Beers">brew/db/beers/Beers</a></td>
    <td><p>Interface with the Beers DB Collection</p>
</td>
    </tr>
<tr>
    <td><a href="#module_brew/db/beers">brew/db/beers</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_beer/util/log">beer/util/log</a></td>
    <td><p>Namespace for logging helpers</p>
</td>
    </tr>
</tbody>
</table>

## Members

<dl>
<dt><a href="#exp_module_brew/app--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_brew/db/open--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#startApp">startApp(port, dbUrl)</a> ⇒ <code>undefined</code></dt>
<dd></dd>
<dt><a href="#connect">connect(url)</a> ⇒ <code>Promise.&lt;Db, Error&gt;</code></dt>
<dd><p>Connect to a running <a href="http://mongodb.github.io/node-mongodb-native/2.2/api/index.html">MongoDB</a> database instance</p>
</dd>
</dl>

<a name="module_brew/db/beers/Beers"></a>

## brew/db/beers/Beers
Interface with the Beers DB Collection


* [brew/db/beers/Beers](#module_brew/db/beers/Beers)
    * [Beers](#exp_module_brew/db/beers/Beers--Beers) ⏏
        * _instance_
            * [.getCollection()](#module_brew/db/beers/Beers--Beers+getCollection) ⇒ <code>string</code>
            * [.create(beers)](#module_brew/db/beers/Beers--Beers+create)
        * _inner_
            * [~MongoDB](#external_MongoDB)
                * [.MongoClient](#external_MongoDB.MongoClient)
                * [.Db](#external_MongoDB.Db)
                * [.MongoClient](#external_MongoDB.MongoClient)
                * [.Db](#external_MongoDB.Db)


* * *

<a name="exp_module_brew/db/beers/Beers--Beers"></a>

### Beers ⏏
**Kind**: Exported class  

* * *

<a name="module_brew/db/beers/Beers--Beers+getCollection"></a>

#### beers.getCollection() ⇒ <code>string</code>
**Kind**: instance method of [<code>Beers</code>](#exp_module_brew/db/beers/Beers--Beers)  

* * *

<a name="module_brew/db/beers/Beers--Beers+create"></a>

#### beers.create(beers)
**Kind**: instance method of [<code>Beers</code>](#exp_module_brew/db/beers/Beers--Beers)  

| Param | Type |
| --- | --- |
| beers | <code>Array</code> | 


* * *

<a name="external_MongoDB"></a>

#### Beers~MongoDB
A class to interface with the underlying database beers collection

**Kind**: inner external of [<code>Beers</code>](#exp_module_brew/db/beers/Beers--Beers)  

* [~MongoDB](#external_MongoDB)
    * [.MongoClient](#external_MongoDB.MongoClient)
    * [.Db](#external_MongoDB.Db)
    * [.MongoClient](#external_MongoDB.MongoClient)
    * [.Db](#external_MongoDB.Db)


* * *

<a name="external_MongoDB.MongoClient"></a>

##### MongoDB.MongoClient
**Kind**: static class of [<code>MongoDB</code>](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html)  
**See**: [MongoClient](http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html)  

* * *

<a name="external_MongoDB.Db"></a>

##### MongoDB.Db
**Kind**: static class of [<code>MongoDB</code>](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html)  
**See**: [Db](http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html)  

* * *

<a name="external_MongoDB.MongoClient"></a>

##### MongoDB.MongoClient
**Kind**: static class of [<code>MongoDB</code>](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html)  
**See**: [MongoClient](http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html)  

* * *

<a name="external_MongoDB.Db"></a>

##### MongoDB.Db
**Kind**: static class of [<code>MongoDB</code>](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html)  
**See**: [Db](http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html)  

* * *

<a name="module_brew/db/beers"></a>

## brew/db/beers

* * *

<a name="module_beer/util/log"></a>

## beer/util/log
Namespace for logging helpers


* [beer/util/log](#module_beer/util/log)
    * [~logAndReturn(message, value)](#module_beer/util/log..logAndReturn) ⇒ <code>\*</code>
    * [~logAndReject(err)](#module_beer/util/log..logAndReject) ⇒ <code>Promise.&lt;_, Error&gt;</code>


* * *

<a name="module_beer/util/log..logAndReturn"></a>

### beer/util/log~logAndReturn(message, value) ⇒ <code>\*</code>
Log a message and return a value

**Kind**: inner method of [<code>beer/util/log</code>](#module_beer/util/log)  
**Returns**: <code>\*</code> - value  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message to be logged out |
| value | <code>\*</code> | The value to be returned after the `message` is logged |


* * *

<a name="module_beer/util/log..logAndReject"></a>

### beer/util/log~logAndReject(err) ⇒ <code>Promise.&lt;_, Error&gt;</code>
Log an error and then reject it

**Kind**: inner method of [<code>beer/util/log</code>](#module_beer/util/log)  

| Param | Type |
| --- | --- |
| err | <code>Error</code> | 


* * *

<a name="startApp"></a>

## startApp(port, dbUrl) ⇒ <code>undefined</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| port | <code>Number</code> | The port on which the app will run |
| dbUrl | <code>dbUrl</code> | The url at which the database resides |


* * *

<a name="connect"></a>

## connect(url) ⇒ <code>Promise.&lt;Db, Error&gt;</code>
Connect to a running [MongoDB](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html) database instance

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The URL location of the [MongoDB](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html) instance |


* * *

