[![Build Status](https://travis-ci.org/advanced-rest-client/saved-list-items.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/saved-list-items)  

# saved-list-items

A `<saved-list-items>` element renders a list of fistory items.

It should be used in a ARC requests saved list view.

## Example
```
<saved-list-items id="saved" items="[[list]]"></saved-list-items>
```
The `list` attribute is a list of requests to display.
The `list` will not change from the inside of the element and every state
change is informed via events.

It is safe to load a lot of results into the list. This element uses
the `iron-list` element that renders only a potion of items only to fit
available space.

## Adding pagination
Simplest solution is just to override the `items` array with new values.
It will cause list reset though and it will jump to fisrt element.
To avoid it you can use element's `addItems` function.
However the element will not notify back change in the list so other elements
or app will not notice element's array change.

To avoid this update the array of items as follows:
```
const newItems = new Array(100);
newItems.forEach((i) => this.push('existingItems', i));
```
It will push new elements - one by one - to the end of the array and notify
paths each time the new element will be added.

### Styling
`<history-list-items>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--saved-list-items` | Mixin applied to each list item | `{}`
`--saved-list-items-url-label` | Mixin applied to the URL label element | `{}`
`--saved-list-items-name-label` | Mixin applied to the request name label element | `{}`
`--saved-list-items-method-label` | Mixin applied to the method label element. | `{}`
`--saved-list-items-method-label-container` | Mixin applied to the method label parent container element. | `{}`
`--saved-list-item` | Mixin applied to the list item | `{}`
`--saved-list-item-selected` | Mixin applied to the selected list item | `{}`
`--saved-list-item-selected-background-color` | Selection color for list items. | `#E0E0E0`
`--saved-list-items-selection-counter` | Mixin applied to the selection counter | `{}`
`--saved-list-items-search-input` | Mixin applied to the search input | `{}`
`--action-button` | Mixin apllied to the primary action buttons | `{}`
`--secondary-action-button-color` | Color of the secondary action button | `--primary-color`
`--arc-font-body1` | Mixin applied to the element | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| list-item-details | Fired when the "request details" has been requested via this UI. | item **Object** - An object associated with this item. |
| list-item-name-changed | Fired when the name of an item has changed in the UI and the changed schold be commited to the datastore.  The event does not bubbles. | item **Object** - An object associated with this item. |
index **Number** - Object's index in the list. |
| list-item-open | Fired when the user clicked on an open button on an item.  The event does not bubbles. | item **Object** - An object associated with this item. |
index **Number** - Object's index in the list. |
| list-items-delete | Fired when the user clicked on a delete button on an item or delete selected in the table header.  The event does not bubbles. | items **Array** - List of items to be deleted. Each item is a request object as passed to the `items` array. |
| list-items-export | Fires when the user selects to export currently selected items.  The event does not bubbles. | items **Array** - List of items to be deleted. Each item is a request object as passed to the `items` array. |
| list-items-search | Fired when the user search the list.  The event does not bubbles. | q **String** - Search query. Can be empty when cleared. |
| list-items-selection-changed | Fired when single item selection has changed. It isn't fired when multiple selection has changed at once.  The event does not bubbles. | item **Object** - The request object |
index **Number** - Index of the item on the list |
selected **Boolean** - Whether the item is selected or not. |
| list-items-threshold | Fired when the user nearly scrolled to the ened of the list. It usually means that the app should load more results.  The event does not bubbles. | __none__ |
