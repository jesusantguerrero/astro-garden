import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

const isSeedLink = (element, includeUrl) => {
    return element.nodeName == 'A' && true || (element.href && element.href.includes(includeUrl));
}

export const seedLinks = (includeUrl) => {
    const links = document.querySelector('section');
    links.addEventListener('mouseover', async (event) => {
        if (isSeedLink(event.target, includeUrl)) {
            let tip; 
            tip = tippy(event.target, {
                theme: 'light',
                content: 'Loading...',
                allowHTML: true,
                inertia: true,
                plugins: [animateFill, followCursor],
                placement: 'auto-end',
                showOnCreate: true,
                maxWidth: 740,
                onShow: async (instance) => {
                    hideAll();
                    const data = await fetch(event.target.href)
                    .then(data => data.status == 200 ? data.text() : data.statusText)
                    .then(data => data)
                    instance.setContent(data);
                    
                },
                onHidden: () => {
                    tip.destroy();
                }
            });
        }
    })
}
