function reverseString(str) {return str.split('').reverse().join('');}
function write_Text()
{
    let text = document.getElementById('text').value;
    let output = document.getElementById('output')
    output.innerHTML = reverseString(text); 
}
