// JavaScript for handling goal creation and displaying the goals

document.getElementById('goal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get goal details
    const title = document.getElementById('goal-title').value;
    const description = document.getElementById('goal-description').value;
    
    // Create a new goal item
    const goalItem = document.createElement('li');
    goalItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    
    // Add the goal item to the list
    document.getElementById('goals').appendChild(goalItem);
    
    // Clear the form fields
    document.getElementById('goal-form').reset();
});
