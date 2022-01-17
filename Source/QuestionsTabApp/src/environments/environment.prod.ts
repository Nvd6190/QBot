export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-testing.azurewebsites.net/api/Request/",
    selfUrl: "https://qbot-testing-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "59304d84-3df0-45e2-8834-de4654ae8758",
        clientId: "65a011fb-6a74-4f3b-ab89-f21f100e5fc6",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
