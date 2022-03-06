//create employee summary
const generateEmployee = aboutEmployee => {
    if (!aboutEmployee) {
        return '';
    }
    return `
        <section class="my-3" id="about">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About My Team Member</h2>
            <p>${aboutEmployee}</p>
        </section>
    `;
};