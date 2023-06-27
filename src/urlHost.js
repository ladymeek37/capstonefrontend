export const URL_HOST = 
    process.env.NODE_ENV === "production"
        ? "https://ladys-proxy.ladyjmeek.workers.dev/?targetUrl=http://capstonebackend-env.eba-djw3wpfj.us-east-2.elasticbeanstalk.com"
        : "http://127.0.0.1:8000";