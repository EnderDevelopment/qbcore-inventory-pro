document.addEventListener('DOMContentLoaded', function() {
    const playerInventoryGrid = document.getElementById('player-inventory-grid');
    const groundInventoryGrid = document.getElementById('ground-inventory-grid');
    const hotbar = document.getElementById('hotbar');
    
    const useButton = document.getElementById('use-button');
    const giveButton = document.getElementById('give-button');
    const combineButton = document.getElementById('combine-button');
    const throwButton = document.getElementById('throw-button');
    const settingsButton = document.getElementById('settings-button');
    
    let draggedItem = null;
    
    window.addEventListener('message', function(event) {
        const data = event.data;
        
        if (data.action === 'openInventory') {
            document.body.style.display = 'block';
            renderPlayerInventory(data.playerInventory);
            renderGroundInventory(data.groundInventory);
        }
    });
    
    function renderPlayerInventory(inventory) {
        playerInventoryGrid.innerHTML = '';
        
        inventory.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'inventory-item';
            itemElement.innerHTML = `
                <img src="images/${item.name}.png" alt="${item.label}">
                <span>${item.label}</span>
                <span>${item.amount}</span>
            `;
            
            itemElement.addEventListener('dragstart', function() {
                draggedItem = item;
            });
            
            playerInventoryGrid.appendChild(itemElement);
        });
    }
    
    function renderGroundInventory(inventory) {
        groundInventoryGrid.innerHTML = '';
        
        inventory.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'inventory-item';
            itemElement.innerHTML = `
                <img src="images/${item.name}.png" alt="${item.label}">
                <span>${item.label}</span>
                <span>${item.amount}</span>
            `;
            
            itemElement.addEventListener('dragstart', function() {
                draggedItem = item;
            });
            
            groundInventoryGrid.appendChild(itemElement);
        });
    }
    
    playerInventoryGrid.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    playerInventoryGrid.addEventListener('drop', function() {
        if (draggedItem) {
            fetch(`https://${GetParentResourceName()}/moveItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    item: draggedItem,
                    from: 'ground',
                    to: 'player'
                })
            }).then(resp => resp.json()).then(resp => {
                if (resp) {
                    draggedItem = null;
                }
            });
        }
    });
    
    groundInventoryGrid.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    groundInventoryGrid.addEventListener('drop', function() {
        if (draggedItem) {
            fetch(`https://${GetParentResourceName()}/moveItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    item: draggedItem,
                    from: 'player',
                    to: 'ground'
                })
            }).then(resp => resp.json()).then(resp => {
                if (resp) {
                    draggedItem = null;
                }
            });
        }
    });
    
    useButton.addEventListener('click', function() {
        if (draggedItem) {
            fetch(`https://${GetParentResourceName()}/useItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    item: draggedItem
                })
            }).then(resp => resp.json()).then(resp => {
                if (resp) {
                    draggedItem = null;
                }
            });
        }
    });
    
    giveButton.addEventListener('click', function() {
        if (draggedItem) {
            fetch(`https://${GetParentResourceName()}/giveItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    item: draggedItem
                })
            }).then(resp => resp.json()).then(resp => {
                if (resp) {
                    draggedItem = null;
                }
            });
        }
    });
    
    combineButton.addEventListener('click', function() {
        if (draggedItem) {
            fetch(`https://${GetParentResourceName()}/combineItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    item: draggedItem
                })
            }).then(resp => resp.json()).then(resp => {
                if (resp) {
                    draggedItem = null;
                }
            });
        }
    });
    
    throwButton.addEventListener('click', function() {
        if (draggedItem) {
            fetch(`https://${GetParentResourceName()}/throwItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    item: draggedItem
                })
            }).then(resp => resp.json()).then(resp => {
                if (resp) {
                    draggedItem = null;
                }
            });
        }
    });
    
    settingsButton.addEventListener('click', function() {
        // Logic to open settings
    });
});