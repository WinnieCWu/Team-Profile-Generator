//create manager summary
const generateManager= aboutManager => {
    if (!aboutManager) {
        return '';
    }
    return `
        <section class="my-3" id="aboutManager">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About Team Manager</h2>
            <p>${aboutManager}</p>
        </section>
    `;
};

//create employee summary
const generateEmployee = aboutEmployee => {
    if (!aboutEmployee) {
        return '';
    }
    return `
        <section class="my-3" id="aboutEmployee">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About My Team Member</h2>
            <p>${aboutEmployee}</p>
            <p>
        </section>
    `;
};