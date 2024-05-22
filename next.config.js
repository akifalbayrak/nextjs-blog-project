const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase == PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "akif",
                mongodb_password: "6w8qEvujS07THhr0",
                mongodb_clustername: "cluster0",
                mongodb_database: "my-blog-dev",
            },
        };
    }
    return {
        env: {
            mongodb_username: "akif",
            mongodb_password: "6w8qEvujS07THhr0",
            mongodb_clustername: "cluster0",
            mongodb_database: "my-blog",
        },
    };
};
