//create manager summary
const generateManager= aboutManager => {
    if (!aboutManager) {
        return '';
    }
    return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${aboutManager}</p>
            </div>
        </div>
    </section>
    `;
};

//create employee summary
const generateEmployee = aboutEmployee => {
    if (!aboutEmployee) {
        return '';
    }
    return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${aboutEmployee}</p>
            </div>
        </div>
    </section>
    `;
};