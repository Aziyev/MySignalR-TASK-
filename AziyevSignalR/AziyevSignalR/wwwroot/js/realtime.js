$(document).ready(function () {
    var p129connection = new signalR.HubConnectionBuilder().withUrl('/p129hublink').build();

    p129connection.start();

    $(document).on('click', '#sendButton', function () {
        let user = $('#userInput').val();
        let message = $('#messageInput').val();

        p129connection.invoke('MesajGonder', user, message)
    })

    p129connection.on('mesajqebuleden', function myfunction(str1, str2, date) {
        let listItem = `<li>${str1} Says: ${str2} ${date}</li>`;
        $('#messagesList').append(listItem);
    })
})