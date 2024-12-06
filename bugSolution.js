The corrected code uses `async/await` to ensure the data is fully loaded before access:
```javascript
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    console.log(doc.data().myField); // Access data safely after load
  } else {
    console.log('No such document!');
  }
}

getData();
```
Alternatively, you can chain promises:

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data().myField);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```