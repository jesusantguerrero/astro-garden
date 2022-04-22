export default function (options = '/garden/seeds' ) {
    return {
        name: 'astro-garden',
        hooks: {
            "astro:config:setup": ({ injectScript }) => {
                injectScript(
                    `page`,
                    `import { seedLinks } from "astro-garden/client.js"; seedLinks('${options}');`
                );
            }
        }
    }
}