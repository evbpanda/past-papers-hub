const yearArray = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

const papers = [
    { sub: 'ol_math', name: 'O/L Maths', years: yearArray },
    { sub: 'ol_science', name: 'O/L Science', years: yearArray },
    { sub: 'ol_english', name: 'O/L English', years: yearArray },
    { sub: 'ol_sinhala', name: 'O/L Sinhala', years: yearArray },
    { sub: 'ol_history', name: 'O/L History', years: yearArray },
    { sub: 'ol_ict', name: 'O/L ICT', years: yearArray },
    { sub: 'al_combined', name: 'A/L Combined Maths', years: yearArray },
    { sub: 'al_physics', name: 'A/L Physics', years: yearArray },
    { sub: 'al_chemistry', name: 'A/L Chemistry', years: yearArray },
    { sub: 'al_ict_m', name: 'A/L ICT', years: yearArray }
];

window.onload = () => {
    papers.forEach(p => {
        const container = document.getElementById(`list_${p.sub}`);
        if (container) {
            container.innerHTML = p.years.map(year => `
                <div class="year-item">
                    <span class="paper-title">📄 ${year} ${p.name}</span>
                    <div class="btn-group">
                        <button class="dl-btn" onclick="window.location.href='papers/${p.sub}_${year}.pdf'">
                            ⬇️ Download
                        </button>
                        <button class="pre-btn" onclick="openPreview('papers/${p.sub}_${year}.pdf')">
                            👁️ Preview
                        </button>
                    </div>
                </div>
            `).join('');
        }
    });
};

// Tabs, Streams ani Sections functions (Baki same ahet)
function showTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    btn.classList.add('active');
}

function showStream(streamId) {
    document.querySelectorAll('.stream-group').forEach(sg => sg.style.display = 'none');
    document.querySelectorAll('.inner-content').forEach(ic => ic.style.display = 'none');
    document.getElementById(streamId).style.display = 'block';
}

function showSection(sectionId) {
    document.querySelectorAll('.inner-content').forEach(s => s.style.display = 'none');
    const target = document.getElementById(sectionId);
    if(target) target.style.display = 'block';
}

function searchPapers() {
    let input = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll('.year-item');
    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "flex" : "none";
    });
}

function openPreview(url) {
    document.getElementById("pdfFrame").src = url;
    document.getElementById("pdfModal").style.display = "block";
}

function closePreview() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfFrame").src = "";
}