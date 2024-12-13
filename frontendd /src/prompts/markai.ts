export const markai = {
    model: "gpt-4o",
  temperature: 0,
  systemPrompt: "Generates a marketing plan or explains marketing strategies.",
  userPrompt: (marketingProblem: string) => `You are a helpful assistant specialized in generating marketing plans and strategies. ${marketingProblem}`,
  responseFormat: {
    type: "json_schema",
    json_schema: {
      name: "marketingStrategyResponse",
      strict: true,
      schema: {
        type: "object",
        required: ["strategySummary", "detailedPlan"],
        properties: {
          strategySummary: {
            type: "string",
            description: "A high-level summary of the marketing strategy."
          },
          detailedPlan: {
            type: "object",
            required: ["targetAudience", "budgetBreakdown", "actionItems"],
            properties: {
              targetAudience: {
                type: "object",
                required: ["age_range", "interests", "location"],
                properties: {
                  age_range: {
                    type: "string",
                    description: "Age range of the target audience."
                  },
                  interests: {
                    type: "array",
                    description: "Interests of the target audience.",
                    items: {
                      type: "string",
                      description: "Interest or characteristic of the audience."
                    }
                  },
                  location: {
                    type: "string",
                    description: "Geographic location of the target audience."
                  }
                },
                additionalProperties: false
              },
              budgetBreakdown: {
                type: "object",
                description: "Detailed breakdown of the budget allocation.",
                properties: {
                  totalBudget: {
                    type: "number",
                    description: "Total budget allocated for the marketing plan."
                  },
                  allocations: {
                    type: "array",
                    description: "List of budget allocations for various marketing activities.",
                    items: {
                      type: "object",
                      properties: {
                        category: {
                          type: "string",
                          description: "Category of marketing activity (e.g., Ads, Social Media, Events)."
                        },
                        amount: {
                          type: "number",
                          description: "Amount allocated to this category."
                        }
                      },
                      required: ["category", "amount"]
                    }
                  }
                },
                required: ["totalBudget", "allocations"]
              },
              actionItems: {
                type: "array",
                description: "List of specific marketing actions or tasks to be executed.",
                items: {
                  type: "string",
                  description: "Specific action item for the marketing plan."
                }
              }
            },
            additionalProperties: false
          }
        },
        additionalProperties: false,
        $schema: "http://json-schema.org/draft-07/schema#"
      }
    }
  },
  tools: [
    {
      "type": "function",
      "function": {
        "name": "marketing_strategy",
        "description": "Generate a function that can solve marketing problems, draft marketing plans, optimize marketing plans, and handle anything related to marketing.",
        "parameters": {
          "type": "object",
          "required": [
            "background_info",
            "budget",
            "marketing_goals",
            "target_audience"
          ],
          "properties": {
            "background_info": {
              "type": "string",
              "description": "Background information relevant to the marketing problem or strategy."
            },
            "budget": {
              "type": "number",
              "description": "Total budget allocated for the marketing plan."
            },
            "marketing_goals": {
              "type": "array",
              "description": "List of specific goals for the marketing strategy.",
              "items": {
                "type": "string",
                "description": "Specific marketing goal"
              }
            },
            "target_audience": {
              "type": "object",
              "properties": {
                "age_range": {
                  "type": "string",
                  "description": "Age range of the target audience."
                },
                "interests": {
                  "type": "array",
                  "description": "Interests of the target audience.",
                  "items": {
                    "type": "string",
                    "description": "Interest or characteristic of the audience."
                  }
                },
                "location": {
                  "type": "string",
                  "description": "Geographic location of the target audience."
                }
              },
              "additionalProperties": false,
              "required": [
                "age_range",
                "interests",
                "location"
              ]
            }
          },
          "additionalProperties": false
        },
        "strict": true
      }
    }
  ],

}