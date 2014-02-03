## Todo

- Charts
- PHP library for paypal lively hook
- HTTPS://secure.remetric.com/contacts/save/img?api_key=XXX&key=dallas&name=DallasBase64
- HTTPS://secure.remetric.com/contacts/overwrite/img?api_key=XXX&key=dallas&name=DallasBase64
- HTTPS://secure.remetric.com/contacts/save/redirect?api_key=XXX&url=Google.com&key=dallas&name=Dallas
- HTTPS://secure.remetric.com/contacts/overwrite/redirect?api_key=XXX&url=Google.com&key=dallas&name=Dallas
- HTTPS://secure.remetric.com/events/img?api_key=XXX&key=dallas&name=DallasBase64
- HTTPS://secure.remetric.com/events/redirect?api_key=XXX&url=Google.com&key=dallas&name=Dallas
- Developer docs for remetric
- Setup instructions
- Remetric blog post
- Search

## Useful Event Charts

- How many signups this week/day/month
- Click to see details of events in time period
- List of events by popularity
- Map of event locations
- Browser/Device info
- Chart where specific var is queried

## Useful Contact Charts

- How many added this week/day/month
- 10 recents?

## How to Use

```
<script type="text/javascript">
	this._RM || (this._RM = []);
	_RM.push(["debug"]);
	_RM.push(["api_key", "XXXXXXXXXXXXXXXXXX"]);
  _RM.push(["track", "added to {{ plan }} for {{ price }}", {
    key: "dallas",
    plan: "Awesome Plan",
    price: "$9.99"
  }, function(data) {
	  alert(data);
	}]);
	
  (function() {
    var rm = document.createElement("script"); rm.type = "text/javascript";
		rm.async = true;  rm.src = "https://secure.remetric.com/track.js";
		var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(rm, s);
  })();
</script>
```


## Functions

### Tracking

`key` is always required. This is a unique token for each contact.

A `track` is the main event. Event's data is also passed to the contact.

If the contact doesn't exist, it will be created.

```
_RM.push(["track", "added to {{ plan }} for {{ price }}", {
  key: "dallas",
  plan: "Awesome Plan",
  price: "$9.99"
}]);
```

### Contacts

The `key` element is always required and must be unique per contact. We'd recommend using your app's unique token or ID for that contact.

#### Updating a Contact

Save a contact with their data. If a contact already exists, new data will be merged with old data.

```
_RM.push(["saveContact", {
  key: "dallas",
  name: "Dallas Read",
  location: "Halifax, NS"
}]);
```

#### Overwriting A Contact's Data

This will overwrite contact's existing data with the new data. Contact will be created if it doesn't already exist.

```
_RM.push(["overwriteContact", {
  key: "dallas",
  name: "Dallas Read",
  location: "Halifax, NS"
}]);
```