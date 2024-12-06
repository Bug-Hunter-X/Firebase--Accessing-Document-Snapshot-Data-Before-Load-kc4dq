The Firebase SDK may throw an error if you attempt to access a property on a document snapshot before the data has fully loaded.  This often happens when you use asynchronous methods without properly handling promises or async/await. For example:
```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // Error if data is not yet loaded
});
```