export const techStacks = {
    frontend: {
        reactVirtualized: { label: "React Virtualized", value: "react-virtualized" },
        socketIoClient: { label: "Socket.io Client", value: "socket.io-client" },
        reactRouterDom: { label: "React Router DOM", value: "react-router-dom" },
        reactHookForm: { label: "React Hook Form", value: "react-hook-form" },
        reactHotToast: { label: "React Hot Toast", value: "react-hot-toast" },
        reactToastify: { label: "React Toastify", value: "react-toastify" },
        reactLightbox: { label: "React Lightbox", value: "react-lightbox" },
        reactDropzone: { label: "React Dropzone", value: "react-dropzone" },
        reduxToolkit: { label: "Redux Toolkit", value: "@reduxjs/toolkit" },
        tanstackQuery: { label: "Tanstack Query", value: "tanstack-query" },
        framerMotion: { label: "Framer Motion", value: "framer-motion" },
        apolloClient: { label: "Apollo Client", value: "apollo-client" },
        tailwindCss: { label: "Tailwind CSS", value: "tailwind-css" },
        lucideReact: { label: "Lucide React", value: "lucide-react" },
        uploadthing: { label: "UploadThing", value: "uploadthing" },
        materialUi: { label: "Material UI", value: "material-ui" },
        reactEmail: { label: "React Email", value: "react-email" },
        canvasApi: { label: "Canvas API", value: "canvas-api" },
        reactGa4: { label: "React GA4", value: "react-ga4" },
        dndKit: { label: "DND Kit", value: "@dnd-kit/core" },
        xyflow: { label: "XY Flow", value: "@xyflow/react" },
        chakraUi: { label: "Chakra UI", value: "chakra-ui" },
        fabricJs: { label: "Fabric.js", value: "fabric-js" },
        shadcnUi: { label: "Shadcn UI", value: "shadcn-ui" },
        recharts: { label: "ReCharts", value: "recharts" },
        dateFns: { label: "Date FNS", value: "date-fns" },
        threeJs: { label: "Three.js", value: "three-js" },
        chartJs: { label: "Chart.js", value: "chart-js" },
        tippyJs: { label: "Tippy.js", value: "tippy.js" },
        daisyUI: { label: "Daisy UI", value: "daisyui" },
        zustand: { label: "Zustand", value: "zustand" },
        eslint: { label: "Eslint", value: "eslint" },
        biome: { label: "Biome", value: "biome" },
        axios: { label: "Axios", value: "axios" },
        ts: { label: "TypeScript", value: "ts" },
        sass: { label: "SASS", value: "sass" },
        html: { label: "HTML", value: "html" },
        vite: { label: "Vite", value: "vite" },
        css: { label: "CSS", value: "css" },
    },

    backend: {
        aiIntegration: { label: "AI Integration", value: "ai-integration" },
        apolloServer: { label: "Apollo Server", value: "apollo-server" },
        cookieParser: { label: "Cookie Parser", value: "cookie-parser" },
        jsonwebtoken: { label: "JSON Web Token", value: "jsonwebtoken" },
        httpStatus: { label: "HTTP Status", value: "http-status" },
        cloudinary: { label: "Cloudinary", value: "cloudinary" },
        expressJs: { label: "Express.js", value: "express-js" },
        webSocket: { label: "Web Socket", value: "web-socket" },
        kindeAuth: { label: "Kinde Auth", value: "kinde-auth" },
        rateLimit: { label: "Rate Limit", value: "ratelimit" },
        socketIo: { label: "Socket.IO", value: "socket.io" },
        mailtrap: { label: "MailTrap", value: "mailtrap" },
        postgres: { label: "Postgres", value: "postgres" },
        firebase: { label: "Firebase", value: "firebase" },
        mongoose: { label: "Mongoose", value: "mongoose" },
        mongodb: { label: "MongoDB", value: "mongodb" },
        webhook: { label: "Webhook", value: "webhook" },
        graphql: { label: "GraphQL", value: "graphql" },
        slugify: { label: "Slugify", value: "slugify" },
        neonDb: { label: "Neon DB", value: "neon-db" },
        nodeJs: { label: "Node.js", value: "node-js" },
        multer: { label: "Multer", value: "multer" },
        openai: { label: "Open-AI", value: "openai" },
        render: { label: "Render", value: "render" },
        convex: { label: "Convex", value: "convex" },
        stripe: { label: "Stripe", value: "stripe" },
        prisma: { label: "Prisma", value: "prisma" },
        clerk: { label: "Clerk", value: "clerk" },
        cron: { label: "Cron Job", value: "cron" },
        web3: { label: "Web3", value: "web3" },
        cors: { label: "CORS", value: "cors" },
        ejs: { label: "EJS", value: "ejs" },
        joi: { label: "Joi", value: "joi" },
        llm: { label: "LLM", value: "llm" },
        bun: { label: "Bun", value: "bun" },
    },

    common: {
        apiIntegration: { label: "API Integration", value: "api-integration" },
        reactJs: { label: "React.js", value: "react-js" },
        nextJs: { label: "Next.js", value: "next-js" },
        js: { label: "JavaScript", value: "js" },
    },
};

// ==========================================
// হেল্পার ফাংশন (UI এবং ভ্যালিডেশনের জন্য)
// ==========================================

// ১. সব টেকনোলজির একটি ফ্ল্যাট অ্যারে পাওয়ার জন্য (UI ম্যাপিংয়ের কাজে লাগে)
export const getAllTechs = () => {
    const techs = [];

    // Iterate through each category group (common, frontend, backend)
    Object.entries(techStacks).forEach(([category, items]) => {
        Object.values(items).forEach((tech) => {
            // Spread the tech object and explicitly add the category name
            techs.push({ ...tech, category });
        });
    });

    return techs;
};

// ২. সব ভ্যালিড স্ট্রিং ভ্যালু পাওয়ার জন্য (ডাটাবেস ভ্যালিডেশনের কাজে লাগে)
export const getAllTechValues = () => getAllTechs().map((tech) => tech.value);

// ৩. নির্দিষ্ট ক্যাটাগরির টেক পাওয়ার জন্য (যেমন: শুধু ফ্রন্টএন্ড)
export const getTechsByCategory = (category) => {
    if (category === "all") return getAllTechs();
    return Object.values(techStacks[category] || {});
};



export const projectTypes = {
    all: { label: "All", value: "all" },
    frontend: { label: "Frontend", value: "frontend" },
    fullstack: { label: "Full Stack", value: "fullstack" },
};

// হেল্পার: UI-তে ম্যাপ করার জন্য অ্যারে আকারে পাওয়া
export const getAllProjectTypes = () => Object.values(projectTypes);

// হেল্পার: ভ্যালিডেশনের জন্য শুধু ভ্যালুগুলো পাওয়া
export const getProjectTypeValues = () => Object.values(projectTypes).map((type) => type.value);