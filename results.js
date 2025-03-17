const results = JSON.parse(localStorage.getItem('results')) || [];
const container = document.getElementById('results');

results.forEach(result => {
    container.innerHTML += `
        <div class="result-item">
            <h3>${result.studentName}</h3>
            <p>الحلقة: ${result.className}</p>
            <p>التاريخ: ${result.date}</p>
        </div>
    `;
});