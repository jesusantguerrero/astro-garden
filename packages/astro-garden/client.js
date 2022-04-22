import tippy, * as tippyOptions from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

const isSeedLink = (element, includeUrl) => {
    console.log(includeUrl)
    return element.nodeName == 'A' && true && (element.href && element.href.includes(includeUrl));
}

export const seedLinks = (includeUrl) => {

    window.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelector('.garden-section');
        links && links.addEventListener('mouseover', async (event) => {
            if (isSeedLink(event.target, includeUrl)) {
                let tip; 
                tip = tippy(event.target, {
                    theme: 'light',
                    content: 'Loading...',
                    allowHTML: true,
                    inertia: true,
                    placement: 'auto-end',
                    plugins: [tippyOptions.animateFill, tippyOptions.followCursor],
                    showOnCreate: true,
                    maxWidth: 740,
                    onShow: async (instance) => {
                        tippyOptions.hideAll();
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
    })
}
