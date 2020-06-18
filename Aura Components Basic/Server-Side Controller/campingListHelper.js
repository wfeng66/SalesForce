({
    createItem: function(component, newItem) {
        var action = component.get("c.saveItem");
        action.setParams({
            "newItem": newItem
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                component.set("v.newItem", {'Price__c': 0, 'Packed__c': false, 'Quantity__c': 0, 'Name':'', 'sobjectType': 'Camping_Item__c'})
            }
        });
        $A.enqueueAction(action);
    },
})