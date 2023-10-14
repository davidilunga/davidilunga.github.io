const searchBar = document.getElementById('searchBar');

function Project(project_img, project_title, project_text,project_stack, project_link) {
    this.project_img = project_img;
    this.project_title = project_title;
    this.project_text = project_text;
    this.project_stack = project_stack;
    this.project_link = project_link;
    this.project_live = project_live;
}

function Project(project_img, project_title, project_text,project_stack, project_link,project_live_url, project_live) {
    this.project_img = project_img;
    this.project_title = project_title;
    this.project_text = project_text;
    this.project_stack = project_stack;
    this.project_link = project_link;
    this.project_live_url = project_live_url;
    this.project_live = project_live;
}

const projects_list = [];

let projects_data = new Project('Images/Projects/NET-Finance_Manager.png', '.NET-Finance Management System', 'A management system that allows you to add contacts to your list, view your contacts, and send/receive money. With enough transactions, the applications can run analgorithm to provide predictions based on previous spending.',['.NET', 'XAML', 'C#', 'JSON'], 'https://github.com/davidilunga/.NET-Finance-Management-System');
projects_list.push(projects_data);

projects_data = new Project('Images/Projects/DashboardProject.png', 'Java Dashboard Project', "Data dashboards have become very useful when analysing large sectors of information. They consolidate and display data in a visual format, making it easier for people to understand and with the use of Java and it's integration, it was possible.",['Java', 'SQLite', 'Excel'], 'https://github.com/davidilunga/Software-Group-Project');
projects_list.push(projects_data);

projects_data = new Project('Images/Projects/Portfolio.png', 'Portfolio V1', "Online portfolios are dynamic showcases of one's work, skills, and achievements, often made with a combination of HTML for structuring, CSS for styling and layout, and JavaScript for adding and enhancing the UI and UX.",['HTML', 'CSS', 'JavaScript'], 'https://github.com/davidilunga/davidilunga.github.io');
projects_list.push(projects_data);

projects_data = new Project('Images/Projects/Histogram.png', 'Histogram Visualizer', "This Histogram Visualiser. It reads inputs made by the user and sorts them out into allocated marking groups. When decided by the user, the script will create both a horizontal and vertical histograms to display the information.",['Python'], 'https://github.com/davidilunga/Histogram-Visualizer');
projects_list.push(projects_data);

projects_data = new Project('Images/Projects/Encoding-and-Decoding.png', 'String Encoder & Decoder', "Python's ease of use allows it to be a great tool to make fun projects. A coded take on a Caesar Cipher the can shift the letters in various word & phrases using a given shift number; ranging from 1 - 26 (the full alphabet).",['Python'], 'https://github.com/davidilunga/String-Encoder-and-Decoder');
projects_list.push(projects_data);

projects_data = new Project('Images/Projects/Vehicle-Manager.png', 'Vehicle Management System', "A system capable of simulating users reserving parking spaces for vehicles and releasing them from the database. It employs a text file storage mechanism, enabling users to save and load their progress seamlessly.",['Java'], 'https://github.com/davidilunga/Vehicle-Manager');
projects_list.push(projects_data);

projects_data = new Project('Images/Projects/AirportSeatBooking.png', 'Airport Seat Booking System', "A project that can simulate users booking seats on an airplane, as well as removing their seats from the registry. It utilizes a text file saving system to store the information, so you can save it & load it from where you left off, giving you a seamless experience.",['Java'], 'https://github.com/davidilunga/Airport-Seat-Booking-System');
projects_list.push(projects_data)

const languages = [
    { name: '.NET'},
    { name: 'XAML'},
    { name: 'C#'},
    { name: 'JSON'},
    { name: 'React'},
    { name: 'CSS'},
    { name: 'API'},
    { name: 'Java'},
    { name: 'SQLite'},
    { name: 'HTML'},
    { name: 'JavaScript'},
    { name: 'Python'},
    { name: 'Excel'},
]

searchBar.addEventListener('focus', (e) => {
    searchBar.addEventListener('keyup', (e) => {
        if (e.key === 'Enter'){
            updateProjects();
        } else {

        }
    });
});


function search() {
    updateProjects();
}

function clearSearch(){
    searchBar.value = "";
    updateProjects();
}

function updateProjects() {
    const filtered_list = [];
    if (searchBar.value.trim().length > 0){
        for (var i = 0; i < projects_list.length; i++) {
            let element = projects_list[i];
            for (var j = 0; j < element.project_stack.length; j++) {
                if (element.project_stack[j].toLowerCase() == (searchBar.value.toLowerCase())) {
                    filtered_list.push(element);
                    break;
                }
            }
        }

        generateProjects(filtered_list);

    } else if (searchBar.value.trim() == '') {
        generateProjects(projects_list);
    } else {

    }
}

function generateProjects(list){
    const projects_container = document.querySelector('.projects-container .row');
    const card_size = document.createElement('div');
    card_size.classList.add('col-lg-6');

    const svgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github">
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
            </path>
        </svg>`;

    const svgLive = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link">
        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
        <path d="M11 13l9 -9"></path>
        <path d="M15 4h5v5"></path>
    </svg>`;
    /*--------------------------------------------------------------------------------*/
    // Clear all children before appending new ones
    while (projects_container.firstChild) {
        projects_container.removeChild(projects_container.lastChild);
    }
    /*--------------------------------------------------------------------------------*/
    for (var i = 0; i < list.length; i++) {
        const card_size = document.createElement('div');
        card_size.classList.add('col-lg-6');

        var project = list[i];
        var project_card = document.createElement('div');
        project_card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = project.project_img;
        image.alt = project.project_title;
        project_card.appendChild(image);

        const card_body = document.createElement('div');
        card_body.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.innerText = project.project_title;
        card_body.appendChild(title);

        const text = document.createElement('p');
        text.classList.add('card-text');
        text.innerText = project.project_text;
        card_body.appendChild(text);

        const stack = document.createElement('div');
        stack.classList.add('stack');

        for (var j = 0; j < project.project_stack.length; j++) {
            const stack_item = document.createElement('p');
            stack_item.innerHTML = project.project_stack[j];
            stack.appendChild(stack_item);
        }

        card_body.appendChild(stack);

        const link = document.createElement('a');
        link.href = project.project_link;
        link.target = '_blank';

        link.innerHTML = 'Code ' + svgCode;

        card_body.appendChild(link);

        if (project.project_live != null && project.project_live_url != null && project.project_live != "" && project.project_live_url != "")  {
            const live = document.createElement('a');
            live.href = project.project_live_url;
            live.target = '_blank';

            live.innerHTML = 'Live ' + svgLive;

            card_body.appendChild(live);
        }

        project_card.appendChild(card_body);
        card_size.appendChild(project_card);
        projects_container.appendChild(card_size);
    }

}
