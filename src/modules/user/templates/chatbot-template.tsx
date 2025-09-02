import { Send, X } from "lucide-react";

const ChatbotTemplate = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">Chat Support</h1>
          <button>
            <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </header>

        {/* Main chat area */}
        <main className="flex-1 flex flex-col p-6 overflow-y-auto space-y-4">
          {/* Bot message */}
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xl text-sm">
              Hi! How can I help you today?
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xl text-sm">
              Hello! I have a question.
            </div>
          </div>

          {/* More example messages */}
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xl text-sm">
              Sure! Please tell me your question.
            </div>
          </div>
        </main>

        {/* Input area */}
        <footer className="bg-white border-t border-gray-200 p-4 flex items-center space-x-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Send className="w-5 h-5 text-white" />
          </button>
        </footer>
      </div>
    </>
  );
};

export default ChatbotTemplate;
