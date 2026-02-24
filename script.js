// all dataa
let jobs = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work closely with design and backend teams.", status: "not-applied" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$60,000 - $100,000", description: "Create stunning web experiences for high-profile clients. Must have a strong portfolio and experience with modern web design trends.", status: "not-applied" },
    { id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$120,000 - $160,000", description: "Transform complex data into compelling visual stories. Requires solid D3.js, React, and strong analytical thinking.", status: "not-applied" },
    { id: 4, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $180,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "not-applied" },
    { id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Design intuitive and functional user interfaces for our suite of products. Strong grasp of UX laws and frontend development required.", status: "not-applied" }
   
];

let currentTab = "all";

// Elments
const jobsContainer = document.getElementById('jobs-container');
const emptyState = document.getElementById('empty-state');
const statTotal = document.getElementById('stat-total');
const statInterview = document.getElementById('stat-interview');
const statRejected = document.getElementById('stat-rejected');
const tabJobCount = document.getElementById('tab-job-count');
const tabButtons = document.querySelectorAll('.tab-btn');


function renderUI() {
 
        const filteredJobs = jobs.filter(job => {
            if (currentTab === 'all') return true;
            return job.status === currentTab;
        });


    tabJobCount.textContent = `${filteredJobs.length} Jobs`;


    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = '';
        jobsContainer.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
    } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');
        jobsContainer.classList.remove('hidden');
        
        // HTML for job

        jobsContainer.innerHTML = filteredJobs.map(job => {
            
            let badgeClass = "badge-outline text-slate-500";
            let badgeText = "NOT APPLIED";
            if (job.status === 'interview') { 
                badgeClass = "badge-success text-white border-transparent"; badgeText = "INTERVIEW"; 
            }
            if (job.status === 'rejected') {
                badgeClass = "badge-error text-white border-transparent"; badgeText = "REJECTED"; 
            }

            return `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-slate-800">${job.companyName}</h3>
                    
                    <button onclick="deleteJob(${job.id})" class="btn btn-sm btn-ghost hover:bg-red-50">
                        <img src="delete.png" alt="Delete Job" class="w-5 h-5 object-contain" />
                    </button>

                </div>
                <p class="text-sm font-medium text-slate-600 mb-2">${job.position}</p>
                <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
                    <span>${job.location}</span>
                    <span>•</span>
                    <span>${job.type}</span>
                    <span>•</span>
                    <span>${job.salary}</span>
                </div>
                <div class="mb-4">
                    <span class="badge ${badgeClass} text-[10px] font-bold tracking-wider">${badgeText}</span>
                </div>
                <p class="text-sm text-slate-600 mb-6 leading-relaxed">${job.description}</p>
                
                <div class="flex space-x-3">
                    <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-sm ${job.status === 'interview' ? 'btn-success text-white' : 'btn-outline btn-success'}">Interview</button>
                    <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-sm ${job.status === 'rejected' ? 'btn-error text-white' : 'btn-outline btn-error'}">Rejected</button>
                </div>
            </div>
            `;
        }).join('');
    }


        
}