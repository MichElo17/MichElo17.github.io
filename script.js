let menu = document.querySelector('#menu')
let button = document.querySelector('#button')
let buttonDiv = document.querySelector("#button-div")

function isOpen() {
    return menu.classList.contains("nav-open");
}

function openMenu(){
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));

    menu.classList.remove("nav-close");
    menu.classList.add("nav-open");

    buttonDiv.classList.add("fixed");
}

function closeMenu(){
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));

    menu.classList.remove("nav-open");
    menu.classList.add("nav-close");

    buttonDiv.classList.remove("fixed");
}

$("form").submit(function (event) {
    event.preventDefault();

    const data = new FormData();
    data.append("access_key", "92d5b5b6-f330-4590-b112-4ea24d1fc9a2");
    data.append("name", $("#name").val())
    data.append("email",$("#email").val())
    data.append("message",$("#message").val())

    axios({
        method: "post",
        url: "https://api.web3forms.com/submit",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });

    alert("Message sent.");
})

$("#view-more").click(function (event) {
    document.getElementById('works').scrollIntoView();
})