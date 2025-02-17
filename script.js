document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
    document.getElementById('dynamicContent').innerText = 'Dynamic content loaded!';
});