import { passwordCheckHandler } from "@storyofams/next-password-protect";

export default passwordCheckHandler(process.env.APP_PASSWORD, {
    cookieName: "x-beta-test-check",
});