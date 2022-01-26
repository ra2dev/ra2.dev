import { loginHandler } from "@storyofams/next-password-protect";

export default loginHandler(process.env.APP_PASSWORD, {
    cookieName: "x-beta-test-check",
    cookieSameSite: false
});
