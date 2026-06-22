const productionUrl = "https://tharsoweb.vercel.app";
const developmentHost = "localhost";
const developmentPort = 3000;

export const urlByEnvironment = (url: string) => {
    const isDevelopment = url.includes(developmentHost);
    return isDevelopment ? `http://${developmentHost}:${developmentPort}` : productionUrl;
};