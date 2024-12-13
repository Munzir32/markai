export const markai = {
    model: "gpt-4o",
  temperature: 0,
  systemPrompt: "Generates a marketing plan or explains marketing strategies.",
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