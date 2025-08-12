// Chat UI JavaScript - Minimal implementation
class ChatUI {
    constructor() {
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.conversationStep = 0;
        
        this.init();
    }

    init() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Start conversation automatically
        setTimeout(() => {
            this.addMessage("Hello, what is your name and age?", 'doctor');
        }, 1000);
    }

    addMessage(text, sender) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Add time indicator if it's the first message or different time
        const lastMessage = this.messagesContainer.lastElementChild;
        if (!lastMessage || !lastMessage.dataset.time || lastMessage.dataset.time !== time) {
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time-indicator';
            timeDiv.textContent = time;
            timeDiv.dataset.time = time;
            this.messagesContainer.appendChild(timeDiv);
        }

        // Create message group
        const messageGroup = document.createElement('div');
        messageGroup.className = `message-group ${sender === 'user' ? 'sent' : ''}`;

        // Create avatar
        const avatar = document.createElement('div');
        avatar.className = `avatar ${sender === 'doctor' ? 'doctor' : 'user'}`;
        avatar.textContent = sender === 'doctor' ? 'Dr' : 'You';

        // Create message bubble
        const bubble = document.createElement('div');
        bubble.className = `message-bubble ${sender === 'user' ? 'sent' : 'received'}`;
        bubble.textContent = text;

        messageGroup.appendChild(avatar);
        messageGroup.appendChild(bubble);
        this.messagesContainer.appendChild(messageGroup);

        this.scrollToBottom();
    }

    sendMessage() {
        const text = this.messageInput.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        this.messageInput.value = '';

        // Auto-respond based on conversation step
        setTimeout(() => {
            if (this.conversationStep === 0) {
                this.addMessage("Are you currently pregnant or planning to be pregnant?", 'doctor');
                this.conversationStep = 1;
            } else if (this.conversationStep === 1) {
                this.addMessage("Thank you for that information. How can I help you today?", 'doctor');
                this.conversationStep = 2;
            }
        }, 1000);
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatUI();
});