
import { AstroIntegration } from "astro";


export default function (options?: Record<string, any>): AstroIntegration {
    return {
        name: 'astro-garden',
        hooks: {
            "astro:config:setup": ({ injectScript }) => {
                injectScript(
                    `page`,
                    `import { addListeners } from "astro-garden/client.js"; addListeners(${options});`
                );
            }
        }
    }
}