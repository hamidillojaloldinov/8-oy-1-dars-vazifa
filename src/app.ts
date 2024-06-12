const form = document.getElementById('form') as HTMLFormElement
const div = document.getElementById('div') as HTMLDivElement
const input1 = document.getElementById('input1') as HTMLInputElement
const input2 = document.getElementById('input2') as HTMLInputElement
const input3 = document.getElementById('input3') as HTMLInputElement
const input4 = document.getElementById('input4') as HTMLInputElement
const input5 = document.getElementById('input5') as HTMLInputElement
const input6 = document.getElementById('input6') as HTMLInputElement
const button = document.querySelector("button") as HTMLButtonElement

form.addEventListener('submit', (event) => {
    event.preventDefault()
    div.innerHTML = `  
    <img class="rounded-full w-56 h-56" src="${input1.value}" alt="">
    <h1>First Name: <span class="text-lg">${input2.value}</span></h1>
    <h2>Last Name: <span class="text-lg">${input3.value}</span></h2>
    <h2>age: <span class="text-lg">${input4.value}</span></h2>
    <h2>from: <span class="text-lg">${input5.value}</span></h2>
    <h2>job: <span class="text-lg">${input6.value}</span></h2>
`
    input1.value = ''
    input2.value = ''
    input3.value = ''
    input4.value = ''
    input5.value = ''
    input6.value = ''
});
