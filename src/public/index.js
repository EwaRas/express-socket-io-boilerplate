const form = document.querySelector('#form');
const input = document.querySelector('#chat-message');
const button = document.querySelector('#chat-button');
const socketCount = document.querySelector('#socket-count');
const clientId = document.querySelector('#socket-id');
const homeLink = document.querySelector('#home-section-link');
const docsLink = document.querySelector('#documentation-link');
const homeSection = document.querySelector('#home-section');
const docsSection = document.querySelector('#documentation');

const socket = io('http://localhost:3000');
socket.emit('/root/new_socket_connected');

// Socket events
// Whenever the server emits '/root/welcome' event, update website
socket.on('/root/welcome', welcomeUser);
// Whenever the server emits '/root/update_socket_count' event, updates number of sockets connected
socket.on('root/update_socket_count', updateSocketCount);
// Whenever the server emits '/root/update_chat' event, add message to the chat
socket.on('/root/update_chat', addMessage);

// Socket event handlers
function addMessage (data) {
  const { message, sender } =  data;
  const text = document.createTextNode(message);
  const listItem = document.createElement('li');
  sender === 'user'
    ? listItem.classList.add('list-item', 'right')
    : listItem.classList.add('list-item', 'left');
  const chat = document.getElementById('chat-list');
  listItem.appendChild(text);
  sender === 'user'
    ? setTimeout(() => chat.appendChild(listItem), 200)
    : setTimeout(() => chat.appendChild(listItem), 1000);
}

function welcomeUser (data) {
  const { message, sender, id } = data;
  addMessage({ message, sender });
  clientId.innerHTML = id;
}

function updateSocketCount (data) {
  const { clientCount } = data;
  socketCount.innerHTML = clientCount;
}

// Sends a chat message to the server
function sendMessage (e) {
  e.preventDefault();
  const value = input.value;
  addMessage({message: value, sender: 'user'});
  input.value = '';
  socket.emit('/root/new_message', value);
}

// Helper functions
function goToHomepage (e) {
  e.preventDefault();
  homeSection.style.width = '100vw';
  homeSection.style.opacity = '1';
  docsSection.style.width = '0';
  docsSection.style.opacity = '0';
}

function goToDocumentation (e) {
  e.preventDefault();
  docsSection.style.width = '100vw';
  docsSection.style.opacity = '1';
  homeSection.style.width = '0';
  homeSection.style.opacity = '0';
}

// Reactive elements > Event listeners
form.addEventListener('submit', sendMessage);
button.addEventListener('click', sendMessage);
homeLink.addEventListener('click', goToHomepage);
docsLink.addEventListener('click', goToDocumentation);

