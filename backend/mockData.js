
const getRandomId = () => Math.random().toString(36).substring(2, 10);

const sessions = [
  {
    id: "sess_101",
    title: "Introduction Chat",
  },
  {
    id: "sess_102",
    title: "Product Details Inquiry",
  },
  {
    id: "sess_103",
    title: "Learning Resources",
  }
];

const sessionHistory = {
  sess_101: [
    {
      sender: "user",
      message: "What is Lumibyte?",
      timestamp: "2025-01-12T10:00:00Z"
    },
    {
      sender: "bot",
      message: "Lumibyte is a technology-driven company specializing in web and AI solutions.",
      table: [
        { Feature: "Industry", Value: "Software" },
        { Feature: "Specialization", Value: "Web & AI" },
        { Feature: "Founded", Value: "2020" },
      ],
      timestamp: "2025-01-12T10:00:01Z"
    }
  ],

  sess_102: [
    {
      sender: "user",
      message: "List some product features.",
      timestamp: "2025-01-12T12:00:00Z"
    },
    {
      sender: "bot",
      message: "Here are the key product features:",
      table: [
        { Feature: "Analytics", Status: "Enabled" },
        { Feature: "AI Insights", Status: "Beta" },
        { Feature: "Reporting", Status: "Available" },
      ],
      timestamp: "2025-01-12T12:00:01Z"
    }
  ],

  sess_103: [
    {
      sender: "user",
      message: "Suggest JavaScript learning resources.",
      timestamp: "2025-01-13T09:30:00Z"
    },
    {
      sender: "bot",
      message: "Here are some great JavaScript learning resources:",
      table: [
        { Resource: "MDN Docs", Type: "Documentation", Link: "https://developer.mozilla.org" },
        { Resource: "FreeCodeCamp", Type: "Course", Link: "https://freecodecamp.org" },
        { Resource: "JavaScript.info", Type: "Tutorial", Link: "https://javascript.info" },
      ],
      timestamp: "2025-01-13T09:30:01Z"
    }
  ],
};

function generateMockChatResponse(question) {
  return {
    answer: "Here is the structured data based on your question.",
    description: `You asked: "${question}". Below is the related tabular information.`,

    table: [
      { Key: "Query Length", Value: question.length },
      { Key: "Contains Question Mark", Value: question.includes("?") },
      { Key: "Category", Value: "General Query" }
    ]
  };
}

module.exports = {
  sessions,
  sessionHistory,
  generateMockChatResponse,
  getRandomId,
};
