//import { io } from 'socket.io-client';
// console.log('test')
// const socket = io('http://localhost:3000');
// console.log(socket);

(()=>{
    console.log('test')
    const socket = io('http://localhost:3000');
    console.log(socket);
})();

// Socket event listeners >>> listen to events from the server 'response from server >>callback
//socket.on('/root/welcome', onWelcome);
//socket.on('/root/join_room', onJoinRoom);

// Socket Event handlers >>>  sending data to server
function sendMessage (data) {
    // Respond with a message including this clients' id sent from the server
    socket.on('/root/new_message', sendMessage);
    socket.emit('/root/welcome', {id: data.id});
};



// Helper functions
function addMessage(message) {
    const text = document.createTextNode(message),
        el = document.createElement('li'),
        messages = document.getElementById('messages');

    el.appendChild(text);
    messages.appendChild(el);
};

// function sendMessage(e) {
//     e.preventDefault();
//     const value = input.value;
//     input.value="";
//     //socket.io > emit
//   }