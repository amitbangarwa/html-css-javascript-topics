const mutationObserver = new MutationObserver(entries => {
    console.log({entries});
});

const parent = document.querySelector(".parent");

// mutationObserver.observe(parent, {
//     //childList: true, // to observe child changes
//     attributes: true,
//     attributeOldValue: true,
//     attributeFilter: ['title']
// });

// we  have to observe on the node instead of element because element doesn't have the text
mutationObserver.observe(parent.children[0].childNodes[0], {
    characterData: true,
    characterDataOldValue: true,
    subtree: true, // will allow the nested observer
});

//mutationObserver.disconnect(); // to stop observing

//parent.children[0].remove();

//parent.id = "New Id";
