import swaggerJsDoc from "swagger-jsdoc";

const serverUrl =
    process.env.SWAGGER_SERVER_URL || "http://localhost:3000/api/v1";

// define swagger options
const swaggerOptions: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Content Moderation API - Public Documentation",
            version: "1.0.0",
            description:
                "This is the API documentation for the Task Management application.",
        },
        server: [
            {
                url: serverUrl,
                description:
                    process.env.NODE_ENV === "production"
                        ? "Production Server"
                        : "Local Server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    // create public route
    apis: ["./src/api/v1/routes/publicRoutes.ts"],
};

// Initialize Swagger JSDoc object
export const generateSwaggerDocs = (): object => {
    return swaggerJsDoc(swaggerOptions);
};