document.getElementById('adminForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newResult = {
        studentName: this[1].value,
        className: this[2].value,
        date: new Date(this[3].value).toLocaleDateString('ar-EG'),
        details: this[4].value
    };
    
    const existingResults = JSON.parse(localStorage.getItem('results')) || [];
    existingResults.push(newResult);
    localStorage.setItem('results', JSON.stringify(existingResults));
    
    alert('تم الحفظ بنجاح');
    this.reset();
});